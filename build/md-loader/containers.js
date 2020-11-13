const mdContainer = require("markdown-it-container"); //转换自定义容器

module.exports = (md) => {
	md.use(mdContainer, "demo", {
		validate(params) {
			return params.trim().match(/\^demo\s*(.*)$/);
		},
		render(tokens, idx) {
			const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
			if (tokens[idx].nesting === 1) {
                const description = m && m.length > 1 ? m[1] : '';          //自定义容器被转换成demo-block组件
                const content = tokens[idx+1] === 'fence' ? tokens[idx +1].content : '';
                return `<demo-block>
                ${description ? `<div>${md.render(description)}</div>` : ''}
                <!--phoon-demo : ${content}:phoon-demo -->
                `;
            }
            return '</demo-block>'
		},
    });
    
    md.use(mdContainer,'tip');
    md.use(mdContainer,'warning')
};
