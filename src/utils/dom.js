import Vue from "vue";

const isServer = Vue.prototype.$isServer;

/* 事件绑定on方法 */
export const on = (function() {
	if (!isServer && document.addEventListener) {
		return function(element, event, handler) {
			if (element && event && handler) {
				element.addEventListener(event, handler, false);
			}
		};
	} else {
		return function(element, event, handler) {
			if (element && event && handler) {
				element.attachEvent("on", +event, handler);
			}
		};
	}
})();

/* 事件解绑off方法 */
export const off = (function() {
	if (!isServer && document.removeEventListener) {
		return function(element, event, handler) {
			if (element && event) {
				element.removeEventListener(event, handler, false);
			}
		};
	} else {
		return function(element, event, handler) {
			if (element && event) {
				element.detachEvent("on" + event, handler);
			}
		};
	}
})();
