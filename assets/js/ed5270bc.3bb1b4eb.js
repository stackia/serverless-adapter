"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3335],{3905:(e,r,t)=>{t.d(r,{Zo:()=>g,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},g=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return t?n.createElement(f,l(l({ref:r},g),{},{components:t})):n.createElement(f,l({ref:r},g))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9596:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"api/Core/Logger/isInternalLogger",id:"api/Core/Logger/isInternalLogger",title:"isInternalLogger",description:"@h4ad/serverless-adapter &gt; isInternalLogger",source:"@site/docs/api/Core/Logger/isInternalLogger.md",sourceDirName:"api/Core/Logger",slug:"/api/Core/Logger/isInternalLogger",permalink:"/docs/api/Core/Logger/isInternalLogger",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Core/Logger/isInternalLogger.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"createDefaultLogger",permalink:"/docs/api/Core/Logger/createDefaultLogger"},next:{title:"NO_OP",permalink:"/docs/api/Core/NO_OP"}},p={},c=[{value:"(function) isInternalLogger",id:"function-isinternallogger",level:2},{value:"Parameters",id:"parameters",level:3}],g={toc:c},s="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Core/Logger/isInternalLogger"},"isInternalLogger")),(0,a.kt)("h2",{id:"function-isinternallogger"},"(function) isInternalLogger"),(0,a.kt)("p",null,"The method used to chck if logger was created by this library, or it was defined by the user."),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function isInternalLogger(logger: ILogger): boolean;\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logger"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,a.kt)("td",{parentName:"tr",align:null},"The instance of the logger to check")))),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("p",null,"boolean"))}u.isMDXComponent=!0}}]);