"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[36290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(t),d=a,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(86010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(87462),a=t(67294),l=t(86010),o=t(72389),i=t(67392),c=t(7094),m=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function s(e){var n,t;const{lazy:o,block:s,defaultValue:d,values:f,groupId:k,className:N}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),g=(0,i.l)(y,((e,n)=>e.value===n.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(n=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:v}=(0,c.U)(),[_,T]=(0,a.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=k){const e=w[k];null!=e&&e!==_&&y.some((n=>n.value===e))&&T(e)}const C=e=>{const n=e.currentTarget,t=I.indexOf(n),r=y[t].value;r!==_&&(O(n),T(r),null!=k&&v(k,String(r)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=I.indexOf(e.currentTarget)+1;t=null!=(r=I[n])?r:I[0];break}case"ArrowLeft":{var a;const n=I.indexOf(e.currentTarget)-1;t=null!=(a=I[n])?a:I[I.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},N)},y.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:e=>I.push(e),onKeyDown:A,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==_})))))}function d(e){const n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},25430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var r=t(87462),a=(t(67294),t(3905)),l=t(65488),o=t(85162);const i={},c="recordUsedAllowanceOf",m={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordusedallowanceof",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordusedallowanceof",title:"recordUsedAllowanceOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordusedallowanceof.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/write",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordusedallowanceof",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordusedallowanceof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordusedallowanceof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"recordRedemptionFor",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordredemptionfor"},next:{title:"JBPayoutRedemptionPaymentTerminal",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"}},u={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recordusedallowanceof"},"recordUsedAllowanceOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Records newly used allowance funds of a project.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The msg.sender must be an ",(0,a.kt)("a",{parentName:"em",href:"/dev/api/interfaces/ijbpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminal")),".")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function recordUsedAllowanceOf(\n  uint256 _projectId,\n  uint256 _amount,\n  uint256 _currency\n)\n  external\n  override\n  nonReentrant\n  returns (JBFundingCycle memory fundingCycle, uint256 usedAmount) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to use the allowance of."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_amount")," is the amount to use from the allowance, as a fixed point number. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_currency")," is the currency of the ",(0,a.kt)("inlineCode",{parentName:"li"},"_amount"),". Must match the currency of the overflow allowance."))),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fundingCycle")," is the funding cycle during which the withdrawal was made."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"usedAmount")," is the amount of terminal tokens used, as a fixed point number with the same amount of decimals as its relative terminal.")))),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's first funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's current funding cycle.\nfundingCycle = fundingCycleStore.currentOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the new used overflow allowance for this funding cycle configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the new used overflow allowance for this funding cycle configuration.\nuint256 _newUsedOverflowAllowanceOf = usedOverflowAllowanceOf[\n  IJBSingleTokenPaymentTerminal(msg.sender)\n][_projectId][fundingCycle.configuration] + _amount;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof"},(0,a.kt)("inlineCode",{parentName:"a"},"usedOverflowAllowanceOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the overflow allowance of the project during the current funding cycle configuration, and the currency the overflow allowance is in terms of."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// There must be sufficient allowance available.\n(uint256 _overflowAllowanceOf, uint256 _overflowAllowanceCurrency) = IJBController(\n  directory.controllerOf(_projectId)\n).overflowAllowanceOf(\n    _projectId,\n    fundingCycle.configuration,\n    IJBSingleTokenPaymentTerminal(msg.sender),\n    IJBSingleTokenPaymentTerminal(msg.sender).token()\n  );\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/properties/controllerof"},(0,a.kt)("inlineCode",{parentName:"a"},"controllerOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/read/overflowallowanceof"},(0,a.kt)("inlineCode",{parentName:"a"},"overflowAllowanceOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/token"},(0,a.kt)("inlineCode",{parentName:"a"},"token"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure there's enough allowance left to accomodate the new used amount."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Make sure the new used amount is within the allowance.\nif (_newUsedOverflowAllowanceOf > _overflowAllowanceOf || _overflowAllowanceOf == 0)\n  revert INADEQUATE_CONTROLLER_ALLOWANCE();\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make the sure the provided currency matches the expected currency for the overflow allowance."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Make sure the currencies match.\nif (_currency != _overflowAllowanceCurrency) revert CURRENCY_MISMATCH();\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the terminal's currency."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the terminal's currency.\nuint256 _balanceCurrency = IJBSingleTokenPaymentTerminal(msg.sender).currency();\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the current distribution limit of the project during the current funding cycle configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get the current funding target\nuint256 distributionLimit =\n  directory.controllerOf(_projectId).distributionLimitOf(\n    _projectId,\n    fundingCycle.configuration,\n    terminal\n  );\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/properties/controllerof"},(0,a.kt)("inlineCode",{parentName:"a"},"controllerOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/read/distributionlimitof"},(0,a.kt)("inlineCode",{parentName:"a"},"distributionLimitOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Calculate how much of the balance will be used. If the currency of the allowance and the balance are the same, no price conversion is necessary. Otherwise, convert the allowance currency to that of the balance. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Convert the amount to this store's terminal's token.\nusedAmount = (_currency == _balanceCurrency)\n  ? _amount\n  : PRBMath.mulDiv(\n    _amount,\n    10**_MAX_FIXED_POINT_FIDELITY, // Use _MAX_FIXED_POINT_FIDELITY to keep as much of the `_amount.value`'s fidelity as possible when converting.\n    prices.priceFor(_currency, _balanceCurrency, _MAX_FIXED_POINT_FIDELITY)\n  );\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".mulDiv(...)"))))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/-_max_fixed_point_fidelity"},(0,a.kt)("inlineCode",{parentName:"a"},"_MAX_FIXED_POINT_FIDELITY")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbprices/read/pricefor"},(0,a.kt)("inlineCode",{parentName:"a"},"priceFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the amount being used is available in overflow."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// The amount being distributed must be available in the overflow.\nif (\n  usedAmount >\n  _overflowDuring(\n    IJBSingleTokenPaymentTerminal(msg.sender),\n    _projectId,\n    fundingCycle,\n    _balanceCurrency\n  )\n) revert INADEQUATE_PAYMENT_TERMINAL_STORE_BALANCE();\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_overflowduring"},(0,a.kt)("inlineCode",{parentName:"a"},"_overflowDuring"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store the incremented value that tracks how much of a project's allowance was used during the current funding cycle configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Store the incremented value.\nusedOverflowAllowanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId][\n  fundingCycle.configuration\n] = _newUsedOverflowAllowanceOf;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof"},(0,a.kt)("inlineCode",{parentName:"a"},"usedOverflowAllowanceOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store the decremented balance."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Update the project's balance.\nbalanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId] =\n  balanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId] -\n  usedAmount;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/balanceof"},(0,a.kt)("inlineCode",{parentName:"a"},"balanceOf"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Records newly used allowance funds of a project.\n\n  @dev\n  The msg.sender must be an IJBSingleTokenPaymentTerminal. \n\n  @param _projectId The ID of the project to use the allowance of.\n  @param _amount The amount to use from the allowance, as a fixed point number. \n  @param _currency The currency of the `_amount`. Must match the currency of the overflow allowance.\n  @param _balanceCurrency The currency that the balance is expected to be in terms of.\n\n  @return fundingCycle The funding cycle during which the overflow allowance is being used.\n  @return usedAmount The amount of terminal tokens used, as a fixed point number with the same amount of decimals as its relative terminal.\n*/\nfunction recordUsedAllowanceOf(\n  uint256 _projectId,\n  uint256 _amount,\n  uint256 _currency,\n  uint256 _balanceCurrency\n)\n  external\n  override\n  nonReentrant\n  returns (JBFundingCycle memory fundingCycle, uint256 usedAmount)\n{\n  // Get a reference to the project's current funding cycle.\n  fundingCycle = fundingCycleStore.currentOf(_projectId);\n\n  // Get a reference to the new used overflow allowance for this funding cycle configuration.\n  uint256 _newUsedOverflowAllowanceOf = usedOverflowAllowanceOf[\n    IJBSingleTokenPaymentTerminal(msg.sender)\n  ][_projectId][fundingCycle.configuration] + _amount;\n\n  // There must be sufficient allowance available.\n  (uint256 _overflowAllowanceOf, uint256 _overflowAllowanceCurrency) = IJBController(\n    directory.controllerOf(_projectId)\n  ).overflowAllowanceOf(\n      _projectId,\n      fundingCycle.configuration,\n      IJBSingleTokenPaymentTerminal(msg.sender),\n      IJBSingleTokenPaymentTerminal(msg.sender).token()\n    );\n\n  // Make sure the new used amount is within the allowance.\n  if (_newUsedOverflowAllowanceOf > _overflowAllowanceOf || _overflowAllowanceOf == 0)\n    revert INADEQUATE_CONTROLLER_ALLOWANCE();\n\n  // Make sure the currencies match.\n  if (_currency != _overflowAllowanceCurrency) revert CURRENCY_MISMATCH();\n\n  // Get a reference to the terminal's currency.\n  uint256 _balanceCurrency = IJBSingleTokenPaymentTerminal(msg.sender).currency();\n\n  // Convert the amount to this store's terminal's token.\n  usedAmount = (_currency == _balanceCurrency)\n    ? _amount\n    : PRBMath.mulDiv(\n      _amount,\n      10**_MAX_FIXED_POINT_FIDELITY, // Use _MAX_FIXED_POINT_FIDELITY to keep as much of the `_amount.value`'s fidelity as possible when converting.\n      prices.priceFor(_currency, _balanceCurrency, _MAX_FIXED_POINT_FIDELITY)\n    );\n\n  // The amount being distributed must be available in the overflow.\n  if (\n    usedAmount >\n    _overflowDuring(\n      IJBSingleTokenPaymentTerminal(msg.sender),\n      _projectId,\n      fundingCycle,\n      _balanceCurrency\n    )\n  ) revert INADEQUATE_PAYMENT_TERMINAL_STORE_BALANCE();\n\n  // Store the incremented value.\n  usedOverflowAllowanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId][\n    fundingCycle.configuration\n  ] = _newUsedOverflowAllowanceOf;\n\n  // Update the project's balance.\n  balanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId] =\n    balanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId] -\n    usedAmount;\n}\n"))),(0,a.kt)(o.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"String"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"CURRENCY_MISMATCH"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the currency of the specified amount doesn't match the currency of the project's current funding cycle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"INADEQUATE_CONTROLLER_ALLOWANCE"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if there isn't enough allowance for the specified terminal to fulfill the desired withdrawal.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"INADEQUATE_PAYMENT_TERMINAL_STORE_BALANCE"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the project's balance isn't sufficient to fulfill the desired withdrawal."))))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);