"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[17511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="IJBPaymentTerminal",c={unversionedId:"dev/api/interfaces/ijbpaymentterminal",id:"dev/api/interfaces/ijbpaymentterminal",title:"IJBPaymentTerminal",description:"Code",source:"@site/docs/dev/api/interfaces/ijbpaymentterminal.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbpaymentterminal",permalink:"/dev/api/interfaces/ijbpaymentterminal",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbpaymentterminal.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBPayDelegate",permalink:"/dev/api/interfaces/ijbpaydelegate"},next:{title:"IJBPayoutRedemptionPaymentTerminal",permalink:"/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"}},l={},p=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ijbpaymentterminal"},"IJBPaymentTerminal"),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBPaymentTerminal.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBPaymentTerminal.sol")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface IJBPaymentTerminal is IERC165 {\n  function acceptsToken(address _token, uint256 _projectId) external view returns (bool);\n\n  function currencyForToken(address _token) external view returns (uint256);\n\n  function decimalsForToken(address _token) external view returns (uint256);\n\n  // Return value must be a fixed point number with 18 decimals.\n  function currentEthOverflowOf(uint256 _projectId) external view returns (uint256);\n\n  function pay(\n    uint256 _projectId,\n    uint256 _amount,\n    address _token,\n    address _beneficiary,\n    uint256 _minReturnedTokens,\n    bool _preferClaimedTokens,\n    string calldata _memo,\n    bytes calldata _metadata\n  ) external payable returns (uint256 beneficiaryTokenCount);\n\n  function addToBalanceOf(\n    uint256 _projectId,\n    uint256 _amount,\n    address _token,\n    string calldata _memo,\n    bytes calldata _metadata\n  ) external payable;\n}\n")))}s.isMDXComponent=!0}}]);