(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register_content"],{"0dfb":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-dc14047e]{background-color:#11161c;padding:0 %?30?%;color:hsla(0,0%,100%,.5019607843137255)!important}body.?%PAGE?%[data-v-dc14047e]{background-color:#11161c}",""]),t.exports=n},2229:function(t,n,e){"use strict";e.r(n);var i=e("78cd"),o=e("260f");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("59ca");var c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"dc14047e",null,!1,i["a"],void 0);n["default"]=r.exports},"260f":function(t,n,e){"use strict";e.r(n);var i=e("8983"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"59ca":function(t,n,e){"use strict";var i=e("75f5"),o=e.n(i);o.a},"75f5":function(t,n,e){var i=e("0dfb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("00039245",i,!0,{sourceMap:!1,shadowMode:!1})},"78cd":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"plr-10"},[n("v-uni-view",{staticClass:"beijing"},[n("v-uni-rich-text",{attrs:{nodes:this.info}})],1)],1)},o=[]},8983:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{info:""}},onLoad:function(){var t=this;this.$http("api/login/helpContent").then((function(n){t.info=n.register_content}))}}}}]);