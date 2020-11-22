<template>
	<footer class="ph-footer" :style="{ height }">
		<slot></slot>
	</footer>
</template>

<script>
export default {
	name: "PhFooter",
	componentName: "PhFooter",
	props: {
		height: {
			type: String,
			default: "60px",
		},
	},
};
</script>
