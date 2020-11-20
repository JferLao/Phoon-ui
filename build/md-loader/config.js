/**
 * markdown-it
 * markdown-it配置,解析markdown成为html片段,使用插件
 */
const Config = require("markdown-it-chain"); //markdown-it链式调用
const anchorPlugin = require("markdown-it-anchor"); //页眉锚点
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
			permalink: true,	//是否在标题旁添加链接
			permalinkBefore: true,	//将链接放在标题的左边
		},
	])
	.end()
	.plugin("containers")
	.use(containers)
	.end();

const md = config.toMd();
fenceRule(md);

module.exports = md;
