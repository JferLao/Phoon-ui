"use strict";

var mdContainer = require("markdown-it-container"); //转换自定义容器


module.exports = function (md) {
  md.use(mdContainer, "demo", {
    validate: function validate(params) {
      return params.trim().match(/\^demo\s*(.*)$/);
    },
    render: function render(tokens, idx) {
      var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

      if (tokens[idx].nesting === 1) {
        var description = m && m.length > 1 ? m[1] : ''; //自定义容器被转换成demo-block组件

        var content = tokens[idx + 1] === 'fence' ? tokens[idx + 1].content : '';
        return "<demo-block>\n                ".concat(description ? "<div>".concat(md.render(description), "</div>") : '', "\n                <!--phoon-demo : ").concat(content, ":phoon-demo -->\n                ");
      }

      return '</demo-block>';
    }
  });
  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};