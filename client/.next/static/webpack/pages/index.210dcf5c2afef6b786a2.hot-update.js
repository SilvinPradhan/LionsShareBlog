webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/Header.jsx":
/*!************************************!*\
  !*** ./components/menu/Header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Component_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Component.module.css */ "./components/Component.module.css");
/* harmony import */ var _Component_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Component_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\menu\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();






 // import { menuData } from '../../MenuData/menu';



var Header = function Header(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      style: {
        backgroundColor: "#233c91",
        color: "#ffffff"
      },
      expand: "md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "35px",
          height: "35px",
          src: "https://www.flaticon.com/svg/vstatic/svg/616/616412.svg?token=exp=1612391794~hmac=275f9a641552b73feb8ee7f4557138df"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
          className: _Component_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.App_Name,
          children: "LionsShare"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 24
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        className: _Component_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar_toggler,
        onClick: toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "ml-auto",
          navbar: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
            size: "lg",
            nav: true,
            inNavbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
              className: _Component_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle_Start,
              style: {
                color: "#ffffff"
              },
              nav: true,
              caret: true,
              children: "Get Started"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/signin",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Sign In"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, _this), " \xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoLogIn"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 74
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                divider: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/signup",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Sign Up"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this), " \xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoPersonAddSharp"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 74
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
            style: {
              marginTop: "6px",
              paddingLeft: "5px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
              title: "Silvin Pradhan",
              arrow: true,
              interactive: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 65
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic3R5bGVzIiwiQXBwX05hbWUiLCJuYXZiYXJfdG9nZ2xlciIsIlRvZ2dsZV9TdGFydCIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFHeEIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGlEQUFEO0FBQVEsV0FBSyxFQUFFO0FBQUVHLHVCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLGFBQUssRUFBRTtBQUFyQyxPQUFmO0FBQWlFLFlBQU0sRUFBQyxJQUF4RTtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQUEsK0JBQWE7QUFBSyxlQUFLLEVBQUMsTUFBWDtBQUFrQixnQkFBTSxFQUFDLE1BQXpCO0FBQWdDLGFBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlLHFFQUFDLGtEQUFEO0FBQVMsbUJBQVMsRUFBRUMsNERBQU0sQ0FBQ0MsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyx3REFBRDtBQUFlLGlCQUFTLEVBQUVELDREQUFNLENBQUNFLGNBQWpDO0FBQWlELGVBQU8sRUFBRUw7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUscUVBQUMsbURBQUQ7QUFBVSxjQUFNLEVBQUVGLE1BQWxCO0FBQTBCLGNBQU0sTUFBaEM7QUFBQSwrQkFDRSxxRUFBQyw4Q0FBRDtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUF5QixnQkFBTSxNQUEvQjtBQUFBLGtDQWNFLHFFQUFDLCtEQUFEO0FBQXNCLGdCQUFJLEVBQUMsSUFBM0I7QUFBZ0MsZUFBRyxNQUFuQztBQUFvQyxvQkFBUSxNQUE1QztBQUFBLG9DQUNFLHFFQUFDLHlEQUFEO0FBQWdCLHVCQUFTLEVBQUVLLDREQUFNLENBQUNHLFlBQWxDO0FBQWdELG1CQUFLLEVBQUU7QUFBRUoscUJBQUssRUFBRTtBQUFULGVBQXZEO0FBQTZFLGlCQUFHLE1BQWhGO0FBQWlGLG1CQUFLLE1BQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUscUVBQUMsdURBQUQ7QUFBYyxtQkFBSyxNQUFuQjtBQUFBLHNDQUNFLHFFQUFDLHVEQUFEO0FBQUEsd0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFDLFNBQVg7QUFBQSx5Q0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERix3QkFDeUQscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUUscUVBQUMsdURBQUQ7QUFBYyx1QkFBTztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBS0UscUVBQUMsdURBQUQ7QUFBQSx3Q0FDRSxxRUFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUMsU0FBWDtBQUFBLHlDQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLHdCQUN5RCxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQTRCRSxxRUFBQyxrREFBRDtBQUFTLGlCQUFLLEVBQUU7QUFBRUssdUJBQVMsRUFBRSxLQUFiO0FBQW9CQyx5QkFBVyxFQUFFO0FBQWpDLGFBQWhCO0FBQUEsbUNBQ0UscUVBQUMseURBQUQ7QUFBUyxtQkFBSyxFQUFDLGdCQUFmO0FBQWdDLG1CQUFLLE1BQXJDO0FBQXNDLHlCQUFXLE1BQWpEO0FBQUEscUNBQWtELHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQ0QsQ0FoREQ7O0dBQU1iLE07O0tBQUFBLE07QUFrRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxMGRjZjVjMmFmZWY2Yjc4NmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIE5hdmJhckJyYW5kLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbXBvbmVudC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBJb0xvZ0luLCBJb1BlcnNvbkFkZFNoYXJwIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XHJcbi8vIGltcG9ydCB7IG1lbnVEYXRhIH0gZnJvbSAnLi4vLi4vTWVudURhdGEvbWVudSc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMjMzYzkxXCIsIGNvbG9yOiBcIiNmZmZmZmZcIiB9fSBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZD48aW1nIHdpZHRoPVwiMzVweFwiIGhlaWdodD1cIjM1cHhcIiBzcmM9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vc3ZnL3ZzdGF0aWMvc3ZnLzYxNi82MTY0MTIuc3ZnP3Rva2VuPWV4cD0xNjEyMzkxNzk0fmhtYWM9Mjc1ZjlhNjQxNTUyYjczZmViOGVlN2Y0NTU3MTM4ZGZcIiAvPjwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48TmF2TGluayBjbGFzc05hbWU9e3N0eWxlcy5BcHBfTmFtZX0+TGlvbnNTaGFyZTwvTmF2TGluaz48L0xpbms+XHJcbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX3RvZ2dsZXJ9IG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICBtZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIHNpemU9XCJsZ1wiIG5hdiBpbk5hdmJhcj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2xhc3NOYW1lPXtzdHlsZXMuVG9nZ2xlX1N0YXJ0fSBzdHlsZT17eyBjb2xvcjogXCIjZmZmZmZmXCIgfX0gbmF2IGNhcmV0PlxyXG4gICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPjxzcGFuPlNpZ24gSW48L3NwYW4+PC9MaW5rPiAmbmJzcDs8SW9Mb2dJbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PHNwYW4+U2lnbiBVcDwvc3Bhbj48L0xpbms+ICZuYnNwOzxJb1BlcnNvbkFkZFNoYXJwIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiLCBwYWRkaW5nTGVmdDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNpbHZpbiBQcmFkaGFuXCIgYXJyb3cgaW50ZXJhY3RpdmU+PEFjY291bnRDaXJjbGVJY29uIC8+PC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9