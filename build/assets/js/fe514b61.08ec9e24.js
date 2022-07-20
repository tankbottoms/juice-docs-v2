"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[542],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(m,o(o({ref:e},s),{},{components:a})):n.createElement(m,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61743:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},o="JBProjects",i={unversionedId:"dev/api/contracts/jbprojects/README",id:"dev/api/contracts/jbprojects/README",title:"JBProjects",description:"Stores project ownership and metadata.",source:"@site/docs/dev/api/contracts/jbprojects/README.md",sourceDirName:"dev/api/contracts/jbprojects",slug:"/dev/api/contracts/jbprojects/",permalink:"/dev/api/contracts/jbprojects/",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/api/contracts/jbprojects/README.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Contracts",permalink:"/dev/api/contracts/"},next:{title:"Create",permalink:"/dev/api/contracts/jbprojects/events/create"}},p={},d=[{value:"Code",id:"code",level:4},{value:"Addresses",id:"addresses",level:4},{value:"Interfaces",id:"interfaces",level:4},{value:"Inheritance",id:"inheritance",level:4},{value:"Constructor",id:"constructor",level:4},{value:"Events",id:"events",level:4},{value:"Properties",id:"properties",level:4},{value:"Read",id:"read",level:4},{value:"Write",id:"write",level:4}],s={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jbprojects"},"JBProjects"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Stores project ownership and metadata.")),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBProjects.sol"},"https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBProjects.sol")),(0,r.kt)("h4",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,"Ethereum mainnet: ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xD8B4359143eda5B2d763E127Ed27c77addBc47d3"},(0,r.kt)("inlineCode",{parentName:"a"},"0xD8B4359143eda5B2d763E127Ed27c77addBc47d3"))),(0,r.kt)("p",null,"Ethereum rinkeby: ",(0,r.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x2d8e361f8F1B5daF33fDb2C99971b33503E60EEE"},(0,r.kt)("inlineCode",{parentName:"a"},"0x2d8e361f8F1B5daF33fDb2C99971b33503E60EEE"))),(0,r.kt)("h4",{id:"interfaces"},"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/interfaces/ijbprojects"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"IJBProjects")))),(0,r.kt)("td",{parentName:"tr",align:null},"General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.")))),(0,r.kt)("h4",{id:"inheritance"},"Inheritance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contract"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-abstract/jboperatable/"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"JBOperatable")))),(0,r.kt)("td",{parentName:"tr",align:null},"Includes convenience functionality for checking a message sender's permissions before executing certain transactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721Votes"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"ERC721Votes")))),(0,r.kt)("td",{parentName:"tr",align:null},"A checkpointable standard definition for non-fungible tokens (NFTs).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Ownable")))),(0,r.kt)("td",{parentName:"tr",align:null},"Includes convenience functionality for specifying an address that owns the contract, with modifiers that only allow access by the owner.")))),(0,r.kt)("h4",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"constructor(IJBOperatorStore _operatorStore)\n  ERC721('Juicebox Projects', 'JUICEBOX')\n  EIP712('Juicebox Projects', '1')\n  JBOperatable(_operatorStore)\n{}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_operatorStore")," is an ",(0,r.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijboperatorstore"},(0,r.kt)("inlineCode",{parentName:"a"},"IJBOperatorStore"))," contract storing operator assignments.")),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/events/create"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address indexed owner")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/data-structures/jbprojectmetadata"},"JBProjectMetadata")," metadata")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/events/setmetadata"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"SetMetadata")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 indexed projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/data-structures/jbprojectmetadata"},"JBProjectMetadata")," metadata")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/events/settokenuriresolver"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"SetTokenUriResolver")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/interfaces/ijbtokenuriresolver"},"IJBTokenUriResolver")," indexed resolver")),(0,r.kt)("li",null,(0,r.kt)("code",null,"address caller"))))))),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/properties/count"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"count")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/properties/metadatacontentof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"metadataContentOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _domain"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"string"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/properties/tokenuriresolver"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"tokenUriResolver")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/interfaces/ijbtokenuriresolver"},"IJBTokenUriResolver")))))))),(0,r.kt)("h4",{id:"read"},"Read"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/read/tokenuri"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"tokenURI")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/read/supportsinterface"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"supportsInterface")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _interfaceId"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"bool"))))))),(0,r.kt)("h4",{id:"write"},"Write"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/write/createfor"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"createFor")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"address _owner")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/data-structures/jbprojectmetadata"},"JBProjectMetadata")," _metadata"))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 projectId"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/write/setmetadataof"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"setMetadataOf")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/or-abstract/jboperatable/modifiers/requirepermission"},"requirePermission")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"uint256 _projectId")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/data-structures/jbprojectmetadata"},"JBProjectMetadata")," _metadata"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/dev/api/contracts/jbprojects/write/settokenuriresolver"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"setTokenUriResolver")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",null,"Traits")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable-onlyOwner--"},"onlyOwner")))),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Params")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"td",href:"/dev/api/interfaces/ijbtokenuriresolver"},"IJBTokenUriResolver")," _newResolver"))))))))}c.isMDXComponent=!0}}]);