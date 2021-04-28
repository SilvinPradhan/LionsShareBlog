webpackHotUpdate_N_E("pages/admin/crud/blog",{

/***/ "./pages/admin/crud/blog.js":
/*!**********************************!*\
  !*** ./pages/admin/crud/blog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/crud/CreateBlog */ "./components/crud/CreateBlog.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\pages\\admin\\crud\\blog.js",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: '0',
      maxWidth: '500px',
      alignContent: 'center',
      border: '1px solid whitesmoke',
      margin: 'auto',
      background: 'white'
    },
    row: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    title: {
      fontWeight: 750,
      letterSpacing: '1.5px',
      fontSize: 22,
      color: '#1b0975',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
    },
    button: {
      minWidth: 165,
      width: 'auto',
      height: '50px',
      letterSpacing: '0.5px',
      lineHeight: '50px',
      padding: '0 35px 0 35px',
      fontSize: '15px',
      backgroundColor: '#334aa6',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bolder',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#525ed9'
      }
    }
  };
});

var Blog = function Blog(props) {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
          className: classes.root,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            className: classes.title,
            children: "Create a New Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, _this);
};

_s(Blog, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJtYXhXaWR0aCIsImFsaWduQ29udGVudCIsImJvcmRlciIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJyb3ciLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJjb2xvciIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1pbldpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJCbG9nIiwicHJvcHMiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxHQUROO0FBRUxDLGNBQVEsRUFBRSxPQUZMO0FBR0xDLGtCQUFZLEVBQUUsUUFIVDtBQUlMQyxZQUFNLEVBQUUsc0JBSkg7QUFLTEMsWUFBTSxFQUFFLE1BTEg7QUFNTEMsZ0JBQVUsRUFBRTtBQU5QLEtBRGtDO0FBU3hDQyxPQUFHLEVBQUU7QUFDSkMsY0FBUSxFQUFFLE9BRE47QUFFSkMsU0FBRyxFQUFFLEtBRkQ7QUFHSkMsVUFBSSxFQUFFLEtBSEY7QUFJSkMsZUFBUyxFQUFFO0FBSlAsS0FUbUM7QUFleENDLFNBQUssRUFBRTtBQUNOQyxnQkFBVSxFQUFFLEdBRE47QUFFTkMsbUJBQWEsRUFBRSxPQUZUO0FBR05DLGNBQVEsRUFBRSxFQUhKO0FBSU5DLFdBQUssRUFBRSxTQUpEO0FBS05DLGdCQUFVLEVBQUUsUUFMTjtBQU1OQyxlQUFTLEVBQUUsUUFOTDtBQU9OQyxvQkFBYyxFQUFFO0FBUFYsS0FmaUM7QUF3QnhDQyxVQUFNLEVBQUU7QUFDUEMsY0FBUSxFQUFFLEdBREg7QUFFUEMsV0FBSyxFQUFFLE1BRkE7QUFHUEMsWUFBTSxFQUFFLE1BSEQ7QUFJUFQsbUJBQWEsRUFBRSxPQUpSO0FBS1BVLGdCQUFVLEVBQUUsTUFMTDtBQU1QQyxhQUFPLEVBQUUsZUFORjtBQU9QVixjQUFRLEVBQUUsTUFQSDtBQVFQVyxxQkFBZSxFQUFFLFNBUlY7QUFTUFYsV0FBSyxFQUFFLE9BVEE7QUFVUFcsbUJBQWEsRUFBRSxXQVZSO0FBV1BkLGdCQUFVLEVBQUUsUUFYTDtBQVlQZSxrQkFBWSxFQUFFLEtBWlA7QUFhUHhCLFlBQU0sRUFBRSxNQWJEO0FBY1B5QixZQUFNLEVBQUUsU0FkRDtBQWVQLGlCQUFXO0FBQ1ZILHVCQUFlLEVBQUU7QUFEUDtBQWZKO0FBeEJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUE2Q0EsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLE9BQU8sR0FBR25DLFNBQVMsRUFBekI7QUFDQSxzQkFDQyxxRUFBQywwREFBRDtBQUFBLDJCQUNDLHFFQUFDLDhEQUFEO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0MscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFFbUMsT0FBTyxDQUFDaEMsSUFBeEI7QUFBQSxpQ0FDQyxxRUFBQyw0REFBRDtBQUFZLHFCQUFTLEVBQUVnQyxPQUFPLENBQUNwQixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFJQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNDO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQ0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQkEsQ0FsQkQ7O0dBQU1rQixJO1VBQ1dqQyxTOzs7S0FEWGlDLEk7QUFvQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy4wZjRmNmYxYTFiYzU1ZDc0MWQyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDcmVhdGVCbG9nIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3J1ZC9DcmVhdGVCbG9nJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcwJyxcclxuXHRcdG1heFdpZHRoOiAnNTAwcHgnLFxyXG5cdFx0YWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuXHRcdGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZXNtb2tlJyxcclxuXHRcdG1hcmdpbjogJ2F1dG8nLFxyXG5cdFx0YmFja2dyb3VuZDogJ3doaXRlJyxcclxuXHR9LFxyXG5cdHJvdzoge1xyXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHR0b3A6ICc1MCUnLFxyXG5cdFx0bGVmdDogJzUwJScsXHJcblx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG5cdH0sXHJcblx0dGl0bGU6IHtcclxuXHRcdGZvbnRXZWlnaHQ6IDc1MCxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcxLjVweCcsXHJcblx0XHRmb250U2l6ZTogMjIsXHJcblx0XHRjb2xvcjogJyMxYjA5NzUnLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtaW5XaWR0aDogMTY1LFxyXG5cdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdGhlaWdodDogJzUwcHgnLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogJzAuNXB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICc1MHB4JyxcclxuXHRcdHBhZGRpbmc6ICcwIDM1cHggMCAzNXB4JyxcclxuXHRcdGZvbnRTaXplOiAnMTVweCcsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzM0YWE2JyxcclxuXHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRmb250V2VpZ2h0OiAnYm9sZGVyJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzVweCcsXHJcblx0XHRib3JkZXI6ICdub25lJyxcclxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyM1MjVlZDknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbG9nID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkNyZWF0ZSBhIE5ldyBCbG9nPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxDcmVhdGVCbG9nIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQWRtaW4+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==