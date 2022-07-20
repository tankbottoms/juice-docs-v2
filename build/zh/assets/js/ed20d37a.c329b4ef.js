"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[27819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="IJBProjectPayer",c={unversionedId:"dev/api/interfaces/ijbprojectpayer",id:"dev/api/interfaces/ijbprojectpayer",title:"IJBProjectPayer",description:"Code",source:"@site/docs/dev/api/interfaces/ijbprojectpayer.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbprojectpayer",permalink:"/zh/dev/api/interfaces/ijbprojectpayer",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbprojectpayer.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBProjectHandles",permalink:"/zh/dev/api/interfaces/ijbprojecthandles"},next:{title:"IJBProjects",permalink:"/zh/dev/api/interfaces/ijbprojects"}},l={},s=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ijbprojectpayer"},"IJBProjectPayer"),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBProjectPayer.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBProjectPayer.sol")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface IJBProjectPayer is IERC165 {\n  event SetDefaultValues(\n    uint256 indexed projectId,\n    address indexed beneficiary,\n    bool preferClaimedTokens,\n    string memo,\n    bytes metadata,\n    bool preferAddToBalance,\n    address caller\n  );\n\n  function directory() external view returns (IJBDirectory);\n\n  function defaultProjectId() external view returns (uint256);\n\n  function defaultBeneficiary() external view returns (address payable);\n\n  function defaultPreferClaimedTokens() external view returns (bool);\n\n  function defaultMemo() external view returns (string memory);\n\n  function defaultMetadata() external view returns (bytes memory);\n\n  function defaultPreferAddToBalance() external view returns (bool);\n\n  function setDefaultValues(\n    uint256 _projectId,\n    address payable _beneficiary,\n    bool _preferClaimedTokens,\n    string memory _memo,\n    bytes memory _metadata,\n    bool _defaultPreferAddToBalance\n  ) external;\n\n  function pay(\n    uint256 _projectId,\n    address _token,\n    uint256 _amount,\n    uint256 _decimals,\n    address _beneficiary,\n    uint256 _minReturnedTokens,\n    bool _preferClaimedTokens,\n    string memory _memo,\n    bytes memory _metadata\n  ) external payable;\n\n  function addToBalanceOf(\n    uint256 _projectId,\n    address _token,\n    uint256 _amount,\n    uint256 _decimals,\n    string memory _memo,\n    bytes memory _metadata\n  ) external payable;\n\n  receive() external payable;\n}\n")))}p.isMDXComponent=!0}}]);