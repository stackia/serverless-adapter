"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,u={unversionedId:"api/Types/Huawei/HuaweiContext/HuaweiContext",id:"api/Types/Huawei/HuaweiContext/HuaweiContext",title:"HuaweiContext",description:"@h4ad/serverless-adapter &gt; HuaweiContext",source:"@site/docs/api/Types/Huawei/HuaweiContext/HuaweiContext.md",sourceDirName:"api/Types/Huawei/HuaweiContext",slug:"/api/Types/Huawei/HuaweiContext/",permalink:"/docs/api/Types/Huawei/HuaweiContext/",draft:!1,editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Types/Huawei/HuaweiContext/HuaweiContext.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"HuaweiApiGatewayResponse",permalink:"/docs/api/Types/Huawei/HuaweiApiGatewayResponse/"},next:{title:"GetAccessKeyReturn",permalink:"/docs/api/Types/Huawei/HuaweiContext/GetAccessKeyReturn"}},l={},p=[{value:"(interface) HuaweiContext",id:"interface-huaweicontext",level:2},{value:"(method) getAccessKey",id:"method-getaccesskey",level:2},{value:"(method) getCPUNumber",id:"method-getcpunumber",level:2},{value:"(method) getFunctionName",id:"method-getfunctionname",level:2},{value:"(method) getLogger",id:"method-getlogger",level:2},{value:"Example",id:"example",level:2},{value:"(method) getMemorySize",id:"method-getmemorysize",level:2},{value:"(method) getPackage",id:"method-getpackage",level:2},{value:"(method) getProjectID",id:"method-getprojectid",level:2},{value:"(method) getRemainingTimeInMilliSeconds",id:"method-getremainingtimeinmilliseconds",level:2},{value:"(method) getRequestID",id:"method-getrequestid",level:2},{value:"(method) getRunningTimeInSeconds",id:"method-getrunningtimeinseconds",level:2},{value:"(method) getSecretKey",id:"method-getsecretkey",level:2},{value:"(method) getToken",id:"method-gettoken",level:2},{value:"(method) getUserData",id:"method-getuserdata",level:2},{value:"Parameters",id:"parameters",level:3},{value:"(method) getVersion",id:"method-getversion",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext"},"HuaweiContext")),(0,r.kt)("h2",{id:"interface-huaweicontext"},"(interface) HuaweiContext"),(0,r.kt)("p",null,"The interface that represents methods sent by huawei to get information about the function graph. See more in ",(0,r.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/devg-functiongraph/functiongraph_02_0410.html#section1"},"Context Methods")),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface HuaweiContext \n")),(0,r.kt)("h2",{id:"method-getaccesskey"},"(method) getAccessKey"),(0,r.kt)("p",null,"Obtains the AK (valid for 24 hours) of an agency. If you use this method, you need to configure an agency for the function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getAccessKey(): GetAccessKeyReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetAccessKeyReturn"},"GetAccessKeyReturn")),(0,r.kt)("h2",{id:"method-getcpunumber"},"(method) getCPUNumber"),(0,r.kt)("p",null,"Number of CPU millicores used by the function (1 core = 1000 millicores)."),(0,r.kt)("p",null,"The value of this field is proportional to that of MemorySize. By default, 100 CPU millicores are required for 128 MB memory. The number of CPU millicores is calculated as follows: Memory/128 x 100 + 200 (basic CPU millicores)."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getCPUNumber(): GetCPUNumberReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetCPUNumberReturn"},"GetCPUNumberReturn")),(0,r.kt)("h2",{id:"method-getfunctionname"},"(method) getFunctionName"),(0,r.kt)("p",null,"Obtains the name of a function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getFunctionName(): GetFunctionNameReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetFunctionNameReturn"},"GetFunctionNameReturn")),(0,r.kt)("h2",{id:"method-getlogger"},"(method) getLogger"),(0,r.kt)("p",null,"Obtains the logger method provided by the context and returns a log output class. Logs are output in the format of Time-Request ID-Content by using the info method."),(0,r.kt)("p",null,"For example, use the info method to output logs:"),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getLogger(): GetLoggerReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetLoggerReturn"},"GetLoggerReturn")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'logg = context.getLogger()\n\nlogg.info("hello")\n')),(0,r.kt)("h2",{id:"method-getmemorysize"},"(method) getMemorySize"),(0,r.kt)("p",null,"Obtains the allocated memory."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getMemorySize(): GetMemorySizeReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetMemorySizeReturn"},"GetMemorySizeReturn")),(0,r.kt)("h2",{id:"method-getpackage"},"(method) getPackage"),(0,r.kt)("p",null,"Obtains a function group, that is, an app."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getPackage(): GetPackageReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetPackageReturn"},"GetPackageReturn")),(0,r.kt)("h2",{id:"method-getprojectid"},"(method) getProjectID"),(0,r.kt)("p",null,"Obtains a project ID."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getProjectID(): GetProjectIdReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetProjectIdReturn"},"GetProjectIdReturn")),(0,r.kt)("h2",{id:"method-getremainingtimeinmilliseconds"},"(method) getRemainingTimeInMilliSeconds"),(0,r.kt)("p",null,"Obtains the remaining running time of a function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getRemainingTimeInMilliSeconds(): GetRemainingTimeInMilliSecondsReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetRemainingTimeInMilliSecondsReturn"},"GetRemainingTimeInMilliSecondsReturn")),(0,r.kt)("h2",{id:"method-getrequestid"},"(method) getRequestID"),(0,r.kt)("p",null,"Obtains a request ID."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getRequestID(): GetRequestIDSecondsReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetRequestIDSecondsReturn"},"GetRequestIDSecondsReturn")),(0,r.kt)("h2",{id:"method-getrunningtimeinseconds"},"(method) getRunningTimeInSeconds"),(0,r.kt)("p",null,"Obtains the timeout of a function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getRunningTimeInSeconds(): GetRunningTimeInSecondsReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetRunningTimeInSecondsReturn"},"GetRunningTimeInSecondsReturn")),(0,r.kt)("h2",{id:"method-getsecretkey"},"(method) getSecretKey"),(0,r.kt)("p",null,"Obtains the SK (valid for 24 hours) of an agency. If you use this method, you need to configure an agency for the function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getSecretKey(): GetSecretKeyReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetSecretKeyReturn"},"GetSecretKeyReturn")),(0,r.kt)("h2",{id:"method-gettoken"},"(method) getToken"),(0,r.kt)("p",null,"Obtains the token (valid for 24 hours) of an agency. If you use this method, you need to configure an agency for the function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getToken(): GetTokenReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetTokenReturn"},"GetTokenReturn")),(0,r.kt)("h2",{id:"method-getuserdata"},"(method) getUserData"),(0,r.kt)("p",null,"Uses keys to obtain the values passed by environment variables."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getUserData(key: GetUserDataKeyParameter): GetUserDataReturn;\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Types/Huawei/HuaweiContext/GetUserDataKeyParameter"},"GetUserDataKeyParameter")),(0,r.kt)("td",{parentName:"tr",align:null},"The key to get environment variables values")))),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetUserDataReturn"},"GetUserDataReturn")),(0,r.kt)("h2",{id:"method-getversion"},"(method) getVersion"),(0,r.kt)("p",null,"Obtains the version of a function."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getVersion(): GetVersionReturn;\n")),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/Types/Huawei/HuaweiContext/GetVersionReturn"},"GetVersionReturn")))}m.isMDXComponent=!0}}]);