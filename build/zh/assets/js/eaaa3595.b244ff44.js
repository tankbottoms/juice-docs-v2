"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[45631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:3},i="Administration",l={unversionedId:"dev/learn/administration",id:"dev/learn/administration",title:"Administration",description:"The protocol has very minimal global governance. The following are the only global functions that can be accessed by a privileged administrating address, initially the JuiceboxDAO multisig, a 9 of 14 multisig voted in by JBX members:",source:"@site/docs/dev/learn/administration.md",sourceDirName:"dev/learn",slug:"/dev/learn/administration",permalink:"/zh/dev/learn/administration",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/learn/administration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"dev",previous:{title:"Architecture",permalink:"/zh/dev/learn/architecture"},next:{title:"Risks",permalink:"/zh/dev/learn/risks"}},s={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"administration"},"Administration"),(0,a.kt)("p",null,"The protocol has very minimal global governance. The following are the only global functions that can be accessed by a privileged administrating address, initially the ",(0,a.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e/home"},"JuiceboxDAO multisig"),", a 9 of 14 multisig voted in by JBX members:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/dev/api/contracts/jbprojects/write/settokenuriresolver"},(0,a.kt)("inlineCode",{parentName:"a"},"JBProjects.setTokenUriResolver(...)"))),(0,a.kt)("br",null),"\nAllows the owner of the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbprojects/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBProjects"))," contract to provide and change the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbtokenuriresolver"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBTokenUriResolver"))," used to resolve metadata for project NFTs in its ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbprojects/read/tokenuri"},(0,a.kt)("inlineCode",{parentName:"a"},"tokenURI(...)"))," function.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/dev/api/contracts/jbprices/write/addfeed"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPrices.addFeedFor(...)"))),(0,a.kt)("br",null),"\nAllows the owner of the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbprices/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPrices"))," contract to add new price feeds used to convert amounts denoted in one currency to another. Once added, a price feed cannot be removed.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/dev/api/contracts/jbdirectory/write/setisallowedtosetfirstcontroller"},(0,a.kt)("inlineCode",{parentName:"a"},"JBDirectory.setIsAllowedToSetFirstController(...)"))),(0,a.kt)("br",null),"\nAllows the owner of the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBDirectory"))," contract to add/remove addresses that can set a project's first controller on its behalf. ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/setfee"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal.setFee(...)"))),(0,a.kt)("br",null),"\nAllows the owner of the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/jbethpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal"))," (or any other terminal inheriting from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),") to change the protocol fee incurred when projects distribute their treasury funds outside of the protocol ecosystem. The max fee is 5%.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/setfeegauge"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal.setFeeGauge(...)"))),(0,a.kt)("br",null),"\nAllows the owner of the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/jbethpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal"))," (or any other terminal inheriting from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),") to change the fee gauge used to provide fee discounts on a per-project basis. ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/setfeelessaddress"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal.setFeelessAddress(...)"))),(0,a.kt)("br",null),"\nAllows the owner of the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/jbethpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal"))," (or any other terminal inheriting from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),") to add/remove any other address used by other projects to/from a list of address to which distributed funds can be sent without incurring protocol fees, and from which funds can be added back to the project's balance without refunding held fees. ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Ownership for each contract is managed independently and can be transferred to a new owner by the current owner."))}m.isMDXComponent=!0}}]);