"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[29208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={slug:"configuration-1-reserved-jbx",title:"Configuration #1: Reserved JBX",authors:["jango"],tags:["governance","dao"]},a=void 0,s={permalink:"/blog/configuration-1-reserved-jbx",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-07-26-configuration-1-reserved-jbx/index.md",source:"@site/blog/2021-07-26-configuration-1-reserved-jbx/index.md",title:"Configuration #1: Reserved JBX",description:"The first JuiceboxDAO configuration includes a preprogrammed reserved JBX rate of 10%, with distributions to predetermined recipients.",date:"2021-07-26T00:00:00.000Z",formattedDate:"July 26, 2021",tags:[{label:"governance",permalink:"/blog/tags/governance"},{label:"dao",permalink:"/blog/tags/dao"}],readingTime:1.18,hasTruncateMarker:!1,authors:[{name:"Jango",title:"JuiceboxDAO Contributor",url:"https://twitter.com/me_jango",imageURL:"https://pbs.twimg.com/profile_images/1414958948189413395/l89bNR2m_400x400.jpg",key:"jango"}],frontMatter:{slug:"configuration-1-reserved-jbx",title:"Configuration #1: Reserved JBX",authors:["jango"],tags:["governance","dao"]},prevItem:{title:"Is Juicebox for Whales  \ud83d\udc0b? Apes \ud83e\udda7? Punks \ud83d\udc7e? Creators \ud83c\udfa8? Devs \u2328\ufe0f? Every Etherean \ud83c\uddea\ud83c\uddf9?",permalink:"/blog/is-juicebox-for-whales"},nextItem:{title:"Configuration #1: Payouts",permalink:"/blog/configuration-1-payouts"}},l={authorsImageUrls:[void 0]},c=[{value:"Investors",id:"investors",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The first JuiceboxDAO configuration includes a preprogrammed reserved JBX rate of 10%, with distributions to predetermined recipients."),(0,o.kt)("p",null,"A new supply of JBX is minted each time the project receives a contribution. This JBX goes to a beneficiary address specified by the contributor (usually themselves), with the exception of the reserved tokens. A 10% reserved rate means 10% of these newly minted tokens will be distributable to preprogrammed recipients."),(0,o.kt)("p",null,'As a result, the configured recipients "vest" their JBX at the rate of the project\'s growth instead of a cliff/lock schedule.\n',(0,o.kt)("img",{src:r(91157).Z,width:"932",height:"334"}),"Screenshot from ",(0,o.kt)("a",{parentName:"p",href:"https://juicebox.money/#/p/juicebox"},"https://juicebox.money/#/p/juicebox")),(0,o.kt)("h3",{id:"investors"},"Investors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Jango")," gets ",(0,o.kt)("strong",{parentName:"li"},"40%")," of reserved tokens for architecting the mechanism, writing the contracts, thoroughly testing the ecosystem, leading design and development efforts post-launch, and leading project relations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Peripheralist")," gets ",(0,o.kt)("strong",{parentName:"li"},"40%")," for architecting the front-end repo, publishing juicebox.money, and leading front-end dev work post-launch."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AtomicMieos")," gets ",(0,o.kt)("strong",{parentName:"li"},"10%")," for experimenting with content, and helping shape ideas pre-launch and post-launch."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sage")," gets ",(0,o.kt)("strong",{parentName:"li"},"10%")," for design and illustration work pre-launch and post-launch.")),(0,o.kt)("p",null,"These numbers are all a bit arbitrary. We decided to start off fairly small and fairly even \u2013 it was unclear how the risk profile of pre-launch dev work would compare to post-launch growth and refinement work, and how the Juicebox incentives mechanisms would play out in the wild. As the first funding cycle unfolds, expect a proposed reevaluation of these numbers to better account for risk dynamics and incentives."))}u.isMDXComponent=!0},91157:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-6-b6659af956e76c498744b12684fbf5f8.png"}}]);