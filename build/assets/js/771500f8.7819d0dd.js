"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[5500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(r),s=a,y=f["".concat(p,".").concat(s)]||f[s]||u[s]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="defaultPreferAddToBalance",c={unversionedId:"dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance",id:"dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance",title:"defaultPreferAddToBalance",description:"Contract: JBETHERC20ProjectPayer",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20projectpayer/properties",slug:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"defaultMetadata",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultmetadata"},next:{title:"defaultPreferClaimedTokens",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens"}},p={},l=[{value:"Definition",id:"definition",level:4}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defaultpreferaddtobalance"},"defaultPreferAddToBalance"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHERC20ProjectPayer"))),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbprojectpayer"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBProjectPayer"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A flag indicating if received payments should call the ",(0,a.kt)("inlineCode",{parentName:"strong"},"pay")," function or the ",(0,a.kt)("inlineCode",{parentName:"strong"},"addToBalance")," function of a project.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice \n  A flag indicating if received payments should call the `pay` function or the `addToBalance` function of a project.\n*/\nbool public override defaultPreferAddToBalance;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbprojectpayer"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBProjectPayer"))," interface.")))}u.isMDXComponent=!0}}]);