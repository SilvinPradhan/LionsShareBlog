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
      maxHeight: 300,
      margin: 'auto',
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
                cursor: 'pointer'
              },
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiAdminFill"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 10
              }, _this), " \xA0 ", "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_10__["isAuthenticated"])().name), "'s Dashboard"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 9
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'pointer'
              },
              children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, _this), " \xA0 Category"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.paper,
              style: {
                color: '#2f3bc2',
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaHashtag"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 9
              }, _this), " \xA0 Tags"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYmFja2dyb3VuZCIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImFkbWluUGFwZXIiLCJtYXhIZWlnaHQiLCJtYXJnaW4iLCJBZG1pbkluZGV4IiwiY2xhc3NlcyIsImlzQXV0aGVudGljYXRlZCIsImN1cnNvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxDQURMO0FBRUxDLGdCQUFVLEVBQUU7QUFGUCxLQURrQztBQUt4Q0MsU0FBSyxFQUFFO0FBQ05DLGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsR0FBZCxDQURIO0FBRU5DLGVBQVMsRUFBRSxRQUZMO0FBR05DLGFBQU8sRUFBRSxNQUhIO0FBSU5DLG9CQUFjLEVBQUUsUUFKVjtBQUtOQyxnQkFBVSxFQUFFLFFBTE47QUFNTkMsV0FBSyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFOcEIsS0FMaUM7QUFheENDLGNBQVUsRUFBRTtBQUNYVixhQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FERTtBQUVYVSxlQUFTLEVBQUUsR0FGQTtBQUdYQyxZQUFNLEVBQUUsTUFIRztBQUlYVixlQUFTLEVBQUUsUUFKQTtBQUtYQyxhQUFPLEVBQUUsTUFMRTtBQU1YQyxvQkFBYyxFQUFFLFFBTkw7QUFPWEMsZ0JBQVUsRUFBRSxRQVBEO0FBUVhDLFdBQUssRUFBRVgsS0FBSyxDQUFDWSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBUmY7QUFiNEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBeUJBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsT0FBTyxHQUFHckIsU0FBUyxFQUF6QjtBQUNBLHNCQUNDLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0MscUVBQUMsOERBQUQ7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUVxQixPQUFPLENBQUNsQixJQUF4QjtBQUFBLCtCQUNDLHFFQUFDLDhEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixpQkFBTyxFQUFFLENBQXpCO0FBQUEsa0NBQ0MscUVBQUMsOERBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBQSxzQkFDRW1CLHNFQUFlLGtCQUNmLHFFQUFDLCtEQUFEO0FBQU8sdUJBQVMsRUFBRUQsT0FBTyxDQUFDSixVQUExQjtBQUFzQyxtQkFBSyxFQUFFO0FBQUVKLHFCQUFLLEVBQUUsT0FBVDtBQUFrQlUsc0JBQU0sRUFBRTtBQUExQixlQUE3QztBQUFBLHlCQUNFLEdBREYsZUFFQyxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELHNCQUU0QkQsc0VBQWUsR0FBR0UsSUFGOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURlLEdBTWY7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBV0MscUVBQUMsOERBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBbUIsY0FBRSxFQUFFLENBQXZCO0FBQUEsbUNBQ0MscUVBQUMsK0RBQUQ7QUFBTyx1QkFBUyxFQUFFSCxPQUFPLENBQUNmLEtBQTFCO0FBQWlDLG1CQUFLLEVBQUU7QUFBRU8scUJBQUssRUFBRSxTQUFUO0FBQW9CVSxzQkFBTSxFQUFFO0FBQTVCLGVBQXhDO0FBQUEseUJBQ0UsR0FERixlQUVDLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRCxlQWlCQyxxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsRUFBZjtBQUFtQixjQUFFLEVBQUUsQ0FBdkI7QUFBQSxtQ0FDQyxxRUFBQywrREFBRDtBQUFPLHVCQUFTLEVBQUVGLE9BQU8sQ0FBQ2YsS0FBMUI7QUFBaUMsbUJBQUssRUFBRTtBQUFFTyxxQkFBSyxFQUFFLFNBQVQ7QUFBb0JVLHNCQUFNLEVBQUU7QUFBNUIsZUFBeEM7QUFBQSxzQ0FDQyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBK0JBLENBakNEOztHQUFNSCxVO1VBQ1dwQixTOzs7S0FEWG9CLFU7QUFtQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLmZjODNjYjE0YzU3ODYzYmYwMTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENhdGVnb3J5U2hhcnBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYXRlZ29yeSc7XHJcbmltcG9ydCB7IEZhSGFzaHRhZyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgUmlBZG1pbkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcblxyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGVTbW9rZScsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygxLjUpLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0fSxcclxuXHRhZG1pblBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0bWF4SGVpZ2h0OiAzMDAsXHJcblx0XHRtYXJnaW46ICdhdXRvJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFkbWluSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHR7aXNBdXRoZW50aWNhdGVkKCkgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFkbWluUGFwZXJ9IHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJpQWRtaW5GaWxsIC8+ICZuYnNwOyB7YCR7aXNBdXRoZW50aWNhdGVkKCkubmFtZX1gfSdzIERhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0JydcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gc3R5bGU9e3sgY29sb3I6ICcjMmYzYmMyJywgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PENhdGVnb3J5U2hhcnBJY29uIC8+ICZuYnNwOyBDYXRlZ29yeVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBzdHlsZT17eyBjb2xvcjogJyMyZjNiYzInLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGYUhhc2h0YWcgLz4gJm5ic3A7IFRhZ3NcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQWRtaW4+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5JbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==