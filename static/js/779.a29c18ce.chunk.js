"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{6600:function(n,t,e){e.d(t,{HI:function(){return l},jn:function(){return o},vw:function(){return p}});var r=e(5861),u=e(7757),a=e.n(u),i=e(4569),c=e.n(i),s="b2380104f6a4d3099e2f62e25dfd4988";function o(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("/trending/movie/day",{params:{api_key:s,size:20}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("/search/movie?query=".concat(t),{params:{api_key:s,size:20}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(a().mark((function n(t){var e,r,u,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=i.length>1&&void 0!==i[1]?i[1]:"movie",r="",n.t0=e,n.next="movie"===n.t0?5:"\xe7ast"===n.t0?7:"reviews"===n.t0?9:11;break;case 5:case 11:return r="movie/".concat(t),n.abrupt("break",13);case 7:return r="movie/".concat(t,"/credits"),n.abrupt("break",13);case 9:return r="movie/".concat(t,"/reviews"),n.abrupt("break",13);case 13:if(console.log("path",e,"pathUrl",r),!r){n.next=19;break}return n.next=17,c()(r,{params:{api_key:s}});case 17:return u=n.sent,n.abrupt("return",u.data);case 19:case"end":return n.stop()}}),n)}))),v.apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3/"},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});e(2791);var r,u,a=e(1730),i=e(168),c=e(6444),s=c.ZP.p(r||(r=(0,i.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n"]))),o=c.ZP.h2(u||(u=(0,i.Z)(["\n  font-size: 30px;\n  text-decoration: underline;\n  font-weight: bold;\n  color: white;\n"]))),f=e(184);var p=function(){var n=(0,a.Cl)();if(n)return(0,f.jsx)(f.Fragment,{children:0===n.results.length?(0,f.jsx)(s,{children:"We dont have any reviews for this movie"}):(0,f.jsx)("ul",{children:n.results.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)(o,{children:t}),(0,f.jsx)(s,{children:e})]},r)}))})})}},1730:function(n,t,e){e.d(t,{Cl:function(){return h},P1:function(){return f},zR:function(){return p}});var r=e(5861),u=e(885),a=e(7757),i=e.n(a),c=e(2791),s=e(7689),o=e(6600),f=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)(null),e=(0,u.Z)(t,2),a=e[0],f=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.HI)(n).then((function(n){f(n)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),a},p=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)(null),e=(0,u.Z)(t,2),a=e[0],f=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.HI)(n,"\xe7ast").then(f);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),a},h=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)(null),e=(0,u.Z)(t,2),a=e[0],f=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.HI)(n,"reviews").then(f);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),a}}}]);
//# sourceMappingURL=779.a29c18ce.chunk.js.map