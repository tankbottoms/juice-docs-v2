"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[80902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={slug:"juicebox-postmortem-of-low-severity-bug-discovered-8-18-2021",title:"Juicebox postmortem: Low severity bug discovered 8/18/2021",authors:["jango"],tags:["protocol"]},r=void 0,s={permalink:"/blog/juicebox-postmortem-of-low-severity-bug-discovered-8-18-2021",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-08-19-juicebox-postmortem-of-low-severity-bug-discovered-8-18-2021/index.md",source:"@site/blog/2021-08-19-juicebox-postmortem-of-low-severity-bug-discovered-8-18-2021/index.md",title:"Juicebox postmortem: Low severity bug discovered 8/18/2021",description:"I discovered a low severity bug in the Juicebox protocol last night that affects projects that have received payments while configured with a reserved rate of 0% who later reconfigure the reserved rate to anything greater than 0%.",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"protocol",permalink:"/blog/tags/protocol"}],readingTime:6.52,hasTruncateMarker:!1,authors:[{name:"Jango",title:"JuiceboxDAO Contributor",url:"https://twitter.com/me_jango",imageURL:"https://pbs.twimg.com/profile_images/1414958948189413395/l89bNR2m_400x400.jpg",key:"jango"}],frontMatter:{slug:"juicebox-postmortem-of-low-severity-bug-discovered-8-18-2021",title:"Juicebox postmortem: Low severity bug discovered 8/18/2021",authors:["jango"],tags:["protocol"]},prevItem:{title:"Juicebox V2: Protocol adjustments useful for adding treasury tokens to AMMs",permalink:"/blog/adding-juicebox-treasury-tokens-to-amms"},nextItem:{title:"Juicebox: Funding Cycle #3 proposal",permalink:"/blog/funding-cycle-3-proposal"}},l={authorsImageUrls:[void 0]},c=[{value:"Context",id:"context",level:2},{value:"Technical details",id:"technical-details",level:2},{value:"Execution",id:"execution",level:2},{value:"Takeaway",id:"takeaway",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I discovered a low severity bug in the Juicebox protocol last night that affects projects that have received payments while configured with a reserved rate of 0% who later reconfigure the reserved rate to anything greater than 0%."),(0,i.kt)("p",null,"A temporary work around has been identified, and a game plan for removing the bug from the system is in the works."),(0,i.kt)("p",null,"To mitigate potential exploits before a patch is issued, an exploit breakout team decided to mint 0.5% of total SHARK supply (1,889,066.675747 SHARK) into the multi-sig wallet. This course of action was chosen to prevent further issues. These tokens can be burned if desired."),(0,i.kt)("p",null,"What follows is how I discovered the bug, the technical details about it, and what our next steps will be."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TLDR:**"),"Until further notice, projects are not advised to set their reserved rate to 0% if they intend to raise their reserved rate in the near future.**"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"To give them time to plan for for what's next, SharkDAO needed a way to pause payments and new members coming in through Juicebox. Juicebox doesn't support a ",(0,i.kt)("inlineCode",{parentName:"p"},"pause")," function in its ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xd569D3CCE55b71a8a3f3C418c329A66e5f714431"},"TerminalV1")," contract, so Peripheralist and I had to improvise alongside the SharkDAO community.\n",(0,i.kt)("img",{src:n(77985).Z,width:"1908",height:"640"}),"\nFirst step was to remove the payment form from the UI. This keeps most people from sending in contributions, but someone dedicated to sending a payment would eventually find that the Juicebox contract could still be interacted with directly through other interfaces like Etherscan."),(0,i.kt)("p",null,"To even the playing field, I had the idea to raise SharkDAO's reserved rate to 100%, meaning all payments coming in through the contract would allocate 100% of minted SHARK tokens to preprogrammed addresses instead of to the paying address. With no SHARK incentive for contributing payments, the community would be disincentivized to pay through back-door means, effectively creating the desired ",(0,i.kt)("inlineCode",{parentName:"p"},"pause")," functionality. If anyone did send payments, we could easily refund them the money."),(0,i.kt)("p",null,"After running this plan by SharkDAO at a Sharktank town hall meeting, we decided to move forward with it. We would allocate any SHARK minted during this paused period to the multi-sig, which could later be burned if needed."),(0,i.kt)("p",null,"A few details to note: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SharkDAO's reserved rate has been set to 0% since its start. "),(0,i.kt)("li",{parentName:"ul"},"SharkDAO does not use funding cycles with preset durations, meaning changes can be executed on-demand. "),(0,i.kt)("li",{parentName:"ul"},"SharkDAO's Juicebox project is owned by a Gnosis multi-sig requiring 3/5 signatures. I'm one of the signatories.")),(0,i.kt)("p",null,"Right after the call, I got together with multi-sig holders to execute the plan. After one transaction to TerminalV1's ",(0,i.kt)("inlineCode",{parentName:"p"},"configure")," function, the reserved rate was successfully updated. I immediately checked the UI to see if things were in order \u2013 thats when I noticed that after having set the reserved rate to 100%, it was now possible to mint and distribute 100% of the current token supply to the preconfigured destination (the multi-sig). Since this distribute transaction is public, anyone who triggered this would effectively double the SHARK supply, and would leave us with unnecessary work after the fact to burn this unintended supply from the multi-sig and communicate the issue to the community."),(0,i.kt)("p",null,"I immediately instructed the multi-sig panel to send another ",(0,i.kt)("inlineCode",{parentName:"p"},"configure")," transaction to TerminalV1 to change the reserved rate back to 0%, and explained that I had to double check something before we could move forward with the plan. This reverted us to the previous state, where payments made to the contract directly would bypass the intended ",(0,i.kt)("inlineCode",{parentName:"p"},"pause")," that was being communicated in the UI."),(0,i.kt)("h2",{id:"technical-details"},"Technical details"),(0,i.kt)("p",null,"The root of the problem was fairly obvious to me once I noticed the distributable supply in the UI. Once we were back at a safer state, I began work to confirm my assumptions and test a workaround."),(0,i.kt)("p",null,"Many parts of the Juicebox mechanism's design are gas optimized, meaning the transactions that are most frequently called are responsible for fewer state changes than those that are infrequently called. The ",(0,i.kt)("inlineCode",{parentName:"p"},"pay")," transaction is by far the most frequently called, so very few state changes take place within this function: the payment is received, and the resulting amount of treasury tokens are minted to the payer in a staked format."),(0,i.kt)("p",null,"Importantly, the reserved token amount is ",(0,i.kt)("em",{parentName:"p"},"not")," minted during a payment. Instead, this amount is calculated later when the ",(0,i.kt)("inlineCode",{parentName:"p"},"printReservedTickets")," transaction is called. It does so by taking the current token total supply and minting an appropriate amount of new tokens to the preconfigured reserved addresses such that the reserved rate is respected. Most importantly, the mechanism then keeps track of the fact that it has minted reserved tokens for the current token supply so that it doesn't create extra reserved tokens later. Given perfect information, it is in the economic best interest of the project to wait to call ",(0,i.kt)("inlineCode",{parentName:"p"},"printReservedTickets")," if the reserved rate is going to increase, and in the community's interest to call it before an increase. The opposite is also true. This dynamic allows the protocol to offload a high-gas storage operation from a frequently called ",(0,i.kt)("inlineCode",{parentName:"p"},"pay")," function onto less frequently called operations."),(0,i.kt)("p",null,"Unfortunately, when the reserved rate is 0%, the ",(0,i.kt)("inlineCode",{parentName:"p"},"printReservedTickets")," call assumes there's no work to do, and returns before it has had a chance to update the tracker. This prevents anyone from locking in the rate before it is increased. In the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol/juicehouse/blob/3555d7baf7fa8ba4bc350140201805c740e3df4e/packages/hardhat/contracts/TerminalV1.sol#L968"},"TerminalV1 file"),", the solution is literally just putting line 968 below line 977:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55518).Z,width:"1870",height:"512"}),"Current TerminalV1 implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"printReservedTickets")),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("p",null,"I immediately proposed two workarounds to the SharkDAO admins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep the contract open."),(0,i.kt)("li",{parentName:"ul"},"Set the reserved rate to the minimum possible value (0.5%), distribute the allocated reserved tokens to the multi-sig, then move the reserved rate to 100% as intended.")),(0,i.kt)("p",null,"We decided to go with the second option since we needed to set a fair playing field to community members looking to pay, and we could later burn the relatively small amount of SHARK minted to the multi-sig."),(0,i.kt)("p",null,"I then spent a few hours recreating the the original bug in our integration test suite, and wrote an integration test for the proposed solution to confirm it would work as expected (I was making extra sure of everything at this point in the evening.) Once everything was confirmed on my end, I got together with the multi-sig holders to execute the three transactions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Change the reserved rate to 0.5%."),(0,i.kt)("li",{parentName:"ol"},"Distribute reserved treasury tokens to the multi-sig. (Anyone can trigger this, so Xaix did it from his personal wallet.)"),(0,i.kt)("li",{parentName:"ol"},"Change the reserved rate to 100%.")),(0,i.kt)("p",null,"The side effect is that 1,889,066.675747 SHARK were minted to the multi-sig. Here's a screenshot of what the UI looked like after step 1:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55192).Z,width:"1866",height:"907"}),(0,i.kt)("img",{src:n(32303).Z,width:"944",height:"268"}),"\nAnd here's what it looks like now:\n",(0,i.kt)("img",{src:n(56948).Z,width:"978",height:"340"}),"\nWe got all of this done in about 2.5 hours."),(0,i.kt)("h2",{id:"takeaway"},"Takeaway"),(0,i.kt)("p",null,"Despite having written extensive unit, integration, and load tests, this condition fell through the cracks. I will keep stressing to the community that Juicebox is still experimental software with high risks. I'm confident in the way it's built and am committed to its improvement, but I'm not going to pretend that it is perfect."),(0,i.kt)("p",null,"The good news is that TerminalV1 has a built in mechanism to allow projects to choose to migrate to new terminal contracts that have been approved by JuiceboxDAO's governance, so bugs like this can be fixed. "),(0,i.kt)("p",null,"We are now working around the clock to get a TerminalV1_1 safely set up for migration, and extensively tested."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the meantime, projects are not advised to set their reserved rate to 0% if they intend to raise their reserved rate in the near future.")),(0,i.kt)("p",null,"Next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deploy TerminalV1_1 that patches this bug."),(0,i.kt)("li",{parentName:"ul"},"Consider building a version of the Juicebox Terminal contract that supports pausing payments."),(0,i.kt)("li",{parentName:"ul"},"Seek more code reviews and audits, while offering bug bounties to hackers who want to help.")))}h.isMDXComponent=!0},32303:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Screen-Shot-2021-08-19-at-12.41.21-AM-845d3cdce886e38c2c7d5c7d5b53e685.png"},55192:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Screen-Shot-2021-08-19-at-12.43.52-AM-1-80276cf97948f7bf3b9518bae0600ae8.png"},55518:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-1-528644694da941466960bb9696b7393f.png"},56948:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-2-d312e6ace88d653ee58dd3e01c574e29.png"},77985:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-d29654ae27cb9fb8a8daeb87c91656b5.png"}}]);