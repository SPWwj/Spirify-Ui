"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[9818],{77833:function(e,n,t){t.d(n,{U:function(){return x}});var r=t(74165),c=t(15861),a=t(29439),o=t(47313),i=t(56744),s=t(43690),l=t(32697),u=t(57277),f=t(69918),p="LoginForm_formContainer__MQOUV",d="LoginForm_loginForm__DMuBH",m="LoginForm_registerButton__3wUQW",g=t(58467),v=t(46417),x=function(e){var n=e.onSubmit,t=e.enableRemember,x=(0,o.useState)(!1),y=(0,a.Z)(x,2),h=y[0],Z=y[1],b=(0,g.s0)(),j=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,n(t);case 4:return e.prev=4,Z(!1),e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[1,,4,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{className:p,children:(0,v.jsxs)(i.Z,{className:d,onFinish:j,children:[(0,v.jsx)(i.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,v.jsx)(s.Z,{})}),(0,v.jsx)(i.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,v.jsx)(s.Z.Password,{})}),t&&(0,v.jsx)(i.Z.Item,{name:"remember",valuePropName:"checked",children:(0,v.jsx)(l.Z,{children:"Remember me"})}),(0,v.jsxs)(i.Z.Item,{children:[(0,v.jsx)(u.ZP,{type:"primary",htmlType:"submit",disabled:h,children:h?(0,v.jsxs)("span",{children:["Loading...",(0,v.jsx)(f.Z,{})]}):(0,v.jsx)("span",{children:"Log in"})}),(0,v.jsx)(u.ZP,{type:"primary",className:m,onClick:function(){b("/register")},children:"Register"})]})]})})}},62578:function(e,n,t){t.r(n);var r=t(74165),c=t(15861),a=t(29439),o=t(77833),i=(t(47313),t(2135)),s=t(74976),l=t(46417);n.default=function(){var e=(0,i.lr)(),n=(0,a.Z)(e,1)[0],t=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={username:t.username,password:t.password,responseType:n.get("response_type")||"",clientId:n.get("client_id")||"",redirectUri:n.get("redirect_uri")||"",scope:n.get("scope")||""},e.next=3,s.Z.oauthLogin(c);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,l.jsx)(o.U,{onSubmit:t})}},99649:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(87462),c=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},o=t(17469),i=function(e,n){return c.createElement(o.Z,(0,r.Z)({},e,{ref:n,icon:a}))};var s=c.forwardRef(i)},38925:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(87462),c=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},o=t(17469),i=function(e,n){return c.createElement(o.Z,(0,r.Z)({},e,{ref:n,icon:a}))};var s=c.forwardRef(i)},96223:function(e,n,t){var r=(0,t(47313).createContext)({});n.Z=r},26297:function(e,n,t){var r=t(4942),c=t(29439),a=t(46123),o=t.n(a),i=t(47313),s=t(74714),l=t(96223),u=t(52358),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)n.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]])}return t};var p=["xs","sm","md","lg","xl","xxl"],d=i.forwardRef((function(e,n){var t,a=i.useContext(s.E_),d=a.getPrefixCls,m=a.direction,g=i.useContext(l.Z),v=g.gutter,x=g.wrap,y=g.supportFlexGap,h=e.prefixCls,Z=e.span,b=e.order,j=e.offset,w=e.push,O=e.pull,C=e.className,S=e.children,I=e.flex,E=e.style,P=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),_=d("col",h),k=(0,u.c)(_),L=(0,c.Z)(k,2),M=L[0],N=L[1],R={};p.forEach((function(n){var t,c={},a=e[n];"number"===typeof a?c.span=a:"object"===typeof a&&(c=a||{}),delete P[n],R=Object.assign(Object.assign({},R),(t={},(0,r.Z)(t,"".concat(_,"-").concat(n,"-").concat(c.span),void 0!==c.span),(0,r.Z)(t,"".concat(_,"-").concat(n,"-order-").concat(c.order),c.order||0===c.order),(0,r.Z)(t,"".concat(_,"-").concat(n,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,r.Z)(t,"".concat(_,"-").concat(n,"-push-").concat(c.push),c.push||0===c.push),(0,r.Z)(t,"".concat(_,"-").concat(n,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,r.Z)(t,"".concat(_,"-").concat(n,"-flex-").concat(c.flex),c.flex||"auto"===c.flex),(0,r.Z)(t,"".concat(_,"-rtl"),"rtl"===m),t))}));var F=o()(_,(t={},(0,r.Z)(t,"".concat(_,"-").concat(Z),void 0!==Z),(0,r.Z)(t,"".concat(_,"-order-").concat(b),b),(0,r.Z)(t,"".concat(_,"-offset-").concat(j),j),(0,r.Z)(t,"".concat(_,"-push-").concat(w),w),(0,r.Z)(t,"".concat(_,"-pull-").concat(O),O),t),C,R,N),W={};if(v&&v[0]>0){var A=v[0]/2;W.paddingLeft=A,W.paddingRight=A}if(v&&v[1]>0&&!y){var B=v[1]/2;W.paddingTop=B,W.paddingBottom=B}return I&&(W.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(I),!1!==x||W.minWidth||(W.minWidth=0)),M(i.createElement("div",Object.assign({},P,{style:Object.assign(Object.assign({},W),E),className:F,ref:n}),S))}));n.Z=d},84268:function(e,n,t){var r=t(4942),c=t(29439),a=t(46123),o=t.n(a),i=t(47313),s=t(74714),l=t(16284),u=t(17041),f=t(96223),p=t(52358),d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)n.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]])}return t};function m(e,n){var t=i.useState("string"===typeof e?e:""),r=(0,c.Z)(t,2),a=r[0],o=r[1];return i.useEffect((function(){!function(){if("string"===typeof e&&o(e),"object"===typeof e)for(var t=0;t<u.c.length;t++){var r=u.c[t];if(n[r]){var c=e[r];if(void 0!==c)return void o(c)}}}()}),[JSON.stringify(e),n]),a}var g=i.forwardRef((function(e,n){var t,a=e.prefixCls,g=e.justify,v=e.align,x=e.className,y=e.style,h=e.children,Z=e.gutter,b=void 0===Z?0:Z,j=e.wrap,w=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=i.useContext(s.E_),C=O.getPrefixCls,S=O.direction,I=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=(0,c.Z)(I,2),P=E[0],_=E[1],k=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),L=(0,c.Z)(k,2),M=L[0],N=L[1],R=m(v,M),F=m(g,M),W=(0,l.Z)(),A=i.useRef(b),B=(0,u.Z)();i.useEffect((function(){var e=B.subscribe((function(e){N(e);var n=A.current||0;(!Array.isArray(n)&&"object"===typeof n||Array.isArray(n)&&("object"===typeof n[0]||"object"===typeof n[1]))&&_(e)}));return function(){return B.unsubscribe(e)}}),[]);var G=C("row",a),U=(0,p.V)(G),z=(0,c.Z)(U,2),T=z[0],V=z[1],H=function(){var e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((function(n,t){if("object"===typeof n)for(var r=0;r<u.c.length;r++){var c=u.c[r];if(P[c]&&void 0!==n[c]){e[t]=n[c];break}}else e[t]=n})),e}(),X=o()(G,(t={},(0,r.Z)(t,"".concat(G,"-no-wrap"),!1===j),(0,r.Z)(t,"".concat(G,"-").concat(F),F),(0,r.Z)(t,"".concat(G,"-").concat(R),R),(0,r.Z)(t,"".concat(G,"-rtl"),"rtl"===S),t),x,V),q={},D=null!=H[0]&&H[0]>0?H[0]/-2:void 0,Q=null!=H[1]&&H[1]>0?H[1]/-2:void 0;if(D&&(q.marginLeft=D,q.marginRight=D),W){var J=(0,c.Z)(H,2);q.rowGap=J[1]}else Q&&(q.marginTop=Q,q.marginBottom=Q);var $=(0,c.Z)(H,2),K=$[0],Y=$[1],ee=i.useMemo((function(){return{gutter:[K,Y],wrap:j,supportFlexGap:W}}),[K,Y,j,W]);return T(i.createElement(f.Z.Provider,{value:ee},i.createElement("div",Object.assign({},w,{className:X,style:Object.assign(Object.assign({},q),y),ref:n}),h)))}));n.Z=g},52358:function(e,n,t){t.d(n,{V:function(){return l},c:function(){return u}});var r=t(4942),c=t(96122),a=t(73239),o=function(e){var n=e.componentCls;return(0,r.Z)({},n,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},i=function(e){var n=e.componentCls;return(0,r.Z)({},n,{position:"relative",maxWidth:"100%",minHeight:1})},s=function(e,n){return function(e,n){for(var t=e.componentCls,r=e.gridColumns,c={},a=r;a>=0;a--)0===a?(c["".concat(t).concat(n,"-").concat(a)]={display:"none"},c["".concat(t,"-push-").concat(a)]={insetInlineStart:"auto"},c["".concat(t,"-pull-").concat(a)]={insetInlineEnd:"auto"},c["".concat(t).concat(n,"-push-").concat(a)]={insetInlineStart:"auto"},c["".concat(t).concat(n,"-pull-").concat(a)]={insetInlineEnd:"auto"},c["".concat(t).concat(n,"-offset-").concat(a)]={marginInlineStart:0},c["".concat(t).concat(n,"-order-").concat(a)]={order:0}):(c["".concat(t).concat(n,"-").concat(a)]={display:"block",flex:"0 0 ".concat(a/r*100,"%"),maxWidth:"".concat(a/r*100,"%")},c["".concat(t).concat(n,"-push-").concat(a)]={insetInlineStart:"".concat(a/r*100,"%")},c["".concat(t).concat(n,"-pull-").concat(a)]={insetInlineEnd:"".concat(a/r*100,"%")},c["".concat(t).concat(n,"-offset-").concat(a)]={marginInlineStart:"".concat(a/r*100,"%")},c["".concat(t).concat(n,"-order-").concat(a)]={order:a});return c}(e,n)},l=(0,c.Z)("Grid",(function(e){return[o(e)]})),u=(0,c.Z)("Grid",(function(e){var n=(0,a.TS)(e,{gridColumns:24}),t={"-sm":n.screenSMMin,"-md":n.screenMDMin,"-lg":n.screenLGMin,"-xl":n.screenXLMin,"-xxl":n.screenXXLMin};return[i(n),s(n,""),s(n,"-xs"),Object.keys(t).map((function(e){return function(e,n,t){return(0,r.Z)({},"@media (min-width: ".concat(n,"px)"),Object.assign({},s(e,t)))}(n,t[e],e)})).reduce((function(e,n){return Object.assign(Object.assign({},e),n)}),{})]}))}}]);