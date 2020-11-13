(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define("phoon/locale/en", ["module", "exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.PHOON.lang = global.PHOON.lang || {}; 
    global.PHOON.lang.en = mod.exports;
    }
})(this, function (module, exports) {
    "use strict";

    exports.__esModule = true;
    exports.default = {
        ph: {}
    };
    module.exports = exports["default"];
});