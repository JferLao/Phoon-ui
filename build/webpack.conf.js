const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin"); //压缩js代码

const config = require("./config");

module.exports = {
  mode: "production",
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    publicPath: "/dist/",
    filename: "index.js",
    chunkFilename: "[id].js",
    libraryTarget: "umd", //所有的模块定义下都可运行的方式
    libraryExport: "default", //导出默认分配给libraryTarget
    library: "PHOON",
    umdNamedDefine: true, //命名由 UMD 构建的 AMD 模块
    globalObject: "typeof self !== 'undefined' ? self :this ", //决定使用哪个全局对象来挂载 library
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: config.alias,
  },
  externals: {
    vue: config.vue,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({      //切勿升级5.1.0版本,存在问题
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  performance: {
    hints: false, //不显示性能提示
  },
  stats: {
    children: false, //不添加关于子模块的信息
  },
  module: {
    rules: [
        {
            test: /\.(jsx?|babel|es6)$/,
            include: process.cwd(), //  当前工作目录
            exclude: config.jsexclude,
            loader: "babel-loader",
          },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
  ],
};
