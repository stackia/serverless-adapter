"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(a),u=n,b=l["".concat(s,".").concat(u)]||l[u]||m[u]||o;return a?r.createElement(b,d(d({ref:t},c),{},{components:a})):r.createElement(b,d({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,d=new Array(o);d[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,d[1]=i;for(var p=2;p<o;p++)d[p]=a[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Lambda Edge",description:"See more about how to integrate with AWS Lambda Edge."},d=void 0,i={unversionedId:"main/adapters/aws/lambda-edge",id:"main/adapters/aws/lambda-edge",title:"Lambda Edge",description:"See more about how to integrate with AWS Lambda Edge.",source:"@site/docs/main/adapters/aws/lambda-edge.mdx",sourceDirName:"main/adapters/aws",slug:"/main/adapters/aws/lambda-edge",permalink:"/docs/main/adapters/aws/lambda-edge",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/main/adapters/aws/lambda-edge.mdx",tags:[],version:"current",frontMatter:{title:"Lambda Edge",description:"See more about how to integrate with AWS Lambda Edge."},sidebar:"main",previous:{title:"Function URLs",permalink:"/docs/main/adapters/aws/function-url"},next:{title:"S3",permalink:"/docs/main/adapters/aws/s3"}},s={},p=[],c={toc:p},l="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Honestly, I added this adapter because @vendia/serverless-adapter had already added support for Lambda Edge, but reading my implementation and @vendia's implementation, I never knew if it actually worked because I didn't test it on AWS."),(0,n.kt)("p",null,"So at the moment I'm not going to create any documentation and feel free to test this adapter and see how it behaves."),(0,n.kt)("p",null,"You can read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/H4ad/serverless-adapter/blob/main/src/adapters/aws/lambda-edge.adapter.ts"},"source code here")," to see how the request and response are being assembled, as well as take a look at ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/LambdaEdgeAdapter/LambdaEdgeAdapterOptions"},"LambdaEdgeAdapterOptions")," to see what options you can pass."),(0,n.kt)("p",null,"Despite being lazy to create Lambda Edge documentation, in the code I tried to add as many comments as possible to explain each option."))}m.isMDXComponent=!0}}]);