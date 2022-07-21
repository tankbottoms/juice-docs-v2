"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[10128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),f=l(r),u=i,d=f["".concat(c,".").concat(u)]||f[u]||s[u]||o;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={},a="_primaryTerminalOf",p={unversionedId:"dev/api/contracts/jbdirectory/properties/-_primaryterminalof",id:"dev/api/contracts/jbdirectory/properties/-_primaryterminalof",title:"_primaryTerminalOf",description:"Contract: JBDirectory\u200c",source:"@site/docs/dev/api/contracts/jbdirectory/properties/-_primaryterminalof.md",sourceDirName:"dev/api/contracts/jbdirectory/properties",slug:"/dev/api/contracts/jbdirectory/properties/-_primaryterminalof",permalink:"/dev/api/contracts/jbdirectory/properties/-_primaryterminalof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbdirectory/properties/-_primaryterminalof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"SetTerminal",permalink:"/dev/api/contracts/jbdirectory/events/setterminals"},next:{title:"_terminalsOf",permalink:"/dev/api/contracts/jbdirectory/properties/-_terminalsof"}},c={},l=[{value:"Definition",id:"definition",level:4}],m={toc:l};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"_primaryterminalof"},"_primaryTerminalOf"),(0,i.kt)("p",null,"Contract: ",(0,i.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbdirectory/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBDirectory")),"\u200c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The project's primary terminal for a token.")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/** \n  @notice \n  The project's primary terminal for a token.\n\n  _projectId The ID of the project to get the primary terminal of.\n  _token The token to get the project's primary terminal of.\n*/\nmapping(uint256 => mapping(address => IJBPaymentTerminal)) private _primaryTerminalOf;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the primary terminal of."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_token")," is the token to get the project's primary terminal of."))),(0,i.kt)("li",{parentName:"ul"},"The resulting view function is private to this contract.")))}s.isMDXComponent=!0}}]);