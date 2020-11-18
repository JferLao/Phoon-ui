"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasOwn = hasOwn;
exports.toObject = toObject;

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