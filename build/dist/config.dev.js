"use strict";

var path = require('path');

var fs = require('fs');

var nodeExternals = require('webpack-node-externals');

var Component = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions/'));
var externals = {};
Object.keys(Component).forEach(function (key) {
  externals["phoon-ui/packages/".concat(key)] = "phoon-ui/lib/".concat(key);
});
externals['phoon-ui/src/locale'] = 'phoon-ui/lib/locale';
utilsList.forEach(function (file) {
  file = path.basename(file, '.js');
  externals["phoon/packages/utils/".concat(file)] = "phoon-ui/lib/utils/".concat(file);
});
mixinsList.forEach(function (file) {
  file = path.basename(file, '.js');
  externals["phoon/src/mixins/".concat(file)] = "phoon-ui/src/lib/mixins/".concat(file);
});
transitionList.forEach(function (file) {
  file = path.basename(file, '.js');
  externals["phoon-ui/packages/transitionList/".concat(file)] = "phoon-ui/src/transition/".concat(file);
});
externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];
exports.externals = externals;
exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  example: path.resolve(__dirname, '../examples'),
  'phoon-ui': path.resolve(__dirname, '../')
};