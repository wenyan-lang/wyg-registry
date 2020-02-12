import { PackageInfo } from './scripts/types'

/*
  If you would like to publish your own wenyan packages,
  Please append your package infomation to the following array
  and then make a PR for your changes.

  The `name` should be in Chinese, you can add pinyin aliases to your packages

  For the `repo` field, you can set by following format:
    GitHub - `owner/name` or `github:owner/name`
    GitLab - `gitlab:owner/name`
    Bitbucket - `bitbucket:owner/name`

  If you would like specify the branch
    `owner/name#my-branch`
*/

// No version control yet

export const packages: PackageInfo[] = [
  {
    name: '子曰',
    repo: 'antfu/ziyue-wy',
    description: 'Cowsay for Wenyan Lang',
    author: {
      name: 'antfu',
      url: 'https://github.com/antfu',
    },
    aliases: ['ziyue'],
  },
  {
    name: '简体秘术',
    repo: 'github:lymslive/wyg-packages#jiantihua',
    description: 'Use simplified Chinese keywords and punctuation for Wenyan Lang',
    author: {
      name: 'lymslive',
      url: 'https://github.com/lymslive/wyg-packages',
    },
    aliases: ['jiantihua'],
  },
  {
    name: '刻漏',
    repo: 'akira-cn/kelou-wy',
    description: 'JavaScript timers for Wenyan Lang',
    author: {
      name: 'akira-cn',
      url: 'https://github.com/akira-cn',
    },
    aliases: ['kelou'],
  },
  {
    name: '柯裡化法',
    repo: 'akira-cn/currying-wy',
    description: 'Currying for Wenyan Lang',
    author: {
      name: 'akira-cn',
      url: 'https://github.com/akira-cn',
    },
    aliases: ['currying'],
  },
  {
    name: '腳本秘術',
    repo: 'akira-cn/script-wy',
    description: 'Embed scripts into Wenyan Lang',
    author: {
      name: 'akira-cn',
      url: 'https://github.com/akira-cn',
    },
    aliases: ['script'],
  },
]
