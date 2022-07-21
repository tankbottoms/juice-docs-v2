"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[26814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(d,".").concat(f)]||u[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},c="AddFeed",o={unversionedId:"dev/api/contracts/jbprices/events/addfeed",id:"dev/api/contracts/jbprices/events/addfeed",title:"AddFeed",description:"Emitted from:",source:"@site/docs/dev/api/contracts/jbprices/events/addfeed.md",sourceDirName:"dev/api/contracts/jbprices/events",slug:"/dev/api/contracts/jbprices/events/addfeed",permalink:"/dev/api/contracts/jbprices/events/addfeed",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbprices/events/addfeed.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"JBPrices",permalink:"/dev/api/contracts/jbprices/"},next:{title:"feedFor",permalink:"/dev/api/contracts/jbprices/properties/feedfor"}},d={},p=[{value:"Definition",id:"definition",level:4}],l={toc:p};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addfeed"},"AddFeed"),(0,i.kt)("p",null,"Emitted from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbprices/write/addfeed"},(0,i.kt)("inlineCode",{parentName:"a"},"addFeedFor")))),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"event AddFeed(uint256 indexed currency, uint256 indexed base, IJBPriceFeed feed);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currency")," is the currency the feed was added for."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base")," is the currency that the feed's price will be reported based on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feed")," is the ",(0,i.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbpricefeed"},(0,i.kt)("inlineCode",{parentName:"a"},"IJBPriceFeed"))," feed contract that was added.")))}s.isMDXComponent=!0}}]);