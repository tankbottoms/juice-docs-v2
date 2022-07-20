"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[1664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(h,i(i({ref:t},l),{},{components:r})):o.createElement(h,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},i="OperatorStore",s={unversionedId:"dev/protocol-v1/ticketbooth/operatorstore",id:"dev/protocol-v1/ticketbooth/operatorstore",title:"OperatorStore",description:"Constructor",source:"@site/docs/dev/protocol-v1/ticketbooth/operatorstore.md",sourceDirName:"dev/protocol-v1/ticketbooth",slug:"/dev/protocol-v1/ticketbooth/operatorstore",permalink:"/dev/protocol-v1/ticketbooth/operatorstore",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/protocol-v1/ticketbooth/operatorstore.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"ModStore",permalink:"/dev/protocol-v1/ticketbooth/modstore"},next:{title:"Prices",permalink:"/dev/protocol-v1/ticketbooth/prices"}},p={},c=[{value:"Constructor",id:"constructor",level:3},{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:3}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"operatorstore"},"OperatorStore"),(0,n.kt)("h3",{id:"constructor"},"Constructor"),(0,n.kt)("h3",{id:"read"},"Read"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Whether or not an operator has the permission to take a certain action pertaining to the specified domain.\n\n  @param _operator The operator to check.\n  @param _account The account that has given out permission to the operator.\n  @param _domain The domain that the operator has been given permissions to operate.\n  @param _permissionIndex the permission to check for.\n\n  @return Whether the operator has the specified permission.\n*/\nfunction hasPermission(\n    address _operator,\n    address _account,\n    uint256 _domain,\n    uint256 _permissionIndex\n) external view override returns (bool)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Whether or not an operator has the permission to take certain actions pertaining to the specified domain.\n\n  @param _operator The operator to check.\n  @param _account The account that has given out permissions to the operator.\n  @param _domain The domain that the operator has been given permissions to operate.\n  @param _permissionIndexes An array of permission indexes to check for.\n\n  @return Whether the operator has all specified permissions.\n*/\nfunction hasPermissions(\n    address _operator,\n    address _account,\n    uint256 _domain,\n    uint256[] calldata _permissionIndexes\n) external view override returns (bool)\n")),(0,n.kt)("h3",{id:"write"},"Write"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Sets permissions for an operator.\n\n  @param _operator The operator to give permission to.\n  @param _domain The domain that the operator is being given permissions to operate.\n  @param _permissionIndexes An array of indexes of permissions to set.\n*/\nfunction setOperator(\n    address _operator,\n    uint256 _domain,\n    uint256[] calldata _permissionIndexes\n) external override\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Sets permissions for many operators.\n\n  @param _operators The operators to give permission to.\n  @param _domains The domains that can be operated. Set to 0 to allow operation of account level actions.\n  @param _permissionIndexes The level of power each operator should have.\n*/\nfunction setOperators(\n    address[] calldata _operators,\n    uint256[] calldata _domains,\n    uint256[][] calldata _permissionIndexes\n) external override\n")))}d.isMDXComponent=!0}}]);