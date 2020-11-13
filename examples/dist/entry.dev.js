"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _highlight = _interopRequireDefault(require("highlight.js"));

var _index = _interopRequireDefault(require("main/index.js"));

var _route = _interopRequireDefault(require("./route.config"));

var _app = _interopRequireDefault(require("./app"));

require("packages/theme-chalk/src/index.scss");

var _icon = _interopRequireDefault(require("./icon.json"));

var _title = _interopRequireDefault(require("./i18n/title.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_index["default"]);

_vue["default"].use(_vueRouter["default"]);

var globalPh = new _vue["default"]({
  data: {
    $isPh: false
  } //是否phoon用户

});

_vue["default"].mixin({
  computed: {
    $isPh: {
      get: function get() {
        return globalPh.$data.$isPh;
      },
      set: function set(data) {
        globalPh.$data.$isPh = data;
      }
    }
  }
});

_vue["default"].prototype.$icon = _icon["default"];
var router = new _vueRouter["default"]({
  mode: "hash",
  base: __dirname,
  routes: _route["default"]
});
router.afterEach(function (route) {
  _vue["default"].nextTick(function () {
    var blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, _highlight["default"].highlightBlock);
  });

  var data = _title["default"][route.meta.lang];

  for (var val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }

  document.title = 'Phoon';
  ga('send', 'event', 'PageView', route.name);
});
new _vue["default"](_objectSpread({}, _app["default"], {
  router: router
})).$mount('#app');