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
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("phoon-ui/lib/locale");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/aside/src/main.vue?vue&type=template&id=03411dbf&
var mainvue_type_template_id_03411dbf_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    { staticClass: "ph-aside", style: { width: _vm.width } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
mainvue_type_template_id_03411dbf_render._withStripped = true


// CONCATENATED MODULE: ./packages/aside/src/main.vue?vue&type=template&id=03411dbf&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/aside/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
    name: 'PhAside',
    componentName: 'PhAside',
    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
});
// CONCATENATED MODULE: ./packages/aside/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/aside/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_03411dbf_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/aside/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/aside/index.js


main.install = function (Vue) {
    Vue.component(main.name, main);
};

/* harmony default export */ var aside = (main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ca859fb4&
var buttonvue_type_template_id_ca859fb4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "ph-button",
      class: [
        _vm.type ? "ph-button--" + _vm.type : "",
        _vm.buttonSize ? "ph-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.buttonDisabled,
          "is-loading": _vm.loading,
          "is-plain": _vm.plain,
          "is-round": _vm.round,
          "is-circle": _vm.circle,
          "is-ghost": _vm.ghost
        }
      ],
      attrs: {
        disabled: _vm.buttonDisabled || _vm.loading,
        type: _vm.nativeType
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm.loading ? _c("i", { staticClass: "ph-icon-loading" }) : _vm._e(),
      _vm.icon && !_vm.loading ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
}
var buttonvue_type_template_id_ca859fb4_staticRenderFns = []
buttonvue_type_template_id_ca859fb4_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ca859fb4&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
    name: 'PhButton',

    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        ghost: Boolean,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: ''
        }
    },

    computed: {
        buttonSize: function buttonSize() {
            return this.size;
        },
        buttonDisabled: function buttonDisabled() {
            return this.disabled;
        }
    },

    methods: {
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    }
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var button_component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_ca859fb4_render,
  buttonvue_type_template_id_ca859fb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_api; }
button_component.options.__file = "packages/button/src/button.vue"
/* harmony default export */ var src_button = (button_component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


src_button.install = function (Vue) {
    Vue.component(src_button.name, src_button);
};

/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/button-group/src/button-group.vue?vue&type=template&id=82222334&
var button_groupvue_type_template_id_82222334_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ph-button-group" }, [_vm._t("default")], 2)
}
var button_groupvue_type_template_id_82222334_staticRenderFns = []
button_groupvue_type_template_id_82222334_render._withStripped = true


// CONCATENATED MODULE: ./packages/button-group/src/button-group.vue?vue&type=template&id=82222334&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/button-group/src/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
    name: 'PhButtonGroup'
});
// CONCATENATED MODULE: ./packages/button-group/src/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button-group/src/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_82222334_render,
  button_groupvue_type_template_id_82222334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_group_api; }
button_group_component.options.__file = "packages/button-group/src/button-group.vue"
/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./packages/button-group/index.js


button_group.install = function (Vue) {
    Vue.component(button_group.name, button_group);
};

/* harmony default export */ var packages_button_group = (button_group);
// CONCATENATED MODULE: ./packages/col/src/col.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* harmony default export */ var col = ({
	name: "PhCol",
	props: {
		span: {
			type: Number,
			default: 24
		},
		offset: Number,
		pull: Number,
		push: Number,
		tag: {
			type: String,
			default: "div"
		},
		xs: [Number, Object],
		sm: [Number, Object],
		md: [Number, Object],
		lg: [Number, Object],
		xl: [Number, Object],
		xxl: [Number, Object]
	},
	computed: {
		gutter: function gutter() {
			var parent = this.$parent;
			while (parent && parent.$options.componentName !== "PhRow") {
				parent = parent.$parent;
			}
			return parent ? parent.gutter : 0;
		}
	},
	render: function render(h) {
		var _this = this;

		var classList = [];
		var style = {};
		if (this.gutter) {
			style.paddingLeft = this.gutter / 2 + "px";
			style.paddingRight = style.paddingLeft;
		}
		["span", "offset", "pull", "push"].forEach(function (prop) {
			if (_this[prop] || _this[prop] === 0) {
				classList.push(prop !== "span" ? "ph-col-" + prop + "-" + _this[prop] : "ph-col-" + _this[prop]);
			}
		});

		["xs", "sm", "md", "lg", "xl", "xxl"].forEach(function (size) {
			if (typeof _this[size] === "number") {
				classList.push("ph-col-" + size + "-" + _this[size]);
			} else if (_typeof(_this[size]) === "object") {
				var props = _this[size];
				Object.keys(props).forEach(function (prop) {
					classList.push(prop !== "span" ? "ph-col-" + size + "-" + prop + "-" + props[prop] : "ph-col-" + size + "-" + props[prop]);
				});
			}
		});

		return h(this.tag, {
			class: ["ph-col", classList],
			style: style
		}, this.$slots.default);
	}
});
// CONCATENATED MODULE: ./packages/col/index.js


col.install = function (Vue) {
    Vue.component(col.name, col);
};

/* harmony default export */ var packages_col = (col);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/footer/src/main.vue?vue&type=template&id=80210338&
var mainvue_type_template_id_80210338_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "footer",
    { staticClass: "ph-footer", style: { height: _vm.height } },
    [_vm._t("default")],
    2
  )
}
var mainvue_type_template_id_80210338_staticRenderFns = []
mainvue_type_template_id_80210338_render._withStripped = true


// CONCATENATED MODULE: ./packages/footer/src/main.vue?vue&type=template&id=80210338&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/footer/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var footer_src_mainvue_type_script_lang_js_ = ({
	name: "PhFooter",
	componentName: "PhFooter",
	props: {
		height: {
			type: String,
			default: "60px"
		}
	}
});
// CONCATENATED MODULE: ./packages/footer/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_footer_src_mainvue_type_script_lang_js_ = (footer_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/footer/src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  packages_footer_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_80210338_render,
  mainvue_type_template_id_80210338_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/footer/src/main.vue"
/* harmony default export */ var src_main = (main_component.exports);
// CONCATENATED MODULE: ./packages/footer/index.js


src_main.install = function (Vue) {
    Vue.component(src_main.name, src_main);
};

/* harmony default export */ var footer = (src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/header/src/main.vue?vue&type=template&id=2b296ab2&
var mainvue_type_template_id_2b296ab2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    { staticClass: "ph-header", style: { height: _vm.height } },
    [_vm._t("default")],
    2
  )
}
var mainvue_type_template_id_2b296ab2_staticRenderFns = []
mainvue_type_template_id_2b296ab2_render._withStripped = true


// CONCATENATED MODULE: ./packages/header/src/main.vue?vue&type=template&id=2b296ab2&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/header/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var header_src_mainvue_type_script_lang_js_ = ({
  name: 'PhHeader',

  componentName: 'PhHeader',

  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
});
// CONCATENATED MODULE: ./packages/header/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_header_src_mainvue_type_script_lang_js_ = (header_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/header/src/main.vue





/* normalize component */

var src_main_component = normalizeComponent(
  packages_header_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_2b296ab2_render,
  mainvue_type_template_id_2b296ab2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var src_main_api; }
src_main_component.options.__file = "packages/header/src/main.vue"
/* harmony default export */ var header_src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./packages/header/index.js


header_src_main.install = function (Vue) {
	Vue.component(header_src_main.name, header_src_main);
};

/* harmony default export */ var header = (header_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/main/src/main.vue?vue&type=template&id=2a3a7406&
var mainvue_type_template_id_2a3a7406_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "ph-main" }, [_vm._t("default")], 2)
}
var mainvue_type_template_id_2a3a7406_staticRenderFns = []
mainvue_type_template_id_2a3a7406_render._withStripped = true


// CONCATENATED MODULE: ./packages/main/src/main.vue?vue&type=template&id=2a3a7406&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/main/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var main_src_mainvue_type_script_lang_js_ = ({
  name: 'PhMain',
  componentName: 'PhMain'
});
// CONCATENATED MODULE: ./packages/main/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_main_src_mainvue_type_script_lang_js_ = (main_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/main/src/main.vue





/* normalize component */

var main_src_main_component = normalizeComponent(
  packages_main_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_2a3a7406_render,
  mainvue_type_template_id_2a3a7406_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_src_main_api; }
main_src_main_component.options.__file = "packages/main/src/main.vue"
/* harmony default export */ var main_src_main = (main_src_main_component.exports);
// CONCATENATED MODULE: ./packages/main/index.js


main_src_main.install = function (Vue) {
	Vue.component(main_src_main.name, main_src_main);
};

/* harmony default export */ var packages_main = (main_src_main);
// CONCATENATED MODULE: ./packages/row/src/row.js
/* harmony default export */ var row = ({
	name: "PhRow",

	componentName: "PhRow",

	props: {
		gutter: Number,
		type: String,
		justify: {
			type: String,
			default: "start"
		},
		align: {
			type: String,
			default: "top"
		},
		tag: {
			type: String,
			default: "div"
		}
	},
	computed: {
		style: function style() {
			var ret = {};
			if (this.gutter) {
				ret.marginLeft = "-" + this.gutter / 2 + "px";
				ret.marginRight = ret.marginLeft;
			}
			return ret;
		}
	},

	render: function render(h) {
		return h(this.tag, {
			class: ['ph-row', this.justify !== "start" ? "is-justify-" + this.justify : "", this.align !== "top" ? "is-align-" + this.align : "", { "ph-row--flex": this.type === "flex" }],
			style: this.style
		}, this.$slots.default);
	}
});
// CONCATENATED MODULE: ./packages/row/index.js


row.install = function (Vue) {
    Vue.component(row.name, row);
};

/* harmony default export */ var packages_row = (row);
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
var external_vue_ = __webpack_require__(0);
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





/* harmony default export */ var scrollbar_src_main = ({
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


scrollbar_src_main.install = function (Vue) {
    Vue.component(scrollbar_src_main.name, SCrollbar);
};

/* harmony default export */ var scrollbar = (scrollbar_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var selectvue_type_template_id_0e4aade6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ph-select" })
}
var selectvue_type_template_id_0e4aade6_staticRenderFns = []
selectvue_type_template_id_0e4aade6_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var selectvue_type_script_lang_js_ = ({
	name: "PhSelect"
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_js_,
  selectvue_type_template_id_0e4aade6_render,
  selectvue_type_template_id_0e4aade6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js


src_select.install = function (Vue) {
	Vue.component(src_select.name, src_select);
};

/* harmony default export */ var packages_select = (src_select);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/container/src/main.vue?vue&type=template&id=5bf181d4&
var mainvue_type_template_id_5bf181d4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "ph-container", class: { "is-vertical": _vm.isVertical } },
    [_vm._t("default")],
    2
  )
}
var mainvue_type_template_id_5bf181d4_staticRenderFns = []
mainvue_type_template_id_5bf181d4_render._withStripped = true


// CONCATENATED MODULE: ./packages/container/src/main.vue?vue&type=template&id=5bf181d4&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/container/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var container_src_mainvue_type_script_lang_js_ = ({
	name: "PhContainer",
	componentName: "PhContainer",
	props: {
		direction: String
	},
	computed: {
		isVertical: function isVertical() {
			if (this.direction === "vertical") {
				return true;
			} else if (this.direction === "horizontal") {
				return false;
			}
			return this.$slots && this.$slots.default ? this.$slots.default.some(function (vnode) {
				var tag = vnode.componentOptions && vnode.componentOptions.tag;
				return tag === "ph-header" || tag === "ph-footer";
			}) : false;
		}
	}
});
// CONCATENATED MODULE: ./packages/container/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_container_src_mainvue_type_script_lang_js_ = (container_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/container/src/main.vue





/* normalize component */

var container_src_main_component = normalizeComponent(
  packages_container_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_5bf181d4_render,
  mainvue_type_template_id_5bf181d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var container_src_main_api; }
container_src_main_component.options.__file = "packages/container/src/main.vue"
/* harmony default export */ var container_src_main = (container_src_main_component.exports);
// CONCATENATED MODULE: ./packages/container/index.js

container_src_main.install = function (Vue) {
	Vue.component(container_src_main.name, container_src_main);
};

/* harmony default export */ var container = (container_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/icon/src/main.vue?vue&type=template&id=74499574&
var mainvue_type_template_id_74499574_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", { class: "el-icon-" + _vm.name })
}
var mainvue_type_template_id_74499574_staticRenderFns = []
mainvue_type_template_id_74499574_render._withStripped = true


// CONCATENATED MODULE: ./packages/icon/src/main.vue?vue&type=template&id=74499574&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.9.4@vue-loader/lib??vue-loader-options!./packages/icon/src/main.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var icon_src_mainvue_type_script_lang_js_ = ({
	name: "PhIcon",
	componentName: "PhIcon",
	props: {
		name: String
	}
});
// CONCATENATED MODULE: ./packages/icon/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_icon_src_mainvue_type_script_lang_js_ = (icon_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/icon/src/main.vue





/* normalize component */

var icon_src_main_component = normalizeComponent(
  packages_icon_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_74499574_render,
  mainvue_type_template_id_74499574_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var icon_src_main_api; }
icon_src_main_component.options.__file = "packages/icon/src/main.vue"
/* harmony default export */ var icon_src_main = (icon_src_main_component.exports);
// CONCATENATED MODULE: ./packages/icon/index.js


icon_src_main.install = function (Vue) {
	Vue.component(icon_src_main.name, icon_src_main);
};

/* harmony default export */ var icon = (icon_src_main);
// EXTERNAL MODULE: external "phoon-ui/lib/locale"
var locale_ = __webpack_require__(1);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */















var components = [aside, packages_button, packages_button_group, packages_col, footer, header, packages_main, packages_row, scrollbar, packages_select, container, icon];

var src_install = function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    locale_default.a.use(opts.locale);
    locale_default.a.i18n(opts.i18n);

    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    src_install(window.Vue);
}

// 导出版本号、Install方法（插件）和一些功能
/* harmony default export */ var src = __webpack_exports__["default"] = ({
    version: '0.3.0',
    locale: locale_default.a.i18n,
    install: src_install,
    Aside: aside,
    Button: packages_button,
    ButtonGroup: packages_button_group,
    Col: packages_col,
    Footer: footer,
    Header: header,
    Main: packages_main,
    Row: packages_row,
    Scrollbar: scrollbar,
    Select: packages_select,
    Container: container,
    Icon: icon
});

/***/ })
/******/ ])["default"];