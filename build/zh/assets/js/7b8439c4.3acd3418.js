"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[72248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s="How to use Juicebox tokens in a Snapshot strategy",i={unversionedId:"user/guides/snapshot-strategy",id:"user/guides/snapshot-strategy",title:"How to use Juicebox tokens in a Snapshot strategy",description:"This takes both claimed ERC-20s or unclaimed tokens into account when setting up Snapshot ballot strateies.",source:"@site/docs/user/guides/snapshot-strategy.md",sourceDirName:"user/guides",slug:"/user/guides/snapshot-strategy",permalink:"/zh/user/guides/snapshot-strategy",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/user/guides/snapshot-strategy.md",tags:[],version:"current",frontMatter:{},sidebar:"user",previous:{title:"Airdrop Guide: Rewarding Your Community",permalink:"/zh/user/guides/rewarding-your-community"}},u={},c=[],p={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-juicebox-tokens-in-a-snapshot-strategy"},"How to use Juicebox tokens in a Snapshot strategy"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This takes both claimed ERC-20s or unclaimed tokens into account when setting up Snapshot ballot strateies.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Choose "contract-call".'),(0,o.kt)("li",{parentName:"ol"},"Stick this in ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "args": [\n        "%{address}",\n        "0x01" // TODO: REPLACE WITH YOUR PROJECT ID HEX ENCODED.\n    ],\n    "symbol": "JBX", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.\n    "address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",\n    "decimals": 18,\n    "methodABI": {\n    "name": "balanceOf",\n    "type": "function",\n    "inputs": [\n        {\n            "name": "",\n            "type": "address",\n            "internalType": "address"\n        },\n        {\n            "name": "",\n            "type": "uint256",\n            "internalType": "uint256"\n        }\n    ],\n    "outputs": [\n        {\n            "name": "",\n            "type": "uint256",\n            "internalType": "uint256"\n        }\n    ],\n    "stateMutability": "view"\n    }\n}\n')))}l.isMDXComponent=!0}}]);