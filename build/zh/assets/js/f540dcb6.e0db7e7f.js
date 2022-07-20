"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[19547],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=c(n),s=r,m=k["".concat(u,".").concat(s)]||k[s]||p[s]||l;return n?a.createElement(m,i(i({ref:e},d),{},{components:n})):a.createElement(m,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63162:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},i="JBFundingCycleStore",o={unversionedId:"dev/api/contracts/jbfundingcyclestore/README",id:"dev/api/contracts/jbfundingcyclestore/README",title:"JBFundingCycleStore",description:"Manages funding cycle configurations and scheduling.",source:"@site/docs/dev/api/contracts/jbfundingcyclestore/README.md",sourceDirName:"dev/api/contracts/jbfundingcyclestore",slug:"/dev/api/contracts/jbfundingcyclestore/",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbfundingcyclestore/README.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"transferFrom",permalink:"/zh/dev/api/contracts/jbtokenstore/write/transferfrom"},next:{title:"Configure",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/events/configure"}},u={},c=[{value:"Code",id:"code",level:4},{value:"Addresses",id:"addresses",level:4},{value:"Interfaces",id:"interfaces",level:4},{value:"Inheritance",id:"inheritance",level:4},{value:"Constructor",id:"constructor",level:4},{value:"Events",id:"events",level:4},{value:"Properties",id:"properties",level:4},{value:"Read",id:"read",level:4},{value:"Write",id:"write",level:4}],d={toc:c};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jbfundingcyclestore"},"JBFundingCycleStore"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Manages funding cycle configurations and scheduling.")),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBFundingCycleStore.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBFundingCycleStore.sol")),(0,r.kt)("h4",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,"Ethereum mainnet: ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x6B8e01DAA8A61b544F96d2738893E05D04BF1D12"},(0,r.kt)("inlineCode",{parentName:"a"},"0x6B8e01DAA8A61b544F96d2738893E05D04BF1D12"))),(0,r.kt)("p",null,"Ethereum rinkeby: ",(0,r.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x8b3e0af1f7ee6C5a3fab969b5cAdD9347B009F1a"},(0,r.kt)("inlineCode",{parentName:"a"},"0x8b3e0af1f7ee6C5a3fab969b5cAdD9347B009F1a"))),(0,r.kt)("h4",{id:"interfaces"},"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbfundingcyclestore"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"IJBFundingCycleStore")))),(0,r.kt)("td",{parentName:"tr",align:null},"General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.")))),(0,r.kt)("h4",{id:"inheritance"},"Inheritance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contract"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-abstract/jbcontrollerutility/"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"JBControllerUtility")))),(0,r.kt)("td",{parentName:"tr",align:null},"Includes convenience functionality for checking if the message sender is the current controller of the project whose data is being manipulated.")))),(0,r.kt)("h4",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/** \n  @param _directory A contract storing directories of terminals and controllers for each project.\n*/\nconstructor(IJBDirectory _directory) JBControllerUtility(_directory) {}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_directory")," is an ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbdirectory"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," contract storing directories of terminals and controllers for each project.")),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/events/configure"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Configure")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed configuration")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycledata"},"JBFundingCycleData")," data")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 metadata")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 mustStartAtOrAfter")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/events/init"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Init")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed configuration")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed basedOn"))))))),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/properties/latestconfigurationof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"latestConfigurationOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256"))))))),(0,r.kt)("h4",{id:"read"},"Read"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/get"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"get")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _configuration"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycle"},"JBFundingCycle")," fundingCycle"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/latestconfiguredof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"latestConfiguredOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycle"},"JBFundingCycle")," fundingCycle")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/enums/jbballotstate"},"JBBallotState")," ballotState"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/queuedof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"queuedOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycle"},"JBFundingCycle")," fundingCycle"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"currentOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycle"},"JBFundingCycle")," fundingCycle"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/currentballotstateof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"currentBallotStateOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/enums/jbballotstate"},"JBBallotState")," ballotState"))))))),(0,r.kt)("h4",{id:"write"},"Write"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbfundingcyclestore/write/configurefor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"configureFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jbcontrollerutility/modifiers/onlycontroller"},"onlyController")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycledata"},"JBFundingCycleData")," _data")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _metadata")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _mustStartAtOrAfter"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbfundingcycle"},"JBFundingCycle")," fundingCycle"))))))))}p.isMDXComponent=!0}}]);