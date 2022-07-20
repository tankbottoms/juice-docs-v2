"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[39311],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(o),g=r,h=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return o?n.createElement(h,a(a({ref:t},u),{},{components:o})):n.createElement(h,a({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},55470:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={slug:"juicebox-governance",title:"Juicebox Governance",authors:["jango"],tags:["governance","dao"]},a=void 0,c={permalink:"/zh/blog/juicebox-governance",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-08-02-juicebox-governance.md",source:"@site/blog/2021-08-02-juicebox-governance.md",title:"Juicebox Governance",description:"The Juicebox protocol was launched with a governance contract controlled by a multisig wallet. There are 4 EOAs on the multisig, and 2 of the 4 must approve a transaction for it to be submitted to the Ethereum blockchain. I am a signer, along with @peripheralist, @nervetrip, and @NMieos.",date:"2021-08-02T00:00:00.000Z",formattedDate:"2021\u5e748\u67082\u65e5",tags:[{label:"governance",permalink:"/zh/blog/tags/governance"},{label:"dao",permalink:"/zh/blog/tags/dao"}],readingTime:1.485,hasTruncateMarker:!1,authors:[{name:"Jango",title:"JuiceboxDAO Contributor",url:"https://twitter.com/me_jango",imageURL:"https://pbs.twimg.com/profile_images/1414958948189413395/l89bNR2m_400x400.jpg",key:"jango"}],frontMatter:{slug:"juicebox-governance",title:"Juicebox Governance",authors:["jango"],tags:["governance","dao"]},prevItem:{title:"JuiceboxDAO Roadmap 8/3/2021",permalink:"/zh/blog/juicebox-roadmap-8-3-2021"},nextItem:{title:"Configuration #1: Ballot",permalink:"/zh/blog/configuration-1-ballot"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Juicebox protocol was launched with a governance contract controlled by a multisig wallet. There are 4 EOAs on the multisig, and 2 of the 4 must approve a transaction for it to be submitted to the Ethereum blockchain. I am a signer, along with @peripheralist, @nervetrip, and @NMieos. "),(0,r.kt)("p",null,"This multisig wallet has the power to propose reconfigurations to the JuiceboxDAO's Juicebox project."),(0,r.kt)("p",null,"The multisig vows to make decisions honoring the community's intent, but it is still ambiguous how the community's intent will be captured going forward. For the next few weeks, expect reconfigurations discussions to be lead by the founding contributors and take community discussion into account. "),(0,r.kt)("p",null,"Decisions made by this multisig wallet can only affect the JuiceboxDAO's treasury, not of projects built using the Juicebox protocol."),(0,r.kt)("p",null,"To be clear, I absolutely do not want to be a multisig signer long into the future \u2013 I feel I have already been entrusted with too much influence over the project's direction as a protocol developer and active community member. I also recognize and am OK with the fact that I am among the best people right now to approve of decisions that impact the treasury, and so I will carry on multisig duties as long as the community needs me to. After all, the project is still new to the party and finding its groove."),(0,r.kt)("p",null,"My main job right now is to help the project find its groove. This means helping out core contributors of other projects who have expressed interest using the Juicebox protocol, being a supporting community member of projects who have already integrated the Juicebox protocol, and identifying yet-to-be-built services that each community who uses the Juicebox protocol could benefit from while proposing ways for JuiceboxDAO to use our resources to address these needs."))}p.isMDXComponent=!0}}]);