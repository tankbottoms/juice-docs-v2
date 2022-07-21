"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[44503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="IJBSplitsStore",c={unversionedId:"dev/api/interfaces/ijbsplitsstore",id:"dev/api/interfaces/ijbsplitsstore",title:"IJBSplitsStore",description:"Code",source:"@site/docs/dev/api/interfaces/ijbsplitsstore.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbsplitsstore",permalink:"/zh/dev/api/interfaces/ijbsplitsstore",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbsplitsstore.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBSplitsPayer",permalink:"/zh/dev/api/interfaces/ijbsplitspayer"},next:{title:"IJBTerminalUtility",permalink:"/zh/dev/api/interfaces/ijbterminalutility"}},s={},p=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ijbsplitsstore"},"IJBSplitsStore"),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBSplitsStore.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBSplitsStore.sol")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface IJBSplitsStore {\n  event SetSplit(\n    uint256 indexed projectId,\n    uint256 indexed domain,\n    uint256 indexed group,\n    JBSplit split,\n    address caller\n  );\n\n  function projects() external view returns (IJBProjects);\n\n  function directory() external view returns (IJBDirectory);\n\n  function splitsOf(\n    uint256 _projectId,\n    uint256 _domain,\n    uint256 _group\n  ) external view returns (JBSplit[] memory);\n\n  function set(\n    uint256 _projectId,\n    uint256 _domain,\n    JBGroupedSplits[] memory _groupedSplits\n  ) external;\n}\n")))}u.isMDXComponent=!0}}]);