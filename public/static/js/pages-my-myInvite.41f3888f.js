(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-myInvite"],{"0146":function(t,i,e){"use strict";var n=e("200c"),o=e.n(n);o.a},"0dc3":function(t,i,e){"use strict";e.r(i);var n=e("96ab"),o=e("e658");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("0146");var r=e("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"d34b3946",null,!1,n["a"],void 0);i["default"]=d.exports},1304:function(t,i,e){t.exports=e.p+"static/img/list.8521aaf5.png"},1684:function(t,i,e){t.exports=e.p+"static/img/share.d58fc3ad.png"},"200c":function(t,i,e){var n=e("df7c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("3d6c3f4f",n,!0,{sourceMap:!1,shadowMode:!1})},"96ab":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uIcon:e("ccd4").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{height:"100%"}},[e("v-uni-text",{staticStyle:{color:"#fff"}},[t._v(t._s(t.$t("invitation"))+":"+t._s(t.uuid))]),e("v-uni-view",{staticClass:"size-24 ",staticStyle:{color:"#fff"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.copy(t.register_url)}}},[e("v-uni-view",{staticClass:"text-ellipsis",staticStyle:{}},[t._v(t._s(t.$t("invitationurl"))+":"+t._s(t.register_url))]),e("u-icon",{attrs:{name:"file-text",color:"#A48A79",size:"28"}})],1),e("v-uni-view",{staticClass:"container"},[e("v-uni-canvas",{ref:"firstCanvas",attrs:{width:t.windowWidth,height:t.windowHeight,"canvas-id":"firstCanvas",id:"firstCanvas"}}),e("v-uni-view",{staticClass:"erweima mb-30"},[e("qrcode",{ref:"qrcode",attrs:{val:t.register_url,size:t.size,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,lv:t.lv,onval:t.onval,loadMake:t.loadMake},on:{result:function(i){arguments[0]=i=t.$handleEvent(i),t.qrR.apply(void 0,arguments)}}})],1)],1)],1)},a=[]},d01e:function(t,i,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("78a6")),a={data:function(){return{team:[],register_url:"",qr_code_img:"",val:"",size:150,background:"#ffffff",foreground:"#000000",pdground:"#000000",icon:"",iconsize:50,lv:3,onval:!0,loadMake:!0,src:"",uuid:"",windowHeight:0,windowWidth:0,info:{}}},components:{qrcode:o.default},onLoad:function(){var t=this;this.$http("api/user/share").then((function(i){t.info=i,t.register_url=i.register_url,t.qr_code_img=i.qr_code_img,t.uuid=i.uuid}))},mounted:function(){},methods:{copy:function(t){this.$utils.copyAddress(this,t)},back:function(){uni.navigateBack()},toShare:function(){this.$copyText(this.info.register_url).then((function(t){uni.showToast({title:"邀请链接复制成功，快去分享吧!",icon:"none"})}),(function(t){uni.showToast({title:"复制失败!",icon:"none"})}))},drawImage:function(){var i=this;uni.getSystemInfo({success:function(e){t("log",e.screenHeight," at pages/my/myInvite.vue:107"),t("log",e.screenWidth," at pages/my/myInvite.vue:108"),t("log",e.windowHeight," at pages/my/myInvite.vue:109"),t("log",e.windowWidth," at pages/my/myInvite.vue:110"),i.phoneHeight=e.windowHeight*(750/e.windowWidth),t("log",i.phoneHeight," at pages/my/myInvite.vue:113"),i.windowHeight=e.windowHeight-30,i.windowWidth=e.windowWidth;var n=uni.createCanvasContext("firstCanvas");n.drawImage(i.src,i.windowWidth-105,i.windowHeight-250,75,75),n.draw()}})},creatQrcode:function(){this.$refs.qrcode._makeCode()},qrR:function(t){this.src=t},save:function(){t("log",this.qr_code_img," at pages/my/myInvite.vue:130"),uni.downloadFile({url:this.qr_code_img,success:function(i){t("log",i," at pages/my/myInvite.vue:134"),200===i.statusCode&&uni.saveImageToPhotosAlbum({filePath:i.tempFilePath,success:function(){uni.showToast({title:"保存成功"})}})}})}}};i.default=a}).call(this,e("0de9")["log"])},df7c:function(t,i,e){var n=e("24fb"),o=e("1de5"),a=e("1684"),r=e("1304");i=n(!1);var d=o(a),c=o(r);i.push([t.i,'@charset "UTF-8";\n/* uni.scss */\n/* 颜色变量 */\n/* 边框border */uni-page-body[data-v-d34b3946]{width:100%;height:100%;overflow:hidden;background:#17151a}body.?%PAGE?%[data-v-d34b3946]{background:#17151a}#firstCanvas[data-v-d34b3946]{width:100%;height:calc(100% - 25px);margin:0 auto}.feltitle[data-v-d34b3946]{width:90%;display:flex;justify-content:space-between;margin:%?40?% auto %?30?%;color:#fff}.feltitle uni-image[data-v-d34b3946]{width:%?50?%;height:%?50?%;color:#000}.container[data-v-d34b3946]{width:100%;margin:0 auto;height:%?1200?%;position:relative;background-image:url('+d+');background-repeat:no-repeat;background-size:100% 100%;overflow:hidden}.container .info[data-v-d34b3946]{width:%?654?%;height:%?186?%;margin:%?200?% auto 0}.container .erweima[data-v-d34b3946]{background-color:#fff;border:4px solid #fff;border-bottom:none;position:absolute;right:%?30?%;bottom:%?100?%}.container .list[data-v-d34b3946]{width:%?694?%;margin:%?60?% auto 0}.container .list .title[data-v-d34b3946]{height:%?68?%;position:relative;width:100%}.container .list .title[data-v-d34b3946]::after{position:absolute;bottom:0;content:"";width:100%;height:%?30?%;left:0;z-index:8;background:#3c3c3c}.container .list .title[data-v-d34b3946]::before{position:absolute;bottom:0;content:"";width:100%;height:%?68?%;left:%?204?%;background:url('+c+") no-repeat;background-size:%?286?% %?68?%;z-index:9}.container .list .con[data-v-d34b3946]{padding-top:%?30?%;background:#3c3c3c;box-sizing:border-box}.container .list .con .listcon[data-v-d34b3946]{border-bottom:%?2?% solid #434343}.container .list .userimg[data-v-d34b3946]{width:%?50?%;height:%?50?%;margin-right:%?20?%;border-radius:50%}.container .w560[data-v-d34b3946]{width:%?564?%;margin:%?30?% auto %?50?%}.container .bg1[data-v-d34b3946]{background:#a4805c;border-radius:%?8?%}.container .bg2[data-v-d34b3946]{background:#f9c21a;border-radius:%?8?%}",""]),t.exports=i},e658:function(t,i,e){"use strict";e.r(i);var n=e("d01e"),o=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a}}]);