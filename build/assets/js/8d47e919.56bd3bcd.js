"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[42431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:h,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:_}=(0,s.U)(),[j,T]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==j&&k.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==j&&(w(t),T(a),null!=f&&_(f,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},86121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={},s="_formatHandle",u={unversionedId:"dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle",id:"dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle",title:"_formatHandle",description:"Contract: JBProjectHandles\u200b\u200c",source:"@site/docs/dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle.md",sourceDirName:"dev/api/contracts/or-utilities/jbprojecthandles/read",slug:"/dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle",permalink:"/dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/or-utilities/jbprojecthandles/read/-_formathandle.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"textResolver",permalink:"/dev/api/contracts/or-utilities/jbprojecthandles/properties/textresolver"},next:{title:"_namehash",permalink:"/dev/api/contracts/or-utilities/jbprojecthandles/read/-_namehash"}},p={},c=[{value:"Definition",id:"definition",level:3},{value:"Body",id:"body",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"_formathandle"},"_formatHandle"),(0,r.kt)("p",null,"Contract: ",(0,r.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-utilities/jbprojecthandles/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBProjectHandles")),"\u200b\u200c"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Formats ENS name parts into a handle.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Requires a TXT record for the ",(0,r.kt)("inlineCode",{parentName:"em"},"TEXT_KEY")," that matches the ",(0,r.kt)("inlineCode",{parentName:"em"},"_projectId"),".")),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function _formatHandle(string[] memory _ensNameParts)\n  internal\n  pure\n  returns (string memory _handle) { ... }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_ensNameParts")," is the ENS name parts to format into a handle."))),(0,r.kt)("li",{parentName:"ul"},"The view function can be accessed externally by anyone."),(0,r.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,r.kt)("li",{parentName:"ul"},"The function returns the formatted ENS handle.")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the number of parts there are to iterate over."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get a reference to the number of parts are in the ENS name.\nuint256 _partsLength = _ensNameParts.length;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Loop through each part, adding the the part first so subdomains show up in order. Add a dot to seperate each subdomain."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Concatenate each name part.\nfor (uint256 _i = 1; _i <= _partsLength; ) {\n  _handle = string(abi.encodePacked(_handle, _ensNameParts[_partsLength - _i]));\n\n  // Add a dot if this part isn't the last.\n  if (_i < _partsLength) _handle = string(abi.encodePacked(_handle, '.'));\n\n  unchecked {\n    ++_i;\n  }\n}\n"))))),(0,r.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/** \n  @notice \n  Formats ENS name parts into a handle.\n\n  @param _ensNameParts The ENS name parts to format into a handle.\n\n  @return _handle The formatted ENS handle.\n*/\nfunction _formatHandle(string[] memory _ensNameParts)\n  internal\n  pure\n  returns (string memory _handle)\n{\n  // Get a reference to the number of parts are in the ENS name.\n  uint256 _partsLength = _ensNameParts.length;\n\n  // Concatenate each name part.\n  for (uint256 _i = 1; _i <= _partsLength; ) {\n    _handle = string(abi.encodePacked(_handle, _ensNameParts[_partsLength - _i]));\n\n    // Add a dot if this part isn't the last.\n    if (_i < _partsLength) _handle = string(abi.encodePacked(_handle, '.'));\n\n    unchecked {\n      ++_i;\n    }\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optimization")),(0,r.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,r.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High severity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,r.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);