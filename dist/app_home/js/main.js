(()=>{"use strict";var e,t={732:(e,t,a)=>{a(666);var n=a(294),r=a(935);function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"sorter",value:function(e,t){var a=e.order||Number.MAX_VALUE,n=t.order||Number.MAX_VALUE;return a<n?-1:a>n?1:0}}],null&&i(t.prototype,null),a&&i(t,a),e}(),c=n.createContext(),l=n.createContext();function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e){var t=e.children,a=n.useContext(l);a.config.applications.sort(o.sorter);var r,i,u=(r=(0,n.useState)(a.config.applications),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}}(r,i)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=u[0],p=u[1],m={unmodified:a.config.applications,applications:d,setApplications:p};return n.createElement(c.Provider,{value:m},t)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"searchCriterions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=e.length>0?e.filter((function(e){return t.split(" ").filter((function(e){return e})).filter((function(t){return-1!==e.toUpperCase().indexOf(t.toUpperCase())})).length>0})):[],n=a.length>0;return n}}],null&&d(t.prototype,null),a&&d(t,a),e}();function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function v(){var e=n.useContext(l),t=n.useContext(c),a=m((0,n.useState)(!1),2),r=a[0],i=a[1],o=m((0,n.useState)(""),2),s=o[0],u=o[1],d=function(){i(!1),u("");var e=t.applications.map((function(e){return e.active=!!e.include,e}));t.setApplications(e)},f=function(e){var t=e.target.value;if(p.searchDoesNotExist(s,t)){var a=p.combineSearchTerms(s,t);u(a),v(a)}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.length>0){var a=t.applications.map((function(t){var a=[t.name,t.subHeading,t.description,t.searchTerms];return t.active=!!t.include&&p.searchCriterions(a,e),t}));i(!0),t.setApplications(a)}else d()};return n.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.createElement("div",{id:"searchBar",className:"input-group mb-3 shadow"},n.createElement("div",{className:"input-group-prepend"},n.createElement("span",{className:"input-group-text"},n.createElement("i",{className:"fa fa-search"}))),n.createElement("input",{type:"text",className:"form-control",placeholder:"Search applications...",id:"searchInput",value:s,onChange:function(e){var t=e.target.value;u(t),v(t)}}),r&&n.createElement("div",{className:"input-group-append",id:"cancelBtn"},n.createElement("button",{className:"btn",type:"button",onClick:d},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement("div",{className:"input-group-append"},n.createElement("button",{id:"openFilterBtn",className:"btn btn-dark",type:"button","data-toggle":"collapse","data-target":"#filterContainer","aria-expanded":"false","aria-controls":"filterContainer"},n.createElement("i",{className:"fa fa-filter"})))),n.createElement("div",{className:"collapse",id:"filterContainer"},n.createElement("div",{className:"pb-3"},n.createElement("label",{className:"d-flex flex-row justify-content-center"},"Quick search"),n.createElement("div",{className:"btn-group d-flex flex-row justify-content-center"},e.config.quickSearch.map((function(e){return n.createElement("button",{key:e,type:"button",className:"btn btn-outline-dark flex-grow-0",value:e,onClick:f},e)}))))))}p.searchDoesNotExist=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return-1===(e||"").toUpperCase().indexOf((t||"").toUpperCase())},p.combineSearchTerms=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="".concat(e," ").concat(t);return a.trim()};var b=a(6),h=a(51),g=a(555),S=a(977),y=n.memo((function(e){var t=e.application,a=e.condition,r=n.useContext(l);return n.createElement(n.Fragment,null,a&&n.createElement(b.Z,{className:"grid-item",key:"".concat(t.name)},n.createElement(b.Z.Body,null,n.createElement(b.Z.Title,null,t.name),n.createElement(b.Z.Text,null,t.subHeading),n.createElement(b.Z.Link,{className:"btn btn-outline-dark btn-sm card-link",href:"".concat(r.config.prefix).concat(t.folder,"/index.html")},"View application"),n.createElement(h.Z,{className:"mt-3"},n.createElement(g.Z,null,t.labels?t.labels.map((function(e){var t=r.config.labels[e];return n.createElement(S.Z,{key:e,variant:t.class,className:"text-light mr-2"},t.name)})):null)))))}),(function(e,t){return e.condition===t.condition}));function w(){var e=n.useContext(c),t=e.applications.filter((function(e){return e.featured}))||[],a=e.applications.filter((function(e){return!e.featured}))||[];return n.createElement(n.Fragment,null,(t.length>0||a.length>0)&&n.createElement("div",{id:"applicationsContainer"},n.createElement("div",{className:"card-columns"},t.map((function(e){return n.createElement(y,{key:"featured_".concat(e.folder),condition:e.active&&e.include,application:e})}))),n.createElement("div",{className:"card-columns"},a.map((function(e){return n.createElement(y,{key:e.folder,condition:e.active&&e.include,application:e})})))))}function A(){var e=n.useContext(l);return n.createElement("div",{className:"container-fluid pt-4 bg-white",id:"contentContainer"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("h2",{className:"display-4"},e.appConfig.name))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("h5",null,e.appConfig.subHeading),n.createElement("p",{className:"text-muted"},e.appConfig.description),n.createElement("hr",null))),n.createElement(v,null),n.createElement(w,null))}var E="scroll-down",C="navBar";function T(){var e=n.useContext(l);return n.createElement("div",{className:"bg-dark",id:"introContainer"},n.createElement("div",{id:"introContent"},n.createElement("div",{id:"canvasContainer"}),n.createElement("div",{id:"introContentInner"},n.createElement("div",{id:"introImage",className:"text-center element"},n.createElement("img",{className:"img-fluid",src:"images/FSLogo.png",alt:"Logo"})),n.createElement("div",{id:"introHeadings",className:"text-center element"},n.createElement("h1",{className:"display-4 mb-0"},e.config.author),n.createElement("h4",{className:"display-4 sub-heading lead text-white"},e.config.role)),n.createElement("div",{id:"btnContainer",className:"text-center element pt-2"},n.createElement("button",{type:"button",className:"btn btn-outline-light",onClick:function(e){e.preventDefault();var t=document.getElementById("contentContainer");window.scrollTo({top:t.offsetTop-50,left:0,behavior:"smooth"})}},"View Portfolio Testing 1256")))))}const x=JSON.parse('{"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React","TypeScript",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Azure Functions .NET, Unique Data Entry","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreUniqueDataEntryApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api","canItemBeAddedAsync":"canItemBeAddedAsync"},"labels":[0,1,2],"featured":true},{"name":"Azure Functions .NET, Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreDataStructuresApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api","addQueueItem":"addQueueItemAsync","removeQueueItem":"removeQueueItemAsync","addStackItem":"addStackItemAsync","removeStackItem":"removeStackItemAsync"},"labels":[0,1,2],"featured":true},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":true},{"name":"AWS .NET, Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreStringSortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values","sort":"sort"},"labels":[0,1,2],"featured":true},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"AWS .NET, Asynchronous Coffee Maker","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreAsyncCoffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values","run":"run","runAsync":"runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":true},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":true,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?x.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:x}}],null&&k(t.prototype,null),a&&k(t,a),e}();function W(e){var t=e.children,a={config:N.get(),appConfig:N.get("home")};return n.createElement(l.Provider,{value:a},t)}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var I=n.createContext();function M(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}function P(e){var t,a,r=e.children,i=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}}(t,a)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?R(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],c=i[1],l={show:o,setShow:c,showSpinner:function(){return c(!0)},hideSpinner:function(){return c(!1)}};return n.createElement(I.Provider,{value:l},r,n.createElement(M,{show:l.show}))}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t="fade-element",a=e?"in":"out";return"".concat(t," ").concat(a)};function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var D=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isWebGLAvailable",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}},{key:"isWebGL2Available",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}}}],null&&L(t.prototype,null),a&&L(t,a),e}(),H=a(212),U=a(125);function F(e,t,a,n,r,i,o){try{var c=e[i](o),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(n,r)}var j,z=(j=regeneratorRuntime.mark((function e(){var t,a,n,r,i,o,c,l,s,u,d,p,m,f,v,b,h,g,S,y,w,A,E,C,T,x,k,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=-Math.PI/2,a="canvasContainer",d=function(){(c=new U.World).gravity.set(0,-10,0),c.broadphase=new U.NaiveBroadphase,c.solver.iterations=10},p=function(){n=document.getElementById(a),r=new H.xsS,i=new H.cPb(75,n.offsetWidth/n.offsetHeight,1,500),s=new H.Pa4,l=new H.iMs,u=new H.Tme},m=function(){i.position.x=0,i.position.y=4,i.position.z=10},f=function(){var e=document.getElementById(a);(o=new H.CP7({antialias:!0,alpha:!0})).setSize(e.offsetWidth,e.offsetHeight),o.shadowMap.enabled=!0,o.shadowMap.type=H.ntZ,e.appendChild(o.domElement)},v=function(){window.addEventListener("resize",(function(){var e=document.getElementById(a);o.setSize(e.offsetWidth,e.offsetHeight),i.aspect=e.offsetWidth/e.offsetHeight,i.updateProjectionMatrix()}))},b=function(){for(var e=1e-6*Date.now(),t=0;t<r.children.length;t++){var a=r.children[t];a instanceof H.woe&&(a.rotation.y=e*(t<4?t+1:-(t+1)))}},h=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=[],n=0;n<e;n++){var i=H.M8C.randFloatSpread(2e3),o=H.M8C.randFloatSpread(2e3),c=H.M8C.randFloatSpread(3e3);a.push(i,o,c)}var l=new H.u9r;l.setAttribute("position",new H.a$l(a,3));for(var s=new H.UY4({size:.5}),u=0;u<t;u++){var d=new H.woe(l,s);d.rotation.x=6*Math.random(),d.rotation.y=6*Math.random(),d.rotation.z=6*Math.random(),r.add(d)}},g=function(e){for(var t=new H.zf8(5,10),a=new H.EJi({color:16777215,side:H.ehD}),n=0;n<e;n++){var i=H.M8C.randFloat(.01,.02),o=new H.Kj0(t,a);o.position.set(H.M8C.randFloat(-300,200),H.M8C.randFloat(5,50),H.M8C.randFloat(5,50)),o.rotation.set(H.M8C.randFloat(0,.05),H.M8C.randFloat(0,.05),H.M8C.randFloat(0,.05)),o.scale.set(i,i,i),o.speedValue=H.M8C.randFloat(-.25,.7),u.add(o)}r.add(u)},S=function(){for(var e=0;e<u.children.length;e++){var t=u.children[e];t.rotation.x+=t.speedValue/10,t.rotation.y+=t.speedValue/10,t.rotation.z+=t.speedValue/10}u.rotation.y+=.004},y=function(){var e=.3*Math.random()+1,t=Math.random()-.5*Math.random()+1,a=new H.DvJ(t,t,t),n=new H.YBo({color:6055536}),r=new H.Kj0(a,n);r.position.set(e,15,0),r.updatePhysics=!0,r.castShadow=!0,r.receiveShadow=!0;var i=new U.Box(new U.Vec3(t/2,t/2,t/2)),o=new U.Material,c=new U.Body({mass:5,material:o});return c.addShape(i),c.position.set(e,15,0),c.linearDamping=.9,c.updatePhysics=!0,c.isCube=!0,c.angularVelocity.set(1,.5,1),{mesh:r,body:c}},w=function(){if(c.bodies.filter((function(e){return e.isCube})).length<=20){var e=y();c.addBody(e.body),r.add(e.mesh)}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=new H.PMe(e,t,a);c.position.set(n,i,o),c.penumbra=1,c.castShadow=!0,c.shadow.mapSize.width=2560,c.shadow.mapSize.height=2560,c.shadow.camera.near=.5,c.shadow.camera.far=500,c.shadow.focus=1,r.add(c)},E=function(){c.step(.016666666666666666);var e=c.bodies.filter((function(e){return e.updatePhysics})),t=r.children.filter((function(e){return e.updatePhysics}));if(e.length===t.length)for(var a=0;a<t.length;a++){var n=t[a],i=e[a];n.position.copy(i.position),n.quaternion.copy(i.quaternion)}},C=function(){o.setAnimationLoop((function(){b(),E(),S(),o.render(r,i)}))},T=function(){var e=new H.BKK(50,50,1,1),a=new H.xoR({color:3027768,shininess:150}),n=new H.Kj0(e,a);n.rotation.x=t,n.receiveShadow=!0,r.add(n);var i=new U.Plane,o=new U.Material,l=new U.Body({mass:0,material:o});l.quaternion.setFromAxisAngle(new U.Vec3(1,0,0),t),l.addShape(i),c.add(l)},x=function(e){e.preventDefault(),s.x=e.clientX/window.innerWidth*2-1,s.y=-e.clientY/window.innerHeight*2+1,s.z=.5,l.setFromCamera(s,i);var t=l.intersectObjects(r.children,!0);if(t.length>0){var a=t[0].object;if(a.updatePhysics){var n=c.bodies.filter((function(e){return e.position.x===a.position.x&&e.position.y===a.position.y&&e.position.z===a.position.z}));if(n.length>0){var o=n[0],u=10*s.x,d=10*s.y;o.angularVelocity.set(u,d,0)}}}},k=function(){window.addEventListener("mousemove",x)},N=function(){p(),d(),T(),m(),f(),v(),setInterval(w,1e3),h(2e4,10),g(25),A(16777215,2,500,0,10,5),k(),C()},e.abrupt("return",{init:N});case 24:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(a,n){var r=j.apply(e,t);function i(e){F(r,a,n,i,o,"next",e)}function o(e){F(r,a,n,i,o,"throw",e)}i(void 0)}))})(),O=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.getElementById(C);e?t.classList.remove(E):t.classList.add(E)},G=function(){O(0===window.scrollY)};function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var V=function(e){var t,a,r=e.children,i=D.isWebGL2Available()||D.isWebGLAvailable(),o=n.useContext(I),c=(t=(0,n.useState)(B(!1)),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}}(t,a)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?J(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=c[0],s=c[1],u=function(){setTimeout((function(){s(B(!0)),o.setShow(!1)}),500)};return(0,n.useLayoutEffect)((function(){o.setShow(!0),O(),window.addEventListener("scroll",G),i?z.then((function(e){e.init(),u()})):u()}),[]),n.createElement("div",{className:l},r)};function q(){return n.createElement(W,null,n.createElement(u,null,n.createElement(P,null,n.createElement(V,null,n.createElement(T,null),n.createElement(A,null)))))}r.render(n.createElement(q,null),document.getElementById("app"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,r,i)=>{if(!a){var o=1/0;for(s=0;s<e.length;s++){for(var[a,r,i]=e[s],c=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(c=!1,i<o&&(o=i));c&&(e.splice(s--,1),t=r())}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[o,c,l]=a,s=0;for(r in c)n.o(c,r)&&(n.m[r]=c[r]);for(l&&l(n),t&&t(a);s<o.length;s++)i=o[s],n.o(e,i)&&e[i]&&e[i][0](),e[o[s]]=0;n.O()},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(732)));r=n.O(r)})();