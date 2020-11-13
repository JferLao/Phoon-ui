"use strict";

/* 覆盖默认的渲染策略 */
module.exports = function (md) {
  console.log(md.renderer.rules.fence);
  var defaultRender = md.renderer.rules.fence;

  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var prevToken = tokens[idx - 1];
    var isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);

    if (token.info === "html" && isInDemoContainer) {
      return "<template slot=\"highlight\"><pre v-pre><code class=\"html\">".concat(md.utils.escapeHtml(token.content), "</code></pre></template>");
    }

    return defaultRender(tokens, idx, options, env, self);
  };
};