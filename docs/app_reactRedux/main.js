(()=>{"use strict";var e,t={348:(e,t,n)=>{var r=n(294),a=n(935);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,n=void 0!==e?e.substring(0,t).split(" ").join(""):"";return n}}],null&&o(t.prototype,null),n&&o(t,n),e}(),i=n(754),u=n(35),c=n(86),s=n(555);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"isUniqueInArray",value:function(e,t){var n;return null===(n=0===(null==e?void 0:e.filter((function(e){return e===t})).length))||void 0===n||n}}],null&&f(t.prototype,null),n&&f(t,n),e}();function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){var t,n,a=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1];return r.createElement(r.Fragment,null,r.createElement(u.Z,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault();var n=t.currentTarget,r=new FormData(n).get("itemInput"),a=!d.isUniqueInArray(e.items,r);!1===n.checkValidity()||a?(l(!0),t.stopPropagation()):(l(!1),e.handleSubmit(t))}},r.createElement(u.Z.Row,null,r.createElement(u.Z.Group,{as:s.Z},r.createElement(u.Z.Label,null,"Item to add"),r.createElement(u.Z.Control,{name:"itemInput",id:"itemInput",type:"text",placeholder:"Add to list...",required:!0,onChange:e.onChange,value:e.value}),r.createElement(u.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),r.createElement(u.Z.Row,null,r.createElement(c.Z,{"aria-label":"Basic example"},r.createElement(i.Z,{id:"submit",variant:"dark",type:"submit"},"Add item"),r.createElement(i.Z,{id:"undo",variant:"danger",type:"button",onClick:e.handleUndo},"Undo"),r.createElement(i.Z,{id:"redo",variant:"dark",type:"button",onClick:e.handleRedo},"Redo")))))}var v=n(287),m=n(90);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=(0,v.PH)("ADD_TODO"),k=(0,v.PH)("REMOVE_TODO"),C=(0,v.Lq)([],{ADD_TODO:function(e,t){e.push(t.payload)},REMOVE_TODO:function(e,t){e.splice(t.payload,1)}}),j=(0,m.ZP)(C),D=(0,v.xC)({reducer:j}),R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,a,o,i=(a=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(a);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).state={value:"",counterLimit:10,counter:0},t.handleChange=t.handleChange.bind(O(t)),t.handleSubmit=t.handleSubmit.bind(O(t)),t.handleDelete=t.handleDelete.bind(O(t)),t.handleUndo=t.handleUndo.bind(O(t)),t.handleRedo=t.handleRedo.bind(O(t)),t}return t=u,(n=[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.counter<this.state.counterLimit){var t=S();t=S(this.state.value),D.dispatch(t),this.setState({value:"",counter:D.getState().present.length})}}},{key:"handleDelete",value:function(e){e.preventDefault();var t=Number(e.target.dataset.index),n=k();n=k(t),D.dispatch(n),this.setState({counter:D.getState().present.length})}},{key:"handleUndo",value:function(){D.dispatch(m.zF.undo()),this.setState({counter:D.getState().present.length})}},{key:"handleRedo",value:function(){D.dispatch(m.zF.redo()),this.setState({counter:D.getState().present.length})}},{key:"render",value:function(){var e=this;return r.createElement("div",null,r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-4"},r.createElement("h3",null,"Result:"),r.createElement("ul",{id:"toDoList",className:"list-group"},D.getState().present.map((function(t,n){var a=l.generate(t);return r.createElement("li",{key:a,className:"list-group-item d-flex justify-content-between align-items-center"},t," ",r.createElement("a",{href:"#",className:"badge badge-danger delete","data-index":n,onClick:e.handleDelete},"Delete"))}))))),r.createElement("div",{className:"row splitter"},r.createElement("div",{className:"col-lg-12"},r.createElement("p",null,"Items: ",this.state.counter),r.createElement("p",null,"Item to add: ",this.state.value))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6"},r.createElement(p,{value:this.state.value,onChange:this.handleChange,handleSubmit:this.handleSubmit,items:D.getState().present,handleUndo:this.handleUndo,handleRedo:this.handleRedo}))))}}])&&b(t.prototype,n),u}(r.Component);a.render(r.createElement(R,null),document.getElementById("result"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,a,o]=e[s],i=!0,u=0;u<n.length;u++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(i=!1,o<l&&(l=o));if(i){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,i,u]=n,c=0;for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var s=u(r);for(t&&t(n);c<l.length;c++)o=l[c],r.o(e,o)&&e[o]&&e[o][0](),e[l[c]]=0;return r.O(s)},n=self.webpackChunkportfolio=self.webpackChunkportfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(348)));a=r.O(a)})();