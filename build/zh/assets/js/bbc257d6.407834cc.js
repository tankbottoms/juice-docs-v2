"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[75629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),p=n(7094),s=n(12466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n;const{lazy:l,block:u,defaultValue:d,values:h,groupId:f,className:y}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:g}=(0,p.U)(),[j,w]=(0,a.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:F}=(0,s.o5)();if(null!=f){const e=_[f];null!=e&&e!==j&&b.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==j&&(F(t),w(r),null!=f&&g(f,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},y)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},3164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},p="processFees",s={unversionedId:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees",id:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees",title:"processFees",description:"Contract: JBPayoutRedemptionPaymentTerminal\u200b\u200c",source:"@site/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees.md",sourceDirName:"dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write",slug:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/processfees.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"pay",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/pay"},next:{title:"redeemTokensOf",permalink:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof"}},c={},m=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"processfees"},"processFees"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Process any fees that are being held for the project.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Only a project owner, an operator, or the contract's owner can process held fees.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function processFees(uint256 _projectId)\n  external\n  virtual\n  override\n  requirePermissionAllowingOverride(\n    projects.ownerOf(_projectId),\n    _projectId,\n    JBOperations.PROCESS_FEES,\n    msg.sender == owner()\n  )\n  nonReentrant { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project whos held fees should be processed."))),(0,a.kt)("li",{parentName:"ul"},"Through the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermissionallowingoverride"},(0,a.kt)("inlineCode",{parentName:"a"},"requirePermissionAllowingOverride"))," modifier, the function is only accessible by the project's owner, from an operator that has been given the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperations.PROCESS_FEES"))," permission by the project owner for the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"_projectId"),", or from the owner of this contract."),(0,a.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,a.kt)("li",{parentName:"ul"},"The function cannot be accessed recursively or while other ",(0,a.kt)("inlineCode",{parentName:"li"},"nonReentrant")," functions in this contract are in progress."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpayoutredemptionpaymentterminal"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBPayoutRedemptionPaymentTerminal"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to all held fees for the project."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's held fees.\nJBFee[] memory _heldFees = _heldFeesOf[_projectId];\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/-_heldfeesof"},(0,a.kt)("inlineCode",{parentName:"a"},"_heldFeesOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove all fees."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Delete the held fee's now that they've been processed.\ndelete _heldFeesOf[_projectId];\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/properties/-_heldfeesof"},(0,a.kt)("inlineCode",{parentName:"a"},"_heldFeesOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Iterate through the array. Take fee's for each ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/data-structures/jbfee"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFee"))," data structure. Emit a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessFee")," event with the relevant parameters for each fee processed."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Push array length in stack\nuint256 _heldFeeLength = _heldFees.length;\n\n// Process each fee.\nfor (uint256 _i = 0; _i < _heldFeeLength;) {\n  // Get the fee amount.\n  uint256 _amount = _feeAmount(\n    _heldFees[_i].amount,\n    _heldFees[_i].fee,\n    _heldFees[_i].feeDiscount\n  );\n\n  // Process the fee.\n  _processFee(_amount, _heldFees[_i].beneficiary);\n\n  emit ProcessFee(_projectId, _amount, _heldFees[_i].beneficiary, msg.sender);\n\n  unchecked {\n    ++_i;\n  }\n}\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/-_processfee"},(0,a.kt)("inlineCode",{parentName:"a"},"_processFee"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/read/-_feeamount"},(0,a.kt)("inlineCode",{parentName:"a"},"_feeAmount")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Event references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/processfee"},(0,a.kt)("inlineCode",{parentName:"a"},"ProcessFee"))))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Process any fees that are being held for the project.\n\n  @dev\n  Only a project owner, an operator, or the contract's owner can process held fees.\n\n  @param _projectId The ID of the project whos held fees should be processed.\n*/\nfunction processFees(uint256 _projectId)\n  external\n  virtual\n  override\n  requirePermissionAllowingOverride(\n    projects.ownerOf(_projectId),\n    _projectId,\n    JBOperations.PROCESS_FEES,\n    msg.sender == owner()\n  )\n{\n  // Get a reference to the project's held fees.\n  JBFee[] memory _heldFees = _heldFeesOf[_projectId];\n\n  // Delete the held fees.\n  delete _heldFeesOf[_projectId];\n\n  // Push array length in stack\n  uint256 _heldFeeLength = _heldFees.length;\n\n  // Process each fee.\n  for (uint256 _i = 0; _i < _heldFeeLength;) {\n    // Get the fee amount.\n    uint256 _amount = _feeAmount(\n      _heldFees[_i].amount,\n      _heldFees[_i].fee,\n      _heldFees[_i].feeDiscount\n    );\n\n    // Process the fee.\n    _processFee(_amount, _heldFees[_i].beneficiary);\n\n    emit ProcessFee(_projectId, _amount, true, _heldFees[_i].beneficiary, msg.sender);\n\n    unchecked {\n      ++_i;\n    }\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/processfee"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"ProcessFee")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed amount")),(0,a.kt)("li",null,(0,a.kt)("code",null,"bool indexed wasHeld")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address beneficiary")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address caller")))))))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);