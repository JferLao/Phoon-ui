import Vue from "vue";
import Phoon from "main/index.js";

Vue.use(Phoon);

let id = 0;

const createEl = function() {
	const el = document.createElement("div");
	el.id = "app" + ++id;
	document.body.appendChild(el);
	return el;
};

/**
 * 回收vm
 * @param {object} vm
 */
export const destroyVM = function(vm) {
	vm.$destroy && vm.$destroy();
	vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
};

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Component  组件配置，可直接传 template
 * @param  {Boolean} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createVue = function(Component, mounted = false) {
	if (Object.prototype.toString.call(Component) === '[object String]') {
		Component = { template: Component };
	}
	return new Vue(Component).$mount(mounted === false ? null : createEl());
  };
  
  /**
   * 创建一个测试组件实例
   * @param  {Object}  Component          - 组件对象
   * @param  {Object}  propsData      - props 数据
   * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
   * @return {Object} vm
   */
  export const createTest = function(Component, propsData = {}, mounted = false) {
	if (propsData === true || propsData === false) {
	  mounted = propsData;
	  propsData = {};
	}
	const el = createEl();	//return <div id="app"></div>
	const Ctor = Vue.extend(Component);		//function VueComponent
	return new Ctor({ propsData }).$mount(mounted === false ? null : el);
  };

/**
 * 触发一个事件
 * @param {Element} el
 * @param {String} name
 * @param  {...any} opts
 * @return {Object} el
 */
export const triggerEvent = function(el, name, ...opts) {
	let eventName;
	if (/^mouse|click/.test(name)) {
		eventName = "MouseEvent";
	} else if (/^key/.test(name)) {
		eventName = "KeyboardEvent";
	} else {
		eventName = "HTMLEvents";
	}
	const evt = document.createEvent(eventName);

	evt.initEvent(name, ...opts);
	el.dispatchEvent ? el.dispatchEvent(evt) : el.fireEvent("on" + name, evt);

	return el;
};

/**
 * 触发mouseup和mousedown事件
 * @param {Element} el
 * @param  {...any} opts
 * @return {Object} el
 */
export const triggerClick = function(el, ...opts) {
	triggerEvent(el, "mousedown", ...opts);
	triggerEvent(el, "mouseup", ...opts);

	return el;
};

/**
 * 触发Keydown事件
 * @param {Element} el
 * @param {*} keyCode
 */
export const triggerKeyDown = function(el, keyCode) {
	const evt = document.createElement("Events");
	evt.initEvent("keydown", true, true);
	evt.keyCode = keyCode;
	el.dispatchEvent(evt);
};

/**
 * 等待毫秒数.返回Pormise
 * @param {Number} ms 
 * @return  Pormise
 */
export const wait = function(ms = 50) {
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

/**
 * 等待一个Tick,代替vue.nextTick,返回Promise
 * @return  Pormise
 */
export const waiitImmediate = () => wait(0);
