"use strict";

var path = require('path');

var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var VueLoaderPlugin = require('vue-loader/lib/plugin');

var TerserPlugin = require('terser-webpack-plugin'); //压缩js代码


var config = require('./config');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    //所有的模块定义下都可运行的方式
    libraryExport: 'default',
    //导出默认分配给libraryTarget
    library: 'PHOON',
    umdNamedDefine: true,
    //命名由 UMD 构建的 AMD 模块
    globalObject: 'typeof self !== \'undefined\' ? self :this ' //决定使用哪个全局对象来挂载 library

  },
  resolve: {
    "extends": ['.js', 'vue', 'json'],
    alias: config.alias
  },
  externals: {
    vue: config.vue
  },
  optimization: {
    minimizer: [//插件压缩
    new TerserPlugin({
      output: {
        comments: false //是否保留注释

      }
    })]
  },
  performance: {
    hints: false //不显示性能提示

  },
  stats: {
    children: false //不添加关于子模块的信息

  },
  module: {
    rules: [{
      test: /\.(jsx?|babel|es6)$/,
      include: process.cwd(),
      exclude: config.jsexclude,
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }]
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()]
};