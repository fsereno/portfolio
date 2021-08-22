(()=>{"use strict";var e,t={96:(e,t,a)=>{var n=a(294),r=a(935);function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"sorter",value:function(e,t){var a=e.order||Number.MAX_VALUE,n=t.order||Number.MAX_VALUE;return a<n?-1:a>n?1:0}}],null&&i(t.prototype,null),a&&i(t,a),e}(),l=n.createContext(),c=n.createContext();function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e){var t=e.children,a=n.useContext(c);a.config.applications.sort(o.sorter);var r,i,u=(r=(0,n.useState)(a.config.applications),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return i}}(r,i)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=u[0],p=u[1],m={unmodified:a.config.applications,applications:d,setApplications:p};return n.createElement(l.Provider,{value:m},t)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"searchCriterions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=e.length>0?e.filter((function(e){return t.split(" ").filter((function(e){return e})).filter((function(t){return-1!==e.toUpperCase().indexOf(t.toUpperCase())})).length>0})):[],n=a.length>0;return n}}],null&&d(t.prototype,null),a&&d(t,a),e}();function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function v(){var e=n.useContext(c),t=n.useContext(l),a=m((0,n.useState)(!1),2),r=a[0],i=a[1],o=m((0,n.useState)(""),2),s=o[0],u=o[1],d=function(){i(!1),u("");var e=t.applications.map((function(e){return e.active=!!e.include,e}));t.setApplications(e)},f=function(e){var t=e.target.value;if(p.searchDoesNotExist(s,t)){var a=p.combineSearchTerms(s,t);u(a),v(a)}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.length>0){var a=t.applications.map((function(t){var a=[t.name,t.subHeading,t.description,t.searchTerms];return t.active=!!t.include&&p.searchCriterions(a,e),t}));i(!0),t.setApplications(a)}else d()};return n.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.createElement("div",{id:"searchBar",className:"input-group mb-3 shadow"},n.createElement("div",{className:"input-group-prepend"},n.createElement("span",{className:"input-group-text"},n.createElement("i",{className:"fa fa-search"}))),n.createElement("input",{type:"text",className:"form-control",placeholder:"Search applications...",id:"searchInput",value:s,onChange:function(e){var t=e.target.value;u(t),v(t)}}),r&&n.createElement("div",{className:"input-group-append",id:"cancelBtn"},n.createElement("button",{className:"btn",type:"button",onClick:d},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement("div",{className:"input-group-append"},n.createElement("button",{id:"openFilterBtn",className:"btn btn-dark",type:"button","data-toggle":"collapse","data-target":"#filterContainer","aria-expanded":"false","aria-controls":"filterContainer"},n.createElement("i",{className:"fa fa-filter"})))),n.createElement("div",{className:"collapse",id:"filterContainer"},n.createElement("div",{className:"pb-3"},n.createElement("label",{className:"d-flex flex-row justify-content-center"},"Quick search"),n.createElement("div",{className:"btn-group d-flex flex-row justify-content-center"},e.config.quickSearch.map((function(e){return n.createElement("button",{key:e,type:"button",className:"btn btn-outline-dark flex-grow-0",value:e,onClick:f},e)}))))))}p.searchDoesNotExist=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return-1===(e||"").toUpperCase().indexOf((t||"").toUpperCase())},p.combineSearchTerms=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="".concat(e," ").concat(t);return a.trim()};var h=a(6),b=a(51),g=a(555),S=a(977),y=n.memo((function(e){var t=e.application,a=e.condition,r=n.useContext(c);return n.createElement(n.Fragment,null,a&&n.createElement(h.Z,{className:"grid-item",key:"".concat(t.name)},n.createElement(h.Z.Body,null,n.createElement(h.Z.Title,null,t.name),n.createElement(h.Z.Text,null,t.subHeading),n.createElement(h.Z.Link,{className:"btn btn-outline-dark btn-sm card-link",href:"".concat(r.config.prefix).concat(t.folder,"/index.html")},"View application"),n.createElement(b.Z,{className:"mt-3"},n.createElement(g.Z,null,t.labels?t.labels.map((function(e){var t=r.config.labels[e];return n.createElement(S.Z,{key:e,variant:t.class,className:"text-light mr-2"},t.name)})):null)))))}),(function(e,t){return e.condition===t.condition}));function w(){var e=n.useContext(l),t=e.applications.filter((function(e){return e.featured}))||[],a=e.applications.filter((function(e){return!e.featured}))||[];return n.createElement(n.Fragment,null,(t.length>0||a.length>0)&&n.createElement("div",{id:"applicationsContainer"},n.createElement("div",{className:"card-columns"},t.map((function(e){return n.createElement(y,{key:"featured_".concat(e.folder),condition:e.active&&e.include,application:e})}))),n.createElement("div",{className:"card-columns"},a.map((function(e){return n.createElement(y,{key:e.folder,condition:e.active&&e.include,application:e})})))))}function A(){var e=n.useContext(c);return n.createElement("div",{className:"container-fluid pt-4 bg-white",id:"contentContainer"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("h2",{className:"display-4"},e.appConfig.name))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("h5",null,e.appConfig.subHeading),n.createElement("p",{className:"text-muted"},e.appConfig.description),n.createElement("hr",null))),n.createElement(v,null),n.createElement(w,null))}var E="scroll-down",C="navBar";function T(){var e=n.useContext(c);return n.createElement("div",{className:"bg-dark",id:"introContainer"},n.createElement("div",{id:"introContent"},n.createElement("div",{id:"canvasContainer",style:{width:"100vw",height:"100vh"}}),n.createElement("div",{id:"introContentInner"},n.createElement("div",{id:"introImage",className:"text-center element"},n.createElement("img",{className:"img-fluid",src:"images/FSLogo.png",alt:"Logo"})),n.createElement("div",{id:"introHeadings",className:"text-center element"},n.createElement("h1",{className:"display-4 mb-0"},e.config.author),n.createElement("h4",{className:"display-4 sub-heading lead text-white"},e.config.role)),n.createElement("div",{id:"btnContainer",className:"text-center element pt-2"},n.createElement("button",{type:"button",className:"btn btn-outline-light",onClick:function(e){e.preventDefault();var t=document.getElementById("contentContainer");window.scrollTo({top:t.offsetTop-50,left:0,behavior:"smooth"})}},"View Portfolio")))))}const x=JSON.parse('{"host":"localhost","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Azure Functions .NET, Unique Data Entry","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreUniqueDataEntryApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api","canItemBeAddedAsync":"canItemBeAddedAsync"},"labels":[0,1,2],"featured":false},{"name":"Azure Functions .NET, Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreDataStructuresApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api","addQueueItem":"addQueueItemAsync","removeQueueItem":"removeQueueItemAsync","addStackItem":"addStackItemAsync","removeStackItem":"removeStackItemAsync"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreStringSortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values","sort":"sort"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"AWS .NET, Asynchronous Coffee Maker","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreAsyncCoffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values","run":"run","runAsync":"runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":false},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":false,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"get",value:function(e){var t=e?x.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:x}}],null&&k(t.prototype,null),a&&k(t,a),e}();function W(e){var t=e.children,a={config:N.get(),appConfig:N.get("home")};return n.createElement(c.Provider,{value:a},t)}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var I=n.createContext();function M(e){var t=e.show?"":"d-none";return n.createElement("div",null,n.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),n.createElement("div",{id:"loader",className:"".concat(t," item loading")},n.createElement("div",{className:"spinner"},n.createElement("div",{className:"circle circle-1"},n.createElement("div",{className:"circle-inner"})),n.createElement("div",{className:"circle circle-2"},n.createElement("div",{className:"circle-inner"})))))}function P(e){var t,a,r=e.children,i=(t=(0,n.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return i}}(t,a)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?R(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],l=i[1],c={show:o,setShow:l,showSpinner:function(){return l(!0)},hideSpinner:function(){return l(!1)}};return n.createElement(I.Provider,{value:c},r,n.createElement(M,{show:c.show}))}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t="fade-element",a=e?"in":"out";return"".concat(t," ").concat(a)};function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var D,H,U,F,z,j,O,G,J,V,q,_,Z,K=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"isWebGLAvailable",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}},{key:"isWebGL2Available",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}}}],null&&L(t.prototype,null),a&&L(t,a),e}(),Q=a(212),Y=a(125),X=(J=-Math.PI/2,V="canvasContainer",q=function(){if(z.bodies.filter((function(e){return e.isCube})).length<=20){var e=function(){var e=.3*Math.random()+1,t=Math.random()-.5*Math.random()+1,a=new Q.DvJ(t,t,t),n=new Q.YBo({color:6055536}),r=new Q.Kj0(a,n);r.position.set(e,15,0),r.updatePhysics=!0,r.castShadow=!0,r.receiveShadow=!0;var i=new Y.Box(new Y.Vec3(t/2,t/2,t/2)),o=new Y.Material,l=new Y.Body({mass:5,material:o});return l.addShape(i),l.position.set(e,15,0),l.linearDamping=.9,l.updatePhysics=!0,l.isCube=!0,l.angularVelocity.set(1,.5,1),{mesh:r,body:l}}();z.addBody(e.body),H.add(e.mesh)}},_=function(){F.setAnimationLoop((function(){!function(){for(var e=1e-6*Date.now(),t=0;t<H.children.length;t++){var a=H.children[t];a instanceof Q.woe&&(a.rotation.y=e*(t<4?t+1:-(t+1)))}}(),function(){z.step(.016666666666666666);var e=z.bodies.filter((function(e){return e.updatePhysics})),t=H.children.filter((function(e){return e.updatePhysics}));if(e.length===t.length)for(var a=0;a<t.length;a++){var n=t[a],r=e[a];n.position.copy(r.position),n.quaternion.copy(r.quaternion)}}(),function(){for(var e=0;e<G.children.length;e++){var t=G.children[e];t.rotation.x+=t.speedValue/10,t.rotation.y+=t.speedValue/10,t.rotation.z+=t.speedValue/10}G.rotation.y+=.004}(),F.render(H,U)}))},Z=function(e){e.preventDefault(),O.x=e.clientX/window.innerWidth*2-1,O.y=-e.clientY/window.innerHeight*2+1,O.z=.5,j.setFromCamera(O,U);var t=j.intersectObjects(H.children,!0);if(t.length>0){var a=t[0].object;if(a.updatePhysics){var n=z.bodies.filter((function(e){return e.position.x===a.position.x&&e.position.y===a.position.y&&e.position.z===a.position.z}));if(n.length>0){var r=n[0],i=10*O.x,o=10*O.y;r.angularVelocity.set(i,o,0)}}}},{init:function(){var e;D=document.getElementById(V),H=new Q.xsS,U=new Q.cPb(75,D.offsetWidth/D.offsetHeight,1,500),O=new Q.Pa4,j=new Q.iMs,G=new Q.Tme,(z=new Y.World).gravity.set(0,-10,0),z.broadphase=new Y.NaiveBroadphase,z.solver.iterations=10,function(){var e=new Q.BKK(50,50,1,1),t=new Q.xoR({color:3027768,shininess:150}),a=new Q.Kj0(e,t);a.rotation.x=J,a.receiveShadow=!0,H.add(a);var n=new Y.Plane,r=new Y.Material,i=new Y.Body({mass:0,material:r});i.quaternion.setFromAxisAngle(new Y.Vec3(1,0,0),J),i.addShape(n),z.add(i)}(),U.position.x=0,U.position.y=4,U.position.z=10,e=document.getElementById(V),(F=new Q.CP7({antialias:!0,alpha:!0})).setSize(e.offsetWidth,e.offsetHeight),F.shadowMap.enabled=!0,F.shadowMap.type=Q.ntZ,e.appendChild(F.domElement),window.addEventListener("resize",(function(){var e=document.getElementById(V);F.setSize(e.offsetWidth,e.offsetHeight),U.aspect=e.offsetWidth/e.offsetHeight,U.updateProjectionMatrix()})),setInterval(q,1e3),function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=[],n=0;n<e;n++){var r=Q.M8C.randFloatSpread(2e3),i=Q.M8C.randFloatSpread(2e3),o=Q.M8C.randFloatSpread(3e3);a.push(r,i,o)}var l=new Q.u9r;l.setAttribute("position",new Q.a$l(a,3));for(var c=new Q.UY4({size:.5}),s=0;s<t;s++){var u=new Q.woe(l,c);u.rotation.x=6*Math.random(),u.rotation.y=6*Math.random(),u.rotation.z=6*Math.random(),H.add(u)}}(2e4,10),function(e){for(var t=new Q.zf8(5,10),a=new Q.EJi({color:16777215,side:Q.ehD}),n=0;n<25;n++){var r=Q.M8C.randFloat(.01,.02),i=new Q.Kj0(t,a);i.position.set(Q.M8C.randFloat(-300,200),Q.M8C.randFloat(5,50),Q.M8C.randFloat(5,50)),i.rotation.set(Q.M8C.randFloat(0,.05),Q.M8C.randFloat(0,.05),Q.M8C.randFloat(0,.05)),i.scale.set(r,r,r),i.speedValue=Q.M8C.randFloat(-.25,.7),G.add(i)}H.add(G)}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=new Q.PMe(e,t,a);o.position.set(n,r,i),o.penumbra=1,o.castShadow=!0,o.shadow.mapSize.width=2560,o.shadow.mapSize.height=2560,o.shadow.camera.near=.5,o.shadow.camera.far=500,o.shadow.focus=1,H.add(o)}(16777215,2,500,0,10,5),window.addEventListener("mousemove",Z),_()}}),$=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.getElementById(C);e?t.classList.remove(E):t.classList.add(E)},ee=function(){$(0===window.scrollY)};function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ae=function(e){var t,a,r=e.children,i=K.isWebGL2Available()||K.isWebGLAvailable(),o=n.useContext(I),l=(t=(0,n.useState)(B(!1)),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return i}}(t,a)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?te(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],s=l[1],u=function(){setTimeout((function(){s(B(!0)),o.setShow(!1)}),500)};return(0,n.useLayoutEffect)((function(){o.setShow(!0),$(),window.addEventListener("scroll",ee),i?(X.init(),u()):u()}),[]),n.createElement("div",{className:c},r)};function ne(){return n.createElement(W,null,n.createElement(u,null,n.createElement(P,null,n.createElement(ae,null,n.createElement(T,null),n.createElement(A,null)))))}r.render(n.createElement(ne,null),document.getElementById("app"))}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,r,i)=>{if(!a){var o=1/0;for(u=0;u<e.length;u++){for(var[a,r,i]=e[u],l=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(l=!1,i<o&&(o=i));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[o,l,c]=a,s=0;for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var u=c(n);for(t&&t(a);s<o.length;s++)i=o[s],n.o(e,i)&&e[i]&&e[i][0](),e[o[s]]=0;return n.O(u)},a=self.webpackChunkportfolio=self.webpackChunkportfolio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[736],(()=>n(96)));r=n.O(r)})();