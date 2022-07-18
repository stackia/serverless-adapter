"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6863],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),m=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=m(e.components);return a.createElement(s.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=n,k=d["".concat(s,".").concat(u)]||d[u]||i[u]||o;return t?a.createElement(k,p(p({ref:r},c),{},{components:t})):a.createElement(k,p({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<o;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2064:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=t(7462),n=(t(7294),t(3905));const o={},p=void 0,l={unversionedId:"api/Frameworks/LazyFramework/LazyFramework",id:"api/Frameworks/LazyFramework/LazyFramework",title:"LazyFramework",description:"@h4ad/serverless-adapter &gt; LazyFramework",source:"@site/docs/api/Frameworks/LazyFramework/LazyFramework.md",sourceDirName:"api/Frameworks/LazyFramework",slug:"/api/Frameworks/LazyFramework/",permalink:"/serverless-adapter/docs/api/Frameworks/LazyFramework/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/LazyFramework/LazyFramework.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"KoaFramework",permalink:"/serverless-adapter/docs/api/Frameworks/KoaFramework/"},next:{title:"TrpcFramework",permalink:"/serverless-adapter/docs/api/Frameworks/TrpcFramework/"}},s={},m=[{value:"(class) LazyFramework",id:"class-lazyframework",level:2},{value:"Example",id:"example",level:2},{value:"(constructor)",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"(property) cachedApp",id:"property-cachedapp",level:2},{value:"(property) delayedFactory",id:"property-delayedfactory",level:2},{value:"(property) factory",id:"property-factory",level:2},{value:"(property) framework",id:"property-framework",level:2},{value:"(property) logger",id:"property-logger",level:2},{value:"(method) sendRequest",id:"method-sendrequest",level:2},{value:"Parameters",id:"parameters-1",level:3}],c={toc:m};function i(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/LazyFramework"},"LazyFramework")),(0,n.kt)("h2",{id:"class-lazyframework"},"(class) LazyFramework"),(0,n.kt)("p",null,"The framework that asynchronously instantiates your application and forwards the request to the framework as quickly as possible."),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class LazyFramework<TApp> implements FrameworkContract<null> \n")),(0,n.kt)("p",null,"Implements: ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import express from 'express';\nimport { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { ExpressFramework } from '@h4ad/serverless-adapter/lib/frameworks/express';\nimport { LazyFramework } from '@h4ad/serverless-adapter/lib/frameworks/lazy';\n\nconst expressFramework = new ExpressFramework();\nconst factory = async () => {\n  const app = express();\n\n  // do some asynchronous stuffs like create the database;\n  await new Promise(resolve => setTimeout(resolve, 100);\n\n  return app;\n};\nconst framework = new LazyFramework(expressFramework, factory);\n\nexport const handler = ServerlessAdapter.new(null)\n  .setFramework(framework)\n  // set other configurations and then build\n  .build();\n")),(0,n.kt)("h2",{id:"constructor"},"(constructor)"),(0,n.kt)("p",null,"Default Constructor"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(framework: FrameworkContract<TApp>, factory: () => Promise<TApp>, logger?: ILogger);\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"framework"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","TApp",">"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"factory"),(0,n.kt)("td",{parentName:"tr",align:null},"() =",">"," Promise","<","TApp",">"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"logger"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional)")))),(0,n.kt)("h2",{id:"property-cachedapp"},"(property) cachedApp"),(0,n.kt)("p",null,"The cached version of the app"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"protected cachedApp?: TApp;\n")),(0,n.kt)("h2",{id:"property-delayedfactory"},"(property) delayedFactory"),(0,n.kt)("p",null,"The delayed factory to create an instance of the app"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"protected readonly delayedFactory: Promise<void>;\n")),(0,n.kt)("h2",{id:"property-factory"},"(property) factory"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"protected readonly factory: () => Promise<TApp>;\n")),(0,n.kt)("h2",{id:"property-framework"},"(property) framework"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"protected readonly framework: FrameworkContract<TApp>;\n")),(0,n.kt)("h2",{id:"property-logger"},"(property) logger"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"protected readonly logger: ILogger;\n")),(0,n.kt)("h2",{id:"method-sendrequest"},"(method) sendRequest"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"sendRequest(app: null, request: IncomingMessage, response: ServerResponse): void;\n")),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app"),(0,n.kt)("td",{parentName:"tr",align:null},"null"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"request"),(0,n.kt)("td",{parentName:"tr",align:null},"IncomingMessage"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"response"),(0,n.kt)("td",{parentName:"tr",align:null},"ServerResponse"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("p",null,"void"))}i.isMDXComponent=!0}}]);