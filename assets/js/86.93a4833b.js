(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{650:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_10-正则表达式必知必会-嵌入条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-正则表达式必知必会-嵌入条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 10. 正则表达式必知必会-嵌入条件")]),t._v(" "),a("h2",{attrs:{id:"_10-1-为什么要嵌入条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-为什么要嵌入条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.1 为什么要嵌入条件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123-246-7890 (123)456-7890 是合法的，找出合法的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123-246-7890 (123)456-7890 (123)-456-7890 (123-456-7890 1234567890 123 456 7890'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\(?\\d{3}\\)?-?\\d{3}-\\d{4}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123-246-7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (123)456-7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (123)-456-7890 <-- 不合法的找出来了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (123-456-7890 <-- 不合法的找出来了")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\(?\\d{3}[\\)-]?\\d{3}-\\d{4}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- 可以排除第三行, [\\)-]? 表示 括号 和 - 只能出现一个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123-246-7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (123)456-7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (123-456-7890")]),t._v("\n")])])]),a("p",[t._v("如果左边是 (，就必须匹配 (123)456-7890这种模式，否则匹配 123-246-7890，所以需要条件处理。")]),t._v(" "),a("h2",{attrs:{id:"_10-2-正则表达式里的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-正则表达式里的条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.2 正则表达式里的条件")]),t._v(" "),a("p",[t._v("正则表达式里的条件要用 ? 来定义。")]),t._v(" "),a("p",[t._v("条件嵌入两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("根据一个回溯引用来进行条件处理")]),t._v(" "),a("li",[t._v("根据一个前后查找来进行条件处理")])]),t._v(" "),a("h3",{attrs:{id:"_10-2-1-回溯引用条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1-回溯引用条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 10.2.1 回溯引用条件")]),t._v(" "),a("p",[t._v("找出 img 标签，如果 img 标签包含在 a 标签中，还要把 a 标签找出来。")]),t._v(" "),a("p",[t._v("略...")])])}],!1,null,null,null);s.default=e.exports}}]);