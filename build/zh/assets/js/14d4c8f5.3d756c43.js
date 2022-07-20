"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[6764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,v=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?o.createElement(v,c(c({ref:t},u),{},{components:r})):o.createElement(v,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={},c="Integration Guide",a={unversionedId:"dev/protocol-v1/developers/integration-guide",id:"dev/protocol-v1/developers/integration-guide",title:"Integration Guide",description:"Hooking up your contract to a Juicebox project",source:"@site/docs/dev/protocol-v1/developers/integration-guide.md",sourceDirName:"dev/protocol-v1/developers",slug:"/dev/protocol-v1/developers/integration-guide",permalink:"/zh/dev/protocol-v1/developers/integration-guide",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/protocol-v1/developers/integration-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Understanding Tokens",permalink:"/zh/dev/protocol-v1/resources/understanding-tokens"},next:{title:"Subgraph",permalink:"/zh/dev/protocol-v1/developers/subgraph"}},l={},p=[{value:"Hooking up your contract to a Juicebox project",id:"hooking-up-your-contract-to-a-juicebox-project",level:2},{value:"Example Projects",id:"example-projects",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integration-guide"},"Integration Guide"),(0,n.kt)("h2",{id:"hooking-up-your-contract-to-a-juicebox-project"},"Hooking up your contract to a Juicebox project"),(0,n.kt)("p",null,"This guide is for users who would like to hook up their contract to a pre-existing Juicebox project. Right now, the primary use case for this is to route funds to a Juicebox project when certain events occur (e.g., minting an ERC721 token)."),(0,n.kt)("p",null,"Add the Juicebox contract dependency to your project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ yarn add @jbox/sol\n")),(0,n.kt)("p",null,"Inherit from ",(0,n.kt)("inlineCode",{parentName:"p"},"JuiceboxProject")," in your contract. You will need to provide a ",(0,n.kt)("inlineCode",{parentName:"p"},"Project ID")," and ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/protocol-v1/terminal-directory"},(0,n.kt)("inlineCode",{parentName:"a"},"Terminal Directory"))," address to the ",(0,n.kt)("inlineCode",{parentName:"p"},"JuiceboxProject")," constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\npragma solidity 0.8.6;\n\nimport "@jbox/sol/contracts/abstract/JuiceboxProject.sol";\n\ncontract HelloWorldContract is JuiceboxProject {\n  ...\n\n  constructor(\n      uint256 _projectID,\n      ITerminalDirectory _terminalDirectory\n    ) JuiceboxProject(_projectID, _terminalDirectory) {}\n\n  ...\n}\n')),(0,n.kt)("h3",{id:"example-projects"},"Example Projects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TileDAO/tiles/blob/main/contracts/Tiles.sol"},"TileDAO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/odd-amphora/wiki.token/blob/main/packages/hardhat/contracts/Token.sol"},"WikiToken")),(0,n.kt)("li",{parentName:"ul"},"Add yours here!")))}s.isMDXComponent=!0}}]);