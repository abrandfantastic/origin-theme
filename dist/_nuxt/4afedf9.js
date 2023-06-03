(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{553(t,e,n){"use strict";n.r(e);const l={name:"ProductOptionLabel",props:{id:{type:String,default:""},name:{type:String,default:""},description:{type:String,default:""}},data(){return{isHintVisible:!1}},methods:{toggleHint(){this.isHintVisible=!this.isHintVisible}}}; const r=n(3); const component=Object(r.a)(l,(function(){const t=this; const e=t.$createElement; const n=t._self._c||e;return n("div",{staticClass:"mb-3 flex items-start justify-between"},[n("div",{staticClass:"relative w-full"},[n("div",{staticClass:"mr-6"},[n("label",{staticClass:"label-xs-bold inline-block text-primary-dark",attrs:{id:"option-"+t.id+"-label",for:t.name}},[t._v(t._s(t.name))]),t._v(" "),t.description?n("a",{staticClass:"relative -mt-1 -mb-1 ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-center",attrs:{href:"#",title:"More info"},on:{click(e){return e.preventDefault(),t.toggleHint.apply(null,arguments)}}},[n("BaseIcon",{attrs:{icon:"fa-solid:question",size:"w-2 h-3"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHintVisible,expression:"isHintVisible"}],staticClass:"mini-triangle"})],1):t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHintVisible,expression:"isHintVisible"}],staticClass:"absolute z-20 mt-1 -ml-2 w-64 rounded border border-primary-med bg-primary-lightest px-3 py-2 text-sm shadow-lg"},[t._v("\n      "+t._s(t.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIcon:n(32).default})},557(t,e,n){"use strict";n.r(e);n(29);const l={name:"OptionInputText",props:{option:{type:Object,default(){return{}}},emitOnEnter:{type:Boolean,default:!1},validation:{type:Object,default:null},currentValue:{type:String,default:""}},data(){return{internalValue:null}},computed:{value(){return this.emitOnEnter?this.internalValue:this.currentValue}},methods:{emitValue(t){const e=t.target.value;this.emitOnEnter?this.internalValue=e:this.$emit("value-changed",{option:this.option.name,value:e})},emitValueOnEnter(){this.emitOnEnter&&this.$emit("value-changed",{option:this.option.name,value:this.internalValue})}}}; const r=(n(679),n(3)); const component=Object(r.a)(l,(function(){const t=this; const e=t.$createElement; const n=t._self._c||e;return n("div",{on:{keyup(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitValueOnEnter.apply(null,arguments)}}},[n("ProductOptionLabel",t._b({},"ProductOptionLabel",t.option,!1)),t._v(" "),t.option.inputType==="short_text"?n("input",{staticClass:"text-input h-12 bg-primary-lightest",attrs:{placeholder:t.option.inputHint},domProps:{value:t.value},on:{input:t.emitValue}}):n("textarea",{staticClass:"text-input",attrs:{placeholder:t.option.inputHint},domProps:{value:t.value},on:{input:t.emitValue}}),t._v(" "),t.validation?[t.validation.$dirty&&t.validation.$error?n("div",{staticClass:"mt-2 text-error-default"},[t.validation.required?t._e():n("span",{staticClass:"label-sm text-error-default"},[t._v(t._s(t.$t("products._slug.options.required")))])]):t._e()]:t._e()],2)}),[],!1,null,"9e0b01f8",null);e.default=component.exports;installComponents(component,{ProductOptionLabel:n(553).default})},645(t,e,n){let content=n(680);content.__esModule&&(content=content.default),typeof content==="string"&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("2fa1b704",content,!0,{sourceMap:!1})},679(t,e,n){"use strict";n(645)},680(t,e,n){const l=n(56)((function(i){return i[1]}));l.push([t.i,".text-input[data-v-9e0b01f8]{width:100%;border-radius:0.25rem;border-width:1px;border-color:var(--colors-primary-med);padding:1rem;font-size:var(--type-scale--1)}.text-input[data-v-9e0b01f8]:focus{--tw-shadow:0 0 0 3px hsla(200, 100%, 36%, 0.75);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}",""]),l.locals={},t.exports=l}}]);