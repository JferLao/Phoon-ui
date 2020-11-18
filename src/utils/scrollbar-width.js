import Vue from "vue";

/* 创建两个容器其中通过两个容器直接滚动条间距计算出滚动条宽度 */
let scrollBarWidth;
export default function() {
	if (Vue.prototype.$isSeerver) return 0;
	if (scrollBarWidth !== undefined) return scrollBarWidth;
	const outer = document.createElement("div");		
	outer.className = "ph-scrollbar__wrap";
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.position = "absolute";
	outer.style.top = "-9999px";
	document.body.appendChild(outer);
	const widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";

	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	const widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
    scrollBarWidth = widthNoScroll - widthWithScroll;
    

    return scrollBarWidth
}
