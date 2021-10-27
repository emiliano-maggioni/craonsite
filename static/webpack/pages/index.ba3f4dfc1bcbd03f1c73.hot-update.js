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
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
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
          columnNumber: 25
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
          columnNumber: 25
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
          columnNumber: 25
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
          columnNumber: 25
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return goToPage('servizi');
            },
            className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'servizi' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
            children: "SERVIZI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return goToPage('chisiamo');
            },
            className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'chisiamo' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
            children: "CHI SIAMO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return goToPage('clienti');
            },
            className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'clienti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
            children: "CLIENTI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return goToPage('carriere');
            },
            className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'carriere' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
            children: "AREA CARRIERE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/assistenza",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'sezAssistenza' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
              children: "ASSISTENZA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return goToPage('contatti');
            },
            className: "".concat(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, " ").concat(activeElement === 'contatti' ? _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkActive : ""),
            children: "CONTATTI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
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
            lineNumber: 143,
            columnNumber: 75
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
            lineNumber: 144,
            columnNumber: 141
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
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
        lineNumber: 153,
        columnNumber: 29
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnUuanMiXSwibmFtZXMiOlsiTWVudSIsImdvVG9QYWdlIiwiZ29Ub1BpeGVsIiwiYWN0aXZlRWxlbWVudCIsInNlekRlZmF1bHQiLCJwYWdJbnRlcm5hIiwidXNlU3RhdGUiLCJuYXZiYXIiLCJzZXROYXZiYXIiLCJ1c2VFZmZlY3QiLCJndGFnIiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJ0b2dnbGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkJhck1vYmlsZSIsInByZXZTdGF0ZSIsImNsYXNzZXMiLCJtZW51Q29udGFpbmVyIiwicGF0aG5hbWUiLCJsb2dvQ3Jhb24iLCJuYXZpZ2F0aW9uIiwicXVlcnkiLCJzZWN0aW9uIiwibGluayIsImxpbmtBY3RpdmUiLCJsb2dvQjJCIiwibG9nb0NDQSIsIndpbmRvdyIsIm9wZW4iLCJ3MTAwIiwiYnVyZ2VyIiwibWVudUNvbnRhaW5lck1vYmlsZSIsIm5hdmlnYXRpb25Nb2JpbGUiLCJsb2dvQjJCbW9iaWxlIiwibG9nb0NDQW1vYmlsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvRTtBQUFBOztBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLGFBQTRDLFFBQTVDQSxhQUE0QztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQyxLQUFELENBRnlDO0FBQUEsTUFFdEVD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkF3Qkg7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFpQixlQUFTLEVBQUVaLHdEQUFPLENBQUNjLE1BQXBDO0FBQTRDLGFBQU8sRUFBRXBCLFdBQXJEO0FBQUEsNkJBRUk7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FwRVo7QUFpSUgsQ0E1SkQ7O0dBQU1mLEk7O0tBQUFBLEk7QUE2Sk5BLElBQUksQ0FBQ3dDLFNBQUwsR0FBaUI7QUFDYnZDLFVBQVEsRUFBRXdDLGlEQUFTLENBQUNDLElBRFA7QUFFYnhDLFdBQVMsRUFBRXVDLGlEQUFTLENBQUNDLElBRlI7QUFHYnZDLGVBQWEsRUFBRXNDLGlEQUFTLENBQUNFLE1BSFo7QUFJYnZDLFlBQVUsRUFBRXFDLGlEQUFTLENBQUNFLE1BSlQ7QUFLYnRDLFlBQVUsRUFBRW9DLGlEQUFTLENBQUNHO0FBTFQsQ0FBakI7QUFRZTVDLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhM2Y0ZGZjMWJjYmQwM2YxYzczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9nb29nbGUtYW5hbHl0aWNzL2d0YWcnXG5cblxuY29uc3QgTWVudSA9ICh7IGdvVG9QYWdlLCBnb1RvUGl4ZWwsIGFjdGl2ZUVsZW1lbnQsIHNlekRlZmF1bHQsIHBhZ0ludGVybmEgfSkgPT4ge1xuXG4gICAgY29uc3QgW25hdmJhciwgc2V0TmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vY29uc29sZS5sb2coXCJTRVogREVGQVVMVDpcIitzZXpEZWZhdWx0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoISFzZXpEZWZhdWx0KVxuICAgICAgICAgICAgZ29Ub1BhZ2Uoc2V6RGVmYXVsdCk7XG4gICAgICAgICAgICBndGFnLmV2ZW50KHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdnb190b19wYWdlJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ21lbnUnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBzZXpEZWZhdWx0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzZXpEZWZhdWx0XG4gICAgICAgICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgdmFyIHRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlclwiKTtcbiAgICAgICAgdmFyIG5hdkJhck1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyTW9iaWxlXCIpO1xuICAgICAgICBzZXROYXZiYXIocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpXG4gICAgICAgIC8vY29uc29sZS5sb2coJ25hdicsIG5hdmJhcilcblxuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAocGFnSW50ZXJuYSkgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVDb250YWluZXJ9ID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NyYW9ufSAgID48aW1nIHNyYz1cIi9sb2dvLWNyYW9uLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdzZXJ2aXppJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXJ2aXppJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5TRVJWSVpJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjaGlzaWFtbycgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2hpc2lhbW8nKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0+Q0hJIFNJQU1PPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjbGllbnRpJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjbGllbnRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DTElFTlRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjYXJyaWVyZScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2FycmllcmUnKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0+QVJFQSBDQVJSSUVSRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc3Npc3RlbnphXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ3NlekFzc2lzdGVuemEnKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0gPkFTU0lTVEVOWkE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ2NvbnRhdHRpJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjb250YXR0aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfT5DT05UQVRUSTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0IyQn0gID48aW1nIHNyYz1cIi9iMmJfY2FydF9sb2dvLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29DQ0F9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmNvZGVjYW1wdXMuaXQvJywgJycsICcnKX0gPjxpbWcgc3JjPVwiL2xvZ28tY29kZWNhbXB1cy1zY29wcmkucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAge25hdmJhciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLncxMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXJnZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnVyZ2VyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2RlbGV0ZS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyTW9iaWxlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVDb250YWluZXJNb2JpbGV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmlnYXRpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnc2Vydml6aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnc2Vydml6aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+U0VSVklaSTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY2hpc2lhbW8nIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NoaXNpYW1vJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkNISSBTSUFNTzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY2xpZW50aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2xpZW50aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfSA+Q0xJRU5USTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY2FycmllcmUnIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NhcnJpZXJlJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkFSRUEgQ0FSUklFUkU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXNzaXN0ZW56YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXpBc3Npc3RlbnphJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5BU1NJU1RFTlpBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjb250YXR0aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY29udGF0dGknKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0+Q09OVEFUVEk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29CMkJtb2JpbGV9ID48aW1nIHNyYz1cIi9iMmJfY2FydF9sb2dvLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29DQ0Ftb2JpbGV9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmNvZGVjYW1wdXMuaXQvJywgJycsICcnKX0gPjxpbWcgc3JjPVwiL2xvZ28tY29kZWNhbXB1cy1zY29wcmkucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnVyZ2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1cmdlcn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpc3QucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Q29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29DcmFvbn0gb25DbGljaz17KCkgPT4gZ29Ub1BpeGVsKDApfSA+PGltZyBzcmM9XCIvbG9nby1jcmFvbi5wbmdcIiAvPjwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnc2Vydml6aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ3NlcnZpemknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXJ2aXppJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5TRVJWSVpJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjaGlzaWFtbycgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ2NoaXNpYW1vJyl9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2hpc2lhbW8nKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0gPkNISSBTSUFNTzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBzZWN0aW9uOiAnY2xpZW50aScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ2NsaWVudGknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjbGllbnRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DTElFTlRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHNlY3Rpb246ICdjYXJyaWVyZScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ2NhcnJpZXJlJyl9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAkeyhhY3RpdmVFbGVtZW50ID09PSAnY2FycmllcmUnKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0+QVJFQSBDQVJSSUVSRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc3Npc3RlbnphXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ3NlekFzc2lzdGVuemEnKSA/IGNsYXNzZXMubGlua0FjdGl2ZSA6IFwiXCJ9YH0gPkFTU0lTVEVOWkE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgc2VjdGlvbjogJ2NhcnJpZXJlJyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBnb1RvUGFnZSgnY29udGF0dGknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjb250YXR0aScpID8gY2xhc3Nlcy5saW5rQWN0aXZlIDogXCJcIn1gfT5DT05UQVRUSTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0IyQn0gPjxpbWcgc3JjPVwiL2IyYl9jYXJ0X2xvZ28ucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NDQX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cuY29kZWNhbXB1cy5pdC8nLCAnJywgJycpfSA+PGltZyBzcmM9XCIvbG9nby1jb2RlY2FtcHVzLXNjb3ByaS5wbmdcIiAvPjwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudzEwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1cmdlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVsZXRlLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJNb2JpbGVcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUNvbnRhaW5lck1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZpZ2F0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ3NlcnZpemknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXJ2aXppJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5TRVJWSVpJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjaGlzaWFtbycpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NoaXNpYW1vJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DSEkgU0lBTU88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ29Ub1BhZ2UoJ2NsaWVudGknKX0gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdjbGllbnRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5DTElFTlRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjYXJyaWVyZScpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NhcnJpZXJlJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkFSRUEgQ0FSUklFUkU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXNzaXN0ZW56YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9ICR7KGFjdGl2ZUVsZW1lbnQgPT09ICdzZXpBc3Npc3RlbnphJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9ID5BU1NJU1RFTlpBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdvVG9QYWdlKCdjb250YXR0aScpfSBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua30gJHsoYWN0aXZlRWxlbWVudCA9PT0gJ2NvbnRhdHRpJykgPyBjbGFzc2VzLmxpbmtBY3RpdmUgOiBcIlwifWB9PkNPTlRBVFRJPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQjJCbW9iaWxlfT48aW1nIHNyYz1cIi9iMmJfY2FydF9sb2dvLnBuZ1wiIC8+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29DQ0Ftb2JpbGV9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmNvZGVjYW1wdXMuaXQvJywgJycsICcnKX0gPjxpbWcgc3JjPVwiL2xvZ28tY29kZWNhbXB1cy1zY29wcmkucG5nXCIgLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1cmdlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpc3QucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgKVxuXG4gICAgKTtcbn1cbk1lbnUucHJvcFR5cGVzID0ge1xuICAgIGdvVG9QYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnb1RvUGl4ZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZUVsZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V6RGVmYXVsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYWdJbnRlcm5hOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==