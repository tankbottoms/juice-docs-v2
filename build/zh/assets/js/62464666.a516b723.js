"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[63022],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},73650:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(87462),i=(r(67294),r(3905));const o={},a="IJBDirectory",c={unversionedId:"dev/api/interfaces/ijbdirectory",id:"dev/api/interfaces/ijbdirectory",title:"IJBDirectory",description:"Code",source:"@site/docs/dev/api/interfaces/ijbdirectory.md",sourceDirName:"dev/api/interfaces",slug:"/dev/api/interfaces/ijbdirectory",permalink:"/zh/dev/api/interfaces/ijbdirectory",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/interfaces/ijbdirectory.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"IJBControllerUtility",permalink:"/zh/dev/api/interfaces/ijbcontrollerutility"},next:{title:"IJBETHERC20ProjectPayerDeployer",permalink:"/zh/dev/api/interfaces/ijbetherc20projectpayerdeployer"}},l={},d=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],s={toc:d};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ijbdirectory"},"IJBDirectory"),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBDirectory.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/interfaces/IJBDirectory.sol")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface IJBDirectory {\n  event SetController(uint256 indexed projectId, address indexed controller, address caller);\n\n  event AddTerminal(uint256 indexed projectId, IJBPaymentTerminal indexed terminal, address caller);\n\n  event SetTerminals(uint256 indexed projectId, IJBPaymentTerminal[] terminals, address caller);\n\n  event SetPrimaryTerminal(\n    uint256 indexed projectId,\n    address indexed token,\n    IJBPaymentTerminal indexed terminal,\n    address caller\n  );\n\n  event SetIsAllowedToSetFirstController(address indexed addr, bool indexed flag, address caller);\n\n  function projects() external view returns (IJBProjects);\n\n  function fundingCycleStore() external view returns (IJBFundingCycleStore);\n\n  function controllerOf(uint256 _projectId) external view returns (address);\n\n  function isAllowedToSetFirstController(address _address) external view returns (bool);\n\n  function terminalsOf(uint256 _projectId) external view returns (IJBPaymentTerminal[] memory);\n\n  function isTerminalOf(uint256 _projectId, IJBPaymentTerminal _terminal)\n    external\n    view\n    returns (bool);\n\n  function primaryTerminalOf(uint256 _projectId, address _token)\n    external\n    view\n    returns (IJBPaymentTerminal);\n\n  function setControllerOf(uint256 _projectId, address _controller) external;\n\n  function setTerminalsOf(uint256 _projectId, IJBPaymentTerminal[] calldata _terminals) external;\n\n  function setPrimaryTerminalOf(\n    uint256 _projectId,\n    address _token,\n    IJBPaymentTerminal _terminal\n  ) external;\n\n  function setIsAllowedToSetFirstController(address _address, bool _flag) external;\n}\n")))}u.isMDXComponent=!0}}]);