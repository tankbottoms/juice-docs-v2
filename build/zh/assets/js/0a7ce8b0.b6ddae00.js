"use strict";(self.webpackChunkjuice_docs_v_2=self.webpackChunkjuice_docs_v_2||[]).push([[85002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,h=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={slug:"dao-tooling-101",title:"DAO \u5de5\u5177\u5165\u95e8",authors:["aeolian"],tags:["ecosystem","guide"]},l=void 0,i={permalink:"/zh/blog/dao-tooling-101",editUrl:"https://github.com/jbx-protocol/juice-docs-v2/blob/main/blog/2021-12-06-dao-tooling-101/index.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-12-06-dao-tooling-101/index.md",title:"DAO \u5de5\u5177\u5165\u95e8",description:"\u8fdb\u5165\u5230\u53bb\u4e2d\u5fc3\u5316\u81ea\u6cbb\u7ec4\u7ec7\uff08DAO\uff09\u7684\u4e16\u754c\u5c31\u50cf\u6253\u5f00\u4e86\u7eb3\u5c3c\u4e9a\u4f20\u5947\u4e16\u754c\u6ce81\u7684\u5927\u95e8\u4e00\u6837\uff1a\u5b83\u4ee4\u4eba\u611f\u5230\u6fc0\u52a8\u53c8\u56f0\u60d1\uff0c\u800c\u4e14\u56e0\u4e3a\u6d89\u53ca\u5230\u771f\u91d1\u767d\u94f6\uff0c\u5b83\u8fd8\u6709\u51e0\u5206\u552c\u4eba\u3002",date:"2021-12-06T00:00:00.000Z",formattedDate:"2021\u5e7412\u67086\u65e5",tags:[{label:"ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"guide",permalink:"/zh/blog/tags/guide"}],readingTime:11.84,hasTruncateMarker:!1,authors:[{name:"Aeolian",title:"Peel Contributor",url:"https://twitter.com/aeolianeth",imageURL:"https://pbs.twimg.com/profile_images/1510052173073510401/14_Uoxzy_400x400.jpg",key:"aeolian"}],frontMatter:{slug:"dao-tooling-101",title:"DAO \u5de5\u5177\u5165\u95e8",authors:["aeolian"],tags:["ecosystem","guide"]},prevItem:{title:"\u89c2\u5bdf: JBX \u4ee3\u5e01\u73b0\u72b6",permalink:"/zh/blog/state-of-jbx"},nextItem:{title:"Juicebox protocol tokenomics",permalink:"/zh/blog/juicebox-protocol-tokenomics"}},p={authorsImageUrls:[void 0]},s=[{value:"DAO \u662f\u505a\u4ec0\u4e48\u7684\uff1f",id:"dao-\u662f\u505a\u4ec0\u4e48\u7684",level:2},{value:"DAO \u5806\u6808",id:"dao-\u5806\u6808",level:2},{value:"Juicebox",id:"juicebox",level:3},{value:"Gnosis",id:"gnosis",level:3},{value:"Snapshot",id:"snapshot",level:3},{value:"Aragon",id:"aragon",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fdb\u5165\u5230\u53bb\u4e2d\u5fc3\u5316\u81ea\u6cbb\u7ec4\u7ec7\uff08DAO\uff09\u7684\u4e16\u754c\u5c31\u50cf\u6253\u5f00\u4e86\u7eb3\u5c3c\u4e9a\u4f20\u5947\u4e16\u754c",(0,a.kt)("sup",null,(0,a.kt)("a",{parentName:"p",href:"#%E6%B3%A81"},"\u6ce81")),"\u7684\u5927\u95e8\u4e00\u6837\uff1a\u5b83\u4ee4\u4eba\u611f\u5230\u6fc0\u52a8\u53c8\u56f0\u60d1\uff0c\u800c\u4e14\u56e0\u4e3a\u6d89\u53ca\u5230\u771f\u91d1\u767d\u94f6\uff0c\u5b83\u8fd8\u6709\u51e0\u5206\u552c\u4eba\u3002"),(0,a.kt)("p",null,"2021\u5e74\u672b\u770b\u8d77\u6765\u662f DAO \u53d1\u5c55\u7684\u524d\u6cbf\u9636\u6bb5\uff0c\u6211\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\uff0c\u5927\u5bb6\u6b63\u5728\u63cf\u753b\u5173\u4e8e DAO \u7684\u521b\u5efa\u548c\u6cbb\u7406\u7684\u5404\u79cd\u8303\u4f8b\u548c\u73a9\u6cd5\u3002"),(0,a.kt)("p",null,"\u7279\u522b\u662fDAO\u5806\u6808 --- \u8fd0\u8425DAO\u6240\u9700\u7684\u4e00\u6574\u5957\u8f6f\u4ef6\u5de5\u5177 --- \u6b63\u5728\u65e5\u8d8b\u6210\u719f\u3002\u8fd9\u65b9\u9762\u7684\u4e00\u4e2a\u4f8b\u5b50\u5c31\u662f Juicebox\uff0c\u5b83\u4f5c\u4e3a\u4e00\u4e2a DAO \u7684\u91d1\u5e93\u7ba1\u7406\u534f\u8bae\uff0c\u6700\u8fd1\u88ab ",(0,a.kt)("a",{parentName:"p",href:"https://juicebox.money/#/p/constitutiondao"},"ConstitutionDAO")," \u9009\u7528\u6765\u8fdb\u884c\u7b79\u6b3e\u6d3b\u52a8\uff0c\u5c1d\u8bd5\u53bb\u8d2d\u4e70\u4e00\u4e2a\u7f8e\u56fd\u5baa\u6cd5\u7684\u526f\u672c\uff0c\u8fd9\u6b21\u7b79\u6b3e\u6210\u529f\u52df\u5f97\u5c06\u8fd1 4700 \u4e07\u7f8e\u5143\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u7bc7\u6587\u7ae0\uff0c\u6211\u4eec\u4f1a\u5bf9 DAO \u7684\u5404\u79cd\u57fa\u672c\u529f\u80fd\u8fdb\u884c\u5b9a\u4e49\uff0c\u8fd8\u4f1a\u4ecb\u7ecd\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u9700\u8981\u7528\u5230\u7684\u5de5\u5177\u3002\u672c\u6587\u5185\u5bb9\u53d7\u5230 Juicebox \u8d21\u732e\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"@nnnnicholas")," \u7684 The Fintech Blueprint Podcast \u64ad\u5ba2\u7684\u542f\u53d1\uff1b\u5982\u679c\u4f60\u66f4\u559c\u6b22\u542c\u8bed\u97f3\u5185\u5bb9\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/nnnnicholas/status/1460661895879348232?s=20&t=uUoFXuazXWYqRUgHLflMfQ"},"\u53bb\u542c\u4e00\u4e0b"),"\uff01\n",(0,a.kt)("img",{src:n(59704).Z,width:"1320",height:"1110"})),(0,a.kt)("h2",{id:"dao-\u662f\u505a\u4ec0\u4e48\u7684"},"DAO \u662f\u505a\u4ec0\u4e48\u7684\uff1f"),(0,a.kt)("p",null,"\u73b0\u9636\u6bb5\uff0cDAO \u4e0e\u5176\u8bf4\u662f\u4e00\u4e2a\u4e25\u683c\u610f\u4e49\u4e0a\u7ec4\u7ec7\u7684\u5b9a\u4e49\uff0c\u5012\u4e0d\u5982\u8bf4\u662f\u4e00\u79cd\u5bbd\u6cdb\u7684\u6982\u5ff5\u3002\u8ba9\u6211\u4eec\u6765\u6309\u5b83\u4eec\u76ee\u524d\u5728 Crypto \u6216 NFT \u9886\u57df\u7684\u4f7f\u7528\u5f62\u5f0f\u6765\u5c55\u5f00\u8ba8\u8bba\u3002\u5728\u8fd9\u4e2a\u9886\u57df\uff0cDAO \u6709\u4e24\u5927\u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u8d44\u4ea7\u91d1\u5e93\uff08\u5404\u79cdNFT\u3001\u4ee5\u592a\u5e01\u3001\u6216\u8005\u5176\u4ed6\u4ee3\u5e01\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u8fd9\u4e2a\u91d1\u5e93\u8fdb\u884c\u6cbb\u7406")),(0,a.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u4f60\u559c\u6b22\u7684\u4e3b\u64ad\u51b3\u5b9a\u8981\u7ed9\u4ed6\u4eec\u7684\u64ad\u5ba2\u6210\u7acb\u4e00\u4e2a DAO\u3002\u8981\u7ef4\u62a4\u64ad\u5ba2\u7684\u8fd0\u8425\uff0c\u4ee5\u53ca\u628a\u8fd0\u8425\u6269\u5c55\u5230\u5546\u54c1\u9500\u552e\u548c\u7ebf\u4e0b\u805a\u4f1a\u7684\u8bdd\uff0c\u4ed6\u4eec\u5f97\u6709\u8d44\u4ea7\uff08\u8bf4\u767d\u4e86\u5c31\u662f\u94b1\uff09\uff0c\u6240\u4ee5\u4ed6\u4eec\u8981\u627e\u5230\u4e00\u4e2a\u5efa\u7acb\u8d44\u4ea7\u91d1\u5e93\u7684\u529e\u6cd5\u3002\u4ed6\u4eec\u53ef\u4ee5\u53d1\u884c\u4e00\u4e2a ERC20 \u6807\u51c6\u7684\u4ee3\u5e01\uff08\u6211\u4eec\u628a\u8fd9\u4e2a\u4ee3\u5e01\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"$PODC"),")\uff0c\u6350\u6b3e\u7ed9\u91d1\u5e93\u7684\u4eba\u90fd\u5c06\u76f8\u5e94\u5730\u83b7\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"$PODC")," \u4ee3\u5e01\u3002\u4f60\u4f5c\u4e3a\u4e00\u4e2a\u542c\u4f17\uff0c\u5bf9\u8fd9\u4e2a\u4e3b\u64ad\u5145\u6ee1\u4fe1\u5fc3\u5e76\u4e14\u4e5f\u5e0c\u671b\u5206\u4eab\u5b83\u7684\u6210\u529f\uff0c\u6240\u4ee5\u4f60\u5c31\u8d2d\u4e70\u4e86\u4e00\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"$PODC")," \u4ee3\u5e01\u5e76\u6350\u732e\u7ed9\u5b83\u7684\u91d1\u5e93\u3002"),(0,a.kt)("p",null,"\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"$PODC")," \u4ee3\u5e01\u7684\u6301\u6709\u4eba\uff0c\u4f60\u8fd8\u6709\u4e9b\u7279\u6743\u3002\u4f60\u53ef\u4ee5\u53d1\u8d77\u63d0\u6848\u5bf9\u64ad\u5ba2\u7684\u5f62\u5f0f\u8fdb\u884c\u4fee\u6539\uff0c\u4e5f\u53ef\u4ee5\u5c31\u64ad\u5ba2\u7684\u5609\u5bbe\u4eba\u9009\u63d0\u51fa\u8bae\u6848\uff0c\u4f60\u8fd8\u53ef\u4ee5\u53c2\u4e0e\u5176\u4ed6\u63d0\u6848\u7684\u6295\u7968\u3002\u5982\u6b64\u4e00\u6765\u4f60\u548c\u5176\u4ed6\u7684\u6301\u5e01\u4eba\u5c31\u7b97\u5f97\u4e0a\u662f\u4e0e\u6574\u4e2a DAO \u540c\u821f\u5171\u6d4e\uff0c\u6216\u8005\u8bf4\u540c\u64ad\u5171\u6d4e\u4e86\uff0c\u4f60\u4eec\u4e5f\u5c06\u5bf9\u64ad\u5ba2\u7684\u53d1\u5c55\u548c\u6210\u529f\u4ea7\u751f\u610f\u4e49\u6df1\u8fdc\u7684\u5f71\u54cd\u3002DAO \u5728\u8fd9\u65b9\u9762\u4e5f\u53ef\u4ee5\u5f88\u521b\u65b0\u3002\u79c1\u5bc6\u7684 Discord \u670d\u52a1\u5668\u3001\u975e\u516c\u5f00\u7684\u4f1a\u8bae\u3001\u53c8\u6216\u8005\u7a7a\u6295\u6d3b\u52a8\u90fd\u53ef\u4ee5\u53ea\u5411\u4ee3\u5e01\u6301\u6709\u4eba\u5f00\u653e\u3002\u83b7\u5f97\u6210\u529f\u7684 DAO \u8fd8\u53ef\u4ee5\u6295\u7968\u628a\u591a\u4f59\u7684\u8d44\u91d1\u5206\u53d1\u7ed9\u6301\u5e01\u4eba\u3002"),(0,a.kt)("p",null,"DAO\u505a\u7684\u4e0d\u5bf9\u4f60\u80c3\u53e3\uff1f\u522b\u6015\uff01\u4f60\u624b\u4e0a\u7684\u4ee3\u5e01\u6709\u91d1\u5e93\u8d44\u4ea7 100% \u515c\u5e95\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u53ef\u4ee5\u628a\u4ee3\u5e01\u5356\u7ed9\u91d1\u5e93\u6765\u62ff\u56de\u4f60\u539f\u6765\u7684\u6295\u8d44\uff08\u6263\u6389 gas \u8d39\u7528\u548c\u5176\u4ed6\u624b\u7eed\u8d39\uff09\u3002"),(0,a.kt)("p",null,"\u76f8\u6bd4\u4f20\u7edf\u610f\u4e49\u7684\u79c1\u4f01\uff0cDAO \u7684\u5176\u4e2d\u4e00\u4e2a\u5438\u5f15\u4eba\u7684\u4e4b\u5904\u5c31\u662f\u5b83\u7684\u900f\u660e\u5ea6\u3002DAO \u7684\u65b9\u65b9\u9762\u9762\u5728\u533a\u5757\u94fe\u4e0a\u90fd\u662f\u6709\u636e\u53ef\u67e5\u7684\u3002\u6709\u5fc3\u4eba\u53ef\u4ee5\u76d1\u6d4b\u8d44\u4ea7\u7684\u6d41\u52a8\u5e76\u5bf9\u53ef\u7591\u7684\u4e3e\u52a8\u8fdb\u884c\u63ed\u53d1\u3002\u91cd\u8981\u7684\u662f\uff0c\u6211\u4eec\u4e0d\u7528\u8bf7\u4f1a\u8ba1\u5e08\u6216\u8005\u5f8b\u5e08\u6765\u505a\u8fd9\u4e9b\u5de5\u4f5c\uff01"),(0,a.kt)("h2",{id:"dao-\u5806\u6808"},"DAO \u5806\u6808"),(0,a.kt)("p",null,"\u8981\u5b9e\u73b0DAO\u7684\u8fd9\u4e24\u4e2a\u529f\u80fd\uff0c\u6211\u4eec\u5c31\u9700\u8981\u7528\u5230\u4e00\u4e9b\u5de5\u5177\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u6709\u4e9b\u806a\u660e\u4eba\u5728\u505a\u8fd9\u4e9b\u5e95\u5c42\u7684\u5de5\u4f5c\uff0c\u4ee4 DAO \u5806\u6808\u5f97\u4ee5\u5feb\u901f\u5b8c\u5584\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4f1a\u8ba8\u8bba DAO \u5806\u6808\u76844\u4e2a\u91cd\u8981\u5de5\u5177 Juicebox\u3001Gnosis\u3001Snapshot \u548c Argon, \u4ee5\u53ca\u5b83\u4eec\u600e\u6837\u534f\u540c\u6784\u5efa\u4e00\u4e2a DAO\u3002"),(0,a.kt)("h3",{id:"juicebox"},"Juicebox"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juicebox.money"},"Juicebox")," \u534f\u8bae\u662f\u4e00\u4e2a\u53ef\u7f16\u7a0b\u91d1\u5e93\u3002\u5b9e\u7528\u5c42\u9762\u4e0a\uff0c\u4f60\u53ef\u4ee5\u628a Juicebox \u770b\u4f5c\u662f Kickstarter ",(0,a.kt)("sup",null,(0,a.kt)("a",{parentName:"p",href:"#%E6%B3%A82"},"\u6ce82")),"\u7684\u53bb\u4e2d\u5fc3\u5316\u7248\u672c\uff1b\u4e00\u4e2a\u5728\u533a\u5757\u94fe\u4e0a\u52df\u8d44\u7684\u9014\u5f84\u3002\u5b83\u5b9e\u73b0\u4e86 DAO \u7684\u7b2c\u4e00\u4e2a\u529f\u80fd\uff1a\u5efa\u7acb\u91d1\u5e93\u3002\u6280\u672f\u5c42\u9762\u4e0a\uff0cJuicebox\u662f\u4e00",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jbx-protocol"},"\u6574\u5957\u7684\u667a\u80fd\u5408\u7ea6"),"\uff0c\u5b83\u90e8\u7f72\u5728\u4ee5\u592a\u533a\u5757\u94fe\u4e0a\uff0c\u7528\u6765\u5904\u7406\u53d1\u884c\u4ee3\u5e01\u548c\u5efa\u7acb\u91d1\u5e93\u3002"),(0,a.kt)("p",null,"\u7ee7\u7eed\u6211\u4eec\u64ad\u5ba2DAO\u7684\u4f8b\u5b50\uff0c\u64ad\u4e3b\u63a5\u4e0b\u6765\u8981\u521b\u5efa\u4e00\u4e2a Juicebox \u9879\u76ee\u3002\u4ed6\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5404\u79cd\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u5305\u62ec\u7b79\u6b3e\u76ee\u6807\u3001\u4ee3\u5e01\u53d1\u884c\u6bd4\u4f8b\u3001\u8d39\u7528\u652f\u51fa\u548c\u521b\u5efa\u4eba\u7684\u4fdd\u7559\u4ee3\u5e01\u6570\u91cf\u7b49\u7b49\uff0c\u90fd\u4f1a\u51b3\u5b9a\u9879\u76ee\u7684\u8fd0\u8425\u60c5\u51b5\u3002\u8fd9\u4e2a Juicebox \u9879\u76ee\u76f8\u5173\u7684\u4ee3\u5e01\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"$PODC"),"\u3002\u8981\u60f3\u7ed9\u64ad\u5ba2DAO\u7684\u91d1\u5e93\u6350\u6b3e\u7684\u8bdd\uff0c\u6211\u5f97\u53bb\u9879\u76ee\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://juicebox.money"},"https://juicebox.money")," \u4e0a\u7684\u9875\u9762\uff0c\u7136\u540e\u8fde\u63a5 MetaMask \u94b1\u5305\u518d\u6350\u51fa\u4ee5\u592a\u5e01\u3002\u76f8\u5e94\u5730\uff0c\u6309\u8fd9\u4e2a\u9879\u76ee\u9884\u5148\u8bbe\u5b9a\u7684\u5151\u6362\u6bd4\u4f8b\uff0c\u6211\u4f1a\u5f97\u5230\u4e00\u5b9a\u6570\u91cf\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"$PODC")," \u4ee3\u5e01\u3002"),(0,a.kt)("h3",{id:"gnosis"},"Gnosis"),(0,a.kt)("p",null,"\u8c01\u6765\u201c\u62e5\u6709\u201d\u8fd9\u4e2a\u91d1\u5e93\u5462\uff1f\u4e00\u4e2a\u4eba\u5c31",(0,a.kt)("em",{parentName:"p"},"\u80fd\u591f"),"\u652f\u914d\u8fd9\u4e2a\u91d1\u5e93\uff0c\u4f46\u4ed6\u8981\u662f\u5377\u6b3e\u8dd1\u8def\u7684\u8bdd\uff0c\u9664\u4e86\u6015\u4e22\u6389\u540d\u58f0\uff0c\u4ec0\u4e48\u4e5f\u62e6\u4e0d\u4f4f\u4ed6\u3002"),(0,a.kt)("p",null,"\u6b63\u89e3\uff1a\u591a\u91cd\u7b7e\u540d\u94b1\u5305\uff0c\u4fd7\u79f0\u201c\u591a\u7b7e\u201d\u3002\u591a\u7b7e\u57fa\u672c\u4e0a\u8ddf\u4e00\u4e2a\u4fdd\u7ba1\u8d44\u4ea7\u53ca\u6267\u884c\u4ea4\u6613\u7684\u5408\u7ea6\u6ca1\u4ec0\u4e48\u592a\u5927\u533a\u522b\uff0c\u9664\u4e86\u4e00\u6837\uff1a\u5b83\u89c4\u5b9a\u8981\u6709",(0,a.kt)("em",{parentName:"p"},"\u8d85\u8fc7"),"\u4e00\u4e2a\u94b1\u5305\u5730\u5740\u7684\u7b7e\u540d\u786e\u8ba4\u624d\u80fd\u6267\u884c\u4ea4\u6613\u3002\u5c31\u597d\u50cf\u4e00\u4e2a\u516c\u53f8\u91cc\u529e\u4ec0\u4e48\u4e8b\u60c5\u90fd\u8981\u51e0\u4e2a\u4eba\u7b7e\u540d\u90a3\u6837\uff0c\u591a\u7b7e\u8981\u6c42\u8fbe\u5230\u67d0\u4e2a\u6570\u91cf\u7684\u7b7e\u540d\uff08\u4e00\u822c\u7684\u8bf4\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\u591a\u7b7e\u6210\u5458\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," \u4e2a\u4eba\uff0c\u6bd4\u5982\u8bf4\uff0c3\u4e2a\u591a\u7b7e\u6210\u5458\u91cc\u76842\u4e2a\u4eba\u7b7e\u540d\uff09\u786e\u8ba4\u624d\u80fd\u6267\u884c\u67d0\u4e00\u4e2a\u4ea4\u6613\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u6210\u7acb\u64ad\u5ba2DAO\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u7528\u64ad\u5ba2\u7684\u51e0\u4e2a\u521b\u5efa\u4eba\u6765\u521b\u5efa\u4e00\u4e2a\u591a\u7b7e\u94b1\u5305\uff08\u6bd4\u65b9\u8bf4\u4e24\u4e2a\u64ad\u5ba2\u4e3b\u64ad\u548c\u5176\u4ed6\u505a\u51fa\u91cd\u5927\u8d21\u732e\u7684\u4eba\uff09\u3002\u8fd9\u4e2a\u591a\u7b7e\u94b1\u5305\u5c31\u6210\u4e86\u9879\u76ee\u7684\u62e5\u6709\u8005\u3002\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u6709\u51e0\u4e2a\u4e0d\u540c\u7684\u4eba\u6765\u628a\u63a7\u7b79\u6b3e\u9879\u76ee\u7684\u53c2\u6570\u8bbe\u7f6e\uff0c\u6765\u9632\u6b62\u4e2a\u522b\u4eba\u4f5c\u6076\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gnosis-safe.io"},"Gnosis")," \u662f\u521b\u5efa\u548c\u7ba1\u7406\u591a\u7b7e\u94b1\u5305\u7684\u9996\u9009\u5de5\u5177\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u6d01\u7684\u591a\u7b7e\u7ba1\u7406\u754c\u9762\u3002\u591a\u7b7e\u6210\u5458\u5728 Gnosis \u4e0a\u8fde\u63a5\u4ed6\u4eec\u7684 MetaMask \u94b1\u5305\uff0c\u5c31\u80fd\u786e\u8ba4\u6216\u8005\u62d2\u7edd\u4ea4\u6613\u3002"),(0,a.kt)("h3",{id:"snapshot"},"Snapshot"),(0,a.kt)("p",null,"\u600e\u6837\u7528\u4f60\u7684DAO\u4ee3\u5e01\u6765\u53c2\u4e0e\u6295\u7968\u5462\uff1f \u7528",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org"},"Snapshot.org"),"\uff01 Snapshot \u662f\u4e00\u6b3e\u94fe\u4e0b\u6295\u7968\u5de5\u5177\uff0c\u7528\u4e8e\u63d0\u8bae\u548c\u8868\u51b3 DAO \u7684\u53d8\u66f4\u4e8b\u9879\u3002\u5b83\u5229\u7528 IPFS \u6765\u50a8\u5b58\u6295\u7968\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u63d0\u6848\u4e0d\u5916\u662f\u7f57\u5217\u51fa DAO \u5c06\u8981\u4f5c\u51fa\u8c03\u6574\u5185\u5bb9\u7684\u4e00\u4e2a\u6587\u672c\uff0c\u8fd9\u4e2a\u6587\u672c\u901a\u8fc7\u6295\u7968\u7684\u673a\u5236\u6765\u8ba9\u53c2\u4e0e\u7684\u4eba\u5728\u591a\u4e2a\u9009\u9879\u4e2d\u4f5c\u51fa\u4e00\u4e2a\u5355\u4e00\u9009\u62e9\u3002\u4efb\u4f55\u6301\u6709 DAO \u4ee3\u5e01\u7684\u4eba\u90fd\u53ef\u4ee5\u6309\u81ea\u5df1\u610f\u613f\u5bf9\u63d0\u6848\u8fdb\u884c\u6295\u7968\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6709\u4eba\u5728 Snapshot \u4e0a\u521b\u5efa\u4e86\u4e00\u4e2a\u63d0\u6848\uff0c\u63d0\u8bae\u64ad\u5ba2\u5bf9\u67d0\u4eba\u8fdb\u884c\u5609\u5bbe\u91c7\u8bbf\u3002\u6211\u6301\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"PODC")," \u4ee3\u5e01\uff0c\u5c31\u53ef\u4ee5\u53bb ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org"},"Snapshot.org")," \u7684\u63d0\u6848\u9875\u9762\u4e0a\u6295\u8d5e\u6210\u6216\u53cd\u5bf9\u7968\u3002\u6211\u7684\u6295\u7968\u6743\u91cd\u8ddf\u6211\u6301\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"PODC")," \u4ee3\u5e01\u7684\u6570\u91cf\u6210\u6b63\u6bd4\u3002"),(0,a.kt)("p",null,"\u63d0\u6848\u7684\u652f\u6301\u7968\u6570\u8fbe\u5230\u67d0\u4e2a\u6570\u503c\uff08\u6bd4\u65b9\u8bf4\uff0c\u603b\u7968\u6570\u7684\u4e09\u5206\u4e4b\u4e8c\uff0c\u6216\u8005\u603b\u7968\u6570\u768467%\uff09\u7684\u8bdd\uff0c\u5c31\u4f1a\u83b7\u5f97 DAO \u8868\u51b3\u901a\u8fc7\u3002\u63d0\u6848\u901a\u8fc7\u4e4b\u540e\uff0c\u591a\u7b7e\u6210\u5458\u5c31\u6709\u8d23\u4efb\u53bb\u6267\u884c\u8fd9\u4e2a\u63d0\u6848\u3002"),(0,a.kt)("p",null,"\u6709\u4e00\u70b9\u5f88\u91cd\u8981\uff0c\u4e3a\u4f7f\u8fd9\u4e00\u6d41\u7a0b\u66f4\u52a0\u6709\u6548\uff0c\u9700\u8981\u4e00\u5b9a\u7684\u4fe1\u4efb\u56e0\u7d20\u3002\u4e0d\u7ba1\u600e\u4e48\u8bf4\uff0c\u591a\u7b7e\u6210\u5458\u5bf9\u91d1\u5e93\u6709\u5b8c\u5168\u7684\u652f\u914d\u6743\uff0c\u5f97\u4ed6\u4eec\u4e50\u610f\u53bb\u6267\u884c DAO \u7684\u610f\u613f\u624d\u884c\u3002\u591a\u7b7e\u7684\u672c\u8d28\u8ba9\u8fd9\u4e2a\u98ce\u9669\u6709\u6240\u964d\u4f4e\uff1a\u6b63\u56e0\u4e3a\u591a\u7b7e\u94b1\u5305\u8981\u6c42\u591a\u4eba\u7b7e\u7f72\uff0c\u591a\u7b7e\u6210\u5458\u4e32\u901a\u4f5c\u6076\u7684\u53ef\u80fd\u6027\u5c31\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u5c11\u4e86\u3002\u540d\u58f0\u4e5f\u662f\u60ac\u5728\u6bcf\u4e2a\u4eba\u5934\u4e0a\u7684\u4e00\u628a\u5251\uff0c\u6240\u4ee5\u591a\u7b7e\u6210\u5458\u66f4\u503e\u5411\u4e8e\u7ad9\u5728 DAO \u5229\u76ca\u6700\u5927\u5316\u7684\u89d2\u5ea6\u53bb\u884c\u4e8b\u3002"),(0,a.kt)("h3",{id:"aragon"},"Aragon"),(0,a.kt)("p",null,"\u6b63\u5982\u4e0a\u9762\u6240\u8bf4\u7684\uff0cSnapshot \u662f\u5728\u94fe\u4e0b\u8fdb\u884c\u6295\u7968\uff0c\u4f46\u94fe\u4e0a\u6295\u7968\u4e5f\u662f\u53ef\u884c\u7684\u3002\u8ddf Snapshot \u4e0d\u540c\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://aragon.org"},"Aragon")," \u662f\u5728\u94fe\u4e0a\u8fdb\u884c\u6295\u7968\u7684\u3002\u5728 Aragon \u7684\u673a\u5236\u4e0b\uff0cDAO \u7684\u6240\u6709\u4e8b\u60c5\u90fd\u4e0d\u662f\u53d1\u751f\u5728\u4f60\u7684\u7f51\u7edc\u6d4f\u89c8\u5668\u91cc\u7684\u3002\u6b63\u597d\u76f8\u53cd\uff0c\u6240\u6709\u4e8b\u60c5\u90fd\u4f5c\u4e3a\u533a\u5757\u94fe\u4e0a\u7684\u4ea4\u6613\u6765\u6267\u884c\u3002\u5728\u67d0\u79cd\u610f\u4e49\u4e0a\uff0c\u8fd9\u79cd\u673a\u5236\u4f7f DAO \u66f4\u4e3a\u53bb\u4e2d\u5fc3\u5316\uff0c\u4f46\u5374\u6ca1\u90a3\u4e48\u7075\u6d3b\uff0c\u4ea4\u4e92\u7684\u6210\u672c\u4e5f\u4f1a\u66f4\u9ad8\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,a.kt)("p",null,"DAO \u73b0\u5728\u8d8a\u6765\u8d8a\u6d41\u884c\u4e86\uff0c\u4f46\u521b\u5efa DAO \u5e76\u4e0d\u662f\u81ea\u53e4\u534e\u5c71\u4e00\u6761\u8def\u3002\u6211\u4eec\u6709\u5f88\u591a DAO \u5de5\u5177\u53ef\u4f9b\u9009\u62e9\u3002Juicebox\u3001Gnosis\u3001Snapshot \u548c Aragon \u8fd9\u4e9b\u5c5e\u4e8e\u53ef\u7ec4\u5408\u7684\u5de5\u5177\uff0c\u4ed6\u4eec\u4e4b\u95f4\u53ef\u4ee5\u6df7\u642d\u9002\u914d\u6765\u521b\u9020\u51fa\u4e00\u4e2a DAO \u6240\u9700\u8981\u7684\u57fa\u7840\u8bbe\u65bd\u3002\u6bcf\u4e2a DAO \u90fd\u4f1a\u4f5c\u51fa\u5404\u81ea\u4e0d\u540c\u7684\u5de5\u5177\u9009\u62e9\uff0c\u8fd9\u53d6\u51b3\u4e8e\u54ea\u4e9b\u5de5\u5177\u548c\u54ea\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7a0b\u5ea6\u66f4\u9002\u5408\u4ed6\u4eec\u7684\u9879\u76ee\u548c\u53d1\u5c55\u76ee\u6807\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u53bb\u63a8\u7279\u5173\u6ce8\u4f5c\u8005 ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/aeolianeth"},"@Aeolian"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("span",{id:"\u6ce81"})," **\u6ce81**\uff1a\u300a\u7eb3\u5c3c\u4e9a\u4f20\u5947\u300b\uff08\u82f1\u8bed\uff1aThe Chronicles of Narnia\uff09\uff0c\u662f\u4e00\u5957\u4e03\u518c\u7684\u5947\u5e7b\u5c0f\u8bf4\uff0c\u7531\u5df2\u6545\u82f1\u56fd\u4f5c\u5bb6 C\xb7S\xb7\u5218\u6613\u65af \u5728 1950 \u5e74\u4ee3\u6240\u8457\uff0c\u4e3a\u82f1\u7f8e\u6587\u5b66\u7ecf\u5178\u4e4b\u4e00\u3002",(0,a.kt)("span",{id:"\u6ce82"})," **\u6ce82**\uff1aKickstarter \u662f\u4e00\u95f4\u4e8e 2009 \u5e74\u5728\u7f8e\u56fd\u7ebd\u7ea6\u6210\u7acb\u3001\u6700\u521d\u57fa\u4e8e\u7f8e\u56fd\u4eba\u540e\u6765\u62d3\u5c55\u81f3\u5404\u56fd\u7684\u4ea7\u54c1\u52df\u8d44\u5e73\u53f0\uff0c\u5b83\u900f\u8fc7\u8be5\u7f51\u7ad9\u8fdb\u884c\u516c\u4f17\u52df\u8d44\u4ee5\u63d0\u4f9b\u4eba\u4eec\u8fdb\u884c\u521b\u610f\u9879\u76ee\u7684\u7b79\u96c6\u8d44\u91d1\u3002")}c.isMDXComponent=!0},59704:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/c3kCNED-0e33cfdedeab369a29b964b8ff3067b4.png"}}]);