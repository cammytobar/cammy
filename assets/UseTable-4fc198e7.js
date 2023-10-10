import{B as L}from"./BasicTable-aa8a3b07.js";import"./componentMap-2d64ebeb.js";import"./TableImg.vue_vue_type_style_index_0_lang-e5b7f8ea.js";import{u as K}from"./useTable-3dd5dd57.js";import{getBasicColumns as m,getBasicShortColumns as P}from"./tableData-ce68c0e4.js";import{b as $,_ as v}from"./index.js";import{d as A}from"./table-9286518d.js";import{d as I,a7 as f,Z as M,_ as N,$ as C,l as t,a9 as n,E as a}from"./vue-ea98dac5.js";import"./useFormItem-d01c3888.js";import"./antd-51a19206.js";import"./RadioButtonGroup-c7d88104.js";import"./index-aef5cc20.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-14a28206.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-ee339f8c.js";import"./copyTextToClipboard-fb9a7abc.js";import"./index-76898778.js";import"./BasicForm-d9f43302.js";import"./FormItem.vue_vue_type_script_lang-33840c02.js";import"./useForm-76f4a81e.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const V=I({components:{BasicTable:L},setup(){const{createMessage:e}=$();function i(){}const[u,{setLoading:s,setProps:l,getColumns:d,getDataSource:o,getRawDataSource:c,reload:r,getPaginationRef:j,setPagination:p,getSelectRows:q,getSelectRowKeys:G,setSelectedRowKeys:g,clearSelectedRowKeys:k}]=K({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:A,columns:m(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:i,rowSelection:{type:"checkbox"},onColumnsChange:J=>{}});function b(){s(!0),setTimeout(()=>{s(!1)},1e3)}function w(){l({columns:P(),rowSelection:{type:"checkbox"},showIndexColumn:!0})}function S(){l({columns:m(),rowSelection:{type:"checkbox"},showIndexColumn:!0}),r({page:1})}function _(){e.info("请在控制台查看！")}function B(){e.info("请在控制台查看！")}function h(){e.info("请在控制台查看！")}function D(){e.info("请在控制台查看！")}function T(){p({current:2}),r()}function R(){e.info("请在控制台查看！")}function E(){e.info("请在控制台查看！")}function y(){g(["0","1","2"])}function F(){k()}return{registerTable:u,changeLoading:b,changeColumns:w,reloadTable:S,getColumn:_,getTableData:B,getTableRawData:h,getPagination:D,setPaginationInfo:T,getSelectRowList:R,getSelectRowKeyList:E,setSelectedRowKeyList:y,clearSelect:F,onChange:i}}}),z={class:"p-4"},H={class:"mb-4"},U={class:"mb-4"};function Z(e,i,u,s,l,d){const o=f("a-button"),c=f("BasicTable");return M(),N("div",z,[C("div",H,[t(o,{class:"mr-2",onClick:e.reloadTable},{default:n(()=>[a(" 还原 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeLoading},{default:n(()=>[a(" 开启loading ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeColumns},{default:n(()=>[a(" 更改Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getColumn},{default:n(()=>[a(" 获取Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableData},{default:n(()=>[a(" 获取表格数据 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableRawData},{default:n(()=>[a(" 获取接口原始数据 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setPaginationInfo},{default:n(()=>[a(" 跳转到第2页 ")]),_:1},8,["onClick"])]),C("div",U,[t(o,{class:"mr-2",onClick:e.getSelectRowList},{default:n(()=>[a(" 获取选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:n(()=>[a(" 获取选中行Key ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:n(()=>[a(" 设置选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.clearSelect},{default:n(()=>[a(" 清空选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getPagination},{default:n(()=>[a(" 获取分页信息 ")]),_:1},8,["onClick"])]),t(c,{onRegister:e.registerTable},null,8,["onRegister"])])}const Se=v(V,[["render",Z]]);export{Se as default};
