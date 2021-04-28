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
      marginTop: '5px',
      maxWidth: 350,
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            className: classes.title,
            children: "Create a New Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pt-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                children: "Share your ideas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                alt: "Blog Icon",
                src: "./blog.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pt-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                children: "Write your future here."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJyb3ciLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJjb2xvciIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1pbldpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjdXJzb3IiLCJCbG9nIiwicHJvcHMiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxLQUROO0FBRUxDLGNBQVEsRUFBRSxHQUZMO0FBR0xDLFlBQU0sRUFBRSxNQUhIO0FBSUxDLGdCQUFVLEVBQUU7QUFKUCxLQURrQztBQU94Q0MsT0FBRyxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxPQUROO0FBRUpDLFNBQUcsRUFBRSxLQUZEO0FBR0pDLFVBQUksRUFBRSxLQUhGO0FBSUpDLGVBQVMsRUFBRTtBQUpQLEtBUG1DO0FBYXhDQyxTQUFLLEVBQUU7QUFDTkMsZ0JBQVUsRUFBRSxHQUROO0FBRU5DLG1CQUFhLEVBQUUsT0FGVDtBQUdOQyxjQUFRLEVBQUUsRUFISjtBQUlOQyxXQUFLLEVBQUUsU0FKRDtBQUtOQyxnQkFBVSxFQUFFLFFBTE47QUFNTkMsZUFBUyxFQUFFLFFBTkw7QUFPTkMsb0JBQWMsRUFBRTtBQVBWLEtBYmlDO0FBc0J4Q0MsVUFBTSxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxHQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRSxNQUhEO0FBSVBULG1CQUFhLEVBQUUsT0FKUjtBQUtQVSxnQkFBVSxFQUFFLE1BTEw7QUFNUEMsYUFBTyxFQUFFLGVBTkY7QUFPUFYsY0FBUSxFQUFFLE1BUEg7QUFRUFcscUJBQWUsRUFBRSxTQVJWO0FBU1BWLFdBQUssRUFBRSxPQVRBO0FBVVBXLG1CQUFhLEVBQUUsV0FWUjtBQVdQZCxnQkFBVSxFQUFFLFFBWEw7QUFZUGUsa0JBQVksRUFBRSxLQVpQO0FBYVBDLFlBQU0sRUFBRSxNQWJEO0FBY1BDLFlBQU0sRUFBRSxTQWREO0FBZVAsaUJBQVc7QUFDVkosdUJBQWUsRUFBRTtBQURQO0FBZko7QUF0QmdDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQTJDQSxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkIsTUFBTUMsT0FBTyxHQUFHbEMsU0FBUyxFQUF6QjtBQUNBLHNCQUNDLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0MscUVBQUMsOERBQUQ7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDQyxxRUFBQyw4Q0FBRDtBQUFLLG1CQUFTLEVBQUVrQyxPQUFPLENBQUMvQixJQUF4QjtBQUFBLGtDQUNDLHFFQUFDLDREQUFEO0FBQVkscUJBQVMsRUFBRStCLE9BQU8sQ0FBQ3JCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDQztBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHFDQUNDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQUssdUJBQVMsRUFBQyxFQUFmO0FBQUEscUNBQ0M7QUFBSyxtQkFBRyxFQUFDLFdBQVQ7QUFBcUIsbUJBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRCxlQU9DO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEscUNBQ0MscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFlQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNDO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQ0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEyQkEsQ0E3QkQ7O0dBQU1tQixJO1VBQ1doQyxTOzs7S0FEWGdDLEk7QUErQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy5hZjQxZGE1MjJjODg0NWZmYTc0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENyZWF0ZUJsb2cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1hcmdpblRvcDogJzVweCcsXHJcblx0XHRtYXhXaWR0aDogMzUwLFxyXG5cdFx0bWFyZ2luOiAnYXV0bycsXHJcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG5cdH0sXHJcblx0cm93OiB7XHJcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdHRvcDogJzUwJScsXHJcblx0XHRsZWZ0OiAnNTAlJyxcclxuXHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcblx0fSxcclxuXHR0aXRsZToge1xyXG5cdFx0Zm9udFdlaWdodDogNzUwLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogJzEuNXB4JyxcclxuXHRcdGZvbnRTaXplOiAyMixcclxuXHRcdGNvbG9yOiAnIzFiMDk3NScsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1pbldpZHRoOiAxNjUsXHJcblx0XHR3aWR0aDogJ2F1dG8nLFxyXG5cdFx0aGVpZ2h0OiAnNTBweCcsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzUwcHgnLFxyXG5cdFx0cGFkZGluZzogJzAgMzVweCAwIDM1cHgnLFxyXG5cdFx0Zm9udFNpemU6ICcxNXB4JyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzRhYTYnLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdGJvcmRlcjogJ25vbmUnLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzUyNWVkOScsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJsb2cgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+Q3JlYXRlIGEgTmV3IEJsb2c8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5TaGFyZSB5b3VyIGlkZWFzLjwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBhbHQ9XCJCbG9nIEljb25cIiBzcmM9XCIuL2Jsb2cucG5nXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PldyaXRlIHlvdXIgZnV0dXJlIGhlcmUuPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Q3JlYXRlQmxvZyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0FkbWluPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=