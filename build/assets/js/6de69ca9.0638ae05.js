"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[30909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,g=p["".concat(s,".").concat(f)]||p[f]||l[f]||c;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<c;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},91336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const c={sidebar_position:2},i="Understanding Funding Cycles",a={unversionedId:"dev/protocol-v1/resources/understanding-funding-cycles",id:"dev/protocol-v1/resources/understanding-funding-cycles",title:"Understanding Funding Cycles",description:"Every Juicebox project has Funding Cycles, which can be used to synchronize governance, payouts, and project reconfiguration.",source:"@site/docs/dev/protocol-v1/resources/understanding-funding-cycles.md",sourceDirName:"dev/protocol-v1/resources",slug:"/dev/protocol-v1/resources/understanding-funding-cycles",permalink:"/dev/protocol-v1/resources/understanding-funding-cycles",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/protocol-v1/resources/understanding-funding-cycles.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"dev",previous:{title:"Contract Addresses",permalink:"/dev/protocol-v1/resources/contract-addresses"},next:{title:"Understanding Overflow",permalink:"/dev/protocol-v1/resources/understanding-overflow"}},s={},d=[],u={toc:d};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-funding-cycles"},"Understanding Funding Cycles"),(0,o.kt)("p",null,"Every Juicebox project has ",(0,o.kt)("strong",{parentName:"p"},"Funding Cycles"),", which can be used to synchronize governance, payouts, and project reconfiguration."),(0,o.kt)("p",null,"Juicebox projects have the option to set a ",(0,o.kt)("em",{parentName:"p"},"Funding cycle duration"),". If a funding cycle duration is set, ",(0,o.kt)("strong",{parentName:"p"},"project parameters can not be changed during a funding cycle"),". Instead, reconfigurations are queued to be executed at the start of the next funding cycle."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Projects with no funding cycle duration can make project reconfigurations at any time, which will trigger a new funding cycle.")),(0,o.kt)("p",null,"Projects can also set a ",(0,o.kt)("em",{parentName:"p"},"Funding cycle target")," in ETH or USD, which determines how much funding can be distributed each funding cycle. Contributor payouts and fixed monthly costs should be considered when setting this target. ",(0,o.kt)("strong",{parentName:"p"},"Overflow")," is created if a project exceeds this target. Token holders can then redeem their tokens to claim overflow, burning their tokens in the process."))}l.isMDXComponent=!0}}]);