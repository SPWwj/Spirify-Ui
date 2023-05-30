"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[171],{4900:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(3433),a=t(9439),i=t(2791),s=t(7846),u=t(9389),c=t(8764),o=t(2014),l=t(2706),p=t(7943),f=t(9004),h=t(4165),d=t(5861),m=t(4942),v=t(6517),Z=t(2351),x=t(5671),g=t(3144),w=t(4432),b=function(){function e(){(0,x.Z)(this,e)}return(0,g.Z)(e,null,[{key:"uploadFile",value:function(){var e=(0,d.Z)((0,h.Z)().mark((function e(n){var t,r;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",n),e.next=4,w.Z.getInstance().getAxiosInstance().post("/api/Upload",t,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"deleteFile",value:function(){var e=(0,d.Z)((0,h.Z)().mark((function e(n){var t,r;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.replace(w.Z.BASE_URL,""),e.next=3,w.Z.getInstance().getAxiosInstance().delete("/api/upload?filePath=".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),y=b,k=t(184),I=function(e){var n=e.form,t=e.fieldName,r=(0,i.useState)(null),s=(0,a.Z)(r,2),u=s[0],c=s[1],o=function(){var e=(0,d.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u){e.next=6;break}return e.next=4,y.deleteFile(u);case 4:c(null),n.setFieldsValue((0,m.Z)({},t,null));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,d.Z)((0,h.Z)().mark((function e(n){var t,r,a,i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.file,n.onProgress,r=n.onSuccess,a=n.onError,e.prev=1,e.next=4,y.uploadFile(t);case 4:i=e.sent,r(i,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsx)(v.Z,{name:"logo",customRequest:l,listType:"picture",onRemove:o,onChange:function(e){if("done"===e.file.status){var r=e.file.response.filePath;c(r),n.setFieldsValue((0,m.Z)({},t,r))}},children:(0,k.jsx)(f.ZP,{icon:(0,k.jsx)(Z.Z,{}),children:"Click to upload"})})},j=function(e){var n=e.fields,t=e.onFinish,i=e.initialValues,h=s.Z.useForm(),d=(0,a.Z)(h,1)[0],m=function(e,n){var t,a=n?[].concat((0,r.Z)(n),[e.name]):[e.name];switch(e.type){case"textarea":t=(0,k.jsx)(u.Z.TextArea,{});break;case"date":t=(0,k.jsx)(c.Z,{format:"YYYY-MM-DD",showTime:!1});break;case"checkbox":t=(0,k.jsx)(o.Z,{});break;case"number":t=(0,k.jsx)(l.Z,{});break;case"time":t=(0,k.jsx)(p.Z,{});break;case"datetime":t=(0,k.jsx)(c.Z,{showTime:!0});break;case"image":t=(0,k.jsx)(s.Z.Item,{valuePropName:"fileList",extra:"Image Preview",children:(0,k.jsx)(I,{form:d,fieldName:e.name})});break;default:t=(0,k.jsx)(u.Z,{})}return(0,k.jsx)(s.Z.Item,{name:a,label:e.label,rules:e.rules,children:t},a.join("."))};return(0,k.jsxs)(s.Z,{form:d,layout:"vertical",onFinish:t,initialValues:i,encType:"multipart/form-data",children:[function(e,n){return e.map((function(e){return"object"===e.type&&e.fields?e.fields.map((function(t){return m(t,n?[].concat((0,r.Z)(n),[e.name]):[e.name])})):m(e,n)}))}(n),(0,k.jsx)(s.Z.Item,{children:(0,k.jsx)("div",{style:{textAlign:"right"},children:(0,k.jsx)(f.ZP,{type:"primary",htmlType:"submit",children:"Submit"})})})]})}},9171:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(4165),a=t(5861),i=(t(2791),t(3263)),s=t(3655),u=t(7689),c="SharingFormPage_sharingFormPage__JwLUw",o=t(4900),l=t(5798),p=t(184),f=function(){var e=(0,u.s0)(),n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Received values of form: ",t),n.prev=1,n.next=4,l.Z.createItem(t);case 4:e("/dashboard/sharing/"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),i.ZP.error("An error occurred while creating the sharing item:");case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(s.Z.Title,{children:"Add a new Sharing Item"}),(0,p.jsx)(o.Z,{fields:[{name:"name",label:"Name",rules:[{required:!0,message:"Please input the item name!"}]},{name:"image",label:"Image",type:"image"},{name:"overview",label:"Overview",rules:[{required:!0,message:"Please input the item Overview!"}],type:"textarea"},{name:"description",label:"Description",type:"textarea"},{name:"type",label:"Type"},{name:"fee",label:"Fee"}],onFinish:n,initialValues:{name:"3D Printer",address:"789 Oak St, Springfield",description:"An efficient 3D printer in excellent working condition.",overview:"This 3D printer is suitable for both beginners and experienced users. It supports a wide range of printing materials and provides high quality, precise prints. Ideal for prototyping, small production runs, and educational projects.",type:"Technology",fee:40}})]})}},5798:function(e,n,t){var r=t(4165),a=t(5861),i=t(5671),s=t(3144),u=t(4432),c=function(){function e(){(0,i.Z)(this,e),this.axiosInstance=void 0,this.axiosInstance=u.Z.getInstance().getAxiosInstance()}return(0,s.Z)(e,[{key:"createItem",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.post("/api/Sharing",n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getSharingItem",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.get("/api/Sharing/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"deleteSharingItem",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.delete("/api/Sharing/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"borrowItem",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.post("/api/Sharing/".concat(n,"/borrow"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"returnItem",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axiosInstance.post("/api/Sharing/".concat(n,"/return"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),o=new c;n.Z=o}}]);
//# sourceMappingURL=171.ff1dbfea.chunk.js.map