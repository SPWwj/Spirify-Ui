"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[665],{21665:function(e,r,s){s.r(r),s.d(r,{default:function(){return w}});var n=s(74165),t=s(15861),a=s(72791),i=s(57689),u=s(58788),o=s(29439),c=s(77846),l=s(80177),d=s(79004),m=s(20043),p="RegisterForm_formContainer__nsxNh",f="RegisterForm_registerForm__SljLz",h=s(80184),x=function(e){var r=e.onSubmit,s=c.Z.useForm(),i=(0,o.Z)(s,1)[0],u=(0,a.useState)(!1),x=(0,o.Z)(u,2),Z=x[0],w=x[1],b=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(s){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,r(s);case 4:return e.prev=4,w(!1),e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[1,,4,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:p,children:(0,h.jsxs)(c.Z,{form:i,className:f,onFinish:b,children:[(0,h.jsx)(c.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,h.jsx)(l.Z,{})}),(0,h.jsx)(c.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!",type:"email"}],children:(0,h.jsx)(l.Z,{})}),(0,h.jsx)(c.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,h.jsx)(l.Z.Password,{})}),(0,h.jsx)(c.Z.Item,{label:"Confirm Password",name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,s){return s&&r("password")!==s?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:(0,h.jsx)(l.Z.Password,{})}),(0,h.jsx)(c.Z.Item,{children:(0,h.jsx)(d.ZP,{type:"primary",htmlType:"submit",disabled:Z,children:Z?(0,h.jsxs)("span",{children:["Loading...",(0,h.jsx)(m.Z,{})]}):(0,h.jsx)("span",{children:"Register"})})})]})})},Z=s(77027),w=function(){var e=(0,i.s0)(),r=(0,a.useContext)(u.V),s=r.register,o=r.login,c=function(){var r=(0,t.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s(t.username,t.email,t.password);case 2:if(!r.sent){r.next=17;break}return r.next=6,o(t.username,t.password,!1);case 6:if(!r.sent){r.next=13;break}return Z.ZP.success("Registration successful! You are now logged in."),e("/profile"),r.abrupt("return",!0);case 13:return Z.ZP.error("Registration successful, but login failed."),r.abrupt("return",!1);case 15:r.next=19;break;case 17:return Z.ZP.error("Registration failed!"),r.abrupt("return",!1);case 19:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,h.jsx)(x,{onSubmit:c})}}}]);
//# sourceMappingURL=665.58a72322.chunk.js.map