"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[32598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="fundingCycleStore",c={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore",title:"fundingCycleStore",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"directory",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/directory"},next:{title:"prices",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/prices"}},l={},p=[{value:"Definition",id:"definition",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fundingcyclestore"},"fundingCycleStore"),(0,i.kt)("p",null,"Contract: ",(0,i.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,i.kt)("p",null,"Interface: ",(0,i.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,i.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The contract storing all funding cycle configurations.")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/** \n  @notice \n  The contract storing all funding cycle configurations.\n*/\nIJBFundingCycleStore public immutable override fundingCycleStore;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once set the value cannot be changed."),(0,i.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,i.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,i.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface.")))}u.isMDXComponent=!0}}]);