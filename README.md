`ScrollReveal`

许多开发人员将他们的`<script>`标签放在结束`</body>`标签之前，允许文档内容在脚本完成加载之前开始呈现。通常这对性能有好处，但在这种情况下，这也意味着在 ScrollReveal 接管之前内容可以短暂可见。

> 所以需要做的是在 ScrollReveal 接管内容之前使得内容不可见。

下面我们将探索解决此问题的几个步骤。

1. 确保 ScrollReveal 包含在`<head>`确保在内容开始呈现之前安装 ScrollReveal
2. ScrollReveal 会在安装成功之后给 html 元素添加 sr 类。
3. `html.sr .load-hidden{visibility:hidden}`

简而言之就是给所有需要应用滚动动画的元素添加`visiblity:hidden`这个属性。
# responsive-website
