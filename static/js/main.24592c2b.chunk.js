(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Buddy-In.b21dbca7.mp3"},function(e,t,n){e.exports=n.p+"static/media/Buddy-Out.06f2cbe4.mp3"},function(e,t,n){e.exports=n.p+"static/media/Drop.6d9462e6.mp3"},function(e,t,n){e.exports=n.p+"static/media/File-Done.4f040a90.mp3"},function(e,t,n){e.exports=n.p+"static/media/Goodbye.f4200c5f.mp3"},function(e,t,n){e.exports=n.p+"static/media/im.f96c0996.mp3"},function(e,t,n){e.exports=n.p+"static/media/Got-Pics.63e8a01a.mp3"},function(e,t,n){e.exports=n.p+"static/media/Welcome.f8a11654.mp3"},function(e,t,n){e.exports=n.p+"static/media/You-Got-Mail.5dc90c91.mp3"},function(e,t,n){e.exports=n.p+"static/media/aolpic.0b0a5c32.svg"},function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),r=n.n(o),c=(n(25),n(1)),s=n(2),d=n(3),u=n(5),l=n(4),p=n(6),m=(n(26),n(9)),f=n.n(m),g=n(10),b=n.n(g),h=n(11),v=n.n(h),y=n(12),O=n.n(y),k=n(13),E=n.n(k),j=n(14),x=n.n(j),w=n(15),C=n.n(w),B=n(16),D=n.n(B),P=n(17),I=n.n(P),N=n(18),W=n.n(N),_=[{trigger:"Q",id:"welcome",file:D.a},{trigger:"W",id:"gotmail",file:I.a},{trigger:"E",id:"filedone",file:O.a},{trigger:"A",id:"im",file:x.a},{trigger:"S",id:"buddyin",file:f.a},{trigger:"D",id:"buddyout",file:b.a},{trigger:"Z",id:"drop",file:v.a},{trigger:"X",id:"gotpics",file:C.a},{trigger:"C",id:"goodbye",file:E.a}],U=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("audio",{className:"clip",id:this.props.id,src:this.props.src})}}]),t}(i.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=_.map(function(e){return a.a.createElement("button",{className:"drum-pad",id:e.id,key:e.trigger+e.id,onClick:this.props.onClick},e.trigger,a.a.createElement(U,{id:e.trigger,src:e.file}))}.bind(this));return a.a.createElement("div",{id:"display"},a.a.createElement("div",{id:"button-cont"},e),a.a.createElement("div",{id:"text-board"},this.props.soundText))}}]),t}(i.Component),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={sound_requested:null,sound_text:"SOUND BOARD"},n.soundPress=n.soundPress.bind(Object(c.a)(Object(c.a)(n))),n.processEvent=n.processEvent.bind(Object(c.a)(Object(c.a)(n))),n.handleClick=n.handleClick.bind(Object(c.a)(Object(c.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){if("drum-pad"===e.target.className){var t=_.filter(function(t){return t.id===e.target.id})[0];this.processEvent(t)}}},{key:"soundPress",value:function(e){if("drum-pad"===e.target.className){var t=_.filter(function(t){return t.trigger===e.key.toUpperCase()});t.length&&this.processEvent(t[0])}}},{key:"processEvent",value:function(e){this.setState({sound_requested:e,sound_text:e.id.toUpperCase()}),document.getElementById(e.trigger).play()}},{key:"componentDidMount",value:function(){document.getElementById("display").addEventListener("keydown",this.soundPress)}},{key:"componentWillUnMmount",value:function(){document.getElementById("display").removeEventListener("keydown",this.soundPress)}},{key:"render",value:function(){return a.a.createElement("div",{id:"drum-machine"},a.a.createElement("div",{id:"logo-container"},a.a.createElement("img",{src:W.a,alt:"AOL-logo"})),a.a.createElement(A,{onClick:this.handleClick,soundText:this.state.sound_text}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,1,2]]]);
//# sourceMappingURL=main.24592c2b.chunk.js.map