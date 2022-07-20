"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[14139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="IJBOperatorStore",c={unversionedId:"dev/api/interfaces/ijboperatorstore",id:"dev/api/interfaces/ijboperatorstore",title:"IJBOperatorStore",description:"Code",source:"@site/docs/dev/api/interfaces/ijboperatorstore.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijboperatorstore",permalink:"/zh/dev/api/interfaces/ijboperatorstore",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijboperatorstore.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBOperatable",permalink:"/zh/dev/api/interfaces/ijboperatable"},next:{title:"IJBPayDelegate",permalink:"/zh/dev/api/interfaces/ijbpaydelegate"}},s={},p=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ijboperatorstore"},"IJBOperatorStore"),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBOperatorStore.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBOperatorStore.sol")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"interface IJBOperatorStore {\n  event SetOperator(\n    address indexed operator,\n    address indexed account,\n    uint256 indexed domain,\n    uint256[] permissionIndexes,\n    uint256 packed\n  );\n\n  function permissionsOf(\n    address _operator,\n    address _account,\n    uint256 _domain\n  ) external view returns (uint256);\n\n  function hasPermission(\n    address _operator,\n    address _account,\n    uint256 _domain,\n    uint256 _permissionIndex\n  ) external view returns (bool);\n\n  function hasPermissions(\n    address _operator,\n    address _account,\n    uint256 _domain,\n    uint256[] calldata _permissionIndexes\n  ) external view returns (bool);\n\n  function setOperator(JBOperatorData calldata _operatorData) external;\n\n  function setOperators(JBOperatorData[] calldata _operatorData) external;\n}\n")))}d.isMDXComponent=!0}}]);