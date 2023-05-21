# responsive-website

[ScrollReveal](https://scrollrevealjs.org/) 顾名思义**滚动展示**，利用这个库实现滚动时动画展示页面元素的效果。

Note：将 `<script>` 标签放在结束 `</body>` 标签之前，允许文档内容在脚本完成加载之前开始呈现。通常这对性能有好处，但这也意味着在 ScrollReveal 接管之前，内容可以短暂可见。这最终可能导致页面闪烁的问题。

**所以需要做的是在 ScrollReveal 接管内容之前使得需要滚动展示的内容先不可见。**

解决此问题的几个步骤：

1. 确保 ScrollReveal 包含在 `<head>` ，以确保在内容开始呈现之前安装 ScrollReveal
2. ScrollReveal 会在安装成功之后给 html 元素添加 sr 类。
3. `html.sr .load-hidden{visibility:hidden}`

综上所述，就是给所有需要应用滚动动画的元素添加`visiblity:hidden`这个属性，当然必须和 `html.sr` 关联。

