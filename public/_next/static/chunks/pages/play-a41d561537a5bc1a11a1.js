(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},a=t(1063),c=t(4651),u=t(7426);var s={};function l(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,i=c.useRouter(),d=o.default.useMemo((function(){var n=a.resolveHref(i,e.href,!0),t=r(n,2),o=t[0],c=t[1];return{href:o,as:e.as?a.resolveHref(i,e.as):c||o}}),[i,e.href,e.as]),f=d.href,p=d.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,w=u.useIntersection({rootMargin:"200px"}),x=r(w,2),j=x[0],C=x[1],E=o.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);o.default.useEffect((function(){var e=C&&t&&a.isLocalURL(f),n="undefined"!==typeof g?g:i&&i.locale,r=s[f+"%"+p+(n?"%"+n:"")];e&&!r&&l(i,f,p,{locale:n})}),[p,f,C,g,t,i]);var _={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:u,scroll:c}))}(e,i,f,p,h,m,y,g)},onMouseEnter:function(e){a.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(i,f,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof g?g:i&&i.locale,k=i&&i.isLocaleDomain&&a.getDomainLocale(p,L,i&&i.locales,i&&i.domainLocales);_.href=k||a.addBasePath(a.addLocale(p,L,i&&i.defaultLocale))}return o.default.cloneElement(n,_)};n.default=d},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=i.useRef(),s=i.useState(!1),l=r(s,2),d=l[0],f=l[1],p=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||d||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return i.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[p,d]};var i=t(7294),o=t(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},1827:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(7735),i=t(7294),o=t(5893),a=function(e,n){if(!e.initializing)return e;switch(n.mode){case"progress":case"indeterminate":case"notice":case"hidden":break;default:throw new Error("Invalid status mode")}return{mode:n.mode,msg:n.msg,percent:n.percent||0,initializing:!n.initialized}},c=(0,i.createContext)([{mode:"",initializing:!0},console.log]),u=function(e){var n=e.notice,t=e.percent,r=void 0===t?0:t,i=e.indeterminate,a=void 0!==i&&i;return(0,o.jsxs)("div",{id:"status",children:[a?(0,o.jsxs)("div",{id:"status-indeterminate",onContextMenu:function(e){return e.preventDefault()},children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]}):(0,o.jsx)("div",{id:"status-progress",onContextMenu:function(e){return e.preventDefault()},children:(0,o.jsx)("div",{id:"status-progress-inner",style:{width:"".concat(r,"%")}})}),n&&(0,o.jsx)("div",{id:"status-notice",className:"godot",children:n})]})},s=function(e){var n=e.children,t=(0,i.useReducer)(a,{mode:"indeterminate",initializing:!0}),r=t[0],s=t[1];return(0,o.jsxs)(c.Provider,{value:[r,s],children:["hidden"!==r.mode&&(0,o.jsx)(u,{notice:r.msg,percent:r.percent,indeterminate:"indeterminate"===r.mode}),n]})},l=t(9163),d=l.ZP.div.withConfig({displayName:"godotstyles__CanvasContainer",componentId:"sc-8jdy86-0"})(["position:absolute;display:flex;justify-content:center;top:265px;left:425px;overflow:hidden;scrollbar-width:none;-ms-overflow-style:none;::-webkit-scrollbar{display:none;}"]),f=l.ZP.canvas.withConfig({displayName:"godotstyles__Canvas",componentId:"sc-8jdy86-1"})(["display:block;margin:0;color:white;width:400%;height:100%;outline:none;"]);function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(e){if("string"===typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return{msg:e.message,mode:"notice",initialized:!0}}var m=function(e){var n=e.engine,t=e.execname,r=e.width,a=e.height,u=(0,i.useRef)(null),s=(0,i.useState)(null),l=s[0],d=s[1],p=v((0,i.useContext)(c),2),m=p[0],y=p[1];(0,i.useEffect)((function(){n.isWebGLAvailable()?(y({mode:"indeterminate"}),d(new n)):y(h(new Error("WebGL not available")))}),[y,n]);var g="".concat(t,".pck");return(0,i.useEffect)((function(){l&&l.startGame({executable:t,onProgress:function(e,n){y(n>0?{mode:"progress",percent:e/n}:{mode:"indeterminate"})},canvas:u,canvasResizePolicy:0}).then((function(){y({mode:"hidden",initialized:!0})})).catch((function(e){return y(h(e))}))}),[l,g,y,t]),(0,i.useEffect)((function(){if(u.current){var e=u.current;e.width=r||0,e.height=a||0}}),[]),(0,o.jsxs)(f,{ref:u,id:"canvas",style:{display:m.initializing?"hidden":"block",width:"".concat(r,"px"),height:"".concat(a,"px")},children:["HTML5 canvas appears to be unsupported in the current browser.",(0,o.jsx)("br",{}),"Please try updating or use a different browser."]})},y=function(e){var n,t,r=e.execname,a=e.width,c=e.height,u=e.params,l=(0,i.useRef)(null),f=(0,i.useState)(null),p=f[0],v=f[1],h="".concat(r,".js");return n=h,t=function(){var e=window;v((function(){return e.Engine}))},(0,i.useEffect)((function(){var e=document.createElement("script");return e.src=n,e.async=!0,e.onload=t,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),(0,o.jsx)(d,{ref:l,style:{width:"".concat(a,"px"),height:"".concat(c,"px")},children:(0,o.jsx)(s,{children:p&&(0,o.jsx)(m,{engine:p,execname:r,width:a,height:c,params:u})})})},g=function(){return(0,o.jsx)(r.Z,{page:"Play",children:(0,o.jsx)(y,{execname:"/static/nearTest/index",resize:!1,width:180,height:240})})},b=function(){return(0,o.jsx)(g,{})}},1634:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play",function(){return t(1827)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)},4586:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return d}});var i=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&a.test(e)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase();if(!c(t))throw TypeError("Stringified UUID is invalid");return t};var d=function(e,n,t){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var i=0;i<16;++i)n[t+i]=r[i];return n}return l(r)}},266:function(e,n,t){"use strict";function r(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var a=e.apply(n,t);function c(e){r(a,i,o,c,u,"next",e)}function u(e){r(a,i,o,c,u,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[735,774,888,179],(function(){return n=1634,e(e.s=n);var n}));var n=e.O();_N_E=n}]);