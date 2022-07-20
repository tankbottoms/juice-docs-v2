"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[87983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),i=n(67294),a=n(86010),o=n(72389),l=n(67392),u=n(7094),c=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:f,groupId:b,className:h}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:T}=(0,u.U)(),[_,j]=(0,i.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=b){const e=g[b];null!=e&&e!==_&&v.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==_&&(O(t),j(r),null!=b&&T(b,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;n=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var i;const t=w.indexOf(e.currentTarget)-1;n=null!=(i=w[t])?i:w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return i.createElement(p,(0,r.Z)({key:String(t)},e))}},83256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(65488),o=n(85162);const l={},u="distributionLimitOf",c={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof",id:"dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof",title:"distributionLimitOf",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/read",slug:"/dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"currentFundingCycleOf",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/currentfundingcycleof"},next:{title:"currentFundingCycleOf",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/getfundingcycleof"}},s={},d=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributionlimitof"},"distributionLimitOf"),(0,i.kt)("p",null,"Contract: ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,i.kt)("p",null,"Interface: ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbcontroller"},(0,i.kt)("inlineCode",{parentName:"a"},"IJBController"))),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The amount of token that a project can distribute per funding cycle, and the currency it's in terms of.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The number of decimals in the returned fixed point amount is the same as that of the specified terminal.")),(0,i.kt)("h3",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function distributionLimitOf(\n  uint256 _projectId,\n  uint256 _configuration,\n  IJBPaymentTerminal _terminal,\n  address _token\n) external view override returns (uint256, uint256) { ... }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arguments:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the distribution limit of."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_configuration")," is the configuration during which the distribution limit applies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_terminal")," is the ",(0,i.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpaymentterminal"},(0,i.kt)("inlineCode",{parentName:"a"},"IJBPaymentTerminal"))," from which distributions are being limited."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_token")," is the token for which the distribution limit applies."),(0,i.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,i.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,i.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,i.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbcontroller"},(0,i.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface."),(0,i.kt)("li",{parentName:"ul"},"The function returns:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distributionLimit")," is the distribution limit, as a fixed point number with the same number of decimals as the provided terminal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distributionLimitCurrency")," is the currency from ",(0,i.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbcurrencies"},(0,i.kt)("inlineCode",{parentName:"a"},"JBCurrencies"))," that the returned distribution limit is in terms of.")))),(0,i.kt)("h4",{id:"body"},"Body"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get a reference to the packed distribution limit data."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"// Get a reference to the packed data.\nuint256 _data = _packedDistributionLimitDataOf[_projectId][_configuration][_terminal][_token];\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Internal references:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/properties/-_packeddistributionlimitdataof"},(0,i.kt)("inlineCode",{parentName:"a"},"_packedDistributionLimitDataOf"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Return the distribution limit, which is in the first 248 bits, and the currency the distribution limit is in terms of, which is in the last 8 bits."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"// The limit is in bits 0-231. The currency is in bits 232-255.\nreturn (uint256(uint232(_data)), _data >> 232);\n"))))),(0,i.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The amount of token that a project can distribute per funding cycle, and the currency it's in terms of.\n\n  @dev\n  The number of decimals in the returned fixed point amount is the same as that of the specified terminal. \n\n  @param _projectId The ID of the project to get the distribution limit of.\n  @param _configuration The configuration during which the distribution limit applies.\n  @param _terminal The terminal from which distributions are being limited.\n  @param _token The token for which the distribution limit applies.\n\n  @return The distribution limit, as a fixed point number with the same number of decimals as the provided terminal.\n  @return The currency of the distribution limit.\n*/\nfunction distributionLimitOf(\n  uint256 _projectId,\n  uint256 _configuration,\n  IJBPaymentTerminal _terminal,\n  address _token\n) external view override returns (uint256, uint256) {\n  // Get a reference to the packed data.\n  uint256 _data = _packedDistributionLimitDataOf[_projectId][_configuration][_terminal][_token];\n\n  // The limit is in bits 0-231. The currency is in bits 232-255.\n  return (uint256(uint248(_data)), _data >> 232);\n}\n"))),(0,i.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optimization")),(0,i.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,i.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Low severity")),(0,i.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,i.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"High severity")),(0,i.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,i.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);