"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[2578],{77833:function(e,r,n){n.d(r,{U:function(){return Z}});var s=n(74165),t=n(15861),i=n(29439),a=n(47313),u=n(56744),o=n(43690),c=n(32697),l=n(57277),p=n(69918),m="LoginForm_formContainer__MQOUV",d="LoginForm_loginForm__DMuBH",f="LoginForm_registerButton__3wUQW",h=n(58467),g=n(46417),Z=function(e){var r=e.onSubmit,n=e.enableRemember,Z=(0,a.useState)(!1),x=(0,i.Z)(Z,2),j=x[0],v=x[1],w=(0,h.s0)(),y=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,r(n);case 4:return e.prev=4,v(!1),e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[1,,4,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{className:m,children:(0,g.jsxs)(u.Z,{className:d,onFinish:y,children:[(0,g.jsx)(u.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,g.jsx)(o.Z,{})}),(0,g.jsx)(u.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,g.jsx)(o.Z.Password,{})}),n&&(0,g.jsx)(u.Z.Item,{name:"remember",valuePropName:"checked",children:(0,g.jsx)(c.Z,{children:"Remember me"})}),(0,g.jsxs)(u.Z.Item,{children:[(0,g.jsx)(l.ZP,{type:"primary",htmlType:"submit",disabled:j,children:j?(0,g.jsxs)("span",{children:["Loading...",(0,g.jsx)(p.Z,{})]}):(0,g.jsx)("span",{children:"Log in"})}),(0,g.jsx)(l.ZP,{type:"primary",className:f,onClick:function(){w("/register")},children:"Register"})]})]})})}},62578:function(e,r,n){n.r(r);var s=n(74165),t=n(15861),i=n(29439),a=n(77833),u=(n(47313),n(2135)),o=n(74976),c=n(46417);r.default=function(){var e=(0,u.lr)(),r=(0,i.Z)(e,1)[0],n=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:n.username,password:n.password,responseType:r.get("response_type")||"",clientId:r.get("client_id")||"",redirectUri:r.get("redirect_uri")||"",scope:r.get("scope")||"",state:r.get("state")||"",pluginId:r.get("plugin_id")||""},e.next=3,o.Z.oauthLogin(t);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,c.jsx)(a.U,{onSubmit:n})}}}]);