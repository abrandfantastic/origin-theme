(window.webpackJsonp=window.webpackJsonp||[]).push([[14,18],{558(e,t,n){"use strict";n.r(t);const l={name:"SectionUndefined",props:{heading:{type:String,default:"New section"},description:{type:String,default:"No type chosen"}}}; const r=n(3); const component=Object(r.a)(l,(function(){const e=this; const t=e.$createElement; const n=e._self._c||t;return n("div",{staticClass:"m-6 border border-dashed py-32 text-center"},[n("h3",[e._v(e._s(e.heading))]),e._v(" "),n("p",[e._v(e._s(e.description))])])}),[],!1,null,null,null);t.default=component.exports},666(e,t,n){"use strict";n.r(t);const l={name:"SectionMultiFeature",props:{type:{type:String,default:null},id:{type:String,default:null},heading:{type:String,default:""},features:{type:Array,default(){return[]}},columnWidth:{type:String,default:"sm"}}}; const r=n(3); const component=Object(r.a)(l,(function(){const e=this; const t=e.$createElement; const n=e._self._c||t;return e.heading||e.features.length?n("section",{staticClass:"px-6 py-16 text-center lg:px-8 xl:px-20"},[n("h3",{staticClass:"mx-auto mt-6"},[e._v("\n    "+e._s(e.heading)+"\n  ")]),e._v(" "),n("div",{staticClass:"mt-6 flex flex-wrap justify-center"},e._l(e.features,(function(t,l){return n("div",{key:e.id+"multiFeature"+l,staticClass:"mx-3 my-6 lg:mx-5",class:{"w-48":e.columnWidth==="sm"}},[t?n("div",{staticClass:"relative mx-auto h-16 w-16 rounded-full bg-primary-light"},[n("BaseIcon",{staticClass:"center-xy absolute",attrs:{icon:t.icon,size:"lg"}})],1):e._e(),e._v(" "),t?n("p",{staticClass:"mt-4 text-lg"},[e._v("\n        "+e._s(t.label)+"\n      ")]):e._e()])})),0)]):n("SectionUndefined",{attrs:{heading:"Multiple features",description:"No heading or features added"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SectionUndefined:n(558).default,BaseIcon:n(32).default})}}]);