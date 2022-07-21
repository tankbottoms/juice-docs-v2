"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[52317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),b=a,d=f["".concat(p,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="IJBOperatable",c={unversionedId:"dev/api/interfaces/ijboperatable",id:"dev/api/interfaces/ijboperatable",title:"IJBOperatable",description:"Code",source:"@site/docs/dev/api/interfaces/ijboperatable.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijboperatable",permalink:"/zh/dev/api/interfaces/ijboperatable",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijboperatable.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBNFTRewardDelegate",permalink:"/zh/dev/api/interfaces/ijbnftrewarddelegate"},next:{title:"IJBOperatorStore",permalink:"/zh/dev/api/interfaces/ijboperatorstore"}},p={},l=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ijboperatable"},"IJBOperatable"),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBOperatable.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBOperatable.sol")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface IJBOperatable {\n  function operatorStore() external view returns (IJBOperatorStore);\n}\n")))}u.isMDXComponent=!0}}]);