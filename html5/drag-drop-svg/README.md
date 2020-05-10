## 
浏览器收到 html 解析为 DOM 
遇到 css 解析为 cssom
把 dom 和 cssom 合在一起 生成一棵 渲染树
根据样式 计算位置 开始渲染布局

domContentloaded 就是当html解析完成之后发生的

有一些标签 img link script 会引入外部资源, 会在解析完html之后开始请求资源