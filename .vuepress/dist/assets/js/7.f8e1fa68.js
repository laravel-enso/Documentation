(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/Charts?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/Charts&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/aa6c0917f8c6425f87eb94c01d84b2f8",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://styleci.io/repos/85484767",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/85484767/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/charts",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/charts/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/charts",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/charts/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/charts",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/charts/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[t._v("Server-side data builder for charts.")]),a("p",[t._v("This package can work independently of the "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enso"),a("OutboundLink")],1),t._v(" ecosystem.")]),a("p",[t._v("The front end implementation that utilizes this api is present in the "),a("a",{attrs:{href:"https://github.com/enso-ui/charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("enso-ui/charts"),a("OutboundLink")],1),t._v(" package.")]),a("p",[t._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel-enso.com"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/charts/videos/bulma_demo_01.webm",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/charts/screenshots/bulma_cap002_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),t._m(1),t._m(2),a("p",[t._v("Comes pre-installed in Enso.")]),a("p",[t._v("To install outside of Enso:")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("ol",{attrs:{start:"2"}},[t._m(9),a("li",[a("p",[t._v("add the front end components to your pages.\nFor more information about the front end, see "),a("a",{attrs:{href:"https://github.com/enso-ui/charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("enso-ui/charts"),a("OutboundLink")],1),t._v(".")])])]),t._m(10),a("p",[t._v("The package's configuration file offers a few options for customization:")]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("p",[t._v("are welcome. Pull requests are great, but issues are good too.")]),t._m(16),a("p",[t._v("This package is released under the MIT license.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"charts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charts","aria-hidden":"true"}},[this._v("#")]),this._v(" Charts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("sup",[this._v("click on the photo to view a short demo in compatible browsers")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[s("code",[this._v("composer require laravel-enso/charts")])])]),s("li",[s("p",[this._v("publish the config with "),s("code",[this._v("php artisan vendor:publish --tag=charts-config")]),this._v(" and customize as needed")])]),s("li",[s("p",[this._v("install the api implementation for the front end: "),s("code",[this._v("yarn add @enso-ui/charts")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("it supports Bar, Bubble, Line, Pie, Doughnut, Polar Area and Radar chart types")]),s("li",[this._v("it creates properly formatted data structures, specific for each supported type of chart from a given data-set")]),s("li",[this._v("the used colors are configurable through the publishable config file")]),s("li",[this._v("can translate labels, legends and data series")]),s("li",[this._v("can download the graphical representation of the graph, as a "),s("code",[this._v("PNG")]),this._v(" file")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("In your controller, add a method that will return the data for each chart:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LineChart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Income'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'January'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'February'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'March'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'April'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'May'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'June'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'July'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("datasets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Sales'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Revenue'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("create a route for each chart dataset, add permissions if needed, etc.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("fillBackgroundOpacity")]),this._v(" - number, the chart background's opacity, default is "),s("code",[this._v("0.25")])]),s("li",[s("code",[this._v("colors")]),this._v(" - array, the list of colors used when drawing the various chart types")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),s("p",[this._v("The Chart builder will use the colors from "),s("code",[this._v("app/config/enso/charts.php")]),this._v(" (in that order) for the given data-sets.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"publishes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("php artisan vendor:publish --tag=charts-config")]),this._v(" - the configuration file")]),s("li",[s("code",[this._v("php artisan vendor:publish --tag=enso-config")]),this._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, usually used with the "),s("code",[this._v("--force")]),this._v(" flag")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"contributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);s.default=r.exports}}]);