"use strict";

// 生成umd模块语言包
var fs = require("fs");

var save = require("file-save");

var resolve = require("path").resolve; //合并路径地址


var basename = require("path").basename; //返回 path 的最后一部分


var localePath = resolve(__dirname, "../../src/locale/lang");
var fileList = fs.readdirSync(localePath); //异步读取目录内容

var transform = function transform(filename, name, cb) {
  require("babel-core").transformFile(resolve(localePath, filename), {
    plugins: ["add-module-exports", ["transform-es2015-modules-umd", {
      loose: true
    }]],
    moduleId: name
  }, cb);
};

fileList.filter(function (file) {
  return /\.js$/.test(file);
}).forEach(function (file) {
  var name = basename(file, ".js");
  transform(file, name, function (err, result) {
    if (err) {
      console.error(err);
    } else {
      var code = result.code;
      code = code.replace('define(\"', 'define(\"phoon/locale/').replace('global.', 'global.PHOON.lang = global.PHOON.lang || {}; \n    global.PHOON.lang.');
      save(resolve(__dirname, "../../lib/umd/locale", file)).write(code); //保存文件到合并地址目录上

      console.log(file);
    }
  });
});