(()=>{"use strict";var e,t={713:(e,t,a)=>{var n=a(294),r=a(935),i=a(555),o=a(51),l=a(796),s=a(754),c=a(151);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}}(t,a)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],d=r[1];return n.createElement(n.Fragment,null,n.createElement(l.Z,{id:e.id||"puzzleModal",show:e.show,onHide:e.handleClose,onShow:function(){return d(!1)}},n.createElement(l.Z.Header,null,n.createElement(l.Z.Title,{className:"display-4"},e.title||"Are you a human?"),n.createElement(s.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(l.Z.Body,null,n.createElement(c.Z,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?t.stopPropagation():e.handleIsValid(),d(!0)}},n.createElement(c.Z.Row,null,n.createElement(c.Z.Group,{as:i.Z,controlId:"answerInput"},n.createElement(c.Z.Label,null,"".concat(e.label||"What is:"," ").concat(e.puzzle," ?")),n.createElement(c.Z.Control,{name:"answerInput",type:"text",placeholder:"Answer...",pattern:e.answer,required:!0}),n.createElement(c.Z.Control.Feedback,{type:"invalid"},e.error||"Incorrect answer! Please try again."))),n.createElement(l.Z.Footer,null,n.createElement(s.Z,{variant:"secondary",onClick:e.handleClose},"Close"),n.createElement(s.Z,{id:"submitPuzzle",variant:"dark",type:"submit"},"Submit"))))))}function p(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}function m(e){return n.createElement(l.Z,{id:e.id,show:e.show,onHide:e.handleClose},n.createElement(l.Z.Header,null,n.createElement(l.Z.Title,{className:"display-4"},e.title),n.createElement(s.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(l.Z.Body,null,n.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),n.createElement(l.Z.Footer,null,n.createElement(s.Z,{variant:"dark",onClick:e.handleClose},"Close")))}function h(e){return n.createElement(m,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const f=JSON.parse('{"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React","TypeScript",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Azure Functions .NET, Unique Data Entry","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreUniqueDataEntryApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api","canItemBeAddedAsync":"canItemBeAddedAsync"},"labels":[0,1,2],"featured":true},{"name":"Azure Functions .NET, Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreDataStructuresApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api","addQueueItem":"addQueueItemAsync","removeQueueItem":"removeQueueItemAsync","addStackItem":"addStackItemAsync","removeStackItem":"removeStackItemAsync"},"labels":[0,1,2],"featured":true},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":true},{"name":"AWS .NET, Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreStringSortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values","sort":"sort"},"labels":[0,1,2],"featured":true},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"AWS .NET, Asynchronous Coffee Maker","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreAsyncCoffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values","run":"run","runAsync":"runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":true},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":true,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');function S(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?f.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:f}}],null&&S(t.prototype,null),a&&S(t,a),e}();function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,a=void 0!==e?e.substring(0,t).split(" ").join(""):"";return a}}],null&&v(t.prototype,null),a&&v(t,a),e}();function A(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isUniqueInArray",value:function(e,t){var a;return null===(a=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===a||a}}],null&&A(t.prototype,null),a&&A(t,a),e}();function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}}(t,a)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?w(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=r[0],u=r[1];return n.createElement(n.Fragment,null,n.createElement(o.Z,{className:"splitter"},n.createElement(i.Z,null,n.createElement("h3",null,e.title),n.createElement("ul",{id:e.listId,className:"list-group"},e.items.map((function(e,t){var a=y.generate(e);return n.createElement("li",{key:a,className:"list-group-item d-flex justify-content-between align-items-center"},e)}))))),n.createElement(o.Z,{className:"splitter"},n.createElement(i.Z,null,n.createElement(c.Z,{noValidate:!0,validated:l,onSubmit:function(t){t.preventDefault();var a=t.currentTarget,n=new FormData(a).get(e.id),r=!g.isUniqueInArray(e.items,n);!1===a.checkValidity()||r?(u(!0),t.stopPropagation()):(u(!1),a.reset(),e.handleAdd(t,n))}},n.createElement(c.Z.Row,null,n.createElement(c.Z.Group,{as:i.Z},n.createElement(c.Z.Label,null,"Item to add"),n.createElement(c.Z.Control,{name:e.id,id:e.id,type:"text",placeholder:"Add to list...",required:!0,value:e.value}),n.createElement(c.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(c.Z.Row,null,n.createElement(c.Z.Group,{as:i.Z,xs:"auto",md:"auto",lg:"auto"},n.createElement(s.Z,{id:e.id+"_submit",variant:"dark",type:"submit"},"Add")),n.createElement(c.Z.Group,{as:i.Z,xs:"auto",md:"auto",lg:"auto"},n.createElement(s.Z,{id:e.id+"_remove",variant:"danger",type:"button",onClick:e.handleRemove},"Remove")))))))}var k=a(755);function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"handleAjax",value:function(e,t,a,n,r){t?("function"==typeof a&&a(),k.ajax(e).fail((function(){"function"==typeof n&&n()}))):"function"==typeof r&&r()}}],null&&C(t.prototype,null),a&&C(t,a),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=b.get("azureDotNetCoreDataStructuresApi"),N="".concat(M.endpoints.api,"/").concat(M.endpoints.addQueueItem),O="".concat(M.endpoints.api,"/").concat(M.endpoints.removeQueueItem),D="".concat(M.endpoints.api,"/").concat(M.endpoints.addStackItem),j="".concat(M.endpoints.api,"/").concat(M.endpoints.removeStackItem),Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,a,r,l,s=(r=c,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(l){var a=x(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return W(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=s.call(this,e)).state={queue:[],stack:[],showSpinner:!1,showPuzzleModal:!0,showErrorModal:!1,isPuzzleValid:!1},t.handleQueueAdd=t.handleQueueAdd.bind(I(t)),t.handleQueueRemove=t.handleQueueRemove.bind(I(t)),t.handleStackAdd=t.handleStackAdd.bind(I(t)),t.handleStackRemove=t.handleStackRemove.bind(I(t)),t.handleIsPuzzleValid=t.handleIsPuzzleValid.bind(I(t)),t.handlePuzzleModalClose=t.handlePuzzleModalClose.bind(I(t)),t.handlePuzzleModalShow=t.handlePuzzleModalShow.bind(I(t)),t.handleErrorModalClose=t.handleErrorModalClose.bind(I(t)),t.handleBeforeAjax=t.handleBeforeAjax.bind(I(t)),t.handleFailedAjax=t.handleFailedAjax.bind(I(t)),t}return t=c,(a=[{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0,showPuzzleModal:!1})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){T.handleAjax(e,this.state.isPuzzleValid,this.handleBeforeAjax,this.handleFailedAjax,this.handlePuzzleModalShow)}},{key:"handleQueueAdd",value:function(e,t){var a=this;e.preventDefault();var n={collection:this.state.queue,item:t},r={url:N,data:JSON.stringify(n),type:"POST",success:function(e){e?a.setState({queue:JSON.parse(e),showSpinner:!1}):a.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(r)}},{key:"handleStackAdd",value:function(e,t){var a=this;e.preventDefault();var n={collection:this.state.stack,item:t},r={url:D,data:JSON.stringify(n),type:"POST",success:function(e){e?a.setState({stack:JSON.parse(e),showSpinner:!1}):a.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(r)}},{key:"handleQueueRemove",value:function(e){var t=this;e.preventDefault();var a={collection:this.state.queue},n={url:O,data:JSON.stringify(a),type:"POST",success:function(e){e?t.setState({queue:JSON.parse(e),showSpinner:!1}):t.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(n)}},{key:"handleStackRemove",value:function(e){var t=this;e.preventDefault();var a={collection:this.state.stack},n={url:j,data:JSON.stringify(a),type:"POST",success:function(e){e?t.setState({stack:JSON.parse(e),showSpinner:!1}):t.setState({showSpinner:!1,showErrorModal:!0})}};this.handleAjax(n)}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"handleIsPuzzleValid",value:function(){this.setState({isPuzzleValid:!0,showPuzzleModal:!1})}},{key:"handlePuzzleModalClose",value:function(){this.setState({showPuzzleModal:!1})}},{key:"handlePuzzleModalShow",value:function(){this.setState({showPuzzleModal:!0})}},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(d,{answer:5,puzzle:"3 x 2 - 1 =",show:this.state.showPuzzleModal,handleClose:this.handlePuzzleModalClose,handleShow:this.handlePuzzleModalShow,handleIsValid:this.handleIsPuzzleValid}),n.createElement(h,{id:"errorModal",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),n.createElement(p,{show:this.state.showSpinner}),n.createElement(o.Z,null,n.createElement(i.Z,null,n.createElement(o.Z,null,n.createElement(i.Z,null,n.createElement(E,{title:"Queue (FIFO)",listId:"queueList",id:"queueInput",handleAdd:this.handleQueueAdd,handleRemove:this.handleQueueRemove,items:this.state.queue})))),n.createElement(i.Z,null,n.createElement(o.Z,null,n.createElement(i.Z,null,n.createElement(E,{title:"Stack (LIFO)",listId:"stackList",id:"stackInput",handleAdd:this.handleStackAdd,handleRemove:this.handleStackRemove,items:this.state.stack}))))))}}])&&z(t.prototype,a),c}(n.Component);r.render(n.createElement(Z,null),document.getElementById("result"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,r,i)=>{if(!a){var o=1/0;for(c=0;c<e.length;c++){for(var[a,r,i]=e[c],l=!0,s=0;s<a.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(l=!1,i<o&&(o=i));l&&(e.splice(c--,1),t=r())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[o,l,s]=a,c=0;for(r in l)n.o(l,r)&&(n.m[r]=l[r]);for(s&&s(n),t&&t(a);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[o[c]]=0;n.O()},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(713)));r=n.O(r)})();