import { expect } from "chai";
import { createVue, destroyVM } from "../util";

describe("Col", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});
	it("create", () => {
		vm = createVue(
			{
				template: `
                    <ph-col :span="24"></ph-col>
                `,
			},
			true
		);
		let colEl = vm.$el;
		expect(colEl.classList.contains("ph-col")).to.be.true;
	});
	it("span", () => {
		vm = createVue(
			{
				template: `<ph-col :span="24"></ph-col>`,
			},
			true
		);
		let colEl = vm.$el;
		expect(colEl.classList.contains("ph-col-24")).to.be.true;
	});
	it("pull", () => {
		vm = createVue(
			{
				template: `
				<ph-col :span="24" :pull="4"></ph-col>
			`,
			},
			true
		);
		let colEl = vm.$el;
		expect(colEl.classList.contains("ph-col-pull-4")).to.be.true;
	});
	it("push", () => {
		vm = createVue(
			{
				template: `
				<ph-col :span="24" :push="4"></ph-col>
			`,
			},
			true
		);
		let colEl = vm.$el;
		expect(colEl.classList.contains("ph-col-push-4")).to.be.true;
	});
	it("gutter", () => {
		vm = createVue(
			{
				template: `
				<ph-row :gutter="20">
					<ph-col :span="12" ref="col"></ph-col>
				</ph-row>
			`,
			},
			true
		);
		let colEl = vm.$refs.col.$el;
		expect(colEl.style.paddingLeft === "10px").to.be.true;
		expect(colEl.style.paddingRight === "10px").to.be.true;
	});
	it("responsive", () => {
		vm = createVue(
			{
				template: `
				<ph-row :gutter="20">
					<ph-col  ref="col" :xs="{span:4,offset:2}" :sm="{span:4,offset:2}" :md="{span:4,offset:2}" :lg="{span:4,offset:2}" :xl="{span:4,offset:2}" :xxl="8">
					</ph-col>
				</ph-row>
			`
			},
			true
		);
		let colEl = vm.$refs.col.$el;
		expect(colEl.classList.contains("ph-col-xs-4")).to.be.true;
		expect(colEl.classList.contains("ph-col-xs-offset-2")).to.be.true;
		expect(colEl.classList.contains("ph-col-sm-4")).to.be.true;
		expect(colEl.classList.contains("ph-col-sm-offset-2")).to.be.true;
		expect(colEl.classList.contains("ph-col-lg-4")).to.be.true;
		expect(colEl.classList.contains("ph-col-lg-offset-2")).to.be.true;
		expect(colEl.classList.contains("ph-col-xl-4")).to.be.true;
		expect(colEl.classList.contains("ph-col-xl-offset-2")).to.be.true;
		expect(colEl.classList.contains("ph-col-xxl-8")).to.be.true;
	});
});
