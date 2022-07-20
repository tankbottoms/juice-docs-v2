"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[54229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,y=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="Funding cycle",l={unversionedId:"dev/learn/glossary/funding-cycle",id:"dev/learn/glossary/funding-cycle",title:"Funding cycle",description:"What everyone needs to know",source:"@site/docs/dev/learn/glossary/funding-cycle.md",sourceDirName:"dev/learn/glossary",slug:"/dev/learn/glossary/funding-cycle",permalink:"/zh/dev/learn/glossary/funding-cycle",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/learn/glossary/funding-cycle.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Discount rate",permalink:"/zh/dev/learn/glossary/discount-rate"},next:{title:"Operator",permalink:"/zh/dev/learn/glossary/operator"}},c={},u=[{value:"What everyone needs to know",id:"what-everyone-needs-to-know",level:4},{value:"What you&#39;ll want to know if you&#39;re building",id:"what-youll-want-to-know-if-youre-building",level:4}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"funding-cycle"},"Funding cycle"),(0,a.kt)("h4",{id:"what-everyone-needs-to-know"},"What everyone needs to know"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Projects can configure funding cycles to create rules to follow over set amounts of time."),(0,a.kt)("li",{parentName:"ul"},"A funding cycle's parameters can't be changed while it is in progress, but the project owner can propose reconfigurations to an upcoming cycle at any time."),(0,a.kt)("li",{parentName:"ul"},"Funding cycles roll over automatically. If there is a reconfiguration in place and it has been approved by the current cycle's ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/learn/glossary/ballot"},"ballot"),", it will be used. Otherwise, a copy of the current funding cycle will be used with an updated ",(0,a.kt)("inlineCode",{parentName:"li"},"start")," time and discounted ",(0,a.kt)("inlineCode",{parentName:"li"},"weight"),"."),(0,a.kt)("li",{parentName:"ul"},"The mechanics of each project can vary dramatically depending on how its funding cycles are configured over time. ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/learn/glossary/project"},"Become familiar with how projects work")," to get a better understanding of how these decisions can be made.")),(0,a.kt)("h4",{id:"what-youll-want-to-know-if-youre-building"},"What you'll want to know if you're building"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A funding cycle is represented as a ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/data-structures/jbfundingcycle"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycle"))," data structure."),(0,a.kt)("li",{parentName:"ul"},"It is possible to create funding cycles that allow for total flexibility, total rigidity, or anything in between. Flexibility can be useful for rapid experimentation and evolution, whereas rigidity can be useful for dependability and trust. Anyone can configure a project's first funding cycle alongside creating the project with a call to ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor"},(0,a.kt)("inlineCode",{parentName:"a"},"JBController.launchProjectFor(...)")),", and the project's owner can issue a reconfiguration to subsequent funding cycles with a call to ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof"},(0,a.kt)("inlineCode",{parentName:"a"},"JBController.reconfigureFundingCyclesOf(...)")),"."),(0,a.kt)("li",{parentName:"ul"},"If a project has a current funding cycle, it can be found by reading from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/currentof"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore.currentOf(...)")),". A project's upcoming funding cycle can be found by reading from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/queuedof"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore.queuedOf(...)")),". The funding cycles that carry each original configuration can be found by reading from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/get"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore.get(...)")),". ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/currentfundingcycleof"},(0,a.kt)("inlineCode",{parentName:"a"},"JBController.currentFundingCycleOf(...)"))," and ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/read/queuedfundingcycleof"},(0,a.kt)("inlineCode",{parentName:"a"},"JBController.queueFundingCycleOf(...)"))," can also be used to get a reference to the funding cycle's metadata alongside."),(0,a.kt)("li",{parentName:"ul"},"A funding cycle's ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/learn/glossary/ballot"},(0,a.kt)("inlineCode",{parentName:"a"},"ballot"))," property is useful for setting rules by which any proposed reconfiguration to subsequent cycles must adhere. This is useful for community oriented projects as it can prevent a project owner from maliciously updating an upcoming cycle's configuration moments before it begins without the broader community's consent. A funding cycle's ballot status, which is a ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/enums/jbballotstate"},(0,a.kt)("inlineCode",{parentName:"a"},"JBBallotState"))," enumeration, can be found by reading from ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/read/currentballotstateof"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore.currentBallotStateOf(...)")),"."),(0,a.kt)("li",{parentName:"ul"},"Look through the ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbfundingcyclestore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBFundingCycleStore"))," contract for a complete list of relevant read functions, write functions, and emitted events. Several properties of ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBController"))," and ",(0,a.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/jbsingletokenpaymentterminalstore/"},(0,a.kt)("inlineCode",{parentName:"a"},"JBSingleTokenPaymentTerminalStore"))," also store information relative to funding cycle configurations.")))}d.isMDXComponent=!0}}]);