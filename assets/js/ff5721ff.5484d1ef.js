"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"EventBridge (CloudWatch Events)",description:"See more about how to integrate with AWS EventBridge."},o=void 0,s={unversionedId:"main/adapters/aws/event-bridge",id:"main/adapters/aws/event-bridge",title:"EventBridge (CloudWatch Events)",description:"See more about how to integrate with AWS EventBridge.",source:"@site/docs/main/adapters/aws/event-bridge.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/event-bridge",permalink:"/serverless-adapter/docs/main/adapters/aws/event-bridge",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/event-bridge.mdx",tags:[],version:"current",frontMatter:{title:"EventBridge (CloudWatch Events)",description:"See more about how to integrate with AWS EventBridge."},sidebar:"main",previous:{title:"DynamoDB",permalink:"/serverless-adapter/docs/main/adapters/aws/dynamodb"},next:{title:"Lambda Edge",permalink:"/serverless-adapter/docs/main/adapters/aws/lambda-edge"}},l={},d=[{value:"Typescript",id:"typescript",level:2},{value:"About the adapter",id:"about-the-adapter",level:2},{value:"Schedule Expression",id:"schedule-expression",level:3},{value:"Customizing",id:"customizing",level:2},{value:"Usage",id:"usage",level:2},{value:"Security",id:"security",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The adapter to handle requests from ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html"},"AWS EventBridge"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The option of ",(0,a.kt)("inlineCode",{parentName:"p"},"responseWithErrors")," is ignored by this adapter and we always call ",(0,a.kt)("inlineCode",{parentName:"p"},"resolver.fail")," with the error.")),(0,a.kt)("h2",{id:"typescript"},"Typescript"),(0,a.kt)("p",null,"To correctly type your ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," when receiving the AWS EventBridge request, you must install ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-lambda"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @types/aws-lambda\n")),(0,a.kt)("p",null,"So when getting the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," you should use this type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="eventbridge.controller.ts"',title:'"eventbridge.controller.ts"'},"import type { EventBridgeEvent } from 'aws-lambda';\n")),(0,a.kt)("p",null,"If you want to integrate with Scheduled Expression, you can use this type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="eventbridge.controller.ts"',title:'"eventbridge.controller.ts"'},"import type { ScheduledEvent } from 'aws-lambda';\n")),(0,a.kt)("h2",{id:"about-the-adapter"},"About the adapter"),(0,a.kt)("p",null,"In AWS EventBridge, you don't have requests, you just receive the info from Cloudwatch Events within ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," property of the handler."),(0,a.kt)("p",null,"So, in order to handle this adapter, by default we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/eventbridge")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," being the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," property as JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="rds-eventbridge-event-example.json"',title:'"rds-eventbridge-event-example.json"'},'{\n    "version": "0",\n    "id": "fe8d3c65-xmpl-c5c3-2c87-81584709a377",\n    "detail-type": "RDS DB Instance Event",\n    "source": "aws.rds",\n    "account": "123456789012",\n    "time": "2020-04-28T07:20:20Z",\n    "region": "us-east-2",\n    "resources": [\n        "arn:aws:rds:us-east-2:123456789012:db:rdz6xmpliljlb1"\n    ],\n    "detail": {\n        "EventCategories": [\n            "backup"\n        ],\n        "SourceType": "DB_INSTANCE",\n        "SourceArn": "arn:aws:rds:us-east-2:123456789012:db:rdz6xmpliljlb1",\n        "Date": "2020-04-28T07:20:20.112Z",\n        "Message": "Finished DB Instance backup",\n        "SourceIdentifier": "rdz6xmpliljlb1"\n    }\n}\n')),(0,a.kt)("p",null,"Normally, your framework will parse this JSON and return the parsed values as javascript objects."),(0,a.kt)("h3",{id:"schedule-expression"},"Schedule Expression"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents-expressions.html"},"Schedule Expression"),", you have the following JSON when the event is triggered:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="scheduled-eventbridge-event-example.json"',title:'"scheduled-eventbridge-event-example.json"'},'{\n  "version": "0",\n  "account": "123456789012",\n  "region": "us-east-2",\n  "detail": {},\n  "detail-type": "Scheduled Event",\n  "source": "aws.events",\n  "time": "2019-03-01T01:23:45Z",\n  "id": "cdc73f9d-aea9-11e3-9d5a-835b769c0d9c",\n  "resources": [\n    "arn:aws:events:us-east-2:123456789012:rule/my-schedule"\n  ]\n}\n')),(0,a.kt)("p",null,"It's good enough if you want to integrate with just one cron job, but what if you want more?"),(0,a.kt)("p",null,"One option is to check the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property, but I don't like that solution, so I'll introduce it to you in a way."),(0,a.kt)("p",null,"When selecting the target as AWS Lambda, you can configure in ",(0,a.kt)("inlineCode",{parentName:"p"},"Additional Settings")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"input target")," as ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-transform-target-input.html"},"Input Transformer"),",\nwith this option you can modify the above JSON into something different or add new properties."),(0,a.kt)("p",null,"After clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure Input Transformer"),", you can choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Scheduled Event")," in the sample event to get an idea of what the event will look like after the transformation."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Input Path")," inside the Target Input Transformer you will put this json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="input-path.json"',title:'"input-path.json"'},'{\n  "account": "$.account",\n  "detail-type": "$.detail-type",\n  "id": "$.id",\n  "region": "$.region",\n  "resources": "$.resources",\n  "source": "$.source",\n  "time": "$.time",\n  "version": "$.version"\n}\n')),(0,a.kt)("p",null,"And inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Template"),", you will put this json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "<version>",\n  "id": "<id>",\n  "detail-type": "<detail-type>",\n  "source": "<source>",\n  "account": "<account>",\n  "time": "<time>",\n  "region": "<region>",\n  "resources": [],\n  "detail": {\n    "action": "my_25min_cron"\n  }\n}\n')),(0,a.kt)("p",null,"Did you see the ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," inside the details? This property will be added when the event comes from Schedule Expression,\nwith this property you can differentiate which cron was called."),(0,a.kt)("p",null,"Inside your controller, you can write code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="event-bridge.controller.ts"',title:'"event-bridge.controller.ts"'},"import type { ScheduledEvent } from 'aws-lambda';\n\n// inside your controller method\ntype ScheduleEventWithAction = ScheduledEvent<{ action: 'my_25min_cron' | 'my_50min_cron' }>;\nconst scheduleEvent = request.body as unknown as ScheduleEventWithAction;\n\nswitch(scheduleEvent.detail.action) {\n  case 'my_25min_cron':\n    console.log('Your 25 min schedule expression was called.');\n    break;\n  case 'my_50min_cron':\n    console.log('Your 50 min schedule expression was called.');\n    break;\n  default:\n    console.error('The action was not recognized.');\n    break;\n}\n")),(0,a.kt)("h2",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"You can change the HTTP Method and Path that will be used to create the request by sending ",(0,a.kt)("inlineCode",{parentName:"p"},"eventBridgeForwardMethod")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eventBridgeForwardPath")," inside ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions"},"EventBridgeOptions"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To add support to AWS EventBridge you do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { EventBridgeAdapter } from '@h4ad/serverless-adapter/lib/adapters/aws';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // .setFramework(new ExpressFramework())\n  // .setResolver(new PromiseResolver())\n  .addAdapter(new EventBridgeAdapter())\n  // customizing:\n  // .addAdapter(new EventBridgeAdapter({ eventBridgeForwardPath: '/prod/eventbridge', eventBridgeForwardMethod: 'PUT' }))\n  .build();\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When you configure your API with some ",(0,a.kt)("inlineCode",{parentName:"p"},"basePath")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"/prod"),", you should set ",(0,a.kt)("inlineCode",{parentName:"p"},"eventBridgeForwardPath")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"/prod/eventbridge")," instead leave as default ",(0,a.kt)("inlineCode",{parentName:"p"},"/eventbridge"),".")),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"You ",(0,a.kt)("strong",{parentName:"p"},"MUST")," check if the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Host")," contains the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"events.amazonaws.com"),"."),(0,a.kt)("p",null,"Without checking this header, if you add this adapter and ",(0,a.kt)("a",{parentName:"p",href:"./api-gateway-v2"},"AWS API Gateway V2")," adapter, you will be vulnerable to attacks\nbecause anyone can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/eventbridge"),"."))}c.isMDXComponent=!0}}]);