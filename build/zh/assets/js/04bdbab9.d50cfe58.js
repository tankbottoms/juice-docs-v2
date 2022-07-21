"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[56068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,b=d["".concat(s,".").concat(f)]||d[f]||l[f]||c;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const c={},o="IJBPrices",a={unversionedId:"dev/api/interfaces/ijbprices",id:"dev/api/interfaces/ijbprices",title:"IJBPrices",description:"Code",source:"@site/docs/dev/api/interfaces/ijbprices.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbprices",permalink:"/zh/dev/api/interfaces/ijbprices",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbprices.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBPriceFeed",permalink:"/zh/dev/api/interfaces/ijbpricefeed"},next:{title:"IJBProjectHandles",permalink:"/zh/dev/api/interfaces/ijbprojecthandles"}},s={},p=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ijbprices"},"IJBPrices"),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBPrices.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBPrices.sol")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface IJBPrices {\n  event AddFeed(uint256 indexed currency, uint256 indexed base, IJBPriceFeed feed);\n\n  function feedFor(uint256 _currency, uint256 _base) external view returns (IJBPriceFeed);\n\n  function priceFor(\n    uint256 _currency,\n    uint256 _base,\n    uint256 _decimals\n  ) external view returns (uint256);\n\n  function addFeedFor(\n    uint256 _currency,\n    uint256 _base,\n    IJBPriceFeed _priceFeed\n  ) external;\n}\n")))}l.isMDXComponent=!0}}]);