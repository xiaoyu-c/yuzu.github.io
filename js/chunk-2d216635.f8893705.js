(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216635"],{c1f7:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("nav-bar",{attrs:{title:t.title}},[i("van-icon",{attrs:{slot:"left",name:"wap-nav",size:"18"},on:{click:t.showPopup},slot:"left"})],1),i("van-popup",{style:{width:"40%",height:"100%"},attrs:{position:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},t._l(t.titleGroup,(function(e,o){return i("van-cell",{key:e.title,attrs:{title:e.title,clickable:"",to:e.to},nativeOn:{click:function(e){return t.replaceTitle(o)}}})})),1),i("router-view")],1)},n=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:t.title},scopedSlots:t._u([{key:"left",fn:function(){return[t._t("left")]},proxy:!0},{key:"right",fn:function(){return[t._t("right")]},proxy:!0}],null,!0)})],1)},s=[],r={props:{title:{type:String,default:""}}},a=r,c=i("2877"),u=Object(c["a"])(a,l,s,!1,null,"186b211e",null),p=u.exports,h={components:{NavBar:p},data:function(){return{title:"首页",titleGroup:[{title:"首页",to:"index"},{title:"图库1",to:"photo1"},{title:"图库2",to:"photo2"},{title:"图库3",to:"photo3"}],show:!1}},created:function(){this.title=this.$route.meta.title},methods:{showPopup:function(){this.show=!this.show},replaceTitle:function(t){this.title=this.titleGroup[t].title,this.show=!this.show}}},f=h,w=Object(c["a"])(f,o,n,!1,null,"18c5c484",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d216635.f8893705.js.map