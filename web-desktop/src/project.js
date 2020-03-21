window.__require=function e(t,n,i){function o(s,c){if(!n[s]){if(!t[s]){var a=s.split("/");if(a=a[a.length-1],!t[a]){var l="function"==typeof __require&&__require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+s+"'")}}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){return o(t[s][1][e]||e)},u,u.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<i.length;s++)o(i[s]);return o}({BezierData:[function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}cc._RF.push(t,"0bdd4Tm8mxMCLzyMc12Tebc","BezierData");var o=e("bezier"),r=function(){var e={},t=null,n=null,s=[],c={time:2,length:0,points:[]},a=new Map,l=null,u=0,d=null,h=2,v=100;e.init=function(e,i,o){t=e,n=i,d=o,g()},e.setPointCount=function(e){v=e},e.setBezierCurveType=function(e){h=e},e.setDeleteTarget=function(e){l=e},e.addBezierCurve=function(e){s.push(e),console.log("bezierCurveLists",s)},e.getBezierCurveType=function(){return h},e.getBezierCurveLists=function(){return s},e.getBezierCurveData=function(){return c},e.setBezierCurveRunTime=function(e){c.time=e},e.isLastCurve=function(){return s.length<=1},e.createCurve=function(e){var t=f(lcl.Ident.point,e),n=f(lcl.Ident.control,e),i={start:s[s.length-1].end,control:n,end:t};s.push(i),this.saveToPointCurveDict(i),console.log("bezierLists->",s)},e.createThirdOrderCurve=function(e){var t=s[s.length-1].end,n=f(lcl.Ident.point,e),i=f(lcl.Ident.control,e),o=cc.v2(200,200).add(t.position);o.x=Math.min(960,o.x),o.y=Math.min(540,o.y);var r={start:t,control1:f(lcl.Ident.control,o,!1),control2:i,end:n};s.push(r),this.saveToPointCurveDict(r),console.log("bezierLists->",s)},e.saveToPointCurveDict=function(e){var t=void 0;for(var n in e){var i=e[n];(t=a.has(i)?a.get(i):{})[n+"Curve"]=e,a.set(i,t)}console.log("pointCurveDict",a)},e.deletePoint=function(){if(a.has(l)){var e=m(l);"center"==e?B(l):"start"==e?C(l):"end"==e&&z(l)}},e.saveBezierPath=function(){c.length=0,c.points=[],console.log("\u4fdd\u5b58\u8def\u5f84bezierLists",s);for(var e=0,t=s.length;e<t;e++){var n,r=s[e],l=new o(Object.values(r),2),u=l.getPoints(v);console.log("consscscds",v);var d=l.getCurveLength();c.length+=d,(n=c.points).push.apply(n,i(u))}console.log("\u4fdd\u5b58\u8def\u5f84bezierCurveData",c),console.log("\u4fdd\u5b58\u8def\u5f84pointCurveDict->",a)};var f=function(e,i){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=void 0,s=void 0;e==lcl.Ident.point?((r=cc.instantiate(t)).ident=lcl.Ident.point,s="point"):e==lcl.Ident.control&&((r=cc.instantiate(n)).ident=lcl.Ident.control,s="control",o&&lcl.NodeEvents.setMoveTargetNode(r));var c=u++;r.name=s+"_"+c,r.parent=d,r.setPosition(i),lcl.NodeEvents.addPointDeleteEvents(r),lcl.NodeEvents.addDragEvents(r);var a=new cc.Node;return a.parent=r,a.y=20,a.addComponent(cc.Label).string=c,r},p=function(){var e=cc.view.getDesignResolutionSize(),t=Math.random()*e.width-.5*e.width,n=Math.random()*e.height-.5*e.height;return cc.v2(t,n)},g=function(){var e=f(lcl.Ident.point,p()),t=f(lcl.Ident.control,p()),n=f(lcl.Ident.point,p());lcl.NodeEvents.setMoveTargetNode(null);var i={start:e,control:t,end:n};r.addBezierCurve(i),r.saveToPointCurveDict(i)},m=function(e){var t=a.get(e);if(t){if(t.startCurve&&t.endCurve)return"center";if(t.startCurve)return"start";if(t.endCurve)return"end"}return 0},B=function(e){if(console.warn("\u5220\u9664\u7684\u662f\u4e2d\u95f4\u70b9"),a.has(e)){var t=a.get(e),n=t.endCurve,i=t.startCurve;n.end=i.end;var o=a.get(n.end);for(var r in o.endCurve=n,a.delete(e),i)if("end"!=r){var s=i[r];a.delete(s),s.destroy()}E(i)}},C=function(e){if(console.warn("\u5220\u9664\u7684\u662f\u8d77\u70b9"),a.has(e)){var t=a.get(e),n=t.startCurve;t.endCurve=null;var i=a.get(n.end);for(var o in i.endCurve=null,n)if("end"!=o){var r=n[o];a.delete(r),r.destroy()}E(n)}},z=function(e){if(console.warn("\u5220\u9664\u7684\u662f\u7ec8\u70b9"),a.has(e)){var t=a.get(e),n=t.endCurve;t.startCurve=null;var i=a.get(n.start);for(var o in i.startCurve=null,n)if("start"!=o){var r=n[o];a.delete(r),r.destroy()}E(n)}},E=function(e){for(var t=0,n=s.length;t<n;t++){if(s[t]===e)return void s.splice(t,1)}};return e}();t.exports=r,cc._RF.pop()},{bezier:"bezier"}],Enum:[function(e,t,n){"use strict";cc._RF.push(t,"c328dsGctNCsqdKLfSajdEf","Enum"),t.exports={Ident:{point:0,control:1,window:2},BezierCurveType:{SecondOrder:2,ThirdOrder:3}},cc._RF.pop()},{}],EventListener:[function(e,t,n){"use strict";cc._RF.push(t,"79eceW6rG9Hza7PDc4t2EIb","EventListener");var i=function(){var e={},t={};return e.on=function(e,n){t[e]=t[e]||[],t[e].push(n)},e.emit=function(e,n){if(t[e])for(var i=0,o=t[e].length;i<o;i++)t[e][i].call(null,n)},e.off=function(e,n){for(var i=t[e],o=0,r=i.length;o<r;o++)i[o]===n&&i.splice(o,1)},e}();t.exports=i,cc._RF.pop()},{}],InitGame:[function(e,t,n){"use strict";cc._RF.push(t,"051feTJkcxNu7mMbFRkGjwN","InitGame");var i=function(e){return e&&e.__esModule?e:{default:e}}(e("./PathMgr"));null==window.uGame&&(window.uGame={}),uGame.PathMgr=i.default,cc._RF.pop()},{"./PathMgr":"PathMgr"}],NodeEvents:[function(e,t,n){"use strict";cc._RF.push(t,"09ffeHRa95D+4fI4+Flx7Mh","NodeEvents");var i=function(){var e={},t=null,n=null,i=!0;function o(e){return cc.find("Canvas").convertToNodeSpaceAR(e.getLocation())}function r(e){return e.ident==lcl.Ident.point}return e.setMoveTargetNode=function(e){t=e},e.setOperateStatus=function(e){i=e},e.addDragEvents=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;e.on(cc.Node.EventType.MOUSE_DOWN,function(e){e.stopPropagation(),e.getButton()==cc.Event.EventMouse.BUTTON_LEFT&&(t=i,n=!0)}),e.on(cc.Node.EventType.MOUSE_MOVE,function(e){if(i.opacity=100,cc.game.canvas.style.cursor="all-scroll",n&&t){var r=o(e);t.setPosition(r)}}),e.on(cc.Node.EventType.MOUSE_LEAVE,function(e){i.opacity=255,cc.game.canvas.style.cursor="auto"}),e.on(cc.Node.EventType.MOUSE_UP,function(e){n=!1,t=null,lcl.BezierData.saveBezierPath()})},e.addPointDeleteEvents=function(e){e.on(cc.Node.EventType.MOUSE_DOWN,function(e){if(e.getButton()!=cc.Event.EventMouse.BUTTON_RIGHT);else if(r(e.target)){var t=o(e);lcl.BezierData.setDeleteTarget(e.target),lcl.Events.emit("showDeleteBtn",t)}})},e.addCanvasTouchEvents=function(e){var r=cc.find("Canvas");r.on(cc.Node.EventType.MOUSE_DOWN,function(e){if(e.getButton()==cc.Event.EventMouse.BUTTON_LEFT){e.stopPropagation(),e.target;var t=o(e);if(!i)return void lcl.Events.emit("hideDeleteBtn");console.log(lcl.BezierData),lcl.BezierData.getBezierCurveType()==lcl.BezierCurveType.SecondOrder&&lcl.BezierData.createCurve(t),lcl.BezierData.getBezierCurveType()==lcl.BezierCurveType.ThirdOrder&&lcl.BezierData.createThirdOrderCurve(t),n=!0}}),r.on(cc.Node.EventType.MOUSE_MOVE,function(e){e.target;var i=o(e);lcl.Events.emit("setMouseLocation",i),n&&t&&(console.log("moveTargetNode.setPosition(mousePos);"),t.setPosition(i))}),r.on(cc.Node.EventType.MOUSE_UP,function(e){e.target,n=!1,t=null})},e}();t.exports=i,cc._RF.pop()},{}],PathMgr:[function(e,t,n){"use strict";cc._RF.push(t,"1adf5tY9K1P94QvFyhOC8GP","PathMgr"),t.exports={m_designSize:[1080,1920],toGameUse:function(e,t){console.error(t);for(var n=t.points,i={},o=[],r=0,s=0,c=0,a=0,l=0;l<n.length;l++){var u=n[l];if(s+=u.time,0!=l){if(!(.1*r>s)){var d=this._getAngle(u.x,u.y,o[o.length-1].x,o[o.length-1].y);c=u.x+this.m_designSize[0]/2,a=u.y+this.m_designSize[1]/2,o.push({x:Number(c.toFixed(1)),y:Number(a.toFixed(1)),angle:Number(d.toFixed(2))}),r++}}else c=u.x+this.m_designSize[0]/2,a=u.y+this.m_designSize[1]/2,o.push({x:Number(c.toFixed(1)),y:Number(a.toFixed(1)),angle:0}),r++}return i.id=Number(e),i.points=o,i},_getAngle:function(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=Math.atan2(e-n,t-i);return cc.misc.radiansToDegrees(r)+o}},cc._RF.pop()},{}],bezier:[function(e,t,n){"use strict";cc._RF.push(t,"26c3bm8rXVNSaNaXJZojlpp","bezier");t.exports=function(e){var t={},n=void 0,i=void 0,o=void 0,r=void 0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,c=e;function a(e){for(var t=1,n=1;n<=e;n++)t*=n;return t}var l=function(e,t){var s=r/t,l=0,u=0,d=c.length-1;c.forEach(function(e,t){t?(l+=a(d)/a(t)/a(d-t)*e.x*Math.pow(1-s,d-t)*Math.pow(s,t),u+=a(d)/a(t)/a(d-t)*e.y*Math.pow(1-s,d-t)*Math.pow(s,t)):(l+=e.x*Math.pow(1-s,d-t)*Math.pow(s,t),u+=e.y*Math.pow(1-s,d-t)*Math.pow(s,t))});var h=Math.sqrt(Math.pow(o.x-l,2)+Math.pow(o.y-u,2)),v={x:l,y:u,length:h};n.push(v),o=v,i+=h,r+=e};return t.getPoints=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;n=[],i=r=0,o={x:e[0].x,y:e[0].y,length:0};for(var c=s/t,a=0,u=t+1;a<u;a++)l(c,s);return n},t.getCurveLength=function(){return i},t},cc._RF.pop()},{}],drawBezier:[function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}cc._RF.push(t,"3c1aeFLOLRFrrQU9tFTJ/Kg","drawBezier"),window.lcl={},window.lcl.Bezier=e("./bezier"),window.lcl.BezierData=e("./BezierData"),window.lcl.NodeEvents=e("./NodeEvents"),window.lcl.Events=e("./EventListener"),window.lcl.Ident=e("./Enum").Ident,window.lcl.BezierCurveType=e("./Enum").BezierCurveType,cc.Class({extends:cc.Component,properties:{graphicsNode:cc.Node,box:cc.Node,point:cc.Prefab,control:cc.Prefab,bezierColor:new cc.Color(255,0,0),lineColor:new cc.Color(0,255,255),infoWindow:cc.Node,msg:cc.Node,timeInfo:cc.Label,deleteBtn:cc.Node,mouseLocation:cc.Label},onLoad:function(){this.init(),lcl.Events.on("setMouseLocation",this.setMouseLocation.bind(this)),lcl.Events.on("showDeleteBtn",this.showDeleteBtn.bind(this)),lcl.Events.on("hideDeleteBtn",this.hideDeleteBtn.bind(this))},init:function(){this.infoWindow.zIndex=10,this.notice=this.infoWindow.getChildByName("notice").getComponent(cc.Label),this.fileInputBox=this.infoWindow.getChildByName("Input").getChildByName("fileEditBox").getComponent(cc.EditBox),this.moveBtn=this.node.getChildByName("controlPanel").getChildByName("moveBtn"),this.smoothnessInputBox=this.node.getChildByName("controlPanel").getChildByName("smoothnessInput").getChildByName("EditBox").getComponent(cc.EditBox),this.runTimeInputBox=this.node.getChildByName("controlPanel").getChildByName("runTimeInput").getChildByName("EditBox").getComponent(cc.EditBox),this.initGraphics(),this.initNodeEvents(),this.hideInfoWindow(),this.addDeleteBtnEvents(),lcl.BezierData.init(this.point,this.control,this.node),lcl.BezierData.setBezierCurveRunTime(Number(this.runTimeInputBox.string)),lcl.BezierData.saveBezierPath()},update:function(e){lcl.NodeEvents.setOperateStatus(!this.deleteBtn.active),this.drawBezierAll(),this.isStartRun&&this.setCountTimeLabel(e)},initGraphics:function(){this.ctx=this.graphicsNode.getComponent(cc.Graphics),this.ctx.lineWidth=2},getRandPos:function(){var e=cc.view.getDesignResolutionSize(),t=Math.random()*e.width-.5*e.width,n=Math.random()*e.height-.5*e.height;return cc.v2(t,n)},initRandCurve:function(){var e={start:this.createPoint(lcl.Ident.point,this.getRandPos()),control:this.createPoint(lcl.Ident.control,this.getRandPos()),end:this.createPoint(lcl.Ident.point,this.getRandPos())};lcl.BezierData.addBezierCurve(e),lcl.BezierData.saveToPointCurveDict(e)},initNodeEvents:function(){lcl.NodeEvents.addCanvasTouchEvents(),lcl.NodeEvents.addDragEvents(this.box),lcl.NodeEvents.addDragEvents(this.moveBtn,this.moveBtn.parent),this.addHideEvents(this.moveBtn.parent)},drawBezierAll:function(){this.ctx.clear();for(var e=lcl.BezierData.getBezierCurveLists(),t=0,n=e.length;t<n;t++){var i=e[t],o=Object.keys(i).length;3==o&&this.drawBezier(i.start.position,i.control.position,i.end.position),4==o&&this.drawThirdOrderBezier(i)}},drawBezier:function(e,t,n){this.ctx.moveTo(e.x,e.y),this.ctx.strokeColor=this.bezierColor,this.ctx.quadraticCurveTo(t.x,t.y,n.x,n.y),this.ctx.stroke(),this.ctx.moveTo(n.x,n.y),this.ctx.strokeColor=this.lineColor,this.ctx.lineTo(t.x,t.y),this.ctx.stroke()},drawThirdOrderBezier:function(e){this.ctx.moveTo(e.start.x,e.start.y),this.ctx.strokeColor=this.bezierColor,this.ctx.bezierCurveTo(e.control1.x,e.control1.y,e.control2.x,e.control2.y,e.end.x,e.end.y),this.ctx.stroke(),this.ctx.moveTo(e.start.x,e.start.y),this.ctx.strokeColor=this.lineColor,this.ctx.lineTo(e.control1.x,e.control1.y),this.ctx.stroke(),this.ctx.moveTo(e.end.x,e.end.y),this.ctx.lineTo(e.control2.x,e.control2.y),this.ctx.stroke()},addHideEvents:function(e){var t=this;e.on(cc.Node.EventType.MOUSE_MOVE,function(e){t.hideMouseLocation()})},convertToNodeSpace:function(e){return this.node.convertToNodeSpaceAR(e.getLocation())},addDeleteBtnEvents:function(){var e=this;this.deleteBtn.on(cc.Node.EventType.MOUSE_DOWN,function(t){if(t.stopPropagation(),t.getButton()==cc.Event.EventMouse.BUTTON_LEFT){if(lcl.BezierData.isLastCurve())return void e.showMsg("\u4e0d\u80fd\u5220\u9664\u6700\u540e\u4e00\u4e2a\u66f2\u7ebf!!");e.hideDeleteBtn(),lcl.BezierData.deletePoint(),lcl.BezierData.saveBezierPath()}})},save:function(){""!=this.fileInputBox.string?(this.setNoitce(""),this.computeBezierActions(),this.saveBezierPathToJson(this.fileInputBox.string)):this.setNoitce("\u6587\u4ef6\u540d\u4e0d\u80fd\u4e3a\u7a7a!")},saveBezierPathToJson:function(e){if(cc.sys.isBrowser){var t=uGame.PathMgr.toGameUse(e,lcl.BezierData.getBezierCurveData());t=JSON.stringify(t);var n=new Blob([t],{type:"application/json"}),i=document.createElement("a");i.download=e,i.innerHTML="Download File",null!=window.webkitURL?i.href=window.webkitURL.createObjectURL(n):(i.href=window.URL.createObjectURL(n),i.onclick=destroyClickedElement,i.style.display="none",document.body.appendChild(i)),i.click()}},computeBezierActions:function(){var e=lcl.BezierData.getBezierCurveData();this.actionLists=[];for(var t=0,n=e.points.length;t<n;t++){var i=e.points[t],o=i.length/e.length*e.time;i.time=o;var r=cc.moveTo(o,cc.v2(i.x,i.y));this.actionLists.push(r)}},playMoveAnimation:function(){var e,t=this;(this.computeBezierActions(),this.startCountTime(),console.time("time",this.actionLists),this.actionLists.push(cc.callFunc(function(){t.stopCountTime(),console.timeEnd("time")})),this.actionLists.length>1)?this.box.runAction(cc.sequence(this.actionLists)):(e=this.box).runAction.apply(e,i(this.actionLists))},setRunTime:function(e){var t=Number(e);if(""==e||isNaN(t))return this.showMsg("\u8fd0\u884c\u65f6\u95f4\u53ea\u80fd\u586b\u5199\u6570\u5b57\uff01\uff01\uff01"),void(this.runTimeInputBox.string=this.prveRunTime||2);this.prveRunTime=t,lcl.BezierData.setBezierCurveRunTime(t)},setCurveSmoothness:function(e){console.log(e);var t=Number(e);return""==e||isNaN(t)?(this.showMsg("\u66f2\u7ebf\u5e73\u6ed1\u5ea6\u53ea\u80fd\u586b\u5199\u6570\u5b57\uff01\uff01\uff01"),void(this.smoothnessInputBox.string=this.prvePointCount||100)):t<0||t>1e3?(this.showMsg("\u66f2\u7ebf\u5e73\u6ed1\u5ea6\u53d6\u503c\u8303\u56f4\u5728 0 - 1000\uff01"),void(this.smoothnessInputBox.string=this.prvePointCount||100)):(this.prvePointCount=t,void lcl.BezierData.setPointCount(t))},play:function(){lcl.BezierData.saveBezierPath(),this.playMoveAnimation()},showInfoWindow:function(){this.infoWindow.active=!0,this.setNoitce("")},hideInfoWindow:function(){this.infoWindow.active=!1},setNoitce:function(e){this.notice.string=e},showMsg:function(e){var t=this;this.msg.active=!0,this.msg.getComponent(cc.Label).string=e,setTimeout(function(){t.msg&&(t.msg.active=!1)},1e3)},startCountTime:function(){this.isStartRun=!0,this.timeInfo.string=0,this.currentRunTime=0},stopCountTime:function(){this.isStartRun=!1},setCountTimeLabel:function(e){this.currentRunTime=this.currentRunTime+e,this.timeInfo.string="run time: "+this.currentRunTime.toFixed(2)+"s"},showDeleteBtn:function(e){this.deleteBtn.active=!0,this.deleteBtn.setPosition(e)},hideDeleteBtn:function(){this.deleteBtn.active=!1},setMouseLocation:function(e){this.mouseLocation.node.active=!0,this.mouseLocation.node.setPosition(e),this.mouseLocation.string="x:"+e.x.toFixed(0)+" y:"+e.y.toFixed(0)},hideMouseLocation:function(){this.mouseLocation.node.active=!1},setCurveType:function(e){console.log(e),lcl.BezierData.setBezierCurveType(e.node._name)}}),cc._RF.pop()},{"./BezierData":"BezierData","./Enum":"Enum","./EventListener":"EventListener","./NodeEvents":"NodeEvents","./bezier":"bezier"}]},{},["BezierData","Enum","EventListener","InitGame","NodeEvents","PathMgr","bezier","drawBezier"]);