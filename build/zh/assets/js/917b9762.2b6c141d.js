"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[78987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),i=n(86010),l=n(72389),o=n(67392),s=n(7094),p=n(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n;const{lazy:l,block:u,defaultValue:c,values:f,groupId:k,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===c?c:null!=(t=null!=c?c:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:_}=(0,s.U)(),[T,j]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=k){const e=g[k];null!=e&&e!==T&&b.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==T&&(w(t),j(a),null!=k&&_(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},32298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),l=n(85162);const o={},s="pay",p={unversionedId:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay",id:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay",title:"pay",description:"Contract: JBETHERC20SplitsPayer",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write",slug:"/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"addToBalanceOf",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/addtobalanceof"},next:{title:"receive",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive"}},d={},m=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pay"},"pay"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbsplitspayer"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBSplitsPayer"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make a payment to the specified project after first splitting the amount among the stored default splits.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function pay(\n  uint256 _projectId,\n  address _token,\n  uint256 _amount,\n  uint256 _decimals,\n  address _beneficiary,\n  uint256 _minReturnedTokens,\n  bool _preferClaimedTokens,\n  string calldata _memo,\n  bytes calldata _metadata\n) public payable virtual override nonReentrant { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project that is being paid after."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_token")," is the token being paid in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," is the amount of tokens being paid, as a fixed point number. If the token is ETH, this is ignored and msg.value is used in its place."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_decimals")," is the number of decimals in the ",(0,r.kt)("inlineCode",{parentName:"li"},"_amount")," fixed point number. If the token is ETH, this is ignored and 18 is used in its place, which corresponds to the amount of decimals expected in msg.value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_beneficiary")," is the address who will receive tokens from the payment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_minReturnedTokens")," is the minimum number of project tokens expected in return, as a fixed point number with 18 decimals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_preferClaimedTokens")," is a flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_memo")," is a memo to pass along to the emitted event, and passed along the the funding cycle's data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_metadata")," are bytes to send along to the data source, delegate, and emitted event, if provided."))),(0,r.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone, or internally from this contract or one that inherits it."),(0,r.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,r.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbprojectpayer"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBProjectPayer"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the token isn't ETH, make sure ETH wasn't sent to the function, then transfer the amount of tokens from the message sender to this contract. If the token is ETH, override the specified amount and decimals values with with amount of ETH sent to the function, which is denoted as a fixed point number with 18 decimals."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// ETH shouldn't be sent if the token isn't ETH.\nif (address(_token) != JBTokens.ETH) {\n  if (msg.value > 0) revert NO_MSG_VALUE_ALLOWED();\n\n  // Transfer tokens to this contract from the msg sender.\n  IERC20(_token).transferFrom(msg.sender, address(this), _amount);\n} else {\n  // If ETH is being paid, set the amount to the message value, and decimals to 18.\n  _amount = msg.value;\n  _decimals = 18;\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbtokens"},(0,r.kt)("inlineCode",{parentName:"a"},"JBTokens")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ETH"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20-transferFrom-address-address-uint256-"},(0,r.kt)("inlineCode",{parentName:"a"},"transferFrom"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send the funds to the splits and get a reference to the leftover amount."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// Pay the splits and get a reference to the amount leftover.\nuint256 _leftoverAmount = _payToSplits(\n  defaultSplitsProjectId,\n  defaultSplitsDomain,\n  defaultSplitsGroup,\n  _token,\n  _amount,\n  _decimals,\n  defaultBeneficiary != address(0) ? defaultBeneficiary : msg.sender\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsprojectid"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultSplitsProjectId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsdomain"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultSplitsDomain"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsgroup"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultSplitsGroup"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/properties/defaultbeneficiary"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultBeneficiary"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/-_paytosplits"},(0,r.kt)("inlineCode",{parentName:"a"},"_payToSplits"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there's any leftover amount, pay the specified project. If no project is specified, send the leftover funds to the beneficiary or the msg.sender."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Pay any leftover amount.\nif (_leftoverAmount > 0) {\n  // If there's a default project ID, try to pay it.\n  if (_projectId != 0) {\n    _pay(\n      _projectId,\n      _token,\n      _leftoverAmount,\n      _decimals,\n      _beneficiary != address(0) ? _beneficiary : msg.sender,\n      _minReturnedTokens,\n      _preferClaimedTokens,\n      _memo,\n      _metadata\n    );\n  }\n  // If no project was specified, send the funds directly to the beneficiary or the msg.sender.\n  else {\n    // Transfer the ETH.\n    if (_token == JBTokens.ETH)\n      Address.sendValue(\n        // If there's a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\n        _beneficiary != address(0) ? payable(_beneficiary) : payable(msg.sender),\n        _leftoverAmount\n      );\n      // Or, transfer the ERC20.\n    else\n      IERC20(_token).transfer(\n        // If there's a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\n        _beneficiary != address(0) ? _beneficiary : msg.sender,\n        _leftoverAmount\n      );\n  }\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbtokens"},(0,r.kt)("inlineCode",{parentName:"a"},"JBTokens")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ETH")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".sendValue(...)"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20projectpayer/write/-_pay"},(0,r.kt)("inlineCode",{parentName:"a"},"_pay")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20-Transfer-address-address-uint256-"},(0,r.kt)("inlineCode",{parentName:"a"},"transfer"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pay")," event with the relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit Pay(\n  _projectId,\n  _beneficiary != address(0) ? defaultBeneficiary : msg.sender,\n  _token,\n  _amount,\n  _decimals,\n  _leftoverAmount,\n  _minReturnedTokens,\n  _preferClaimedTokens,\n  _memo,\n  _metadata,\n  msg.sender\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/events/pay"},(0,r.kt)("inlineCode",{parentName:"a"},"Pay"))))))),(0,r.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/** \n  @notice \n  Make a payment to the specified project after first splitting the amount among the stored default splits.\n\n  @param _projectId The ID of the project that is being paid after.\n  @param _token The token being paid in.\n  @param _amount The amount of tokens being paid, as a fixed point number. If the token is ETH, this is ignored and msg.value is used in its place.\n  @param _decimals The number of decimals in the `_amount` fixed point number. If the token is ETH, this is ignored and 18 is used in its place, which corresponds to the amount of decimals expected in msg.value.\n  @param _beneficiary The address who will receive tokens from the payment made with leftover funds.\n  @param _minReturnedTokens The minimum number of project tokens expected in return, as a fixed point number with 18 decimals.\n  @param _preferClaimedTokens A flag indicating whether the request prefers to mint project tokens into the beneficiaries wallet rather than leaving them unclaimed. This is only possible if the project has an attached token contract. Leaving them unclaimed saves gas.\n  @param _memo A memo to pass along to the emitted event, and passed along the the funding cycle's data source and delegate. A data source can alter the memo before emitting in the event and forwarding to the delegate.\n  @param _metadata Bytes to send along to the data source, delegate, and emitted event, if provided.\n*/\nfunction pay(\n  uint256 _projectId,\n  address _token,\n  uint256 _amount,\n  uint256 _decimals,\n  address _beneficiary,\n  uint256 _minReturnedTokens,\n  bool _preferClaimedTokens,\n  string calldata _memo,\n  bytes calldata _metadata\n) public payable virtual override nonReentrant {\n  // ETH shouldn't be sent if the token isn't ETH.\n  if (address(_token) != JBTokens.ETH) {\n    if (msg.value > 0) revert NO_MSG_VALUE_ALLOWED();\n\n    // Transfer tokens to this contract from the msg sender.\n    IERC20(_token).transferFrom(msg.sender, address(this), _amount);\n  } else {\n    // If ETH is being paid, set the amount to the message value, and decimals to 18.\n    _amount = msg.value;\n    _decimals = 18;\n  }\n\n  // Pay the splits and get a reference to the amount leftover.\n  uint256 _leftoverAmount = _payToSplits(\n    defaultSplitsProjectId,\n    defaultSplitsDomain,\n    defaultSplitsGroup,\n    _token,\n    _amount,\n    _decimals,\n    defaultBeneficiary != address(0) ? defaultBeneficiary : msg.sender\n  );\n\n  // Pay any leftover amount.\n  if (_leftoverAmount > 0) {\n    // If there's a default project ID, try to pay it.\n    if (_projectId != 0) {\n      _pay(\n        _projectId,\n        _token,\n        _leftoverAmount,\n        _decimals,\n        _beneficiary != address(0) ? _beneficiary : msg.sender,\n        _minReturnedTokens,\n        _preferClaimedTokens,\n        _memo,\n        _metadata\n      );\n    }\n    // If no project was specified, send the funds directly to the beneficiary or the msg.sender.\n    else {\n      // Transfer the ETH.\n      if (_token == JBTokens.ETH)\n        Address.sendValue(\n          // If there's a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\n          _beneficiary != address(0) ? payable(_beneficiary) : payable(msg.sender),\n          _leftoverAmount\n        );\n        // Or, transfer the ERC20.\n      else\n        IERC20(_token).transfer(\n          // If there's a beneficiary, send the funds directly to the beneficiary. Otherwise send to the msg.sender.\n          _beneficiary != address(0) ? _beneficiary : msg.sender,\n          _leftoverAmount\n        );\n    }\n  }\n\n  emit Pay(\n    _projectId,\n    _beneficiary != address(0) ? defaultBeneficiary : msg.sender,\n    _token,\n    _amount,\n    _decimals,\n    _leftoverAmount,\n    _minReturnedTokens,\n    _preferClaimedTokens,\n    _memo,\n    _metadata,\n    msg.sender\n  );\n}\n"))),(0,r.kt)(l.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NO_MSG_VALUE_ALLOWED"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if ETH was sent to a non-ETH terminal."))))),(0,r.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/events/pay"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pay")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address beneficiary")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address token")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 decimals")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 leftoverAmount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 minReturnedTokens")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool preferClaimedTokens")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string memo")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bytes metadata")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}c.isMDXComponent=!0}}]);