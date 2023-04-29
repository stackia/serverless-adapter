"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2236],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(t),v=n,d=m["".concat(s,".").concat(v)]||m[v]||u[v]||a;return t?o.createElement(d,l(l({ref:r},c),{},{components:t})):o.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=v;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8713:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=t(7462),n=(t(7294),t(3905));const a={},l=void 0,p={unversionedId:"api/Frameworks/ApolloServerFramework/ApolloServerContextArguments",id:"api/Frameworks/ApolloServerFramework/ApolloServerContextArguments",title:"ApolloServerContextArguments",description:"@h4ad/serverless-adapter &gt; ApolloServerContextArguments",source:"@site/docs/api/Frameworks/ApolloServerFramework/ApolloServerContextArguments.md",sourceDirName:"api/Frameworks/ApolloServerFramework",slug:"/api/Frameworks/ApolloServerFramework/ApolloServerContextArguments",permalink:"/docs/api/Frameworks/ApolloServerFramework/ApolloServerContextArguments",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/ApolloServerFramework/ApolloServerContextArguments.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ApolloServerFramework",permalink:"/docs/api/Frameworks/ApolloServerFramework/"},next:{title:"ApolloServerOptions",permalink:"/docs/api/Frameworks/ApolloServerFramework/ApolloServerOptions"}},s={},i=[{value:"(type) ApolloServerContextArguments",id:"type-apolloservercontextarguments",level:2}],c={toc:i},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/ApolloServerFramework/ApolloServerContextArguments"},"ApolloServerContextArguments")),(0,n.kt)("h2",{id:"type-apolloservercontextarguments"},"(type) ApolloServerContextArguments"),(0,n.kt)("p",null,"The arguments used to create a Context inside ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/ApolloServerFramework/ApolloServerOptions"},"ApolloServerOptions")),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ApolloServerContextArguments = {\n    request: IncomingMessage;\n    response: ServerResponse;\n};\n")))}u.isMDXComponent=!0}}]);