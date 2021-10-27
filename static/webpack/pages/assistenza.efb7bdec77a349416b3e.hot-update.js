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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_14__);





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

              // debugger
              if (response.status == 200) {
                console.log('Success');
                /*  toast.success('Email inviata correttamente. \n Un nostro tecnico specialista la ricontatterà al più presto.', {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                  });
                      */

                alert('Email inviata correttamente. \n Un nostro tecnico specialista la ricontatterà al più presto.');
                reset();
              } else {
                alert('si è verificato un errore nell\'invio della email. \nPuò scrivereci all\'indirizzo info@craon.it, \noppure conttarci telefonicamente al 039.6612489.\nCi scusiamo per il disagio.');
              }

              console.log('response', response);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.log('errore', _context.t0);
              alert('si è verificato un errore nell\'invio della email. \nPuò scrivereci all\'indirizzo info@craon.it, \noppure conttarci telefonicamente al 039.6612489.\nCi scusiamo per il disagio.');

            case 14:
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
          lineNumber: 71,
          columnNumber: 21
        }, _this), title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
          lineNumber: 79,
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
          lineNumber: 91,
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
          lineNumber: 103,
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
          lineNumber: 115,
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
          lineNumber: 133,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextareaAutosize"], _objectSpread({
          name: "messaggio",
          placeholder: "Messaggio *",
          className: "".concat(_form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description, " ").concat(!!errors.messaggio && _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.errore)
        }, register('messaggio', {
          required: true
        })), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this), !!errors.messaggio && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "msgerror",
          children: msgerror
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _form_assistenza_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttonArea,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
            value: "end",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 38
            }, _this),
            label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                children: " * Ho letto  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: '/terminiecondizioni',
                children: " la policy sulla privacy "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 33
            }, _this),
            labelPlacement: "end"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_buttons_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLWFzc2lzdGVuemEvZm9ybS1hc3Npc3RlbnphLmpzIl0sIm5hbWVzIjpbIkZvcm1Bc3Npc3RlbnphIiwidGl0bGUiLCJzdWJ0aXRsZSIsImljb24iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImVycm9ycyIsImZvcm1TdGF0ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwiYXhpb3MiLCJyZXNwb25zZSIsInN0YXR1cyIsImFsZXJ0IiwibXNnZXJyb3IiLCJjbGFzc2VzIiwiY29udGFpbmVyRm9ybSIsImhlYWRlckZvcm0iLCJ0aXRsZUZvcm0iLCJpY29uRm9ybSIsImNvbnRlbnRGb3JtIiwibm9tZSIsInJlcXVpcmVkIiwiY29nbm9tZSIsImF6aWVuZGEiLCJlbWFpbCIsInBhdHRlcm4iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJvZ2dldHRvIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdnaW8iLCJlcnJvcmUiLCJidXR0b25BcmVhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxpQkFDZUMsK0RBQU8sRUFEdEI7QUFBQSxNQUMxQ0MsUUFEMEMsWUFDMUNBLFFBRDBDO0FBQUEsTUFD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QSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSlI7QUFTSSwwQkFBYyxFQUFDO0FBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFjSSxxRUFBQyxpRUFBRDtBQUFRLGdCQUFJLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkdILENBaktEOztHQUFNMUMsYztVQUMrREksdUQ7OztLQUQvREosYztBQW1LTkEsY0FBYyxDQUFDMkMsU0FBZixHQUEyQjtBQUN2QjFDLE9BQUssRUFBRTJDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREQ7QUFFdkI1QyxVQUFRLEVBQUUwQyxpREFBUyxDQUFDQyxNQUZHO0FBR3ZCMUMsTUFBSSxFQUFFeUMsaURBQVMsQ0FBQ0M7QUFITyxDQUEzQjtBQU1lN0MsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNzaXN0ZW56YS5lZmI3YmRlYzc3YTM0OTQxNmIzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZm9ybS1hc3Npc3RlbnphLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9idXR0b25zL0J1dHRvblwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xMYWJlbCwgVGV4dGFyZWFBdXRvc2l6ZSwgQ2hlY2tib3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cblxuY29uc3QgRm9ybUFzc2lzdGVuemEgPSAoeyB0aXRsZSwgc3VidGl0bGUsIGljb24gfSkgPT4ge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgcmVzZXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KHZhbHVlcykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcblxuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IGAvYXBpL21haWxlcmAsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGRlYnVnZ2VyXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoY29uZmlnKTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MnKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvKiAgdG9hc3Quc3VjY2VzcygnRW1haWwgaW52aWF0YSBjb3JyZXR0YW1lbnRlLiBcXG4gVW4gbm9zdHJvIHRlY25pY28gc3BlY2lhbGlzdGEgbGEgcmljb250YXR0ZXLDoCBhbCBwacO5IHByZXN0by4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0VtYWlsIGludmlhdGEgY29ycmV0dGFtZW50ZS4gXFxuIFVuIG5vc3RybyB0ZWNuaWNvIHNwZWNpYWxpc3RhIGxhIHJpY29udGF0dGVyw6AgYWwgcGnDuSBwcmVzdG8uJylcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdzaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSBuZWxsXFwnaW52aW8gZGVsbGEgZW1haWwuIFxcblB1w7Igc2NyaXZlcmVjaSBhbGxcXCdpbmRpcml6em8gaW5mb0BjcmFvbi5pdCwgXFxub3BwdXJlIGNvbnR0YXJjaSB0ZWxlZm9uaWNhbWVudGUgYWwgMDM5LjY2MTI0ODkuXFxuQ2kgc2N1c2lhbW8gcGVyIGlsIGRpc2FnaW8uJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JlJywgZXJyb3IpXG4gICAgICAgICAgIGFsZXJ0KCdzaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSBuZWxsXFwnaW52aW8gZGVsbGEgZW1haWwuIFxcblB1w7Igc2NyaXZlcmVjaSBhbGxcXCdpbmRpcml6em8gaW5mb0BjcmFvbi5pdCwgXFxub3BwdXJlIGNvbnR0YXJjaSB0ZWxlZm9uaWNhbWVudGUgYWwgMDM5LjY2MTI0ODkuXFxuQ2kgc2N1c2lhbW8gcGVyIGlsIGRpc2FnaW8uJyApXG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgbXNnZXJyb3IgPSBcIkNhbXBvIE9iYmxpZ2F0b3Jpb1wiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyRm9ybX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJGb3JtfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUZvcm19ID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkZvcm19IHNyYz17aWNvbn0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21lICpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9eyghIWVycm9ycy5ub21lKSA/IG1zZ2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3Rlcignbm9tZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMubm9tZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2dub21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29nbm9tZSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsoISFlcnJvcnMuY29nbm9tZSkgPyBtc2dlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvZ25vbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmNvZ25vbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXppZW5kYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF6aWVuZGEgKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17KCEhZXJyb3JzLmF6aWVuZGEpID8gbXNnZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdhemllbmRhJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycy5hemllbmRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEZpZWxkXCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ISFlcnJvcnMuZW1haWwgPyBcIkluc2VyaXJlIHVuYSBlbWFpbCB2YWxpZGFcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5zZXJpcmUgdW5hIGVtYWlsIHZhbGlkYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRGaWVsZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvZ2dldHRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT2dnZXR0byAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsoISFlcnJvcnMub2dnZXR0bykgPyBtc2dlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ29nZ2V0dG8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLm9nZ2V0dG99XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0RmllbGRcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2dpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2dpbyAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gJHshIWVycm9ycy5tZXNzYWdnaW8gJiYgY2xhc3Nlcy5lcnJvcmV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbWVzc2FnZ2lvJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgLy9kZWZhdWx0VmFsdWU9e2RhdGE/Lm9nZ2V0dG99XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICB7KCEhZXJyb3JzLm1lc3NhZ2dpbykgJiYgPGRpdiBjbGFzc05hbWU9XCJtc2dlcnJvclwiID57bXNnZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25BcmVhfSAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKiBIbyBsZXR0byAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy90ZXJtaW5pZWNvbmRpemlvbmknfT4gbGEgcG9saWN5IHN1bGxhIHByaXZhY3kgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9XCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxufTtcblxuRm9ybUFzc2lzdGVuemEucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Bc3Npc3RlbnphOyJdLCJzb3VyY2VSb290IjoiIn0=