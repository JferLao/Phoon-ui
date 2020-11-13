"use strict";

/* markdown-it解析markdown成为html片段,使用插件 */
var Config = require("markdown-it-chain"); //markdown-it链式调用


var anchorPlugin = require("markdown-it-anchor"); //快速锚点


var slugify = require("transliteration").slugify; //中文转音译


var containers = require("./containers");

var fenceRule = require("./fence"); //重写规则


var config = new Config();
config.options.html(true).end() //转成html
.plugin("anchor").use(anchorPlugin, [{
  level: 2,
  slugify: slugify,
  permalink: true,
  permalinkBefore: true
}]).end().plugin("container").use(containers).end();
var md = config.toMd();
fenceRule(md);
module.exports = md;