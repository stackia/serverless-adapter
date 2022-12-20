"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6003],{3905:(r,e,o)=>{o.d(e,{Zo:()=>i,kt:()=>y});var a=o(7294);function t(r,e,o){return e in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,a)}return o}function s(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function d(r,e){if(null==r)return{};var o,a,t=function(r,e){if(null==r)return{};var o,a,t={},n=Object.keys(r);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(t[o]=r[o]);return t}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(r,o)&&(t[o]=r[o])}return t}var p=a.createContext({}),c=function(r){var e=a.useContext(p),o=e;return r&&(o="function"==typeof r?r(e):s(s({},e),r)),o},i=function(r){var e=c(r.components);return a.createElement(p.Provider,{value:e},r.children)},l={inlineCode:"code",wrapper:function(r){var e=r.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(r,e){var o=r.components,t=r.mdxType,n=r.originalType,p=r.parentName,i=d(r,["components","mdxType","originalType","parentName"]),m=c(o),y=t,k=m["".concat(p,".").concat(y)]||m[y]||l[y]||n;return o?a.createElement(k,s(s({ref:e},i),{},{components:o})):a.createElement(k,s({ref:e},i))}));function y(r,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof r||t){var n=o.length,s=new Array(n);s[0]=m;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=r,d.mdxType="string"==typeof r?r:t,s[1]=d;for(var c=2;c<n;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9529:(r,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var a=o(7462),t=(o(7294),o(3905));const n={},s=void 0,d={unversionedId:"api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions",id:"api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions",title:"UrlencodedBodyParserFrameworkOptions",description:"@h4ad/serverless-adapter &gt; UrlencodedBodyParserFrameworkOptions",source:"@site/docs/api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions.md",sourceDirName:"api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework",slug:"/api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions",permalink:"/docs/api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"UrlencodedBodyParserFramework",permalink:"/docs/api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/"},next:{title:"CorsFramework",permalink:"/docs/api/Frameworks/CorsFramework/"}},p={},c=[{value:"(type) UrlencodedBodyParserFrameworkOptions",id:"type-urlencodedbodyparserframeworkoptions",level:2},{value:"Remarks",id:"remarks",level:2}],i={toc:c};function l(r){let{components:e,...o}=r;return(0,t.kt)("wrapper",(0,a.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,t.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/BodyParserFramework/UrlencodedBodyParserFramework/UrlencodedBodyParserFrameworkOptions"},"UrlencodedBodyParserFrameworkOptions")),(0,t.kt)("h2",{id:"type-urlencodedbodyparserframeworkoptions"},"(type) UrlencodedBodyParserFrameworkOptions"),(0,t.kt)("p",null,"The body parser options for application/x-www-form-urlencoded"),(0,t.kt)("p",null,"Signature:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type UrlencodedBodyParserFrameworkOptions = OptionsUrlencoded & BodyParserOptions;\n")),(0,t.kt)("p",null,"References: ",(0,t.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/BodyParserFramework/BodyParserOptions"},"BodyParserOptions")),(0,t.kt)("h2",{id:"remarks"},"Remarks"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/expressjs/body-parser#bodyparserurlencodedoptions"},"https://github.com/expressjs/body-parser","#","bodyparserurlencodedoptions")))}l.isMDXComponent=!0}}]);