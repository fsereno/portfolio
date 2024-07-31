(()=>{"use strict";var e,t={421:(e,t,r)=>{var n=r(540),o=r(338);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var u=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return void 0!==e?e.substring(0,t).split(" ").join(""):""}}],null&&a(e.prototype,null),t&&a(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),c=r(107),s=r(376),f=r(479),m=r(105);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var b=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},t=[{key:"isUniqueInArray",value:function(e,t){var r;return null===(r=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===r||r}}],null&&p(e.prototype,null),t&&p(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function h(e){var t,r,o=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];return n.createElement(n.Fragment,null,n.createElement(s.A,{noValidate:!0,validated:i,onSubmit:function(t){t.preventDefault();var r=t.currentTarget,n=new FormData(r).get("itemInput"),o=!b.isUniqueInArray(e.items,n);!1===r.checkValidity()||o?(a(!0),t.stopPropagation()):(a(!1),e.handleSubmit(t))}},n.createElement(f.A,null,n.createElement(s.A.Group,{as:m.A,className:"mb-3"},n.createElement(s.A.Label,null,"Item to add"),n.createElement(s.A.Control,{name:"itemInput",id:"itemInput",type:"text",placeholder:"Add to list...",required:!0,onChange:e.onChange,value:e.value}),n.createElement(s.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(f.A,null,n.createElement(s.A.Group,{as:m.A,className:"mb-3"},n.createElement(c.A,{id:"submit",variant:"dark",type:"submit",className:"radius-right"},"Add item")))))}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function w(e){var t=function(e){if("object"!=g(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}function E(e,t,r){return t=j(t),function(e,t){if(t&&("object"==g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(t,r||[],j(e).constructor):t.apply(e,r))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}var A=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=E(this,t,[e])).state={value:e.value||"",list:e.list||[],counterLimit:e.counterLimit||10,counter:e.counter||0,selectedIndex:e.selectedIndex||0},r.handleChange=r.handleChange.bind(r),r.handleSubmit=r.handleSubmit.bind(r),r.handleDelete=r.handleDelete.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(t,e),r=t,(o=[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.counter<this.state.counterLimit){var t=this.state.list.concat(this.state.value);this.setState({list:t,value:"",counter:this.state.counter+1})}}},{key:"handleDelete",value:function(e){e.preventDefault();var t=Number(e.target.dataset.index);this.state.list.splice(t,1),this.setState({list:this.state.list,counter:this.state.counter-1})}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-4"},n.createElement("ul",{id:"toDoList",className:"list-group"},this.state.list.map((function(t,r){var o=u.generate(t);return n.createElement("li",{key:o,className:"list-group-item d-flex justify-content-between align-items-center"},t," ",n.createElement("a",{href:"#",className:"badge bg-danger delete","data-index":r,onClick:e.handleDelete},"Delete"))}))))),n.createElement("div",{className:"row splitter"},n.createElement("div",{className:"col-lg-12"},n.createElement("p",null,"Items: ",this.state.counter))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-6"},n.createElement(h,{value:this.state.value,onChange:this.handleChange,handleSubmit:this.handleSubmit,items:this.state.list}))))}}])&&S(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(n.Component);o.createRoot(document.getElementById("result")).render(n.createElement(A,null))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],l=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,u]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[121],(()=>n(421)));o=n.O(o)})();