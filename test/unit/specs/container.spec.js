import { createTest, createVue, destroyVM } from "../util";
import Container from "packages/container";
import Header from "packages/header";
import Main from "packages/main";
import Aside from "packages/aside";
import Footer from "packages/footer";
describe("Container", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});
	it("create", () => {
		vm = createTest(Container, true);
		expect(vm.$el).to.exist;
	});
	it("vertical", () => {
		vm = createVue(
			{
				template: `
            <ph-container>
              <ph-header></ph-header>
              <ph-main></ph-main>
            </ph-container>
          `,
			},
			true
		);
		expect(vm.$children[0].$el.classList.contains("is-vertical")).to.true;
	});
	it("direction", (done) => {
		vm = createVue(
			{
				template: `
            <ph-container :direction="direction">
              <ph-header></ph-header>
              <ph-main></ph-main>
            </ph-container>
          `,
				data() {
					return {
						direction: "horizontal",
					};
				},
			},
			true
		);
		expect(vm.$children[0].$el.classList.contains("is-vertical")).not.to.true;
		vm.direction = "vertical";
		vm.$nextTick(() => {
			expect(vm.$children[0].$el.classList.contains("is-vertical")).to.true;
			done();
		});
	});
});

describe("Header", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it("create", () => {
		vm = createTest(Header, true);
		expect(vm.$el).to.exist;
	});

	it("height", () => {
		vm = createVue(
			{
				template: `
          <ph-header height="100px"></ph-header>
        `,
			},
			true
		);
		expect(vm.$children[0].$el.style.height).to.equal("100px");
	});
});

describe("Aside", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it("create", () => {
		vm = createTest(Aside, true);
		expect(vm.$el).to.exist;
	});

	it("width", () => {
		vm = createVue(
			{
				template: `
        <ph-aside width="200px"></ph-aside>
        `,
			},
			true
		);
		expect(vm.$children[0].$el.style.width).to.equal("200px");
	});
});

describe("Main", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it("create", () => {
		vm = createTest(Main, true);
		expect(vm.$el).to.exist;
	});
});

describe("Footer", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it("create", () => {
		vm = createTest(Footer, true);
		expect(vm.$el).to.exist;
	});

	it("height", () => {
		vm = createVue(
			{
				template: `
          <ph-footer height="100px"></ph-footer>
        `,
			},
			true
		);
		expect(vm.$children[0].$el.style.height).to.equal("100px");
	});
});
