_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{HUsl:function(e,t,n){e.exports=function(){var e={866:function(e,t,i){"use strict";i.r(t),i.d(t,{Cookies:function(){return s()},OPTIONS:function(){return v},SAME_SITE_OPTIONS:function(){return h},default:function(){return k},getCookieConsentValue:function(){return O}});const o=n("q1tI");var r=i.n(o),a=i(697),c=i.n(a),l=i(808),s=i.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v={TOP:"top",BOTTOM:"bottom",NONE:"none"},h={STRICT:"strict",LAX:"lax",NONE:"none"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=s().get(e);return void 0===t&&(t=s().get(j(e))),t},j=function(e){return"".concat(e,"-legacy")},z="CookieConsent",w=function(e){var t=e.condition,n=e.wrapper,i=e.children;return t?n(i):i},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,i,o=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var o=y(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).state={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},t}return(t=[{key:"componentDidMount",value:function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&this.setState({visible:!0})}},{key:"accept",value:function(){var e=this.props,t=e.cookieName,n=e.cookieValue,i=e.hideOnAccept,o=e.onAccept;this.setCookie(t,n),o(),i&&this.setState({visible:!1})}},{key:"decline",value:function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,i=e.hideOnDecline,o=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),o(),i&&this.setState({visible:!1})}},{key:"setCookie",value:function(e,t){var n=this.props,i=n.extraCookieOptions,o=n.expires,r=n.sameSite,a=this.props.cookieSecurity;void 0===a&&(a=!location||"https:"===location.protocol);var c=d(d({expires:o},i),{},{sameSite:r,secure:a});r===h.NONE&&s().set(j(e),t,c),s().set(e,t,c)}},{key:"getCookieValue",value:function(){var e=this.props.cookieName;return O(e)}},{key:"render",value:function(){var e=this;if(!this.state.visible)return null;var t=this.props,n=t.location,i=t.style,o=t.buttonStyle,a=t.declineButtonStyle,c=t.contentStyle,l=t.disableStyles,s=t.buttonText,u=t.declineButtonText,f=t.containerClasses,g=t.contentClasses,b=t.buttonClasses,m=t.buttonWrapperClasses,y=t.declineButtonClasses,h=t.buttonId,O=t.declineButtonId,j=t.disableButtonStyles,z=t.enableDeclineButton,x=t.flipButtons,k=t.ButtonComponent,C=t.overlay,S=t.overlayClasses,P=t.overlayStyle,A=t.ariaAcceptLabel,T=t.ariaDeclineLabel,E={},I={},N={},D={},_={};switch(l?(E=p({},i),I=p({},o),N=p({},a),D=p({},c),_=p({},P)):(E=p({},d(d({},this.state.style),i)),D=p({},d(d({},this.state.contentStyle),c)),_=p({},d(d({},this.state.overlayStyle),P)),j?(I=p({},o),N=p({},a)):(I=p({},d(d({},this.state.buttonStyle),o)),N=p({},d(d({},this.state.declineButtonStyle),a)))),n){case v.TOP:E.top="0";break;case v.BOTTOM:E.bottom="0"}var B=[];return z&&B.push(r().createElement(k,{key:"declineButton",style:N,className:y,id:O,"aria-label":T,onClick:function(){e.decline()}},u)),B.push(r().createElement(k,{key:"acceptButton",style:I,className:b,id:h,"aria-label":A,onClick:function(){e.accept()}},s)),x&&B.reverse(),r().createElement(w,{condition:C,wrapper:function(e){return r().createElement("div",{style:_,className:S},e)}},r().createElement("div",{className:"".concat(f),style:E},r().createElement("div",{style:D,className:g},this.props.children),r().createElement("div",{className:"".concat(m)},B.map((function(e){return e})))))}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(a.prototype,t),a}(o.Component);x.propTypes={location:c().oneOf(Object.keys(v).map((function(e){return v[e]}))),sameSite:c().oneOf(Object.keys(h).map((function(e){return h[e]}))),style:c().object,buttonStyle:c().object,declineButtonStyle:c().object,contentStyle:c().object,children:c().any,disableStyles:c().bool,hideOnAccept:c().bool,hideOnDecline:c().bool,onAccept:c().func,onDecline:c().func,buttonText:c().oneOfType([c().string,c().func,c().element]),declineButtonText:c().oneOfType([c().string,c().func,c().element]),cookieName:c().string,cookieValue:c().oneOfType([c().string,c().bool,c().number]),declineCookieValue:c().oneOfType([c().string,c().bool,c().number]),setDeclineCookie:c().bool,debug:c().bool,expires:c().number,containerClasses:c().string,contentClasses:c().string,buttonClasses:c().string,buttonWrapperClasses:c().string,declineButtonClasses:c().string,buttonId:c().string,declineButtonId:c().string,extraCookieOptions:c().object,disableButtonStyles:c().bool,enableDeclineButton:c().bool,flipButtons:c().bool,ButtonComponent:c().elementType,cookieSecurity:c().bool,overlay:c().bool,overlayClasses:c().string,overlayStyle:c().object,ariaAcceptLabel:c().string,ariaDeclineLabel:c().string},x.defaultProps={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:v.BOTTOM,onAccept:function(){},onDecline:function(){},cookieName:z,cookieValue:!0,declineCookieValue:!1,setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:h.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children"]);return r().createElement("button",n,t)},overlay:!1,overlayClasses:"",ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies"};const k=x},808:function(e,t,n){var i,o,r;void 0===(o="function"==typeof(i=r=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(i){function o(){}function r(t,n,r){if("undefined"!=typeof document){"number"==typeof(r=e({path:"/"},o.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=i.write?i.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var l in r)r[l]&&(c+="; "+l,!0!==r[l]&&(c+="="+r[l].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],a=0;a<r.length;a++){var c=r[a].split("="),l=c.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var s=t(c[0]);if(l=(i.read||i)(l,s)||t(l),n)try{l=JSON.parse(l)}catch(e){}if(o[s]=l,e===s)break}catch(e){}}return e?o[e]:o}}return o.set=r,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){r(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))})?i.call(t,n,t,e):i)||(e.exports=o),e.exports=r()},703:function(e,t,n){"use strict";var i=n(414);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}return i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(866)}()},Htjr:function(e,t,n){"use strict";n.d(t,"a",(function(){return fe}));var i={};n.r(i),n.d(i,"addTrackers",(function(){return W})),n.d(i,"initialize",(function(){return Y})),n.d(i,"ga",(function(){return K})),n.d(i,"set",(function(){return X})),n.d(i,"send",(function(){return Z})),n.d(i,"pageview",(function(){return $})),n.d(i,"modalview",(function(){return Q})),n.d(i,"timing",(function(){return ee})),n.d(i,"event",(function(){return te})),n.d(i,"exception",(function(){return ne})),n.d(i,"plugin",(function(){return ie})),n.d(i,"outboundLink",(function(){return oe})),n.d(i,"testModeAPI",(function(){return re})),n.d(i,"default",(function(){return ae}));var o=n("q1tI"),r=n.n(o),a=n("17x9"),c=n.n(a);function l(e){console.warn("[react-ga]",e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j="_blank",z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,i,o=m(a);function a(){var e;d(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return O(v(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,i=n.target,o=n.eventLabel,r=n.to,c=n.onClick,l=n.trackerNames,s={label:o},u=i!==j,p=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);u&&p?(t.preventDefault(),a.trackLink(s,(function(){window.location.href=r}),l)):a.trackLink(s,(function(){}),l),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,i=p(p({},f(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===j&&(i.rel="".concat(i.rel?i.rel:""," noopener noreferrer").trim()),delete i.eventLabel,delete i.trackerNames,r.a.createElement("a",i)}}])&&g(t.prototype,n),i&&g(t,i),a}(o.Component);O(z,"trackLink",(function(){l("ga tracking not enabled")})),z.propTypes={eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)},z.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function w(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(l("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function x(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var k=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function C(e){return x(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(k)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var S=!1;function P(e){console.info("[react-ga]",e)}var A=[],T={calls:A,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];A.push([].concat(t))},resetCalls:function(){A.length=0}};function E(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var L="undefined"===typeof window||"undefined"===typeof document,R=!1,q=!0,M=!1,U=!0,V=!0,J=function(){var e;return M?T.ga.apply(T,arguments):!L&&(window.ga?(e=window).ga.apply(e,arguments):l("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function F(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=C(e)),t&&(n=w(n)),n}(e,q,V)}function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=n[0];"string"===typeof o?(!U&&Array.isArray(e)||J.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){J.apply(void 0,_(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):l("ga command must be a string")}function H(e,t){e?t&&(t.debug&&!0===t.debug&&(R=!0),!1===t.titleCase&&(q=!1),!1===t.redactEmail&&(V=!1),t.useExistingGa)||(t&&t.gaOptions?J("create",e,t.gaOptions):J("create",e,"auto")):l("gaTrackingID is required in initialize()")}function W(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===D(e)?H(e.trackingId,e):l("All configs must be an object")})):H(e,t),!0}function Y(e,t){if(t&&!0===t.testMode)M=!0;else{if(L)return;t&&!0===t.standardImplementation||function(e){if(!S){S=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,i,o,r,a,c,l,s=e&&e.onerror;n=window,i=document,o="script",r=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=i.createElement(o),l=i.getElementsByTagName(o)[0],c.async=1,c.src=r,c.onerror=s,l.parentNode.insertBefore(c,l)}}(t)}U=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,W(e,t)}function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(J.apply(void 0,t),R&&(P("called ga('arguments');"),P("with arguments: ".concat(JSON.stringify(t))))),window.ga}function X(e,t){e?"object"===D(e)?(0===Object.keys(e).length&&l("empty `fieldsObject` given to .set()"),G(t,"set",e),R&&(P("called ga('set', fieldsObject);"),P("with fieldsObject: ".concat(JSON.stringify(e))))):l("Expected `fieldsObject` arg to be an Object"):l("`fieldsObject` is required in .set()")}function Z(e,t){G(t,"send",e),R&&(P("called ga('send', fieldObject);"),P("with fieldObject: ".concat(JSON.stringify(e))),P("with trackers: ".concat(JSON.stringify(t))))}function $(e,t,n){if(e){var i=x(e);if(""!==i){var o={};if(n&&(o.title=n),G(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:i},o)),R){P("called ga('send', 'pageview', path);");var r="";n&&(r=" and title: ".concat(n)),P("with path: ".concat(i).concat(r))}}else l("path cannot be an empty string in .pageview()")}else l("path is required in .pageview()")}function Q(e,t){if(e){var n,i="/"===(n=x(e)).substring(0,1)?n.substring(1):n;if(""!==i){var o="/modal/".concat(i);G(t,"send","pageview",o),R&&(P("called ga('send', 'pageview', path);"),P("with path: ".concat(o)))}else l("modalName cannot be an empty string or a single / in .modalview()")}else l("modalName is required in .modalview(modalName)")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,i=e.value,o=e.label,r=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof i){var a={hitType:"timing",timingCategory:F(t),timingVar:F(n),timingValue:i};o&&(a.timingLabel=F(o)),Z(a,r)}else l("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,i=e.label,o=e.value,r=e.nonInteraction,a=e.transport,c=E(e,["category","action","label","value","nonInteraction","transport"]),s=arguments.length>1?arguments[1]:void 0;if(t&&n){var u={hitType:"event",eventCategory:F(t),eventAction:F(n)};i&&(u.eventLabel=F(i)),"undefined"!==typeof o&&("number"!==typeof o?l("Expected `args.value` arg to be a Number."):u.eventValue=o),"undefined"!==typeof r&&("boolean"!==typeof r?l("`args.nonInteraction` must be a boolean."):u.nonInteraction=r),"undefined"!==typeof a&&("string"!==typeof a?l("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&l("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){u[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){u[e]=c[e]})),Z(u,s)}else l("args.category AND args.action are required in event()")}function ne(e,t){var n=e.description,i=e.fatal,o={hitType:"exception"};n&&(o.exDescription=F(n)),"undefined"!==typeof i&&("boolean"!==typeof i?l("`args.fatal` must be a boolean."):o.exFatal=i),Z(o,t)}var ie={require:function(e,t,n){if(e){var i=x(e);if(""!==i){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==D(t))return void l("Expected `options` arg to be an Object");0===Object.keys(t).length&&l("Empty `options` given to .require()"),K(o,i,t),R&&P("called ga('require', '".concat(i,"', ").concat(JSON.stringify(t)))}else K(o,i),R&&P("called ga('require', '".concat(i,"');"))}else l("`name` cannot be an empty string in .require()")}else l("`name` is required in .require()")},execute:function(e,t){for(var n,i,o=arguments.length,r=new Array(o>2?o-2:0),a=2;a<o;a++)r[a-2]=arguments[a];if(1===r.length?n=r[0]:(i=r[0],n=r[1]),"string"!==typeof e)l("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)l("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,i&&n?(K(c,i,n),R&&(P("called ga('".concat(c,"');")),P('actionType: "'.concat(i,'" with payload: ').concat(JSON.stringify(n))))):n?(K(c,n),R&&(P("called ga('".concat(c,"');")),P("with payload: ".concat(JSON.stringify(n))))):(K(c),R&&P("called ga('".concat(c,"');")))}}};function oe(e,t,n){if("function"===typeof t)if(e&&e.label){var i={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:F(e.label)},o=!1,r=setTimeout((function(){o=!0,t()}),250);i.hitCallback=function(){clearTimeout(r),o||t()},Z(i,n)}else l("args.label is required in outboundLink()");else l("hitCallback function is required")}var re=T,ae={initialize:Y,ga:K,set:X,send:Z,pageview:$,modalview:Q,timing:ee,event:te,exception:ne,plugin:ie,outboundLink:oe,testModeAPI:T};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=Y;z.origTrackLink=z.trackLink,z.trackLink=oe;var pe=z,fe=(le(le({},i),{},{OutboundLink:pe}),function(e){ue(e)})},RNiq:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return d}));var i=n("nKUr"),o=n("q1tI"),r=n("g4pe"),a=n.n(r),c=n("YFqc"),l=n.n(c),s=(n("Aiso"),n("nwdA")),u=n("HUsl"),p=n.n(u),f=n("Htjr");function d(){var t=function(){e.env.REACT_APP_GOOGLE_ANALYTICS_ID&&Object(f.a)(e.env.REACT_APP_GOOGLE_ANALYTICS_ID),console.log("coookies",Object(u.getCookieConsentValue)())};return Object(o.useEffect)((function(){"true"===Object(u.getCookieConsentValue)()&&t()}),[]),Object(i.jsxs)("div",{className:"siteContainer",children:[Object(i.jsxs)(p.a,{debug:!1,location:"bottom",style:{background:"#f5f2ee",color:"#696259"},buttonStyle:{background:"#2296d4",borderColor:"2296d4",color:"#fff",padding:"1rem"},buttonText:"ACCONSENTO",enableDeclineButton:!1,declineButtonText:"DECLINO",declineButtonStyle:{background:"red",borderColor:"2296d4",color:"#fff",padding:"1rem"},cookieName:"craon_cookies",expires:150,onAccept:t,onDecline:function(){u.Cookies.remove("_ga"),u.Cookies.remove("_gat"),u.Cookies.remove("_gid"),console.log("coookies",Object(u.getCookieConsentValue)())},children:[Object(i.jsx)("h3",{children:"Informazioni sui cookie presenti in questo sito"}),Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsxs)("p",{children:["Utilizziamo i ",Object(i.jsx)(l.a,{href:"/terminiecondizioni",children:" cookie per raccogliere   "}),"e analizzare informazioni sulle prestazioni e sull'utilizzo del sito, per fornire funzionalit\xe0 di social media e per migliorare e personalizzare contenuti e pubblicit\xe0 presenti"]})}),Object(i.jsx)("td",{}),Object(i.jsx)("td",{})]})})})]}),Object(i.jsxs)(a.a,{children:[Object(i.jsx)("title",{children:"Craon Srl"}),Object(i.jsx)("link",{rel:"icon",href:"/favicon/favicon.ico"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/favicon/apple-icon-57x57.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/favicon/apple-icon-60x60.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/favicon/apple-icon-72x72.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/favicon/apple-icon-76x76.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/favicon/apple-icon-114x114.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/favicon/apple-icon-120x120.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/favicon/apple-icon-144x144.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/favicon/apple-icon-152x152.png"}),Object(i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-icon-180x180.png"}),Object(i.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"}),Object(i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),Object(i.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"}),Object(i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),Object(i.jsx)("link",{rel:"manifest",href:"/favicon/manifest.json"}),Object(i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),Object(i.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),Object(i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),Object(i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",rel:"stylesheet"}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",rel:"stylesheet"}),Object(i.jsx)("meta",{property:"og:title",content:"Craon Srl"},"title"),Object(i.jsx)("meta",{name:"description",content:"Progettazione realizzazione gestione sistemi informativi. Digitalizzazione aziendale. B2B e-commerce. Business To Business. Integrazione sistemi.  Assistenza sistemistica. Formazione digitale, Progettazzione sistemi informativi Consulenza informatica it solutions, Sviluppo app, sviluppo applicaizoni, corsi informatica, corso react, corso angular, ricerca IT, ricerca informatica. Buy beautiful, responsive deisgn yourwebsite. Video corsi videocorsi online c# asp.net core 3.1 asp.net cire core Craon \xe8 il partner giusto. sviluppo portali web sviluppo portale web per PMI piccole medie imprese. applicazioni per pmi. resoourcing. "}),Object(i.jsx)("script",{src:"https://kit.fontawesome.com/f9028cf83e.js",crossOrigin:"anonymous"})]}),Object(i.jsx)(s.default,{}),Object(i.jsx)("h1",{style:{display:"none"},children:"servizi offerti da Craon sono molteplici: si va dalla progettazione, realizzazione e gestione di sistemi informativi allo sviluppo di software, portali web e applicazioni mobile. Un\u2019azienda informatica a 360\xb0 che rivolge i propri servizi sia alle PMI, con prodotti specialistici \u201con demand\u201d, sia alle grandi aziende del settore bancario e finanziario, che ricercano attraverso l\u2019outsourcing dei propri progetti una maggiore flessibilit\xe0. CRAON \xc8 IL PARTNER GIUSTO riduzione dei costi: Craon si propone di adeguare il giusto dimensionamento di una architettura informatica e la geolocalizzazione della stessa con un reale beneficio a livello di costi adeguatezza dei sistemi: Craon si adopera affinch\xe8 si fornisca al cliente un'infrastruttura su misura,tarata su analisi effettuata dai nostri professionisti,partendo dal livello pi\xf9 basso come l'hardware arrivando alle integrazioni fra i diversi sistemi aziendali Craon \xe8 sempre aggiornata sulle nuove tecnologie e si propone di restare al passo fornendo ai propri clienti soluzioni all'avanguardia in grado di soddisfare le necessit\xe0 sempre pi\xf9 crescenti di performance ottimizzando i costi aziendali . L\u2019interesse per il coding, negli ultimi anni, \xe8 cresciuto in maniera esponenziale. Il termine significa letteralmente programmazione, ma quando si parla di coding non si intende la programmazione informatica nel senso pi\xf9 tradizionale dell\u2019espressione, ovvero la scrittura di codice. Non \xe8 \u201croba da ingegneri\u201d ma una nuova lingua, indispensabile nel mondo odierno forse pi\xf9 dell\u2019inglese, perch\xe9 permette di capire come funziona un computer e di dialogare con esso per assegnargli dei compiti e dei comandi. Per questo il coding dovrebbe, a nostro avviso, diventare una materia di studio obbligatoria gi\xe0 a partire dalla scuola primaria. Imparando questa lingua, bambini e ragazzi diventano infatti utenti attivi e consapevoli di tecnologia, anzi ne diventano produttori. Il progetto Code Campus nasce un anno e mezzo fa proprio con questo obiettivo: avvicinare i bambini dai 6 anni in su al mondo del digitale con un ruolo attivo e aiutarli a sviluppare competenze e capacit\xe0 che gli saranno utili per il futuro. Come lo facciamo? Attraverso dei percorsi formativi che pensiamo e strutturiamo insieme ai loro insegnanti a scuola. Utilizziamo metodi di apprendimento cooperativo per favorire l\u2019interazione e la collaborazione tra gli studenti, valorizzando l\u2019apporto di ogni singolo componente del gruppo in vista del raggiungimento di un obiettivo comune. Con i nostri corsi bambini e ragazzi scopriranno i lati pi\xf9 divertenti della programmazione e svilupperanno la propria immaginazione. Crediamo infatti che il gioco e la creativit\xe0 siano un fondamentale strumento di conoscenza, un mezzo di aggregazione ma anche di espressione delle capacit\xe0 dei singoli. Il nostro intento non \xe8 quello di formare futuri programmatori, ma educare i bambini al pensiero computazionale, che \xe8 la capacit\xe0 di risolvere problemi pianificando la strategia migliore. Usando la logica, imparano a scomporre i problemi pi\xf9 complessi in tante piccole parti, che diventano pi\xf9 gestibili se affrontate una per volta. Trovando una soluzione a ciascuna di esse, i bambini sono poi in grado di risolvere il problema generale. Il coding \xe8 lo strumento pi\xf9 adatto per insegnare ai bambini a pensare in maniera computazionale, perch\xe9 utilizza un approccio ludico. Insomma i bambini non imparano solo a programmare, ma programmano per apprendere, e lo fanno divertendosi. CRAON ACADEMY La Craon Academy nasce con l\u2019intento di offrire una formazione tecnica adeguata per stare al passo con le richieste provenienti dal mercato ICT. I corsi vertono sulle seguenti aree e tecnologie: Java, Microsoft .Net, C#, PHP, Python, Android, iOs, xmarine, PLSQL I nostri corsi sono rivolti a: giovani neodiplomati e neolaureati in discipline scientifiche, che vogliano colmare il gap tra la preparazione scolastica e le skill richieste dal mercato chiunque desideri una formazione di base o specialistica nelle suddette tecnologie I corsi hanno una durata di 3 mesi e si svolgono dal luned\xec al venerd\xec presso la nostra sede di Vimercate. Al termine del corso i migliori candidati verranno inseriti nel nostro organico. Craon da sempre offre l\u2019esperienza e la professionalit\xe0 dei propri addetti alle societ\xe0 che necessitano una consulenza specifica e competente in campo informatico. Le figure professionali che propone sono: analisti programmatori; web developer developer mobile web designer analisti funzionali; programmatori (da Junior a Senior); sistemisti (da Junior a Senior); database administrator (DBA); project manager; personale per la gestione ordinaria delle infrastrutture; operatori business intelligence architetti it PMP PMO Nell\u2019era 4.0 un\u2019impresa di qualsiasi dimensione per avere visibilit\xe0 deve essere online. Per questo motivo Craon offre ai propri clienti soluzioni web a 360\xb0: dalla registrazione del dominio, alla progettazione e creazione del sito, al collocamento dello stesso su server Craon (hosting) o su macchine di propriet\xe0 del cliente ma situate presso il data center Craon (housing), al posizionamento ottimale nei motori di ricerca e alla eventuale manutenzione del sito. Craon utilizza gli strumenti e i linguaggi (HTML, PHP, ASP, ASP.NET, JAVA) pi\xf9 adeguati e all\u2019avanguardia per sviluppare oltre a semplici siti html, applicazioni web per la gestione di banche dati, CMS (Content Management System), soluzioni di \u201ce-commerce\u201d e di condivisione di documenti. I servizi web offerti da Craon sono: registrazione dominio; soluzioni di posta elettronica; PEC (Posta Elettronica Certificata); progettazione e sviluppo siti web; servizi di hosting e housing; firewall; vulnerability test; web site monitoring; soluzioni web marketing; piattaforme per e-learning; sistemi di ticketing; sviluppo mobile. Il personale di Craon possiede tutte le competenze e capacit\xe0 tecniche per analizzare le esigenze del cliente e proporre la pi\xf9 adeguata soluzione hardware, software e di networking, garantendo anche un\u2019attivit\xe0 di supporto sistemistico a vari livelli su apparecchiature con tecnologie Microsoft e Unix/Linux.CRAON svolge, inoltre, un\u2019attivit\xe0 di assistenza sistemistica (di vari livelli) su apparecchiature con tecnologie Microsoft e Unix/Linux, grazie alle competenze e capacit\xe0 tecniche del proprio personale.Servizi di assistenza sistemistica: progettazione e realizzazione infrastruttura reti; installazione, configurazione di router, firewall e apparati vari; installazione e manutenzione server Microsoft e Unix/Linux; virtualizzazione server; controllo e gestione di sistemi di backup; installazione software; installazione, configurazione e manutenzione postazioni client; installazione e gestione di periferiche (scanner, stampanti di rete e locali). I tecnici CRAON possono operare sulle postazioni dei clienti direttamente o tramite collegamenti da remoto per rendere l\u2019intervento il pi\xf9 tempestivo e rapido possibile. Ogni azienda ha caratteristiche proprie che la distinguono dalle altre. Ci\xf2 implica che soluzioni standard possano non risultare adeguate a soddisfare i bisogni di un\u2019impresa e siano necessarie soluzioni su misura. Per questo motivo Craon si occupa di progettazione sistemi informativi on demand che rispondano in maniera efficace ed efficiente alle necessit\xe0 di ogni singolo cliente. L\u2019evoluzione tecnologica spinge molte societ\xe0 a innovarsi e a rinnovare, ma spesso questo processo implica fasi di transito da un vecchio sistema a uno nuovo con relativi problemi di dialogo tra le diverse applicazioni. Craon dispone di uno staff di analisti e programmatori in grado di valutare le problematiche e sviluppare la migliore soluzione di system integration. RIVENDITA HARDWARE E SOFTWARE Per offrire un servizio globale ai propri clienti Craon si occupa anche della rivendita o noleggio di hardware e software delle migliori marche. Craon si occupa di database management ovvero di ideare e realizzare database relazionali per l\u2019archiviazione dei dati su piattaforme SQL Microsoft, Mysql ed Oracle. Nel 2005 Craon ha ottenuto un riconoscimento dal National Cancer Institute per il servizio di alta professionalit\xe0 reso in qualit\xe0 di Database Designer and Manager nello studio internazionale sulle cause del tumore ai polmoni."})]})}}.call(this,n("8oxB"))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3,4,5,6,7,9,8]]]);