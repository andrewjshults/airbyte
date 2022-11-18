"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[55685],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),g=r,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62472:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a={},i="Getting Started: Source Facebook Marketing",l={unversionedId:"integrations/getting-started/source-facebook-marketing",id:"integrations/getting-started/source-facebook-marketing",title:"Getting Started: Source Facebook Marketing",description:"Requirements",source:"@site/../docs/integrations/getting-started/source-facebook-marketing.md",sourceDirName:"integrations/getting-started",slug:"/integrations/getting-started/source-facebook-marketing",permalink:"/integrations/getting-started/source-facebook-marketing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/getting-started/source-facebook-marketing.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"How to apply for the developer token",id:"how-to-apply-for-the-developer-token",level:2},{value:"Understanding Google Ads Query Language",id:"understanding-google-ads-query-language",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-source-facebook-marketing"},"Getting Started: Source Facebook Marketing"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Google Ads Account with an approved Developer Token ","(",'note: In order to get API access to Google Ads, you must have a "manager" account. This must be created separately from your standard account. You can find more information about this distinction in the ',(0,r.kt)("a",{parentName:"p",href:"https://ads.google.com/home/tools/manager-accounts/"},"google ads docs"),".",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"developer_token"),(0,r.kt)("li",{parentName:"ul"},"client_id"),(0,r.kt)("li",{parentName:"ul"},"client_secret"),(0,r.kt)("li",{parentName:"ul"},"refresh_token"),(0,r.kt)("li",{parentName:"ul"},"start_date"),(0,r.kt)("li",{parentName:"ul"},"customer_id")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"This guide will provide information as if starting from scratch. Please skip over any steps you have already completed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an Google Ads Account. Here are ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/6366720"},"Google's instruction")," on how to create one."),(0,r.kt)("li",{parentName:"ul"},"Create an Google Ads MANAGER Account. Here are ",(0,r.kt)("a",{parentName:"li",href:"https://ads.google.com/home/tools/manager-accounts/"},"Google's instruction")," on how to create one."),(0,r.kt)("li",{parentName:"ul"},"You should now have two Google Ads accounts: a normal account and a manager account. Link the Manager account to the normal account following ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/7459601"},"Google's documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Apply for a developer token ","(",(0,r.kt)("strong",{parentName:"li"},"make sure you follow our")," ",(0,r.kt)("a",{parentName:"li",href:"#how-to-apply-for-the-developer-token"},(0,r.kt)("strong",{parentName:"a"},"instructions")),")"," on your Manager account.  This token allows you to access your data from the Google Ads API. Here are ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/first-call/dev-token"},"Google's instructions"),". The docs are a little unclear on this point, but you will ",(0,r.kt)("em",{parentName:"li"},"not")," be able to access your data via the Google Ads API until this token is approved. You cannot use a test developer token, it has to be at least a basic developer token. It usually takes Google 24 hours to respond to these applications. This developer token is the value you will use in the ",(0,r.kt)("inlineCode",{parentName:"li"},"developer_token")," field."),(0,r.kt)("li",{parentName:"ul"},"Fetch your ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"refresh_token"),". Google provides ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/first-call/overview"},"instructions")," on how to do this."),(0,r.kt)("li",{parentName:"ul"},"Select your ",(0,r.kt)("inlineCode",{parentName:"li"},"customer_id"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"customer_is")," refer to the id of each of your Google Ads accounts. This is the 10 digit number in the top corner of the page when you are in google ads ui. The source will only pull data from the accounts for which you provide an id. If you are having trouble finding it, check out ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/1704344"},"Google's instructions"),".")),(0,r.kt)("p",null,"Wow! That was a lot of steps. We are working on making the OAuth flow for all of our connectors simpler ","(","allowing you to skip needing to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"developer_token")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh_token")," which are the most painful / time-consuming steps in this walkthrough",")","."),(0,r.kt)("h2",{id:"how-to-apply-for-the-developer-token"},"How to apply for the developer token"),(0,r.kt)("p",null,"Google is very picky about which software and which use case can get access to a developer token. The Airbyte team has worked with the Google Ads team to whitelist Airbyte and make sure you can get one ","(","see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1981"},"issue 1981")," for more information",")","."),(0,r.kt)("p",null,"When you apply for a token, you need to mention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why you need the token ","(","eg: want to run some internal analytics...",")"),(0,r.kt)("li",{parentName:"ul"},"That you will be using the Airbyte Open Source project"),(0,r.kt)("li",{parentName:"ul"},"That you have full access to the code base ","(","because we're open source",")"),(0,r.kt)("li",{parentName:"ul"},"That you have full access to the server running the code ","(","because you're self-hosting Airbyte",")")),(0,r.kt)("p",null,"If for any reason the request gets denied, let us know and we will be able to unblock you."),(0,r.kt)("h2",{id:"understanding-google-ads-query-language"},"Understanding Google Ads Query Language"),(0,r.kt)("p",null,"The Google Ads Query Language can query the Google Ads API. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/query/overview"},"Google Ads Query Language")))}p.isMDXComponent=!0}}]);