"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[49466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={},a="usedDistributionLimitOf",s={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof",title:"usedDistributionLimitOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/properties",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/useddistributionlimitof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"prices",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/prices"},next:{title:"usedOverflowAllowanceOf",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof"}},l={},p=[{value:"Definition",id:"definition",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useddistributionlimitof"},"usedDistributionLimitOf"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The amount of funds that a project has distributed from its limit during the current funding cycle for each terminal, in terms of the distribution limit's currency.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Increases as projects use their preconfigured distribution limits.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The used distribution limit is represented as a fixed point number with the same amount of decimals as its relative terminal.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The amount of funds that a project has distributed from its limit during the current funding cycle for each terminal, in terms of the distribution limit's currency.\n\n  @dev\n  Increases as projects use their preconfigured distribution limits.\n\n  @dev\n  The used distribution limit is represented as a fixed point number with the same amount of decimals as its relative terminal.\n\n  _terminal The terminal to which the used distribution limit applies.\n  _projectId The ID of the project to get the used distribution limit of.\n  _fundingCycleNumber The number of the funding cycle during which the distribution limit was used.\n*/\nmapping(IJBSingleTokenPaymentTerminal => mapping(uint256 => mapping(uint256 => uint256)))\n  public\n  override usedDistributionLimitOf;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_terminal")," is the terminal to which the used distribution limit applies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the used distribution limit of."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_fundingCycleNumber")," is the number of the funding cycle during which the distribution limit was used."))),(0,r.kt)("li",{parentName:"ul"},"The resulting view function can be accessed externally by anyone."),(0,r.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,r.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface.")))}c.isMDXComponent=!0}}]);