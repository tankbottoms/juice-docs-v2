"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[22263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,j=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(j,a(a({ref:t},p),{},{components:n})):r.createElement(j,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="IJBProjectHandles",c={unversionedId:"dev/api/interfaces/ijbprojecthandles",id:"dev/api/interfaces/ijbprojecthandles",title:"IJBProjectHandles",description:"Code",source:"@site/docs/dev/api/interfaces/ijbprojecthandles.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbprojecthandles",permalink:"/zh/dev/api/interfaces/ijbprojecthandles",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbprojecthandles.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBPrices",permalink:"/zh/dev/api/interfaces/ijbprices"},next:{title:"IJBProjectPayer",permalink:"/zh/dev/api/interfaces/ijbprojectpayer"}},s={},l=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ijbprojecthandles"},"IJBProjectHandles"),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-project-handles/blob/main/contracts/interfaces/IJBProjectHandles.sol"},"https://github.com/jbx-protocol/juice-project-handles/blob/main/contracts/interfaces/IJBProjectHandles.sol")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"interface IJBProjectHandles {\n  event SetEnsNameParts(\n    uint256 indexed projectId,\n    string indexed handle,\n    string[] parts,\n    address caller\n  );\n\n  function setEnsNamePartsFor(uint256 _projectId, string[] memory _parts) external;\n\n  function ensNamePartsOf(uint256 _projectId) external view returns (string[] memory);\n\n  function TEXT_KEY() external view returns (string memory);\n\n  function projects() external view returns (IJBProjects);\n\n  function textResolver() external view returns (ITextResolver);\n\n  function handleOf(uint256 _projectId) external view returns (string memory);\n}\n")))}d.isMDXComponent=!0}}]);