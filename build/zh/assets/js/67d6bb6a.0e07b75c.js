"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[24071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),l=n(67392),c=n(7094),p=n(12466);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:k,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:_}=(0,c.U)(),[w,O]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==w&&(j(t),O(r),null!=k&&_(k,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},5242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={},c="_packAndStoreIntrinsicPropertiesOf",p={unversionedId:"dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof",id:"dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof",title:"_packAndStoreIntrinsicPropertiesOf",description:"Contract: JBFundingCycleStore\u200b",source:"@site/docs/dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof.md",sourceDirName:"dev/api/contracts/jbfundingcyclestore/write",slug:"/dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbfundingcyclestore/write/-_packandstoreintrinsicpropertiesof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_initFor",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/-_initfor"},next:{title:"configureFor",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/configurefor"}},s={},u=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"_packandstoreintrinsicpropertiesof"},"_packAndStoreIntrinsicPropertiesOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbfundingcyclestore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore")),"\u200b"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Efficiently stores a funding cycle's provided intrinsic properties.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function _packAndStoreIntrinsicPropertiesOf(\n  uint256 _configuration,\n  uint256 _projectId,\n  uint256 _number,\n  uint256 _weight,\n  uint256 _basedOn,\n  uint256 _start\n) private { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_configuration")," is the configuration of the funding cycle to pack and store."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to which the funding cycle belongs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_number")," is the number of the funding cycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_weight")," is the weight of the funding cycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_basedOn")," is the configuration of the base funding cycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_start")," is the start time of this funding cycle."))),(0,a.kt)("li",{parentName:"ul"},"The function is private to this contract."),(0,a.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The weight property should take up the first 80 bits of the packed ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// weight in bits 0-87.\nuint256 packed = _weight;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The based on configuration should take up the next 56 bits."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// basedOn in bits 88-143.\npacked |= _basedOn << 88;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The start should take up the next 56 bits."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// start in bits 144-199.\npacked |= _start << 144;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The number should take up the last 56 bits."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// number in bits 200-255.\npacked |= _number << 200;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store the packed intrinsic properties for the funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Store the packed value.\n_packedIntrinsicPropertiesOf[_projectId][_configuration] = packed;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/properties/-_packedintrinsicpropertiesof"},(0,a.kt)("inlineCode",{parentName:"a"},"_packedIntrinsicPropertiesOf"))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice \n  Efficiently stores a funding cycle's provided intrinsic properties.\n\n  @param _configuration The configuration of the funding cycle to pack and store.\n  @param _projectId The ID of the project to which the funding cycle belongs.\n  @param _number The number of the funding cycle.\n  @param _weight The weight of the funding cycle.\n  @param _basedOn The configuration of the base funding cycle.\n  @param _start The start time of this funding cycle.\n*/\nfunction _packAndStoreIntrinsicPropertiesOf(\n  uint256 _configuration,\n  uint256 _projectId,\n  uint256 _number,\n  uint256 _weight,\n  uint256 _basedOn,\n  uint256 _start\n) private {\n  // weight in bits 0-87.\n  uint256 packed = _weight;\n\n  // basedOn in bits 88-143.\n  packed |= _basedOn << 88;\n\n  // start in bits 144-199.\n  packed |= _start << 144;\n\n  // number in bits 200-255.\n  packed |= _number << 200;\n\n  // Store the packed value.\n  _packedIntrinsicPropertiesOf[_projectId][_configuration] = packed;\n}\n"))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);