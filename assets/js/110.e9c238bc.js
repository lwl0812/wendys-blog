(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{655:function(t,e,s){"use strict";s.r(e);var n=s(1),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"lodash-源码阅读-cloneregexp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lodash-源码阅读-cloneregexp","aria-hidden":"true"}},[t._v("#")]),t._v(" lodash 源码阅读-cloneRegExp")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Used to match `RegExp` flags from their coerced string values. */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reFlags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w*$/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Creates a clone of `regexp`.\n *\n * @private\n * @param {Object} regexp The regexp to clone.\n * @returns {Object} Returns the cloned regexp.\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneRegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("regexp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new RegExp(pattern[, flags]), flags 参数是一个 string，所以会存在隐式转换")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reFlags.exec(regexp) 获取 regexp 的 flag")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 const exp = /a/gi;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// console.log(reFlags.exec(exp)); // ["gi", index: 3, input: "/a/gi", groups: undefined]')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组转为字符串会调用数组的 toString()，将每个元素转为字符串，用,连接")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("regexp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regexp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reFlags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regexp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" regexp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" cloneRegExp\n")])])])])}],!1,null,null,null);e.default=a.exports}}]);