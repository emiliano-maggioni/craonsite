(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"6Cl6":function(e,t,n){},"9a8T":function(e,t,n){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=(i(n(1)),n(6)),c=i(a),r=i(n(7)),s=i(n(8)),l=i(n(9)),u=i(n(10)),d=i(n(11)),f=i(n(14)),m=[],b=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(b=!0),b)return m=(0,d.default)(m,p),(0,u.default)(m,p.once),m},j=function(){m=(0,f.default)(),v()},h=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},g=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},x=function(e){p=o(p,e),m=(0,f.default)();var t=document.all&&!window.atob;return g(p.disable)||t?h():(p.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,(function(){v(!0)})):document.addEventListener(p.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,r.default)(v,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(v,p.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)((function(){(0,u.default)(m,p.once)}),p.throttleDelay)),p.disableMutationObserver||s.default.ready("[data-aos]",j),m)};e.exports={init:x,refresh:v,refreshHard:j}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=p,i=v;return p=v=void 0,w=t,h=e.apply(i,n)}function a(e){return w=e,g=setTimeout(u,t),_?i(e):h}function c(e){var n=t-(e-x);return A?k(n,j-(e-w)):n}function s(e){var n=e-x;return void 0===x||n>=t||n<0||A&&e-w>=j}function u(){var e=O();return s(e)?d(e):void(g=setTimeout(u,c(e)))}function d(e){return g=void 0,N&&p?i(e):(p=v=void 0,h)}function f(){void 0!==g&&clearTimeout(g),w=0,p=x=v=g=void 0}function m(){return void 0===g?h:d(O())}function b(){var e=O(),n=s(e);if(p=arguments,v=this,x=e,n){if(void 0===g)return a(x);if(A)return g=setTimeout(u,t),i(x)}return void 0===g&&(g=setTimeout(u,t)),h}var p,v,j,h,g,x,w=0,_=!1,A=!1,N=!0;if("function"!=typeof e)throw new TypeError(l);return t=r(t)||0,o(n)&&(_=!!n.leading,j=(A="maxWait"in n)?y(r(n.maxWait)||0,t):j,N="trailing"in n?!!n.trailing:N),b.cancel=f,b.flush=m,b}function i(e,t,i){var a=!0,c=!0;if("function"!=typeof e)throw new TypeError(l);return o(i)&&(a="leading"in i?!!i.leading:a,c="trailing"in i?!!i.trailing:c),n(e,t,{leading:a,maxWait:t,trailing:c})}function o(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function c(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||a(e)&&x.call(e)==d}function r(e){if("number"==typeof e)return e;if(c(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=b.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):m.test(e)?u:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",u=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,j="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,g=j||h||Function("return this")(),x=Object.prototype.toString,y=Math.max,k=Math.min,O=function(){return g.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=p,i=v;return p=v=void 0,w=t,h=e.apply(i,n)}function a(e){return w=e,g=setTimeout(u,t),_?o(e):h}function r(e){var n=t-(e-O);return A?y(n,j-(e-w)):n}function l(e){var n=e-O;return void 0===O||n>=t||n<0||A&&e-w>=j}function u(){var e=k();return l(e)?d(e):void(g=setTimeout(u,r(e)))}function d(e){return g=void 0,N&&p?o(e):(p=v=void 0,h)}function f(){void 0!==g&&clearTimeout(g),w=0,p=O=v=g=void 0}function m(){return void 0===g?h:d(k())}function b(){var e=k(),n=l(e);if(p=arguments,v=this,O=e,n){if(void 0===g)return a(O);if(A)return g=setTimeout(u,t),o(O)}return void 0===g&&(g=setTimeout(u,t)),h}var p,v,j,h,g,O,w=0,_=!1,A=!1,N=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,i(n)&&(_=!!n.leading,j=(A="maxWait"in n)?x(c(n.maxWait)||0,t):j,N="trailing"in n?!!n.trailing:N),b.cancel=f,b.flush=m,b}function i(e){var t="undefined"==typeof e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":r(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":r(e))||o(e)&&g.call(e)==u}function c(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=m.test(e);return n||b.test(e)?p(e.slice(2),n?2:8):f.test(e)?l:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",l=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,p=parseInt,v="object"==("undefined"==typeof t?"undefined":r(t))&&t&&t.Object===Object&&t,j="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,h=v||j||Function("return this")(),g=Object.prototype.toString,x=Math.max,y=Math.min,k=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function a(e,t){var n=window.document,o=new(i())(c);r=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return r()}))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:o,ready:a}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=i();return!(!a.test(e)&&!c.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,a){n(e,o+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(12)),a=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=a},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(13)),a=function(e,t){var n=0,i=0,a=window.innerHeight,c={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(c.offset&&!isNaN(c.offset)&&(i=parseInt(c.offset)),c.anchor&&document.querySelectorAll(c.anchor)&&(e=document.querySelectorAll(c.anchor)[0]),n=(0,o.default)(e).top,c.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return c.anchorPlacement||c.offset||isNaN(t)||(i=t),n+i};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},"9u/5":function(e,t,n){"use strict";var i=n("nKUr"),o=n("q1tI"),a=n("mnzM"),c=n.n(a),r=n("YFqc"),s=n.n(r);t.a=function(e){var t=e.goToPage,n=e.goToPixel,a=e.activeElement,r=e.sezDefault,l=e.pagInterna,u=Object(o.useState)(!1),d=u[0],f=u[1];Object(o.useEffect)((function(){r&&t(r)}),[]);var m=function(){document.getElementById("burger"),document.getElementById("navbarMobile");f((function(e){return!e})),console.log("nav",d)};return l?Object(i.jsxs)("div",{className:c.a.menuContainer,children:[Object(i.jsx)(s.a,{href:{pathname:"/"},children:Object(i.jsx)("figure",{className:c.a.logoCraon,children:Object(i.jsx)("img",{src:"/logo-craon.png"})})}),Object(i.jsxs)("nav",{className:c.a.navigation,children:[Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"servizi"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("servizi"===a?c.a.linkActive:""),children:"SERVIZI"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"chisiamo"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("chisiamo"===a?c.a.linkActive:""),children:"CHI SIAMO"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"clienti"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("clienti"===a?c.a.linkActive:""),children:"CLIENTI"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"carriere"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("carriere"===a?c.a.linkActive:""),children:"AREA CARRIERE"})}),Object(i.jsx)(s.a,{href:"/assistenza",children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("sezAssistenza"===a?c.a.linkActive:""),children:"ASSISTENZA"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"contatti"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("contatti"===a?c.a.linkActive:""),children:"CONTATTI"})})]}),Object(i.jsx)("figure",{className:c.a.logoB2B,children:Object(i.jsx)("img",{src:"/b2b_cart_logo.png"})}),Object(i.jsx)("figure",{className:c.a.logoCCA,onClick:function(){return window.open("http://www.codecampus.it/","","")},children:Object(i.jsx)("img",{src:"/logo-codecampus-scopri.png"})}),d?Object(i.jsxs)("div",{className:c.a.w100,children:[Object(i.jsx)("div",{id:"burger",className:c.a.burger,onClick:m,children:Object(i.jsx)("img",{src:"/delete.png"})}),Object(i.jsxs)("div",{id:"navbarMobile",className:c.a.menuContainerMobile,children:[Object(i.jsxs)("nav",{onClick:m,className:c.a.navigationMobile,children:[Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"servizi"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("servizi"===a?c.a.linkActive:""),children:"SERVIZI"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"chisiamo"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("chisiamo"===a?c.a.linkActive:""),children:"CHI SIAMO"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"clienti"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("clienti"===a?c.a.linkActive:""),children:"CLIENTI"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"carriere"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("carriere"===a?c.a.linkActive:""),children:"AREA CARRIERE"})}),Object(i.jsx)(s.a,{href:"/assistenza",children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("sezAssistenza"===a?c.a.linkActive:""),children:"ASSISTENZA"})}),Object(i.jsx)(s.a,{href:{pathname:"/",query:{section:"contatti"}},children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("contatti"===a?c.a.linkActive:""),children:"CONTATTI"})})]}),Object(i.jsx)("figure",{className:c.a.logoB2Bmobile,children:Object(i.jsx)("img",{src:"/b2b_cart_logo.png"})}),Object(i.jsx)("figure",{className:c.a.logoCCAmobile,onClick:function(){return window.open("http://www.codecampus.it/","","")},children:Object(i.jsx)("img",{src:"/logo-codecampus-scopri.png"})})]})]}):Object(i.jsx)("div",{id:"burger",className:c.a.burger,onClick:m,children:Object(i.jsx)("img",{src:"/list.png"})})]}):Object(i.jsxs)("div",{className:c.a.menuContainer,children:[Object(i.jsx)("figure",{className:c.a.logoCraon,onClick:function(){return n(0)},children:Object(i.jsx)("img",{src:"/logo-craon.png"})}),Object(i.jsxs)("nav",{className:c.a.navigation,children:[Object(i.jsx)("div",{onClick:function(){return t("servizi")},className:"".concat(c.a.link," ").concat("servizi"===a?c.a.linkActive:""),children:"SERVIZI"}),Object(i.jsx)("div",{onClick:function(){return t("chisiamo")},className:"".concat(c.a.link," ").concat("chisiamo"===a?c.a.linkActive:""),children:"CHI SIAMO"}),Object(i.jsx)("div",{onClick:function(){return t("clienti")},className:"".concat(c.a.link," ").concat("clienti"===a?c.a.linkActive:""),children:"CLIENTI"}),Object(i.jsx)("div",{onClick:function(){return t("carriere")},className:"".concat(c.a.link," ").concat("carriere"===a?c.a.linkActive:""),children:"AREA CARRIERE"}),Object(i.jsx)(s.a,{href:"/assistenza",children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("sezAssistenza"===a?c.a.linkActive:""),children:"ASSISTENZA"})}),Object(i.jsx)("div",{onClick:function(){return t("contatti")},className:"".concat(c.a.link," ").concat("contatti"===a?c.a.linkActive:""),children:"CONTATTI"})]}),Object(i.jsx)("figure",{className:c.a.logoB2B,children:Object(i.jsx)("img",{src:"/b2b_cart_logo.png"})}),Object(i.jsx)("figure",{className:c.a.logoCCA,onClick:function(){return window.open("http://www.codecampus.it/","","")},children:Object(i.jsx)("img",{src:"/logo-codecampus-scopri.png"})}),d?Object(i.jsxs)("div",{className:c.a.w100,children:[Object(i.jsx)("div",{id:"burger",className:c.a.burger,onClick:m,children:Object(i.jsx)("img",{src:"/delete.png"})}),Object(i.jsxs)("div",{id:"navbarMobile",className:c.a.menuContainerMobile,children:[Object(i.jsxs)("nav",{onClick:m,className:c.a.navigationMobile,children:[Object(i.jsx)("div",{onClick:function(){return t("servizi")},className:"".concat(c.a.link," ").concat("servizi"===a?c.a.linkActive:""),children:"SERVIZI"}),Object(i.jsx)("div",{onClick:function(){return t("chisiamo")},className:"".concat(c.a.link," ").concat("chisiamo"===a?c.a.linkActive:""),children:"CHI SIAMO"}),Object(i.jsx)("div",{onClick:function(){return t("clienti")},className:"".concat(c.a.link," ").concat("clienti"===a?c.a.linkActive:""),children:"CLIENTI"}),Object(i.jsx)("div",{onClick:function(){return t("carriere")},className:"".concat(c.a.link," ").concat("carriere"===a?c.a.linkActive:""),children:"AREA CARRIERE"}),Object(i.jsx)(s.a,{href:"/assistenza",children:Object(i.jsx)("div",{className:"".concat(c.a.link," ").concat("sezAssistenza"===a?c.a.linkActive:""),children:"ASSISTENZA"})}),Object(i.jsx)("div",{onClick:function(){return t("contatti")},className:"".concat(c.a.link," ").concat("contatti"===a?c.a.linkActive:""),children:"CONTATTI"})]}),Object(i.jsx)("figure",{className:c.a.logoB2Bmobile,children:Object(i.jsx)("img",{src:"/b2b_cart_logo.png"})}),Object(i.jsx)("figure",{className:c.a.logoCCAmobile,onClick:function(){return window.open("http://www.codecampus.it/","","")},children:Object(i.jsx)("img",{src:"/logo-codecampus-scopri.png"})})]})]}):Object(i.jsx)("div",{id:"burger",className:c.a.burger,onClick:m,children:Object(i.jsx)("img",{src:"/list.png"})})]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},mnzM:function(e,t,n){e.exports={menuContainer:"Menu_menuContainer__2O8lJ",logoCraon:"Menu_logoCraon__1SYcG",show:"Menu_show__3EiWC",logoCCA:"Menu_logoCCA__1j_AF",show2:"Menu_show2__2HCrw",logoB2B:"Menu_logoB2B__1G-6x",boxRight:"Menu_boxRight__rI_Mf",social:"Menu_social__1_YAD",navigation:"Menu_navigation__1tQjM",link:"Menu_link__6Uk8q",linkActive:"Menu_linkActive__qijc6",burger:"Menu_burger__21NV9",menuContainerMobile:"Menu_menuContainerMobile__1F2Pv",open:"Menu_open__25Fk0",w100:"Menu_w100__2p9yk",logoCCAmobile:"Menu_logoCCAmobile__wfLBE",logoB2Bmobile:"Menu_logoB2Bmobile__Sl0SZ"}},nwdA:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),o=n("q1tI"),a=(n("g4pe"),n("YFqc"),n("q8XL")),c=n("ecPv"),r=n("GQQ9"),s=n.n(r),l=n("j0tn"),u=n.n(l),d=n("xQn5"),f=n("Iel0"),m=n("XoLA"),b=n("1Dtz"),p=n("HMAS"),v=n("9u/5"),j=n("20a2"),h=(n("6Cl6"),n("9a8T")),g=n.n(h);t.default=function(){var e=Object(j.useRouter)();return Object(o.useEffect)((function(){g.a.init({duration:300})}),[]),Object(i.jsx)(u.a,{elements:{sezHome:{},servizi:{},chisiamo:{},clienti:{},carriere:{},contatti:{}},children:function(t){var n=t.refs,o=t.activeElement,r=t.goTo;return Object(i.jsxs)("div",{className:s.a.container,children:[Object(i.jsx)(v.a,{goToPage:function(e){return r(e,"smooth",-90)},goToPixel:function(e){return r(e)},activeElement:o,sezDefault:e.query.section,pagInterna:!1}),Object(i.jsx)("section",{ref:n.sezHome,className:s.a.section,children:Object(i.jsx)(a.a,{goToPage:function(e){return r(e,"smooth",-90)}})}),Object(i.jsx)("section",{ref:n.servizi,className:s.a.section,children:Object(i.jsx)(c.a,{})}),Object(i.jsx)("section",{"data-aos":"fade-up",ref:n.chisiamo,className:s.a.section,children:Object(i.jsx)(p.a,{})}),Object(i.jsx)("section",{ref:n.clienti,className:s.a.section,children:Object(i.jsx)(f.a,{})}),Object(i.jsx)("section",{"data-aos":"fade-up",ref:n.carriere,className:s.a.section,children:Object(i.jsx)(b.a,{attivo:o})}),Object(i.jsx)("section",{ref:n.contatti,className:s.a.section,children:Object(i.jsx)(m.a,{})}),Object(i.jsx)(d.a,{goToPage:function(e){return r(e,"smooth",-90)}})]})}})}}}]);