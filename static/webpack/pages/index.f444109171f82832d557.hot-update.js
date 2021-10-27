webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/ServiziSection.js":
/*!***********************************************!*\
  !*** ./components/sections/ServiziSection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiziSection.module.scss */ "./components/sections/ServiziSection.module.scss");
/* harmony import */ var _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/title/Title */ "./components/title/Title.js");
/* harmony import */ var components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/card-servizi/Card */ "./components/card-servizi/Card.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\fraan\\Documents\\craonsite-modifiche_giugno\\components\\sections\\ServiziSection.js",
    _this = undefined,
    _s = $RefreshSig$();









var ServiziSection = function ServiziSection(sezDefault) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "section ".concat(_ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sectionServizi, " "),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.titleSection,
        children: " Servizi "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardGrid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "App Mobile",
            showButton: true,
            buttonText: "scopri",
            onClick: function onClick() {
              return router.push('/servizi/Appmobile');
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/servizi/app_mobile.jpg",
              className: "img-fluid rounded",
              alt: "CREAZIONE APP MOBILE "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "DataBase Management",
            onClick: function onClick() {
              return router.push('/servizi/DatabaseManagement');
            },
            showButton: true,
            buttonText: "scopri",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return router.push('/servizi/DatabaseManagement');
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/servizi/db_management.jpg",
                className: "img-fluid rounded",
                alt: "DB LEAD MANAGEMENT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 30
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Enterprise Resource Planning",
            showButton: true,
            buttonText: "scopri",
            onClick: function onClick() {
              return router.push('/servizi/Enterprise');
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return router.push('/servizi/Enterprise');
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/servizi/erp.jpg",
                className: "img-fluid rounded",
                alt: "ERP ENTERPRISE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 34
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "IT Security",
            onClick: function onClick() {
              return router.push('/servizi/Itsecurity');
            },
            showButton: true,
            buttonText: "scopri",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return router.push('/servizi/Itsecurity');
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/servizi/it_security.jpg",
                className: "img-fluid rounded",
                alt: "IT SECURITY SICUREZZA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 26
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), "                    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Sviluppo Software",
            onClick: function onClick() {
              return router.push('/servizi/SviluppoSoftware');
            },
            showButton: true,
            buttonText: "scopri",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return router.push('/servizi/SviluppoSoftware');
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/servizi/sviluppo_software.jpg",
                className: "img-fluid rounded",
                alt: "SVILUPPO SOFTWARE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 118
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 47
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ServiziSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_card_servizi_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "System Integration",
            href: "/servizi_Enterprise",
            showButton: true,
            buttonText: "scopri",
            onClick: function onClick() {
              return router.push('/servizi/SystemIntegration');
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/servizi/system_integration_mc.png",
              className: "img-fluid rounded",
              alt: "SYSTEM INTEGRATION MICROSOFT CERTIFIED"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "barGrey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(ServiziSection, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ServiziSection;
/* harmony default export */ __webpack_exports__["default"] = (ServiziSection);

var _c;

$RefreshReg$(_c, "ServiziSection");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9TZXJ2aXppU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJTZXJ2aXppU2VjdGlvbiIsInNlekRlZmF1bHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwic2VjdGlvblNlcnZpemkiLCJjb250ZW50IiwidGl0bGVTZWN0aW9uIiwiY2FyZEdyaWQiLCJjYXJkQ29udGFpbmVyIiwicHVzaCIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUFBOztBQUVuQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBR0Esc0JBQ0k7QUFBSyxhQUFTLG9CQUFhQyxrRUFBTyxDQUFDQyxjQUFyQixNQUFkO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELGtFQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBR0k7QUFBSyxpQkFBUyxFQUFFSCxrRUFBTyxDQUFDSSxRQUF4QjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUosa0VBQU8sQ0FBQ0ssYUFBeEI7QUFBQSxpQ0FDSSxxRUFBQyxvRUFBRDtBQUFhLGlCQUFLLEVBQUMsWUFBbkI7QUFFSSxzQkFBVSxFQUFFLElBRmhCO0FBRXNCLHNCQUFVLEVBQUMsUUFGakM7QUFHSSxtQkFBTyxFQUFFO0FBQUEscUJBQU1QLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLG9CQUFaLENBQU47QUFBQSxhQUhiO0FBQUEsbUNBUUk7QUFBSyxpQkFBRyxFQUFDLHlCQUFUO0FBQW1DLHVCQUFTLEVBQUMsbUJBQTdDO0FBQWlFLGlCQUFH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QSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNDQ0MTA5MTcxZjgyODMyZDU1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vU2Vydml6aVNlY3Rpb24ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiY29tcG9uZW50cy90aXRsZS9UaXRsZVwiO1xuaW1wb3J0IENhcmRTZXJ2aXppIGZyb20gXCJjb21wb25lbnRzL2NhcmQtc2Vydml6aS9DYXJkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTZXJ2aXppU2VjdGlvbiA9IChzZXpEZWZhdWx0KSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uICR7Y2xhc3Nlcy5zZWN0aW9uU2Vydml6aX0gYH0gPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVNlY3Rpb259PiBTZXJ2aXppIDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkR3JpZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTZXJ2aXppIHRpdGxlPVwiQXBwIE1vYmlsZVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QnV0dG9uPXt0cnVlfSBidXR0b25UZXh0PVwic2NvcHJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3NlcnZpemkvQXBwbW9iaWxlJyl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgID5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2Vydml6aS9hcHBfbW9iaWxlLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkXCIgYWx0PVwiQ1JFQVpJT05FIEFQUCBNT0JJTEUgXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkU2Vydml6aT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTZXJ2aXppIHRpdGxlPVwiRGF0YUJhc2UgTWFuYWdlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zZXJ2aXppL0RhdGFiYXNlTWFuYWdlbWVudCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCdXR0b249e3RydWV9IGJ1dHRvblRleHQ9XCJzY29wcmlcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zZXJ2aXppL0RhdGFiYXNlTWFuYWdlbWVudCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zZXJ2aXppL2RiX21hbmFnZW1lbnQuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWRcIiBhbHQ9XCJEQiBMRUFEIE1BTkFHRU1FTlRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFNlcnZpemk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU2Vydml6aSB0aXRsZT1cIkVudGVycHJpc2UgUmVzb3VyY2UgUGxhbm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCdXR0b249e3RydWV9IGJ1dHRvblRleHQ9XCJzY29wcmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2Vydml6aS9FbnRlcnByaXNlJyl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zZXJ2aXppL0VudGVycHJpc2UnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2Vydml6aS9lcnAuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWRcIiBhbHQ9XCJFUlAgRU5URVJQUklTRVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkU2Vydml6aT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTZXJ2aXppIHRpdGxlPVwiSVQgU2VjdXJpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2Vydml6aS9JdHNlY3VyaXR5Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0J1dHRvbj17dHJ1ZX0gYnV0dG9uVGV4dD1cInNjb3ByaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319ICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3NlcnZpemkvSXRzZWN1cml0eScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2Vydml6aS9pdF9zZWN1cml0eS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZFwiIGFsdD1cIklUIFNFQ1VSSVRZIFNJQ1VSRVpaQVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkU2Vydml6aT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU2Vydml6aSB0aXRsZT1cIlN2aWx1cHBvIFNvZnR3YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3NlcnZpemkvU3ZpbHVwcG9Tb2Z0d2FyZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCdXR0b249e3RydWV9IGJ1dHRvblRleHQ9XCJzY29wcmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zZXJ2aXppL1N2aWx1cHBvU29mdHdhcmUnKX0+PGltZyBzcmM9XCIvc2Vydml6aS9zdmlsdXBwb19zb2Z0d2FyZS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZFwiIGFsdD1cIlNWSUxVUFBPIFNPRlRXQVJFXCIgLz48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFNlcnZpemk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU2Vydml6aSB0aXRsZT1cIlN5c3RlbSBJbnRlZ3JhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zZXJ2aXppX0VudGVycHJpc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCdXR0b249e3RydWV9IGJ1dHRvblRleHQ9XCJzY29wcmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2Vydml6aS9TeXN0ZW1JbnRlZ3JhdGlvbicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NlcnZpemkvc3lzdGVtX2ludGVncmF0aW9uX21jLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkXCIgYWx0PVwiU1lTVEVNIElOVEVHUkFUSU9OIE1JQ1JPU09GVCBDRVJUSUZJRURcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkU2Vydml6aT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJHcmV5XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpemlTZWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=