"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[77303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},l="Read",c={unversionedId:"dev/protocol-v1/ticketbooth/read",id:"dev/protocol-v1/ticketbooth/read",title:"Read",description:"balanceOf",source:"@site/docs/dev/protocol-v1/ticketbooth/read.md",sourceDirName:"dev/protocol-v1/ticketbooth",slug:"/dev/protocol-v1/ticketbooth/read",permalink:"/dev/protocol-v1/ticketbooth/read",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/protocol-v1/ticketbooth/read.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Projects",permalink:"/dev/protocol-v1/ticketbooth/projects"},next:{title:"TerminalV1",permalink:"/dev/protocol-v1/ticketbooth/terminalv1"}},p={},i=[{value:"balanceOf",id:"balanceof",level:3},{value:"totalSupplyOf",id:"totalsupplyof",level:3}],u={toc:i};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"read"},"Read"),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"balanceof"},"balanceOf"),(0,o.kt)("p",null,"The total balance of tickets a holder has for a specified project, including staked and unstaked tickets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"holder:")," The ticket holder to get a balance for."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_projectId:")," The project to get the ","`","_hodler","`","s balance of.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," The balance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function balanceOf(address _holder, uint256 _projectId)\n        external\n        view\n        returns (uint256 _result);\n")),(0,o.kt)("h3",{id:"-1"}),(0,o.kt)("h3",{id:"totalsupplyof"},"totalSupplyOf"),(0,o.kt)("p",null,"The total supply of tickets for each project, including staked and unstaked tickets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"projectId:")," The ID of the project to get the total supply of.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," The total supply."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function totalSupplyOf(uint256 _projectId) external view returns (uint256);\n")))}s.isMDXComponent=!0}}]);