"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2180],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(f,o(o({ref:r},c),{},{components:t})):a.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3068:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const s={},o=void 0,p={unversionedId:"api/Core/Headers/parseHeaders",id:"api/Core/Headers/parseHeaders",title:"parseHeaders",description:"@h4ad/serverless-adapter &gt; parseHeaders",source:"@site/docs/api/Core/Headers/parseHeaders.md",sourceDirName:"api/Core/Headers",slug:"/api/Core/Headers/parseHeaders",permalink:"/docs/api/Core/Headers/parseHeaders",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Core/Headers/parseHeaders.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"getMultiValueHeadersMap",permalink:"/docs/api/Core/Headers/getMultiValueHeadersMap"},next:{title:"ILogger",permalink:"/docs/api/Core/Logger/ILogger"}},i={},l=[{value:"(function) parseHeaders",id:"function-parseheaders",level:2},{value:"Parameters",id:"parameters",level:3}],c={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Core/Headers/parseHeaders"},"parseHeaders")),(0,n.kt)("h2",{id:"function-parseheaders"},"(function) parseHeaders"),(0,n.kt)("p",null,"Parse HTTP Raw Headers Attribution to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kesla/parse-headers/blob/master/parse-headers.js"},"https://github.com/kesla/parse-headers/blob/master/parse-headers.js")),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function parseHeaders(headers: string): Record<string, string | string[]>;\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"headers"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The raw headers")))),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("p",null,"Record","<","string, string ","|"," string","[","]",">"))}u.isMDXComponent=!0}}]);