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
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);


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
      marginLeft: '80px',
      marginRight: '80px',
      padding: theme.spacing(1.5),
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      fontWeight: 600,
      letterSpacing: 0.7
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
      marginLeft: '80px',
      marginRight: '80px',
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
          spacing: 4,
          justify: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            children: Object(_actions_auth__WEBPACK_IMPORTED_MODULE_11__["isAuthenticated"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.adminPaper,
              style: {
                color: 'black',
                cursor: 'pointer',
                padding: 20
              },
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiAdminFill"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 10
              }, _this), "\xA0 Welcome to your dashboard, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_11__["isAuthenticated"])().name)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 44
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
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
                lineNumber: 80,
                columnNumber: 9
              }, _this), " \xA0 Category"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                marginTop: 5
              },
              className: classes.createPaper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["List"], {
                component: "nav",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ListItem"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
                    href: "/admin/crud/category-tag",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ListItemText"], {
                      primary: "Create Categories"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
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
                lineNumber: 95,
                columnNumber: 9
              }, _this), " \xA0 Tags"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                marginTop: 5
              },
              className: classes.createPaper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["List"], {
                component: "nav",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ListItem"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
                    href: "/admin/crud/category-tag",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ListItemText"], {
                      primary: "Create Tags"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            md: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'not-allowed'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_im__WEBPACK_IMPORTED_MODULE_10__["ImBlog"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 9
              }, _this), " \xA0 Blog"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                marginTop: 5
              },
              className: classes.createPaper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["List"], {
                component: "nav",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ListItem"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
                    href: "/admin/crud/blog",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ListItemText"], {
                      primary: "Create Blogs"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYmFja2dyb3VuZCIsInBhcGVyIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiYWRtaW5QYXBlciIsIm1hcmdpbiIsImNyZWF0ZVBhcGVyIiwiY3Vyc29yIiwicHJpbWFyeSIsIkFkbWluSW5kZXgiLCJjbGFzc2VzIiwiaXNBdXRoZW50aWNhdGVkIiwibmFtZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxDQURMO0FBRUxDLGdCQUFVLEVBQUU7QUFGUCxLQURrQztBQUt4Q0MsU0FBSyxFQUFFO0FBQ05DLGdCQUFVLEVBQUUsTUFETjtBQUVOQyxpQkFBVyxFQUFFLE1BRlA7QUFHTkMsYUFBTyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxHQUFkLENBSEg7QUFJTkMsZUFBUyxFQUFFLFFBSkw7QUFLTkMsYUFBTyxFQUFFLE1BTEg7QUFNTkMsb0JBQWMsRUFBRSxRQU5WO0FBT05DLGdCQUFVLEVBQUUsUUFQTjtBQVFOQyxXQUFLLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjQyxJQUFkLENB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LFdBREQ7QUFzRUEsQ0F4RUQ7O0dBQU1HLFU7VUFDVzFCLFM7OztLQURYMEIsVTtBQTBFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uMDVkOTdhMzk1YTYyMTE0NDU0MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTaGFycEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NhdGVnb3J5JztcclxuaW1wb3J0IHsgRmFIYXNodGFnIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBSaUFkbWluRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgSW1CbG9nIH0gZnJvbSAncmVhY3QtaWNvbnMvaW0nO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGVTbW9rZScsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0bWFyZ2luTGVmdDogJzgwcHgnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICc4MHB4JyxcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMS41KSxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG5cdFx0Zm9udFdlaWdodDogNjAwLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogMC43LFxyXG5cdH0sXHJcblx0YWRtaW5QYXBlcjoge1xyXG5cdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdG1hcmdpbjogJ2F1dG8nLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0fSxcclxuXHRjcmVhdGVQYXBlcjoge1xyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0bWFyZ2luTGVmdDogJzgwcHgnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICc4MHB4JyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ViZWJlYicsXHJcblx0XHR9LFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQWRtaW5JbmRleCA9ICgpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHR7aXNBdXRoZW50aWNhdGVkKCkgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFwZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmFkbWluUGFwZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJywgcGFkZGluZzogMjAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJpQWRtaW5GaWxsIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyBXZWxjb21lIHRvIHlvdXIgZGFzaGJvYXJkLCA8Yj57YCR7aXNBdXRoZW50aWNhdGVkKCkubmFtZX1gfTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdCcnXHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IHN0eWxlPXt7IGNvbG9yOiAnIzJmM2JjMicsIGN1cnNvcjogJ25vdC1hbGxvd2VkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcnlTaGFycEljb24gLz4gJm5ic3A7IENhdGVnb3J5XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBDYXRlZ29yaWVzXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBzdHlsZT17eyBjb2xvcjogJyMyZjNiYzInLCBjdXJzb3I6ICdub3QtYWxsb3dlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmFIYXNodGFnIC8+ICZuYnNwOyBUYWdzXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBUYWdzXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSBtZD17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBzdHlsZT17eyBjb2xvcjogJyMyZjNiYzInLCBjdXJzb3I6ICdub3QtYWxsb3dlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SW1CbG9nIC8+ICZuYnNwOyBCbG9nXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWRtaW4vY3J1ZC9ibG9nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDcmVhdGUgQmxvZ3NcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0FkbWluPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=