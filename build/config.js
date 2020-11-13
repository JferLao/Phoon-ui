var path = require("path");
var fs = require("fs");
var nodeExternals = require("webpack-node-externals");
var Component = require("../components.json");

var utilsList = fs.readdirSync(path.resolve(__dirname, "../src/utils"));
var mixinsList = fs.readdirSync(path.resolve(__dirname, "../src/mixins"));
var transitionList = fs.readdirSync(path.resolve(__dirname, "../src/transitions/"));
var externals = {};

Object.keys(Component).forEach(function(key) {
	externals[`phoon-ui/packages/${key}`] = `phoon-ui/lib/${key}`;
});

externals["phoon-ui/src/locale"] = "phoon-ui/lib/locale";

utilsList.forEach(function(file) {
	file = path.basename(file, ".js");
	externals[`phoon/packages/utils/${file}`] = `phoon-ui/lib/utils/${file}`;
});

mixinsList.forEach(function(file) {
	file = path.basename(file, ".js");
	externals[`phoon/src/mixins/${file}`] = `phoon-ui/src/lib/mixins/${file}`;
});

transitionList.forEach(function(file) {
	file = path.basename(file, ".js");
	externals[`phoon-ui/packages/transitionList/${file}`] = `phoon-ui/src/transition/${file}`;
});

externals = [
	Object.assign(
		{
			vue: "vue",
		},
		externals
	),
	nodeExternals(),
];

exports.externals = externals;
exports.alias = {
	main: path.resolve(__dirname, "../src"),
	packages: path.resolve(__dirname, "../packages"),
	examples: path.resolve(__dirname, "../examples"),
	"phoon-ui": path.resolve(__dirname, "../"),
};
exports.vue = {
	root: "Vue",
	commonjs: "vue",
	commonjs2: "vue",
	amd: "vue",
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
