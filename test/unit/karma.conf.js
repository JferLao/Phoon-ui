const webpackConfig = require("../../build/webpack.test");

module.exports = function(config) {
	const configuration = {
		browsers: ["ChromeHeadless"], //使用karma-chrome-launcher启动
		frameworks: ["mocha", "sinon-chai"], //用到的库
		reporters: ["spec", "coverage"], //测试信息报告器
		files: ["./index.js"], //提供给浏览器的源文件和测试文件
		preprocessors: {
			//文件提供给浏览器之前，进行预处理
			"./index.js": ["webpack", "sourcemap"],
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true,
		},
		coverageReporter: {
			dir: "./coverage", //生成报告的目录路径
			reporters: [
				{ type: "lcov", subdir: "." }, //该报告类型为 html 报告类型 + lcovonly 报告类型
				{ type: "text-summary" },
			], //
		},
		client: {
			mocha: {
				timeout: 4000,
			},
		},
	};

	config.set(configuration);
};
