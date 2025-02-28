const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const config = require("./config");

module.exports = {
	mode: "production",
	entry: {
		app: ["./src/index.js"],
	},
	output: {
		path: path.resolve(process.cwd(), "./lib"),
		publicPath: "/dist/",
		filename: "phoon-ui.common.js",
		chunkFilename: "[id].js",
		libraryTarget: "commonjs2", //所有的模块定义下都可运行的方式
		libraryExport: "default", //导出默认分配给libraryTarget
		library: "PHOON",
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: config.alias,
		modules: ["node_modules"],
	},
	externals: config.externals,
	performance: {
		hints: false,
	},
	stats: {
		children: false,
	},
	optimization: {
		minimize: false,
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
				use: ["style-loader", "css-loader"],
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
	plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()],
};
