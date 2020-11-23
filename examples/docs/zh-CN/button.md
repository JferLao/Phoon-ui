## Button 按钮
基础组件，触发业务逻辑时使用。


### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<ph-row>
    <ph-button>默认按钮</ph-button>
    <ph-button type="primary">主要按钮</ph-button>
    <ph-button type="success">成功按钮</ph-button>
    <ph-button type="info">信息按钮</ph-button>
    <ph-button type="warning">默认按钮</ph-button>
    <ph-button type="error">异常按钮</ph-button>
</ph-row>
<ph-row style="margin-top:10px"> 
    <ph-button plain>朴素按钮</ph-button>
    <ph-button type="primary" plain>主要按钮</ph-button>
    <ph-button type="success" plain>成功按钮</ph-button>
    <ph-button type="info" plain>信息按钮</ph-button>
    <ph-button type="warning" plain>默认按钮</ph-button>
    <ph-button type="error" plain>异常按钮</ph-button>
</ph-row>
<ph-row style="margin-top:10px"> 
    <ph-button round>朴素按钮</ph-button>
    <ph-button type="primary" round>主要按钮</ph-button>
    <ph-button type="success" round>成功按钮</ph-button>
    <ph-button type="info" round>信息按钮</ph-button>
    <ph-button type="warning" round>默认按钮</ph-button>
    <ph-button type="error" round>异常按钮</ph-button>
</ph-row>
<ph-row style="margin-top:10px"> 
    <ph-button icon="ph-icon-close" circle></ph-button>
    <ph-button icon="ph-icon-exchangerate" type="primary" circle></ph-button>
    <ph-button type="success" icon="ph-icon-add-select" circle></ph-button>
    <ph-button type="info" icon="ph-icon-sami-select" circle></ph-button>
    <ph-button type="warning" icon="ph-icon-favorites" circle></ph-button>
    <ph-button type="error" icon="ph-icon-editor" circle></ph-button>
</ph-row>

```
:::

### 按钮尺寸
Button 组件提供除三种尺寸在不同场景下选择。

:::demo 通过设置`size`属性来配置它们,可以选择的属性有默认`medium`还有加大`large`和小型`small` 
```html
<ph-row>
    <ph-button type="primary" size="large">大按钮</ph-button>
    <ph-button type="primary" size="medium">默认大小</ph-button>
    <ph-button type="primary" size="small">小按钮</ph-button>
</ph-row>
```
:::


### 禁用状态
按钮不可用状态

:::demo 可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```html
<ph-row>
    <ph-button disabled>默认按钮</ph-button>
    <ph-button type="primary" disabled>主要按钮</ph-button>
    <ph-button type="success" disabled>成功按钮</ph-button>
    <ph-button type="info" disabled>信息按钮</ph-button>
    <ph-button type="warning" disabled>默认按钮</ph-button>
    <ph-button type="error" disabled>异常按钮</ph-button>
</ph-row>
<ph-row style="margin-top:10px"> 
    <ph-button plain disabled>朴素按钮</ph-button>
    <ph-button type="primary" plain disabled>主要按钮</ph-button>
    <ph-button type="success" plain disabled>成功按钮</ph-button>
    <ph-button type="info" plain disabled>信息按钮</ph-button>
    <ph-button type="warning" plain disabled>默认按钮</ph-button>
    <ph-button type="error" plain disabled>异常按钮</ph-button>
</ph-row>

```
:::

### 文字按钮
没有边框和背景颜色的按钮

:::demo 通过type设置为`text`属性来定义 Button 的样式。
```html

<ph-row> 
    <ph-button type="text" >文字按钮</ph-button>
    <ph-button type="text"  disabled>主要按钮</ph-button>
</ph-row>

```
:::

### 虚线按钮
边框为虚线的按钮

:::demo 通过type设置为`dashed`属性来定义 Button 的样式。
```html

<ph-row>
    <ph-button type="dashed" >虚线边框按钮</ph-button>
    <ph-button type="dashed"  disabled>虚线边框按钮</ph-button>
</ph-row>

```
:::


### 幽灵按钮
按钮背景透明

:::demo 使用`ghost`属性来定义 Button 的样式。
```html

<ph-row style="background:rgb(190,200,200);padding:10px" > 
    <ph-button ghost >虚线边框按钮</ph-button>
    <ph-button ghost  disabled>虚线边框按钮</ph-button>
</ph-row>

```
:::

### 图标按钮
可以在按钮里面添加图标

:::demo 可以设置`icon`属性,icon可以参考icon组件里面的类型,也可以在文字右边设置`i`标签来自定义图标。
```html

<ph-row> 
    <ph-button type="primary" icon="ph-icon-unlock">主要按钮</ph-button>
    <ph-button type="primary"><i class="ph-icon-comments">图标</i></ph-button>
</ph-row>

```
:::


### 按钮组
用按钮组的方式组合按钮

:::demo 使用`ph-button-group`标签嵌套按钮即可
```html
<ph-row> 
    <ph-button-group>
        <ph-button type="primary">按钮1</ph-button>
        <ph-button type="primary">按钮2</ph-button>
    </ph-button-group>
</ph-row>

```
:::


### 加载中
按钮上显示加载状态

:::demo 设置`loading` 状态，只要设置`loading`属性为`true`即可。
```html
<ph-row> 
    <ph-button type="primary" :loading="true">加载中</ph-button>
</ph-row>

```
:::

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size      | 尺寸   | string  |  lagre/ medium / small            |    medium    |
| type      | 类型   | string    |   default / primary / success / warning / error / info / text /dashed |     default    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle    | 是否圆形按钮   | boolean    | — | false   |
| ghost     | 是否幽灵按钮   | boolean    | — | false   |
| loading   | 是否加载中状态 | boolean    | — | false   |
| disabled  | 是否禁用状态   | boolean   | —   | false   |
| icon      | 图标类名 | string   |  —  |  —  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |