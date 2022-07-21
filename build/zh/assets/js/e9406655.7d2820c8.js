"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[2821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),i=n(86010),l=n(72389),o=n(67392),c=n(7094),u=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function s(e){var t,n;const{lazy:l,block:s,defaultValue:f,values:m,groupId:g,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,o.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===f?f:null!=(t=null!=f?f:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:C}=(0,c.U)(),[_,j]=(0,a.useState)(N),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=g){const e=v[g];null!=e&&e!==_&&k.some((t=>t.value===e))&&j(e)}const w=e=>{const t=e.currentTarget,n=I.indexOf(t),r=k[n].value;r!==_&&(O(t),j(r),null!=g&&C(g,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=I.indexOf(e.currentTarget)+1;n=null!=(r=I[t])?r:I[0];break}case"ArrowLeft":{var a;const t=I.indexOf(e.currentTarget)-1;n=null!=(a=I[t])?a:I[I.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},y)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>I.push(e),onKeyDown:T,onFocus:w,onClick:w},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function f(e){const t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},5667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(65488),l=n(85162);const o={},c="queuedOf",u={unversionedId:"dev/api/contracts/jbfundingcyclestore/read/queuedof",id:"dev/api/contracts/jbfundingcyclestore/read/queuedof",title:"queuedOf",description:"Contract: JBFundingCycleStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbfundingcyclestore/read/queuedof.md",sourceDirName:"dev/api/contracts/jbfundingcyclestore/read",slug:"/dev/api/contracts/jbfundingcyclestore/read/queuedof",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/read/queuedof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbfundingcyclestore/read/queuedof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"currentBallotStateOf",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/read/latestconfiguredof"},next:{title:"_configureIntrinsicPropertiesFor",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/-_configureintrinsicpropertiesfor"}},d={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],s={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"queuedof"},"queuedOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbfundingcyclestore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("inlineCode",{parentName:"p"},"IJBFundingCycleStore")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The funding cycle that's next up for the specified project.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If a queued funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function queuedOf(uint256 _projectId)\n  external\n  view\n  override\n  returns (JBFundingCycle memory fundingCycle) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the queued funding cycle of."))),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone, and internally by the contract."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBFundingCycleStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns a ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/data-structures/jbfundingcycle"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycle")),".")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there are no stored funding cycles for the provided project, there can't be a queued funding cycle so an empty funding cycle should be returned."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// If the project does not have a funding cycle, return an empty struct.\nif (latestConfigurationOf[_projectId] == 0) return _getStructFor(0, 0);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/properties/latestconfigurationof"},(0,a.kt)("inlineCode",{parentName:"a"},"latestConfigurationOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check to see if there's a standby funding cycle configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the configuration of the standby funding cycle.\nuint256 _standbyFundingCycleConfiguration = _standbyOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_standbyOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there is a stanby cycle and it is approved, it must be the queued funding cycle for the project. Otherwise get a reference to the funding cycle structure based on the yet-to-be-approved standby configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// If it exists, return its funding cycle if it is approved.\nif (_standbyFundingCycleConfiguration > 0) {\n  fundingCycle = _getStructFor(_projectId, _standbyFundingCycleConfiguration);\n\n  if (_isApproved(_projectId, fundingCycle)) return fundingCycle;\n\n  // Resolve the funding cycle for the latest configured funding cycle.\n  fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\n}\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_isapproved"},(0,a.kt)("inlineCode",{parentName:"a"},"_isApproved"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there is no standby funding cycle, get the last stored funding cycle for the project. If it has already started, a queued funding cycle can be constructed based on the properties of this funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"else {\n  // Resolve the funding cycle for the latest configured funding cycle.\n  fundingCycle = _getStructFor(_projectId, latestConfigurationOf[_projectId]);\n  \n  // If the latest funding cycle starts in the future, it must start in the distant future\n  // since its not in standby. In this case base the queued cycles on the base cycle.\n  if (fundingCycle.start > block.timestamp)\n    fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\n}\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/properties/latestconfigurationof"},(0,a.kt)("inlineCode",{parentName:"a"},"latestConfigurationOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the referenced funding cycle has a duration of 0, there can't be a queued funding cycle since configurations with no duration are being made manually instead of on a schedule."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// There's no queued if the current has a duration of 0.\nif (fundingCycle.duration == 0) return _getStructFor(0, 0);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the referenced funding cycle has been approved, return a queued cycle based on it. The mock funding cycle is not allowed to have started already, which is why a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," flag is passed in."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Check to see if this funding cycle's ballot is approved.\n// If so, return a funding cycle based on it.\nif (_isApproved(_projectId, fundingCycle)) return _mockFundingCycleBasedOn(fundingCycle, false);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_isapproved"},(0,a.kt)("inlineCode",{parentName:"a"},"_isApproved"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_mockfundingcyclebasedon"},(0,a.kt)("inlineCode",{parentName:"a"},"_mockFundingCycleBasedOn"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the funding cycle that the current eligible cycle is based on which must be the latest approved cycle configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get the funding cycle of its base funding cycle, which carries the last approved configuration.\nfundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the base has a duration of 0, it must still be current and there must not be a queued cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// There's no queued if the base, which must still be the current, has a duration of 0.\nif (fundingCycle.duration == 0) return _getStructFor(0, 0);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return a funding cycle based on the one current referenced, which must be the last approved cycle. The mock funding cycle is not allowed to have started already, which is why a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," flag is passed in."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Return a mock of the next up funding cycle.\nreturn _mockFundingCycleBasedOn(fundingCycle, false);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_mockfundingcyclebasedon"},(0,a.kt)("inlineCode",{parentName:"a"},"_mockFundingCycleBasedOn"))))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice \n  The funding cycle that's next up for the specified project.\n\n  @dev\n  If a queued funding cycle of the project is not found, returns an empty funding cycle with all properties set to 0.\n\n  @param _projectId The ID of the project to get the queued funding cycle of.\n\n  @return fundingCycle The project's queued funding cycle.\n*/\nfunction queuedOf(uint256 _projectId)\n  external\n  view\n  override\n  returns (JBFundingCycle memory fundingCycle)\n{\n  // If the project does not have a funding cycle, return an empty struct.\n  if (latestConfigurationOf[_projectId] == 0) return _getStructFor(0, 0);\n\n  // Get a reference to the configuration of the standby funding cycle.\n  uint256 _standbyFundingCycleConfiguration = _standbyOf(_projectId);\n\n  // If it exists, return its funding cycle if it is approved.\n  if (_standbyFundingCycleConfiguration > 0) {\n    fundingCycle = _getStructFor(_projectId, _standbyFundingCycleConfiguration);\n\n    if (_isApproved(_projectId, fundingCycle)) return fundingCycle;\n\n    // Resolve the funding cycle for the latest configured funding cycle.\n    fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\n  } else {\n    // Resolve the funding cycle for the latest configured funding cycle.\n    fundingCycle = _getStructFor(_projectId, latestConfigurationOf[_projectId]);\n\n    // If the latest funding cycle starts in the future, it must start in the distant future\n    // since its not in standby. In this case base the queued cycles on the base cycle.\n    if (fundingCycle.start > block.timestamp)\n      fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\n  }\n\n  // There's no queued if the current has a duration of 0.\n  if (fundingCycle.duration == 0) return _getStructFor(0, 0);\n\n  // Check to see if this funding cycle's ballot is approved.\n  // If so, return a funding cycle based on it.\n  if (_isApproved(_projectId, fundingCycle)) return _mockFundingCycleBasedOn(fundingCycle, false);\n\n  // Get the funding cycle of its base funding cycle, which carries the last approved configuration.\n  fundingCycle = _getStructFor(_projectId, fundingCycle.basedOn);\n\n  // There's no queued if the base, which must still be the current, has a duration of 0.\n  if (fundingCycle.duration == 0) return _getStructFor(0, 0);\n\n  // Return a mock of the next up funding cycle.\n  return _mockFundingCycleBasedOn(fundingCycle, false);\n}\n"))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}f.isMDXComponent=!0}}]);