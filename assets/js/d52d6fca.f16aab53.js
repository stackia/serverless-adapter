"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3309],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Huawei",position:2,description:"See more about how to integrate with Huawei."},l=void 0,p={unversionedId:"main/handlers/huawei",id:"main/handlers/huawei",title:"Huawei",description:"See more about how to integrate with Huawei.",source:"@site/docs/main/handlers/huawei.mdx",sourceDirName:"main/handlers",slug:"/main/handlers/huawei",permalink:"/serverless-adapter/docs/main/handlers/huawei",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/handlers/huawei.mdx",tags:[],version:"current",frontMatter:{title:"Huawei",position:2,description:"See more about how to integrate with Huawei."},sidebar:"main",previous:{title:"Default",permalink:"/serverless-adapter/docs/main/handlers/default"},next:{title:"Resolvers",permalink:"/serverless-adapter/docs/category/resolvers"}},u={},d=[{value:"Http Function",id:"http-function",level:2},{value:"Event Function",id:"event-function",level:2},{value:"Sponsor",id:"sponsor",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Huawei, we added support to FunctionGraphV2 with Http Function and Event Function."),(0,o.kt)("p",null,"The difference between Http Function and Event Function is that in Http Function you must expose port 8000 and Huawei will proxy Api Gateway requests to your application.\nSo, on implementation, this library will create an http server to listen on port 8000 and forward the request to your framework."),(0,o.kt)("p",null,"In Event Function, you will receive the event from event source in the same way you receive in AWS, an object with some structure, you can see the supported event sources ",(0,o.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/devg-functiongraph/functiongraph_02_0102.html"},"here"),"."),(0,o.kt)("h2",{id:"http-function"},"Http Function"),(0,o.kt)("p",null,"To integrate your app with Huawei FunctionGrapth with the Http Function type, you must do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { ExpressFramework } from '@h4ad/serverless-adapter/lib/frameworks/express';\nimport { HttpHuaweiHandler } from '@h4ad/serverless-adapter/lib/handlers/huawei';\nimport { DummyResolver } from '@h4ad/serverless-adapter/lib/resolvers/dummy';\nimport { DummyAdapter } from '@h4ad/serverless-adapter/lib/adapters/dummy';\nimport app from './app';\n\n// instead exposing handler, you have the dispose function\n// this dispose function is never called\n// but you can to close the http server created with him\nconst dispose = ServerlessAdapter.new(app)\n    .setHandler(new HttpHuaweiHandler())\n    .setFramework(new ExpressFramework())\n    // dummy resolver and adapter is used because\n    // they are necessary in the core of the library to build\n    // but is optional to make huawei http function works.\n    .setResolver(new DummyResolver())\n    .addAdapter(new DummyAdapter())\n    .build();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You don't need to expose a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," when you choose Http Function, you just need to call build to the library create a http server.")),(0,o.kt)("p",null,"By the way of Huawei architecture in Http Function, they have no use for Resolvers and Adapters, so you need to use the dummy versions because the library requires it."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"ONE IMPORTANT THING")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to configure a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," in the root of folder that you upload to Huawei, is like the file ",(0,o.kt)("inlineCode",{parentName:"p"},"Procfile")," but for Huawei."),(0,o.kt)("p",{parentName:"div"},"In my setup, I configure like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"node /opt/function/code/index.js\n")),(0,o.kt)("p",{parentName:"div"},"The path ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/function/code")," is where your code is uploaded when you deploy something and ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," is the file that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerlessAdapter"),"."),(0,o.kt)("p",{parentName:"div"},"In the end, the structure of the zip file you upload looks like this:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"index.js"))))),(0,o.kt)("h2",{id:"event-function"},"Event Function"),(0,o.kt)("p",null,"With Http Function you need to use ",(0,o.kt)("a",{parentName:"p",href:"./huawei#http-function"},"HttpHuaweiHandler"),",\nbut with Event Function you should use ",(0,o.kt)("a",{parentName:"p",href:"./default"},"DefaultHandler"),"."),(0,o.kt)("p",null,"So, to add support to Api Gateway you do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { HuaweiApiGatewayAdapter } from '@h4ad/serverless-adapter/lib/adapters/huawei';\nimport { ExpressFramework } from '@h4ad/serverless-adapter/lib/frameworks/express';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport { CallbackResolver } from '@h4ad/serverless-adapter/lib/resolvers/callback';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setFramework(new ExpressFramework())\n  .setHandler(new DefaultHandler())\n  .setResolver(new CallbackResolver())\n  .addAdapter(new HuaweiApiGatewayAdapter())\n  .build();\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"One important thing")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must use the callback resolver because I couldn't get it to work with the PromiseResolver.\nMaybe it's a bug in the library or something specific in Huawei, if you have a hint please create an issue."))),(0,o.kt)("h2",{id:"sponsor"},"Sponsor"),(0,o.kt)("p",null,"This handler was sponsored by ",(0,o.kt)("a",{parentName:"p",href:"https://liga.facens.br/"},"Liga"),", if you want to built an app, site or game (mobile, AR or VR), send an email to ","[liga@facens.br]","."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://liga.facens.br/"},(0,o.kt)("img",{height:"50",src:"https://mlogu6g7z5ex.i.optimole.com/yEwfkqo-4R0ttNtd/w:auto/h:auto/q:mauto/f:avif/http://liga.facens.br/wp-content/uploads/2020/03/logo-1.png",title:"The LIGA logo",width:"100"})))))))}m.isMDXComponent=!0}}]);