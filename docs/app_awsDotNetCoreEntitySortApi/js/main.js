(()=>{"use strict";var e,t={616:(e,t,a)=>{var n=a(294),r=a(935);function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,a=void 0!==e?e.substring(0,t).split(" ").join(""):"";return a}}],null&&l(t.prototype,null),a&&l(t,a),e}(),i=a(625),s=a(754),c=a(151),u=a(555);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],o=!0,i=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return l}}(t,a)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=r[0],o=r[1];return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:e.id||"puzzleModal",show:e.show,onHide:e.handleClose,onShow:function(){return o(!1)}},n.createElement(i.Z.Header,null,n.createElement(i.Z.Title,{className:"display-4"},e.title||"Are you a human?"),n.createElement(s.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(i.Z.Body,null,n.createElement(c.Z,{noValidate:!0,validated:l,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?t.stopPropagation():e.handleIsValid(),o(!0)}},n.createElement(c.Z.Row,null,n.createElement(c.Z.Group,{as:u.Z,controlId:"answerInput"},n.createElement(c.Z.Label,null,"".concat(e.label||"What is:"," ").concat(e.puzzle," ?")),n.createElement(c.Z.Control,{name:"answerInput",type:"text",placeholder:"Answer...",pattern:e.answer,required:!0}),n.createElement(c.Z.Control.Feedback,{type:"invalid"},e.error||"Incorrect answer! Please try again."))),n.createElement(i.Z.Footer,null,n.createElement(s.Z,{variant:"secondary",onClick:e.handleClose},"Close"),n.createElement(s.Z,{id:"submitPuzzle",variant:"dark",type:"submit"},"Submit"))))))}function p(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}function h(e){return n.createElement(i.Z,{id:e.id,show:e.show,onHide:e.handleClose},n.createElement(i.Z.Header,null,n.createElement(i.Z.Title,{className:"display-4"},e.title),n.createElement(s.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(i.Z.Body,null,n.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),n.createElement(i.Z.Footer,null,n.createElement(s.Z,{variant:"dark",onClick:e.handleClose},"Close")))}function f(e){return n.createElement(h,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const y=JSON.parse('{"host":"localhost","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Azure Functions .NET, Unique Data Entry","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreUniqueDataEntryApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api","canItemBeAddedAsync":"canItemBeAddedAsync"},"labels":[0,1,2],"featured":false},{"name":"Azure Functions .NET, Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreDataStructuresApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api","addQueueItem":"addQueueItemAsync","removeQueueItem":"removeQueueItemAsync","addStackItem":"addStackItemAsync","removeStackItem":"removeStackItemAsync"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreStringSortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values","sort":"sort"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"AWS .NET, Asynchronous Coffee Maker","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreAsyncCoffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values","run":"run","runAsync":"runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":false},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":false,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?y.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:y}}],null&&b(t.prototype,null),a&&b(t,a),e}(),v=a(318);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function A(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],o=!0,i=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return l}}(t,a)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=r[0],o=r[1];return n.createElement(n.Fragment,null,n.createElement(c.Z,{noValidate:!0,validated:l,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?(o(!0),t.stopPropagation()):(o(!1),e.handleSubmit(t))}},n.createElement(c.Z.Row,null,n.createElement(c.Z.Label,null,"Add an Employee")),n.createElement(c.Z.Row,null,n.createElement(u.Z,{sm:3,className:"my-1"},n.createElement(c.Z.Label,{htmlFor:"nameInput",srOnly:!0},"Name"),n.createElement(c.Z.Control,{id:"nameInput",name:"nameInput",type:"text",placeholder:"John Doe",required:!0,onChange:e.handleNameChange,value:e.name}),n.createElement(c.Z.Control.Feedback,{type:"invalid"},"Please enter a value.")),n.createElement(u.Z,{sm:3,className:"my-1"},n.createElement(c.Z.Label,{htmlFor:"salaryInput",srOnly:!0},"Salary"),n.createElement(v.Z,null,n.createElement(v.Z.Prepend,null,n.createElement(v.Z.Text,null,"£")),n.createElement(c.Z.Control,{id:"salaryInput",name:"salaryInput",type:"number",placeholder:"0.00",required:!0,onChange:e.handleSalaryChange,value:e.salary}),n.createElement(c.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(u.Z,{sm:3,className:"my-1"},n.createElement(s.Z,{id:"addEmployee_submit",variant:"dark",type:"submit"},"Add")))))}var E=a(755);function w(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"handleAjax",value:function(e,t,a,n,r){t?("function"==typeof a&&a(),E.ajax(e).fail((function(){"function"==typeof n&&n()}))):"function"==typeof r&&r()}}],null&&w(t.prototype,null),a&&w(t,a),e}();function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isUniqueInArray",value:function(e,t){var a;return null===(a=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===a||a}}],null&&k(t.prototype,null),a&&k(t,a),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?P(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function z(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=S.get("awsDotNetCoreEntitySortApi"),j="".concat(M.endpoints.api,"/").concat(M.endpoints.sortSalaryAsc),B="".concat(M.endpoints.api,"/").concat(M.endpoints.sortSalaryDesc),H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(s,e);var t,a,r,l,i=(r=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(l){var a=D(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return x(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={name:"",salary:"",employees:[],counterLimit:10,counter:1,showSpinner:!1,showPuzzleModal:!0,showErrorModal:!1,isPuzzleValid:!1},t.handleNameChange=t.handleNameChange.bind(I(t)),t.handleSalaryChange=t.handleSalaryChange.bind(I(t)),t.handleSubmit=t.handleSubmit.bind(I(t)),t.handleDelete=t.handleDelete.bind(I(t)),t.handleSortSalaryAsc=t.handleSortSalaryAsc.bind(I(t)),t.handleSortSalaryDesc=t.handleSortSalaryDesc.bind(I(t)),t.handleIsPuzzleValid=t.handleIsPuzzleValid.bind(I(t)),t.handlePuzzleModalClose=t.handlePuzzleModalClose.bind(I(t)),t.handlePuzzleModalShow=t.handlePuzzleModalShow.bind(I(t)),t.handleErrorModalClose=t.handleErrorModalClose.bind(I(t)),t.handleBeforeAjax=t.handleBeforeAjax.bind(I(t)),t.handleFailedAjax=t.handleFailedAjax.bind(I(t)),t}return t=s,(a=[{key:"formatCurrency",value:function(e){return new Intl.NumberFormat("GBP",{style:"currency",currency:"GBP"}).format(e)}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSalaryChange",value:function(e){this.setState({salary:e.target.value})}},{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0,showPuzzleModal:!1})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){C.handleAjax(e,this.state.isPuzzleValid,this.handleBeforeAjax,this.handleFailedAjax,this.handlePuzzleModalShow)}},{key:"handleSortSalaryAsc",value:function(){var e=this,t={url:j,type:"POST",contentType:"application/json;",data:JSON.stringify({employees:this.state.employees}),success:function(t){e.setState({employees:t,showSpinner:!1})}};this.handleAjax(t)}},{key:"handleSortSalaryDesc",value:function(){var e=this,t={url:B,type:"POST",contentType:"application/json;",data:JSON.stringify({employees:this.state.employees}),success:function(t){e.setState({employees:t,showSpinner:!1})}};this.handleAjax(t)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={key:"",name:this.state.name,salary:Number(this.state.salary),displaySalary:this.formatCurrency(this.state.salary)};t.key=this.handleGenerateKey(t);var a=this.state.employees.map((function(e){return e.key}));if(T.isUniqueInArray(a,t.key)&&this.state.counter<this.state.counterLimit){var n=N(this.state.employees);n.push(t),this.setState({name:"",salary:"",employees:n,counter:this.state.counter+1})}}},{key:"handleDelete",value:function(e){e.preventDefault();var t=Number(e.target.dataset.index);this.state.employees.splice(t,1),this.setState({employees:this.state.employees,counter:this.state.counter-1})}},{key:"handleIsPuzzleValid",value:function(){this.setState({isPuzzleValid:!0,showPuzzleModal:!1})}},{key:"handlePuzzleModalClose",value:function(){this.setState({showPuzzleModal:!1})}},{key:"handlePuzzleModalShow",value:function(){this.setState({showPuzzleModal:!0})}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"handleGenerateKey",value:function(e){return o.generate("".concat(e.name,"_").concat(e.salary))}},{key:"componentDidMount",value:function(){var e={key:"",name:"John Doe",salary:1e4,displaySalary:"£10,000.00"};e.key=this.handleGenerateKey(e);var t=N(this.state.employees);t.push(e),this.setState({employees:t})}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(f,{id:"errorModal",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),n.createElement(p,{show:this.state.showSpinner}),n.createElement(m,{answer:15,puzzle:"7 x 2 + 1 =",show:this.state.showPuzzleModal,handleClose:this.handlePuzzleModalClose,handleShow:this.handlePuzzleModalShow,handleIsValid:this.handleIsPuzzleValid}),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-12"},n.createElement("h3",null,"Employees:"),n.createElement("p",{className:"lead"},"Add new employees to the table, sort using the column controls"),n.createElement("div",{className:"table-responsive"},n.createElement("table",{className:"table",id:"employeeTable"},n.createElement("thead",{className:"bg-dark text-white"},n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,n.createElement("span",{className:"mr-2"},"Salary"),n.createElement("button",{id:"sortAsc",className:"btn btn-sm btn-dark mr-1 px-0",type:"button",onClick:this.handleSortSalaryAsc},n.createElement("i",{className:"fa fa-fw fa-sort-amount-asc"})),n.createElement("button",{id:"sortDesc",className:"btn btn-sm btn-dark px-0",type:"button",onClick:this.handleSortSalaryDesc},n.createElement("i",{className:"fa fa-fw fa-sort-amount-desc"}))),n.createElement("th",null,"Action"))),n.createElement("tbody",null,this.state.employees.map((function(t,a){return n.createElement("tr",{key:t.key,id:t.key},n.createElement("td",null,t.name),n.createElement("td",null,t.displaySalary),n.createElement("td",null,n.createElement("a",{href:"#",className:"badge badge-danger delete","data-index":a,onClick:e.handleDelete},"Delete")))}))))))),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-12"},n.createElement("p",null,"No. of Employees: ",this.state.counter),n.createElement("p",null,"Employee to add: ",this.state.name," ",this.formatCurrency(this.state.salary)))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement(A,{handleSubmit:this.handleSubmit,handleNameChange:this.handleNameChange,handleSalaryChange:this.handleSalaryChange,name:this.state.name,salary:this.state.salary}))))}}])&&z(t.prototype,a),s}(n.Component);r.render(n.createElement(H,null),document.getElementById("result"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e].call(l.exports,l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,r,l)=>{if(!a){var o=1/0;for(u=0;u<e.length;u++){for(var[a,r,l]=e[u],i=!0,s=0;s<a.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[o,i,s]=a,c=0;for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n);for(t&&t(a);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[o[c]]=0;return n.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(616)));r=n.O(r)})();