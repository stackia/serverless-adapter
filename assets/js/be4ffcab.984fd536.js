"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3109],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(r),k=n,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return r?a.createElement(c,s(s({ref:t},d),{},{components:r})):a.createElement(c,s({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<l;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9320:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),s=["components"],p={},o=void 0,i={unversionedId:"api/Network/ServerlessResponse/ServerlessResponse",id:"api/Network/ServerlessResponse/ServerlessResponse",title:"ServerlessResponse",description:"@h4ad/serverless-adapter &gt; ServerlessResponse",source:"@site/docs/api/Network/ServerlessResponse/ServerlessResponse.md",sourceDirName:"api/Network/ServerlessResponse",slug:"/api/Network/ServerlessResponse/",permalink:"/serverless-adapter/docs/api/Network/ServerlessResponse/",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Network/ServerlessResponse/ServerlessResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ServerlessRequestProps",permalink:"/serverless-adapter/docs/api/Network/ServerlessRequest/ServerlessRequestProps"},next:{title:"ServerlessResponseProps",permalink:"/serverless-adapter/docs/api/Network/ServerlessResponse/ServerlessResponseProps"}},d={},u=[{value:"(class) ServerlessResponse",id:"class-serverlessresponse",level:2},{value:"(property) _header",id:"property-_header",level:2},{value:"(property) _headers",id:"property-_headers",level:2},{value:"(property) _wroteHeader",id:"property-_wroteheader",level:2},{value:"(property) [BODY]",id:"property-body",level:2},{value:"(property) [HEADERS]",id:"property-headers",level:2},{value:"(constructor)",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"(method) body",id:"method-body",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"(method) callNativeWriteHead",id:"method-callnativewritehead",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"(method) from",id:"method-from",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"(method) headers",id:"method-headers",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"(property) headers",id:"property-headers-1",level:2},{value:"(method) setHeader",id:"method-setheader",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"(method) writeHead",id:"method-writehead",level:2},{value:"Parameters",id:"parameters-6",level:3}],m={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")),(0,l.kt)("h2",{id:"class-serverlessresponse"},"(class) ServerlessResponse"),(0,l.kt)("p",null,"The class that represents a response instance used to send to the framework and wait until the framework finishes processing the request. Once it's happens, we use the properties from this response to built the response to the cloud."),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ServerlessResponse extends ServerResponse \n")),(0,l.kt)("p",null,"Extends: ServerResponse"),(0,l.kt)("h2",{id:"property-_header"},"(property) ","_","header"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"_header: string;\n")),(0,l.kt)("h2",{id:"property-_headers"},"(property) ","_","headers"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"_headers?: Record<any, any>;\n")),(0,l.kt)("h2",{id:"property-_wroteheader"},"(property) ","_","wroteHeader"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"_wroteHeader?: boolean;\n")),(0,l.kt)("h2",{id:"property-body"},"(property) ","[","BODY","]"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"[BODY]: any[];\n")),(0,l.kt)("h2",{id:"property-headers"},"(property) ","[","HEADERS","]"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"[HEADERS]: Record<any, any>;\n")),(0,l.kt)("h2",{id:"constructor"},"(constructor)"),(0,l.kt)("p",null,"Constructs a new instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ServerlessResponse")," class"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor({ method }: ServerlessResponseProps);\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{ method }"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Network/ServerlessResponse/ServerlessResponseProps"},"ServerlessResponseProps")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"method-body"},"(method) body"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static body(res: ServerlessResponse): Buffer;\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"Buffer"),(0,l.kt)("h2",{id:"method-callnativewritehead"},"(method) callNativeWriteHead"),(0,l.kt)("p",null,"I use ignore here because in nodejs 12.x, statusMessage can be string ","|"," OutgoingHttpHeaders But in nodejs ",">"," =14.x, statusMessage can also be OutgoingHttpHeaders","[","]"," I take care of these cases above, but here I can't handle it well, so I give up nodejs 12.x ref: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v12/http.d.ts%5C#L229"},"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v12/http.d.ts\\#L229")," nodejs 14.x ref: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts%5C#L263"},"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts\\#L263")),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected callNativeWriteHead(statusCode: number, statusMessage?: string | any | any[], obj?: any | any[]): this;\n")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," any ","|"," any","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"obj"),(0,l.kt)("td",{parentName:"tr",align:null},"any ","|"," any","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional)")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"this"),(0,l.kt)("h2",{id:"method-from"},"(method) from"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static from(res: IncomingMessage): ServerlessResponse;\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},"IncomingMessage"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")),(0,l.kt)("h2",{id:"method-headers"},"(method) headers"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'static headers(res: ServerlessResponse): import("http").OutgoingHttpHeaders & Record<any, any>;\n')),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,'import("http").OutgoingHttpHeaders ',"&"," Record","<","any, any",">"),(0,l.kt)("h2",{id:"property-headers-1"},"(property) headers"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"get headers(): Record<any, any>;\n")),(0,l.kt)("h2",{id:"method-setheader"},"(method) setHeader"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"setHeader(key: string, value: number | string | readonly string[]): any;\n")),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," string ","|"," readonly string","[","]"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"any"),(0,l.kt)("h2",{id:"method-writehead"},"(method) writeHead"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"writeHead(statusCode: number, statusMessage?: string | any | any[], obj?: any | any[]): any;\n")),(0,l.kt)("h3",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," any ","|"," any","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"obj"),(0,l.kt)("td",{parentName:"tr",align:null},"any ","|"," any","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional)")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"any"))}k.isMDXComponent=!0}}]);