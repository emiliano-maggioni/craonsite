webpackHotUpdate_N_E("pages/assistenza",{

/***/ "./components/form-assistenza/form-assistenza.js":
/*!*******************************************************!*\
  !*** ./components/form-assistenza/form-assistenza.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-assistenza.module.scss */ "./components/form-assistenza/form-assistenza.module.scss");
/* harmony import */ var _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/buttons/Button */ "./components/buttons/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\fraan\\Documents\\craonsite-modifiche_giugno\\components\\form-assistenza\\form-assistenza.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var FormAssistenza = function FormAssistenza(_ref) {
  _s();

  var title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      reset = _useForm.reset,
      errors = _useForm.formState.errors;

  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = Object(C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var config, response;
      return C_Users_fraan_Documents_craonsite_modifiche_giugno_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(values);
              config = {
                method: 'POST',
                url: "/api/mailer",
                headers: {
                  'Content-type': 'application/json'
                },
                data: values
              }; // debugger

              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_12___default()(config);

            case 5:
              response = _context.sent;

              //  debugger
              if (response.data.status == 200) {
                console.log('Success');
                reset();
              }

              console.log('response', response);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.log('errore', _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));
    return _onSubmit.apply(this, arguments);
  }

  var msgerror = "Campo Obbligatorio";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.containerForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerForm,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.titleForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.iconForm,
          src: icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contentForm,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
          fullWidth: true,
          name: "nome",
          label: "Nome *",
          variant: "outlined",
          helperText: !!errors.nome ? msgerror : null
        }, register('nome', {
          required: true
        })), {}, {
          error: !!errors.nome,
          className: "textField"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
          fullWidth: true,
          name: "cognome",
          label: "Cognome *",
          variant: "outlined",
          helperText: !!errors.cognome ? msgerror : null
        }, register('cognome', {
          required: true
        })), {}, {
          error: !!errors.cognome,
          className: "textField"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
          fullWidth: true,
          name: "azienda",
          label: "Azienda *",
          variant: "outlined",
          helperText: !!errors.azienda ? msgerror : null
        }, register('azienda', {
          required: true
        })), {}, {
          error: !!errors.azienda,
          className: "textField"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
          fullWidth: true,
          name: "email",
          label: "Email *",
          variant: "outlined",
          helperText: !!errors.email ? "Inserire una email valida" : null
        }, register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Inserire una email valida"
          }
        })), {}, {
          error: !!errors.email,
          className: "textField"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
          fullWidth: true,
          name: "oggetto",
          label: "Oggetto *",
          variant: "outlined",
          helperText: !!errors.oggetto ? msgerror : null
        }, register('oggetto', {
          required: true
        })), {}, {
          error: !!errors.oggetto,
          className: "textField"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextareaAutosize"], _objectSpread({
          name: "messaggio",
          placeholder: "Messaggio *",
          className: "".concat(_form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description, " ").concat(!!errors.messaggio && _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.errore)
        }, register('messaggio', {
          required: true
        })), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this), !!errors.messaggio && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "msgerror",
          children: msgerror
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttonArea,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
            value: "end",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 38
            }, _this),
            label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                children: " * Ho letto  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: '/terminiecondizioni',
                children: " la policy sulla privacy "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 33
            }, _this),
            labelPlacement: "end"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_buttons_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, _this);
};

_s(FormAssistenza, "AVMO71AGqpdM+T3vMJPUgxhfr3U=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c = FormAssistenza;
FormAssistenza.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FormAssistenza);

var _c;

$RefreshReg$(_c, "FormAssistenza");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLWFzc2lzdGVuemEvZm9ybS1hc3Npc3RlbnphLmpzIl0sIm5hbWVzIjpbIkZvcm1Bc3Npc3RlbnphIiwidGl0bGUiLCJzdWJ0aXRsZSIsImljb24iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwiYXhpb3MiLCJyZXNwb25zZSIsInN0YXR1cyIsIm1zZ2Vycm9yIiwiY2xhc3NlcyIsImNvbnRhaW5lckZvcm0iLCJoZWFkZXJGb3JtIiwidGl0bGVGb3JtIiwiaWNvbkZvcm0iLCJjb250ZW50Rm9ybSIsIm5vbWUiLCJyZXF1aXJlZCIsImNvZ25vbWUiLCJhemllbmRhIiwiZW1haWwiLCJwYXR0ZXJuIiwidmFsdWUiLCJtZXNzYWdlIiwib2dnZXR0byIsImRlc2NyaXB0aW9uIiwibWVzc2FnZ2lvIiwiZXJyb3JlIiwiYnV0dG9uQXJlYSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxpQkFDZUMsK0RBQU8sRUFEdEI7QUFBQSxNQUMxQ0MsUUFEMEMsWUFDMUNBLFFBRDBDO0FBQUEsTUFDaENDLFlBRGdDLFlBQ2hDQSxZQURn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QTtBQUFBO0FBQUEsaUJBOUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZHSCxDQWxKRDs7R0FBTXpDLGM7VUFDK0RJLHVEOzs7S0FEL0RKLGM7QUFvSk5BLGNBQWMsQ0FBQzBDLFNBQWYsR0FBMkI7QUFDdkJ6QyxPQUFLLEVBQUUwQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUREO0FBRXZCM0MsVUFBUSxFQUFFeUMsaURBQVMsQ0FBQ0MsTUFGRztBQUd2QnpDLE1BQUksRUFBRXdDLGlEQUFTLENBQUNDO0FBSE8sQ0FBM0I7QUFNZTVDLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fzc2lzdGVuemEuNWZlZDdhODc1ZGE2YTZlZjQ5OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2Zvcm0tYXNzaXN0ZW56YS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvYnV0dG9ucy9CdXR0b25cIjtcbmltcG9ydCB7IEZvcm1Db250cm9sTGFiZWwsIFRleHRhcmVhQXV0b3NpemUsIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEZvcm1Bc3Npc3RlbnphID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpY29uIH0pID0+IHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCh2YWx1ZXMpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiBgL2FwaS9tYWlsZXJgLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG5cbiAgICAgICAgfTtcblxuICAgICAgICAgLy8gZGVidWdnZXJcblxuICAgICAgICB0cnkge1xuICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG4gICAgICAgICAgLy8gIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JlJywgZXJyb3IpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxldCBtc2dlcnJvciA9IFwiQ2FtcG8gT2JibGlnYXRvcmlvXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJGb3JtfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckZvcm19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlRm9ybX0gPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uRm9ybX0gc3JjPXtpY29ufT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRGb3JtfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWUgKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17KCEhZXJyb3JzLm5vbWUpID8gbXNnZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdub21lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycy5ub21lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZ25vbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb2dub21lICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyghIWVycm9ycy5jb2dub21lKSA/IG1zZ2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29nbm9tZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMuY29nbm9tZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhemllbmRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXppZW5kYSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsoISFlcnJvcnMuYXppZW5kYSkgPyBtc2dlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2F6aWVuZGEnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmF6aWVuZGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXshIWVycm9ycy5lbWFpbCA/IFwiSW5zZXJpcmUgdW5hIGVtYWlsIHZhbGlkYVwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnNlcmlyZSB1bmEgZW1haWwgdmFsaWRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9nZ2V0dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZ2dldHRvICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyghIWVycm9ycy5vZ2dldHRvKSA/IG1zZ2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3Rlcignb2dnZXR0bycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMub2dnZXR0b31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZ2lvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZ2lvICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRlc2NyaXB0aW9ufSAkeyEhZXJyb3JzLm1lc3NhZ2dpbyAmJiBjbGFzc2VzLmVycm9yZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdtZXNzYWdnaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAvL2RlZmF1bHRWYWx1ZT17ZGF0YT8ub2dnZXR0b31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIHsoISFlcnJvcnMubWVzc2FnZ2lvKSAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1zZ2Vycm9yXCIgPnttc2dlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFyZWF9ICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAqIEhvIGxldHRvICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Rlcm1pbmllY29uZGl6aW9uaSd9PiBsYSBwb2xpY3kgc3VsbGEgcHJpdmFjeSA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59O1xuXG5Gb3JtQXNzaXN0ZW56YS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUFzc2lzdGVuemE7Il0sInNvdXJjZVJvb3QiOiIifQ==