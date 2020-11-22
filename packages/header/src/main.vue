<template>
  <header class="ph-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'PhHeader',

    componentName: 'PhHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
