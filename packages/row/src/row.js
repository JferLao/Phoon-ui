export default {
	name: "PhRow",

	componentName: "PhRow",

	props: {
		gutter: Number,
		type: String,
		justify: {
			type: String,
			default: "start",
		},
		align: {
			type: String,
			default: "top",
		},
		tag: {
			type: String,
			default: "div",
		},
	},
	computed: {
		style() {
			const ret = {};
			if (this.gutter) {
				ret.marginLeft = `-${this.gutter / 2}px`;
				ret.marginRight = ret.marginLeft;
            }
            return ret;
		},
	},

	render(h) {
		return h(
			this.tag,
			{
				class: [
                    'ph-row',
					this.justify !== "start" ? `is-justify-${this.justify}` : "",
					this.align !== "top" ? `is-align-${this.align}` : "",
					{ "ph-row--flex": this.type === "flex" },
				],
				style: this.style,
			},
			this.$slots.default
		);
	},
};
