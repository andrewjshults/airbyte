"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[43973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),y=n,d=b["".concat(s,".").concat(y)]||b[y]||p[y]||a;return r?o.createElement(d,i(i({ref:t},l),{},{components:r})):o.createElement(d,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},73336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={},i="Welcome to Airbyte Docs",c={unversionedId:"readme",id:"readme",title:"Welcome to Airbyte Docs",description:"Whether you are an Airbyte user or contributor, we have docs for you!",source:"@site/../docs/readme.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",next:{title:"Connector Catalog",permalink:"/integrations/"}},s={},u=[{value:"For Airbyte Cloud users",id:"for-airbyte-cloud-users",level:3},{value:"For Airbyte Open Source users",id:"for-airbyte-open-source-users",level:3},{value:"For Airbyte contributors",id:"for-airbyte-contributors",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-airbyte-docs"},"Welcome to Airbyte Docs"),(0,n.kt)("p",null,"Whether you are an Airbyte user or contributor, we have docs for you! "),(0,n.kt)("h3",{id:"for-airbyte-cloud-users"},"For Airbyte Cloud users"),(0,n.kt)("p",null,"Browse the ",(0,n.kt)("a",{parentName:"p",href:"integrations"},"connector catalog")," to find the connector you want. In case the connector is not yet supported on Airbyte Cloud, consider using ",(0,n.kt)("a",{parentName:"p",href:"#for-airbyte-open-source-users"},"Airbyte Open Source"),"."),(0,n.kt)("p",null,"Next, check out the ",(0,n.kt)("a",{parentName:"p",href:"cloud/getting-started-with-airbyte-cloud"},"step-by-step tutorial")," to sign up for Airbyte Cloud, understand Airbyte ",(0,n.kt)("a",{parentName:"p",href:"/cloud/core-concepts"},"concepts"),", and run your first sync. Then learn how to ",(0,n.kt)("a",{parentName:"p",href:"/cloud/managing-airbyte-cloud"},"manage your Airbyte Cloud account"),"."),(0,n.kt)("h3",{id:"for-airbyte-open-source-users"},"For Airbyte Open Source users"),(0,n.kt)("p",null,"Browse the ",(0,n.kt)("a",{parentName:"p",href:"integrations"},"connector catalog")," to find the connector you want. If the connector is not yet supported on Airbyte Open Source, ",(0,n.kt)("a",{parentName:"p",href:"connector-development"},"build your own connector"),"."),(0,n.kt)("p",null,"Next, check out the ",(0,n.kt)("a",{parentName:"p",href:"/quickstart/deploy-airbyte"},"Airbyte Open Source QuickStart"),". Then learn how to ",(0,n.kt)("a",{parentName:"p",href:"deploying-airbyte/local-deployment"},"deploy")," and ",(0,n.kt)("a",{parentName:"p",href:"operator-guides/upgrading-airbyte"},"manage")," Airbyte Open Source in your cloud infrastructure. "),(0,n.kt)("p",null,"To get help with Airbyte deployments, check out the ",(0,n.kt)("a",{parentName:"p",href:"/troubleshooting/"},"Troubleshooting & FAQ"),", chat with Support on ",(0,n.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/"},"Discourse"),", or join us on ",(0,n.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Community Slack"),"."),(0,n.kt)("h3",{id:"for-airbyte-contributors"},"For Airbyte contributors"),(0,n.kt)("p",null,"To contribute to Airbyte code, connectors, and documentation, refer to our ",(0,n.kt)("a",{parentName:"p",href:"contributing-to-airbyte"},"Contributing Guide"),". "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://GitHub.com/airbytehq/airbyte/stargazers/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/airbytehq/airbyte?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/actions/workflows/gradle.yml"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/airbytehq/airbyte/Airbyte%20CI",alt:"GitHub Workflow Status"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/a9b1c6c0420550ad5069aca66c295223e0d05e27/LICENSE/README.md"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen",alt:"License"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/a9b1c6c0420550ad5069aca66c295223e0d05e27/LICENSE/README.md"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=license&message=ELv2&color=brightgreen",alt:"License"}))))}p.isMDXComponent=!0}}]);