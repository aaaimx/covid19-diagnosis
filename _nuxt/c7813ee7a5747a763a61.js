(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{309:function(e,t,l){"use strict";l.r(t);var r={data:function(){return{slider:1,value:10,satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],seasons:["Poco","Regular","Mucho","Demasiado"],icons:["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"]}},methods:{season:function(e){return this.icons[e]}}},n=l(10),v=l(33),c=l.n(v),o=l(282),d=l(302),m=l(228),_=l(317),k=l(303),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-container",[l("v-form",{ref:"form"},[l("v-subheader",{staticClass:"pl-0"},[e._v(" 1. ¿Cuál es tu temperatura? (°C)")]),e._v(" "),l("v-slider",{attrs:{"thumb-size":20,"thumb-label":"always"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("2. ¿Cómo calificarías tu dolor de cabeza?\n    ")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"}}),e._v(" "),l("br"),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("3. ¿Cómo calificarías tu dolor de cuerpo?\n    ")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){return[l("v-icon",{attrs:{dark:""}},[e._v("\n          "+e._s(e.season(t.value))+"\n        ")])]}}])}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("4. ¿Cómo calificarías tu fatiga o debilidad?")]),e._v(" "),l("v-slider",{attrs:{step:"10",ticks:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("5. ¿Qué tan tapada sientes la nariz?")]),e._v(" "),l("v-slider",{attrs:{step:"10",ticks:"always"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("6. ¿Qué tanto estornudas?")]),e._v(" "),l("v-slider",{attrs:{"thumb-label":"always","tick-labels":e.satisfactionEmojis,step:"10",ticks:"always"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("7. ¿Qué tan irritada sientes la garganta?\n    ")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("8. ¿Qué tanta tos tienes? ")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("9. ¿Qué tanto se te dificulta respirar?\n    ")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("10. ¿Qué tanto escurrimiento nasal tienes?")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"}}),e._v(" "),l("v-subheader",{staticClass:"pl-0"},[e._v("11. ¿Qué tanta diarrea presentas? ")]),e._v(" "),l("v-slider",{attrs:{"tick-labels":e.seasons,min:"0",max:"3",ticks:"always"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VContainer:o.a,VForm:d.a,VIcon:m.a,VSlider:_.a,VSubheader:k.a})}}]);