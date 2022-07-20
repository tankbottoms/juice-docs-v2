"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[4235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:k,groupId:f,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==T&&!h.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:_}=(0,s.U)(),[g,E]=(0,a.useState)(T),O=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==g&&h.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==g&&(R(t),E(r),null!=f&&_(f,String(r)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>O.push(e),onKeyDown:w,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":g===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},31986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},s="_reservedTokenAmountFrom",u={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom",id:"dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom",title:"_reservedTokenAmountFrom",description:"Gets the amount of reserved tokens currently tracked for a project given a reserved rate.",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/read",slug:"/dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom",permalink:"/dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"tokenStore",permalink:"/dev/api/contracts/or-controllers/jbcontroller/properties/tokenstore"},next:{title:"currentFundingCycleOf",permalink:"/dev/api/contracts/or-controllers/jbcontroller/read/currentfundingcycleof"}},c={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"_reservedtokenamountfrom"},"_reservedTokenAmountFrom"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gets the amount of reserved tokens currently tracked for a project given a reserved rate.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function _reservedTokenAmountFrom(\n  int256 _processedTokenTracker,\n  uint256 _reservedRate,\n  uint256 _totalEligibleTokens\n) internal pure returns (uint256) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_processedTokenTracker")," is the tracker to make the calculation with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_reservedRate")," is the reserved rate to use to make the calculation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_totalEligibleTokens")," is the total amount to make the calculation with."))),(0,a.kt)("li",{parentName:"ul"},"The resulting function is internal to this contract and its inheriters. "),(0,a.kt)("li",{parentName:"ul"},"The function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function returns the reserved token amount.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the number of tokens that have yet to be processed. This is the difference between the total eligible tokens and the tracker. If the tracker is negative, the difference can be found by adding its absolute value to the total eligible tokens."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the amount of tokens that are unprocessed.\nuint256 _unprocessedTokenBalanceOf = _processedTokenTracker >= 0\n  ? _totalEligibleTokens - uint256(_processedTokenTracker)\n  : _totalEligibleTokens + uint256(-_processedTokenTracker);\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there are no unprocessed tokens, there are no outstanding reserved tokens."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// If there are no unprocessed tokens, return.\nif (_unprocessedTokenBalanceOf == 0) return 0;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the reserved rate is 100%, the reserved token amount is equal to the unprocessed balance."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// If all tokens are reserved, return the full unprocessed amount.\nif (_reservedRate == JBConstants.MAX_RESERVED_RATE) return _unprocessedTokenBalanceOf;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbconstants"},(0,a.kt)("inlineCode",{parentName:"a"},"JBConstants")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".MAX_RESERVED_RATE")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The reserved token amount is the reserved percentage of the unprocessed balance."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"return\n  PRBMath.mulDiv(\n    _unprocessedTokenBalanceOf,\n    JBConstants.MAX_RESERVED_RATE,\n    JBConstants.MAX_RESERVED_RATE - _reservedRate\n  ) - _unprocessedTokenBalanceOf;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".mulDiv(...)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbconstants"},(0,a.kt)("inlineCode",{parentName:"a"},"JBConstants")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".MAX_RESERVED_RATE")))))))),(0,a.kt)(l.Z,{value:"Only code",label:"Only code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Gets the amount of reserved tokens currently tracked for a project given a reserved rate.\n\n  @param _processedTokenTracker The tracker to make the calculation with.\n  @param _reservedRate The reserved rate to use to make the calculation.\n  @param _totalEligibleTokens The total amount to make the calculation with.\n\n  @return amount reserved token amount.\n*/\nfunction _reservedTokenAmountFrom(\n  int256 _processedTokenTracker,\n  uint256 _reservedRate,\n  uint256 _totalEligibleTokens\n) internal pure returns (uint256) {\n  // Get a reference to the amount of tokens that are unprocessed.\n  uint256 _unprocessedTokenBalanceOf = _processedTokenTracker >= 0 \n    ? _totalEligibleTokens - uint256(_processedTokenTracker)\n    : _totalEligibleTokens + uint256(-_processedTokenTracker);\n\n  // If there are no unprocessed tokens, return.\n  if (_unprocessedTokenBalanceOf == 0) return 0;\n\n  // If all tokens are reserved, return the full unprocessed amount.\n  if (_reservedRate == JBConstants.MAX_RESERVED_RATE) return _unprocessedTokenBalanceOf;\n\n  return\n    PRBMath.mulDiv(\n      _unprocessedTokenBalanceOf,\n      JBConstants.MAX_RESERVED_RATE,\n      JBConstants.MAX_RESERVED_RATE - _reservedRate\n    ) - _unprocessedTokenBalanceOf;\n}\n"))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);