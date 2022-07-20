"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[26311],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),l=r(67392),s=r(7094),p=r(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,r;const{lazy:i,block:d,defaultValue:m,values:h,groupId:f,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),N=(0,l.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?t:b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:_}=(0,s.U)(),[O,T]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,r=w.indexOf(t),n=v[r].value;n!==O&&(x(t),T(n),null!=f&&_(f,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;r=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},38354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),i=r(85162);const l={},s="hasPermission",p={unversionedId:"dev/api/contracts/jboperatorstore/read/haspermission",id:"dev/api/contracts/jboperatorstore/read/haspermission",title:"hasPermission",description:"Contract: JBOperatorStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jboperatorstore/read/haspermission.md",sourceDirName:"dev/api/contracts/jboperatorstore/read",slug:"/dev/api/contracts/jboperatorstore/read/haspermission",permalink:"/dev/api/contracts/jboperatorstore/read/haspermission",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jboperatorstore/read/haspermission.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_packedPermissions",permalink:"/dev/api/contracts/jboperatorstore/read/-_packedpermissions"},next:{title:"hasPermissions",permalink:"/dev/api/contracts/jboperatorstore/read/haspermissions"}},c={},u=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"haspermission"},"hasPermission"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/jboperatorstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperatorStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijboperatorstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Whether or not an operator has the permission to take a certain action pertaining to the specified domain.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function hasPermissions(\n  address _operator,\n  address _account,\n  uint256 _domain,\n  uint256[] calldata _permissionIndexes\n) external view override returns (bool) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_operator")," is the operator to check"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_account")," is the account that has given out permission to the operator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_domain")," is the domain that the operator has been given permissions to operate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_permissionIndexes")," are the permission index to check for."),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijboperatorstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns a flag indicating whether the operator has the specified permission.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"_permissionIndex")," is one of the 255 indexes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"if (_permissionIndex > 255) revert PERMISSION_INDEX_OUT_OF_BOUNDS();\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return true if the bit is flipped on for the specified permission index. Otherwise return false."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"return (((permissionsOf[_operator][_account][_domain] >> _permissionIndex) & 1) == 1)\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jboperatorstore/properties/permissionsof"},(0,a.kt)("inlineCode",{parentName:"a"},"permissionsOf"))))))),(0,a.kt)(i.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/** \n  @notice \n  Whether or not an operator has the permission to take a certain action pertaining to the specified domain.\n\n  @param _operator The operator to check.\n  @param _account The account that has given out permissions to the operator.\n  @param _domain The domain that the operator has been given permissions to operate.\n  @param _permissionIndex The permission index to check for.\n\n  @return A flag indicating whether the operator has the specified permission.\n*/\nfunction hasPermission(\n  address _operator,\n  address _account,\n  uint256 _domain,\n  uint256 _permissionIndex\n) external view override returns (bool) {\n  if (_permissionIndex > 255) revert PERMISSION_INDEX_OUT_OF_BOUNDS();\n\n  return (((permissionsOf[_operator][_account][_domain] >> _permissionIndex) & 1) == 1);\n}\n"))),(0,a.kt)(i.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"String"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"PERMISSION_INDEX_OUT_OF_BOUNDS"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the provided index is more than whats supported in a ",(0,a.kt)("inlineCode",{parentName:"td"},"uint256"),"."))))),(0,a.kt)(i.Z,{value:"",label:"",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);