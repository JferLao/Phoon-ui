## Grid 栅格

24 栅格系统

### 基础布局

布局的栅格化系统是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来.

:::demo 通过 row 和 col 组件,并通过 col 组件的 `span` 属性来自有组合布局
```html
<ph-row>
    <ph-col :span="24"><div class="grid-content bg-light">col-24</div></ph-col>
</ph-row>
<ph-row>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
</ph-row>
<ph-row>
    <ph-col :span="8"><div class="grid-content bg-light">col-8</div></ph-col>
    <ph-col :span="8"><div class="grid-content bg-dark">col-8</div></ph-col>
    <ph-col :span="8"><div class="grid-content bg-light">col-8</div></ph-col>
</ph-row>
<ph-row>
    <ph-col :span="12"><div class="grid-content bg-light">col-12</div></ph-col>
    <ph-col :span="12"><div class="grid-content bg-dark">col-12</div></ph-col>
</ph-row>
<ph-row>
    <ph-col :span="16"><div class="grid-content bg-light">col-16</div></ph-col>
    <ph-col :span="8"><div class="grid-content bg-dark">col-8</div></ph-col>
</ph-row>
<style>
.ph-row{
    margin-bottom:10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ph-col{
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-light{
    background-color:rgba(0,160,233,.7);
}
.bg-dark{
    background-color:#00a0e9;
}
.grid-content {
    height: 36px;
    line-height: 36px;
}
</style>
```
:::


### 区块间隔
栅格常常需要和间隔配合使用

:::demo 可以使用ph-row的`gutter`属性来指定每一栏之间的间距,间距默认为0。推荐使用（16+8n）px作为栅格间距,这样更符合视觉。
```html
<ph-row :gutter="24">
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
</ph-row>
<style>
.ph-row{
    margin-bottom:10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ph-col{
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-light{
    background-color:rgba(0,160,233,.7);
}
.bg-dark{
    background-color:#00a0e9;
}
.grid-content {
    height: 36px;
    line-height: 36px;
}
</style>
```
:::


### 分栏偏移

支持偏移的栏数。、

:::demo 通过ph-col的`offset`属性可以实现栅格向右偏移的栏数
```html
<ph-row>
    <ph-col :span="8"><div class="grid-content bg-light">col-8</div></ph-col>
    <ph-col :span="8"><div class="grid-content bg-dark">col-8</div></ph-col>
    <ph-col :span="8"><div class="grid-content bg-light">col-8</div></ph-col>
</ph-row>
<ph-row :gutter="24">
    <ph-col :span="6" :offset="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6" :offset="6"><div class="grid-content bg-dark">col-6</div></ph-col>
</ph-row>
<ph-row :gutter="24">
    <ph-col :span="12" :offset="6"><div class="grid-content bg-light">col-12</div></ph-col>
</ph-row>
<style>
.ph-row{
    margin-bottom:10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ph-col{
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-light{
    background-color:rgba(0,160,233,.7);
}
.bg-dark{
    background-color:#00a0e9;
}
.grid-content {
    height: 36px;
    line-height: 36px;
}
</style>
```
:::


### 左右偏移

支持栅格左右偏移

:::demo 可以通过col 组件的`pull`和`push`属性设置栅格的左右移动的栏数来控制栅格的位置。
```html
<ph-row>
    <ph-col :span="12"><div class="grid-content bg-light">col-12</div></ph-col>
    <ph-col :span="12"><div class="grid-content bg-dark">col-6</div></ph-col>
</ph-row>
<ph-row>
    <ph-col :span="8" :pull="4" :offset="6"><div class="grid-content bg-light">col-8</div></ph-col>
    <ph-col :span="2" ><div class="grid-content bg-light">col-2</div></ph-col>
    <ph-col :span="6" :push="2"><div class="grid-content bg-light">col-6</div></ph-col>
    
</ph-row>
<ph-row>
    <ph-col :span="6" :push="4"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6" :push="8"><div class="grid-content bg-dark">col-6</div></ph-col>
</ph-row>
<style>
.ph-row{
    margin-bottom:10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ph-col{
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-light{
    background-color:rgba(0,160,233,.7);
}
.bg-dark{
    background-color:#00a0e9;
}
.grid-content {
    height: 36px;
    line-height: 36px;
}
</style>
```
:::


### flex布局
通过`flex`布局来分栏进行灵活的对齐

:::demo 将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
```html
<ph-row type="flex" class="row-bg">
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
</ph-row>
<ph-row type="flex" class="row-bg" justify="center">
    <ph-col :span="6"><div class="grid-content bg-light">col-6 center</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6 center</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6 center</div></ph-col>
</ph-row>
<ph-row type="flex" class="row-bg" justify="end">
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
</ph-row>
<ph-row type="flex" class="row-bg" justify="space-center">
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
</ph-row>
<ph-row type="flex" class="row-bg" justify="space-between">
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-dark">col-6</div></ph-col>
    <ph-col :span="6"><div class="grid-content bg-light">col-6</div></ph-col>
</ph-row>

<style>
.ph-row{
    margin-bottom:10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ph-col{
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-light{
    background-color:rgba(0,160,233,.7);
}
.bg-dark{
    background-color:#00a0e9;
}
.grid-content {
    height: 36px;
    line-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>

```
:::

### 响应式布局
参照了 Bootstrap 的 响应式设计，预设了六个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl`和`xxl`。

:::demo 通过col组件设置栅格数或者栅格属性对象 (例如： {span: 4, offset: 4})
```html
<ph-row>
    <ph-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :xxl="1"><div class="grid-content bg-light"></div></ph-col>
    <ph-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" :xxl="11"><div class="grid-content bg-dark"></div></ph-col>
    <ph-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" :xxl="11"><div class="grid-content bg-light"></div></ph-col>
    <ph-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :xxl="1"><div class="grid-content bg-dark"></div></ph-col>
</ph-row>

<style>
.ph-row{
    margin-bottom:10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.ph-col{
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-light{
    background-color:rgba(0,160,233,.7);
}
.bg-dark{
    background-color:#00a0e9;
}
.grid-content {
    height: 36px;
    line-height: 36px;
}
</style>
```
:::


### Row 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span| 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push|  栅格向右移动格数 | number | — | 0 |
| pull|  栅格向左移动格数 | number | — | 0 |
| tag | 自定义元素标签 | string | * | div |
| xs  | `<576px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm  | `≥576px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md  | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg  | `≥992px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl  | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xxl | `≥1600px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
