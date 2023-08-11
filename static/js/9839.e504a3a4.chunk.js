"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[9839],{59839:function(t,e,n){n.r(e),n.d(e,{diagram:function(){return z}});var i=n(29439),r=n(37762),s=n(1326),a=n(40819),c=n(2076),o=n(19951),l=n(67723),h=(n(10658),n(16278),n(91213),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,26,27,28],r=[1,15],s=[1,16],a=[1,17],c=[1,18],o=[1,19],l=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,r,s,a){var c=s.length-1;switch(r){case 1:return s[c-1];case 3:case 7:case 8:this.$=[];break;case 4:s[c-1].push(s[c]),this.$=s[c-1];break;case 5:case 6:this.$=s[c];break;case 11:i.getCommonDb().setDiagramTitle(s[c].substr(6)),this.$=s[c].substr(6);break;case 12:this.$=s[c].trim(),i.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=s[c].trim(),i.getCommonDb().setAccDescription(this.$);break;case 15:i.addSection(s[c].substr(8)),this.$=s[c].substr(8);break;case 19:i.addTask(s[c],0,""),this.$=s[c];break;case 20:i.addEvent(s[c].substr(2)),this.$=s[c];break;case 21:i.parseDirective("%%{","open_directive");break;case 22:i.parseDirective(s[c],"type_directive");break;case 23:s[c]=s[c].trim().replace(/'/g,'"'),i.parseDirective(s[c],"arg_directive");break;case 24:i.parseDirective("}%%","close_directive","timeline")}},table:[{3:1,4:e,7:3,12:4,28:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:n},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:r,18:s,20:a,22:c,23:o,24:20,25:21,26:l,27:h,28:n},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:22,10:28,12:4,17:r,18:s,20:a,22:c,23:o,24:20,25:21,26:l,27:h,28:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,29]},{21:[1,30]},t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],a=this.table,c="",o=0,l=0,h=s.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,"undefined"==typeof d.yylloc&&(d.yylloc={});var y=d.yylloc;s.push(y);var g=d.options&&d.options.ranges;function f(){var t;return"number"!==typeof(t=i.pop()||d.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,v,_,b,x,k,S,w,E={};;){if(v=n[n.length-1],this.defaultActions[v]?_=this.defaultActions[v]:(null!==m&&"undefined"!=typeof m||(m=f()),_=a[v]&&a[v][m]),"undefined"===typeof _||!_.length||!_[0]){var I="";for(x in w=[],a[v])this.terminals_[x]&&x>2&&w.push("'"+this.terminals_[x]+"'");I=d.showPosition?"Parse error on line "+(o+1)+":\n"+d.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(I,{text:d.match,token:this.terminals_[m]||m,line:d.yylineno,loc:y,expected:w})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+m);switch(_[0]){case 1:n.push(m),r.push(d.yytext),s.push(d.yylloc),n.push(_[1]),m=null,l=d.yyleng,c=d.yytext,o=d.yylineno,y=d.yylloc;break;case 2:if(k=this.productions_[_[1]][1],E.$=r[r.length-k],E._$={first_line:s[s.length-(k||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(k||1)].first_column,last_column:s[s.length-1].last_column},g&&(E._$.range=[s[s.length-(k||1)].range[0],s[s.length-1].range[1]]),"undefined"!==typeof(b=this.performAction.apply(E,[c,l,o,u.yy,_[1],r,s].concat(h))))return b;k&&(n=n.slice(0,-1*k*2),r=r.slice(0,-1*k),s=s.slice(0,-1*k)),n.push(this.productions_[_[1]][0]),r.push(E.$),s.push(E._$),S=a[n[n.length-2]][n[n.length-1]],n.push(S);break;case 3:return!0}}return!0}},y={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};function g(){this.yy={}}return p.lexer=y,g.prototype=p,p.Parser=g,new g}());h.parser=h;var d=h,u="",p=0,y=[],g=[],f=[],m=function(){return s.I},v=function(t,e,n){(0,s.J)(globalThis,t,e,n)},_=function(){y.length=0,g.length=0,u="",f.length=0,(0,s.v)()},b=function(t){u=t,y.push(t)},x=function(){return y},k=function(){for(var t=I(),e=0;!t&&e<100;)t=I(),e++;return g.push.apply(g,f),g},S=function(t,e,n){var i={id:p++,section:u,type:u,task:t,score:e||0,events:n?[n]:[]};f.push(i)},w=function(t){f.find((function(t){return t.id===p-1})).events.push(t)},E=function(t){var e={section:u,type:u,description:t,task:t,classes:[]};g.push(e)},I=function(){var t,e=!0,n=(0,r.Z)(f.entries());try{for(n.s();!(t=n.n()).done;){var s=(0,i.Z)(t.value,2),a=s[0],c=s[1];f[a].processed,e=e&&c.processed}}catch(o){n.e(o)}finally{n.f()}return e},T={clear:_,getCommonDb:m,addSection:b,getSections:x,getTasks:k,addTask:S,addTaskOrg:E,addEvent:w,parseDirective:v},D=Object.freeze(Object.defineProperty({__proto__:null,addEvent:w,addSection:b,addTask:S,addTaskOrg:E,clear:_,default:T,getCommonDb:m,getSections:x,getTasks:k,parseDirective:v},Symbol.toStringTag,{value:"Module"}));!function(){function t(t,e,n,r,s,a,c,o){i(e.append("text").attr("x",n+s/2).attr("y",r+a/2+5).style("font-color",o).style("text-anchor","middle").text(t),c)}function e(t,e,n,r,s,a,c,o,l){for(var h=o.taskFontSize,d=o.taskFontFamily,u=t.split(/<br\s*\/?>/gi),p=0;p<u.length;p++){var y=p*h-h*(u.length-1)/2,g=e.append("text").attr("x",n+s/2).attr("y",r).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",d);g.append("tspan").attr("x",n+s/2).attr("dy",y).text(u[p]),g.attr("y",r+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(g,c)}}function n(t,n,r,s,a,c,o,l){var h=n.append("switch"),d=h.append("foreignObject").attr("x",r).attr("y",s).attr("width",a).attr("height",c).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,s,a,c,o,l),i(d,o)}function i(t,e){for(var n in e)n in e&&t.attr(n,e[n])}}();function C(t,e){t.each((function(){for(var t,n=(0,a.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],s=n.attr("y"),c=parseFloat(n.attr("dy")),o=n.text(null).append("tspan").attr("x",0).attr("y",s).attr("dy",c+"em"),l=0;l<i.length;l++)t=i[i.length-1-l],r.push(t),o.text(r.join(" ").trim()),(o.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),o.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],o=n.append("tspan").attr("x",0).attr("y",s).attr("dy","1.1em").text(t))}))}var L=function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d","M0 ".concat(e.height-5," v").concat(10-e.height," q0,-5 5,-5 h").concat(e.width-10," q5,0 5,5 v").concat(e.height-5," H0 Z")),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},A=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},M=function(t,e,n,i){var r=n%12-1,s=t.append("g");e.section=r,s.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+r);var a=s.append("g"),c=s.append("g"),o=c.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(C,e.width).node().getBBox(),l=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=o.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,c.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),L(a,e,r),e},O=function(t,e,n){var i=t.append("g"),r=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(C,e.width).node().getBBox(),s=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),r.height+1.1*s*.5+e.padding},$=function(t,e,n,i,a,c,o,l,h,d,u){var p,y,g=(0,r.Z)(e);try{for(g.s();!(y=g.n()).done;){var f=y.value,m={descr:f.task,section:n,number:n,width:150,padding:20,maxHeight:c};s.l.debug("taskNode",m);var v=t.append("g").attr("class","taskWrapper"),_=M(v,m,n,o).height;if(s.l.debug("taskHeight after draw",_),v.attr("transform","translate(".concat(i,", ").concat(a,")")),c=Math.max(c,_),f.events){var b=t.append("g").attr("class","lineWrapper");a+=100,H(t,f.events,n,i,a,o),a-=100,b.append("line").attr("x1",i+95).attr("y1",a+c).attr("x2",i+95).attr("y2",a+c+(u?c:d)+h+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}i+=200,u&&!(null==(p=o.timeline)?void 0:p.disableMulticolor)&&n++}}catch(x){g.e(x)}finally{g.f()}a-=10},H=function(t,e,n,i,a,c){var o=0,l=a;a+=100;var h,d=(0,r.Z)(e);try{for(d.s();!(h=d.n()).done;){var u={descr:h.value,section:n,number:n,width:150,padding:20,maxHeight:50};s.l.debug("eventNode",u);var p=t.append("g").attr("class","eventWrapper"),y=M(p,u,n,c).height;o+=y,p.attr("transform","translate(".concat(i,", ").concat(a,")")),a=a+10+y}}catch(g){d.e(g)}finally{d.f()}return a=l,o},z={db:D,renderer:{setConf:function(){},draw:function(t,e,n,c){var o,l,h,d,u,p,y,g=(0,s.c)(),f=null!==(o=g.leftMargin)&&void 0!==o?o:50;null==(u=(d=c.db).clear)||u.call(d),c.parser.parse(t+"\n"),s.l.debug("timeline",c.db);var m,v=g.securityLevel;"sandbox"===v&&(m=(0,a.Ys)("#i"+e));var _=("sandbox"===v?(0,a.Ys)(m.nodes()[0].contentDocument.body):(0,a.Ys)("body")).select("#"+e);_.append("g");var b=c.db.getTasks(),x=c.db.getCommonDb().getDiagramTitle();s.l.debug("task",b),A(_);var k=c.db.getSections();s.l.debug("sections",k);var S,w=0,E=0,I=50+f,T=50;var D=0,C=!0;k.forEach((function(t){var e=O(_,{number:D,descr:t,section:D,width:150,padding:20,maxHeight:w},g);s.l.debug("sectionHeight before draw",e),w=Math.max(w,e+20)}));var L=0,H=0;s.l.debug("tasks.length",b.length);var z,P=(0,r.Z)(b.entries());try{for(P.s();!(z=P.n()).done;){var j=(0,i.Z)(z.value,2),N=j[0],Z=j[1],W={number:N,descr:Z,section:Z.section,width:150,padding:20,maxHeight:E},F=O(_,W,g);s.l.debug("taskHeight before draw",F),E=Math.max(E,F+20),L=Math.max(L,Z.events.length);for(var B=0,Y=0;Y<Z.events.length;Y++){var R={descr:Z.events[Y],section:Z.section,number:Z.section,width:150,padding:20,maxHeight:50};B+=O(_,R,g)}H=Math.max(H,B)}}catch(U){P.e(U)}finally{P.f()}s.l.debug("maxSectionHeight before draw",w),s.l.debug("maxTaskHeight before draw",E),k&&k.length>0?k.forEach((function(t){var e=b.filter((function(e){return e.section===t})),n={number:D,descr:t,section:D,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:w};s.l.debug("sectionNode",n);var i=_.append("g"),r=M(i,n,D,g);s.l.debug("sectionNode output",r),i.attr("transform","translate(".concat(I,", ").concat(50,")")),T+=w+50,e.length>0&&$(_,e,D,I,T,E,g,L,H,w,!1),I+=200*Math.max(e.length,1),T=50,D++})):(C=!1,$(_,b,D,I,T,E,g,L,H,w,!0));var q=_.node().getBBox();s.l.debug("bounds",q),x&&_.append("text").text(x).attr("x",q.width/2-f).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),S=C?w+E+150:E+100,_.append("g").attr("class","lineWrapper").append("line").attr("x1",f).attr("y1",S).attr("x2",q.width+3*f).attr("y2",S).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,s.p)(void 0,_,null!==(l=null==(p=g.timeline)?void 0:p.padding)&&void 0!==l?l:50,null!==(h=null==(y=g.timeline)?void 0:y.useMaxWidth)&&void 0!==h&&h)}},parser:d,styles:function(t){return"\n  .edge {\n    stroke-width: 3;\n  }\n  ".concat(function(t){for(var e="",n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,c.Z)(t["lineColor"+n])?t["lineColor"+n]=(0,o.Z)(t["lineColor"+n],20):t["lineColor"+n]=(0,l.Z)(t["lineColor"+n],20);for(var i=0;i<t.THEME_COLOR_LIMIT;i++){var r=""+(17-3*i);e+="\n    .section-".concat(i-1," rect, .section-").concat(i-1," path, .section-").concat(i-1," circle, .section-").concat(i-1," path  {\n      fill: ").concat(t["cScale"+i],";\n    }\n    .section-").concat(i-1," text {\n     fill: ").concat(t["cScaleLabel"+i],";\n    }\n    .node-icon-").concat(i-1," {\n      font-size: 40px;\n      color: ").concat(t["cScaleLabel"+i],";\n    }\n    .section-edge-").concat(i-1,"{\n      stroke: ").concat(t["cScale"+i],";\n    }\n    .edge-depth-").concat(i-1,"{\n      stroke-width: ").concat(r,";\n    }\n    .section-").concat(i-1," line {\n      stroke: ").concat(t["cScaleInv"+i]," ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ").concat(t["cScaleLabel"+i]," ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    ")}return e}(t),"\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ").concat(t.git0,";\n  }\n  .section-root text {\n    fill: ").concat(t.gitBranchLabel0,";\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n")}}}}]);