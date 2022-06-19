"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1916],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,d=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(i,".").concat(m)]||u[m]||s[m]||d;return r?a.createElement(y,o(o({ref:t},l),{},{components:r})):a.createElement(y,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=r.length,o=new Array(d);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<d;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6742:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=r(7462),n=r(3366),d=(r(7294),r(3905)),o=["components"],p={},i=void 0,c={unversionedId:"api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody",id:"api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody",title:"OldLambdaEdgeBody",description:"@h4ad/serverless-adapter &gt; OldLambdaEdgeBody",source:"@site/docs/api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody.md",sourceDirName:"api/Adapters/AWS/LambdaEdgeAdapter",slug:"/api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody",permalink:"/serverless-adapter/docs/api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NewLambdaEdgeBody",permalink:"/serverless-adapter/docs/api/Adapters/AWS/LambdaEdgeAdapter/NewLambdaEdgeBody"},next:{title:"SNSAdapter",permalink:"/serverless-adapter/docs/api/Adapters/AWS/SNSAdapter/"}},l={},s=[{value:"(type) OldLambdaEdgeBody",id:"type-oldlambdaedgebody",level:2}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,d.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,d.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/LambdaEdgeAdapter/OldLambdaEdgeBody"},"OldLambdaEdgeBody")),(0,d.kt)("h2",{id:"type-oldlambdaedgebody"},"(type) OldLambdaEdgeBody"),(0,d.kt)("p",null,"Represents the body of the old version of Lambda @ edge supported by @ vendia/serverless-express which returns the ",(0,d.kt)("inlineCode",{parentName:"p"},"data")," property within ",(0,d.kt)("inlineCode",{parentName:"p"},"body")," for the body (library) of the request."),(0,d.kt)("p",null,"Signature:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type OldLambdaEdgeBody = Concrete<CloudFrontRequestEvent['Records'][number]['cf']['request']>['body']['data'];\n")),(0,d.kt)("p",null,"References: ",(0,d.kt)("a",{parentName:"p",href:"/docs/api/Types/Concrete"},"Concrete")))}m.isMDXComponent=!0}}]);