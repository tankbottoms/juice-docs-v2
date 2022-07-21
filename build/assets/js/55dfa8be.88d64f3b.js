"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[54421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=c(r),u=a,f=y["".concat(p,".").concat(u)]||y[u]||s[u]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},74397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="DeployProjectPayer",l={unversionedId:"dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer",id:"dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer",title:"DeployProjectPayer",description:"Emitted from:",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events",slug:"/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"JBETHERC20ProjectPayerDeployer",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/"},next:{title:"deployProjectPayer",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/write/deployprojectpayer"}},p={},c=[{value:"Definition",id:"definition",level:4}],d={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployprojectpayer"},"DeployProjectPayer"),(0,a.kt)("p",null,"Emitted from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-utilities/jbetherc20projectpayerdeployer/write/deployprojectpayer"},(0,a.kt)("inlineCode",{parentName:"a"},"deployProjectPayer")))),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event DeployProjectPayer(\n  IJBProjectPayer indexed projectPayer,\n  uint256 defaultProjectId,\n  address defaultBeneficiary,\n  bool defaultPreferClaimedTokens,\n  string defaultMemo,\n  bytes defaultMetadata,\n  bool preferAddToBalance,\n  IJBDirectory directory,\n  address owner,\n  address caller\n);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"projectPayer")," is the address of the project payer contract that was deployed. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultProjectId")," is the ID of the project whose treasury should be forwarded the project payer contract's received payments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultBeneficiary")," is the address that'll receive the project's tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultPreferClaimedTokens")," is a flag indicating whether issued tokens should be automatically claimed into the beneficiary's wallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultMemo")," is the memo that'll be passed along to the emitted event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultMetadata")," are bytes to send along to the project's data source and delegate, if provided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"preferAddToBalance")," is a flag indicating if received payments should be forwarded to the project's ",(0,a.kt)("inlineCode",{parentName:"li"},"addToBalance")," function or ",(0,a.kt)("inlineCode",{parentName:"li"},"pay")," function. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"directory")," is the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," contract storing directories of terminals and controllers for each project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_owner")," is the address that owns the project payer contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"caller")," is the address that issued the transaction within which the event was emitted.")))}s.isMDXComponent=!0}}]);