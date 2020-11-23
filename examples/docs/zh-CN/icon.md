## Icon 图标
提供一套淘宝官方的图标供使用

### 使用方法
使用类名`ph-icon-name`使用,例如:

:::demo 1
```html

<i class="ph-icon-cry"></i>
<i class="ph-icon-smile"></i>
<i class="ph-icon-robot"></i>
<ph-button type="primary" icon="ph-icon-product">按钮图标组合</ph-button>
```
:::

### 图标集合
<ul class=icon-list>
    <li v-for="name in $icon" :key="name">
        <span>
            <i :class="'ph-icon-'+name"></i>
            <span class="icon-name">{{'ph-icon-' + name }}</span>
        </span>
    </li>
</ul>