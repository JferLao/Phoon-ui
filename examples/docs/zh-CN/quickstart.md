## 快速开始

本章节将介绍如何在项目中使用Phoon。

### 引入 phoon-ui

1. 安装脚手架工具

[vue-cli](https://github.com/vuejs/vue-cli)

```shell
 npm install -g @vue/cli
```
2. 创建一个项目

使用命令行进行初始化

```shell
 vue create phoon-demo
```

并配置项目。
若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：```rm -rf node_modules && cnpm install```。


3. 使用组件


```shell
npm install phoon-ui --save-dev
```

#### 完整引入

```javascript
import Vue from 'vue';
import PhoonUI from 'phoon-ui';
import 'phoon-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(PhoonUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Phoon 的引入。需要注意的是，样式文件需要单独引入。


#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "phoon-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

紧接着只需要在`main.js`引入部分组件,例如Button

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

4. 组件列表

[完整的组件列表](https://github.com/JferLao/Phoon-ui/blob/main/components.json)


### 开始使用

至此，一个基于 Vue 和 Phoon 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。