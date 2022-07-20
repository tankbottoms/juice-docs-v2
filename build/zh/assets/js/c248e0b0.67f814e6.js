"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[28918],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return r?n.createElement(m,i(i({ref:e},c),{},{components:r})):n.createElement(m,i({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56175:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},i="JBSplitsStore",o={unversionedId:"dev/api/contracts/jbsplitsstore/README",id:"dev/api/contracts/jbsplitsstore/README",title:"JBSplitsStore",description:"Stores splits for each project.",source:"@site/docs/dev/api/contracts/jbsplitsstore/README.md",sourceDirName:"dev/api/contracts/jbsplitsstore",slug:"/dev/api/contracts/jbsplitsstore/",permalink:"/zh/dev/api/contracts/jbsplitsstore/",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbsplitsstore/README.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"configureFor",permalink:"/zh/dev/api/contracts/jbfundingcyclestore/write/configurefor"},next:{title:"SetSplit",permalink:"/zh/dev/api/contracts/jbsplitsstore/events/setsplit"}},s={},p=[{value:"Code",id:"code",level:4},{value:"Addresses",id:"addresses",level:4},{value:"Interfaces",id:"interfaces",level:4},{value:"Inheritance",id:"inheritance",level:4},{value:"Constructor",id:"constructor",level:4},{value:"Events",id:"events",level:4},{value:"Properties",id:"properties",level:4},{value:"Read",id:"read",level:4},{value:"Write",id:"write",level:4}],c={toc:p};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jbsplitsstore"},"JBSplitsStore"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Stores splits for each project.")),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBSplitsStore.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBSplitsStore.sol")),(0,a.kt)("h4",{id:"addresses"},"Addresses"),(0,a.kt)("p",null,"Ethereum mainnet: ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xFBE1075826B7FFd898cf8D944885ba6a8D714A7F"},(0,a.kt)("inlineCode",{parentName:"a"},"0xFBE1075826B7FFd898cf8D944885ba6a8D714A7F"))),(0,a.kt)("p",null,"Ethereum rinkeby: ",(0,a.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x5918B60672f53D504881C63AB04c65338ff185d7"},(0,a.kt)("inlineCode",{parentName:"a"},"0x5918B60672f53D504881C63AB04c65338ff185d7"))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/interfaces/ijbsplitsstore"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"IJBSplitsStore")))),(0,a.kt)("td",{parentName:"tr",align:null},"General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.")))),(0,a.kt)("h4",{id:"inheritance"},"Inheritance"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Contract"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-abstract/jboperatable/"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"JBOperatable")))),(0,a.kt)("td",{parentName:"tr",align:null},"Includes convenience functionality for checking a message sender's permissions before executing certain transactions.")))),(0,a.kt)("h4",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/** \n  @param _operatorStore A contract storing operator assignments.\n  @param _projects A contract which mints ERC-721's that represent project ownership and transfers.\n  @param _directory A contract storing directories of terminals and controllers for each project.\n*/\nconstructor(\n  IJBOperatorStore _operatorStore,\n  IJBProjects _projects,\n  IJBDirectory _directory\n) JBOperatable(_operatorStore) {\n  projects = _projects;\n  directory = _directory;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_operatorStore")," is an ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijboperatorstore"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))," contract storing operator assignments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_projects")," is an ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbprojects"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBProjects"))," contract which mints ERC-721's that represent project ownership and transfers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_directory")," is an ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/interfaces/ijbdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"IJBDirectory"))," contract storing directories of terminals and controllers for each project.")),(0,a.kt)("h4",{id:"events"},"Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbsplitsstore/events/setsplit"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"SetSplit")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed domain")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 indexed group")),(0,a.kt)("li",null,(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbsplit"},"JBSplit")," split")),(0,a.kt)("li",null,(0,a.kt)("code",null,"address caller"))))))),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbsplitsstore/properties/projects"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"projects")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"Returns")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"IJBProjects"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbsplitsstore/properties/directory"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"directory")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"Returns")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"IJBPaymentTerminal"))))))),(0,a.kt)("h4",{id:"read"},"Read"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbsplitsstore/read/splitsof"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"splitsOf")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"Params")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 _projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 _domain")),(0,a.kt)("li",null,(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbgroupedsplits"},"JBGroupedSplits"),"[] calldata _groupedSplits"))),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Returns")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbsplit"},"JBSplit"),"[] splits"))))))),(0,a.kt)("h4",{id:"write"},"Write"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/jbsplitsstore/write/set"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"set")))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"Traits")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermissionallowingoverride"},"requirePermissionAllowingOverride")))),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Params")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 _projectId")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 _domain")),(0,a.kt)("li",null,(0,a.kt)("code",null,"uint256 _group")),(0,a.kt)("li",null,(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"td",href:"/zh/dev/api/data-structures/jbsplit"},"JBSplit"),"[] _splits"))))))))}d.isMDXComponent=!0}}]);