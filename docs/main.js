(()=>{"use strict";var e,t,n,a={613:(e,t,n)=>{n(666);var a=n(294),r=n(935);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"sorter",value:function(e,t){var n=e.order||Number.MAX_VALUE,a=t.order||Number.MAX_VALUE;return n<a?-1:n>a?1:0}}],null&&i(t.prototype,null),n&&i(t,n),e}();const c=JSON.parse('{"host":"localhost","apiRoot":"/backend/","deploymentTargetCookie":"fs_portfolio_deployment_target","deploymentTargets":{"cloud":"cloud","static":"static"},"dockerHost":"nginx","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","gitHubIssuesUrl":"https://github.com/fsereno/portfolio/issues","title":"Portfolio","author":"Fabio Sereno","role":"Software Engineer","description":"Portfolio By Fabio Sereno - Software Engineer","thumbnail":"PortfolioThumbnail.png","labels":{"JavaScript":"warning","NodeJS":"success","C#":"info","Cloud":"danger"},"quickSearch":["React",".NET","Cloud"],"grecaptcha":{"active":false,"key":"","endpoints":{"base":"","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Software Engineer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"Docker,JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"Docker,JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Tic-Tac-Toe","subHeading":"A Tic-Tac-Toe game built using React","description":"Demonstrating React state management with immutability, allowing for \'time travel\' or \'versioned\' data.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"Unique Data Entry Application","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"uniqueDataEntry","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"canItemBeAddedAsync":"uniqueDataEntry/api/canItemBeAddedAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false},{"name":"Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"dataStructures","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"addQueueItem":"dataStructures/api/addQueueItemAsync","removeQueueItem":"dataStructures/api/removeQueueItemAsync","addStackItem":"dataStructures/api/addStackItemAsync","removeStackItem":"dataStructures/api/removeStackItemAsync"},"labels":["JavaScript","C#","Cloud"],"featured":false},{"name":"Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"entitySort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sortSalaryAsc":"entitySort/api/sort/salary/asc","sortSalaryDesc":"entitySort/api/sort/salary/desc"},"labels":["JavaScript","C#","Cloud"],"featured":false},{"name":"Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"stringSort","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"sort":"stringSort/api/sort"},"labels":["JavaScript","C#","Cloud"],"featured":false},{"name":"Coffee Machine","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET","description":".NET Web API with a React UI.","searchTerms":"Docker,Cloud,C#,dotnet,.net,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"coffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"run":"coffeeMachine/api/run","runAsync":"coffeeMachine/api/runasync"},"labels":["JavaScript","C#","Cloud"],"order":3},{"name":"AFrame React Example","subHeading":"An example AFrame application with React, allowing for user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"Docker,JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":["JavaScript"]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"Docker,JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":["JavaScript"]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":["JavaScript"],"order":2,"featured":false},{"name":"NodeJS, To-Do List SPA","subHeading":"A simple To-Do list application, with user registration and authentication","description":"NodeJS Web API with a React UI.","searchTerms":"Docker,NodeJS,Express,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"nodeToDo","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":["JavaScript","Cloud","NodeJS"],"order":1,"featured":false,"endpoints":{"base":"nodeToDo"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]},{"name":"Test React Template","subHeading":"Subheading","description":"Description","searchTerms":"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"new_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":["JavaScript"]}]}');function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"get",value:function(e){var t=e?c.applications.filter((function(t){return t.folder.toLowerCase()===e.toLowerCase()})):[];return t.length>0?t[0]:c}}],null&&l(t.prototype,null),n&&l(t,n),e}(),u=a.createContext();function d(e){var t=e.children,n=e.app,r={config:s.get(),appConfig:s.get(n)};return a.createElement(u.Provider,{value:r},t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=a.createContext();function f(e){var t=e.children,n=a.useContext(u);n.config.applications.sort(o.sorter);var r,i,c=(r=(0,a.useState)(n.config.applications),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(r,i)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=c[0],s=c[1],d={unmodified:n.config.applications,applications:l,setApplications:s};return a.createElement(m.Provider,{value:d},t)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"searchCriteria",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.length>0?e.filter((function(e){return t.split(" ").filter((function(e){return e})).filter((function(t){return-1!==e.toUpperCase().indexOf(t.toUpperCase())})).length>0})):[],a=n.length>0;return a}}],null&&v(t.prototype,null),n&&v(t,n),e}();function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function y(e){var t=e.searchBarId,n=e.searchInputId,r=e.cancelBtnId,i=e.openFilterBtnId,o=e.filterContainerId,c=e.showQuickFilters,l=void 0===c||c,s=a.useContext(u),d=a.useContext(m),p=b((0,a.useState)(!1),2),f=p[0],v=p[1],g=b((0,a.useState)(""),2),y=g[0],S=g[1],w=l?"":"no-quick-filters",E=f||l?"":"no-show-clear",C=function(){v(!1),S("");var e=d.applications.map((function(e){return e.active=!!e.include,e}));d.setApplications(e)},A=function(e){var t=e.target.value;if(h.searchDoesNotExist(y,t)){var n=h.combineSearchTerms(y,t);S(n),k(n)}else{var a=h.removeSearchTerm(y,t);S(a),k(a)}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.length>0){var t=d.applications.map((function(t){var n=[t.name,t.subHeading,t.description,t.searchTerms];return t.active=!!t.include&&h.searchCriteria(n,e),t}));v(!0),d.setApplications(t)}else C()};return a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},a.createElement("div",{id:t,className:"input-group mb-3 shadow searchBar"},a.createElement("div",{className:"input-group-prepend"},a.createElement("span",{className:"input-group-text"},a.createElement("i",{className:"fa fa-search"}))),a.createElement("input",{type:"text",className:"form-control searchInput ".concat(E),placeholder:"Search applications...",id:n,value:y,onChange:function(e){var t=e.target.value;S(t),k(t)}}),f&&a.createElement("div",{className:"input-group-append cancelBtn",id:r},a.createElement("button",{className:"btn ".concat(w),type:"button",onClick:C},a.createElement("span",{className:"lr"},a.createElement("span",{className:"rl"})))),l&&a.createElement("div",{className:"input-group-append"},a.createElement("button",{id:i,className:"btn btn-dark openFilterBtn",type:"button","data-toggle":"collapse","data-target":"#".concat(o),"aria-expanded":"false","aria-controls":o},a.createElement("i",{className:"fa fa-filter"})))),l&&a.createElement("div",{className:"collapse filterContainer",id:o},a.createElement("div",{className:"pb-3"},a.createElement("label",{className:"d-flex flex-row justify-content-center"},"Quick search"),a.createElement("div",{className:"quick-search-filters d-flex justify-content-center"},s.config.quickSearch.map((function(e){return a.createElement("button",{key:e,type:"button",className:"btn btn-outline-dark ml-2 p-0",value:e,onClick:A},e)}))))))}h.searchDoesNotExist=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return-1===(e||"").toUpperCase().indexOf((t||"").toUpperCase())},h.combineSearchTerms=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="".concat(e," ").concat(t);return n.trim()},h.removeSearchTerm=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split(t),a=n.map((function(e){return e.trim()}));return a.join(" ").trim()};var S=n(6),w=n(51),E=n(555),C=n(977),A=a.memo((function(e){var t=e.application,n=e.condition,r=a.useContext(u);return a.createElement(a.Fragment,null,n&&a.createElement(S.Z,{className:"grid-item",key:"".concat(t.name)},a.createElement(S.Z.Body,null,a.createElement(S.Z.Title,null,t.name),a.createElement(S.Z.Text,null,t.subHeading),a.createElement(S.Z.Link,{className:"btn btn-outline-dark btn-sm card-link",href:"".concat(r.config.prefix).concat(t.folder,"/index.html")},"View application"),a.createElement(w.Z,{className:"mt-3"},a.createElement(E.Z,null,t.labels?t.labels.map((function(e){var t=r.config.labels[e];return a.createElement(C.Z,{key:e,variant:t,className:"text-light mr-2"},e)})):null)))))}),(function(e,t){return e.condition===t.condition}));function k(){var e=a.useContext(m),t=e.applications.filter((function(e){return e.featured}))||[],n=e.applications.filter((function(e){return!e.featured}))||[];return a.createElement(a.Fragment,null,(t.length>0||n.length>0)&&a.createElement("div",{id:"applicationsContainer"},a.createElement("div",{className:"card-columns"},t.map((function(e){return a.createElement(A,{key:"featured_".concat(e.folder),condition:e.active&&e.include,application:e})}))),a.createElement("div",{className:"card-columns"},n.map((function(e){return a.createElement(A,{key:e.folder,condition:e.active&&e.include,application:e})})))))}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t="fade-element",n=e?"in":"out";return"".concat(t," ").concat(n)};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function R(e){var t,n,r=e.threshold,i=void 0===r?0:r,o=(t=(0,a.useState)(T(!1)),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],l=o[1];(0,a.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[c]);var s=function(){var e=document.documentElement.scrollTop;l(T(e>=i))};return a.createElement(a.Fragment,null,a.createElement("button",{className:"btn btn-dark fade-element ".concat(c),id:"topScrollBtn",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},a.createElement("i",{className:"fa fa-3x fa-angle-up"})))}function I(){var e=a.useContext(u);return a.createElement("div",{className:"container-fluid pt-4 bg-white",id:"contentContainer"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-12"},a.createElement("h5",null,e.config.title),a.createElement("p",{className:"text-muted"},e.config.author," - ",e.config.role),a.createElement("hr",null))),a.createElement(y,{searchBarId:"searchBar",searchInputId:"searchInput",cancelBtnId:"cancelBtn",openFilterBtnId:"openFilterBtn",filterContainerId:"filterContainer"}),a.createElement(k,null),a.createElement(R,{threshold:270}))}var N="scroll-down",P="navBar";function D(){var e=a.useContext(u);return a.createElement("div",{className:"bg-dark",id:"introContainer"},a.createElement("div",{id:"introContent"},a.createElement("div",{id:"canvasContainer",style:{width:"100vw",height:"100vh"}}),a.createElement("div",{id:"introContentInner"},a.createElement("div",{id:"introImage",className:"text-center element"},a.createElement("img",{className:"img-fluid",src:"images/FSLogo.png",alt:"Logo"})),a.createElement("div",{id:"introHeadings",className:"text-center element"},a.createElement("h1",{className:"display-4 mb-0"},e.config.author),a.createElement("h4",{className:"display-4 sub-heading lead text-white"},e.config.role)),a.createElement("div",{id:"btnContainer",className:"text-center element pt-2"},a.createElement("button",{type:"button",className:"btn btn-outline-light",onClick:function(e){e.preventDefault();var t=document.getElementById("contentContainer");window.scrollTo({top:t.offsetTop-50,left:0,behavior:"smooth"})}},"View Portfolio")))))}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var W=a.createContext();function B(e){var t=e.show?"":"d-none";return a.createElement("div",null,a.createElement("div",{id:"spinner",className:"".concat(t," spinner-container overlay")}),a.createElement("div",{id:"loader",className:"".concat(t," item loading")},a.createElement("div",{className:"spinner"},a.createElement("div",{className:"circle circle-1"},a.createElement("div",{className:"circle-inner"})),a.createElement("div",{className:"circle circle-2"},a.createElement("div",{className:"circle-inner"})))))}function L(e){var t,n,r=e.children,i=(t=(0,a.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],c=i[1],l={show:o,setShow:c,showSpinner:function(){return c(!0)},hideSpinner:function(){return c(!1)}};return a.createElement(W.Provider,{value:l},r,a.createElement(B,{show:l.show}))}function U(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var H=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"isWebGLAvailable",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}},{key:"isWebGL2Available",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}}}],null&&U(t.prototype,null),n&&U(t,n),e}(),O=n(365);function j(e,t,n,a,r,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){j(i,a,r,o,c,"next",e)}function c(e){j(i,a,r,o,c,"throw",e)}o(void 0)}))}}var F=J(regeneratorRuntime.mark((function e(){var t,a,r,i,o,c,l,s,u,d,p,m,f,v,h,b,g,y,S,w,E,C,A,k,T,x,R,I,N,P,D;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,477));case 2:return t=e.sent,e.next=5,n.e(736).then(n.t.bind(n,125,23));case 5:return a=e.sent,r=-Math.PI/2,i="canvasContainer",h=function(){(u=new a.World).gravity.set(0,-10,0),u.broadphase=new a.NaiveBroadphase,u.solver.iterations=10},b=function(){o=document.getElementById(i),c=new t.Scene,l=new t.PerspectiveCamera(75,o.offsetWidth/o.offsetHeight,1,500),p=new t.Vector3,d=new t.Raycaster},g=function(){(m=new O.z(l,s.domElement)).autoRotate=!0,m.autoRotateSpeed=.5,m.enableDamping=!0,m.maxDistance=30,m.minDistance=7,m.maxPolarAngle=1.4,m.update()},y=function(){l.position.x=0,l.position.y=3,l.position.z=12},S=function(){var e=document.getElementById(i);(s=new t.WebGLRenderer({antialias:!0,alpha:!0})).setSize(e.offsetWidth,e.offsetHeight),s.shadowMap.enabled=!0,s.shadowMap.type=t.PCFSoftShadowMap,e.appendChild(s.domElement)},w=function(){window.addEventListener("resize",(function(){var e=document.getElementById(i);s.setSize(e.offsetWidth,e.offsetHeight),l.aspect=e.offsetWidth/e.offsetHeight,l.updateProjectionMatrix()}))},E=function(){for(var e=1e-6*Date.now(),n=0;n<c.children.length;n++){var a=c.children[n];a instanceof t.Points&&(a.rotation.y=e*(n<4?n+1:-(n+1)))}},C=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=[],r=0;r<e;r++){var i=t.MathUtils.randFloatSpread(2e3),o=t.MathUtils.randFloatSpread(2e3),l=t.MathUtils.randFloatSpread(3e3);a.push(i,o,l)}var s=new t.BufferGeometry;s.setAttribute("position",new t.Float32BufferAttribute(a,3));for(var u=new t.PointsMaterial({size:.5}),d=0;d<n;d++){var p=new t.Points(s,u);p.rotation.x=6*Math.random(),p.rotation.y=6*Math.random(),p.rotation.z=6*Math.random(),c.add(p)}},A=function(e){var n=.3*Math.random()+1,r=Math.random()-.5*Math.random()+1,i=new t.BoxGeometry(r,r,r),o=new t.MeshLambertMaterial({color:10066329,map:e}),c=new t.Mesh(i,o);c.position.set(n,15,0),c.updatePhysics=!0,c.castShadow=!0,c.receiveShadow=!0;var l=new a.Box(new a.Vec3(r/2,r/2,r/2)),s=new a.Material,u=new a.Body({mass:5,material:s});return u.addShape(l),u.position.set(n,15,0),u.linearDamping=.9,u.updatePhysics=!0,u.isCube=!0,u.angularVelocity.set(1,.5,1),{mesh:c,body:u}},k=function(){setInterval((function(){if(u.bodies.filter((function(e){return e.isCube})).length<=20){var e=A(v);u.addBody(e.body),c.add(e.mesh)}}),1e3)},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16777215,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=new t.SpotLight(e,n,a);l.position.set(r,i,o),l.penumbra=1,l.castShadow=!0,l.shadow.mapSize.width=2560,l.shadow.mapSize.height=2560,l.shadow.camera.near=.5,l.shadow.camera.far=500,l.shadow.focus=1,c.add(l)},x=function(){u.step(.016666666666666666);var e=u.bodies.filter((function(e){return e.updatePhysics})),t=c.children.filter((function(e){return e.updatePhysics}));if(e.length===t.length)for(var n=0;n<t.length;n++){var a=t[n],r=e[n];a.position.copy(r.position),a.quaternion.copy(r.quaternion)}},R=function(){s.setAnimationLoop((function(){E(),x(),m.update(),s.render(c,l)}))},I=function(){var e=new t.PlaneBufferGeometry(50,50,1,1),n=new t.MeshPhongMaterial({color:10066329,shininess:150,map:f}),i=new t.Mesh(e,n);i.rotation.x=r,i.receiveShadow=!0,c.add(i);var o=new a.Plane,l=new a.Material,s=new a.Body({mass:0,material:l});s.quaternion.setFromAxisAngle(new a.Vec3(1,0,0),r),s.addShape(o),u.add(s)},N=function(e){e.preventDefault(),p.x=e.clientX/window.innerWidth*2-1,p.y=-e.clientY/window.innerHeight*2+1,p.z=.5,d.setFromCamera(p,l);var t=d.intersectObjects(c.children,!0);if(t.length>0){var n=t[0].object;if(n.updatePhysics){var a=u.bodies.filter((function(e){return e.position.x===n.position.x&&e.position.y===n.position.y&&e.position.z===n.position.z}));if(a.length>0){var r=a[0],i=10*p.x,o=10*p.y;r.angularVelocity.set(i,o,0)}}}},P=function(){window.addEventListener("mousemove",N)},D=function(){var e=J(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new t.TextureLoader,e.next=3,n.loadAsync("images/PaintedWood005_2K_Displacement.jpg");case 3:return f=e.sent,e.next=6,n.loadAsync("images/Asphalt011_1K_Roughness.jpg");case 6:v=e.sent,f.wrapS=t.RepeatWrapping,f.wrapT=t.RepeatWrapping,f.repeat.set(3,2),b(),h(),I(),y(),S(),w(),k(),C(2e4,10),T(16777215,2,500,0,10,5),P(),g(),R();case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",{init:D});case 29:case"end":return e.stop()}}),e)})))(),_=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.getElementById(P);e?t.classList.remove(N):t.classList.add(N)},G=function(){_(0===window.scrollY)};function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var q=function(e){var t,n,r=e.children,i=H.isWebGL2Available()||H.isWebGLAvailable(),o=a.useContext(W),c=(t=(0,a.useState)(T(!1)),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=c[0],s=c[1],u=function(){setTimeout((function(){s(T(!0)),o.setShow(!1)}),500)};return(0,a.useLayoutEffect)((function(){o.setShow(!0),_(),window.addEventListener("scroll",G),i?F.then((function(e){e.init().then((function(){return u()}))})):u()}),[]),a.createElement("div",{className:l},r)};function z(){return a.createElement(d,null,a.createElement(f,null,a.createElement(L,null,a.createElement(q,null,a.createElement(D,null),a.createElement(I,null)))))}r.render(a.createElement(z,null),document.getElementById("app"))}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return a[e](n,n.exports,i),n.exports}i.m=a,e=[],i.O=(t,n,a,r)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,r]=e[u],c=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(c=!1,r<o&&(o=r));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);i.r(r);var o={};t=t||[null,n({}),n([]),n(n)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(r,o),r},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.e=()=>Promise.resolve(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[o,c,l]=n,s=0;for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(l)var u=l(i);for(t&&t(n);s<o.length;s++)r=o[s],i.o(e,r)&&e[r]&&e[r][0](),e[o[s]]=0;return i.O(u)},n=self.webpackChunkportfolio=self.webpackChunkportfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[736],(()=>i(613)));o=i.O(o)})();