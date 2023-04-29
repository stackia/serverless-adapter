"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,u=m["".concat(p,".").concat(c)]||m[c]||h[c]||o;return a?n.createElement(u,s(s({ref:t},l),{},{components:a})):n.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={title:"Creating an Adapter",position:2},s=void 0,i={unversionedId:"main/advanced/adapters/creating-an-adapter",id:"main/advanced/adapters/creating-an-adapter",title:"Creating an Adapter",description:"As we saw in Introduction, you are already familiar with adapter methods.",source:"@site/docs/main/advanced/adapters/creating-an-adapter.mdx",sourceDirName:"main/advanced/adapters",slug:"/main/advanced/adapters/creating-an-adapter",permalink:"/docs/main/advanced/adapters/creating-an-adapter",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/advanced/adapters/creating-an-adapter.mdx",tags:[],version:"current",frontMatter:{title:"Creating an Adapter",position:2},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/main/advanced/adapters/introduction"}},p={},d=[{value:"Request and Response",id:"request-and-response",level:2},{value:"Creating the class",id:"creating-the-class",level:2},{value:"Implementing the <code>getAdapterName</code> method",id:"implementing-the-getadaptername-method",level:2},{value:"Implementing the <code>canHandle</code> method",id:"implementing-the-canhandle-method",level:2},{value:"Implementing the <code>getRequest</code> method",id:"implementing-the-getrequest-method",level:2},{value:"<code>method</code>",id:"method",level:3},{value:"<code>path</code>",id:"path",level:3},{value:"<code>headers</code>",id:"headers",level:3},{value:"<code>body</code>",id:"body",level:3},{value:"<code>remoteAddress</code>",id:"remoteaddress",level:3},{value:"<code>host</code> and <code>hostname</code>",id:"host-and-hostname",level:3},{value:"Implementing the <code>getResponse</code> method",id:"implementing-the-getresponse-method",level:2},{value:"Implementing the <code>onErrorWhileForwarding</code> method",id:"implementing-the-onerrorwhileforwarding-method",level:2},{value:"Well Done!",id:"well-done",level:2}],l={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As we saw in ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/intro"},"Introduction"),", you are already familiar with adapter methods."),(0,r.kt)("p",null,"In this chapter, we will create a new adapter to implement the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),"\nthat has the request and response in the following format:"),(0,r.kt)("h2",{id:"request-and-response"},"Request and Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="request.json"',title:'"request.json"'},'{\n  "version": "2.0",\n  "routeKey": "$default",\n  "rawPath": "/my/path",\n  "rawQueryString": "parameter1=value1&parameter1=value2&parameter2=value",\n  "cookies": [\n    "cookie1",\n    "cookie2"\n  ],\n  "headers": {\n    "header1": "value1",\n    "header2": "value1,value2"\n  },\n  "queryStringParameters": {\n    "parameter1": "value1,value2",\n    "parameter2": "value"\n  },\n  "requestContext": {\n    "accountId": "123456789012",\n    "apiId": "api-id",\n    "authentication": {\n      "clientCert": {\n        "clientCertPem": "CERT_CONTENT",\n        "subjectDN": "www.example.com",\n        "issuerDN": "Example issuer",\n        "serialNumber": "a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1",\n        "validity": {\n          "notBefore": "May 28 12:30:02 2019 GMT",\n          "notAfter": "Aug  5 09:36:04 2021 GMT"\n        }\n      }\n    },\n    "authorizer": {\n      "jwt": {\n        "claims": {\n          "claim1": "value1",\n          "claim2": "value2"\n        },\n        "scopes": [\n          "scope1",\n          "scope2"\n        ]\n      }\n    },\n    "domainName": "id.execute-api.us-east-1.amazonaws.com",\n    "domainPrefix": "id",\n    "http": {\n      "method": "POST",\n      "path": "/my/path",\n      "protocol": "HTTP/1.1",\n      "sourceIp": "IP",\n      "userAgent": "agent"\n    },\n    "requestId": "id",\n    "routeKey": "$default",\n    "stage": "$default",\n    "time": "12/Mar/2020:19:03:58 +0000",\n    "timeEpoch": 1583348638390\n  },\n  "body": "Hello from Lambda",\n  "pathParameters": {\n    "parameter1": "value1"\n  },\n  "isBase64Encoded": false,\n  "stageVariables": {\n    "stageVariable1": "value1",\n    "stageVariable2": "value2"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="response.json"',title:'"response.json"'},'{\n    "isBase64Encoded": true,\n    "statusCode": 201,\n    "headers": { "headername": "headervalue" },\n    "multiValueHeaders": { "headername": ["headervalue", "headervalue2"] },\n    "body": "Done"\n}\n')),(0,r.kt)("h2",{id:"creating-the-class"},"Creating the class"),(0,r.kt)("p",null,"First, we need to create our new adapter class, let's define it as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"import type { APIGatewayProxyEventV2, Context } from 'aws-lambda';\nimport type { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy';\nimport { AdapterContract } from '@h4ad/serverless-adapter/lib/contracts';\n\nexport class ApiGatewayV2Adapter implements AdapterContract<APIGatewayProxyEventV2, Context, APIGatewayProxyStructuredResultV2> {}\n")),(0,r.kt)("p",null,"The interface we need to implement is ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," which takes 3 generic arguments:\nthe event sent by the event source, the context of the serverless environment, and the response that the event source understands."),(0,r.kt)("h2",{id:"implementing-the-getadaptername-method"},"Implementing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"getAdapterName")," method"),(0,r.kt)("p",null,"This is the easiest method to implement, we can do it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"public getAdapterName(): string {\n  return ApiGatewayV2Adapter.name;\n}\n")),(0,r.kt)("h2",{id:"implementing-the-canhandle-method"},"Implementing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"canHandle")," method"),(0,r.kt)("p",null,"When we implement this method, we must study the request event to know which properties are always sent by the event source,\nin case of ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),", the most important ones are ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," and\nchecking that the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0"),"."),(0,r.kt)("p",null,"This way, we can implement if the event was sent from ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"public canHandle(event: unknown): event is APIGatewayProxyEventV2 {\n  const apiGatewayEvent = event as Partial<APIGatewayProxyEventV2> & {\n    version?: string;\n  };\n\n  // this basically will verify if:\n  // - if event has requestContext\n  // - if event has version property equal to 2.0\n  // if both are true, then we do double bang\n  // just to make sure we return boolean\n  return !!(\n    apiGatewayEvent?.requestContext && apiGatewayEvent.version === '2.0'\n  );\n}\n")),(0,r.kt)("h2",{id:"implementing-the-getrequest-method"},"Implementing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"getRequest")," method"),(0,r.kt)("p",null,"In this method, we need to return the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Contracts/AdapterContract/AdapterRequest"},"AdapterRequest")," interface,\nto understand better what we need to return, let's deep into to know more about them."),(0,r.kt)("h3",{id:"method"},(0,r.kt)("inlineCode",{parentName:"h3"},"method")),(0,r.kt)("p",null,"The HTTP Method to use to create the request to the framework."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2")," we can take the method from ",(0,r.kt)("inlineCode",{parentName:"p"},"APIGatewayProxyEventV2"),",\naccessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," property inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," object that is inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext"),", the code will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"const method = event.requestContext.http.method;\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In some cases, you may not have this information from events such as SQS,\nin these specific cases you need to provide a way to control the path,\nwe recommend you provide a default option and provide a way for the user to customize,\nsuch as the implementation of ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/sqs"},"AWS SQS"),".")),(0,r.kt)("h3",{id:"path"},(0,r.kt)("inlineCode",{parentName:"h3"},"path")),(0,r.kt)("p",null,"The path to use to create the request to the framework."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),", we can grab the path from ",(0,r.kt)("inlineCode",{parentName:"p"},"APIGatewayProxyEventV2"),",\nacessing the property ",(0,r.kt)("inlineCode",{parentName:"p"},"rawPath")," and combining with ",(0,r.kt)("inlineCode",{parentName:"p"},"rawQueryString"),"."),(0,r.kt)("p",null,"Fortunately, this operation is so common that we provide a function to help you with this operation, see above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"import { getPathWithQueryStringParams } from '@h4ad/serverless-adapter';\n\n// ...\n// inside the function `getRequest`\nconst path = event.rawPath;\nconst queryParams = event.rawQueryString;\n\nconst pathWithQueryParams = getPathWithQueryStringParams(path, queryParams);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This implementation deviates from the original implementation for educational purposes only.\nSee the original implementation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter/blob/main/src/adapters/aws/api-gateway-v2.adapter.ts#L194-L210"},"here"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In some cases, you may not have this information from events such as SQS,\nin these specific cases you need to provide a way to control the path,\nwe recommend you provide a default option and provide a way for the user to customize,\nsuch as the implementation of ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/sqs"},"AWS SQS"),".")),(0,r.kt)("h3",{id:"headers"},(0,r.kt)("inlineCode",{parentName:"h3"},"headers")),(0,r.kt)("p",null,"The headers to use to create the request to the framework."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),", we can grab the headers from ",(0,r.kt)("inlineCode",{parentName:"p"},"APIGatewayProxyEventV2"),",\nacessing the property ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),"."),(0,r.kt)("p",null,"But not only need to pass the property ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),", we need to take care of headers not being like ",(0,r.kt)("inlineCode",{parentName:"p"},"\"accept-lang\": ['pt-BR', 'en-US']"),",\nso we will use the helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"getFlattenedHeadersMap"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const headers = getFlattenedHeadersMap(event.headers, ',', true);\n\n// this is a implementation detail for api gateway v2,\n// the cookies is sent from another property instead being\n// sent inside headers property\nif (event.cookies)\n  headers.cookie = event.cookies.join('; ');\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In some cases, you may not have this information from events such as SQS,\nin these specific cases you can just mock the headers with default values,\nsuch as the implementation of ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/sqs"},"AWS SQS"),".")),(0,r.kt)("h3",{id:"body"},(0,r.kt)("inlineCode",{parentName:"h3"},"body")),(0,r.kt)("p",null,"The body as buffer to use to create the request to the framework"),(0,r.kt)("p",null,"Well, the body actually can be anything you want, sometimes you will receive a JSON (eg: Api Gateway), Base64 or just plain javascript objects (eg: AWS SQS).ts"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),", we can grab the body from ",(0,r.kt)("inlineCode",{parentName:"p"},"APIGatewayProxyEventV2"),",\nacessing the property ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," and use the property ",(0,r.kt)("inlineCode",{parentName:"p"},"isBase64Encoded")," to determine if the body is base64."),(0,r.kt)("p",null,"To help to transform the body from JSON or base64 to Buffer, we have the helper ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Core/getEventBodyAsBuffer"},"getEventBodyAsBuffer"),"."),(0,r.kt)("p",null,"The code will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let body: Buffer | undefined;\n\nif (event.body) {\n  const [bufferBody, contentLength] = getEventBodyAsBuffer(\n    event.body,\n    event.isBase64Encoded,\n  );\n\n  body = bufferBody;\n  headers['content-length'] = String(contentLength);\n}\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-length")," header to the value returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"getEventBodyAsBuffer")," function.")),(0,r.kt)("h3",{id:"remoteaddress"},(0,r.kt)("inlineCode",{parentName:"h3"},"remoteAddress")),(0,r.kt)("p",null,"The remote address (client ip) to use to create the request to the framework"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),", we can grab the remote address from ",(0,r.kt)("inlineCode",{parentName:"p"},"APIGatewayProxyEventV2"),",\nacessing the property ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext.http.sourceIp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const remoteAddress = event.requestContext.http.sourceIp;\n")),(0,r.kt)("h3",{id:"host-and-hostname"},(0,r.kt)("inlineCode",{parentName:"h3"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"hostname")),(0,r.kt)("p",null,"Actually these two properties are not used by the library, so you can just ignore."),(0,r.kt)("h2",{id:"implementing-the-getresponse-method"},"Implementing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"getResponse")," method"),(0,r.kt)("p",null,"Maps the response of the framework to a payload that serverless can handle."),(0,r.kt)("p",null,"In other words, do you remember the json from the answer at the beginning of this tutorial?"),(0,r.kt)("p",null,"So you need to return this json and let's see how we can map your function to this response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"public getResponse({\n  headers: responseHeaders,\n  body,\n  isBase64Encoded,\n  statusCode,\n  response,\n}: GetResponseAdapterProps<APIGatewayProxyEventV2>): APIGatewayProxyStructuredResultV2 {\n  const headers = getFlattenedHeadersMap(responseHeaders);\n  const multiValueHeaders = getMultiValueHeadersMap(responseHeaders);\n\n  // I removed content encoding checks for learning purposes only\n  // but in the original version we need to check more things here.\n\n  const cookies = multiValueHeaders['set-cookie'];\n\n  if (headers) delete headers['set-cookie'];\n\n  return {\n    statusCode,\n    body,\n    headers,\n    isBase64Encoded,\n    cookies,\n  };\n}\n")),(0,r.kt)("p",null,"Why did I put all the code? Because in the response, I don't have much to explain because each adapter will have your own implementation for this function."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/sqs"},"AWS SQS")," for example, they don't need to return anything, so the implementation is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sqs.adapter.ts"',title:'"sqs.adapter.ts"'},"public getResponse(): IEmptyResponse {\n  return EmptyResponse;\n}\n")),(0,r.kt)("p",null,"So look closely at the event source documents you are creating the adapter for and try to map as many properties as possible to the properties that the library sends you."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Contracts/AdapterContract/GetResponseAdapterProps"},"GetResponseAdapterProps")," to check which data you have from the response of the framework.")),(0,r.kt)("h2",{id:"implementing-the-onerrorwhileforwarding-method"},"Implementing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"onErrorWhileForwarding")," method"),(0,r.kt)("p",null,"When an error occurs while forwarding the request to the framework.ts"),(0,r.kt)("p",null,"Well, errors can happen and we need to have a way to handle those cases to not messup and not have any information about the error.ts"),(0,r.kt)("p",null,"So this method is used to those specific cases, to ensure how to map the error received to event source deal properly."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/api-gateway-v2"},"AWS Api Gateway V2"),", we handle like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api-gateway-v2.adapter.ts"',title:'"api-gateway-v2.adapter.ts"'},"public onErrorWhileForwarding({\n  error,\n  delegatedResolver,\n  respondWithErrors,\n  event,\n  log,\n}: OnErrorProps<\n  APIGatewayProxyEventV2,\n  APIGatewayProxyStructuredResultV2\n>): void {\n  const body = respondWithErrors ? error.stack : '';\n  const errorResponse = this.getResponse({\n    event,\n    statusCode: 500,\n    body: body || '',\n    headers: {},\n    isBase64Encoded: false,\n    log,\n  });\n\n  delegatedResolver.succeed(errorResponse);\n}\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"respondWithErrors")," flag is enabled, we will return the entire stack trail in the response, so the user will get a 500 error with enough information."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"When implementing this method, you must call ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatedResolver.succeed")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"delegedResolver.fail"),", or your request will not be resolved.")),(0,r.kt)("p",null,"Other adapters may fail when an error occurs, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main/adapters/aws/sqs"},"AWS SQS")," adapter does that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sqs.adapter.ts"',title:'"sqs.adapter.ts"'},"public onErrorWhileForwarding({\n  error,\n  delegatedResolver,\n}: OnErrorProps<SQSEvent, IEmptyResponse>): void {\n  delegatedResolver.fail(error);\n}\n")),(0,r.kt)("h2",{id:"well-done"},"Well Done!"),(0,r.kt)("p",null,"Now you can create your own adapters to plug with any event source that you want."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you get lost while building your adapter, see the source code of other adapters to get some ideas on how to implement your own adapter, you can see the code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter/tree/main/src/adapters"},"here"),".")))}h.isMDXComponent=!0}}]);