"use strict";

var path = require("path");

var template = path.resolve(process.cwd(), "./example/pages/template");

var chokidar = require("chokidar"); //文件监控


var watcher = chokidar.watch([template]);
watcher.on("ready", function () {
  watcher.on("change", function () {
    exec("npm run i18n");
  });
});

function exec(cmd) {
  //生成一个shell并执行cmd命令
  return require("child_process").execSync(cmd).toString().trim();
}