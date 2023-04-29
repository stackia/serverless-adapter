"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={title:"DynamoDB",description:"See more about how to integrate with AWS DynamoDB."},i=void 0,s={unversionedId:"main/adapters/aws/dynamodb",id:"main/adapters/aws/dynamodb",title:"DynamoDB",description:"See more about how to integrate with AWS DynamoDB.",source:"@site/docs/main/adapters/aws/dynamodb.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/dynamodb",permalink:"/docs/main/adapters/aws/dynamodb",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/dynamodb.mdx",tags:[],version:"current",frontMatter:{title:"DynamoDB",description:"See more about how to integrate with AWS DynamoDB."},sidebar:"main",previous:{title:"Api Gateway V2",permalink:"/docs/main/adapters/aws/api-gateway-v2"},next:{title:"EventBridge (CloudWatch Events)",permalink:"/docs/main/adapters/aws/event-bridge"}},p={},d=[{value:"Typescript",id:"typescript",level:2},{value:"About the adapter",id:"about-the-adapter",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Usage",id:"usage",level:2},{value:"Security",id:"security",level:2},{value:"What happens when my response status is different from 2xx or 3xx?",id:"what-happens-when-my-response-status-is-different-from-2xx-or-3xx",level:2},{value:"Batch Item Failures",id:"batch-item-failures",level:2}],l={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The adapter to handle requests from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html"},"AWS DynamoDB"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The option of ",(0,r.kt)("inlineCode",{parentName:"p"},"responseWithErrors")," is ignored by this adapter and we always call ",(0,r.kt)("inlineCode",{parentName:"p"},"resolver.fail")," with the error.")),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"To correctly type your ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," when receiving the AWS DynamoDB request, you must install ",(0,r.kt)("inlineCode",{parentName:"p"},"aws-lambda"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @types/aws-lambda\n")),(0,r.kt)("p",null,"So when getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," you should use this type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="dynamodb.controller.ts"',title:'"dynamodb.controller.ts"'},"import type { DynamoDBStreamEvent } from 'aws-lambda';\n")),(0,r.kt)("h2",{id:"about-the-adapter"},"About the adapter"),(0,r.kt)("p",null,"In AWS DynamoDB, you don't have requests, you just receive the records in the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," property of the handler."),(0,r.kt)("p",null,"So, in order to handle this adapter, by default we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/dynamo")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," being the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," property as JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="dynamodb-event-example.json"',title:'"dynamodb-event-example.json"'},'{\n  "Records": [\n    {\n      "eventID": "1",\n      "eventVersion": "1.0",\n      "dynamodb": {\n        "Keys": {\n          "Id": {\n            "N": "101"\n          }\n        },\n        "NewImage": {\n          "Message": {\n            "S": "New item!"\n          },\n          "Id": {\n            "N": "101"\n          }\n        },\n        "StreamViewType": "NEW_AND_OLD_IMAGES",\n        "SequenceNumber": "111",\n        "SizeBytes": 26\n      },\n      "awsRegion": "us-west-2",\n      "eventName": "INSERT",\n      "eventSourceARN": "arn:aws:dynamodb:us-east-1:111122223333:table/EventSourceTable",\n      "eventSource": "aws:dynamodb"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Normally, your framework will parse this JSON and return the parsed values as javascript objects."),(0,r.kt)("h2",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"You can change the HTTP Method and Path that will be used to create the request by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamoDBForwardMethod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamoDBForwardPath")," inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/DynamoDBAdapter/DynamoDBAdapterOptions"},"DynamoDBAdapterOptions"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To add support to AWS DynamoDB you do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { DynamoDBAdapter } from '@h4ad/serverless-adapter/lib/adapters/aws';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // .setFramework(new ExpressFramework())\n  // .setResolver(new PromiseResolver())\n  .addAdapter(new DynamoDBAdapter())\n  // customizing:\n  // .addAdapter(new DynamoDBAdapter({ dynamoDBForwardPath: '/prod/dynamo', dynamoDBForwardMethod: 'PUT' }))\n  .build();\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When you configure your API with some ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod"),", you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamoDBForwardPath")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod/dynamo")," instead leave as default ",(0,r.kt)("inlineCode",{parentName:"p"},"/dynamo"),".")),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"You ",(0,r.kt)("strong",{parentName:"p"},"MUST")," check if the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Host")," contains the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamodb.amazonaws.com"),"."),(0,r.kt)("p",null,"Without checking this header, if you add this adapter and ",(0,r.kt)("a",{parentName:"p",href:"./api-gateway-v2"},"AWS API Gateway V2")," adapter, you will be vulnerable to attacks\nbecause anyone can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/dynamo"),"."),(0,r.kt)("h2",{id:"what-happens-when-my-response-status-is-different-from-2xx-or-3xx"},"What happens when my response status is different from 2xx or 3xx?"),(0,r.kt)("p",null,"Well, this library will throw an error.\nIn previous versions of this library, the behavior was different, but now we throw an error if the status does not indicate success."),(0,r.kt)("p",null,"When it throws an error, the request will simply fail to process the event, and depending on how you set up your dead-letter queue or your retry police,\ncan be sent to dead-letter queue for you to check what happens or try again."),(0,r.kt)("h2",{id:"batch-item-failures"},"Batch Item Failures"),(0,r.kt)("p",null,"If you enable this batch item failure option, to be able to partially return that some items failed to process, first configure your Adapter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const adapter = new DynamoDBAdapter({\n  batch: true,\n});\n")),(0,r.kt)("p",null,"And then, just return the following JSON in the route that processes the DynamoDB event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "batchItemFailures": [\n    {\n        "itemIdentifier": "id2"\n    },\n    {\n        "itemIdentifier": "id4"\n    }\n  ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting"},"Reference"))))}u.isMDXComponent=!0}}]);