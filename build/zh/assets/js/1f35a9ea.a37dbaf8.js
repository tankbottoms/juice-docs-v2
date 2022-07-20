"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[56114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),c=r(7094),p=r(12466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,r;const{lazy:o,block:m,defaultValue:u,values:f,groupId:k,className:h}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:N.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===u?u:null!=(t=null!=u?u:null==(r=N.find((e=>e.props.default)))?void 0:r.props.value)?t:N[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:j}=(0,c.U)(),[O,C]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=k){const e=g[k];null!=e&&e!==O&&b.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,r=w.indexOf(t),n=b[r].value;n!==O&&(_(t),C(n),null!=k&&j(k,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;r=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},b.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:T,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(N.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function u(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},1069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={},c="setControllerOf",p={unversionedId:"dev/api/contracts/jbdirectory/write/setcontrollerof",id:"dev/api/contracts/jbdirectory/write/setcontrollerof",title:"setControllerOf",description:"Contract: JBDirectory\u200b\u200c",source:"@site/docs/dev/api/contracts/jbdirectory/write/setcontrollerof.md",sourceDirName:"dev/api/contracts/jbdirectory/write",slug:"/dev/api/contracts/jbdirectory/write/setcontrollerof",permalink:"/zh/dev/api/contracts/jbdirectory/write/setcontrollerof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbdirectory/write/setcontrollerof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_addTerminalIfNeeded",permalink:"/zh/dev/api/contracts/jbdirectory/write/-_addterminalifneeded"},next:{title:"setIsAllowedToSetFirstController",permalink:"/zh/dev/api/contracts/jbdirectory/write/setisallowedtosetfirstcontroller"}},s={},d=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setcontrollerof"},"setControllerOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbdirectory//"},(0,a.kt)("inlineCode",{parentName:"a"},"JBDirectory")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Update the controller that manages how terminals interact with the ecosystem.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A controller can be set if:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the message sender is the project owner or an operator having the correct authorization."),(0,a.kt)("li",{parentName:"ul"},"the message sender is the project's current controller."),(0,a.kt)("li",{parentName:"ul"},"or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function setControllerOf(uint256 _projectId, address _controller)\n  external\n  override\n  requirePermissionAllowingOverride(\n    projects.ownerOf(_projectId),\n    _projectId,\n    JBOperations.SET_CONTROLLER,\n    (msg.sender == address(controllerOf[_projectId]) ||\n      (isAllowedToSetFirstController[msg.sender] &&\n        controllerOf[_projectId] == IJBController(address(0))))\n  ) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to set a new controller for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_controller")," is the new controller to set."))),(0,a.kt)("li",{parentName:"ul"},"Through the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermissionallowingoverride"},(0,a.kt)("inlineCode",{parentName:"a"},"requirePermissionAllowingOverride"))," modifier, the function is only accessible by the project's owner, from an operator that has been given the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperations.SET_CONTROLLER"))," permission by the project owner for the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"_projectId"),", from the project's current controller, or from an allow-listed controller if the project doesn't already have a controller set."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function doesn't return anything")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Project IDs are assigned incrementally. If the provided project ID is greater than the number of projects, it must not be a valid project ID."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// The project must exist.\nif (projects.count() < _projectId) revert INVALID_PROJECT_ID_IN_DIRECTORY();\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/properties/projects"},(0,a.kt)("inlineCode",{parentName:"a"},"projects")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbprojects/properties/count"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's current funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's current funding cycle.\nJBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/properties/fundingcyclestore"},(0,a.kt)("inlineCode",{parentName:"a"},"fundingCycleStore")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the project's current funding cycle is set to allow setting its controller, or the request to set the controller is coming from the project's current controller or is setting the first controller."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Setting controller must be allowed if not called from the current controller or if the project already has a controller.\nif (\n  msg.sender != address(controllerOf[_projectId]) &&\n  controllerOf[_projectId] != address(0) &&\n  !uint8(_fundingCycle.metadata >> 8).setControllerAllowed()\n) revert SET_CONTROLLER_NOT_ALLOWED();\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbfundingcyclemetadataresolver"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleMetadataResolver")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".setControllerAllowed(...)"))))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/properties/controllerof"},(0,a.kt)("inlineCode",{parentName:"a"},"controllerOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store the provided controller as the controller of the project."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Set the new controller.\ncontrollerOf[_projectId] = _controller;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/properties/controllerof"},(0,a.kt)("inlineCode",{parentName:"a"},"controllerOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Emit a ",(0,a.kt)("inlineCode",{parentName:"p"},"SetController")," event with the relevant parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"emit SetController(_projectId, _controller, msg.sender);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Event references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/events/setcontroller"},(0,a.kt)("inlineCode",{parentName:"a"},"SetController"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Update the controller that manages how terminals interact with the ecosystem.\n\n  @dev \n  A controller can be set if:\n  - the message sender is the project owner or an operator having the correct authorization.\n  - the message sender is the project's current controller. \n  - or, an allowedlisted address is setting a controller for a project that doesn't already have a controller.\n\n  @param _projectId The ID of the project to set a new controller for.\n  @param _controller The new controller to set.\n*/\nfunction setControllerOf(uint256 _projectId, address _controller)\n  external\n  override\n  requirePermissionAllowingOverride(\n    projects.ownerOf(_projectId),\n    _projectId,\n    JBOperations.SET_CONTROLLER,\n    (msg.sender == address(controllerOf[_projectId]) ||\n      (isAllowedToSetFirstController[msg.sender] && controllerOf[_projectId] == address(0)))\n  )\n{\n  // The project must exist.\n  if (projects.count() < _projectId) revert INVALID_PROJECT_ID_IN_DIRECTORY();\n\n// Get a reference to the project's current funding cycle.\n  JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n  // Setting controller must be allowed if not called from the current controller or if the project already has a controller.\n  if (\n    msg.sender != address(controllerOf[_projectId]) &&\n    controllerOf[_projectId] != address(0) &&\n    !uint8(_fundingCycle.metadata >> 8).setControllerAllowed()\n  ) revert SET_CONTROLLER_NOT_ALLOWED();\n\n  // Set the new controller.\n  controllerOf[_projectId] = _controller;\n\n  emit SetController(_projectId, _controller, msg.sender);\n}\n"))),(0,a.kt)(o.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"String"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"INVALID_PROJECT_ID"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the provided project doesn't yet exist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"SET_CONTROLLER_NOT_ALLOWED"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the provided project isn't currently allowed to set its controller."))))),(0,a.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbdirectory/events/setcontroller"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"SetController")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"int256 indexed projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbcontroller"},"IJBController"),"indexed controller")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address caller")))))))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}u.isMDXComponent=!0}}]);