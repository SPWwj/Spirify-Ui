"use strict";(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[2810],{92810:function(t,e,n){n.r(e),n.d(e,{diagram:function(){return V}});var i=n(29439),r=n(37762),a=n(93433),s=n(1326),c=n(40819),o=n(38847),l=(n(10658),n(16278),n(91213),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,24,26],r=[1,15],a=[1,16],s=[1,17],c=[1,18],o=[1,19],l=[1,20],h=[1,24],u=[4,6,9,11,17,18,20,22,23,24,26],y={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,r,a,s){var c=a.length-1;switch(r){case 1:return a[c-1];case 3:case 7:case 8:this.$=[];break;case 4:a[c-1].push(a[c]),this.$=a[c-1];break;case 5:case 6:this.$=a[c];break;case 11:i.setDiagramTitle(a[c].substr(6)),this.$=a[c].substr(6);break;case 12:this.$=a[c].trim(),i.setAccTitle(this.$);break;case 13:case 14:this.$=a[c].trim(),i.setAccDescription(this.$);break;case 15:i.addSection(a[c].substr(8)),this.$=a[c].substr(8);break;case 16:i.addTask(a[c-1],a[c]),this.$="task";break;case 18:i.parseDirective("%%{","open_directive");break;case 19:i.parseDirective(a[c],"type_directive");break;case 20:a[c]=a[c].trim().replace(/'/g,'"'),i.parseDirective(a[c],"arg_directive");break;case 21:i.parseDirective("}%%","close_directive","journey")}},table:[{3:1,4:e,7:3,12:4,26:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,26:n},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:r,18:a,20:s,22:c,23:o,24:l,26:n},{1:[2,2]},{14:22,15:[1,23],29:h},t([15,29],[2,19]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:21,10:25,12:4,17:r,18:a,20:s,22:c,23:o,24:l,26:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,26]},{21:[1,27]},t(i,[2,14]),t(i,[2,15]),{25:[1,28]},t(i,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(i,[2,16]),t(u,[2,9]),{14:32,29:h},{29:[2,20]},{11:[1,33]},t(u,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],a=[],s=this.table,c="",o=0,l=0,h=a.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(y.yy[p]=this.yy[p]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,"undefined"==typeof u.yylloc&&(u.yylloc={});var d=u.yylloc;a.push(d);var f=u.options&&u.options.ranges;function g(){var t;return"number"!==typeof(t=i.pop()||u.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var x,m,v,k,_,b,w,M,E={};;){if(m=n[n.length-1],this.defaultActions[m]?v=this.defaultActions[m]:(null!==x&&"undefined"!=typeof x||(x=g()),v=s[m]&&s[m][x]),"undefined"===typeof v||!v.length||!v[0]){var S="";for(_ in M=[],s[m])this.terminals_[_]&&_>2&&M.push("'"+this.terminals_[_]+"'");S=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+M.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(S,{text:u.match,token:this.terminals_[x]||x,line:u.yylineno,loc:d,expected:M})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+x);switch(v[0]){case 1:n.push(x),r.push(u.yytext),a.push(u.yylloc),n.push(v[1]),x=null,l=u.yyleng,c=u.yytext,o=u.yylineno,d=u.yylloc;break;case 2:if(b=this.productions_[v[1]][1],E.$=r[r.length-b],E._$={first_line:a[a.length-(b||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(b||1)].first_column,last_column:a[a.length-1].last_column},f&&(E._$.range=[a[a.length-(b||1)].range[0],a[a.length-1].range[1]]),"undefined"!==typeof(k=this.performAction.apply(E,[c,l,o,y.yy,v[1],r,a].concat(h))))return k;b&&(n=n.slice(0,-1*b*2),r=r.slice(0,-1*b),a=a.slice(0,-1*b)),n.push(this.productions_[v[1]][0]),r.push(E.$),a.push(E._$),w=s[n[n.length-2]][n[n.length-1]],n.push(w);break;case 3:return!0}}return!0}},p={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in r)this[a]=r[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),a=0;a<r.length;a++)if((n=this._input.match(this.rules[r[a]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[a])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}};function d(){this.yy={}}return y.lexer=p,d.prototype=y,y.Parser=d,new d}());l.parser=l;var h=l,u="",y=[],p=[],d=[],f=function(){var t,e=!0,n=(0,r.Z)(d.entries());try{for(n.s();!(t=n.n()).done;){var a=(0,i.Z)(t.value,2),s=a[0],c=a[1];d[s].processed,e=e&&c.processed}}catch(o){n.e(o)}finally{n.f()}return e},g={parseDirective:function(t,e,n){s.m.parseDirective(this,t,e,n)},getConfig:function(){return(0,s.c)().journey},clear:function(){y.length=0,p.length=0,u="",d.length=0,(0,s.v)()},setDiagramTitle:s.r,getDiagramTitle:s.t,setAccTitle:s.s,getAccTitle:s.g,setAccDescription:s.b,getAccDescription:s.a,addSection:function(t){u=t,y.push(t)},getSections:function(){return y},getTasks:function(){for(var t=f(),e=0;!t&&e<100;)t=f(),e++;return p.push.apply(p,d),p},addTask:function(t,e){var n=e.substr(1).split(":"),i=0,r=[];1===n.length?(i=Number(n[0]),r=[]):(i=Number(n[0]),r=n[1].split(","));var a=r.map((function(t){return t.trim()})),s={section:u,type:u,people:a,task:t,score:i};d.push(s)},addTaskOrg:function(t){var e={section:u,type:u,description:t,task:t,classes:[]};p.push(e)},getActors:function(){return function(){var t=[];p.forEach((function(e){e.people&&t.push.apply(t,(0,a.Z)(e.people))}));var e=new Set(t);return(0,a.Z)(e).sort()}()}},x=function(t){return".label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ".concat(t.textColor,";\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ").concat(t.textColor,"\n  }\n\n  .legend {\n    fill: ").concat(t.textColor,";\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ").concat(t.textColor,"\n  }\n\n  .face {\n    ").concat(t.faceColor?"fill: ".concat(t.faceColor):"fill: #FFF8DC",";\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ").concat(t.mainBkg,";\n    stroke: ").concat(t.nodeBorder,";\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ").concat(t.arrowheadColor,";\n  }\n\n  .edgePath .path {\n    stroke: ").concat(t.lineColor,";\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ").concat(t.lineColor,";\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ").concat(t.edgeLabelBackground,";\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ").concat(t.titleColor,";\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ").concat(t.tertiaryColor,";\n    border: 1px solid ").concat(t.border2,";\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType0):"",";\n  }\n  .task-type-1, .section-type-1  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType1):"",";\n  }\n  .task-type-2, .section-type-2  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType2):"",";\n  }\n  .task-type-3, .section-type-3  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType3):"",";\n  }\n  .task-type-4, .section-type-4  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType4):"",";\n  }\n  .task-type-5, .section-type-5  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType5):"",";\n  }\n  .task-type-6, .section-type-6  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType6):"",";\n  }\n  .task-type-7, .section-type-7  {\n    ").concat(t.fillType0?"fill: ".concat(t.fillType7):"",";\n  }\n\n  .actor-0 {\n    ").concat(t.actor0?"fill: ".concat(t.actor0):"",";\n  }\n  .actor-1 {\n    ").concat(t.actor1?"fill: ".concat(t.actor1):"",";\n  }\n  .actor-2 {\n    ").concat(t.actor2?"fill: ".concat(t.actor2):"",";\n  }\n  .actor-3 {\n    ").concat(t.actor3?"fill: ".concat(t.actor3):"",";\n  }\n  .actor-4 {\n    ").concat(t.actor4?"fill: ".concat(t.actor4):"",";\n  }\n  .actor-5 {\n    ").concat(t.actor5?"fill: ".concat(t.actor5):"",";\n  }\n")},m=function(t,e){return(0,o.d)(t,e)},v=function(t,e){var n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n},k=function(t,e){return(0,o.f)(t,e)},_=-1,b=function(){function t(t,e,n,r,a,s,c,o){i(e.append("text").attr("x",n+a/2).attr("y",r+s/2+5).style("font-color",o).style("text-anchor","middle").text(t),c)}function e(t,e,n,r,a,s,c,o,l){for(var h=o.taskFontSize,u=o.taskFontFamily,y=t.split(/<br\s*\/?>/gi),p=0;p<y.length;p++){var d=p*h-h*(y.length-1)/2,f=e.append("text").attr("x",n+a/2).attr("y",r).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",u);f.append("tspan").attr("x",n+a/2).attr("dy",d).text(y[p]),f.attr("y",r+s/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(f,c)}}function n(t,n,r,a,s,c,o,l){var h=n.append("switch"),u=h.append("foreignObject").attr("x",r).attr("y",a).attr("width",s).attr("height",c).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,a,s,c,o,l),i(u,o)}function i(t,e){for(var n in e)n in e&&t.attr(n,e[n])}return function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),w=v,M=function(t,e,n){var i=t.append("g"),r=(0,o.g)();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),r.height=n.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,m(i,r),b(n)(e.text,i,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},n,e.colour)},E=k,S=function(t,e,n){var i=e.x+n.width/2,r=t.append("g");_++;r.append("line").attr("id","task"+_).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),function(t,e){var n=15,i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",n).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){var i=(0,c.Nb1)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(r):e.score<3?function(t){var i=(0,c.Nb1)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(r):r.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(r,{cx:i,cy:300+30*(5-e.score),score:e.score});var a=(0,o.g)();a.x=e.x,a.y=e.y,a.fill=e.fill,a.width=n.width,a.height=n.height,a.class="task task-type-"+e.num,a.rx=3,a.ry=3,m(r,a);var s=e.x+14;e.people.forEach((function(t){var n=e.actors[t].color,i={cx:s,cy:e.y,r:7,fill:n,stroke:"#000",title:t,pos:e.actors[t].position};v(r,i),s+=10})),b(n)(e.task,r,a.x,a.y,a.width,a.height,{class:"task"},n,e.colour)},T=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},A={};var I=(0,s.c)().journey,P=I.leftMargin,C={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,i){void 0===t[e]?t[e]=n:t[e]=i(n,t[e])},updateBounds:function(t,e,n,i){var r,a=(0,s.c)().journey,c=this,o=0;this.sequenceItems.forEach((function(s){o++;var l=c.sequenceItems.length-o+1;c.updateVal(s,"starty",e-l*a.boxMargin,Math.min),c.updateVal(s,"stopy",i+l*a.boxMargin,Math.max),c.updateVal(C.data,"startx",t-l*a.boxMargin,Math.min),c.updateVal(C.data,"stopx",n+l*a.boxMargin,Math.max),"activation"!==r&&(c.updateVal(s,"startx",t-l*a.boxMargin,Math.min),c.updateVal(s,"stopx",n+l*a.boxMargin,Math.max),c.updateVal(C.data,"starty",e-l*a.boxMargin,Math.min),c.updateVal(C.data,"stopy",i+l*a.boxMargin,Math.max))}))},insert:function(t,e,n,i){var r=Math.min(t,n),a=Math.max(t,n),s=Math.min(e,i),c=Math.max(e,i);this.updateVal(C.data,"startx",r,Math.min),this.updateVal(C.data,"starty",s,Math.min),this.updateVal(C.data,"stopx",a,Math.max),this.updateVal(C.data,"stopy",c,Math.max),this.updateBounds(r,s,a,c)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},D=I.sectionFills,j=I.sectionColours,$=function(t,e,n){var a,c=(0,s.c)().journey,o="",l=n+(2*c.height+c.diagramMarginY),h=0,u="#CCC",y="black",p=0,d=(0,r.Z)(e.entries());try{for(d.s();!(a=d.n()).done;){var f=(0,i.Z)(a.value,2),g=f[0],x=f[1];if(o!==x.section){u=D[h%D.length],p=h%D.length,y=j[h%j.length];for(var m=0,v=x.section,k=g;k<e.length&&e[k].section==v;k++)m+=1;var _={x:g*c.taskMargin+g*c.width+P,y:50,text:x.section,fill:u,num:p,colour:y,taskCount:m};M(t,_,c),o=x.section,h++}var b=x.people.reduce((function(t,e){return A[e]&&(t[e]=A[e]),t}),{});x.x=g*c.taskMargin+g*c.width+P,x.y=l,x.width=c.diagramMarginX,x.height=c.diagramMarginY,x.colour=y,x.fill=u,x.num=p,x.actors=b,S(t,x,c),C.insert(x.x,x.y,x.x+x.width+c.taskMargin,450)}}catch(w){d.e(w)}finally{d.f()}},N={setConf:function(t){Object.keys(t).forEach((function(e){I[e]=t[e]}))},draw:function(t,e,n,i){var r=(0,s.c)().journey;i.db.clear(),i.parser.parse(t+"\n");var a,o=(0,s.c)().securityLevel;"sandbox"===o&&(a=(0,c.Ys)("#i"+e));var l="sandbox"===o?(0,c.Ys)(a.nodes()[0].contentDocument.body):(0,c.Ys)("body");C.init();var h=l.select("#"+e);T(h);var u=i.db.getTasks(),y=i.db.getDiagramTitle(),p=i.db.getActors();for(var d in A)delete A[d];var f=0;p.forEach((function(t){A[t]={color:r.actorColours[f%r.actorColours.length],position:f},f++})),function(t){var e=(0,s.c)().journey,n=60;Object.keys(A).forEach((function(i){var r=A[i].color,a={cx:20,cy:n,r:7,fill:r,stroke:"#000",pos:A[i].position};w(t,a);var s={x:40,y:n+7,fill:"#666",text:i,textMargin:5|e.boxTextMargin};E(t,s),n+=20}))}(h),C.insert(0,0,P,50*Object.keys(A).length),$(h,u,0);var g=C.getBounds();y&&h.append("text").text(y).attr("x",P).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);var x=g.stopy-g.starty+2*r.diagramMarginY,m=P+g.stopx+2*r.diagramMarginX;(0,s.i)(h,x,m,r.useMaxWidth),h.append("line").attr("x1",P).attr("y1",4*r.height).attr("x2",m-P-4).attr("y2",4*r.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");var v=y?70:0;h.attr("viewBox","".concat(g.startx," -25 ").concat(m," ").concat(x+v)),h.attr("preserveAspectRatio","xMinYMin meet"),h.attr("height",x+v+25)}},V={parser:h,db:g,renderer:N,styles:x,init:function(t){N.setConf(t.journey),g.clear()}}},38847:function(t,e,n){n.d(e,{a:function(){return a},b:function(){return o},c:function(){return c},d:function(){return r},e:function(){return h},f:function(){return s},g:function(){return l}});var i=n(16278),r=function(t,e){var n=t.append("rect");if(n.attr("x",e.x),n.attr("y",e.y),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("width",e.width),n.attr("height",e.height),n.attr("rx",e.rx),n.attr("ry",e.ry),"undefined"!==e.attrs&&null!==e.attrs)for(var i in e.attrs)n.attr(i,e.attrs[i]);return"undefined"!==e.class&&n.attr("class",e.class),n},a=function(t,e){r(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,stroke:e.stroke,class:"rect"}).lower()},s=function(t,e){var n=e.text.replace(/<br\s*\/?>/gi," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),void 0!==e.class&&i.attr("class",e.class);var r=i.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(n),i},c=function(t,e,n,r){var a=t.append("image");a.attr("x",e),a.attr("y",n);var s=(0,i.N)(r);a.attr("xlink:href",s)},o=function(t,e,n,r){var a=t.append("use");a.attr("x",e),a.attr("y",n);var s=(0,i.N)(r);a.attr("xlink:href","#"+s)},l=function(){return{x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}},h=function(){return{x:0,y:0,width:100,height:100,fill:void 0,anchor:void 0,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0,valign:void 0}}}}]);