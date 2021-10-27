webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/Menu.js":
/*!*********************************!*\
  !*** ./components/menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.module.scss */ "./components/menu/Menu.module.scss");
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _google_analytics_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../google-analytics/gtag */ "./components/google-analytics/gtag.js");


var _jsxFileName = "C:\\Users\\fraan\\Documents\\craonsite-modifiche_giugno\\components\\menu\\Menu.js",
    _this = undefined,
    _s = $RefreshSig$();







var Menu = function Menu(_ref) {
  _s();

  var goToPage = _ref.goToPage,
      goToPixel = _ref.goToPixel,
      activeElement = _ref.activeElement,
      sezDefault = _ref.sezDefault,
      pagInterna = _ref.pagInterna;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      navbar = _useState[0],
      setNavbar = _useState[1]; //console.log("SEZ DEFAULT:"+sezDefault);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!!sezDefault) goToPage(sezDefault);
    _google_analytics_gtag__WEBPACK_IMPORTED_MODULE_5__["event"]({
      action: 'go_to_page',
      category: 'menu',
      label: sezDefault,
      value: sezDefault
    });
  }, []);

  var handleClick = function handleClick() {
    var toggler = document.getElementById("burger");
    var navBarMobile = document.getElementById("navbarMobile");
    setNavbar(function (prevState) {
      return !prevState;
    }); //console.log('nav', navbar)
  };

  return pagInterna ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
        className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoCraon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/logo-craon.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 66
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navigation,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'servizi'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'servizi' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "SERVIZI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'chisiamo'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'chisiamo' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "CHI SIAMO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'clienti'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'clienti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "CLIENTI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'carriere'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'carriere' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "AREA CARRIERE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/assistenza",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'sezAssistenza' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "ASSISTENZA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'contatti'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'contatti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "CONTATTI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoB2B,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/b2b_cart_logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 59
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoCCA,
      onClick: function onClick() {
        return window.open('http://www.codecampus.it/', '', '');
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo-codecampus-scopri.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 123
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }, _this), navbar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.w100,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "burger",
        className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.burger,
        onClick: handleClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/delete.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 33
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "navbarMobile",
        className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainerMobile,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          onClick: handleClick,
          className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navigationMobile,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'servizi'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'servizi' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "SERVIZI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'chisiamo'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'chisiamo' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "CHI SIAMO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'clienti'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'clienti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "CLIENTI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'carriere'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'carriere' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "AREA CARRIERE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/assistenza",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'sezAssistenza' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "ASSISTENZA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'contatti'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'contatti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "CONTATTI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 37
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
          className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoB2Bmobile,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/b2b_cart_logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 76
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
          className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoCCAmobile,
          onClick: function onClick() {
            return window.open('http://www.codecampus.it/', '', '');
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/logo-codecampus-scopri.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 141
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 33
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "burger",
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.burger,
      onClick: handleClick,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/list.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoCraon,
      onClick: function onClick() {
        return goToPixel(0);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo-craon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 89
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navigation,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'servizi'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return goToPage('servizi');
          },
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'servizi' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "SERVIZI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'chisiamo'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return goToPage('chisiamo');
          },
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'chisiamo' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "CHI SIAMO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'clienti'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return goToPage('clienti');
          },
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'clienti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "CLIENTI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'carriere'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return goToPage('carriere');
          },
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'carriere' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "AREA CARRIERE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/assistenza",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'sezAssistenza' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "ASSISTENZA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/',
          query: {
            section: 'carriere'
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return goToPage('contatti');
          },
          className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'contatti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
          children: "CONTATTI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoB2B,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/b2b_cart_logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 58
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoCCA,
      onClick: function onClick() {
        return window.open('http://www.codecampus.it/', '', '');
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo-codecampus-scopri.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 123
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }, _this), navbar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.w100,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "burger",
        className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.burger,
        onClick: handleClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/delete.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 33
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 29
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "navbarMobile",
        className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainerMobile,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          onClick: handleClick,
          className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navigationMobile,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'servizi'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return goToPage('servizi');
              },
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'servizi' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "SERVIZI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'chisiamo'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return goToPage('chisiamo');
              },
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'chisiamo' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "CHI SIAMO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'clienti'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return goToPage('clienti');
              },
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'clienti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "CLIENTI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'carriere'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return goToPage('carriere');
              },
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'carriere' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "AREA CARRIERE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/assistenza",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'sezAssistenza' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "ASSISTENZA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: '/',
              query: {
                section: 'contatti'
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return goToPage('contatti');
              },
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'contatti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "CONTATTI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 37
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
          className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoB2Bmobile,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/b2b_cart_logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 75
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
          className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoCCAmobile,
          onClick: function onClick() {
            return window.open('http://www.codecampus.it/', '', '');
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/logo-codecampus-scopri.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 141
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 33
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "burger",
      className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.burger,
      onClick: handleClick,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/list.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 17
  }, _this);
};

_s(Menu, "ayn35HdkQ6ExL0ARs1Y9yK0C49s=");

_c = Menu;
Menu.propTypes = {
  goToPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  goToPixel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  activeElement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  sezDefault: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  pagInterna: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnUuanMiXSwibmFtZXMiOlsiTWVudSIsImdvVG9QYWdlIiwiZ29Ub1BpeGVsIiwiYWN0aXZlRWxlbWVudCIsInNlekRlZmF1bHQiLCJwYWdJbnRlcm5hIiwidXNlU3RhdGUiLCJuYXZiYXIiLCJzZXROYXZiYXIiLCJ1c2VFZmZlY3QiLCJndGFnIiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJ0b2dnbGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkJhck1vYmlsZSIsInByZXZTdGF0ZSIsImNsYXNzZXMiLCJtZW51Q29udGFpbmVyIiwicGF0aG5hbWUiLCJsb2dvQ3Jhb24iLCJuYXZpZ2F0aW9uIiwicXVlcnkiLCJzZWN0aW9uIiwibGluayIsImxpbmtBY3RpdmUiLCJsb2dvQjJCIiwibG9nb0NDQSIsIndpbmRvdyIsIm9wZW4iLCJ3MTAwIiwiYnVyZ2VyIiwibWVudUNvbnRhaW5lck1vYmlsZSIsIm5hdmlnYXRpb25Nb2JpbGUiLCJsb2dvQjJCbW9iaWxlIiwibG9nb0NDQW1vYmlsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRTtBQUFBOztBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLGFBQTRDLFFBQTVDQSxhQUE0QztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQyxLQUFELENBRnlDO0FBQUEsTUFFdEVD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QUFBO0FBQUEsYUExRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcEVaO0FBMklILENBdEtEOztHQUFNZixJOztLQUFBQSxJO0FBdUtOQSxJQUFJLENBQUN3QyxTQUFMLEdBQWlCO0FBQ2J2QyxVQUFRLEVBQUV3QyxpREFBUyxDQUFDQyxJQURQO0FBRWJ4QyxXQUFTLEVBQUV1QyxpREFBUyxDQUFDQyxJQUZSO0FBR2J2QyxlQUFhLEVBQUVzQyxpREFBUyxDQUFDRSxNQUhaO0FBSWJ2QyxZQUFVLEVBQUVxQyxpREFBUyxDQUFDRSxNQUpUO0FBS2J0QyxZQUFVLEVBQUVvQyxpREFBUyxDQUFDRztBQUxULENBQWpCO0FBUWU1QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTE0NDFhZDMwMmZjMThkNjU3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lbnUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSAnLi4vZ29vZ2xlLWFuYWx5dGljcy9ndGFnJ1xuXG5cbmNvbnN0IE1lbnUgPSAoeyBnb1RvUGFnZSwgZ29Ub1BpeGVsLCBhY3RpdmVFbGVtZW50LCBzZXpEZWZhdWx0LCBwYWdJbnRlcm5hIH0pID0+IHtcblxuICAgIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiU0VaIERFRkFVTFQ6XCIrc2V6RGVmYXVsdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCEhc2V6RGVmYXVsdClcbiAgICAgICAgICAgIGdvVG9QYWdlKHNlekRlZmF1bHQpO1xuICAgICAgICBndGFnLmV2ZW50KHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2dvX3RvX3BhZ2UnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdtZW51JyxcbiAgICAgICAgICAgIGxhYmVsOiBzZXpEZWZhdWx0LFxuICAgICAgICAgICAgdmFsdWU6IHNlekRlZmF1bHRcbiAgICAgICAgfSlcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblxuICAgICAgICB2YXIgdG9nZ2xlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVyZ2VyXCIpO1xuICAgICAgICB2YXIgbmF2QmFyTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJNb2JpbGVcIik7XG4gICAgICAgIHNldE5hdmJhcihwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSlcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbmF2JywgbmF2YmFyKVxuXG5cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIChwYWdJbnRlcm5hKSA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQ3Jhb259ICAgPjxpbWcgc3JjPVwiL2xvZ28tY3Jhb24ucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ3NlcnZpemknIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ3NlcnZpemknKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0gPlNFUlZJWkk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ2NoaXNpYW1vJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjaGlzaWFtbycpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfT5DSEkgU0lBTU88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ2NsaWVudGknIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NsaWVudGknKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0gPkNMSUVOVEk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ2NhcnJpZXJlJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjYXJyaWVyZScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfT5BUkVBIENBUlJJRVJFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fzc2lzdGVuemFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnc2V6QXNzaXN0ZW56YScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+QVNTSVNURU5aQTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY29udGF0dGknIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NvbnRhdHRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkNPTlRBVFRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQjJCfSAgPjxpbWcgc3JjPVwiL2IyYl9jYXJ0X2xvZ28ucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NDQX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuY29kZWNhbXB1cy5pdC8nLCAnJywgJycpfSA+PGltZyBzcmM9XCIvbG9nby1jb2RlY2FtcHVzLXNjb3ByaS5wbmdcIiAvPjwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudzEwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1cmdlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVsZXRlLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJNb2JpbGVcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUNvbnRhaW5lck1vYmlsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMubmF2aWdhdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdzZXJ2aXppJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXJ2aXppJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5TRVJWSVpJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjaGlzaWFtbycgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2hpc2lhbW8nKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0+Q0hJIFNJQU1PPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjbGllbnRpJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjbGllbnRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DTElFTlRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjYXJyaWVyZScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2FycmllcmUnKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0+QVJFQSBDQVJSSUVSRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc3Npc3RlbnphXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ3NlekFzc2lzdGVuemEnKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0gPkFTU0lTVEVOWkE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ2NvbnRhdHRpJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjb250YXR0aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfT5DT05UQVRUSTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0IyQm1vYmlsZX0gPjxpbWcgc3JjPVwiL2IyYl9jYXJ0X2xvZ28ucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NDQW1vYmlsZX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuY29kZWNhbXB1cy5pdC8nLCAnJywgJycpfSA+PGltZyBzcmM9XCIvbG9nby1jb2RlY2FtcHVzLXNjb3ByaS5wbmdcIiAvPjwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXJnZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnVyZ2VyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbGlzdC5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVDb250YWluZXJ9ID5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NyYW9ufSBvbkNsaWNrPXsoKSA9PiBnb1RvUGl4ZWwoMCl9ID48aW1nIHNyYz1cIi9sb2dvLWNyYW9uLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmlnYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnc2Vydml6aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdzZXJ2aXppJyl9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnc2Vydml6aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+U0VSVklaSTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY2hpc2lhbW8nIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBnb1RvUGFnZSgnY2hpc2lhbW8nKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjaGlzaWFtbycpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+Q0hJIFNJQU1PPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjbGllbnRpJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ2NsaWVudGknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjbGllbnRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DTElFTlRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjYXJyaWVyZScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjYXJyaWVyZScpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NhcnJpZXJlJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkFSRUEgQ0FSUklFUkU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXNzaXN0ZW56YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXpBc3Npc3RlbnphJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5BU1NJU1RFTlpBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjYXJyaWVyZScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjb250YXR0aScpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NvbnRhdHRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkNPTlRBVFRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQjJCfSA+PGltZyBzcmM9XCIvYjJiX2NhcnRfbG9nby5wbmdcIiAvPjwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQ0NBfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbignaHR0cDovL3d3dy5jb2RlY2FtcHVzLml0LycsICcnLCAnJyl9ID48aW1nIHNyYz1cIi9sb2dvLWNvZGVjYW1wdXMtc2NvcHJpLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53MTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnVyZ2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1cmdlcn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kZWxldGUucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhck1vYmlsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Q29udGFpbmVyTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmlnYXRpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnc2Vydml6aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdzZXJ2aXppJyl9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnc2Vydml6aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+U0VSVklaSTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY2hpc2lhbW8nIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBnb1RvUGFnZSgnY2hpc2lhbW8nKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjaGlzaWFtbycpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+Q0hJIFNJQU1PPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjbGllbnRpJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ2NsaWVudGknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjbGllbnRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DTElFTlRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjYXJyaWVyZScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjYXJyaWVyZScpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NhcnJpZXJlJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkFSRUEgQ0FSUklFUkU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXNzaXN0ZW56YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXpBc3Npc3RlbnphJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5BU1NJU1RFTlpBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjb250YXR0aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjb250YXR0aScpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NvbnRhdHRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkNPTlRBVFRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQjJCbW9iaWxlfT48aW1nIHNyYz1cIi9iMmJfY2FydF9sb2dvLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29DQ0Ftb2JpbGV9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmNvZGVjYW1wdXMuaXQvJywgJycsICcnKX0gPjxpbWcgc3JjPVwiL2xvZ28tY29kZWNhbXB1cy1zY29wcmkucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1cmdlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpc3QucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgKVxuXG4gICAgKTtcbn1cbk1lbnUucHJvcFR5cGVzID0ge1xuICAgIGdvVG9QYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnb1RvUGl4ZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZUVsZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V6RGVmYXVsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWdJbnRlcm5hOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==