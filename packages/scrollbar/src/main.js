import { addResizeListener, removeResizeListener } from "phoon-ui/src/utils/resize-event";
import scrollBarWidth from "phoon-ui/src/utils/scrollbar-width";
import { toObject } from "phoon-ui/src/utils/util";
import Bar from "./bar";

export default {
	name: "PhScrollbar",

	components: { Bar },

	props: {
		native: Boolean,
		wrapStyle: {},
		wrapClass: {},
		viewClass: {},
		viewStyle: {},
		noresize: Boolean,
		tag: {
			type: String,
			default: "div",
		},
	},

	data() {
		return {
			sizeWidth: "0",
			sizeHeight: "0",
			moveX: 0,
			moveY: 0,
		};
	},

	computed: {
		wrap() {
			return this.$refs.wrap; //滚动内部容器
		},
	},

	render(h) {
		let gutter = scrollBarWidth();
		let style = this.wrapStyle;

		/* 留下滚动条的空间 */
		if (gutter) {
			const gutterWidth = `-${gutter}px`;
			const gutterStyle = `margin-bottom:${gutterWidth};margin-right:${gutterWidth}`;

			if (Array.isArray(this.wrapStyle)) {
				style = toObject(this.wrapStyle);
				style.marginRight = style.marginBottom = gutterWidth;
			} else if (typeof this.wrapStyle === "string") {
				style += gutterStyle;
			} else {
				style = gutterStyle;
			}
		}

		const view = h(
			this.tag,
			{
				class: ["ph-scrollbar__view", this.viewClass],
				style: this.viewStyle,
				ref: "resize",
			},
			this.$slots.default
		);
		const wrap = (
			<div
				ref='wrap'
				style={style}
				onScroll={this.handleScroll}
				class={[this.wrapClass, "ph-scrollbar__wrap", gutter ? "" : "ph-scrollbar__wrap--hidden-default"]}>
					{ [view] }
				</div>
		);

		let nodes;

		if (!this.native) {
			nodes = [
				wrap,
				<Bar move={this.moveX} size={this.sizeWidth}></Bar>,
				<Bar vertical move={this.moveY} size={this.sizeHeight}></Bar>,
			];
		} else {
			nodes = [
				<div ref='wrap' class={[this.wrapClass, "ph-scrollbar__wrap"]} style={style}>
					{[view]}
				</div>,
			];
		}
		/* 创建容器ph-scrollbar__wrap >   */
		return h("div", { class: "ph-scrollbar" }, nodes);
	},

	methods: {
		handleScroll() {
			const wrap = this.wrap;
			this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
			this.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth;
		},

		update() {
			let heightPercentage, widthPercentage;
			const wrap = this.wrap;
			if (!wrap) return;
			heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight;
			widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth;

			this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
			this.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
		},
	},

	mounted() {
		if (this.native) return;
		this.$nextTick(this.update);
		!this.noresize && addResizeListener(this.$refs.resize, this.update);
	},
	beforeDestroy() {
		if (this.native) return;
		!this.noresize && removeResizeListener(this.$refs.resize, this.update);
	},
};
