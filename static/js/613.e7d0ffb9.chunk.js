"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[613],{6600:function(e,t,n){n.d(t,{HI:function(){return f},jn:function(){return u},vw:function(){return d}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i),c="b2380104f6a4d3099e2f62e25dfd4988";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("/trending/movie/day",{params:{api_key:c,size:20}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("/search/movie?query=".concat(t),{params:{api_key:c,size:20}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(a().mark((function e(t){var n,r,o,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=i.length>1&&void 0!==i[1]?i[1]:"movie",r="",e.t0=n,e.next="movie"===e.t0?5:"\xe7ast"===e.t0?7:"reviews"===e.t0?9:11;break;case 5:case 11:return r="movie/".concat(t),e.abrupt("break",13);case 7:return r="movie/".concat(t,"/credits"),e.abrupt("break",13);case 9:return r="movie/".concat(t,"/reviews"),e.abrupt("break",13);case 13:if(console.log("path",n,"pathUrl",r),!r){e.next=19;break}return e.next=17,s()(r,{params:{api_key:c}});case 17:return o=e.sent,e.abrupt("return",o.data);case 19:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"},4461:function(e,t,n){n.d(t,{AY:function(){return p},Ee:function(){return d},ck:function(){return l},xv:function(){return f}});var r,o,a,i,s=n(168),c=n(6444),u=n(6731),l=c.ZP.li(r||(r=(0,s.Z)(["\n  flex-basis: calc(((100% - ((5) - 1) * 30px)) / 5);\n  margin-right: 0px;\n  flex-grow: 1;\n"]))),d=c.ZP.img(o||(o=(0,s.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n"]))),p=(0,c.ZP)(u.OL)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  list-style: none;\n  text-decoration: none;\n"]))),f=c.ZP.p(i||(i=(0,s.Z)(["\n  text-align: center;\n  margin: 0px;\n  background-color: black;\n  border-bottom: 1px solid black;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  color: white;\n  list-style: none;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"])))},6128:function(e,t,n){n.d(t,{aV:function(){return u},gw:function(){return c}});var r,o,a,i=n(168),s=n(6444),c=s.ZP.h1(r||(r=(0,i.Z)(["\n  font-size: 100px;\n  font-weight: bold;\n  color: white;\n  text-align: center;\n"]))),u=s.ZP.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"])));s.ZP.div(a||(a=(0,i.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  width: 1200px;\n"])))},6613:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var r=n(2982),o=n(5861),a=n(885),i=n(7757),s=n.n(i),c=n(2791);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var m=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],v=["delay","staleId"];function h(e){return"number"===typeof e&&!isNaN(e)}function y(e){return"boolean"===typeof e}function b(e){return"string"===typeof e}function x(e){return"function"===typeof e}function T(e){return b(e)||x(e)?e:null}function E(e){return null!=e}function O(e){return(0,c.isValidElement)(e)||b(e)||x(e)||h(e)}var w={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},_={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,i=e.position,u=e.preventExitTransition,d=e.done,p=e.nodeRef,f=e.isIn,m=a?t+"--"+i:t,g=a?n+"--"+i:n,v=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e=p.current,t=m.split(" "),n=function n(o){var a;o.target===p.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,r.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,r.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,c.useEffect)((function(){var e=p.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};f||(u?t():(v.current=1,e.className+=" "+g,e.addEventListener("animationend",t)))}),[f]),c.createElement(c.Fragment,null,o)}}function k(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},P=function(e){var t=e.theme,n=e.type,r=p(e,g);return c.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var L={info:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(x(o)?a=o(i):(0,c.isValidElement)(o)?a=(0,c.cloneElement)(o,i):b(o)||h(o)?a=o:r?a=L.spinner():function(e){return e in L}(n)&&(a=L[n](i))),a}function j(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,c.useState)([]),i=(0,a.Z)(o,2),s=i[0],u=i[1],l=(0,c.useRef)(null),d=(0,c.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},m=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return d.get(e)}}).current;function g(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function w(e){u((function(t){return E(e)?t.filter((function(t){return t!==e})):[]}))}function _(){var e=m.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function C(e,t){var r=t.delay,o=t.staleId,a=p(t,v);if(O(e)&&!function(e){return!l.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||d.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,u=a.data,f=m.props,g=function(){return w(i)},C=null==s;C&&m.count++;var L,j,R={toastId:i,updateId:s,data:u,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||f.theme,icon:null!=a.icon?a.icon:f.icon,isIn:!1,key:a.key||m.toastKey++,type:a.type,closeToast:g,closeButton:a.closeButton,rtl:f.rtl,position:a.position||f.position,transition:a.transition||f.transition,className:T(a.className||f.toastClassName),bodyClassName:T(a.bodyClassName||f.bodyClassName),style:a.style||f.toastStyle,bodyStyle:a.bodyStyle||f.bodyStyle,onClick:a.onClick||f.onClick,pauseOnHover:y(a.pauseOnHover)?a.pauseOnHover:f.pauseOnHover,pauseOnFocusLoss:y(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:f.pauseOnFocusLoss,draggable:y(a.draggable)?a.draggable:f.draggable,draggablePercent:a.draggablePercent||f.draggablePercent,draggableDirection:a.draggableDirection||f.draggableDirection,closeOnClick:y(a.closeOnClick)?a.closeOnClick:f.closeOnClick,progressClassName:T(a.progressClassName||f.progressClassName),progressStyle:a.progressStyle||f.progressStyle,autoClose:!a.isLoading&&(L=a.autoClose,j=f.autoClose,!1===L||h(L)&&L>0?L:j),hideProgressBar:y(a.hideProgressBar)?a.hideProgressBar:f.hideProgressBar,progress:a.progress,role:a.role||f.role,deleteToast:function(){var e=k(d.get(i),"removed");d.delete(i),I.emit(4,e);var t=m.queue.length;if(m.count=E(i)?m.count-1:m.count-m.displayedToast,m.count<0&&(m.count=0),t>0){var r=E(i)?1:m.props.limit;if(1===t||1===r)m.displayedToast++,_();else{var o=r>t?t:r;m.displayedToast=o;for(var a=0;a<o;a++)_()}}else n()}};R.iconOut=Z(R),x(a.onOpen)&&(R.onOpen=a.onOpen),x(a.onClose)&&(R.onClose=a.onClose),R.closeButton=f.closeButton,!1===a.closeButton||O(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!O(f.closeButton)||f.closeButton);var N=e;(0,c.isValidElement)(e)&&!b(e.type)?N=(0,c.cloneElement)(e,{closeToast:g,toastProps:R,data:u}):x(e)&&(N=e({closeToast:g,toastProps:R,data:u})),f.limit&&f.limit>0&&m.count>f.limit&&C?m.queue.push({toastContent:N,toastProps:R,staleId:o}):h(r)?setTimeout((function(){P(N,R,o)}),r):P(N,R,o)}}function P(e,t,n){var o=t.toastId;n&&d.delete(n);var a={content:e,props:t};d.set(o,a),u((function(e){return[].concat((0,r.Z)(e),[o]).filter((function(e){return e!==n}))})),I.emit(4,k(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return m.containerId=e.containerId,I.cancelEmit(3).on(0,C).on(1,(function(e){return l.current&&w(e)})).on(5,g).emit(2,m),function(){d.clear(),I.emit(3,m)}}),[]),(0,c.useEffect)((function(){m.props=e,m.isToastActive=f,m.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(d.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:f}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function S(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),r=n[0],o=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),p=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,f=(0,c.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){p.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",_),document.addEventListener("touchmove",w),document.addEventListener("touchend",_);var n=d.current;p.canCloseOnClick=!0,p.canDrag=!0,p.boundingRect=n.getBoundingClientRect(),n.style.transition="",p.x=R(t.nativeEvent),p.y=N(t.nativeEvent),"x"===e.draggableDirection?(p.start=p.x,p.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(p.start=p.y,p.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(p.boundingRect){var t=p.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&p.x>=o&&p.x<=a&&p.y>=n&&p.y<=r?O():E()}}function E(){o(!0)}function O(){o(!1)}function w(t){var n=d.current;p.canDrag&&n&&(p.didMove=!0,r&&O(),p.x=R(t),p.y=N(t),"x"===e.draggableDirection?p.delta=p.x-p.start:p.delta=p.y-p.start,p.start!==p.x&&(p.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+p.delta+"px)",n.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function _(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",_);var t=d.current;if(p.canDrag&&p.didMove&&t){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,c.useEffect)((function(){f.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),x(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=f.current;x(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",E),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&g&&(C.onMouseEnter=O,C.onMouseLeave=E),y&&(C.onClick=function(e){h&&h(e),p.canCloseOnClick&&v()}),{playToast:E,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:C}}function D(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function B(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,s=e.style,l=e.controlledProgress,p=e.progress,f=e.rtl,g=e.isIn,v=e.theme,h=d(d({},s),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});l&&(h.transform="scaleX("+p+")");var y=m("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+o,u({},"Toastify__progress-bar--rtl",f)),b=x(i)?i({rtl:f,type:o,defaultClassName:y}):m(y,i),T=u({},l&&p>=1?"onTransitionEnd":"onAnimationEnd",l&&p<1?null:function(){g&&r()});return c.createElement("div",d({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:h},T))}B.defaultProps={type:_.DEFAULT,hide:!1};var A=function(e){var t=S(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,l=e.autoClose,p=e.onClick,f=e.type,g=e.hideProgressBar,v=e.closeToast,h=e.transition,y=e.position,b=e.className,T=e.style,E=e.bodyClassName,O=e.bodyStyle,w=e.progressClassName,_=e.progressStyle,C=e.updateId,k=e.role,I=e.progress,P=e.rtl,L=e.toastId,Z=e.deleteToast,j=e.isIn,R=e.isLoading,N=e.iconOut,A=e.theme,M=m("Toastify__toast","Toastify__toast-theme--"+A,"Toastify__toast--"+f,u({},"Toastify__toast--rtl",P)),z=x(b)?b({rtl:P,position:y,type:f,defaultClassName:M}):m(M,b),F=!!I,H={closeToast:v,type:f,theme:A},q=null;return!1===i||(q=x(i)?i(H):c.isValidElement(i)?c.cloneElement(i,H):D(H)),c.createElement(h,{isIn:j,done:Z,position:y,preventExitTransition:r,nodeRef:o},c.createElement("div",d(d({id:L,onClick:p,className:z},a),{},{style:T,ref:o}),c.createElement("div",d(d({},j&&{role:k}),{},{className:x(E)?E({type:f}):m("Toastify__toast-body",E),style:O}),null!=N&&c.createElement("div",{className:m("Toastify__toast-icon",u({},"Toastify--animate-icon Toastify__zoom-enter",!R))},N),c.createElement("div",null,s)),q,(l||F)&&c.createElement(B,d(d({},C&&!F?{key:"pb-"+C}:{}),{},{rtl:P,theme:A,delay:l,isRunning:n,isIn:j,closeToast:v,hide:g,type:f,style:_,className:w,controlledProgress:F,progress:I}))))},M=C({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),z=(C({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),C({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),C({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,c.forwardRef)((function(e,t){var n=j(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,l=e.rtl,p=e.containerId;function f(e){var t=m("Toastify__toast-container","Toastify__toast-container--"+e,u({},"Toastify__toast-container--rtl",l));return x(i)?i({position:e,rtl:l,defaultClassName:t}):m(t,T(i))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:p},r((function(e,t){var n=t.length?d({},s):d(d({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:f(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(A,d(d({},o),{},{isIn:a(o.toastId),style:d(d({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:w.TOP_RIGHT,transition:M,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:D,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var F,H=new Map,q=[];function U(){return Math.random().toString(36).substring(2,9)}function V(e){return e&&(b(e.toastId)||h(e.toastId))?e.toastId:U()}function Q(e,t){return H.size>0?I.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function G(e,t){return d(d({},t),{},{type:t&&t.type||e,toastId:V(t)})}function W(e){return function(t,n){return Q(t,G(e,n))}}function Y(e,t){return Q(e,G(_.DEFAULT,t))}Y.loading=function(e,t){return Q(e,G(_.DEFAULT,d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=b(o)?Y.loading(o,n):Y.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=d(d(d({type:e},s),n),{},{data:o}),i=b(t)?{render:t}:t;return r?Y.update(r,d(d({},a),i)):Y(i.render,d(d({},a),i)),o}Y.dismiss(r)},u=x(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},Y.success=W(_.SUCCESS),Y.info=W(_.INFO),Y.error=W(_.ERROR),Y.warning=W(_.WARNING),Y.warn=Y.warning,Y.dark=function(e,t){return Q(e,G(_.DEFAULT,d({theme:"dark"},t)))},Y.dismiss=function(e){H.size>0?I.emit(1,e):q=q.filter((function(t){return E(e)&&t.options.toastId!==e}))},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},Y.isActive=function(e){var t=!1;return H.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=H.get(n||F);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=d(d(d({},r),t),{},{toastId:t.toastId||e,updateId:U()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,Q(i,a)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},Y.POSITION=w,Y.TYPE=_,I.on(2,(function(e){F=e.containerId||e,H.set(F,e),q.forEach((function(e){I.emit(0,e.content,e.options)})),q=[]})).on(3,(function(e){H.delete(e.containerId||e),0===H.size&&I.off(0).off(1).off(5)}));var X=n(7689),K=n(6731),J=n(168),$=n(6444);var ee,te,ne,re,oe,ae=n.p+"static/media/search.f296e2a2677b38071fd57f8c95803b20.svg",ie=$.ZP.header(ee||(ee=(0,J.Z)(["\n  min-height: 50px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: transparent;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),se=$.ZP.form(te||(te=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),ce=$.ZP.button(ne||(ne=(0,J.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url(",");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"])),ae),ue=$.ZP.span(re||(re=(0,J.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),le=$.ZP.input(oe||(oe=(0,J.Z)(["\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),de=n(184);var pe=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),o=r[0],i=r[1],s=(0,K.lr)(),u=(0,a.Z)(s,2),l=u[0],d=u[1];return console.log(l),(0,de.jsx)(ie,{children:(0,de.jsxs)(se,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),d(""!==o?{query:o}:{}),i("")):Y.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430!")},children:[(0,de.jsx)(ce,{type:"submit",children:(0,de.jsx)(ue,{children:"Search"})}),(0,de.jsx)(le,{type:"text",placeholder:"Search movies",value:o,name:"movieTitle",onChange:function(e){var t=e.currentTarget.value;i(t.toLowerCase())}})]})})},fe=n(4461);var me=function(e){var t=e.movie,n=(0,X.TH)();return(0,de.jsx)(de.Fragment,{children:t.map((function(e){var t=e.id,r=e.title,o=e.poster_path;return(0,de.jsx)(fe.ck,{children:(0,de.jsxs)(fe.AY,{to:"/movies/".concat(t),state:{from:n},children:[(0,de.jsx)(fe.Ee,{src:"https://image.tmdb.org/t/p/original".concat(o),alt:r}),(0,de.jsx)(fe.xv,{children:r})]})},t)}))})},ge=n(6128);var ve,he=function(e){var t=e.movie,n=e.movieTitle;return(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)(ge.aV,{children:(0,de.jsx)(me,{movie:t,movieTitle:n})}),(0,de.jsx)(X.j3,{})]})},ye=n(6600),be=$.ZP.div(ve||(ve=(0,J.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n"]))),xe=n(2483);var Te=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],u=(0,c.useState)([]),l=(0,a.Z)(u,2),d=l[0],p=l[1],f=(0,c.useState)(!1),m=(0,a.Z)(f,2),g=m[0],v=m[1],h=(0,c.useState)(null),y=(0,a.Z)(h,2),b=y[0],x=y[1],T=(0,X.TH)().search.replace(/\?query=/,"")||"";return(0,c.useEffect)((function(){function e(){return(e=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n||T){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,v(!0),e.next=6,(0,ye.vw)(n||T);case 6:t=e.sent,p((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),x(e.t0);case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,T]),(0,de.jsxs)(de.Fragment,{children:[(0,de.jsxs)(be,{children:[(0,de.jsx)(pe,{onSubmit:function(e){i(e)}}),b&&(0,de.jsxs)("p",{children:["Whoops, something went wrong: ",b.message]}),(0,de.jsx)(z,{autoClose:3e3})]}),g&&(0,de.jsx)(xe.Z,{}),(0,de.jsx)(he,{movie:d,movieTitle:n})]})}}}]);
//# sourceMappingURL=613.e7d0ffb9.chunk.js.map