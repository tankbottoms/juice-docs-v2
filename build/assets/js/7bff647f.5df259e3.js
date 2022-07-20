"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[62520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),i=r(86010),l=r(72389),o=r(67392),s=r(7094),p=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,r;const{lazy:l,block:d,defaultValue:m,values:f,groupId:b,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,o.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:j}=(0,s.U)(),[w,_]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==w&&k.some((t=>t.value===e))&&_(e)}const I=e=>{const t=e.currentTarget,r=T.indexOf(t),n=k[r].value;n!==w&&(O(t),_(n),null!=b&&j(b,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;r=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;r=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},13173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(65488),l=r(85162);const o={},s="splitsOf",p={unversionedId:"dev/api/contracts/jbsplitsstore/read/splitsof",id:"dev/api/contracts/jbsplitsstore/read/splitsof",title:"splitsOf",description:"Contract: JBSplitsStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsplitsstore/read/splitsof.md",sourceDirName:"dev/api/contracts/jbsplitsstore/read",slug:"/dev/api/contracts/jbsplitsstore/read/splitsof",permalink:"/dev/api/contracts/jbsplitsstore/read/splitsof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsplitsstore/read/splitsof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_getStructsFor",permalink:"/dev/api/contracts/jbsplitsstore/read/-_getstructsfor"},next:{title:"_set",permalink:"/dev/api/contracts/jbsplitsstore/write/-_set"}},u={},c=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"splitsof"},"splitsOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsplitsstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSplitsStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsplitsstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSplitsStore"))),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get all splits for the specified project ID, within the specified domain, for the specified group.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function splitsOf(\n  uint256 _projectId,\n  uint256 _domain,\n  uint256 _group\n) external view override returns (JBSplit[] memory)  { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get splits for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_domain")," is an identifier within which the returned splits should be considered active."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_group")," is the identifying group of the splits."))),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsplitsstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSplitsStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns an array of all ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jbsplit"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSplit")),"s for the project.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This function just reads and returns the splits of the project, within the specified domain, for the specified group."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"return _getStructsFor(_projectId, _domain, _group);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsplitsstore/read/-_getstructsfor"},(0,a.kt)("inlineCode",{parentName:"a"},"_getStructsFor"))))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice \n  Get all splits for the specified project ID, within the specified domain, for the specified group.\n\n  @param _projectId The ID of the project to get splits for.\n  @param _domain An identifier within which the returned splits should be considered active.\n  @param _group The identifying group of the splits.\n\n  @return An array of all splits for the project.\n*/\nfunction splitsOf(\n  uint256 _projectId,\n  uint256 _domain,\n  uint256 _group\n) external view override returns (JBSplit[] memory) {\n  return _getStructsFor(_projectId, _domain, _group);\n}\n"))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);