(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"49c0":function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("5319");var o={data:function(){return{checked:!0,phone:"",btnDisabled:!1,password:""}},methods:{goRegister:function(){uni.navigateTo({url:"/pages/login/register"})},goForget:function(){uni.navigateTo({url:"/pages/home/services"})},changenum:function(e){1==e&&(this.phone=this.phone.replace(/[^\d]/g,"")),2==e&&(this.password=this.password.replace(/\s*/g,""))},login:function(){var t=this;""!=this.phone.replace(/[^\d]/g,"")?""!=this.password.replace(/\s*/g,"")?0!=this.checked?(this.btnDisabled=!0,this.$http("api/login/login",{phone:this.phone,password:this.password},"POST").then((function(e){t.btnDisabled=!1,uni.showToast({title:"登录成功"}),uni.setStorageSync("token",e.app_token),t.$store.commit("setToken",e.app_token),setTimeout((function(){uni.reLaunch({url:"/pages/home/index"})}),500)})).catch((function(n){t.btnDisabled=!1,e("log",n," at pages/login/index.vue:120")}))):uni.showToast({title:"请先勾选协议",icon:"none"}):uni.showToast({title:"请输入密码",icon:"none"}):uni.showToast({title:"请输入手机号",icon:"none"})}}};t.default=o}).call(this,n("0de9")["log"])},"64bd":function(e,t,n){"use strict";n.r(t);var o=n("49c0"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},9955:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uField:n("761d").default,uCheckboxGroup:n("f473").default,uCheckbox:n("91a0").default,uButton:n("e418").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page flex-col"},[n("v-uni-view",{staticClass:"t-h1",staticStyle:{color:"#000000"}},[e._v(e._s(e.$t("login.index.title")))]),n("v-uni-view",{staticClass:"bd1 flex-col"},[n("v-uni-view",{staticClass:"box1 flex-col"},[n("v-uni-view",{staticClass:"main1 t-center-column"},[n("u-field",{attrs:{maxlength:"11","border-bottom":!1,"label-width":"0",placeholder:e.$t("login.index.ipt[0]"),"placeholder-style":"color:#999999"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.changenum(1)}},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"main2 t-center-column"},[n("u-field",{attrs:{"border-bottom":!1,"label-width":"0",placeholder:e.$t("login.index.ipt[1]"),"placeholder-style":"color:#999999",type:"password"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.changenum(2)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-uni-view",{staticClass:"checkBox"},[n("u-checkbox-group",{attrs:{"active-color":"#0fe2bc"}},[n("u-checkbox",{attrs:{"label-disabled":!0,name:"xieyi"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[n("v-uni-view",{staticClass:"txt"},[n("v-uni-text",[e._v(e._s(e.$t("login.register.check[0]")))]),n("v-uni-navigator",{staticStyle:{color:"#0fe2bc"},attrs:{"hover-class":"none",url:"/pages/login/register_content"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toUserContent.apply(void 0,arguments)}}},[e._v(e._s(e.$t("login.register.xieyi[0]")))]),n("v-uni-text",[e._v(e._s(e.$t("login.register.check[1]")))]),n("v-uni-navigator",{staticStyle:{color:"#0fe2bc"},attrs:{"hover-class":"none",url:"/pages/login/privacy"}},[e._v(e._s(e.$t("login.register.xieyi[1]")))])],1)],1)],1)],1),n("u-button",{attrs:{disabled:e.btnDisabled,size:"default",plain:!0,"custom-style":{"margin-top":"30rpx",width:"100%","background-color":"#F4F0E4",border:"4rpx solid #999999","font-weight":"700"}},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v(e._s(e.$t("login.index.btn")))]),n("v-uni-view",{staticClass:"main3 flex-row justify-between",staticStyle:{color:"#000000"}},[n("v-uni-text",{staticClass:"word3",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goRegister.apply(void 0,arguments)}}},[e._v(e._s(e.$t("login.index.link[0]")))]),n("v-uni-text",{staticClass:"info3",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goForget.apply(void 0,arguments)}}},[e._v(e._s(e.$t("login.index.link[1]")))])],1)],1)],1)],1)},a=[]},"9c7b":function(e,t,n){"use strict";n.r(t);var o=n("9955"),i=n("64bd");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("cbb1");var s=n("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"09417d04",null,!1,o["a"],void 0);t["default"]=l.exports},a7da:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"uni-page-body[data-v-09417d04]{padding:%?120?% %?40?% 0;box-sizing:border-box;background-color:#f4f0e4}body.?%PAGE?%[data-v-09417d04]{background-color:#f4f0e4}.t-h1[data-v-09417d04]{color:#999;font-size:%?38?%;font-weight:700;margin-top:%?40?%}.bd1 .box1 .main1[data-v-09417d04]{background-color:#f4f0e4;border-radius:%?10?%;height:%?90?%;border:%?2?% solid #999;margin:0 auto;margin-top:%?60?%}.bd1 .box1 .main2[data-v-09417d04]{background-color:#f4f0e4;border-radius:%?10?%;height:%?83.33333333?%;border:%?2?% solid rgba(83,83,83,.5019607843137255);margin:%?34.72222222?% auto}.bd1 .box1 .checkBox .txt[data-v-09417d04]{font-size:%?24?%;display:flex;align-items:center}.bd1 .box1 .main3[data-v-09417d04]{display:flex;justify-content:space-between;margin:%?30?% auto 0;white-space:nowrap;font-size:%?26?%}.bd1 .box1 .main3 .word3[data-v-09417d04]{display:block}[data-v-09417d04] .uni-input-input{color:#999}",""]),e.exports=t},cbb1:function(e,t,n){"use strict";var o=n("e2a5"),i=n.n(o);i.a},e2a5:function(e,t,n){var o=n("a7da");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("638774d4",o,!0,{sourceMap:!1,shadowMode:!1})}}]);