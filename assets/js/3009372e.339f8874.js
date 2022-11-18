"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[10150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="AWS Datalake",l={unversionedId:"integrations/destinations/aws-datalake",id:"integrations/destinations/aws-datalake",title:"AWS Datalake",description:"This page contains the setup guide and reference information for the AWS Datalake destination connector.",source:"@site/../docs/integrations/destinations/aws-datalake.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/aws-datalake",permalink:"/integrations/destinations/aws-datalake",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/aws-datalake.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Amazon SQS",permalink:"/integrations/destinations/amazon-sqs"},next:{title:"AzureBlobStorage",permalink:"/integrations/destinations/azureblobstorage"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-datalake"},"AWS Datalake"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for the AWS Datalake destination connector."),(0,r.kt)("p",null,"The AWS Datalake destination connector allows you to sync data to AWS. It will write data as JSON files in S3 and\nwill make it available through a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lake-formation/latest/dg/governed-tables.html"},"Lake Formation Governed Table")," in the Glue Data Catalog so that the data is available throughout other AWS services such as Athena, Glue jobs, EMR, Redshift, etc."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this destination connector, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An AWS account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An S3 bucket where the data will be written")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An AWS Lake Formation database where tables will be created (one per stream)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AWS credentials in the form of either the pair Access key ID / Secret key ID or a role with the following permissions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Writing objects in the S3 bucket"),(0,r.kt)("li",{parentName:"ul"},"Updating of the Lake Formation database")))),(0,r.kt)("p",null,"Please check the Setup guide below if you need guidance creating those."),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"You should now have all the requirements needed to configure AWS Datalake as a destination in the UI. You'll need the\nfollowing information to configure the destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aws Account Id : The account ID of your AWS account. You will find the instructions to setup a new AWS account ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"Aws Region : The region in which your resources are deployed"),(0,r.kt)("li",{parentName:"ul"},'Authentication mode : The AWS Datalake connector lets you authenticate with either a user or a role. In both case, you will have to make sure\nthat appropriate policies are in place. Select "ROLE" if you are using a role, "USER" if using a user with Access key / Secret Access key.'),(0,r.kt)("li",{parentName:"ul"},'Target Role Arn : The name of the role, if "Authentication mode" was "ROLE". You will find the instructions to create a new role ',(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},'Access Key Id : The Access Key ID of the user if "Authentication mode" was "USER". You will find the instructions to create a new user ',(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"here"),'. Make sure to select "Programmatic Access" so that you get secret access keys.'),(0,r.kt)("li",{parentName:"ul"},'Secret Access Key : The Secret Access Key ID of the user if "Authentication mode" was "USER"'),(0,r.kt)("li",{parentName:"ul"},"S3 Bucket Name : The bucket in which the data will be written. You will find the instructions to create a new S3 bucket ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"Target S3 Bucket Prefix : A prefix to prepend to the file name when writing to the bucket"),(0,r.kt)("li",{parentName:"ul"},"Database : The database in which the tables will be created. You will find the instructions to create a new Lakeformation Database ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lake-formation/latest/dg/creating-database.html"},"here"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Assigning proper permissions")),(0,r.kt)("p",null,"The policy used by the user or the role must have access to the following services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS Lake Formation"),(0,r.kt)("li",{parentName:"ul"},"AWS Glue"),(0,r.kt)("li",{parentName:"ul"},"AWS S3")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://awspolicygen.s3.amazonaws.com/policygen.html"},"the AWS policy generator")," to help you generate an appropriate policy."),(0,r.kt)("p",null,"Please also make sure that the role or user you will use has appropriate permissions on the database in AWS Lakeformation. You will find more information about Lake Formation permissions in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html"},"AWS Lake Formation Developer Guide"),"."),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"data-type-map"},"Data type map"),(0,r.kt)("p",null,"The Glue tables will be created with schema information provided by the source, i.e : You will find the same columns\nand types in the destination table as in the source except for the following types which will be translated for compatibility with the Glue Data Catalog:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type in the source"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type in the destination"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"| 0.1.1 | 2022-04-20 | ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/11811"},"#","11811")," | Fix name of required param in specification |\n| 0.1.0 | 2022-03-29 | ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/10760"},"#","10760")," | Initial release |"))}u.isMDXComponent=!0}}]);