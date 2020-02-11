# 文淵閣總目, wyg-registry

Packages registry for [wyg](https://github.com/wenyan-lang/wyg)

### 📦 Publish Your Own Packages

It's quite simple, by the following steps, your package is good to go!

- Create a git repo on Github/Gitlab/Bitbucket
- Commit your code and make sure `序.wy`(as entry) in the root.
- Clone this repo and modify the [`registry-packages.ts`](https://github.com/wenyan-lang/wyg-registry/blob/master/registry-packages.ts) file to add your package info. The details is included in the file as comments.
- Create a PR of your changes.
- Wait for the PR getting merged. Once merged, people can access your package right through `wyg`!

Also, you can check out [`子曰<antfu/ziyue-wy>`](https://github.com/antfu/ziyue-wy) as an example.

## Avaliable Packages

<!--GENERATED_DO_NOT_MODIFY-->
<!--package_list_start-->

- [子曰](https://github.com/antfu/ziyue-wy/tree/master) - Cowsay for Wenyan Lang - by [antfu](https://github.com/antfu)
- [简体秘术](https://github.com/lymslive/wyg-packages/tree/jiantihua) - Use simplified Chinese keywords and punctuation for Wenyan Lang - by [lymslive](https://github.com/lymslive/wyg-packages)
- [刻漏](https://github.com/akira-cn/kelou-wy/tree/master) - Wrap setTimeout and setInterval for Wenyan Lang - by [akira-cn](https://github.com/akira-cn)
- [柯裡化法](https://github.com/akira-cn/currying-wy/tree/master) - Provide [currying](https://en.wikipedia.org/wiki/Currying) for Wenyan Lang - by [akira-cn](https://github.com/akira-cn)

<!--package_list_end-->

## License

[MIT License](https://github.com/wenyan-lang/wyg-registry/blob/master/LICENSE) © 2020 [Anthony Fu](https://github.com/antfu)
