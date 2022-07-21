"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[63563],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),o=a(67392),p=a(7094),m=a(12466);const s="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,a;const{lazy:l,block:u,defaultValue:d,values:f,groupId:y,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(t=null!=d?d:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:g}=(0,p.U)(),[T,O]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=y){const e=_[y];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==T&&(w(t),O(n),null!=y&&g(y,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:j,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},86932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={},p="_processFee",m={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee",title:"_processFee",description:"Contract: JBPayoutRedemptionPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_pay",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay"},next:{title:"_redeemTokensOf",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_redeemtokensof"}},s={},c=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"_processfee"},"_processFee"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),"\u200b\u200c"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Process a fee of the specified amount.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _processFee(uint256 _amount, address _beneficiary) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the fee amount, as a floating point number with the same amount of decimals as this terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_beneficiary")," is the address to mint the platform's tokens for."))),(0,r.kt)("li",{parentName:"ul"},"The function is private to this contract."),(0,r.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the terminal that the protocol project is accepting funds through for this terminal's token."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get the terminal for the protocol project.\nIJBPaymentTerminal _terminal = directory.primaryTerminalOf(_PROTOCOL_PROJECT_ID, token);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/directory"},(0,r.kt)("inlineCode",{parentName:"a"},"directory")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/read/primaryterminalof"},(0,r.kt)("inlineCode",{parentName:"a"},"primaryTerminalOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the protocol's terminal is the same as this terminal, save gas by paying the contract internally."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// When processing the admin fee, save gas if the admin is using this contract as its terminal.\nif (_terminal == this) { ... }\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pay the protocol using the internal pay function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"_pay(_amount, address(this), _PROTOCOL_PROJECT_ID, _beneficiary, 0, false, '', bytes('')); // Use the local pay call.\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_pay"},(0,r.kt)("inlineCode",{parentName:"a"},"_pay"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otherwise if the terminal is different, transfer the fee over."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"else { ... }\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call any pre-transfer logic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Trigger any inherited pre-transfer logic.\n_beforeTransferTo(address(_terminal), _amount);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Virtual references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_beforetransferto"},(0,r.kt)("inlineCode",{parentName:"a"},"_beforeTransferTo"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the ETH amount that should be attached to the transaction. Only attach anything if the token being paid is ETH."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// If this terminal's token is ETH, send it in msg.value.\nuint256 _payableValue = token == JBTokens.ETH ? _amount : 0;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbtokens"},(0,r.kt)("inlineCode",{parentName:"a"},"JBTokens")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ETH")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send the payment."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Send the payment.\n_terminal.pay{value: _payableValue}(\n  _PROTOCOL_PROJECT_ID,\n  _amount,\n  token,\n  _beneficiary,\n  0,\n  false,\n  '',\n  bytes('')\n); // Use the external pay call of the correct terminal.\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/-_protocol_project_id"},(0,r.kt)("inlineCode",{parentName:"a"},"_PROTOCOL_PROJECT_ID")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/pay"},(0,r.kt)("inlineCode",{parentName:"a"},"pay"))))))))),(0,r.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Process a fee of the specified amount.\n\n  @param _amount The fee amount, as a floating point number with the same amount of decimals as this terminal.\n  @param _beneficiary The address to mint the platform's tokens for.\n*/\nfunction _processFee(uint256 _amount, address _beneficiary) private {\n  // Get the terminal for the protocol project.\n  IJBPaymentTerminal _terminal = directory.primaryTerminalOf(_PROTOCOL_PROJECT_ID, token);\n\n  // When processing the admin fee, save gas if the admin is using this contract as its terminal.\n  if (_terminal == this)\n    _pay(_amount, address(this), _PROTOCOL_PROJECT_ID, _beneficiary, 0, false, '', bytes('')); // Use the local pay call.\n  else {\n    // Trigger any inherited pre-transfer logic.\n    _beforeTransferTo(address(_terminal), _amount);\n\n    // If this terminal's token is ETH, send it in msg.value.\n    uint256 _payableValue = token == JBTokens.ETH ? _amount : 0;\n\n    // Send the payment.\n    _terminal.pay{value: _payableValue}(\n      _PROTOCOL_PROJECT_ID,\n      _amount,\n      token,\n      _beneficiary,\n      0,\n      false,\n      '',\n      bytes('')\n    ); // Use the external pay call of the correct terminal.\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZERO_VALUE_SENT"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the transaction had no value."))))),(0,r.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);