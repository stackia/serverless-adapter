"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2426],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u=void 0,p={unversionedId:"api/Core/getEventBodyAsBuffer",id:"api/Core/getEventBodyAsBuffer",title:"getEventBodyAsBuffer",description:"@h4ad/serverless-adapter &gt; getEventBodyAsBuffer",source:"@site/docs/api/Core/getEventBodyAsBuffer.md",sourceDirName:"api/Core",slug:"/api/Core/getEventBodyAsBuffer",permalink:"/serverless-adapter/docs/api/Core/getEventBodyAsBuffer",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Core/getEventBodyAsBuffer.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"getDefaultIfUndefined",permalink:"/serverless-adapter/docs/api/Core/getDefaultIfUndefined"},next:{title:"isBinary",permalink:"/serverless-adapter/docs/api/Core/isBinary/"}},s={},c=[{value:"(function) getEventBodyAsBuffer",id:"function-geteventbodyasbuffer",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Core/getEventBodyAsBuffer"},"getEventBodyAsBuffer")),(0,o.kt)("h2",{id:"function-geteventbodyasbuffer"},"(function) getEventBodyAsBuffer"),(0,o.kt)("p",null,"Get the event body as buffer from body string with content length"),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function getEventBodyAsBuffer(body: string, isBase64Encoded: boolean): [body: Buffer, contentLength: number];\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"body"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The body string that can be encoded or not")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isBase64Encoded"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Tells if body string is encoded in base64")))),(0,o.kt)("p",null,"Returns:"),(0,o.kt)("p",null,"[","body: Buffer, contentLength: number","]"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const body = '{}';\nconst [buffer, contentLength] = getEventBodyAsBuffer(body, false);\nconsole.log(buffer);\n// <Buffer 7b 7d>\nconsole.log(contentLength);\n// 2\n")))}d.isMDXComponent=!0}}]);