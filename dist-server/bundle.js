!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=18)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(u=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var u,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var r={};function o(e){e.forEach((function(e){if(--r[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var n,i=void 0===t?{}:t,u=i.replace,c=void 0!==u&&u,a=i.prepend,s=void 0!==a&&a,f=i.prefix,l=void 0===f?"s":f,p=[],d=0;d<e.length;d++){var v=e[d],h=v[0],m=v[1],y=v[2],g=v[3],b=""+l+h+"-"+d;if(p.push(b),!r[b]||c){r[b]=1;var x=document.getElementById(b),w=!1;x||(w=!0,(x=document.createElement("style")).setAttribute("type","text/css"),x.id=b,y&&x.setAttribute("media",y));var P=m;g&&"function"==typeof btoa&&(P+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(g),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))+"*/"),P+="\n/*# sourceURL="+g.file+"?"+b+"*/"),"textContent"in x?x.textContent=P:x.styleSheet.cssText=P,w&&(s?document.head.insertBefore(x,document.head.childNodes[0]):document.head.appendChild(x))}else r[b]++}return o.bind(null,p)}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t){e.exports=require("path")},function(e,t,n){var r=n(15),o=n(8),i="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},function(e,t,n){(t=n(7)(!1)).push([e.i,".title {\r\n  color: #1890ff;\r\n}\r\nbutton {\r\n  width: 80px;\r\n  height: 30px\r\n}",""]),e.exports=t},function(e,t,n){var r=n(17),o=n(8),i="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},function(e,t,n){(t=n(7)(!1)).push([e.i,"h1 {\r\n  color: red;\r\n}\r\n.count {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  color: red;\r\n}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),i=(n(12),n(13),n(0)),u=n.n(i),c=n(9),a=n.n(c),s=n(10),f=n(1),l=n(3),p=n(5);function d(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){d(i,r,o,u,c,"next",e)}function c(e){d(i,r,o,u,c,"throw",e)}u(void 0)}))}}var h=n.n(p).a.div.withConfig({displayName:"index__HeaderContainer"})(["display:flex;cursor:pointer;color:#ff4500;height:80px;background-color:#eee;& > div{height:100%;flex:1;}"]),m=function(){var e=Object(f.useHistory)(),t=function(t){return function(){e.push(t)}};return u.a.createElement(h,null,u.a.createElement("div",{onClick:t("/")},"111"),u.a.createElement("div",{onClick:t("/test")},"222"))};function y(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m,null),Object(l.renderRoutes)(e.route.routes))}y.getInitialProps=v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Index -> getInitialProps");case 1:case"end":return e.stop()}}),e)})));var g=y,b=n(2),x={type:"HOME_REDUCER/ADD"};n(14);function w(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function P(){var e=Object(b.useDispatch)(),t=Object(b.useSelector)((function(e){return e.homeReducer}));return u.a.createElement("div",null,u.a.createElement("h1",{className:"title"},"Home Page"),u.a.createElement("button",{onClick:function(){e(x)}},"+1"),u.a.createElement("div",null,t))}P.getInitialProps=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("home -> getInitialProps"),e.next=3,new Promise((function(e){setTimeout((function(){t.dispatch(x),e()}),3e3)}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){w(i,r,o,u,c,"next",e)}function c(e){w(i,r,o,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();var O=P;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(s,t);var n,r,o,i,c,a=I(s);function s(){var e;j(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return q(k(e=a.call.apply(a,[this].concat(n))),"state",{finish:!1}),e}return n=s,(r=[{key:"componentDidMount",value:(i=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.getInitialProps){t.next=4;break}return t.next=3,e.getInitialProps();case 3:this.setState({finish:!0});case 4:case"end":return t.stop()}}),t,this)})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=i.apply(e,t);function u(e){R(o,n,r,u,c,"next",e)}function c(e){R(o,n,r,u,c,"throw",e)}u(void 0)}))},function(){return c.apply(this,arguments)})},{key:"render",value:function(){return console.log(this.props),this.state.finish?u.a.createElement(e,this.props):u.a.createElement("div",null,"loading")}}])&&E(n.prototype,r),o&&E(n,o),s}(u.a.Component)};n(16);function M(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function U(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){M(i,r,o,u,c,"next",e)}function c(e){M(i,r,o,u,c,"throw",e)}u(void 0)}))}}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e){var t=D(Object(i.useState)(0),2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=setInterval((function(){r((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]),u.a.createElement("div",null,u.a.createElement("h1",null,"标题"),u.a.createElement("div",{className:"count"},n))}N.getInitialProps=U(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("test -> getInitialProps"),e.next=3,new Promise((function(e){setTimeout((function(){e()}),2e3)}));case 3:case"end":return e.stop()}}),e)})));var B=T(N),H=[{key:"index",component:g,getInitialProps:g.getInitialProps,routes:[{path:"/",key:"home",exact:!0,component:O,getInitialProps:O.getInitialProps},{path:"/test",key:"test",exact:!0,render:function(){return u.a.createElement(B,{haha:"自定义的props"})},getInitialProps:B.getInitialProps}]}],F=n(4),J=n(11),G=n.n(J);var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HOME_REDUCER/ADD":return e+1;default:return e}},$=Object(F.combineReducers)({homeReducer:z}),K=function(){var e="undefined"!=typeof window&&window.__GLOBAL_STORE||{};return Object(F.createStore)($,e,Object(F.applyMiddleware)(G.a))};function Q(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}var V=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,o,i,c,d,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new p.ServerStyleSheet,r=K(),o=Object(l.matchRoutes)(H,t.path),i=[],o.forEach((function(e){e.route.getInitialProps&&i.push(e.route.getInitialProps(r))})),e.next=7,Promise.all(i);case 7:return c=Object(s.renderToString)(n.collectStyles(u.a.createElement(b.Provider,{store:r},u.a.createElement(f.StaticRouter,{location:t.path},Object(l.renderRoutes)(H))))),d=n.getStyleTags(),v=a.a.readFileSync("dist/index.html","utf-8"),h=JSON.stringify(r.getState()),v=v.replace(/<div id="app"><\/div>/g,'<div id="app">'.concat(c,"</div>\n      <script>window.__GLOBAL_STORE = ").concat(h,"<\/script>\n    ")).replace(/<head>/,"<head>".concat(d)),e.abrupt("return",v);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){Q(i,r,o,u,c,"next",e)}function c(e){Q(i,r,o,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();function W(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}var X=o()();X.use("/assets",o.a.static("dist")),X.use((function(e,t,n){return e.originalUrl&&"favicon.ico"===e.originalUrl.split("/").pop()?t.sendStatus(204):n()})),X.get("*",function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:r=e.sent,n.send(r);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){W(i,r,o,u,c,"next",e)}function c(e){W(i,r,o,u,c,"throw",e)}u(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()),X.listen(3001,(function(){console.log("listen:3001")}))}]);