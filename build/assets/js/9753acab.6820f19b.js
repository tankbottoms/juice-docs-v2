"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[66295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),c=n(7094),p=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:d,values:f,groupId:k,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),N=(0,o.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:T}=(0,c.U)(),[j,w]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=k){const e=h[k];null!=e&&e!==j&&y.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==j&&(I(t),w(r),null!=k&&T(k,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:_,onClick:_},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},63751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={},c="recordMigration",p={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordmigration",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordmigration",title:"recordMigration",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordmigration.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/write",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordmigration",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordmigration",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordmigration.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"recordDistributionFor",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recorddistributionfor"},next:{title:"recordPaymentFrom",permalink:"/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordpaymentfrom"}},m={},s=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recordmigration"},"recordMigration"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,a.kt)("p",null,"Interface: ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminalStore"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Records the migration of funds from this store.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The msg.sender must be an ",(0,a.kt)("a",{parentName:"em",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBSingleTokenPaymentTerminal")),".")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function recordMigration(uint256 _projectId)\n  external\n  override\n  nonReentrant\n  returns (uint256 balance) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project being migrated."))),(0,a.kt)("li",{parentName:"ul"},"The resulting function overrides a function definition from the ",(0,a.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbsingletokenpaymentterminalstore"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," interface."),(0,a.kt)("li",{parentName:"ul"},"The function returns the project's migrated balance, as a fixed point number with the same amount of decimals as its relative terminal.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's current funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's current funding cycle.\nJBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure that migrating terminals is allowed by the current funding cycle."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Migration must be allowed.\nif (!_fundingCycle.terminalMigrationAllowed()) revert PAYMENT_TERMINAL_MIGRATION_NOT_ALLOWED();\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/libraries/jbfundingcyclemetadataresolver"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleMetadataResolver")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".terminalMigrationAllowed(...)")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to the project's current balance. Set this to the value that the function will return."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Return the current balance.\nbalance = balanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId];\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/balanceof"},(0,a.kt)("inlineCode",{parentName:"a"},"balanceOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the project's balance to 0 since funds are moving away from this terminal."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Set the balance to 0.\nbalanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId] = 0;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/balanceof"},(0,a.kt)("inlineCode",{parentName:"a"},"balanceOf"))))))),(0,a.kt)(i.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Records the migration of funds from this store.\n\n  @dev\n  The msg.sender must be an IJBSingleTokenPaymentTerminal. \n\n  @param _projectId The ID of the project being migrated.\n\n  @return balance The project's migrated balance, as a fixed point number with the same amount of decimals as its relative terminal.\n*/\nfunction recordMigration(uint256 _projectId)\n  external\n  override\n  nonReentrant\n  returns (uint256 balance)\n{\n  // Get a reference to the project's current funding cycle.\n  JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(_projectId);\n\n  // Migration must be allowed.\n  if (!_fundingCycle.terminalMigrationAllowed()) revert PAYMENT_TERMINAL_MIGRATION_NOT_ALLOWED();\n\n  // Return the current balance.\n  balance = balanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId];\n\n  // Set the balance to 0.\n  balanceOf[IJBSingleTokenPaymentTerminal(msg.sender)][_projectId] = 0;\n}\n"))),(0,a.kt)(i.Z,{value:"Errors",label:"Errors",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"String"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"PAYMENT_TERMINAL_MIGRATION_NOT_ALLOWED"))),(0,a.kt)("td",{parentName:"tr",align:null},"Thrown if the project's current funding cycle disallows terminal migrations."))))),(0,a.kt)(i.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);