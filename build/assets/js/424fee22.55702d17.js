"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[7352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,y=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},o="SetPrimaryTerminal",l={unversionedId:"dev/api/contracts/jbdirectory/events/setprimaryterminal",id:"dev/api/contracts/jbdirectory/events/setprimaryterminal",title:"SetPrimaryTerminal",description:"Emitted from:",source:"@site/docs/dev/api/contracts/jbdirectory/events/setprimaryterminal.md",sourceDirName:"dev/api/contracts/jbdirectory/events",slug:"/dev/api/contracts/jbdirectory/events/setprimaryterminal",permalink:"/dev/api/contracts/jbdirectory/events/setprimaryterminal",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbdirectory/events/setprimaryterminal.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"SetIsAllowedToSetFirstController",permalink:"/dev/api/contracts/jbdirectory/events/setisallowedtosetfirstcontroller"},next:{title:"SetTerminal",permalink:"/dev/api/contracts/jbdirectory/events/setterminals"}},c={},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setprimaryterminal"},"SetPrimaryTerminal"),(0,i.kt)("p",null,"Emitted from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/write/setprimaryterminalof"},(0,i.kt)("inlineCode",{parentName:"a"},"setPrimaryTerminalOf")))),(0,i.kt)("p",null,"Definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"event SetPrimaryTerminal(\n  uint256 indexed projectId,\n  address indexed token,\n  IJBPaymentTerminal indexed terminal,\n  address caller\n);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectId")," is the ID of the project that set a primary terminal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token")," is the token for which the terminal is the project's primary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terminal")," is the address of the terminal that is now the project's primary for the token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"caller")," is the address that issued the transaction within which the event was emitted.")))}m.isMDXComponent=!0}}]);