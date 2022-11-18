"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[68039],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(f,o(o({ref:e},c),{},{components:a})):n.createElement(f,o({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61558:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Web scraping and automation platform."},o="Apify Dataset",l={unversionedId:"integrations/sources/apify-dataset",id:"integrations/sources/apify-dataset",title:"Apify Dataset",description:"Web scraping and automation platform.",source:"@site/../docs/integrations/sources/apify-dataset.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/apify-dataset",permalink:"/integrations/sources/apify-dataset",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/apify-dataset.md",tags:[],version:"current",frontMatter:{description:"Web scraping and automation platform."},sidebar:"mySidebar",previous:{title:"Amplitude",permalink:"/integrations/sources/amplitude"},next:{title:"Appfollow",permalink:"/integrations/sources/appfollow"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Running Airbyte sync from Apify webhook",id:"running-airbyte-sync-from-apify-webhook",level:3},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Changelog",id:"changelog",level:3}],c={toc:p};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apify-dataset"},"Apify Dataset"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apify.com"},"Apify")," is a web scraping and web automation platform providing both ready-made and custom solutions, an open-source ",(0,r.kt)("a",{parentName:"p",href:"https://sdk.apify.com/"},"SDK")," for web scraping, proxies, and many other tools to help you build and run web automation jobs at scale."),(0,r.kt)("p",null,"The results of a scraping job are usually stored in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/dataset"},"Apify Dataset"),". This Airbyte connector allows you to automatically sync the contents of a dataset to your chosen destination using Airbyte."),(0,r.kt)("p",null,"To sync data from a dataset, all you need to know is its ID. You will find it in ",(0,r.kt)("a",{parentName:"p",href:"https://my.apify.com/"},"Apify console")," under storages."),(0,r.kt)("h3",{id:"running-airbyte-sync-from-apify-webhook"},"Running Airbyte sync from Apify webhook"),(0,r.kt)("p",null,"When your Apify job ","(","aka ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/actors/running"},"actor run"),")"," finishes, it can trigger an Airbyte sync by calling the Airbyte ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte-public-api-docs.s3.us-east-2.amazonaws.com/rapidoc-api-docs.html#post-/v1/connections/sync"},"API")," manual connection trigger ","(",(0,r.kt)("inlineCode",{parentName:"p"},"POST /v1/connections/sync"),")",". The API can be called from Apify ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/webhooks"},"webhook")," which is executed when your Apify run finishes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(33660).Z,width:"4570",height:"1120"})),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Since the dataset items do not have strongly typed schema, they are synced as objects, without any assumption on their content."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The Apify dataset connector uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-python"},"Apify Python Client")," under the hood and should handle any API limitations under normal usage."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apify ",(0,r.kt)("a",{parentName:"li",href:"https://docs.apify.com/storage/dataset"},"dataset")," ID")),(0,r.kt)("h3",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12397"},"12397")),(0,r.kt)("td",{parentName:"tr",align:"left"},"No changes. Used connector to test publish workflow changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11712"},"PR","#","11712")),(0,r.kt)("td",{parentName:"tr",align:"left"},"No changes from 0.1.4. Used connector to test publish workflow changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"PR","#","8434")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"PR","#","7499")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-07-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5069"},"PR","#","5069")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial version of the connector")))))}d.isMDXComponent=!0},33660:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/apify_trigger_airbyte_connection-03b46450d7fd89b0e65eebac098ddf68.png"}}]);