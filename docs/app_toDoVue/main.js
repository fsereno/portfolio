(()=>{"use strict";var e,t={581:(e,t,r)=>{var n=r(678);new(r.n(n)())({el:"#result",data:{name:"",counter:0,counterLimit:10,items:[]},methods:{addItem:function(){this.name.length>0&&this.counter<this.counterLimit&&(this.items.push(this.name),this.name="",this.counter=this.counter+1)},deleteItem:function(e){var t=Number(e.target.dataset.index);this.items.splice(t,1),this.counter=this.counter-1}}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[s,a,u]=r,l=0;if(s.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[121],(()=>n(581)));o=n.O(o)})();