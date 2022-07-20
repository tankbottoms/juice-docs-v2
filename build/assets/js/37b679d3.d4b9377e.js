"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[5912],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),h=n,b=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return o?r.createElement(b,i(i({ref:t},p),{},{components:o})):r.createElement(b,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},69157:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={slug:"cross-layer-juicebox-pt-2",title:"Cross-layer Juicebox protocol: follow up #1",authors:["jango"],tags:["protocol","observations"]},i=void 0,l={permalink:"/blog/cross-layer-juicebox-pt-2",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-11-24-cross-layer-juicebox-pt-2.md",source:"@site/blog/2021-11-24-cross-layer-juicebox-pt-2.md",title:"Cross-layer Juicebox protocol: follow up #1",description:"From the original post:",date:"2021-11-24T00:00:00.000Z",formattedDate:"November 24, 2021",tags:[{label:"protocol",permalink:"/blog/tags/protocol"},{label:"observations",permalink:"/blog/tags/observations"}],readingTime:1.87,hasTruncateMarker:!1,authors:[{name:"Jango",title:"JuiceboxDAO Contributor",url:"https://twitter.com/me_jango",imageURL:"https://pbs.twimg.com/profile_images/1414958948189413395/l89bNR2m_400x400.jpg",key:"jango"}],frontMatter:{slug:"cross-layer-juicebox-pt-2",title:"Cross-layer Juicebox protocol: follow up #1",authors:["jango"],tags:["protocol","observations"]},prevItem:{title:"NOTICE: Juicebox V1 inefficiencies",permalink:"/blog/notice-juicebox-fundraise"},nextItem:{title:"Cross-layer Juicebox Protocol",permalink:"/blog/multi-layer-juicebox"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"From the ",(0,n.kt)("a",{parentName:"p",href:"../multi-layer-juicebox/"},"original post"),": "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The simplest option would be to just deploy the same Juicebox protocol in each EVM compatible L2 environment. This forces projects to choose which they would like to operate on, or manage their own complexity if they would like to operate across many. I'm guessing most projects would prefer to operate everywhere, if only it were easy to do so.")),(0,n.kt)("p",null,"What if the simplest option was the best option?"),(0,n.kt)("p",null,"Although deploying the same Juicebox protocol in each EVM compatible L2 environment forces projects to choose which they would like to operate on, it might be most reasonable to pass along this choice and complexity to each project while suggesting thorough operational strategies to weave these isolated environments together at the DAO/social/governance layer."),(0,n.kt)("p",null,"Here are some potential operational guidelines, using JuiceboxDAO as an example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Juicebox protocol is deployed identically on several L2s and side chains. JuiceboxDAO creates a project on each one where fees will be collected and contributions accepted."),(0,n.kt)("li",{parentName:"ul"},"JuiceboxDAO will have different tokens on each chain. JuiceboxDAO membership is composed of a strategy that take each of these tokens into account. Members are responsible for managing the entirety of the DAO's treasury across all chains."),(0,n.kt)("li",{parentName:"ul"},"JuiceboxDAO submits treasury reconfigurations to each chain independently. Each chain can have funding cycles that operate on different schedules, have different token issuance rates, and different ETH distributions. This flexibility can be used to orchestrate arbitrary multi-chain treasury designs, although also introducing management overhead. Extend to new environments responsibly."),(0,n.kt)("li",{parentName:"ul"},"JuiceboxDAO can move its ETH/tokens between environments adhering to the constraints of each chain, leaning on existing and upcoming generalized bridging infrastructure."),(0,n.kt)("li",{parentName:"ul"},"It can deploy converter contracts if it wishes to support conversions between each of its membership tokens.")),(0,n.kt)("p",null,"Any other project could choose to operate on one or many environments where the Juicebox protocol has been deployed. If they choose to operate on many, they would have to manage the complexity of doing so. Once projects have begun experimenting and settling on effective patterns, I'd hope a playbook would emerge as a reference for future projects."),(0,n.kt)("p",null,"Leaving multi-layer coordination for the social layer introduces some operational overhead and risk, but also keeps the protocol layer flexible and simple."))}u.isMDXComponent=!0}}]);