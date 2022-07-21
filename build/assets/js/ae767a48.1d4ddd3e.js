"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:c,values:f,groupId:y,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=f?f:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(_,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!_.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+_.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.U)(),[T,A]=(0,r.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=y){const e=g[y];null!=e&&e!==T&&_.some((t=>t.value===e))&&A(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),a=_[n].value;a!==T&&(I(t),A(a),null!=y&&v(y,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=j.indexOf(e.currentTarget)+1;n=null!=(a=j[t])?a:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;n=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},_.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:E,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={},s="_distributeToPayoutSplitsOf",p={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof",title:"_distributeToPayoutSplitsOf",description:"Contract: JBPayoutRedemptionPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributetopayoutsplitsof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_distributePayoutsOf",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributepayoutsof"},next:{title:"_pay",permalink:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay"}},u={},m=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"_distributetopayoutsplitsof"},"_distributeToPayoutSplitsOf"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),"\u200b\u200c"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pays out splits for a project's funding cycle configuration.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _distributeToPayoutSplitsOf(\n  uint256 _projectId,\n  uint256 _domain,\n  uint256 _group,\n  uint256 _amount,\n  uint256 _feeDiscount\n) private returns (uint256 leftoverAmount, uint256 feeEligibleDistributionAmount) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project for which payout splits are being distributed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_domain")," is the domain of the splits to distribute the payout between."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_group")," is the group of the splits to distribute the payout between."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the total amount being distributed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_feeDiscount")," is the amount of discount to apply to the fee, out of the MAX_FEE."))),(0,r.kt)("li",{parentName:"ul"},"The function is private to this contract."),(0,r.kt)("li",{parentName:"ul"},"The function returns: the leftover amount if the splits don't add up to 100%"),(0,r.kt)("li",{parentName:"ul"},"The function returns:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leftoverAmount")," is leftover amount if the splits don't add up to 100%."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feeEligibleDistributionAmount")," is the amount distributed to splits from which fees can be taken.")))),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the passed in amount as the leftover amount that will be returned. The subsequent routine will decrement the leftover amount as splits are settled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set the leftover amount to the initial amount.\nleftoverAmount = _amount;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to payout splits for the current funding cycle configuration of the project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the project's payout splits.\nJBSplit[] memory _splits = splitsStore.splitsOf(_projectId, _domain, _group);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/splitsstore"},(0,r.kt)("inlineCode",{parentName:"a"},"splitsStore")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsplitsstore/read/splitsof"},(0,r.kt)("inlineCode",{parentName:"a"},"splitsOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Loop through each split."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Transfer between all splits.\nfor (uint256 _i = 0; _i < _splits.length;) { ... }\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the current split being iterated on."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the mod being iterated on.\nJBSplit memory _split = _splits[_i];\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the payout amount that should be sent to the current split. This amount is the total amount multiplied by the percentage of the split, which is a number out of 10000000."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// The amount to send towards mods.\nuint256 _payoutAmount = PRBMath.mulDiv(\n  _amount,\n  _split.percent,\n  JBConstants.SPLITS_TOTAL_PERCENT\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".mulDiv(...)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbconstants"},(0,r.kt)("inlineCode",{parentName:"a"},"JBConstants")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".SPLITS_TOTAL_PERCENT")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there's at least some funds to send to the payout, determine where they should go, making sure to only debit a fee if the funds are leaving this contract and not going to a feeless terminal. If the split has an ",(0,r.kt)("inlineCode",{parentName:"p"},"allocator")," set, send the funds to its ",(0,r.kt)("inlineCode",{parentName:"p"},"allocate")," function, passing along any relevant params. Otherwise if a ",(0,r.kt)("inlineCode",{parentName:"p"},"projectId")," is specified in the split, send the payout to that project. Add to the project's balance if the split has a preference to do so, otherwise send a payment and use the split's ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," as the address that should receive the project's tokens in return, or use the message sender if a beneficiary wasn't provided. If no project was specified, send the funds directly to the ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," address from the split if one was provided. If the split didn't give any routing information, send the amount to the messag sender. Decrement the ",(0,r.kt)("inlineCode",{parentName:"p"},"leftoverAmount")," once the split is settled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"if (_payoutAmount > 0) {\n  // Transfer tokens to the split.\n  // If there's an allocator set, transfer to its `allocate` function.\n  if (_split.allocator != IJBSplitAllocator(address(0))) {\n    // If the split allocator is set as feeless, this distribution is not eligible for a fee.\n    if (isFeelessAddress[address(_split.allocator)])\n      _netPayoutAmount = _payoutAmount;\n      // This distribution is eligible for a fee since the funds are leaving this contract and the allocator isn't listed as feeless.\n    else {\n      unchecked {\n        _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\n          ? _payoutAmount\n          : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\n      }\n\n      // This distribution is eligible for a fee since the funds are leaving the ecosystem.\n      feeEligibleDistributionAmount += _payoutAmount;\n    }\n\n    // Trigger any inherited pre-transfer logic.\n    _beforeTransferTo(address(_split.allocator), _netPayoutAmount);\n\n    // If this terminal's token is ETH, send it in msg.value.\n    uint256 _payableValue = token == JBTokens.ETH ? _netPayoutAmount : 0;\n\n    // Create the data to send to the allocator.\n    JBSplitAllocationData memory _data = JBSplitAllocationData(\n      token,\n      _netPayoutAmount,\n      decimals,\n      _projectId,\n      _group,\n      _split\n    );\n\n    // Trigger the allocator's `allocate` function.\n    _split.allocator.allocate{value: _payableValue}(_data);\n\n    // Otherwise, if a project is specified, make a payment to it.\n  } else if (_split.projectId != 0) {\n    // Get a reference to the Juicebox terminal being used.\n    IJBPaymentTerminal _terminal = directory.primaryTerminalOf(_split.projectId, token);\n\n    // The project must have a terminal to send funds to.\n    if (_terminal == IJBPaymentTerminal(address(0))) revert TERMINAL_IN_SPLIT_ZERO_ADDRESS();\n\n    // Save gas if this contract is being used as the terminal.\n    if (_terminal == this) {\n      // This distribution does not incur a fee.\n      _netPayoutAmount = _payoutAmount;\n\n      // Send the projectId in the metadata.\n      bytes memory _projectMetadata = new bytes(32);\n      _projectMetadata = bytes(abi.encodePacked(_projectId));\n\n      // Add to balance if prefered.\n      if (_split.preferAddToBalance)\n        _addToBalanceOf(_split.projectId, _netPayoutAmount, false, '', _projectMetadata);\n      else\n        _pay(\n          _netPayoutAmount,\n          address(this),\n          _split.projectId,\n          (_split.beneficiary != address(0)) ? _split.beneficiary : msg.sender,\n          0,\n          _split.preferClaimed,\n          '',\n          _projectMetadata\n        );\n    } else {\n      // If the terminal is set as feeless, this distribution is not eligible for a fee.\n      if (isFeelessAddress[address(_terminal)])\n        _netPayoutAmount = _payoutAmount;\n        // This distribution is eligible for a fee since the funds are leaving this contract and the terminal isn't listed as feeless.\n      else {\n        unchecked {\n          _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\n            ? _payoutAmount\n            : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\n        }\n\n        feeEligibleDistributionAmount += _payoutAmount;\n      }\n\n      // Trigger any inherited pre-transfer logic.\n      _beforeTransferTo(address(_terminal), _netPayoutAmount);\n\n      // If this terminal's token is ETH, send it in msg.value.\n      uint256 _payableValue = token == JBTokens.ETH ? _netPayoutAmount : 0;\n\n      // Send the projectId in the metadata.\n      bytes memory _projectMetadata = new bytes(32);\n      _projectMetadata = bytes(abi.encodePacked(_projectId));\n\n      // Add to balance if prefered.\n      if (_split.preferAddToBalance)\n        _terminal.addToBalanceOf{value: _payableValue}(\n          _split.projectId,\n          _netPayoutAmount,\n          token,\n          '',\n          _projectMetadata\n        );\n      else\n        _terminal.pay{value: _payableValue}(\n          _split.projectId,\n          _netPayoutAmount,\n          token,\n          _split.beneficiary != address(0) ? _split.beneficiary : msg.sender,\n          0,\n          _split.preferClaimed,\n          '',\n          _projectMetadata\n        );\n    }\n  } else {\n    unchecked {\n      _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\n        ? _payoutAmount\n        : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\n    }\n\n    // This distribution is eligible for a fee since the funds are leaving the ecosystem.\n    feeEligibleDistributionAmount += _payoutAmount;\n\n    // If there's a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\n    _transferFrom(\n      address(this),\n      _split.beneficiary != address(0) ? _split.beneficiary : payable(msg.sender),\n      _netPayoutAmount\n    );\n  }\n\n  unchecked {\n    // Subtract from the amount to be sent to the beneficiary.\n    leftoverAmount = leftoverAmount - _payoutAmount;\n  }\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbconstants"},(0,r.kt)("inlineCode",{parentName:"a"},"JBConstants")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".MAX_FEE_DISCOUNT")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbtokens"},(0,r.kt)("inlineCode",{parentName:"a"},"JBTokens")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ETH"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/fee"},(0,r.kt)("inlineCode",{parentName:"a"},"fee"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/decimals"},(0,r.kt)("inlineCode",{parentName:"a"},"decimals"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/isfeelessaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"isFeelessAddress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/pay"},(0,r.kt)("inlineCode",{parentName:"a"},"pay"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay"},(0,r.kt)("inlineCode",{parentName:"a"},"_pay"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/read/-_feeamount"},(0,r.kt)("inlineCode",{parentName:"a"},"_feeAmount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_transferfrom"},(0,r.kt)("inlineCode",{parentName:"a"},"_transferFrom"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_beforetransferto"},(0,r.kt)("inlineCode",{parentName:"a"},"_beforeTransferTo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_addtobalanceof"},(0,r.kt)("inlineCode",{parentName:"a"},"_addtobalanceof")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsplitallocator"},(0,r.kt)("inlineCode",{parentName:"a"},"allocate"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/read/primaryterminalof"},(0,r.kt)("inlineCode",{parentName:"a"},"primaryTerminalOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"DistributeToPayoutSplit")," event for the split being iterated on with the relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit DistributeToPayoutSplit(\n  _projectId,\n  _domain,\n  _group,\n  _split,\n  _netPayoutAmount,\n  msg.sender\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/distributetopayoutsplit"},(0,r.kt)("inlineCode",{parentName:"a"},"DistributeToPayoutSplit"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Increment the loop counter in the most gas efficient way."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"unchecked {\n  ++_i;\n}\n"))))))),(0,r.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Pays out splits for a project's funding cycle configuration.\n\n  @param _projectId The ID of the project for which payout splits are being distributed.\n  @param _domain The domain of the splits to distribute the payout between.\n  @param _group The group of the splits to distribute the payout between.\n  @param _amount The total amount being distributed, as a fixed point number with the same number of decimals as this terminal.\n  @param _feeDiscount The amount of discount to apply to the fee, out of the MAX_FEE.\n\n  @return leftoverAmount If the leftover amount if the splits don't add up to 100%.\n  @return feeEligibleDistributionAmount The total amount of distributions that are eligible to have fees taken from.\n*/\nfunction _distributeToPayoutSplitsOf(\n  uint256 _projectId,\n  JBFundingCycle memory _fundingCycle,\n  uint256 _amount,\n  uint256 _feeDiscount\n) private returns (uint256 leftoverAmount, uint256 feeEligibleDistributionAmount) {\n  // Set the leftover amount to the initial amount.\n  leftoverAmount = _amount;\n\n  // Get a reference to the project's payout splits.\n  JBSplit[] memory _splits = splitsStore.splitsOf(_projectId, _domain, _group);\n\n  // Transfer between all splits.\n  for (uint256 _i = 0; _i < _splits.length;) {\n    // Get a reference to the split being iterated on.\n    JBSplit memory _split = _splits[_i];\n\n    // The amount to send towards the split.\n    uint256 _payoutAmount = PRBMath.mulDiv(\n      _amount,\n      _split.percent,\n      JBConstants.SPLITS_TOTAL_PERCENT\n    );\n\n    // The payout amount substracting any applicable incurred fees.\n    uint256 _netPayoutAmount;\n\n    if (_payoutAmount > 0) {\n      // Transfer tokens to the split.\n      // If there's an allocator set, transfer to its `allocate` function.\n      if (_split.allocator != IJBSplitAllocator(address(0))) {\n        // If the split allocator is set as feeless, this distribution is not eligible for a fee.\n        if (isFeelessAddress[address(_split.allocator)])\n          _netPayoutAmount = _payoutAmount;\n          // This distribution is eligible for a fee since the funds are leaving this contract and the allocator isn't listed as feeless.\n        else {\n          unchecked {\n            _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\n              ? _payoutAmount\n              : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\n          }\n\n          // This distribution is eligible for a fee since the funds are leaving the ecosystem.\n          feeEligibleDistributionAmount += _payoutAmount;\n        }\n\n        _beforeTransferTo(address(_split.allocator), _netPayoutAmount);\n\n        // If this terminal's token is ETH, send it in msg.value.\n        uint256 _payableValue = token == JBTokens.ETH ? _netPayoutAmount : 0;\n\n        // Create the data to send to the allocator.\n        JBSplitAllocationData memory _data = JBSplitAllocationData(\n          token,\n          _netPayoutAmount,\n          decimals,\n          _projectId,\n          _group,\n          _split\n        );\n\n        // Trigger the allocator's `allocate` function.\n        _split.allocator.allocate{value: _payableValue}(_data);\n\n        // Otherwise, if a project is specified, make a payment to it.\n      } else if (_split.projectId != 0) {\n        // Get a reference to the Juicebox terminal being used.\n        IJBPaymentTerminal _terminal = directory.primaryTerminalOf(_split.projectId, token);\n\n        // The project must have a terminal to send funds to.\n        if (_terminal == IJBPaymentTerminal(address(0))) revert TERMINAL_IN_SPLIT_ZERO_ADDRESS();\n\n        // Save gas if this contract is being used as the terminal.\n        if (_terminal == this) {\n          // This distribution does not incur a fee.\n          _netPayoutAmount = _payoutAmount;\n\n          // Send the projectId in the metadata.\n          bytes memory _projectMetadata = new bytes(32);\n          _projectMetadata = bytes(abi.encodePacked(_projectId));\n\n          // Add to balance if prefered.\n          if (_split.preferAddToBalance)\n            _addToBalanceOf(_split.projectId, _netPayoutAmount, false, '', _projectMetadata);\n          else\n            _pay(\n              _netPayoutAmount,\n              address(this),\n              _split.projectId,\n              (_split.beneficiary != address(0)) ? _split.beneficiary : msg.sender,\n              0,\n              _split.preferClaimed,\n              '',\n              _projectMetadata\n            );\n        } else {\n          // If the terminal is set as feeless, this distribution is not eligible for a fee.\n          if (isFeelessAddress[address(_terminal)])\n            _netPayoutAmount = _payoutAmount;\n            // This distribution is eligible for a fee since the funds are leaving this contract and the terminal isn't listed as feeless.\n          else {\n            unchecked {\n              _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\n                ? _payoutAmount\n                : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\n            }\n\n            feeEligibleDistributionAmount += _payoutAmount;\n          }\n\n          // Trigger any inherited pre-transfer logic.\n          _beforeTransferTo(address(_terminal), _netPayoutAmount);\n\n          // If this terminal's token is ETH, send it in msg.value.\n          uint256 _payableValue = token == JBTokens.ETH ? _netPayoutAmount : 0;\n\n          // Send the projectId in the metadata.\n          bytes memory _projectMetadata = new bytes(32);\n          _projectMetadata = bytes(abi.encodePacked(_projectId));\n\n          // Add to balance if prefered.\n          if (_split.preferAddToBalance)\n            _terminal.addToBalanceOf{value: _payableValue}(\n              _split.projectId,\n              _netPayoutAmount,\n              token,\n              '',\n              _projectMetadata\n            );\n          else\n            _terminal.pay{value: _payableValue}(\n              _split.projectId,\n              _netPayoutAmount,\n              token,\n              _split.beneficiary != address(0) ? _split.beneficiary : msg.sender,\n              0,\n              _split.preferClaimed,\n              '',\n              _projectMetadata\n            );\n        }\n      } else {\n        unchecked {\n          _netPayoutAmount = _feeDiscount == JBConstants.MAX_FEE_DISCOUNT\n            ? _payoutAmount\n            : _payoutAmount - _feeAmount(_payoutAmount, fee, _feeDiscount);\n        }\n\n        // This distribution is eligible for a fee since the funds are leaving the ecosystem.\n        feeEligibleDistributionAmount += _payoutAmount;\n\n        // If there's a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\n        _transferFrom(\n          address(this),\n          _split.beneficiary != address(0) ? _split.beneficiary : payable(msg.sender),\n          _netPayoutAmount\n        );\n      }\n\n      unchecked {\n        // Subtract from the amount to be sent to the beneficiary.\n        leftoverAmount = leftoverAmount - _payoutAmount;\n      }\n    }\n\n    emit DistributeToPayoutSplit(\n      _projectId,\n      _domain,\n      _group,\n      _split,\n      _netPayoutAmount,\n      msg.sender\n    );\n\n    unchecked {\n      ++_i;\n    }\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"0x4d: BAD_SPLIT"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the split specifies a project that doesn't have an ETH terminal."))))),(0,r.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/distributetopayoutsplit"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"DistributeToPayoutSplit")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed domain")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed group")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/data-structures/jbsplit"},"JBSplit")," split")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}c.isMDXComponent=!0}}]);