(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function s(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"9238da62"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"primary",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Ging！")])]),a("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[a("br"),a("v-text-field",{attrs:{outlined:"",rounded:"","append-icon":"mdi-magnify","background-color":"grey lighten-2",label:"Search","single-line":"",name:"input-7-4",type:"text"},on:{"click:append":function(e){t.SendData,t.currentComponent="Search"}},model:{value:t.InputText,callback:function(e){t.InputText=e},expression:"InputText"}})],1)],1)],1),a("v-container",[a("h1",[t._v("Your query is : "+t._s(t.InputText))])]),a("v-container",["Search"===t.currentComponent?a("Search"):t._e()],1),a("v-footer",{attrs:{color:"primary",dark:"",absolute:"",app:""}},[a("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("Copyright © Ging! All Rights Reserved")])],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card",{attrs:{raised:"",color:"blue lighten-4"}},[a("v-subheader",[a("h3",[t._v("Google result")])]),a("v-divider",{staticClass:"mx-3"}),a("v-card-text",[a("div",{staticClass:"body-1 mb-1"},[t._v("Displays Search Results")]),a("div",{staticClass:"body-2 mb-2"},[t._v("card text. card text.")]),a("div",{staticClass:"body-2 mb-2"},[t._v("card text. card text.")])])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-card",{attrs:{raised:"",color:"blue lighten-4"}},[a("v-subheader",[a("h3",[t._v("Bing result")])]),a("v-divider",{staticClass:"mx-3"}),a("v-card-text",[a("div",{staticClass:"body-1 mb-1"},[t._v("Displays Search Results")]),a("div",{staticClass:"body-2 mb-2"},[t._v("card text. card text.")]),a("div",{staticClass:"body-2 mb-2"},[t._v("card text. card text.")])])],1)],1)],1)},i=[],c={data:function(){return{title:"this is Search result area"}}},l=c,u=a("2877"),d=a("6544"),f=a.n(d),h=a("b0af"),p=a("99d9"),v=a("62ad"),m=a("ce7e"),b=a("0fd9"),y=a("e0c7"),g=Object(u["a"])(l,s,i,!1,null,null,null),x=g.exports;f()(g,{VCard:h["a"],VCardText:p["a"],VCol:v["a"],VDivider:m["a"],VRow:b["a"],VSubheader:y["a"]});var _=a("bc3a"),w=a.n(_),C={name:"App",data:function(){return{InputText:"",TextLength:null,currentComponent:"home",items:[]}},components:{Search:x},methods:{SendData:function(){var t=this,e={text:this.InputText};w.a.post("/api/post",e).then((function(e){t.items.push(e.data)})).catch((function(t){alert("APIサーバと接続できません")}))}}},j=C,k=a("7496"),S=a("a523"),V=a("553a"),O=a("8654"),T=Object(u["a"])(j,n,o,!1,null,null,null),P=T.exports;f()(T,{VApp:k["a"],VCol:v["a"],VContainer:S["a"],VFooter:V["a"],VRow:b["a"],VTextField:O["a"]});a("d3b7"),a("3ca3"),a("ddb0");var E=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hello-world")},A=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},R=[],L={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},q=L,M=a("adda"),$=Object(u["a"])(q,D,R,!1,null,null,null),F=$.exports;f()($,{VCol:v["a"],VContainer:S["a"],VImg:M["a"],VRow:b["a"]});var H={name:"Home",components:{HelloWorld:F}},W=H,G=Object(u["a"])(W,I,A,!1,null,null,null),J=G.exports;r["a"].use(E["a"]);var N=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],B=new E["a"]({mode:"history",base:"/",routes:N}),Q=B,Y=a("2f62");r["a"].use(Y["a"]);var z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=a("f309");r["a"].use(K["a"]);var U=new K["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Q,store:z,vuetify:U,render:function(t){return t(P)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.00e24b5d.js.map