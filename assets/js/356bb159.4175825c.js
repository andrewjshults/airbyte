"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[17882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const a={},o="Gridly",s={unversionedId:"integrations/sources/gridly",id:"integrations/sources/gridly",title:"Gridly",description:"This page contains the setup guide and reference information for the Gridly source connector.",source:"@site/../docs/integrations/sources/gridly.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/gridly",permalink:"/integrations/sources/gridly",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/gridly.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Greenhouse",permalink:"/integrations/sources/greenhouse"},next:{title:"Gutendex",permalink:"/integrations/sources/gutendex"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Get api Key",id:"get-api-key",level:3},{value:"Get grid id",id:"get-grid-id",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gridly"},"Gridly"),(0,i.kt)("p",null,"This page contains the setup guide and reference information for the Gridly source connector."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"A Gridly account."),(0,i.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h3",{id:"get-api-key"},"Get api Key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To quickly get your API key, access your Gridly Dashboard, then select a Grid View and you can find the key in API quick start right panel.\n",(0,i.kt)("img",{alt:"img.png",src:r(81686).Z,width:"2332",height:"1340"})),(0,i.kt)("li",{parentName:"ol"},"Owner and Administrators can go to Settings/API keys to create company-level API keys with scoped privileges and accesses.\n",(0,i.kt)("img",{alt:"img.png",src:r(40380).Z,width:"2360",height:"1380"}))),(0,i.kt)("h3",{id:"get-grid-id"},"Get grid id"),(0,i.kt)("p",null,"The grid id is available in the url.\nGridly support version control, by default the ",(0,i.kt)("inlineCode",{parentName:"p"},"grid id")," is the same to the ",(0,i.kt)("inlineCode",{parentName:"p"},"branch id")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"Master")," branch is selected. For fetching records on other branches, use ",(0,i.kt)("inlineCode",{parentName:"p"},"branch id")," instead.\n",(0,i.kt)("img",{alt:"img.png",src:r(66461).Z,width:"2360",height:"800"})),(0,i.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gridly.com/docs/api/#record"},"Records"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"))}p.isMDXComponent=!0},81686:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridly_api_key1-17a30e86a42b519489a722a401eb9219.png"},40380:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridly_api_key2-2edbf715357be0220b0ff0d7ffbee3f7.png"},66461:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gridly_grid_id-78e80091c1ed01a28ff9be633436faa2.png"}}]);