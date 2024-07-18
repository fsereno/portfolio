(()=>{"use strict";var e,t,r,n={1726:(e,t,r)=>{var n=r(6540),a=r(5338),o=r(4976),l=r(7767),i=r(9716),c=r(2943),u=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(t){return t.dir===e}))},s=r(6052);function m(e){return n.createElement(s.A,{pill:!0,bg:"dark"},e.count)}var f="select",d="deselectThread",y="replyMessage",b="newMessage",p="reply",v="submit",h="read",g="resetMode",E="/home",j="/inbox",O="/outbox",A="/new",w="me@portfolio.co.uk",S=768,x=10,C=n.createContext(),P=n.createContext(),k=n.createContext(),N=n.createContext();function T(){var e=n.useContext(C),t=u(e.state.messages,j).length,r=u(e.state.messages,O).length;return n.createElement(n.Fragment,null,n.createElement("p",{id:"inboxCounter"},"You have ",n.createElement(m,{count:t})," message(s) in your inbox"),n.createElement("p",{id:"outboxCounter"},"You have ",n.createElement(m,{count:r})," message(s) in your outbox"))}var I=r(3048),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="";return t&&e&&(r=t===w?e:t),r};function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=D(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){switch(t.type){case f:return{selectedThread:t.thread,selected:_(_({},e.selected),{},{id:t.item.id,to:t.item.to,from:t.item.from,subject:t.item.subject,time:t.item.time}),mode:h};case d:return _(_({},e),{},{selected:{id:-1,to:"",from:"",subject:"",body:""},selectedThread:[],mode:""});case y:return _(_({},e),{},{mode:p,selected:_(_({},e.selected),{},{to:M(t.selected.from,t.selected.to),from:w,subject:t.selected.subject})});case b:return _(_({},e),{},{selectedThread:[],mode:b});case g:return _(_({},e),{},{mode:""});default:throw new Error}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function R(e){var t,r,a=e.children,o=(t=(0,n.useReducer)(q,{selected:{id:-1,to:"",from:w,subject:"",body:"",time:0},selectedThread:[],mode:h,showModal:!1}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l={state:o[0],dispatch:o[1]};return n.createElement(P.Provider,{value:l},a)}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function $(e){var t,r,a=e.children,o=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l={state:{show:o[0]},setShow:o[1]};return n.createElement(k.Provider,{value:l},a)}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:"",to:"",subject:"",dir:""},r=[],n=function(e){var r,n,a=(r=e.thread.split("_"),n=3,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(r,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1],i=a[2];return(o===t.from||o===t.to)&&(l===t.to||l===t.from)&&i===t.subject&&e.time<=t.time};return""!==t.from&&""!==t.to&&""!==t.subject&&(r=e.filter((function(e){return t.dir===j?e.dir===j&&n(e):n(e)}))),r};function V(e){var t=e.children,r=n.useContext(C),a=n.useContext(P),o=n.useContext(k),l=(0,n.useCallback)((function(e){var t=window.innerWidth<S;if(e){var n=G(r.state.messages,e);a.dispatch({type:f,thread:n,item:e})}o.setShow(t)}),[r.state.messages]),i=(0,n.useMemo)((function(){return{selectListItemHandler:l}}),[l]);return n.createElement(N.Provider,{value:i},t)}function Y(e){var t=e.children;return n.createElement(R,null,n.createElement($,null,n.createElement(V,null,n.createElement(I.A,{fluid:!0,className:"py-4"},t))))}function W(e){var t=e.title,r=e.content;return n.createElement(n.Fragment,null,n.createElement("h1",null,t),n.createElement("p",null,r))}function z(){return n.createElement(Y,null,n.createElement(W,{title:"Home",content:"A simple email client application. Send a new message or reply to an existing one. Context allows for state to be passed around the app."}),n.createElement(T,null))}var J=r(4479),K=r(1105),Q=n.memo((function(e){return n.createElement("small",{id:"ageText"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 1===e?"".concat(e," day ago"):e>1?"".concat(e," days ago"):"today"}(e.age))})),X=n.memo((function(e){var t=e.item,r=e.active,a=n.useContext(N);return n.createElement("a",{href:"#",id:"id_".concat(t.id),onClick:function(e){e.preventDefault(),a.selectListItemHandler(t)},className:"list-group-item list-group-item-action ".concat(r?"active":""),"aria-current":"true"},n.createElement("div",{className:"d-flex w-100 justify-content-between"},n.createElement("p",{className:"mb-1"},t.from),n.createElement(Q,{age:t.age})),n.createElement("p",{className:"mb-1"},t.subject),n.createElement("small",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:75,r=e;return e.length>=t&&(r=e.substring(0,t)),r}(t.body),"..."))}),(function(e,t){return e.active===t.active})),Z=function(e,t){return"".concat(e.id,"_").concat(e.thread,"_").concat(t)};function ee(e,t){if(e){if("string"==typeof e)return te(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var re=function(e){var t,r,a=e.dir,o=e.limit,l=n.useContext(C),i=n.useContext(P),c=(t=(0,n.useState)([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,r)||ee(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],m=c[1],f=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,a=function(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ee(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),o=u(t,r),l=0,i=e.length;l<n&&i<o.length;)a.push(o[i]),l++,i++;return a};return(0,n.useLayoutEffect)((function(){var e=f([],l.state.messages,a);m(e)}),[l.state.messages]),n.createElement(n.Fragment,null,s.length>0&&n.createElement(n.Fragment,null,n.createElement("div",{id:"browserPane",className:"list-group"},s.map((function(e,t){var r=Z(e,t);return n.createElement(X,{index:t,item:e,key:r,active:i.state.selected.id===e.id})}))),s.length!==l.state.messages.filter((function(e){return e.dir===a})).length&&n.createElement("button",{className:"btn btn-dark col-4 mt-5 offset-4",onClick:function(){var e=f(s,l.state.messages,a,o);e.length!==s.length&&m(e)}},"Load more")),0===s.length&&n.createElement("p",null,"You have no messages"))};function ne(){var e=n.useContext(P);return n.createElement("div",{id:"readingPane"},e.state.selectedThread.map((function(e,t){var r=Z(e,t),a=window.innerWidth>S||window.innerWidth<S&&t>0;return n.createElement("div",{key:r},t>0&&n.createElement("hr",null),n.createElement(Q,{age:e.age}),n.createElement("p",{className:"mb-0"},n.createElement("strong",null,"From:")," ",n.createElement("span",{id:"fromText"},e.from)),n.createElement("p",{className:"mb-0"},n.createElement("strong",null,"To:")," ",n.createElement("span",{id:"toText"},e.to)),a&&n.createElement("p",{className:"mb-0"},n.createElement("strong",null,"Subject:")," ",n.createElement("span",{id:"subjectText"},e.subject)),n.createElement("div",{id:"bodyText",className:"mt-3"},e.body))})))}var ae=r(5615),oe=r(1376);function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||fe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=le(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=le(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==le(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function me(e){return function(e){if(Array.isArray(e))return de(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){if(e){if("string"==typeof e)return de(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?de(e,t):void 0}}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var ye="enqueueToast",be="dequeueToast",pe="removeToastAtIndex",ve=n.createContext();function he(e,t){switch(t.type){case ye:var r=me(e.items);return r.unshift(t.item),ue(ue({},e),{},{items:r});case be:var n=me(e.items);return n.pop(),ue(ue({},e),{},{items:n});case pe:var a=me(e.items);return a.splice(t.index,1),ue(ue({},e),{},{items:a});default:throw new Error}}function ge(e){return n.createElement(n.Fragment,null,e.items.map((function(e,t){return n.createElement(Oe,{key:"toast_".concat(t),index:t,item:e})})))}function Ee(){var e=ie((0,n.useState)(!1),2),t=e[0],r=e[1],a=ie((0,n.useState)([]),2),o=a[0],l=a[1],i=n.useContext(ve);return(0,n.useEffect)((function(){l(i.state.items),r(i.state.items.length>0)}),[i.state.items]),n.createElement("div",{className:"toasts-container","aria-live":"polite","aria-atomic":"true",style:{visibility:t?"visible":"hidden"}},n.createElement("div",{className:"toasts-position"},n.createElement(ge,{items:o})))}function je(e){var t=e.children,r=ie((0,n.useReducer)(he,{items:[]}),2),a={state:r[0],dispatch:r[1]};return n.createElement(n.Fragment,null,n.createElement(ve.Provider,{value:a},t,n.createElement(Ee,null)))}function Oe(e){var t=n.useContext(ve);return(0,n.useEffect)((function(){setTimeout((function(){t.dispatch({type:be})}),5e3)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"toast show",role:"alert","aria-live":"assertive","aria-atomic":"true"},n.createElement("div",{className:"toast-header"},n.createElement("strong",{className:"me-auto text-dark lead"},e.item.heading),n.createElement("a",{href:"#",onClick:function(r){return r.preventDefault()&t.dispatch({type:pe,index:e.index})},className:"text-dark h3 mb-0"},n.createElement("i",{className:"bi bi-x"}))),n.createElement("div",{className:"toast-body"},e.item.body)))}function Ae(e){return Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae(e)}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){xe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function xe(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=Ae(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Ae(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Ae(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Pe(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Pe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ke(){var e=n.useContext(C),t=n.useContext(P),r=n.useContext(ve),a=n.useContext(k),o=Ce((0,n.useState)(!1),2),l=o[0],i=o[1],c=Ce((0,n.useState)(""),2),u=c[0],s=c[1],m=Ce((0,n.useState)(""),2),d=m[0],y=m[1],b=Ce((0,n.useState)(""),2),h=b[0],g=b[1];return(0,n.useLayoutEffect)((function(){t.state.mode===p&&(s(t.state.selected.to),y(t.state.selected.subject))}),[t.state.mode]),n.createElement(oe.A,{noValidate:!0,validated:l,onSubmit:function(n){if(n.preventDefault(),!1===n.currentTarget.checkValidity())i(!0),n.stopPropagation();else{var o=(new Date).getTime();i(!1),e.dispatch({type:v,item:{subject:d,thread:"".concat(w,"_").concat(u,"_").concat(d),id:10*Math.random(),from:w,to:u,body:h,age:0,dir:O,time:o}}),a.state.show&&a.setShow(!1),r.dispatch({type:ye,item:{heading:"Sent successfully!",body:"Your message RE: ".concat(d,", has now been sent.")}}),t.dispatch({type:f,thread:t.state.selectedThread,item:Se({},t.state.selected)})}}},n.createElement(J.A,null,n.createElement(oe.A.Group,{as:K.A,className:"mb-3"},n.createElement(oe.A.Label,null,"From:"),n.createElement(oe.A.Control,{name:"from",id:"from",type:"text",value:w,readOnly:!0}),n.createElement(oe.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(J.A,null,n.createElement(oe.A.Group,{as:K.A,className:"mb-3"},n.createElement(oe.A.Label,null,"To:"),n.createElement(oe.A.Control,{name:"to",id:"to",type:"text",value:u,onChange:function(e){return s(e.target.value)},required:!0}),n.createElement(oe.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(J.A,null,n.createElement(oe.A.Group,{as:K.A,className:"mb-3"},n.createElement(oe.A.Label,null,"Subject:"),n.createElement(oe.A.Control,{name:"subject",id:"subject",type:"text",value:d,onChange:function(e){return y(e.target.value)},required:!0}),n.createElement(oe.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(J.A,null,n.createElement(oe.A.Group,{as:K.A,className:"mb-3"},n.createElement(oe.A.Label,null,"Message:"),n.createElement(oe.A.Control,{name:"body",id:"body",as:"textarea",rows:3,value:h,onChange:function(e){return g(e.target.value)},required:!0}),n.createElement(oe.A.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(J.A,null,n.createElement(oe.A.Group,{as:K.A},n.createElement(ae.A,{className:"float-right",id:"submit",variant:"dark",type:"submit"},"Submit"))))}function Ne(){return n.createElement(n.Fragment,null,n.createElement(ke,null),n.createElement(ne,null))}function Te(){return n.createElement(J.A,null,n.createElement(K.A,{lg:6},n.createElement(ke,null)))}function Ie(){var e=n.useContext(P);return n.createElement(J.A,null,n.createElement(K.A,null,e.state.mode===h&&n.createElement(ne,null),e.state.mode===p&&n.createElement(Ne,null),e.state.mode===b&&n.createElement(Te,null)))}var Me=r(8032);function De(){var e=n.useContext(P),t=n.useContext(k),r=function(){return t.setShow(!1)};return n.createElement(Me.A,{show:t.state.show,onHide:r},n.createElement(Me.A.Header,null,n.createElement(Me.A.Title,{className:"display-4"},e.state.selected.subject),n.createElement(ae.A,{variant:"link",className:"close",onClick:r},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(Me.A.Body,null,n.createElement(Ie,null)),e.state.mode===h&&n.createElement(Me.A.Footer,null,n.createElement(ae.A,{id:"replyBtn",onClick:function(){return e.dispatch({type:y,selected:e.state.selected})}},"Reply"),n.createElement(ae.A,{id:"closeBtn",variant:"dark",onClick:r},"Close")))}function Fe(){var e=n.useContext(P);return n.createElement(n.Fragment,null,e.state.mode===h&&e.state.selectedThread.length>0&&n.createElement(J.A,{className:"justify-content-end"},n.createElement("button",{id:"desktopReplyBtn",className:"btn btn-sm btn-dark",onClick:function(){e.dispatch({type:y,selected:e.state.selected})}},n.createElement("i",{className:"bi bi-arrow-90deg-left"}))))}function _e(e){return n.createElement(n.Fragment,null,n.createElement(J.A,null,n.createElement(K.A,null,n.createElement(re,{dir:e.dir,limit:3})),n.createElement(K.A,{className:"d-none d-md-block"},n.createElement(Fe,null),n.createElement(Ie,null))),n.createElement(De,null))}function Le(){return n.createElement(n.Fragment,null,n.createElement(J.A,null,n.createElement(K.A,null,n.createElement(_e,{dir:j}))))}function qe(){return n.createElement(Y,null,n.createElement(W,{title:"Inbox"}),n.createElement(Le,null))}function Be(){return n.createElement(Y,null,n.createElement(W,{title:"New message"}),n.createElement(Te,null))}function Re(){return n.createElement(n.Fragment,null,n.createElement(J.A,null,n.createElement(K.A,null,n.createElement(_e,{dir:O}))))}function Ue(){return n.createElement(Y,null,n.createElement(W,{title:"Outbox"}),n.createElement(Re,null))}var $e=function(){var e=function(e){return e?"active":"none"};return n.createElement(o.I9,null,n.createElement(i.A,{className:"pb-2 px-2 pt-3",id:"spaNavBar",bg:"dark",variant:"dark"},n.createElement(c.A,{className:"me-auto"},n.createElement(o.k2,{className:function(t){var r=t.isActive;return e(r)},to:E},"Home"),n.createElement(o.k2,{id:"inboxNavLink",className:function(t){var r=t.isActive;return e(r)},to:j},"Inbox"),n.createElement(o.k2,{className:function(t){var r=t.isActive;return e(r)},to:O},"Outbox"),n.createElement(o.k2,{className:function(t){var r=t.isActive;return e(r)},to:A},"New"))),n.createElement(l.BV,null,n.createElement(l.qh,{exact:!0,path:"/",element:n.createElement(l.C5,{to:E})}),n.createElement(l.qh,{path:E,element:n.createElement(z,null)}),n.createElement(l.qh,{path:j,element:n.createElement(qe,null)}),n.createElement(l.qh,{path:O,element:n.createElement(Ue,null)}),n.createElement(l.qh,{path:A,element:n.createElement(Be,null)})))};function He(e){return He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(e)}function Ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(r),!0).forEach((function(t){Ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ye(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=He(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=He(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==He(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ze(e,t){if(t.type===v){var r=function(e){if(Array.isArray(e))return We(e)}(n=e.messages)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return We(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?We(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return r.unshift(t.item),Ve(Ve({},e),{},{messages:r})}var n;throw new Error}var Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(t-e+1)+e)};function Ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Qe(e){var t,r,a=e.children,o=e.dir,l=function(e,t){for(var r=[],n=["Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.","Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.","Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC"],a=["james@itservices.co.uk","anna@squaresource.co.uk","matt@mgelectricals.co.uk","sarah@the-coffee-shop.co.uk"],o=0;o<e;o++){var l=Je(0,2),i=a[Je(0,3)];r.push({id:o,from:i,to:w,subject:"Subject ".concat(o),thread:"".concat(i,"_").concat(w,"_Subject ").concat(o),body:n[l],age:0,read:!1,dir:t,time:(new Date).getTime()})}return r}(x,o),i=(t=(0,n.useReducer)(ze,{messages:l}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return Ke(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ke(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c={state:i[0],dispatch:i[1]};return n.createElement(C.Provider,{value:c},a)}function Xe(){return n.createElement(je,null,n.createElement(Qe,{dir:j},n.createElement($e,null)))}a.createRoot(document.getElementById("result")).render(n.createElement(Xe,null))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(t,r,n,a)=>{if(!r){var l=1/0;for(s=0;s<e.length;s++){for(var[r,n,a]=e[s],i=!0,c=0;c<r.length;c++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,n,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var l={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,o.d(a,l),a},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[l,i,c]=r,u=0;if(l.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var s=c(o)}for(t&&t(r);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[121],(()=>o(1726)));l=o.O(l)})();