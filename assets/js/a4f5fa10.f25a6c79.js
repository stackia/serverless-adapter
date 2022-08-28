"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Default",description:"See more about how to integrate with common serverless environments."},l=void 0,s={unversionedId:"main/handlers/default",id:"main/handlers/default",title:"Default",description:"See more about how to integrate with common serverless environments.",source:"@site/docs/main/handlers/default.mdx",sourceDirName:"main/handlers",slug:"/main/handlers/default",permalink:"/serverless-adapter/docs/main/handlers/default",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/handlers/default.mdx",tags:[],version:"current",frontMatter:{title:"Default",description:"See more about how to integrate with common serverless environments."},sidebar:"main",previous:{title:"Azure",permalink:"/serverless-adapter/docs/main/handlers/azure"},next:{title:"Digital Ocean",permalink:"/serverless-adapter/docs/main/handlers/digital-ocean"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Don't know what a handler is? See the ",(0,a.kt)("a",{parentName:"p",href:"../architecture#handler"},"Architecture")," section.")),(0,a.kt)("p",null,"This is a serverless handler implementation that will return a function that expect to receive the following arguments: event, context and callback, respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function(event, context, callback) {...}\n")),(0,a.kt)("p",null,"If your cloud's serverless handler signature is the same, you can use this handler."),(0,a.kt)("p",null,"This is usually enough to add support for clouds like: AWS, Huawei and others."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use, you can import and call the method ",(0,a.kt)("a",{parentName:"p",href:"../../api/ServerlessAdapter#method-sethandler"},"setHandler"),", as per the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // continue to set the other options here.\n  //.setResolver(new PromiseResolver())\n  //.setFramework(new ExpressFramework())\n  //.addAdapter(new AlbAdapter())\n  //.addAdapter(new SQSAdapter())\n  //.addAdapter(new SNSAdapter())\n  // after put all methods necessary, just call the build method.\n  .build();\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can see examples of how to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter-examples"},"here"),"."))}c.isMDXComponent=!0}}]);