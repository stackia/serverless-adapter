"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},H=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),H=a,f=c["".concat(l,".").concat(H)]||c[H]||d[H]||p;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=H;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}H.displayName="MDXCreateElement"},686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const p={},i=void 0,o={unversionedId:"api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions",id:"api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions",title:"HttpHuaweiHandlerOptions",description:"@h4ad/serverless-adapter &gt; HttpHuaweiHandlerOptions",source:"@site/docs/api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions.md",sourceDirName:"api/Handlers/HttpHuaweiHandler",slug:"/api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions",permalink:"/docs/api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"DEFAULT_HUAWEI_LISTEN_PORT",permalink:"/docs/api/Handlers/HttpHuaweiHandler/DEFAULT_HUAWEI_LISTEN_PORT"},next:{title:"ServerlessRequest",permalink:"/docs/api/Network/ServerlessRequest/"}},l={},s=[{value:"(type) HttpHuaweiHandlerOptions",id:"type-httphuaweihandleroptions",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Handlers/HttpHuaweiHandler/HttpHuaweiHandlerOptions"},"HttpHuaweiHandlerOptions")),(0,a.kt)("h2",{id:"type-httphuaweihandleroptions"},"(type) HttpHuaweiHandlerOptions"),(0,a.kt)("p",null,"The options to customize ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Handlers/HttpHuaweiHandler"},"HttpHuaweiHandler")),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type HttpHuaweiHandlerOptions = {\n    port?: number;\n    httpServerFactory?: (requestListener: RequestListener) => http.Server;\n};\n")))}d.isMDXComponent=!0}}]);