/* markdown-it解析markdown成为html片段,使用插件 */
const Config = require("markdown-it-chain"); //markdown-it链式调用
const anchorPlugin = require("markdown-it-anchor"); //快速锚点
const slugify = require("transliteration").slugify; //中文转音译
const containers = require("./containers");
const fenceRule = require("./fence"); //重写规则

const config = new Config();

config.options
	.html(true)
	.end() //转成html
	.plugin("anchor")
	.use(anchorPlugin, [
		{
			level: 2,
			slugify: slugify,
			permalink: true,
			permalinkBefore: true,
		},
	])
	.end()
	.plugin("container")
	.use(containers)
	.end();

const md = config.toMd();
fenceRule(md);

module.exports = md;
