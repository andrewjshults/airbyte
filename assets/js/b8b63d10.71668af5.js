"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[79017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Scaling Airbyte",s={unversionedId:"operator-guides/scaling-airbyte",id:"operator-guides/scaling-airbyte",title:"Scaling Airbyte",description:"As depicted in our High-Level View, Airbyte is made up of several components under the hood: 1. Scheduler 2. Server 3. Temporal 4. Webapp 5. Database",source:"@site/../docs/operator-guides/scaling-airbyte.md",sourceDirName:"operator-guides",slug:"/operator-guides/scaling-airbyte",permalink:"/operator-guides/scaling-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/scaling-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Using custom connectors",permalink:"/operator-guides/using-custom-connectors"},next:{title:"Troubleshooting & FAQ",permalink:"/troubleshooting/"}},l={},c=[{value:"What To Scale",id:"what-to-scale",level:2},{value:"Memory",id:"memory",level:3},{value:"Disk Space",id:"disk-space",level:3},{value:"On Kubernetes",id:"on-kubernetes",level:3},{value:"Temporal DB",id:"temporal-db",level:3},{value:"Feedback",id:"feedback",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Key Metrics",id:"key-metrics",level:3},{value:"Recommended Metrics",id:"recommended-metrics",level:3},{value:"Example",id:"example",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scaling-airbyte"},"Scaling Airbyte"),(0,r.kt)("p",null,"As depicted in our ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/high-level-view"},"High-Level View"),", Airbyte is made up of several components under the hood: 1. Scheduler 2. Server 3. Temporal 4. Webapp 5. Database"),(0,r.kt)("p",null,"These components perform control plane operations that are low-scale, low-resource work. In addition to the work being low cost, these components are efficient and optimized for these jobs, meaning that only uncommonly large workloads will require deployments at scale. In general, you would only encounter scaling issues when running over a thousand connections."),(0,r.kt)("p",null,"As a reference point, the typical Airbyte user has 5 - 20 connectors and 10 - 100 connections configured. Almost all of these connections are scheduled, either hourly or daily, resulting in at most 100 concurrent jobs."),(0,r.kt)("h2",{id:"what-to-scale"},"What To Scale"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/jobs"},"Workers")," do all the heavy lifting within Airbyte. A worker is responsible for executing Airbyte operations ","(","e.g. Discover, Read, Sync etc",")",", and is created on demand whenever these operations are requested. Thus, every job has a corresponding worker executing its work."),(0,r.kt)("p",null,"How a worker executes work depends on the Airbyte deployment. In the Docker deployment, an Airbyte worker spins up at least one Docker container. In the Kubernetes deployment, an Airbyte worker will create at least one Kubernetes pod. The created resource ","(","Docker container or Kubernetes pod",")"," does all the actual work."),(0,r.kt)("p",null,"Thus, scaling Airbyte is a matter of ensuring that the Docker container or Kubernetes Pod running the jobs has sufficient resources to execute its work."),(0,r.kt)("p",null,"Jobs-wise, we are mainly concerned with Sync jobs when thinking about scale. Sync jobs sync data from sources to destinations and are the majority of jobs run. Sync jobs use two workers. One worker reads from the source; the other worker writes to the destination."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In general, we recommend starting out with a mid-sized cloud instance ","(","e.g. 4 or 8 cores",")"," and gradually tuning instance size to your workload.")),(0,r.kt)("p",null,"There are two resources to be aware of when thinking of scale: 1. Memory 2. Disk space"),(0,r.kt)("h3",{id:"memory"},"Memory"),(0,r.kt)("p",null,"As mentioned above, we are mainly concerned with scaling Sync jobs. Within a Sync job, the main memory culprit is the Source worker."),(0,r.kt)("p",null,"This is because the Source worker reads up to 10,000 records in memory. This can present problems for database sources with tables that have large row sizes. e.g. a table with an average row size of 0.5MBs will require 0.5 ","*"," 10000 / 1000 = 5GBs of RAM. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3439"},"this issue")," for more information."),(0,r.kt)("p",null,"Our Java connectors currently follow Java's default behaviour with container memory and will only use up to 1/4 of the host's allocated memory. e.g. On a Docker agent with 8GBs of RAM configured, a Java connector limits itself to 2Gbs of RAM and will see Out-of-Memory exceptions if this goes higher. The same applies to Kubernetes pods.\nYou may want to customize this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"JOB_MAIN_CONTAINER_MEMORY_REQUEST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JOB_MAIN_CONTAINER_MEMORY_LIMIT")," environment variables to custom values."),(0,r.kt)("p",null,"Note that all Source database connectors are Java connectors. This means that users currently need to over-specify memory resource for Java connectors."),(0,r.kt)("h3",{id:"disk-space"},"Disk Space"),(0,r.kt)("p",null,"Airbyte uses backpressure to try to read the minimal amount of logs required. In the past, disk space was a large concern, but we've since deprecated the expensive on-disk queue approach."),(0,r.kt)("p",null,"However, disk space might become an issue for the following reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Long-running syncs can produce a fair amount of logs from the Docker agent and Airbyte on Docker deployments. Some work has been done to minimize accidental logging, so this should no longer be an acute problem, but is still an open issue."),(0,r.kt)("li",{parentName:"ol"},"Although Airbyte connector images aren't massive, they aren't exactly small either. The typical connector image is ~300MB. An Airbyte deployment with multiple connectors can easily use up to 10GBs of disk space.")),(0,r.kt)("p",null,"Because of this, we recommend allocating a minimum of 30GBs of disk space per node. Since storage is on the cheaper side, we'd recommend you be safe than sorry, so err on the side of over-provisioning."),(0,r.kt)("h3",{id:"on-kubernetes"},"On Kubernetes"),(0,r.kt)("p",null,"Users running Airbyte Kubernetes also have to make sure the Kubernetes cluster can accommodate the number of pods Airbyte creates."),(0,r.kt)("p",null,"To be safe, make sure the Kubernetes cluster can schedule up to ",(0,r.kt)("inlineCode",{parentName:"p"},"2 x <number-of-possible-concurrent-connections>")," pods at once. This is the worse case estimate, and most users should be fine with ",(0,r.kt)("inlineCode",{parentName:"p"},"2 x <number-of-possible-concurrent-connections>")," as a rule of thumb."),(0,r.kt)("p",null,"This is a ",(0,r.kt)("strong",{parentName:"p"},"non-issue")," for users running Airbyte Docker."),(0,r.kt)("h3",{id:"temporal-db"},"Temporal DB"),(0,r.kt)("p",null,"Temporal maintains multiple idle connections. By the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," and you may want to lower or increase this number. One issue we noticed is\nthat temporal creates multiple pools and the number specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL_MAX_IDLE_CONNS")," environment variable of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.compose.yaml")," file\nmight end up allowing 4-5 times more connections than expected."),(0,r.kt)("p",null,"If you want to increase the amount of allowed idle connexion, you will also need to increase ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL_MAX_CONNS")," as well because ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL_MAX_IDLE_CONNS"),"\nis capped by ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL_MAX_CONNS"),"."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"The advice here is best-effort and by no means comprehensive. Please reach out on Slack if anything doesn't make sense or if something can be improved."),(0,r.kt)("p",null,"If you've been running Airbyte in production and have more tips up your sleeve, we welcome contributions!"),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Airbyte supports exporting built-in metrics to Datadog or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/operator-guides/collecting-metrics/"},"OpenTelemetry")),(0,r.kt)("h3",{id:"key-metrics"},"Key Metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oldest_pending_job_age_secs")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows how long a pending job waits before it is scheduled. If a job is in pending state for a long time, more workers may be required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oldest_running_job_age_secs")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows how long the oldest job has been running. A running job that is too large can indicate stuck jobs. This is relative to each job\u2019s runtime.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"job_failed_by_release_stage")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows jobs that have failed in that release stage and is tagged as alpha, beta, or GA.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Metrics with ",(0,r.kt)("inlineCode",{parentName:"p"},"by_release_stage")," in their name are tagged by connector release stage (alpha, beta, or GA). These tags allow you to filter by release stage. Alpha and beta connectors are less stable and have a higher failure rate than GA connectors, so filtering by those release stages can help you find failed jobs.  ")),(0,r.kt)("h3",{id:"recommended-metrics"},"Recommended Metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recommended Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"num_running_jobs & num_pending_jobs")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows how many jobs are currently running and how many jobs are in pending state. These metrics help you understand the general system state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"job_succeeded_by_release_stage")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows successful jobs in that release stage and is tagged as alpha, beta, or GA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"job_created_by_release_stage")),(0,r.kt)("td",{parentName:"tr",align:null},"Shows the jobs created in that release stage and is tagged as alpha, beta, or GA.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"If a job was created for an Alpha source to a Beta destination and the outcome of the job is a success, the following metrics are displayed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"job_created_by_release_stage[\u201calpha\u201d] = 1;  \njob_created_by_release_stage[\u201cbeta\u201d] = 1;  \njob_failed_by_release_stage[\u201calpha\u201d] = 1;  \njob_succeeded_by_release_stage[\u201cbeta\u201d] = 1;  \n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Each job has a source and destination, so each metric is counted twice \u2014 once for source and once for destination.")))}u.isMDXComponent=!0}}]);