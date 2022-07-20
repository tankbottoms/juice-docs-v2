"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[54655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),u=n,k=f["".concat(i,".").concat(u)]||f[u]||d[u]||c;return r?o.createElement(k,a(a({ref:t},s),{},{components:r})):o.createElement(k,a({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<c;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const c={},a="_processedTokenTrackerOf",l={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof",id:"dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof",title:"_processedTokenTrackerOf",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/properties",slug:"/dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_packedOverflowAllowanceDataOf",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/properties/-_packedoverflowallowancedataof"},next:{title:"directory",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/properties/directory"}},i={},p=[{value:"Definition",id:"definition",level:4}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"_processedtokentrackerof"},"_processedTokenTrackerOf"),(0,n.kt)("p",null,"Contract: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/"},(0,n.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The difference between the processed token tracker of a project and the project's token's total supply is the amount of tokens that still need to have reserves minted against them.")),(0,n.kt)("h4",{id:"definition"},"Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The difference between the processed token tracker of a project and the project's token's total supply is the amount of tokens that still need to have reserves minted against them.\n\n  _projectId The ID of the project to get the tracker of.\n*/\nmapping(uint256 => int256) internal _processedTokenTrackerOf;\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the tracker of."))),(0,n.kt)("li",{parentName:"ul"},"The resulting function is internal to this contract and its inheriters.")))}d.isMDXComponent=!0}}]);