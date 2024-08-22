(()=>{"use strict";var e,t={980:(e,t,a)=>{var r=a(540),n=a(338);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}var c=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return void 0!==e?e.substring(0,t).split(" ").join(""):""}}],null&&l(e.prototype,null),t&&l(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function s(e){var t=e.show?"":"d-none";return r.createElement("div",null,r.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),r.createElement("div",{id:"loader",className:"".concat(t," item loading")},r.createElement("div",{className:"spinner"},r.createElement("div",{className:"circle circle-1"},r.createElement("div",{className:"circle-inner"})),r.createElement("div",{className:"circle circle-2"},r.createElement("div",{className:"circle-inner"})))))}var u=a(858),m=a(107);function d(e){return r.createElement(u.A,{id:e.id,show:e.show,onHide:e.handleClose},r.createElement(u.A.Header,null,r.createElement(u.A.Title,{className:"display-4"},e.title),r.createElement(m.A,{variant:"link",className:"close",onClick:e.handleClose},r.createElement("span",{className:"lr"},r.createElement("span",{className:"rl"})))),r.createElement(u.A.Body,null,r.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),r.createElement(u.A.Footer,null,r.createElement(m.A,{variant:"dark",onClick:e.handleClose},"Close")))}function p(e){return r.createElement(d,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const f=JSON.parse('{"host":"localhost","apiRoot":"/backend/","deploymentTargetCookie":"fs_portfolio_deployment_target","deploymentTargets":{"cloud":"cloud","static":"static"},"dockerHost":"localhost","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","gitHubIssuesUrl":"https://github.com/fsereno/portfolio/issues","title":"Portfolio","author":"Fabio Sereno","role":"Software Engineer","description":"Portfolio By Fabio Sereno - Software Engineer","thumbnail":"PortfolioThumbnail.png","secrets":{"AWS_ACCESS_TOKEN":"./secrets/x-aws-pull_credentials.secret.json"},"labels":{"JavaScript":"warning","NodeJS":"success","C#":"info","Cloud":"danger"},"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":false,"key":"","endpoints":{"base":"","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Software Engineer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React.","description":"Using React, with Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux, demonstrating understanding of immutability.","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"Docker,JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Tic-Tac-Toe","subHeading":"A Tic-Tac-Toe game built using React.","description":"Demonstrating React state management with immutability, allowing for \'time travel\' or \'versioned\' data.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Unique Data Entry Application","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI.","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"uniqueDataEntry","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"canItemBeAddedAsync":"uniqueDataEntry/api/canItemBeAddedAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["uniqueDataEntry"]},{"name":"Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack.","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"dataStructures","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"addQueueItem":"dataStructures/api/addQueueItemAsync","removeQueueItem":"dataStructures/api/removeQueueItemAsync","addStackItem":"dataStructures/api/addStackItemAsync","removeStackItem":"dataStructures/api/removeStackItemAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["dataStructures"]},{"name":"Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types.","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"entitySort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sortSalaryAsc":"entitySort/api/sort/salary/asc","sortSalaryDesc":"entitySort/api/sort/salary/desc"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["entitySort"]},{"name":"Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET.","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"stringSort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sort":"stringSort/api/sort"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["stringSort"]},{"name":"Coffee Machine","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET.","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"coffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"run":"coffeeMachine/api/run","runAsync":"coffeeMachine/api/runasync"},"labels":["JavaScript","C#","Cloud"],"order":3,"services":["coffeeMachine"]},{"name":"AFrame React Example","subHeading":"An example AFrame application with React, allowing for user input.","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"Docker,JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide.","description":"By Fabio Sereno","searchTerms":"Docker,JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":["JavaScript"]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":["JavaScript"],"order":2,"featured":false},{"name":"NodeJS, To-Do List SPA","subHeading":"A simple To-Do list application, with user registration and authentication.","description":"NodeJS Web API with a React UI.","searchTerms":"Docker,NodeJS,Express,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"nodeToDo","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":["JavaScript","Cloud","NodeJS"],"order":1,"featured":false,"endpoints":{"base":"nodeToDo"},"services":["nodeToDo"]},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]},{"name":"Test React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"new_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]}]}');function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=y(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var S=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"get",value:function(e){var t=e?f.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:f}}],null&&b(e.prototype,null),t&&b(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),v=a(378),g=a(105),E=a(479),w=a(672);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function A(e){var t,a,n=(t=(0,r.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,i=[],c=!0,s=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,n=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(s)throw n}}return i}}(t,a)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?k(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(v.A,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?(l(!0),t.stopPropagation()):(l(!1),e.handleSubmit(t))}},r.createElement(E.A,null,r.createElement(g.A,null,r.createElement(v.A.Label,null,"Add an Employee"))),r.createElement(E.A,null,r.createElement(v.A.Group,{as:g.A,className:"mb-3"},r.createElement(v.A.Label,{htmlFor:"nameInput"},"Name"),r.createElement(v.A.Control,{id:"nameInput",name:"nameInput",type:"text",placeholder:"John Doe",required:!0,onChange:e.handleNameChange,value:e.name}),r.createElement(v.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),r.createElement(E.A,null,r.createElement(v.A.Group,{as:g.A,className:"mb-3"},r.createElement(v.A.Label,{htmlFor:"salaryInput"},"Salary"),r.createElement(w.A,null,r.createElement(w.A.Text,{className:"left"},"£"),r.createElement(v.A.Control,{id:"salaryInput",name:"salaryInput",type:"number",placeholder:"0.00",required:!0,onChange:e.handleSalaryChange,value:e.salary}),r.createElement(v.A.Control.Feedback,{type:"invalid"},"Please enter a value.")))),r.createElement(v.A.Group,{as:g.A,className:"mb-3"},r.createElement(m.A,{id:"addEmployee_submit",variant:"dark",type:"submit"},"Add"))))}var C=a(692);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function D(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N(r.key),r)}}function N(e){var t=function(e){if("object"!=T(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=T(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==T(t)?t:t+""}var R=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"handleAjax",value:function(e,t,a,r,n){t?("function"==typeof a&&a(),C.ajax(e).fail((function(){"function"==typeof r&&r()}))):"function"==typeof n&&n()}}],null&&D(e.prototype,null),t&&D(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,I(r.key),r)}}function I(e){var t=function(e){if("object"!=P(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=P(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==P(t)?t:t+""}var O=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"isUniqueInArray",value:function(e,t){var a;return null===(a=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===a||a}}],null&&j(e.prototype,null),t&&j(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function M(e){var t=e.employees,a=e.handleDelete,n=e.handleSortSalaryDesc,o=e.handleSortSalaryAsc;return r.createElement(r.Fragment,null,r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-12"},r.createElement("h3",null,"Employees:"),r.createElement("p",{className:"lead"},"Add new employees to the table, sort using the column controls"),r.createElement("div",{className:"table-responsive"},r.createElement("table",{className:"table",id:"employeeTable"},r.createElement("thead",{className:"bg-dark text-white"},r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,r.createElement("span",{className:"me-2"},"Salary"),r.createElement("button",{id:"sortAsc",className:"btn btn-sm btn-dark me-1 px-0",type:"button",onClick:o},r.createElement("i",{className:"fa fa-fw fa-sort-amount-asc"})),r.createElement("button",{id:"sortDesc",className:"btn btn-sm btn-dark px-0",type:"button",onClick:n},r.createElement("i",{className:"fa fa-fw fa-sort-amount-desc"}))),r.createElement("th",null,"Action"))),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:e.key,id:e.key},r.createElement("td",null,e.name),r.createElement("td",null,e.displaySalary),r.createElement("td",null,r.createElement("a",{href:"#",className:"badge bg-danger delete","data-index":t,onClick:a},"Delete")))}))))))))}function x(e){var t=e.id,a=e.title,n=e.show,o=e.handleClose,l=S.get(),i=l.linkedInUrl,c=l.gitHubIssuesUrl;return r.createElement(r.Fragment,null,r.createElement(u.A,{id:t||"deploymentModal",show:n},r.createElement(u.A.Header,null,r.createElement(u.A.Title,{className:"display-4"},a||"Request Deployment"),r.createElement(m.A,{variant:"link",className:"close",onClick:o},r.createElement("span",{className:"lr"},r.createElement("span",{className:"rl"})))),r.createElement(u.A.Body,null,r.createElement("p",null,"To conserve resources, services are not always available. To proceed, please request a full deployment of the portfolio. This will create a fully containerised environment in the cloud. Once you request the deployment, you will receive a unique URL to access the complete portfolio."),r.createElement(u.A.Footer,{className:"flex-box "},r.createElement("a",{className:"btn btn-dark w-100 mb-2",href:c,target:"_blank"},"Raise an Issue on GitHub",r.createElement("i",{className:"fa fa-github ms-2"})),r.createElement("a",{className:"btn btn-dark w-100",href:i,target:"_blank"},"Make Contact on LinkedIn",r.createElement("i",{className:"fa fa fa-linkedin ms-2"}))))))}function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function W(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}function H(e){var t=function(e){if("object"!=J(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=J(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==J(t)?t:t+""}var U=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"get",value:function(e){for(var t=document.cookie.split("; "),a=0;a<t.length;a++){var r=t[a].split("=");if(r[0]===e)return r[1]}return null}}],null&&W(e.prototype,null),t&&W(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function L(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function _(e){var t=function(e){if("object"!=B(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=B(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==B(t)?t:t+""}var F=S.get(),G=F.deploymentTargetCookie,q=F.deploymentTargets.cloud,K=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"isNotCloud",value:function(){return U.get(G)!==q}},{key:"isCloud",value:function(){return U.get(G)===q}}],null&&L(e.prototype,null),t&&L(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function V(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Y(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function $(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X(r.key),r)}}function X(e){var t=function(e){if("object"!=Q(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=Q(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Q(t)?t:t+""}function z(e,t,a){return t=ee(t),function(e,t){if(t&&("object"==Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Z()?Reflect.construct(t,a||[],ee(e).constructor):t.apply(e,a))}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Z=function(){return!!e})()}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function te(e,t){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},te(e,t)}var ae=S.get(),re=S.get("entitySort"),ne="".concat(ae.apiRoot).concat(re.endpoints.sortSalaryAsc),oe="".concat(ae.apiRoot).concat(re.endpoints.sortSalaryDesc),le=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=z(this,t,[e])).state={name:"",salary:"",employees:[],counterLimit:10,counter:1,showSpinner:!1,showErrorModal:!1,showDeploymentModal:K.isNotCloud()},a.handleNameChange=a.handleNameChange.bind(a),a.handleSalaryChange=a.handleSalaryChange.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a.handleDelete=a.handleDelete.bind(a),a.handleSortSalaryAsc=a.handleSortSalaryAsc.bind(a),a.handleSortSalaryDesc=a.handleSortSalaryDesc.bind(a),a.handleErrorModalClose=a.handleErrorModalClose.bind(a),a.handleBeforeAjax=a.handleBeforeAjax.bind(a),a.handleFailedAjax=a.handleFailedAjax.bind(a),a.handleDeploymentModalClose=a.handleDeploymentModalClose.bind(a),a.handleDeploymentModalShow=a.handleDeploymentModalShow.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&te(e,t)}(t,e),a=t,(n=[{key:"formatCurrency",value:function(e){return new Intl.NumberFormat("GBP",{style:"currency",currency:"GBP"}).format(e)}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSalaryChange",value:function(e){this.setState({salary:e.target.value})}},{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){R.handleAjax(e,K.isCloud(),this.handleBeforeAjax,this.handleFailedAjax,this.handleDeploymentModalShow)}},{key:"handleSortSalaryAsc",value:function(){var e=this,t={url:ne,type:"POST",contentType:"application/json;",data:JSON.stringify({employees:this.state.employees}),success:function(t){e.setState({employees:t,showSpinner:!1})}};this.handleAjax(t)}},{key:"handleSortSalaryDesc",value:function(){var e=this,t={url:oe,type:"POST",contentType:"application/json;",data:JSON.stringify({employees:this.state.employees}),success:function(t){e.setState({employees:t,showSpinner:!1})}};this.handleAjax(t)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={key:"",name:this.state.name,salary:Number(this.state.salary),displaySalary:this.formatCurrency(this.state.salary)};t.key=this.handleGenerateKey(t);var a=this.state.employees.map((function(e){return e.key}));if(O.isUniqueInArray(a,t.key)&&this.state.counter<this.state.counterLimit){var r=V(this.state.employees);r.push(t),this.setState({name:"",salary:"",employees:r,counter:this.state.counter+1})}}},{key:"handleDelete",value:function(e){e.preventDefault();var t=Number(e.target.dataset.index);this.state.employees.splice(t,1),this.setState({employees:this.state.employees,counter:this.state.counter-1})}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"handleGenerateKey",value:function(e){return c.generate("".concat(e.name,"_").concat(e.salary))}},{key:"handleDeploymentModalClose",value:function(){this.setState({showDeploymentModal:!1})}},{key:"handleDeploymentModalShow",value:function(){this.setState({showDeploymentModal:!0})}},{key:"componentDidMount",value:function(){var e={key:"",name:"John Doe",salary:1e4,displaySalary:"£10,000.00"};e.key=this.handleGenerateKey(e);var t=V(this.state.employees);t.push(e),this.setState({employees:t})}},{key:"render",value:function(){return r.createElement("div",null,r.createElement(p,{id:"errorModal",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),r.createElement(x,{show:this.state.showDeploymentModal,handleClose:this.handleDeploymentModalClose}),r.createElement(s,{show:this.state.showSpinner}),r.createElement(M,{employees:this.state.employees,handleDelete:this.handleDelete,handleSortSalaryDesc:this.handleSortSalaryDesc,handleSortSalaryAsc:this.handleSortSalaryAsc}),r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-12"},r.createElement("p",null,"No. of Employees: ",this.state.counter),r.createElement("p",null,"Employee to add: ",this.state.name," ",this.formatCurrency(this.state.salary)))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-4"},r.createElement(A,{handleSubmit:this.handleSubmit,handleNameChange:this.handleNameChange,handleSalaryChange:this.handleSalaryChange,name:this.state.name,salary:this.state.salary}))))}}])&&$(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,n}(r.Component);n.createRoot(document.getElementById("result")).render(r.createElement(le,null))}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[l,i,c]=a,s=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(a);s<l.length;s++)o=l[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[121],(()=>r(980)));n=r.O(n)})();