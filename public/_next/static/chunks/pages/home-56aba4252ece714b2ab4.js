(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),u=t(4651),c=t(7426);var f={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),l=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,g=e.replace,h=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,w=c.useIntersection({rootMargin:"200px"}),x=r(w,2),k=x[0],_=x[1],E=a.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);a.default.useEffect((function(){var e=_&&t&&i.isLocalURL(p),n="undefined"!==typeof y?y:o&&o.locale,r=f[p+"%"+d+(n?"%"+n:"")];e&&!r&&s(o,p,d,{locale:n})}),[d,p,_,y,t,o]);var C={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:u}))}(e,o,p,d,g,h,m,y)},onMouseEnter:function(e){i.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof y?y:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(d,L,o&&o.locales,o&&o.domainLocales);C.href=M||i.addBasePath(i.addLocale(d,L,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=l},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=o.useRef(),f=o.useState(!1),s=r(f,2),l=s[0],p=s[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||l||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,l]);return o.useEffect((function(){if(!i&&!l){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[d,l]};var o=t(7294),a=t(3447),i="undefined"!==typeof IntersectionObserver;var u=new Map},7062:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(7294),o=t(7735),a=t(9163).ZP.div.withConfig({displayName:"populationstyles__Container",componentId:"sc-ku8sfy-0"})(["position:absolute;display:grid;grid-template-columns:3fr 1fr;-webkit-column-gap:5px;column-gap:5px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:579px;height:438px;bottom:64px;left:0;right:0;margin:auto;padding:300px 130px 0;font-size:xx-large;background-image:url('/static/images/home/homeBackground2.png');font-family:",";color:",";"],(function(e){return e.theme.fonts.secondary}),(function(e){return e.theme.colors.background})),i=t(5893),u=function(e){var n=e.population;return(0,i.jsxs)(a,{children:[(0,i.jsx)("span",{children:"population"}),(0,i.jsx)("span",{children:n>999&&n<1e6?"".concat(n/1e3,"K"):n>1e6?"".concat(n/1e6,"M"):n.toString()})]})},c=function(){var e=(0,r.useState)(16e3),n=e[0],t=e[1];return(0,r.useEffect)((function(){t(18e3)}),[]),(0,i.jsx)(o.Z,{withHomeLink:!1,page:"Home",children:(0,i.jsx)(u,{population:n})})}},3456:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t(7062)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)},4586:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return l}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&i.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(c[e[n+0]]+c[e[n+1]]+c[e[n+2]]+c[e[n+3]]+"-"+c[e[n+4]]+c[e[n+5]]+"-"+c[e[n+6]]+c[e[n+7]]+"-"+c[e[n+8]]+c[e[n+9]]+"-"+c[e[n+10]]+c[e[n+11]]+c[e[n+12]]+c[e[n+13]]+c[e[n+14]]+c[e[n+15]]).toLowerCase();if(!u(t))throw TypeError("Stringified UUID is invalid");return t};var l=function(e,n,t){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var o=0;o<16;++o)n[t+o]=r[o];return n}return s(r)}},266:function(e,n,t){"use strict";function r(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(f){return void t(f)}u.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var i=e.apply(n,t);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}t.d(n,{Z:function(){return o}})}},function(e){e.O(0,[735,774,888,179],(function(){return n=3456,e(e.s=n);var n}));var n=e.O();_N_E=n}]);