"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"ALB",description:"See more about how to integrate with AWS Application Load Balancer."},i=void 0,p={unversionedId:"main/adapters/aws/alb",id:"main/adapters/aws/alb",title:"ALB",description:"See more about how to integrate with AWS Application Load Balancer.",source:"@site/docs/main/adapters/aws/alb.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/alb",permalink:"/docs/main/adapters/aws/alb",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/alb.mdx",tags:[],version:"current",frontMatter:{title:"ALB",description:"See more about how to integrate with AWS Application Load Balancer."},sidebar:"main",previous:{title:"AWS",permalink:"/docs/category/aws"},next:{title:"Api Gateway V1",permalink:"/docs/main/adapters/aws/api-gateway-v1"}},s={},l=[{value:"About the adapter",id:"about-the-adapter",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Usage",id:"usage",level:2}],d={toc:l},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The adapter to handle requests from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html"},"AWS Application Load Balancer"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When an error is thrown during forwarding and the ",(0,r.kt)("inlineCode",{parentName:"p"},"responseWithErrors")," option is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", we return a 500 status WITH error stack in the response.")),(0,r.kt)("admonition",{title:"Reducing Costs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Not sure when to use AWS ALB instead of API Gateway? See ",(0,r.kt)("a",{parentName:"p",href:"https://serverless-training.com/articles/save-money-by-replaceing-api-gateway-with-application-load-balancer/"},"this article")," from Serverless Training to learn more.")),(0,r.kt)("h2",{id:"about-the-adapter"},"About the adapter"),(0,r.kt)("p",null,"This adapter turns every request coming from AWS ALB into an HTTP request to your framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="alb-event-example.json"',title:'"alb-event-example.json"'},'{\n    "requestContext": {\n        "elb": {\n            "targetGroupArn": "arn:aws:elasticloadbalancing:us-east-2:123456789012:targetgroup/lambda-279XGJDqGZ5rsrHC2Fjr/49e9d65c45c6791a"\n        }\n    },\n    "httpMethod": "POST",\n    "path": "/lambda",\n    "queryStringParameters": {\n        "query": "1234ABCD"\n    },\n    "headers": {\n        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",\n        "accept-encoding": "gzip",\n        "accept-language": "en-US,en;q=0.9",\n        "connection": "keep-alive",\n        "host": "lambda-alb-123578498.us-east-2.elb.amazonaws.com",\n        "upgrade-insecure-requests": "1",\n        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",\n        "x-amzn-trace-id": "Root=1-5c536348-3d683b8b04734faae651f476",\n        "x-forwarded-for": "72.12.164.125",\n        "x-forwarded-port": "80",\n        "x-forwarded-proto": "http",\n        "x-imforwards": "20"\n    },\n    "body": "Banana",\n    "isBase64Encoded": false\n}\n')),(0,r.kt)("p",null,"So, to add support to the above request, we must have registered the ",(0,r.kt)("inlineCode",{parentName:"p"},"/lambda")," route as ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," and when API Gateway sends this event, you will get:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Banana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryString"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"query=1234ABCD"))),(0,r.kt)("h2",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"You can remove some base path with the ",(0,r.kt)("inlineCode",{parentName:"p"},"stripBasePath")," option inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/AlbAdapter/AlbAdapterOptions"},"AlbAdapterOptions"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When you configure your API with some ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod"),", you should either send the request in the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod/lambda")," or set ",(0,r.kt)("inlineCode",{parentName:"p"},"stripBasePath")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To add support to AWS ALB you do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { AlbAdapter } from '@h4ad/serverless-adapter/lib/adapters/aws';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // .setFramework(new ExpressFramework())\n  // .setResolver(new PromiseResolver())\n  .addAdapter(new AlbAdapter())\n  // customizing:\n  // .addAdapter(new AlbAdapter({ stripBasePath: '/prod' }))\n  .build();\n")))}c.isMDXComponent=!0}}]);