"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[92796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3},i="Token",l={unversionedId:"user/project/token",id:"user/project/token",title:"Token",description:"Overview",source:"@site/docs/user/project/token.md",sourceDirName:"user/project",slug:"/user/project/token",permalink:"/user/project/token",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/user/project/token.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user",previous:{title:"Funding",permalink:"/user/project/funding"},next:{title:"Rules",permalink:"/user/project/rules"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token"},"Token"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When people pay a project, project tokens are minted. ",(0,o.kt)("strong",{parentName:"p"},"Token")," parameters dictate how those tokens work."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token balances are tracked in the Juicebox contracts by default. If desired, project owners can issue an ",(0,o.kt)("a",{parentName:"li",href:"https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/"},"ERC-20")," on ",(0,o.kt)("a",{parentName:"li",href:"https://juicebox.money"},"juicebox.money")," once their project is deployed. This ERC-20 can be claimed by community members."),(0,o.kt)("li",{parentName:"ul"},"Project tokens are often used for voting in governance, gated access to a Discord server, an NFT mint, or something else."),(0,o.kt)("li",{parentName:"ul"},"These rules can be updated over time.")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Initial mint rate")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"The number of project tokens minted when 1 ETH is contributed."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Reserved tokens")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"Tokens are minted when people pay your project. Reserved tokens can be used to control where those tokens go.",(0,o.kt)("br",null),(0,o.kt)("br",null),"By default, all tokens go to the person that pays your project. If the reserved rate is set to 30%, the person that pays your project will only receive 70% of the tokens minted by that payment. The remaining 30% of tokens will go to Ethereum addresses and Juicebox projects chosen by the project owner.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Project owners often use reserved tokens to ensure that core project members maintain a voice in governance as a project grows. A higher reserve rate makes a project more resilient to takeover, but reduces the incentive for individuals to contribute to your project (as they will receive fewer project tokens). A lower reserve rate will do the opposite."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Discount rate")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"The percentage your mint rate will decrease by every funding cycle. In other words: ",(0,o.kt)("em",{parentName:"td"},"how much more expensive do project tokens become each funding cycle?"),(0,o.kt)("br",null),(0,o.kt)("br",null),"If a project has an intial mint rate of 1,000,000 tokens per ETH and a discount rate of 10%, that project's mint rate will be 900,000 tokens per ETH in its second funding cycle, and 810,000 tokens per ETH in the funding cycle after that. This mechanic encourages early contributions, but may also discourage later contributors if too extreme."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Redemption rate")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"By default, tokens can be redeemed for a proportional amount of ",(0,o.kt)("a",{parentName:"td",href:"/dev/learn/glossary/overflow"},"overflow"),".",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Funds exceeding your costs/payouts are considered overflow."),(0,o.kt)("li",null,"By default, a token holder who redeems ten percent of all project tokens will receive ten percent of the overflow.")),"The redemption rate alters this behaviour\u2014if set to 60%, project tokens are only redeemable for 60% of the overflow they would otherwise correspond to. This means that somebody redeeming 10% of project tokens would only receive ~6% of the overflow, leaving the other ~4% in the treasury.",(0,o.kt)("br",null),(0,o.kt)("br",null)," The funds remaining in the treasury increase the proportional value of other tokens. The redemption rate mechanic rewards individuals who redeem their project tokens later rather than earlier."))))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("img",{src:"/img/project-guide/token0.png",width:"60%",style:{display:"block",margin:"auto"}}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("i",null,"A mint rate displayed on ",(0,o.kt)("a",{href:"https://juicebox.money"},"juicebox.money"))),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/project-guide/token1.png",width:"70%",style:{display:"block",margin:"auto"}}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("i",null,"Reserved tokens on ",(0,o.kt)("a",{href:"https://juicebox.money"},"juicebox.money"))),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/project-guide/token2.png",width:"60%",style:{display:"block",margin:"auto"}}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("i",null,"Token incentive information on ",(0,o.kt)("a",{href:"https://juicebox.money"},"juicebox.money"))))}u.isMDXComponent=!0}}]);