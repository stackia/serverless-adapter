"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5025],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),v=p(t),f=o,d=v["".concat(l,".").concat(f)]||v[f]||u[f]||a;return t?n.createElement(d,s(s({ref:r},i),{},{components:t})):n.createElement(d,s({ref:r},i))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6646:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],c={},l=void 0,p={unversionedId:"api/Contracts/ResolverContract/Resolver",id:"api/Contracts/ResolverContract/Resolver",title:"Resolver",description:"@h4ad/serverless-adapter &gt; Resolver",source:"@site/docs/api/Contracts/ResolverContract/Resolver.md",sourceDirName:"api/Contracts/ResolverContract",slug:"/api/Contracts/ResolverContract/Resolver",permalink:"/serverless-adapter/docs/api/Contracts/ResolverContract/Resolver",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Contracts/ResolverContract/Resolver.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"DelegatedResolver",permalink:"/serverless-adapter/docs/api/Contracts/ResolverContract/DelegatedResolver"},next:{title:"ResolverProps",permalink:"/serverless-adapter/docs/api/Contracts/ResolverContract/ResolverProps"}},i={},u=[{value:"(type) Resolver",id:"type-resolver",level:2}],v={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Contracts/ResolverContract/Resolver"},"Resolver")),(0,a.kt)("h2",{id:"type-resolver"},"(type) Resolver"),(0,a.kt)("p",null,"The type that represents a resolver used to send the response, error or success, to the client"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type Resolver<TResponse, TReturn> = {\n    run(task: () => Promise<TResponse>): TReturn;\n};\n")))}f.isMDXComponent=!0}}]);