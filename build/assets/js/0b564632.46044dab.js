"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[75203],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),y=r,p=m["".concat(d,".").concat(y)]||m[y]||s[y]||i;return t?a.createElement(p,o(o({ref:n},c),{},{components:t})):a.createElement(p,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={},o="JBFundingCycleMetadataResolver",l={unversionedId:"dev/api/libraries/jbfundingcyclemetadataresolver",id:"dev/api/libraries/jbfundingcyclemetadataresolver",title:"JBFundingCycleMetadataResolver",description:"Code",source:"@site/docs/dev/api/libraries/jbfundingcyclemetadataresolver.md",sourceDirName:"dev/api/libraries",slug:"/dev/api/libraries/jbfundingcyclemetadataresolver",permalink:"/dev/api/libraries/jbfundingcyclemetadataresolver",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/libraries/jbfundingcyclemetadataresolver.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"JBFixedPointNumber",permalink:"/dev/api/libraries/jbfixedpointnumber"},next:{title:"JBGlobalFundingCycleMetadataResolver",permalink:"/dev/api/libraries/jbglobalfundingcyclemetadataresolver"}},d={},u=[{value:"Code",id:"code",level:4},{value:"Definition",id:"definition",level:4}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jbfundingcyclemetadataresolver"},"JBFundingCycleMetadataResolver"),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/libraries/JBFundingCycleMetadataResolver.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/libraries/JBFundingCycleMetadataResolver.sol")),(0,r.kt)("h4",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"library JBFundingCycleMetadataResolver {\n  function global(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (JBGlobalFundingCycleMetadata memory metadata)\n  {\n    return JBGlobalFundingCycleMetadataResolver.expandMetadata(uint8(_fundingCycle.metadata >> 8));\n  }\n\n  function reservedRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\n    return uint256(uint16(_fundingCycle.metadata >> 24));\n  }\n\n  function redemptionRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {\n    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 40));\n  }\n\n  function ballotRedemptionRate(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (uint256)\n  {\n    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.\n    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 56));\n  }\n\n  function payPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 72) & 1) == 1;\n  }\n\n  function distributionsPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 73) & 1) == 1;\n  }\n\n  function redeemPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 74) & 1) == 1;\n  }\n\n  function burnPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 75) & 1) == 1;\n  }\n\n  function mintingAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 76) & 1) == 1;\n  }\n\n  function changeTokenAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 77) & 1) == 1;\n  }\n\n  function terminalMigrationAllowed(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (bool)\n  {\n    return ((_fundingCycle.metadata >> 78) & 1) == 1;\n  }\n\n  function controllerMigrationAllowed(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (bool)\n  {\n    return ((_fundingCycle.metadata >> 79) & 1) == 1;\n  }\n\n  function shouldHoldFees(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return ((_fundingCycle.metadata >> 80) & 1) == 1;\n  }\n\n  function useTotalOverflowForRedemptions(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (bool)\n  {\n    return ((_fundingCycle.metadata >> 81) & 1) == 1;\n  }\n\n  function useDataSourceForPay(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {\n    return (_fundingCycle.metadata >> 82) & 1 == 1;\n  }\n\n  function useDataSourceForRedeem(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (bool)\n  {\n    return (_fundingCycle.metadata >> 83) & 1 == 1;\n  }\n\n  function dataSource(JBFundingCycle memory _fundingCycle) internal pure returns (address) {\n    return address(uint160(_fundingCycle.metadata >> 84));\n  }\n\n  /**\n    @notice\n    Pack the funding cycle metadata.\n\n    @param _metadata The metadata to validate and pack.\n\n    @return packed The packed uint256 of all metadata params. The first 8 bits specify the version.\n  */\n  function packFundingCycleMetadata(JBFundingCycleMetadata memory _metadata)\n    internal\n    pure\n    returns (uint256 packed)\n  {\n    // version 1 in the bits 0-7 (8 bits).\n    packed = 1;\n    // global metadta in bits 8-23 (16 bits).\n    packed |=\n      JBGlobalFundingCycleMetadataResolver.packFundingCycleGlobalMetadata(_metadata.global) <<\n      8;\n    // reserved rate in bits 24-39 (16 bits).\n    packed |= _metadata.reservedRate << 24;\n    // redemption rate in bits 40-55 (16 bits).\n    // redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.redemptionRate) << 40;\n    // ballot redemption rate rate in bits 56-71 (16 bits).\n    // ballot redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.\n    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.ballotRedemptionRate) << 56;\n    // pause pay in bit 72.\n    if (_metadata.pausePay) packed |= 1 << 72;\n    // pause tap in bit 73.\n    if (_metadata.pauseDistributions) packed |= 1 << 73;\n    // pause redeem in bit 74.\n    if (_metadata.pauseRedeem) packed |= 1 << 74;\n    // pause burn in bit 75.\n    if (_metadata.pauseBurn) packed |= 1 << 75;\n    // allow minting in bit 76.\n    if (_metadata.allowMinting) packed |= 1 << 76;\n    // allow change token in bit 77.\n    if (_metadata.allowChangeToken) packed |= 1 << 77;\n    // allow terminal migration in bit 78.\n    if (_metadata.allowTerminalMigration) packed |= 1 << 78;\n    // allow controller migration in bit 79.\n    if (_metadata.allowControllerMigration) packed |= 1 << 79;\n    // hold fees in bit 80.\n    if (_metadata.holdFees) packed |= 1 << 80;\n    // useTotalOverflowForRedemptions in bit 81.\n    if (_metadata.useTotalOverflowForRedemptions) packed |= 1 << 81;\n    // use pay data source in bit 82.\n    if (_metadata.useDataSourceForPay) packed |= 1 << 82;\n    // use redeem data source in bit 83.\n    if (_metadata.useDataSourceForRedeem) packed |= 1 << 83;\n    // data source address in bits 84-243.\n    packed |= uint256(uint160(address(_metadata.dataSource))) << 84;\n  }\n\n  /**\n    @notice\n    Expand the funding cycle metadata.\n\n    @param _fundingCycle The funding cycle having its metadata expanded.\n\n    @return metadata The metadata object.\n  */\n  function expandMetadata(JBFundingCycle memory _fundingCycle)\n    internal\n    pure\n    returns (JBFundingCycleMetadata memory metadata)\n  {\n    return\n      JBFundingCycleMetadata(\n        global(_fundingCycle),\n        reservedRate(_fundingCycle),\n        redemptionRate(_fundingCycle),\n        ballotRedemptionRate(_fundingCycle),\n        payPaused(_fundingCycle),\n        distributionsPaused(_fundingCycle),\n        redeemPaused(_fundingCycle),\n        burnPaused(_fundingCycle),\n        mintingAllowed(_fundingCycle),\n        changeTokenAllowed(_fundingCycle),\n        terminalMigrationAllowed(_fundingCycle),\n        controllerMigrationAllowed(_fundingCycle),\n        shouldHoldFees(_fundingCycle),\n        useTotalOverflowForRedemptions(_fundingCycle),\n        useDataSourceForPay(_fundingCycle),\n        useDataSourceForRedeem(_fundingCycle),\n        dataSource(_fundingCycle)\n      );\n  }\n}\n")))}s.isMDXComponent=!0}}]);