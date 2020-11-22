<template>
    <aside class="ph-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>
<script>
export default {
    name:'PhAside',
    componentName:'PhAside',
    props:{
        width:{
            type:String,
            default:'300px'
        }
    }
};
</script>