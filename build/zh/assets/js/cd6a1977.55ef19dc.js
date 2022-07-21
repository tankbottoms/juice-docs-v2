"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[73430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),u=n(7094),c=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function s(e){var t,n;const{lazy:o,block:s,defaultValue:m,values:f,groupId:k,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:_}=(0,u.U)(),[I,C]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==I&&N.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=j.indexOf(t),a=N[n].value;a!==I&&(w(t),C(a),null!=k&&_(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=j.indexOf(e.currentTarget)+1;n=null!=(a=j[t])?a:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;n=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},g)},N.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:T,onClick:T},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function m(e){const t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},97229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={},u="configureFor",c={unversionedId:"dev/api/contracts/jbfundingcyclestore/write/configurefor",id:"dev/api/contracts/jbfundingcyclestore/write/configurefor",title:"configureFor",description:"Contract: JBFundingCycleStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbfundingcyclestore/write/configurefor.md",sourceDirName:"dev/api/contracts/jbfundingcyclestore/write",slug:"/dev/api/contracts/jbfundingcyclestore/write/configurefor",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/configurefor",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbfundingcyclestore/write/configurefor.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_packAndStoreIntrinsicPropertiesOf",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof"},next:{title:"JBSplitsStore",permalink:"/zh/dev/api/contracts/jbsplitsstore/"}},p={},d=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configurefor"},"configureFor"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbfundingcyclestore/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore")),"\u200b\u200c"),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbfundingcyclestore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBFundingCycleStore"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configures the next eligible funding cycle for the specified project.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Only a project's current controller can configure its funding cycles.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function configureFor(\n  uint256 _projectId,\n  JBFundingCycleData calldata _data,\n  uint256 _metadata,\n  uint256 _mustStartAtOrAfter\n) external override onlyController(_projectId) returns (JBFundingCycle memory) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project being configured."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_data")," is the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/data-structures/jbfundingcycledata"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycleData"))," for the configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_metadata")," is arbitrary extra data to associate with this funding cycle configuration that's not used within."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_mustStartAtOrAfter")," is the time before which the initialized funding cycle cannot start."))),(0,r.kt)("li",{parentName:"ul"},"Through the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/modifiers/onlycontroller"},(0,r.kt)("inlineCode",{parentName:"a"},"onlyController"))," modifier, the function can only be accessed by the controller of the ",(0,r.kt)("inlineCode",{parentName:"li"},"_projectId"),"."),(0,r.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbfundingcyclestore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBFundingCycleStore"))," interface."),(0,r.kt)("li",{parentName:"ul"},"Returns the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/data-structures/jbfundingcycle"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycle"))," that the configuration will take effect during..")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the duration fits in a ",(0,r.kt)("inlineCode",{parentName:"p"},"uint64"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Duration must fit in a uint64.\nif (_data.duration > type(uint64).max) revert INVALID_DURATION();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"_data.discountRate")," is less than the expected maximum value."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Discount rate must be less than or equal to 100%.\nif (_data.discountRate > JBConstants.MAX_DISCOUNT_RATE) revert INVALID_DISCOUNT_RATE();\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Library references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbconstants"},(0,r.kt)("inlineCode",{parentName:"a"},"JBConstants")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".MAX_DISCOUNT_RATE")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"_data.weight")," fits in a ",(0,r.kt)("inlineCode",{parentName:"p"},"uint80"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Weight must fit into a uint88.\nif (_data.weight > type(uint88).max) revert INVALID_WEIGHT();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get a reference to the time at which the configuration is occurring."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// The configuration timestamp is now.\nuint256 _configuration = block.timestamp;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the intrinsic properties. This'll create a new funding cycle if there isn't a queued one already."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set up a reconfiguration by configuring intrinsic properties.\n_configureIntrinsicPropertiesFor(\n  _projectId,\n  _configuration,\n  _data.weight,\n  // Must start on or after the current timestamp.\n  _mustStartAtOrAfter > block.timestamp ? _mustStartAtOrAfter : block.timestamp\n);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/write/-_configureintrinsicpropertiesfor"},(0,r.kt)("inlineCode",{parentName:"a"},"_configureIntrinsicpropertiesFor"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store all of the user configuration properties provided. These properties can all be packed into one ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," storage slot. No need to store if the resulting stored value would be 0 since the storage slot defaults to 0."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Efficiently stores a funding cycles provided user defined properties.\n// If all user config properties are zero, no need to store anything as the default value will have the same outcome.\nif (\n  _data.ballot != IJBFundingCycleBallot(address(0)) ||\n  _data.duration > 0 ||\n  _data.discountRate > 0\n) {\n  // ballot in bits 0-159 bytes.\n  uint256 packed = uint160(address(_data.ballot));\n\n  // duration in bits 160-223 bytes.\n  packed |= _data.duration << 160;\n\n  // discountRate in bits 224-255 bytes.\n  packed |= _data.discountRate << 224;\n\n  // Set in storage.\n  _packedUserPropertiesOf[_projectId][_configuration] = packed;\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/properties/-_packeduserpropertiesof"},(0,r.kt)("inlineCode",{parentName:"a"},"_packedUserPropertiesOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store the provided metadata for the configuration. No need to store if the value is 0 since the storage slot defaults to 0."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set the metadata if needed.\nif (_metadata > 0) _metadataOf[_projectId][_configuration] = _metadata;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/properties/-_metadataof"},(0,r.kt)("inlineCode",{parentName:"a"},"_metadataOf"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," event with the relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit Configure(_configuration, _projectId, _data, _metadata, _mustStartAtOrAfter, msg.sender);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/events/configure"},(0,r.kt)("inlineCode",{parentName:"a"},"Configure"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return the ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/data-structures/jbfundingcycle"},(0,r.kt)("inlineCode",{parentName:"a"},"JBFundingCycle"))," struct that carries the new configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Return the funding cycle for the new configuration.\nreturn _getStructFor(_projectId, _configuration);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/-_getstructfor"},(0,r.kt)("inlineCode",{parentName:"a"},"_getStructFor"))))))),(0,r.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @notice \n  Configures the next eligible funding cycle for the specified project.\n\n  @dev\n  Only a project's current controller can configure its funding cycles.\n\n  @param _projectId The ID of the project being configured.\n  @param _data The funding cycle configuration data.\n  @param _metadata Arbitrary extra data to associate with this funding cycle configuration that's not used within.\n  @param _mustStartAtOrAfter The time before which the initialized funding cycle cannot start.\n\n  @return The funding cycle that the configuration will take effect during.\n*/\nfunction configureFor(\n  uint256 _projectId,\n  JBFundingCycleData calldata _data,\n  uint256 _metadata,\n  uint256 _mustStartAtOrAfter\n) external override onlyController(_projectId) returns (JBFundingCycle memory) {\n  // Duration must fit in a uint64.\n  if (_data.duration > type(uint64).max) revert INVALID_DURATION();\n\n  // Discount rate must be less than or equal to 100%.\n  if (_data.discountRate > JBConstants.MAX_DISCOUNT_RATE) revert INVALID_DISCOUNT_RATE();\n\n  // Weight must fit into a uint88.\n  if (_data.weight > type(uint88).max) revert INVALID_WEIGHT();\n\n  // The configuration timestamp is now.\n  uint256 _configuration = block.timestamp;\n\n  // Set up a reconfiguration by configuring intrinsic properties.\n  _configureIntrinsicPropertiesFor(\n    _projectId,\n    _configuration,\n    _data.weight,\n    // Must start on or after the current timestamp.\n    _mustStartAtOrAfter > block.timestamp ? _mustStartAtOrAfter : block.timestamp\n  );\n\n  // Efficiently stores a funding cycles provided user defined properties.\n  // If all user config properties are zero, no need to store anything as the default value will have the same outcome.\n  if (\n    _data.ballot != IJBFundingCycleBallot(address(0)) ||\n    _data.duration > 0 ||\n    _data.discountRate > 0\n  ) {\n    // ballot in bits 0-159 bytes.\n    uint256 packed = uint160(address(_data.ballot));\n\n    // duration in bits 160-223 bytes.\n    packed |= _data.duration << 160;\n\n    // discountRate in bits 224-255 bytes.\n    packed |= _data.discountRate << 224;\n\n    // Set in storage.\n    _packedUserPropertiesOf[_projectId][_configuration] = packed;\n  }\n\n  // Set the metadata if needed.\n  if (_metadata > 0) _metadataOf[_projectId][_configuration] = _metadata;\n\n  emit Configure(_configuration, _projectId, _data, _metadata, _mustStartAtOrAfter, msg.sender);\n\n  // Return the funding cycle for the new configuration.\n  return _getStructFor(_projectId, _configuration);\n}\n"))),(0,r.kt)(o.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"INVALID_DURATION"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the provided duration is greater than 2^64 - 1 (1.844E19)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"INVALID_DISCOUNT_RATE"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the provided discount rate is greater than the max expected value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"INVALID_WEIGHT"))),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown if the provided weight is greater than 2^88 - 1 (3.09E26)"))))),(0,r.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/events/configure"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Configure")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed configuration")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycledata"},"JBFundingCycleData"),"data")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 metadata")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 mustStartAtOrAfter")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);