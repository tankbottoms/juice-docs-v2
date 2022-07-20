"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[44538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466);const m="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:d,values:f,groupId:b,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:g}=(0,s.U)(),[_,j]=(0,r.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==_&&k.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==_&&(O(t),j(a),null!=b&&g(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},55980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={},s="useAllowanceOf",u={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/useallowanceof",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/useallowanceof",title:"useAllowanceOf",description:"Contract: JBPayoutRedemptionPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/useallowanceof.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/useallowanceof",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/useallowanceof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/useallowanceof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"setFeelessAddress",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/setfeelessaddress"},next:{title:"JBSingleTokenPaymentTerminal",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/"}},m={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useallowanceof"},"useAllowanceOf"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),"\u200b\u200c"),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allows a project to send funds from its overflow up to the preconfigured allowance.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Only a project's owner or a designated operator can use its allowance.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Incurs the protocol fee.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function useAllowanceOf(\n  uint256 _projectId,\n  uint256 _amount,\n  uint256 _currency,\n  address _token,\n  uint256 _minReturnedTokens,\n  address payable _beneficiary,\n  string memory _memo\n)\n  external\n  virtual\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.USE_ALLOWANCE)\n  returns (uint256 netDistributedAmount) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to use the allowance of."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the amount of terminal tokens to use from this project's current allowance, as a fixed point number with the same amount of decimals as this terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_currency")," is the expected currency of the amount being distributed. Must match the project's current funding cycle's overflow allowance currency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_token")," is the token being distributed. This terminal ignores this property since it only manages one token. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_minReturnedTokens")," is the minimum number of tokens that the ",(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," should be valued at in terms of this terminal's currency, as a fixed point number with the same amount of decimals as this terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_beneficiary")," is the address to send the funds to."))),(0,r.kt)("li",{parentName:"ul"},"Through the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},(0,r.kt)("inlineCode",{parentName:"a"},"requirePermission"))," modifier, the function is only accessible by the project's owner, or from an operator that has been given the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations"},(0,r.kt)("inlineCode",{parentName:"a"},"JBOperations.USE_ALLOWANCE"))," permission by the project owner for the provided ",(0,r.kt)("inlineCode",{parentName:"li"},"_projectId"),"."),(0,r.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,r.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function returns the amount of tokens that was distributed to the beneficiary, as a fixed point number with the same amount of decimals as the terminal.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Forward to the internal function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"return _useAllowanceOf(_projectId, _amount, _currency, _minReturnedTokens, _beneficiary, _memo);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_useallowanceof"},(0,r.kt)("inlineCode",{parentName:"a"},"_useAllowanceOf"))))))),(0,r.kt)(i.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Allows a project to send funds from its overflow up to the preconfigured allowance.\n\n  @dev\n  Only a project's owner or a designated operator can use its allowance.\n  \n  @dev\n  Incurs the protocol fee.\n\n  @param _projectId The ID of the project to use the allowance of.\n  @param _amount The amount of terminal tokens to use from this project's current allowance, as a fixed point number with the same amount of decimals as this terminal.\n  @param _currency The expected currency of the amount being distributed. Must match the project's current funding cycle's overflow allowance currency.\n  @param _token The token being distributed. This terminal ignores this property since it only manages one token. \n  @param _minReturnedTokens The minimum number of tokens that the `_amount` should be valued at in terms of this terminal's currency, as a fixed point number with the same amount of decimals as this terminal.\n  @param _beneficiary The address to send the funds to.\n  @param _memo A memo to pass along to the emitted event.\n\n  @return netDistributedAmount The amount of tokens that was distributed to the beneficiary, as a fixed point number with the same amount of decimals as the terminal.)\n*/\nfunction useAllowanceOf(\n  uint256 _projectId,\n  uint256 _amount,\n  uint256 _currency,\n  address _token, \n  uint256 _minReturnedTokens,\n  address payable _beneficiary,\n  string memory _memo\n)\n  external\n  virtual\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.USE_ALLOWANCE)\n  returns (uint256 netDistributedAmount)\n{\n  _token; // Prevents unused var compiler and natspec complaints.\n  \n  return _useAllowanceOf(_projectId, _amount, _currency, _minReturnedTokens, _beneficiary, _memo);\n}\n"))),(0,r.kt)(i.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);