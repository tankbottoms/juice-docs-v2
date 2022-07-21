"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[30343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),p=n(7094),u=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t,n;const{lazy:o,block:c,defaultValue:d,values:f,groupId:h,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:_}=(0,p.U)(),[w,T]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==w&&(E(t),T(a),null!=h&&_(h,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:R,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},73334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={},p="_reclaimableOverflowDuring",u={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring",title:"_reclaimableOverflowDuring",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/read",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_overflowDuring",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_overflowduring"},next:{title:"currentOverflowOf",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof"}},m={},s=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"_reclaimableoverflowduring"},"_reclaimableOverflowDuring"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The amount of overflowed tokens from a terminal that can be reclaimed by the specified number of tokens  when measured from the specified.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If the project has an active funding cycle reconfiguration ballot, the project's ballot redemption rate is used.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _reclaimableOverflowDuring(\n  uint256 _projectId,\n  JBFundingCycle memory _fundingCycle,\n  uint256 _tokenCount,\n  uint256 _overflow\n) private view returns (uint256) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the reclaimable overflow amount for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_fundingCycle")," is the funding cycle during which reclaimable overflow is being calculated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_tokenCount")," is the number of tokens to make the calculation with, as a fixed point number with 18 decimals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_overflow")," is the amount of overflow to make the calculation with."))),(0,r.kt)("li",{parentName:"ul"},"The view function is private to this contract."),(0,r.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,r.kt)("li",{parentName:"ul"},"The function returns the amount of overflowed tokens that can be reclaimed, as a fixed point number with the same number of decimals as the ",(0,r.kt)("inlineCode",{parentName:"li"},"_overflow"),".")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there are reserved tokens, add them to the total supply for the purposes of this calculation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// If there are reserved tokens, add them to the total supply.\nif (_reservedTokenAmount > 0) _totalSupply = _totalSupply + _reservedTokenAmount;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the calculation is being made to find the claimable amount for all of a project's tokens, return the entire current overflow."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// If the amount being redeemed is the total supply, return the rest of the overflow.\nif (_tokenCount == _totalSupply) return _overflow;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the redemption rate that should be used in the redemption bonding curve formula. If the current funding cycle has an active ballot, use its ballot redemption rate, otherwise use the standard redemption rate. This lets projects configure different bonding curves depending on the state of pending reconfigurations. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Use the ballot redemption rate if the queued cycle is pending approval according to the previous funding cycle's ballot.\nuint256 _redemptionRate = fundingCycleStore.currentBallotStateOf(_projectId) ==\n  JBBallotState.Active\n  ? _fundingCycle.ballotRedemptionRate()\n  : _fundingCycle.redemptionRate();\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Enums used:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/enums/jbballotstate"},(0,r.kt)("inlineCode",{parentName:"a"},"JBBallotState")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".Active"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbfundingcyclemetadataresolver"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycleMetadataResolver")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ballotRedemptionRate(...)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".redemptionRate(...)"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/fundingcyclestore"},(0,r.kt)("inlineCode",{parentName:"a"},"fundingCycleStore")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbfundingcyclestore/read/currentballotstateof"},(0,r.kt)("inlineCode",{parentName:"a"},"currentBallotStateOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the redemption rate is 0%, nothing is claimable regardless of the amount of tokens."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// If the redemption rate is 0, nothing is claimable.\nif (_redemptionRate == 0) return 0;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The redemption bonding curve formula depends on a base claimable value that is the linear proportion of the provided tokens to the total supply of tokens. Get a reference to this proportion to use in the formula."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the linear proportion.\nuint256 _base = PRBMath.mulDiv(_overflow, _tokenCount, _totalSupply);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".mulDiv(...)")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return the claimable amount determined by a bonding curve. At a 100% bonding curve the linear base can be returned immediately, this outcome is naturally part of the curve \u2013 checking for it first could prevent an unnecessary and slightly more expensive mulDiv calculation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// These conditions are all part of the same curve. Edge conditions are separated because fewer operation are necessary.\nif (_redemptionRate == JBConstants.MAX_REDEMPTION_RATE) return _base;\n\nreturn\n  PRBMath.mulDiv(\n    _base,\n    _redemptionRate +\n      PRBMath.mulDiv(\n        _tokenCount,\n        JBConstants.MAX_REDEMPTION_RATE - _redemptionRate,\n        _totalSupply\n      ),\n    JBConstants.MAX_REDEMPTION_RATE\n  );\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".mulDiv(...)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbconstants"},(0,r.kt)("inlineCode",{parentName:"a"},"JBConstants")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".MAX_REDEMPTION_RATE")))))))),(0,r.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  The amount of overflowed tokens from a terminal that can be reclaimed by the specified number of tokens when measured from the specified.\n\n  @dev \n  If the project has an active funding cycle reconfiguration ballot, the project's ballot redemption rate is used.\n\n  @param _projectId The ID of the project to get the reclaimable overflow amount for.\n  @param _fundingCycle The funding cycle during which reclaimable overflow is being calculated.\n  @param _tokenCount The number of tokens to make the calculation with, as a fixed point number with 18 decimals.\n  @param _totalSupply The total supply of tokens to make the calculation with, as a fixed point number with 18 decimals.\n  @param _overflow The amount of overflow to make the calculation with.\n\n  @return The amount of overflowed tokens that can be reclaimed, as a fixed point number with the same number of decimals as the `_overflow`.\n*/\nfunction _reclaimableOverflowDuring(\n  uint256 _projectId,\n  JBFundingCycle memory _fundingCycle,\n  uint256 _tokenCount,\n  uint256 _totalSupply,\n  uint256 _overflow\n) private view returns (uint256) {\n  // If there are reserved tokens, add them to the total supply.\n  if (_reservedTokenAmount > 0) _totalSupply = _totalSupply + _reservedTokenAmount;\n\n  // If the amount being redeemed is the total supply, return the rest of the overflow.\n  if (_tokenCount == _totalSupply) return _overflow;\n\n  // Use the ballot redemption rate if the queued cycle is pending approval according to the previous funding cycle's ballot.\n  uint256 _redemptionRate = fundingCycleStore.currentBallotStateOf(_projectId) ==\n    JBBallotState.Active\n    ? _fundingCycle.ballotRedemptionRate()\n    : _fundingCycle.redemptionRate();\n\n  // If the redemption rate is 0, nothing is claimable.\n  if (_redemptionRate == 0) return 0;\n\n  // Get a reference to the linear proportion.\n  uint256 _base = PRBMath.mulDiv(_overflow, _tokenCount, _totalSupply);\n\n  // These conditions are all part of the same curve. Edge conditions are separated because fewer operation are necessary.\n  if (_redemptionRate == JBConstants.MAX_REDEMPTION_RATE) return _base;\n\n  return\n    PRBMath.mulDiv(\n      _base,\n      _redemptionRate +\n        PRBMath.mulDiv(\n          _tokenCount,\n          JBConstants.MAX_REDEMPTION_RATE - _redemptionRate,\n          _totalSupply\n        ),\n      JBConstants.MAX_REDEMPTION_RATE\n    );\n}\n"))),(0,r.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);