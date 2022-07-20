"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[85224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),c=r(7094),p=r(12466);const m="tabList__CuJ",u="tabItem_LNqP";function s(e){var t,r;const{lazy:o,block:s,defaultValue:d,values:f,groupId:h,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),N=(0,i.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(r=k.find((e=>e.props.default)))?void 0:r.props.value)?t:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:g}=(0,c.U)(),[_,O]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==_&&b.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=T.indexOf(t),n=b[r].value;n!==_&&(j(t),O(n),null!=h&&g(h,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;r=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;r=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},b.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,o.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},77813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={},c="_currentTotalOverflowOf",p={unversionedId:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof",id:"dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof",title:"_currentTotalOverflowOf",description:"Contract: JBSingleTokenPaymentTerminalStore\u200b\u200c",source:"@site/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof.md",sourceDirName:"dev/api/contracts/jbsingletokenpaymentterminalstore/read",slug:"/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_currenttotaloverflowof.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"usedOverflowAllowanceOf",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/properties/usedoverflowallowanceof"},next:{title:"_overflowDuring",permalink:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/read/-_overflowduring"}},m={},u=[{value:"Definition",id:"definition",level:4},{value:"Body",id:"body",level:4}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"_currenttotaloverflowof"},"_currentTotalOverflowOf"),(0,a.kt)("p",null,"Contract: ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore")),"\u200b\u200c"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Step by step",label:"Step by step",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gets the amount that is currently overflowing across all of a project's terminals.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This amount changes as the value of the balances changes in relation to the currency being used to measure the project's distribution limits.")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function _currentTotalOverflowOf(\n  uint256 _projectId,\n  uint256 _decimals,\n  uint256 _currency\n) private view returns (uint256) { ... }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projectId")," is the ID of the project to get the total overflow for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_decimals")," is the number of decimals that the fixed point overflow should include."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_currency")," is the currency that the overflow should be in terms of."))),(0,a.kt)("li",{parentName:"ul"},"The view function is private to this contract."),(0,a.kt)("li",{parentName:"ul"},"The view function does not alter state on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The function returns the total overflow of a project's funds.")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a reference to all of the project's current terminals."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get a reference to the project's terminals.\nIJBPaymentTerminal[] memory _terminals = directory.terminalsOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Internal references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbdirectory/read/terminalsof"},(0,a.kt)("inlineCode",{parentName:"a"},"terminalsOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a reference where the total balance across all terminals is be stored in terms of ETH."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Keep a reference to the ETH overflow across all terminals, as a fixed point number with 18 decimals.\nuint256 _ethOverflow;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For each terminal, add its balance in terms of ETH to the total ETH balance."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Add the current ETH overflow for each terminal.\nfor (uint256 _i = 0; _i < _terminals.length; _i++)\n  _ethOverflow = _ethOverflow + _terminals[_i].currentEthOverflowOf(_projectId);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/read/currentethoverflowof"},(0,a.kt)("inlineCode",{parentName:"a"},"currentEthOverflowOf"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the total overflow is to be returned in a currency other than ETH, make the conversion while maintaining 18 decimals of fidelity."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Convert the ETH overflow to the specified currency if needed, maintaining a fixed point number with 18 decimals.\nuint256 _totalOverflow18Decimal = _currency == JBCurrencies.ETH\n  ? _ethOverflow\n  : PRBMath.mulDiv(_ethOverflow, 10**18, prices.priceFor(JBCurrencies.ETH, _currency, 18));\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".mulDiv(...)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbcurrencies"},(0,a.kt)("inlineCode",{parentName:"a"},"JBCurrencies")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".ETH"))))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"External references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbprices/read/pricefor"},(0,a.kt)("inlineCode",{parentName:"a"},"priceFor"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the fixed point overflow is to be returned with a number of decimals other than 18, adjust the number accordingly. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Adjust the decimals of the fixed point number if needed to match the target decimals.\nreturn\n  (_decimals == 18)\n    ? _totalOverflow18Decimal\n    : JBFixedPointNumber.adjustDecimals(_totalOverflow18Decimal, 18, _decimals);\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Library references:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hifi-finance/prb-math/blob/main/contracts/PRBMath.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"PRBMath")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".mulDiv(...)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/libraries/jbfixedpointnumber"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFixedPointNumber")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".adjustDecimals(...)")))))))),(0,a.kt)(o.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/**\n  @notice\n  Gets the amount that is currently overflowing across all of a project's terminals. \n\n  @dev\n  This amount changes as the value of the balances changes in relation to the currency being used to measure the project's distribution limits.\n\n  @param _projectId The ID of the project to get the total overflow for.\n  @param _decimals The number of decimals that the fixed point overflow should include.\n  @param _currency The currency that the overflow should be in terms of.\n\n  @return overflow The total overflow of a project's funds.\n*/\nfunction _currentTotalOverflowOf(\n  uint256 _projectId,\n  uint256 _decimals,\n  uint256 _currency\n) private view returns (uint256) {\n  // Get a reference to the project's terminals.\n  IJBPaymentTerminal[] memory _terminals = directory.terminalsOf(_projectId);\n\n  // Keep a reference to the ETH overflow across all terminals, as a fixed point number with 18 decimals.\n  uint256 _ethOverflow;\n\n  // Add the current ETH overflow for each terminal.\n  for (uint256 _i = 0; _i < _terminals.length; _i++)\n    _ethOverflow = _ethOverflow + _terminals[_i].currentEthOverflowOf(_projectId);\n\n  // Convert the ETH overflow to the specified currency if needed, maintaining a fixed point number with 18 decimals.\n  uint256 _totalOverflow18Decimal = _currency == JBCurrencies.ETH\n    ? _ethOverflow\n    : PRBMath.mulDiv(_ethOverflow, 10**18, prices.priceFor(JBCurrencies.ETH, _currency, 18));\n\n  // Adjust the decimals of the fixed point number if needed to match the target decimals.\n  return\n    (_decimals == 18)\n      ? _totalOverflow18Decimal\n      : JBFixedPointNumber.adjustDecimals(_totalOverflow18Decimal, 18, _decimals);\n}\n"))),(0,a.kt)(o.Z,{value:"Bug bounty",label:"Bug bounty",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Reward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Optimization")),(0,a.kt)("td",{parentName:"tr",align:null},"Help make this operation more efficient."),(0,a.kt)("td",{parentName:"tr",align:null},"0.5ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Low severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to an inconvenience for a user of the protocol or for a protocol developer."),(0,a.kt)("td",{parentName:"tr",align:null},"1ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"High severity")),(0,a.kt)("td",{parentName:"tr",align:null},"Identify a vulnerability in this operation that could lead to data corruption or loss of funds."),(0,a.kt)("td",{parentName:"tr",align:null},"5+ETH")))))))}d.isMDXComponent=!0}}]);