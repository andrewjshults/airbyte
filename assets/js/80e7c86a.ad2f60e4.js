"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[52009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},c="Airbyte 101 for Connector Development",i={unversionedId:"connector-development/airbyte101",id:"connector-development/airbyte101",title:"Airbyte 101 for Connector Development",description:"The Airbyte Catalog",source:"@site/../docs/connector-development/airbyte101.md",sourceDirName:"connector-development",slug:"/connector-development/airbyte101",permalink:"/connector-development/airbyte101",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/airbyte101.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Development Kit (Javascript)",permalink:"/connector-development/cdk-faros-js"},next:{title:"Testing Connectors",permalink:"/connector-development/testing-connectors/"}},l={},p=[{value:"The Airbyte Catalog",id:"the-airbyte-catalog",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"airbyte-101-for-connector-development"},"Airbyte 101 for Connector Development"),(0,o.kt)("h2",{id:"the-airbyte-catalog"},"The Airbyte Catalog"),(0,o.kt)("p",null,"The Airbyte catalog defines the relationship between your incoming data's schema and the schema of your output stream. This is an incredibly important concept to understand as a connector dev, so check out the AirbyteCatalog ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog"},"here"),"."))}u.isMDXComponent=!0}}]);