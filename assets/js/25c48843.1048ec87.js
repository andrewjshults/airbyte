"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={},l="My Hours",i={unversionedId:"integrations/sources/my-hours",id:"integrations/sources/my-hours",title:"My Hours",description:"Features",source:"@site/../docs/integrations/sources/my-hours.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/my-hours",permalink:"/integrations/sources/my-hours",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/my-hours.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Microsoft SQL Server (MSSQL)",permalink:"/integrations/sources/mssql"},next:{title:"MySQL",permalink:"/integrations/sources/mysql"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Supported Tables",id:"supported-tables",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Performance Considerations (Airbyte Open-Source)",id:"performance-considerations-airbyte-open-source",level:3},{value:"CHANGELOG",id:"changelog",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"my-hours"},"My Hours"),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"This source syncs data from the ",(0,n.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/8879268/TVmV4YYU"},"My Hours API"),"."),(0,n.kt)("h2",{id:"supported-tables"},"Supported Tables"),(0,n.kt)("p",null,"This source allows you to synchronize the following data tables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Time logs"),(0,n.kt)("li",{parentName:"ul"},"Clients"),(0,n.kt)("li",{parentName:"ul"},"Projects"),(0,n.kt)("li",{parentName:"ul"},"Team members"),(0,n.kt)("li",{parentName:"ul"},"Tags")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requirements"),"\nIn order to use the My Hours API you need to provide the credentials to an admin My Hours account."),(0,n.kt)("h3",{id:"performance-considerations-airbyte-open-source"},"Performance Considerations (Airbyte Open-Source)"),(0,n.kt)("p",null,"Depending on the amount of team members and time logs the source provides a property to change the pagination size for the time logs query. Typically a pagination of 30 days is a correct balance between reliability and speed. But if you have a big amount of monthly entries you might want to change this value to a lower value."),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12964"},"12964")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update schema for time_logs stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8270"},"8270")),(0,n.kt)("td",{parentName:"tr",align:"left"},"New Source: My Hours")))))}c.isMDXComponent=!0}}]);