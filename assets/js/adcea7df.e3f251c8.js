"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[96672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o="Gradle Cheatsheet",s={unversionedId:"contributing-to-airbyte/gradle-cheatsheet",id:"contributing-to-airbyte/gradle-cheatsheet",title:"Gradle Cheatsheet",description:"Overview",source:"@site/../docs/contributing-to-airbyte/gradle-cheatsheet.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/gradle-cheatsheet",permalink:"/contributing-to-airbyte/gradle-cheatsheet",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/gradle-cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Issues & Pull Requests",permalink:"/contributing-to-airbyte/issues-and-pull-requests"},next:{title:"Updating Gradle Dependencies",permalink:"/contributing-to-airbyte/gradle-dependency-update"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Basic Build Syntax",id:"basic-build-syntax",level:3},{value:"Build Everything",id:"build-everything",level:4},{value:"Build Platform",id:"build-platform",level:4},{value:"Build Connectors Base",id:"build-connectors-base",level:4},{value:"Build",id:"build",level:3},{value:"Formatting",id:"formatting",level:3},{value:"Platform-Specific Commands",id:"platform-specific-commands",level:3},{value:"Build Artifacts",id:"build-artifacts",level:4},{value:"Running Tests",id:"running-tests",level:4},{value:"Connectors-Specific Commands (Connector Development)",id:"connectors-specific-commands-connector-development",level:3},{value:"Commands used in CI",id:"commands-used-in-ci",level:4},{value:"Python",id:"python",level:4}],d={toc:c};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gradle-cheatsheet"},"Gradle Cheatsheet"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"We have 3 ways of slicing our builds:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Build Everything"),": Including every single connectors."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Build Platform"),": Build only modules related to the core platform."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Build Connectors Base"),": Build only modules related to code infrastructure for connectors.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build Everything")," is really not particularly functional as building every single connector at once is really prone to transient errors. As there are more connectors the chance that there is a transient issue while downloading any single dependency starts to get really high."),(0,r.kt)("p",null,"In our CI we run ",(0,r.kt)("strong",{parentName:"p"},"Build Platform")," and ",(0,r.kt)("strong",{parentName:"p"},"Build Connectors Base"),". Then separately, on a regular cadence, we build each connector and run its integration tests."),(0,r.kt)("p",null,"We split Build Platform and Build Connectors Base from each other for a few reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The tech stacks are very different. The Platform is almost entirely Java. Because of differing needs around separating environments, the Platform build can be optimized separately from the Connectors one."),(0,r.kt)("li",{parentName:"ol"},"We want to the iteration cycles of people working on connectors or the platform faster ",(0,r.kt)("em",{parentName:"li"},"and")," independent. e.g. Before this change someone working on a Platform feature needs to run formatting on the entire codebase ","(","including connectors",")",". This led to a lot of cosmetic build failures that obfuscated actually problems. Ideally a failure on the connectors side should not block progress on the platform side."),(0,r.kt)("li",{parentName:"ol"},"The lifecycles are different. One can safely release the Platform even if parts of Connectors Base is failing ","(","and vice versa",")",".")),(0,r.kt)("p",null,"Future Work: The next step here is to figure out how to more formally split connectors and platform. Right now we exploit behavior in ",(0,r.kt)("a",{target:"_blank",href:n(57931).Z},"settings.gradle")," to separate them. This is not a best practice. Ultimately, we want these two builds to be totally separate. We do not know what that will look like yet."),(0,r.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,r.kt)("p",null,"Here is a cheatsheet for common gradle commands."),(0,r.kt)("h3",{id:"basic-build-syntax"},"Basic Build Syntax"),(0,r.kt)("p",null,"Here is the syntax for running gradle commands on the different parts of the code base that we called out above."),(0,r.kt)("h4",{id:"build-everything"},"Build Everything"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"./gradlew <gradle command>\n")),(0,r.kt)("h4",{id:"build-platform"},"Build Platform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"SUB_BUILD=PLATFORM ./gradlew <gradle command>\n")),(0,r.kt)("h4",{id:"build-connectors-base"},"Build Connectors Base"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"SUB_BUILD=CONNECTORS_BASE ./gradlew <gradle command>\n")),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("p",null,'In order to "build" the project. This task includes producing all artifacts and running unit tests ',"(","anything called in the ",(0,r.kt)("inlineCode",{parentName:"p"},":test")," task",")",". It does ",(0,r.kt)("em",{parentName:"p"},"not")," include integration tests ","(","anything called in the ",(0,r.kt)("inlineCode",{parentName:"p"},":integrationTest")," task",")","."),(0,r.kt)("p",null,"For example all the following are valid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew build # builds the entire Airbyte project including every single connector supported\nSUB_BUILD=PLATFORM ./gradlew build -x test # builds Airbyte Platform without running tests\nSUB_BUILD=CONNECTORS_BASE ./gradlew build # builds all Airbyte connectors and runs unit tests\n")),(0,r.kt)("h3",{id:"formatting"},"Formatting"),(0,r.kt)("p",null,"The build system has a custom task called ",(0,r.kt)("inlineCode",{parentName:"p"},"format"),". It is not called as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),". If the command is called on a subset of the project, it will ","(","mostly",")"," target just the included modules. The exception is that ",(0,r.kt)("inlineCode",{parentName:"p"},"spotless")," ","(","a gradle formatter",")"," will always format any file types that it is configured to manage regardless of which sub build is run. ",(0,r.kt)("inlineCode",{parentName:"p"},"spotless")," is relatively fast, so this should not be too much of an annoyance. It can lead to formatting changes in unexpected parts of the code base."),(0,r.kt)("p",null,"For example all the following are valid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew format\nSUB_BUILD=PLATFORM ./gradlew format\nSUB_BUILD=CONNECTORS_BASE ./gradlew format\n")),(0,r.kt)("h3",{id:"platform-specific-commands"},"Platform-Specific Commands"),(0,r.kt)("h4",{id:"build-artifacts"},"Build Artifacts"),(0,r.kt)("p",null,"This command just builds the docker images that are used as artifacts in the platform. It bypasses running tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"SUB_BUILD=PLATFORM ./gradlew build\n")),(0,r.kt)("h4",{id:"running-tests"},"Running Tests"),(0,r.kt)("p",null,"The Platform has 3 different levels of tests: Unit Tests, Acceptance Tests, Frontend Acceptance Tests."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Test"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Used"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Unit"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Aims to test each component (e.g. a method function)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Integration"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Checks the data flow from one module to other modules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"System"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tests overall interaction of components, includes load, performance, reliability and security")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Acceptance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Assess whether the Product is working for the user's viewpoint")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unit Tests")),(0,r.kt)("p",null,"Unit Tests can be run using the ",(0,r.kt)("inlineCode",{parentName:"p"},":test")," task on any submodule. These test class-level behavior. They should avoid using external resources ","(","e.g. calling staging services or pulling resources from the internet",")",". We do allow these tests to spin up local resources ","(","usually in docker containers",")",". For example, we use test containers frequently to spin up test postgres databases."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Acceptance Tests")),(0,r.kt)("p",null,"We split Acceptance Tests into 2 different test suites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Platform Acceptance Tests: These tests are a coarse test to sanity check that each major feature in the platform. They are run with the following command: ",(0,r.kt)("inlineCode",{parentName:"li"},"SUB_BUILD=PLATFORM ./gradlew :airbyte-tests:acceptanceTests"),". These tests expect to find a local version of Airbyte running. For testing the docker version start Airbyte locally. For an example, see the ",(0,r.kt)("a",{target:"_blank",href:n(70210).Z},"acceptance_test script")," that is used by the CI. For Kubernetes, see the ",(0,r.kt)("a",{target:"_blank",href:n(53468).Z},"accetance_test_kube script")," that is used by the CI."),(0,r.kt)("li",{parentName:"ul"},"Migration Acceptance Tests: These tests make sure the end-to-end process of migrating from one version of Airbyte to the next works. These tests are run with the following command: ",(0,r.kt)("inlineCode",{parentName:"li"},"SUB_BUILD=PLATFORM ./gradlew :airbyte-tests:automaticMigrationAcceptanceTest --scan"),". These tests do not expect there to be a separate deployment of Airbyte running.")),(0,r.kt)("p",null,"These tests currently all live in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/airbyte-tests"},"airbyte-tests")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Frontend Acceptance Tests")),(0,r.kt)("p",null,"These are acceptance tests for the frontend. They are run with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"SUB_BUILD=PLATFORM ./gradlew --no-daemon :airbyte-webapp-e2e-tests:e2etest\n")),(0,r.kt)("p",null,"Like the Platform Acceptance Tests, they expect Airbyte to be running locally. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/tools/bin/e2e_test.sh"},"script")," that is used by the CI."),(0,r.kt)("p",null,"These tests currently all live in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/airbyte-webapp-e2e-tests"},"airbyte-webapp-e2e-tests")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Future Work")),(0,r.kt)("p",null,'Our story around "integration testing" or "E2E testing" is a little ambiguous. Our Platform Acceptance Test Suite is getting somewhat unwieldy. It was meant to just be some coarse sanity checks, but over time we have found more need to test interactions between systems more granular. Whether we start supporting a separate class of tests ',"(","e.g. integration tests",")"," or figure out how allow for more granular tests in the existing Acceptance Test framework is TBD."),(0,r.kt)("h3",{id:"connectors-specific-commands-connector-development"},"Connectors-Specific Commands ","(","Connector Development",")"),(0,r.kt)("h4",{id:"commands-used-in-ci"},"Commands used in CI"),(0,r.kt)("p",null,"All connectors, regardless of implementation language, implement the following interface to allow uniformity in the build system when run from CI:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build connector, run unit tests, and build Docker image"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :airbyte-integrations:connectors:<connector_name>:build\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run integration tests"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :airbyte-integrations:connectors:<connector_name>:integrationTest\n")),(0,r.kt)("h4",{id:"python"},"Python"),(0,r.kt)("p",null,"The ideal end state for a Python connector developer is that they shouldn't have to know Gradle exists."),(0,r.kt)("p",null,"We're almost there, but today there is only one Gradle command that's needed when developing in Python, used for formatting code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Formatting python module"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :airbyte-integrations:connectors:<connector_name>:airbytePythonFormat\n")))}u.isMDXComponent=!0},57931:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/settings-b58a0949e6701828bbd108802315223f.gradle"},70210:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/acceptance_test-ce5e37a1a91bd88712cca91178f1c2d5.sh"},53468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/acceptance_test_kube-ab45c0096218859f4072a9bb6bf62039.sh"}}]);