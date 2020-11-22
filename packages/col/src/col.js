export default {
	name: "PhCol",
	props: {
		span: {
			type: Number,
			default: 24,
		},
		offset: Number,
		pull: Number,
		push: Number,
		tag: {
			type: String,
			default: "div",
		},
		xs: [Number, Object],
		sm: [Number, Object],
		md: [Number, Object],
		lg: [Number, Object],
		xl: [Number, Object],
		xxl: [Number, Object],
	},
	computed: {
		gutter() {
			let parent = this.$parent;
			while (parent && parent.$options.componentName !== "PhRow") {
				parent = parent.$parent;
			}
			return parent ? parent.gutter : 0;
		},
	},
	render(h) {
		let classList = [];
		let style = {};
		if (this.gutter) {
			style.paddingLeft = this.gutter / 2 + "px";
			style.paddingRight = style.paddingLeft;
		}
		["span", "offset", "pull", "push"].forEach((prop) => {
			if (this[prop] || this[prop] === 0) {
				classList.push(prop !== "span" ? `ph-col-${prop}-${this[prop]}` : `ph-col-${this[prop]}`);
			}
		});

		["xs", "sm", "md", "lg", "xl", "xxl"].forEach((size) => {
			if (typeof this[size] === "number") {
				classList.push(`ph-col-${size}-${this[size]}`);
			} else if (typeof this[size] === "object") {
				let props = this[size];
				Object.keys(props).forEach((prop) => {
					classList.push(prop !== "span" ? `ph-col-${size}-${prop}-${props[prop]}` : `ph-col-${size}-${props[prop]}`);
				});
			}
		});

		return h(
			this.tag,
			{
				class: ["ph-col", classList],
				style,
			},
			this.$slots.default
		);
	},
};
