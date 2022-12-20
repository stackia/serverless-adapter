"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"S3",description:"See more about how to integrate with AWS S3."},s=void 0,i={unversionedId:"main/adapters/aws/s3",id:"main/adapters/aws/s3",title:"S3",description:"See more about how to integrate with AWS S3.",source:"@site/docs/main/adapters/aws/s3.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/s3",permalink:"/docs/main/adapters/aws/s3",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/s3.mdx",tags:[],version:"current",frontMatter:{title:"S3",description:"See more about how to integrate with AWS S3."},sidebar:"main",previous:{title:"Lambda Edge",permalink:"/docs/main/adapters/aws/lambda-edge"},next:{title:"SNS",permalink:"/docs/main/adapters/aws/sns"}},p={},l=[{value:"Typescript",id:"typescript",level:2},{value:"About the adapter",id:"about-the-adapter",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Usage",id:"usage",level:2},{value:"Security",id:"security",level:2},{value:"What happens when my response status is different from 2xx or 3xx?",id:"what-happens-when-my-response-status-is-different-from-2xx-or-3xx",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The adapter to handle requests from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/pt_br/lambda/latest/dg/with-s3.html"},"AWS S3"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The option of ",(0,r.kt)("inlineCode",{parentName:"p"},"responseWithErrors")," is ignored by this adapter and we always call ",(0,r.kt)("inlineCode",{parentName:"p"},"resolver.fail")," with the error.")),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"To correctly type your ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," when receiving the AWS S3 request, you must install ",(0,r.kt)("inlineCode",{parentName:"p"},"aws-lambda"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @types/aws-lambda\n")),(0,r.kt)("p",null,"So when getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," you should use this type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="s3.controller.ts"',title:'"s3.controller.ts"'},"import type { S3Event } from 'aws-lambda';\n")),(0,r.kt)("h2",{id:"about-the-adapter"},"About the adapter"),(0,r.kt)("p",null,"In AWS S3, you don't have requests, you just receive the records from the queue in the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," property of the handler."),(0,r.kt)("p",null,"So, in order to handle this adapter, by default we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/s3")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," being the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," property as JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="s3-event-example.json"',title:'"s3-event-example.json"'},'{\n  "Records": [\n    {\n      "eventVersion": "2.1",\n      "eventSource": "aws:s3",\n      "awsRegion": "us-east-2",\n      "eventTime": "2019-09-03T19:37:27.192Z",\n      "eventName": "ObjectCreated:Put",\n      "userIdentity": {\n        "principalId": "AWS:AIDAINPONIXQXHT3IKHL2"\n      },\n      "requestParameters": {\n        "sourceIPAddress": "205.255.255.255"\n      },\n      "responseElements": {\n        "x-amz-request-id": "D82B88E5F771F645",\n        "x-amz-id-2": "vlR7PnpV2Ce81l0PRw6jlUpck7Jo5ZsQjryTjKlc5aLWGVHPZLj5NeC6qMa0emYBDXOo6QBU0Wo="\n      },\n      "s3": {\n        "s3SchemaVersion": "1.0",\n        "configurationId": "828aa6fc-f7b5-4305-8584-487c791949c1",\n        "bucket": {\n          "name": "DOC-EXAMPLE-BUCKET",\n          "ownerIdentity": {\n            "principalId": "A3I5XTEXAMAI3E"\n          },\n          "arn": "arn:aws:s3:::lambda-artifacts-deafc19498e3f2df"\n        },\n        "object": {\n          "key": "b21b84d653bb07b05b1e6b33684dc11b",\n          "size": 1305107,\n          "eTag": "b21b84d653bb07b05b1e6b33684dc11b",\n          "sequencer": "0C0F6F405D6ED209E1"\n        }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Normally, your framework will parse this JSON and return the parsed values as javascript objects."),(0,r.kt)("h2",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"You can change the HTTP Method and Path that will be used to create the request by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"s3ForwardMethod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s3ForwardPath")," inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/S3Adapter/S3AdapterOptions"},"S3AdapterOptions"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To add support to AWS S3 you do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { S3Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // .setFramework(new ExpressFramework())\n  // .setResolver(new PromiseResolver())\n  .addAdapter(new S3Adapter())\n  // customizing:\n  // .addAdapter(new S3Adapter({ s3ForwardPath: '/prod/s3', s3ForwardMethod: 'PUT' }))\n  .build();\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When you configure your API with some ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod"),", you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"s3ForwardPath")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod/s3")," instead leave as default ",(0,r.kt)("inlineCode",{parentName:"p"},"/s3"),".")),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"You ",(0,r.kt)("strong",{parentName:"p"},"MUST")," check if the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Host")," contains the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"s3.amazonaws.com"),"."),(0,r.kt)("p",null,"Without checking this header, if you add this adapter and ",(0,r.kt)("a",{parentName:"p",href:"./api-gateway-v2"},"AWS API Gateway V2")," adapter, you will be vulnerable to attacks\nbecause anyone can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/s3"),"."),(0,r.kt)("h2",{id:"what-happens-when-my-response-status-is-different-from-2xx-or-3xx"},"What happens when my response status is different from 2xx or 3xx?"),(0,r.kt)("p",null,"Well, this library will throw an error.\nIn previous versions of this library, the behavior was different, but now we throw an error if the status does not indicate success."),(0,r.kt)("p",null,"When it throws an error, the request will simply fail to process the event, and depending on how you set up your dead-letter queue or your retry police,\ncan be sent to dead-letter queue for you to check what happens or try again."))}u.isMDXComponent=!0}}]);