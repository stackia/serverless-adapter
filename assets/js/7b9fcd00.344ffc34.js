"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7303],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),y=n,w=d["".concat(s,".").concat(y)]||d[y]||c[y]||p;return r?a.createElement(w,i(i({ref:t},l),{},{components:r})):a.createElement(w,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<p;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4504:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),p=(r(7294),r(3905)),i=["components"],o={},s=void 0,u={unversionedId:"api/Types/Huawei/HuaweiApiGatewayResponse/HuaweiApiGatewayResponse",id:"api/Types/Huawei/HuaweiApiGatewayResponse/HuaweiApiGatewayResponse",title:"HuaweiApiGatewayResponse",description:"@h4ad/serverless-adapter &gt; HuaweiApiGatewayResponse",source:"@site/docs/api/Types/Huawei/HuaweiApiGatewayResponse/HuaweiApiGatewayResponse.md",sourceDirName:"api/Types/Huawei/HuaweiApiGatewayResponse",slug:"/api/Types/Huawei/HuaweiApiGatewayResponse/",permalink:"/serverless-adapter/docs/api/Types/Huawei/HuaweiApiGatewayResponse/",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Types/Huawei/HuaweiApiGatewayResponse/HuaweiApiGatewayResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"HuaweiRequestQueryStringParameters",permalink:"/serverless-adapter/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestQueryStringParameters"},next:{title:"HuaweiContext",permalink:"/serverless-adapter/docs/api/Types/Huawei/HuaweiContext/"}},l={},c=[{value:"(interface) HuaweiApiGatewayResponse",id:"interface-huaweiapigatewayresponse",level:2},{value:"(property) body",id:"property-body",level:2},{value:"(property) headers",id:"property-headers",level:2},{value:"(property) isBase64Encoded",id:"property-isbase64encoded",level:2},{value:"(property) statusCode",id:"property-statuscode",level:2}],d={toc:c};function y(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiApiGatewayResponse"},"HuaweiApiGatewayResponse")),(0,p.kt)("h2",{id:"interface-huaweiapigatewayresponse"},"(interface) HuaweiApiGatewayResponse"),(0,p.kt)("p",null,"The interface that represents the Api Gateway Response of Huawei when integrate with Function Graph of Event Type. See more in ",(0,p.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/devg-functiongraph/functiongraph_02_0102.html#functiongraph_02_0102__li5178638110137"},"Reference")," ."),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface HuaweiApiGatewayResponse \n")),(0,p.kt)("h2",{id:"property-body"},"(property) body"),(0,p.kt)("p",null,"The body value with the content of this response serialized in JSON"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"body: string;\n")),(0,p.kt)("h2",{id:"property-headers"},"(property) headers"),(0,p.kt)("p",null,"The headers sent with this response"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"headers: MultiValueHeaders;\n")),(0,p.kt)("h2",{id:"property-isbase64encoded"},"(property) isBase64Encoded"),(0,p.kt)("p",null,"Tells if the body was encoded as base64"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"isBase64Encoded: boolean;\n")),(0,p.kt)("h2",{id:"property-statuscode"},"(property) statusCode"),(0,p.kt)("p",null,"The HTTP Status code of this response"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"statusCode: number;\n")))}y.isMDXComponent=!0}}]);