(()=>{"use strict";var e,t={400:(e,t,a)=>{var n=a(294),r=a(935),l=a(555),i=a(51),o=a(625),c=a(754),s=a(151);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],i=!0,o=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return l}}(t,a)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],d=r[1];return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:e.id||"puzzleModal",show:e.show,onHide:e.handleClose,onShow:function(){return d(!1)}},n.createElement(o.Z.Header,null,n.createElement(o.Z.Title,{className:"display-4"},e.title||"Are you a human?"),n.createElement(c.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(o.Z.Body,null,n.createElement(s.Z,{noValidate:!0,validated:i,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?t.stopPropagation():e.handleIsValid(),d(!0)}},n.createElement(s.Z.Row,null,n.createElement(s.Z.Group,{as:l.Z,controlId:"answerInput"},n.createElement(s.Z.Label,null,"".concat(e.label||"What is:"," ").concat(e.puzzle," ?")),n.createElement(s.Z.Control,{name:"answerInput",type:"text",placeholder:"Answer...",pattern:e.answer,required:!0}),n.createElement(s.Z.Control.Feedback,{type:"invalid"},e.error||"Incorrect answer! Please try again."))),n.createElement(o.Z.Footer,null,n.createElement(c.Z,{variant:"secondary",onClick:e.handleClose},"Close"),n.createElement(c.Z,{id:"submitPuzzle",variant:"dark",type:"submit"},"Submit"))))))}function p(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}function m(e){return n.createElement(o.Z,{id:e.id,show:e.show,onHide:e.handleClose},n.createElement(o.Z.Header,null,n.createElement(o.Z.Title,{className:"display-4"},e.title),n.createElement(c.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(o.Z.Body,null,n.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),n.createElement(o.Z.Footer,null,n.createElement(c.Z,{variant:"dark",onClick:e.handleClose},"Close")))}function h(e){return n.createElement(m,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const f=JSON.parse('{"host":"localhost","apiRoot":"/backend/","dockerHost":"nginx","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Unique Data Entry Application","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":".NET Web API with a React UI.","searchTerms":"Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"uniqueDataEntry","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"canItemBeAddedAsync":"uniqueDataEntry/api/canItemBeAddedAsync"},"labels":[0,1,2],"featured":false},{"name":"Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack","description":".NET Web API with a React UI.","searchTerms":"Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"dataStructures","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"addQueueItem":"dataStructures/api/addQueueItemAsync","removeQueueItem":"dataStructures/api/removeQueueItemAsync","addStackItem":"dataStructures/api/addStackItemAsync","removeStackItem":"dataStructures/api/removeStackItemAsync"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":false},{"name":"Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer","description":".NET Web API with a React UI.","searchTerms":"Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"stringSort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sort":"stringSort/api/sort"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"Coffee Machine","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine","description":".NET Web API with a React UI.","searchTerms":"Cloud,C#,dotnet,.net,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"coffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"run":"coffeeMachine/api/run","runAsync":"coffeeMachine/api/runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":false},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":false,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]},{"name":"Test React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"new_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?f.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:f}}],null&&b(t.prototype,null),a&&b(t,a),e}();function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,a=void 0!==e?e.substring(0,t).split(" ").join(""):"";return a}}],null&&v(t.prototype,null),a&&v(t,a),e}();function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isUniqueInArray",value:function(e,t){var a;return null===(a=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===a||a}}],null&&g(t.prototype,null),a&&g(t,a),e}();function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function k(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],i=!0,o=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return l}}(t,a)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?A(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],u=r[1];return n.createElement(n.Fragment,null,n.createElement(i.Z,{className:"splitter"},n.createElement(l.Z,null,n.createElement("h3",null,e.title),n.createElement("ul",{id:e.listId,className:"list-group"},e.items.map((function(e,t){var a=y.generate(e);return n.createElement("li",{key:a,className:"list-group-item d-flex justify-content-between align-items-center"},e)}))))),n.createElement(i.Z,{className:"splitter"},n.createElement(l.Z,null,n.createElement(s.Z,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault();var a=t.currentTarget,n=new FormData(a).get(e.id),r=!w.isUniqueInArray(e.items,n);!1===a.checkValidity()||r?(u(!0),t.stopPropagation()):(u(!1),a.reset(),e.handleAdd(t,n))}},n.createElement(s.Z.Row,null,n.createElement(s.Z.Group,{as:l.Z},n.createElement(s.Z.Label,null,"Item to add"),n.createElement(s.Z.Control,{name:e.id,id:e.id,type:"text",placeholder:"Add to list...",required:!0,value:e.value}),n.createElement(s.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(s.Z.Row,null,n.createElement(s.Z.Group,{as:l.Z,xs:"auto",md:"auto",lg:"auto"},n.createElement(c.Z,{id:e.id+"_submit",variant:"dark",type:"submit"},"Add")),n.createElement(s.Z.Group,{as:l.Z,xs:"auto",md:"auto",lg:"auto"},n.createElement(c.Z,{id:e.id+"_remove",variant:"danger",type:"button",onClick:e.handleRemove},"Remove")))))))}var E=a(755);function T(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"handleAjax",value:function(e,t,a,n,r){t?("function"==typeof a&&a(),E.ajax(e).fail((function(){"function"==typeof n&&n()}))):"function"==typeof r&&r()}}],null&&T(t.prototype,null),a&&T(t,a),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=S.get(),j=S.get("dataStructures"),D="".concat(z.apiRoot).concat(j.endpoints.addQueueItem),H="".concat(z.apiRoot).concat(j.endpoints.removeQueueItem),Z="".concat(z.apiRoot).concat(j.endpoints.addStackItem),B="".concat(z.apiRoot).concat(j.endpoints.removeStackItem),O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(s,e);var t,a,r,o,c=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var a=M(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return W(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={queue:[],stack:[],showSpinner:!1,showPuzzleModal:!0,showErrorModal:!1,isPuzzleValid:!1},t.handleQueueAdd=t.handleQueueAdd.bind(x(t)),t.handleQueueRemove=t.handleQueueRemove.bind(x(t)),t.handleStackAdd=t.handleStackAdd.bind(x(t)),t.handleStackRemove=t.handleStackRemove.bind(x(t)),t.handleIsPuzzleValid=t.handleIsPuzzleValid.bind(x(t)),t.handlePuzzleModalClose=t.handlePuzzleModalClose.bind(x(t)),t.handlePuzzleModalShow=t.handlePuzzleModalShow.bind(x(t)),t.handleErrorModalClose=t.handleErrorModalClose.bind(x(t)),t.handleBeforeAjax=t.handleBeforeAjax.bind(x(t)),t.handleFailedAjax=t.handleFailedAjax.bind(x(t)),t}return t=s,(a=[{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0,showPuzzleModal:!1})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){C.handleAjax(e,this.state.isPuzzleValid,this.handleBeforeAjax,this.handleFailedAjax,this.handlePuzzleModalShow)}},{key:"handleQueueAdd",value:function(e,t){var a=this;e.preventDefault();var n={collection:this.state.queue,item:t},r={url:D,data:JSON.stringify(n),type:"POST",contentType:"application/json",success:function(e){e?a.setState({queue:e,showSpinner:!1}):a.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(r)}},{key:"handleStackAdd",value:function(e,t){var a=this;e.preventDefault();var n={collection:this.state.stack,item:t},r={url:Z,data:JSON.stringify(n),type:"POST",contentType:"application/json",success:function(e){e?a.setState({stack:e,showSpinner:!1}):a.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(r)}},{key:"handleQueueRemove",value:function(e){var t=this;e.preventDefault();var a={collection:this.state.queue},n={url:H,data:JSON.stringify(a),type:"POST",contentType:"application/json",success:function(e){e?t.setState({queue:e,showSpinner:!1}):t.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(n)}},{key:"handleStackRemove",value:function(e){var t=this;e.preventDefault();var a={collection:this.state.stack},n={url:B,data:JSON.stringify(a),type:"POST",contentType:"application/json",success:function(e){e?t.setState({stack:e,showSpinner:!1}):t.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(n)}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"handleIsPuzzleValid",value:function(){this.setState({isPuzzleValid:!0,showPuzzleModal:!1})}},{key:"handlePuzzleModalClose",value:function(){this.setState({showPuzzleModal:!1})}},{key:"handlePuzzleModalShow",value:function(){this.setState({showPuzzleModal:!0})}},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(d,{answer:5,puzzle:"3 x 2 - 1 =",show:this.state.showPuzzleModal,handleClose:this.handlePuzzleModalClose,handleShow:this.handlePuzzleModalShow,handleIsValid:this.handleIsPuzzleValid}),n.createElement(h,{id:"errorModal",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),n.createElement(p,{show:this.state.showSpinner}),n.createElement(i.Z,null,n.createElement(l.Z,null,n.createElement(i.Z,null,n.createElement(l.Z,null,n.createElement(k,{title:"Queue (FIFO)",listId:"queueList",id:"queueInput",handleAdd:this.handleQueueAdd,handleRemove:this.handleQueueRemove,items:this.state.queue})))),n.createElement(l.Z,null,n.createElement(i.Z,null,n.createElement(l.Z,null,n.createElement(k,{title:"Stack (LIFO)",listId:"stackList",id:"stackInput",handleAdd:this.handleStackAdd,handleRemove:this.handleStackRemove,items:this.state.stack}))))))}}])&&P(t.prototype,a),s}(n.Component);r.render(n.createElement(O,null),document.getElementById("result"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e].call(l.exports,l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,r,l)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,r,l]=e[u],o=!0,c=0;c<a.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(o=!1,l<i&&(i=l));if(o){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[i,o,c]=a,s=0;for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var u=c(n);for(t&&t(a);s<i.length;s++)l=i[s],n.o(e,l)&&e[l]&&e[l][0](),e[i[s]]=0;return n.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(400)));r=n.O(r)})();