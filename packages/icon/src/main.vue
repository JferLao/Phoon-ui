<template>
	<i :class="'el-icon-' + name"></i>
</template>

<script>
export default {
	name: "PhIcon",
	componentName: "PhIcon",
	props: {
		name: String,
	},
};
</script>
