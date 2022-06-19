"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2966],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,w=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(w,o(o({ref:t},l),{},{components:a})):r.createElement(w,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1939:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],p={title:"Huawei Api Gateway",description:"See more about how to integrate with Api Gateway."},s=void 0,u={unversionedId:"main/adapters/huawei/huawei-api-gateway",id:"main/adapters/huawei/huawei-api-gateway",title:"Huawei Api Gateway",description:"See more about how to integrate with Api Gateway.",source:"@site/docs/main/adapters/huawei/huawei-api-gateway.mdx",sourceDirName:"main/adapters/huawei",slug:"/main/adapters/huawei/huawei-api-gateway",permalink:"/serverless-adapter/docs/main/adapters/huawei/huawei-api-gateway",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/huawei/huawei-api-gateway.mdx",tags:[],version:"current",frontMatter:{title:"Huawei Api Gateway",description:"See more about how to integrate with Api Gateway."},sidebar:"main",previous:{title:"Huawei",permalink:"/serverless-adapter/docs/category/huawei"},next:{title:"Handlers",permalink:"/serverless-adapter/docs/category/handlers"}},l={},c=[{value:"About the Adapter",id:"about-the-adapter",level:2},{value:"Usage",id:"usage",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This adapter add support to ",(0,i.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/devg-functiongraph/functiongraph_02_0102.html#functiongraph_02_0102__li5178638110137"},"Huawei Api Gateway")," inside ",(0,i.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/devg-functiongraph/functiongraph_02_0101.html"},"Huawei Function Graph"),"."),(0,i.kt)("h2",{id:"about-the-adapter"},"About the Adapter"),(0,i.kt)("p",null,"When you receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request inside path ",(0,i.kt)("inlineCode",{parentName:"p"},"/users"),", this adapter will forward that request to your framework,\nso you can just plug this adapter and doesn't need any configuration to work."),(0,i.kt)("p",null,"To see which options you can customize, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Adapters/Huawei/HuaweiApiGatewayAdapter/HuaweiApiGatewayOptions"},"HuaweiApiGatewayOptions")," interface."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To add support to Api Gateway you do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { ServerlessAdapter } from '@h4ad/serverless-adapter';\nimport { HuaweiApiGatewayAdapter } from '@h4ad/serverless-adapter/lib/adapters/huawei';\nimport { ExpressFramework } from '@h4ad/serverless-adapter/lib/frameworks/express';\nimport { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';\nimport { CallbackResolver } from '@h4ad/serverless-adapter/lib/resolvers/callback';\nimport app from './app';\n\nexport const handler = ServerlessAdapter.new(app)\n  .setFramework(new ExpressFramework())\n  .setHandler(new DefaultHandler())\n  .setResolver(new CallbackResolver())\n  .addAdapter(new HuaweiApiGatewayAdapter())\n  .build();\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"One important thing")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must use the callback resolver because I couldn't get it to work with the PromiseResolver.\nMaybe it's a bug in the library or something specific in Huawei, if you have a hint please create an issue."))))}m.isMDXComponent=!0}}]);