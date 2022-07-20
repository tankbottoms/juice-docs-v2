"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[85506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},i="Overview",l={unversionedId:"dev/learn/overview",id:"dev/learn/overview",title:"Overview",description:"The Juicebox protocol is a framework for funding and operating projects openly on Ethereum. It lets you:",source:"@site/docs/dev/learn/overview.md",sourceDirName:"dev/learn",slug:"/dev/learn/overview",permalink:"/zh/dev/learn/overview",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/learn/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"dev",previous:{title:"Intro",permalink:"/zh/"},next:{title:"Architecture",permalink:"/zh/dev/learn/architecture"}},s={},c=[{value:"Deploy an NFT that represents ownership over a project",id:"deploy-an-nft-that-represents-ownership-over-a-project",level:4},{value:"Configure funding cycles for a project",id:"configure-funding-cycles-for-a-project",level:4},{value:"Start timestamp",id:"start-timestamp",level:5},{value:"Duration",id:"duration",level:5},{value:"Distribution limit",id:"distribution-limit",level:5},{value:"Overflow allowance",id:"overflow-allowance",level:5},{value:"Weight",id:"weight",level:5},{value:"Discount rate",id:"discount-rate",level:5},{value:"Ballot",id:"ballot",level:5},{value:"Reserved rate",id:"reserved-rate",level:5},{value:"Redemption rate",id:"redemption-rate",level:5},{value:"Ballot redemption rate",id:"ballot-redemption-rate",level:5},{value:"Pause payments, pause distributions, pause redemptions, pause burn",id:"pause-payments-pause-distributions-pause-redemptions-pause-burn",level:5},{value:"Allow minting tokens, allow changing tokens, allow setting terminals, allow setting the controller, allow terminal migrations, allow controller migration",id:"allow-minting-tokens-allow-changing-tokens-allow-setting-terminals-allow-setting-the-controller-allow-terminal-migrations-allow-controller-migration",level:5},{value:"Hold fees",id:"hold-fees",level:5},{value:"Data source",id:"data-source",level:5},{value:"Mint tokens",id:"mint-tokens",level:4},{value:"Burn tokens",id:"burn-tokens",level:4},{value:"Bring-your-own token",id:"bring-your-own-token",level:4},{value:"Splits",id:"splits",level:4},{value:"JBX membership fee",id:"jbx-membership-fee",level:4},{value:"Custom treasury strategies",id:"custom-treasury-strategies",level:4},{value:"Accept multiple tokens",id:"accept-multiple-tokens",level:4},{value:"Forkability and migratability",id:"forkability-and-migratability",level:4},{value:"Operators",id:"operators",level:4}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Juicebox protocol is a framework for funding and operating projects openly on Ethereum. It lets you:"),(0,o.kt)("h4",{id:"deploy-an-nft-that-represents-ownership-over-a-project"},"Deploy an NFT that represents ownership over a project"),(0,o.kt)("p",null,"Whichever address owns this NFT has administrative privileges to configure treasury parameters within the Juicebox ecosystem."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/project"},"Learn more about projects")),(0,o.kt)("h4",{id:"configure-funding-cycles-for-a-project"},"Configure funding cycles for a project"),(0,o.kt)("p",null,"Funding cycles define contractual constraints according to which the project will operate."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/funding-cycle"},"Learn more about funding cycles"),(0,o.kt)("br",null)),(0,o.kt)("p",null,"The following properties can be configured into a funding cycle:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("em",null,"Funding cycle properties")),(0,o.kt)("h5",{id:"start-timestamp"},"Start timestamp"),(0,o.kt)("p",null,"The timestamp at which the funding cycle is considered active. Projects can configure the start time of their first funding cycle to be in the future, and can ensure reconfigurations don't take effect before a specified timestamp."),(0,o.kt)("p",null,"Once a funding cycle ends, a new one automatically starts right away. If there's an approved reconfiguration queued to start at this time, it will be used. Otherwise, a copy of the rolled over funding cycle will be used."),(0,o.kt)("h5",{id:"duration"},"Duration"),(0,o.kt)("p",null,"How long each funding cycle lasts (specified in seconds). All funding cycle properties are unchangeable while the cycle is in progress. In other words, any proposed reconfigurations can only take effect during the subsequent cycle."),(0,o.kt)("p",null,"If no reconfigurations were submitted by the project owner, or if proposed changes fail the current cycle's ",(0,o.kt)("a",{href:"#ballot"},"ballot"),", a copy of the latest funding cycle will automatically start once the current one ends."),(0,o.kt)("p",null,"A cycle with no duration lasts indefinitely, and reconfigurations can start a new funding cycle with the proposed changes right away."),(0,o.kt)("h5",{id:"distribution-limit"},"Distribution limit"),(0,o.kt)("p",null,"The amount of funds that can be distributed out from the project's treasury during a funding cycle. The project owner can pre-program a list of addresses, other Juicebox projects, and contracts that adhere to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbsplitsallocator.md"},"IJBSplitsAllocator")," to split distributions between. Treasury funds in excess of the distribution limit is considered overflow, which can serve as runway or be reclaimed by token holders who redeem their tokens."),(0,o.kt)("p",null,"Distributing is a public transaction that anyone can call on a project's behalf. The project owner can also include a split that sends a percentage of the distributed funds to the address who executes this transaction."),(0,o.kt)("p",null,"The protocol charges a ",(0,o.kt)("a",{href:"#jbx-membership-fee"},"JBX membership fee")," on funds withdrawn from the network. There are no fees for distributions to other Juicebox projects."),(0,o.kt)("p",null,"Distribution limits can be specified in any currency that the ",(0,o.kt)("a",{href:"/dev/api/contracts/jbprices"},(0,o.kt)("code",null,"JBPrices"))," contract has a price feed for."),(0,o.kt)("h5",{id:"overflow-allowance"},"Overflow allowance"),(0,o.kt)("p",null,"The amount of treasury funds that the project owner can distribute on-demand."),(0,o.kt)("p",null,"This allowance does not reset per-funding cycle. Instead, it lasts until the project owner explicitly proposes a reconfiguration with a new allowance."),(0,o.kt)("p",null,"The protocol charges a ",(0,o.kt)("a",{href:"#jbx-membership-fee"},"JBX membership fee")," on funds withdrawn from the network."),(0,o.kt)("p",null,"Overflow allowances can be specified in any currency that the ",(0,o.kt)("a",{href:"/dev/api/contracts/jbprices"},(0,o.kt)("code",null,"JBPrices"))," contract has a price feed for."),(0,o.kt)("h5",{id:"weight"},"Weight"),(0,o.kt)("p",null,"A number used to determine how many project tokens should be minted and transferred when payments are received during the funding cycle. In other words, weight is the exchange rate between the project token and a currency (defined by a ",(0,o.kt)("a",{href:"/dev/api/contracts/jbpayoutredemptionpaymentterminal"},"JBPayoutRedemptionPaymentTerminal"),") during that funding cycle. Project owners can configure this directly, or allow it to be derived automatically from the previous funding cycle's weight and discount rate."),(0,o.kt)("h5",{id:"discount-rate"},"Discount rate"),(0,o.kt)("p",null,"The percent to automatically decrease the subsequent cycle's weight from the current cycle's weight."),(0,o.kt)("p",null,"The discount rate is not applied during funding cycles where the weight is explicitly reconfigured."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/discount-rate"},"Learn more about discount rates")),(0,o.kt)("h5",{id:"ballot"},"Ballot"),(0,o.kt)("p",null,"The address of a contract that adheres to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbfundingcycleballot"},(0,o.kt)("code",null,"IJBFundingCycleBallot")),", which can provide custom criteria that prevents funding cycle reconfigurations from taking effect."),(0,o.kt)("p",null,"A common implementation is to force reconfigurations to be submitted at least X days before the end of the current funding cycle, giving the community foresight into any misconfigurations or abuses of power before they take effect."),(0,o.kt)("p",null,"A more complex implementation might include on-chain governance."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/ballot"},"Learn more ballots")),(0,o.kt)("h5",{id:"reserved-rate"},"Reserved rate"),(0,o.kt)("p",null,"The percentage of newly minted tokens that a project wishes to withhold for custom distributions. The project owner can pre-program a list of addresses, other Juicebox project owners, and contracts that adhere to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbsplitsallocator.md"},"IJBSplitsAllocator")," to split reserved tokens between."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/reserved-tokens"},"Learn more about reserved rate")),(0,o.kt)("h5",{id:"redemption-rate"},"Redemption rate"),(0,o.kt)("p",null,"The percentage of a project's treasury funds that can be reclaimed by community members by redeeming the project's tokens during the funding cycle."),(0,o.kt)("p",null,"A rate of 100% suggests a linear proportion, meaning X% of treasury overflow can be reclaimed by redeeming X% of the token supply."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/redemption-rate"},"Learn more about redemption rates")),(0,o.kt)("h5",{id:"ballot-redemption-rate"},"Ballot redemption rate"),(0,o.kt)("p",null,"A project can specify a custom redemption rate that only applies when a proposed reconfiguration is waiting to take effect."),(0,o.kt)("p",null,"This can be used to automatically allow for more favorable redemption rates during times of potential change."),(0,o.kt)("h5",{id:"pause-payments-pause-distributions-pause-redemptions-pause-burn"},"Pause payments, pause distributions, pause redemptions, pause burn"),(0,o.kt)("p",null,"Projects can pause various bits of its treasury's functionality on a per-funding cycle basis. These functions are unpaused by default."),(0,o.kt)("h5",{id:"allow-minting-tokens-allow-changing-tokens-allow-setting-terminals-allow-setting-the-controller-allow-terminal-migrations-allow-controller-migration"},"Allow minting tokens, allow changing tokens, allow setting terminals, allow setting the controller, allow terminal migrations, allow controller migration"),(0,o.kt)("p",null,"Projects can allow various bits of treasury functionality on a per-funding cycle basis. These functions are disabled by default."),(0,o.kt)("h5",{id:"hold-fees"},"Hold fees"),(0,o.kt)("p",null,"By default, JBX membership fees are paid automatically when funds are distributed out of the ecosystem from a project's treasury. During funding cycles configured to hold fees, this fee amount is set aside instead of being immediately processed. Projects can get their held fees returned by adding the same amount of withdrawn funds back to their treasury. Otherwise, JuiceboxDAO or the project can process these held fees at any point to get JBX at the current rate."),(0,o.kt)("p",null,"This allows a project to withdraw funds and later add them back into their Juicebox treasury without incurring fees.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"This applies to both distributions from the distribution limit and from the overflow allowance."),(0,o.kt)("h5",{id:"data-source"},"Data source"),(0,o.kt)("p",null,"The address of a contract that adheres to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbfundingcycledatasource"},(0,o.kt)("code",null,"IJBFundingCycleDataSource")),", which can be used to extend or override what happens when the treasury receives funds, and what happens when someone tries to redeem their project tokens."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/data-source"},"Learn more about data sources"))),(0,o.kt)("h4",{id:"mint-tokens"},"Mint tokens"),(0,o.kt)("p",null,"By default, a project starts with 0 tokens and mints them when its treasury receives contributions.",(0,o.kt)("br",null),"A project can mint and distribute tokens on demand if its current funding cycle is configured to allow minting.",(0,o.kt)("br",null),"By default, project tokens are not ERC-20s and thus not compatible with standard market protocols like Uniswap. At any time, you can issue ERC-20s that your token holders can claim. This is optional."),(0,o.kt)("h4",{id:"burn-tokens"},"Burn tokens"),(0,o.kt)("p",null,"Anyone can burn a project's tokens if the project's current funding cycle isn't configured to paused burning."),(0,o.kt)("h4",{id:"bring-your-own-token"},"Bring-your-own token"),(0,o.kt)("p",null,"A project can bring its own token, as long as it adheres to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbtoken"},(0,o.kt)("code",null,"IJBToken"))," and uses fixed point accounting with 18 decimals.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"This allows a project to use ERC-721's, ERC-1155's, or any other custom contract that'll be called upon when the protocol asks to mint or burn tokens.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"A project can change its token during any of its funding cycles that are explicitly configured to allow changes.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"By default, the protocol provides a transaction for projects to deploy ",(0,o.kt)("a",{href:"/dev/api/contracts/jbtoken"},(0,o.kt)("code",null,"JBToken"))," ERC-20 tokens."),(0,o.kt)("h4",{id:"splits"},"Splits"),(0,o.kt)("p",null,"A project can pre-program token distributions to splits. The destination of a split can be an Ethereum address, the project ID of another project's Juicebox treasury (the split will allow you to configure the beneficiary of that project's tokens that get minted in response to the contribution), to the ",(0,o.kt)("code",null,"allocate(...)")," function of any contract that adheres to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbsplitallocator"},(0,o.kt)("code",null,"IJBSplitAllocator")),", or to the address that initiated the transaction that distributes tokens to the splits."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/splits"},"Learn more about splits"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"/dev/learn/glossary/split-allocator"},"Learn more about allocators")),(0,o.kt)("h4",{id:"jbx-membership-fee"},"JBX membership fee"),(0,o.kt)("p",null,"All funds distributed by projects from their treasuries to destinations outside of the Juicebox ecosystem (i.e. distributions that do not go to other Juicebox treasuries) will incure a protocol fee. This fee is sent to the JuiceboxDAO treasury which runs on the Juicebox protocol itself (project ID of 1), triggering the same functionality as a payment directly to JuiceboxDAO (by default, minting JBX for the fee payer according to JuiceboxDAO's current funding cycle configuration) from an external source.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"This fee is adjustable by JuiceboxDAO, with a max value of 5%.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Any funds sent from one juicebox treasury to another via splits do not incur fees."),(0,o.kt)("h4",{id:"custom-treasury-strategies"},"Custom treasury strategies"),(0,o.kt)("p",null,"Funding cycles can be configured to use an ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbfundingcycledatasource"},(0,o.kt)("code",null,"IJBFundingCycleDataSource")),", ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbpaydelegate"},(0,o.kt)("code",null,"IJBPayDelegate")),", and ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbredemptiondelegate"},(0,o.kt)("code",null,"IJBRedemptionDelegate"))," to extend or override the default protocol's behavior that defines what happens when an address tries to make a payment to the project's treasury, and what happens when someone tries to redeem the project tokens during any particular funding cycle."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/data-source"},"Learn more about data sources"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"/dev/learn/glossary/delegate"},"Learn more about delegates")),(0,o.kt)("h4",{id:"accept-multiple-tokens"},"Accept multiple tokens"),(0,o.kt)("p",null,"A project can specify any number of payment terminal contracts where it can receive funds denominated in various tokens. This allows projects to create distinct rules for accepting ETH, any ERC-20, or any asset in general."),(0,o.kt)("p",null,"Anyone can roll their own contract that adheres to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbpaymentterminal"},(0,o.kt)("code",null,"IJBPaymentTerminal"))," for projects to use, and a project can migrate funds between terminals that use the same token as it wishes."),(0,o.kt)("h4",{id:"forkability-and-migratability"},"Forkability and migratability"),(0,o.kt)("p",null,"A project can migrate its treasury's controller to any other contract that adheres to ",(0,o.kt)("a",{href:"/dev/api/interfaces/ijbcontroller"},(0,o.kt)("code",null,"IJBController")),". This allows a project to evolve into updated or custom treasury dynamics over time as it wishes."),(0,o.kt)("h4",{id:"operators"},"Operators"),(0,o.kt)("p",null,"Addresses can specify other addresses that are allowed to operate certain administrative treasury transactions on its behalf.",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/dev/learn/glossary/operator"},"Learn more about operators")))}d.isMDXComponent=!0}}]);