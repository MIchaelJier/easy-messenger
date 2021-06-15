"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a,c;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},o=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},i=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};(function(){try{var t=e.URLSearchParams;return"a=1"===new t("?a=1").toString()&&"function"==typeof t.prototype.set&&"function"==typeof t.prototype.entries}catch(e){return!1}})()||function(){var i=function(e){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var t=typeof e;if("undefined"===t);else if("string"===t)""!==e&&this._fromString(e);else if(e instanceof i){var n=this;e.forEach((function(e,t){n.append(t,e)}))}else{if(null===e||"object"!==t)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(e))for(var o=0;o<e.length;o++){var r=e[o];if("[object Array]"!==Object.prototype.toString.call(r)&&2===r.length)throw new TypeError("Expected [string, any] as entry at index "+o+" of URLSearchParams's input");this.append(r[0],r[1])}else for(var s in e)e.hasOwnProperty(s)&&this.append(s,e[s])}},r=i.prototype;r.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},r.delete=function(e){delete this._entries[e]},r.get=function(e){return e in this._entries?this._entries[e][0]:null},r.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},r.has=function(e){return e in this._entries},r.set=function(e,t){this._entries[e]=[String(t)]},r.forEach=function(e,t){var n;for(var o in this._entries)if(this._entries.hasOwnProperty(o)){n=this._entries[o];for(var i=0;i<n.length;i++)e.call(t,n[i],o,this)}},r.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),n(e)},r.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),n(e)},r.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),n(e)},t&&(r[Symbol.iterator]=r.entries),r.toString=function(){var e=[];return this.forEach((function(t,n){e.push(o(n)+"="+o(t))})),e.join("&")},e.URLSearchParams=i}();var r=e.URLSearchParams.prototype;"function"!=typeof r.sort&&(r.sort=function(){var e=this,t=[];this.forEach((function(n,o){t.push([o,n]),e._entries||e.delete(o)})),t.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])}),"function"!=typeof r._fromString&&Object.defineProperty(r,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach((function(e,n){t.push(n)}));for(var n=0;n<t.length;n++)this.delete(t[n])}var o,r=(e=e.replace(/^\?/,"")).split("&");for(n=0;n<r.length;n++)o=r[n].split("="),this.append(i(o[0]),o.length>1?i(o[1]):"")}})}("undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t)),n&&"string"!=typeof n&&(n=String(n));var o,i=document;if(n&&(void 0===e.location||n!==e.location.href)){n=n.toLowerCase(),(o=(i=document.implementation.createHTMLDocument("")).createElement("base")).href=n,i.head.appendChild(o);try{if(0!==o.href.indexOf(n))throw new Error(o.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var r=i.createElement("a");r.href=t,o&&(i.body.appendChild(r),r.href=r.href);var s=i.createElement("input");if(s.type="url",s.value=t,":"===r.protocol||!/:/.test(r.href)||!s.checkValidity()&&!n)throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:r});var a=new e.URLSearchParams(this.search),c=!0,u=!0,h=this;["append","delete","set"].forEach((function(e){var t=a[e];a[e]=function(){t.apply(a,arguments),c&&(u=!1,h.search=a.toString(),u=!0)}})),Object.defineProperty(this,"searchParams",{value:a,enumerable:!0});var f=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==f&&(f=this.search,u&&(c=!1,this.searchParams._fromString(this.search),c=!0))}})},o=n.prototype;["hash","host","hostname","port","protocol"].forEach((function(e){!function(e){Object.defineProperty(o,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)})),Object.defineProperty(o,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(o,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(this._anchorElement.port!={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol]&&""!==this._anchorElement.port?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval((function(){e.location.origin=t()}),100)}}}("undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0),function(e){e.SUBSCRIBE="subscribe",e.EMIT="emit",e.REQUEST="request",e.RESOLVE="resolve",e.REJECT="reject"}(a||(a={})),function(e){e.HANDSHAKE="mc-handshake",e.CONNECTED="mc-connected",e.DISCONNECTED="mc-disconnected",e.CONNECTION_TIMEOUT="mc-connection-timeout"}(c||(c={}));var u=Object.freeze({__proto__:null,get MESSAGE_TYPE(){return a},get MC_EVENTS(){return c}}),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.connected=!1,this.backlog=[],this.promises={},this.emitters={},this.connectionStep="",this.defaultOptions={window:window,connectionTimeout:2e3,timeout:200,debug:!1,onload:!0,clientInitiates:!1,targetOrigin:"*"},this.options=Object.assign(Object.assign({},this.defaultOptions),t)}var t;return(t=[{key:"emit",value:function(e,t){return this.message({type:a.EMIT,event:e,payload:t}),this}},{key:"on",value:function(e,t){return this.emitters[e]&&Array.isArray(this.emitters[e])?this.emitters[e].push(t):this.emitters[e]=[t],this}},{key:"request",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,r){var s,c=n.uuidv4(),u=n.getRequestTimeout(o.timeout);!1!==u&&"number"==typeof u&&(s=window.setTimeout((function(){return r("timeout")}),u)),n.promises[c]={resolve:function(e){i(e),s&&clearTimeout(s)},reject:function(e){r(e),s&&clearTimeout(s)}},n.message({type:a.REQUEST,event:e,id:c,payload:t})}))}},{key:"close",value:function(){this.connected&&(this.port.close(),this.connected=!1),this.messageListener&&this.options.window.removeEventListener("message",this.messageListener,!1)}},{key:"setConnectionTimeout",value:function(){var e=this;clearTimeout(this.connectionTimeout),!1!==this.options.connectionTimeout&&(this.connectionTimeout=window.setTimeout((function(){e.messageListener&&e.options.window.removeEventListener("message",e.messageListener,!1),e.handleMessage({type:a.EMIT,event:c.CONNECTION_TIMEOUT,payload:{message:"Connection timed out while "+e.connectionStep}})}),Number(this.options.connectionTimeout)))}},{key:"uuidv4",value:function(){var e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}},{key:"clearConnectionTimeout",value:function(){clearTimeout(this.connectionTimeout)}},{key:"initPortEvents",value:function(){var e=this;this.port.onmessage=function(t){e.handleMessage(t.data)},this.port.onmessageerror=function(t){e.handleError(t)}}},{key:"finishInit",value:function(){this.connected=!0,this.clearConnectionTimeout(),this.options.debug&&console.log("Finished connection on ".concat(this.isClient()?"client":"server")),this.emit(c.CONNECTED),this.completeBacklog()}},{key:"completeBacklog",value:function(){var e=this;this.backlog.forEach((function(t){e.portMessage(t)})),this.backlog=[]}},{key:"handleError",value:function(e){this.options.debug&&console.error(e)}},{key:"handleMessage",value:function(e){var t=this;switch(this.options.debug&&console.log("handle by ".concat(this.isClient()?"client":"server"," - [").concat(e.type,': "').concat(e.event,'"] , payload: '),e.payload),e.type){case a.EMIT:if(!this.emitters[e.event]||!Array.isArray(this.emitters[e.event]))return;this.emitters[e.event].forEach((function(t){return t(e.payload)}));break;case a.REQUEST:if(!this.emitters[e.event]||!Array.isArray(this.emitters[e.event]))return;this.emitters[e.event].forEach((function(n){return n(e.payload,(function(n){t.message({id:e.id,type:a.RESOLVE,event:e.event,payload:n})}),(function(n){t.message({id:e.id,type:a.REJECT,event:e.event,payload:n})}))}));break;case a.RESOLVE:if(!this.promises[e.id])return;this.promises[e.id].resolve(e.payload),delete this.promises[e.id];break;case a.REJECT:if(!this.promises[e.id])return;this.promises[e.id].reject(e.payload),delete this.promises[e.id]}}},{key:"getRequestTimeout",value:function(e){return"number"==typeof e&&e>=0?e:"number"==typeof e?0:(!0===e||!1!==e)&&this.options.timeout}},{key:"isClient",value:function(){return!1}},{key:"message",value:function(e){var t=!1;e.event!==c.HANDSHAKE&&e.event!==c.CONNECTED&&e.event!==c.DISCONNECTED||(t=!0),this.connected||t?this.port&&this.portMessage(e):this.backlog.push(e)}},{key:"portMessage",value:function(e){this.options.debug&&console.log("send from ".concat(this.isClient()?"client":"server"," - [").concat(e.type,": ").concat(e.event,"], payload: "),e.payload),this.port.postMessage(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),e}();function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var s=r(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return i(this,n)}}var l,p=u.MC_EVENTS;!function(e){e.CONNECTION="waiting for connection.",e.HANDSHAKE="waiting for handshake."}(l||(l={})),exports.ClientConnection=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(c,h);var i,r,s,a=f(c);function c(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(this,c),(t=a.call(this,n)).messageListener=function(e){return t.messageHandler(e)},t.options.window.addEventListener("message",t.messageListener),!1!==t.options.connectionTimeout&&(t.connectionStep=l.CONNECTION,t.setConnectionTimeout()),t}return i=c,(r=[{key:"init",value:function(){var e=new URL(this.options.window.location.toString());this.id=e.searchParams.get("mc-name"),this.options.debug&&console.log("Client: sent postMessage value:",this.id),this.options.window.parent.postMessage(this.id,this.options.targetOrigin)}},{key:"messageHandler",value:function(e){e.ports[0]&&(this.port=e.ports[0],this.initPortEvents(),this.listenForHandshake(),this.options.window.removeEventListener("message",this.messageListener))}},{key:"listenForHandshake",value:function(){var e=this;!1!==this.options.connectionTimeout&&(this.connectionStep=l.HANDSHAKE,this.setConnectionTimeout()),this.request(p.HANDSHAKE,null,{timeout:!1}).then((function(){e.addBeforeUnloadEvent(),e.finishInit()})).catch((function(t){e.handleError(t)}))}},{key:"addBeforeUnloadEvent",value:function(){var e=this;this.options.window.addEventListener("beforeunload",(function(t){e.emit(p.DISCONNECTED),e.close()}))}},{key:"isClient",value:function(){return!0}}])&&t(i.prototype,r),s&&t(i,s),c}();
