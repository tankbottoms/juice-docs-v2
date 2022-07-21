"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[29945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),p=n(7094),s=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:k,groupId:f,className:N}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:_}=(0,p.U)(),[T,j]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=f){const e=g[f];null!=e&&e!==T&&b.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),r=b[n].value;r!==T&&(w(t),j(r),null!=f&&_(f,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=C.indexOf(e.currentTarget)+1;n=null!=(r=C[t])?r:C[0];break}case"ArrowLeft":{var a;const t=C.indexOf(e.currentTarget)-1;n=null!=(a=C[t])?a:C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},N)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},63744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},p="_distributeReservedTokensOf",s={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof",id:"dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof",title:"_distributeReservedTokensOf",description:"Distributes all outstanding reserved tokens for a project.",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/write",slug:"/dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_configure",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/-_configure"},next:{title:"_distributeToReservedTokenSplitsOf",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/-_distributetoreservedtokensplitsof"}},u={},c=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"_distributereservedtokensof"},"_distributeReservedTokensOf"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Distributes all outstanding reserved tokens for a project.")),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function _distributeReservedTokensOf(uint256 _projectId, string memory _memo)\n  internal\n  returns (uint256 tokenCount) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to which the reserved tokens belong."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_memo")," is a memo to pass along to the emitted event."))),(0,a.kt)("li",{parentName:"ul"},"The resulting function is internal to this contract and its inheriters. "),(0,a.kt)("li",{parentName:"ul"},"The function returns the amount of reserved tokens that were minted.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the current funding cycle of the project."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get the current funding cycle to read the reserved rate from.\nJBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/fundingcyclestore"},(0,a.kt)("inlineCode",{parentName:"a"},"fundingCycleStore")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the current total supply of tokens issued for the project."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to new total supply of tokens before minting reserved tokens.\nuint256 _totalTokens = tokenStore.totalSupplyOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/tokenstore"},(0,a.kt)("inlineCode",{parentName:"a"},"tokenStore")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbtokenstore/read/totalsupplyof"},(0,a.kt)("inlineCode",{parentName:"a"},"totalSupplyOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the current amount of reserved tokens given the current state of the tracker, the current funding cycle's reserved rate, and the current total token supply."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the number of tokens that need to be minted.\ntokenCount = _reservedTokenAmountFrom(\n  _processedTokenTrackerOf[_projectId],\n  _fundingCycle.reservedRate(),\n  _totalTokens\n);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbfundingcyclemetadataresolver"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleMetadataResolver")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".reservedRate(...)"))))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof"},(0,a.kt)("inlineCode",{parentName:"a"},"_processedTokenTrackerOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/read/-_reservedtokenamountfrom"},(0,a.kt)("inlineCode",{parentName:"a"},"_reservedTokenAmountFrom"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the tracker to be equal to the new current total token supply, which is the amount stored plus the amount that will be minted and distributed."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Set the tracker to be the new total supply.\n_processedTokenTrackerOf[_projectId] = int256(_totalTokens + tokenCount);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/-_processedtokentrackerof"},(0,a.kt)("inlineCode",{parentName:"a"},"_processedTokenTrackerOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's owner."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project owner.\naddress _owner = projects.ownerOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/projects"},(0,a.kt)("inlineCode",{parentName:"a"},"projects")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721-ownerOf-uint256-"},(0,a.kt)("inlineCode",{parentName:"a"},"ownerOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there are outstanding reserved tokens, distribute them to reserved token splits. Get a reference to any leftover amount after the splits are settled."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Distribute tokens to splits and get a reference to the leftover amount to mint after all splits have gotten their share.\nuint256 _leftoverTokenCount = tokenCount == 0\n  ? 0\n  : _distributeToReservedTokenSplitsOf(\n      _projectId,\n      _fundingCycle.configuration,\n      JBSplitsGroups.RESERVED_TOKENS,\n      tokenCount\n    );\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbsplitsgroups"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSplitsGroups")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".RESERVED_TOKENS"))))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/write/-_distributetoreservedtokensplitsof"},(0,a.kt)("inlineCode",{parentName:"a"},"_distributeToReservedTokenSplitsOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there are any leftover reserved tokens, mint them for the project's owner."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Mint any leftover tokens to the project owner.\nif (_leftoverTokenCount > 0) tokenStore.mintFor(_owner, _projectId, _leftoverTokenCount, false);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbtokenstore/write/mintfor"},(0,a.kt)("inlineCode",{parentName:"a"},"mintFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Emit a ",(0,a.kt)("inlineCode",{parentName:"p"},"DistributeReservedTokens")," event with the relevant parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"emit DistributeReservedTokens(\n  _fundingCycle.configuration,\n  _fundingCycle.number,\n  _projectId,\n  _owner,\n  tokenCount,\n  _leftoverTokenCount,\n  _memo,\n  msg.sender\n);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Event references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/events/distributereservedtokens"},(0,a.kt)("inlineCode",{parentName:"a"},"DistributeReservedTokens"))))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Distributes all outstanding reserved tokens for a project.\n\n  @param _projectId The ID of the project to which the reserved tokens belong.\n  @param _memo A memo to pass along to the emitted event.\n\n  @return tokenCount The amount of minted reserved tokens.\n*/\nfunction _distributeReservedTokensOf(uint256 _projectId, string memory _memo)\n  internal\n  returns (uint256 tokenCount)\n{\n  // Get the current funding cycle to read the reserved rate from.\n  JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n\n  // Get a reference to new total supply of tokens before minting reserved tokens.\n  uint256 _totalTokens = tokenStore.totalSupplyOf(_projectId);\n\n  // Get a reference to the number of tokens that need to be minted.\n  tokenCount = _reservedTokenAmountFrom(\n    _processedTokenTrackerOf[_projectId],\n    _fundingCycle.reservedRate(),\n    _totalTokens\n  );\n\n  // Set the tracker to be the new total supply.\n  _processedTokenTrackerOf[_projectId] = int256(_totalTokens + tokenCount);\n\n  // Get a reference to the project owner.\n  address _owner = projects.ownerOf(_projectId);\n\n  // Distribute tokens to splits and get a reference to the leftover amount to mint after all splits have gotten their share.\n  uint256 _leftoverTokenCount = tokenCount == 0\n    ? 0\n    : _distributeToReservedTokenSplitsOf(\n        _projectId,\n        _fundingCycle.configuration,\n        JBSplitsGroups.RESERVED_TOKENS,\n        tokenCount\n      );\n\n  // Mint any leftover tokens to the project owner.\n  if (_leftoverTokenCount > 0) tokenStore.mintFor(_owner, _projectId, _leftoverTokenCount, false);\n\n  emit DistributeReservedTokens(\n    _fundingCycle.configuration,\n    _fundingCycle.number,\n    _projectId,\n    _owner,\n    tokenCount,\n    _leftoverTokenCount,\n    _memo,\n    msg.sender\n  );\n}\n"))),(0,a.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-controllers/jbcontroller/events/distributereservedtokens"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"DistributeReservedTokens")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed fundingCycleConfiguration")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed fundingCycleNumber")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address beneficiary")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 tokenCount")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 beneficiaryTokenCount")),(0,a.kt)("li",null,(0,a.kt)("code",null,"string memo")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address caller")))))))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);