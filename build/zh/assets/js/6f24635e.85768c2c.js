"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[33671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,v=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="IJBProjects",c={unversionedId:"dev/api/interfaces/ijbprojects",id:"dev/api/interfaces/ijbprojects",title:"IJBProjects",description:"Code",source:"@site/docs/dev/api/interfaces/ijbprojects.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbprojects",permalink:"/zh/dev/api/interfaces/ijbprojects",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbprojects.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBProjectPayer",permalink:"/zh/dev/api/interfaces/ijbprojectpayer"},next:{title:"IJBReconfigurationBufferBallot",permalink:"/zh/dev/api/interfaces/ijbreconfigurationbufferballot"}},s={},l=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ijbprojects"},"IJBProjects"),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBProjects.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBProjects.sol")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"interface IJBProjects is IERC721 {\n  event Create(\n    uint256 indexed projectId,\n    address indexed owner,\n    JBProjectMetadata metadata,\n    address caller\n  );\n\n  event SetMetadata(uint256 indexed projectId, JBProjectMetadata metadata, address caller);\n\n  event SetTokenUriResolver(IJBTokenUriResolver indexed resolver, address caller);\n\n  function count() external view returns (uint256);\n\n  function metadataContentOf(uint256 _projectId, uint256 _domain)\n    external\n    view\n    returns (string memory);\n\n  function tokenUriResolver() external view returns (IJBTokenUriResolver);\n\n  function createFor(address _owner, JBProjectMetadata calldata _metadata)\n    external\n    returns (uint256 projectId);\n\n  function setMetadataOf(uint256 _projectId, JBProjectMetadata calldata _metadata) external;\n\n  function setTokenUriResolver(IJBTokenUriResolver _newResolver) external;\n}\n")))}p.isMDXComponent=!0}}]);