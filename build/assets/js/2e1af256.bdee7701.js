"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[67800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a="isAllowedToSetFirstController",c={unversionedId:"dev/api/contracts/jbdirectory/properties/isallowedtosetfirstcontroller",id:"dev/api/contracts/jbdirectory/properties/isallowedtosetfirstcontroller",title:"isAllowedToSetFirstController",description:"Contract: JBDirectory\u200c",source:"@site/docs/dev/api/contracts/jbdirectory/properties/isallowedtosetfirstcontroller.md",sourceDirName:"dev/api/contracts/jbdirectory/properties",slug:"/dev/api/contracts/jbdirectory/properties/isallowedtosetfirstcontroller",permalink:"/dev/api/contracts/jbdirectory/properties/isallowedtosetfirstcontroller",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbdirectory/properties/isallowedtosetfirstcontroller.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"fundingCycleStore",permalink:"/dev/api/contracts/jbdirectory/properties/fundingcyclestore"},next:{title:"projects",permalink:"/dev/api/contracts/jbdirectory/properties/projects"}},l={},s=[{value:"Definition",id:"definition",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"isallowedtosetfirstcontroller"},"isAllowedToSetFirstController"),(0,o.kt)("p",null,"Contract: ",(0,o.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbdirectory/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBDirectory")),"\u200c"),(0,o.kt)("p",null,"Interface: ",(0,o.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbdirectory"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner.")," "),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Addresses that can set a project's first controller on their behalf. These addresses/contracts have been vetted and verified by this contract's owner.\n\n  _address The address that is either allowed or not.\n*/\nmapping(address => bool) public override isAllowedToSetFirstController;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_address")," is the address that is either allowed or not."))),(0,o.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,o.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbdirectory"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," interface.")))}d.isMDXComponent=!0}}]);