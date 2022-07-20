"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[47920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),p=n(7094),s=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:l,block:u,defaultValue:m,values:k,groupId:f,className:h}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=N.find((e=>e.props.default)))?void 0:n.props.value)?t:N[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:_}=(0,p.U)(),[j,T]=(0,r.useState)(g),I=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==j&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==j&&(E(t),T(a),null!=f&&_(f,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var r;const t=I.indexOf(e.currentTarget)-1;n=null!=(r=I[t])?r:I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>I.push(e),onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(N.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},84097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},p="transferFrom",s={unversionedId:"dev/api/contracts/jbtokenstore/write/transferfrom",id:"dev/api/contracts/jbtokenstore/write/transferfrom",title:"transferFrom",description:"Contract: JBTokenStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbtokenstore/write/transferfrom.md",sourceDirName:"dev/api/contracts/jbtokenstore/write",slug:"/dev/api/contracts/jbtokenstore/write/transferfrom",permalink:"/zh/dev/api/contracts/jbtokenstore/write/transferfrom",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbtokenstore/write/transferfrom.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"shouldRequireClaimingFor",permalink:"/zh/dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor"},next:{title:"JBFundingCycleStore",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/"}},c={},d=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transferfrom"},"transferFrom"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbtokenstore/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBTokenStore")),"\u200b\u200c"),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbtokenstore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBTokenStore"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allows a holder to transfer unclaimed tokens to another account.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Only a token holder or an operator can transfer its unclaimed tokens.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function transferFrom(\n  address _holder,\n  uint256 _projectId,\n  address _recipient,\n  uint256 _amount\n) external override requirePermission(_holder, _projectId, JBOperations.TRANSFER) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_holder")," is the address to transfer tokens from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project whose tokens are being transferred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_recipient")," is thhe recipient of the tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the amount of tokens to transfer."))),(0,r.kt)("li",{parentName:"ul"},"Through the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},(0,r.kt)("inlineCode",{parentName:"a"},"requirePermission"))," modifier, the function is only accessible by the token holder, or from an operator that has been given the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations"},(0,r.kt)("inlineCode",{parentName:"a"},"JBOperations.TRANSFER"))," permission by the token holder. "),(0,r.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbtokenstore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBTokenStore"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure a non-zero recipient was specified."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Can't transfer to the zero address.\nif (_recipient == address(0)) revert RECIPIENT_ZERO_ADDRESS();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the amount of unclaimed project tokens the holder has."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the holder's unclaimed project token balance.\nuint256 _unclaimedBalance = unclaimedBalanceOf[_holder][_projectId];\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/properties/unclaimedbalanceof"},(0,r.kt)("inlineCode",{parentName:"a"},"unclaimedBalanceOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the holder has enough unclaimed tokens to transfer."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// The holder must have enough unclaimed tokens to transfer.\nif (_amount > _unclaimedBalance) revert INSUFFICIENT_UNCLAIMED_TOKENS();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Subtract the amount from the holder's unclaimed balance of project tokens. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Subtract from the holder's unclaimed token balance.\nunclaimedBalanceOf[_holder][_projectId] = unclaimedBalanceOf[_holder][_projectId] - _amount;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/properties/unclaimedbalanceof"},(0,r.kt)("inlineCode",{parentName:"a"},"unclaimedBalanceOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the amount of unclaimed project tokens to the recipient's balance."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Add the unclaimed project tokens to the recipient's balance.\nunclaimedBalanceOf[_recipient][_projectId] =\n  unclaimedBalanceOf[_recipient][_projectId] +\n  _amount;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/properties/unclaimedbalanceof"},(0,r.kt)("inlineCode",{parentName:"a"},"unclaimedBalanceOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," event with the relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit Transfer(_holder, _projectId, _recipient, _amount, msg.sender);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/events/transfer"},(0,r.kt)("inlineCode",{parentName:"a"},"Transfer"))))))),(0,r.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Allows a holder to transfer unclaimed tokens to another account.\n\n  @dev\n  Only a token holder or an operator can transfer its unclaimed tokens.\n\n  @param _holder The address to transfer tokens from.\n  @param _projectId The ID of the project whose tokens are being transferred.\n  @param _recipient The recipient of the tokens.\n  @param _amount The amount of tokens to transfer.\n*/\nfunction transferFrom(\n  address _holder,\n  uint256 _projectId,\n  address _recipient,\n  uint256 _amount\n) external override requirePermission(_holder, _projectId, JBOperations.TRANSFER) {\n  // Can't transfer to the zero address.\n  if (_recipient == address(0)) revert RECIPIENT_ZERO_ADDRESS();\n\n  // Get a reference to the holder's unclaimed project token balance.\n  uint256 _unclaimedBalance = unclaimedBalanceOf[_holder][_projectId];\n\n  // The holder must have enough unclaimed tokens to transfer.\n  if (_amount > _unclaimedBalance) revert INSUFFICIENT_UNCLAIMED_TOKENS();\n\n  // Subtract from the holder's unclaimed token balance.\n  unclaimedBalanceOf[_holder][_projectId] = unclaimedBalanceOf[_holder][_projectId] - _amount;\n\n  // Add the unclaimed project tokens to the recipient's balance.\n  unclaimedBalanceOf[_recipient][_projectId] =\n    unclaimedBalanceOf[_recipient][_projectId] +\n    _amount;\n\n  emit Transfer(_holder, _projectId, _recipient, _amount, msg.sender);\n}\n"))),(0,r.kt)(l.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"RECIPIENT_ZERO_ADDRESS"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if no recipient was speicified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"INSUFFICIENT_UNCLAIMED_TOKENS"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the holder doesn't have enough tokens to transfer."))))),(0,r.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/transfer"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Transfer")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed recipient")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);