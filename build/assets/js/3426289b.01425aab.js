"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[11283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(v,c(c({ref:t},s),{},{components:r})):n.createElement(v,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Interfaces the contracts and the user, working as a top-level contract."},c="TerminalV1",i={unversionedId:"dev/protocol-v1/terminalv1/README",id:"dev/protocol-v1/terminalv1/README",title:"TerminalV1",description:"Interfaces the contracts and the user, working as a top-level contract.",source:"@site/docs/dev/protocol-v1/terminalv1/README.md",sourceDirName:"dev/protocol-v1/terminalv1",slug:"/dev/protocol-v1/terminalv1/",permalink:"/dev/protocol-v1/terminalv1/",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/protocol-v1/terminalv1/README.md",tags:[],version:"current",frontMatter:{description:"Interfaces the contracts and the user, working as a top-level contract."},sidebar:"dev",previous:{title:"Mods",permalink:"/dev/protocol-v1/mods"},next:{title:"Read",permalink:"/dev/protocol-v1/terminalv1/read"}},l={},p=[{value:"Content",id:"content",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Events",id:"events",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminalv1"},"TerminalV1"),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"On this page you'll find the documentation for the constructor and the events, for the read and write functions of the terminal follow the links:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/dev/protocol-v1/terminalv1/read"},"read.md")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/dev/protocol-v1/terminalv1/write"},"write.md")),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Params:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_projects"),": A Projects contract which mints ERC-721's that represent project ownership and transfers","*","*",".","*","*"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_fundingCycles"),": A funding cycle configuration store."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_ticketBooth"),": A contract that manages Ticket printing and redeeming."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_operatorStore"),": A contract storing operator assignments."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_modStore"),": A storage for a project's mods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_prices"),": A price feed contract to use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"_terminalDirectory"),": A directory of a project's current Juicebox terminal to receive payments in.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"constructor(\n    IProjects _projects,\n    IFundingCycles _fundingCycles,\n    ITicketBooth _ticketBooth,\n    IOperatorStore _operatorStore,\n    IModStore _modStore,\n    IPrices _prices,\n    ITerminalDirectory _terminalDirectory,\n    address payable _governance\n)\n")),(0,o.kt)("h2",{id:"events"},"Events"))}u.isMDXComponent=!0}}]);