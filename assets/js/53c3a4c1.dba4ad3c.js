"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},S=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),S=n,f=c["".concat(i,".").concat(S)]||c[S]||u[S]||p;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=S;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<p;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}S.displayName="MDXCreateElement"},6835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const p={},o=void 0,s={unversionedId:"api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",id:"api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",title:"SNSAdapterOptions",description:"@h4ad/serverless-adapter &gt; SNSAdapterOptions",source:"@site/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions.md",sourceDirName:"api/Adapters/AWS/SNSAdapter",slug:"/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",permalink:"/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"SNSAdapter",permalink:"/docs/api/Adapters/AWS/SNSAdapter/"},next:{title:"SQSAdapter",permalink:"/docs/api/Adapters/AWS/SQSAdapter/"}},i={},d=[{value:"(interface) SNSAdapterOptions",id:"interface-snsadapteroptions",level:2},{value:"(property) snsForwardMethod",id:"property-snsforwardmethod",level:2},{value:"(property) snsForwardPath",id:"property-snsforwardpath",level:2}],l={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions"},"SNSAdapterOptions")),(0,n.kt)("h2",{id:"interface-snsadapteroptions"},"(interface) SNSAdapterOptions"),(0,n.kt)("p",null,"The options to customize the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SNSAdapter"},"SNSAdapter")),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SNSAdapterOptions \n")),(0,n.kt)("h2",{id:"property-snsforwardmethod"},"(property) snsForwardMethod"),(0,n.kt)("p",null,"The http method that will be used to create a request to be forwarded to the framework."),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"snsForwardMethod?: string;\n")),(0,n.kt)("h2",{id:"property-snsforwardpath"},"(property) snsForwardPath"),(0,n.kt)("p",null,"The path that will be used to create a request to be forwarded to the framework."),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"snsForwardPath?: string;\n")))}u.isMDXComponent=!0}}]);