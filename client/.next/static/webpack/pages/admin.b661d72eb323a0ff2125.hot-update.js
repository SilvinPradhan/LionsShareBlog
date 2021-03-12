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
      color: theme.palette.text.secondary
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
      padding: theme.spacing(2),
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
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
                lineNumber: 61,
                columnNumber: 10
              }, _this), "\xA0 Welcome to your dashboard, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_10__["isAuthenticated"])().name)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 44
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 9
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'pointer'
              },
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 9
              }, _this), " \xA0 Category"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
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
                      lineNumber: 77,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaHashtag"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, _this), " \xA0 Tags"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
                    lineNumber: 91,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYmFja2dyb3VuZCIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImFkbWluUGFwZXIiLCJtYXJnaW4iLCJjcmVhdGVQYXBlciIsIkFkbWluSW5kZXgiLCJjbGFzc2VzIiwiaXNBdXRoZW50aWNhdGVkIiwiY3Vyc29yIiwibmFtZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxDQURMO0FBRUxDLGdCQUFVLEVBQUU7QUFGUCxLQURrQztBQUt4Q0MsU0FBSyxFQUFFO0FBQ05DLGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsR0FBZCxDQURIO0FBRU5DLGVBQVMsRUFBRSxRQUZMO0FBR05DLGFBQU8sRUFBRSxNQUhIO0FBSU5DLG9CQUFjLEVBQUUsUUFKVjtBQUtOQyxnQkFBVSxFQUFFLFFBTE47QUFNTkMsV0FBSyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFOcEIsS0FMaUM7QUFheENDLGNBQVUsRUFBRTtBQUNYVixhQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FERTtBQUVYVSxZQUFNLEVBQUUsTUFGRztBQUdYVCxlQUFTLEVB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SSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBbUIsY0FBRSxFQUFFLENBQXZCO0FBQUEsb0NBQ0MscUVBQUMsK0RBQUQ7QUFBTyx1QkFBUyxFQUFFRSxPQUFPLENBQUNmLEtBQTFCO0FBQWlDLG1CQUFLLEVBQUU7QUFBRU8scUJBQUssRUFBRSxTQUFUO0FBQW9CVSxzQkFBTSxFQUFFO0FBQTVCLGVBQXhDO0FBQUEsc0NBQ0MscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQyxxRUFBQywrREFBRDtBQUFPLG1CQUFLLEVBQUU7QUFBRUUseUJBQVMsRUFBRTtBQUFiLGVBQWQ7QUFBZ0MsdUJBQVMsRUFBRUosT0FBTyxDQUFDRixXQUFuRDtBQUFBLHNDQUNDLHFFQUFDLHVEQUFEO0FBQU0seUJBQVMsRUFBQyxLQUFoQjtBQUFBLHVDQUNDLHFFQUFDLDJEQUFEO0FBQUEseUNBQ0MscUVBQUMsK0RBQUQ7QUFBYywyQkFBTyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQU1DLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFxREEsQ0F2REQ7O0dBQU1DLFU7VUFDV3BCLFM7OztLQURYb0IsVTtBQXlEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uYjY2MWQ3MmViMzIzYTBmZjIxMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTaGFycEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NhdGVnb3J5JztcclxuaW1wb3J0IHsgRmFIYXNodGFnIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBSaUFkbWluRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuXHJcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IERpdmlkZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHRcdGJhY2tncm91bmQ6ICd3aGl0ZVNtb2tlJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEuNSksXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuXHR9LFxyXG5cdGFkbWluUGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRtYXJnaW46ICdhdXRvJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG5cdH0sXHJcblx0Y3JlYXRlUGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBBZG1pbkluZGV4ID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0e2lzQXV0aGVudGljYXRlZCgpID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5hZG1pblBhcGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgY3Vyc29yOiAncG9pbnRlcicsIHBhZGRpbmc6IDIwIH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSaUFkbWluRmlsbCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgV2VsY29tZSB0byB5b3VyIGRhc2hib2FyZCwgPGI+e2Ake2lzQXV0aGVudGljYXRlZCgpLm5hbWV9YH08L2I+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQnJ1xyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBzdHlsZT17eyBjb2xvcjogJyMyZjNiYzInLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcnlTaGFycEljb24gLz4gJm5ic3A7IENhdGVnb3J5XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY3J1ZC9jYXRlZ29yeS10YWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBDYXRlZ29yeVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gc3R5bGU9e3sgY29sb3I6ICcjMmYzYmMyJywgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmFIYXNodGFnIC8+ICZuYnNwOyBUYWdzXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcmVhdGVQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlRyYXNoXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0FkbWluPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=