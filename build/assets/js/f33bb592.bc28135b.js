"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[51008],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15423:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const c={},l="projects",a={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/properties/projects",id:"dev/api/contracts/or-controllers/jbcontroller/properties/projects",title:"projects",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/properties/projects.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/properties",slug:"/dev/api/contracts/or-controllers/jbcontroller/properties/projects",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/projects",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/properties/projects.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"fundingCycleStore",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/fundingcyclestore"},next:{title:"splitsStore",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/splitsstore"}},i={},p=[{value:"Definition",id:"definition",level:4}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projects"},"projects"),(0,o.kt)("p",null,"Contract: ",(0,o.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-controllers/jbcontroller/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,o.kt)("p",null,"Interface: ",(0,o.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBController"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mints ERC-721's that represent project ownership and transfers.")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/** \n  @notice \n  Mints ERC-721's that represent project ownership and transfers.\n*/ \nIJBProjects public immutable override projects;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once set the value cannot be changed."),(0,o.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,o.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface.")))}u.isMDXComponent=!0}}]);