"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _util = require("phoon-ui/src/utils/util");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

function _default(Vue) {
  function template(string) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 & _typeof(args[0]) === "object") {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result;

      if (string[index - 1] === "{" && string[index + match.length] === "}") {
        return i;
      } else {
        result = (0, _util.hasOwn)(args, i) ? args[i] : null;

        if (result === null || result === undefined) {
          return "";
        }

        return result;
      }
    });
  }

  return template;
}