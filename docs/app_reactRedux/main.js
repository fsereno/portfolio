(()=>{"use strict";var e,t={931:(e,t,n)=>{var r=n(540),o=n(338);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function l(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var u=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return void 0!==e?e.substring(0,t).split(" ").join(""):""}}],null&&i(e.prototype,null),t&&i(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),c=n(107),f=n(376),s=n(616),d=n(105),p=n(479);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var b=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"isUniqueInArray",value:function(e,t){var n;return null===(n=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===n||n}}],null&&m(e.prototype,null),t&&m(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function g(e){var t,n,o=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];return r.createElement(r.Fragment,null,r.createElement(f.A,{noValidate:!0,validated:a,onSubmit:function(t){t.preventDefault();var n=t.currentTarget,r=new FormData(n).get("itemInput"),o=!b.isUniqueInArray(e.items,r);!1===n.checkValidity()||o?(i(!0),t.stopPropagation()):(i(!1),e.handleSubmit(t))}},r.createElement(p.A,null,r.createElement(f.A.Group,{as:d.A,className:"mb-3"},r.createElement(f.A.Label,null,"Item to add"),r.createElement(f.A.Control,{name:"itemInput",id:"itemInput",type:"text",placeholder:"Add to list...",required:!0,onChange:e.onChange,value:e.value}),r.createElement(f.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),r.createElement(p.A,null,r.createElement(s.A,{"aria-label":"Basic example",as:d.A},r.createElement(c.A,{id:"submit",variant:"dark",type:"submit"},"Add item"),r.createElement(c.A,{id:"undo",variant:"danger",type:"button",onClick:e.handleUndo},"Undo"),r.createElement(c.A,{id:"redo",variant:"dark",type:"button",onClick:e.handleRedo},"Redo")))))}var S=n(403),E=n(700);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function j(e){var t=function(e,t){if("object"!=O(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==O(t)?t:t+""}function A(e,t,n){return t=P(t),function(e,t){if(t&&("object"==O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,k()?Reflect.construct(t,n||[],P(e).constructor):t.apply(e,n))}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}var D=(0,S.VP)("ADD_TODO"),T=(0,S.VP)("REMOVE_TODO"),I=(0,S.vy)([],{ADD_TODO:function(e,t){e.push(t.payload)},REMOVE_TODO:function(e,t){e.splice(t.payload,1)}}),R=(0,E.Ay)(I),_=(0,S.U1)({reducer:R}),x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=A(this,t,[e])).state={value:"",counterLimit:10,counter:0},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handleDelete=n.handleDelete.bind(n),n.handleUndo=n.handleUndo.bind(n),n.handleRedo=n.handleRedo.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(t,e),n=t,(o=[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.counter<this.state.counterLimit){var t=D();t=D(this.state.value),_.dispatch(t),this.setState({value:"",counter:_.getState().present.length})}}},{key:"handleDelete",value:function(e){e.preventDefault();var t=Number(e.target.dataset.index),n=T();n=T(t),_.dispatch(n),this.setState({counter:_.getState().present.length})}},{key:"handleUndo",value:function(){_.dispatch(E.IE.undo()),this.setState({counter:_.getState().present.length})}},{key:"handleRedo",value:function(){_.dispatch(E.IE.redo()),this.setState({counter:_.getState().present.length})}},{key:"render",value:function(){var e=this;return r.createElement("div",null,r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-4"},r.createElement("h3",null,"Result:"),r.createElement("ul",{id:"toDoList",className:"list-group"},_.getState().present.map((function(t,n){var o=u.generate(t);return r.createElement("li",{key:o,className:"list-group-item d-flex justify-content-between align-items-center"},t," ",r.createElement("a",{href:"#",className:"badge bg-danger delete","data-index":n,onClick:e.handleDelete},"Delete"))}))))),r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-12"},r.createElement("p",null,"Items: ",this.state.counter),r.createElement("p",null,"Item to add: ",this.state.value))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6"},r.createElement(g,{value:this.state.value,onChange:this.handleChange,handleSubmit:this.handleSubmit,items:_.getState().present,handleUndo:this.handleUndo,handleRedo:this.handleRedo}))))}}])&&w(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r.Component);o.createRoot(document.getElementById("result")).render(r.createElement(x,null))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,o,a]=e[f],l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,u]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var f=u(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(f)},n=self.webpackChunkportfolio=self.webpackChunkportfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[121],(()=>r(931)));o=r.O(o)})();