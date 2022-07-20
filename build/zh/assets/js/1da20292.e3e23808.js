"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[96346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(87462),n=a(67294),i=a(86010),l=a(72389),o=a(67392),s=a(7094),p=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,a;const{lazy:l,block:u,defaultValue:f,values:m,groupId:h,className:y}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===f?f:null!=(t=null!=f?f:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:j}=(0,s.U)(),[T,w]=(0,n.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=h){const e=g[h];null!=e&&e!==T&&b.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=E.indexOf(t),r=b[a].value;r!==T&&(I(t),w(r),null!=h&&j(h,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;a=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var n;const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},y)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function f(e){const t=(0,l.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},55615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={},s="receive",p={unversionedId:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive",id:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive",title:"receive",description:"Contract: JBETHERC20SplitsPayer",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write",slug:"/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"pay",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay"},next:{title:"setDefaultSplits",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits"}},d={},c=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:c};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"receive"},"receive"),(0,n.kt)("p",null,"Contract: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,n.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))),(0,n.kt)("p",null,"Interface: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbsplitspayer"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBSplitsPayer"))),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Received funds are paid to the default split group using the stored default properties.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This function is called automatically when the contract receives an ETH payment.")),(0,n.kt)("h4",{id:"definition"},"Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"receive() external payable virtual override { ... }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The function is triggered when the contract receives ETH."),(0,n.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone."),(0,n.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,n.kt)("h4",{id:"body"},"Body"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pay the splits and get a reference to the leftover amount."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"// Pay the splits and get a reference to the amount leftover.\nuint256 _leftoverAmount = _payToSplits(\n  defaultSplitsProjectId,\n  defaultSplitsDomain,\n  defaultSplitsGroup,\n  JBTokens.ETH,\n  address(this).balance,\n  18, // decimals.\n  defaultBeneficiary != address(0) ? defaultBeneficiary : msg.sender\n);\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Internal references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsprojectid"},(0,n.kt)("inlineCode",{parentName:"a"},"defaultSplitsProjectId"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsdomain"},(0,n.kt)("inlineCode",{parentName:"a"},"defaultSplitsDomain"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsgroup"},(0,n.kt)("inlineCode",{parentName:"a"},"defaultSplitsGroup"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultbeneficiary"},(0,n.kt)("inlineCode",{parentName:"a"},"defaultBeneficiary"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/-_paytosplits"},(0,n.kt)("inlineCode",{parentName:"a"},"_payToSplits"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If there's no leftover amount, there's nothing left to do."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"// If there is no leftover amount, nothing left to pay.\nif (_leftoverAmount == 0) return;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pay the leftover ETH to the default project ID using the default parameters. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"addToBalance")," function if there's a preference to do so. If there's no default project ID, send to the default beneficiary if there is one, otherwise send to the message sender."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// If there's a default project ID, try to pay it.\nif (defaultProjectId != 0)\n  if (defaultPreferAddToBalance)\n    // Pay the project by adding to its balance if prefered.\n    _addToBalanceOf(\n      defaultProjectId,\n      JBTokens.ETH,\n      _leftoverAmount,\n      18, // decimals.\n      defaultMemo,\n      defaultMetadata\n    );\n    // Otherwise, issue a payment to the project.\n  else\n    _pay(\n      defaultProjectId,\n      JBTokens.ETH,\n      _leftoverAmount,\n      18, // decimals.\n      defaultBeneficiary != address(0) ? defaultBeneficiary : msg.sender,\n      0, // min returned tokens.\n      defaultPreferClaimedTokens,\n      defaultMemo,\n      defaultMetadata\n    );\n// If no project was specified, send the funds directly to the beneficiary or the msg.sender.\nelse\n  Address.sendValue(\n    defaultBeneficiary != address(0) ? payable(defaultBeneficiary) : payable(msg.sender),\n    _leftoverAmount\n  );\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Library references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Address"},(0,n.kt)("inlineCode",{parentName:"a"},"Address")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".sendValue(...)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbtokens"},(0,n.kt)("inlineCode",{parentName:"a"},"JBTokens")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".ETH"))))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Internal references:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* [`defaultProjectId`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultprojectid)\n* [`defaultPreferClaimedTokens`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultpreferclaimedtokens)\n* [`defaultMemo`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultmemo)\n* [`defaultMetadata`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultmetadata)\n* [`defaultBeneficiary`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultbeneficiary)\n* [`_addToBalanceOf`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/write/-_addtobalanceof)\n* [`_pay`](/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/write/-_pay)\n"))),(0,n.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/** \n  @notice\n  Received funds are paid to the default split group using the stored default properties.\n\n  @dev\n  This function is called automatically when the contract receives an ETH payment.\n*/\nreceive() external payable virtual override nonReentrant {\n  // Pay the splits and get a reference to the amount leftover.\n  uint256 _leftoverAmount = _payToSplits(\n    defaultSplitsProjectId,\n    defaultSplitsDomain,\n    defaultSplitsGroup,\n    JBTokens.ETH,\n    address(this).balance,\n    18, // decimals.\n    defaultBeneficiary != address(0) ? defaultBeneficiary : msg.sender\n  );\n\n  // If there is no leftover amount, nothing left to pay.\n  if (_leftoverAmount == 0) return;\n\n  // If there's a default project ID, try to pay it.\n  if (defaultProjectId != 0)\n    if (defaultPreferAddToBalance)\n      // Pay the project by adding to its balance if prefered.\n      _addToBalanceOf(\n        defaultProjectId,\n        JBTokens.ETH,\n        _leftoverAmount,\n        18, // decimals.\n        defaultMemo,\n        defaultMetadata\n      );\n      // Otherwise, issue a payment to the project.\n    else\n      _pay(\n        defaultProjectId,\n        JBTokens.ETH,\n        _leftoverAmount,\n        18, // decimals.\n        defaultBeneficiary != address(0) ? defaultBeneficiary : msg.sender,\n        0, // min returned tokens.\n        defaultPreferClaimedTokens,\n        defaultMemo,\n        defaultMetadata\n      );\n  // If no project was specified, send the funds directly to the beneficiary or the msg.sender.\n  else\n    Address.sendValue(\n      defaultBeneficiary != address(0) ? payable(defaultBeneficiary) : payable(msg.sender),\n      _leftoverAmount\n    );\n}\n"))),(0,n.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Optimization")),(0,n.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,n.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Low severity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,n.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"High severity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,n.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}f.isMDXComponent=!0}}]);