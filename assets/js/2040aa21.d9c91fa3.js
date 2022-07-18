"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),w=o(a),y=n,m=w["".concat(p,".").concat(y)]||w[y]||l[y]||i;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=w;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var o=2;o<i;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}w.displayName="MDXCreateElement"},3750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const i={},s=void 0,u={unversionedId:"api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters",id:"api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters",title:"HuaweiRequestPathParameters",description:"@h4ad/serverless-adapter &gt; HuaweiRequestPathParameters",source:"@site/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters.md",sourceDirName:"api/Types/Huawei/HuaweiApiGatewayEvent",slug:"/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters",permalink:"/serverless-adapter/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"HuaweiRequestContext",permalink:"/serverless-adapter/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestContext"},next:{title:"HuaweiRequestQueryStringParameters",permalink:"/serverless-adapter/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestQueryStringParameters"}},p={},o=[{value:"(type) HuaweiRequestPathParameters",id:"type-huaweirequestpathparameters",level:2}],c={toc:o};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiApiGatewayEvent/HuaweiRequestPathParameters"},"HuaweiRequestPathParameters")),(0,n.kt)("h2",{id:"type-huaweirequestpathparameters"},"(type) HuaweiRequestPathParameters"),(0,n.kt)("p",null,"The path parameters of the request, usually is the name of the wildcard you create in FunctionGraph, such as / { proxy } ."),(0,n.kt)("p",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type HuaweiRequestPathParameters = Record<string, string>;\n")))}l.isMDXComponent=!0}}]);