"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[66831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(m,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),m=n(7094),p=n(12466);const d="tabList__CuJ",s="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:c,values:k,groupId:y,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:v}=(0,m.U)(),[T,C]=(0,r.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=y){const e=_[y];null!=e&&e!==T&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==T&&(j(t),C(a),null!=y&&v(y,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},55808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={},m="_pay",p={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay",title:"_pay",description:"Contract: JBPayoutRedemptionPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_distributeToPayoutSplitsOf",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof"},next:{title:"_processFee",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee"}},d={},s=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"_pay"},"_pay"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),"\u200b\u200c"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contribute tokens to a project.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _pay(\n  uint256 _amount,\n  address _payer,\n  uint256 _projectId,\n  address _beneficiary,\n  uint256 _minReturnedTokens,\n  bool _preferClaimedTokens,\n  string memory _memo,\n  bytes memory _metadata\n) private returns (uint256 beneficiaryTokenCount) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the amount of terminal tokens being received, as a fixed point number with the same amount of decimals as this terminal. If this terminal's token is ETH, this is ignored and msg.value is used in its place."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_payer")," is the address making the payment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project being paid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_beneficiary")," is the address to mint tokens for and pass along to the funding cycle's data source and delegate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_minReturnedTokens")," is the minimum number of project tokens expected in return, as a fixed point number with the same amount of decimals as this terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_preferClaimedTokens")," is a flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_memo")," is memo to pass along to the emitted event, and passed along the the funding cycle's data source and delegate. A data source can alter the memo before emitting in the event and forwarding to the delegate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_metadata")," are bytes to send along to the data source, delegate, and emitted event, if provided."))),(0,r.kt)("li",{parentName:"ul"},"The function is private to this contract."),(0,r.kt)("li",{parentName:"ul"},"The function returns the number of tokens minted for the beneficiary, as a fixed point number with 18 decimals.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the provided beneficiary isn't the zero address."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Cant send tokens to the zero address.\nif (_beneficiary == address(0)) revert PAY_TO_ZERO_ADDRESS();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'The following scoped block is a bit of a hack to prevent a "Stack too deep" error. Define a few variables outside of the scope that\'ll be set within the scope but later referenced again outside.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Define variables that will be needed outside the scoped section below.\n// Keep a reference to the funding cycle during which the payment is being made.\nJBFundingCycle memory _fundingCycle;\n\n// Scoped section prevents stack too deep. `_delegate` and `_tokenCount` only used within scope.\n{ ... }\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Keep references to the delegate and token count that'll be returned from the subsequent function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"IJBPayDelegate _delegate;\nuint256 _tokenCount;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Keep a reference to the ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/data-structures/jbtokenamount"},(0,r.kt)("inlineCode",{parentName:"a"},"JBTokenAmount"))," structure with info about what's being paid."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Bundle the amount info into a JBTokenAmount struct.\nJBTokenAmount memory _bundledAmount = JBTokenAmount(token, _amount, decimals, currency);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Record the payment, and get a reference to the funding cycle during which the payment was made, the number of project tokens that should be minted as a result, a delegate to callback to, and an updated memo. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Record the payment.\n(_fundingCycle, _tokenCount, _delegate, _memo) = store.recordPaymentFrom(\n  _payer,\n  _bundledAmount,\n  _projectId,\n  baseWeightCurrency,\n  _beneficiary,\n  _memo,\n  _metadata\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/store"},(0,r.kt)("inlineCode",{parentName:"a"},"store")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordpaymentfrom"},(0,r.kt)("inlineCode",{parentName:"a"},"recordPaymentFrom"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mint tokens if needed. Get a reference to the number of tokens sent to the specified beneificiary as opposed to reserved to be distributed to the project's reserved token splits."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Mint the tokens if needed.\nif (_tokenCount > 0)\n  // Set token count to be the number of tokens minted for the beneficiary instead of the total amount.\n  beneficiaryTokenCount = IJBController(directory.controllerOf(_projectId)).mintTokensOf(\n    _projectId,\n    _tokenCount,\n    _beneficiary,\n    '',\n    _preferClaimedTokens,\n    true\n  );\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/directory"},(0,r.kt)("inlineCode",{parentName:"a"},"directory")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/properties/controllerof"},(0,r.kt)("inlineCode",{parentName:"a"},"controllerOf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/minttokensof"},(0,r.kt)("inlineCode",{parentName:"a"},"mintTokensOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the beneficiary is receiving at least as much tokens as the minimum specied."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// The token count for the beneficiary must be greater than or equal to the minimum expected.\nif (beneficiaryTokenCount < _minReturnedTokens) revert INADEQUATE_TOKEN_COUNT();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a delegate was provided, callback to its ",(0,r.kt)("inlineCode",{parentName:"p"},"didPay")," function, and emit an event with the relevant parameters.."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// If a delegate was returned by the data source, issue a callback to it.\nif (_delegate != IJBPayDelegate(address(0))) {\n  JBDidPayData memory _data = JBDidPayData(\n    _payer,\n    _projectId,\n    _fundingCycle.configuration,\n    _bundledAmount,\n    beneficiaryTokenCount,\n    _beneficiary,\n    _preferClaimedTokens,\n    _memo,\n    _metadata\n  );\n\n  _delegate.didPay(_data);\n  emit DelegateDidPay(_delegate, _data, msg.sender);\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpaydelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"didPay")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/delegatedidpay"},(0,r.kt)("inlineCode",{parentName:"a"},"DelegateDidPay"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pay")," event with the relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit Pay(\n  _fundingCycle.configuration,\n  _fundingCycle.number,\n  _projectId,\n  _beneficiary,\n  _amount,\n  beneficiaryTokenCount,\n  _memo,\n  _metadata,\n  msg.sender\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/pay"},(0,r.kt)("inlineCode",{parentName:"a"},"Pay"))))))),(0,r.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Contribute tokens to a project.\n\n  @param _amount The amount of terminal tokens being received, as a fixed point number with the same amount of decimals as this terminal. If this terminal's token is ETH, this is ignored and msg.value is used in its place.\n  @param _payer The address making the payment.\n  @param _projectId The ID of the project being paid.\n  @param _beneficiary The address to mint tokens for and pass along to the funding cycle's data source and delegate.\n  @param _minReturnedTokens The minimum number of project tokens expected in return, as a fixed point number with the same amount of decimals as this terminal.\n  @param _preferClaimedTokens A flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas.\n  @param _memo A memo to pass along to the emitted event, and passed along the the funding cycle's data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate.\n  @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\n\n  @return beneficiaryTokenCount The number of tokens minted for the beneficiary, as a fixed point number with 18 decimals.\n*/\nfunction _pay(\n  uint256 _amount,\n  address _payer,\n  uint256 _projectId,\n  address _beneficiary,\n  uint256 _minReturnedTokens,\n  bool _preferClaimedTokens,\n  string memory _memo,\n  bytes memory _metadata\n) private returns (uint256 beneficiaryTokenCount)  {\n  // Cant send tokens to the zero address.\n  if (_beneficiary == address(0)) revert PAY_TO_ZERO_ADDRESS();\n\n  // Define variables that will be needed outside the scoped section below.\n  // Keep a reference to the funding cycle during which the payment is being made.\n  JBFundingCycle memory _fundingCycle;\n\n  // Scoped section prevents stack too deep. `_delegate` and `_tokenCount` only used within scope.\n  {\n    IJBPayDelegate _delegate;\n    uint256 _tokenCount;\n\n    // Bundle the amount info into a JBTokenAmount struct.\n    JBTokenAmount memory _bundledAmount = JBTokenAmount(token, _amount, decimals, currency);\n\n    // Record the payment.\n    (_fundingCycle, _tokenCount, _delegate, _memo) = store.recordPaymentFrom(\n      _payer,\n      _bundledAmount,\n      _projectId,\n      baseWeightCurrency,\n      _beneficiary,\n      _memo,\n      _metadata\n    );\n\n    // Mint the tokens if needed.\n    if (_tokenCount > 0)\n      // Set token count to be the number of tokens minted for the beneficiary instead of the total amount.\n      beneficiaryTokenCount = IJBController(directory.controllerOf(_projectId)).mintTokensOf(\n        _projectId,\n        _tokenCount,\n        _beneficiary,\n        '',\n        _preferClaimedTokens,\n        true\n      );\n\n    // The token count for the beneficiary must be greater than or equal to the minimum expected.\n    if (beneficiaryTokenCount < _minReturnedTokens) revert INADEQUATE_TOKEN_COUNT();\n\n    // If a delegate was returned by the data source, issue a callback to it.\n    if (_delegate != IJBPayDelegate(address(0))) {\n      JBDidPayData memory _data = JBDidPayData(\n        _payer,\n        _projectId,\n        _fundingCycle.configuration,\n        _bundledAmount,\n        beneficiaryTokenCount,\n        _beneficiary,\n        _preferClaimedTokens,\n        _memo,\n        _metadata\n      );\n\n      _delegate.didPay(_data);\n      emit DelegateDidPay(_delegate, _data, msg.sender);\n    }\n  }\n\n  emit Pay(\n    _fundingCycle.configuration,\n    _fundingCycle.number,\n    _projectId,\n    _payer,\n    _beneficiary,\n    _amount,\n    beneficiaryTokenCount,\n    _memo,\n    _metadata,\n    msg.sender\n  );\n}\n"))),(0,r.kt)(o.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"PAY_TO_ZERO_ADDRESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the provided benificary is the zero address."))))),(0,r.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/pay"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pay")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed fundingCycleConfiguration")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed fundingCycleNumber")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address payer")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address beneficiary")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 beneficiaryTokenCount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string memo")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}c.isMDXComponent=!0}}]);