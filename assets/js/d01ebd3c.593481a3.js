"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5842],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return d}});var a=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,k=u["".concat(c,".").concat(d)]||u[d]||v[d]||n;return t?a.createElement(k,o(o({ref:r},i),{},{components:t})):a.createElement(k,o({ref:r},i))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<n;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4062:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return v}});var a=t(7462),l=t(3366),n=(t(7294),t(3905)),o=["components"],s={},c=void 0,p={unversionedId:"api/Resolvers/CallbackResolver/CallbackResolver",id:"api/Resolvers/CallbackResolver/CallbackResolver",title:"CallbackResolver",description:"@h4ad/serverless-adapter &gt; CallbackResolver",source:"@site/docs/api/Resolvers/CallbackResolver/CallbackResolver.md",sourceDirName:"api/Resolvers/CallbackResolver",slug:"/api/Resolvers/CallbackResolver/",permalink:"/serverless-adapter/docs/api/Resolvers/CallbackResolver/",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Resolvers/CallbackResolver/CallbackResolver.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"AwsContextResolver",permalink:"/serverless-adapter/docs/api/Resolvers/AwsContextResolver/"},next:{title:"ServerlessCallback",permalink:"/serverless-adapter/docs/api/Resolvers/CallbackResolver/ServerlessCallback"}},i={},v=[{value:"(class) CallbackResolver",id:"class-callbackresolver",level:2},{value:"Remarks",id:"remarks",level:2},{value:"(method) createResolver",id:"method-createresolver",level:2},{value:"Parameters",id:"parameters",level:3}],u={toc:v};function d(e){var r=e.components,t=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Resolvers/CallbackResolver"},"CallbackResolver")),(0,n.kt)("h2",{id:"class-callbackresolver"},"(class) CallbackResolver"),(0,n.kt)("p",null,"The class that implements the resolver using the callback function sent by serverless"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CallbackResolver<TEvent, TContext, TResponse> implements ResolverContract<TEvent, TContext, ServerlessCallback<any>, TResponse, void> \n")),(0,n.kt)("p",null,"Implements: ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract"},"ResolverContract")," ","<","TEvent, TContext, ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Resolvers/CallbackResolver/ServerlessCallback"},"ServerlessCallback")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"To use this resolver on AWS, you MUST leave ",(0,n.kt)("inlineCode",{parentName:"p"},"{@link https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html | callbackWaitsForEmptyEventLoop}")," as true, otherwise, AWS will not wait for this resolver to resolve."),(0,n.kt)("h2",{id:"method-createresolver"},"(method) createResolver"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"createResolver({ callback, event, log, respondWithErrors, adapter, }: ResolverProps<TEvent, TContext, ServerlessCallback<any>, TResponse>): Resolver<any, void>;\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"{ callback, event, log, respondWithErrors, adapter, }"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/Contracts/ResolverContract/ResolverProps"},"ResolverProps")," ","<","TEvent, TContext, ",(0,n.kt)("a",{parentName:"td",href:"/docs/api/Resolvers/CallbackResolver/ServerlessCallback"},"ServerlessCallback")," ","<","any",">",", TResponse",">"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract/Resolver"},"Resolver")," ","<","any, void",">"))}d.isMDXComponent=!0}}]);