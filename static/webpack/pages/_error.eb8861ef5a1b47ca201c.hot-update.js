webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cfraan%5CDocuments%5Ccraonsite-modifiche_giugno%5Cpages%5C_error.js!./":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cfraan%5CDocuments%5Ccraonsite-modifiche_giugno%5Cpages%5C_error.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\fraan\\Documents\\craonsite-modifiche_giugno\\pages\\_error.js";

function Error(_ref) {
  var statusCode = _ref.statusCode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: statusCode ? "Un errore ".concat(statusCode, " sul server") : 'An error occurred on client'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

_c = Error;

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUEyRTtBQUNsRztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsU0FBU0EsS0FBVCxPQUErQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUMzQixzQkFDRTtBQUFBLGNBQ0dBLFVBQVUsdUJBQ01BLFVBRE4sbUJBRVA7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FSTUQsSzs7QUFVUEEsS0FBSyxDQUFDRSxlQUFOLEdBQXdCLGlCQUFrQjtBQUFBLE1BQWZDLEdBQWUsU0FBZkEsR0FBZTtBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTtBQUN4QyxNQUFNSCxVQUFVLEdBQUdFLEdBQUcsR0FBR0EsR0FBRyxDQUFDRixVQUFQLEdBQW9CRyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0gsVUFBUCxHQUFvQixHQUFqRTtBQUNBLFNBQU87QUFBRUEsY0FBVSxFQUFWQTtBQUFGLEdBQVA7QUFDRCxDQUhEOztBQUtlRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fZXJyb3IuZWI4ODYxZWY1YTFiNDdjYTIwMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcZnJhYW5cXFxcRG9jdW1lbnRzXFxcXGNyYW9uc2l0ZS1tb2RpZmljaGVfZ2l1Z25vXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwPlxyXG4gICAgICAgIHtzdGF0dXNDb2RlXHJcbiAgICAgICAgICA/IGBVbiBlcnJvcmUgJHtzdGF0dXNDb2RlfSBzdWwgc2VydmVyYFxyXG4gICAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J31cclxuICAgICAgPC9wPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBFcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XHJcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNFxyXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==