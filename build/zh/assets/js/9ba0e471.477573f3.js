"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[87507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),i=r(67392),p=r(7094),u=r(12466);const s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,r;const{lazy:l,block:d,defaultValue:m,values:k,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?t:b[0].props.value;if(null!==g&&!N.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:j}=(0,p.U)(),[T,w]=(0,a.useState)(g),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==T&&N.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,r=I.indexOf(t),n=N[r].value;n!==T&&(O(t),w(n),null!=f&&j(f,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=I.indexOf(e.currentTarget)+1;r=null!=(n=I[t])?n:I[0];break}case"ArrowLeft":{var a;const t=I.indexOf(e.currentTarget)-1;r=null!=(a=I[t])?a:I[I.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},N.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>I.push(e),onKeyDown:C,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},34509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),l=r(85162);const i={},p="shouldRequireClaimingFor",u={unversionedId:"dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor",id:"dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor",title:"shouldRequireClaimingFor",description:"Contract: JBTokenStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor.md",sourceDirName:"dev/api/contracts/jbtokenstore/write",slug:"/dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor",permalink:"/zh/dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"mintFor",permalink:"/zh/dev/api/contracts/jbtokenstore/write/mintfor"},next:{title:"transferFrom",permalink:"/zh/dev/api/contracts/jbtokenstore/write/transferfrom"}},s={},c=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shouldrequireclaimingfor"},"shouldRequireClaimingFor"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbtokenstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBTokenStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbtokenstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBTokenStore"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allows a project to force all future mints of its tokens to be claimed into the holder's wallet, or revoke the flag if it's already set.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Only a token holder or an operator can require claimed token.")),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function shouldRequireClaimingFor(uint256 _projectId, bool _flag)\n  external\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.REQUIRE_CLAIM) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project being affected."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_flag")," is a flag indicating whether or not claiming should be required."))),(0,a.kt)("li",{parentName:"ul"},"Through the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},(0,a.kt)("inlineCode",{parentName:"a"},"requirePermission"))," modifier, the function is only accessible by the project's owner, or from an operator that has been given the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jboperations"},(0,a.kt)("inlineCode",{parentName:"a"},"JBOperations.REQUIRE_CLAIM"))," permission by the project owner for the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"_projectId"),"."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbtokenstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBTokenStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's current token."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's current token.\nIJBToken _token = tokenOf[_projectId];\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/properties/tokenof"},(0,a.kt)("inlineCode",{parentName:"a"},"tokenOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the project has a token. If it doesn't, there's nowhere to claim tokens onto."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// The project must have a token contract attached.\nif (_token == IJBToken(address(0))) revert TOKEN_NOT_FOUND();\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store the flag for the project."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Store the flag.\nrequireClaimFor[_projectId] = _flag;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/properties/requireclaimfor"},(0,a.kt)("inlineCode",{parentName:"a"},"requireClaimFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Emit a ",(0,a.kt)("inlineCode",{parentName:"p"},"ShouldRequireClaim")," event with the relevant parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"emit ShouldRequireClaim(_projectId, _flag, msg.sender);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Event references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbtokenstore/events/shouldrequireclaim"},(0,a.kt)("inlineCode",{parentName:"a"},"ShouldRequireClaim"))))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Allows a project to force all future mints of its tokens to be claimed into the holder's wallet, or revoke the flag if it's already set.\n\n  @dev\n  Only a token holder or an operator can require claimed token.\n\n  @param _projectId The ID of the project being affected.\n  @param _flag A flag indicating whether or not claiming should be required.\n*/\nfunction shouldRequireClaimingFor(uint256 _projectId, bool _flag)\n  external\n  override\n  requirePermission(projects.ownerOf(_projectId), _projectId, JBOperations.REQUIRE_CLAIM)\n{\n  // Get a reference to the project's current token.\n  IJBToken _token = tokenOf[_projectId];\n\n  // The project must have a token contract attached.\n  if (_token == IJBToken(address(0))) revert TOKEN_NOT_FOUND();\n\n  // Store the flag.\n  requireClaimFor[_projectId] = _flag;\n\n  emit ShouldRequireClaim(_projectId, _flag, msg.sender);\n}\n"))),(0,a.kt)(l.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"String"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"TOKEN_NOT_FOUND"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the project doesn't have a token contract attached."))))),(0,a.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/shouldrequireclaim"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"ShouldRequireClaim")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"bool indexed flag")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address caller")))))))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);