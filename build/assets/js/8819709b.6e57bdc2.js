"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[87143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||s[f]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="JBGlobalFundingCycleMetadata",o={unversionedId:"dev/api/data-structures/jbglobalfundingcyclemetadata",id:"dev/api/data-structures/jbglobalfundingcyclemetadata",title:"JBGlobalFundingCycleMetadata",description:"Code",source:"@site/docs/dev/api/data-structures/jbglobalfundingcyclemetadata.md",sourceDirName:"dev/api/data-structures",slug:"/dev/api/data-structures/jbglobalfundingcyclemetadata",permalink:"/dev/api/data-structures/jbglobalfundingcyclemetadata",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/data-structures/jbglobalfundingcyclemetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"JBFundingCycleMetadata",permalink:"/dev/api/data-structures/jbfundingcyclemetadata"},next:{title:"JBGroupedSplits",permalink:"/dev/api/data-structures/jbgroupedsplits"}},c={},d=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jbglobalfundingcyclemetadata"},"JBGlobalFundingCycleMetadata"),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/structs/JBGlobalFundingCycleMetadata.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/structs/JBGlobalFundingCycleMetadata.sol")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/** \n  @member allowSetTerminals A flag indicating if setting terminals should be allowed during this funding cycle.\n  @member allowSetController A flag indicating if setting a new controller should be allowed during this funding cycle.\n*/\nstruct JBGlobalFundingCycleMetadata {\n  bool allowSetTerminals;\n  bool allowSetController;\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowSetTerminals")," is a flag indicating if setting terminals should be allowed during this funding cycle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowSetController")," is a flag indicating if setting a new controller should be allowed during this funding cycle.")))}s.isMDXComponent=!0}}]);