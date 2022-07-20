"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[50843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),p=a(7094),s=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:i,block:d,defaultValue:m,values:f,groupId:h,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:j}=(0,p.U)(),[w,S]=(0,r.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=h){const e=g[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&S(e)}const I=e=>{const t=e.currentTarget,a=_.indexOf(t),n=v[a].value;n!==w&&(T(t),S(n),null!=h&&j(h,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=_.indexOf(e.currentTarget)+1;a=null!=(n=_[t])?n:_[0];break}case"ArrowLeft":{var r;const t=_.indexOf(e.currentTarget)-1;a=null!=(r=_[t])?r:_[_.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},38960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={},p="setDefaultSplits",s={unversionedId:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits",id:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits",title:"setDefaultSplits",description:"Contract: JBETHERC20SplitsPayer",source:"@site/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits.md",sourceDirName:"dev/api/contracts/or-utilities/jbetherc20splitspayer/write",slug:"/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/setdefaultsplits.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"receive",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/receive"},next:{title:"JBETHERC20SplitsPayerDeployer",permalink:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayerdeployer/"}},u={},c=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setdefaultsplits"},"setDefaultSplits"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))),(0,r.kt)("p",null,"Interface: ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbsplitspayer"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBSplitsPayer"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sets the location of the splits that payments this contract receives will be split between.")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function setDefaultSplits(\n  uint256 _projectId,\n  uint256 _domain,\n  uint256 _group\n) external virtual override onlyOwner { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of project for which the default splits are stored. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_domain")," is the domain within which the default splits are stored. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_group")," is the group within which the default splits are stored. "))),(0,r.kt)("li",{parentName:"ul"},"Through the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable-onlyOwner--"},(0,r.kt)("inlineCode",{parentName:"a"},"onlyOwner"))," modifier, this function can only be accessed by the address that owns this contract."),(0,r.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,r.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbsplitspayer"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBSplitsPayer"))," interface."),(0,r.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the default splits project ID if it has changed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set the default splits project ID if it's changing.\nif (_projectId != defaultSplitsProjectId) defaultSplitsProjectId = _projectId;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsprojectid"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultSplitsProjectId"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the default splits domain if it has changed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set the default splits domain if it's changing.\nif (_domain != defaultSplitsDomain) defaultSplitsDomain = _domain;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsdomain"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultSplitsDomain"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the default splits group if it has changed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Set the default splits group if it's changing.\nif (_group != defaultSplitsGroup) defaultSplitsGroup = _group;\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Internal references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/properties/defaultsplitsgroup"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultSplitsGroup"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"SetDefaultSplits")," event with all relevant parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"emit SetDefaultSplits(_projectId, _domain, _group, msg.sender);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Event references:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/events/setdefaultsplits"},(0,r.kt)("inlineCode",{parentName:"a"},"SetDefaultSplits"))))))),(0,r.kt)(i.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/** \n  @notice\n  Sets the location of the splits that payments this contract receives will be split between.\n\n  @param _projectId The ID of project for which the default splits are stored. \n  @param _domain The domain within which the default splits are stored. \n  @param _group The group within which the default splits are stored. \n*/\nfunction setDefaultSplits(\n  uint256 _projectId,\n  uint256 _domain,\n  uint256 _group\n) external virtual override onlyOwner {\n  // Set the default splits project ID if it's changing.\n  if (_projectId != defaultSplitsProjectId) defaultSplitsProjectId = _projectId;\n\n  // Set the default splits domain if it's changing.\n  if (_domain != defaultSplitsDomain) defaultSplitsDomain = _domain;\n\n  // Set the default splits group if it's changing.\n  if (_group != defaultSplitsGroup) defaultSplitsGroup = _group;\n\n  emit SetDefaultSplits(_projectId, _domain, _group, msg.sender);\n}\n"))),(0,r.kt)(i.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/events/setdefaultsplits"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"SetDefaultSplits")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed domain")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed group")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller")))))))),(0,r.kt)(i.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);