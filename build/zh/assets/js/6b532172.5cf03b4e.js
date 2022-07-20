"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[81182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),u=n(12466);const m="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:o,block:c,defaultValue:d,values:b,groupId:f,className:y}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[w,j]=(0,r.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==w&&k.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==w&&(O(t),j(a),null!=f&&T(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=_.indexOf(e.currentTarget)+1;n=null!=(a=_[t])?a:_[0];break}case"ArrowLeft":{var r;const t=_.indexOf(e.currentTarget)-1;n=null!=(r=_[t])?r:_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},y)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:x,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},98530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={},s="distributePayoutsOf",u={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/distributepayoutsof",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/distributepayoutsof",title:"distributePayoutsOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/distributepayoutsof.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/distributepayoutsof",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/distributepayoutsof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/distributepayoutsof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"addToBalanceOf",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/addtobalanceof"},next:{title:"migrate",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/migrate"}},m={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distributepayoutsof"},"distributePayoutsOf"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Distributes payouts for a project with the distribution limit of its current funding cycle.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Payouts are sent to the preprogrammed splits. Any leftover is sent to the project's owner.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Anyone can distribute payouts on a project's behalf. The project can preconfigure a wildcard split that is used to send funds to msg.sender. This can be used to incentivize calling this function.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All funds distributed outside of this contract or any feeless terminals incure the protocol fee.")," "),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function distributePayoutsOf(\n  uint256 _projectId,\n  uint256 _amount,\n  uint256 _currency,\n  address _token,\n  uint256 _minReturnedTokens,\n  string calldata _memo\n) external virtual override returns (uint256 netLeftoverDistributionAmount) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project having its payouts distributed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the amount of terminal tokens to distribute, as a fixed point number with same number of decimals as this terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_currency")," is the expected currency of the amount being distributed. Must match the project's current funding cycle's distribution limit currency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_token")," is the token being distributed. This terminal ignores this property since it only manages one token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_minReturnedTokens")," is the minimum number of terminal tokens that the ",(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," should be valued at in terms of this terminal's currency, as a fixed point number with the same number of decimals as this terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_memo")," is a memo to pass along to the emitted event."))),(0,r.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone."),(0,r.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,r.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function returns the amount that was sent to the project owner, as a fixed point number with the same amount of decimals as this terminal.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Forward to the internal function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"return _distributePayoutsOf(_projectId, _amount, _currency, _minReturnedTokens, _memo);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_distributepayoutsof"},(0,r.kt)("inlineCode",{parentName:"a"},"_distributePayoutsOf"))))))),(0,r.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Distributes payouts for a project with the distribution limit of its current funding cycle.\n\n  @dev\n  Payouts are sent to the preprogrammed splits. Any leftover is sent to the project's owner.\n\n  @dev\n  Anyone can distribute payouts on a project's behalf. The project can preconfigure a wildcard split that is used to send funds to msg.sender. This can be used to incentivize calling this function.\n\n  @dev\n  All funds distributed outside of this contract or any feeless terminals incure the protocol fee.\n\n  @param _projectId The ID of the project having its payouts distributed.\n  @param _amount The amount of terminal tokens to distribute, as a fixed point number with same number of decimals as this terminal.\n  @param _currency The expected currency of the amount being distributed. Must match the project's current funding cycle's distribution limit currency.\n  @param _token The token being distributed. This terminal ignores this property since it only manages one token.\n  @param _minReturnedTokens The minimum number of terminal tokens that the `_amount` should be valued at in terms of this terminal's currency, as a fixed point number with the same number of decimals as this terminal.\n  @param _memo A memo to pass along to the emitted event.\n\n  @return netLeftoverDistributionAmount The amount that was sent to the project owner, as a fixed point number with the same amount of decimals as this terminal.\n*/\nfunction distributePayoutsOf(\n  uint256 _projectId,\n  uint256 _amount,\n  uint256 _currency,\n  address _token,\n  uint256 _minReturnedTokens,\n  string calldata _memo\n) external virtual override returns (uint256 netLeftoverDistributionAmount) {\n  _token; // Prevents unused var compiler and natspec complaints.\n  return _distributePayoutsOf(_projectId, _amount, _currency, _minReturnedTokens, _memo);\n}\n"))),(0,r.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);