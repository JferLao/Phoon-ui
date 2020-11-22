import { createTest, destroyVM } from "../util";
import Select from "packages/select";

describe("Select", () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});
	it("create", () => {
		vm=createTest(Select, true);
		expect(vm.$el).to.exist;
	});
});
