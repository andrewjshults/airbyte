"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[31146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?l.createElement(k,i(i({ref:t},p),{},{components:a})):l.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var l=a(87462),r=(a(67294),a(3905));const n={},i="Close.com",o={unversionedId:"integrations/sources/close-com",id:"integrations/sources/close-com",title:"Close.com",description:"Overview",source:"@site/../docs/integrations/sources/close-com.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/close-com",permalink:"/integrations/sources/close-com",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/close-com.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ClickHouse",permalink:"/integrations/sources/clickhouse"},next:{title:"CockroachDB",permalink:"/integrations/sources/cockroachdb"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Notes",id:"notes",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"closecom"},"Close.com"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Close.com source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#leads"},"Leads")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-created-activities"},"Created Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-opportunitystatuschange-activities"},"Opportunity Status Change Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-note-activities"},"Note Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-meeting-activities"},"Meeting Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-call-activities"},"Call Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-email-activities"},"Email Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-emailthread-activities"},"Email Thread Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-leadstatuschange-activities"},"Lead Status Change Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-sms-activities"},"SMS Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#activities-list-or-filter-all-taskcompleted-activities"},"Task Completed Activities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Lead Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Incoming Email Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Email Followup Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Missed Call Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Answered Detached Call Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Voicemail Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Opportunity Due Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#tasks"},"Incoming SMS Tasks")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#event-log"},"Events")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#custom-fields-list-all-the-lead-custom-fields-for-your-organization"},"Lead Custom Fields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#custom-fields-list-all-the-contact-custom-fields-for-your-organization"},"Contact Custom Fields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#custom-fields-list-all-the-opportunity-custom-fields-for-your-organization"},"Opportunity Custom Fields")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#custom-fields-list-all-the-activity-custom-fields-for-your-organization"},"Activity Custom Fields")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#users"},"Users")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#contacts"},"Contacts")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#opportunities"},"Opportunities")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#roles"},"Roles")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#lead-statuses"},"Lead Statuses")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#opportunity-statuses"},"Opportunity Statuses")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#pipelines"},"Pipelines")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#email-templates"},"Email Templates")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#connected-accounts"},"Google Connected Accounts")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#connected-accounts"},"Custom Email Connected Accounts")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#connected-accounts"},"Zoom Connected Accounts")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#send-as"},"Send As")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#email-sequences"},"Email Sequences")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#dialer"},"Dialer")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#smart-views"},"Smart Views")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#bulk-actions-list-bulk-emails"},"Email Bulk Actions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#bulk-actions-list-bulk-sequence-subscriptions"},"Sequence Subscription Bulk Actions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#bulk-actions-list-bulk-deletes"},"Delete Bulk Actions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#bulk-actions-list-bulk-edits"},"Edit Bulk Actions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#integration-links"},"Integration Links")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.close.com/#custom-activities"},"Custom Activities")," ")),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Leads, Events Incremental streams use ",(0,r.kt)("inlineCode",{parentName:"p"},"date_updated")," field. All other Incremental streams use ",(0,r.kt)("inlineCode",{parentName:"p"},"date_created")," field."),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://developer.close.com/"},"Close.com API")," uses the same ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/index.html"},"JSONSchema")," types that Airbyte uses internally ","(",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),")",", so no type conversions happen as part of this source."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The Close.com Connector has rate limit. There are 60 RPS for Organizations. You can find detailed info ",(0,r.kt)("a",{parentName:"p",href:"https://developer.close.com/#ratelimits"},"here"),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Close.com Account"),(0,r.kt)("li",{parentName:"ul"},"Close.com API Key")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://app.close.com/settings/api/"},"Close.com API Keys page")," in the Close.com dashboard to access the secret key for your account. Secret key will be prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"api_"),"."),(0,r.kt)("p",null,"We recommend creating a restricted key specifically for Airbyte access. This will allow you to control which resources Airbyte should be able to access. For ease of use, we recommend using read permissions for all resources and configuring which resource to replicate in the Airbyte UI."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5366"},"5366")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial release of Close.com connector for Airbyte")))))}m.isMDXComponent=!0}}]);