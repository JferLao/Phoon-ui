const { compileTemplate } = require("@vue/component-compiler-utils");
const compiler = require("vue-template-compiler");

/* 只输出带有script标签的 */
function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
	return result && result[2] ? result[2].trim() : "";
}

/* 只输出带有style标签的 */
function stripStyle(content) {
	const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
	return result && result[2] ? result[2].trim() : "";
}

/* 只输出带有template标签的 */
function stripTemplate(content){
    contet=content.trim();
    if(!content){
        return content;
    }
    return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

/**
 * 解析模板
 * @param {template} template 
 * @param {script} script 
 */
function genInlineComponentText(template, script) {
    const finalOptions = {
      source: `<div>${template}</div>`,
      filename: 'inline-component', 
      compiler  
    };
    const compiled = compileTemplate(finalOptions);
    // tips
    if (compiled.tips && compiled.tips.length) {
      compiled.tips.forEach(tip => {
        console.warn(tip);
      });
    }
    // errors
    if (compiled.errors && compiled.errors.length) {
      console.error(
        `\n  Error compiling template:\n${pad(compiled.source)}\n` +
          compiled.errors.map(e => `  - ${e}`).join('\n') +
          '\n'
      );
    }
    /* 编译后的code */
    let demoComponentContent = `
      ${compiled.code}
    `;
    script = script.trim();
    if (script) {
      /* export default 替换为const democomponentExport = 便于后面的解构赋值 */
      script = script.replace(/export\s+default/, 'const democomponentExport =');
    } else {
      script = 'const democomponentExport = {}';
    }
    demoComponentContent = `(function() {
      ${demoComponentContent}
      ${script}
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      }
    })()`;
    return demoComponentContent;
  }
  
  module.exports = {
    stripScript,
    stripStyle,
    stripTemplate,
    genInlineComponentText
  };