import{B as p,a as m}from"./index-41813344.js";import{B as c}from"./BasicForm-d9f43302.js";import"./componentMap-2d64ebeb.js";import{u as l}from"./useForm-76f4a81e.js";import"./RadioButtonGroup-c7d88104.js";import{d as f,a7 as s,Z as d,a8 as u,a9 as B,$ as _,l as g,ac as w}from"./vue-ea98dac5.js";import{_ as F}from"./index.js";import"./antd-51a19206.js";import"./FormItem.vue_vue_type_script_lang-33840c02.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-d01c3888.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";const a=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}],h=f({components:{BasicDrawer:p,BasicForm:c},setup(){const[o,{setFieldsValue:r}]=l({labelWidth:120,schemas:a,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=m(e=>{r({field2:e.data,field1:e.info})});return{register:t,schemas:a,registerForm:o}}});function D(o,r,t,e,$,C){const i=s("BasicForm"),n=s("BasicDrawer");return d(),u(n,w(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:B(()=>[_("div",null,[g(i,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}const E=F(h,[["render",D]]);export{E as default};
