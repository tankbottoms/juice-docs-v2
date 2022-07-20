"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[73344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="usedOverflowAllowanceOf",l={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof",title:"usedOverflowAllowanceOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"usedDistributionLimitOf",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof"},next:{title:"_currentTotalOverflowOf",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof"}},c={},s=[{value:"Definition",id:"definition",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usedoverflowallowanceof"},"usedOverflowAllowanceOf"),(0,o.kt)("p",null,"Contract: ",(0,o.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,o.kt)("p",null,"Interface: ",(0,o.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The amount of funds that a project has used from its allowance during the current funding cycle configuration for each terminal, in terms of the overflow allowance's currency.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Increases as projects use their allowance.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The used allowance is represented as a fixed point number with the same amount of decimals as its relative terminal.")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The amount of funds that a project has used from its allowance during the current funding cycle configuration for each terminal, in terms of the overflow allowance's currency.\n\n  @dev\n  Increases as projects use their allowance.\n\n  @dev\n  The used allowance is represented as a fixed point number with the same amount of decimals as its relative terminal.\n\n  _terminal The terminal to which the overflow allowance applies.\n  _projectId The ID of the project to get the used overflow allowance of.\n  _configuration The configuration of the during which the allowance was used.\n*/\nmapping(IJBSingleTokenPaymentTerminal => mapping(uint256 => mapping(uint256 => uint256)))\n  public\n  override usedOverflowAllowanceOf;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_terminal")," is the terminal to which the overflow allowance applies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the used overflow allowance of."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_configuration")," is the configuration of the during which the allowance was used."))),(0,o.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,o.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,o.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,o.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface.")))}u.isMDXComponent=!0}}]);