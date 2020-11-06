const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //将css提取到单独的文件中,支持sourceMap按需加载
const CopyWebpackPlugin = require("copy-webpack-plugin"); //复制文件或目录
const HtmlWebpackPlugin = require("html-webpack-plugin"); //将webpack打包的嵌入到新生成的html文件内
const ProgressBarPlugin = require("progress-bar-webpack-plugin"); //打包进度条
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //主要用来压缩css文件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = require("./config");

const isProduction = process.env.NODE_ENV === " production";
const isPlay = !!process.env.PLAY_ENV;

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: isProduction
    ? {
        docs: "./examples/entry.js",
      }
    : isPlay
    ? "./examples/play.js"
    : "./examples/entry.js",
  output: {
    path: path.resolve(process.cwd(), "./examples/phoon-ui/"),
    publicPath: process.env.CI_ENV || "",
    filename: "[name].[hash:7].js",
    chunkFilename: isProduction ? "[name].[hash:7].js" : "[name].js",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: config.alias, //设置别名
    modules: ["node_modules"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8085,
    publicPath: "/",
    hot: true,
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
            preserveWhitespace: false, //模板中的html标签之间的空格会被忽略
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, "./md-loader/index.js"),
          },
        ],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.posix.join("static", "[name].[hash:7].[ext]"), //跨平台添加文件
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热更新
    new HtmlWebpackPlugin({
      template: "./examples/index.tpl",
      filename: "index.html",
      favicon: "./examples/favicon.ico",
    }),
    new CopyWebpackPlugin({ patterns: [{ from: "examples/versions.json" }] }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      //创建一个在编译时可以配置的全局常量
      "process.env.FAAS_ENV": JSON.stringify(process.env.FAAS_ENV),
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false,
        },
      },
    }),
  ],
  optimization: {
    minimizer: [],
  },
  devtool: "eval-source-map",
};

if (isProduction) {
  webpackConfig.extensions = {
    vue: "Vue",
    "vue-router": "VueRouter",
    "highlight.js": "hljs",
  };
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:7].css",
    })
  );
  webpackConfig.optimization.minimizer.push(
    new UglifyJsPlugin({
      cache: true, //启用文件压缩
      parallel: true, //使用多进程并运行和文件缓存来提高构建速度
      sourceMap: false, //关闭sourcemap提高编译速度
    }),
    new OptimizeCSSAssetsPlugin({})
  );
  webpackConfig.optimization.splitChunks = {
    cacheGroup: {
      vendor: {
        test: /\/src\//,
        name: "phoon-ui",
        chunks: "all",
      },
    },
  };
  webpackConfig.devtool = false;
}

module.exports = webpackConfig;
