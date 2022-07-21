"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[52585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),d=n,y=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?i.createElement(y,a(a({ref:t},l),{},{components:r})):i.createElement(y,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={},a="splitStore",p={unversionedId:"dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/splitsstore",id:"dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/splitsstore",title:"splitStore",description:"Contract: JBETHERC20SplitsPayer",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/splitsstore.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20splitspayer/properties",slug:"/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/splitsstore",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/splitsstore",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/splitsstore.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"defaultSplitsProjectId",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsprojectid"},next:{title:"supportsInterface",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/read/supportsinterface"}},s={},c=[{value:"Definition",id:"definition",level:4}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"splitstore"},"splitStore"),(0,n.kt)("p",null,"Contract: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,n.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))),(0,n.kt)("p",null,"Interface: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbsplitspayer"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBSplitsPayer"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The contract that stores splits for each project.")),(0,n.kt)("h4",{id:"definition"},"Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The contract that stores splits for each project.\n*/\nIJBSplitsStore public immutable override splitsStore;\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,n.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbsplitspayer"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBSplitsPayer"))," interface.")))}u.isMDXComponent=!0}}]);