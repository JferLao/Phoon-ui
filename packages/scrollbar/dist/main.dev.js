"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resizeEvent = require("phoon-ui/src/utils/resize-event");

var _scrollbarWidth = _interopRequireDefault(require("phoon-ui/src/utils/scrollbar-width"));

var _util = require("phoon-ui/src/utils/util");

var _bar = _interopRequireDefault(require("./bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: "PhScrollBar",
  components: {
    Bar: _bar["default"]
  },
  props: {
    "native": Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean,
    tag: {
      type: String,
      "default": "div"
    }
  },
  data: function data() {
    return {
      sizeWidth: "0",
      sizeHeight: "0",
      moveX: 0,
      moveY: 0
    };
  },
  computed: {
    wrap: function wrap() {
      return this, $refs.wrap;
    }
  },
  render: function render(h) {
    var gutter = (0, _scrollbarWidth["default"])();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWidth = "-".concat(gutter, "px");
      var gutterStyle = "margin-bottom:".concat(gutterWidth, ";margin-right:").concat(gutterWidth);

      if (Array.isArray(this.wrapStyle)) {
        style = (0, _util.toObject)(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWidth;
      } else if (typeof this.wrapStyle === "string") {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }

    var view = h(this.tag, {
      "class": ["ph-scrollbar_view", this.viewClass],
      style: this.viewStyle,
      ref: "resize"
    }, this.$slots["default"]);
  }
};
exports["default"] = _default;