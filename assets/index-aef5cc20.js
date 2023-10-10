var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ee=(e,o,a)=>o in e?me(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,b=(e,o)=>{for(var a in o||(o={}))Ce.call(o,a)&&ee(e,a,o[a]);if(x)for(var a of x(o))Me.call(o,a)&&ee(e,a,o[a]);return e},E=(e,o)=>he(e,ye(o));var A=(e,o,a)=>new Promise((i,l)=>{var c=d=>{try{n(a.next(d))}catch(u){l(u)}},t=d=>{try{n(a.throw(d))}catch(u){l(u)}},n=d=>d.done?i(d.value):Promise.resolve(d.value).then(c,t);n((a=a.apply(e,o)).next())});import{k as se,G as be,v as He,a5 as ve,K as Se,z as ke,a1 as Fe,a6 as $e,_ as j,f as re,a7 as Be,m as ie,c as Oe,y as Pe,V as ce,t as Te,w as we}from"./index.js";import{h as z,u as s,d as N,G as Ne,l as H,i as Re,f as g,c as v,w as ue,o as De,b as de,x as B,a7 as y,q as We,Z as C,a8 as P,a9 as m,n as Ee,_ as q,af as _e,N as O,F as je,ab as Y,a1 as Le,E as G,a0 as U,ac as _,g as Z,y as Ie,ad as te,aa as ne,ai as oe,aj as le,r as pe,H as V}from"./vue-ea98dac5.js";import{M as Ae,T as Ve,aw as qe,ax as ze,ay as Xe,o as X,b as Ye}from"./antd-51a19206.js";import{u as Ge}from"./useWindowSizeFn-997fa1d0.js";const{t:ae}=se(),Ue={open:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ae("common.cancelText")},okText:{type:String,default:ae("common.okText")},closeFunc:Function},J=Object.assign({},Ue,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},open:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ke(e){const o=(l,c)=>getComputedStyle(l)[c],a=l=>{if(!l)return;l.setAttribute("data-drag",s(e.draggable));const c=l.querySelector(".ant-modal-header"),t=l.querySelector(".ant-modal");!c||!t||!s(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const d=n.clientX,u=n.clientY,p=document.body.clientWidth,f=document.documentElement.clientHeight,h=t.offsetWidth,M=t.offsetHeight,S=t.offsetLeft,k=p-t.offsetLeft-h,$=t.offsetTop,L=f-t.offsetTop-M,T=o(t,"left"),R=o(t,"top");let D=+T,W=+R;T.includes("%")?(D=+document.body.clientWidth*(+T.replace(/%/g,"")/100),W=+document.body.clientHeight*(+R.replace(/%/g,"")/100)):(D=+T.replace(/px/g,""),W=+R.replace(/px/g,"")),document.onmousemove=function(I){let r=I.clientX-d,F=I.clientY-u;-r>S?r=-S:r>k&&(r=k),-F>$?F=-$:F>L&&(F=L),t.style.cssText+=`;left:${r+D}px;top:${F+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const l=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(l)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||s(e.destroyOnClose))&&a(c)}};z(()=>{!s(e.open)||!s(e.draggable)||be(()=>{i()},30)})}function Ze(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Re(e)}const Je=N({name:"Modal",inheritAttrs:!1,props:J,emits:["cancel"],setup(e,{slots:o,emit:a}){const{open:i,draggable:l,destroyOnClose:c}=Ne(e),t=He();Ke({open:i,destroyOnClose:c,draggable:l});const n=d=>{a("cancel",d)};return()=>{let d;const u=E(b(b({},s(t)),e),{onCancel:n});return H(Ae,u,Ze(d=ve(o))?d:{default:()=>[d]})}}}),fe=Symbol();function Qe(e){return ke(e,fe)}function vt(){return Se(fe)}const xe={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},open:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},et=N({name:"ModalWrapper",components:{ScrollContainer:Fe},inheritAttrs:!1,props:xe,emits:["height-change","ext-height"],setup(e,{emit:o}){const a=g(null),i=g(null),l=g(0),c=g(0),t=g(0);Ge(u.bind(null)),$e(i,()=>{u()},{attributes:!0,subtree:!0}),Qe({redoModalHeight:u});const n=v(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(l)}px`}));z(()=>{e.useWrapper&&u()}),ue(()=>e.fullScreen,p=>{u(),p?c.value=l.value:l.value=c.value}),De(()=>{const{modalHeaderHeight:p,modalFooterHeight:f}=e;o("ext-height",p+f)}),de(()=>{});function d(){return A(this,null,function*(){B(()=>{var f;const p=s(a);p&&((f=p==null?void 0:p.scrollTo)==null||f.call(p,0))})})}function u(){return A(this,null,function*(){if(!e.open)return;const p=s(a);if(!p)return;const f=p.$el.parentElement;if(f){f.style.padding="0",yield B();try{const h=f.parentElement&&f.parentElement.parentElement;if(!h)return;const M=getComputedStyle(h).top,S=Number.parseInt(M);let k=window.innerHeight-S*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;S<40&&(k-=26),yield B();const $=s(i);if(!$)return;yield B(),t.value=$.scrollHeight,e.fullScreen?l.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:l.value=e.height?e.height:t.value>k?k:t.value,o("height-change",s(l))}catch(h){}}})}return{wrapperRef:a,spinRef:i,spinStyle:n,scrollTop:d,setModalHeight:u,realHeight:t}}}),tt=["loading-tip"];function nt(e,o,a,i,l,c){const t=y("ScrollContainer"),n=We("loading");return C(),P(t,{ref:"wrapperRef",scrollHeight:e.realHeight},{default:m(()=>[Ee((C(),q("div",{ref:"spinRef",style:_e(e.spinStyle),"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,tt)),[[n,e.loading]])]),_:3},8,["scrollHeight"])}const ot=j(et,[["render",nt]]),lt=N({name:"ModalClose",components:{Tooltip:Ve,FullscreenExitOutlined:qe,FullscreenOutlined:ze,CloseOutlined:Xe},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:a}=re("basic-modal-close"),{t:i}=se(),l=v(()=>[a,`${a}--custom`,{[`${a}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:l,prefixCls:a,handleCancel:c,handleFullScreen:t}}});function at(e,o,a,i,l,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),d=y("FullscreenOutlined"),u=y("CloseOutlined");return C(),q("div",{class:Le(e.getClass)},[e.canFullscreen?(C(),q(je,{key:0},[e.fullScreen?(C(),P(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:m(()=>[H(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(C(),P(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:m(()=>[H(d,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):Y("",!0),H(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:m(()=>[H(u,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}const st=j(lt,[["render",at]]),rt=N({name:"BasicModalFooter",props:J,emits:["ok","cancel"],setup(e,{emit:o}){function a(l){o("ok",l)}function i(l){o("cancel",l)}return{handleOk:a,handleCancel:i}}});function it(e,o,a,i,l,c){const t=y("a-button");return C(),q("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(C(),P(t,_({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:m(()=>[G(U(e.cancelText),1)]),_:1},16,["onClick"])):Y("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(C(),P(t,_({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:m(()=>[G(U(e.okText),1)]),_:1},16,["type","onClick","loading"])):Y("",!0),O(e.$slots,"appendFooter")])}const ct=j(rt,[["render",it]]),ut=N({name:"BasicModalHeader",components:{BasicTitle:Be},props:{helpMessage:{type:[String,Array]},title:{type:String}}});function dt(e,o,a,i,l,c){const t=y("BasicTitle");return C(),P(t,{helpMessage:e.helpMessage},{default:m(()=>[G(U(e.title),1)]),_:1},8,["helpMessage"])}const pt=j(ut,[["render",dt]]);function ft(e){const o=g(!1),a=v(()=>{const l=s(e.wrapClassName)||"";return s(o)?`fullscreen-modal ${l} `:s(l)});function i(l){l&&l.stopPropagation(),o.value=!s(o)}return{getWrapClassName:a,handleFullScreen:i,fullScreenRef:o}}const gt=N({name:"BasicModal",components:{Modal:Je,ModalWrapper:ot,ModalClose:st,ModalFooter:ct,ModalHeader:pt},inheritAttrs:!1,props:J,emits:["open-change","height-change","cancel","ok","register","update:open"],setup(e,{emit:o,attrs:a}){const i=g(!1),l=g(null),c=g(null),{prefixCls:t}=re("basic-modal"),n=g(0),d={setModalProps:T,emitOpen:void 0,redoModalHeight:()=>{B(()=>{s(c)&&s(c).setModalHeight()})}},u=Z();u&&o("register",d,u.uid);const p=v(()=>b(b({},e),s(l))),{handleFullScreen:f,getWrapClassName:h,fullScreenRef:M}=ft({modalWrapperRef:c,extHeightRef:n,wrapClassName:Ie(p.value,"wrapClassName")}),S=v(()=>{const r=E(b({},s(p)),{open:s(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return E(b({},r),{wrapClassName:s(h)})}),k=v(()=>{const r=E(b(b({},a),s(p)),{open:s(i)});return r.wrapClassName=`${(r==null?void 0:r.wrapClassName)||""} ${s(h)}vben-basic-modal-wrap`,s(M)?X(r,["height","title"]):X(r,"title")}),$=v(()=>{if(!s(M))return s(S).height});z(()=>{i.value=!!e.open,M.value=!!e.defaultFullscreen}),ue(()=>s(i),r=>{o("open-change",r),o("update:open",r),B(()=>{e.scrollTop&&r&&s(c)&&s(c).scrollTop()})},{immediate:!1});function L(r){return A(this,null,function*(){var F,Q;if(r==null||r.stopPropagation(),!((Q=(F=r.target)==null?void 0:F.classList)!=null&&Q.contains(t+"-close--custom"))){if(e.closeFunc&&ie(e.closeFunc)){const ge=yield e.closeFunc();i.value=!ge;return}i.value=!1,o("cancel",r)}})}function T(r){l.value=Oe(s(l)||{},r),Reflect.has(r,"open")&&(i.value=!!r.open),Reflect.has(r,"defaultFullscreen")&&(M.value=!!r.defaultFullscreen)}function R(r){o("ok",r)}function D(r){o("height-change",r)}function W(r){n.value=r}function I(r){e.canFullscreen&&(r.stopPropagation(),f(r))}return{handleCancel:L,getBindValue:k,getProps:S,handleFullScreen:f,fullScreenRef:M,getMergeProps:p,handleOk:R,openRef:i,omit:X,modalWrapperRef:c,handleExtHeight:W,handleHeightChange:D,handleTitleDbClick:I,getWrapperHeight:$}}});function mt(e,o,a,i,l,c){const t=y("ModalClose"),n=y("ModalHeader"),d=y("ModalFooter"),u=y("ModalWrapper"),p=y("Modal");return C(),P(p,_(e.getBindValue,{onCancel:e.handleCancel}),te({default:m(()=>[H(u,_({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,open:e.openRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"open","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:m(()=>[O(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","open","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:m(()=>[H(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]),key:"0"},e.$slots.title?void 0:{name:"title",fn:m(()=>[H(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]),key:"1"},e.$slots.footer?void 0:{name:"footer",fn:m(()=>[H(d,_(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),te({_:2},[ne(Object.keys(e.$slots),f=>({name:f,fn:m(h=>[O(e.$slots,f,oe(le(h||{})))])}))]),1040,["onOk","onCancel"])]),key:"2"},ne(Object.keys(e.omit(e.$slots,"default")),f=>({name:f,fn:m(h=>[O(e.$slots,f,oe(le(h||{})))])}))]),1040,["onCancel"])}const ht=j(gt,[["render",mt]]),w=pe({}),K=pe({});function St(){const e=g(null),o=g(!1),a=g(0);function i(t,n){if(!Z())throw new Error("useModal() can only be used inside setup() or functional components!");a.value=n,de(()=>{e.value=null,o.value=!1,w[String(s(a))]=null}),!(s(o)&&Pe()&&t===s(e))&&(e.value=t,o.value=!0,t.emitOpen=(d,u)=>{K[u]=d})}const l=()=>{const t=s(e);return t||ce("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},getOpen:v(()=>K[~~s(a)]),redoModalHeight:()=>{var t,n;(n=(t=l())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,d=!0)=>{var f;if((f=l())==null||f.setModalProps({open:t}),!n)return;const u=s(a);if(d){w[u]=null,w[u]=V(n);return}Ye(V(w[u]),V(n))||(w[u]=V(n))},closeModal:()=>{var t;(t=l())==null||t.setModalProps({open:!1})}};return[i,c]}const kt=e=>{const o=g(null),a=Z(),i=g(0),l=()=>{const t=s(o);return t||ce("useModalInner instance is undefined!"),t},c=(t,n)=>{Te(()=>{o.value=null}),i.value=n,o.value=t,a==null||a.emit("register",t,n)};return z(()=>{const t=w[s(i)];t&&(!e||!ie(e)||B(()=>{e(t)}))}),[c,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({loading:t})},getOpen:v(()=>K[~~s(i)]),changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=l())==null||t.setModalProps({open:!1})},setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=l())==null?void 0:n.redoModalHeight;t&&t()}}]},Ft=we(ht);export{Ft as B,kt as a,St as b,vt as u};
