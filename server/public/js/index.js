!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t(2)},function(e,n,t){"use strict";var o=new Proxy({time:"2017-1-1",name:"net"},{get:function(e,n){return e[n].replace("2017","2018")},set:function(e,n,t){return"name"==n?e[n]=t:e[n]},has:function(e,n){return"name"===n&&e[n]},deleteProoerty:function(e,n){return n.indexof("_")>-1?(delete e[n],!0):e[n]},ownKeys:function(e){return Object.keys(e).filter(function(e){return"time"!=e})}});console.log(o.time),o.name="nea",console.log(o.name),console.log("has","ww"in o),console.log("has","name"in o),delete o._r,console.log("delete",o),console.log("ownKeys",Object.keys(o))}]);