module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__(2);
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./src/utils/resize-event.js


var isServer = typeof window === "undefined";

var resizeHandler = function resizeHandler(entries) {
	for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var entry = _ref;

		var listeners = entry.tartget.__resizeListeners__ || [];
		if (listeners.length) {
			listeners.forEach(function (fn) {
				fn();
			});
		}
	}
};

var resize_event_addResizeListener = function addResizeListener(element, fn) {
	if (isServer) return;
	if (!element.__resizeListeners__) {
		element.__resizeListeners__ = [];
		element.__ro__ = new external_resize_observer_polyfill_default.a(resizeHandler);
	}
	element.__resizeListeners__.push(fn);
};

var removeResizeListener = function removeResizeListener(element, fn) {
	if (!element || !element.__resizeListeners__) return;
	element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	if (!element.__resizeListeners__.length) {
		element.__ro__.disconnect();
	}
};
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/utils/scrollbar-width.js


/* 创建两个容器其中通过两个容器直接滚动条间距计算出滚动条宽度 */
var scrollBarWidth = void 0;
/* harmony default export */ var scrollbar_width = (function () {
	if (external_vue_default.a.prototype.$isSeerver) return 0;
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
});
// CONCATENATED MODULE: ./src/utils/util.js

function hasOwn(obj, key) {
	return obj.hasOwnPrototype.call(obj, key);
}

function extend(to, _from) {
	for (var key in _from) {
		to[key] = _from[key];
	}
	return to;
}

/* 数组转成对象 */
function toObject(arr) {
	var res = {};
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			extend(res, arr[i]);
		}
	}
	return res;
}
// CONCATENATED MODULE: ./src/utils/dom.js


var dom_isServer = external_vue_default.a.prototype.$isServer;

/* 事件绑定on方法 */
var on = function () {
	if (!dom_isServer && document.addEventListener) {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.addEventListener(event, handler, false);
			}
		};
	} else {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.attachEvent("on", +event, handler);
			}
		};
	}
}();

/* 事件解绑off方法 */
var off = function () {
	if (!dom_isServer && document.removeEventListener) {
		return function (element, event, handler) {
			if (element && event) {
				element.removeEventListener(event, handler, false);
			}
		};
	} else {
		return function (element, event, handler) {
			if (element && event) {
				element.detachEvent("on" + event, handler);
			}
		};
	}
}();
// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
	vertical: {
		offset: "offsetHeight",
		scroll: "scrollTop",
		scorllSize: "scrollHeight",
		size: "height",
		key: "vertical",
		aaxis: "Y",
		client: "clientY",
		direction: "top"
	},
	horizontal: {
		offset: "offsetWidth",
		scroll: "scrollLeft",
		scrollSize: "scrollWidth",
		size: "width",
		key: "horizontal",
		axis: "X",
		client: "clientX",
		direction: "left"
	}
};

function renderThumbStyle(_ref) {
	var move = _ref.move,
	    size = _ref.size,
	    bar = _ref.bar;

	var style = {};
	var translate = "translate" + bar.axis + "(" + move + "%)";
	style[bar.size] = size;
	style.transform = translate;
	style.msTransform = translate;
	style.webkitTransform = translate;

	return style;
}
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* 滚动条 */
/* harmony default export */ var src_bar = ({
	name: "Bar",

	props: {
		vertical: Boolean,
		size: String,
		move: Number
	},

	computed: {
		bar: function bar() {
			return BAR_MAP[this.vertical ? "vertical" : "horizontal"];
		},
		wrap: function wrap() {
			return this.$parent.wrap;
		}
	},

	render: function render(h) {
		var size = this.size,
		    bar = this.bar,
		    move = this.move;


		return h(
			"div",
			{ "class": ["ph-scrollbar__bar", "is-" + bar.key], on: {
					"mousedown": this.clickTrackHandler
				}
			},
			[h("div", {
				ref: "thumb",
				"class": "ph-scrollbar__thumb",
				on: {
					"mousedown": this.clickThumbHandler
				},

				style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
		);
	},


	methods: {
		clickThumbHandler: function clickThumbHandler(e) {
			if (e.ctrlKey || e.button === 2) {
				//点击ctrl时和鼠标右键时不执行
				return;
			}
			this.startDrag(e);
			this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
		},
		startDrag: function startDrag(e) {
			e.stopImmediatePropagation();
			this.cursorDown = true;

			on(document, "mousemove", this.mouseMoveDocumentHandler);
			on(document, "moseup", this.mouseUpDocumentHandler);
			document.onselectstart = function () {
				return false;
			};
		},
		clickTrackHandler: function clickTrackHandler(e) {
			var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
			var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
			var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

			this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
		},


		/* 鼠标向上移动事件 */
		mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
			if (this.cursorDown === false) return;
			var prevPage = this[this.bar.axis];
			if (!prevPage) return;

			var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
			var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
			var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];
			this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
		},


		/* 鼠标松开点击事件 */
		mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
			this.cursorDown = false;
			this[this.bar.axis] = 0;
			off(document, "mousemove", this.mouseMoveDocumentHandler);
			document.onselectstart = null;
		}
	},

	destroyed: function destroyed() {
		off(document, "mouseup", this.mouseUpDocumentHandler);
	}
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js





/* harmony default export */ var main = ({
	name: "PhScrollbar",

	components: { Bar: src_bar },

	props: {
		native: Boolean,
		wrapStyle: {},
		wrapClass: {},
		viewClass: {},
		viewStyle: {},
		noresize: Boolean,
		tag: {
			type: String,
			default: "div"
		}
	},

	data: function data() {
		return {
			sizeWidth: "0",
			sizeHeight: "0",
			moveX: 0,
			moveY: 0
		};
	},


	computed: {
		wrap: function wrap() {
			return this.$refs.wrap; //滚动内部容器
		}
	},

	render: function render(h) {
		var gutter = scrollbar_width();
		var style = this.wrapStyle;

		/* 留下滚动条的空间 */
		if (gutter) {
			var gutterWidth = "-" + gutter + "px";
			var gutterStyle = "margin-bottom:" + gutterWidth + ";margin-right:" + gutterWidth;

			if (Array.isArray(this.wrapStyle)) {
				style = toObject(this.wrapStyle);
				style.marginRight = style.marginBottom = gutterWidth;
			} else if (typeof this.wrapStyle === "string") {
				style += gutterStyle;
			} else {
				style = gutterStyle;
			}
		}

		var view = h(this.tag, {
			class: ["ph-scrollbar__view", this.viewClass],
			style: this.viewStyle,
			ref: "resize"
		}, this.$slots.default);
		var wrap = h(
			"div",
			{
				ref: "wrap",
				style: style,
				on: {
					"scroll": this.handleScroll
				},

				"class": [this.wrapClass, "ph-scrollbar__wrap", gutter ? "" : "ph-scrollbar__wrap--hidden-default"] },
			[[view]]
		);

		var nodes = void 0;

		if (!this.native) {
			nodes = [wrap, h(src_bar, {
				attrs: { move: this.moveX, size: this.sizeWidth }
			}), h(src_bar, {
				attrs: { vertical: true, move: this.moveY, size: this.sizeHeight }
			})];
		} else {
			nodes = [h(
				"div",
				{ ref: "wrap", "class": [this.wrapClass, "ph-scrollbar__wrap"], style: style },
				[[view]]
			)];
		}
		/* 创建容器ph-scrollbar__wrap >   */
		return h("div", { class: "ph-scrollbar" }, nodes);
	},


	methods: {
		handleScroll: function handleScroll() {
			var wrap = this.wrap;
			this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
			this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
		},
		update: function update() {
			var heightPercentage = void 0,
			    widthPercentage = void 0;
			var wrap = this.wrap;
			if (!wrap) return;
			heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
			widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

			this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
			this.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
		}
	},

	mounted: function mounted() {
		if (this.native) return;
		this.$nextTick(this.update);
		!this.noresize && resize_event_addResizeListener(this.$refs.resize, this.update);
	},
	beforeDestroy: function beforeDestroy() {
		if (this.native) return;
		!this.noresize && removeResizeListener(this.$refs.resize, this.update);
	}
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js


main.install = function (Vue) {
    Vue.component(main.name, SCrollbar);
};

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (main);

/***/ })
/******/ ]);