"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||y[u]||i;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s=void 0,o={unversionedId:"api/Types/BinarySettings/BinarySettingsContentHeaders",id:"api/Types/BinarySettings/BinarySettingsContentHeaders",title:"BinarySettingsContentHeaders",description:"@h4ad/serverless-adapter &gt; BinarySettingsContentHeaders",source:"@site/docs/api/Types/BinarySettings/BinarySettingsContentHeaders.md",sourceDirName:"api/Types/BinarySettings",slug:"/api/Types/BinarySettings/BinarySettingsContentHeaders",permalink:"/serverless-adapter/docs/api/Types/BinarySettings/BinarySettingsContentHeaders",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Types/BinarySettings/BinarySettingsContentHeaders.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"BinarySettings",permalink:"/serverless-adapter/docs/api/Types/BinarySettings/"},next:{title:"BinarySettingsFunction",permalink:"/serverless-adapter/docs/api/Types/BinarySettings/BinarySettingsFunction"}},p={},c=[{value:"(interface) BinarySettingsContentHeaders",id:"interface-binarysettingscontentheaders",level:2},{value:"(property) contentEncodings",id:"property-contentencodings",level:2},{value:"(property) contentTypes",id:"property-contenttypes",level:2}],l={toc:c};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Types/BinarySettings/BinarySettingsContentHeaders"},"BinarySettingsContentHeaders")),(0,a.kt)("h2",{id:"interface-binarysettingscontentheaders"},"(interface) BinarySettingsContentHeaders"),(0,a.kt)("p",null,"The interface representing the binary settings implementation by looking inside the headers"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface BinarySettingsContentHeaders \n")),(0,a.kt)("h2",{id:"property-contentencodings"},"(property) contentEncodings"),(0,a.kt)("p",null,"The list of content encodings that will be treated as binary"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"contentEncodings: string[];\n")),(0,a.kt)("h2",{id:"property-contenttypes"},"(property) contentTypes"),(0,a.kt)("p",null,"The list of content types that will be treated as binary"),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"contentTypes: (string | RegExp)[];\n")))}y.isMDXComponent=!0}}]);