"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),m=n(7094),s=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:c,values:k,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,l.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===c?c:null!=(t=null!=c?c:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:_}=(0,m.U)(),[T,j]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==T&&y.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==T&&(O(t),j(r),null!=f&&_(f,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;n=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;n=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},30229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={},m="redeemTokensOf",s={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof",title:"redeemTokensOf",description:"Contract: JBPayoutRedemptionPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"processFees",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees"},next:{title:"setFee",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/setfee"}},p={},d=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redeemtokensof"},"redeemTokensOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Holders can redeem their tokens to claim the project's overflowed tokens, or to trigger rules determined by the project's current funding cycle's data source.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Only a token holder or a designated operator can redeem its tokens.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function redeemTokensOf(\n  address _holder,\n  uint256 _projectId,\n  uint256 _tokenCount,\n  address _token,\n  uint256 _minReturnedTokens,\n  address payable _beneficiary,\n  string memory _memo,\n  bytes memory _metadata\n)\n  external\n  virtual\n  override\n  requirePermission(_holder, _projectId, JBOperations.REDEEM)\n  returns (uint256 reclaimAmount) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_holder")," is the account to redeem tokens for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to which the tokens being redeemed belong."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_tokenCount")," is the number of project tokens to redeem, as a fixed point number with 18 decimals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_token")," is the token being reclaimed. This terminal ignores this property since it only manages one currency."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_minReturnedTokens")," is the minimum amount of terminal tokens expected in return, as a fixed point number with the same amount of decimals as this terminal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_beneficiary")," is the address to send the terminal tokens to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_memo")," is a memo to pass along to the emitted event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_metadata")," are bytes to send along to the data source, delegate, and emitted event, if provided."))),(0,a.kt)("li",{parentName:"ul"},"Through the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},(0,a.kt)("inlineCode",{parentName:"a"},"requirePermission"))," modifier, the function is only accessible by the token holder, or from an operator that has been given the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperations.REDEEM"))," permission by the token holder."),(0,a.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns the amount of terminal tokens that the tokens were redeemed for, as a fixed point number with the same amount of decimals as this terminal.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Forward to the internal function."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"return\n  _redeemTokensOf(\n    _holder,\n    _projectId,\n    _tokenCount,\n    _minReturnedTokens,\n    _beneficiary,\n    _memo,\n    _metadata\n  );\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_redeemtokensof"},(0,a.kt)("inlineCode",{parentName:"a"},"_redeemTokensOf"))))))),(0,a.kt)(i.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Holders can redeem their tokens to claim the project's overflowed tokens, or to trigger rules determined by the project's current funding cycle's data source.\n\n  @dev\n  Only a token holder or a designated operator can redeem its tokens.\n\n  @param _holder The account to redeem tokens for.\n  @param _projectId The ID of the project to which the tokens being redeemed belong.\n  @param _tokenCount The number of project tokens to redeem, as a fixed point number with 18 decimals.\n  @param _token The token being reclaimed. This terminal ignores this property since it only manages one token. \n  @param _minReturnedTokens The minimum amount of terminal tokens expected in return, as a fixed point number with the same amount of decimals as this terminal.\n  @param _beneficiary The address to send the terminal tokens to.\n  @param _memo A memo to pass along to the emitted event.\n  @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\n\n  @return reclaimAmount The amount of terminal tokens that the project tokens were redeemed for, as a fixed point number with 18 decimals.\n*/\nfunction redeemTokensOf(\n  address _holder,\n  uint256 _projectId,\n  uint256 _tokenCount,\n  address _token,\n  uint256 _minReturnedTokens,\n  address payable _beneficiary,\n  string memory _memo,\n  bytes memory _metadata\n)\n  external\n  virtual\n  override\n  requirePermission(_holder, _projectId, JBOperations.REDEEM)\n  returns (uint256 reclaimAmount)\n{\n  _token; // Prevents unused var compiler and natspec complaints.\n\n  return\n    _redeemTokensOf(\n      _holder,\n      _projectId,\n      _tokenCount,\n      _minReturnedTokens,\n      _beneficiary,\n      _memo,\n      _metadata\n    );\n}\n"))),(0,a.kt)(i.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}c.isMDXComponent=!0}}]);