(function(){"use strict";var e={6695:function(e,t,n){var r=n(9242),o=n(3396);const u=(0,o._)("div",null,"app",-1);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[u,(0,o.Wm)(n)],64)}var i=n(89);const c={},s=(0,i.Z)(c,[["render",a]]);var f=s,l=n(2483);const d={class:"home"},p=(0,o._)("div",null,"homeView",-1),v=[p];function m(e,t,n,r,u,a){return(0,o.wg)(),(0,o.iD)("div",d,v)}var h=(0,o.aZ)({name:"HomeView",components:{}});const g=(0,i.Z)(h,[["render",m]]);var b=g;function y(e,t,n,r,u,a){const i=(0,o.up)("treeItem");return(0,o.wg)(),(0,o.j4)(i,{treeData:e.mainData},null,8,["treeData"])}var w=n(4870),j=n(7139);const O={class:"tree-item"};function k(e,t,n,r,u,a){const i=(0,o.up)("treeItem",!0);return(0,o.wg)(),(0,o.iD)("div",O,[(0,o.Uk)((0,j.zw)(n.treeData.value)+" ",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.treeData.children,((e,t)=>((0,o.wg)(),(0,o.j4)(i,{treeData:e,key:t},null,8,["treeData"])))),128))])}var D={name:"treeItem",props:{treeData:{default:function(){return{}}}}};const T=(0,i.Z)(D,[["render",k],["__scopeId","data-v-394ad6a9"]]);var _=T,I=(0,o.aZ)({name:"HomeView",components:{treeItem:_},setup(){const e=(0,w.qj)({value:"root",children:[{value:"层级1-1",children:[{value:"层级2-1",children:[{value:"层级3-1",children:[]}]},{value:"层级2-2",children:[]}]},{value:"层级1-2",children:[]}]});return{mainData:e}}});const P=(0,i.Z)(I,[["render",y]]);var C=P;const E=[{path:"/",name:"home",component:b},{path:"/testInfinityTreeRender",name:"testInfinityTreeRender",component:C},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4335))}],Z=(0,l.p7)({history:(0,l.PO)("/tes-tpg-pages/"),routes:E});var S=Z,x=n(65),A=(0,x.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(f).use(A).use(S).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var i=!0,c=0;c<r.length;c++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.1eda5407.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="testtpgpages:";n.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/tes-tpg-pages/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var a=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var f=c(n)}for(t&&t(r);s<a.length;s++)u=a[s],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},r=self["webpackChunktesttpgpages"]=self["webpackChunktesttpgpages"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6695)}));r=n.O(r)})();
//# sourceMappingURL=app.2be0035f.js.map