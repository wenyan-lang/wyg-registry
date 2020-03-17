import path from 'path'
import fs from 'fs-extra'
import stringify from 'json-stable-stringify'
import markdownit from 'markdown-it'
import { getRepoRoot, getRepoRawRoot } from '@wenyanlang/wyg'
import { packages } from '../registry-packages'
import { RegistryIndex, AuthorInfo } from './types'

const distDir = path.resolve(__dirname, '..', 'dist')

const MAX_ALIAS_LENGTH = 20
const MAX_NAME_LENGTH = 12
const MAX_DESC_LENGTH = 120

export function BuildIndex (writeToFile = true) {
  const index: RegistryIndex = {
    packages: {},
    alias: {},
  }

  for (const pkg of packages) {
    if (!pkg.repo)
      throw new Error(`Repo field of package "${pkg.name}" is not provided`)
    if (pkg.name.length > MAX_NAME_LENGTH)
      throw new Error(`Package name "${pkg.name}" exceed max length ${MAX_NAME_LENGTH}`)
    if (pkg.name.match(/\s/g))
      throw new Error(`Package name "${pkg.name}" contains whitespaces`)
    if (index.packages[pkg.name])
      throw new Error(`Package name "${pkg.name}" already exists`)
    if (index.alias[pkg.name])
      throw new Error(`Package name "${pkg.name}" conflicted with existing aliases`)
    if ((pkg.description?.length || 0) > MAX_DESC_LENGTH)
      throw new Error(`Description of package "${pkg.name}" exceed max length ${MAX_DESC_LENGTH}.\n"${pkg.description}"`)

    index.packages[pkg.name] = {
      repo: pkg.repo,
      description: pkg.description,
      entry: `${getRepoRawRoot(pkg.repo)}/序.wy`,
      author: typeof pkg.author === 'string' ? pkg.author : pkg.author?.name,
      dependencies: pkg.dependencies,
      examples: pkg.examples,
    }

    if ((pkg.aliases || []).length > 5)
      throw new Error('Up to 5 aliases is allowed for a package')

    for (const alias of pkg.aliases || []) {
      if (alias.length > MAX_ALIAS_LENGTH)
        throw new Error(`Alias "${alias}" exceed max length ${MAX_ALIAS_LENGTH}`)
      if (alias.match(/\s/g))
        throw new Error(`Alias "${alias}" contains whitespaces`)
      if (alias !== alias.toLowerCase())
        throw new Error(`Alias "${alias}" should be lower cases`)
      if (index.alias[alias])
        throw new Error(`Alias "${alias}" already exists`)
      if (index.packages[alias])
        throw new Error(`Alias "${alias}" conflicted with existing package names`)

      index.alias[alias] = pkg.name
    }
  }

  fs.ensureDirSync(distDir)

  if (writeToFile)
    fs.writeFileSync(path.join(distDir, 'index.json'), `${stringify(index)}\n`, 'utf-8')

  return index
}

export function getAuthorMarkdown (author: AuthorInfo) {
  if (typeof author === 'string')
    return author
  else
    return `[${author.name}](${author.url})`
}

export function BuildReadme (writeToFile = true) {
  let readme = '\n\n| Name | Alias | Description | Author |\n|---|---|---|---|\n'

  packages.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'))

  for (const pkg of packages) {
    const list = [`[${pkg.name}](${getRepoRoot(pkg.repo)})`]

    list.push((pkg.aliases || []).map(i => `\`${i}\``).join(' '))
    list.push(pkg.description ? `${pkg.description}` : '')
    list.push(pkg.author ? `${getAuthorMarkdown(pkg.author)}` : '')

    readme += `|${list.join('|')}|\n`
  }

  readme += '\n'

  if (writeToFile) {
    const readmePath = path.resolve(__dirname, '..', 'README.md')
    const raw = fs.readFileSync(readmePath, 'utf-8')
    const patched = raw.replace(/<!--package_list_start-->[\s\S]*?<!--package_list_end-->/m, `<!--package_list_start-->${readme}<!--package_list_end-->`)
    fs.writeFileSync(readmePath, patched, 'utf-8')
  }

  return readme
}

export async function BuildRedirects () {
  const entries: [string, string, number][] = []

  for (const pkg of packages) {
    const root = getRepoRawRoot(pkg.repo)
    const index = `${root}/序.wy`
    for (const name of [pkg.name, ...(pkg.aliases || [])]) {
      entries.push([
        `/pkg/${name}`,
        index,
        302,
      ])
      entries.push([
        `/pkg/${name}/*`,
        `${root}/:splat`,
        302,
      ])
    }
  }

  entries.push(['/pkg/*', '/404', 404])

  const text = entries.map(([a, b, c]) => `${encodeURI(a)}\t${b}\t${c}`).join('\n')
  fs.writeFileSync(path.join(distDir, '_redirects'), `${text}\n`, 'utf-8')
}

export function BuildRegistryHomepage () {
  let md = fs.readFileSync(path.resolve(__dirname, 'index-templates', 'index.md'), 'utf-8')
  md = md.replace('<!--PACKAGES-->', BuildReadme(false))
  let html = fs.readFileSync(path.resolve(__dirname, 'index-templates', 'index.html'), 'utf-8')
  html = html.replace('<!--MD-->', markdownit().render(md))

  fs.writeFileSync(path.join(distDir, 'index.html'), html)
  fs.copyFileSync(path.resolve(__dirname, 'index-templates', '404.html'), path.join(distDir, '404.html'))
}
