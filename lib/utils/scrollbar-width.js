"use strict";

exports.__esModule = true;

exports.default = function () {
	if (_vue2.default.prototype.$isSeerver) return 0;
	if (scrollBarWidth !== undefined) return scrollBarWidth;
	var outer = document.createElement("div");
	outer.className = "ph-scrollbar__wrap";
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.position = "absolute";
	outer.style.top = "-9999px";
	document.body.appendChild(outer);
	var widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";

	var inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	var widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	scrollBarWidth = widthNoScroll - widthWithScroll;

	return scrollBarWidth;
};

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 创建两个容器其中通过两个容器直接滚动条间距计算出滚动条宽度 */
var scrollBarWidth = void 0;