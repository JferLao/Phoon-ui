import {
    createTest,
    createVue,
    destroyVM
} from "../util";
import Button from "packages/button";
import {
    expect
} from "chai";

describe("Button", () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });

    it("create", () => {
        vm = createTest(
            Button, {
                type: "primary",
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("ph-button--primary")).to.be.true;
    });

    it("icon", () => {
        vm = createTest(
            Button, {
                icon: "ph-icon-loading",
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.querySelector(".ph-icon-loading")).to.be.ok;
    });
    it("nativeType", () => {
        vm = createTest(
            Button, {
                nativeType: "submit",
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.getAttribute("type")).to.be.equal("submit");
    });
    it("loading", () => {
        vm = createTest(
            Button, {
                loading: true,
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("is-loading")).to.be.true;
        expect(buttonEl.querySelector(".ph-icon-loading")).to.be.ok;
    });
    it("disabled", () => {
        vm = createTest(
            Button, {
                disabled: true,
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("is-disabled")).to.be.true;
    });
    it("size", () => {
        vm = createTest(
            Button, {
                size: "large",
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("ph-button--large")).to.be.true;
    });
    it("plain", () => {
        vm = createTest(
            Button, {
                plain: true,
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("is-plain")).to.be.true;
    });
    it("round", () => {
        vm = createTest(
            Button, {
                round: true,
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("is-round")).to.be.true;
    });
    it("circle", () => {
        vm = createTest(
            Button, {
                circle: true,
            },
            true
        );
        let buttonEl = vm.$el;
        expect(buttonEl.classList.contains("is-circle")).to.be.true;
    });
    it("click", (done) => {
        let result;
        vm = createVue({
                template: `
                <ph-button @click="handleClick"></ph-button>
            `,
                methods: {
                    handleClick(e) {
                        result = e;
                    },
                },
            },
            true
        );
        vm.$el.click();
        setTimeout((_) => {
            expect(result).to.exist;
            done();
        }, 20);
    });
    it("click inside", (done) => {
        let result;
        vm = createVue({
                template: `
            <ph-button @click="handleClick"><span class="inner"></span></ph-button>
            `,
                methods: {
                    handleClick(e) {
                        result = e;
                    },
                },
            },
            true
        );
        vm.$el.querySelector(".inner").click();
        setTimeout((_) => {
            expect(result).to.exist;
            done();
        }, 20);
    });
    it("Disable while loading", (done) => {
        let result;
        vm = createVue({
                template: `<ph-button loading @click="handleClick"><span class="inner"></span></ph-button>`,
                methods: {
                    handleClick(e) {
                        result = e;
                    },
                },
            },
            true
        );
        vm.$el.querySelector(".inner").click();
        setTimeout((_) => {
            expect(result).to.not.exist;
            done();
        }, 20);
    });
});