"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6739],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(f,l(l({ref:e},d),{},{components:a})):r.createElement(f,l({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73012:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},l="Redshift",o={unversionedId:"integrations/sources/redshift",id:"integrations/sources/redshift",title:"Redshift",description:"Overview",source:"@site/../docs/integrations/sources/redshift.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/redshift",permalink:"/integrations/sources/redshift",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Recurly",permalink:"/integrations/sources/recurly"},next:{title:"Reply.io",permalink:"/integrations/sources/reply-io"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Resulting schema",id:"resulting-schema",level:4},{value:"Features",id:"features",level:3},{value:"Incremental Sync",id:"incremental-sync",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"1. Make sure your cluster is active and accessible from the machine running Airbyte",id:"1-make-sure-your-cluster-is-active-and-accessible-from-the-machine-running-airbyte",level:4},{value:"2. Fill up connection info",id:"2-fill-up-connection-info",level:4},{value:"Encryption",id:"encryption",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redshift"},"Redshift"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Redshift source supports Full Refresh syncs. That is, every time a sync is run, Airbyte will copy all rows in the tables and columns you set up for replication into the destination in a new table."),(0,n.kt)("p",null,"This Redshift source connector is built on top of the source-jdbc code base and is configured to rely on JDBC 4.2 standard drivers provided by Amazon via Mulesoft ",(0,n.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"here")," as described in Redshift documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-install.html"},"here"),"."),(0,n.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,n.kt)("h4",{id:"resulting-schema"},"Resulting schema"),(0,n.kt)("p",null,"The Redshift source does not alter the schema present in your warehouse. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical Replication ","(","WAL",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enabled by default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Schema Selection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Multiple schemas may be used at one time. Keep empty to process all of existing schemas")))),(0,n.kt)("h4",{id:"incremental-sync"},"Incremental Sync"),(0,n.kt)("p",null,"Incremental sync ","(","copying only the data that has changed",")"," for this source is coming soon."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Active Redshift cluster"),(0,n.kt)("li",{parentName:"ol"},"Allow connections from Airbyte to your Redshift cluster ","(","if they exist in separate VPCs",")")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h4",{id:"1-make-sure-your-cluster-is-active-and-accessible-from-the-machine-running-airbyte"},"1. Make sure your cluster is active and accessible from the machine running Airbyte"),(0,n.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Airbyte is able to connect to your Redshift cluster is via the check connection tool in the UI. You can check AWS Redshift documentation with a tutorial on how to properly configure your cluster's access ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-authorize-cluster-access.html"},"here")),(0,n.kt)("h4",{id:"2-fill-up-connection-info"},"2. Fill up connection info"),(0,n.kt)("p",null,"Next is to provide the necessary information on how to connect to your cluster such as the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," whcih is part of the connection string or Endpoint accessible ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-connect-to-cluster.html#rs-gsg-how-to-get-connection-string"},"here")," without the ",(0,n.kt)("inlineCode",{parentName:"p"},"port")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"database")," name ","(","it typically includes the cluster-id, region and end with ",(0,n.kt)("inlineCode",{parentName:"p"},".redshift.amazonaws.com"),")","."),(0,n.kt)("h2",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"All Redshift connections are encrypted using SSL"),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16238"},"15535")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update incremental query to avoid data missing when new data is inserted at the same time as a sync starts under non-CDC incremental mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16258"},"16258")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emit state messages more frequently")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-25"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added JDBC URL params")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14356"},"14356")),(0,n.kt)("td",{parentName:"tr",align:"left"},"DB Sources: only show a table can sync incrementally if at least one column can be used as a cursor field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14574"},"14574")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed additionalProperties:false from JDBC source connectors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12480"},"12480")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Query tables with adaptive fetch size to optimize JDBC memory consumption")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9744"},"9744")),(0,n.kt)("td",{parentName:"tr",align:"left"},"List only the tables on which the user has SELECT permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9721"},"9721")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added schema selection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8617"},"8617")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"8958")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7234"},"7234")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow SSL traffic only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6965"},"6965")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added SSL Support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"4699")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added json config validator")))))}m.isMDXComponent=!0}}]);