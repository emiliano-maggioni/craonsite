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
              };
              debugger;
              _context.prev = 3;
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_12___default()(config);

            case 6:
              response = _context.sent;
              debugger;

              if (response.status == 200) {
                console.log('Success');
                alert('Email inviata correttamente. \n Un nostro tecnico specialista la ricontatterà al più presto.');
                reset();
              }

              console.log('response', response);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              console.log('errore', _context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
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
          lineNumber: 55,
          columnNumber: 21
        }, _this), title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
          lineNumber: 63,
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
          lineNumber: 75,
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
          lineNumber: 87,
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
          lineNumber: 99,
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
          lineNumber: 117,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextareaAutosize"], _objectSpread({
          name: "messaggio",
          placeholder: "Messaggio *",
          className: "".concat(_form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description, " ").concat(!!errors.messaggio && _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.errore)
        }, register('messaggio', {
          required: true
        })), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, _this), !!errors.messaggio && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "msgerror",
          children: msgerror
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttonArea,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
            value: "end",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 38
            }, _this),
            label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                children: " * Ho letto  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: '/terminiecondizioni',
                children: " la policy sulla privacy "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, _this),
            labelPlacement: "end"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_buttons_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLWFzc2lzdGVuemEvZm9ybS1hc3Npc3RlbnphLmpzIl0sIm5hbWVzIjpbIkZvcm1Bc3Npc3RlbnphIiwidGl0bGUiLCJzdWJ0aXRsZSIsImljb24iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwiYXhpb3MiLCJyZXNwb25zZSIsInN0YXR1cyIsImFsZXJ0IiwibXNnZXJyb3IiLCJjbGFzc2VzIiwiY29udGFpbmVyRm9ybSIsImhlYWRlckZvcm0iLCJ0aXRsZUZvcm0iLCJpY29uRm9ybSIsImNvbnRlbnRGb3JtIiwibm9tZSIsInJlcXVpcmVkIiwiY29nbm9tZSIsImF6aWVuZGEiLCJlbWFpbCIsInBhdHRlcm4iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJvZ2dldHRvIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdnaW8iLCJlcnJvcmUiLCJidXR0b25BcmVhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGlCQUNlQywrREFBTyxFQUR0QjtBQUFBLE1BQzFDQyxRQUQwQyxZQUMxQ0EsUUFEMEM7QUFBQSxNQUNoQ0MsWUFEZ0MsWUFD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QUFBQSxtQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZHSCxDQXBKRDs7R0FBTTFDLGM7VUFDK0RJLHVEOzs7S0FEL0RKLGM7QUFzSk5BLGNBQWMsQ0FBQzJDLFNBQWYsR0FBMkI7QUFDdkIxQyxPQUFLLEVBQUUyQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUREO0FBRXZCNUMsVUFBUSxFQUFFMEMsaURBQVMsQ0FBQ0MsTUFGRztBQUd2QjFDLE1BQUksRUFBRXlDLGlEQUFTLENBQUNDO0FBSE8sQ0FBM0I7QUFNZTdDLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fzc2lzdGVuemEuOGEzNzY1YWJkN2M4ZjcwMjFjMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2Zvcm0tYXNzaXN0ZW56YS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvYnV0dG9ucy9CdXR0b25cIjtcbmltcG9ydCB7IEZvcm1Db250cm9sTGFiZWwsIFRleHRhcmVhQXV0b3NpemUsIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEZvcm1Bc3Npc3RlbnphID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpY29uIH0pID0+IHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCh2YWx1ZXMpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiBgL2FwaS9tYWlsZXJgLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG5cbiAgICAgICAgfTtcblxuICAgICAgICAgZGVidWdnZXJcblxuICAgICAgICB0cnkge1xuICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdFbWFpbCBpbnZpYXRhIGNvcnJldHRhbWVudGUuIFxcbiBVbiBub3N0cm8gdGVjbmljbyBzcGVjaWFsaXN0YSBsYSByaWNvbnRhdHRlcsOgIGFsIHBpw7kgcHJlc3RvLicpXG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcmUnLCBlcnJvcilcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbGV0IG1zZ2Vycm9yID0gXCJDYW1wbyBPYmJsaWdhdG9yaW9cIjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lckZvcm19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyRm9ybX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVGb3JtfSA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Gb3JtfSBzcmM9e2ljb259PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEZvcm19PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsoISFlcnJvcnMubm9tZSkgPyBtc2dlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25vbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLm5vbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29nbm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvZ25vbWUgKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17KCEhZXJyb3JzLmNvZ25vbWUpID8gbXNnZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb2dub21lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycy5jb2dub21lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF6aWVuZGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBemllbmRhICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyghIWVycm9ycy5hemllbmRhKSA/IG1zZ2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignYXppZW5kYScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMuYXppZW5kYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyEhZXJyb3JzLmVtYWlsID8gXCJJbnNlcmlyZSB1bmEgZW1haWwgdmFsaWRhXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluc2VyaXJlIHVuYSBlbWFpbCB2YWxpZGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2dnZXR0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9nZ2V0dG8gKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17KCEhZXJyb3JzLm9nZ2V0dG8pID8gbXNnZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdvZ2dldHRvJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycy5vZ2dldHRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdnaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdnaW8gKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGVzY3JpcHRpb259ICR7ISFlcnJvcnMubWVzc2FnZ2lvICYmIGNsYXNzZXMuZXJyb3JlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ21lc3NhZ2dpbycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8vZGVmYXVsdFZhbHVlPXtkYXRhPy5vZ2dldHRvfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgeyghIWVycm9ycy5tZXNzYWdnaW8pICYmIDxkaXYgY2xhc3NOYW1lPVwibXNnZXJyb3JcIiA+e21zZ2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQXJlYX0gICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICogSG8gbGV0dG8gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvdGVybWluaWVjb25kaXppb25pJ30+IGxhIHBvbGljeSBzdWxsYSBwcml2YWN5IDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUGxhY2VtZW50PVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn07XG5cbkZvcm1Bc3Npc3RlbnphLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQXNzaXN0ZW56YTsiXSwic291cmNlUm9vdCI6IiJ9