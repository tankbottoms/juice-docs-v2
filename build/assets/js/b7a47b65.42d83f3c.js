"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[93606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),c=n(7094),u=n(12466);const p="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:f,groupId:v,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,c.U)(),[j,T]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=v){const e=N[v];null!=e&&e!==j&&h.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==j&&(_(t),T(r),null!=v&&w(v,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},75967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={},c="currentOverflowOf",u={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof",title:"currentOverflowOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/read",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentoverflowof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_reclaimableOverflowDuring",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_reclaimableoverflowduring"},next:{title:"currentReclaimableOverflowOf",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/currentreclaimableoverflowof1"}},p={},s=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"currentoverflowof"},"currentOverflowOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gets the current overflowed amount in a terminal for a specified project.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The current overflow is represented as a fixed point number with the same amount of decimals as the specified terminal.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function currentOverflowOf(IJBSingleTokenPaymentTerminal _terminal, uint256 _projectId)\n  external\n  view\n  override\n  returns (uint256) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_terminal")," is the terminal for which the overflow is being calculated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get overflow for."))),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns the current amount of overflow that project has in the specified terminal.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Forward the call to the internal version of the function that is also used by other operations, using the project's current funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Return the overflow during the project's current funding cycle.\nreturn\n  _overflowDuring(\n    _terminal,\n    _projectId,\n    fundingCycleStore.currentOf(_projectId),\n    _terminal.currency()\n  );\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_overflowduring"},(0,a.kt)("inlineCode",{parentName:"a"},"_overflowDuring")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentOf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbsingletokenpaymentterminal/properties/currency"},(0,a.kt)("inlineCode",{parentName:"a"},"currency"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Gets the current overflowed amount in a terminal for a specified project.\n\n  @dev\n  The current overflow is represented as a fixed point number with the same amount of decimals as the specified terminal.\n\n  @param _terminal The terminal for which the overflow is being calculated.\n  @param _projectId The ID of the project to get overflow for.\n\n  @return The current amount of overflow that project has in the specified terminal.\n*/\nfunction currentOverflowOf(IJBSingleTokenPaymentTerminal _terminal, uint256 _projectId)\n  external\n  view\n  override\n  returns (uint256)\n{\n  // Return the overflow during the project's current funding cycle.\n  return\n    _overflowDuring(\n      _terminal,\n      _projectId,\n      fundingCycleStore.currentOf(_projectId),\n      _terminal.currency()\n    );\n}\n"))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);