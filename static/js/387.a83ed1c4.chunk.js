"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{6600:function(n,t,e){e.d(t,{HI:function(){return h},jn:function(){return o},vw:function(){return f}});var r=e(5861),a=e(7757),i=e.n(a),u=e(4569),c=e.n(u),s="b2380104f6a4d3099e2f62e25dfd4988";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("/trending/movie/day",{params:{api_key:s,size:20}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("/search/movie?query=".concat(t),{params:{api_key:s,size:20}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(i().mark((function n(t){var e,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=u.length>1&&void 0!==u[1]?u[1]:"movie",r="",n.t0=e,n.next="movie"===n.t0?5:"\xe7ast"===n.t0?7:"reviews"===n.t0?9:11;break;case 5:case 11:return r="movie/".concat(t),n.abrupt("break",13);case 7:return r="movie/".concat(t,"/credits"),n.abrupt("break",13);case 9:return r="movie/".concat(t,"/reviews"),n.abrupt("break",13);case 13:if(console.log("path",e,"pathUrl",r),!r){n.next=19;break}return n.next=17,c()(r,{params:{api_key:s}});case 17:return a=n.sent,n.abrupt("return",a.data);case 19:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3/"},3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});e(2791);var r,a,i,u,c,s=e(1730),o=e(168),p=e(6444),f=p.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-top: 30px;\n"]))),l=p.ZP.li(a||(a=(0,o.Z)(["\n  flex-basis: calc(((100% - ((5) - 1) * 30px)) / 5);\n  margin-right: 0px;\n  flex-grow: 1;\n"]))),h=p.ZP.img(i||(i=(0,o.Z)(["\n  display: block;\n  width: 100%;\n  /* height: 100%; */\n  margin: 0px;\n"]))),d=p.ZP.p(u||(u=(0,o.Z)(["\n  text-align: center;\n  margin: 0px;\n  background-color: black;\n  border-bottom: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  color: white;\n  list-style: none;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),x=p.ZP.span(c||(c=(0,o.Z)(["\n  color: white;\n  margin-left: 5px;\n"]))),v=e(184);var m=function(){var n=(0,s.zR)();return(0,v.jsx)(v.Fragment,{children:n&&(0,v.jsx)(f,{children:n.cast.map((function(n){var t=n.name,e=n.profile_path,r=n.character,a=n.id;return(0,v.jsxs)(l,{children:[(0,v.jsx)(h,{src:"https://image.tmdb.org/t/p/original".concat(e),alt:t}),(0,v.jsx)(d,{children:t}),(0,v.jsxs)(d,{children:["Character:",(0,v.jsx)(x,{children:r})]})]},a)}))})})}},1730:function(n,t,e){e.d(t,{Cl:function(){return l},P1:function(){return p},zR:function(){return f}});var r=e(5861),a=e(885),i=e(7757),u=e.n(i),c=e(2791),s=e(7689),o=e(6600),p=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)(null),e=(0,a.Z)(t,2),i=e[0],p=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.HI)(n).then((function(n){p(n)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),i},f=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)(null),e=(0,a.Z)(t,2),i=e[0],p=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.HI)(n,"\xe7ast").then(p);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),i},l=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)(null),e=(0,a.Z)(t,2),i=e[0],p=e[1];return(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.HI)(n,"reviews").then(p);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),i}}}]);
//# sourceMappingURL=387.a83ed1c4.chunk.js.map