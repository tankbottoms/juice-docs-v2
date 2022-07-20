"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[44662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,f=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Discount rate",l={unversionedId:"dev/learn/glossary/discount-rate",id:"dev/learn/glossary/discount-rate",title:"Discount rate",description:"What everyone needs to know",source:"@site/docs/dev/learn/glossary/discount-rate.md",sourceDirName:"dev/learn/glossary",slug:"/dev/learn/glossary/discount-rate",permalink:"/zh/dev/learn/glossary/discount-rate",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/learn/glossary/discount-rate.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Delegate",permalink:"/zh/dev/learn/glossary/delegate"},next:{title:"Funding cycle",permalink:"/zh/dev/learn/glossary/funding-cycle"}},c={},s=[{value:"What everyone needs to know",id:"what-everyone-needs-to-know",level:4},{value:"What you&#39;ll want to know if you&#39;re building",id:"what-youll-want-to-know-if-youre-building",level:4}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discount-rate"},"Discount rate"),(0,o.kt)("h4",{id:"what-everyone-needs-to-know"},"What everyone needs to know"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A discount rate is a percentage configured on each funding cycle that determines by how much the subsequent cycle's ",(0,o.kt)("inlineCode",{parentName:"li"},"weight")," (i.e. exchange rate) should decrease compared to the funding cycle for which the discount rate is set."),(0,o.kt)("li",{parentName:"ul"},"A discount rate is only applied if a new ",(0,o.kt)("inlineCode",{parentName:"li"},"weight")," isn't explicitly set in an upcoming funding cycle reconfiguration."),(0,o.kt)("li",{parentName:"ul"},"A discount rate can be used to automatically decrease token issuance over time. Funding cycles with higher ",(0,o.kt)("inlineCode",{parentName:"li"},"discountRate"),"s and/or shorter ",(0,o.kt)("inlineCode",{parentName:"li"},"duration"),"s will have token issuance decrease faster than those with smaller ",(0,o.kt)("inlineCode",{parentName:"li"},"discountRate"),"s and/or longer ",(0,o.kt)("inlineCode",{parentName:"li"},"duration"),"s.")),(0,o.kt)("h4",{id:"what-youll-want-to-know-if-youre-building"},"What you'll want to know if you're building"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A discount rate can be specified in a funding cycle through the ",(0,o.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/launchprojectfor"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController.launchProjectFor(...)"))," or ",(0,o.kt)("a",{parentName:"li",href:"/zh/dev/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController.reconfigureFundingCyclesOf(...)"))," transactions.")))}d.isMDXComponent=!0}}]);