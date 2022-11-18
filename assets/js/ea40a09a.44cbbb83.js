"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[39664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},41693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},l="Json to Avro Conversion for Blob Storage Destinations",o={unversionedId:"understanding-airbyte/json-avro-conversion",id:"understanding-airbyte/json-avro-conversion",title:"Json to Avro Conversion for Blob Storage Destinations",description:"When an Airbyte data stream is synced to the Avro or Parquet format (e.g. Parquet on S3), the source Json schema is converted to an Avro schema, then the Json object is converted to an Avro record based on the Avro schema (and further to Parquet if necessary). Because the data stream can come from any data source, the Json to Avro conversion process has the following rules and limitations.",source:"@site/../docs/understanding-airbyte/json-avro-conversion.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/json-avro-conversion",permalink:"/understanding-airbyte/json-avro-conversion",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/json-avro-conversion.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Data Types in Records",permalink:"/understanding-airbyte/supported-data-types"},next:{title:"Config Database",permalink:"/understanding-airbyte/database-data-catalog"}},s={},p=[{value:"Conversion Rules",id:"conversion-rules",level:2},{value:"Type Mapping",id:"type-mapping",level:3},{value:"Nullable Fields",id:"nullable-fields",level:3},{value:"Built-in Formats",id:"built-in-formats",level:3},{value:"Combined Restrictions",id:"combined-restrictions",level:3},{value:"Keyword <code>not</code>",id:"keyword-not",level:3},{value:"Filed Name",id:"filed-name",level:3},{value:"Array Types",id:"array-types",level:3},{value:"Untyped Array",id:"untyped-array",level:3},{value:"Airbyte-Specific Fields",id:"airbyte-specific-fields",level:3},{value:"Additional Properties",id:"additional-properties",level:3},{value:"Untyped Object",id:"untyped-object",level:3},{value:"Untyped Field",id:"untyped-field",level:3},{value:"Example",id:"example",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-to-avro-conversion-for-blob-storage-destinations"},"Json to Avro Conversion for Blob Storage Destinations"),(0,r.kt)("p",null,"When an Airbyte data stream is synced to the Avro or Parquet format (e.g. Parquet on S3), the source Json schema is converted to an Avro schema, then the Json object is converted to an Avro record based on the Avro schema (and further to Parquet if necessary). Because the data stream can come from any data source, the Json to Avro conversion process has the following rules and limitations."),(0,r.kt)("h2",{id:"conversion-rules"},"Conversion Rules"),(0,r.kt)("h3",{id:"type-mapping"},"Type Mapping"),(0,r.kt)("p",null,"Json schema types are mapped to Avro types as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Json Data Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Avro Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"null"),(0,r.kt)("td",{parentName:"tr",align:"center"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"array"),(0,r.kt)("td",{parentName:"tr",align:"center"},"array")))),(0,r.kt)("h3",{id:"nullable-fields"},"Nullable Fields"),(0,r.kt)("p",null,"All fields are nullable. For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," Json field will be typed as ",(0,r.kt)("inlineCode",{parentName:"p"},'["null", "string"]')," in Avro. This is necessary because the incoming data stream may have optional fields."),(0,r.kt)("h3",{id:"built-in-formats"},"Built-in Formats"),(0,r.kt)("p",null,"The following built-in Json formats will be mapped to Avro logical types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Json Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Json Built-in Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Avro Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Avro Logical Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of epoch days from 1970-01-01 (",(0,r.kt)("a",{parentName:"td",href:"https://avro.apache.org/docs/current/spec.html#Date"},"reference"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time-micros")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of microseconds after midnight (",(0,r.kt)("a",{parentName:"td",href:"https://avro.apache.org/docs/current/spec.html#Time+%28microsecond+precision%29"},"reference"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date-time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp-micros")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of microseconds from ",(0,r.kt)("inlineCode",{parentName:"td"},"1970-01-01T00:00:00Z")," (",(0,r.kt)("a",{parentName:"td",href:"https://avro.apache.org/docs/current/spec.html#Timestamp+%28microsecond+precision%29"},"reference"),").")))),(0,r.kt)("p",null,"In the final Avro schema, these Avro logical type fields will be a union of the logical type and string. The rationale is that the incoming Json objects may contain invalid Json built-in formats. If that's the case, and the conversion from the Json built-in format to Avro built-in format fails, the field will fall back to a string. The extra string type can cause problem for some users in the destination. We may re-evaluate this conversion rule in the future. This issue is tracked ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/17011"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Date")),(0,r.kt)("p",null,"The date logical type represents a date within the calendar, with no reference to a particular time zone or time of day."),(0,r.kt)("p",null,"A date logical type annotates an Avro int, where the int stores the number of days from the unix epoch, 1 January 1970 (ISO calendar)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "string",\n  "format": "date"\n}\n')),(0,r.kt)("p",null,"is mapped to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "int",\n  "logicalType": "date"\n}\n')),(0,r.kt)("p",null,"and the Avro schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": [\n    "null",\n    {\n      "type": "int",\n      "logicalType": "date"\n    },\n    "string"\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time (microsecond precision)")),(0,r.kt)("p",null,"The time-micros logical type represents a time of day, with no reference to a particular calendar, time zone or date, with a precision of one microsecond."),(0,r.kt)("p",null,"A time-micros logical type annotates an Avro long, where the long stores the number of microseconds after midnight, 00:00:00.000000."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "string",\n  "format": "time"\n}\n')),(0,r.kt)("p",null,"is mapped to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "long",\n  "logicalType": "time-micros"\n}\n')),(0,r.kt)("p",null,"and the Avro schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": [\n    "null",\n    {\n      "type": "long",\n      "logicalType": "time-micros"\n    },\n    "string"\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Timestamp (microsecond precision)")),(0,r.kt)("p",null,"The timestamp-micros logical type represents an instant on the global timeline, independent of a particular time zone or calendar, with a precision of one microsecond."),(0,r.kt)("p",null,"A timestamp-micros logical type annotates an Avro long, where the long stores the number of microseconds from the unix epoch, 1 January 1970 00:00:00.000000 UTC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "string",\n  "format": "date-time"\n}\n')),(0,r.kt)("p",null,"is mapped to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "long",\n  "logicalType": "timestamp-micros"\n}\n')),(0,r.kt)("p",null,"and the Avro schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": [\n    "null",\n    {\n      "type": "long",\n      "logicalType": "timestamp-micros"\n    },\n    "string"\n  ]\n}\n')),(0,r.kt)("h3",{id:"combined-restrictions"},"Combined Restrictions"),(0,r.kt)("p",null,"Combined restrictions ","(",(0,r.kt)("inlineCode",{parentName:"p"},"allOf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf"),")"," will be converted to type unions. The corresponding Avro schema can be less stringent. For example, the following Json schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "oneOf": [\n    {"type": "string"},\n    {"type": "integer"}\n  ]\n}\n')),(0,r.kt)("p",null,"will become this in Avro schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": ["null", "string", "int"]\n}\n')),(0,r.kt)("h3",{id:"keyword-not"},"Keyword ",(0,r.kt)("inlineCode",{parentName:"h3"},"not")),(0,r.kt)("p",null,"Keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," is not supported, as there is no equivalent validation mechanism in Avro schema."),(0,r.kt)("h3",{id:"filed-name"},"Filed Name"),(0,r.kt)("p",null,"Only alphanumeric characters and underscores ","(",(0,r.kt)("inlineCode",{parentName:"p"},"/a-zA-Z0-9_/"),")"," are allowed in a stream or field name. Any special character will be converted to an alphabet or underscore. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"sp\xe9cial:character_names")," will become ",(0,r.kt)("inlineCode",{parentName:"p"},"special_character_names"),". The original names will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"doc"),"property in this format: ",(0,r.kt)("inlineCode",{parentName:"p"},"_airbyte_original_name:<original-name>"),"."),(0,r.kt)("p",null,"Field name cannot start with a number, so an underscore will be added to those field names at the beginning."),(0,r.kt)("h3",{id:"array-types"},"Array Types"),(0,r.kt)("p",null,"For array fields in Json schema, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property is an array, it means that each element in the array should follow its own schema sequentially. For example, the following specification means the first item in the array should be a string, and the second a number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "array_field": {\n    "type": "array",\n    "items": [\n      {"type": "string"},\n      {"type": "number"}\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"This is not supported in Avro schema. As a compromise, the converter creates a union, ",(0,r.kt)("inlineCode",{parentName:"p"},'["null", "string", "number"]'),", which is less stringent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "array_field",\n  "type": [\n    "null",\n    {\n      "type": "array",\n      "items": ["null", "string", "number"]\n    }\n  ],\n  "default": null\n}\n')),(0,r.kt)("p",null,"If the Json array has multiple object items, these objects will be recursively merged into one Avro record. For example, the following Json array expects two different objects. The first object has an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field, and second has an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," field. Their ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," fields have slightly different types."),(0,r.kt)("p",null,"Json schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "array_field": {\n    "type": "array",\n    "items": [\n      {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "object",\n            "properties": {\n              "id_part_1": { "type": "integer" },\n              "id_part_2": { "type": "string" }\n            }\n          }\n        }\n      },\n      {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "object",\n            "properties": {\n              "id_part_1": { "type": "string" },\n              "id_part_2": { "type": "integer" }\n            }\n          },\n          "message": {\n            "type": "string"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Json object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "array_field": [\n    {\n      "id": {\n        "id_part_1": 1000,\n        "id_part_2": "abcde"\n      }\n    }, {\n      "id": {\n        "id_part_1": "wxyz",\n        "id_part_2": 2000\n      },\n      "message": "test message"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"After conversion, the two object schemas will be merged into one. Furthermore, the fields under the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," record, ",(0,r.kt)("inlineCode",{parentName:"p"},"id_part_1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id_part_2"),", will also be merged. In this way, all possible valid elements from the Json array can be converted to Avro records."),(0,r.kt)("p",null,"Avro schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "array_field",\n  "type": [\n    "null",\n    {\n      "type": "array",\n      "items": [\n        "boolean",\n        {\n          "type": "record",\n          "name": "array_field",\n          "fields": [\n            {\n              "name": "id",\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "id",\n                  "fields": [\n                    {\n                      "name": "id_part_1",\n                      "type": ["null", "int", "string"],\n                      "default": null\n                    },\n                    {\n                      "name": "id_part_2",\n                      "type": ["null", "string", "int"],\n                      "default": null\n                    }\n                  ]\n                }\n              ],\n              "default": null\n            },\n            {\n              "name": "message",\n              "type": ["null", "string"],\n              "default": null\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "default": null\n}\n')),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"id_part_1")," is a union of ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", which comes from the first and second ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," definitions, respectively, in the original Json ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," specification."),(0,r.kt)("p",null,"Avro object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "array_field": [\n    {\n      "id": {\n        "id_part_1": 1000,\n        "id_part_2": "abcde"\n      },\n      "message": null\n    },\n    {\n      "id": {\n        "id_part_1": "wxyz",\n        "id_part_2": 2000\n      },\n      "message": "test message"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Note that the first object in ",(0,r.kt)("inlineCode",{parentName:"p"},"array_field")," originally does not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," field. However, because its schema is merged with the second object definition, it has a null ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," field in the Avro record."),(0,r.kt)("h3",{id:"untyped-array"},"Untyped Array"),(0,r.kt)("p",null,"When a Json array field has no ",(0,r.kt)("inlineCode",{parentName:"p"},"items"),", the element in that array field may have any type. However, Avro requires that each array has a clear type specification. To solve this problem, the elements in the array are forced to be ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"s."),(0,r.kt)("p",null,"For example, given the following Json schema and object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "identifier": {\n      "type": "array"\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identifier": ["151", 152, true, {"id": 153}, null]\n}\n')),(0,r.kt)("p",null,"the corresponding Avro schema and object will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "record",\n  "fields": [\n    {\n      "name": "identifier",\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": ["null", "string"]\n        }\n      ],\n      "default": null\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identifier": ["151", "152", "true", "{\\"id\\": 153}", null]\n}\n')),(0,r.kt)("p",null,"Note that every non-null element inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," array field is converted to string."),(0,r.kt)("h3",{id:"airbyte-specific-fields"},"Airbyte-Specific Fields"),(0,r.kt)("p",null,"Three Airbyte specific fields will be added to each Avro record:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Schema"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Document"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uuid")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"http://avro.apache.org/docs/current/spec.html#UUID"},"link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp-millis")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"http://avro.apache.org/docs/current/spec.html#Timestamp+%28millisecond+precision%29"},"link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_additional_properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map")," of ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"See explanation below.")))),(0,r.kt)("h3",{id:"additional-properties"},"Additional Properties"),(0,r.kt)("p",null,"A Json object can have additional properties of unknown types, which is not compatible with the Avro schema. To solve this problem during Json to Avro object conversion, we introduce a special field: ",(0,r.kt)("inlineCode",{parentName:"p"},"_airbyte_additional_properties")," typed as a nullable ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "_airbyte_additional_properties",\n  "type": ["null", {"type": "map", "values": "string"}],\n  "default": null\n}\n')),(0,r.kt)("p",null,"For example, given the following Json schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "username": {\n      "type": ["null", "string"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"this Json object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "active": true,\n  "age": 21,\n  "auth": {\n    "auth_type": "ssl",\n    "api_key": "abcdefg/012345",\n    "admin": false,\n    "id": 1000\n  }\n}\n')),(0,r.kt)("p",null,"will be converted to the following Avro object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "_airbyte_additional_properties": {\n    "active": "true",\n    "age": "21",\n    "auth": "{\\"auth_type\\":\\"ssl\\",\\"api_key\\":\\"abcdefg/012345\\",\\"admin\\":false,\\"id\\":1000}"\n  }\n}\n')),(0,r.kt)("p",null,"Note that all fields other than the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," is moved under ",(0,r.kt)("inlineCode",{parentName:"p"},"_ab_additional_properties")," as serialized strings, including the original object ",(0,r.kt)("inlineCode",{parentName:"p"},"auth"),"."),(0,r.kt)("h3",{id:"untyped-object"},"Untyped Object"),(0,r.kt)("p",null,"If an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," field has no ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," specification, all fields within this ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," will be put into the aforementioned ",(0,r.kt)("inlineCode",{parentName:"p"},"_airbyte_additional_properties")," field."),(0,r.kt)("p",null,"For example, given the following Json schema and object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "343-guilty-spark",\n  "password": 1439,\n  "active": true\n}\n')),(0,r.kt)("p",null,"the corresponding Avro schema and record will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "record",\n  "name": "record_without_properties",\n  "fields": [\n    {\n      "name": "_airbyte_additional_properties",\n      "type": ["null", {"type": "map", "values": "string"}],\n      "default": null\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_airbyte_additional_properties": {\n    "username": "343-guilty-spark",\n    "password": "1439",\n    "active": "true"\n  }\n}\n')),(0,r.kt)("h3",{id:"untyped-field"},"Untyped Field"),(0,r.kt)("p",null,"Any field without property type specification will default to a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," field, and its value will be serialized to string."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Based on the above rules, here is an overall example. Given the following Json schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n    "id": {\n      "type": "integer"\n    },\n    "user": {\n      "type": ["null", "object"],\n      "properties": {\n        "id": {\n          "type": "integer"\n        },\n        "field_with_sp\xe9cial_character": {\n          "type": "integer"\n        }\n      }\n    },\n    "created_at": {\n      "type": ["null", "string"],\n      "format": "date-time"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Its corresponding Avro schema will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "stream_name",\n  "type": "record",\n  "fields": [\n    {\n      "name": "_airbyte_ab_id",\n      "type": {\n        "type": "string",\n        "logicalType": "uuid"\n      }\n    },\n    {\n      "name": "_airbyte_emitted_at",\n      "type": {\n        "type": "long",\n        "logicalType": "timestamp-millis"\n      }\n    },\n    {\n      "name": "id",\n      "type": ["null", "int"],\n      "default": null\n    },\n    {\n      "name": "user",\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "user",\n          "fields": [\n            {\n              "name": "id",\n              "type": ["null", "int"],\n              "default": null\n            },\n            {\n              "name": "field_with_special_character",\n              "type": ["null", "int"],\n              "doc": "_airbyte_original_name:field_with_sp\xe9cial_character",\n              "default": null\n            },\n            {\n              "name": "_airbyte_additional_properties",\n              "type": ["null", {"type": "map", "values": "string"}],\n              "default": null\n            }\n          ]\n        }\n      ],\n      "default": null\n    },\n    {\n      "name": "created_at",\n      "type": [\n        "null",\n        {"type": "long", "logicalType": "timestamp-micros"},\n        "string"\n      ],\n      "default": null\n    },\n    {\n      "name": "_airbyte_additional_properties",\n      "type": ["null", {"type": "map", "values": "string"}],\n      "default": null\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"More examples can be found in the Json to Avro conversion ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-s3/src/test/resources/parquet/json_schema_converter/json_conversion_test_cases.json"},"test cases"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schema conversion: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-s3/src/main/java/io/airbyte/integrations/destination/s3/avro/JsonToAvroSchemaConverter.java"},"JsonToAvroSchemaConverter")),(0,r.kt)("li",{parentName:"ul"},"Object conversion: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/json-avro-converter"},"airbytehq/json-avro-converter")," (forked and modified from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/allegro/json-avro-converter"},"allegro/json-avro-converter"),").")))}m.isMDXComponent=!0}}]);