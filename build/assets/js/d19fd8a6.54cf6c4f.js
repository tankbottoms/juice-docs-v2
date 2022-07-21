"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[75940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="decimals",l={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals",title:"decimals",description:"Contract: JBSingleTokenPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"decimals",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/currency"},next:{title:"token",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/token"}},c={},p=[{value:"Definition",id:"definition",level:4}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decimals"},"decimals"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminal")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsingletokenpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminal"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The number of decimals the token fixed point amounts are expected to have.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The number of decimals the token fixed point amounts are expected to have.\n*/\nuint256 public immutable override decimals;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once set the value cannot be changed."),(0,a.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsingletokenpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminal"))," interface.")))}m.isMDXComponent=!0}}]);