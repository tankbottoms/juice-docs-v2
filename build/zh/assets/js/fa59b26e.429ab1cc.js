"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[88062],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=l.createContext({}),u=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return l.createElement(k.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,k=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=u(n),c=r,m=p["".concat(k,".").concat(c)]||p[c]||s[c]||a;return n?l.createElement(m,o(o({ref:e},d),{},{components:n})):l.createElement(m,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40256:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={},o="JBTokenStore",i={unversionedId:"dev/api/contracts/jbtokenstore/README",id:"dev/api/contracts/jbtokenstore/README",title:"JBTokenStore",description:"Manage token minting, burning, and account balances.",source:"@site/docs/dev/api/contracts/jbtokenstore/README.md",sourceDirName:"dev/api/contracts/jbtokenstore",slug:"/dev/api/contracts/jbtokenstore/",permalink:"/zh/dev/api/contracts/jbtokenstore/",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbtokenstore/README.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"setTokenUriResolver",permalink:"/zh/dev/api/contracts/jbprojects/write/settokenuriresolver"},next:{title:"Burn",permalink:"/zh/dev/api/contracts/jbtokenstore/events/burn"}},k={},u=[{value:"Code",id:"code",level:4},{value:"Addresses",id:"addresses",level:4},{value:"Interfaces",id:"interfaces",level:4},{value:"Inheritance",id:"inheritance",level:4},{value:"Constructor",id:"constructor",level:4},{value:"Events",id:"events",level:4},{value:"Properties",id:"properties",level:4},{value:"Read",id:"read",level:4},{value:"Write",id:"write",level:4}],d={toc:u};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jbtokenstore"},"JBTokenStore"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Manage token minting, burning, and account balances.")),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBTokenStore.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBTokenStore.sol")),(0,r.kt)("h4",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,"Ethereum mainnet: ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xCBB8e16d998161AdB20465830107ca298995f371"},(0,r.kt)("inlineCode",{parentName:"a"},"0xCBB8e16d998161AdB20465830107ca298995f371"))),(0,r.kt)("p",null,"Ethereum rinkeby: ",(0,r.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x220468762c6cE4C05E8fda5cc68Ffaf0CC0B2A85"},(0,r.kt)("inlineCode",{parentName:"a"},"0x220468762c6cE4C05E8fda5cc68Ffaf0CC0B2A85"))),(0,r.kt)("h4",{id:"interfaces"},"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbtokenstore"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"IJBTokenStore")))),(0,r.kt)("td",{parentName:"tr",align:null},"General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.")))),(0,r.kt)("h4",{id:"inheritance"},"Inheritance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contract"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-abstract/jbcontrollerutility/"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"JBControllerUtility")))),(0,r.kt)("td",{parentName:"tr",align:null},"Includes convenience functionality for checking if the message sender is the current controller of the project whose data is being manipulated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-abstract/jboperatable/"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"JBOperatable")))),(0,r.kt)("td",{parentName:"tr",align:null},"Includes convenience functionality for checking a message sender's permissions before executing certain transactions.")))),(0,r.kt)("h4",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n  @param _operatorStore A contract storing operator assignments.\n  @param _projects A contract which mints ERC-721's that represent project ownership and transfers.\n  @param _directory A contract storing directories of terminals and controllers for each project.\n*/\nconstructor(\n  IJBOperatorStore _operatorStore,\n  IJBProjects _projects,\n  IJBDirectory _directory\n) JBOperatable(_operatorStore) JBControllerUtility(_directory) {\n  projects = _projects;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_operatorStore")," is an ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijboperatorstore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))," contract storing operator assignments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_projects")," is an ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbprojects"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBProjects"))," contract which mints ERC-721's that represent project ownership and transfers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_directory")," is an ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbdirectory"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," contract storing directories of terminals and controllers for each project.")),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/issue"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Issue")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbtoken"},"IJBToken")," indexed token")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string name")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string symbol")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/mint"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Mint")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool tokensWereClaimed")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool preferClaimedTokens")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/burn"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Burn")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 initialUnclaimedBalance")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 initialClaimedBalance")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool preferClaimedTokens")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/claim"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Claim")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 initialUnclaimedBalance")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/shouldrequireclaim"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"ShouldRequireClaim")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool indexed flag")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/change"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Change")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbtoken"},"IJBToken")," indexed newToken")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbtoken"},"IJBToken")," indexed oldToken")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed owner")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/events/transfer"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Transfer")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed recipient")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))))),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/properties/projects"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"projects")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"immutable"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbprojects"},"IJBProjects")))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/properties/tokenof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"tokenOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbprojects"},"IJBToken")))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/properties/projectof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"projectOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _token"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/properties/unclaimedbalanceof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"unclaimedBalanceOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address _holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/properties/unclaimedtotalsupplyof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"unclaimedTotalSupplyOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/properties/requireclaimfor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"requireClaimFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"bool"))))))),(0,r.kt)("h4",{id:"read"},"Read"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/read/totalsupplyof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"totalSupplyOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 totalSupply"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/read/balanceof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"balanceOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 balance"))))))),(0,r.kt)("h4",{id:"write"},"Write"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/issuefor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"issueFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/modifiers/onlycontroller"},"onlyController")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string _name")),(0,r.kt)("li",null,(0,r.kt)("code",null,"string _symbol"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbtoken"},"IJBToken")," token"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/changefor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"changeFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/modifiers/onlycontroller"},"onlyController")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"IJBToken _token")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address _newOwner"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbtoken"},"IJBToken")," oldToken"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/mintfor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"mintFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/modifiers/onlycontroller"},"onlyController")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address _holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool _preferClaimedTokens"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/burnfrom"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"burnFrom")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/modifiers/onlycontroller"},"onlyController")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address _holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _amount")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool _preferClaimedTokens"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/claimfor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"claimFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermissionallowingoverride"},"requirePermissionAllowingOverride")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address _holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _amount"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/transferfrom"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"transferFrom")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},"requirePermission")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address _holder")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address _recipient")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _amount"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbtokenstore/write/shouldrequireclaimingfor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"shouldRequireClaimingFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},"requirePermission")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"bool _flag"))))))))}s.isMDXComponent=!0}}]);