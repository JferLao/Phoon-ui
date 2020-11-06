const path = require("path");
const template = path.resolve(process.cwd(), "./example/pages/template");

const chokidar = require("chokidar"); //文件监控
let watcher = chokidar.watch([template]);

watcher.on("ready", function() {
  watcher.on("change", function() {
    exec("npm run i18n");
  });
});

function exec(cmd) {
  //生成一个shell并执行cmd命令
  return require("child_process")
    .execSync(cmd)
    .toString()
    .trim();
}
