"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[98006],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),o=a(86010),i=a(72389),l=a(67392),p=a(7094),s=a(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a;const{lazy:i,block:c,defaultValue:m,values:k,groupId:f,className:b}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),N=(0,l.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:_}=(0,p.U)(),[O,w]=(0,n.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const D=e=>{const t=e.currentTarget,a=j.indexOf(t),r=h[a].value;r!==O&&(T(t),w(r),null!=f&&_(f,String(r)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=j.indexOf(e.currentTarget)+1;a=null!=(r=j[t])?r:j[0];break}case"ArrowLeft":{var n;const t=j.indexOf(e.currentTarget)-1;a=null!=(n=j[t])?n:j[j.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},42110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(65488),i=a(85162);const l={},p="setOperators",s={unversionedId:"dev/api/contracts/jboperatorstore/write/setoperators",id:"dev/api/contracts/jboperatorstore/write/setoperators",title:"setOperators",description:"Contract: JBOperatorStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jboperatorstore/write/setoperators.md",sourceDirName:"dev/api/contracts/jboperatorstore/write",slug:"/dev/api/contracts/jboperatorstore/write/setoperators",permalink:"/dev/api/contracts/jboperatorstore/write/setoperators",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jboperatorstore/write/setoperators.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"setOperator",permalink:"/dev/api/contracts/jboperatorstore/write/setoperator"},next:{title:"JBToken",permalink:"/dev/api/contracts/jbtoken/"}},d={},u=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setoperators"},"setOperators"),(0,n.kt)("p",null,"Contract: ",(0,n.kt)("a",{parentName:"p",href:"/dev/api/contracts/jboperatorstore/"},(0,n.kt)("inlineCode",{parentName:"a"},"JBOperatorStore")),"\u200b\u200c"),(0,n.kt)("p",null,"Interface: ",(0,n.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijboperatorstore"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sets permissions for many operators.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Only an address can set its own operators.")),(0,n.kt)("h4",{id:"definition"},"Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function setOperators(JBOperatorData[] calldata _operatorData) external override { ... }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_operatorData")," are the ",(0,n.kt)("a",{parentName:"li",href:"/dev/api/data-structures/jboperatordata"},(0,n.kt)("inlineCode",{parentName:"a"},"JBOperatorData"))," that specify the params for each operator being set."),(0,n.kt)("li",{parentName:"ul"},"The function can be accessed externally by anyone."),(0,n.kt)("li",{parentName:"ul"},"The function overrides a function definition from the ",(0,n.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijboperatorstore"},(0,n.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))," interface."),(0,n.kt)("li",{parentName:"ul"},"The function doesn't return anything.")),(0,n.kt)("h4",{id:"body"},"Body"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Loop through the provided operator data."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"for (uint256 _i = 0; _i < _operatorData.length; _i++) { ... }\n")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pack the provided permissions into a ",(0,n.kt)("inlineCode",{parentName:"p"},"uint256"),". Each bit of the resulting value represents whether or not permission has been granted for that index."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// Pack the indexes into a uint256.\nuint256 _packed = _packedPermissions(_operatorData[_i].permissionIndexes);\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Internal references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dev/api/contracts/jboperatorstore/read/-_packedpermissions"},(0,n.kt)("inlineCode",{parentName:"a"},"_packedPermissions"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Store the packed permissions as the permissions of the provided operator, on behalf of the ",(0,n.kt)("inlineCode",{parentName:"p"},"msg.sender"),", specifically for the provided domain."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"// Store the new value.\npermissionsOf[_operatorData[_i].operator][msg.sender][_operatorData[_i].domain] = _packed;\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Internal references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dev/api/contracts/jboperatorstore/properties/permissionsof"},(0,n.kt)("inlineCode",{parentName:"a"},"permissionsOf"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Emit a ",(0,n.kt)("inlineCode",{parentName:"p"},"SetOperator")," event with the relevant parameters."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"emit SetOperator(\n  _operatorData[_i].operator,\n  msg.sender,\n  _operatorData[_i].domain,\n  _operatorData[_i].permissionIndexes,\n  _packed\n);\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Event references:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dev/api/contracts/jboperatorstore/events/setoperator"},(0,n.kt)("inlineCode",{parentName:"a"},"SetOperator"))))))))),(0,n.kt)(i.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Sets permissions for many operators.\n\n  @dev\n  Only an address can set its own operators.\n\n  @param _operatorData The data that specify the params for each operator being set.\n*/\nfunction setOperators(JBOperatorData[] calldata _operatorData) external override {\n  for (uint256 _i = 0; _i < _operatorData.length; _i++) {\n    // Pack the indexes into a uint256.\n    uint256 _packed = _packedPermissions(_operatorData[_i].permissionIndexes);\n\n    // Store the new value.\n    permissionsOf[_operatorData[_i].operator][msg.sender][_operatorData[_i].domain] = _packed;\n\n    emit SetOperator(\n      _operatorData[_i].operator,\n      msg.sender,\n      _operatorData[_i].domain,\n      _operatorData[_i].permissionIndexes,\n      _packed\n    );\n  }\n}\n"))),(0,n.kt)(i.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/dev/api/contracts/jboperatorstore/events/setoperator"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"SetOperator")))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("code",null,"address indexed operator")),(0,n.kt)("li",null,(0,n.kt)("code",null,"address indexed account")),(0,n.kt)("li",null,(0,n.kt)("code",null,"uint256 indexed domain")),(0,n.kt)("li",null,(0,n.kt)("code",null,"uint256[] permissionIndexes")),(0,n.kt)("li",null,(0,n.kt)("code",null,"uint256 packed")))))))),(0,n.kt)(i.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Optimization")),(0,n.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,n.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Low severity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,n.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"High severity")),(0,n.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,n.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}m.isMDXComponent=!0}}]);