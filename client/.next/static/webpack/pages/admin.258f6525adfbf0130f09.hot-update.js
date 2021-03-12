webpackHotUpdate_N_E("pages/admin",{

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Category */ "./node_modules/@material-ui/icons/Category.js");
/* harmony import */ var _material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\pages\\admin\\index.js",
    _this = undefined,
    _s = $RefreshSig$();













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      background: 'whiteSmoke'
    },
    paper: {
      padding: theme.spacing(1.5),
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      fontWeight: 500
    },
    adminPaper: {
      padding: theme.spacing(2),
      margin: 'auto',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
    },
    createPaper: {
      textAlign: 'center',
      cursor: 'pointer',
      display: 'flex',
      '&:hover': {
        background: '#ebebeb'
      },
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.primary
    }
  };
});

var AdminIndex = function AdminIndex() {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            children: Object(_actions_auth__WEBPACK_IMPORTED_MODULE_10__["isAuthenticated"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.adminPaper,
              style: {
                color: 'black',
                cursor: 'pointer',
                padding: 20
              },
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiAdminFill"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 10
              }, _this), "\xA0 Welcome to your dashboard, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_10__["isAuthenticated"])().name)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 44
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 9
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'not-allowed'
              },
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 9
              }, _this), " \xA0 Category"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                marginTop: 5
              },
              className: classes.createPaper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["List"], {
                component: "nav",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["ListItem"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    href: "/crud/category-tag",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["ListItemText"], {
                      primary: "Create Category"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'not-allowed'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaHashtag"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 9
              }, _this), " \xA0 Tags"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                marginTop: 5
              },
              className: classes.createPaper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["List"], {
                component: "nav",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["ListItem"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["ListItemText"], {
                    primary: "Trash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, _this);
};

_s(AdminIndex, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = AdminIndex;
/* harmony default export */ __webpack_exports__["default"] = (AdminIndex);

var _c;

$RefreshReg$(_c, "AdminIndex");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYmFja2dyb3VuZCIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImZvbnRXZWlnaHQiLCJhZG1pblBhcGVyIiwibWFyZ2luIiwiY3JlYXRlUGFwZXIiLCJjdXJzb3IiLCJwcmltYXJ5IiwiQWRtaW5JbmRleCIsImNsYXNzZXMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJuYW1lIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsY0FBUSxFQUFFLENBREw7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBRGtDO0FBS3hDQyxTQUFLLEVBQUU7QUFDTkMsYUFBTyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxHQUFkLENBREg7QUFFTkMsZUFBUyxFQUFFLFFBRkw7QUFHTkMsYUFBTyxFQUFFLE1BSEg7QUFJTkMsb0JBQWMsRUFBRSxRQUpWO0FBS05DLGdCQUFVLEVBQUUsUUFMTjtBQU1OQyxXQUFLLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjQyxJQUFkLENBQW1CQyxTQU5wQjtBQU9OQyxnQkFBVSxFQUFFO0FBUE4sS0FMaUM7QUFjeENDLGNBQVUsRUFBRTtBQUNYWCxhQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFj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OGY2NTI1YWRmYmYwMTMwZjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENhdGVnb3J5U2hhcnBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYXRlZ29yeSc7XHJcbmltcG9ydCB7IEZhSGFzaHRhZyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgUmlBZG1pbkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcblxyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGVTbW9rZScsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygxLjUpLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0XHRmb250V2VpZ2h0OiA1MDAsXHJcblx0fSxcclxuXHRhZG1pblBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0bWFyZ2luOiAnYXV0bycsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuXHR9LFxyXG5cdGNyZWF0ZVBhcGVyOiB7XHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZDogJyNlYmViZWInLFxyXG5cdFx0fSxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFkbWluSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHR7aXNBdXRoZW50aWNhdGVkKCkgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFwZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmFkbWluUGFwZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJywgcGFkZGluZzogMjAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJpQWRtaW5GaWxsIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyBXZWxjb21lIHRvIHlvdXIgZGFzaGJvYXJkLCA8Yj57YCR7aXNBdXRoZW50aWNhdGVkKCkubmFtZX1gfTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdCcnXHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IHN0eWxlPXt7IGNvbG9yOiAnIzJmM2JjMicsIGN1cnNvcjogJ25vdC1hbGxvd2VkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcnlTaGFycEljb24gLz4gJm5ic3A7IENhdGVnb3J5XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY3J1ZC9jYXRlZ29yeS10YWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBDYXRlZ29yeVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gc3R5bGU9e3sgY29sb3I6ICcjMmYzYmMyJywgY3Vyc29yOiAnbm90LWFsbG93ZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZhSGFzaHRhZyAvPiAmbmJzcDsgVGFnc1xyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIHN0eWxlPXt7IG1hcmdpblRvcDogNSB9fSBjbGFzc05hbWU9e2NsYXNzZXMuY3JlYXRlUGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUcmFzaFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9BZG1pbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9