"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[46813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),c=r(7094),u=r(12466);const s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:o,block:d,defaultValue:m,values:f,groupId:b,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),k=(0,i.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:j}=(0,c.U)(),[O,T]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=w.indexOf(t),n=h[r].value;n!==O&&(I(t),T(n),null!=b&&j(b,String(n)))},_=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;r=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:_,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},58533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={},c="terminalsOf",u={unversionedId:"dev/api/contracts/jbdirectory/read/terminalsof",id:"dev/api/contracts/jbdirectory/read/terminalsof",title:"terminalsOf",description:"For each project ID, the terminals that are currently managing its funds.",source:"@site/docs/dev/api/contracts/jbdirectory/read/terminalsof.md",sourceDirName:"dev/api/contracts/jbdirectory/read",slug:"/dev/api/contracts/jbdirectory/read/terminalsof",permalink:"/dev/api/contracts/jbdirectory/read/terminalsof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbdirectory/read/terminalsof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"primaryTerminalOf",permalink:"/dev/api/contracts/jbdirectory/read/primaryterminalof"},next:{title:"_addTerminalIfNeeded",permalink:"/dev/api/contracts/jbdirectory/write/-_addterminalifneeded"}},s={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminalsof"},"terminalsOf"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For each project ID, the terminals that are currently managing its funds.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function terminalsOf(uint256 _projectId)\n  external\n  view\n  override\n  returns (IJBPaymentTerminal[] memory) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get terminals of."))),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns an array of terminal addresses.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This function just reads and returns the stored ",(0,a.kt)("inlineCode",{parentName:"p"},"_terminalsOf")," the project."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"return _terminalsOf[_projectId];\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbdirectory/properties/-_terminalsof"},(0,a.kt)("inlineCode",{parentName:"a"},"_terminalsOf"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/** \n  @notice\n  For each project ID, the terminals that are currently managing its funds.\n\n  @param _projectId The ID of the project to get terminals of.\n\n  @return An array of terminal addresses.\n*/\nfunction terminalsOf(uint256 _projectId)\n  external\n  view\n  override\n  returns (IJBPaymentTerminal[] memory)\n{\n  return _terminalsOf[_projectId];\n}\n"))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);