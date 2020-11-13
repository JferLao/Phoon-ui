"use strict";

var _require = require("@vue/component-compiler-utils"),
    compileTemplate = _require.compileTemplate;

var compiler = require("vue-template-compiler");

function stripScript(content) {
  var result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

function stripStyle(content) {
  var result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

function stripTemplate(content) {
  contet = content.trim();

  if (!content) {
    return content;
  }

  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function genInlineComponentText(template, script) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  var finalOptions = {
    source: "<div>".concat(template, "</div>"),
    filename: 'inline-component',
    // TODO：这里有待调整
    compiler: compiler
  };
  var compiled = compileTemplate(finalOptions); // tips

  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(function (tip) {
      console.warn(tip);
    });
  } // errors


  if (compiled.errors && compiled.errors.length) {
    console.error("\n  Error compiling template:\n".concat(pad(compiled.source), "\n") + compiled.errors.map(function (e) {
      return "  - ".concat(e);
    }).join('\n') + '\n');
  }

  var demoComponentContent = "\n      ".concat(compiled.code, "\n    ");
  script = script.trim();

  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    script = 'const democomponentExport = {}';
  }

  demoComponentContent = "(function() {\n      ".concat(demoComponentContent, "\n      ").concat(script, "\n      return {\n        render,\n        staticRenderFns,\n        ...democomponentExport\n      }\n    })()");
  return demoComponentContent;
}

module.exports = {
  stripScript: stripScript,
  stripStyle: stripStyle,
  stripTemplate: stripTemplate,
  genInlineComponentText: genInlineComponentText
};