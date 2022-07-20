"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[49419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(a,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={},c="splitsStore",i={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore",id:"dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore",title:"splitsStore",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/properties",slug:"/dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"projects",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/projects"},next:{title:"tokenStore",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/tokenstore"}},a={},s=[{value:"Definition",id:"definition",level:4}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"splitsstore"},"splitsStore"),(0,o.kt)("p",null,"Contract: ",(0,o.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-controllers/jbcontroller/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,o.kt)("p",null,"Interface: ",(0,o.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBController"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The contract that stores splits for each project.")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/** \n  @notice \n  The contract that stores splits for each project.\n*/\nIJBSplitsStore public immutable splitsStore;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once set the value cannot be changed."),(0,o.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,o.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface.")))}u.isMDXComponent=!0}}]);