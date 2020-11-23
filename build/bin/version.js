/* 根据package.json中的version,生成examples/versions.json，对应就是完整的版本列表 */
var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '0.2.0':'0.2.0'}
if (!content[version]) content[version] = '0.2.0';

fs.writeFileSync(path.resolve(__dirname,'../../examples/versions.json'),JSON.stringify(content));   //写入当前版本号
