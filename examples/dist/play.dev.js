"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _index = _interopRequireDefault(require("main/index.js"));

var _index2 = _interopRequireDefault(require("./play/index.vue"));

require("packages/theme-chalk/src/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_index["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_index2["default"]);
  }
}).$mount('#app');