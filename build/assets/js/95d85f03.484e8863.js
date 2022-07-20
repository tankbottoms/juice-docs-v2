"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[70422],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return o?r.createElement(d,i(i({ref:t},u),{},{components:o})):r.createElement(d,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},24752:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={slug:"state-of-jbx",title:"Observations: State of JBX",authors:["jango"],tags:["observations"]},i=void 0,s={permalink:"/blog/state-of-jbx",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-12-07-state-of-jbx.md",source:"@site/blog/2021-12-07-state-of-jbx.md",title:"Observations: State of JBX",description:"JuiceboxDAO runs its community treasury on the Juicebox protocol. The tools at its disposal are also publicly available. Check out the protocol's tokenomics toolkit here.",date:"2021-12-07T00:00:00.000Z",formattedDate:"December 7, 2021",tags:[{label:"observations",permalink:"/blog/tags/observations"}],readingTime:5.485,hasTruncateMarker:!1,authors:[{name:"Jango",title:"JuiceboxDAO Contributor",url:"https://twitter.com/me_jango",imageURL:"https://pbs.twimg.com/profile_images/1414958948189413395/l89bNR2m_400x400.jpg",key:"jango"}],frontMatter:{slug:"state-of-jbx",title:"Observations: State of JBX",authors:["jango"],tags:["observations"]},prevItem:{title:"How I became a contributor to Juicebox.",permalink:"/blog/how-i-became-a-contributor-to-juicebox"},nextItem:{title:"DAO Tooling 101",permalink:"/blog/dao-tooling-101"}},l={authorsImageUrls:[void 0]},c=[{value:"Observations",id:"observations",level:3}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"JuiceboxDAO runs its community treasury on the Juicebox protocol. The tools at its disposal are also publicly available. Check out the protocol's tokenomics toolkit ",(0,n.kt)("a",{parentName:"em",href:".//juicebox-protocol-tokenomics/"},"here"),". ")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"JBX is the membership token of JuiceboxDAO. Its utility is to vote on proposals of how the DAO should evolve over time. Check out the potential use cases each project's tokens can be programmed to have within the Juicebox protocol ",(0,n.kt)("a",{parentName:"em",href:"../overflow/"},"here"),".")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Thanks to Nicholas, Zom-Bae, Zeugh, and Aeolian for edits and feedback.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"JuiceboxDAO is currently issuing ",(0,n.kt)("strong",{parentName:"p"},"208,920 JBX")," per ETH to anyone who contributes to the treasury. This rate currently decreases by 10% every other week. There is a proposal to push this up to 20%."),(0,n.kt)("p",null,"At the current redemption bonding curve of 60%, the protocol is offering 1 ETH back from the treasury for each ",(0,n.kt)("strong",{parentName:"p"},"679,652 JBX "),"burned. There is a proposal to change this rate to 95%, at which the protocol would be offering 1 ETH for about ",(0,n.kt)("strong",{parentName:"p"},"459,219 JBX")," burned."),(0,n.kt)("p",null,"The price of JBX / ETH on Uniswap is currently ",(0,n.kt)("strong",{parentName:"p"},"446,380 JBX")," per 1 ETH traded."),(0,n.kt)("p",null,"JuiceboxDAO currently has a reserved rate of 35%, which means 112,495 new JBX get reserved per ETH contributed to the treasury alongside the amount issued for the contributor. 30% of this goes to the DAO (dao.jbx.eth), 24% to jango.eth, 24% to peri.eth, 7% to nnnnicholas.eth, 7% to exekias.eth, 4% to CanuDAO, and 4% to WAGMI Studios. "),(0,n.kt)("h3",{id:"observations"},"Observations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JBX is currently trading in between the issuance and the burn rates on off-protocol markets such as the Uniswap AMM. There's currently no incentive for anyone to inflate or shrink the JBX supply.")),(0,n.kt)("p",null,"The protocol says nothing about what might happen off-protocol. The following are just my assumptions and not financial advice. \xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the market price of JBX increases past the protocol's issuance price, any additional demand of JBX can be fulfilled by contributing ETH to the Juicebox treasury which will in turn mint and distribute JBX.")),(0,n.kt)("p",null,"Risk taking arbitragers might be incentivized to mint extra JBX at this funding cycle's rate to cover the 10% spread that will become available when the cycle rolls over and the discount takes effect. They can also benefit from information asymmetry by minting JBX to fill buy orders on off-protocol markets \u2013 ",(0,n.kt)("em",{parentName:"p"},"the JuiceboxDAO community should work to minimize the opportunity for information asymmetry"),"."),(0,n.kt)("p",null,"Either of these will benefit all JBX holders who have held their JBX from better rates during previous funding cycles \u2013 their share of the total JBX in circulation will shrink, but the ETH treasury that backs each JBX will grow at a faster rate, which has the effect of increasing the burn rate."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the price of JBX decreases past the protocol's burn rate, further demand to sell JBX can be fulfilled by burning JBX to get ETH that is locked in the treasury's overflow.")),(0,n.kt)("p",null,"Again, arbitragers can benefit from information asymmetry by burning JBX to fill sell orders on off-protocol markets \u2013 ",(0,n.kt)("em",{parentName:"p"},"again, the JuiceboxDAO community should work to minimize the opportunity for information asymmetry. ")),(0,n.kt)("p",null,"Either of these will benefit all JBX holders who chose to hold their JBX through the sell pressure \u2013 every JBX that is redeemed at a redemption bonding curve leaves some ETH on the table from its proportional share (60% curve leaves a lot more on the table for holders than a 95% curve, exaggerating the effect). In all cases except a 100% redemption curve, the JBX circulating supply will be decreasing at a faster rate than the treasury's ETH supply. This will marginally increase the burn rate for JBX with each subsequent burn, which will add upward pressure on prices, shrink supply, and leave only the holders that turned away the potentially mounting exit incentive to keep building. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Over time as the market pushes against the issue and burn rates, a JBX holder's burn rate will increase and might eventually exceed the value that the JBX was minted at. ")),(0,n.kt)("p",null,"The more pressure on either side, the more the burn rate increases for each holder. On the other hand, the burn rate will stay the same if the market is being satisfied off protocol."),(0,n.kt)("p",null,"Tail market events benefit JBX holders most, albeit in a contained and measured way. The only thing that does not benefit JBX holders is the lack of change in JBX demand over time. Under this mechanism, it seems we are sacrificing price swings for resiliency."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The DAO is spending ETH each funding cycle to pay out contributors, services, and grants as proposals get approved by JBX holders. The impact of this spending is spread across all JBX holders, marginally reducing everyone's burn rate. ")),(0,n.kt)("p",null,"The DAO could also allocate ETH off-platform in its multisig wallet or various other contracts across web3. This value is currently impossible to account for in the burn rate given the current version of the Juicebox protocol."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The reserved token list only captures value when the token supply is growing. Once token supply has expanded and the market is satisfied off protocol, reserved token holders are massively incentivized to push the price up towards its limit. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is expensive to mint 51% of all tokens in existence, even without a reserved rate. If this were to happen, the ETH used to mint the token majority would immediately fund an increased burn rate for every token holder from previous cycles. The new influential JBX holder would have to appease a community with potentially significant exit incentive."))),(0,n.kt)("p",null,"This same effect exists if the 51% is bought all-of-the-sudden by thousands of uncoordinated people on the internet."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The DAO (dao.jbx.eth) currently receives 30% of reserved JBX tokens. The DAO is considering committing a percent of this built up supply to circulate among contributors via the DAO's discord. ")),(0,n.kt)("p",null,"It can do so in many ways, one approach is to split the allocation among the addresses on the reserved list, who are then encouraged to split this initial supply entirely between those who they work closest with and who's contributions they want to recognize. Those recipients are in turn encouraged to continue circulating this supply. "),(0,n.kt)("p",null,"The goal is to make sure everyone who is building and maintaining the protocol and ecosystem becomes significant JBX token holders that can formally help the DAO make decisions."),(0,n.kt)("p",null,"If this internal JBX distribution system increases the governance participation of new builders and of those who steward the protocol, then the DAO may benefit from expanding this program by increasing the portion of reserved tokens allocated to the DAO treasury, and reducing the reserved token allocation to other recipients."))}h.isMDXComponent=!0}}]);