import { on, off } from "phoon-ui/src/utils/dom";
import { renderThumbStyle, BAR_MAP } from "./util";

/* 滚动条 */
export default {
	name: "Bar",

	props: {
		vertical: Boolean,
		size: String,
		move: Number,
	},

	computed: {
		bar() {
			return BAR_MAP[this.vertical ? "vertical" : "horizontal"];
		},

		wrap() {
			return this.$parent.wrap;
		},
	},

	render(h) {
		const { size, bar, move } = this;

		return (
			<div class={["ph-scrollbar__bar", "is-" + bar.key]} onMousedown={this.clickTrackHandler}>
				<div
					ref='thumb'
					class='ph-scrollbar__thumb'
					onMousedown={this.clickThumbHandler}
					style={renderThumbStyle({ size, move, bar })}></div>
			</div>
		);
	},

	methods: {
		clickThumbHandler(e) {
			if (e.ctrlKey || e.button === 2) {
				//点击ctrl时和鼠标右键时不执行
				return;
			}
			this.startDrag(e);
			this[this.bar.axis] =
				e.currentTarget[this.bar.offset] -
				(e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
		},

		startDrag(e) {
			e.stopImmediatePropagation();
			this.cursorDown = true;

			on(document, "mousemove", this.mouseMoveDocumentHandler);
			on(document, "moseup", this.mouseUpDocumentHandler);
			document.onselectstart = () => false;
		},

		clickTrackHandler(e) {
			const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
			const thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
			const thumbPositionPercentage = ((offset - thumbHalf) * 100) / this.$el[this.bar.offset];

			this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize]) / 100;
		},

		/* 鼠标向上移动事件 */
		mouseMoveDocumentHandler(e) {
			if (this.cursorDown === false) return;
			const prevPage = this[this.bar.axis];
			if (!prevPage) return;

			const offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
			const thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
			const thumbPositionPercentage = ((offset - thumbClickPosition) * 100) / this.$el[this.bar.offset];
			this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize]) / 100;
		},

		/* 鼠标松开点击事件 */
		mouseUpDocumentHandler(e) {
			this.cursorDown = false;
			this[this.bar.axis] = 0;
			off(document, "mousemove", this.mouseMoveDocumentHandler);
			document.onselectstart = null;
		},
	},

	destroyed() {
		off(document, "mouseup", this.mouseUpDocumentHandler);
	},
};
