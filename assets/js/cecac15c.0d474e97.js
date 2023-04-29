"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"Api Gateway V1",description:"See more about how to integrate with AWS API Gateway V1."},o=void 0,p={unversionedId:"main/adapters/aws/api-gateway-v1",id:"main/adapters/aws/api-gateway-v1",title:"Api Gateway V1",description:"See more about how to integrate with AWS API Gateway V1.",source:"@site/docs/main/adapters/aws/api-gateway-v1.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/api-gateway-v1",permalink:"/docs/main/adapters/aws/api-gateway-v1",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/api-gateway-v1.mdx",tags:[],version:"current",frontMatter:{title:"Api Gateway V1",description:"See more about how to integrate with AWS API Gateway V1."},sidebar:"main",previous:{title:"ALB",permalink:"/docs/main/adapters/aws/alb"},next:{title:"Api Gateway V2",permalink:"/docs/main/adapters/aws/api-gateway-v2"}},s={},l=[{value:"About the adapter",id:"about-the-adapter",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Usage",id:"usage",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The adapter to handle requests from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html"},"AWS Api Gateway V1"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When an error is thrown during forwarding and the ",(0,r.kt)("inlineCode",{parentName:"p"},"responseWithErrors")," option is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", we return a 500 status WITH error stack in the response.")),(0,r.kt)("admonition",{title:"Reducing Costs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Not sure when to use AWS ALB instead of API Gateway? See ",(0,r.kt)("a",{parentName:"p",href:"https://serverless-training.com/articles/save-money-by-replaceing-api-gateway-with-application-load-balancer/"},"this article")," from Serverless Training to learn more.")),(0,r.kt)("h2",{id:"about-the-adapter"},"About the adapter"),(0,r.kt)("p",null,"This adapter turns every request coming from API Gateway V1 into an HTTP request to your framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="api-gateway-v1-event-example.json"',title:'"api-gateway-v1-event-example.json"'},'{\n  "version": "1.0",\n  "resource": "/my/path",\n  "path": "/my/path",\n  "httpMethod": "GET",\n  "headers": {\n    "header1": "value1",\n    "header2": "value2"\n  },\n  "multiValueHeaders": {\n    "header1": [\n      "value1"\n    ],\n    "header2": [\n      "value1",\n      "value2"\n    ]\n  },\n  "queryStringParameters": {\n    "parameter1": "value1",\n    "parameter2": "value"\n  },\n  "multiValueQueryStringParameters": {\n    "parameter1": [\n      "value1",\n      "value2"\n    ],\n    "parameter2": [\n      "value"\n    ]\n  },\n  "requestContext": {\n    "accountId": "123456789012",\n    "apiId": "id",\n    "authorizer": {\n      "claims": null,\n      "scopes": null\n    },\n    "domainName": "id.execute-api.us-east-1.amazonaws.com",\n    "domainPrefix": "id",\n    "extendedRequestId": "request-id",\n    "httpMethod": "GET",\n    "identity": {\n      "accessKey": null,\n      "accountId": null,\n      "caller": null,\n      "cognitoAuthenticationProvider": null,\n      "cognitoAuthenticationType": null,\n      "cognitoIdentityId": null,\n      "cognitoIdentityPoolId": null,\n      "principalOrgId": null,\n      "sourceIp": "IP",\n      "user": null,\n      "userAgent": "user-agent",\n      "userArn": null,\n      "clientCert": {\n        "clientCertPem": "CERT_CONTENT",\n        "subjectDN": "www.example.com",\n        "issuerDN": "Example issuer",\n        "serialNumber": "a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1",\n        "validity": {\n          "notBefore": "May 28 12:30:02 2019 GMT",\n          "notAfter": "Aug  5 09:36:04 2021 GMT"\n        }\n      }\n    },\n    "path": "/my/path",\n    "protocol": "HTTP/1.1",\n    "requestId": "id=",\n    "requestTime": "04/Mar/2020:19:15:17 +0000",\n    "requestTimeEpoch": 1583349317135,\n    "resourceId": null,\n    "resourcePath": "/my/path",\n    "stage": "$default"\n  },\n  "pathParameters": null,\n  "stageVariables": null,\n  "body": "Hello from Lambda!",\n  "isBase64Encoded": false\n}\n')),(0,r.kt)("p",null,"So, to add support to the above request, we must have registered the ",(0,r.kt)("inlineCode",{parentName:"p"},"/my/path")," route as ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," and when API Gateway sends this event, you will get:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello from Lambda")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryString"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter1=value1&parameter1=value2&parameter2=value"))),(0,r.kt)("h2",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"You can remove some base path with the ",(0,r.kt)("inlineCode",{parentName:"p"},"stripBasePath")," option inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/ApiGatewayV1Adapter/ApiGatewayV1Options"},"ApiGatewayV1Options"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When you configure your API with some ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod"),", you should either send the request in the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod/my/path")," or set ",(0,r.kt)("inlineCode",{parentName:"p"},"stripBasePath")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/prod"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To add support to AWS API Gateway V1 you do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { ApiGatewayV1Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setHandler(new DefaultHandler())\n  // .setFramework(new ExpressFramework())\n  // .setResolver(new PromiseResolver())\n  .addAdapter(new ApiGatewayV1Adapter())\n  // customizing:\n  // .addAdapter(new ApiGatewayV1Adapter({ stripBasePath: '/prod' }))\n  .build();\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"As per ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-known-issues.html"},"know issues"),", we throw an exception when you send the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-encoding=chunked"),", currently, API Gateway doesn't support chunked transfer.")))}m.isMDXComponent=!0}}]);