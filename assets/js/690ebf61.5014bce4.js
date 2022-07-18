"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6981],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>v});var s=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,s,p=function(e,r){if(null==e)return{};var t,s,p={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=s.createContext({}),u=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=u(e.components);return s.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,p=e.mdxType,n=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=u(t),v=p,y=d["".concat(l,".").concat(v)]||d[v]||c[v]||n;return t?s.createElement(y,o(o({ref:r},i),{},{components:t})):s.createElement(y,o({ref:r},i))}));function v(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var n=t.length,o=new Array(n);o[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var u=2;u<n;u++)o[u]=t[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},848:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var s=t(7462),p=(t(7294),t(3905));const n={},o=void 0,a={unversionedId:"api/Network/ServerlessRequest/ServerlessRequestProps",id:"api/Network/ServerlessRequest/ServerlessRequestProps",title:"ServerlessRequestProps",description:"@h4ad/serverless-adapter &gt; ServerlessRequestProps",source:"@site/docs/api/Network/ServerlessRequest/ServerlessRequestProps.md",sourceDirName:"api/Network/ServerlessRequest",slug:"/api/Network/ServerlessRequest/ServerlessRequestProps",permalink:"/serverless-adapter/docs/api/Network/ServerlessRequest/ServerlessRequestProps",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Network/ServerlessRequest/ServerlessRequestProps.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ServerlessRequest",permalink:"/serverless-adapter/docs/api/Network/ServerlessRequest/"},next:{title:"ServerlessResponse",permalink:"/serverless-adapter/docs/api/Network/ServerlessResponse/"}},l={},u=[{value:"(interface) ServerlessRequestProps",id:"interface-serverlessrequestprops",level:2},{value:"(property) body",id:"property-body",level:2},{value:"(property) headers",id:"property-headers",level:2},{value:"(property) method",id:"property-method",level:2},{value:"(property) remoteAddress",id:"property-remoteaddress",level:2},{value:"(property) url",id:"property-url",level:2}],i={toc:u};function c(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,s.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessRequest/ServerlessRequestProps"},"ServerlessRequestProps")),(0,p.kt)("h2",{id:"interface-serverlessrequestprops"},"(interface) ServerlessRequestProps"),(0,p.kt)("p",null,"The properties to create a ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessRequest"},"ServerlessRequest")),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ServerlessRequestProps \n")),(0,p.kt)("h2",{id:"property-body"},"(property) body"),(0,p.kt)("p",null,"The body from the event source"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"body?: Buffer;\n")),(0,p.kt)("h2",{id:"property-headers"},"(property) headers"),(0,p.kt)("p",null,"The headers from the event source"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"headers: SingleValueHeaders;\n")),(0,p.kt)("h2",{id:"property-method"},"(property) method"),(0,p.kt)("p",null,"The HTTP Method of the request"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"method: string;\n")),(0,p.kt)("h2",{id:"property-remoteaddress"},"(property) remoteAddress"),(0,p.kt)("p",null,"The IP Address from caller"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"remoteAddress?: string;\n")),(0,p.kt)("h2",{id:"property-url"},"(property) url"),(0,p.kt)("p",null,"The URL requested"),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"url: string;\n")))}c.isMDXComponent=!0}}]);