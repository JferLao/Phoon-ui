import Vue from 'vue';
import VueRouter from 'vue-router'; 
import hljs from 'highlight.js';
import entry from './app';
Vue.use(VueRouter);


const router = new VueRouter({
    mode:'hash',
    base:__dirname
})

new Vue({
    ...entry,
    router
}).$mount('#app')