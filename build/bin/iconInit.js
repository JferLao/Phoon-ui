'use strict';

var postcss= require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname,'../../packages/theme-chalk/src/icon.scss'),'utf-8');
var nodes = postcss.parse(fontFile).nodes;    //将scss转换成可操作性的JavaScript对象
var classList = [];

nodes.forEach((node) => {
    var selector = node.selector || '';  //选择器
    var reg = new RegExp(/\.ph-icon-([^:]+):before/);    //正则匹配所有图标文字
    var arr = selector.match(reg);
    if(arr&&arr[1]){
        classList.push(arr[1]);
    }
});


classList.reverse();   //按照 css文件顺序倒序排序


// 将icon的名字写入到文件内
fs.writeFileSync(path.resolve(__dirname,'../../examples/icon.json'),JSON.stringify(classList),()=>{});
