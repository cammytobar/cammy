import{B as h}from"./BasicTable-aa8a3b07.js";import{T as C}from"./componentMap-2d64ebeb.js";import"./TableImg.vue_vue_type_style_index_0_lang-e5b7f8ea.js";import{u as w}from"./useTable-3dd5dd57.js";import{d as _,a7 as d,Z as c,_ as T,l as u,a9 as f,a8 as B,ab as E,E as N}from"./vue-ea98dac5.js";import{_ as g}from"./index.js";import"./useFormItem-d01c3888.js";import"./antd-51a19206.js";import"./RadioButtonGroup-c7d88104.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";import"./BasicForm-d9f43302.js";import"./FormItem.vue_vue_type_script_lang-33840c02.js";import"./useForm-76f4a81e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const x=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],y=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],A=_({components:{BasicTable:h,TableAction:C},setup(){const[n,{getDataSource:o}]=w({columns:x,showIndexColumn:!1,dataSource:y,actionColumn:{width:160,title:"操作",dataIndex:"action"},scroll:{y:"100%"},pagination:!1});function i(t){var e;(e=t.onEdit)==null||e.call(t,!0)}function p(t){var e;if((e=t.onEdit)==null||e.call(t,!1),t.isNew){const a=o(),b=a.findIndex(k=>k.key===t.key);a.splice(b,1)}}function m(t){var e;(e=t.onEdit)==null||e.call(t,!1,!0)}function r(t){}function l(){const t=o(),e={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(e)}function s(t,e){return t.editable?[{label:"保存",onClick:m.bind(null,t,e)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:p.bind(null,t,e)}}]:[{label:"编辑",onClick:i.bind(null,t)},{label:"删除"}]}return{registerTable:n,handleEdit:i,createActions:s,handleAdd:l,getDataSource:o,handleEditChange:r}}});function I(n,o,i,p,m,r){const l=d("TableAction"),s=d("BasicTable"),t=d("a-button");return c(),T("div",null,[u(s,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{bodyCell:f(({column:e,record:a})=>[e.key==="action"?(c(),B(l,{key:0,actions:n.createActions(a,e)},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:f(()=>[N(" 新增成员 ")]),_:1},8,["onClick"])])}const X=g(A,[["render",I]]);export{X as default};
