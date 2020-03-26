(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{268:function(t,e,n){var content=n(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("8bb8ad54",content,!0,{sourceMap:!1})},337:function(t,e,n){"use strict";var r=n(268);n.n(r).a},338:function(t,e,n){(e=n(13)(!1)).push([t.i,"div.v-slider__tick-label{font-size:14px}",""]),t.exports=e},365:function(t,e,n){"use strict";n.r(e);var r=n(254),o=(n(63),n(24)),l=n(320),c={mode:"cors",credentials:"same-origin",timeout:2e4,baseURL:"https://covid19-assistant.herokuapp.com",headers:{post:{"Content-Type":"application/json"}}},d=n.n(l).a.create(c),v={data:function(){return{scales:[36.66,37.33,38.44,40],diseases:["","Coronavirus","Resfriado","Gripa","Alergia"],diagnosis:2,dialog:!1,temperature:1,questions:[{text:"¿Cómo calificarías tu dolor de cabeza?",value:1},{text:"¿Cómo calificarías dolores en tu cuerpo?",value:1},{text:"¿Cómo calificarías tu fatiga o debilidad?",value:1},{text:"¿Qué tan tapada sientes la nariz?",value:1},{text:"¿Qué tanto estornudas?",value:1},{text:"¿Qué tan irritada sientes la garganta?",value:1},{text:"¿Qué tanta tos tienes?",value:1},{text:"¿Qué tanto se te dificulta respirar?",value:1},{text:"¿Qué tanto escurrimiento nasal tienes?",value:1},{text:"¿Qué tanta diarrea presentas?",value:1}],satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],seasons:["Nada","Poco","Moderado","Mucho"],icons:["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"],svg:[0,1,2,3,4,5,6,7,8]}},methods:{season:function(t){return this.svg[t]+".svg"},sendForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/diagnosis",{values:[t.temperature].concat(Object(r.a)(t.questions.map((function(q){return q.value}))))});case 2:n=e.sent,console.log(n.data),t.diagnosis=n.data.diagnosis,t.dialog=!0;case 6:case"end":return e.stop()}}),e)})))()}}},m=(n(337),n(6)),f=n(21),x=n.n(f),_=n(249),h=n(108),k=n(93),w=n(358),C=n(366),y=n(356),V=n(361),Q=n(357),j=n(359),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"500px"}},[n("v-subheader",{staticClass:"pl-0"},[t._v("1. ¿Cuál es tu temperatura? (°C)")]),t._v(" "),n("v-slider",{attrs:{"tick-labels":["36°","37°","38°","40°+"],min:"1",max:"4"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("img",{attrs:{width:"30px",src:"/covid19-screening-assistant/symptoms/1.svg",alt:""}})]},proxy:!0}]),model:{value:t.temperature,callback:function(e){t.temperature=e},expression:"temperature"}}),t._v(" "),t._l(t.questions,(function(e,r){return n("div",{key:r},[n("v-subheader",{staticClass:"pl-0"},[t._v("\n      "+t._s(r+2)+". "+t._s(e.text))]),t._v(" "),n("v-slider",{attrs:{"tick-labels":t.seasons,min:"1",max:"4",ticks:"always"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("img",{attrs:{width:"30px",src:"/covid19-screening-assistant/symptoms/"+(r+2)+".svg",alt:""}})]},proxy:!0},{key:"thumb-label",fn:function(e){return[n("img",{attrs:{width:"30px",src:"/covid19-screening-assistant/feelings/"+t.season(e.value),alt:""}})]}}],null,!0),model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"question.value"}})],1)})),t._v(" "),n("v-btn",{staticClass:"mt-4",attrs:{depressed:"",rounded:"",outlined:""},nativeOn:{click:function(e){return t.sendForm()}}},[t._v("Diagnostic")]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Diagnostic")]),t._v(" "),n("v-card-text",[t._v("\n        Es probable que tengas "),n("b",[t._v(t._s(t.diseases[t.diagnosis]))])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=0}}},[t._v("\n          OK\n        ")])],1)],1)],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:_.a,VCard:h.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VContainer:w.a,VDialog:C.a,VRow:y.a,VSlider:V.a,VSpacer:Q.a,VSubheader:j.a})}}]);