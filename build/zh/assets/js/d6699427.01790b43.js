"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[16169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),u=n(7094),c=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function s(e){var t,n;const{lazy:l,block:s,defaultValue:d,values:f,groupId:b,className:k}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,u.U)(),[_,j]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=b){const e=w[b];null!=e&&e!==_&&v.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==_&&(T(t),j(r),null!=b&&N(b,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},43666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},u="currentReclaimableOverflowOf",c={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof2",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof2",title:"currentReclaimableOverflowOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof2.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/read",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof2",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof2",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof2.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"currentReclaimableOverflowOf",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof1"},next:{title:"currentTotalOverflowOf",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currenttotaloverflowof"}},p={},m=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"currentreclaimableoverflowof"},"currentReclaimableOverflowOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The current amount of overflowed tokens from a terminal that can be reclaimed by the specified number of tokens, using the specified total token supply and overflow amounts.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If the project has an active funding cycle reconfiguration ballot, the project's ballot redemption rate is used.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function currentReclaimableOverflowOf(\n  uint256 _projectId,\n  uint256 _tokenCount,\n  uint256 _totalSupply,\n  uint256 _overflow\n) external view override returns (uint256) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the reclaimable overflow amount for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_tokenCount")," is the number of tokens to make the calculation with, as a fixed point number with 18 decimals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_totalSupply")," is the total number of tokens to make the calculation with, as a fixed point number with 18 decimals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_overflow")," is the amount of overflow to make the calculation with, as a fixed point number."))),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns the amount of overflowed tokens that can be reclaimed, as a fixed point number with the same number of decimals as the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"_overflow"),".")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there's no overflow, there's nothing reclaimable."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// If there's no overflow, there's no reclaimable overflow.\nif (_overflow == 0) return 0;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the provided token count is within the bounds of the total supply."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Can't redeem more tokens that is in the supply.\nif (_tokenCount > _totalSupply) return 0;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's current funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's current funding cycle.\nJBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return the reclaimable overflow using the project's current funding cycle and the provided parameters. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// If there is no overflow, nothing is reclaimable.\nreturn\n  _reclaimableOverflowDuring(_projectId, _fundingCycle, _tokenCount, _totalSupply, _overflow);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring"},(0,a.kt)("inlineCode",{parentName:"a"},"_reclaimableOverflowDuring"))))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The current amount of overflowed tokens from a terminal that can be reclaimed by the specified number of tokens, using the specified total token supply and overflow amounts.\n\n  @dev \n  If the project has an active funding cycle reconfiguration ballot, the project's ballot redemption rate is used.\n\n  @param _projectId The ID of the project to get the reclaimable overflow amount for.\n  @param _tokenCount The number of tokens to make the calculation with, as a fixed point number with 18 decimals.\n  @param _totalSupply The total number of tokens to make the calculation with, as a fixed point number with 18 decimals.\n  @param _overflow The amount of overflow to make the calculation with, as a fixed point number.\n\n  @return The amount of overflowed tokens that can be reclaimed, as a fixed point number with the same number of decimals as the provided `_overflow`.\n*/\nfunction currentReclaimableOverflowOf(\n  uint256 _projectId,\n  uint256 _tokenCount,\n  uint256 _totalSupply,\n  uint256 _overflow\n) external view override returns (uint256) {\n  // If there's no overflow, there's no reclaimable overflow.\n  if (_overflow == 0) return 0;\n\n  // Can't redeem more tokens that is in the supply.\n  if (_tokenCount > _totalSupply) return 0;\n\n  // Get a reference to the project's current funding cycle.\n  JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n\n  // Return the reclaimable overflow amount.\n  return\n    _reclaimableOverflowDuring(_projectId, _fundingCycle, _tokenCount, _totalSupply, _overflow);\n}\n"))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);