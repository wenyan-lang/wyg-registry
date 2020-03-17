# 文淵閣總目, wyg-registry

Packages registry for [wyg](https://github.com/wenyan-lang/wyg)

### 📦 Publish Your Own Packages

- Create a git repo on Github/Gitlab/Bitbucket
- Commit your code and make sure `序.wy`(as entry) in the root.
- Clone this repo and modify the [`registry-packages.ts`](https://github.com/wenyan-lang/wyg-registry/blob/master/registry-packages.ts) and add your package info. The details is included in the file as comments.
- Create a PR of your changes.
- Once the PR got merged, your package will publish automatically!

You can also check out [`子曰<antfu/ziyue-wy>`](https://github.com/antfu/ziyue-wy) as an example.

## Available Packages

<!--GENERATED_DO_NOT_MODIFY-->
<!--package_list_start-->

| Name | Alias | Description | Author |
|---|---|---|---|
|[交互秘術](https://github.com/GLanguage/jiaohu-wy/tree/master)|`jiaohu`|IO for wenyan-lang|[GLanguage](https://github.com/GLanguage)|
|[刻漏](https://github.com/akira-cn/kelou-wy/tree/master)|`kelou`|JavaScript timers for wenyan-lang|[akira-cn](https://github.com/akira-cn)|
|[子曰](https://github.com/antfu/ziyue-wy/tree/master)|`ziyue`|Cowsay for wenyan-lang|[antfu](https://github.com/antfu)|
|[柯裡化法](https://github.com/akira-cn/currying-wy/tree/master)|`currying`|Currying for wenyan-lang|[akira-cn](https://github.com/akira-cn)|
|[物之類](https://github.com/XingZiLong/typeof/tree/master)|`typeof`|Return and compare the type of objects|[XingZiLong](https://github.com/XingZiLong)|
|[符經](https://github.com/GLanguage/fujing-wy/tree/master)|`fujing`|Escape special characters in wenyan string|[GLanguage](https://github.com/GLanguage)|
|[简体秘术](https://github.com/lymslive/wyg-packages/tree/jiantihua)|`jiantihua`|Use simplified Chinese keywords and punctuation for wenyan-lang|[lymslive](https://github.com/lymslive/wyg-packages)|
|[腳本秘術](https://github.com/akira-cn/script-wy/tree/master)|`script`|Embed scripts into wenyan-lang|[akira-cn](https://github.com/akira-cn)|
|[解析整數](https://github.com/alainsaas/zh_parseint-wy/tree/master)|`zh_parseint`|parseInt equivalent for wenyan-lang, working with both Chinese and European numerals|[alainsaas](https://github.com/alainsaas)|
|[質問](https://github.com/alainsaas/prompt-wy/tree/master)|`prompt`|Prompt for wenyan-lang|[alainsaas](https://github.com/alainsaas)|
|[連加連乘](https://github.com/XingZiLong/continuous-operation/tree/master)|`continuous-operation`|Do continuous addition and mutiplication easily.|[XingZiLong](https://github.com/XingZiLong)|

<!--package_list_end-->

## License

[MIT License](https://github.com/wenyan-lang/wyg-registry/blob/master/LICENSE) © 2020 [Anthony Fu](https://github.com/antfu)
