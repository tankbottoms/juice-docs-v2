"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[75009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),i=r(67392),s=r(7094),p=r(12466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,r;const{lazy:l,block:u,defaultValue:d,values:h,groupId:f,className:k}=e,N=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:N.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(r=N.find((e=>e.props.default)))?void 0:r.props.value)?t:N[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:j}=(0,s.U)(),[_,E]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=f){const e=g[f];null!=e&&e!==_&&b.some((t=>t.value===e))&&E(e)}const w=e=>{const t=e.currentTarget,r=T.indexOf(t),a=b[r].value;a!==_&&(O(t),E(a),null!=f&&j(f,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;r=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var n;const t=T.indexOf(e.currentTarget)-1;r=null!=(n=T[t])?n:T[T.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},k)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:w,onClick:w},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(N.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,l.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},28667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),l=r(85162);const i={},s="setEnsNamePartsFor",p={unversionedId:"dev/api/contracts/or-utilities/jbprojecthandles/write/setensnamepartsfor",id:"dev/api/contracts/or-utilities/jbprojecthandles/write/setensnamepartsfor",title:"setEnsNamePartsFor",description:"Contract: JBProjectHandles\u200b\u200c",source:"@site/docs/dev/api/contracts/or-utilities/jbprojecthandles/write/setensnamepartsfor.md",sourceDirName:"dev/api/contracts/or-utilities/jbprojecthandles/write",slug:"/dev/api/contracts/or-utilities/jbprojecthandles/write/setensnamepartsfor",permalink:"/zh/dev/api/contracts/or-utilities/jbprojecthandles/write/setensnamepartsfor",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbprojecthandles/write/setensnamepartsfor.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"handleOf",permalink:"/zh/dev/api/contracts/or-utilities/jbprojecthandles/read/handleof"},next:{title:"JBControllerUtility",permalink:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/"}},c={},m=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setensnamepartsfor"},"setEnsNamePartsFor"),(0,n.kt)("p",null,"Contract: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbprojecthandles/"},(0,n.kt)("inlineCode",{parentName:"a"},"JBProjectHandles")),"\u200b\u200c"),(0,n.kt)("p",null,"Interface: ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbprojecthandles"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBProjectHandles"))),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Associate an ENS name with a project.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'["jbx", "dao", "foo"]'," represents foo.dao.jbx.eth.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Only a project's owner or a designated operator can set its ENS name parts.")),(0,n.kt)("h4",{id:"definition"},"Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function setEnsNamePartsFor(uint256 _projectId, string[] memory _parts)\n  external\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations2.SET_ENS_NAME_FOR) { ... }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to set an ENS handle for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_parts")," is t"))),(0,n.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone."),(0,n.kt)("li",{parentName:"ul"},"Through the ",(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},(0,n.kt)("inlineCode",{parentName:"a"},"requirePermission"))," modifier, the function is only accessible by the token holder, or from an operator that has been given the ",(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations2"},(0,n.kt)("inlineCode",{parentName:"a"},"JBOperations2.SET_ENS_NAME_FOR"))," permission by the token holder."),(0,n.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbprojecthandles"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBProjectHandles"))," interface."),(0,n.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,n.kt)("h4",{id:"body"},"Body"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get a reference to the number of parts there are in the name."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// Get a reference to the number of parts are in the ENS name.\nuint256 _partsLength = _parts.length;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure there are at least some parts that make up the ENS name. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// Make sure there are ens name parts.\nif (_parts.length == 0) revert NO_PARTS();\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure there aren't any empty name parts by looping through each and checking if any of them is an empty string."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// Make sure no provided parts are empty.\nfor (uint256 _i = 0; _i < _partsLength; ) {\n  if (bytes(_parts[_i]).length == 0) revert EMPTY_NAME_PART();\n  unchecked {\n    ++_i;\n  }\n}\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Store the name parts."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// Store the parts.\n_ensNamePartsOf[_projectId] = _parts;\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Internal references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbprojecthandles/properties/-_ensnamepartsof"},(0,n.kt)("inlineCode",{parentName:"a"},"_ensNamePartsOf"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Emit a ",(0,n.kt)("inlineCode",{parentName:"p"},"SetEnsNameParts")," event with the relevant parameters."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"emit SetEnsNameParts(_projectId, _formatHandle(_parts), _parts, msg.sender);\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Event references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbprojecthandles/events/setensnameparts"},(0,n.kt)("inlineCode",{parentName:"a"},"SetEnsNameParts"))))))),(0,n.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/** \n  @notice \n  Associate an ENS name with a project.\n\n  @dev\n  ["jbx", "dao", "foo"] represents foo.dao.jbx.eth.\n\n  @dev\n  Only a project\'s owner or a designated operator can set its ENS name parts.\n\n  @param _projectId The ID of the project to set an ENS handle for.\n  @param _parts The parts of the ENS domain to use as the project handle, excluding the trailing .eth.\n*/\nfunction setEnsNamePartsFor(uint256 _projectId, string[] memory _parts)\n  external\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations2.SET_ENS_NAME_FOR)\n{\n  // Get a reference to the number of parts are in the ENS name.\n  uint256 _partsLength = _parts.length;\n\n  // Make sure there are ens name parts.\n  if (_parts.length == 0) revert NO_PARTS();\n\n  // Make sure no provided parts are empty.\n  for (uint256 _i = 0; _i < _partsLength; ) {\n    if (bytes(_parts[_i]).length == 0) revert EMPTY_NAME_PART();\n    unchecked {\n      ++_i;\n    }\n  }\n\n  // Store the parts.\n  _ensNamePartsOf[_projectId] = _parts;\n\n  emit SetEnsNameParts(_projectId, _formatHandle(_parts), _parts, msg.sender);\n}\n'))),(0,n.kt)(l.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"String"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"NO_PARTS"))),(0,n.kt)("td",{parentName:"tr",align:null},"Thrown if there are no name parts being set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"EMPTY_NAME_PART"))),(0,n.kt)("td",{parentName:"tr",align:null},"Thrown if at least one of the specified parts is empty."))))),(0,n.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Optimization")),(0,n.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,n.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Low severity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,n.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"High severity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,n.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);