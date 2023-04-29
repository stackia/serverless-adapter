"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=c(r),y=p,m=i["".concat(l,".").concat(y)]||i[y]||u[y]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[i]="string"==typeof e?e:p,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),p=(r(7294),r(3905));const a={},o=void 0,s={unversionedId:"api/Contracts/AdapterContract/GetResponseAdapterProps",id:"api/Contracts/AdapterContract/GetResponseAdapterProps",title:"GetResponseAdapterProps",description:"@h4ad/serverless-adapter &gt; GetResponseAdapterProps",source:"@site/docs/api/Contracts/AdapterContract/GetResponseAdapterProps.md",sourceDirName:"api/Contracts/AdapterContract",slug:"/api/Contracts/AdapterContract/GetResponseAdapterProps",permalink:"/docs/api/Contracts/AdapterContract/GetResponseAdapterProps",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Contracts/AdapterContract/GetResponseAdapterProps.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"AdapterRequest",permalink:"/docs/api/Contracts/AdapterContract/AdapterRequest"},next:{title:"OnErrorProps",permalink:"/docs/api/Contracts/AdapterContract/OnErrorProps"}},l={},c=[{value:"(interface) GetResponseAdapterProps",id:"interface-getresponseadapterprops",level:2},{value:"(property) body",id:"property-body",level:2},{value:"(property) event",id:"property-event",level:2},{value:"(property) headers",id:"property-headers",level:2},{value:"(property) isBase64Encoded",id:"property-isbase64encoded",level:2},{value:"(property) log",id:"property-log",level:2},{value:"(property) response",id:"property-response",level:2},{value:"Remarks",id:"remarks",level:2},{value:"(property) statusCode",id:"property-statuscode",level:2}],d={toc:c},i="wrapper";function u(e){let{components:t,...r}=e;return(0,p.kt)(i,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Contracts/AdapterContract/GetResponseAdapterProps"},"GetResponseAdapterProps")),(0,p.kt)("h2",{id:"interface-getresponseadapterprops"},"(interface) GetResponseAdapterProps"),(0,p.kt)("p",null,"The props of the method that get the response from the framework and transform it into a format that the event source can handle"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface GetResponseAdapterProps<TEvent> \n")),(0,p.kt)("h2",{id:"property-body"},"(property) body"),(0,p.kt)("p",null,"The framework response body"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"body: string;\n")),(0,p.kt)("h2",{id:"property-event"},"(property) event"),(0,p.kt)("p",null,"The event sent by the serverless"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"event: TEvent;\n")),(0,p.kt)("h2",{id:"property-headers"},"(property) headers"),(0,p.kt)("p",null,"The framework response headers"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"headers: BothValueHeaders;\n")),(0,p.kt)("h2",{id:"property-isbase64encoded"},"(property) isBase64Encoded"),(0,p.kt)("p",null,"Indicates whether the response is base64 encoded or not"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"isBase64Encoded: boolean;\n")),(0,p.kt)("h2",{id:"property-log"},"(property) log"),(0,p.kt)("p",null,"The instance of the logger"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"log: ILogger;\n")),(0,p.kt)("h2",{id:"property-response"},"(property) response"),(0,p.kt)("p",null,"The framework ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessResponse"},"response")," ."),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"response?: ServerlessResponse;\n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"It can be optional, as this method can be used when an error occurs during the handling of the request by the framework."),(0,p.kt)("h2",{id:"property-statuscode"},"(property) statusCode"),(0,p.kt)("p",null,"The framework response status code"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"statusCode: number;\n")))}u.isMDXComponent=!0}}]);