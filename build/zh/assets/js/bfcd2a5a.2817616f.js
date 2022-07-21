"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[74320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={},i="SetIsAllowedToSetFirstController",a={unversionedId:"dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller",id:"dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller",title:"SetIsAllowedToSetFirstController",description:"Emitted from:",source:"@site/docs/dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller.md",sourceDirName:"dev/api/contracts/jbdirectory/events",slug:"/dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller",permalink:"/zh/dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"SetController",permalink:"/zh/dev/api/contracts/jbdirectory/events/setcontroller"},next:{title:"SetPrimaryTerminal",permalink:"/zh/dev/api/contracts/jbdirectory/events/setprimaryterminal"}},s={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setisallowedtosetfirstcontroller"},"SetIsAllowedToSetFirstController"),(0,o.kt)("p",null,"Emitted from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/write/setisallowedtosetfirstcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"setIsAllowedToSetFirstController")))),(0,o.kt)("p",null,"Definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addr")," is the address of the contract that is being given or revoked allowance to set projects' first controllers on their behalf. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flag")," is the value that was set, either ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"caller")," is the address that issued the transaction within which the event was emitted.")))}p.isMDXComponent=!0}}]);