"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5842],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>u});var a=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=l,k=d["".concat(c,".").concat(u)]||d[u]||v[u]||n;return t?a.createElement(k,s(s({ref:r},i),{},{components:t})):a.createElement(k,s({ref:r},i))}));function u(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,s=new Array(n);s[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<n;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4062:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const n={},s=void 0,o={unversionedId:"api/Resolvers/CallbackResolver/CallbackResolver",id:"api/Resolvers/CallbackResolver/CallbackResolver",title:"CallbackResolver",description:"@h4ad/serverless-adapter &gt; CallbackResolver",source:"@site/docs/api/Resolvers/CallbackResolver/CallbackResolver.md",sourceDirName:"api/Resolvers/CallbackResolver",slug:"/api/Resolvers/CallbackResolver/",permalink:"/serverless-adapter/docs/api/Resolvers/CallbackResolver/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Resolvers/CallbackResolver/CallbackResolver.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"AwsContextResolver",permalink:"/serverless-adapter/docs/api/Resolvers/AwsContextResolver/"},next:{title:"ServerlessCallback",permalink:"/serverless-adapter/docs/api/Resolvers/CallbackResolver/ServerlessCallback"}},c={},p=[{value:"(class) CallbackResolver",id:"class-callbackresolver",level:2},{value:"Remarks",id:"remarks",level:2},{value:"(method) createResolver",id:"method-createresolver",level:2},{value:"Parameters",id:"parameters",level:3}],i={toc:p};function v(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Resolvers/CallbackResolver"},"CallbackResolver")),(0,l.kt)("h2",{id:"class-callbackresolver"},"(class) CallbackResolver"),(0,l.kt)("p",null,"The class that implements the resolver using the callback function sent by serverless"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CallbackResolver<TEvent, TContext, TResponse> implements ResolverContract<TEvent, TContext, ServerlessCallback<any>, TResponse, void> \n")),(0,l.kt)("p",null,"Implements: ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract"},"ResolverContract")," ","<","TEvent, TContext, ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Resolvers/CallbackResolver/ServerlessCallback"},"ServerlessCallback")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"To use this resolver on AWS, you MUST leave ",(0,l.kt)("inlineCode",{parentName:"p"},"{@link https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html | callbackWaitsForEmptyEventLoop}")," as true, otherwise, AWS will not wait for this resolver to resolve."),(0,l.kt)("h2",{id:"method-createresolver"},"(method) createResolver"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"createResolver({ callback, event, log, respondWithErrors, adapter, }: ResolverProps<TEvent, TContext, ServerlessCallback<any>, TResponse>): Resolver<any, void>;\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{ callback, event, log, respondWithErrors, adapter, }"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/ResolverContract/ResolverProps"},"ResolverProps")," ","<","TEvent, TContext, ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/Resolvers/CallbackResolver/ServerlessCallback"},"ServerlessCallback")," ","<","any",">",", TResponse",">"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract/Resolver"},"Resolver")," ","<","any, void",">"))}v.isMDXComponent=!0}}]);