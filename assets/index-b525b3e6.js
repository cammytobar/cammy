var r=(_,a,t)=>new Promise((c,o)=>{var i=e=>{try{n(t.next(e))}catch(s){o(s)}},l=e=>{try{n(t.throw(e))}catch(s){o(s)}},n=e=>e.done?c(e.value):Promise.resolve(e.value).then(i,l);n((t=t.apply(_,a)).next())});import{aR as p}from"./index.js";import{d,a7 as m,Z as u,_ as x,l as f,a9 as y,E as h,$ as k}from"./vue-ea98dac5.js";import"./antd-51a19206.js";const C={class:"request-box"},v=k("p",null,"打开浏览器的network面板，可以看到发出了六次请求",-1),V=d({__name:"index",setup(_){const a=()=>r(this,null,function*(){yield p()});return(t,c)=>{const o=m("a-button");return u(),x("div",C,[f(o,{onClick:a,type:"primary"},{default:y(()=>[h(" 点击会重新发起请求5次 ")]),_:1}),v])}}});export{V as default};
