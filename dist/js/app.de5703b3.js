(function(e){function t(t){for(var n,i,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("c21b"),s=a.n(n);s.a},"08f2":function(e,t,a){},1741:function(e,t,a){},2175:function(e,t,a){"use strict";var n=a("f587"),s=a.n(n);s.a},"2dd6":function(e,t,a){"use strict";var n=a("bd70"),s=a.n(n);s.a},"3b9f":function(e,t,a){},"43d4":function(e,t,a){"use strict";var n=a("809a"),s=a.n(n);s.a},"4d5b":function(e,t,a){"use strict";var n=a("3b9f"),s=a.n(n);s.a},"52d3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=a("2f62"),o=a("bc3a"),i=a.n(o);n["default"].use(s["a"]);var r=new s["a"].Store({state:{user:null},mutations:{setUser:function(e,t){e.user=t,t?i.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token):delete i.a.defaults.headers.common["Authorization"]}}}),c=(a("f9e3"),a("2dd8"),a("5f5b"));n["default"].use(c["a"]);var l=a("a65d"),d=a.n(l);n["default"].use(d.a,{iconPack:"fontawesome",duration:3e3}),n["default"].toasted.register("defaultSuccess",function(e){return e.msg?e.msg:"Operação realidada com sucesso!"},{type:"success",icon:"check"}),n["default"].toasted.register("defaultError",function(e){return e.msg?e.msg:"Erro inesperado."},{type:"error",icon:"times"});var u=function(e){return e},m=function(e){if(401!==e.response.status)return Promise.reject(e);window.location="/"};i.a.interceptors.response.use(u,m);a("7f10");var p=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("PageTitle",{attrs:{icon:"fa fa-home",main:"Dashboard",sub:"Cadastro de pacientes"}}),a("div",{staticClass:"pacient"},[a("Pacient",{attrs:{title:"Pacientes",value:e.pacient[0].count,icon:"fa fa-user",color:"#3282cd"}}),a("Pacient",{attrs:{title:"Medicos",value:e.medico[0].count,icon:"fa fa-user-md",color:"#d54d50"}})],1),a("PacientbyId")],1)},g=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"page-title"},[a("h1",[e.icon?a("i",{class:e.icon}):e._e(),e._v(" "+e._s(e.main))]),a("h2",[e._v(e._s(e.sub))]),a("hr")])},b=[],h={name:"PageTitle",props:["icon","main","sub"]},_=h,y=(a("a405"),a("2877")),w=Object(y["a"])(_,v,b,!1,null,null,null),P=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pacient"},[a("div",{staticClass:"pacient-icon"},[a("i",{class:e.icon,style:e.style})]),a("div",{staticClass:"pacient-info"},[a("span",{staticClass:"pacient-title"},[e._v(e._s(e.title))]),a("span",{staticClass:"pacient-value"},[e._v(e._s(e.value))])])])},k=[],C={name:"Pacient",props:["title","value","icon","color"],computed:{style:function(){return"color: "+(this.color||"#000")}}},$=C,I=(a("cc86"),Object(y["a"])($,x,k,!1,null,null,null)),O=I.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pacient"},[a("div",{staticClass:"pacient-filter"},[a("strong",[e._v(" Digite o Id do paciente :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Digite o id aqui..."},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}}),a("div",{staticClass:"search-button"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.getLink()}}},[e._v(" Pesquisar ")])],1),e.exists?e._e():a("div",{staticClass:"error-message"},[a("strong",[e._v(" NENHUM USUÁRIO COM O ID INFORMADO FOI ENCONTRADO !!! ")])])])])},E=[],j="__knowledge_user",M="https://cadastro-tcc-backend.herokuapp.com/";function N(e){e&&e.response&&e.response.data?n["default"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?n["default"].toasted.global.defaultError({msg:e}):n["default"].toasted.global.defaultError()}var T={name:"PacientbyId",data:function(){return{id:"",pacientes:[],exists:!0,page:1}},methods:{loadPacientes:function(){var e=this,t="".concat(M,"/pacientes?page=").concat(this.page);i.a.get(t).then(function(t){e.pacientes=t.data})},getLink:function(){for(var e=0;e<this.pacientes.count;e++)if(this.pacientes.data[e].id==this.id){var t="/pacientes/".concat(this.id,"/pesagens");return this.$router.push(t),this.exists=!0,null}this.exists=!1}},mounted:function(){this.loadPacientes()}},A=T,q=(a("43d4"),Object(y["a"])(A,S,E,!1,null,null,null)),U=q.exports,D={name:"Home",components:{PageTitle:P,Pacient:O,PacientbyId:U},data:function(){return{pacient:{},medico:{}}},methods:{getPacient:function(){var e=this;i.a.patch("".concat(M,"/users")).then(function(t){e.medico=t.data}),i.a.patch("".concat(M,"/pacientes")).then(function(t){e.pacient=t.data})}},mounted:function(){this.getPacient()}},F=D,L=Object(y["a"])(F,f,g,!1,null,null,null),R=L.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-pages"},[a("PageTitle",{attrs:{icon:"fa fa-ambulance",main:"Cadastro de pacientes",sub:"Cadastros e CIA"}}),a("div",{staticClass:"admin-pages-tabs"},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Pacientes",active:""}},[a("PacientAdmin")],1),a("b-tab",{attrs:{title:"Pesagens"}},[a("PesagemAdmin")],1),a("b-tab",{attrs:{title:"Medicos"}},[a("MedicAdmin")],1)],1)],1)],1)],1)},z=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pacient-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.paciente.id,expression:"paciente.id"}],attrs:{id:"paciente-id",type:"hidden"},domProps:{value:e.paciente.id},on:{input:function(t){t.target.composing||e.$set(e.paciente,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"paciente-name"}},[a("b-form-input",{attrs:{id:"paciente-name",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o nome do paciente a ser adicionado"},model:{value:e.paciente.name,callback:function(t){e.$set(e.paciente,"name",t)},expression:"paciente.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Idade:","label-for":"paciente-age"}},[a("b-form-input",{attrs:{id:"paciente-age",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe a idade do paciente a ser adicionado"},model:{value:e.paciente.age,callback:function(t){e.$set(e.paciente,"age",t)},expression:"paciente.age"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"CPF:","label-for":"paciente-cpf"}},[a("b-form-input",{attrs:{id:"paciente-cpf",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o CPF do paciente a ser adicionado"},model:{value:e.paciente.cpf,callback:function(t){e.$set(e.paciente,"cpf",t)},expression:"paciente.cpf"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Peso:","label-for":"paciente-weight"}},[a("b-form-input",{attrs:{id:"paciente-weight",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o peso inicial do paciente"},model:{value:e.paciente.weight,callback:function(t){e.$set(e.paciente,"weight",t)},expression:"paciente.weight"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Sexo:","label-for":"paciente-sex"}},[a("b-form-input",{attrs:{id:"paciente-sex",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o sexo do paciente a ser adicionado"},model:{value:e.paciente.sex,callback:function(t){e.$set(e.paciente,"sex",t)},expression:"paciente.sex"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Url da imagem do paciente(opcional):","label-for":"paciente-imageUrl"}},[a("b-form-input",{attrs:{id:"paciente-imageUrl",type:"password",readonly:"remove"===e.mode,required:"",placeholder:"Informe a imagem do paciente a ser adicionado"},model:{value:e.paciente.imageUrl,callback:function(t){e.$set(e.paciente,"imageUrl",t)},expression:"paciente.imageUrl"}})],1)],1),a("b-form-group",{attrs:{label:"Informações","label-for":"paciente-info"}},[a("VueEditor",{attrs:{placeholder:"Informações sobre o paciente"},model:{value:e.paciente.info,callback:function(t){e.$set(e.paciente,"info",t)},expression:"paciente.info"}})],1)],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",stripped:"",items:e.pacientes.data,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){e.loadPaciente(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.loadPaciente(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])}),a("b-pagination",{attrs:{size:"md","total-rows":e.count,"per-page":e.limit},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},V=[],B=a("5530"),G=a("b3e9"),W={name:"PacienteAdmin",components:{VueEditor:G["VueEditor"]},data:function(){return{mode:"save",paciente:{},pacientes:[],page:1,limit:0,count:0,fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"cpf",label:"CPF",sortable:!0},{key:"age",label:"Idade",sortable:!0},{key:"weight",label:"Peso",sortable:!0},{key:"sex",label:"Sexo",sortable:!0},{key:"actions",label:"Açoes"}]}},methods:{loadPacientes:function(){var e=this,t="".concat(M,"/pacientes?page=").concat(this.page);i.a.get(t).then(function(t){e.pacientes=t.data,e.limit=t.limit,e.count=t.count})},reset:function(){this.mode="save",this.paciente={},this.loadPacientes()},save:function(){var e=this,t=this.paciente.id?"put":"post",a=this.paciente.id?"/".concat(this.paciente.id):"";i.a[t]("".concat(M,"/pacientes").concat(a),this.paciente).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(N)},remove:function(){var e=this,t=this.paciente.id;i.a.delete("".concat(M,"/pacientes/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(N)},loadPaciente:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.paciente=Object(B["a"])({},e)}},watch:{page:function(){this.loadPacientes()}},mounted:function(){this.loadPacientes()}},K=W,Q=Object(y["a"])(K,J,V,!1,null,null,null),X=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pesagem-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pesagem.id,expression:"pesagem.id"}],attrs:{id:"pesagem-id",type:"hidden"},domProps:{value:e.pesagem.id},on:{input:function(t){t.target.composing||e.$set(e.pesagem,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"pesagem-name"}},[a("b-form-input",{attrs:{id:"pesagem-name",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o nome do Paciente pesado"},model:{value:e.pesagem.name,callback:function(t){e.$set(e.pesagem,"name",t)},expression:"pesagem.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Peso:","label-for":"pesagem-weight"}},[a("b-form-input",{attrs:{id:"pesagem-weight",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o peso do paciente"},model:{value:e.pesagem.weight,callback:function(t){e.$set(e.pesagem,"weight",t)},expression:"pesagem.weight"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Data:","label-for":"pesagem-date"}},[a("b-form-input",{attrs:{id:"pesagem-date",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe a data em que foi realizada a pesagem"},model:{value:e.pesagem.date,callback:function(t){e.$set(e.pesagem,"date",t)},expression:"pesagem.date"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"ID:","label-for":"pesagem-pacientesId"}},[a("b-form-input",{attrs:{id:"pesagem-pacientesId",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o ID do paciente pesado"},model:{value:e.pesagem.pacientesId,callback:function(t){e.$set(e.pesagem,"pacientesId",t)},expression:"pesagem.pacientesId"}})],1)],1)],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",stripped:"",items:e.pesagens.data,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){e.loadPesagem(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.loadPesagem(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},Z=[],ee={name:"PesagemAdmin",data:function(){return{mode:"save",pesagem:{},pesagens:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"weight",label:"Peso",sortable:!0},{key:"date",label:"Data",sortable:!0},{key:"actions",label:"Açoes"}]}},methods:{loadPesagens:function(){var e=this,t="".concat(M,"/pesagem");i.a.get(t).then(function(t){e.pesagens=t.data})},reset:function(){this.mode="save",this.pesagem={},this.loadPesagens()},save:function(){var e=this,t=this.pesagem.id?"put":"post",a=this.pesagem.id?"/".concat(this.pesagem.id):"";i.a[t]("".concat(M,"/pesagem").concat(a),this.pesagem).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(N)},remove:function(){var e=this,t=this.pesagem.id;i.a.delete("".concat(M,"/pesagem/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(N)},loadPesagem:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.pesagem=Object(B["a"])({},e)}},mounted:function(){this.loadPesagens()}},te=ee,ae=Object(y["a"])(te,Y,Z,!1,null,null,null),ne=ae.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"medic-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medico.id,expression:"medico.id"}],attrs:{id:"medico-id",type:"hidden"},domProps:{value:e.medico.id},on:{input:function(t){t.target.composing||e.$set(e.medico,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"medico-name"}},[a("b-form-input",{attrs:{id:"medico-name",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o nome do Medico a ser adicionado"},model:{value:e.medico.name,callback:function(t){e.$set(e.medico,"name",t)},expression:"medico.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Email:","label-for":"medico-email"}},[a("b-form-input",{attrs:{id:"medico-email",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o email do Medico a ser adicionado"},model:{value:e.medico.email,callback:function(t){e.$set(e.medico,"email",t)},expression:"medico.email"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"CPF:","label-for":"medico-cpf"}},[a("b-form-input",{attrs:{id:"medico-cpf",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o CPF do Medico a ser adicionado"},model:{value:e.medico.cpf,callback:function(t){e.$set(e.medico,"cpf",t)},expression:"medico.cpf"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Especialidade:","label-for":"medico-especiality"}},[a("b-form-input",{attrs:{id:"medico-especiality",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe a especialidade do Medico a ser adicionado"},model:{value:e.medico.especiality,callback:function(t){e.$set(e.medico,"especiality",t)},expression:"medico.especiality"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Senha:","label-for":"medico-password"}},[a("b-form-input",{attrs:{id:"medico-password",type:"password",readonly:"remove"===e.mode,required:"",placeholder:"Informe a senha do Medico a ser adicionado"},model:{value:e.medico.password,callback:function(t){e.$set(e.medico,"password",t)},expression:"medico.password"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Confirmação da senha:","label-for":"medico-confirmPassword"}},[a("b-form-input",{attrs:{id:"medico-confirmPassword",type:"password",readonly:"remove"===e.mode,required:"",placeholder:"Informe a confirmação da senha do Medico a ser adicionado"},model:{value:e.medico.confirmPassword,callback:function(t){e.$set(e.medico,"confirmPassword",t)},expression:"medico.confirmPassword"}})],1)],1)],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",stripped:"",items:e.medicos.data,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){e.loadMedico(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.loadMedico(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},oe=[],ie={name:"MedicAdmin",data:function(){return{mode:"save",medico:{},medicos:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"cpf",label:"CPF",sortable:!0},{key:"especiality",label:"Especialidade",sortable:!0},{key:"actions",label:"Açoes"}]}},methods:{loadMedicos:function(){var e=this,t="".concat(M,"/users");i.a.get(t).then(function(t){e.medicos=t})},reset:function(){this.mode="save",this.medico={},this.loadMedicos()},save:function(){var e=this,t=this.medico.id?"put":"post",a=this.medico.id?"/".concat(this.medico.id):"";i.a[t]("".concat(M,"/users").concat(a),this.medico).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(N)},remove:function(){var e=this,t=this.medico.id;i.a.delete("".concat(M,"/users/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(N)},loadMedico:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.medico=Object(B["a"])({},e)}},mounted:function(){this.loadMedicos()}},re=ie,ce=Object(y["a"])(re,se,oe,!1,null,null,null),le=ce.exports,de={name:"AdminPages",components:{PageTitle:P,PacientAdmin:X,PesagemAdmin:ne,MedicAdmin:le}},ue=de,me=Object(y["a"])(ue,H,z,!1,null,null,null),pe=me.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paciente-with-pesagem"},[a("PageTitle",{attrs:{icon:"fa fa-user",main:e.paciente.name,sub:"Paciente"}}),a("ul",[e._l(e.pesagens,function(e){return a("li",{key:e.id},[a("PesagemItem",{attrs:{pesagem:e}})],1)}),a("div",{staticClass:"load-more"},[e.loadMore?a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.getPesagens}},[e._v("Carregar mais pesagens")]):e._e()])],2)],1)},ge=[],ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pesagem-item"},[n("router-link",{attrs:{to:{name:"pesagembyId",params:{id:e.pesagem.id}}}},[n("div",{staticClass:"pesagem-item-image d-none d-sm-block"},[n("img",{attrs:{src:a("c54c"),height:"150",width:"150",alt:"Pesagem"}})]),n("div",{staticClass:"pesagem-item-info"},[n("h2",[n("strong",[e._v("ID da pesagem")]),e._v(" "+e._s(e.pesagem.id))]),n("p",[n("strong",[e._v("Data da pesagem ")]),e._v(" "+e._s(e.pesagem.date))]),n("p",[n("strong",[e._v("Peso medido ")]),e._v(" "+e._s(e.pesagem.weight))]),n("span",{staticClass:"pesagem-item-name"},[n("strong",[e._v("Nome: ")]),e._v(" "+e._s(e.pesagem.name)+"\n            ")])])])],1)},be=[],he={name:"PesagemItem",props:["pesagem"]},_e=he,ye=(a("4d5b"),Object(y["a"])(_e,ve,be,!1,null,null,null)),we=ye.exports,Pe={name:"PacientWithPesagem",components:{PageTitle:P,PesagemItem:we},data:function(){return{paciente:{},pesagens:[],page:1,loadMore:!0}},methods:{getPaciente:function(){var e=this,t="".concat(M,"/pacientes/").concat(this.paciente.id);i()(t).then(function(t){return e.paciente=t.data})},getPesagens:function(){var e=this,t="".concat(M,"/pacientes/").concat(this.paciente.id,"/pesagem?page=").concat(this.page);i()(t).then(function(t){e.pesagens=e.pesagens.concat(t.data),e.page++,t.data[0].id==e.pesagens[0].id&&(e.loadMore=!1),void 0===t.data[0].id&&(e.loadMore=!1)})}},mounted:function(){this.paciente.id=this.$route.params.id,this.getPaciente(),this.getPesagens()}},xe=Pe,ke=(a("e6ba"),Object(y["a"])(xe,fe,ge,!1,null,null,null)),Ce=ke.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pesagem-by-id"},[a("PageTitle",{attrs:{icon:"fa fa-user",main:e.pesagem.name,sub:e.pesagem.date}}),a("div",{staticClass:"pesagem-content",domProps:{innerHTML:e._s("Peso:  "+e.pesagem.weight+"Kg")}})],1)},Ie=[],Oe={name:"PesagembyId",components:{PageTitle:P},data:function(){return{pesagem:{}}},mounted:function(){var e=this,t="".concat(M,"/pesagem/").concat(this.$route.params.id);i.a.get(t).then(function(t){return e.pesagem=t.data})}},Se=Oe,Ee=(a("57ff"),Object(y["a"])(Se,$e,Ie,!1,null,null,null)),je=Ee.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-content"},[n("div",{staticClass:"auth-modal"},[n("img",{attrs:{src:a("cf05"),width:"200",alt:"Logo"}}),n("hr"),n("div",{staticClass:"auth-title"},[e._v(e._s(e.showSignup?"Cadastro":"Login"))]),e.showSignup?n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome:"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{name:"email",type:"text",placeholder:"E-mail:"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.showSignup?n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.cpf,expression:"user.cpf"}],attrs:{type:"text",placeholder:"CPF:"},domProps:{value:e.user.cpf},on:{input:function(t){t.target.composing||e.$set(e.user,"cpf",t.target.value)}}}):e._e(),e.showSignup?n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.especiality,expression:"user.especiality"}],attrs:{type:"text",placeholder:"Especialidade:"},domProps:{value:e.user.especiality},on:{input:function(t){t.target.composing||e.$set(e.user,"especiality",t.target.value)}}}):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{name:"password",type:"password",placeholder:"Senha:"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignup?n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",placeholder:"Confirmação da senha:"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignup?n("button",{on:{click:e.signup}},[e._v("Registrar")]):n("button",{on:{click:e.signin}},[e._v("Entrar")]),n("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignup=!e.showSignup}}},[e.showSignup?n("span",[e._v("Já tem cadastro? Acesse o Login!")]):n("span",[e._v("Não tem cadastro? Registre-se aqui!")])])])])},Ne=[],Te={name:"Auth",data:function(){return{showSignup:!1,user:{}}},methods:{signin:function(){var e=this;i.a.post("".concat(M,"/signin"),this.user).then(function(t){e.$store.commit("setUser",t.data),localStorage.setItem(j,JSON.stringify(t.data)),e.$router.push({path:"/"})}).catch(N)},signup:function(){var e=this;i.a.post("".concat(M,"/signup"),this.user).then(function(){e.$toasted.global.defaultSuccess(),e.user={},e.showSignup=!1}).catch(N)}}},Ae=Te,qe=(a("ee68"),Object(y["a"])(Ae,Me,Ne,!1,null,null,null)),Ue=qe.exports;n["default"].use(p["a"]);var De=[{name:"home",path:"/",component:R},{name:"adminPages",path:"/admin",component:pe},{name:"pacientWithPesagem",path:"/pacientes/:id/pesagens",component:Ce},{name:"pesagembyId",path:"/pesagens/:id",component:je},{name:"auth",path:"/auth",component:Ue}],Fe=new p["a"]({mode:"history",routes:De}),Le=Fe,Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{title:"Cadastro de pesagens em leito",hideToggle:!e.user,hideUserDropdown:!e.user}}),e.validatingToken?a("Loading"):e._e(),a("Content"),a("Footer")],1)},He=[],ze=(a("96cf"),a("1da1")),Je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e.hideToggle?e._e():a("a",{staticClass:"toggle",on:{click:e.toggleMenu}},[a("i",{staticClass:"fa fa-plus-square",class:e.icon})]),a("h1",{staticClass:"title"},[a("router-link",{attrs:{to:"/"}},[e._v(" "+e._s(e.title)+" ")])],1),e.hideUserDropdown?e._e():a("UserDropdown")],1)},Ve=[],Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-dropdown"},[a("div",{staticClass:"user-button"},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"user-dropdown-img"},[a("Gravatar",{attrs:{email:e.user.email,alt:"User"}})],1),a("i",{staticClass:"fa fa-angle-down"})]),a("div",{staticClass:"user-dropdown-content"},[a("router-link",{attrs:{to:"/admin"}},[a("i",{staticClass:"fa fa-plus"}),e._v("Cadastro")]),a("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("i",{staticClass:"fa fa-sign-out"}),e._v(" Sair ")])],1)])},Ge=[],We=a("e06a"),Ke=a.n(We),Qe={name:"UserDropdown",components:{Gravatar:Ke.a},computed:Object(s["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(j),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},Xe=Qe,Ye=(a("a09f"),Object(y["a"])(Xe,Be,Ge,!1,null,null,null)),Ze=Ye.exports,et={name:"Header",components:{UserDropdown:Ze},props:{title:String,hideToggle:Boolean,hideUserDropdown:Boolean},methods:{toggleMenu:function(){}}},tt=et,at=(a("9f34"),Object(y["a"])(tt,Je,Ve,!1,null,null,null)),nt=at.exports,st=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"})},ot=[],it={name:"Register"},rt=it,ct=(a("dc9d"),Object(y["a"])(rt,st,ot,!1,null,null,null)),lt=ct.exports,dt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("router-view")],1)},ut=[],mt={name:"Content"},pt=mt,ft=(a("9551"),Object(y["a"])(pt,dt,ut,!1,null,null,null)),gt=ft.exports,vt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},bt=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",[e._v("Copyright   "),a("strong",[e._v(" Arthur Cardozo ")]),e._v(" 2020")])])}],ht={name:"Footer"},_t=ht,yt=(a("2175"),Object(y["a"])(_t,vt,bt,!1,null,null,null)),wt=yt.exports,Pt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},xt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("cf1c"),alt:"Loading"}})])}],kt={name:"Loading"},Ct=kt,$t=(a("2dd6"),Object(y["a"])(Ct,Pt,xt,!1,null,null,null)),It=$t.exports,Ot={name:"App",components:{Header:nt,Register:lt,Content:gt,Footer:wt,Loading:It},computed:Object(s["b"])(["user"]),data:function(){return{validatingToken:!0}},methods:{validateToken:function(){var e=Object(ze["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.validatingToken=!0,t=localStorage.getItem(j),a=JSON.parse(t),this.$store.commit("setUser",null),a){e.next=8;break}return this.validatingToken=!1,this.$router.push({name:"auth"}),e.abrupt("return");case 8:return e.next=10,i.a.post("".concat(M,"/validateToken"),a);case 10:n=e.sent,n.data?this.$store.commit("setUser",a):(localStorage.removeItem(j),this.$router.push({name:"auth"})),this.validatingToken=!1;case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.validateToken()}},St=Ot,Et=(a("034f"),Object(y["a"])(St,Re,He,!1,null,null,null)),jt=Et.exports;n["default"].config.productionTip=!1,new n["default"]({store:r,router:Le,render:function(e){return e(jt)}}).$mount("#app")},"57ff":function(e,t,a){"use strict";var n=a("6ebc"),s=a.n(n);s.a},"6ebc":function(e,t,a){},"6eda":function(e,t,a){},"809a":function(e,t,a){},"8bd2":function(e,t,a){},9551:function(e,t,a){"use strict";var n=a("6eda"),s=a.n(n);s.a},"9c8f":function(e,t,a){},"9f20":function(e,t,a){},"9f34":function(e,t,a){"use strict";var n=a("08f2"),s=a.n(n);s.a},a09f:function(e,t,a){"use strict";var n=a("52d3"),s=a.n(n);s.a},a405:function(e,t,a){"use strict";var n=a("dda0"),s=a.n(n);s.a},bd70:function(e,t,a){},c21b:function(e,t,a){},c54c:function(e,t,a){e.exports=a.p+"img/article.ceb5521b.png"},cc86:function(e,t,a){"use strict";var n=a("9c8f"),s=a.n(n);s.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.e93146c9.png"},cf1c:function(e,t,a){e.exports=a.p+"img/loading.8a7630ca.gif"},dc9d:function(e,t,a){"use strict";var n=a("1741"),s=a.n(n);s.a},dda0:function(e,t,a){},e6ba:function(e,t,a){"use strict";var n=a("8bd2"),s=a.n(n);s.a},ee68:function(e,t,a){"use strict";var n=a("9f20"),s=a.n(n);s.a},f587:function(e,t,a){}});
//# sourceMappingURL=app.de5703b3.js.map