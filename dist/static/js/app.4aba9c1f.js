(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"73457da2"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"primary",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[n("a",{attrs:{href:"/"}},[n("h1",{staticStyle:{color:"white"}},[t._v("Ging！")])])]),n("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[n("br"),n("vue-simple-suggest",{attrs:{list:t.getSuggestionList,"filter-by-query":!0},model:{value:t.InputText,callback:function(e){t.InputText=e},expression:"InputText"}},[n("v-text-field",{attrs:{outlined:"",rounded:"","append-icon":"mdi-magnify","background-color":"grey lighten-2",label:"Search","single-line":"",name:"input-7-4",type:"text",autocomplete:"off"},on:{"click:append":function(e){t.SendData(),t.loading=!0},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.SendData(),t.loading=!0}},model:{value:t.InputText,callback:function(e){t.InputText=e},expression:"InputText"}})],1)],1)],1)],1),n("v-container",{directives:[{name:"show",rawName:"v-show",value:!0===t.loading,expression:"loading === true"}]},[n("v-overlay",[n("div",{attrs:{id:"content"}},[n("vue-loaders",{attrs:{name:"pacman",color:"blue",scale:"1"}}),n("h1",[t._v("Now Loading・・・")])],1)])],1),n("v-container",["Search"===t.currentComponent?n("Search",{attrs:{search_data:t.toChildSearchResult}}):t._e()],1),n("v-col",[n("br")]),n("v-container",[n("v-footer",{attrs:{color:"primary",dark:"",absolute:"",app:""}},[n("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("Copyright © Ging! All Rights Reserved")])],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-card",{attrs:{raised:"",color:"blue lighten-4"}},[n("v-subheader",[n("h3",[t._v("Bing Search Results")])]),n("v-divider",{staticClass:"mx-3"}),n("v-list",t._l(t.search_data[0],(function(e,a){return n("v-list-item",{key:e.id},[n("v-list-item-content",[n("v-list-item-title",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(a+1)+". "+t._s(e.name))])]),n("p",{domProps:{innerHTML:t._s(e.snippet)}})],1)],1)})),1)],1)],1),n("v-col",{attrs:{cols:"6"}},[n("v-card",{attrs:{raised:"",color:"blue lighten-4"}},[n("v-subheader",[n("h3",[t._v("Google Search Results")])]),n("v-divider",{staticClass:"mx-3"}),n("v-list",t._l(t.search_data[1],(function(e,a){return n("v-list-item",{key:e.cacheid},[n("v-list-item-content",[n("v-list-item-title",[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(a+1)+". "+t._s(e.title))])]),n("p",{domProps:{innerHTML:t._s(e.snippet)}})],1)],1)})),1)],1)],1)],1)},i=[],l={name:"search",props:["search_data"],data:function(){return{title:"this is Search result area"}},computed:{loading:function(){return this.$store.getters["loading/loading"]}}},c=l,u=n("2877"),d=n("6544"),f=n.n(d),h=n("b0af"),p=n("62ad"),m=n("ce7e"),v=n("8860"),g=n("da13"),b=n("5d23"),y=n("0fd9"),x=n("e0c7"),_=Object(u["a"])(c,s,i,!1,null,null,null),w=_.exports;f()(_,{VCard:h["a"],VCol:p["a"],VDivider:m["a"],VList:v["a"],VListItem:g["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VRow:y["a"],VSubheader:x["a"]});var C=n("bc3a"),k=n.n(C),j=n("5111"),S=(n("c4c9"),{name:"App",data:function(){return{InputText:"",TextLength:null,loading:!1,currentComponent:"home",items:[],toChildSearchResult:"",Suggestion_List:["Canada","China","Cameroon","Italy","Iraq","Iceland"]}},components:{Search:w,VueSimpleSuggest:j["a"]},methods:{SendData:function(){var t=this,e={text:this.InputText};k.a.post("/api/post",e).then((function(e){t.toChildSearchResult=e.data,t.loading=!1,t.currentComponent="Search"})).catch((function(t){alert("APIサーバと接続できません")}))},getSuggestionList:function(){return["Canada","China","Cameroon","Italy","Iraq","Iceland"]}}}),V=S,L=(n("034f"),n("7496")),I=n("a523"),O=n("553a"),T=n("a797"),R=n("8654"),P=Object(u["a"])(V,r,o,!1,null,null,null),E=P.exports;f()(P,{VApp:L["a"],VCol:p["a"],VContainer:I["a"],VFooter:O["a"],VOverlay:T["a"],VRow:y["a"],VTextField:R["a"]});n("d3b7"),n("3ca3"),n("ddb0");var A=n("8c4f"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},M=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},H=[],$={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},F=$,N=n("adda"),W=Object(u["a"])(F,D,H,!1,null,null,null),G=W.exports;f()(W,{VCol:p["a"],VContainer:I["a"],VImg:N["a"],VRow:y["a"]});var J={name:"Home",components:{HelloWorld:G}},B=J,Q=Object(u["a"])(B,q,M,!1,null,null,null),z=Q.exports;a["default"].use(A["a"]);var K=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],U=new A["a"]({mode:"history",base:"/",routes:K}),X=U,Y=n("1da1"),Z=(n("96cf"),n("2f62"));a["default"].use(Z["a"]);var tt={loading:!0},et={loading:function(t){return t.loading?t.loading:""}},nt={setLoading:function(t,e){t.loading=e}},at={startLoad:function(t){return Object(Y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("setLoading",!0);case 1:case"end":return e.stop()}}),e)})))()},endLoad:function(t){return Object(Y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("setLoading",!1);case 1:case"end":return e.stop()}}),e)})))()}},rt={namespaced:!0,state:tt,getters:et,mutations:nt,actions:at},ot=n("f309");a["default"].use(ot["a"]);var st=new ot["a"]({}),it=n("6cf9");a["default"].use(it["a"]),a["default"].config.productionTip=!1,new a["default"]({router:X,store:rt,vuetify:st,render:function(t){return t(E)}}).$mount("#app")},"85ec":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"static/img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.4aba9c1f.js.map