"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[4978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:l,block:m,defaultValue:d,values:h,groupId:b,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:_}=(0,s.U)(),[j,E]=(0,r.useState)(N),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=b){const e=g[b];null!=e&&e!==j&&v.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,a=P.indexOf(t),n=v[a].value;n!==j&&(T(t),E(n),null!=b&&_(b,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{var r;const t=P.indexOf(e.currentTarget)-1;a=null!=(r=P[t])?r:P[P.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>P.push(e),onKeyDown:w,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},43207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={},s="_namehash",c={unversionedId:"dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash",id:"dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash",title:"_namehash",description:"Contract: JBProjectHandles\u200b\u200c",source:"@site/docs/dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash.md",sourceDirName:"dev/api/contracts/or-utilities/jbprojecthandles/read",slug:"/dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash",permalink:"/dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"_formatHandle",permalink:"/dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle"},next:{title:"ensNamePartsOf",permalink:"/dev/api/contracts/or-utilities/jbprojecthandles/read/ensnamepartsof"}},u={},p=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"_namehash"},"_namehash"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-utilities/jbprojecthandles/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBProjectHandles")),"\u200b\u200c"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns a namehash for an ENS name.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"https://eips.ethereum.org/EIPS/eip-137"},"https://eips.ethereum.org/EIPS/eip-137"),".")),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _namehash(string[] memory _ensNameParts) internal pure returns (bytes32 namehash) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_ensNameParts")," is the parts of an ENS name to hash."))),(0,r.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,r.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,r.kt)("li",{parentName:"ul"},"The function returns the namehash for an ENS name parts.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Encode the trailing "eth" into the hash.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Hash the trailing \"eth\" suffix.\nnamehash = keccak256(abi.encodePacked(namehash, keccak256(abi.encodePacked('eth'))));\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the number of parts there are to iterate over."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the number of parts are in the ENS name.\nuint256 _nameLength = _ensNameParts.length;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Loop through each part, encoding them each into the hash in sequential order from the base name through each subdomain."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Hash each part.\nfor (uint256 _i = 0; _i < _nameLength; ) {\n  namehash = keccak256(\n    abi.encodePacked(namehash, keccak256(abi.encodePacked(_ensNameParts[_i])))\n  );\n  unchecked {\n    ++_i;\n  }\n}\n"))))),(0,r.kt)(l.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/** \n  @notice \n  Returns a namehash for an ENS name.\n\n  @dev \n  See https://eips.ethereum.org/EIPS/eip-137.\n\n  @param _ensNameParts The parts of an ENS name to hash.\n\n  @return namehash The namehash for an ENS name parts.\n*/\nfunction _namehash(string[] memory _ensNameParts) internal pure returns (bytes32 namehash) {\n  // Hash the trailing \"eth\" suffix.\n  namehash = keccak256(abi.encodePacked(namehash, keccak256(abi.encodePacked('eth'))));\n\n  // Get a reference to the number of parts are in the ENS name.\n  uint256 _nameLength = _ensNameParts.length;\n\n  // Hash each part.\n  for (uint256 _i = 0; _i < _nameLength; ) {\n    namehash = keccak256(\n      abi.encodePacked(namehash, keccak256(abi.encodePacked(_ensNameParts[_i])))\n    );\n    unchecked {\n      ++_i;\n    }\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);