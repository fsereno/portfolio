(()=>{"use strict";var e,t={591:(e,t,a)=>{var n=a(294),r=a(935),i=a(625),l=a(754),o=a(151),s=a(555);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return i}}(t,a)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],d=r[1];return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:e.id||"puzzleModal",show:e.show,onHide:e.handleClose,onShow:function(){return d(!1)}},n.createElement(i.Z.Header,null,n.createElement(i.Z.Title,{className:"display-4"},e.title||"Are you a human?"),n.createElement(l.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(i.Z.Body,null,n.createElement(o.Z,{noValidate:!0,validated:u,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?t.stopPropagation():e.handleIsValid(),d(!0)}},n.createElement(o.Z.Row,null,n.createElement(o.Z.Group,{as:s.Z,controlId:"answerInput"},n.createElement(o.Z.Label,null,"".concat(e.label||"What is:"," ").concat(e.puzzle," ?")),n.createElement(o.Z.Control,{name:"answerInput",type:"text",placeholder:"Answer...",pattern:e.answer,required:!0}),n.createElement(o.Z.Control.Feedback,{type:"invalid"},e.error||"Incorrect answer! Please try again."))),n.createElement(i.Z.Footer,null,n.createElement(l.Z,{variant:"secondary",onClick:e.handleClose},"Close"),n.createElement(l.Z,{id:"submitPuzzle",variant:"dark",type:"submit"},"Submit"))))))}function d(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}function p(e){return n.createElement(i.Z,{id:e.id,show:e.show,onHide:e.handleClose},n.createElement(i.Z.Header,null,n.createElement(i.Z.Title,{className:"display-4"},e.title),n.createElement(l.Z,{variant:"link",className:"close",onClick:e.handleClose},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(i.Z.Body,null,n.createElement("p",{className:"lead px-2 ".concat(e.bodyClass)},e.body)),n.createElement(i.Z.Footer,null,n.createElement(l.Z,{variant:"dark",onClick:e.handleClose},"Close")))}function m(e){return n.createElement(p,{id:e.id,show:e.show,onHide:e.handleClose,handleClose:e.handleClose,title:e.title||"We have a problem!",body:e.body||"An error has occurred. Please try again.",bodyClass:"text-danger"})}const h=JSON.parse('{"host":"localhost","dockerHost":"nginx","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Azure Functions .NET, Unique Data Entry","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreUniqueDataEntryApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api","canItemBeAddedAsync":"canItemBeAddedAsync"},"labels":[0,1,2],"featured":false},{"name":"Azure Functions .NET, Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreDataStructuresApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api","addQueueItem":"addQueueItemAsync","removeQueueItem":"removeQueueItemAsync","addStackItem":"addStackItemAsync","removeStackItem":"removeStackItemAsync"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreStringSortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values","sort":"sort"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"AWS .NET, Asynchronous Coffee Maker","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreAsyncCoffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values","run":"run","runAsync":"runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":false},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":false,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]},{"name":"Test React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"new_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?h.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:h}}],null&&b(t.prototype,null),a&&b(t,a),e}(),f=a(51),v=a(318);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function g(e){var t,a,r=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return i}}(t,a)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],c=r[1];return n.createElement(n.Fragment,null,n.createElement(f.Z,{className:"splitter"},n.createElement(s.Z,{md:12},n.createElement(o.Z,{id:"".concat(e.id,"_form"),noValidate:!0,validated:i,onSubmit:function(t){t.preventDefault(),!1===t.currentTarget.checkValidity()?t.stopPropagation():e.handleSubmit(t),c(!0)}},n.createElement(o.Z.Row,null,n.createElement(o.Z.Label,{htmlFor:e.id},e.label),n.createElement(v.Z,null,e.children.map((function(e){return n.createElement(o.Z.Control,{key:e.id,id:e.id,name:e.id,type:e.type||"text",placeholder:e.placeholder,required:e.required?"required":""})})),n.createElement(v.Z.Append,null,n.createElement(l.Z,{id:"".concat(e.id,"_submit"),variant:"dark api-submit",type:"submit"},e.button)),n.createElement(o.Z.Control.Feedback,{type:"invalid"},e.error||"Please enter a valid value.")))))))}var A=a(755);function w(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"handleAjax",value:function(e,t,a,n,r){t?("function"==typeof a&&a(),A.ajax(e).fail((function(){"function"==typeof n&&n()}))):"function"==typeof r&&r()}}],null&&w(t.prototype,null),a&&w(t,a),e}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=S.get("awsDotNetCoreShoppingCart"),x="".concat(W.endpoints.api,"/").concat(W.endpoints.get),N="".concat(W.endpoints.api,"/").concat(W.endpoints.add),D="".concat(W.endpoints.api,"/").concat(W.endpoints.delete),I="".concat(W.endpoints.api,"/").concat(W.endpoints.update),M=[{name:"Apple"},{name:"Banana"}],j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(o,e);var t,a,r,i,l=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(i){var a=z(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return R(this,e)});function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l.call(this,e)).state={items:M,resultSet:M,isValid:!1,showSpinner:!1,showPuzzleModal:!0,showErrorModal:!1,isPuzzleValid:!1},t.handleGetSubmit=t.handleGetSubmit.bind(P(t)),t.handleAddSubmit=t.handleAddSubmit.bind(P(t)),t.handleUpdateSubmit=t.handleUpdateSubmit.bind(P(t)),t.handleDeleteSubmit=t.handleDeleteSubmit.bind(P(t)),t.handleIsPuzzleValid=t.handleIsPuzzleValid.bind(P(t)),t.handlePuzzleModalClose=t.handlePuzzleModalClose.bind(P(t)),t.handlePuzzleModalShow=t.handlePuzzleModalShow.bind(P(t)),t.handleErrorModalClose=t.handleErrorModalClose.bind(P(t)),t.handleBeforeAjax=t.handleBeforeAjax.bind(P(t)),t.handleFailedAjax=t.handleFailedAjax.bind(P(t)),t}return t=o,(a=[{key:"handleBeforeAjax",value:function(){this.setState({showSpinner:!0,showPuzzleModal:!1})}},{key:"handleFailedAjax",value:function(){this.setState({showErrorModal:!0,showSpinner:!1})}},{key:"handleAjax",value:function(e){E.handleAjax(e,this.state.isPuzzleValid,this.handleBeforeAjax,this.handleFailedAjax,this.handlePuzzleModalShow)}},{key:"handleGetSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target.elements[0].value,n=Number(a),r={url:x,type:"POST",contentType:"application/json;",data:JSON.stringify({index:n,items:this.state.items}),success:function(e){(function(e){return void 0!==e&&e.length>0})(e)&&t.setState({resultSet:e,showSpinner:!1})}};this.handleAjax(r)}},{key:"handleAddSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target.elements[0].value,n={url:N,type:"POST",contentType:"application/json;",data:JSON.stringify({item:{name:a},items:this.state.items}),success:function(e){t.setState({resultSet:e,items:e,showSpinner:!1})}};this.handleAjax(n)}},{key:"handleUpdateSubmit",value:function(e){var t=this;e.preventDefault();var a=Number(e.target.elements[0].value),n=e.target.elements[1].value,r={url:I,type:"POST",contentType:"application/json;",data:JSON.stringify({index:a,item:{name:n},items:this.state.items}),success:function(e){t.setState({resultSet:e,items:e,showSpinner:!1})}};this.handleAjax(r)}},{key:"handleDeleteSubmit",value:function(e){var t=this;e.preventDefault();var a=Number(e.target.elements[0].value),n={url:D,type:"POST",contentType:"application/json;",data:JSON.stringify({index:a,items:this.state.items}),success:function(e){t.setState({resultSet:e,items:e,showSpinner:!1})}};this.handleAjax(n)}},{key:"handleIsPuzzleValid",value:function(){this.setState({isPuzzleValid:!0,showPuzzleModal:!1})}},{key:"handlePuzzleModalClose",value:function(){this.setState({showPuzzleModal:!1})}},{key:"handlePuzzleModalShow",value:function(){this.setState({showPuzzleModal:!0})}},{key:"handleErrorModalClose",value:function(){this.setState({showErrorModal:!1})}},{key:"render",value:function(){return n.createElement("div",null,n.createElement(m,{id:"errorModal",show:this.state.showErrorModal,handleClose:this.handleErrorModalClose}),n.createElement(d,{show:this.state.showSpinner}),n.createElement(u,{answer:15,puzzle:"4 x 4 - 1 =",show:this.state.showPuzzleModal,handleClose:this.handlePuzzleModalClose,handleShow:this.handlePuzzleModalShow,handleIsValid:this.handleIsPuzzleValid}),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-12"},n.createElement("h3",null,"Basket:"),n.createElement("ul",{id:"basketItems"},this.state.resultSet.map((function(e){return n.createElement("li",{key:e.name},e.name)}))),n.createElement("p",{className:"lead"},"Use the below interface to alter the basket's contents:"))),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-4"},n.createElement(g,{handleSubmit:this.handleGetSubmit,button:"Get",id:"get",label:"Get items (eg. 1 or 2 to get singular)",children:[{id:"get",placeholder:"Item position or leave empty",type:"number"}]}),n.createElement(g,{handleSubmit:this.handleAddSubmit,button:"Add",id:"add",label:"Add an item",children:[{id:"add",placeholder:"Name of item to add",required:!0}]}),n.createElement(g,{handleSubmit:this.handleDeleteSubmit,button:"Delete",id:"delete",label:"Delete an item",children:[{id:"delete",placeholder:"Item position to remove (eg. 1 or 2)",required:!0,type:"number"}]}),n.createElement(g,{handleSubmit:this.handleUpdateSubmit,button:"Update",id:"update",label:"Update an item (eg. 1 or 2)",children:[{id:"update_position",placeholder:"Position...",required:!0,type:"number"},{id:"update_value",placeholder:"Value...",required:!0}]}))))}}])&&C(t.prototype,a),o}(n.Component);r.render(n.createElement(j,null),document.getElementById("result"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,r,i)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,r,i]=e[u],o=!0,s=0;s<a.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(o=!1,i<l&&(l=i));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[l,o,s]=a,c=0;for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(s)var u=s(n);for(t&&t(a);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[l[c]]=0;return n.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(591)));r=n.O(r)})();