(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-recharge_1"],{"021f":function(t,i,a){"use strict";a.r(i);var n=a("3af2"),e=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a},"18de":function(t,i,a){"use strict";a.r(i);var n=a("4c37"),e=a("021f");for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);a("9fab"),a("b9ae");var r=a("f0c5"),s=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"63103841",null,!1,n["a"],void 0);i["default"]=s.exports},"38bb":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */.infoContainer___4GMGW[data-v-63103841]{border:%?2?% solid hsla(0,0%,100%,.1);border-radius:%?16?%;margin:%?60?% 0 %?60?%}.infoContainer___4GMGW .infoTitle___2MhFo[data-v-63103841]{padding:%?16?% %?48?%;box-sizing:border-box;background:hsla(0,0%,100%,.04)}.infoContainer___4GMGW .infoTitle___2MhFo span[data-v-63103841]{background:linear-gradient(90.04deg,rgba(126,70,242,.65) .04%,rgba(0,230,161,.65) 99.97%),#fff;-webkit-background-clip:text;color:transparent;font-size:%?40?%;line-height:%?60?%;font-weight:500}.infoContainer___4GMGW .infoCont___3NTE6[data-v-63103841]{font-weight:500;font-size:%?28?%;line-height:%?40?%;padding:%?32?% %?48?% %?48?%;box-sizing:border-box;color:#fff;background:hsla(0,0%,100%,.04);border-radius:0 0 %?16?% %?16?%}.infoContainer___4GMGW .infoCont___3NTE6 .type___3BwiA[data-v-63103841]{padding:0 %?12?%;font-weight:400;font-size:%?30?%;line-height:%?44?%;border-radius:%?4?%;height:%?44?%;background:radial-gradient(72.76% 105.12% at 54.85% 4.64%,#fd5f52 0,#cf3729 100%)}.infoContainer___4GMGW .infoCont___3NTE6 .item[data-v-63103841]{padding:%?20?% 0}.infoContainer___4GMGW .infoCont[data-v-63103841]{font-weight:500;font-size:%?28?%;line-height:%?40?%;padding:%?30?% %?48?% %?48?%;box-sizing:border-box;background:#181a27;border-radius:0 0 %?16?% %?16?%}.infoContainer___4GMGW .infoCont .item .title[data-v-63103841]{color:hsla(0,0%,100%,.8)}.infoContainer___4GMGW .infoCont .item .value[data-v-63103841]{color:#fff}.infoContainer___4GMGW .infoCont .item[data-v-63103841]:nth-child(2){margin-top:%?20?%}.name[data-v-63103841]{font-size:%?40?%;text-align:center;color:#fff;font-weight:700;margin:%?40?% %?0?%}.name uni-view[data-v-63103841]{margin:%?20?% %?0?%}',""]),t.exports=i},"3af2":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("e9c4");var n={name:"recharge_1",props:["aisle_Id"],watch:{aisle_Id:function(t,i){this.aisleId=t,this.init()}},data:function(){return{account:"",aisleId:1,payId:"",aisleDetail:{},loading:!0}},created:function(){this.init()},methods:{init:function(){var t=this;uni.showLoading({title:"加载中",mask:!0}),this.$http("api/remittance/passageway",{id:this.aisleId}).then((function(i){t.aisleDetail=JSON.parse(JSON.stringify(i.info)),t.loading=!1,uni.hideLoading()}))},setCopy:function(){uni.setClipboardData({data:this.aisleDetail.url,success:function(t){uni.showToast({title:"复制成功",icon:"none"})}})},goPath:function(){this.$u.route({url:"pages/my/recharge_2",params:{aisleId:this.aisleId,payId:this.payId,account:this.account}})}}};i.default=n},"4c37":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return n}));var n={uImage:a("c889").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[t.loading?t._e():a("v-uni-view",[a("v-uni-view",{staticClass:"infoContainer___4GMGW"},[a("v-uni-view",{staticClass:"t-between infoTitle___2MhFo"},[a("span",[t._v(t._s(t.aisleDetail.name))])]),a("v-uni-view",{staticClass:"t-between infoCont___3NTE6"},[a("u-image",{staticClass:"mr-20 radius-20",attrs:{src:t.aisleDetail.image,height:"100rpx",width:"100rpx","border-radius":"15",mode:"aspectFill"}}),a("v-uni-view",{staticClass:"t-column t-between t-flex-wrap",staticStyle:{width:"82%"}},[a("v-uni-view",{staticStyle:{color:"hsla(0, 0%, 100%, 0.5)"}},[t._v(t._s(t.$t("my.recharge[0]")))]),a("v-uni-view",{staticClass:"t-between t-center-column"},[a("v-uni-view",{staticStyle:{"overflow-wrap":"anywhere"}},[t._v(t._s(t.aisleDetail.url))]),a("v-uni-view",{staticStyle:{color:"#0fe2bc","white-space":"nowrap","margin-left":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setCopy.apply(void 0,arguments)}}},[t._v(t._s(t.$t("my.recharge[5]")))])],1)],1)],1)],1)],1)],1)},o=[]},"80c1":function(t,i,a){var n=a("38bb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("818add2e",n,!0,{sourceMap:!1,shadowMode:!1})},"9fab":function(t,i,a){"use strict";var n=a("e611"),e=a.n(n);e.a},b9ae:function(t,i,a){"use strict";var n=a("80c1"),e=a.n(n);e.a},e4ab:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-63103841]{background:#181b20}body.?%PAGE?%[data-v-63103841]{background:#181b20}",""]),t.exports=i},e611:function(t,i,a){var n=a("e4ab");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("01de74ec",n,!0,{sourceMap:!1,shadowMode:!1})}}]);