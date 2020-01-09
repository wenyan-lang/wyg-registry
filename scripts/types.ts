export interface RegistryIndex {
  packages: Record<string, string>
  alias: Record<string, string>
}

export type AuthorInfo = string | {
  name: string
  url: string
}

export interface PackageInfo {
  name: string
  aliases?: string[]
  repo: string
  author?: AuthorInfo
  description?: string
}
