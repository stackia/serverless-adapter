"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1007:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(6010),n=a(7294);const s="browserWindow_my1Q",o="browserWindowHeader_jXSR",l="buttons_uHc7",i="browserWindowAddressBar_Pd8y",p="dot_giz1",c="browserWindowMenuIcon_Vhuh",u="bar_rrRL",d="browserWindowBody_Idgs";function m(e){let{children:t,minHeight:a,url:m="http://localhost:3000"}=e;return n.createElement("div",{className:s,style:{minHeight:a}},n.createElement("div",{className:o},n.createElement("div",{className:l},n.createElement("span",{className:p,style:{background:"#f25f58"}}),n.createElement("span",{className:p,style:{background:"#fbbe3c"}}),n.createElement("span",{className:p,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(i,"text--truncate")},n.createElement("a",{href:m,target:"_blank",rel:"noopener"},m)),n.createElement("div",{className:c},n.createElement("div",null,n.createElement("span",{className:u}),n.createElement("span",{className:u}),n.createElement("span",{className:u})))),n.createElement("div",{className:d},t))}},7644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),s=a(1007);const o={slug:"updates-and-releases",title:"Updates and Releases",authors:["h4ad"],tags:["serverless-adapter","trpc","azure","firebase"],image:"https://images.unsplash.com/photo-1636819488524-1f019c4e1c44"},l=void 0,i={permalink:"/serverless-adapter/blog/updates-and-releases",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/blog/2022-07-17-updates-and-releases.mdx",source:"@site/blog/2022-07-17-updates-and-releases.mdx",title:"Updates and Releases",description:"To the moon!",date:"2022-07-17T00:00:00.000Z",formattedDate:"July 17, 2022",tags:[{label:"serverless-adapter",permalink:"/serverless-adapter/blog/tags/serverless-adapter"},{label:"trpc",permalink:"/serverless-adapter/blog/tags/trpc"},{label:"azure",permalink:"/serverless-adapter/blog/tags/azure"},{label:"firebase",permalink:"/serverless-adapter/blog/tags/firebase"}],readingTime:1.83,hasTruncateMarker:!1,authors:[{name:"Vin\xedcius Louren\xe7o",title:"Maintainer of Serverless Adapter",url:"https://github.com/h4ad",imageURL:"https://github.com/h4ad.png",key:"h4ad"}],frontMatter:{slug:"updates-and-releases",title:"Updates and Releases",authors:["h4ad"],tags:["serverless-adapter","trpc","azure","firebase"],image:"https://images.unsplash.com/photo-1636819488524-1f019c4e1c44"},nextItem:{title:"The Beginning",permalink:"/serverless-adapter/blog/the-beginning"}},p={authorsImageUrls:[void 0]},c=[{value:"Changes",id:"changes",level:2},{value:"Azure and Firebase",id:"azure-and-firebase",level:2},{value:"tRPC",id:"trpc",level:2},{value:"That&#39;s all folks!",id:"thats-all-folks",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1636819488524-1f019c4e1c44",alt:"To the moon!"})),(0,n.kt)("p",null,"Now we have more Handlers, Frameworks and Adapters, let's see what's new."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"From ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter/tree/v2.3.2"},"v2.3.2")," to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter/tree/v2.6.0"},"v2.6.0"),",\ncompare the changes ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter/compare/v2.3.2...v2.6.0"},"here"),".")),(0,n.kt)("h2",{id:"changes"},"Changes"),(0,n.kt)("p",null,"42 commits, 6905 lines added, 601 lines deleted, that's the size of the changes since ",(0,n.kt)("a",{parentName:"p",href:"/blog/the-beginning"},"The Beginning"),"."),(0,n.kt)("p",null,"I'm very proud of how things are going, I learned a lot by studying to implement these new things."),(0,n.kt)("p",null,"But, let's learn what's new in all these releases."),(0,n.kt)("h2",{id:"azure-and-firebase"},"Azure and Firebase"),(0,n.kt)("p",null,"You can now use this library to deploy your apps to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node"},"Azure Functions"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/functions/http-events"},"Firebase Functions"),"."),(0,n.kt)("p",null,"More specifically, you can integrate with Http Trigger V4 on Azure and Http Events on Firebase."),(0,n.kt)("p",null,"These integrations are just to open the door of possibilities, in the future I want to add support for more triggers in these clouds."),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/main/handlers/azure"},"Azure")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/main/handlers/firebase"},"Firebase")," docs for how to integrate."),(0,n.kt)("p",null,"I also added examples for the cloud in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter-examples"},"serverless-adapter-examples")," repository."),(0,n.kt)("h2",{id:"trpc"},"tRPC"),(0,n.kt)(s.Z,{url:"https://trpc.io/docs/",mdxType:"BrowserWindow"},"tRPC allows you to easily build & consume fully typesafe APIs, without schemas or code generation."),(0,n.kt)("p",null,"tRPC is a framework that brings a new way of thinking about APIs, instead of REST or GraphQL, you can build typesafe APIs and easily\ncan integrate with the client, seems to be very promising."),(0,n.kt)("p",null,"So now you can deploy applications developed with tRPC to any cloud that this library supports, have a look at ",(0,n.kt)("a",{parentName:"p",href:"/docs/main/frameworks/trpc"},"docs"),"\nto learn more about how to use it."),(0,n.kt)("h2",{id:"thats-all-folks"},"That's all folks!"),(0,n.kt)("p",null,"I have two more weeks to work in this library without worrying because I'm on vacation at the university,\nso probably my next efforts will be to bring more articles to this blog to show the full power of this library."),(0,n.kt)("p",null,"Giving some spoilers for those of you that make it this far, I'll start by showing you the benefits of using AWS Lambda integrated with\nAPI Gateway and SQS, I used it in a project of my company and I managed to reduce a lot of stress on the database and now\nwe are able to process 500k votes in minutes without spending 15% CPU using a PostgreSQL database on a t2.micro instance."),(0,n.kt)("p",null,"That's all for today, thank you!"))}d.isMDXComponent=!0}}]);