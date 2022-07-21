"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[92931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},15008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i="JBProjectMetadata",c={unversionedId:"dev/api/data-structures/jbprojectmetadata",id:"dev/api/data-structures/jbprojectmetadata",title:"JBProjectMetadata",description:"Code",source:"@site/docs/dev/api/data-structures/jbprojectmetadata.md",sourceDirName:"dev/api/data-structures",slug:"/dev/api/data-structures/jbprojectmetadata",permalink:"/dev/api/data-structures/jbprojectmetadata",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/data-structures/jbprojectmetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"JBPayParamsData",permalink:"/dev/api/data-structures/jbpayparamsdata"},next:{title:"JBRedeemParamsData",permalink:"/dev/api/data-structures/jbredeemparamsdata"}},p={},s=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jbprojectmetadata"},"JBProjectMetadata"),(0,n.kt)("h4",{id:"code"},"Code"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/structs/JBPayParamsData.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/structs/JBPayParamsData.sol")),(0,n.kt)("h4",{id:"definition"},"Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/** \n  @member content The metadata content.\n  @member domain The domain within which the metadata applies.\n*/\nstruct JBProjectMetadata {\n  string content;\n  uint256 domain;\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"content")," is the metadata content."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domain")," is the domain within which the metadata applies.")))}u.isMDXComponent=!0}}]);