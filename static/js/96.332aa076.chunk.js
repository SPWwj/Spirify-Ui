"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[96],{58096:function(i,t,n){n.r(t),n.d(t,{default:function(){return f}});var e=n(72791),o="NotFoundPage_canvasContainer__nYEQw",r="NotFoundPage_errorContainer__clW-h",a="NotFoundPage_error__i0OUm",s="NotFoundPage_errorMessage__TWZ2i",h=n(15671),c=n(43144),d=n(80184),u=function(){function i(t,n,e,o,r){(0,h.Z)(this,i),this.x=void 0,this.y=void 0,this.dirx=void 0,this.diry=void 0,this.color=void 0,this.size=2,this.gravity=.01,this.opacity=1,this.x=t,this.y=n,this.dirx=e,this.diry=o,this.color=r}return(0,c.Z)(i,[{key:"draw",value:function(i){i.beginPath(),i.fillStyle="rgba(".concat(this.color[0],",").concat(this.color[1],",").concat(this.color[2],",").concat(this.opacity,")"),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.fill()}},{key:"update",value:function(i){this.diry+=this.gravity,this.x+=this.dirx,this.y+=this.diry,this.opacity-=.01,this.draw(i)}}]),i}(),l=function(){var i=(0,e.useRef)(null);return(0,e.useEffect)((function(){var t=i.current,n=null===t||void 0===t?void 0:t.getContext("2d");if(n){var e=[],o=function(){t&&(t.width=window.innerWidth,t.height=window.innerHeight)};window.addEventListener("resize",o);return null===t||void 0===t||t.addEventListener("click",(function(i){for(var n=t.getBoundingClientRect(),o=i.clientX-n.left,r=i.clientY-n.top,a=2*Math.PI/300,s=0;s<300;s++){var h=[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())];e.push(new u(o,r,Math.cos(a*s)*Math.random()*2,Math.sin(a*s)*Math.random()*2,h))}})),o(),function i(){n&&t&&(n.clearRect(0,0,t.width,t.height),e.forEach((function(i,t){i.update(n),i.opacity<=0&&e.splice(t,1)})),requestAnimationFrame(i))}(),function(){return window.removeEventListener("resize",o)}}}),[]),(0,d.jsx)("canvas",{ref:i,style:{backgroundColor:"#000"}})},f=function(){return(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)(l,{}),(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("div",{className:a,children:"404"}),(0,d.jsx)("div",{className:s,children:"Page Not Found"})]})]})}}}]);
//# sourceMappingURL=96.332aa076.chunk.js.map