import path from 'path'
import fs from 'fs-extra'
import stringify from 'json-stable-stringify'
import markdownit from 'markdown-it'
import { getRepoRoot, getRepoRawRoot } from '@wenyanlang/wyg'
import { packages } from '../registry-packages'
import { RegistryIndex, AuthorInfo } from './types'

const distDir = path.resolve(__dirname, '..', 'dist')

export function BuildIndex (writeToFile = true) {
  const index: RegistryIndex = {
    packages: {},
    alias: {},
  }

  for (const pkg of packages) {
    if (index.packages[pkg.name])
      throw new Error(`Package name ${pkg.name} already exists`)
    if (index.alias[pkg.name])
      throw new Error(`Package name ${pkg.name} conflicted with existing aliases`)

    index.packages[pkg.name] = {
      repo: pkg.repo,
      description: pkg.description,
      entry: `${getRepoRawRoot(pkg.repo)}/序.wy`,
      author: typeof pkg.author === 'string' ? pkg.author : pkg.author?.name,
      dependencies: pkg.dependencies,
    }

    if ((pkg.aliases || []).length > 5)
      throw new Error('Up to 5 aliases is allowed for a package')

    for (const alias of pkg.aliases || []) {
      if (index.alias[alias])
        throw new Error(`Alias ${alias} already exists`)
      if (index.packages[alias])
        throw new Error(`Alias ${alias} conflicted with existing package names`)

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
  let readme = '\n\n'

  packages.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'))

  for (const pkg of packages) {
    let list = `- [${pkg.name}](${getRepoRoot(pkg.repo)})`

    if (pkg.description)
      list += ` - ${pkg.description}`

    if (pkg.author)
      list += ` - by ${getAuthorMarkdown(pkg.author)}`

    readme += `${list}\n`
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

export function BuildRegistryIndex () {
  let md = fs.readFileSync(path.resolve(__dirname, 'index-templates', 'index.md'), 'utf-8')
  md = md.replace('<!--PACKAGES-->', BuildReadme(false))
  let html = fs.readFileSync(path.resolve(__dirname, 'index-templates', 'index.html'), 'utf-8')
  html = html.replace('<!--MD-->', markdownit().render(md))

  fs.writeFileSync(path.join(distDir, 'index.html'), html)
  fs.copyFileSync(path.resolve(__dirname, 'index-templates', '404.html'), path.join(distDir, '404.html'))
}

if (require.main === module) {
  BuildIndex()
  BuildReadme()
  BuildRedirects()
  BuildRegistryIndex()
}
