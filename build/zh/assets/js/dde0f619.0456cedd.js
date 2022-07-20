"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[9983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},p="_packedsplitParts2Of",o={unversionedId:"dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts2of",id:"dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts2of",title:"_packedsplitParts2Of",description:"Contract: JBSplitsStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts2of.md",sourceDirName:"dev/api/contracts/jbsplitsstore/properties",slug:"/dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts2of",permalink:"/zh/dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts2of",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts2of.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_packedsplitParts1Of",permalink:"/zh/dev/api/contracts/jbsplitsstore/properties/-_packedsplitparts1of"},next:{title:"_splitCountOf",permalink:"/zh/dev/api/contracts/jbsplitsstore/properties/-_splitcountof"}},s={},c=[{value:"Definition",id:"definition",level:4}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"_packedsplitparts2of"},"_packedsplitParts2Of"),(0,i.kt)("p",null,"Contract: ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbsplitsstore/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsStore")),"\u200b\u200c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More packed data of splits for each project ID's configurations.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This packed data is often 0.")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/** \n  @notice\n  More packed data of splits for each project ID's configurations.\n\n  @dev\n  This packed data is often 0.\n\n  _projectId The ID of the project to get packed splits data for.\n  _domain An identifier within which the returned splits should be considered active.\n  _group The identifying group of the splits.\n  _index The indexed order that the split was set at.\n*/\nmapping(uint256 => mapping(uint256 => mapping(uint256 => mapping(uint256 => uint256))))\n  private _packedSplitParts2Of;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get packed splits data for."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_domain")," is an identifier within which the returned splits should be considered active."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_group")," is the identifying group of the splits."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_index")," is the indexed order that the split was set at."))),(0,i.kt)("li",{parentName:"ul"},"Returns packed split data."),(0,i.kt)("li",{parentName:"ul"},"The resulting view function is private to this contract.")))}d.isMDXComponent=!0}}]);