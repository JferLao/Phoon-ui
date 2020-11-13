'use strict';
//  根据 examples/i18n/page.json 和模版，生成不同语言的 demo
var fs = require('fs');
var path = require('path');
var langConfig = require('../../examples/i18n/page.json');


langConfig.forEach(lang => {
    try {
        fs.statSync(path.resolve(__dirname,`../../examples/pages/${ lang.lang }`));
    } catch(e) {
        fs.mkdirSync(path.resolve(__dirname,`../../examples/pages/${ lang.lang }`));
    }

    Object.keys(lang.pages).forEach(page =>{
        var templatePath = path.resolve(__dirname, `../../examples/pages/template/${ page }.tpl`);
        var outputPath = path.resolve(__dirname, `../../examples/pages/${ lang.lang }/${ page }.vue`);
        var content = fs.readFileSync(templatePath, 'utf8');
        var pairs = lang.pages[page];

        Object.keys(pairs).forEach(key => {
            content = content.replace(new RegExp(`<%=\\s*${ key }\\s*>`, 'g'), pairs[key]);     //替换模板生成新内容
        });
      
        fs.writeFileSync(outputPath, content);      //生成文件
    })
})