"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[99956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,f=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="IJBRedemptionTerminal",c={unversionedId:"dev/api/interfaces/ijbredemptionterminal",id:"dev/api/interfaces/ijbredemptionterminal",title:"IJBRedemptionTerminal",description:"Code",source:"@site/docs/dev/api/interfaces/ijbredemptionterminal.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbredemptionterminal",permalink:"/zh/dev/api/interfaces/ijbredemptionterminal",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbredemptionterminal.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBRedemptionDelegate",permalink:"/zh/dev/api/interfaces/ijbredemptiondelegate"},next:{title:"IJBSingleTokenPaymentTerminal",permalink:"/zh/dev/api/interfaces/ijbsingletokenpaymentterminal"}},l={},p=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ijbredemptionterminal"},"IJBRedemptionTerminal"),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBRedemptionTerminal.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBRedemptionTerminal.sol")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface IJBRedemptionTerminal {\n  function redeemTokensOf(\n    address _holder,\n    uint256 _projectId,\n    uint256 _count,\n    address _token,\n    uint256 _minReturnedTokens,\n    address payable _beneficiary,\n    string calldata _memo,\n    bytes calldata _metadata\n  ) external returns (uint256 reclaimAmount);\n}\n")))}m.isMDXComponent=!0}}]);