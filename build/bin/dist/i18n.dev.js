'use strict'; //  根据 examples/i18n/page.json 和模版，生成不同语言的 demo

var fs = require('fs');

var path = require('path');

var langConfig = require('../../examples/i18n/page.json');

langConfig.forEach(function (lang) {
  try {
    console.log(lang);
    fs.statSync(path.resolve(__dirname, "../../examples/pages/".concat(lang.lang)));
  } catch (e) {
    fs.mkdirSync(path.resolve(__dirname, "../../examples/pages/".concat(lang.lang)));
  }

  Object.keys(lang.pages).forEach(function (page) {
    var templatePath = path.resolve(__dirname, "../../examples/pages/template/".concat(page, ".tpl"));
    var outputPath = path.resolve(__dirname, "../../examples/pages/".concat(lang.lang, "/").concat(page, ".vue"));
    var content = fs.readFileSync(templatePath, 'utf8');
    var pairs = lang.pages[page];
    Object.keys(pairs).forEach(function (key) {
      content = content.replace(new RegExp("<%=\\s*".concat(key, "\\s*>"), 'g'), pairs[key]); //替换模板生成新内容
    });
    fs.writeFileSync(outputPath, content); //生成文件
  });
});