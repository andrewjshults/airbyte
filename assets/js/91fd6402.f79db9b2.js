"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[55353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,u=d["".concat(o,".").concat(f)]||d[f]||s[f]||i;return r?a.createElement(u,l(l({ref:t},m),{},{components:r})):a.createElement(u,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},l="Primetric",p={unversionedId:"integrations/sources/primetric",id:"integrations/sources/primetric",title:"Primetric",description:"Overview",source:"@site/../docs/integrations/sources/primetric.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/primetric",permalink:"/integrations/sources/primetric",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/primetric.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PrestaShop",permalink:"/integrations/sources/presta-shop"},next:{title:"Public APIs",permalink:"/integrations/sources/public-apis"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"primetric"},"Primetric"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Primetric source currently supports Full Refresh syncs only. This means that all contents for all chosen streams will be replaced with every sync."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#614ec96a-3a6e-4124-8e17-2a47b9fd2ab2"},"Assignments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#62d3dac7-130c-4251-abd1-fc4143e6135f"},"Capacities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#2d3b810d-0bdf-4076-b635-bcb113c12dd2"},"Employees")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#76dc7d53-f7ef-4e32-90c1-0bec3ee2954b"},"Hashtags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#2bc0ae2d-ded2-4cad-b801-ce5b0e16dd0c"},"Organization Clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#76fbffd3-9410-41cf-b1c7-c28f8934259b"},"Organization Company Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#e7b85cda-6a7e-4b5c-81eb-38ef22b9476b"},"Organization Departments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#6194d5dd-a461-48ca-a98c-b43e22a8eaf9"},"Organization Identity Providers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#8bb3e61c-8309-47fa-a11b-e809b5b6fa85"},"Organization Positions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#ade4f7f0-5afe-464d-a882-af0752d8b812"},"Organization Rag Scopes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#dbd3780e-a0bd-49ba-b55c-df2ac34cc59f"},"Organization Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#d87953ac-a26d-419f-8b68-290551acab66"},"Organization Seniorities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#04573d40-054e-480b-9b4d-af61152a8a80"},"Organization Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#1fa80784-7955-41bb-b0cd-7ea0a2791936"},"Organization Teams")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#e6dd9b98-66ec-4854-9a25-6f6f6f34399c"},"Organization Timeoff Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#21d5b65a-2f0d-464a-a6c3-8026f0096b83"},"People")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#2dbef41d-2b82-4697-a5b8-15b253077703"},"Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#c43bef20-60c4-4f83-bbf0-0aa55c05d4d9"},"Projects Vacancies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#1dfc0346-4f47-4e32-b602-00700404f881"},"Rag Ratings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#f60a6ff4-b301-4bff-9a7d-a7694572bfb4"},"Skills")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#daecfab4-1f4a-4744-b6eb-49f291b6092c"},"Timeoffs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.primetric.com/#cd27074c-2918-4894-b656-c56d38527981"},"Worklogs"))),(0,n.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"Primetric facilitates resource planning. With it you can manage your employee's skills and schedule assignment of\nyour employees to the right projects."),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Primetric ",(0,n.kt)("a",{parentName:"li",href:"https://app.primetric.com/administrator/integrations"},"client secret")),(0,n.kt)("li",{parentName:"ul"},"Primetric client id")),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15880"},"#","15880")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial implementation")))))}s.isMDXComponent=!0}}]);