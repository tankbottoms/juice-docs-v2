"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[95038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:3},i="Governance Process",s={unversionedId:"dao/process",id:"dao/process",title:"Governance Process",description:"JuiceboxDAO governance runs on a 14 day cycle.",source:"@site/docs/dao/process.md",sourceDirName:"dao",slug:"/dao/process",permalink:"/zh/dao/process",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dao/process.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"dao",previous:{title:"Juicebox DAO Foundation",permalink:"/zh/dao/foundation"},next:{title:"How to Make a Governance Proposal",permalink:"/zh/dao/proposals"}},c={},l=[{value:"Governance Schedule",id:"governance-schedule",level:3},{value:"Step 0 - Discussion",id:"step-0---discussion",level:2},{value:"Step 1 - Temperature Check",id:"step-1---temperature-check",level:2},{value:"Step 2 - Offchain Voting",id:"step-2---offchain-voting",level:2},{value:"Step 3 - Execution",id:"step-3---execution",level:2},{value:"Step 4 - Reconfiguration Delay",id:"step-4---reconfiguration-delay",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"governance-process"},"Governance Process"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"JuiceboxDAO governance runs on a 14 day cycle.")," "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58350).Z,width:"2743",height:"1274"})),(0,a.kt)("h3",{id:"governance-schedule"},"Governance Schedule"),(0,a.kt)("p",null,"Day 1 -  Temperature Check - Saturday (00:00 UTC) ",(0,a.kt)("br",null),"\nDay 4 - Snapshot Vote - Tuesday (00:00 UTC) ",(0,a.kt)("br",null),"\nDay 8 - Multisig Execution - Saturday (00:00 UTC) ",(0,a.kt)("br",null),"\nDay 12 - Reconfiguration Delay - Wednesday (19:19 UTC) ",(0,a.kt)("br",null),"\nDay 15 / Day 1 - Funding Cycle Updated - Saturday (19:19 UTC) ",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"step-0---discussion"},"Step 0 - Discussion"),(0,a.kt)("p",null,"Proposals can be submitted to the ",(0,a.kt)("a",{parentName:"p",href:"https://juicebox.notion.site/9d126f9148dc42ee83317d5cd74e4db4?v=50d0bbcb498044059cc0d4d83e8b13fa"},"Proposals Database")," at any time. Once a proposal is ready for discussion, authors can change the proposal ",(0,a.kt)("inlineCode",{parentName:"p"},"Status")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"Draft")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Discussion"),", which will automatically create a discussion thread in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.discord.gg/juicebox"},"JuiceboxDAO Discord Server"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For more, see ",(0,a.kt)("a",{parentName:"em",href:"/zh/dao/proposals"},"How to Make a Governance Proposal"))),(0,a.kt)("h2",{id:"step-1---temperature-check"},"Step 1 - Temperature Check"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Begins on Day 1 of the Governance Cycle - Saturday 00:00 UTC")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"3 day temperature check")," (react-vote Discord poll) will be created for each proposal submitted by day 1 of each Governance Cycle. During the temperature check, authors can update or redact their proposals based on the DAO's feedback."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Executable proposals which receive at least 10 affirmative votes amounting to at least 30% of total votes will proceed to the next stage. Proposals must clearly specify multisig actions to be deemed executable.")),(0,a.kt)("h2",{id:"step-2---offchain-voting"},"Step 2 - Offchain Voting"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Begins on Day 4 of the Governance Cycle - Tuesday 00:00 UTC")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"4 day Snapshot vote")," (basic single choice) will be created for each proposal which passes temperature checks. Each Snapshot proposal must include the full proposal text and a link to an immutable (IPFS or Arweave) version of the proposal text."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Proposals which receive at least 80,000,000 affirmative JBX votes amounting to at least 66% of total votes are queued for execution. "Abstain" votes are not included in these counts.')),(0,a.kt)("h2",{id:"step-3---execution"},"Step 3 - Execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Begins on Day 7 of the Governance Cycle - Saturday 00:00 UTC")),(0,a.kt)("p",null,"The DAO's Gnosis multisig (",(0,a.kt)("em",{parentName:"p"},"mainnet:",(0,a.kt)("a",{parentName:"em",href:"https://etherscan.io/address/0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e"},"0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e")),") has four days to queue the funding cycle reconfiguration."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The multisig has control over JuiceboxDAO treasury parameters and onchain protocol parameters. The execution of JBX token holder votes depends upon the cooperation of these signers. The JuiceboxDAO multisig signers have committed to executing the will of the DAO as expressed by Snapshot votes.")),(0,a.kt)("h2",{id:"step-4---reconfiguration-delay"},"Step 4 - Reconfiguration Delay"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Begins on Day 12 of the Governance Cycle - Wednesday 19:19 UTC")),(0,a.kt)("p",null,"The JuiceboxDAO multisig must submit reconfigurations to the JuiceboxDAO project at least 3 days before the start of the next funding cycle. This practice gives the DAO time to verify queued reconfigurations and proposals, and to burn their JBX tokens if desired."))}u.isMDXComponent=!0},58350:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gov-calendar-8217a06f210bc184b1c3ef34914cb558.png"}}]);