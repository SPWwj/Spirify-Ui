(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[420],{5987:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var r=n(4165),i=n(5861),a=n(9439),s=n(2791),u=n(3263),c=n(3655),o=n(4996),l=n(7174),f=n(2339),d=n(9004),h=n(8570),p={eventDetail:"EventDetailPage_eventDetail__BkyJq",title:"EventDetailPage_title__cgqJH",image:"EventDetailPage_image__4Cado",button:"EventDetailPage_button__QMQVh",descriptions:"EventDetailPage_descriptions__3UGD5",imageContainer:"EventDetailPage_imageContainer__F6qIr",participantGroup:"EventDetailPage_participantGroup__U5GZI",participant:"EventDetailPage_participant__-Al6D",buttonContainer:"EventDetailPage_buttonContainer__i4xcZ",tagContainer:"EventDetailPage_tagContainer__LTUQv"},m=n(7689),v=n(9228),g=n(7892),$=n.n(g),x=n(9489),y=n(8788),D=n(184),Z=function(){var t=(0,m.UO)().id,e=(0,s.useContext)(y.V).username,n=(0,s.useState)(null),g=(0,a.Z)(n,2),Z=g[0],M=g[1],_=(0,v.e)((null===Z||void 0===Z?void 0:Z.image)||""),w=_.src,b=_.style,S=(0,m.s0)(),P=(0,s.useCallback)((0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.getEvent(t);case 3:(n=e.sent).startDateTime&&(n.startDateTime=$()(n.startDateTime)),n.endDateTime&&(n.endDateTime=$()(n.endDateTime)),M(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u.ZP.error("Failed to fetch event data!");case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[t]);(0,s.useEffect)((function(){P()}),[P]);var j=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.deleteEvent(t);case 3:setTimeout((function(){S("/dashboard/event")}),1e3),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),u.ZP.error("Failed to delete event!");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.joinEvent(t);case 3:P(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),u.ZP.error("Failed to join the event!");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();if(!Z)return(0,D.jsx)("div",{children:"Loading..."});var I=Z.currentParticipants&&Z.minPeople&&Z.maxPeople?Z.currentParticipants<Z.minPeople?"black":Z.currentParticipants<Z.maxPeople?"green":"purple":"black";return(0,D.jsxs)("div",{className:p.eventDetail,children:[(0,D.jsx)(c.Z.Title,{className:p.title,children:Z.name}),Z.image&&(0,D.jsx)("div",{className:p.imageContainer,children:(0,D.jsx)(o.Z,{className:p.cardImage,alt:t,src:w,style:b})}),(0,D.jsx)(h.D,{className:p.markdown,children:Z.overview}),Z.description&&(0,D.jsx)(h.D,{className:p.markdown,children:Z.description}),(0,D.jsxs)(l.Z,{className:p.descriptions,children:[(0,D.jsx)(l.Z.Item,{label:"Organizer",children:Z.organizer}),(0,D.jsx)(l.Z.Item,{label:"Organizer Id",children:Z.organizerId}),(0,D.jsx)(l.Z.Item,{label:"Start Time",children:$()(Z.startDateTime).format("YYYY-MM-DD HH:mm")}),Z.endDateTime&&(0,D.jsx)(l.Z.Item,{label:"End Time",children:$()(Z.endDateTime).format("YYYY-MM-DD HH:mm")}),(0,D.jsx)(l.Z.Item,{label:"Location",children:Z.location}),(0,D.jsxs)(l.Z.Item,{label:"Address",children:[Z.street,", ",Z.city,", ",Z.country]}),(Z.minPeople||Z.maxPeople||Z.currentParticipants)&&(0,D.jsx)(l.Z.Item,{label:"Participants",className:p.participantGroup,children:(0,D.jsxs)("div",{className:p.tagContainer,children:[Z.minPeople&&(0,D.jsxs)(f.Z,{className:p.participant,children:["Min: ",Z.minPeople]}),Z.maxPeople&&(0,D.jsxs)(f.Z,{className:p.participant,children:["Max: ",Z.maxPeople]}),Z.currentParticipants&&(0,D.jsxs)(f.Z,{className:p.participant,style:{color:I},children:["Current: ",Z.currentParticipants]})]})}),Z.fee&&(0,D.jsx)(l.Z.Item,{label:"Fee",children:(0,D.jsx)(f.Z,{children:new Intl.NumberFormat("en-sg",{style:"currency",currency:"SGD"}).format(Z.fee)})}),Z.eventType&&(0,D.jsx)(l.Z.Item,{label:"Event Type",children:Z.eventType}),Z.targetAudience&&(0,D.jsx)(l.Z.Item,{label:"Target Audience",children:Z.targetAudience})]}),(0,D.jsx)("div",{className:p.buttonContainer,children:e&&(e===Z.organizer?(0,D.jsx)(d.ZP,{danger:!0,className:p.button,onClick:j,children:"Remove Event"}):(null===Z.maxPeople||Z.currentParticipants<Z.maxPeople)&&!Z.isJoin?(0,D.jsx)(d.ZP,{className:p.button,onClick:k,children:"Join"}):(0,D.jsx)(d.ZP,{className:p.button,disabled:!0,children:"Join"}))})]})}},9489:function(t,e,n){"use strict";var r=n(4165),i=n(5861),a=n(5671),s=n(3144),u=n(4432),c=function(){function t(){(0,a.Z)(this,t),this.axiosInstance=void 0,this.axiosInstance=u.Z.getInstance().getAxiosInstance()}return(0,s.Z)(t,[{key:"createEvent",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.axiosInstance.post("/api/Event",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getEvent",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.axiosInstance.get("/api/Event/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"deleteEvent",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.axiosInstance.delete("/api/Event/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"joinEvent",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.axiosInstance.post("/api/Event/Join/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),o=new c;e.Z=o},9228:function(t,e,n){"use strict";n.d(e,{e:function(){return u}});var r=n(9439),i=n(2791);var a=n.p+"static/media/image-loading.a1ede781901e70477fd231f8fa9f4e60.svg";var s=n.p+"static/media/image-error.ee54a1d3b05048f38768264ffbf6f55b.svg",u=function(t){var e=(0,i.useState)(a),n=(0,r.Z)(e,2),u=n[0],c=n[1],o=(0,i.useState)({opacity:0,transition:"opacity 2s ease-in-out"}),l=(0,r.Z)(o,2),f=l[0],d=l[1];return(0,i.useEffect)((function(){var e=new Image;e.src=t,e.onload=function(){c(t),d({opacity:1,transition:"opacity 0.5s ease-in-out"})},e.onerror=function(){c(s),d({filter:"grayscale(100%)",transition:"filter 0.5s ease-in-out"})}}),[t]),{src:u,style:f}}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",u="day",c="week",o="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),a=n-i<0,s=e.clone().add(r+(a?-1:1),o);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:c,d:u,D:d,h:s,m:a,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",y={};y[x]=v;var D=function(t){return t instanceof w},Z=function t(e,n,r){var i;if(!e)return x;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(i=a),n&&(y[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var u=e.name;y[u]=e,i=u}return!r&&i&&(x=i),i||!r&&x},M=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},_=$;_.l=Z,_.i=D,_.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=Z(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return _},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return M(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<M(t)},g.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!_.u(e)||e,l=_.p(t),h=function(t,e){var i=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},p=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case o:return r?h(1,v):h(0,v+1);case c:var x=this.$locale().weekStart||0,y=(m<x?m+7:m)-x;return h(r?g-y:g+(6-y),v);case u:case d:return p($+"Hours",0);case s:return p($+"Minutes",1);case a:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,c=_.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[d]=l+"Date",n[o]=l+"Month",n[f]=l+"FullYear",n[s]=l+"Hours",n[a]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[_.p(t)]()},g.add=function(r,l){var d,h=this;r=Number(r);var p=_.p(l),m=function(t){var e=M(h);return _.w(e.date(e.date()+Math.round(t*r)),h)};if(p===o)return this.set(o,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===u)return m(1);if(p===c)return m(7);var v=(d={},d[a]=e,d[s]=n,d[i]=t,d)[p]||1,g=this.$d.getTime()+r*v;return _.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),a=this.$H,s=this.$m,u=this.$M,c=n.weekdays,o=n.months,l=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},f=function(t){return _.s(a%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:_.s(u+1,2,"0"),MMM:l(n.monthsShort,u,o,3),MMMM:l(o,u),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:_.s(a,2,"0"),h:f(1),hh:f(2),a:d(a,s,!0),A:d(a,s,!1),m:String(s),mm:_.s(s,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||p[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,d,h){var p,m=_.p(d),v=M(r),g=(v.utcOffset()-this.utcOffset())*e,$=this-v,x=_.m(this,v);return x=(p={},p[f]=x/12,p[o]=x,p[l]=x/3,p[c]=($-g)/6048e5,p[u]=($-g)/864e5,p[s]=$/n,p[a]=$/e,p[i]=$/t,p)[m]||$,h?x:_.a(x)},g.daysInMonth=function(){return this.endOf(o).$D},g.$locale=function(){return y[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=Z(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return _.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),b=w.prototype;return M.prototype=b,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",u],["$M",o],["$y",f],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=Z,M.isDayjs=D,M.unix=function(t){return M(1e3*t)},M.en=y[x],M.Ls=y,M.p={},M}()}}]);
//# sourceMappingURL=420.3bfcc613.chunk.js.map