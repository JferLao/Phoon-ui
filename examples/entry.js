import Vue from "vue";
import VueRouter from "vue-router";
import hljs from "highlight.js";
import Phoon from "main/index.js";
import routes from "./route.config";
import entry from "./app";
import "packages/theme-chalk/src/index.scss";
import icon from "./icon.json";
import title from './i18n/title.json'

Vue.use(Phoon);
Vue.use(VueRouter);

const globalPh = new Vue({
	data: { $isPh: false }, //是否phoon用户
});
Vue.mixin({
	computed: {
		$isPh: {
			get: () => globalPh.$data.$isPh,
			set: (data) => {
				globalPh.$data.$isPh = data;
			},
		},
	},
});

Vue.prototype.$icon = icon; 

const router = new VueRouter({
	mode: "hash",
	base: __dirname,
	routes,
});

router.afterEach((route) => {
	Vue.nextTick(() => {
		const blocks = document.querySelectorAll("pre code:not(.hljs)");
		Array.prototype.forEach.call(blocks, hljs.highlightBlock);
	});
    const data = title[route.meta.lang];
    for(let val in data ) {
        if(new RegExp('^' + val,'g').test(route.name)) {
            document.title = data[val];
            return;
        }
    }
    document.title = 'Phoon';
    ga('send', 'event', 'PageView', route.name);
});

new Vue({ 
	...entry,
	router
  }).$mount('#app');