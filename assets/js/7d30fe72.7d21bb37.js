"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,h=c["".concat(u,".").concat(d)]||c[d]||y[d]||p;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const p={},i=void 0,o={unversionedId:"api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiApiGatewayEvent",id:"api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiApiGatewayEvent",title:"HuaweiApiGatewayEvent",description:"@h4ad/serverless-adapter &gt; HuaweiApiGatewayEvent",source:"@site/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiApiGatewayEvent.md",sourceDirName:"api/Types/Huawei/HuaweiApiGatewayEvent",slug:"/api/Types/Huawei/HuaweiApiGatewayEvent/",permalink:"/docs/api/Types/Huawei/HuaweiApiGatewayEvent/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiApiGatewayEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Concrete",permalink:"/docs/api/Types/Concrete"},next:{title:"HuaweiRequestContext",permalink:"/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestContext"}},u={},s=[{value:"(interface) HuaweiApiGatewayEvent",id:"interface-huaweiapigatewayevent",level:2},{value:"(property) body",id:"property-body",level:2},{value:"(property) headers",id:"property-headers",level:2},{value:"(property) httpMethod",id:"property-httpmethod",level:2},{value:"(property) isBase64Encoded",id:"property-isbase64encoded",level:2},{value:"(property) path",id:"property-path",level:2},{value:"(property) pathParameters",id:"property-pathparameters",level:2},{value:"(property) queryStringParameters",id:"property-querystringparameters",level:2},{value:"(property) requestContext",id:"property-requestcontext",level:2}],l={toc:s},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiApiGatewayEvent"},"HuaweiApiGatewayEvent")),(0,n.kt)("h2",{id:"interface-huaweiapigatewayevent"},"(interface) HuaweiApiGatewayEvent"),(0,n.kt)("p",null,"The interface that represents the Api Gateway Event of Huawei when integrate with Function Graph of Event Type. See more in ",(0,n.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/devg-functiongraph/functiongraph_02_0102.html#functiongraph_02_0102__li5178638110137"},"Reference")," ."),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface HuaweiApiGatewayEvent \n")),(0,n.kt)("h2",{id:"property-body"},"(property) body"),(0,n.kt)("p",null,"The body value with the content of this event serialized in JSON"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"body: string;\n")),(0,n.kt)("h2",{id:"property-headers"},"(property) headers"),(0,n.kt)("p",null,"The headers of the request which this event represents"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"headers: BothValueHeaders;\n")),(0,n.kt)("h2",{id:"property-httpmethod"},"(property) httpMethod"),(0,n.kt)("p",null,"The HTTP Method of the request which this event represents"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"httpMethod: string;\n")),(0,n.kt)("h2",{id:"property-isbase64encoded"},"(property) isBase64Encoded"),(0,n.kt)("p",null,"Tells if the body is base64 encoded"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"isBase64Encoded: boolean;\n")),(0,n.kt)("h2",{id:"property-path"},"(property) path"),(0,n.kt)("p",null,"The path of the request which this event represents"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"path: string;\n")),(0,n.kt)("h2",{id:"property-pathparameters"},"(property) pathParameters"),(0,n.kt)("p",null,"The path parameters of the request which this event represents"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"pathParameters: HuaweiRequestPathParameters;\n")),(0,n.kt)("h2",{id:"property-querystringparameters"},"(property) queryStringParameters"),(0,n.kt)("p",null,"The query strings of the request which this event represents"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"queryStringParameters: HuaweiRequestQueryStringParameters;\n")),(0,n.kt)("h2",{id:"property-requestcontext"},"(property) requestContext"),(0,n.kt)("p",null,"The request context with information about the stage, api and requestId"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"requestContext: HuaweiRequestContext;\n")))}y.isMDXComponent=!0}}]);