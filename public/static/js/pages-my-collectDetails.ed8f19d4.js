(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-collectDetails"],{"1cc9":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("a515"),n={data:function(){return{multiply:a.multiply,preShow:!1,id:"",info:{},is_trade:0,changeShow:!1,afterPrice:"",transferPhone:"",transferShow:!1,salePrice:"",saleShow:!1,saleConfig:{},terracePrice:0,authorPrice:0,payPrice:0,realPrice:0}},onLoad:function(t){var i=this;this.id=t.id,this.init(),this.$http("api/login/helpContent").then((function(t){i.is_trade=t.is_trade})),this.$http("api/index/fee").then((function(t){i.saleConfig=t}))},onShow:function(){},methods:{toChange:function(){this.changeShow=!0,this.afterPrice=this.info.price,this.getShowInput(this.afterPrice)},toSale:function(){this.saleShow=!0,this.salePrice=this.info.price,this.getShowInput(this.salePrice)},getShowInput:function(t){var i=this.saleConfig;this.terracePrice=t*i.terrace_rate/100,this.authorPrice=t*i.author_rate/100,this.payPrice=t*i.pay_rate/100,this.realPrice=t-this.terracePrice-this.authorPrice-this.payPrice},init:function(){var t=this;this.$http("api/orders/usersGoodsDetail",{id:this.id}).then((function(i){t.info=i}))},copyAddress:function(t){this.$utils.copyAddress(this,t)},submitTransfer:function(){var t=this;""!=this.transferPhone?this.$http("api/orders/goodsTransfer",{id:this.id,phone:this.transferPhone},"POST").then((function(i){uni.showToast({title:"转赠成功!",icon:"none"}),t.transferShow=!1,t.transferPhone="",setTimeout((function(){uni.navigateTo({url:"./myCollect?current=5&status=5"})}),500)})):uni.showToast({title:"请输入受赠人手机号!",icon:"none"})},submitSale:function(){var t=this;""!=this.salePrice?this.$http("api/orders/goodsSale",{id:this.id,price:this.salePrice},"POST").then((function(i){uni.showToast({title:"出售成功!",icon:"none"}),t.saleShow=!1,setTimeout((function(){uni.navigateTo({url:"./myCollect?current=2&status=2"})}),500)})):uni.showToast({title:"请输入价格!",icon:"none"})},upCollect:function(){var t=this,i=1==t.info.is_show?"下架?":"上架?";uni.showModal({title:"提示",content:"将此藏品"+i,success:function(i){i.confirm?t.$http("api/orders/goodsUpdateShow",{id:t.id,is_show:1==t.info.is_show?0:1},"POST").then((function(i){uni.showToast({title:"操作成功!",icon:"none"}),t.init()})):i.cancel&&uni.showToast({title:"取消操作!",icon:"none"})}})},submitChange:function(){var t=this;""!=this.afterPrice?this.$http("api/orders/goodsUpdatePrice",{id:this.id,price:this.afterPrice},"POST").then((function(i){uni.showToast({title:"改价成功!",icon:"none"}),t.changeShow=!1,t.init()})):uni.showToast({title:"请输入价格!",icon:"none"})}}};i.default=n},"33a9":function(t,i,e){"use strict";var a=e("431d"),n=e.n(a);n.a},"431d":function(t,i,e){var a=e("aca8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("cca7699a",a,!0,{sourceMap:!1,shadowMode:!1})},a426:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAbFJREFUWEftmL9LHUEUhb8TAylCuljYCXYpBCGSIlZJELQzjZ1V/gBDBEEbCyNCEKuQ/yEoiIWNmC4hhYFYWAvaWaQJCOKPI1dm9b2HeVs8J7xiplp2ljvfnLkze8+INs32A2ATGAPiOUc7B/aBBUkbqgF6ChwDbb+7J0oDb2sHsv0eGM+o0GPgRZrUXi3QPc2+bRjbPxPUebcA7QCvgvoGyPYTYAB4mEmVyJEjSZGTTc32LZDtgFoEPgCPMsFUYS+BNeCdpL/Vy1agGeBTZpDW8F8lTf4L6ADoB06BL8BJJrgeYAroA0Kpvmr5WhW6SFv6m6TXmWCuw9peBmbTGM8l/Urvm3Ioki3atqTRzEAfgbk0xrCk3QLUqLjtolDdL6IoVBTq6Jgqu6xOvqJQUahOgbr+kkMdKLQNvIlKUra7oUALM7oCbHUFUKoaw7b/6RqgarkL0F1FfuNmCIXOkn3+Lmmkbqd00m97FZhOMYYk/W6NF0B7wGDYJuBHZqP4Mtn1MKW9jXa6MYcmgPX/dClVjbskaf4uta9vP2wH1ALwLOPtR9jnQ+BznDmSqvOviesKLvqcmJ/GHO4AAAAASUVORK5CYII="},a515:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.loginRedirect=i.goLive=i.formatTime=i.formatNumber=i.actStatus=void 0,i.multiply=function(t,i){var e=String(t).split(".")[1],a=String(i).split(".")[1],n=("undefined"==typeof e?0:e.length)+("undefined"==typeof a?0:a.length);return(t*i).toFixed(n)},i.unescapeHTML=i.queryString=i.queryObject=void 0,e("d81d"),e("d401"),e("d3b7"),e("25f0"),e("14d9"),e("99af"),e("caad"),e("2532"),e("ac1f"),e("5319"),e("e25e"),e("b64b");var a=e("4961"),n=e("626c");i.formatTime=function(t){var i=t.getFullYear(),e=t.getMonth()+1,a=t.getDate(),n=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return[i,e,a].map(o).join("/")+" "+[n,s,r].map(o).join(":")};var o=function(t){return t=t.toString(),t[1]?t:"0"+t};i.formatNumber=o;var s=function(t){var i=[];for(var e in t)i.push("".concat(e,"=").concat(t[e]));return i.join("&")};i.queryString=s;i.queryObject=function(t){var i=decodeURIComponent(decodeURIComponent(t)),e="";e=i.includes("?")?i.split("?")[1].split("&"):i.split("?")[0].split("&");var a={};return e.map((function(t){if(t.includes("=")){var i=t.split("="),e=i[0],n=i[1];a[e]=n}})),a};i.loginRedirect=function(){var t=getCurrentPages(),i=t[t.length-1],e=encodeURIComponent("/".concat(i.route,"?").concat(s(i.options)));wx.redirectTo({url:"/pages/login/index?uri=".concat(e)})};var r={"&":/&amp;/g,"<":/&lt;/g,">":/&gt;/g,'"':/&quot;/g,"”":/&rdquo;/g,"“":/&ldquo;/g,"'":/&apos;/g,"/":/&#x2f;/g," ":/&(.{2,7});/g,"<div":/<section/g,"</div>":/<\/section>/g,'<img$1 class="raw-image" />':/<img+(.*?)\/>/g};i.unescapeHTML=function(t){var i=t.replace(/&#(x)?([\w\d]{0,5});/gi,(function(t,i,e){return String.fromCharCode(parseInt(e,i?16:10))}));return Object.keys(r).map((function(t){return i=i.replace(r[t],t),i})),i};i.goLive=function(t,i){if(101==i)a.http.post("/live/live/roomAction",{room_id:t,type:1}),wx.navigateTo({url:"".concat(n.store.config.live_plugin,"?room_id=").concat(t)});else{var e="";switch(1*i){case 102:e="未开始";break;case 103:e="已结束";break;case 104:e="已被禁播";break;case 105:e="暂停中";break;case 106:e="异常";break;case 107:e="已过期";break}wx.showToast({title:"直播"+e,icon:"none"})}};i.actStatus=function(t,i){var e=(new Date).getTime()/1e3;return t*=1,i*=1,e<t?t-e>86400?0:1:e>=i?3:2}},aca8:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"uni-page-body[data-v-bf3f3126]{background-color:#f4f0e4;padding:%?0?% %?30?% %?100?%;box-sizing:border-box}body.?%PAGE?%[data-v-bf3f3126]{background-color:#f4f0e4}.title___3GyiO[data-v-bf3f3126]{font-size:%?80?%;color:#fff}.des___1CvEF[data-v-bf3f3126]{font-size:%?28?%;line-height:%?44?%;color:hsla(0,0%,100%,.5);margin-bottom:%?44?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.topWrap[data-v-bf3f3126]{width:100%;height:%?670?%;border-radius:%?16?%;overflow:hidden}.seriesWrapper___j7DxJ[data-v-bf3f3126]{margin:%?10?% 0 %?28?%;display:flex;align-items:center;flex-wrap:wrap;background-color:#a48a79}.seriesWrapper___j7DxJ .item___2NvYi[data-v-bf3f3126]{width:33.33%;display:flex;flex-direction:column;align-items:center;font-weight:400;font-size:%?28?%;line-height:%?44?%;color:#000;margin-top:%?30?%}.seriesWrapper___j7DxJ .item___2NvYi .value___WMvis[data-v-bf3f3126]{font-weight:500;color:#fff;margin-bottom:%?4?%}.AuthorInfo[data-v-bf3f3126]{background-color:#a48a79;border:%?2?% solid hsla(0,0%,100%,.1);border-radius:%?16?%;color:#000}.stepBox___372Zx[data-v-bf3f3126]{width:100%;min-height:%?228?%;border-radius:%?16?%;padding:%?4?%;box-sizing:border-box;margin-top:%?32?%}.stepBox___372Zx .stepCont___3tGyZ[data-v-bf3f3126]{background-color:#a48a79;background-repeat:no-repeat;background-position:50%;background-size:100%;padding:%?32?%;box-sizing:border-box;border-radius:%?16?%}.stepBox___372Zx .stepCont___3tGyZ .leftTxt[data-v-bf3f3126]{color:#000}.infoContainer___4GMGW[data-v-bf3f3126]{border:%?2?% solid hsla(0,0%,100%,.1);border-radius:%?16?%;margin-bottom:%?116?%;overflow:hidden;margin-top:%?40?%}.infoContainer___4GMGW .infoTitle___2MhFo[data-v-bf3f3126]{padding:%?16?% %?48?%;box-sizing:border-box;background-color:#a48a79}.infoContainer___4GMGW .infoTitle___2MhFo uni-text[data-v-bf3f3126]{color:#000;-webkit-background-clip:text;font-size:%?40?%;line-height:%?60?%;font-weight:500}.infoContainer___4GMGW .infoCont___3NTE6[data-v-bf3f3126]{font-weight:500;font-size:%?28?%;line-height:%?40?%;padding:%?32?% %?48?% %?48?%;box-sizing:border-box;color:#000;background:#e3d7c6;border-radius:0 0 %?16?% %?16?%}.bottom[data-v-bf3f3126]{position:fixed;z-index:10;padding:0 %?40?%;box-sizing:border-box;width:100%;bottom:0;left:0;background:rgba(25,26,45,.88);border:%?2?% solid rgba(25,26,45,.88)}.bottom .detailBtn___3JQBM[data-v-bf3f3126]{min-width:45%;width:45%;margin:%?40?% 0 %?48?%;height:%?100?%}.bottom .ghostBtn___1fAeP[data-v-bf3f3126]{padding:%?4?%;background:linear-gradient(90.2deg,#a072ff .17%,#00e6a1 101.35%)}.bottom .upButton___74pJX[data-v-bf3f3126]{display:inline-flex;align-items:center;box-sizing:border-box;color:#fff;font-weight:500;font-size:%?40?%;border-radius:%?16?%;cursor:pointer;text-align:center}.bottom .content[data-v-bf3f3126]{padding:%?20?% %?76?%;background:#11161c;border-radius:%?16?%;width:100%;height:100%;display:flex;align-items:center;justify-content:center;white-space:nowrap;box-sizing:border-box}.bottom .button-hover[data-v-bf3f3126]{background:none;color:#000}.bottom uni-button[data-v-bf3f3126]:after{border:none}.main1[data-v-bf3f3126]{border-radius:%?10?%;height:%?90?%;border:%?2?% solid rgba(83,83,83,.5019607843137255);margin:0 auto;margin-top:%?30?%}.userImg[data-v-bf3f3126]{width:%?80?%;height:%?80?%;border-radius:50%}.copyImg[data-v-bf3f3126]{width:%?24?%;height:%?24?%}.btmWrap[data-v-bf3f3126]{position:fixed;z-index:10;width:100%;bottom:0;background:#fff}.btmWrap uni-button[data-v-bf3f3126]{width:30%;height:%?80?%;border-radius:%?25?%;font-size:%?24?%;line-height:%?80?%}.btmWrap .transBtn[data-v-bf3f3126]{color:#fff;background:#44acff}.btmWrap .saleBtn[data-v-bf3f3126]{color:#44acff;background:transparent;border:%?1?% solid #44acff}.collectImg[data-v-bf3f3126]{width:75%;display:block;margin:0 auto;height:auto;position:relative}",""]),t.exports=i},b929:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={uImage:e("c889").default,uLoading:e("eb47").default,uPopup:e("b144").default,uField:e("761d").default,uButton:e("e418").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"t-text-ellipsis-nowrap mt-30 title___3GyiO"},[t._v(t._s(t.info.name))]),a("v-uni-view",{staticClass:"des___1CvEF"},[t._v(t._s(t.info.desc||t.info.name))]),a("v-uni-view",{staticClass:"topWrap"},[a("u-image",{staticClass:"collectImg",attrs:{src:t.info.images,width:"100%",height:"670rpx",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.preShow=!0}}},[a("u-loading",{attrs:{slot:"loading"},slot:"loading"})],1)],1),a("v-uni-view",{staticClass:"seriesWrapper___j7DxJ"},[a("v-uni-view",{staticClass:"item___2NvYi"},[a("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.stock))]),a("v-uni-view",[t._v(t._s(t.$t("my.collectDetails.boxes[0]")))])],1),a("v-uni-view",{staticClass:"item___2NvYi"},[a("v-uni-view",{staticClass:"value___WMvis",staticStyle:{color:"rgb(207, 162, 81)"}},[t._v(t._s(t.info.price)+" USDT")]),a("v-uni-view",{staticStyle:{color:"rgb(207, 162, 81)"}},[t._v(t._s(t.$t("my.collectDetails.boxes[1]")))])],1),a("v-uni-view",{staticClass:"item___2NvYi"},[a("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.surplus))]),a("v-uni-view",[t._v(t._s(t.$t("my.collectDetails.boxes[2]")))])],1),a("v-uni-view",{staticClass:"item___2NvYi"},[a("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.multiply(t.info.sales,t.info.price))+" USDT")]),a("v-uni-view",[t._v(t._s(t.$t("my.collectDetails.boxes[3]")))])],1),a("v-uni-view",{staticClass:"item___2NvYi"},[a("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.sales))]),a("v-uni-view",[t._v(t._s(t.$t("my.collectDetails.boxes[4]")))])],1),a("v-uni-view",{staticClass:"item___2NvYi"},[a("v-uni-view",{staticClass:"value___WMvis"},[t._v(t._s(t.info.goods_category_name))]),a("v-uni-view",[t._v(t._s(t.$t("my.collectDetails.boxes[5]")))])],1)],1),a("v-uni-view",{staticClass:"flex flex-start plr-30 ptb-30 size-24 gray-2 mb-30 AuthorInfo"},[a("v-uni-image",{staticClass:"userImg mr-20",attrs:{src:t.info.author_image}}),a("v-uni-view",[a("v-uni-view",[t._v(t._s(t.$t("my.collectDetails.author")))]),a("v-uni-view",{staticClass:"mt-10 ",staticStyle:{color:"#fff"}},[t._v(t._s(t.info.author_name))])],1)],1),a("v-uni-view",{staticClass:"stepBox___372Zx"},[a("v-uni-view",{staticClass:"stepCont___3tGyZ"},[a("v-uni-view",{staticClass:"flex mb-30"},[a("v-uni-view",{staticClass:"leftTxt u-flex-1"},[t._v(t._s(t.$t("my.collectDetails.chinalian")))]),a("v-uni-view",{staticClass:"text-ellipsis u-flex u-flex-1",staticStyle:{"text-align":"right"}},[a("v-uni-text",{staticClass:"text-ellipsis"},[t._v(t._s(t.info.contract+"/nfts/7"))]),a("v-uni-navigator",{staticStyle:{"margin-left":"20rpx"},attrs:{url:"/pages/my/chainquery?nftid="+t.info.nft_id+"&c="+t.info.contract}},[t._v(t._s(t.$t("chaxun")))])],1)],1),a("v-uni-view",{staticClass:"flex mb-30"},[a("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("my.collectDetails.intro[0]")))]),a("v-uni-view",{staticClass:"text-ellipsis",staticStyle:{"text-align":"right"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.copyAddress(t.info.nft_id)}}},[t._v(t._s(t.info.nft_id))])],1),a("v-uni-view",{staticClass:"flex mb-30"},[a("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("my.collectDetails.intro[1]")))]),a("v-uni-view",{staticClass:"flex",staticStyle:{width:"70%"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.copyAddress(t.info.contract)}}},[a("v-uni-view",{staticClass:"text-ellipsis",staticStyle:{width:"90%"}},[t._v(t._s(t.info.contract))]),a("v-uni-image",{staticClass:"copyImg ml-20",attrs:{src:e("a426"),mode:""}})],1)],1),a("v-uni-view",{staticClass:"flex mb-30"},[a("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("my.collectDetails.intro[3]")))]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{},[t._v(t._s(t.info.attribute))])],1)],1),a("v-uni-view",{staticClass:"flex mb-30"},[a("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("my.collectDetails.intro[4]")))]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{},[t._v(t._s(t.info.network_name))])],1)],1),a("v-uni-view",{staticClass:"flex mb-30"},[a("v-uni-view",{staticClass:"leftTxt"},[t._v(t._s(t.$t("my.collectDetails.intro[5]")))]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{},[t._v(t._s(t.info.issuer))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"infoContainer___4GMGW"},[a("v-uni-view",{staticClass:"infoTitle___2MhFo"},[a("v-uni-text",[t._v(t._s(t.$t("my.collectDetails.details")))])],1),a("v-uni-view",{staticClass:"infoCont___3NTE6",domProps:{innerHTML:t._s(t.info.content)}})],1),a("v-uni-view",{staticClass:"infoContainer___4GMGW"},[a("v-uni-view",{staticClass:"infoTitle___2MhFo"},[a("v-uni-text",[t._v(t._s(t.$t("my.collectDetails.purIns")))])],1),a("v-uni-view",{staticClass:"infoCont___3NTE6",domProps:{innerHTML:t._s(t.info.buy_content)}})],1),1==t.info.status||2==t.info.status?a("v-uni-view",{staticClass:"bottom t-between plr-30"},[2==t.info.status?a("v-uni-view",{staticClass:"upButton___74pJX ghostBtn___1fAeP detailBtn___3JQBM"},[a("v-uni-button",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upCollect()}}},[t._v(t._s(1==t.info.is_show?t.$t("my.collectDetails.btn[1]"):0==t.info.is_show?t.$t("my.collectDetails.btn[2]"):""))])],1):t._e()],1):t._e(),a("u-popup",{attrs:{mode:"center","border-radius":"20"},model:{value:t.preShow,callback:function(i){t.preShow=i},expression:"preShow"}},[a("v-uni-view",[a("img",{staticClass:"collectPreImg",attrs:{src:t.info.images},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.preShow=!1}}})])],1),a("u-popup",{attrs:{mode:"center","border-radius":"20"},model:{value:t.transferShow,callback:function(i){t.transferShow=i},expression:"transferShow"}},[a("v-uni-view",{staticClass:"plr-30 ptb-30",staticStyle:{"background-color":"#fff"}},[a("v-uni-view",{staticClass:"text-center bold size-32 bold",staticStyle:{color:"#000"}},[t._v("Subgift")]),a("v-uni-view",{staticClass:"main1 t-center-column"},[a("u-field",{attrs:{"border-bottom":!1,"label-width":"0",placeholder:"Recipient's mobile number","placeholder-style":"color:#999"},model:{value:t.transferPhone,callback:function(i){t.transferPhone=i},expression:"transferPhone"}})],1),a("u-button",{attrs:{size:"default",plain:!0,ripple:!0,"throttle-time":"300","custom-style":{color:"#fff","margin-top":"60rpx",width:"50%",background:"linear-gradient(90deg,#7e46f2,#00e6a1)","font-weight":"700"}},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitTransfer.apply(void 0,arguments)}}},[t._v("Confirm")])],1)],1),a("u-popup",{attrs:{width:"90%",mode:"center","border-radius":"20"},model:{value:t.saleShow,callback:function(i){t.saleShow=i},expression:"saleShow"}},[a("v-uni-view",{staticClass:"plr-30 ptb-30"},[a("v-uni-view",{staticClass:"text-center bold size-32 bold"},[t._v("出售详情")]),a("u-field",{attrs:{label:"出售价格(U)","label-width":"180",placeholder:"请输入价格",type:"number"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.getShowInput.apply(void 0,arguments)}},model:{value:t.salePrice,callback:function(i){t.salePrice=i},expression:"salePrice"}}),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("平台服务费"+t._s(t.saleConfig.terrace_rate)+"%：")]),a("v-uni-view",{},[t._v("-U"+t._s(t.terracePrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("作品版税"+t._s(t.saleConfig.author_rate)+"%：")]),a("v-uni-view",{},[t._v("-U"+t._s(t.authorPrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("支付通道使用费"+t._s(t.saleConfig.pay_rate)+"%：")]),a("v-uni-view",{},[t._v("-U"+t._s(t.payPrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("商品出售所得：")]),a("v-uni-view",{},[t._v("U"+t._s(t.realPrice.toFixed(2)))])],1),a("u-button",{staticClass:"mt-30",staticStyle:{width:"590rpx",color:"#fff"},attrs:{"hover-class":"none",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitSale.apply(void 0,arguments)}}},[t._v("确认")])],1)],1),a("u-popup",{attrs:{width:"90%",mode:"center","border-radius":"20"},model:{value:t.changeShow,callback:function(i){t.changeShow=i},expression:"changeShow"}},[a("v-uni-view",{staticClass:"plr-30 ptb-30"},[a("v-uni-view",{staticClass:"text-center bold size-32 bold"},[t._v("改价详情")]),a("u-field",{attrs:{label:"价格(U)","label-width":"180",placeholder:"请输入价格",type:"number"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.getShowInput.apply(void 0,arguments)}},model:{value:t.afterPrice,callback:function(i){t.afterPrice=i},expression:"afterPrice"}}),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("平台服务费"+t._s(t.saleConfig.terrace_rate)+"%：")]),a("v-uni-view",{},[t._v("-U"+t._s(t.terracePrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("作品版税"+t._s(t.saleConfig.author_rate)+"%：")]),a("v-uni-view",{},[t._v("-U"+t._s(t.authorPrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("支付通道使用费"+t._s(t.saleConfig.pay_rate)+"%：")]),a("v-uni-view",{},[t._v("-U"+t._s(t.payPrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"flex flex-between mt-20 size-22 gray-1 pl-30"},[a("v-uni-view",{},[t._v("商品出售所得：")]),a("v-uni-view",{},[t._v("U"+t._s(t.realPrice.toFixed(2)))])],1),a("u-button",{staticClass:"mt-30",staticStyle:{width:"590rpx"},attrs:{"hover-class":"none",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitChange.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},o=[]},b994:function(t,i,e){"use strict";e.r(i);var a=e("1cc9"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},f4bb:function(t,i,e){"use strict";e.r(i);var a=e("b929"),n=e("b994");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("33a9");var s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"bf3f3126",null,!1,a["a"],void 0);i["default"]=r.exports}}]);