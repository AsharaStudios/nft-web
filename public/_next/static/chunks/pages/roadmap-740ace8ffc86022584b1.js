(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{9405:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var i=n(7294),o=n(4586),r=n(7735),a=n(8677),s=n(9163),c=s.ZP.img.withConfig({displayName:"stepButtonstyles__StepImage",componentId:"sc-b3qcv0-0"})(["position:absolute;top:","px;right:41px;"],(function(t){return t.top})),d=n(5893),p=function(t){var e=t.step,n=t.position,i=t.onClick;return(0,d.jsx)(a.z,{onClick:function(){i(e)},type:"button",children:(0,d.jsx)(c,{src:"/static/images/roadmap/".concat(function(){switch(e.status){case"done":return"lightGreen";case"progress":return"lightYellow";case"to do":return"lightOff";default:return"lightYellow"}}(),".png"),alt:"light",top:n.toString()})})},l=s.ZP.div.withConfig({displayName:"roadmapTemplatestyles__Screen",componentId:"sc-3dkvds-0"})(["position:absolute;top:110px;right:97px;width:560px;height:540px;display:flex;justify-content:center;align-items:center;"]),u=s.ZP.img.withConfig({displayName:"roadmapTemplatestyles__Crystal",componentId:"sc-3dkvds-1"})(["position:absolute;top:100px;right:90px;"]),m=s.ZP.div.withConfig({displayName:"roadmapTemplatestyles__StepList",componentId:"sc-3dkvds-2"})(["position:absolute;display:flex;flex-direction:column;top:100px;left:30px;width:290px;height:530px;overflow:auto;padding:5px;"]),h=s.ZP.p.withConfig({displayName:"roadmapTemplatestyles__StepItem",componentId:"sc-3dkvds-3"})(["width:100%;height:70px;display:grid;grid-template-columns:5fr 1fr;align-items:center;color:",";padding:5px;margin:2px 0px;border-radius:5px;cursor:pointer;:hover{color:#fff;background-color:",";}",""],(function(t){return t.color}),(function(t){return t.active?"#999":"#555"}),(function(t){return t.active?"background-color:#fff;\n        color: #000;":""})),f=s.ZP.div.withConfig({displayName:"roadmapTemplatestyles__Border",componentId:"sc-3dkvds-4"})(["width:90%;margin:0 auto;border-bottom:2px solid #fff;"]),g=s.ZP.div.withConfig({displayName:"checkboxstyles__CheckboxContainer",componentId:"sc-icmhrc-0"})(["display:flex;justify-content:center;align-content:center;"]),x=s.ZP.svg.withConfig({displayName:"checkboxstyles__Icon",componentId:"sc-icmhrc-1"})(["fill:none;stroke-width:2px;"]),_=s.ZP.input.attrs({type:"checkbox",readOnly:!0}).withConfig({displayName:"checkboxstyles__HiddenCheckbox",componentId:"sc-icmhrc-2"})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]),y=s.ZP.div.withConfig({displayName:"checkboxstyles__StyledCheckbox",componentId:"sc-icmhrc-3"})(["display:inline-block;width:25px;height:25px;background:",";border:3px solid ",";border-radius:3px;transition:all 150ms;","{stroke:",";visibility:","}"],(function(t){return t.theme.colors.background}),(function(t){return t.color}),x,(function(t){return t.color}),(function(t){return t.defaultChecked?"visible":"hidden"})),w=function(t){var e=t.checked,n=t.color;return(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{checked:e}),(0,d.jsx)(y,{color:n,defaultChecked:e,children:(0,d.jsx)(x,{viewBox:"0 0 24 24",children:(0,d.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})},k=[{name:"1",status:"done",title:"Q2 2021",description:"Define initial game and mechanics.",image:"roadmapStep_1"},{name:"2",status:"done",title:"Q3 2021",description:"Create smart contracts ERC20.",image:"roadmapStep_2"},{name:"3",status:"done",title:"Q4 2021",description:"Launch website and demo.",image:"roadmapStep_3"},{name:"4",status:"progress",title:"Q1 2022",description:"Launch apartment decoration.",image:"roadmapStep_4"},{name:"5",status:"to do",title:"Q2 2022",description:"Launch town exploration.",image:"roadmapStep_5"},{name:"6",status:"to do",title:"Q4 2022",description:"Launch crafting and pets.",image:"roadmapStep_6"},{name:"7",status:"to do",title:"Q2 2023",description:"Launch inter-town traveling.",image:"roadmapStep_7"}],v=function(){var t=(0,i.useState)(k[0]),e=t[0],n=t[1];function a(t){switch(t.status){case"done":return"#8FD032";case"progress":return"#F8C53A";default:return"#FFF"}}return(0,d.jsxs)(r.Z,{page:"Roadmap",children:[(0,d.jsx)(m,{children:k.map((function(t){return(0,d.jsxs)("span",{children:[(0,d.jsxs)(h,{color:a(t),active:(null===e||void 0===e?void 0:e.name)===t.name,onClick:function(){n(t)},children:[(0,d.jsxs)("span",{children:[(0,d.jsxs)("strong",{children:[t.title,":"]})," ",t.description]}),(0,d.jsx)(w,{checked:"done"===t.status,color:a(t)})]}),(0,d.jsx)(f,{})]},(0,o.Z)())}))}),function(){var t=205;return k.map((function(e){return t+=42,(0,d.jsx)(p,{onClick:n,position:t,step:e},(0,o.Z)())}))}(),(0,d.jsx)(l,{children:(0,d.jsx)("img",{src:"/static/images/roadmap/".concat(null===e||void 0===e?void 0:e.image,".png"),alt:"Current step"})}),(0,d.jsx)(u,{src:"/static/images/roadmap/roadmapCrystal.png",alt:"Crystal"})]})},b=function(){return(0,d.jsx)(v,{})}},318:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roadmap",function(){return n(9405)}])}},function(t){t.O(0,[735,774,888,179],(function(){return e=318,t(t.s=e);var e}));var e=t.O();_N_E=e}]);