"use strict";

console.log();
process.on("exit", () => {
	console.log();
});

if (!process.argv[2]) {
	console.error("[组件名]必填 - Please enter new component name");
	process.exit();
}

const path = require("path");
const fs = require("fs");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentName;
const componentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, "../../packages", componentname);
/* 文件模板 */
const Files = [
	{
		filename: "index.js",
		content: `import ${componentName} from './src/main';
        
        ${componentName}.install = function(Vue){
            Vue.component(${componentName}.name,${componentName});
        };

        export default ${componentName}`,
	},
	{
		filename: "src/main.vue",
		content: `<template>
        <div class="ph-${componentname}"></div>
        </template>

        <script>
        export default {
        name: 'PH${componentName}'
        };
        </script>`,
	},
	{
		filename: path.join("../../examples/docs/zh-CN", `${componentname}.md`),
		content: `## ${componentName} ${chineseName}`,
	},
	{
		filename: path.join("../../examples/docs/en-US", `${componentname}.md`),
		content: `## ${componentName} `,
	},
	{
		filename: path.join("../../test/unit/specs", `${componentname}.spec.js`),
		content: `import {createTest,destroyVM} from '../util';
            import ${componentName} from 'packages/${componentname}';
            
            describe('${componentName}',()=>{
                let vm;
                afterEach(()=>{
                    destroyVM(vm);
                });
            })
            it('create',()=>{
                vm.createTest(${componentName},true);
                expect(vm.$el).to.exist;
            });
        });
        `,
	},
	{
		filename: path.join("../../packages/theme-chalk/src", `${componentname}.scss`),
		content: `@import "mixins/mixins";
        @import "common/var";
        @include b(${componentname}) {
        }
        `,
	},
	{
		filename: path.join("../../types", `${componentname}.d.ts`),
		content: `import { PhoonUIcomponent,PhoonUIcomponentSize } from './component';
        export declare class ${componentName} extends PhoonUIcomponent {}
        `,
	},
];

/* 添加到component.json */
const componentsFile = require("../../components.json");
if (componentsFile[componentname]) {
	console.error(`${componentname} 已存在`);
	process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, "../../components.json"))
	.write(JSON.stringify(componentsFile, null, "  "), "utf8")
	.end("\n");


    
/* 添加到index.scss */
const sassPath = path.join(__dirname, '../../packages/theme-chalk/src/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "${componentname}.scss";`;
fileSave(sassPath)
	.write(sassImportText, "utf8")
	.end("\n");

/* 添加到  phoon-ui.d.ts */
const PhoonTsPath = path.join(__dirname, "../../types/phoon-ui.d.ts");
let PhoonTsText = `${fs.readFileSync(PhoonTsPath)}
export class ${componentName} extends Ph${componentName} {}`;
const index = PhoonTsText.indexOf("export") - 1;
const importString = `import { Ph${componentName} } from './${componentname}'`;
PhoonTsText = PhoonTsText.slice(0, index) + importString + "\n" + PhoonTsText.slice(index);
fileSave(PhoonTsPath)
	.write(PhoonTsText, "utf8")
	.end("\n");

/* 创建 package */
Files.forEach((file) => {
	fileSave(path.join(PackagePath, file.filename))
		.write(file.content, "utf8")
		.end("\n");
});

/* 添加到nav.config.json */
const navconfigFile = require("../../examples/nav.config.json");
Object.keys(navconfigFile).forEach((lang) => {
	let groups = navconfigFile[lang][2].groups;
	groups[groups.length - 1].list.push({
		path: `/${componentname}`,
		title: lang === "zh-CN" && componentname !== chineseName ? `${componentName} ${chineseName}` : componentName,
	});
});
fileSave(path.join(__dirname, "../../examples/nav.config.json"))
	.write(JSON.stringify(navconfigFile, null, "  "), "utf8")
	.end("\n");

console.log("Finish!");
