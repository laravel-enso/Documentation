(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{159:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[s("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/HistoryTracker?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/HistoryTracker&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/71c1e5e3e2c940fa8f3fb0ebda9db1fb",alt:"Codacy Badge"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://styleci.io/repos/85500161",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://styleci.io/repos/85500161/shield?branch=master",alt:"StyleCI"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/historytracker",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/historytracker/license",alt:"License"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/historytracker",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/historytracker/downloads",alt:"Total Downloads"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/historytracker",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/historytracker/version",alt:"Latest Stable Version"}}),s("OutboundLink")],1)]),s("p",[t._v("Simple to use, customizable, Laravel Model history tracking utility trait")]),s("p",[t._v("This package can work independently of the "),s("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enso"),s("OutboundLink")],1),t._v(" ecosystem.")]),s("p",[t._v("For live examples and demos, you may visit "),s("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel-enso.com"),s("OutboundLink")],1)]),t._m(1),s("p",[t._v("Comes pre-installed in Enso.")]),t._m(2),t._m(3),s("p",[t._v("The trait helps keep track of the changes made to a model by saving a snapshot for each relevant update of the model to a different 'history' table.")]),t._m(4),t._m(5),s("p",[t._v("You can choose the attributes you want to track from the model by declaring them as fillable in the history model.")]),s("p",[t._v("When the model is created, an initial snapshot of the desired attributes is saved. When the model is updated, if any one of the tracked attributes has changed, a new snapshot/history entry is persisted.")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),s("p",[t._v("are welcome. Pull requests are great, but issues are good too.")]),t._m(16),s("p",[t._v("This package is released under the MIT license.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"historytracker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#historytracker","aria-hidden":"true"}},[this._v("#")]),this._v(" HistoryTracker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To install outside of Enso: "),e("code",[this._v("composer require laravel-enso/historytracker")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The records in the history table are linked via FK to the original model. Setting a FK "),e("em",[this._v("constraint")]),this._v(" on the DB column may be set if necessary.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("Create a histories table, such as "),e("code",[this._v("model_histories")]),this._v(" - where model is what you need to keep track of.")])]),e("li",[e("p",[this._v("Create a corresponding history model, such as "),e("code",[this._v("ModelHistory")]),this._v(" and add as fillable the attributes you want tracked:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fillable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'tracked'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'attributes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("Don't forget to also have the FK column for the relationship to the tracked model.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Use the trait in the tracked model:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("use")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[this._v("HistoryTracker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Add the "),e("code",[this._v("$historyModel")]),this._v(" property to the tracked model:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$historyModel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ModelHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The trait also defines a relationship to the history model instances,\nso you can access the snapshots by calling "),e("code",[this._v("histories")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$myModel")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[this._v("histories")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);e.default=r.exports}}]);