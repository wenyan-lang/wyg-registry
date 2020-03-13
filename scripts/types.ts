export interface RegistryIndex {
  packages: Record<string, {
    repo: string
    entry: string
    description?: string
    author?: string
    dependencies?: DependenciesDefine
    examples?: string[]
  }>
  alias: Record<string, string>
}

export type AuthorInfo = string | {
  name: string
  url: string
}

export type DependenciesDefine = Record<string, string>

export interface PackageInfo {
  name: string
  aliases?: string[]
  repo: string
  author?: AuthorInfo
  description?: string
  dependencies?: DependenciesDefine
  examples?: string[]
}
