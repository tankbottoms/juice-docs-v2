"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[82163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),l=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:g,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:C}=(0,c.U)(),[_,j]=(0,a.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=g){const e=N[g];null!=e&&e!==_&&k.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),r=k[n].value;r!==_&&(O(t),j(r),null!=g&&C(g,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;n=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;n=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:T,onClick:T},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},80428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={},c="reconfigureFundingCyclesOf",s={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof",id:"dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof",title:"reconfigureFundingCyclesOf",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/write",slug:"/dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"prepForMigrationOf",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/prepformigrationof"},next:{title:"JBChainlinkV3PriceFeed",permalink:"/dev/api/contracts/or-price-feeds/jbchainlinkv3pricefeed/"}},u={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reconfigurefundingcyclesof"},"reconfigureFundingCyclesOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-controllers/jbcontroller/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbcontroller"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBController"))),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle's ballot.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Only a project's owner or a designated operator can configure its funding cycles.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function reconfigureFundingCyclesOf(\n  uint256 _projectId,\n  JBFundingCycleData calldata _data,\n  JBFundingCycleMetadata calldata _metadata,\n  uint256 _mustStartAtOrAfter,\n  JBGroupedSplits[] memory _groupedSplits,\n  JBFundAccessConstraints[] memory _fundAccessConstraints,\n  string calldata _memo\n)\n  external\n  virtual\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)\n  returns (uint256 configuration) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project whose funding cycles are being reconfigured."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_data")," is a ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbfundingcycledata"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleData"))," data structure that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_metadata")," is a ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbfundingcyclemetadata"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleMetadata"))," data structure specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_mustStartAtOrAfter")," is the time before which the configured funding cycle cannot start."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_groupedSplits")," is an array of ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbgroupedsplits"},(0,a.kt)("inlineCode",{parentName:"a"},"JBGroupedSplits"))," data structures containing splits to set for any number of groups. The core protocol makes use of groups defined in ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbsplitsgroups"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSplitsGroups")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_fundAccessConstraints")," is an array of ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbfundaccessconstraints"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundAccessConstraints"))," data structures containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The ",(0,a.kt)("inlineCode",{parentName:"li"},"_distributionLimit")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"_overflowAllowance")," parameters must fit in a ",(0,a.kt)("inlineCode",{parentName:"li"},"uint232"),". The ",(0,a.kt)("inlineCode",{parentName:"li"},"_distributionLimit")," applies for each funding cycle, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"_overflowAllowance")," applies for the entirety of the configuration. "))),(0,a.kt)("li",{parentName:"ul"},"Through the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},(0,a.kt)("inlineCode",{parentName:"a"},"requirePermission"))," modifier, the function is only accessible by the project's owner, or from an operator that has been given the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jboperations"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperations.RECONFIGURE"))," permission by the project owner for the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"_projectId"),"."),(0,a.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbcontroller"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns the configuration of the funding cycle that was successfully updated.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the project's funding cycle, fund access constraints, and splits. Get a reference to the resulting funding cycle's configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Configure the next funding cycle.\nconfiguration = _configure(\n  _projectId,\n  _data,\n  _metadata,\n  _mustStartAtOrAfter,\n  _groupedSplits,\n  _fundAccessConstraints\n);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/write/-_configure"},(0,a.kt)("inlineCode",{parentName:"a"},"_configure"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Emit a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReconfigureFundingCycles")," event with the relevant parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"emit ReconfigureFundingCycles(configuration, _projectId, _memo, msg.sender);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Event references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/events/reconfigurefundingcycles"},(0,a.kt)("inlineCode",{parentName:"a"},"ReconfigureFundingCycles"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Proposes a configuration of a subsequent funding cycle that will take effect once the current one expires if it is approved by the current funding cycle's ballot.\n\n  @dev\n  Only a project's owner or a designated operator can configure its funding cycles.\n\n  @param _projectId The ID of the project whose funding cycles are being reconfigured.\n  @param _data Data that defines the funding cycle. These properties will remain fixed for the duration of the funding cycle.\n  @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\n  @param _mustStartAtOrAfter The time before which the configured funding cycle cannot start.\n  @param _groupedSplits An array of splits to set for any number of groups. \n  @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.\n  @param _memo A memo to pass along to the emitted event.\n\n  @return configuration The configuration of the funding cycle that was successfully reconfigured.\n*/\nfunction reconfigureFundingCyclesOf(\n  uint256 _projectId,\n  JBFundingCycleData calldata _data,\n  JBFundingCycleMetadata calldata _metadata,\n  uint256 _mustStartAtOrAfter,\n  JBGroupedSplits[] memory _groupedSplits,\n  JBFundAccessConstraints[] memory _fundAccessConstraints,\n  string calldata _memo\n)\n  external\n  virtual\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)\n  returns (uint256 configuration)\n{\n  // Configure the next funding cycle.\n  configuration = _configure(\n    _projectId,\n    _data,\n    _metadata,\n    _mustStartAtOrAfter,\n    _groupedSplits,\n    _fundAccessConstraints\n  );\n\n  emit ReconfigureFundingCycles(configuration, _projectId, _memo, msg.sender);\n}\n"))),(0,a.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-controllers/jbcontroller/events/reconfigurefundingcycles"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"ReconfigureFundingCycles")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 configuration")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"string memo")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address caller")))))))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);