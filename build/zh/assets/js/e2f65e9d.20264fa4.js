"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[76761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),o=r(67294),a=r(86010),l=r(72389),i=r(67392),s=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:l,block:d,defaultValue:m,values:f,groupId:b,className:v}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(r=k.find((e=>e.props.default)))?void 0:r.props.value)?t:k[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[j,w]=(0,o.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==j&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,r=O.indexOf(t),n=h[r].value;n!==j&&(_(t),w(n),null!=b&&T(b,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;r=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var o;const t=O.indexOf(e.currentTarget)-1;r=null!=(o=O[t])?o:O[O.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=r?r:t)}))),l?(0,o.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},88487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(65488),l=r(85162);const i={},s="distributeReservedTokensOf",u={unversionedId:"dev/api/contracts/or-controllers/jbcontroller/write/distributereservedtokensof",id:"dev/api/contracts/or-controllers/jbcontroller/write/distributereservedtokensof",title:"distributeReservedTokensOf",description:"Contract: JBController\u200b\u200c",source:"@site/docs/dev/api/contracts/or-controllers/jbcontroller/write/distributereservedtokensof.md",sourceDirName:"dev/api/contracts/or-controllers/jbcontroller/write",slug:"/dev/api/contracts/or-controllers/jbcontroller/write/distributereservedtokensof",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/distributereservedtokensof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-controllers/jbcontroller/write/distributereservedtokensof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"changeTokenOf",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/changetokenof"},next:{title:"issueTokenFor",permalink:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/issuetokenfor"}},c={},p=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distributereservedtokensof"},"distributeReservedTokensOf"),(0,o.kt)("p",null,"Contract: ",(0,o.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController")),"\u200b\u200c"),(0,o.kt)("p",null,"Interface: ",(0,o.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBController"))),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Distributes all outstanding reserved tokens for a project.")),(0,o.kt)("h4",{id:"definition"},"Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function distributeReservedTokensOf(uint256 _projectId, string memory _memo)\n  external\n  virtual\n  override\n  returns (uint256) { ... }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to which the reserved tokens belong."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_memo")," is a memo to pass along to the emitted event."))),(0,o.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone."),(0,o.kt)("li",{parentName:"ul"},"The function can be overriden by inheriting contracts."),(0,o.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,o.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbcontroller"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBController"))," interface."),(0,o.kt)("li",{parentName:"ul"},"The function returns the amount of minted reserved tokens.")),(0,o.kt)("h4",{id:"body"},"Body"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Forward the call to the internal version of the function that is also used by other operations."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"return _distributeReservedTokensOf(_projectId, _memo);\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Internal references:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/-_distributereservedtokensof"},(0,o.kt)("inlineCode",{parentName:"a"},"_distributeReservedTokensOf"))))))),(0,o.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Distributes all outstanding reserved tokens for a project.\n\n  @param _projectId The ID of the project to which the reserved tokens belong.\n  @param _memo A memo to pass along to the emitted event.\n\n  @return The amount of minted reserved tokens.\n*/\nfunction distributeReservedTokensOf(uint256 _projectId, string memory _memo)\n  external\n  virtual\n  override\n  returns (uint256)\n{\n  return _distributeReservedTokensOf(_projectId, _memo);\n}\n"))),(0,o.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Optimization")),(0,o.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,o.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Low severity")),(0,o.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,o.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"High severity")),(0,o.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,o.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);