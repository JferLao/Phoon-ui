import Vue from 'vue';
import Phoon from 'main/index.js';
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss'
Vue.use(Phoon);

new Vue({
    render: h => h(App)
}).$mount('#app')