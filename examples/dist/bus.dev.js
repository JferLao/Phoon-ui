"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 导出EventBus,以便其它模块可以使用或者监听它 */
var _default = new _vue["default"]();

exports["default"] = _default;