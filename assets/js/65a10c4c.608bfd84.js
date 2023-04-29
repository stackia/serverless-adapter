"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1607],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var l=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,l,a=function(e,r){if(null==e)return{};var t,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=l.createContext({}),p=function(e){var r=l.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return l.createElement(c.Provider,{value:r},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},b=l.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,d=u["".concat(c,".").concat(b)]||u[b]||v[b]||n;return t?l.createElement(d,s(s({ref:r},i),{},{components:t})):l.createElement(d,s({ref:r},i))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=b;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<n;p++)s[p]=t[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4992:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const n={},s=void 0,o={unversionedId:"api/Resolvers/CallbackResolver/ServerlessCallback",id:"api/Resolvers/CallbackResolver/ServerlessCallback",title:"ServerlessCallback",description:"@h4ad/serverless-adapter &gt; ServerlessCallback",source:"@site/docs/api/Resolvers/CallbackResolver/ServerlessCallback.md",sourceDirName:"api/Resolvers/CallbackResolver",slug:"/api/Resolvers/CallbackResolver/ServerlessCallback",permalink:"/docs/api/Resolvers/CallbackResolver/ServerlessCallback",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Resolvers/CallbackResolver/ServerlessCallback.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"CallbackResolver",permalink:"/docs/api/Resolvers/CallbackResolver/"},next:{title:"DummyResolver",permalink:"/docs/api/Resolvers/DummyResolver/"}},c={},p=[{value:"(type) ServerlessCallback",id:"type-serverlesscallback",level:2}],i={toc:p},u="wrapper";function v(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,l.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Resolvers/CallbackResolver/ServerlessCallback"},"ServerlessCallback")),(0,a.kt)("h2",{id:"type-serverlesscallback"},"(type) ServerlessCallback"),(0,a.kt)("p",null,"The default signature of the callback sent by serverless"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ServerlessCallback<TResponse> = (error: Error | null, success: TResponse | null) => void;\n")))}v.isMDXComponent=!0}}]);