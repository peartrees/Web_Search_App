(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"61008d34"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"primary",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[a("a",{attrs:{href:"/"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Creds！")])])]),a("v-col",{staticClass:"text-center",staticStyle:{color:"red"},attrs:{cols:"8"}},[a("v-autocomplete",{class:t.SearchArea,staticStyle:{color:"#6200EE"},attrs:{loading:t.Sug_Loading,items:t.items,"search-input":t.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:"Enter Your Query","prepend-icon":"mdi-magnify","solo-inverted":"","background-color":"grey",color:"black","item-color":"black"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},"click:prepend":function(e){t.SendData(t.search),t.loading=!0},keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.SendData(t.search),t.loading=!0,t.selected=!1}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)],1),a("v-container",{directives:[{name:"show",rawName:"v-show",value:!0===t.loading,expression:"loading === true"}]},[a("v-overlay",[a("div",{attrs:{id:"content"}},[a("vue-loaders",{attrs:{name:"pacman",color:"primary",scale:"1"}}),a("h1",[t._v("Now Searching・・・")])],1)])],1),a("v-container",["Search"===t.currentComponent?a("Search",{attrs:{search_data:t.toChildSearchResult}}):t._e()],1),a("v-col",[a("br")]),a("v-container",[a("v-footer",{attrs:{color:"primary",dark:"",absolute:"",app:""}},[a("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("Copyright © Creds! All Rights Reserved")])],1)],1)],1)},o=[],s=(a("4de4"),a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",[a("v-card",{attrs:{raised:"",color:"blue lighten-4"}},[a("v-subheader",[a("h3",[t._v("Google Search Results")])]),a("v-divider",{staticClass:"mx-3"}),a("v-list",t._l(t.search_data[0],(function(e,n){return a("v-list-item",{key:e.cacheid},[a("v-list-item-content",[a("p",{staticStyle:{"font-size":"10pt",color:"#A9A9A9"},domProps:{innerHTML:t._s(e.link)}}),a("v-list-item-title",[a("a",{staticStyle:{"font-size":"15pt"},attrs:{href:e.link,target:"_blank"}},[t._v(t._s(n+1)+". "+t._s(e.title))])]),a("p",{domProps:{innerHTML:t._s(e.snippet)}})],1)],1)})),1)],1)],1)],1)}),i=[],c={name:"search",props:["search_data"],data:function(){return{title:"this is Search result area"}},computed:{loading:function(){return this.$store.getters["loading/loading"]}}},l=c,u=a("2877"),d=a("6544"),f=a.n(d),h=a("b0af"),p=a("62ad"),m=a("ce7e"),v=a("8860"),g=a("da13"),y=a("5d23"),b=a("0fd9"),_=a("e0c7"),w=Object(u["a"])(l,s,i,!1,null,null,null),x=w.exports;f()(w,{VCard:h["a"],VCol:p["a"],VDivider:m["a"],VList:v["a"],VListItem:g["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VRow:b["a"],VSubheader:_["a"]});var C=a("bc3a"),S=a.n(C),k={name:"App",data:function(){return{SearchArea:"",InputText:"",TextLength:null,loading:!1,Sug_Loading:!1,currentComponent:"home",items:[],Sug_Result:[],toChildSearchResult:"",search:"",select:"",suggestCallBack:"",selected:!0}},components:{Search:x},methods:{SendData:function(t){var e=this,a={text:t};S.a.post("/api/call_search/post",a).then((function(t){e.toChildSearchResult=t.data,e.loading=!1,e.currentComponent="Search"})).catch((function(t){alert("APIサーバと接続できません")}))},querySelections2:function(t){var e=this;this.Sug_Loading=!0,setTimeout((function(){e.items=e.states.filter((function(e){return(e||"").toLowerCase().indexOf((t||"").toLowerCase())>-1})),e.Sug_Loading=!1}),500)},querySelections:function(t){var e=this,a={text:this.search};this.Sug_Loading=!0,S.a.post("/api/get_suggest/get",a).then((function(t){e.items=t.data,console.log(t.data),e.Sug_Loading=!1})).catch((function(t){alert("APIサーバと接続できません")}))}},watch:{search:function(t){t&&t!==this.select&&this.querySelections(t)}}},j=k,L=(a("034f"),a("7496")),V=a("c6a6"),O=a("a523"),A=a("553a"),P=a("a797"),R=Object(u["a"])(j,r,o,!1,null,null,null),E=R.exports;f()(R,{VApp:L["a"],VAutocomplete:V["a"],VCol:p["a"],VContainer:O["a"],VFooter:A["a"],VOverlay:P["a"],VRow:b["a"]});a("d3b7"),a("3ca3"),a("ddb0");var T=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hello-world")},q=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},D=[],H={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},$=H,N=a("adda"),W=Object(u["a"])($,M,D,!1,null,null,null),F=W.exports;f()(W,{VCol:p["a"],VContainer:O["a"],VImg:N["a"],VRow:b["a"]});var z={name:"Home",components:{HelloWorld:F}},J=z,Q=Object(u["a"])(J,I,q,!1,null,null,null),B=Q.exports;n["default"].use(T["a"]);var G=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Y=new T["a"]({mode:"history",base:"/",routes:G}),K=Y,U=a("1da1"),X=(a("96cf"),a("2f62"));n["default"].use(X["a"]);var Z={loading:!0},tt={loading:function(t){return t.loading?t.loading:""}},et={setLoading:function(t,e){t.loading=e}},at={startLoad:function(t){return Object(U["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("setLoading",!0);case 1:case"end":return e.stop()}}),e)})))()},endLoad:function(t){return Object(U["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("setLoading",!1);case 1:case"end":return e.stop()}}),e)})))()}},nt={namespaced:!0,state:Z,getters:tt,mutations:et,actions:at},rt=a("f309");n["default"].use(rt["a"]);var ot=new rt["a"]({options:{customProperties:!0}}),st=a("6cf9"),it=a("5111");n["default"].use(it["a"]),n["default"].use(st["a"]),n["default"].config.productionTip=!1,new n["default"]({router:K,store:nt,vuetify:ot,render:function(t){return t(E)}}).$mount("#app")},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.9aa99ec9.js.map