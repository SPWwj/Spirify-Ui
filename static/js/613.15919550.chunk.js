"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[613],{3613:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var s=e(9439),r=e(2791),i=e(6106),o=e(7304),a=e(8399),l=e(9570),c=e(5675),h=e.n(c),u=(e(149),e(7896),e(184));h().config.set("basePath","/static/js");var d=function(t){var n=t.ssml,e=t.onSSMLChange,s=t.formatSSML;return(0,u.jsxs)("div",{style:{position:"relative",border:"1px solid #F8F8F2",borderRadius:"15px",marginTop:"10px",overflow:"hidden"},children:[(0,u.jsx)(a.ZP,{width:"100%",mode:"xml",theme:"chaos",onChange:e,value:n,name:"ssml-editor",setOptions:{maxLines:20},editorProps:{$blockScrolling:!0}}),(0,u.jsx)(l.ZP,{style:{position:"absolute",bottom:"10px",right:"30px",backgroundColor:"#272822",borderColor:"#F8F8F2",color:"#F8F8F2",border:"1px solid #F8F8F2"},onClick:function(){e(s(n,80))},children:"Format"})]})},p=e(4378),m=e(2962),x=e(650),f=e(9529),g=function(t){var n=t.ssml;return(0,u.jsx)(l.ZP,{onClick:function(){var t=new SpeechSynthesisUtterance;t.text=n,window.speechSynthesis.speak(t)},children:"Preview"})},v=function(t){var n=t.ssml,e=(0,r.useState)(!1),i=(0,s.Z)(e,2),o=i[0],a=i[1],l=(0,r.useState)(""),c=(0,s.Z)(l,2),h=c[0],d=c[1],v=(0,u.jsx)("img",{src:"/path/to/avatar.png",alt:"avatar",onError:function(){return a(!0)}});return(0,r.useEffect)((function(){var t=(new DOMParser).parseFromString(n,"text/xml"),e=Array.from(t.querySelectorAll("*")).filter((function(t){return 0===t.childElementCount})).map((function(t){return t.textContent})).join(" ");d(e)}),[n]),(0,u.jsx)(p.Z,{cover:(0,u.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"5px"},children:(0,u.jsx)(m.C,{size:64,icon:o?(0,u.jsx)(f.Z,{}):v})}),actions:[(0,u.jsx)(g,{ssml:n})],children:(0,u.jsx)(x.Z.Paragraph,{style:{padding:12},children:h})})};function j(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,s=[],r="",i="";return t.split(/(<[^>]*>)/g).filter((function(t){return t.trim().length>0})).forEach((function(t){t.startsWith("<")?(r.trim().length>0&&s.push(r),t.startsWith("</")&&(i=i.slice(0,-e)),r=i+t,t.startsWith("</")||t.endsWith("/>")||t.endsWith("?>")||(i+=" ".repeat(e))):t.trim().split(/\s+/).forEach((function(t){(r+" "+t).length>n?(s.push(r),r=i+t):r+=" "+t}))})),r.trim().length>0&&s.push(r),s.join("\n")}var y=function(){var t=(0,r.useState)(j('\n\t<?xml version="1.0"?>\n\t<speak version="1.0" \n\t\txmlns="http://www.w3.org/2001/10/synthesis"\n\t\txml:lang="en-US">\n\t<voice name="en-US-LisaNeural">\n\t\t<prosody rate="medium">\n\t\t<p>\n\t\t\tHello there! I\'m a virtual assistant. I can assist you with a wide variety of tasks, like setting reminders, answering questions, or controlling smart home devices.\n\t\t</p>\n\t\t<p>\n\t\t\t<emphasis level="strong">Can I help you with anything today?</emphasis>\n\t\t</p>\n\t\t</prosody>\n\t</voice>\n\t</speak>',80)),n=(0,s.Z)(t,2),e=n[0],a=n[1];return(0,u.jsx)("div",{children:(0,u.jsxs)(i.Z,{gutter:[16,16],children:[(0,u.jsx)(o.Z,{xs:24,md:12,children:(0,u.jsx)(d,{ssml:e,onSSMLChange:a,formatSSML:j})}),(0,u.jsx)(o.Z,{xs:24,md:12,style:{margin:"auto"},children:(0,u.jsx)(v,{ssml:e})})]})})}}}]);
//# sourceMappingURL=613.15919550.chunk.js.map