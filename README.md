<p align="center">
    <img src="./phoon-logo.svg" >
</p>
<p align="center">
    <a href="https://img.shields.io/badge/webpack-4-informational">
        <img src="https://img.shields.io/badge/webpack-4-informational">
    </a> 
    <a href="https://img.shields.io/badge/Vue-2-informational">
        <img src="https://img.shields.io/badge/Vue-2-informational">
    </a> 
    <a href="https://img.shields.io/badge/gulp-4-informational">
        <img src="https://img.shields.io/badge/gulp-4-informational">
    </a> 
    <a href="https://img.shields.io/badge/mcha-6-9cf">
        <img src="https://img.shields.io/badge/mcha-6-9cf">
    </a> 
    <a href="https://img.shields.io/badge/karma-4-9cf">
        <img src="https://img.shields.io/badge/karma-4-9cf">
    </a> 
    <a href="https://img.shields.io/github/license/JferLao/Phoon-ui">
        <img src="https://img.shields.io/github/license/JferLao/Phoon-ui">
    </a> 
    <a href="https://img.badgesize.io/https:/unpkg.com/phoon-ui/lib/theme-chalk/index.css?compression=gzip&label=gzip%20size:CSS">
        <img src="https://img.badgesize.io/https:/unpkg.com/phoon-ui/lib/theme-chalk/index.css?compression=gzip&label=gzip%20size:CSS">
    </a> 
    <a href="https://img.badgesize.io/https:/unpkg.com/phoon-ui/lib/index.js?compression=gzip&label=gzip%20size:JS">
        <img src="https://img.badgesize.io/https:/unpkg.com/phoon-ui/lib/index.js?compression=gzip&label=gzip%20size:JS">
    </a> 
</p>


## Install
```shell
npm install phoon-ui --save-dev
```

## QuickStart
```
import Vue from 'vue';
import { Button, Select } from 'phoon-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});

```

## Browser Support

<table><thead><tr><th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px"></a>IE / Edge</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px"></a>Opera</th> <th><a href="http://godban.github.io/browsers-support-badges/"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px"></a>Electron</th></tr></thead> <tbody><tr><td>IE9, IE10, IE11, Edge</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td></tr></tbody></table>


## Changelog
Detailed changes for each release are documented in the [notes](https://github.com/JferLao/Phoon-ui/issues)

## FAQ
We have collected some [questions](https://github.com/JferLao/Phoon-ui/blob/main/FAQ.md)
