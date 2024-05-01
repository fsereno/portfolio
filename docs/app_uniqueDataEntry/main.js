(()=>{"use strict";var e,t={425:(e,t,a)=>{var n=a(294),r=a(935);function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,a=void 0!==e?e.substring(0,t).split(" ").join(""):"";return a}}],null&&o(t.prototype,null),a&&o(t,a),e}();function i(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}var c=a(625),s=a(754);function u(e){return n.createElement(c.Z,{id:e.id,show:e.show,onHide:e.handleClose},n.createElement(c.Z.Header,null,n.createElement(c.Z.Title,{className:"display-4"},e.title),n.createElement(s.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(c.Z.Body,null,n.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),n.createElement(c.Z.Footer,null,n.createElement(s.Z,{variant:"dark",onClick:e.handleClose},"Close")))}function d(e){return n.createElement(u,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const m=JSON.parse('{"host":"localhost","apiRoot":"/backend/","deploymentTargetCookie":"fs_portfolio_deployment_target","deploymentTargets":{"cloud":"cloud","static":"static"},"dockerHost":"localhost","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","gitHubIssuesUrl":"https://github.com/fsereno/portfolio/issues","title":"Portfolio","author":"Fabio Sereno","role":"Software Engineer","description":"Portfolio By Fabio Sereno - Software Engineer","thumbnail":"PortfolioThumbnail.png","labels":{"JavaScript":"warning","NodeJS":"success","C#":"info","Cloud":"danger"},"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":false,"key":"","endpoints":{"base":"","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Software Engineer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"Docker,JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"Docker,JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Tic-Tac-Toe","subHeading":"A Tic-Tac-Toe game built using React","description":"Demonstrating React state management with immutability, allowing for \'time travel\' or \'versioned\' data.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Unique Data Entry Application","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"uniqueDataEntry","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"canItemBeAddedAsync":"uniqueDataEntry/api/canItemBeAddedAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["uniqueDataEntry"]},{"name":"Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"dataStructures","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"addQueueItem":"dataStructures/api/addQueueItemAsync","removeQueueItem":"dataStructures/api/removeQueueItemAsync","addStackItem":"dataStructures/api/addStackItemAsync","removeStackItem":"dataStructures/api/removeStackItemAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["dataStructures"]},{"name":"Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"entitySort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sortSalaryAsc":"entitySort/api/sort/salary/asc","sortSalaryDesc":"entitySort/api/sort/salary/desc"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["entitySort"]},{"name":"Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"stringSort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sort":"stringSort/api/sort"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["stringSort"]},{"name":"Coffee Machine","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"coffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"run":"coffeeMachine/api/run","runAsync":"coffeeMachine/api/runasync"},"labels":["JavaScript","C#","Cloud"],"order":3,"services":["coffeeMachine"]},{"name":"AFrame React Example","subHeading":"An example AFrame application with React, allowing for user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"Docker,JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"Docker,JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":["JavaScript"]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":["JavaScript"],"order":2,"featured":false},{"name":"NodeJS, To-Do List SPA","subHeading":"A simple To-Do list application, with user registration and authentication","description":"NodeJS Web API with a React UI.","searchTerms":"Docker,NodeJS,Express,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"nodeToDo","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":["JavaScript","Cloud","NodeJS"],"order":1,"featured":false,"endpoints":{"base":"nodeToDo"},"services":["nodeToDo"]},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]},{"name":"Test React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"new_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]}]}');function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?m.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:m}}],null&&p(t.prototype,null),a&&p(t,a),e}(),h=a(151),b=a(555);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function y(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(i)throw r}}return o}}(t,a)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],l=r[1];return n.createElement(n.Fragment,null,n.createElement(h.Z,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault();var a=t.currentTarget;!1===a.checkValidity()?l(!0):(l(!1),e.handleSubmit(t),a.reset())}},n.createElement(h.Z.Row,null,n.createElement(h.Z.Group,{as:b.Z,md:"2",controlId:"firstNameInput"},n.createElement(h.Z.Control,{name:"firstNameInput",type:"text",placeholder:"First name...",required:!0}),n.createElement(h.Z.Control.Feedback,{type:"invalid"},"Please enter a value.")),n.createElement(h.Z.Group,{as:b.Z,md:"2",controlId:"secondNameInput"},n.createElement(h.Z.Control,{name:"secondNameInput",type:"text",placeholder:"Second name...",required:!0}),n.createElement(h.Z.Control.Feedback,{type:"invalid"},"Please enter a value.")),n.createElement(h.Z.Group,{as:b.Z,md:"2",controlId:"contactInput"},n.createElement(h.Z.Control,{name:"contactInput",type:"text",placeholder:"Contact number...",pattern:"^[+ ()0-9-]*$",required:!0}),n.createElement(h.Z.Control.Feedback,{type:"invalid"},"Please enter a valid value.")),n.createElement(h.Z.Group,{as:b.Z,md:"2",controlId:"postCodeInput"},n.createElement(h.Z.Control,{name:"postCodeInput",type:"text",placeholder:"Postcode...",required:!0}),n.createElement(h.Z.Control.Feedback,{type:"invalid"},"Please enter a value.")),n.createElement(h.Z.Group,{as:b.Z,md:"3"},n.createElement(s.Z,{variant:"dark",id:"submit",type:"submit"},"Add item")))))}var S=a(755);function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"handleAjax",value:function(e,t,a,n,r){t?("function"==typeof a&&a(),S.ajax(e).fail((function(){"function"==typeof n&&n()}))):"function"==typeof r&&r()}}],null&&g(t.prototype,null),a&&g(t,a),e}();function C(e){var t=e.id,a=e.title,r=e.show,o=e.handleClose,l=f.get(),i=l.linkedInUrl,u=l.gitHubIssuesUrl;return n.createElement(n.Fragment,null,n.createElement(c.Z,{id:t||"deploymentModal",show:r},n.createElement(c.Z.Header,null,n.createElement(c.Z.Title,{className:"display-4"},a||"Request Deployment"),n.createElement(s.Z,{variant:"link",className:"close",onClick:o},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(c.Z.Body,null,n.createElement("p",null,"To conserve resources, services are not always available. To proceed, please request a full deployment of the portfolio. This will create a fully containerised environment in the cloud. Once you request the deployment, you will receive a unique URL to access the complete portfolio."),n.createElement(c.Z.Footer,{className:"flex-box "},n.createElement("a",{className:"btn btn-dark w-100 mb-2",href:u,target:"_blank"},"Raise an Issue on GitHub",n.createElement("i",{className:"fa fa-github ml-2"})),n.createElement("a",{className:"btn btn-dark w-100",href:i,target:"_blank"},"Make Contact on LinkedIn",n.createElement("i",{className:"fa fa fa-linkedin ml-2"}))))))}function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){for(var t=document.cookie.split("; "),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]===e)return n[1]}return null}}],null&&k(t.prototype,null),a&&k(t,a),e}();function T(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var D=f.get(),A=D.deploymentTargetCookie,R=D.deploymentTargets.cloud,N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isNotCloud",value:function(){return w.get(A)!==R}},{key:"isCloud",value:function(){return w.get(A)===R}}],null&&T(t.prototype,null),a&&T(t,a),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function x(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=f.get(),j=f.get("uniqueDataEntry"),U="".concat(O.apiRoot).concat(j.endpoints.canItemBeAddedAsync),B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(s,e);var t,a,r,o,c=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var a=J(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return W(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={items:[{firstName:"John",secondName:"Doe",contact:"000000000",postCode:"AB101CD"}],counterLimit:10,counter:1,showSpinner:!1,showDuplicateErrorModal:!1,showDeploymentModal:N.isNotCloud()},t.handleSubmit=t.handleSubmit.bind(H(t)),t.handleDelete=t.handleDelete.bind(H(t)),t.handleErrorModalClose=t.handleErrorModalClose.bind(H(t)),t.handleDuplicateErrorModalClose=t.handleDuplicateErrorModalClose.bind(H(t)),t.handleBeforeAjax=t.handleBeforeAjax.bind(H(t)),t.handleFailedAjax=t.handleFailedAjax.bind(H(t)),t.handleDeploymentModalClose=t.handleDeploymentModalClose.bind(H(t)),t.handleDeploymentModalShow=t.handleDeploymentModalShow.bind(H(t)),t}return t=s,(a=[{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0,showPuzzleModal:!1})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){E.handleAjax(e,N.isCloud(),this.handleBeforeAjax,this.handleFailedAjax,this.handleDeploymentModalShow)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target),n=a.get("firstNameInput"),r=a.get("secondNameInput"),o=a.get("contactInput"),l=a.get("postCodeInput"),i={items:this.state.items,item:{firstName:n,secondName:r,contact:o,postCode:l}},c={url:U,data:JSON.stringify(i),type:"POST",contentType:"application/json",success:function(e){if(!0===e){var a=function(e){if(Array.isArray(e))return M(e)}(n=t.state.items)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?M(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();a.push({firstName:i.item.firstName,secondName:i.item.secondName,contact:i.item.contact,postCode:i.item.postCode}),t.setState({items:a,counter:t.state.counter+1,showSpinner:!1})}else t.setState({showSpinner:!1,showDuplicateErrorModal:!0});var n}};this.handleAjax(c)}},{key:"handleDelete",value:function(e){e.preventDefault();var t=Number(e.target.dataset.index);this.state.items.splice(t,1),this.setState({items:this.state.items,counter:this.state.counter-1})}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"handleDuplicateErrorModalClose",value:function(){this.setState({showDuplicateErrorModal:!1})}},{key:"handleDeploymentModalClose",value:function(){this.setState({showDeploymentModal:!1})}},{key:"handleDeploymentModalShow",value:function(){this.setState({showDeploymentModal:!0})}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(C,{show:this.state.showDeploymentModal,handleClose:this.handleDeploymentModalClose}),n.createElement(d,{id:"errorModule",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),n.createElement(d,{id:"duplicateEntryErrorModule",show:this.state.showDuplicateErrorModal,title:"Duplicate entry detected!",body:"You cannot add a duplicate item.",handleClose:this.handleDuplicateErrorModalClose}),n.createElement(i,{show:this.state.showSpinner}),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-12"},n.createElement("h3",null,"Items:"),n.createElement("p",null,"Add new items to the table. Only unique entries are allowed."),n.createElement("div",{className:"table-responsive"},n.createElement("table",{className:"table",id:"itemTable"},n.createElement("thead",{className:"bg-dark text-white"},n.createElement("tr",null,n.createElement("th",null,"First name"),n.createElement("th",null,"Second name"),n.createElement("th",null,"Contact"),n.createElement("th",null,"Postcode"),n.createElement("th",null,"Action"))),n.createElement("tbody",null,this.state.items.map((function(t,a){var r=l.generate("".concat(t.secondName," ").concat(t.contact," ").concat(t.postCode));return n.createElement("tr",{key:r},n.createElement("td",null,t.firstName),n.createElement("td",null,t.secondName),n.createElement("td",null,t.contact),n.createElement("td",null,t.postCode),n.createElement("td",null,n.createElement("a",{href:"#",className:"badge badge-danger delete","data-index":a,onClick:e.handleDelete},"Delete")))}))))))),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-12"},n.createElement("p",null,"No. of Items: ",this.state.counter))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement(y,{handleSubmit:this.handleSubmit}))))}}])&&x(t.prototype,a),s}(n.Component);r.render(n.createElement(B,null),document.getElementById("result"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,a,r,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,r,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[l,i,c]=a,s=0;for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var u=c(n);for(t&&t(a);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[l[s]]=0;return n.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(425)));r=n.O(r)})();