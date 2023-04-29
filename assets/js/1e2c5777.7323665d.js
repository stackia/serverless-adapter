"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},S=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),S=p,f=c["".concat(i,".").concat(S)]||c[S]||u[S]||n;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,o=new Array(n);o[0]=S;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:p,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}S.displayName="MDXCreateElement"},2131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(7462),p=(r(7294),r(3905));const n={},o=void 0,s={unversionedId:"api/Adapters/AWS/SQSAdapter/SQSAdapterOptions",id:"api/Adapters/AWS/SQSAdapter/SQSAdapterOptions",title:"SQSAdapterOptions",description:"@h4ad/serverless-adapter &gt; SQSAdapterOptions",source:"@site/docs/api/Adapters/AWS/SQSAdapter/SQSAdapterOptions.md",sourceDirName:"api/Adapters/AWS/SQSAdapter",slug:"/api/Adapters/AWS/SQSAdapter/SQSAdapterOptions",permalink:"/docs/api/Adapters/AWS/SQSAdapter/SQSAdapterOptions",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Adapters/AWS/SQSAdapter/SQSAdapterOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"SQSAdapter",permalink:"/docs/api/Adapters/AWS/SQSAdapter/"},next:{title:"ApolloServerMutationAdapter",permalink:"/docs/api/Adapters/Apollo Server/ApolloServerMutationAdapter/"}},i={},d=[{value:"(interface) SQSAdapterOptions",id:"interface-sqsadapteroptions",level:2},{value:"(property) sqsForwardMethod",id:"property-sqsforwardmethod",level:2},{value:"(property) sqsForwardPath",id:"property-sqsforwardpath",level:2}],l={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,p.kt)(c,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SQSAdapter/SQSAdapterOptions"},"SQSAdapterOptions")),(0,p.kt)("h2",{id:"interface-sqsadapteroptions"},"(interface) SQSAdapterOptions"),(0,p.kt)("p",null,"The options to customize the ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SQSAdapter"},"SQSAdapter")),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SQSAdapterOptions extends Pick<AWSSimpleAdapterOptions, 'batch'> \n")),(0,p.kt)("p",null,"Extends: Pick","<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/AWS%20Simple%20Adapter/AWSSimpleAdapterOptions"},"AWSSimpleAdapterOptions")," , 'batch'",">"),(0,p.kt)("h2",{id:"property-sqsforwardmethod"},"(property) sqsForwardMethod"),(0,p.kt)("p",null,"The http method that will be used to create a request to be forwarded to the framework."),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"sqsForwardMethod?: string;\n")),(0,p.kt)("h2",{id:"property-sqsforwardpath"},"(property) sqsForwardPath"),(0,p.kt)("p",null,"The path that will be used to create a request to be forwarded to the framework."),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"sqsForwardPath?: string;\n")))}u.isMDXComponent=!0}}]);