"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[36266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="defaultPreferClaimedTokens",c={unversionedId:"dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens",id:"dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens",title:"defaultPreferClaimedTokens",description:"Contract: JBETHERC20ProjectPayer",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20projectpayer/properties",slug:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"defaultPreferAddToBalance",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferaddtobalance"},next:{title:"defaultProjectId",permalink:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultprojectid"}},l={},p=[{value:"Definition",id:"definition",level:4}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defaultpreferclaimedtokens"},"defaultPreferClaimedTokens"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-utilities/jbetherc20projectpayer/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBETHERC20ProjectPayer"))),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbprojectpayer"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBProjectPayer"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A flag indicating whether issued tokens should be automatically claimed into the beneficiary's wallet. Leaving tokens unclaimed saves gas.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/** \n  @notice \n  A flag indicating whether issued tokens should be automatically claimed into the beneficiary's wallet. Leaving tokens unclaimed saves gas.\n*/\nbool public override defaultPreferClaimedTokens;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbprojectpayer"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBProjectPayer"))," interface.")))}u.isMDXComponent=!0}}]);