parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var n=document.getElementById("button-1"),e=document.getElementById("button-2"),t=document.getElementById("button-3"),o=[];n.onclick=function(){document.getElementById("result-1").innerHTML=c()},e.onclick=function(){document.getElementById("result-2").innerHTML=c()},t.onclick=function(){document.getElementById("result-3").innerHTML=c()};var c=function(){var n=Math.floor(6*Math.random()+1);return o.push(n),u(),n},u=function(){var n=document.getElementById("list");n.innerHTML="",o.forEach(function(e){var t=document.createElement("li");n.appendChild(t),t.innerHTML+=e})};
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/dice/js.c3051cb0.js.map