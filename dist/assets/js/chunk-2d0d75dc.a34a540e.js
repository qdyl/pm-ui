(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d75dc"],{7706:function(e,a,c){"use strict";c.r(a);var n=function(){var e=this,a=e._self._c;return a("div",{},[a("van-cell",{attrs:{title:"方法复制",value:""}}),a("van-search",{attrs:{"show-action":"",label:"",placeholder:"请输入搜索关键词"},scopedSlots:e._u([{key:"action",fn:function(){return[a("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleCopy(e.value1,a)}}},[e._v("点击复制")])]},proxy:!0}]),model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),a("van-divider",[e._v("-")]),a("van-cell",{attrs:{title:"指令复制",value:"指令已经全局注册"}}),a("van-search",{attrs:{"show-action":"",label:"",placeholder:"请输入搜索关键词"},scopedSlots:e._u([{key:"action",fn:function(){return[a("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value2,expression:"value2",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"info",size:"small"}},[e._v("点击复制")])]},proxy:!0}]),model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},l=[],s=c("d399"),t=c("b311"),o=c.n(t);function r(){s["a"].success("复制成功")}function u(){s["a"].fail("复制失败")}function i(e,a){const c=new o.a(a.target,{text:()=>e});c.on("success",()=>{r(),c.destroy()}),c.on("error",()=>{u(),c.destroy()}),c.onClick(a)}var v={data(){return{value1:"11111111111",value2:"222222222222"}},methods:{handleCopy(e,a){i(e,a)},clipboardSuccess(){s["a"].success("复制成功")}}},d=v,p=c("2877"),b=Object(p["a"])(d,n,l,!1,null,"5deac0dc",null);a["default"]=b.exports}}]);