(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),d=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?i.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),p=d.href,f=d.as,h=e.children,m=e.replace,g=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),w=r(j,2),b=w[0],C=w[1],_=o.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);o.default.useEffect((function(){var e=C&&n&&i.isLocalURL(p),t="undefined"!==typeof x?x:a&&a.locale,r=l[p+"%"+f+(t?"%"+t:"")];e&&!r&&u(a,p,f,{locale:t})}),[f,p,C,x,n,a]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,a,p,f,m,g,v,x)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,p,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof x?x:a&&a.locale,I=a&&a.isLocaleDomain&&i.getDomainLocale(f,N,a&&a.locales,a&&a.domainLocales);k.href=I||i.addBasePath(i.addLocale(f,N,a&&a.defaultLocale))}return o.default.cloneElement(t,k)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),l=a.useState(!1),u=r(l,2),d=u[0],p=u[1],f=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,d]);return a.useEffect((function(){if(!i&&!d){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[f,d]};var a=n(7294),o=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},8363:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(4586),a=n(7735),o=n(9163),i=o.ZP.article.withConfig({displayName:"articlestyles__Container",componentId:"sc-nrv4rt-0"})(["position:absolute;top:120px;left:110px;right:105px;height:495px;overflow:auto;::-webkit-scrollbar{display:none;}"]),s=o.ZP.section.withConfig({displayName:"articlestyles__Section",componentId:"sc-nrv4rt-1"})(["color:",";text-align:center;"],(function(e){return e.theme.colors.font})),c=o.ZP.div.withConfig({displayName:"articlestyles__Paragraph",componentId:"sc-nrv4rt-2"})(["padding:0% 10%;"]),l=o.ZP.div.withConfig({displayName:"articlestyles__Columns",componentId:"sc-nrv4rt-3"})(["display:grid;grid-template-columns:",";justify-items:center;column-gap:10px;"],(function(e){for(var t="",n=0;n<e.columnsCount;n+=1)t+="1fr ";return t})),u=n(5893),d=function(e){var t=e.children;return(0,u.jsx)(s,{children:t})},p=n(7294),f=n(1664),h=n(8805),m=o.ZP.div.withConfig({displayName:"charactersstyles__Character",componentId:"sc-1oj16n5-0"})(["display:flex;flex-direction:column;align-items:center;"]),g=o.ZP.div.withConfig({displayName:"charactersstyles__CharacterImageContainer",componentId:"sc-1oj16n5-1"})(["height:fit-content;"]),v=o.ZP.img.withConfig({displayName:"charactersstyles__CharacterImage",componentId:"sc-1oj16n5-2"})(["height:auto;width:200px;"]),x=o.ZP.div.withConfig({displayName:"charactersstyles__SocialNetworks",componentId:"sc-1oj16n5-3"})(["display:inline-block;margin:15px 0px;img{margin:2px 10px;}"]),y=o.ZP.div.withConfig({displayName:"charactersstyles__CharacterDescription",componentId:"sc-1oj16n5-4"})(["margin:5px 10px;"]),j=function(e){var t=e.characters,n=(0,p.useState)(t[0]),a=n[0],o=n[1],i=function(e){return"/static/images/about/team/about-".concat(e.name,".png")};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{columnsCount:1,children:t.map((function(e){return(0,u.jsxs)(m,{onMouseOver:function(){return o(e)},onFocus:function(){return o(e)},children:[(0,u.jsx)(g,{children:(0,u.jsx)(f.default,{passHref:!0,href:"https://asharastudios.com/",children:(0,u.jsx)("a",{href:"https://asharastudios.com/",target:"_blank",rel:"noreferrer",children:(0,u.jsx)(v,{src:i(e)})})})}),(0,u.jsx)(x,{children:e.socialNetworks.map((function(e){return(0,u.jsx)(h.Z,{name:e.name,imagePath:"/static/images/about/team/media/".concat(e.name,".svg"),href:e.link,target:"_blank",rel:"noreferrer"},(0,r.Z)())}))})]},(0,r.Z)())}))}),(0,u.jsx)(l,{columnsCount:1,children:(0,u.jsxs)(y,{children:[(0,u.jsx)("h3",{children:a.fullName}),(0,u.jsx)("p",{children:a.description})]})})]})},w=function(e){var t=e.content;return(0,u.jsx)(a.Z,{page:"About",children:(0,u.jsx)(i,{children:(0,u.jsxs)(d,{children:[(0,u.jsx)("h2",{children:t.project.title}),(0,u.jsxs)(c,{children:[(0,u.jsx)("p",{children:t.project.description.p1}),(0,u.jsx)("p",{children:t.project.description.p2})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(l,{columnsCount:4,children:[(0,u.jsx)("img",{src:"/static/images/about/about-in-game-01.png",alt:"In game 01"}),(0,u.jsx)("img",{src:"/static/images/about/about-in-game-02.png",alt:"In game 02"}),(0,u.jsx)("img",{src:"/static/images/about/about-in-game-03.png",alt:"In game 03"}),(0,u.jsx)("img",{src:"/static/images/about/about-in-game-04.png",alt:"In game 04"})]}),(0,u.jsx)("h2",{children:t.house.title}),(0,u.jsxs)(c,{children:[(0,u.jsx)("p",{children:t.house.description.p1}),(0,u.jsx)("p",{children:t.house.description.p2})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("img",{src:"/static/images/about/about-house-1.png",alt:"House"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h2",{children:t.team.title}),(0,u.jsxs)(c,{children:[(0,u.jsx)("p",{children:t.team.description.p1}),(0,u.jsx)("p",{children:t.team.description.p2})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(j,{characters:t.team.characters}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h2",{children:t.partners.title}),(0,u.jsx)(c,{children:(0,u.jsx)(l,{columnsCount:1,children:(0,u.jsx)("a",{href:"https://chrysalisguild.gg/",target:"_blank",rel:"noreferrer",children:(0,u.jsx)("img",{src:"/static/images/about/partners/aboutChrysalis_guild.png",alt:"Chrysalis guild"})})})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h2",{children:t.faq.title}),(0,u.jsx)(c,{children:(0,u.jsx)(l,{columnsCount:2,children:t.faq.description.map((function(e){return(0,u.jsxs)("span",{children:[(0,u.jsx)("h3",{children:e.title}),(0,u.jsx)("p",{children:e.description})]},(0,r.Z)())}))})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})})})},b={project:{title:"New Festival Town",description:{p1:"Turn your crypto-art into a virtual pet to take care of and explore New Festival Town, a place where your NFTs can live and interact with others.",p2:"We created a path to walk from the classic tamagotchi to the cosy life sim, looking for an accessible experience similar to games such as Stardew Valley and Animal Crossing."}},house:{title:"Da house",description:{p1:"This will be the place where your NFT will live. That ticket you buy to transmute your cryptoart includes the passage to the island we\u2019ve created for your new \u201cpet\u201d and a comfy house for it to live in until the town is built.",p2:"Our play-to-earn system is under development. We want you to enjoy your new home, as well as new places. Come to visit and explore."}},team:{title:"THE TEAM",description:{p1:"Our team is made up of people who have worked in the video game industry for several years in addition to having working experience in start-ups such as Miroculus, Workera, Globant, Torre, and more.",p2:"We are creating New Festival Town because we found in blockchain and NFTs a unique opportunity to take video games to a new level, one where the power of the developer is decentralized and built together with the community. We want to build a whole metaverse close at hand with you, the players."},characters:[{name:"ashara",fullName:"Ashara Studios",rol:"",shortDescription:"",socialNetworks:[{name:"Twitter",link:"https://twitter.com/AsharaStudios"},{name:"Linkedin",link:"https://www.linkedin.com/company/asharastudios/"}],description:"Ashara Studios is a video game studio made up by video game fans who work hard on creating significant experiences for gamers."}]},faq:{title:"",description:[]},partners:{title:"PARTNERS"}},C=function(){return(0,u.jsx)(w,{content:b})}},5706:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(8363)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return d}});var a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"===typeof e&&i.test(e)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(e,t,n){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return u(r)}},266:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[735,774,888,179],(function(){return t=5706,e(e.s=t);var t}));var t=e.O();_N_E=t}]);