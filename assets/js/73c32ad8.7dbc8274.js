"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7151],{3905:(r,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var t=a(7294);function o(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function n(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,t)}return a}function s(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function p(r,e){if(null==r)return{};var a,t,o=function(r,e){if(null==r)return{};var a,t,o={},n=Object.keys(r);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||(o[a]=r[a]);return o}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(o[a]=r[a])}return o}var l=t.createContext({}),m=function(r){var e=t.useContext(l),a=e;return r&&(a="function"==typeof r?r(e):s(s({},e),r)),a},d=function(r){var e=m(r.components);return t.createElement(l.Provider,{value:e},r.children)},i="mdxType",c={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(r,e){var a=r.components,o=r.mdxType,n=r.originalType,l=r.parentName,d=p(r,["components","mdxType","originalType","parentName"]),i=m(a),k=o,u=i["".concat(l,".").concat(k)]||i[k]||c[k]||n;return a?t.createElement(u,s(s({ref:e},d),{},{components:a})):t.createElement(u,s({ref:e},d))}));function u(r,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var n=a.length,s=new Array(n);s[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=r,p[i]="string"==typeof r?r:o,s[1]=p;for(var m=2;m<n;m++)s[m]=a[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9678:(r,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var t=a(7462),o=(a(7294),a(3905));const n={},s=void 0,p={unversionedId:"api/Frameworks/BodyParserFramework/JsonBodyParserFramework/JsonBodyParserFramework",id:"api/Frameworks/BodyParserFramework/JsonBodyParserFramework/JsonBodyParserFramework",title:"JsonBodyParserFramework",description:"@h4ad/serverless-adapter &gt; JsonBodyParserFramework",source:"@site/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/JsonBodyParserFramework.md",sourceDirName:"api/Frameworks/BodyParserFramework/JsonBodyParserFramework",slug:"/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/",permalink:"/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/JsonBodyParserFramework.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"BodyParserOptions",permalink:"/docs/api/Frameworks/BodyParserFramework/BodyParserOptions"},next:{title:"JsonBodyParserFrameworkOptions",permalink:"/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/JsonBodyParserFrameworkOptions"}},l={},m=[{value:"(class) JsonBodyParserFramework",id:"class-jsonbodyparserframework",level:2},{value:"(constructor)",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"(property) framework",id:"property-framework",level:2}],d={toc:m},i="wrapper";function c(r){let{components:e,...a}=r;return(0,o.kt)(i,(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework"},"JsonBodyParserFramework")),(0,o.kt)("h2",{id:"class-jsonbodyparserframework"},"(class) JsonBodyParserFramework"),(0,o.kt)("p",null,"The body-parser class used to parse application/json."),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class JsonBodyParserFramework<TApp> extends BaseBodyParserFramework<TApp> implements FrameworkContract<TApp> \n")),(0,o.kt)("p",null,"Extends: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/BodyParserFramework/BaseBodyParserFramework"},"BaseBodyParserFramework")," ","<","TApp",">"),(0,o.kt)("p",null,"Implements: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","TApp",">"),(0,o.kt)("h2",{id:"constructor"},"(constructor)"),(0,o.kt)("p",null,"Default Constructor"),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(framework: FrameworkContract<TApp>, options?: JsonBodyParserFrameworkOptions);\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"framework"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","TApp",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/Frameworks/BodyParserFramework/JsonBodyParserFramework/JsonBodyParserFrameworkOptions"},"JsonBodyParserFrameworkOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"(Optional)")))),(0,o.kt)("h2",{id:"property-framework"},"(property) framework"),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"protected readonly framework: FrameworkContract<TApp>;\n")))}c.isMDXComponent=!0}}]);