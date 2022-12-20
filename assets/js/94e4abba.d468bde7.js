"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2422],{3905:(r,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var o=t(7294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function s(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function p(r,e){if(null==r)return{};var t,o,a=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var i=o.createContext({}),c=function(r){var e=o.useContext(i),t=e;return r&&(t="function"==typeof r?r(e):s(s({},e),r)),t},d=function(r){var e=c(r.components);return o.createElement(i.Provider,{value:e},r.children)},l={inlineCode:"code",wrapper:function(r){var e=r.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(r,e){var t=r.components,a=r.mdxType,n=r.originalType,i=r.parentName,d=p(r,["components","mdxType","originalType","parentName"]),y=c(t),m=a,u=y["".concat(i,".").concat(m)]||y[m]||l[m]||n;return t?o.createElement(u,s(s({ref:e},d),{},{components:t})):o.createElement(u,s({ref:e},d))}));function m(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var n=t.length,s=new Array(n);s[0]=y;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=r,p.mdxType="string"==typeof r?r:a,s[1]=p;for(var c=2;c<n;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1661:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const n={},s=void 0,p={unversionedId:"api/Frameworks/BodyParserFramework/BodyParserOptions",id:"api/Frameworks/BodyParserFramework/BodyParserOptions",title:"BodyParserOptions",description:"@h4ad/serverless-adapter &gt; BodyParserOptions",source:"@site/docs/api/Frameworks/BodyParserFramework/BodyParserOptions.md",sourceDirName:"api/Frameworks/BodyParserFramework",slug:"/api/Frameworks/BodyParserFramework/BodyParserOptions",permalink:"/docs/api/Frameworks/BodyParserFramework/BodyParserOptions",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/BodyParserFramework/BodyParserOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"BaseBodyParserFramework",permalink:"/docs/api/Frameworks/BodyParserFramework/BaseBodyParserFramework"},next:{title:"JsonBodyParserFramework",permalink:"/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/"}},i={},c=[{value:"(type) BodyParserOptions",id:"type-bodyparseroptions",level:2}],d={toc:c};function l(r){let{components:e,...t}=r;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/BodyParserFramework/BodyParserOptions"},"BodyParserOptions")),(0,a.kt)("h2",{id:"type-bodyparseroptions"},"(type) BodyParserOptions"),(0,a.kt)("p",null,"The options for ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/BodyParserFramework/BaseBodyParserFramework"},"BaseBodyParserFramework")),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type BodyParserOptions = {\n    customErrorHandler?: (request: IncomingMessage, response: ServerResponse, error: HttpError<any>) => void;\n};\n")))}l.isMDXComponent=!0}}]);