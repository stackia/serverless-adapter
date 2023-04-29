"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>A});var p=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,p,a=function(e,t){if(null==e)return{};var r,p,a={},n=Object.keys(e);for(p=0;p<n.length;p++)r=n[p],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)r=n[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=p.createContext({}),s=function(e){var t=p.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return p.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,A=c["".concat(l,".").concat(m)]||c[m]||u[m]||n;return r?p.createElement(A,o(o({ref:t},d),{},{components:r})):p.createElement(A,o({ref:t},d))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<n;s++)o[s]=r[s];return p.createElement.apply(null,o)}return p.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var p=r(7462),a=(r(7294),r(3905));const n={},o=void 0,i={unversionedId:"api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterOptions",id:"api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterOptions",title:"AWSSimpleAdapterOptions",description:"@h4ad/serverless-adapter &gt; AWSSimpleAdapterOptions",source:"@site/docs/api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterOptions.md",sourceDirName:"api/Adapters/AWS/AWS Simple Adapter",slug:"/api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterOptions",permalink:"/docs/api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterOptions",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"AWSStreamResponseMetadata",permalink:"/docs/api/AWSStreamResponseMetadata"},next:{title:"AWSSimpleAdapterResponseType",permalink:"/docs/api/Adapters/AWS/AWS Simple Adapter/AWSSimpleAdapterResponseType"}},l={},s=[{value:"(interface) AWSSimpleAdapterOptions",id:"interface-awssimpleadapteroptions",level:2},{value:"(property) batch",id:"property-batch",level:2},{value:"(property) forwardMethod",id:"property-forwardmethod",level:2},{value:"(property) forwardPath",id:"property-forwardpath",level:2},{value:"(property) host",id:"property-host",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/AWS%20Simple%20Adapter/AWSSimpleAdapterOptions"},"AWSSimpleAdapterOptions")),(0,a.kt)("h2",{id:"interface-awssimpleadapteroptions"},"(interface) AWSSimpleAdapterOptions"),(0,a.kt)("p",null,"The options to customize the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/AWS%20Simple%20Adapter/AwsSimpleAdapter"},"AwsSimpleAdapter")),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AWSSimpleAdapterOptions \n")),(0,a.kt)("h2",{id:"property-batch"},"(property) batch"),(0,a.kt)("p",null,"Tells if this adapter should support batch item failures."),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"batch?: true | false;\n")),(0,a.kt)("h2",{id:"property-forwardmethod"},"(property) forwardMethod"),(0,a.kt)("p",null,"The http method that will be used to create a request to be forwarded to the framework."),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"forwardMethod: string;\n")),(0,a.kt)("h2",{id:"property-forwardpath"},"(property) forwardPath"),(0,a.kt)("p",null,"The path that will be used to create a request to be forwarded to the framework."),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"forwardPath: string;\n")),(0,a.kt)("h2",{id:"property-host"},"(property) host"),(0,a.kt)("p",null,"The AWS Service host that will be injected inside headers to developer being able to validate if request originate from the library."),(0,a.kt)("p",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"host: string;\n")))}u.isMDXComponent=!0}}]);