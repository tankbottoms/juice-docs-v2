"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[76410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),c=a(7094),s=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,a;const{lazy:l,block:u,defaultValue:m,values:f,groupId:h,className:k}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(a=N.find((e=>e.props.default)))?void 0:a.props.value)?t:N[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:j}=(0,c.U)(),[w,_]=(0,r.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&_(e)}const O=e=>{const t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==w&&(T(t),_(n),null!=h&&j(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;a=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},k)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},76691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={},c="launchProjectFor",s={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor",id:"dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor",title:"launchProjectFor",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/write",slug:"/dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"launchFundingCyclesFor",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/launchfundingcyclesfor"},next:{title:"migrate",permalink:"/dev/api/contracts/or-controllers/jbcontroller/write/migrate"}},p={},d=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"launchprojectfor"},"launchProjectFor"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-controllers/jbcontroller/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creates a project. This will mint an ERC-721 into the specified owner's account, configure a first funding cycle, and set up any splits.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Each operation within this transaction can be done in sequence separately.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Anyone can deploy a project on an owner's behalf.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function launchProjectFor(\n  address _owner,\n  JBProjectMetadata calldata _projectMetadata,\n  JBFundingCycleData calldata _data,\n  JBFundingCycleMetadata calldata _metadata,\n  uint256 _mustStartAtOrAfter,\n  JBGroupedSplits[] calldata _groupedSplits,\n  JBFundAccessConstraints[] calldata _fundAccessConstraints,\n  IJBPaymentTerminal[] calldata _terminals,\n  string calldata _memo\n) external virtual override returns (uint256 projectId) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_owner")," is the address to set as the owner of the project. The project ERC-721 will be owned by this address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectMetadata")," is a ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbprojectmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"JBProjectMetadata"))," data structure to associate with the project within a particular domain. This can be updated any time by the owner of the project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_data")," is a ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbfundingcycledata"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycleData"))," data structure that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_metadata")," is a ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbfundingcyclemetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycleMetadata"))," data structure specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_mustStartAtOrAfter")," is the time before which the configured funding cycle cannot start."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_groupedSplits")," is an array of ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbgroupedsplits"},(0,r.kt)("inlineCode",{parentName:"a"},"JBGroupedSplits"))," data structures containing splits to set for any number of groups. The core protocol makes use of groups defined in ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbsplitsgroups"},(0,r.kt)("inlineCode",{parentName:"a"},"JBSplitsGroups")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_fundAccessConstraints")," is an array of ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbfundaccessconstraints"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundAccessConstraints"))," data structures containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The ",(0,r.kt)("inlineCode",{parentName:"li"},"_distributionLimit")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"_overflowAllowance")," parameters must fit in a ",(0,r.kt)("inlineCode",{parentName:"li"},"uint232"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"_distributionLimit")," applies for each funding cycle, and the ",(0,r.kt)("inlineCode",{parentName:"li"},"_overflowAllowance")," applies for the entirety of the configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_terminals")," is an array of ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPaymentTerminal"))," payment terminals to add for the project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_memo")," is a memo to pass along to the emitted event."))),(0,r.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone."),(0,r.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,r.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbcontroller"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function returns the ID of the project that was launched.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the project. This will mint an ERC-721 in the owner's wallet representing ownership over the project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Mint the project into the wallet of the message sender.\nprojectId = projects.createFor(_owner, _projectMetadata);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/projects"},(0,r.kt)("inlineCode",{parentName:"a"},"projects")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbprojects/write/createfor"},(0,r.kt)("inlineCode",{parentName:"a"},"createFor"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set this controller as the controller of the project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set this contract as the project's controller in the directory.\ndirectory.setControllerOf(projectId, address(this));\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/directory"},(0,r.kt)("inlineCode",{parentName:"a"},"directory")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/write/setcontrollerof"},(0,r.kt)("inlineCode",{parentName:"a"},"setControllerOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the project's funding cycle, fund access constraints, and splits. Get a reference to the resulting funding cycle's configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Configure the first funding cycle.\nuint256 _configuration = _configure(\n  projectId,\n  _data,\n  _metadata,\n  _mustStartAtOrAfter,\n  _groupedSplits,\n  _fundAccessConstraints\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/write/-_configure"},(0,r.kt)("inlineCode",{parentName:"a"},"_configure"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If terminals were provided, add them to the list of terminals the project can accept funds through."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Add the provided terminals to the list of terminals.\nif (_terminals.length > 0) directory.setTerminalsOf(projectId, _terminals);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/properties/directory"},(0,r.kt)("inlineCode",{parentName:"a"},"directory")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"External references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/write/setterminalsof"},(0,r.kt)("inlineCode",{parentName:"a"},"setTerminalsOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchProject")," event with the relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit LaunchProject(_configuration, projectId, _memo, msg.sender);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/events/launchproject"},(0,r.kt)("inlineCode",{parentName:"a"},"LaunchProject"))))))),(0,r.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Creates a project. This will mint an ERC-721 into the specified owner's account, configure a first funding cycle, and set up any splits.\n\n  @dev\n  Each operation within this transaction can be done in sequence separately.\n\n  @dev\n  Anyone can deploy a project on an owner's behalf.\n\n  @param _owner The address to set as the owner of the project. The project ERC-721 will be owned by this address.\n  @param _projectMetadata Metadata to associate with the project within a particular domain. This can be updated any time by the owner of the project.\n  @param _data Data that defines the project's first funding cycle. These properties will remain fixed for the duration of the funding cycle.\n  @param _metadata Metadata specifying the controller specific params that a funding cycle can have. These properties will remain fixed for the duration of the funding cycle.\n  @param _mustStartAtOrAfter The time before which the configured funding cycle can't start.\n  @param _groupedSplits An array of splits to set for any number of groups.\n  @param _fundAccessConstraints An array containing amounts that a project can use from its treasury for each payment terminal. Amounts are fixed point numbers using the same number of decimals as the accompanying terminal. The `_distributionLimit` and `_overflowAllowance` parameters must fit in a `uint232`.\n  @param _terminals Payment terminals to add for the project.\n  @param _memo A memo to pass along to the emitted event.\n\n  @return projectId The ID of the project.\n*/\nfunction launchProjectFor(\n  address _owner,\n  JBProjectMetadata calldata _projectMetadata,\n  JBFundingCycleData calldata _data,\n  JBFundingCycleMetadata calldata _metadata,\n  uint256 _mustStartAtOrAfter,\n  JBGroupedSplits[] calldata _groupedSplits,\n  JBFundAccessConstraints[] calldata _fundAccessConstraints,\n  IJBPaymentTerminal[] calldata _terminals,\n  string calldata _memo\n) external virtual override returns (uint256 projectId) {\n  // Mint the project into the wallet of the message sender.\n  projectId = projects.createFor(_owner, _projectMetadata);\n\n  // Set this contract as the project's controller in the directory.\n  directory.setControllerOf(projectId, address(this));\n\n  // Configure the first funding cycle.\n  uint256 _configuration = _configure(\n    projectId,\n    _data,\n    _metadata,\n    _mustStartAtOrAfter,\n    _groupedSplits,\n    _fundAccessConstraints\n  );\n\n  // Add the provided terminals to the list of terminals.\n  if (_terminals.length > 0) directory.setTerminalsOf(projectId, _terminals);\n\n  emit LaunchProject(_configuration, projectId, _memo, msg.sender);\n}\n"))),(0,r.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-controllers/jbcontroller/events/launchproject"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"LaunchProject")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 configuration")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string memo")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);