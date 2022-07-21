"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[43580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,h=c["".concat(d,".").concat(p)]||c[p]||u[p]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="Data source",l={unversionedId:"dev/build/treasury-extensions/data-source",id:"dev/build/treasury-extensions/data-source",title:"Data source",description:"Before implementing, learn about data sources here.",source:"@site/docs/dev/build/treasury-extensions/data-source.md",sourceDirName:"dev/build/treasury-extensions",slug:"/dev/build/treasury-extensions/data-source",permalink:"/zh/dev/build/treasury-extensions/data-source",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/build/treasury-extensions/data-source.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Ballot",permalink:"/zh/dev/build/treasury-extensions/ballot"},next:{title:"Pay delegate",permalink:"/zh/dev/build/treasury-extensions/pay-delegate"}},d={},s=[{value:"Specs",id:"specs",level:4},{value:"Pay",id:"pay",level:5},{value:"Redeem",id:"redeem",level:5},{value:"Attaching",id:"attaching",level:4},{value:"Examples",id:"examples",level:4}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-source"},"Data source"),(0,r.kt)("p",null,"Before implementing, learn about data sources ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/learn/glossary/data-source"},"here"),"."),(0,r.kt)("h4",{id:"specs"},"Specs"),(0,r.kt)("p",null,"A contract can become a treasury data source by adhering to ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/interfaces/ijbfundingcycledatasource"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBFundingCycleDataSource")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"interface IJBFundingCycleDataSource {\n  function payParams(JBPayParamsData calldata _data)\n    external\n    view\n    returns (\n      uint256 weight,\n      string memory memo,\n      IJBPayDelegate delegate\n    );\n\n  function redeemParams(JBRedeemParamsData calldata _data)\n    external\n    view\n    returns (\n      uint256 reclaimAmount,\n      string memory memo,\n      IJBRedemptionDelegate delegate\n    );\n}\n")),(0,r.kt)("p",null,"There are two functions that must be implemented, ",(0,r.kt)("inlineCode",{parentName:"p"},"payParams(...)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redeemParams(...)"),". Either one can be left empty if the intent is to only extend the treasury's pay functionality or redeem functionality."),(0,r.kt)("h5",{id:"pay"},"Pay"),(0,r.kt)("p",null,"When extending the pay functionality with a data source, the protocol will pass a ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/data-structures/jbpayparamsdata"},(0,r.kt)("inlineCode",{parentName:"a"},"JBPayParamsData"))," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"payParams(...)")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"struct JBPayParamsData {\n  IJBPaymentTerminal terminal;\n  address payer;\n  JBTokenAmount amount;\n  uint256 projectId;\n  uint256 currentFundingCycleConfiguration;\n  address beneficiary;\n  uint256 weight;\n  uint256 reservedRate;\n  string memo;\n  bytes metadata;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"struct JBTokenAmount {\n  address token;\n  uint256 value;\n  uint256 decimals;\n  uint256 currency;\n}\n")),(0,r.kt)("p",null,"Using these params, the data source's ",(0,r.kt)("inlineCode",{parentName:"p"},"payParams(...)")," function is responsible for either reverting or returning a few bits of information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight")," is a fixed point number with 18 decimals that the protocol can use to base arbitrary calculations on. For example, payment terminals based on the ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal"},(0,r.kt)("inlineCode",{parentName:"a"},"JBPayoutRedemptionPaymentTerminal")),", such as ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/jbethpaymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBETHPaymentTerminal")),"'s and ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/jberc20paymentterminal/"},(0,r.kt)("inlineCode",{parentName:"a"},"JBERC20PaymentTerminal")),"'s, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"weight")," to determine how many project tokens to mint when a project receives a payment (see ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/write/recordpaymentfrom"},"the calculation"),"). By default, the protocol will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"weight")," of the project's current funding cycle, which is provided to the data source function in ",(0,r.kt)("inlineCode",{parentName:"li"},"JBPayParamsData.weight"),". Increasing the weight will mint more tokens and decreasing the weight will mint fewer tokens, both as a function of the amount paid. Return the ",(0,r.kt)("inlineCode",{parentName:"li"},"JBPayParamsData.weight")," value if no altered functionality is desired."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memo")," is a string emitted within the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/pay"},(0,r.kt)("inlineCode",{parentName:"a"},"Pay"))," event and sent along to any ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate")," that this function also returns. By default, the protocol will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"memo")," directly passed in by the payer, which is provided to this data source function in ",(0,r.kt)("inlineCode",{parentName:"li"},"JBPayParamsData.memo"),". Return the ",(0,r.kt)("inlineCode",{parentName:"li"},"JBPayParamsData.memo")," value if no altered functionality is desired."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegate")," is the address of a contract that adheres to ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbpaydelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBPayDelegate"))," whose ",(0,r.kt)("inlineCode",{parentName:"li"},"didPay(...)")," function will be called once the protocol finishes its standard payment routine. Check out ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/build/treasury-extensions/pay-delegate"},"how to build a pay delegate")," for more details. If the same contract is being used as the data source and the pay delegate, return ",(0,r.kt)("inlineCode",{parentName:"li"},"address(this)"),". Return the zero address if no additional functionality is desired.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"payParams(...)")," function can also revert if it's presented with any conditions it does not want to accept payments under. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"payParams(...)")," function has implicit permission to ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/minttokensof"},(0,r.kt)("inlineCode",{parentName:"a"},"JBController.mintTokensOf(...)"))," for the project."),(0,r.kt)("h5",{id:"redeem"},"Redeem"),(0,r.kt)("p",null,"When extending redeem functionality with a data source, the protocol will pass a ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/api/data-structures/jbredeemparamsdata"},(0,r.kt)("inlineCode",{parentName:"a"},"JBRedeemParamsData"))," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"redeemParams(...)")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"struct JBRedeemParamsData {\n  IJBPaymentTerminal terminal;\n  address holder;\n  uint256 projectId;\n  uint256 currentFundingCycleConfiguration;\n  uint256 tokenCount;\n  uint256 totalSupply;\n  uint256 overflow;\n  JBTokenAmount reclaimAmount;\n  bool useTotalOverflow;\n  uint256 redemptionRate;\n  uint256 ballotRedemptionRate;\n  string memo;\n  bytes metadata;\n}\n")),(0,r.kt)("p",null,"Using these params, the data source's ",(0,r.kt)("inlineCode",{parentName:"p"},"redeemParams(...)")," function is responsible for either reverting or returning a few bits of information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reclaimAmount")," is the amount of tokens in the treasury that the terminal should send out to the redemption beneficiary as a result of burning the amount of project tokens tokens specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"JBRedeemParamsData.tokenCount"),", as a fixed point number with the same amount of decimals as ",(0,r.kt)("inlineCode",{parentName:"li"},"JBRedeemParamsData.decimals"),". By default, the protocol will use a reclaim amount determined by the standard protocol bonding curve based on the redemption rate the project has configured into its current funding cycle, which is provided to the data source function in ",(0,r.kt)("inlineCode",{parentName:"li"},"JBRedeemParamsData.reclaimAmount"),". Return the ",(0,r.kt)("inlineCode",{parentName:"li"},"JBRedeemParamsData.reclaimAmount")," value if no altered functionality is desired."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memo")," is a string emitted within the ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/events/redeemtokens"},(0,r.kt)("inlineCode",{parentName:"a"},"RedeemTokens"))," event and sent along to any ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate")," that this function also returns. By default, the protocol will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"memo")," passed in directly by the redeemer, which is provided to this data source function in ",(0,r.kt)("inlineCode",{parentName:"li"},"JBRedeemParamsData.memo"),". Return the ",(0,r.kt)("inlineCode",{parentName:"li"},"JBRedeemParamsData.memo")," value if no altered functionality is desired."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegate")," is the address of a contract that adheres to ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbredemptiondelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBRedemptionDelegate"))," whose ",(0,r.kt)("inlineCode",{parentName:"li"},"didRedeem(...)")," function will be called once the protocol finishes its standard redemption routine (but before the reclaimed amount is sent to the beneficiary). Check out ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/build/treasury-extensions/redemption-delegate"},"how to build a redemption delegate")," for more details. If the same contract is being used as the data source and the redemption delegate, return ",(0,r.kt)("inlineCode",{parentName:"li"},"address(this)"),". Return the zero address if no additional functionality is desired.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redeemParams(...)")," function can also revert if it's presented with any conditions it does not want to accept redemptions under. "),(0,r.kt)("h4",{id:"attaching"},"Attaching"),(0,r.kt)("p",null,"New data source contracts should be deployed independently. Once deployed, its address can be configured into a project's funding cycle metadata to take effect while that funding cycle is active. Additionally, the metadata's ",(0,r.kt)("inlineCode",{parentName:"p"},"useDataSourceForPay")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"useDataSourceForRedeem")," should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the respective data source hook should be referenced by the protocol."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import '@openzeppelin/contracts/token/ERC721/ERC721.sol';\nimport '@jbx-protocol/contracts-v2/contracts/interfaces/IJBFundingCycleDataSource.sol';\n\ncontract AllowlistDataSource is IJBFundingCycleDataSource {\n  error NOT_ALLOWED();\n\n  mapping(address => bool) allowed;\n\n  function payParams(JBPayParamsData calldata _data)\n    external\n    view\n    override\n    returns (\n      uint256 weight,\n      string memory memo,\n      IJBPayDelegate delegate\n    )\n  {\n    if (!allowed[_data.payer]) revert NOT_ALLOWED();\n\n    // Forward the recieved weight and memo, and use no delegate.\n    return (_data.weight, _data.memo, IJBPayDelegate(address(0)));\n  }\n  \n  // This is unused but needs to be included to fulfill IJBFundingCycleDataSource.\n  function redeemParams(JBRedeemParamsData calldata _data)\n    external\n    pure\n    override\n    returns (\n      uint256 reclaimAmount,\n      string memory memo,\n      IJBRedemptionDelegate delegate\n    )\n  {\n    // Return the default values.\n    return (_data.reclaimAmount.value, _data.memo, IJBRedemptionDelegate(address(0)));\n  }\n}\n")))}u.isMDXComponent=!0}}]);