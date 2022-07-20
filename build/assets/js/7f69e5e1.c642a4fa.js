"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[78653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),c=n(7094),u=n(12466);const s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,n;const{lazy:l,block:f,defaultValue:d,values:b,groupId:m,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:I}=(0,c.U)(),[E,T]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=m){const e=N[m];null!=e&&e!==E&&k.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=w.indexOf(t),r=k[n].value;r!==E&&(C(t),T(r),null!=m&&I(m,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;n=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;n=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},v)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,l.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},26650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={},c="supportsInterface",u={unversionedId:"dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/supportsinterface",id:"dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/supportsinterface",title:"supportsInterface",description:"Contract: JBReconfigurationBufferBallot",source:"@site/docs/dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/supportsinterface.md",sourceDirName:"dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read",slug:"/dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/supportsinterface",permalink:"/dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/supportsinterface",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/supportsinterface.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"stateOf",permalink:"/dev/api/contracts/or-ballots/jbreconfigurationbufferballot/read/stateof"},next:{title:"finalize",permalink:"/dev/api/contracts/or-ballots/jbreconfigurationbufferballot/write/finalize"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],f={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supportsinterface"},"supportsInterface"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-ballots/jbreconfigurationbufferballot"},(0,a.kt)("inlineCode",{parentName:"a"},"JBReconfigurationBufferBallot"))),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#IERC165"},(0,a.kt)("inlineCode",{parentName:"a"},"IERC165"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Indicates if this contract adheres to the specified interface.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"See {IERC165-supportsInterface}.")),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function supportsInterface(bytes4 _interfaceId)\n  public\n  view\n  virtual\n  override(ERC165, IERC165)\n  returns (bool) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_interfaceId")," is the ID of the interface to check for adherance to."))),(0,a.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone, and internally within this contract."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#IERC165"},(0,a.kt)("inlineCode",{parentName:"a"},"IERC165"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns a flag indicating if this contract adheres to the specified interface.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return true if the provided interface ID is in the list of interfaces this contract adheres to."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"return\n  _interfaceId == type(IJBReconfigurationBufferBallot).interfaceId ||\n  _interfaceId == type(IJBFundingCycleBallot).interfaceId ||\n  super.supportsInterface(_interfaceId);\n"))))),(0,a.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Indicates if this contract adheres to the specified interface.\n\n  @dev \n  See {IERC165-supportsInterface}.\n\n  @param _interfaceId The ID of the interface to check for adherance to.\n\n  @return A flag indicating if this contract adheres to the specified interface.\n*/\nfunction supportsInterface(bytes4 _interfaceId)\n  public\n  view\n  virtual\n  override(ERC165, IERC165)\n  returns (bool)\n{\n  return\n    _interfaceId == type(IJBReconfigurationBufferBallot).interfaceId ||\n    _interfaceId == type(IJBFundingCycleBallot).interfaceId ||\n    super.supportsInterface(_interfaceId);\n}\n"))),(0,a.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);