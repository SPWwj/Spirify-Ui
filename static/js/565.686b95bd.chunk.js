"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[565],{4900:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(3433),a=n(9439),i=n(2791),o=n(7846),c=n(9389),s=n(8764),u=n(2014),l=n(2706),p=n(7943),d=n(9004),f=n(4165),m=n(5861),g=n(4942),v=n(6517),h=n(2351),y=n(5671),b=n(3144),x=n(4432),Z=function(){function e(){(0,y.Z)(this,e)}return(0,b.Z)(e,null,[{key:"uploadFile",value:function(){var e=(0,m.Z)((0,f.Z)().mark((function e(t){var n,r;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.next=4,x.Z.getInstance().getAxiosInstance().post("/api/Upload",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteFile",value:function(){var e=(0,m.Z)((0,f.Z)().mark((function e(t){var n,r;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.replace(x.Z.BASE_URL,""),e.next=3,x.Z.getInstance().getAxiosInstance().delete("/api/upload?filePath=".concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=Z,j=n(184),k=function(e){var t=e.form,n=e.fieldName,r=(0,i.useState)(null),o=(0,a.Z)(r,2),c=o[0],s=o[1],u=function(){var e=(0,m.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!c){e.next=6;break}return e.next=4,C.deleteFile(c);case 4:s(null),t.setFieldsValue((0,g.Z)({},n,null));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,m.Z)((0,f.Z)().mark((function e(t){var n,r,a,i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,t.onProgress,r=t.onSuccess,a=t.onError,e.prev=1,e.next=4,C.uploadFile(n);case 4:i=e.sent,r(i,n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,j.jsx)(v.Z,{name:"logo",customRequest:l,listType:"picture",onRemove:u,onChange:function(e){if("done"===e.file.status){var r=e.file.response.filePath;s(r),t.setFieldsValue((0,g.Z)({},n,r))}},children:(0,j.jsx)(d.ZP,{icon:(0,j.jsx)(h.Z,{}),children:"Click to upload"})})},w=function(e){var t=e.fields,n=e.onFinish,i=e.initialValues,f=o.Z.useForm(),m=(0,a.Z)(f,1)[0],g=function(e,t){var n,a=t?[].concat((0,r.Z)(t),[e.name]):[e.name];switch(e.type){case"textarea":n=(0,j.jsx)(c.Z.TextArea,{});break;case"date":n=(0,j.jsx)(s.Z,{format:"YYYY-MM-DD",showTime:!1});break;case"checkbox":n=(0,j.jsx)(u.Z,{});break;case"number":n=(0,j.jsx)(l.Z,{});break;case"time":n=(0,j.jsx)(p.Z,{});break;case"datetime":n=(0,j.jsx)(s.Z,{showTime:!0});break;case"image":n=(0,j.jsx)(o.Z.Item,{valuePropName:"fileList",extra:"Image Preview",children:(0,j.jsx)(k,{form:m,fieldName:e.name})});break;default:n=(0,j.jsx)(c.Z,{})}return(0,j.jsx)(o.Z.Item,{name:a,label:e.label,rules:e.rules,children:n},a.join("."))};return(0,j.jsxs)(o.Z,{form:m,layout:"vertical",onFinish:n,initialValues:i,encType:"multipart/form-data",children:[function(e,t){return e.map((function(e){return"object"===e.type&&e.fields?e.fields.map((function(n){return g(n,t?[].concat((0,r.Z)(t),[e.name]):[e.name])})):g(e,t)}))}(t),(0,j.jsx)(o.Z.Item,{children:(0,j.jsx)("div",{style:{textAlign:"right"},children:(0,j.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:"Submit"})})})]})}},4022:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(4165),a=n(5861),i=(n(2791),n(3655)),o=n(7689),c="AttractionFormPage_attractionFormPage__UXSFc",s=n(4900),u=n(7892),l=n.n(u),p=n(1873),d=n(184),f={id:2,name:"The Singapore Rail Corridor",overview:"The Singapore Rail Corridor is a green corridor that runs the length of Singapore, from the North to the South, where the old railway tracks of the Keretapi Tanah Melayu (KTM) used to be.",description:"Stretching across 24 km, the Singapore Rail Corridor is a shared space where communities can gather and participate in a range of recreational activities. This linear park cuts through various residential and business areas, showcasing the contrast between Singapore's lush greenery and its urban environment. \n    The Rail Corridor is perfect for cycling, jogging, walking, and observing nature. It's also an important refuge for native fauna and flora. The trail's key attractions include the conserved Bukit Timah Railway Station and the iconic steel truss railway bridges.",openingDate:"2011-07-01",location:"Across Singapore",category:"Nature, Park, Recreation, and History",targetAudience:"Tourists, Locals, Nature Enthusiasts, Historians, Fitness Enthusiasts",address:{street:"Rail Corridor",city:"Singapore",state:"Singapore",country:"Singapore",zipCode:""}},m=function(){var e=(0,o.s0)(),t={name:f.name,overview:f.overview,description:f.description,address:{street:f.address.street,city:f.address.city,state:f.address.state,country:f.address.country,zipCode:f.address.zipCode},price:f.price,location:f.location,category:f.category,targetAudience:f.targetAudience,openingDate:l()(f.openingDate)},n=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.prev=1,n.openingDate&&(n.openingDate=l()(n.openingDate).format("YYYY-MM-DD")),t.next=5,p.Z.addAttraction(n);case 5:e("/dashboard/attraction/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("An error occurred while creating the attraction:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)(i.Z.Title,{children:"Add a new Attraction"}),(0,d.jsx)(s.Z,{onFinish:n,fields:[{name:"name",label:"Name",rules:[{required:!0,message:"Please input the attraction name!"}],type:"input"},{name:"image",label:"Image",type:"image"},{name:"overview",label:"Overview",rules:[{required:!0,message:"Please input the attraction overview!"}],type:"textarea"},{name:"description",label:"Description",type:"textarea"},{name:"address",label:"Address",type:"object",fields:[{name:"street",label:"Street",rules:[{required:!0,message:"Please input the street!"}],type:"input"},{name:"city",label:"City",rules:[{required:!0,message:"Please input the city!"}],type:"input"},{name:"state",label:"State",rules:[{required:!0,message:"Please input the state!"}],type:"input"},{name:"country",label:"Country",rules:[{required:!0,message:"Please input the country!"}],type:"input"},{name:"zipCode",label:"Zip Code",rules:[{required:!0,message:"Please input the zip code!"}],type:"input"}]},{name:"price",label:"Price",type:"number"},{name:"location",label:"Location",type:"input"},{name:"category",label:"Category",type:"input"},{name:"targetAudience",label:"Target Audience",type:"input"},{name:"openingDate",label:"Opening Date",type:"date"}],initialValues:t})]})}},1873:function(e,t,n){var r=n(4165),a=n(5861),i=n(5671),o=n(3144),c=n(4432),s=function(){function e(){(0,i.Z)(this,e),this.axiosInstance=void 0,this.axiosInstance=c.Z.getInstance().getAxiosInstance()}return(0,o.Z)(e,[{key:"addAttraction",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.post("/api/attraction/add",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAttraction",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.get("/api/attraction/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteAttraction",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.delete("/api/attraction/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),u=new s;t.Z=u},6854:function(e,t,n){n.d(t,{ZP:function(){return V},w6:function(){return z}});var r=n(1178),a=n(808),i=n(8365),o=n(4537),c=n(1534),s=n(2791),u=n(1489),l=Object.assign({},u.Z.Modal);function p(e){l=e?Object.assign(Object.assign({},l),e):Object.assign({},u.Z.Modal)}var d=n(2588);var f=function(e){var t=e.locale,n=void 0===t?{}:t,r=e.children;e._ANT_MARK__;s.useEffect((function(){return p(n&&n.Modal),function(){p()}}),[n]);var a=s.useMemo((function(){return Object.assign(Object.assign({},n),{exist:!0})}),[n]);return s.createElement(d.Z.Provider,{value:a},r)},m=n(3642),g=n(7219),v=n(1929),h=n(3742),y=n(9391),b=n(4937),x=n(5561),Z="-ant-".concat(Date.now(),"-").concat(Math.random());function C(e,t){var n=function(e,t){var n={},r=function(e,t){var n=e.clone();return(n=(null===t||void 0===t?void 0:t(n))||n).toRgbString()},a=function(e,t){var a=new y.C(e),i=(0,h.generate)(a.toRgbString());n["".concat(t,"-color")]=r(a),n["".concat(t,"-color-disabled")]=i[1],n["".concat(t,"-color-hover")]=i[4],n["".concat(t,"-color-active")]=i[6],n["".concat(t,"-color-outline")]=a.clone().setAlpha(.2).toRgbString(),n["".concat(t,"-color-deprecated-bg")]=i[0],n["".concat(t,"-color-deprecated-border")]=i[2]};if(t.primaryColor){a(t.primaryColor,"primary");var i=new y.C(t.primaryColor),o=(0,h.generate)(i.toRgbString());o.forEach((function(e,t){n["primary-".concat(t+1)]=e})),n["primary-color-deprecated-l-35"]=r(i,(function(e){return e.lighten(35)})),n["primary-color-deprecated-l-20"]=r(i,(function(e){return e.lighten(20)})),n["primary-color-deprecated-t-20"]=r(i,(function(e){return e.tint(20)})),n["primary-color-deprecated-t-50"]=r(i,(function(e){return e.tint(50)})),n["primary-color-deprecated-f-12"]=r(i,(function(e){return e.setAlpha(.12*e.getAlpha())}));var c=new y.C(o[0]);n["primary-color-active-deprecated-f-30"]=r(c,(function(e){return e.setAlpha(.3*e.getAlpha())})),n["primary-color-active-deprecated-d-02"]=r(c,(function(e){return e.darken(2)}))}t.successColor&&a(t.successColor,"success"),t.warningColor&&a(t.warningColor,"warning"),t.errorColor&&a(t.errorColor,"error"),t.infoColor&&a(t.infoColor,"info");var s=Object.keys(n).map((function(t){return"--".concat(e,"-").concat(t,": ").concat(n[t],";")}));return"\n  :root {\n    ".concat(s.join("\n"),"\n  }\n  ").trim()}(e,t);(0,b.Z)()&&(0,x.hq)(n,"".concat(Z,"-dynamic-theme"))}var j=n(9125),k=n(1815);var w=function(){return{componentDisabled:(0,s.useContext)(j.Z),componentSize:(0,s.useContext)(k.Z)}},O=n(2034);var P=n(9439),S=n(8568);function A(e){var t=e.children,n=(0,m.dQ)(),r=(0,P.Z)(n,2)[1].motion,a=s.useRef(!1);return a.current=a.current||!1===r,a.current?s.createElement(S.Provider,{motion:r},t):t}var M,E,I=n(4942),R=n(7521),T=function(e,t){var n=(0,m.dQ)(),a=(0,P.Z)(n,2),i=a[0],o=a[1];return(0,r.useStyleRegister)({theme:i,token:o,hashId:"",path:["ant-design-icons",e],nonce:function(){return null===t||void 0===t?void 0:t.nonce}},(function(){return[(0,I.Z)({},".".concat(e),Object.assign(Object.assign({},(0,R.Ro)()),(0,I.Z)({},".".concat(e," .").concat(e,"-icon"),{display:"block"})))]}))},F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},D=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","pagination","form","select"];function _(){return M||"ant"}function q(){return E||v.oR}var z=function(){return{getPrefixCls:function(e,t){return t||(e?"".concat(_(),"-").concat(e):_())},getIconPrefixCls:q,getRootPrefixCls:function(){return M||_()}}},N=function(e){var t=e.children,n=e.csp,l=e.autoInsertSpaceInButton,p=e.form,d=e.locale,h=e.componentSize,y=e.direction,b=e.space,x=e.virtual,Z=e.dropdownMatchSelectWidth,C=e.popupMatchSelectWidth,w=e.popupOverflow,P=e.legacyLocale,S=e.parentContext,M=e.iconPrefixCls,E=e.theme,I=e.componentDisabled;var R=s.useCallback((function(t,n){var r=e.prefixCls;if(n)return n;var a=r||S.getPrefixCls("");return t?"".concat(a,"-").concat(t):a}),[S.getPrefixCls,e.prefixCls]),_=M||S.iconPrefixCls||v.oR,q=_!==S.iconPrefixCls,z=n||S.csp,N=T(_,z),Y=function(e,t){var n=e||{},r=!1!==n.inherit&&t?t:m.u_;return(0,c.Z)((function(){if(!e)return t;var a=Object.assign({},r.components);return Object.keys(e.components||{}).forEach((function(t){a[t]=Object.assign(Object.assign({},a[t]),e.components[t])})),Object.assign(Object.assign(Object.assign({},r),n),{token:Object.assign(Object.assign({},r.token),n.token),components:a})}),[n,r],(function(e,t){return e.some((function(e,n){var r=t[n];return!(0,O.Z)(e,r,!0)}))}))}(E,S.theme);var V={csp:z,autoInsertSpaceInButton:l,locale:d||P,direction:y,space:b,virtual:x,popupMatchSelectWidth:null!==C&&void 0!==C?C:Z,popupOverflow:w,getPrefixCls:R,iconPrefixCls:_,theme:Y},L=Object.assign({},S);Object.keys(V).forEach((function(e){void 0!==V[e]&&(L[e]=V[e])})),D.forEach((function(t){var n=e[t];n&&(L[t]=n)}));var B=(0,c.Z)((function(){return L}),L,(function(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||n.some((function(n){return e[n]!==t[n]}))})),K=s.useMemo((function(){return{prefixCls:_,csp:z}}),[_,z]),H=q?N(t):t,U=s.useMemo((function(){var e,t,n;return(0,o.gg)({},(null===(e=u.Z.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(n=null===(t=B.locale)||void 0===t?void 0:t.Form)||void 0===n?void 0:n.defaultValidateMessages)||{},(null===p||void 0===p?void 0:p.validateMessages)||{})}),[B,null===p||void 0===p?void 0:p.validateMessages]);Object.keys(U).length>0&&(H=s.createElement(i.FormProvider,{validateMessages:U},t)),d&&(H=s.createElement(f,{locale:d,_ANT_MARK__:"internalMark"},H)),(_||z)&&(H=s.createElement(a.Z.Provider,{value:K},H)),h&&(H=s.createElement(k.q,{size:h},H)),H=s.createElement(A,null,H);var W=s.useMemo((function(){var e=Y||{},t=e.algorithm,n=e.token,a=F(e,["algorithm","token"]),i=t&&(!Array.isArray(t)||t.length>0)?(0,r.createTheme)(t):void 0;return Object.assign(Object.assign({},a),{theme:i,token:Object.assign(Object.assign({},g.Z),n)})}),[Y]);return E&&(H=s.createElement(m.Mj.Provider,{value:W},H)),void 0!==I&&(H=s.createElement(j.n,{disabled:I},H)),s.createElement(v.E_.Provider,{value:B},H)},Y=function(e){var t=s.useContext(v.E_),n=s.useContext(d.Z);return s.createElement(N,Object.assign({parentContext:t,legacyLocale:n},e))};Y.ConfigContext=v.E_,Y.SizeContext=k.Z,Y.config=function(e){var t=e.prefixCls,n=e.iconPrefixCls,r=e.theme;void 0!==t&&(M=t),void 0!==n&&(E=n),r&&C(_(),r)},Y.useConfig=w,Object.defineProperty(Y,"SizeContext",{get:function(){return k.Z}});var V=Y}}]);
//# sourceMappingURL=565.686b95bd.chunk.js.map