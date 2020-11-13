import navConfig from "./nav.config"; //引入导航栏配置项
import langs from "./i18n/route"; //引入语言配置项

const LOAD_MAP = {
	"zh-CN": (name) => {
		return (r) => require.ensure([], () => r(require(`./pages/zh-CN/${name}.vue`)), "zh-CN");
	},
	"en-US": (name) => {
		return (r) => require.ensure([], () => r(require(`./pages/en-US/${name}.vue`)), "en-US");
	},
};

/* 引入vue文件 */
const load = function(lang, path) {
	return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
	"zh-CN": (path) => {
		return (r) => require.ensure([], () => r(require(`./docs/zh-CN${path}.md`)), "zh-CN");
	},
	"en-US": (path) => {
		return (r) => require.ensure([], () => r(require(`./docs/en-US${path}.md`)), "en-US");
	},
};

/* 引入md文档 */
const loadDocs = function(lang, path) {
	return LOAD_DOCS_MAP[lang](path);
};

/* 路由注册 */
const registerRoute = (navConfig) => {
	let route = [];
	Object.keys(navConfig).forEach((lang, index) => {
		//动态生成路由
		let navs = navConfig[lang];
		route.push({
			path: `/${lang}/component`,
			redirect: `/${lang}/component/installation`,
			component: load(lang, "component"),
			children: [],
		});
		navs.forEach((nav) => {
			if (nav.href) return;
			if (nav.groups) {
				nav.groups.forEach((group) => {
					group.list.forEach((nav) => {
						addRoute(nav, lang, index);
					});
				});
			} else if (nav.children) {
				nav.children.forEach((nav) => {
					addRoute(nav, lang, index);
				});
			} else {
				addRoute(nav, lang, index);
			}
		});
	});

	function addRoute(page, lang, index) {
        const component = page.path === "/changelog" ? load(lang, "changelog") : loadDocs(lang, page.path);
		let child = {
			path: page.path.slice(1),
			meta: {
				title: page.title || page.name,
				description: page.description,
				lang,
			},
			name: "component-" + lang + (page.title || page.name),
			component: component.default || component,
		};
		route[index].children.push(child);
	}
	return route;
};

let route = registerRoute(navConfig);

const generateMiscRoutes = function(lang) {
	let indexRoute = {
		path: `/${lang}`, // 首页
		meta: { lang },
		name: "home" + lang,
		component: load(lang, "index"),
	};
	return [indexRoute];
};
langs.forEach((lang) => {
	route = route.concat(generateMiscRoutes(lang.lang));
});

let userLanguage = localStorage.getItem("PHOON_LANGUAGE") || window.navigator.language || "zh-CN";
let defaultPath = "/zh-CN";
if (userLanguage.indexOf("zh-") !== -1) {
	defaultPath = "/zh-CN";
} else if (userLanguage.indexOf("es") !== -1) {
	defaultPath = "/es";
}

route = route.concat([
	{
		path: "/",
		redirect: defaultPath,
	},
	{
		path: "*",
		redirect: defaultPath,
	},
]);

export default route;
