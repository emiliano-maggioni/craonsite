webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/MainPage.js":
/*!***************************!*\
  !*** ./pages/MainPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_sections_HomeSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/sections/HomeSection */ "./components/sections/HomeSection.js");
/* harmony import */ var components_sections_ServiziSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/sections/ServiziSection */ "./components/sections/ServiziSection.js");
/* harmony import */ var _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/MainPage.module.scss */ "./styles/MainPage.module.scss");
/* harmony import */ var _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_single_page_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-single-page-navigation */ "./node_modules/react-single-page-navigation/dist/src/index.js");
/* harmony import */ var react_single_page_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_single_page_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var components_sections_ClientiSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/sections/ClientiSection */ "./components/sections/ClientiSection.js");
/* harmony import */ var components_sections_ContattiSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/sections/ContattiSection */ "./components/sections/ContattiSection.js");
/* harmony import */ var components_sections_CarriereSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/sections/CarriereSection */ "./components/sections/CarriereSection.js");
/* harmony import */ var components_sections_ChisiamoSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/sections/ChisiamoSection */ "./components/sections/ChisiamoSection.js");
/* harmony import */ var components_menu_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/menu/Menu */ "./components/menu/Menu.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_google_analytics_gtag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/google-analytics/gtag */ "./components/google-analytics/gtag.js");


var _jsxFileName = "C:\\Users\\fraan\\Documents\\craonsite-modifiche_giugno\\pages\\MainPage.js",
    _this = undefined,
    _s = $RefreshSig$();



















var MainPage = function MainPage() {
  _s();

  var marginMenu = -90;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_16___default.a.init({
      duration: 300
    });
  }, []); // console.log("QUERY",router.query.section); 

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_single_page_navigation__WEBPACK_IMPORTED_MODULE_7___default.a, {
    elements: {
      sezHome: {},
      servizi: {},
      chisiamo: {},
      clienti: {},
      carriere: {},
      contatti: {}
    },
    children: function children(_ref) {
      var refs = _ref.refs,
          activeElement = _ref.activeElement,
          goTo = _ref.goTo;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_menu_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
          goToPage: function goToPage(pagina) {
            return goTo(pagina, "smooth", marginMenu);
          },
          goToPixel: function goToPixel(pos) {
            return goTo(pos);
          },
          activeElement: activeElement,
          sezDefault: router.query.section,
          pagInterna: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          ref: refs.sezHome,
          className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_sections_HomeSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
            goToPage: function goToPage(pagina) {
              return goTo(pagina, "smooth", marginMenu);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          ref: refs.servizi,
          className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_sections_ServiziSection__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          "data-aos": "fade-up",
          ref: refs.chisiamo,
          className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_sections_ChisiamoSection__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          ref: refs.clienti,
          className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_sections_ClientiSection__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          "data-aos": "fade-up",
          ref: refs.carriere,
          className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_sections_CarriereSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
            attivo: activeElement
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          ref: refs.contatti,
          className: _styles_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_sections_ContattiSection__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_footer_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          goToPage: function goToPage(pagina) {
            return goTo(pagina, "smooth", marginMenu);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 13
  }, _this);
};

_s(MainPage, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"]];
});

_c = MainPage;
/* harmony default export */ __webpack_exports__["default"] = (MainPage);

var _c;

$RefreshReg$(_c, "MainPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpblBhZ2UuanMiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJtYXJnaW5NZW51Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQW9zIiwiaW5pdCIsImR1cmF0aW9uIiwic2V6SG9tZSIsInNlcnZpemkiLCJjaGlzaWFtbyIsImNsaWVudGkiLCJjYXJyaWVyZSIsImNvbnRhdHRpIiwicmVmcyIsImFjdGl2ZUVsZW1lbnQiLCJnb1RvIiwiY2xhc3NlcyIsImNvbnRhaW5lciIsInBhZ2luYSIsInBvcyIsInF1ZXJ5Iiwic2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaQywrQ0FBRyxDQUFDQyxJQUFKLENBQVM7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBVDtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQsQ0FIbUIsQ0FVbkI7O0FBRUEsc0JBR1EscUVBQUMsbUVBQUQ7QUFBa0IsWUFBUSxFQUFFO0FBQUVDLGFBQU8sRUFBRSxFQUFYO0FBQWVDLGFBQU8sRUFBRSxFQUF4QjtBQUE0QkMsY0FBUSxFQUFFLEVBQXRDO0FBQTBDQyxhQUFPLEVBQUUsRUFBbkQ7QUFBdURDLGNBQVEsRUFBRSxFQUFqRTtBQUFxRUMsY0FBUSxFQUFFO0FBQS9FLEtBQTVCO0FBQUEsY0FDSztBQUFBLFVBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFVBQVNDLGFBQVQsUUFBU0EsYUFBVDtBQUFBLFVBQXdCQyxJQUF4QixRQUF3QkEsSUFBeEI7QUFBQSwwQkFDRztBQUFLLGlCQUFTLEVBQUVDLG1FQUFPLENBQUNDLFNBQXhCO0FBQUEsZ0NBRUkscUVBQUMsNkRBQUQ7QUFBTSxrQkFBUSxFQUFFLGtCQUFDQyxNQUFEO0FBQUEsbUJBQVlILElBQUksQ0FBQ0csTUFBRCxFQUFTLFFBQVQsRUFBbUJsQixVQUFuQixDQUFoQjtBQUFBLFdBQWhCO0FBQWdFLG1CQUFTLEVBQUUsbUJBQUNtQixHQUFEO0FBQUEsbUJBQVNKLElBQUksQ0FBQ0ksR0FBRCxDQUFiO0FBQUEsV0FBM0U7QUFBK0YsdUJBQWEsRUFBRUwsYUFBOUc7QUFBNkgsb0JBQVUsRUFBRWIsTUFBTSxDQUFDbUIsS0FBUCxDQUFhQyxPQUF0SjtBQUErSixvQkFBVSxFQUFFO0FBQTNLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFJSTtBQUFTLGFBQUcsRUFBRVIsSUFBSSxDQUFDTixPQUFuQjtBQUE0QixtQkFBUyxFQUFFUyxtRUFBTyxDQUFDSyxPQUEvQztBQUFBLGlDQUNJLHFFQUFDLHVFQUFEO0FBQWEsb0JBQVEsRUFBRSxrQkFBQ0gsTUFBRDtBQUFBLHFCQUFZSCxJQUFJLENBQUNHLE1BQUQsRUFBUyxRQUFULEVBQW1CbEIsVUFBbkIsQ0FBaEI7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQVMsYUFBRyxFQUFFYSxJQUFJLENBQUNMLE9BQW5CO0FBQTRCLG1CQUFTLEVBQUVRLG1FQUFPLENBQUNLLE9BQS9DO0FBQUEsaUNBQ0kscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFVSTtBQUFTLHNCQUFTLFNBQWxCO0FBQTRCLGFBQUcsRUFBRVIsSUFBSSxDQUFDSixRQUF0QztBQUFnRCxtQkFBUyxFQUFFTyxtRUFBTyxDQUFDSyxPQUFuRTtBQUFBLGlDQUNJLHFFQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLGVBYUk7QUFBUyxhQUFHLEVBQUVSLElBQUksQ0FBQ0gsT0FBbkI7QUFBNEIsbUJBQVMsRUFBRU0sbUVBQU8sQ0FBQ0ssT0FBL0M7QUFBQSxpQ0FDSSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSixlQWdCSTtBQUFTLHNCQUFTLFNBQWxCO0FBQTRCLGFBQUcsRUFBRVIsSUFBSSxDQUFDRixRQUF0QztBQUFnRCxtQkFBUyxFQUFFSyxtRUFBTyxDQUFDSyxPQUFuRTtBQUFBLGlDQUNJLHFFQUFDLDRFQUFEO0FBQWlCLGtCQUFNLEVBQUVQO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSixlQW1CSTtBQUFTLGFBQUcsRUFBRUQsSUFBSSxDQUFDRCxRQUFuQjtBQUE2QixtQkFBUyxFQUFFSSxtRUFBTyxDQUFDSyxPQUFoRDtBQUFBLGlDQUNJLHFFQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSixlQXNCSSxxRUFBQyxnRUFBRDtBQUFRLGtCQUFRLEVBQUUsa0JBQUNILE1BQUQ7QUFBQSxtQkFBWUgsSUFBSSxDQUFDRyxNQUFELEVBQVMsUUFBVCxFQUFtQmxCLFVBQW5CLENBQWhCO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREg7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIUjtBQWtDSCxDQTlDRDs7R0FBTUQsUTtVQUVhRyxzRDs7O0tBRmJILFE7QUFnRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3Mjk3MmRkMDA4YWFiZjJkZTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb25zL0hvbWVTZWN0aW9uXCI7XG5pbXBvcnQgU2Vydml6aVNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbnMvU2Vydml6aVNlY3Rpb25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9zdHlsZXMvTWFpblBhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBTY3JvbGxOYXZpZ2F0aW9uIGZyb20gJ3JlYWN0LXNpbmdsZS1wYWdlLW5hdmlnYXRpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9mb290ZXIvRm9vdGVyXCI7XG5pbXBvcnQgQ2xpZW50aVNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbnMvQ2xpZW50aVNlY3Rpb25cIjtcbmltcG9ydCBDb250YXR0aVNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbnMvQ29udGF0dGlTZWN0aW9uXCI7XG5pbXBvcnQgQ2FycmllcmVTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb25zL0NhcnJpZXJlU2VjdGlvblwiO1xuaW1wb3J0IENoaXNpYW1vU2VjdGlvbiBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9ucy9DaGlzaWFtb1NlY3Rpb25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJjb21wb25lbnRzL21lbnUvTWVudVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcbmltcG9ydCBBb3MgZnJvbSBcImFvc1wiO1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9jb21wb25lbnRzL2dvb2dsZS1hbmFseXRpY3MvZ3RhZydcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFyZ2luTWVudSA9IC05MDtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBb3MuaW5pdCh7IGR1cmF0aW9uOiAzMDAgfSk7XG4gICAgfSwgW10pXG5cbiAgICBcblxuIFxuICAgIC8vIGNvbnNvbGUubG9nKFwiUVVFUllcIixyb3V0ZXIucXVlcnkuc2VjdGlvbik7IFxuXG4gICAgcmV0dXJuIChcbiBcblxuICAgICAgICAgICAgPFNjcm9sbE5hdmlnYXRpb24gZWxlbWVudHM9e3sgc2V6SG9tZToge30sIHNlcnZpemk6IHt9LCBjaGlzaWFtbzoge30sIGNsaWVudGk6IHt9LCBjYXJyaWVyZToge30sIGNvbnRhdHRpOiB7fSB9fSA+XG4gICAgICAgICAgICAgICAgeyh7IHJlZnMsIGFjdGl2ZUVsZW1lbnQsIGdvVG8gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBnb1RvUGFnZT17KHBhZ2luYSkgPT4gZ29UbyhwYWdpbmEsIFwic21vb3RoXCIsIG1hcmdpbk1lbnUpfSBnb1RvUGl4ZWw9eyhwb3MpID0+IGdvVG8ocG9zKX0gYWN0aXZlRWxlbWVudD17YWN0aXZlRWxlbWVudH0gc2V6RGVmYXVsdD17cm91dGVyLnF1ZXJ5LnNlY3Rpb259IHBhZ0ludGVybmE9e2ZhbHNlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiByZWY9e3JlZnMuc2V6SG9tZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lU2VjdGlvbiBnb1RvUGFnZT17KHBhZ2luYSkgPT4gZ29UbyhwYWdpbmEsIFwic21vb3RoXCIsIG1hcmdpbk1lbnUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gcmVmPXtyZWZzLnNlcnZpeml9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Vydml6aVNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGRhdGEtYW9zPVwiZmFkZS11cFwiIHJlZj17cmVmcy5jaGlzaWFtb30gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlzaWFtb1NlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHJlZj17cmVmcy5jbGllbnRpfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWVudGlTZWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBkYXRhLWFvcz1cImZhZGUtdXBcIiByZWY9e3JlZnMuY2FycmllcmV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FycmllcmVTZWN0aW9uIGF0dGl2bz17YWN0aXZlRWxlbWVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHJlZj17cmVmcy5jb250YXR0aX0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YXR0aVNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgZ29Ub1BhZ2U9eyhwYWdpbmEpID0+IGdvVG8ocGFnaW5hLCBcInNtb290aFwiLCBtYXJnaW5NZW51KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsTmF2aWdhdGlvbj5cbiAgICAgICAgXG4gICAgKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9