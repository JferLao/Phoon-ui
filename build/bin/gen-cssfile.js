/* 根据components.json，生成package/theme-chalk/index.scss文件，把所有组件的样式都导入到index.scss */
var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = [ 'theme-chalk' ];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname,'../../packages/')

function fileExists(filePath){
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false
    }
}

themes.forEach((theme) => {
    var isSCSS = theme !== 'theme-default';
    var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
    Components.forEach((key) =>{
        if(['icon','option','option-group'].indexOf(key) > -1 ) return ;
        var fileName = key + (isSCSS ? '.scss' : '.css');
        indexContent += '@import "./' + fileName + '";\n';
        var filepath = path.resolve(basepath,theme,'src',fileName);
        if(!fileExists(filepath)){
            fs.writeFileSync(filepath,'','utf-8');
            console.log(theme,' 创建遗漏的 ', fileName,' 文件 ');
        }
    });
    fs.writeFileSync(path.resolve(basepath,theme,'src',isSCSS ? 'index.scss' : 'idnex.css' ), indexContent)
})
