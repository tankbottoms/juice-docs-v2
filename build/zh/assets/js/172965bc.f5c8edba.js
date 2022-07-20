"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[8380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,v=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="IJBNFTRewardDelegate",c={unversionedId:"dev/api/interfaces/ijbnftrewarddelegate",id:"dev/api/interfaces/ijbnftrewarddelegate",title:"IJBNFTRewardDelegate",description:"Code",source:"@site/docs/dev/api/interfaces/ijbnftrewarddelegate.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbnftrewarddelegate",permalink:"/zh/dev/api/interfaces/ijbnftrewarddelegate",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbnftrewarddelegate.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBOperatable",permalink:"/zh/dev/api/interfaces/ijbmigratable"},next:{title:"IJBOperatable",permalink:"/zh/dev/api/interfaces/ijboperatable"}},l={},s=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ijbnftrewarddelegate"},"IJBNFTRewardDelegate"),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/interfaces/IJBNFTRewardDelegate.sol"},"https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/interfaces/IJBNFTRewardDelegate.sol")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface IJBNFTRewardDelegate is ITokenSupplyDetails {\n  event SetContractUri(string indexed contractUri, address caller);\n\n  event SetBaseUri(string indexed baseUri, address caller);\n\n  event SetTokenUriResolver(IJBTokenUriResolver indexed newResolver, address caller);\n\n  function projectId() external view returns (uint256);\n\n  function directory() external view returns (IJBDirectory);\n\n  function baseUri() external view returns (string memory);\n\n  function contractUri() external view returns (string memory);\n\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\n\n  function setContractUri(string calldata _contractMetadataUri) external;\n\n  function setTokenUriResolver(IJBTokenUriResolver _tokenUriResolverAddress) external;\n\n  function setBaseUri(string calldata _baseUri) external;\n}\n")))}p.isMDXComponent=!0}}]);