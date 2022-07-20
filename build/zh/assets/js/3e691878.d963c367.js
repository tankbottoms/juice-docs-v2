"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[59867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=i,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},s="Splits payer",o={unversionedId:"dev/build/utilities/splits-payer",id:"dev/build/utilities/splits-payer",title:"Splits payer",description:"JBETHERC20SplitsPayer contracts make it easy to route funds to a group of splits from other contracts or within inheriting contracts. This is useful for routing funds to a number of Juicebox project treasuries and other addresses within other contracts such as an NFT marketplaces.",source:"@site/docs/dev/build/utilities/splits-payer.md",sourceDirName:"dev/build/utilities",slug:"/dev/build/utilities/splits-payer",permalink:"/zh/dev/build/utilities/splits-payer",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/build/utilities/splits-payer.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Project payer",permalink:"/zh/dev/build/utilities/project-payer"},next:{title:"JBDidPayData",permalink:"/zh/dev/api/data-structures/jbdidpaydata"}},l={},p=[{value:"Inheriting JBSplitsPayer",id:"inheriting-jbsplitspayer",level:4},{value:"Deploying splits payers",id:"deploying-splits-payers",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"splits-payer"},"Splits payer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))," contracts make it easy to route funds to a group of splits from other contracts or within inheriting contracts. This is useful for routing funds to a number of Juicebox project treasuries and other addresses within other contracts such as an NFT marketplaces."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))," can be inherited from any contract to facilitate internal transactions to split groups in ETH or any ERC-20, assuming the projects in the split group are using a payment terminal that accepts the tokens. They can also be deployed as standalone splits payer copies using ",(0,i.kt)("a",{parentName:"p",href:"/dev/api/contracts/or-utilities/jbetherc20splitspayerdeployer"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsPayerDeployer")),"."),(0,i.kt)("h4",{id:"inheriting-jbsplitspayer"},"Inheriting JBSplitsPayer"),(0,i.kt)("p",null,"Inheriting from ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))," will give a contract access to a public ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/pay"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsPayer.pay(...)"))," function, a public ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/addtobalanceof"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsPayer.addToBalanceOf(...)"))," function, and two functions ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/-_paytosplits"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsPayer._payToSplits(...)"))," and ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/write/-_payto"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsPayer._payTo(...)")),". These can be used from within the contract to route funds to a group of splits while specifying where leftover funds should go. Use the internal function if the inheriting contract has already handled receiving the funds being forwarded."),(0,i.kt)("p",null,"Follow instructions in ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/build/getting-started"},"Getting started")," to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"JBSplitsPayer")," files into a project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function pay(\n  uint256 _projectId,\n  address _token,\n  uint256 _amount,\n  uint256 _decimals,\n  address _beneficiary,\n  uint256 _minReturnedTokens,\n  bool _preferClaimedTokens,\n  string calldata _memo,\n  bytes calldata _metadata\n) public payable virtual override nonReentrant {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function addToBalanceOf(\n  uint256 _projectId,\n  address _token,\n  uint256 _amount,\n  uint256 _decimals,\n  string calldata _memo,\n  bytes calldata _metadata\n) public payable virtual override nonReentrant {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function _payToSplits(\n  uint256 _splitsProjectId,\n  uint256 _splitsDomain,\n  uint256 _splitsGroup,\n  address _token,\n  uint256 _amount,\n  uint256 _decimals\n) internal virtual returns (uint256 leftoverAmount) {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function _payTo(\n  JBSplit[] memory _splits,\n  address _token,\n  uint256 _amount,\n  uint256 _decimals,\n  address _defaultBeneficiary\n) internal virtual returns (uint256 leftoverAmount) { ... }\n")),(0,i.kt)("p",null,"If your contract does not wish to route payments received via the native ",(0,i.kt)("inlineCode",{parentName:"p"},"receive")," interaction to a group of splits, all default constructor arguments can be left as null values. The contract will revert any payment received."),(0,i.kt)("h4",{id:"deploying-splits-payers"},"Deploying splits payers"),(0,i.kt)("p",null,"Instances of the ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayer/"},(0,i.kt)("inlineCode",{parentName:"a"},"JBETHERC20SplitsPayer"))," contract can also be deployed as standalone forwarders of payments to split groups. A new splits payer can be deployed using ",(0,i.kt)("a",{parentName:"p",href:"/zh/dev/api/contracts/or-utilities/jbetherc20splitspayerdeployer/write/deploysplitspayer"},(0,i.kt)("inlineCode",{parentName:"a"},"JBSplitsPayerDeployer.deploySplitsPayer(...)")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function deploySplitsPayer(\n  uint256 _defaultSplitsProjectId,\n  uint256 _defaultSplitsDomain,\n  uint256 _defaultSplitsGroup,\n  IJBSplitsStore _splitsStore,\n  uint256 _defaultProjectId,\n  address payable _defaultBeneficiary,\n  bool _defaultPreferClaimedTokens,\n  string memory _defaultMemo,\n  bytes memory _defaultMetadata,\n  bool _defaultPreferAddToBalance,\n  address _owner\n) external override returns (IJBSplitsPayer splitsPayer) { ... }\n")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import '@openzeppelin/contracts/token/ERC721/ERC721.sol';\nimport '@jbx-protocol/contracts-v2/contracts/JBETHERC20SplitsPayer.sol';\n\ncontract NFTSplitsPayer is ERC721, JBETHERC20SplitsPayer {\n  JBSplits[] splits;\n\n  constructor(JBSplits[] memory _splits, IJBDirectory _directory, address _owner) JBETHERC20ProjectPayer(0, address(0), false, \"\", bytes(0), false, _directory, _owner) {\n    splits = _splits;\n  },\n  \n  // Minting an NFT routes funds to a group of splits, and mints project tokens for msg.sender for splits that route to project treasuries.\n  function mint(uint256 _tokenId,) external payable override {\n    _mint(msg.sender, _tokenId);\n\n    uint256 _numSplits = splits.length; \n\n    JBSplits[] memory _splitsWithBeneficiary;\n\n    // Set the msg.sender to be the beneficiary of all project tokens resulting from splits that route to project treasuries.\n    for (uint256 _i; _i < _numSplits; _i++)  {\n      JBSplit _split = _splits[_i];\n      if (_split.projectId != 0) _split.beneficiary = msg.sender;     \n      _splitsWithBeneficiary.push(_split);\n    }\n    \n    _payTo(_splitsWithBeneficiary, JBTokens.ETH, msg.value, 18, msg.sender);\n  }\n}\n")))}u.isMDXComponent=!0}}]);