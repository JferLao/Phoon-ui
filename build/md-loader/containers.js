const mdContainer = require("markdown-it-container"); //转换自定义容器

module.exports = (md) => {
	md.use(mdContainer, "demo", {
		validate(params) {
			return params.trim().match(/^demo\s+(.*)$/);    //markdown-it-container官方例子validate
		},
		render(tokens, idx) {   //将 markdown 字符串转换为 HTML
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);   //围栏(代码块)信息字符串
			if (tokens[idx].nesting === 1) {  //意味着标签打开
		const description = m && m.length > 1 ? m[1] : ""; //自定义容器被转换成demo-block组件
        const content = tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";  //在自闭合标签（code、html、fence 等）的情况下，它可以获取这个标签的内容
		return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--phoon-demo: ${content}:phoon-demo-->
        `;
			}
			return "</demo-block>";
		},
	});
	md.use(mdContainer, "tip");
	md.use(mdContainer, "warning");
};
