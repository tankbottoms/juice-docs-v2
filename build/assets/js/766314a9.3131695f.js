"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[67088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Tokens",s={unversionedId:"dev/learn/glossary/tokens",id:"dev/learn/glossary/tokens",title:"Tokens",description:"What everyone needs to know",source:"@site/docs/dev/learn/glossary/tokens.md",sourceDirName:"dev/learn/glossary",slug:"/dev/learn/glossary/tokens",permalink:"/dev/learn/glossary/tokens",draft:!1,editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/docs/dev/learn/glossary/tokens.md",tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"Splits",permalink:"/dev/learn/glossary/splits"},next:{title:"Getting started",permalink:"/dev/build/getting-started"}},l={},c=[{value:"What everyone needs to know",id:"what-everyone-needs-to-know",level:4},{value:"What you&#39;ll want to know if you&#39;re building",id:"what-youll-want-to-know-if-youre-building",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tokens"},"Tokens"),(0,o.kt)("h4",{id:"what-everyone-needs-to-know"},"What everyone needs to know"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By default, all payments that come in to a Juicebox project mint tokens. These tokens are distributed to a beneficiary specified by the payer, and to any addresses specified in the project's reserved token list. The amount of tokens minted depends on the amount paid and the ",(0,o.kt)("inlineCode",{parentName:"li"},"weight")," (i.e. exchange rate) of the project's current funding cycle. Projects can override or extended this default behavior using ",(0,o.kt)("a",{parentName:"li",href:"/dev/learn/glossary/data-source"},"data sources"),"."),(0,o.kt)("li",{parentName:"ul"},"By default, the protocol allocates tokens to recipients using an internal accounting mechanism in ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbtokenstore/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBTokenStore")),". These are fungible but do not conform to the ERC-20 standard, and as such cannot be composed with ecosystem ERC-20/ERC-721 marketplaces like AMMs and Opensea. Their balances can be used for voting on various platforms."),(0,o.kt)("li",{parentName:"ul"},"Projects can issue their own ERC-20 token directly from the protocol to use as its token. Projects can also bring their own token as long as it conforms to the ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/interfaces/ijbtoken"},(0,o.kt)("inlineCode",{parentName:"a"},"IJBToken"))," interface and uses 18 decimal fixed point accounting. This makes it possible to use ERC-1155's or custom tokens."),(0,o.kt)("li",{parentName:"ul"},"Once a project has issued a token, token holders can export tokens from the protocol's internal accounting mechanism in ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/contracts/jbtokenstore/"},(0,o.kt)("inlineCode",{parentName:"a"},"JBTokenStore"))," to their wallet to use across Web3. A project's owner can also force project tokens to be issued directly to the exported version. This bypasses the internal accounting mechanism, but slightly increases gas costs for transactions that requires tokens to be minted."),(0,o.kt)("li",{parentName:"ul"},"By default, tokens can be ",(0,o.kt)("a",{parentName:"li",href:"/dev/learn/glossary/redemption-rate"},"redeemed")," by holders to reclaim a portion of what's in the project's ",(0,o.kt)("a",{parentName:"li",href:"/dev/learn/glossary/overflow"},"overflow"),". The amount of overflow claimable is determined by the ",(0,o.kt)("a",{parentName:"li",href:"/dev/learn/glossary/redemption-rate"},(0,o.kt)("inlineCode",{parentName:"a"},"redemptionRate"))," of the project's current funding cycle. Projects can override or extend this default behavior. Redeeming tokens burns them, shrinking the total supply."),(0,o.kt)("li",{parentName:"ul"},"A project owner can mint and distribute more of the project's tokens on demand. This behavior must be explicitly allowed on a per-funding cycle basis."),(0,o.kt)("li",{parentName:"ul"},"A project can use its tokens however it wishes. It can be purely ceremonial, used for governance, used for airdrops, or whatever.")),(0,o.kt)("h4",{id:"what-youll-want-to-know-if-youre-building"},"What you'll want to know if you're building"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tokens can be minted on-demand by project owners or their operators by calling ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/write/minttokensof"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController.mintTokensOf(...)")),". The ability to do so must be explicitly turned on via a funding cycle configuration metadata parameter."),(0,o.kt)("li",{parentName:"ul"},"Tokens can be burned on-demand by holders by calling ",(0,o.kt)("a",{parentName:"li",href:"/dev/api/contracts/or-controllers/jbcontroller/write/burntokensof"},(0,o.kt)("inlineCode",{parentName:"a"},"JBController.burnTokensOf(...)")),". The ability to do so can be turned off via a funding cycle configuration metadata parameter.")))}u.isMDXComponent=!0}}]);