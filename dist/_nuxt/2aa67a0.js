(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{553(t,e,n){"use strict";n.r(e);const l={name:"ProductOptionLabel",props:{id:{type:String,default:""},name:{type:String,default:""},description:{type:String,default:""}},data(){return{isHintVisible:!1}},methods:{toggleHint(){this.isHintVisible=!this.isHintVisible}}}; const r=n(3); const component=Object(r.a)(l,(function(){const t=this; const e=t.$createElement; const n=t._self._c||e;return n("div",{staticClass:"mb-3 flex items-start justify-between"},[n("div",{staticClass:"relative w-full"},[n("div",{staticClass:"mr-6"},[n("label",{staticClass:"label-xs-bold inline-block text-primary-dark",attrs:{id:"option-"+t.id+"-label",for:t.name}},[t._v(t._s(t.name))]),t._v(" "),t.description?n("a",{staticClass:"relative -mt-1 -mb-1 ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-center",attrs:{href:"#",title:"More info"},on:{click(e){return e.preventDefault(),t.toggleHint.apply(null,arguments)}}},[n("BaseIcon",{attrs:{icon:"fa-solid:question",size:"w-2 h-3"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHintVisible,expression:"isHintVisible"}],staticClass:"mini-triangle"})],1):t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHintVisible,expression:"isHintVisible"}],staticClass:"absolute z-20 mt-1 -ml-2 w-64 rounded border border-primary-med bg-primary-lightest px-3 py-2 text-sm shadow-lg"},[t._v("\n      "+t._s(t.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIcon:n(32).default})}}]);