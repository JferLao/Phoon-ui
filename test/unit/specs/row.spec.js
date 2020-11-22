import { createTest, destroyVM } from "../util";
import Row from "packages/row";
import { expect } from "chai";

describe("Row", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it("create", () => {
		vm = createTest(Row, true);
		let rowEl = vm.$el;
		expect(rowEl.classList.contains("ph-row")).to.be.true;
	});
	it("gutter", () => {
		vm = createTest(
			Row,
			{
				gutter: 20,
			},
			true
		);
		let rowEl = vm.$el;
		expect(rowEl.style.marginLeft).to.be.equal("-10px");
		expect(rowEl.style.marginRight).to.be.equal("-10px");
    });
    it("tag",()=>{
        vm = createTest(Row,{
            tag:'div'
        },true);
        let rowEl = vm.$el;
        expect(rowEl.tagName).to.be.equal('DIV');
    });
    it("type",()=>{
        vm=createTest(Row,{
            type:'flex'
        },true);
        let rowEl  = vm.$el;
        expect(rowEl.classList.contains('ph-row--flex')).to.be.true;
    });
    it("align",()=>{
        vm = createTest(Row,{
            align:'middle'
        },true);
        let rowEl = vm.$el;
        expect(rowEl.classList.contains('is-align-middle')).to.be.true;
    });
    it("justify",()=>{
        vm = createTest(Row,{
            justify:'center'
        },true);
        let rowEl = vm.$el;
        expect(rowEl.classList.contains('is-justify-center')).to.be.true;
    })
});
