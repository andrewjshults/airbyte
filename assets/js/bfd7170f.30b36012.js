"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[63355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},l="Browsing Output Logs",i={unversionedId:"operator-guides/browsing-output-logs",id:"operator-guides/browsing-output-logs",title:"Browsing Output Logs",description:"Overview",source:"@site/../docs/operator-guides/browsing-output-logs.md",sourceDirName:"operator-guides",slug:"/operator-guides/browsing-output-logs",permalink:"/operator-guides/browsing-output-logs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/browsing-output-logs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Configuring Connector Resources",permalink:"/operator-guides/configuring-connector-resources"},next:{title:"Using the Airflow Airbyte Operator",permalink:"/operator-guides/using-the-airflow-airbyte-operator"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Exploring the Logs folders",id:"exploring-the-logs-folders",level:2},{value:"Identifying Workspace IDs",id:"identifying-workspace-ids",level:3},{value:"Understanding the Docker run commands",id:"understanding-the-docker-run-commands",level:3},{value:"Opening a Unix shell prompt to browse the Docker volume",id:"opening-a-unix-shell-prompt-to-browse-the-docker-volume",level:3},{value:"Browsing from the host shell",id:"browsing-from-the-host-shell",level:3},{value:"Reading the content of the catalog.json file",id:"reading-the-content-of-the-catalogjson-file",level:3},{value:"Extract catalog.json file from docker volume",id:"extract-catalogjson-file-from-docker-volume",level:3},{value:"Browsing on Kubernetes",id:"browsing-on-kubernetes",level:3},{value:"CSV or JSON local Destinations: Check local data folder",id:"csv-or-json-local-destinations-check-local-data-folder",level:2},{value:"Notes about running on macOS vs Linux",id:"notes-about-running-on-macos-vs-linux",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"browsing-output-logs"},"Browsing Output Logs"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This tutorial will describe how to explore Airbyte Workspace folders."),(0,r.kt)("p",null,"This is useful if you need to browse the docker volumes where extra output files of Airbyte server and workers are stored since they may not be accessible through the UI."),(0,r.kt)("h2",{id:"exploring-the-logs-folders"},"Exploring the Logs folders"),(0,r.kt)("p",null,"When running a Sync in Airbyte, you have the option to look at the logs in the UI as shown next."),(0,r.kt)("h3",{id:"identifying-workspace-ids"},"Identifying Workspace IDs"),(0,r.kt)("p",null,'In the screenshot below, you can notice the highlighted blue boxes are showing the id numbers that were used for the selected "Attempt" for this sync job.'),(0,r.kt)("p",null,"In this case, the job was running in ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/workspace/9/2/")," folder since the tab of the third attempt is being selected in the UI ","(","first attempt would be ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/workspace/9/0/"),")","."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16921).Z,width:"837",height:"549"})),(0,r.kt)("p",null,"The highlighted button in the red circle on the right would allow you to download the logs.log file.",(0,r.kt)("br",{parentName:"p"}),"\n","However, there are actually more files being recorded in the same workspace folder... Thus, we might want to dive deeper to explore these folders and gain a better understanding of what is being run by Airbyte."),(0,r.kt)("h3",{id:"understanding-the-docker-run-commands"},"Understanding the Docker run commands"),(0,r.kt)("p",null,"Scrolling down a bit more, we can also read the different docker commands being used internally are starting with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run --rm -i -v airbyte_workspace:/data -v /tmp/airbyte_local:/local -w /data/9/2 --network host ...\n")),(0,r.kt)("p",null,"From there, we can observe that Airbyte is calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," option to use a docker named volume called ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_workspace")," that is mounted in the container at the location ",(0,r.kt)("inlineCode",{parentName:"p"},"/data"),"."),(0,r.kt)("p",null,"Following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"Docker Volume documentation"),", we can inspect and manipulate persisted configuration data in these volumes."),(0,r.kt)("h3",{id:"opening-a-unix-shell-prompt-to-browse-the-docker-volume"},"Opening a Unix shell prompt to browse the Docker volume"),(0,r.kt)("p",null,"For example, we can run any docker container/image to browse the content of this named volume by mounting it similarly, let's use the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/busybox"},"busybox")," image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run -it --rm --volume airbyte_workspace:/data busybox\n")),(0,r.kt)("p",null,"This will drop you into an ",(0,r.kt)("inlineCode",{parentName:"p"},"sh")," shell inside the docker container to allow you to do what you want inside a BusyBox system from which we can browse the filesystem and accessing to log files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ls /data/9/2/\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"catalog.json                  normalize                     tap_config.json\nlogs.log                      singer_rendered_catalog.json  target_config.json\n")),(0,r.kt)("h3",{id:"browsing-from-the-host-shell"},"Browsing from the host shell"),(0,r.kt)("p",null,"Or, if you don't want to transfer to a shell prompt inside the docker image, you can simply run Shell commands using docker commands as a proxy like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm --volume airbyte_workspace:/data busybox ls /data/9/2\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"catalog.json                 singer_rendered_catalog.json\nlogs.log                     tap_config.json\nnormalize                    target_config.json\n")),(0,r.kt)("h3",{id:"reading-the-content-of-the-catalogjson-file"},"Reading the content of the catalog.json file"),(0,r.kt)("p",null,"For example, it is often useful to inspect the content of the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog"},"catalog")," file. You could do so by running a ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm --volume airbyte_workspace:/data busybox cat /data/9/2/catalog.json\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"streams":[{"stream":{"name":"exchange_rate","json_schema":{"type":"object","properties":{"CHF":{"type":"number"},"HRK":{"type":"number"},"date":{"type":"string"},"MXN":{"type":"number"},"ZAR":{"type":"number"},"INR":{"type":"number"},"CNY":{"type":"number"},"THB":{"type":"number"},"AUD":{"type":"number"},"ILS":{"type":"number"},"KRW":{"type":"number"},"JPY":{"type":"number"},"PLN":{"type":"number"},"GBP":{"type":"number"},"IDR":{"type":"number"},"HUF":{"type":"number"},"PHP":{"type":"number"},"TRY":{"type":"number"},"RUB":{"type":"number"},"HKD":{"type":"number"},"ISK":{"type":"number"},"EUR":{"type":"number"},"DKK":{"type":"number"},"CAD":{"type":"number"},"MYR":{"type":"number"},"USD":{"type":"number"},"BGN":{"type":"number"},"NOK":{"type":"number"},"RON":{"type":"number"},"SGD":{"type":"number"},"CZK":{"type":"number"},"SEK":{"type":"number"},"NZD":{"type":"number"},"BRL":{"type":"number"}}},"supported_sync_modes":["full_refresh"],"default_cursor_field":[]},"sync_mode":"full_refresh","cursor_field":[]}]}\n')),(0,r.kt)("h3",{id:"extract-catalogjson-file-from-docker-volume"},"Extract catalog.json file from docker volume"),(0,r.kt)("p",null,"Or if you want to copy it out from the docker image onto your host machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp airbyte-server:/tmp/workspace/9/2/catalog.json .\ncat catalog.json\n")),(0,r.kt)("h3",{id:"browsing-on-kubernetes"},"Browsing on Kubernetes"),(0,r.kt)("p",null,"If you are running on Kubernetes, use the following commands instead to browsing and copy the files to your local."),(0,r.kt)("p",null,"To browse, identify the pod you are interested in and exec into it. You will be presented with a terminal that will accept normal linux commands e.g ls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it <pod name> -n <namespace pod is in> -c main bash\ne.g.\nkubectl exec -it destination-bigquery-worker-3607-0-chlle  -n jobs  -c main bash\nroot@destination-bigquery-worker-3607-0-chlle:/config# ls\nFINISHED_UPLOADING  destination_catalog.json  destination_config.json\n")),(0,r.kt)("p",null,"To copy the file on to your local in order to preserve it's contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cp <namespace pods are in>/<normalisation-pod-name>:/config/destination_catalog.json ./catalog.json\ne.g.\nkubectl cp jobs/normalization-worker-3605-0-sxtox:/config/destination_catalog.json ./catalog.json\ncat ./catalog.json\n")),(0,r.kt)("h2",{id:"csv-or-json-local-destinations-check-local-data-folder"},"CSV or JSON local Destinations: Check local data folder"),(0,r.kt)("p",null,"If you setup a pipeline using one of the local File based destinations ","(","CSV or JSON",")",", Airbyte is writing the resulting files containing the data in the special ",(0,r.kt)("inlineCode",{parentName:"p"},"/local/")," directory in the container. By default, this volume is mounted from ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local")," on the host machine. So you need to navigate to this ",(0,r.kt)("a",{parentName:"p",href:"file:///tmp/airbyte_local/"},"local folder")," on the filesystem of the machine running the Airbyte deployment to retrieve the local data files."),(0,r.kt)("p",null,"Or, you can also run through docker commands as proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\necho "In the container:"\n\ndocker run -it --rm -v /tmp/airbyte_local:/local busybox find /local\n\necho ""\necho "On the host:"\n\nfind /tmp/airbyte_local\n')),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"In the container:\n/local\n/local/data\n/local/data/exchange_rate_raw.csv\n\nOn the host:\n/tmp/airbyte_local\n/tmp/airbyte_local/data\n/tmp/airbyte_local/data/exchange_rate_raw.csv\n")),(0,r.kt)("h2",{id:"notes-about-running-on-macos-vs-linux"},"Notes about running on macOS vs Linux"),(0,r.kt)("p",null,'Note that Docker for Mac is not a real Docker host, now it actually runs a virtual machine behind the scenes and hides it from you to make things "simpler".'),(0,r.kt)("p",null,"Here are some related links as references on accessing Docker Volumes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on macOS ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/55648186"},"Using Docker containers in 2019")),(0,r.kt)("li",{parentName:"ul"},"official doc ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes"},"Use Volume"))),(0,r.kt)("p",null,"From these discussions, we've been using on macOS either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"any docker container/image to browse the virtual filesystem by mounting the volume in order to access them, for example with ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/busybox"},"busybox")),(0,r.kt)("li",{parentName:"ol"},"or extract files from the volume by copying them onto the host with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cp/"},"Docker cp"))),(0,r.kt)("p",null,"However, as a side remark on Linux, accessing to named Docker Volume can be easier since you simply need to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker volume inspect <volume_name>\n")),(0,r.kt)("p",null,"Then look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mountpoint")," value, this is where the volume is actually stored in the host filesystem and you can directly retrieve files directly from that folder."))}p.isMDXComponent=!0},16921:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/explore_logs-3734714ca2e59b504a270e88e71c9648.png"}}]);