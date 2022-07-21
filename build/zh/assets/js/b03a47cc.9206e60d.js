"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[35326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),c=n(7094),u=n(12466);const p="tabList__CuJ",s="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:h,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,i.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:N}=(0,c.U)(),[T,j]=(0,r.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==T&&k.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==T&&(O(t),j(a),null!=h&&N(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=_.indexOf(e.currentTarget)+1;n=null!=(a=_[t])?a:_[0];break}case"ArrowLeft":{var r;const t=_.indexOf(e.currentTarget)-1;n=null!=(r=_[t])?r:_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>_.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},64466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},c="overflowAllowanceOf",u={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof",id:"dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof",title:"overflowAllowanceOf",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/read",slug:"/dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"latestConfiguredFundingCycleOf",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/latestconfiguredfundingcycleof"},next:{title:"queuedFundingCycleOf",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/queuedfundingcycleof"}},p={},s=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overflowallowanceof"},"overflowAllowanceOf"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbcontroller"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBController"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it's in terms of.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The number of decimals in the returned fixed point amount is the same as that of the specified terminal.")),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function overflowAllowanceOf(\n  uint256 _projectId,\n  uint256 _configuration,\n  IJBPaymentTerminal _terminal,\n  address _token\n) external view override returns (uint256, uint256) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the overflow allowance of."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_configuration")," is the configuration of the during which the allowance applies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_terminal")," is the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPaymentTerminal"))," managing the overflow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_token")," is the token for which the overflow allowance applies."),(0,r.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,r.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,r.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbcontroller"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function returns:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overflowAllowance")," is the overflow allowance, as a fixed point number with the same number of decimals as the provided terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overflowAllowanceCurrency")," is the currency from ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbcurrencies"},(0,r.kt)("inlineCode",{parentName:"a"},"JBCurrencies"))," that the returned overflow allowance is in terms of.")))),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the packed overflow allowance data."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the packed data.\nuint256 _data = _packedOverflowAllowanceDataOf[_projectId][_configuration][_terminal];\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/properties/-_packedoverflowallowancedataof"},(0,r.kt)("inlineCode",{parentName:"a"},"_packedOverflowAllowanceDataOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return the overflow allowance, which is in the first 248 bits, and the currency the overflow allowance is in terms of, which is in the last 8 bits."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// The allowance is in bits 0-231. The currency is in bits 232-255.\nreturn (uint256(uint232(_data)), _data >> 232);\n"))))),(0,r.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The amount of overflow that a project is allowed to tap into on-demand throughout a configuration, and the currency it's in terms of.\n\n  @dev\n  The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \n\n  @param _projectId The ID of the project to get the overflow allowance of.\n  @param _configuration The configuration of the during which the allowance applies.\n  @param _terminal The terminal managing the overflow.\n  @param _token The token for which the overflow allowance applies.\n\n  @return The overflow allowance, as a fixed point number with the same number of decimals as the provided terminal.\n  @return The currency of the overflow allowance.\n*/\nfunction overflowAllowanceOf(\n  uint256 _projectId,\n  uint256 _configuration,\n  IJBPaymentTerminal _terminal,\n  address _terminal\n) external view override returns (uint256, uint256) {\n  // Get a reference to the packed data.\n  uint256 _data = _packedOverflowAllowanceDataOf[_projectId][_configuration][_terminal][_token];\n\n  // The allowance is in bits 0-231. The currency is in bits 232-255.\n  return (uint256(uint232(_data)), _data >> 232);\n}\n"))),(0,r.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);