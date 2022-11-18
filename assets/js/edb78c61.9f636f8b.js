"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[10496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Redpanda",l={unversionedId:"integrations/destinations/redpanda",id:"integrations/destinations/redpanda",title:"Redpanda",description:"The Airbyte Redpanda destination connector allows you to sync data to Redpada. Each stream is written to the corresponding Redpanda topic.",source:"@site/../docs/integrations/destinations/redpanda.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/redpanda",permalink:"/integrations/destinations/redpanda",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/redpanda.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Redis",permalink:"/integrations/destinations/redis"},next:{title:"Redshift",permalink:"/integrations/destinations/redshift"}},p={},s=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redpanda"},"Redpanda"),(0,r.kt)("p",null,"The Airbyte Redpanda destination connector allows you to sync data to ",(0,r.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpada"),". Each stream is written to the corresponding Redpanda topic."),(0,r.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into a Redpanda topic."),(0,r.kt)("p",null,"The Redpanda topic will be created with the following format ",(0,r.kt)("inlineCode",{parentName:"p"},"{namespace}_{stream}")),(0,r.kt)("p",null,"Currently, this connector only writes data with JSON format. More formats ","(","e.g. Apache Avro",")"," will be supported in the future."),(0,r.kt)("p",null,"Each record will contain in its key the uuid assigned by Airbyte, and in the value these 3 fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),":  a timestamp representing when the event was pulled from the data source."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data.")),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes")))),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"This section should contain a table with the following format:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"Granted you have enough Redpanda nodes/partitions the cluster should be able to handle any type of load you throw at it from the connector."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The connector should be able to create topics using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/installation/configuration/admin-configs.html"},"AdminClient")),(0,r.kt)("li",{parentName:"ul"},"Configuration options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bootstrap servers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Buffer Memory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compression Type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Batch Size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Retries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of topic partitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic replication factor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Socket Connection Setup Timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Socket Connection Setup Max Timeout"))))),(0,r.kt)("p",null,"More info about this can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html"},"Redpanda producer configs documentation site"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE"),": Configurations for SSL are not available yet."),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"))}u.isMDXComponent=!0}}]);