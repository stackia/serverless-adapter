"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(r),v=a,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,s={unversionedId:"api/Contracts/ResolverContract/ResolverContract",id:"api/Contracts/ResolverContract/ResolverContract",title:"ResolverContract",description:"@h4ad/serverless-adapter &gt; ResolverContract",source:"@site/docs/api/Contracts/ResolverContract/ResolverContract.md",sourceDirName:"api/Contracts/ResolverContract",slug:"/api/Contracts/ResolverContract/",permalink:"/serverless-adapter/docs/api/Contracts/ResolverContract/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Contracts/ResolverContract/ResolverContract.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ServerlessHandler",permalink:"/serverless-adapter/docs/api/Contracts/HandlerContract/ServerlessHandler"},next:{title:"DelegatedResolver",permalink:"/serverless-adapter/docs/api/Contracts/ResolverContract/DelegatedResolver"}},c={},p=[{value:"(interface) ResolverContract",id:"interface-resolvercontract",level:2},{value:"(method) createResolver",id:"method-createresolver",level:2},{value:"Parameters",id:"parameters",level:3}],i={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract"},"ResolverContract")),(0,a.kt)("h2",{id:"interface-resolvercontract"},"(interface) ResolverContract"),(0,a.kt)("p",null,"The interface that represents the contract used to send the response to the client"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ResolverContract<TEvent, TContext, TCallback, TResponse, TReturn> \n")),(0,a.kt)("h2",{id:"method-createresolver"},"(method) createResolver"),(0,a.kt)("p",null,"Create the resolver based on the context, callback or promise"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"createResolver(props: ResolverProps<TEvent, TContext, TCallback, TResponse>): Resolver<TResponse, TReturn>;\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/Contracts/ResolverContract/ResolverProps"},"ResolverProps")," ","<","TEvent, TContext, TCallback, TResponse",">"),(0,a.kt)("td",{parentName:"tr",align:null},"The props used to create the resolver")))),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract/Resolver"},"Resolver")," ","<","TResponse, TReturn",">"))}u.isMDXComponent=!0}}]);