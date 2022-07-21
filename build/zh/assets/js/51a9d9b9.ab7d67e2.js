"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[21180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),i=r(86010),o=r(72389),l=r(67392),s=r(7094),p=r(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,r;const{lazy:o,block:d,defaultValue:m,values:b,groupId:h,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(r=f.find((e=>e.props.default)))?void 0:r.props.value)?t:f[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[_,T]=(0,a.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==_&&k.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,r=O.indexOf(t),n=k[r].value;n!==_&&(x(t),T(n),null!=h&&w(h,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;r=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;r=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},k.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},22196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),i=r(65488),o=r(85162);const l={},s="_requirePermissionAllowingOverride",p={unversionedId:"dev/api/contracts/or-abstract/jboperatable/read/-_requirepermissionallowingoverride",id:"dev/api/contracts/or-abstract/jboperatable/read/-_requirepermissionallowingoverride",title:"_requirePermissionAllowingOverride",description:"Contract: JBOperatable\u200b\u200c",source:"@site/docs/dev/api/contracts/or-abstract/jboperatable/read/-_requirepermissionallowingoverride.md",sourceDirName:"dev/api/contracts/or-abstract/jboperatable/read",slug:"/dev/api/contracts/or-abstract/jboperatable/read/-_requirepermissionallowingoverride",permalink:"/zh/dev/api/contracts/or-abstract/jboperatable/read/-_requirepermissionallowingoverride",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-abstract/jboperatable/read/-_requirepermissionallowingoverride.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_requirePermission",permalink:"/zh/dev/api/contracts/or-abstract/jboperatable/read/-_requirepermission"},next:{title:"Contract Addresses",permalink:"/zh/dev/resources/contract-addresses"}},c={},u=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"_requirepermissionallowingoverride"},"_requirePermissionAllowingOverride"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-abstract/jboperatable/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperatable")),"\u200b\u200c"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Require the message sender is either the account, has the specified permission, or the override condition is true.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function _requirePermissionAllowingOverride(\n  address _account,\n  uint256 _domain,\n  uint256 _permissionIndex,\n  bool _override\n) internal view { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_account")," is the account to allow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_domain")," is the domain namespace within which the permission index will be checked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_permissionIndex")," is the permission index that an operator must have within the specified domain to be allowed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_override")," is the override condition to allow."))),(0,a.kt)("li",{parentName:"ul"},"The resulting function is internal to this contract and its inheriters."),(0,a.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the override flag is on, or the message sender is the specified account, an operator of the account within the specified domain, or an operator of the account within the wildcard domain. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"if (\n  !_override &&\n  msg.sender != _account &&\n  !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\n  !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\n) revert UNAUTHORIZED();\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/properties/operatorstore"},(0,a.kt)("inlineCode",{parentName:"a"},"operatorStore")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jboperatorstore/read/haspermission"},(0,a.kt)("inlineCode",{parentName:"a"},"hasPermission"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/** \n  @notice\n  Require the message sender is either the account, has the specified permission, or the override condition is true.\n\n  @param _account The account to allow.\n  @param _domain The domain namespace within which the permission index will be checked.\n  @param _permissionIndex The permission index that an operator must have within the specified domain to be allowed.\n  @param _override The override condition to allow.\n*/\nfunction _requirePermissionAllowingOverride(\n  address _account,\n  uint256 _domain,\n  uint256 _permissionIndex,\n  bool _override\n) internal view {\n  if (\n    !_override &&\n    msg.sender != _account &&\n    !operatorStore.hasPermission(msg.sender, _account, _domain, _permissionIndex) &&\n    !operatorStore.hasPermission(msg.sender, _account, 0, _permissionIndex)\n  ) revert UNAUTHORIZED();\n}\n"))),(0,a.kt)(o.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"String"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"UNAUTHORIZED"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the override flag is off and the message sender is neither the specified account nor an operator of the specified account."))))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);