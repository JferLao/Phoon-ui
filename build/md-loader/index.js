const md = require("./config");
const { stripScript } = require("./util");
module.exports = function(source) {
	const content = md.render(source);
	const startTag = "<!--phoon-demo:";
	const startTagLen = startTag.length;
	const endTag = ":phoon-demo-->";
	const endTagLen = endTag.length;

	const componenetsString = "";
	let id = 0;
	let output = [];
	let start = 0; //字符串开始的位置
	let commentStart = content.indexOf(startTag);
	let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
	while (commentStart !== -1 && commentEnd !== -1) {
        output.push(content.slice(start, commentStart));
        const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `phoon-demo${id}`;
    output.push(`<template slot="source"><${demoComponentName} /></template>`);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
    }
    // todo: 优化这段逻辑
  let pageScript = '';
  if (componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf('<script>') === 0) { // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));
  return `
    <template>
      <section class="content phon-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `;
};
