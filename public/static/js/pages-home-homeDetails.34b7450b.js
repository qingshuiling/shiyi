(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-homeDetails"],{1663:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uImage:i("c889").default,uLoading:i("eb47").default,uIcon:i("ccd4").default,uCountDown:i("6d74").default,uPopup:i("b144").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"t-text-ellipsis-nowrap mt-30 title___3GyiO"},[t._v(t._s(t.info.name))]),i("v-uni-view",{staticClass:"des___1CvEF"},[t._v(t._s(t.info.desc||t.info.name))]),i("v-uni-view",{staticClass:"topWrap"},[i("u-image",{staticClass:"collectImg",attrs:{src:t.info.images,width:"100%",height:"670rpx",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preShow=!0}}},[i("u-loading",{attrs:{slot:"loading"},slot:"loading"})],1)],1),i("v-uni-view",{staticClass:"seriesWrapper___j7DxJ"},[i("v-uni-view",{staticClass:"item___2NvYi"},[i("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.stock))]),i("v-uni-view",[t._v(t._s(t.$t("home.homeDetails.limit")))])],1),i("v-uni-view",{staticClass:"item___2NvYi"},[i("v-uni-view",{staticClass:"value___WMvis",staticStyle:{color:"rgb(207, 162, 81)"}},[t._v(t._s(t.info.price)+" USDT")]),i("v-uni-view",{staticStyle:{color:"rgb(207, 162, 81)"}},[t._v(t._s(t.$t("home.homeDetails.price")))])],1),i("v-uni-view",{staticClass:"item___2NvYi"},[i("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.surplus))]),i("v-uni-view",[t._v(t._s(t.$t("home.homeDetails.surplus")))])],1),i("v-uni-view",{staticClass:"item___2NvYi"},[i("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.multiply(t.info.sales,t.info.price))+" USDT")]),i("v-uni-view",[t._v(t._s(t.$t("home.homeDetails.totalVol")))])],1),i("v-uni-view",{staticClass:"item___2NvYi"},[i("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.sales))]),i("v-uni-view",[t._v(t._s(t.$t("home.homeDetails.totalsold")))])],1),i("v-uni-view",{staticClass:"item___2NvYi"},[i("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.goods_category_name))]),i("v-uni-view",[t._v(t._s(t.$t("home.homeDetails.category")))])],1)],1),i("v-uni-view",{staticClass:"flex flex-start plr-30 ptb-30 size-24 gray-2 mb-30 AuthorInfo"},[i("v-uni-image",{staticClass:"userImg mr-20",attrs:{src:t.info.author_image,mode:"aspectFill"}}),i("v-uni-view",{},[i("v-uni-view",{},[t._v(t._s(t.$t("home.homeDetails.author")))]),i("v-uni-view",{staticClass:"mt-10 red"},[t._v(t._s(t.info.author_name))])],1)],1),i("v-uni-view",{staticClass:"stepBox___372Zx"},[i("v-uni-view",{staticClass:"stepCont___3tGyZ"},[i("v-uni-view",{staticClass:"flex mb-30"},[i("v-uni-view",{staticClass:"leftTxt u-flex-1"},[t._v(t._s(t.$t("my.collectDetails.chinalian")))]),i("v-uni-view",{staticClass:"text-ellipsis u-flex u-flex-1",staticStyle:{"text-align":"right"}},[i("v-uni-text",{staticClass:"text-ellipsis"},[t._v(t._s(t.info.contract+"/nfts/7"))]),i("v-uni-navigator",{staticStyle:{"margin-left":"20rpx"},attrs:{url:"/pages/my/chainquery?nftid="+t.info.nft_id+"&c="+t.info.contract}},[t._v(t._s(t.$t("chaxun")))])],1)],1),i("v-uni-view",{staticClass:"flex mb-30"},[i("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("home.homeDetails.intro[0]")))]),i("v-uni-view",{staticClass:"flex",staticStyle:{width:"70%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyAddress(t.info.contract)}}},[i("v-uni-view",{staticClass:"text-ellipsis",staticStyle:{width:"95%"}},[t._v(t._s(t.info.contract))]),i("u-icon",{attrs:{name:"file-text",color:"#E3D7C6",size:"28"}})],1)],1),i("v-uni-view",{staticClass:"flex mb-30"},[i("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("market.marketCollect.intro[1]")))]),i("v-uni-view",{staticClass:"flex",staticStyle:{width:"70%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyAddress(t.info.nft_id)}}},[i("v-uni-view",{staticClass:"text-ellipsis u-text-right",staticStyle:{width:"90%"}},[t._v(t._s(t.info.nft_id))]),i("u-icon",{attrs:{name:"file-text",color:"#E3D7C6",size:"28"}})],1)],1),i("v-uni-view",{staticClass:"flex mb-30"},[i("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("home.homeDetails.intro[2]")))]),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{},[t._v(t._s(t.info.attribute))])],1)],1),i("v-uni-view",{staticClass:"flex mb-30"},[i("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("home.homeDetails.intro[3]")))]),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{},[t._v(t._s(t.info.network_name))])],1)],1),i("v-uni-view",{staticClass:"flex mb-30"},[i("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("home.homeDetails.intro[4]")))]),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{},[t._v(t._s(t.info.issuer))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"infoContainer___4GMGW"},[i("v-uni-view",{staticClass:"infoTitle___2MhFo"},[i("v-uni-text",[t._v(t._s(t.$t("home.homeDetails.details")))])],1),i("v-uni-view",{staticClass:"infoCont___3NTE6",domProps:{innerHTML:t._s(t.info.content)}})],1),i("v-uni-view",{staticClass:"infoContainer___4GMGW",staticStyle:{"margin-bottom":"120rpx"}},[i("v-uni-view",{staticClass:"infoTitle___2MhFo"},[i("v-uni-text",[t._v(t._s(t.$t("home.homeDetails.purIns")))])],1),i("v-uni-view",{staticClass:"infoCont___3NTE6",domProps:{innerHTML:t._s(t.info.buy_content)}})],1),i("v-uni-view",{staticClass:"bottom t-center plr-30"},[i("v-uni-view",{staticClass:"upButton___74pJX ghostBtn___1fAeP detailBtn___3JQBM"},[1==t.info.status?i("v-uni-button",{staticClass:"content",attrs:{disabled:t.btnDisabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBuy.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.homeDetails.btn")))]):t._e(),2==t.info.status?i("v-uni-button",{staticClass:"content"},[t._v(t._s(t.info.status_text))]):t._e(),3==t.info.status?i("v-uni-button",{staticClass:"content"},[t._v(t._s(t.info.status_text+" "+t.info.status_time_text))]):t._e(),4==t.info.status?i("v-uni-button",{staticClass:"content"},[t._v(t._s(t.info.status_text+" ")),i("u-count-down",{staticStyle:{"margin-left":"5rpx"},attrs:{timestamp:t.info.diff_time,"bg-color":"background:transparent",color:"#FFF","font-size":"24","separator-color":"#FFF"}})],1):t._e()],1)],1),i("u-popup",{attrs:{mode:"center","border-radius":"20"},model:{value:t.preShow,callback:function(e){t.preShow=e},expression:"preShow"}},[i("v-uni-view",[i("img",{staticClass:"collectPreImg",attrs:{src:t.info.images},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preShow=!1}}})])],1)],1)},a=[]},"5fdc":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},n=[]},"5fe1":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */.u-countdown[data-v-ee56cd42]{display:inline-flex;align-items:center}.u-countdown-item[data-v-ee56cd42]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-ee56cd42]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-ee56cd42]{display:flex;flex-direction:row;justify-content:center;padding:0 %?5?%;line-height:1;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-ee56cd42]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"6b3f":function(t,e,i){"use strict";var o=i("95ab"),n=i.n(o);n.a},"6d74":function(t,e,i){"use strict";i.r(e);var o=i("5fdc"),n=i("7f35");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("7441");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"ee56cd42",null,!1,o["a"],void 0);e["default"]=r.exports},7441:function(t,e,i){"use strict";var o=i("a663"),n=i.n(o);n.a},"7f35":function(t,e,i){"use strict";i.r(e);var o=i("ca4e"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"89a7":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("a515"),n={data:function(){return{multiply:o.multiply,btnDisabled:!1,preShow:!1,id:"",info:{}}},onLoad:function(t){this.id=t.id,this.init()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var t=this;uni.showLoading({title:"loading...",mask:!0}),this.$http("api/goods/goodsDetail",{id:this.id}).then((function(e){uni.stopPullDownRefresh(),t.info=e,uni.hideLoading()}))},handlePre:function(){uni.navigateTo({url:"./homeShow?url="+this.info.model_url})},toBuy:function(){var t=this;this.btnDisabled=!0,this.$http("api/orders/goodsApply",{id:this.id}).then((function(e){t.btnDisabled=!1,uni.navigateTo({url:"/pages/pay/collectPay?order_id="+e.order_id+"&type=2"})}))},copyAddress:function(t){t+="",this.$utils.copyAddress(this,t)}}};e.default=n},"95ab":function(t,e,i){var o=i("ed9a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("e90a4f8a",o,!0,{sourceMap:!1,shadowMode:!1})},a515:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.loginRedirect=e.goLive=e.formatTime=e.formatNumber=e.actStatus=void 0,e.multiply=function(t,e){var i=String(t).split(".")[1],o=String(e).split(".")[1],n=("undefined"==typeof i?0:i.length)+("undefined"==typeof o?0:o.length);return(t*e).toFixed(n)},e.unescapeHTML=e.queryString=e.queryObject=void 0,i("d81d"),i("d401"),i("d3b7"),i("25f0"),i("14d9"),i("99af"),i("caad"),i("2532"),i("ac1f"),i("5319"),i("e25e"),i("b64b");var o=i("4961"),n=i("626c");e.formatTime=function(t){var e=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),n=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return[e,i,o].map(a).join("/")+" "+[n,s,r].map(a).join(":")};var a=function(t){return t=t.toString(),t[1]?t:"0"+t};e.formatNumber=a;var s=function(t){var e=[];for(var i in t)e.push("".concat(i,"=").concat(t[i]));return e.join("&")};e.queryString=s;e.queryObject=function(t){var e=decodeURIComponent(decodeURIComponent(t)),i="";i=e.includes("?")?e.split("?")[1].split("&"):e.split("?")[0].split("&");var o={};return i.map((function(t){if(t.includes("=")){var e=t.split("="),i=e[0],n=e[1];o[i]=n}})),o};e.loginRedirect=function(){var t=getCurrentPages(),e=t[t.length-1],i=encodeURIComponent("/".concat(e.route,"?").concat(s(e.options)));wx.redirectTo({url:"/pages/login/index?uri=".concat(i)})};var r={"&":/&amp;/g,"<":/&lt;/g,">":/&gt;/g,'"':/&quot;/g,"”":/&rdquo;/g,"“":/&ldquo;/g,"'":/&apos;/g,"/":/&#x2f;/g," ":/&(.{2,7});/g,"<div":/<section/g,"</div>":/<\/section>/g,'<img$1 class="raw-image" />':/<img+(.*?)\/>/g};e.unescapeHTML=function(t){var e=t.replace(/&#(x)?([\w\d]{0,5});/gi,(function(t,e,i){return String.fromCharCode(parseInt(i,e?16:10))}));return Object.keys(r).map((function(t){return e=e.replace(r[t],t),e})),e};e.goLive=function(t,e){if(101==e)o.http.post("/live/live/roomAction",{room_id:t,type:1}),wx.navigateTo({url:"".concat(n.store.config.live_plugin,"?room_id=").concat(t)});else{var i="";switch(1*e){case 102:i="未开始";break;case 103:i="已结束";break;case 104:i="已被禁播";break;case 105:i="暂停中";break;case 106:i="异常";break;case 107:i="已过期";break}wx.showToast({title:"直播"+i,icon:"none"})}};e.actStatus=function(t,e){var i=(new Date).getTime()/1e3;return t*=1,e*=1,i<t?t-i>86400?0:1:i>=e?3:2}},a663:function(t,e,i){var o=i("5fe1");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("7e48ab58",o,!0,{sourceMap:!1,shadowMode:!1})},a836:function(t,e,i){"use strict";i.r(e);var o=i("89a7"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},ca4e:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var o={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e,i=0,o=0,n=0;i=Math.floor(t/86400),e=Math.floor(t/3600)-24*i;var a=null;a=this.showDays?e:Math.floor(t/3600),o=Math.floor(t/60)-60*e-24*i*60,n=Math.floor(t)-24*i*60*60-60*e*60-60*o,a=a<10?"0"+a:a,o=o<10?"0"+o:o,n=n<10?"0"+n:n,i=i<10?"0"+i:i,this.d=i,this.h=a,this.i=o,this.s=n},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=o},e7f5:function(t,e,i){"use strict";i.r(e);var o=i("1663"),n=i("a836");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("6b3f");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"fd9115d2",null,!1,o["a"],void 0);e["default"]=r.exports},ed9a:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-fd9115d2]{background-color:#f4f0e4;padding:%?0?% %?30?% %?100?%;box-sizing:border-box}body.?%PAGE?%[data-v-fd9115d2]{background-color:#f4f0e4}.title___3GyiO[data-v-fd9115d2]{font-size:%?80?%;color:#000}.des___1CvEF[data-v-fd9115d2]{font-size:%?28?%;line-height:%?44?%;color:#000;margin-bottom:%?44?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.topWrap[data-v-fd9115d2]{width:100%;height:%?670?%;border-radius:%?16?%;overflow:hidden}.seriesWrapper___j7DxJ[data-v-fd9115d2]{margin:%?10?% 0 %?28?%;display:flex;align-items:center;background-color:#a48a79;flex-wrap:wrap}.seriesWrapper___j7DxJ .item___2NvYi[data-v-fd9115d2]{width:33.33%;display:flex;flex-direction:column;align-items:center;font-weight:400;font-size:%?28?%;line-height:%?44?%;color:#000;margin-top:%?30?%}.seriesWrapper___j7DxJ .item___2NvYi .value___WMvis[data-v-fd9115d2]{font-weight:500;color:#fff;margin-bottom:%?4?%}.AuthorInfo[data-v-fd9115d2]{background-color:#a48a79;color:#000;border:%?2?% solid hsla(0,0%,100%,.1);border-radius:%?16?%}.stepBox___372Zx[data-v-fd9115d2]{width:100%;min-height:%?228?%;border-radius:%?16?%;padding:%?4?%;box-sizing:border-box;margin-top:%?32?%}.stepBox___372Zx .stepCont___3tGyZ[data-v-fd9115d2]{background-color:#a48a79;background-repeat:no-repeat;background-position:50%;background-size:100%;padding:%?32?%;box-sizing:border-box;border-radius:%?16?%}.stepBox___372Zx .stepCont___3tGyZ .leftTxt[data-v-fd9115d2]{color:#000}.infoContainer___4GMGW[data-v-fd9115d2]{border-radius:%?16?%;margin-bottom:%?40?%;margin-top:%?40?%;background-color:#a48a79;overflow:hidden}.infoContainer___4GMGW .infoTitle___2MhFo[data-v-fd9115d2]{padding:%?16?% %?48?%;box-sizing:border-box;background-color:#a48a79}.infoContainer___4GMGW .infoTitle___2MhFo uni-text[data-v-fd9115d2]{color:#000;-webkit-background-clip:text;font-size:%?40?%;line-height:%?60?%;font-weight:500}.infoContainer___4GMGW .infoCont___3NTE6[data-v-fd9115d2]{font-weight:500;font-size:%?28?%;line-height:%?40?%;padding:%?32?% %?48?% %?48?%;box-sizing:border-box;color:#000;background:#e3d7c6;border-radius:0 0 %?16?% %?16?%}.userImg[data-v-fd9115d2]{width:%?120?%;height:%?120?%;border-radius:50%}.copyImg[data-v-fd9115d2]{width:%?24?%;height:%?24?%}.bottom[data-v-fd9115d2]{position:fixed;z-index:10;padding:0 %?40?%;box-sizing:border-box;width:100%;bottom:0;left:0;background:rgba(164,138,121,.5)}.bottom .detailBtn___3JQBM[data-v-fd9115d2]{min-width:%?340?%;width:100%;margin:%?40?% 0 %?48?%;height:%?100?%}.bottom .ghostBtn___1fAeP[data-v-fd9115d2]{padding:%?4?%}.bottom .upButton___74pJX[data-v-fd9115d2]{display:inline-flex;align-items:center;box-sizing:border-box;color:#000;font-weight:500;font-size:%?40?%;border-radius:%?16?%;cursor:pointer;text-align:center}.bottom .content[data-v-fd9115d2]{padding:%?20?% %?76?%;color:#fff;background-color:#a48a79;border-radius:%?16?%;width:100%;height:100%;display:flex;align-items:center;justify-content:center;white-space:nowrap;box-sizing:border-box}.bottom .button-hover[data-v-fd9115d2]{background:none;color:#000}.bottom uni-button[data-v-fd9115d2]:after{border:none}.collectImg[data-v-fd9115d2]{width:%?690?%;height:%?750?%;display:block;margin:0 auto;height:auto;position:relative}",""]),t.exports=e}}]);