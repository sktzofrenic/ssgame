(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d76")},"034f":function(e,t,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"03fd":function(e,t,s){},4415:function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"50d1":function(e,t,s){"use strict";var n=s("cd7d"),a=s.n(n);a.a},"56d7":function(e){e.exports=[{id:"Gen",verseCount:1533,chapters:[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26]},{id:"Exod",verseCount:1213,chapters:[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38]},{id:"Lev",verseCount:859,chapters:[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34]},{id:"Num",verseCount:1288,chapters:[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13]},{id:"Deut",verseCount:959,chapters:[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12]},{id:"Josh",verseCount:658,chapters:[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33]},{id:"Judg",verseCount:618,chapters:[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25]},{id:"Ruth",verseCount:85,chapters:[22,23,18,22]},{id:"1Sam",verseCount:810,chapters:[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13]},{id:"2Sam",verseCount:695,chapters:[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25]},{id:"1Kgs",verseCount:816,chapters:[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53]},{id:"2Kgs",verseCount:719,chapters:[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30]},{id:"1Chr",verseCount:942,chapters:[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30]},{id:"2Chr",verseCount:822,chapters:[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23]},{id:"Ezra",verseCount:280,chapters:[11,70,13,24,17,22,28,36,15,44]},{id:"Neh",verseCount:406,chapters:[11,20,32,23,19,19,73,18,38,39,36,47,31]},{id:"Esth",verseCount:167,chapters:[22,23,15,17,14,14,10,17,32,3]},{id:"Job",verseCount:1070,chapters:[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17]},{id:"Ps",verseCount:2461,chapters:[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6]},{id:"Prov",verseCount:915,chapters:[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31]},{id:"Eccl",verseCount:222,chapters:[18,26,22,16,20,12,29,17,18,20,10,14]},{id:"Song",verseCount:117,chapters:[17,17,11,16,16,13,13,14]},{id:"Isa",verseCount:1292,chapters:[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24]},{id:"Jer",verseCount:1364,chapters:[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34]},{id:"Lam",verseCount:154,chapters:[22,22,66,22,22]},{id:"Ezek",verseCount:1273,chapters:[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35]},{id:"Dan",verseCount:357,chapters:[21,49,30,37,31,28,28,27,27,21,45,13]},{id:"Hos",verseCount:197,chapters:[11,23,5,19,15,11,16,14,17,15,12,14,16,9]},{id:"Joel",verseCount:73,chapters:[20,32,21]},{id:"Amos",verseCount:146,chapters:[15,16,15,13,27,14,17,14,15]},{id:"Obad",verseCount:21,chapters:[21]},{id:"Jonah",verseCount:48,chapters:[17,10,10,11]},{id:"Mic",verseCount:105,chapters:[16,13,12,13,15,16,20]},{id:"Nah",verseCount:47,chapters:[15,13,19]},{id:"Hab",verseCount:56,chapters:[17,20,19]},{id:"Zeph",verseCount:53,chapters:[18,15,20]},{id:"Hag",verseCount:38,chapters:[15,23]},{id:"Zech",verseCount:211,chapters:[21,13,10,14,11,15,14,23,17,12,17,14,9,21]},{id:"Mal",verseCount:55,chapters:[14,17,18,6]},{id:"Matt",verseCount:1071,chapters:[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20]},{id:"Mark",verseCount:678,chapters:[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20]},{id:"Luke",verseCount:1151,chapters:[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53]},{id:"John",verseCount:879,chapters:[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25]},{id:"Acts",verseCount:1007,chapters:[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31]},{id:"Rom",verseCount:433,chapters:[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27]},{id:"1Cor",verseCount:437,chapters:[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24]},{id:"2Cor",verseCount:257,chapters:[24,17,18,18,21,18,16,24,15,18,33,21,14]},{id:"Gal",verseCount:149,chapters:[24,21,29,31,26,18]},{id:"Eph",verseCount:155,chapters:[23,22,21,32,33,24]},{id:"Phil",verseCount:104,chapters:[30,30,21,23]},{id:"Col",verseCount:95,chapters:[29,23,25,18]},{id:"1Thess",verseCount:89,chapters:[10,20,13,18,28]},{id:"2Thess",verseCount:47,chapters:[12,17,18]},{id:"1Tim",verseCount:113,chapters:[20,15,16,16,25,21]},{id:"2Tim",verseCount:83,chapters:[18,26,17,22]},{id:"Titus",verseCount:46,chapters:[16,15,15]},{id:"Phlm",verseCount:25,chapters:[25]},{id:"Heb",verseCount:303,chapters:[14,18,19,16,14,20,28,13,28,39,40,29,25]},{id:"Jas",verseCount:108,chapters:[27,26,18,17,20]},{id:"1Pet",verseCount:105,chapters:[25,25,22,19,14]},{id:"2Pet",verseCount:61,chapters:[21,22,18]},{id:"1John",verseCount:105,chapters:[10,29,24,21,21]},{id:"2John",verseCount:13,chapters:[13]},{id:"3John",verseCount:15,chapters:[15]},{id:"Jude",verseCount:25,chapters:[25]},{id:"Rev",verseCount:404,chapters:[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]},{comment:"3John has 14 verses in KJV but 15 verses in ESV"}]},"56d76":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("p",[e._v(e._s(e.msg))])])},r=[],i={data:function(){return{msg:"dandandandand"}}},o=i,c=(s("034f"),s("2877")),u=Object(c["a"])(o,a,r,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ui container"},[s("div",{staticClass:"ui one column centered grid"},[s("div",{staticClass:"column"},[s("div",{staticClass:"ui big icon input game-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("i",{staticClass:"user icon"})]),s("br"),s("br"),s("button",{staticClass:"massive ui button game-button",on:{click:function(t){e.sendAnswer()}}},[e._v("\n              Buzz\n            ")])])])])},f=[],p=(s("7f7f"),s("782e")),h=s.n(p),m=new h.a("c94fbf647eaf623c10ba",{cluster:"us2",forceTLS:!0}),v=m.subscribe("ssgame-1"),b=s("c1df"),j=s.n(b),g=s("1157"),C=s.n(g),y={data:function(){return{name:"",socket:void 0,delay:0}},methods:{sendAnswer:function(){var e=this,t=j()().valueOf();setTimeout(function(){C.a.get("/api?answer=true&name=".concat(e.name,"&timestamp=").concat(t),function(e){console.log(e)})},e.delay)}},mounted:function(){v.bind("connect",function(){console.log("client connected"),v.emit("my-event",{data:"I'm connected!"})})}},k=y,w=(s("50d1"),Object(c["a"])(k,d,f,!1,null,"2261ec7e",null));w.options.__file="Client.vue";var _=w.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.zonkOn,expression:"!zonkOn"}],staticClass:"hotseat"},[e.name?s("h1",{staticStyle:{"text-align":"center","font-size":"110px","margin-top":"-30px",color:"#fff"}},[e._v("Hotseat: "),s("span",{staticStyle:{color:"rgb(237, 241, 95)"}},[e._v(e._s(e.name))])]):s("h1",{staticStyle:{"text-align":"center","font-size":"110px",color:"rgb(237, 241, 95)","margin-top":"-30px"}},[e._v("waiting...")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.zonkOn,expression:"!zonkOn"}],staticClass:"hotseat2"},[s("div",{staticClass:"ui statistics"},e._l(e.players,function(t,n){return s("div",{staticClass:"red statistic",on:{click:function(t){e.selectTeam(n)}}},[s("div",{staticClass:"value",staticStyle:{color:"#f9ff03 !important"},style:e.pointStyle},[e._v("\n                    "+e._s(e.formatNumber(t.points))+"\n                ")]),s("div",{staticClass:"label",staticStyle:{color:"#fff !important","margin-top":"10px"},style:e.nameStyle},[e._v("\n                    "+e._s(e.truncate(t.name))+"\n                ")])])}),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.zonkOn,expression:"zonkOn"}],staticClass:"zonk-game"},[s("Zonk",{attrs:{teamName:e.name},on:{playDone:e.stopPlay}})],1)])},T=[],x=(s("7514"),s("6b54"),s("a481"),s("2ef0")),P=s.n(x),O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"toolbar"},[e.activeTeamPoints?s("div",{staticClass:"ui olive huge label"},[s("span",[e._v(" "+e._s(e.teamName)+" Accumulated: "+e._s(e.activeTeamPoints))]),e._v("\n               Next card worth  = X "+e._s(e.pickNumber)+"\n        ")]):e._e()]),s("div",{staticClass:"toolbar-right"}),s("div",{staticClass:"ui grid"},[s("div",{staticClass:"six column row"},e._l(e.cards,function(t,n){return s("div",{staticClass:"column",style:{"margin-top":e.randomMargin()}},[s("div",{staticClass:"flip-container"},[s("div",{staticClass:"card",class:{flipped:t.flipped},on:{click:function(t){e.flip(n)}}},[s("div",{staticClass:"front"},[s("h1",{staticClass:"card-number"},[e._v(e._s(n+1))])]),s("div",{staticClass:"back"},[t.value>0?s("h1",{staticClass:"value-number"},[t.flipped?s("span",[e._v("\n                                    "+e._s(t.value)+"\n                                ")]):s("span",[e._v("\n                                    "+e._s(t.value*e.pickNumber)+"\n                                ")])]):s("h1",[s("img",{attrs:{src:"/static/img/zonk.png",alt:""}})])])])])])}),0)])])},N=[],R=(s("c5f6"),s("8a60")),M=s.n(R),A={data:function(){return{cards:[],teamOneName:"Dan Team",teamOnePoints:0,teamTwoName:"Ana Team",teamTwoPoints:0,gameOn:!1,currentTeam:"",risky:!0,pickNumber:1,activeTeamPoints:0,cardPossibilities:[0,100,100,200,300,400,500,500]}},props:["teamName"],methods:{generateCards:function(e){var t=this;this.changeTeam(this.currentTeam),this.cards=[];for(var s=0;s<P.a.range(24).length;s++){var n=4,a=[0,100,100,200,300,400,500,500];e&&(n=1,this.risky=!1,a=[0,100,100,200,300,400,500,500],console.log("not risky")),this.cards.push({id:s,flipped:!1,value:a[Math.floor(Math.random()*a.length)]*n})}P.a.find(t.cards,function(e){return 0===e.value})||t.generateCards()},flip:function(e){if(this.cards[e].flipped=!this.cards[e].flipped,0===this.cards[e].value){var t=new Audio("/static/audio/evillaugh.mp3");t.play(),this.pickNumber=0,this.activeTeamPoints=0}else{this.activeTeamPoints+=this.cards[e].value*this.pickNumber;t=new Audio("/static/audio/positive.wav");t.play(),this.pickNumber+=1}},reveal:function(){var e=this;e.generateCards("notRisky"),e.cards.map(function(e){P.a.delay(function(){e.flipped=!e.flipped},Math.floor(100*Math.random())+10)}),e.cards.map(function(e){P.a.delay(function(){e.flipped=!e.flipped},Math.floor(300*Math.random())+200)})},manualReveal:function(){var e=this;e.cards.map(function(e){e.flipped=!e.flipped})},randomMargin:function(){var e=Math.floor(20*Math.random())+1;return e*=1==Math.floor(2*Math.random())?1:-1,e},restart:function(){this.teamOneName="",this.teamOnePoints=0,this.teamTwoName="",this.teamTwoPoints=0,this.gameOn=!1,this.currentTeam="",this.risky=!0,this.pickNumber=1},endTurn:function(){this[this.currentTeam]+=this.activeTeamPoints,this.$emit("playDone",this.activeTeamPoints),this.activeTeamPoints=0,this.currentTeam="",this.risky=!0,this.pickNumber=1,this.generateCards()},changeTeam:function(e){this.currentTeam=e,this.risky=!0,this.pickNumber=1,this.activeTeamPoints=0}},mounted:function(){this.generateCards();var e=this;M.a.bind("e e",function(){e.endTurn()}),M.a.bind("left",function(){e.changeTeam("teamOnePoints")}),M.a.bind("right",function(){e.changeTeam("teamTwoPoints")}),M.a.bind("r r",function(){e.reveal()}),M.a.bind("m r",function(){e.manualReveal()}),M.a.bind(["0 1","0 2","0 3","0 4","0 5","0 6","0 7","0 8","0 9","1 0","1 1","1 2","1 3","1 4","1 5","1 6","1 7","1 8","1 9","2 0","2 1","2 2","2 3","2 4"],function(t,s){var n=Number(s[0]+s[2]);return e.flip(n-1),!1}),M.a.bind("s s",function(){e.generateCards()})}},S=A,J=(s("ee4d"),Object(c["a"])(S,O,N,!1,null,"6b5ec224",null));J.options.__file="Zonk.vue";var E=J.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"toolbar"},[s("div",{staticClass:"ui olive huge label"},[s("span",[e._v(" "+e._s(e.teamName)+" Accumulated: "+e._s(e.points))])])]),s("div",{staticClass:"toolbar-right"},[s("span",{staticClass:"timer"},[e._v(e._s(e.timer)+" s")])]),s("div",{staticClass:"ui grid main-area"},[s("div",{staticClass:"ui horizontal list history-items"},[e._l(e.history,function(e){return s("div",{staticClass:"item"},["yes"==e?s("span",[s("i",{staticClass:"fa fa-check",staticStyle:{"font-size":"30px",color:"green"}})]):s("span",{staticStyle:{"font-size":"30px",color:"red"}},[s("i",{staticClass:"fa fa-close"})])])}),s("div",{staticClass:"item",staticStyle:{"font-size":"30px"}},[e._v("x "+e._s(e.streak))])],2),s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("span",{staticClass:"verse-text"},[e._v(e._s(e.references.correct.text)+"  "),e.revealReference?s("span",[e._v(e._s(e.references.correct.reference))]):e._e()]),e.answers?s("span",{staticClass:"answer-one",on:{click:function(t){e.checkAnswer(e.answers[0])}}},[e._v(e._s(e.answers[0]))]):e._e(),e.answers?s("span",{staticClass:"answer-two",on:{click:function(t){e.checkAnswer(e.answers[1])}}},[e._v(e._s(e.answers[1]))]):e._e()])])])])},$=[],D=s("56d7"),G={data:function(){return{points:0,timer:25,timerRunning:!1,revealReference:!1,verse:"",references:{correct:"",incorrect:""},streak:1,answers:[],history:[]}},props:["teamName"],methods:{getRandVerse:function(e){var t=this,s=D[e||t.getRandomInt(0,65)],n=t.getRandomInt(0,s.chapters.length),a=t.getRandomInt(1,s.chapters[n]+1);return s=s.id,n+=1,{book:s,chapter:n,verse:a}},timerAction:function(e){var t=this;"start"===e&&(t.timerRunning=setInterval(function(){t.timer-=1,0===t.timer&&t.endTurn()},1e3)),"stop"===e&&(clearInterval(t.timerRunning),t.timerRunning=!1,t.timer=25),"pause"===e&&(clearInterval(t.timerRunning),t.timerRunning=!1)},checkAnswer:function(e){var t=this;if(t.timerRunning||t.timerAction("start"),t.references.correct.book_testament_genre.book===e){t.points=100*t.streak+t.points,t.streak+=1,t.history.push("yes"),t.revealReference=!0,t.loadQuestion();var s=new Audio("/static/audio/positive.wav");s.play()}else{t.points=t.points-100,t.streak=1,t.history.push("no"),t.revealReference=!0,t.loadQuestion();s=new Audio("/static/audio/wrong.wav");s.play()}},endTurn:function(){var e=this;this.$emit("playDone",e.points),clearInterval(e.timerRunning),e.timerRunning=!1,e.timer=25,e.points=0,e.streak=1,e.history=[],e.revealReference=!1},loadQuestion:function(){var e=this,t=e.getRandomInt(0,65);if(65==t)var s=t-1;else s=t+1;e.getRandVerse(t),e.getRandVerse(s);e.references={correct:"",incorrect:""},e.answers=[],C.a.get("/get-bible",function(t){console.log(t,"q1"),e.revealReference=!1,e.references.correct=t.correct,e.references.incorrect=t.incorrect,e.answers.push(e.references.correct.book_testament_genre.book),e.answers.push(e.references.incorrect.book_testament_genre.book),e.answers=e.shuffle(e.answers)})},getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},shuffle:function(e){var t,s,n=e.length;while(0!==n)s=Math.floor(Math.random()*n),n-=1,t=e[n],e[n]=e[s],e[s]=t;return e}},mounted:function(){var e=this;M.a.bind("e e",function(){e.endTurn()}),M.a.bind("z",function(){e.timerAction("pause")}),M.a.bind("x",function(){e.timerAction("start")}),e.loadQuestion()}},H=G,L=(s("f65c"),Object(c["a"])(H,I,$,!1,null,"36dc51e3",null));L.options.__file="Trivia.vue";var V=L.exports,Z={data:function(){return{name:"",socket:void 0,players:[],zonkOn:!1,possiblePlayers:[]}},components:{Zonk:E,Trivia:V},computed:{nameStyle:function(){var e=this.players.length>6?50:250/this.players.length;return{"font-size":e+"px !important"}},pointStyle:function(){var e=this.players.length>6?100:500/this.players.length;return{"font-size":e+"px !important"}}},methods:{formatNumber:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},playGame:function(){this.zonkOn=!this.zonkOn},selectTeam:function(e){this.name=this.players[e].name},stopPlay:function(e){console.log(e),this.zonkOn=!this.zonkOn,this.correctAnswer(e)},truncate:function(e){return e.length>8?e.substring(0,12)+"...":e},clearAnswer:function(){var e=this;P.a.find(e.players,{name:e.name})?e.players.map(function(e){}):e.players.push({name:e.name,points:0}),this.name=""},correctAnswer:function(e){var t=this;P.a.find(t.players,{name:t.name})?t.players.map(function(s){s.name===t.name&&(s.points+=e)}):t.players.push({name:t.name,points:e}),t.name=""},incorrectAnswer:function(){var e=this;P.a.find(e.players,{name:e.name})?e.players.map(function(t){t.name===e.name&&(t.points>0?t.points=parseInt(t.points/2):t.points-=1e3)}):e.players.push({name:e.name,points:-1e3}),e.name=""}},mounted:function(){var e=this;M.a.bind("p",function(){e.playGame()}),M.a.bind("c",function(){e.clearAnswer()}),M.a.bind("n",function(){e.incorrectAnswer()}),M.a.bind("up",function(){e.name&&e.players.map(function(t){t.name===e.name&&(t.points+=100)})}),M.a.bind("down",function(){e.name&&e.players.map(function(t){t.name===e.name&&(t.points-=100)})}),v.bind("answer",function(t){if(console.log(t),!e.name){e.possiblePlayers.push(t);setTimeout(function(){if(console.log(e.possiblePlayers,"before"),e.possiblePlayers=P.a.orderBy(e.possiblePlayers,[function(e){return e.timestamp}]),console.log(e.possiblePlayers,"sorted"),!e.name){var t=new Audio("/static/alert.wav");t.play(),e.name=e.possiblePlayers[0].name,e.possiblePlayers=[]}},2e3)}})}},Q=Z,q=(s("5f17"),Object(c["a"])(Q,z,T,!1,null,"310936c1",null));q.options.__file="GameMaster.vue";var K=q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(l)}}).$mount("#app"),new n["a"]({render:function(e){return e(K)}}).$mount("#gamemaster"),new n["a"]({render:function(e){return e(_)}}).$mount("#client")},"5bd7":function(e,t,s){},"5f17":function(e,t,s){"use strict";var n=s("03fd"),a=s.n(n);a.a},"64a9":function(e,t,s){},cd7d:function(e,t,s){},ee4d:function(e,t,s){"use strict";var n=s("4415"),a=s.n(n);a.a},f65c:function(e,t,s){"use strict";var n=s("5bd7"),a=s.n(n);a.a}});
//# sourceMappingURL=app.js.map