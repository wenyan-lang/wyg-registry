import { PackageInfo } from './scripts/types'

/*
  If you would like to publish your own wenyan packages,
  Please append your package infomation to the following array
  and then make a PR for your changes.

  Name:
    The `name` should be in Chinese, you can add pinyin or English `aliases` to your packages

  REPO:
    For the `repo` field, you can set by following format:
      GitHub - `owner/name` or `github:owner/name`
      GitLab - `gitlab:owner/name`
      Bitbucket - `bitbucket:owner/name`

    If you would like specify the branch
      `owner/name#my-branch`

  EXAMPLES:
    You can provide `examples` to your packages, it can be viewed by the Online IDE and wyg homepage.
      examples: ['例一', '範例/三人行'],

    This will refer to `例一.wy` and `範例/三人行.wy` from the root for your repo.

  DEPENDENCIES:
    If your packages have dependencies to other packages, you well need to set `dependencies`
      dependencies: {
        腳本秘術: '*',
      },

    Package versioning system is not implemented yet, please leave the value to '*' for now.
*/

export const packages: PackageInfo[] = [
  {
    name: '子曰',
    repo: 'antfu/ziyue-wy',
    description: 'Cowsay for wenyan-lang',
    author: {
      name: 'antfu',
      url: 'https://github.com/antfu',
    },
    aliases: ['ziyue'],
    examples: ['例一'],
  },
  {
    name: '简体秘术',
    repo: 'github:lymslive/wyg-packages#jiantihua',
    description: 'Use simplified Chinese keywords and punctuation for wenyan-lang',
    author: {
      name: 'lymslive',
      url: 'https://github.com/lymslive/wyg-packages',
    },
    aliases: ['jiantihua'],
  },
  {
    name: '刻漏',
    repo: 'akira-cn/kelou-wy',
    description: 'JavaScript timers for wenyan-lang',
    author: {
      name: 'akira-cn',
      url: 'https://github.com/akira-cn',
    },
    aliases: ['kelou'],
  },
  {
    name: '柯裡化法',
    repo: 'akira-cn/currying-wy',
    description: 'Currying for wenyan-lang',
    author: {
      name: 'akira-cn',
      url: 'https://github.com/akira-cn',
    },
    aliases: ['currying'],
  },
  {
    name: '腳本秘術',
    repo: 'akira-cn/script-wy',
    description: 'Embed scripts into wenyan-lang',
    author: {
      name: 'akira-cn',
      url: 'https://github.com/akira-cn',
    },
    aliases: ['script'],
  },
  {
    name: '交互秘術',
    repo: 'GLanguage/jiaohu-wy',
    description: 'IO for wenyan-lang',
    author: {
      name: 'GLanguage',
      url: 'https://github.com/GLanguage',
    },
    aliases: ['jiaohu'],
    examples: ['範例/例一'],
  },
  {
    name: '質問',
    repo: 'alainsaas/prompt-wy',
    description: 'Prompt for wenyan-lang',
    author: {
      name: 'alainsaas',
      url: 'https://github.com/alainsaas',
    },
    aliases: ['prompt'],
    dependencies: {
      腳本秘術: '*',
    },
  },
  {
    name: '解析整數',
    repo: 'alainsaas/zh_parseint-wy',
    description: 'parseInt equivalent for wenyan-lang, working with both Chinese and European numerals',
    author: {
      name: 'alainsaas',
      url: 'https://github.com/alainsaas',
    },
    aliases: ['zh_parseint'],
    dependencies: {
      腳本秘術: '*',
    },
  },
  {
    name: '符經',
    repo: 'GLanguage/fujing-wy',
    description: 'Escape special characters in wenyan string',
    author: {
      name: 'GLanguage',
      url: 'https://github.com/GLanguage',
    },
    aliases: ['fujing'],
    examples: ['範例/例一'],
  },
  {
    name: '連加連乘',
    repo: 'XingZiLong/continuous-operation',
    description: 'Do continuous addition and mutiplication easily.',
    author: {
      name: 'XingZiLong',
      url: 'https://github.com/XingZiLong',
    },
    aliases: ['continuous-operation'],
    dependencies: {
      腳本秘術: '*',
    },
  },
]
