"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[27312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},c="TerminalDirectory",i={unversionedId:"dev/protocol-v1/terminal-directory",id:"dev/protocol-v1/terminal-directory",title:"TerminalDirectory",description:"Address",source:"@site/docs/dev/protocol-v1/terminal-directory.md",sourceDirName:"dev/protocol-v1",slug:"/dev/protocol-v1/terminal-directory",permalink:"/zh/dev/protocol-v1/terminal-directory",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/protocol-v1/terminal-directory.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"dev",previous:{title:"Write",permalink:"/zh/dev/protocol-v1/ticketbooth/write"},next:{title:"Mods",permalink:"/zh/dev/protocol-v1/mods"}},s={},l=[{value:"Address",id:"address",level:2},{value:"Contract",id:"contract",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Events",id:"events",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminaldirectory"},"TerminalDirectory"),(0,a.kt)("h2",{id:"address"},"Address"),(0,a.kt)("p",null,"Mainnet: ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x46c9999a2edcd5aa177ed7e8af90c68b7d75ba46"},(0,a.kt)("inlineCode",{parentName:"a"},"0x46C9999A2EDCD5aA177ed7E8af90c68b7d75Ba46"))),(0,a.kt)("p",null,"Kovan: ",(0,a.kt)("inlineCode",{parentName:"p"},"0x71BA69044CbD951AC87124cBEdbC0334AB21F26D")),(0,a.kt)("h2",{id:"contract"},"Contract"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v1/blob/main/contracts/TerminalDirectory.sol"},"contracts/TerminalDirectory.sol")),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Stores the active Terminal for each project."),(0,a.kt)("p",null,"Projects can deploy contracts that will forward a direct payment to the Terminal."),(0,a.kt)("p",null,"Projects can deploy contracts that will forward a direct payment to the Terminal."),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event DeployAddress( \n    uint256 indexed projectId, \n    string memo, \n    address indexed caller \n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event SetTerminal(\n    uint256 indexed projectId,\n    ITerminal indexed terminal,\n    address caller\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event SetPayerPreferences(\n    address indexed account,\n    address beneficiary,\n    bool preferUnstakedTickets\n)\n")),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @param _projects A Projects contract which mints ERC-721's that represent project ownership and transfers.\n  @param _operatorStore A contract storing operator assignments.\n*/\nconstructor(IProjects _projects, IOperatorStore _operatorStore)\n    Operatable(_operatorStore)\n")),(0,a.kt)("h3",{id:"read"},"Read"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/// @notice Mints ERC-721's that represent project ownership and transfers.\nfunction projects() external view returns (IProjects)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/// @notice For each project ID, the juicebox terminal that the direct payment addresses are proxies for.\nfunction terminalOf(uint256 _projectId) external view returns (ITerminal)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/// @notice For each address, the address that will be used as the beneficiary of direct payments made.\nfunction beneficiaryOf(address _account) external returns (address)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/// @notice For each address, the preference of whether ticket will be auto claimed as ERC20s when a payment is made.\nfunction unstakedTicketsPreferenceOf(address _account)\n    external\n    returns (bool)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  A list of all direct payment addresses for the specified project ID.\n\n  @param _projectId The ID of the project to get direct payment addresses for.\n\n  @return A list of direct payment addresses for the specified project ID.\n*/\nfunction addressesOf(uint256 _projectId)\n    external\n    view\n    override\n    returns (IDirectPaymentAddress[] memory)\n{\n    return _addressesOf[_projectId];\n}\n")),(0,a.kt)("h2",{id:"write"},"Write"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Allows anyone to deploy a new direct payment address for a project.\n\n  @param _projectId The ID of the project to deploy a direct payment address for.\n  @param _memo The note to use for payments made through the new direct payment address.\n*/\nfunction deployAddress(uint256 _projectId, string calldata _memo)\n    external\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Update the juicebox terminal that payments to direct payment addresses will be forwarded for the specified project ID.\n\n  @param _projectId The ID of the project to set a new terminal for.\n  @param _terminal The new terminal to set.\n*/\nfunction setTerminal(uint256 _projectId, ITerminal _terminal)\n    external\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/** \n  @notice \n  Allows any address to pre set the beneficiary of their payments to any direct payment address,\n  and to pre set whether to prefer to unstake tickets into ERC20's when making a payment.\n\n  @param _beneficiary The beneficiary to set.\n  @param _preferUnstakedTickets The preference to set.\n*/\nfunction setPayerPreferences(\n    address _beneficiary,\n    bool _preferUnstakedTickets\n) external\n")))}p.isMDXComponent=!0}}]);