"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),c=n,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||s;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={title:"SQS",description:"See more about how to integrate with AWS SQS."},o=void 0,i={unversionedId:"main/adapters/aws/sqs",id:"main/adapters/aws/sqs",title:"SQS",description:"See more about how to integrate with AWS SQS.",source:"@site/docs/main/adapters/aws/sqs.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/sqs",permalink:"/docs/main/adapters/aws/sqs",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/sqs.mdx",tags:[],version:"current",frontMatter:{title:"SQS",description:"See more about how to integrate with AWS SQS."},sidebar:"main",previous:{title:"SNS",permalink:"/docs/main/adapters/aws/sns"},next:{title:"Azure",permalink:"/docs/category/azure"}},p={},l=[{value:"Typescript",id:"typescript",level:2},{value:"About the adapter",id:"about-the-adapter",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Usage",id:"usage",level:2},{value:"Security",id:"security",level:2},{value:"What happens when my response status is different from 2xx or 3xx?",id:"what-happens-when-my-response-status-is-different-from-2xx-or-3xx",level:2},{value:"Batch Item Failures",id:"batch-item-failures",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The adapter to handle requests from ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/pt_br/lambda/latest/dg/with-sqs.html"},"AWS SQS"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The option of ",(0,n.kt)("inlineCode",{parentName:"p"},"responseWithErrors")," is ignored by this adapter and we always call ",(0,n.kt)("inlineCode",{parentName:"p"},"resolver.fail")," with the error.")),(0,n.kt)("h2",{id:"typescript"},"Typescript"),(0,n.kt)("p",null,"To correctly type your ",(0,n.kt)("inlineCode",{parentName:"p"},"body")," when receiving the AWS SQS request, you must install ",(0,n.kt)("inlineCode",{parentName:"p"},"aws-lambda"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @types/aws-lambda\n")),(0,n.kt)("p",null,"So when getting the ",(0,n.kt)("inlineCode",{parentName:"p"},"body")," you should use this type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sqs.controller.ts"',title:'"sqs.controller.ts"'},"import type { SQSEvent } from 'aws-lambda';\n")),(0,n.kt)("h2",{id:"about-the-adapter"},"About the adapter"),(0,n.kt)("p",null,"In AWS SQS, you don't have requests, you just receive the records from the queue in the ",(0,n.kt)("inlineCode",{parentName:"p"},"event")," property of the handler."),(0,n.kt)("p",null,"So, in order to handle this adapter, by default we create a ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/sqs")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"body")," being the ",(0,n.kt)("inlineCode",{parentName:"p"},"event")," property as JSON."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="sqs-event-example.json"',title:'"sqs-event-example.json"'},'{\n    "Records": [\n        {\n            "messageId": "059f36b4-87a3-44ab-83d2-661975830a7d",\n            "receiptHandle": "AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...",\n            "body": "Test message.",\n            "attributes": {\n                "ApproximateReceiveCount": "1",\n                "SentTimestamp": "1545082649183",\n                "SenderId": "AIDAIENQZJOLO23YVJ4VO",\n                "ApproximateFirstReceiveTimestamp": "1545082649185"\n            },\n            "messageAttributes": {},\n            "md5OfBody": "e4e68fb7bd0e697a0ae8f1bb342846b3",\n            "eventSource": "aws:sqs",\n            "eventSourceARN": "arn:aws:sqs:us-east-2:123456789012:my-queue",\n            "awsRegion": "us-east-2"\n        }\n    ]\n}\n')),(0,n.kt)("p",null,"Normally, your framework will parse this JSON and return the parsed values as javascript objects."),(0,n.kt)("h2",{id:"customizing"},"Customizing"),(0,n.kt)("p",null,"You can change the HTTP Method and Path that will be used to create the request by sending ",(0,n.kt)("inlineCode",{parentName:"p"},"sqsForwardMethod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"sqsForwardPath")," inside ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SQSAdapter/SQSAdapterOptions"},"SQSAdapterOptions"),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To add support to AWS SQS you do the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { SQSAdapter } from '@h4ad/serverless-adapter/lib/adapters/aws';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // .setFramework(new ExpressFramework())\n  // .setResolver(new PromiseResolver())\n  .addAdapter(new SQSAdapter())\n  // customizing:\n  // .addAdapter(new SQSAdapter({ sqsForwardPath: '/prod/sqs', sqsForwardMethod: 'PUT' }))\n  .build();\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When you configure your API with some ",(0,n.kt)("inlineCode",{parentName:"p"},"basePath")," like ",(0,n.kt)("inlineCode",{parentName:"p"},"/prod"),", you should set ",(0,n.kt)("inlineCode",{parentName:"p"},"sqsForwardPath")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"/prod/sqs")," instead leave as default ",(0,n.kt)("inlineCode",{parentName:"p"},"/sqs"),".")),(0,n.kt)("h2",{id:"security"},"Security"),(0,n.kt)("p",null,"You ",(0,n.kt)("strong",{parentName:"p"},"MUST")," check if the header ",(0,n.kt)("inlineCode",{parentName:"p"},"Host")," contains the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"sqs.amazonaws.com"),"."),(0,n.kt)("p",null,"Without checking this header, if you add this adapter and ",(0,n.kt)("a",{parentName:"p",href:"./api-gateway-v2"},"AWS API Gateway V2")," adapter, you will be vulnerable to attacks\nbecause anyone can create a ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/sqs"),"."),(0,n.kt)("h2",{id:"what-happens-when-my-response-status-is-different-from-2xx-or-3xx"},"What happens when my response status is different from 2xx or 3xx?"),(0,n.kt)("p",null,"Well, this library will throw an error.\nIn previous versions of this library, the behavior was different, but now we throw an error if the status does not indicate success."),(0,n.kt)("p",null,"When it throws an error, the request will simply fail to process the event, and depending on how you set up your dead-letter queue or your retry police,\ncan be sent to dead-letter queue for you to check what happens or try again."),(0,n.kt)("h2",{id:"batch-item-failures"},"Batch Item Failures"),(0,n.kt)("p",null,"If you enable this batch item failure option, to be able to partially return that some items failed to process, first configure your Adapter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const adapter = new SQSAdapter({\n  batch: true,\n});\n")),(0,n.kt)("p",null,"And then, just return the following JSON in the route that processes the SQS event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "batchItemFailures": [\n    {\n        "itemIdentifier": "id2"\n    },\n    {\n        "itemIdentifier": "id4"\n    }\n  ]\n}\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-batchfailurereporting"},"Reference"))))}m.isMDXComponent=!0}}]);