"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[63958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},34632:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},i="Risks",s={unversionedId:"dev/learn/risks",id:"dev/learn/risks",title:"Risks",description:"The following are risks that everyone should be aware of before interacting with the protocol. The protocol's design exposes these risks in consequence to its normal operating procedures.",source:"@site/docs/dev/learn/risks.md",sourceDirName:"dev/learn",slug:"/dev/learn/risks",permalink:"/zh/dev/learn/risks",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/learn/risks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"dev",previous:{title:"Administration",permalink:"/zh/dev/learn/administration"},next:{title:"Glossary",permalink:"/zh/dev/learn/glossary/"}},l={},c=[{value:"Smart contract risk",id:"smart-contract-risk",level:4},{value:"Project owner risk",id:"project-owner-risk",level:4},{value:"Undistributed reserved rate risk",id:"undistributed-reserved-rate-risk",level:4},{value:"Price oracle risk",id:"price-oracle-risk",level:4},{value:"Large number risk",id:"large-number-risk",level:4}],u=e=>{let{children:t,color:r}=e;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:c,Highlight:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"risks"},"Risks"),(0,a.kt)("p",null,"The following are risks that everyone should be aware of before interacting with the protocol. The protocol's design exposes these risks in consequence to its normal operating procedures. "),(0,a.kt)("h4",{id:"smart-contract-risk"},"Smart contract risk"),(0,a.kt)("p",null,"The protocol runs entirely on public smart contracts explained in detail throughout these docs. The Juicebox protocol is public infrastructure running well-known code, all consequences from interacting with networks running the protocol are borne by the entities who sign each transaction. The protocol works according to the specifications outlined in these docs to the extent the code is written and deployed correctly, which is a collective responsibility and not guaranteed. There is a major risk that this is not the case. Please do your own research."),(0,a.kt)("h4",{id:"project-owner-risk"},"Project owner risk"),(0,a.kt)("p",null,"Ownership of each project on the Juicebox protocol belongs to the address possessing a ",(0,a.kt)("a",{parentName:"p",href:"/dev/api/contracts/jbprojects"},(0,a.kt)("inlineCode",{parentName:"a"},"JBProjects"))," NFT with a unique token ID, which also serves as the project's ID. The address that owns this token can reconfigure a project's funding cycles, which empower it to manipulate a project's finances both productively and maliciously."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The following values can be reconfigured by a project's owner on a per-funding cycle basis:"),(0,a.kt)("h4",{parentName:"li",id:"setting-a-distribution-limit-and-payout-splits"},"Setting a distribution limit and payout splits"),(0,a.kt)("p",{parentName:"li"},"With a distribution limit of zero, all treasury funds belong to the community. Token holders can redeem their tokens to reclaim their share of the treasury at any time, according to the current funding cycle's redemption bonding curve rate."),(0,a.kt)("p",{parentName:"li"},"A non-zero distribution limit allocates a portion of the treasury for distribution to payout splits."),(0,a.kt)("p",{parentName:"li"},"A project owner can also change the split allocations that are bound by the funding cycle's distribution limit at any time, unless the split was explicitly locked until a specified date during its creation."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to withdraw funds to a community safe, distribute funds to contributors, channel funds to other projects operating treasuries on the protocol, and more.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to rug the entire treasury into an arbitrary wallet.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"setting-an-overflow-allowance"},"Setting an overflow allowance"),(0,a.kt)("p",{parentName:"li"},"With an overflow allowance of zero, all treasury funds belonging to the community \u2013 funds in excess of the distribution limit \u2013 cannot be accessed by the project owner. The only way funds can leave the treasury is through token redemptions. "),(0,a.kt)("p",{parentName:"li"},"A non-zero overflow allowance gives the project owner access to a portion of the community's funds for on-demand distribution to arbitrary addresses."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to manage discretionary spending.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to rug the entire treasury into an arbitrary wallet.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"allowing-token-minting"},"Allowing token minting"),(0,a.kt)("p",{parentName:"li"},"While token minting is not allowed, the only way for new project tokens to be minted and distributed is for the project to receive new funds into its treasury. Tokens will get minted in accordance to the current funding cycle's values. "),(0,a.kt)("p",{parentName:"li"},"If token minting is allowed, an arbitrary number of tokens can be minted and distributed by the project owner, diluting the redemption value of all outstanding tokens."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to premint tokens to members, or satisfy other agreed upon inflationary treasury strategies.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to mint extra tokens and redeem them to reclaim treasury funds into an arbitrary wallet, rugging the entire treasury.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"setting-the-funding-cycles-weight"},"Setting the funding cycle's weight"),(0,a.kt)("p",{parentName:"li"},"A funding cycle's weight determines how many tokens will be minted and distributed when a treasury receives funds. By default, a funding cycle has the same weight as the cycle that preceded it after applying the preceding cycle's discount rate.  "),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to manage how tokens are issued over time.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to manipulate token issuance, and rug the entire treasury into an arbitrary wallet.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"allowing-changing-of-project-tokens"},"Allowing changing of project tokens"),(0,a.kt)("p",{parentName:"li"},"While changing tokens isn't allowed, the current project token will be used to satisfy redemptions and new issuance for the duration of the funding cycle. "),(0,a.kt)("p",{parentName:"li"},"If changing tokens is allowed, a new token can replace the role of a previous token for new issuance and redemptions. "),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to allow projects to augment a previous token strategy with a Juicebox treasury, detach a token from a Juicebox treasury, or create custom token mechanisms associated with its Juicebox treasury.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to cut off a community of token holders from their treasury while using the redemption of a new token to reclaim treasury funds into an arbitrary wallet.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"pause-payments-pause-distributions-pause-redemptions-pause-burn"},"Pause payments, pause distributions, pause redemptions, pause burn"),(0,a.kt)("p",{parentName:"li"},"While each functionality isn't paused, the standard functionality will be accessible."),(0,a.kt)("p",{parentName:"li"},"If payments are paused to a project, the protocol will reject any inbound payments. If disitributions are paused for a project, the protocol will reject any request to distribute funds from the treasury. If redemptions are paused, the protocol will reject any request to redeem tokens. If burning is paused, the protocol will reject any request by token holders to burn their tokens. "),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to allow projects to creatively tune how its treasury can be accessed.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to cut off a community of token holders from standard treasury functionality.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"custom-treasury-extensions"},"Custom treasury extensions"),(0,a.kt)("p",{parentName:"li"},"If a project's funding cycles have no data source, delegate, split allocator, or ballot contracts attached, the consequences of each interaction with the protocol are predictable, consistent, and specified within these docs."),(0,a.kt)("p",{parentName:"li"},"If a project has attached a data source, delegate, split allocator, or ballot contract to a funding cycle, the protocol will access information from them and call functionality within them at specific moments during the execution of various transactions within the regular operation of the protocol."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to customize what happens when a treasury receives funds, under what conditions funds can leave a treasury, and under what conditions reconfigurations can take effect.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to mint excess tokens, rug the entire treasury into an arbitrary wallet, trick users into compromising their individual wallets, create arbitrary unwanted and extractive behavior, or introduce smart contract bugs into otherwise productive extension designs. Do not interact with a project that is using an untrusted extension.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"add-and-remove-payment-terminals"},"Add and remove payment terminals"),(0,a.kt)("p",{parentName:"li"},"While setting payment terminals isn't allowed, a project can only receive funds and offer token redemptions from within the payment terminals it has already attached. "),(0,a.kt)("p",{parentName:"li"},"If setting payment terminals is allowed, projects can begin managing inflows and outflows of funds from new contracts, or remove current contracts where they are doing so."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to begin accepting new tokens into a treasury, or creating totally custom treasury behavior.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to cut off a community of token holders from their treasury, create arbitrary unwanted and extractive behavior, or introduce smart contract bugs. Do not interact with a projects using untrusted payment terminals.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"setting-the-controller"},"Setting the controller"),(0,a.kt)("p",{parentName:"li"},"While setting the controller isn't allowed, a project can only operate according to the rules of its currently set controller. "),(0,a.kt)("p",{parentName:"li"},"If setting the controller is allowed, projects can bring new rules according to which it'll operate."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to create totally custom treasury behavior.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to cut off a community of token holders from their treasury, create arbitrary unwanted and extractive behavior, or introduce smart contract bugs. Do not interact with a projects using an untrusted controller.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("h4",{parentName:"li",id:"migrating-funds-between-terminals"},"Migrating funds between terminals"),(0,a.kt)("p",{parentName:"li"},"While migrating funds between terminals isn't allowed, a project's funds in a terminal cannot be migrated to another terminal which may have alternate constraints. "),(0,a.kt)("p",{parentName:"li"},"If migrating funds between terminals is allowed, a project can move its funds from one terminal to another."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udfe2 ",(0,a.kt)("strong",null,"Used productively")," this can be used to move a treasury into a totally custom environment, or to trusted upgraded versions of the protocol.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"\ud83d\udd34 ",(0,a.kt)("strong",null,"Used maliciously")," this can be used to cut off a community of token holders from their treasury, create arbitrary unwanted and extractive behavior, or introduce smart contract bugs.",(0,a.kt)("br",null),(0,a.kt)("br",null)))),(0,a.kt)("h4",{id:"undistributed-reserved-rate-risk"},"Undistributed reserved rate risk"),(0,a.kt)("p",null,"If a project enters a funding cycle with a different reserved rate than the preceding cycle while still having outstanding reserved tokens to distribute, the quantity of distributable tokens will change to reflect the new reserved rate."),(0,a.kt)("p",null,"   For example, if in FC#1 a project has a reserved rate of 10% and 9,000 tokens are minted, 1,000 tokens (10% of the total) are reserved to be distributed to the configured reserved token receivers. If FC#2 with a reserved rate of 50% begins without the reserved tokens having been distributed, there will now be 9,000 tokens (50% of the total) reserved to be distributed to the configured reserved token receivers. "),(0,a.kt)("p",null,"   Distributing reserved tokens is a public action \u2013 anyone can send a transaction to do this."),(0,a.kt)("h4",{id:"price-oracle-risk"},"Price oracle risk"),(0,a.kt)("p",null,"The protocol uses price oracles to normalize prices throughout the its standard operations. These oracles are smart contract mechanisms external to the core Juicebox protocol. Projects using multiple currencies for certain functionality bare the risk of these external oracle systems misreporting price values. "),(0,a.kt)("h4",{id:"large-number-risk"},"Large number risk"),(0,a.kt)("p",null,"Under certain circumstances, token holders attempting to burn token amounts greater than (2^256 / 2) - 1, or 57896044618658097711785492504343953926634992332820282019728792003956564819968, will have their transactions reverted due to an arithmetic underflow."))}p.isMDXComponent=!0}}]);