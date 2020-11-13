"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nav = _interopRequireDefault(require("./nav.config"));

var _route = _interopRequireDefault(require("./i18n/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入导航栏配置项
//引入语言配置项
var LOAD_MAP = {
  "zh-CN": function zhCN(name) {
    return function (r) {
      return require.ensure([], function () {
        return r(require("./pages/zh-CN/".concat(name, ".vue")));
      }, "zh-CN");
    };
  },
  "en-US": function enUS(name) {
    return function (r) {
      return require.ensure([], function () {
        return r(require("./pages/en-US/".concat(name, ".vue")));
      }, "en-US");
    };
  }
};
/* 引入vue文件 */

var load = function load(lang, path) {
  return LOAD_MAP[lang](path);
};

var LOAD_DOCS_MAP = {
  "zh-CN": function zhCN(path) {
    return function (r) {
      return require.ensure([], function () {
        return r(require("./docs/zh-CN".concat(path, ".md")));
      }, "zh-CN");
    };
  },
  "en-US": function enUS(path) {
    return function (r) {
      return require.ensure([], function () {
        return r(require("./docs/en-US".concat(path, ".md")));
      }, "en-US");
    };
  }
};
/* 引入md文档 */

var loadDocs = function loadDocs(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};
/* 路由注册 */


var registerRoute = function registerRoute(navConfig) {
  var route = [];
  Object.keys(navConfig).forEach(function (lang, index) {
    //动态生成路由
    var navs = navConfig[lang];
    route.push({
      path: "/".concat(lang, "/component"),
      redirect: "/".concat(lang, "/component/installation"),
      component: load(lang, "component"),
      children: []
    });
    navs.forEach(function (nav) {
      if (nav.href) return;

      if (nav.groups) {
        nav.groups.forEach(function (group) {
          group.list.forEach(function (nav) {
            addRoute(nav, lang, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(function (nav) {
          addRoute(nav, lang, index);
        });
      } else {
        addRoute(nav, lang, index);
      }
    });
  });

  function addRoute(page, lang, index) {
    var component = page.path === "/changelog" ? load(lang, "changelog") : loadDocs(lang, page.path);
    var child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang: lang
      },
      name: "component-" + lang + (page.title || page.name),
      component: component["default"] || component
    };
    route[index].children.push(child);
  }

  return route;
};

var route = registerRoute(_nav["default"]);

var generateMiscRoutes = function generateMiscRoutes(lang) {
  var indexRoute = {
    path: "/".concat(lang),
    // 首页
    meta: {
      lang: lang
    },
    name: "home" + lang,
    component: load(lang, "index")
  };
  return [indexRoute];
};

_route["default"].forEach(function (lang) {
  route = route.concat(generateMiscRoutes(lang.lang));
});

var userLanguage = localStorage.getItem("PHOON_LANGUAGE") || window.navigator.language || "zh-CN";
var defaultPath = "/zh-CN";

if (userLanguage.indexOf("zh-") !== -1) {
  defaultPath = "/zh-CN";
} else if (userLanguage.indexOf("es") !== -1) {
  defaultPath = "/es";
}

route = route.concat([{
  path: "/",
  redirect: defaultPath
}, {
  path: "*",
  redirect: defaultPath
}]);
var _default = route;
exports["default"] = _default;