"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[98795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,v=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(v,c(c({ref:t},d),{},{components:r})):n.createElement(v,c({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},c="SetContractUri",i={unversionedId:"dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setcontracturi",id:"dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setcontracturi",title:"SetContractUri",description:"Emitted from:",source:"@site/docs/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setcontracturi.md",sourceDirName:"dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events",slug:"/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setcontracturi",permalink:"/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setcontracturi",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setcontracturi.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"SetBaseUri",permalink:"/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/setbaseuri"},next:{title:"SetTokenUriResolver",permalink:"/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/events/settokenuriresolver"}},s={},l=[{value:"Definition",id:"definition",level:4}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setcontracturi"},"SetContractUri"),(0,a.kt)("p",null,"Emitted from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-delegates/or-abstract/jbnftrewarddelegate/write/setcontracturi"},(0,a.kt)("inlineCode",{parentName:"a"},"setContractUri")))),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event SetContractUri(string indexed contractUri, address caller);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contractUri")," is the contract metadata uri."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"caller")," is the address that issued the transaction within which the event was emitted.")))}p.isMDXComponent=!0}}]);