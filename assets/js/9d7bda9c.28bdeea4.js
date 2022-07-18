"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8687],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(t),d=n,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(k,l(l({ref:r},m),{},{components:t})):a.createElement(k,l({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5307:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const o={},l=void 0,p={unversionedId:"api/Frameworks/KoaFramework/KoaFramework",id:"api/Frameworks/KoaFramework/KoaFramework",title:"KoaFramework",description:"@h4ad/serverless-adapter &gt; KoaFramework",source:"@site/docs/api/Frameworks/KoaFramework/KoaFramework.md",sourceDirName:"api/Frameworks/KoaFramework",slug:"/api/Frameworks/KoaFramework/",permalink:"/serverless-adapter/docs/api/Frameworks/KoaFramework/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/KoaFramework/KoaFramework.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"HapiFramework",permalink:"/serverless-adapter/docs/api/Frameworks/HapiFramework/"},next:{title:"LazyFramework",permalink:"/serverless-adapter/docs/api/Frameworks/LazyFramework/"}},s={},i=[{value:"(class) KoaFramework",id:"class-koaframework",level:2},{value:"(method) sendRequest",id:"method-sendrequest",level:2},{value:"Parameters",id:"parameters",level:3}],m={toc:i};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/KoaFramework"},"KoaFramework")),(0,n.kt)("h2",{id:"class-koaframework"},"(class) KoaFramework"),(0,n.kt)("p",null,"The framework that forwards requests to koa handler"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class KoaFramework implements FrameworkContract<Application> \n")),(0,n.kt)("p",null,"Implements: ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","Application"),(0,n.kt)("h2",{id:"method-sendrequest"},"(method) sendRequest"),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"sendRequest(app: Application, request: IncomingMessage, response: ServerResponse): void;\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app"),(0,n.kt)("td",{parentName:"tr",align:null},"Application"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"request"),(0,n.kt)("td",{parentName:"tr",align:null},"IncomingMessage"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"response"),(0,n.kt)("td",{parentName:"tr",align:null},"ServerResponse"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("p",null,"void"))}c.isMDXComponent=!0}}]);