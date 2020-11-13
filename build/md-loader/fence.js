/* 覆盖默认的渲染策略 */
module.exports = (md) => {
	console.log(md.renderer.rules.fence);
	const defaultRender = md.renderer.rules.fence;
	md.renderer.rules.fence = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		const prevToken = tokens[idx - 1];
		const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
		if (token.info === "html" && isInDemoContainer) {
			return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(
				token.content
			)}</code></pre></template>`;
		}
		return defaultRender(tokens, idx, options, env, self);
	};
};
