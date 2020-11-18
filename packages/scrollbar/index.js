import Scrollbar from './src/main';

Scrollbar.install = function(Vue) {
    Vue.component(Scrollbar.name,SCrollbar);
};

export default Scrollbar;