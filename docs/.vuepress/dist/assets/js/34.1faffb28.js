(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{233:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"people"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#people","aria-hidden":"true"}},[e._v("#")]),e._v(" People")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/People?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/People&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/aa76029e3e4c471d91370e29534f436f",alt:"Codacy Badge"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.styleci.io/repos/151952913",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.styleci.io/repos/151952913/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/people",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/people/license",alt:"License"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/people",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/people/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/people",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/people/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Person management dependency for "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enso"),a("OutboundLink")],1),e._v(" ecosystem.")]),e._v(" "),a("p",[e._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/enso-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui"),a("OutboundLink")],1),e._v(" package.")]),e._v(" "),a("p",[e._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel-enso.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/people/screenshots/bulma_001.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/people/screenshots/bulma_001_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/people/screenshots/bulma_002.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/people/screenshots/bulma_002_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[a("sup",[e._v("click on the photo to view a large size screenshot")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Comes pre-installed in Enso.")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("separates the people centric operations from the core application user model")]),e._v(" "),a("li",[e._v("allows the management of people and their details")]),e._v(" "),a("li",[e._v("integrates with and extends the application user")]),e._v(" "),a("li",[e._v("is built upon the premise that all the application users are people, but some people may not be application users")]),e._v(" "),a("li",[e._v("can be reused and integrated with other modules which might handle categories of people (e.g. company people)")]),e._v(" "),a("li",[e._v("a "),a("code",[e._v("PersonFactory")]),e._v(" is included by default in the package")]),e._v(" "),a("li",[e._v("a policy is used to ensure that a person email update cannot be performed if the person is linked to an user")]),e._v(" "),a("li",[e._v("custom validations may be added through the package configuration")]),e._v(" "),a("li",[e._v("the people server-side select functionality is included by default")]),e._v(" "),a("li",[e._v("the included "),a("code",[e._v("IsPerson")]),e._v(" trait can be used on other models that have a "),a("code",[e._v("person")]),e._v(" relationship and require email synchronization")]),e._v(" "),a("li",[e._v("enums are used for person genders and titles")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("h3",{attrs:{id:"backstory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backstory","aria-hidden":"true"}},[e._v("#")]),e._v(" Backstory")]),e._v(" "),a("p",[e._v("In previous Enso versions, there was no common ground between application users and\nother categories of actors which also represented people, for example contacts and (some types of) clients.\nThis sometimes lead to duplicated data as well as brittle and non reusable types and relationships.")]),e._v(" "),a("p",[e._v("In order to move towards better maintainability, the decision to move common data into persons was taken.\nNow the people structure can be reused as needed.")]),e._v(" "),a("h3",{attrs:{id:"under-the-hood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[e._v("#")]),e._v(" Under the Hood")]),e._v(" "),a("ul",[a("li",[e._v("the model comes with a  "),a("code",[e._v("hasUser")]),e._v(" helper to check if this person is linked to an user")]),e._v(" "),a("li",[e._v("once the person has activity in the system (through any other model relationship), it cannot be deleted")]),e._v(" "),a("li",[e._v("the proper way to delete a person is to first delete any other models it is linked to")]),e._v(" "),a("li",[e._v("since an application user will always be a person, and for Laravel authentication purposes,\nthe user is supposed to have an email address and so the 'synchronization' between the user and the person is required.\nTherefore, if the user email is updated, the person email is also updated.\nThe same thing happens if a user is created from a person, but a different email is set.")]),e._v(" "),a("li",[e._v("note that if users are created through a separate/external mechanism you will need to ensure that a corresponding\nperson is created/available during the process")]),e._v(" "),a("li",[e._v("all "),a("code",[e._v("Person")]),e._v(" attributes are fillable")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("uid")]),e._v(" Person attribute is meant as generic holder for a person's unique identifier\nwhich varies from situation to situation (e.g. SSN)")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Person")]),e._v(" model has the following helpers:\n"),a("ul",[a("li",[a("code",[e._v("hasUser")]),e._v(" - returns true if this person is associated to a user")]),e._v(" "),a("li",[a("code",[e._v("gender")]),e._v(" - determines the gender based on the set person title. If no title is set, null is returned")]),e._v(" "),a("li",[a("code",[e._v("isMandatary")]),e._v(" - returns true if this user is set a company's mandatary")])])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("PersonPolicy")]),e._v(" ensures that:\n"),a("ul",[a("li",[e._v("administrators can make any changes")]),e._v(" "),a("li",[e._v("a user can only set a")])])])]),e._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("config/enso/people.php")]),e._v(" configuration file, lets you customize the following:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("formTemplate")]),e._v(", - string, is the project relative path to the person form template,\nuseful for overriding the original")]),e._v(" "),a("li",[a("code",[e._v("tableTemplate")]),e._v(", - string, is the project relative path to the person table template,\nuseful for overriding the original")])]),e._v(" "),a("h3",{attrs:{id:"extending-the-people-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-people-functionality","aria-hidden":"true"}},[e._v("#")]),e._v(" Extending the people functionality")]),e._v(" "),a("p",[e._v("In your project you may have the need to alter and or extend the people structure by adding/removing table columns.\nTo achieve this, you'd need to:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("add migration(s) to your local project, making the necessary changes. Note that if using sqlite for testing,\nsome of the migration commands may not be available")])]),e._v(" "),a("li",[a("p",[e._v("create a new template for the person form, and declare it in the config ("),a("code",[e._v("formTemplate")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("create a new template for the person table, and declare it in the config ("),a("code",[e._v("tableTemplate")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("create a new person request validation, as required, which should extends the Enso person validation")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("LaravelEnso"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Companies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ValidatePersonStore")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" EnsoPersonStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ValidatePersonStore")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("EnsoPersonStore")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("create a new "),a("code",[e._v("Person")]),e._v(", as required, which should extend the Enso Person model, and set the "),a("code",[e._v("$fillable")]),e._v(" property")])]),e._v(" "),a("li",[a("p",[e._v("bind your local implementations to the package's request validations and model in your local "),a("code",[e._v("AppServiceProvider")])]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("LaravelEnso"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("People"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ValidatePersonStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ValidatePersonStoreRequest")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" LocalPersonStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("LaravelEnso"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("People"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ValidatePersonUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ValidatePersonUpdateRequest")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" LocalPersonUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("boot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ValidatePersonStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("LocalPersonStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ValidatePersonUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("LocalPersonUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("EnsoPerson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=people-config")]),e._v(" - configuration file")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-config")]),e._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=people-factory")]),e._v(" - the factory for the "),a("code",[e._v("Person")]),e._v(" model")]),e._v(" "),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),a("h2",{attrs:{id:"contributions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributions")]),e._v(" "),a("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("This package is released under the MIT license.")])])},[],!1,null,null,null);t.default=n.exports}}]);