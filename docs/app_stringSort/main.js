(()=>{"use strict";var e,t={729:(e,t,a)=>{var r=a(294),n=a(935);function o(e){var t=e.show?"":"d-none";return r.createElement("div",null,r.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),r.createElement("div",{id:"loader",className:"".concat(t," item loading")},r.createElement("div",{className:"spinner"},r.createElement("div",{className:"circle circle-1"},r.createElement("div",{className:"circle-inner"})),r.createElement("div",{className:"circle circle-2"},r.createElement("div",{className:"circle-inner"})))))}var l=a(625),i=a(754);function c(e){return r.createElement(l.Z,{id:e.id,show:e.show,onHide:e.handleClose},r.createElement(l.Z.Header,null,r.createElement(l.Z.Title,{className:"display-4"},e.title),r.createElement(i.Z,{variant:"link",className:"close",onClick:e.handleClose},r.createElement("span",{className:"lr"},r.createElement("span",{className:"rl"})))),r.createElement(l.Z.Body,null,r.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),r.createElement(l.Z.Footer,null,r.createElement(i.Z,{variant:"dark",onClick:e.handleClose},"Close")))}function s(e){return r.createElement(c,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const u=JSON.parse('{"host":"localhost","apiRoot":"/backend/","deploymentTargetCookie":"fs_portfolio_deployment_target","deploymentTargets":{"cloud":"cloud","static":"static"},"dockerHost":"localhost","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","gitHubIssuesUrl":"https://github.com/fsereno/portfolio/issues","title":"Portfolio","author":"Fabio Sereno","role":"Software Engineer","description":"Portfolio By Fabio Sereno - Software Engineer","thumbnail":"PortfolioThumbnail.png","labels":{"JavaScript":"warning","NodeJS":"success","C#":"info","Cloud":"danger"},"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":false,"key":"","endpoints":{"base":"","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Software Engineer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"Docker,JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"Docker,JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Tic-Tac-Toe","subHeading":"A Tic-Tac-Toe game built using React","description":"Demonstrating React state management with immutability, allowing for \'time travel\' or \'versioned\' data.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Unique Data Entry Application","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"uniqueDataEntry","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"canItemBeAddedAsync":"uniqueDataEntry/api/canItemBeAddedAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["uniqueDataEntry"]},{"name":"Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"dataStructures","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"addQueueItem":"dataStructures/api/addQueueItemAsync","removeQueueItem":"dataStructures/api/removeQueueItemAsync","addStackItem":"dataStructures/api/addStackItemAsync","removeStackItem":"dataStructures/api/removeStackItemAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["dataStructures"]},{"name":"Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"entitySort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sortSalaryAsc":"entitySort/api/sort/salary/asc","sortSalaryDesc":"entitySort/api/sort/salary/desc"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["entitySort"]},{"name":"Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"stringSort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sort":"stringSort/api/sort"},"labels":["JavaScript","C#","Cloud"],"featured":false,"services":["stringSort"]},{"name":"Coffee Machine","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"coffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"run":"coffeeMachine/api/run","runAsync":"coffeeMachine/api/runasync"},"labels":["JavaScript","C#","Cloud"],"order":3,"services":["coffeeMachine"]},{"name":"AFrame React Example","subHeading":"An example AFrame application with React, allowing for user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"Docker,JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"Docker,JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":["JavaScript"]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":["JavaScript"],"order":2,"featured":false},{"name":"NodeJS, To-Do List SPA","subHeading":"A simple To-Do list application, with user registration and authentication","description":"NodeJS Web API with a React UI.","searchTerms":"Docker,NodeJS,Express,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"nodeToDo","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":["JavaScript","Cloud","NodeJS"],"order":1,"featured":false,"endpoints":{"base":"nodeToDo"},"services":["nodeToDo"]},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]},{"name":"Test React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"new_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]}]}');function d(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?u.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:u}}],null&&d(t.prototype,null),a&&d(t,a),e}(),m=a(151),f=a(555);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function b(e){var t,a,n=(t=(0,r.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==a.return||a.return()}finally{if(i)throw n}}return o}}(t,a)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(m.Z,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?(l(!0),t.stopPropagation()):(l(!1),e.handleSubmit(t))}},r.createElement(m.Z.Row,null,r.createElement(m.Z.Group,{as:f.Z,md:"6",controlId:"valuesInput"},r.createElement(m.Z.Label,null,"Enter comma seperated values to sort"),r.createElement(m.Z.Control,{name:"valuesInput",type:"text",placeholder:"B,C,A...",required:!0,onChange:e.onChange,value:e.value}),r.createElement(m.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),r.createElement(m.Z.Row,null,r.createElement(m.Z.Group,{as:f.Z,md:"3"},r.createElement(i.Z,{id:"sort_submit",variant:"dark",type:"submit"},"Sort")))))}var S=a(755);function v(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"handleAjax",value:function(e,t,a,r,n){t?("function"==typeof a&&a(),S.ajax(e).fail((function(){"function"==typeof r&&r()}))):"function"==typeof n&&n()}}],null&&v(t.prototype,null),a&&v(t,a),e}();function g(e){var t=e.id,a=e.title,n=e.show,o=e.handleClose,c=p.get(),s=c.linkedInUrl,u=c.gitHubIssuesUrl;return r.createElement(r.Fragment,null,r.createElement(l.Z,{id:t||"deploymentModal",show:n},r.createElement(l.Z.Header,null,r.createElement(l.Z.Title,{className:"display-4"},a||"Request Deployment"),r.createElement(i.Z,{variant:"link",className:"close",onClick:o},r.createElement("span",{className:"lr"},r.createElement("span",{className:"rl"})))),r.createElement(l.Z.Body,null,r.createElement("p",null,"To conserve resources, services are not always available. To proceed, please request a full deployment of the portfolio. This will create a fully containerised environment in the cloud. Once you request the deployment, you will receive a unique URL to access the complete portfolio."),r.createElement(l.Z.Footer,{className:"flex-box "},r.createElement("a",{className:"btn btn-dark w-100 mb-2",href:u,target:"_blank"},"Raise an Issue on GitHub",r.createElement("i",{className:"fa fa-github ml-2"})),r.createElement("a",{className:"btn btn-dark w-100",href:s,target:"_blank"},"Make Contact on LinkedIn",r.createElement("i",{className:"fa fa fa-linkedin ml-2"}))))))}function k(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){for(var t=document.cookie.split("; "),a=0;a<t.length;a++){var r=t[a].split("=");if(r[0]===e)return r[1]}return null}}],null&&k(t.prototype,null),a&&k(t,a),e}();function E(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=p.get(),T=w.deploymentTargetCookie,R=w.deploymentTargets.cloud,A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isNotCloud",value:function(){return C.get(T)!==R}},{key:"isCloud",value:function(){return C.get(T)===R}}],null&&E(t.prototype,null),a&&E(t,a),e}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=p.get(),H=p.get("stringSort"),J="".concat(W.apiRoot).concat(H.endpoints.sort),O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(c,e);var t,a,n,l,i=(n=c,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(l){var a=x(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return N(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={values:"",result:"",showSpinner:!1,showErrorModal:!1,showDeploymentModal:A.isNotCloud()},t.handleValuesChange=t.handleValuesChange.bind(P(t)),t.handleSubmit=t.handleSubmit.bind(P(t)),t.handleErrorModalClose=t.handleErrorModalClose.bind(P(t)),t.handleBeforeAjax=t.handleBeforeAjax.bind(P(t)),t.handleFailedAjax=t.handleFailedAjax.bind(P(t)),t.handleDeploymentModalClose=t.handleDeploymentModalClose.bind(P(t)),t.handleDeploymentModalShow=t.handleDeploymentModalShow.bind(P(t)),t}return t=c,(a=[{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0,showPuzzleModal:!1})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){y.handleAjax(e,A.isCloud(),this.handleBeforeAjax,this.handleFailedAjax,this.handleDeploymentModalShow)}},{key:"handleValuesChange",value:function(e){this.setState({values:e.target.value})}},{key:"handleSort",value:function(){var e=this,t={url:J,type:"POST",contentType:"application/json;",data:JSON.stringify({CommaSeperatedString:this.state.values}),success:function(t){e.setState({values:"",result:t.result,showSpinner:!1})}};this.handleAjax(t)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.values.length>0&&this.handleSort()}},{key:"handleDeploymentModalClose",value:function(){this.setState({showDeploymentModal:!1})}},{key:"handleDeploymentModalShow",value:function(){this.setState({showDeploymentModal:!0})}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"render",value:function(){return r.createElement("div",null,r.createElement(s,{id:"errorModal",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),r.createElement(o,{show:this.state.showSpinner}),r.createElement(g,{show:this.state.showDeploymentModal,handleClose:this.handleDeploymentModalClose}),r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-12"},r.createElement("h3",null,"Sorted values:"),r.createElement("p",{id:"resultOutput",className:"lead"},this.state.result))),r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-12"},r.createElement("p",null,"Values to sort: ",this.state.values))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12"},r.createElement(b,{value:this.state.values,onChange:this.handleValuesChange,handleSubmit:this.handleSubmit}))))}}])&&M(t.prototype,a),c}(r.Component);n.render(r.createElement(O,null),document.getElementById("result"))}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[l,i,c]=a,s=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r);for(t&&t(a);s<l.length;s++)o=l[s],r.o(e,o)&&e[o]&&e[o][0](),e[l[s]]=0;return r.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[736],(()=>r(729)));n=r.O(n)})();