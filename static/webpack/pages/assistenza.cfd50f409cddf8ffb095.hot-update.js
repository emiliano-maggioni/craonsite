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
              } else {
                alert('si è verificato un errore nell\'invio della email. \nPuò scruvereci direttamente all\'indirizzo info@craon.it, \noppure conttarci telefonicamente al 039.6612489.\nCi scusiamo per il disagio.');
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
          lineNumber: 56,
          columnNumber: 21
        }, _this), title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
          lineNumber: 64,
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
          lineNumber: 76,
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
          lineNumber: 88,
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
          lineNumber: 100,
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
          lineNumber: 118,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextareaAutosize"], _objectSpread({
          name: "messaggio",
          placeholder: "Messaggio *",
          className: "".concat(_form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description, " ").concat(!!errors.messaggio && _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.errore)
        }, register('messaggio', {
          required: true
        })), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, _this), !!errors.messaggio && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "msgerror",
          children: msgerror
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttonArea,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
            value: "end",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 38
            }, _this),
            label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                children: " * Ho letto  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: '/terminiecondizioni',
                children: " la policy sulla privacy "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 33
            }, _this),
            labelPlacement: "end"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_buttons_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLWFzc2lzdGVuemEvZm9ybS1hc3Npc3RlbnphLmpzIl0sIm5hbWVzIjpbIkZvcm1Bc3Npc3RlbnphIiwidGl0bGUiLCJzdWJ0aXRsZSIsImljb24iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwiYXhpb3MiLCJyZXNwb25zZSIsInN0YXR1cyIsImFsZXJ0IiwibXNnZXJyb3IiLCJjbGFzc2VzIiwiY29udGFpbmVyRm9ybSIsImhlYWRlckZvcm0iLCJ0aXRsZUZvcm0iLCJpY29uRm9ybSIsImNvbnRlbnRGb3JtIiwibm9tZSIsInJlcXVpcmVkIiwiY29nbm9tZSIsImF6aWVuZGEiLCJlbWFpbCIsInBhdHRlcm4iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJvZ2dldHRvIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdnaW8iLCJlcnJvcmUiLCJidXR0b25BcmVhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGlCQUNlQywrREFBTyxFQUR0QjtBQUFBLE1BQzFDQyxRQUQwQyxZQUMxQ0EsUUFEMEM7QUFBQSxNQUNoQ0MsWUFEZ0MsWUFD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LGlFQUFEO0FBQVEsZ0JBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2R0gsQ0FySkQ7O0dBQU0xQyxjO1VBQytESSx1RDs7O0tBRC9ESixjO0FBdUpOQSxjQUFjLENBQUMyQyxTQUFmLEdBQTJCO0FBQ3ZCMUMsT0FBSyxFQUFFMkMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFERDtBQUV2QjVDLFVBQVEsRUFBRTBDLGlEQUFTLENBQUNDLE1BRkc7QUFHdkIxQyxNQUFJLEVBQUV5QyxpREFBUyxDQUFDQztBQUhPLENBQTNCO0FBTWU3Qyw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hc3Npc3RlbnphLmNmZDUwZjQwOWNkZGY4ZmZiMDk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9mb3JtLWFzc2lzdGVuemEubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbnMvQnV0dG9uXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbExhYmVsLCBUZXh0YXJlYUF1dG9zaXplLCBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBGb3JtQXNzaXN0ZW56YSA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaWNvbiB9KSA9PiB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogYC9hcGkvbWFpbGVyYCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogdmFsdWVzLFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpO1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBhbGVydCgnRW1haWwgaW52aWF0YSBjb3JyZXR0YW1lbnRlLiBcXG4gVW4gbm9zdHJvIHRlY25pY28gc3BlY2lhbGlzdGEgbGEgcmljb250YXR0ZXLDoCBhbCBwacO5IHByZXN0by4nKVxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3NpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlIG5lbGxcXCdpbnZpbyBkZWxsYSBlbWFpbC4gXFxuUHXDsiBzY3J1dmVyZWNpIGRpcmV0dGFtZW50ZSBhbGxcXCdpbmRpcml6em8gaW5mb0BjcmFvbi5pdCwgXFxub3BwdXJlIGNvbnR0YXJjaSB0ZWxlZm9uaWNhbWVudGUgYWwgMDM5LjY2MTI0ODkuXFxuQ2kgc2N1c2lhbW8gcGVyIGlsIGRpc2FnaW8uJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JlJywgZXJyb3IpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxldCBtc2dlcnJvciA9IFwiQ2FtcG8gT2JibGlnYXRvcmlvXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJGb3JtfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckZvcm19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlRm9ybX0gPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uRm9ybX0gc3JjPXtpY29ufT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRGb3JtfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWUgKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17KCEhZXJyb3JzLm5vbWUpID8gbXNnZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdub21lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycy5ub21lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZ25vbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb2dub21lICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyghIWVycm9ycy5jb2dub21lKSA/IG1zZ2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29nbm9tZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMuY29nbm9tZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhemllbmRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXppZW5kYSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsoISFlcnJvcnMuYXppZW5kYSkgPyBtc2dlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2F6aWVuZGEnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmF6aWVuZGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXshIWVycm9ycy5lbWFpbCA/IFwiSW5zZXJpcmUgdW5hIGVtYWlsIHZhbGlkYVwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnNlcmlyZSB1bmEgZW1haWwgdmFsaWRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9nZ2V0dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZ2dldHRvICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyghIWVycm9ycy5vZ2dldHRvKSA/IG1zZ2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3Rlcignb2dnZXR0bycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMub2dnZXR0b31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZ2lvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZ2lvICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRlc2NyaXB0aW9ufSAkeyEhZXJyb3JzLm1lc3NhZ2dpbyAmJiBjbGFzc2VzLmVycm9yZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdtZXNzYWdnaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAvL2RlZmF1bHRWYWx1ZT17ZGF0YT8ub2dnZXR0b31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIHsoISFlcnJvcnMubWVzc2FnZ2lvKSAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1zZ2Vycm9yXCIgPnttc2dlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFyZWF9ICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAqIEhvIGxldHRvICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Rlcm1pbmllY29uZGl6aW9uaSd9PiBsYSBwb2xpY3kgc3VsbGEgcHJpdmFjeSA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59O1xuXG5Gb3JtQXNzaXN0ZW56YS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUFzc2lzdGVuemE7Il0sInNvdXJjZVJvb3QiOiIifQ==