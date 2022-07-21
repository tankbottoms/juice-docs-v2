"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[72256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=o,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={slug:"juicebox-funding-cycle-2-proposal",title:"Juicebox: Funding Cycle #2 proposal",authors:["jango"],tags:["governance","dao"]},i=void 0,l={permalink:"/blog/juicebox-funding-cycle-2-proposal",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-08-06-juicebox-funding-cycle-2-proposal.md",source:"@site/blog/2021-08-06-juicebox-funding-cycle-2-proposal.md",title:"Juicebox: Funding Cycle #2 proposal",description:"JuiceboxDAO's second funding cycle will have the following goals:",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"governance",permalink:"/blog/tags/governance"},{label:"dao",permalink:"/blog/tags/dao"}],readingTime:2.375,hasTruncateMarker:!1,authors:[{name:"Jango",title:"JuiceboxDAO Contributor",url:"https://twitter.com/me_jango",imageURL:"https://pbs.twimg.com/profile_images/1414958948189413395/l89bNR2m_400x400.jpg",key:"jango"}],frontMatter:{slug:"juicebox-funding-cycle-2-proposal",title:"Juicebox: Funding Cycle #2 proposal",authors:["jango"],tags:["governance","dao"]},prevItem:{title:"Juicebox: Funding Cycle #3 proposal",permalink:"/blog/funding-cycle-3-proposal"},nextItem:{title:"Juicebox Observations 8/3/2021",permalink:"/blog/juicebox-observations-8-3-2021"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JuiceboxDAO's second funding cycle will have the following goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Continue working with projects that have expressed interest in launching using the Juicebox protocol as its treasury. There's at least one project slated to deploy over the next few weeks."),(0,o.kt)("li",{parentName:"ul"},"Get the community organized: Discord, voting, roles, etc. We will organize and execute a community vote to determine the configuration of FC#3."),(0,o.kt)("li",{parentName:"ul"},"Build UIs for projects to access back office stuff like creating direct payment addresses, transfer project ownership, and allow operators to access UI components currently only accessible to owners."),(0,o.kt)("li",{parentName:"ul"},"Get the hang of writing Dune analytics queries to start visualizing Juicebox protocol data. The goal is to provide this data to projects using Juicebox."),(0,o.kt)("li",{parentName:"ul"},"Continue outreach efforts to broader Ethereum communities on Twitter and Discord.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"I propose the following reconfiguration:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Duration:")," 14 days\nLet's experiment with a shorter cycle to see what happens. It gives us scope for one solid sprint with the goal of involving more of the community in the next reconfiguration decision. "),(0,o.kt)("p",null,"As the project matures, I expect more planned out, longer cycles instead of these shorter ones."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ballot:")," 3 day buffer\nA reconfiguration proposal must be submitted 3 days before the end of the funding cycle."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discount rate:")," 16% (-4%)\nThe discount rate should be reduced by 4%. This continues to give those who commit funds during FC#2 a good discounted rate to adjust for the risk of being early, but begins the process of tapering the rate off."),(0,o.kt)("p",null,"The goal is to reduce the rate over time to make a contribution during FC#1 valued around 2X the same contribution made 6 months later. "),(0,o.kt)("p",null,"It pays to be early and to take the risk sooner rather than later."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bonding curve:")," 60% (no change)\nThere's relatively little overflow, and the JBX distribution is still narrow. No need to change this."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payouts: "),"$10,750 total"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"jango:")," $4k\nProject lead."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"peripheralist:")," $2.5k\nFront end lead."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zeugh:")," $1K\nOrganize and lead community."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WAGMI Studios:")," $1.25k\nEducational content and art."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Figma"),", ",(0,o.kt)("strong",{parentName:"li"},"Infura"),", ",(0,o.kt)("strong",{parentName:"li"},"Gitbook"),", & ",(0,o.kt)("strong",{parentName:"li"},"Fleek")," subscriptions cost around $500 monthly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"exekias: "),"$750\nDev contributor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"galbi: "),"$500\nDev contributor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nervetrip: "),"$250\nDev contributor.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reserved rate:")," 25% (+15%)\nThe reserve rate should be increased 15%. This gives me and my fellow founding contributors room to add a slight incentive bump for ourselves (we've been busier than we imagined right out of the gate), and to allocate new distributions. It also puts slightly more tokens in the hands of core contributors to help guide the project in the early stages, while still giving the bulk of tokens to external supporters to diversify our token holders."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reserved token distribution:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"jango: "),"35%"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"peripheralist:")," 35%"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WAGMI Studios:")," 10%"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zeugh:")," 10%"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"exekias"),": 7.5%"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"misc"),": 2.5% - used for on-demand incentives by the multisig.")))}p.isMDXComponent=!0}}]);