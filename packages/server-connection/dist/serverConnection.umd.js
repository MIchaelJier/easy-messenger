!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).serverConnection={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n,i;!function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},o=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};(function(){try{var t=e.URLSearchParams;return"a=1"===new t("?a=1").toString()&&"function"==typeof t.prototype.set&&"function"==typeof t.prototype.entries}catch(e){return!1}})()||function(){var o=function(e){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var t=typeof e;if("undefined"===t);else if("string"===t)""!==e&&this._fromString(e);else if(e instanceof o){var n=this;e.forEach((function(e,t){n.append(t,e)}))}else{if(null===e||"object"!==t)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(e))for(var i=0;i<e.length;i++){var r=e[i];if("[object Array]"!==Object.prototype.toString.call(r)&&2===r.length)throw new TypeError("Expected [string, any] as entry at index "+i+" of URLSearchParams's input");this.append(r[0],r[1])}else for(var s in e)e.hasOwnProperty(s)&&this.append(s,e[s])}},r=o.prototype;r.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},r.delete=function(e){delete this._entries[e]},r.get=function(e){return e in this._entries?this._entries[e][0]:null},r.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},r.has=function(e){return e in this._entries},r.set=function(e,t){this._entries[e]=[String(t)]},r.forEach=function(e,t){var n;for(var i in this._entries)if(this._entries.hasOwnProperty(i)){n=this._entries[i];for(var o=0;o<n.length;o++)e.call(t,n[o],i,this)}},r.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),n(e)},r.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),n(e)},r.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),n(e)},t&&(r[Symbol.iterator]=r.entries),r.toString=function(){var e=[];return this.forEach((function(t,n){e.push(i(n)+"="+i(t))})),e.join("&")},e.URLSearchParams=o}();var r=e.URLSearchParams.prototype;"function"!=typeof r.sort&&(r.sort=function(){var e=this,t=[];this.forEach((function(n,i){t.push([i,n]),e._entries||e.delete(i)})),t.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])}),"function"!=typeof r._fromString&&Object.defineProperty(r,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach((function(e,n){t.push(n)}));for(var n=0;n<t.length;n++)this.delete(t[n])}var i,r=(e=e.replace(/^\?/,"")).split("&");for(n=0;n<r.length;n++)i=r[n].split("="),this.append(o(i[0]),i.length>1?o(i[1]):"")}})}("undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t)),n&&"string"!=typeof n&&(n=String(n));var i,o=document;if(n&&(void 0===e.location||n!==e.location.href)){n=n.toLowerCase(),(i=(o=document.implementation.createHTMLDocument("")).createElement("base")).href=n,o.head.appendChild(i);try{if(0!==i.href.indexOf(n))throw new Error(i.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var r=o.createElement("a");r.href=t,i&&(o.body.appendChild(r),r.href=r.href);var s=o.createElement("input");if(s.type="url",s.value=t,":"===r.protocol||!/:/.test(r.href)||!s.checkValidity()&&!n)throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:r});var a=new e.URLSearchParams(this.search),c=!0,u=!0,h=this;["append","delete","set"].forEach((function(e){var t=a[e];a[e]=function(){t.apply(a,arguments),c&&(u=!1,h.search=a.toString(),u=!0)}})),Object.defineProperty(this,"searchParams",{value:a,enumerable:!0});var f=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==f&&(f=this.search,u&&(c=!1,this.searchParams._fromString(this.search),c=!0))}})},i=n.prototype;["hash","host","hostname","port","protocol"].forEach((function(e){!function(e){Object.defineProperty(i,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)})),Object.defineProperty(i,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(i,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(this._anchorElement.port!={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol]&&""!==this._anchorElement.port?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval((function(){e.location.origin=t()}),100)}}}("undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0),function(e){e.SUBSCRIBE="subscribe",e.EMIT="emit",e.REQUEST="request",e.RESOLVE="resolve",e.REJECT="reject"}(n||(n={})),function(e){e.HANDSHAKE="mc-handshake",e.CONNECTED="mc-connected",e.DISCONNECTED="mc-disconnected",e.CONNECTION_TIMEOUT="mc-connection-timeout"}(i||(i={}));var o=Object.freeze({__proto__:null,get MESSAGE_TYPE(){return n},get MC_EVENTS(){return i}}),r=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.connected=!1,this.backlog=[],this.promises={},this.emitters={},this.connectionStep="",this.defaultOptions={window:window,connectionTimeout:2e3,timeout:200,debug:!1,onload:!0,clientInitiates:!1,targetOrigin:"*"},this.options=Object.assign(Object.assign({},this.defaultOptions),n)}var o;return(o=[{key:"emit",value:function(e,t){return this.message({type:n.EMIT,event:e,payload:t}),this}},{key:"on",value:function(e,t){return this.emitters[e]&&Array.isArray(this.emitters[e])?this.emitters[e].push(t):this.emitters[e]=[t],this}},{key:"request",value:function(e,t){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,s){var a,c=i.uuidv4(),u=i.getRequestTimeout(o.timeout);!1!==u&&"number"==typeof u&&(a=window.setTimeout((function(){return s("timeout")}),u)),i.promises[c]={resolve:function(e){r(e),a&&clearTimeout(a)},reject:function(e){s(e),a&&clearTimeout(a)}},i.message({type:n.REQUEST,event:e,id:c,payload:t})}))}},{key:"close",value:function(){this.connected&&(this.port.close(),this.connected=!1),this.messageListener&&this.options.window.removeEventListener("message",this.messageListener,!1)}},{key:"setConnectionTimeout",value:function(){var e=this;clearTimeout(this.connectionTimeout),!1!==this.options.connectionTimeout&&(this.connectionTimeout=window.setTimeout((function(){e.messageListener&&e.options.window.removeEventListener("message",e.messageListener,!1),e.handleMessage({type:n.EMIT,event:i.CONNECTION_TIMEOUT,payload:{message:"Connection timed out while "+e.connectionStep}})}),Number(this.options.connectionTimeout)))}},{key:"uuidv4",value:function(){var e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}},{key:"clearConnectionTimeout",value:function(){clearTimeout(this.connectionTimeout)}},{key:"initPortEvents",value:function(){var e=this;this.port.onmessage=function(t){e.handleMessage(t.data)},this.port.onmessageerror=function(t){e.handleError(t)}}},{key:"finishInit",value:function(){this.connected=!0,this.clearConnectionTimeout(),this.options.debug&&console.log("Finished connection on ".concat(this.isClient()?"client":"server")),this.emit(i.CONNECTED),this.completeBacklog()}},{key:"completeBacklog",value:function(){var e=this;this.backlog.forEach((function(t){e.portMessage(t)})),this.backlog=[]}},{key:"handleError",value:function(e){this.options.debug&&console.error(e)}},{key:"handleMessage",value:function(e){var t=this;switch(this.options.debug&&console.log("handle by ".concat(this.isClient()?"client":"server"," - [").concat(e.type,': "').concat(e.event,'"] , payload: '),e.payload),e.type){case n.EMIT:if(!this.emitters[e.event]||!Array.isArray(this.emitters[e.event]))return;this.emitters[e.event].forEach((function(t){return t(e.payload)}));break;case n.REQUEST:if(!this.emitters[e.event]||!Array.isArray(this.emitters[e.event]))return;this.emitters[e.event].forEach((function(i){return i(e.payload,(function(i){t.message({id:e.id,type:n.RESOLVE,event:e.event,payload:i})}),(function(i){t.message({id:e.id,type:n.REJECT,event:e.event,payload:i})}))}));break;case n.RESOLVE:if(!this.promises[e.id])return;this.promises[e.id].resolve(e.payload),delete this.promises[e.id];break;case n.REJECT:if(!this.promises[e.id])return;this.promises[e.id].reject(e.payload),delete this.promises[e.id]}}},{key:"getRequestTimeout",value:function(e){return"number"==typeof e&&e>=0?e:"number"==typeof e?0:(!0===e||!1!==e)&&this.options.timeout}},{key:"isClient",value:function(){return!1}},{key:"message",value:function(e){var t=!1;e.event!==i.HANDSHAKE&&e.event!==i.CONNECTED&&e.event!==i.DISCONNECTED||(t=!0),this.connected||t?this.port&&this.portMessage(e):this.backlog.push(e)}},{key:"portMessage",value:function(e){this.options.debug&&console.log("send from ".concat(this.isClient()?"client":"server"," - [").concat(e.type,": ").concat(e.event,"], payload: "),e.payload),this.port.postMessage(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,o),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p,d=o.MC_EVENTS;!function(e){e.CONNECTION="waiting for connection.",e.IFRAME_LOADING="waiting for iframe to load.",e.INITIATION_FROM_CLIENT="waiting for initiation from client."}(p||(p={})),e.ServerConnection=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(r,e);var t,n,i,o=h(r);function r(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(this,r),(t=o.call(this,n)).frame=e,t.connectionStep=p.CONNECTION,t.options.onload&&t.setupLoadInit(),t.options.clientInitiates&&t.setupClientInit(),t.setConnectionTimeout(),t.on(d.DISCONNECTED,(function(){return t.close()})),t}return t=r,(n=[{key:"clientInitiation",value:function(e){e.data===this.id&&(this.connectionStep=p.CONNECTION,this.setConnectionTimeout(),this.options.window.removeEventListener("message",this.messageListener,!1),this.options.debug&&console.log("Server: Client triggered initiation"),this.init())}},{key:"setupLoadInit",value:function(){var e=this;this.connectionStep=p.IFRAME_LOADING,this.frame.addEventListener("load",(function(){e.connectionStep=e.options.clientInitiates?p.INITIATION_FROM_CLIENT:p.CONNECTION,e.setConnectionTimeout(),e.init()}))}},{key:"setupClientInit",value:function(){var e=this;this.connectionStep=p.INITIATION_FROM_CLIENT,this.id=this.uuidv4();var t=new URL(this.frame.src);t.searchParams.set("mc-name",this.id),this.frame.src=t.toString(),this.messageListener=function(t){return e.clientInitiation(t)},this.options.window.addEventListener("message",this.messageListener)}},{key:"init",value:function(){if(!this.frame.contentWindow||!this.frame.src||this.connected)return!1;this.setupChannel(),this.initPortEvents(),this.listenForHandshake(),this.sendPortToClient(this.frame.contentWindow)}},{key:"sendPortToClient",value:function(e){e.postMessage(null,this.options.targetOrigin?this.options.targetOrigin:"*",[this.channel.port2])}},{key:"listenForHandshake",value:function(){var e=this;this.on(d.HANDSHAKE,(function(t,n){n(t),e.finishInit()}))}},{key:"setupChannel",value:function(){this.channel=new MessageChannel,this.port=this.channel.port1}}])&&c(t.prototype,n),i&&c(t,i),r}(r),Object.defineProperty(e,"__esModule",{value:!0})}));