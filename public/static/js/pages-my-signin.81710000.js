(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-signin"],{"3e61":function(t,a,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d3b7"),e("159b"),e("14d9"),e("e25e"),e("c975");var i=n(e("c7eb")),o=n(e("1da1")),s={data:function(){return{signlist:[],lang:"zh",type:"calendar",checkDate:!1,bgweek:"#A48A79",bgday:"#A48A79",weeked:"",dayArr:[],localDate:"",day:(new Date).getDate(),year:(new Date).getFullYear(),month:(new Date).getMonth()+1,weekArr:["日","一","二","三","四","五","六"],aheadDay:0,thisMonth:(new Date).getMonth()+1,signys:Array()}},onLoad:function(){this.initindex()},methods:{initindex:function(){this.getindexdata(),this.localDate=this.year+"-"+this.formatNum(this.month)+"-"+this.formatNum(this.day),"zh"!=this.lang&&(this.weekArr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),this.weeked=this.weekArr[(new Date).getDay()]},getindexdata:function(a){var e=this;return(0,o.default)((0,i.default)().mark((function a(){var n,o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:n={},void 0!=n&&(n={month:e.year+"-"+(e.month>10?e.month:"0"+e.month)}),o=e,e.$http("api/user/signinlist",n).then((function(a){e.signlist=a,e.signys=Array(),t("log",a," at pages/my/signin.vue:86"),a.forEach((function(t,a){var e=new Date(t.create_time),n=e.getFullYear(),i=e.getMonth()+1,s=e.getDate();i=i>9?i:"0"+i,s=s<10?"0"+s:s;var r=n+"-"+i+"-"+s;o.signys.push(r)})),e.initDate()}));case 4:case"end":return a.stop()}}),a)})))()},changeDate:function(t){this.year=parseInt(t.detail.value.split("-")[0]),this.month=parseInt(t.detail.value.split("-")[1])},daySign:function(a){var e=this,n=this.aheadDay+this.day-1;if(t("log",this.dayArr[n].flag," at pages/my/signin.vue:114"),this.dayArr[n].flag)return uni.showToast({title:"今日已签到",icon:"success"});this.$http("api/user/signin",{}).then((function(t){e.$set(e.dayArr[n],"flag",!0),e.$emit("change",a.date),uni.showToast({title:"签到成功",icon:"success"}),e.initindex()}))},signToday:function(t,a){"calendar"!=this.type&&(new Date).getMonth()+1==parseInt(t.date.split("-")[1])&&""!=t.date&&t.day<this.day&&(this.dayArr[a].flag?uni.showToast({title:"已签到",icon:"none"}):(uni.showToast({title:this.day>t.day?"补签成功":"签到成功",icon:"success"}),this.$set(this.dayArr[a],"flag",!0),this.$emit("change",t.date)))},initDate:function(){this.dayArr=[];for(var t=new Date(this.year,this.month,0).getDate(),a=1;a<=t;a++){var e=new Date(this.year,this.month-1,a).getDay();1==a&&0!=e&&(this.addBefore(e),this.aheadDay=e);var n={};n.date=this.year+"-"+this.formatNum(this.month)+"-"+this.formatNum(a),n.day=a,this.signys.indexOf(n.date)>-1&&(n.flag=!0),this.dayArr.push(n),a==t&&6!=e&&this.addAfter(e)}},addBefore:function(t){for(var a=new Date(this.year,this.month-1,0).getDate(),e=0;e<t;e++){var n={date:""};n.day=a-(t-e)+1,this.dayArr.push(n)}},addAfter:function(t){for(var a=0;a<6-t;a++){var e={date:""};e.day=a+1,this.dayArr.push(e)}},formatNum:function(t){return t<10?"0"+t:t},lastMonth:function(){1==this.month?(this.year-=1,this.month=12):this.month-=1,this.getindexdata("month")},nextMonth:function(){12==this.month?(this.year+=1,this.month=1):this.month+=1,this.getindexdata("month")}}};a.default=s}).call(this,e("0de9")["log"])},"64fe":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"calendar-box"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",[e("h4",[t._v(t._s(t.$t("benyueqiandao"))),e("span",[t._v(t._s(t.signys.length))]),t._v(t._s(t.$t("day")))])]),e("v-uni-view",{staticClass:"rig"},[e("v-uni-button",{staticClass:"qiandao",attrs:{disabled:t.thisMonth!=t.month},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.daySign(t.dayArr[t.aheadDay+t.day-1])}}},[t._v(t._s(t.$t("qiandao")))])],1)],1),e("v-uni-view",{staticClass:"miss_box"},[e("v-uni-view",{staticClass:"month"},[e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.lastMonth.apply(void 0,arguments)}}},[t._v("上月")]),e("v-uni-view",[t._v(t._s(t.year)+"年"+t._s(t.month)+"月")]),e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nextMonth.apply(void 0,arguments)}}},[t._v("下月")]),t.checkDate?e("v-uni-picker",{staticClass:"picker",attrs:{mode:"date",fields:"month"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.changeDate.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-view",{staticClass:"week"},t._l(t.weekArr,(function(a){return e("v-uni-view",{style:"color:"+(a==t.weeked?t.bgweek:"")+";"},[t._v(t._s(a))])})),1),e("v-uni-view",{staticClass:"day"},t._l(t.dayArr,(function(a,n){return e("v-uni-view",{key:n,class:[{checkday:""==a.date},{choose:a.date==t.localDate||a.flag}],style:"background:"+(a.date==t.localDate||a.flag?t.bgday:"")+";",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.signToday(a,n)}}},[t._v(t._s(a.day)),e("v-uni-view",{class:[{circle:a.flag},{repair:a.day<t.day},{sign:a.day==t.day}]})],1)})),1)],1)],1)},i=[]},8099:function(t,a,e){var n=e("dfeb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("78e6b86c",n,!0,{sourceMap:!1,shadowMode:!1})},af40:function(t,a,e){"use strict";var n=e("8099"),i=e.n(n);i.a},cf61:function(t,a,e){"use strict";e.r(a);var n=e("3e61"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},d9af:function(t,a,e){"use strict";e.r(a);var n=e("64fe"),i=e("cf61");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("af40");var s=e("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6a412800",null,!1,n["a"],void 0);a["default"]=r.exports},dfeb:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".qiandao[data-v-6a412800]{background-color:#a48a79;color:#fff;height:%?60?%;display:block;padding:%?0?% %?20?%;line-height:%?60?%}.calendar-box[data-v-6a412800]{width:95%;margin:%?50?% auto;flex-direction:column;justify-content:center}.miss_box[data-v-6a412800]{width:100%;padding:%?20?% %?40?%;box-sizing:border-box;background-color:#fff;border-radius:%?25?%}.calendar-box[data-v-6a412800],\n.month[data-v-6a412800],\n.week[data-v-6a412800],\n.day[data-v-6a412800]{display:flex;align-items:center;justify-content:space-between}.month[data-v-6a412800],\n.week[data-v-6a412800],\n.day[data-v-6a412800]{width:100%}.month[data-v-6a412800]{margin:%?30?% 0;position:relative}.picker[data-v-6a412800]{width:%?160?%;height:%?40?%;position:absolute;top:%?20?%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.day[data-v-6a412800]{flex-wrap:wrap}.week>uni-view[data-v-6a412800],\n.day>uni-view[data-v-6a412800]{width:%?70?%;height:%?70?%;margin:%?10?%;text-align:center;position:relative;line-height:%?70?%}.checkday[data-v-6a412800]{color:#999}.choose[data-v-6a412800]{color:#fff;border-radius:50%}.circle[data-v-6a412800]{width:%?10?%;height:%?10?%;border-radius:50%;position:absolute;bottom:10%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.sign[data-v-6a412800]{background-color:#fff}.repair[data-v-6a412800]{background-color:#fff}.but[data-v-6a412800]{display:flex;flex:1;margin-top:%?80?%;justify-content:center}.but uni-button[data-v-6a412800]{width:%?650?%;height:%?80?%;line-height:%?80?%;border-radius:%?30?%;border:1px solid transparent;outline:none;color:#fff;font-size:%?32?%}uni-button[data-v-6a412800]:after{border:none}.top[data-v-6a412800]{display:flex;width:100%;justify-content:space-between;padding:%?30?%;box-sizing:border-box;background-color:#fff;border-radius:%?20?%;margin-bottom:%?16?%;align-items:center}.top h4[data-v-6a412800]{font-weight:600;font-size:%?36?%;line-height:%?50?%}.top h4 span[data-v-6a412800]{color:#ff871e;margin:0 %?10?%;font-size:%?32?%}.top p[data-v-6a412800]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#ff871e}.rig span[data-v-6a412800]{font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?48?%;color:#ff871e;border:1px solid #ff871e;padding:%?10?% %?20?%;border-radius:%?32?%}",""]),t.exports=a}}]);