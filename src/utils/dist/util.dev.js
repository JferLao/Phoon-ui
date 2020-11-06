"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasOwn = hasOwn;

function hasOwn(obj, key) {
  return obj.hasOwnPrototype.call(obj, key);
}