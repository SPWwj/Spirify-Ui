"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[7019],{67019:function(t,e,n){n.d(e,{Z:function(){return L}});var a=n(4942),c=n(29439),i=n(93433),o=n(46123),r=n.n(o),l=n(47313),d=n(76121),m=n(17041),s=n(74714),g=n(82926),p=n(84268),f=n(99178),u=n(18151),h=n(69918),Z=n(48138),x=n(26297),v=l.createContext({}),S=(v.Consumer,function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n}),y=function(t,e){var n=t.prefixCls,c=t.children,i=t.actions,o=t.extra,d=t.className,m=t.colStyle,g=S(t,["prefixCls","children","actions","extra","className","colStyle"]),p=(0,l.useContext)(v),f=p.grid,u=p.itemLayout,h=(0,l.useContext)(s.E_).getPrefixCls,y=h("list",n),b=i&&i.length>0&&l.createElement("ul",{className:"".concat(y,"-item-action"),key:"actions"},i.map((function(t,e){return l.createElement("li",{key:"".concat(y,"-item-action-").concat(e)},t,e!==i.length-1&&l.createElement("em",{className:"".concat(y,"-item-action-split")}))}))),E=f?"div":"li",C=l.createElement(E,Object.assign({},g,f?{}:{ref:e},{className:r()("".concat(y,"-item"),(0,a.Z)({},"".concat(y,"-item-no-flex"),!("vertical"===u?o:!function(){var t;return l.Children.forEach(c,(function(e){"string"===typeof e&&(t=!0)})),t&&l.Children.count(c)>1}())),d)}),"vertical"===u&&o?[l.createElement("div",{className:"".concat(y,"-item-main"),key:"content"},c,b),l.createElement("div",{className:"".concat(y,"-item-extra"),key:"extra"},o)]:[c,b,(0,Z.Tm)(o,{key:"extra"})]);return f?l.createElement(x.Z,{ref:e,flex:1,style:m},C):C},b=(0,l.forwardRef)(y);b.Meta=function(t){var e=t.prefixCls,n=t.className,a=t.avatar,c=t.title,i=t.description,o=S(t,["prefixCls","className","avatar","title","description"]),d=(0,(0,l.useContext)(s.E_).getPrefixCls)("list",e),m=r()("".concat(d,"-item-meta"),n),g=l.createElement("div",{className:"".concat(d,"-item-meta-content")},c&&l.createElement("h4",{className:"".concat(d,"-item-meta-title")},c),i&&l.createElement("div",{className:"".concat(d,"-item-meta-description")},i));return l.createElement("div",Object.assign({},o,{className:m}),a&&l.createElement("div",{className:"".concat(d,"-item-meta-avatar")},a),(c||i)&&g)};var E=b,C=n(40601),k=n(96122),O=n(73239),z=function(t){var e,n,c=t.listBorderedCls,i=t.componentCls,o=t.paddingLG,r=t.margin,l=t.itemPaddingSM,d=t.itemPaddingLG,m=t.marginLG,s=t.borderRadiusLG;return n={},(0,a.Z)(n,"".concat(c),(e={border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder),borderRadius:s},(0,a.Z)(e,"".concat(i,"-header,").concat(i,"-footer,").concat(i,"-item"),{paddingInline:o}),(0,a.Z)(e,"".concat(i,"-pagination"),{margin:"".concat(r,"px ").concat(m,"px")}),e)),(0,a.Z)(n,"".concat(c).concat(i,"-sm"),(0,a.Z)({},"".concat(i,"-item,").concat(i,"-header,").concat(i,"-footer"),{padding:l})),(0,a.Z)(n,"".concat(c).concat(i,"-lg"),(0,a.Z)({},"".concat(i,"-item,").concat(i,"-header,").concat(i,"-footer"),{padding:d})),n},N=function(t){var e,n,c,i,o=t.componentCls,r=t.screenSM,l=t.screenMD,d=t.marginLG,m=t.marginSM,s=t.margin;return i={},(0,a.Z)(i,"@media screen and (max-width:".concat(l,")"),(e={},(0,a.Z)(e,"".concat(o),(0,a.Z)({},"".concat(o,"-item"),(0,a.Z)({},"".concat(o,"-item-action"),{marginInlineStart:d}))),(0,a.Z)(e,"".concat(o,"-vertical"),(0,a.Z)({},"".concat(o,"-item"),(0,a.Z)({},"".concat(o,"-item-extra"),{marginInlineStart:d}))),e)),(0,a.Z)(i,"@media screen and (max-width: ".concat(r,")"),(c={},(0,a.Z)(c,"".concat(o),(0,a.Z)({},"".concat(o,"-item"),(0,a.Z)({flexWrap:"wrap"},"".concat(o,"-action"),{marginInlineStart:m}))),(0,a.Z)(c,"".concat(o,"-vertical"),(0,a.Z)({},"".concat(o,"-item"),(n={flexWrap:"wrap-reverse"},(0,a.Z)(n,"".concat(o,"-item-main"),{minWidth:t.contentWidth}),(0,a.Z)(n,"".concat(o,"-item-extra"),{margin:"auto auto ".concat(s,"px")}),n))),c)),i},B=function(t){var e,n,c,i,o,r,l=t.componentCls,d=t.antCls,m=t.controlHeight,s=t.minHeight,g=t.paddingSM,p=t.marginLG,f=t.padding,u=t.itemPadding,h=t.colorPrimary,Z=t.itemPaddingSM,x=t.itemPaddingLG,v=t.paddingXS,S=t.margin,y=t.colorText,b=t.colorTextDescription,E=t.motionDurationSlow,k=t.lineWidth,O=t.headerBg,z=t.footerBg,N=t.emptyTextPadding,B=t.metaMarginBottom,M=t.avatarMarginRight,w=t.titleMarginBottom,P=t.descriptionFontSize,L={};return["start","center","end"].forEach((function(t){L["&-align-".concat(t)]={textAlign:t}})),r={},(0,a.Z)(r,"".concat(l),Object.assign(Object.assign({},(0,C.Wf)(t)),(i={position:"relative","*":{outline:"none"}},(0,a.Z)(i,"".concat(l,"-header"),{background:O}),(0,a.Z)(i,"".concat(l,"-footer"),{background:z}),(0,a.Z)(i,"".concat(l,"-header, ").concat(l,"-footer"),{paddingBlock:g}),(0,a.Z)(i,"".concat(l,"-pagination"),Object.assign(Object.assign({marginBlockStart:p},L),(0,a.Z)({},"".concat(d,"-pagination-options"),{textAlign:"start"}))),(0,a.Z)(i,"".concat(l,"-spin"),{minHeight:s,textAlign:"center"}),(0,a.Z)(i,"".concat(l,"-items"),{margin:0,padding:0,listStyle:"none"}),(0,a.Z)(i,"".concat(l,"-item"),(c={display:"flex",alignItems:"center",justifyContent:"space-between",padding:u,color:y},(0,a.Z)(c,"".concat(l,"-item-meta"),(e={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},(0,a.Z)(e,"".concat(l,"-item-meta-avatar"),{marginInlineEnd:M}),(0,a.Z)(e,"".concat(l,"-item-meta-content"),{flex:"1 0",width:0,color:y}),(0,a.Z)(e,"".concat(l,"-item-meta-title"),{margin:"0 0 ".concat(t.marginXXS,"px 0"),color:y,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":(0,a.Z)({color:y,transition:"all ".concat(E)},"&:hover",{color:h})}),(0,a.Z)(e,"".concat(l,"-item-meta-description"),{color:b,fontSize:P,lineHeight:t.lineHeight}),e)),(0,a.Z)(c,"".concat(l,"-item-action"),(n={flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none"},(0,a.Z)(n,"& > li",(0,a.Z)({position:"relative",display:"inline-block",padding:"0 ".concat(v,"px"),color:b,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),(0,a.Z)(n,"".concat(l,"-item-action-split"),{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:k,height:Math.ceil(t.fontSize*t.lineHeight)-2*t.marginXXS,transform:"translateY(-50%)",backgroundColor:t.colorSplit}),n)),c)),(0,a.Z)(i,"".concat(l,"-empty"),{padding:"".concat(f,"px 0"),color:b,fontSize:t.fontSizeSM,textAlign:"center"}),(0,a.Z)(i,"".concat(l,"-empty-text"),{padding:N,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"}),(0,a.Z)(i,"".concat(l,"-item-no-flex"),{display:"block"}),i))),(0,a.Z)(r,"".concat(l,"-grid ").concat(d,"-col > ").concat(l,"-item"),{display:"block",maxWidth:"100%",marginBlockEnd:S,paddingBlock:0,borderBlockEnd:"none"}),(0,a.Z)(r,"".concat(l,"-vertical ").concat(l,"-item"),(o={alignItems:"initial"},(0,a.Z)(o,"".concat(l,"-item-main"),{display:"block",flex:1}),(0,a.Z)(o,"".concat(l,"-item-extra"),{marginInlineStart:p}),(0,a.Z)(o,"".concat(l,"-item-meta"),(0,a.Z)({marginBlockEnd:B},"".concat(l,"-item-meta-title"),{marginBlockStart:0,marginBlockEnd:w,color:y,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG})),(0,a.Z)(o,"".concat(l,"-item-action"),{marginBlockStart:f,marginInlineStart:"auto","> li":(0,a.Z)({padding:"0 ".concat(f,"px")},"&:first-child",{paddingInlineStart:0})}),o)),(0,a.Z)(r,"".concat(l,"-split ").concat(l,"-item"),(0,a.Z)({borderBlockEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)},"&:last-child",{borderBlockEnd:"none"})),(0,a.Z)(r,"".concat(l,"-split ").concat(l,"-header"),{borderBlockEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)}),(0,a.Z)(r,"".concat(l,"-split").concat(l,"-empty ").concat(l,"-footer"),{borderTop:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)}),(0,a.Z)(r,"".concat(l,"-loading ").concat(l,"-spin-nested-loading"),{minHeight:m}),(0,a.Z)(r,"".concat(l,"-split").concat(l,"-something-after-last-item ").concat(d,"-spin-container > ").concat(l,"-items > ").concat(l,"-item:last-child"),{borderBlockEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)}),(0,a.Z)(r,"".concat(l,"-lg ").concat(l,"-item"),{padding:x}),(0,a.Z)(r,"".concat(l,"-sm ").concat(l,"-item"),{padding:Z}),(0,a.Z)(r,"".concat(l,":not(").concat(l,"-vertical)"),(0,a.Z)({},"".concat(l,"-item-no-flex"),(0,a.Z)({},"".concat(l,"-item-action"),{float:"right"}))),r},M=(0,k.Z)("List",(function(t){var e=(0,O.TS)(t,{listBorderedCls:"".concat(t.componentCls,"-bordered"),minHeight:t.controlHeightLG});return[B(e),z(e),N(e)]}),(function(t){return{contentWidth:220,itemPadding:"".concat(t.paddingContentVertical,"px 0"),itemPaddingSM:"".concat(t.paddingContentVerticalSM,"px ").concat(t.paddingContentHorizontal,"px"),itemPaddingLG:"".concat(t.paddingContentVerticalLG,"px ").concat(t.paddingContentHorizontalLG,"px"),headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}})),w=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n};function P(t){var e,n,o=t.pagination,Z=void 0!==o&&o,x=t.prefixCls,S=t.bordered,y=void 0!==S&&S,b=t.split,E=void 0===b||b,C=t.className,k=t.rootClassName,O=t.children,z=t.itemLayout,N=t.loadMore,B=t.grid,P=t.dataSource,L=void 0===P?[]:P,j=t.size,I=t.header,H=t.footer,W=t.loading,T=void 0!==W&&W,G=t.rowKey,X=t.renderItem,A=t.locale,R=w(t,["pagination","prefixCls","bordered","split","className","rootClassName","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),D=Z&&"object"===typeof Z?Z:{},F=l.useState(D.defaultCurrent||1),V=(0,c.Z)(F,2),_=V[0],K=V[1],J=l.useState(D.defaultPageSize||10),Y=(0,c.Z)(J,2),q=Y[0],Q=Y[1],U=l.useContext(s.E_),$=U.getPrefixCls,tt=U.renderEmpty,et=U.direction,nt=function(t){return function(e,n){K(e),Q(n),Z&&Z[t]&&Z[t](e,n)}},at=nt("onChange"),ct=nt("onShowSizeChange"),it=$("list",x),ot=M(it),rt=(0,c.Z)(ot,2),lt=rt[0],dt=rt[1],mt=T;"boolean"===typeof mt&&(mt={spinning:mt});var st=mt&&mt.spinning,gt="";switch(j){case"large":gt="lg";break;case"small":gt="sm"}var pt=r()(it,(e={},(0,a.Z)(e,"".concat(it,"-vertical"),"vertical"===z),(0,a.Z)(e,"".concat(it,"-").concat(gt),gt),(0,a.Z)(e,"".concat(it,"-split"),E),(0,a.Z)(e,"".concat(it,"-bordered"),y),(0,a.Z)(e,"".concat(it,"-loading"),st),(0,a.Z)(e,"".concat(it,"-grid"),!!B),(0,a.Z)(e,"".concat(it,"-something-after-last-item"),!!(N||Z||H)),(0,a.Z)(e,"".concat(it,"-rtl"),"rtl"===et),e),C,k,dt),ft=(0,d.Z)({current:1,total:0},{total:L.length,current:_,pageSize:q},Z||{}),ut=Math.ceil(ft.total/ft.pageSize);ft.current>ut&&(ft.current=ut);var ht=Z?l.createElement("div",{className:r()("".concat(it,"-pagination"),"".concat(it,"-pagination-align-").concat(null!==(n=null===ft||void 0===ft?void 0:ft.align)&&void 0!==n?n:"end"))},l.createElement(u.Z,Object.assign({},ft,{onChange:at,onShowSizeChange:ct}))):null,Zt=(0,i.Z)(L);Z&&L.length>(ft.current-1)*ft.pageSize&&(Zt=(0,i.Z)(L).splice((ft.current-1)*ft.pageSize,ft.pageSize));var xt=Object.keys(B||{}).some((function(t){return["xs","sm","md","lg","xl","xxl"].includes(t)})),vt=(0,f.Z)(xt),St=l.useMemo((function(){for(var t=0;t<m.c.length;t+=1){var e=m.c[t];if(vt[e])return e}}),[vt]),yt=l.useMemo((function(){if(B){var t=St&&B[St]?B[St]:B.column;return t?{width:"".concat(100/t,"%"),maxWidth:"".concat(100/t,"%")}:void 0}}),[null===B||void 0===B?void 0:B.column,St]),bt=st&&l.createElement("div",{style:{minHeight:53}});if(Zt.length>0){var Et=Zt.map((function(t,e){return function(t,e){return X?((n="function"===typeof G?G(t):G?t[G]:t.key)||(n="list-item-".concat(e)),l.createElement(l.Fragment,{key:n},X(t,e))):null;var n}(t,e)}));bt=B?l.createElement(p.Z,{gutter:B.gutter},l.Children.map(Et,(function(t){return l.createElement("div",{key:null===t||void 0===t?void 0:t.key,style:yt},t)}))):l.createElement("ul",{className:"".concat(it,"-items")},Et)}else O||st||(bt=l.createElement("div",{className:"".concat(it,"-empty-text")},A&&A.emptyText||(null===tt||void 0===tt?void 0:tt("List"))||l.createElement(g.Z,{componentName:"List"})));var Ct=ft.position||"bottom",kt=l.useMemo((function(){return{grid:B,itemLayout:z}}),[JSON.stringify(B),z]);return lt(l.createElement(v.Provider,{value:kt},l.createElement("div",Object.assign({className:pt},R),("top"===Ct||"both"===Ct)&&ht,I&&l.createElement("div",{className:"".concat(it,"-header")},I),l.createElement(h.Z,Object.assign({},mt),bt,O),H&&l.createElement("div",{className:"".concat(it,"-footer")},H),N||("bottom"===Ct||"both"===Ct)&&ht)))}P.Item=E;var L=P}}]);