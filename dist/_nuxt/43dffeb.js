(window.webpackJsonp=window.webpackJsonp||[]).push([[10,18],{558(t,e,n){"use strict";n.r(e);const l={name:"SectionUndefined",props:{heading:{type:String,default:"New section"},description:{type:String,default:"No type chosen"}}}; const r=n(3); const component=Object(r.a)(l,(function(){const t=this; const e=t.$createElement; const n=t._self._c||e;return n("div",{staticClass:"m-6 border border-dashed py-32 text-center"},[n("h3",[t._v(t._s(t.heading))]),t._v(" "),n("p",[t._v(t._s(t.description))])])}),[],!1,null,null,null);e.default=component.exports},663(t,e,n){"use strict";n.r(e);n(66);const l={name:"SectionFullWidthMedia",props:{fetchIsPending:{type:Boolean,default:!0},id:{type:String,default:""},type:{type:String,default:""},heading:{type:String,default:""},description:{type:String,default:""},image:{type:[Object,String],default(){return{}}},links:{type:Array,default(){return[]}},textColor:{type:String,default:"light"},darkenBg:{type:Number,default:0},innerSpacing:{type:String,default:"md"},outerSpacingX:{type:String,default:"md"},outerSpacingY:{type:String,default:"lg"},alignX:{type:String,default:"left"},alignY:{type:String,default:"top"},bgColor:{type:String,default:"primary-lightest"}}}; const r=n(3); const component=Object(r.a)(l,(function(){const t=this; const e=t.$createElement; const n=t._self._c||e;return t.heading||t.image?t.fetchIsPending?n("div",{staticClass:"flex flex-col items-center justify-center bg-primary-lighter py-20"},[n("div",{staticClass:"loader-el mb-2 h-7 w-1/2"}),t._v(" "),n("div",{staticClass:"loader-el mb-6 h-7 w-1/3"}),t._v(" "),n("div",{staticClass:"loader-el mb-4 h-2 w-3/5"}),t._v(" "),n("div",{staticClass:"loader-el mb-8 h-2 w-2/5"}),t._v(" "),n("div",{staticClass:"loader-el h-10 w-40"})]):n("div",{staticClass:"overflow-auto",class:"bg-"+t.bgColor},[n("section",{staticClass:"relative overflow-hidden",class:{"mx-6 lg:mx-8 xl:mx-20":t.outerSpacingX==="md","my-6 lg:my-8 xl:my-20":t.outerSpacingY==="md"}},[t.image&&(t.image.file||t.image.url)?n("VisualMedia",{attrs:{source:t.image,"is-background":!0,sizes:"(min-resolution: 2dppx) 50vw, 80vw"}}):t._e(),t._v(" "),t.textColor==="light"?n("div",{staticClass:"inset absolute h-full w-full bg-primary-darkest",style:{opacity:t.darkenBg/100}}):t._e(),t._v(" "),n("div",{staticClass:"relative",class:[{"p-6 sm:p-7 lg:p-8 xl:p-20":t.outerSpacingX==="none"&&t.innerSpacing==="md"},{"p-6 sm:p-7 lg:p-8 xl:p-20":t.outerSpacingX==="none"&&t.innerSpacing==="sm"},{"p-8 sm:p-12 md:p-16 lg:p-20":t.outerSpacingX==="md"&&t.innerSpacing==="md"},{"p-8 md:p-12 lg:p-16":t.outerSpacingX==="md"&&t.innerSpacing==="sm"}]},[n("div",{class:{"max-w-80 md:max-w-96":t.alignX==="left","mx-auto max-w-112 text-center":t.alignX==="center","ml-auto max-w-80 md:max-w-96":t.alignX==="right","mt-4 mb-24 md:mt-0":t.innerSpacing==="md"&&t.alignY==="top","my-12":t.innerSpacing==="md"&&t.alignY==="center","mb-4 mt-24 md:mb-0":t.innerSpacing==="md"&&t.alignY==="bottom"}},[n("h2",{staticClass:"mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl",class:{"text-primary-lightest":t.textColor==="light"}},[t._v("\n          "+t._s(t.heading)+"\n        ")]),t._v(" "),n("p",{staticClass:"whitespace-pre-line",class:{"text-primary-lighter":t.textColor==="light"},domProps:{innerHTML:t._s(t.description)}}),t._v(" "),n("div",{staticClass:"mx-3 mt-6",class:{"-ml-3":t.alignX!=="center"}},t._l(t.links,(function(link,e){return n("BaseButton",{key:t.id+"link"+e,staticClass:"mx-3 mt-6",attrs:{type:link.style,fit:"static","text-color":t.textColor,link,label:link.label}})})),1)])])],1)]):n("SectionUndefined",{attrs:{heading:"Full width media",description:"No heading or media added"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionUndefined:n(558).default,BaseButton:n(86).default})}}]);