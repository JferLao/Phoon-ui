## Container 容器

协助进行页面级整体布局。

### 组件概述

- `container`:布局容器,可以嵌套`header`、`aside`、`main`、`footer`及其`container`本身,可以放在任何外层容器中.
- `header`:顶部布局。
- `aside`:侧边栏。
- `main`:内容部分。
- `footer`:底栏容器。

:::tip
以上组件采用了 flex 布局，请注意浏览器兼容性问题。
:::

### 布局演示

:::demo 可以给布局容器设置值来控制高度和宽度

```html
<ph-container>
	<ph-header>Header</ph-header>
	<ph-main>Main</ph-main>
	<ph-footer>Footer</ph-footer>
</ph-container>
<ph-container style="margin-top:40px">
	<ph-aside>Aside</ph-aside>
	<ph-main>Main</ph-main>
</ph-container>
<ph-container style="margin-top:40px">
	<ph-header>Header</ph-header>
	<ph-container>
		<ph-aside>Aside</ph-aside>
		<ph-main>Main</ph-main>
	</ph-container>
	<ph-footer>Footer</ph-footer>
</ph-container>

<style>
.ph-header,
.ph-footer {
    background: #7dbcea;
    color: #fff;
    text-align: center;
    line-height: 60px;
}
.ph-main {
    background: #108ee9;
    color: #fff;
    text-align: center;
    line-height: 160px;
}
.ph-aside {
    background: #3ba0e9;
    color: #fff;
    text-align: center;
    line-height: 200px;
}

</style>
```

:::

### Container 参数

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header 参数

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside 参数

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer 参数

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
