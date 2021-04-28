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
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: "|"
            }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pt-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                children: "Write your future here."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
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
              lineNumber: 72,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJyb3ciLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJjb2xvciIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1pbldpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjdXJzb3IiLCJCbG9nIiwicHJvcHMiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxlQUFTLEVBQUUsS0FETjtBQUVMQyxjQUFRLEVBQUUsR0FGTDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMQyxnQkFBVSxFQUFFO0FBSlAsS0FEa0M7QUFPeENDLE9BQUcsRUFBRTtBQUNKQyxjQUFRLEVBQUUsT0FETjtBQUVKQyxTQUFHLEVBQUUsS0FGRDtBQUdKQyxVQUFJLEVBQUUsS0FIRjtBQUlKQyxlQUFTLEVBQUU7QUFKUCxLQVBtQztBQWF4Q0MsU0FBSyxFQUFFO0FBQ05DLGdCQUFVLEVBQUUsR0FETjtBQUVOQyxtQkFBYSxFQUFFLE9BRlQ7QUFHTkMsY0FBUSxFQUFFLEVBSEo7QUFJTkMsV0FBSyxFQUFFLFNBSkQ7QUFLTkMsZ0JBQVUsRUFBRSxRQUxOO0FBTU5DLGVBQVMsRUFBRSxRQU5MO0FBT05DLG9CQUFjLEVBQUU7QUFQVixLQWJpQztBQXNCeENDLFVBQU0sRUFBRTtBQUNQQyxjQUFRLEVBQUUsR0FESDtBQUVQQyxXQUFLLEVBQUUsTUFGQTtBQUdQQyxZQUFNLEVBQUUsTUFIRDtBQUlQVCxtQkFBYSxFQUFFLE9BSlI7QUFLUFUsZ0JBQVUsRUFBRSxNQUxMO0FBTVBDLGFBQU8sRUFBRSxlQU5GO0FBT1BWLGNBQVEsRUFBRSxNQVBIO0FBUVBXLHFCQUFlLEVBQUUsU0FSVjtBQVNQVixXQUFLLEVBQUUsT0FUQTtBQVVQVyxtQkFBYSxFQUFFLFdBVlI7QUFXUGQsZ0JBQVUsRUFBRSxRQVhMO0FBWVBlLGtCQUFZLEVBQUUsS0FaUDtBQWFQQyxZQUFNLEVBQUUsTUFiRDtBQWNQQyxZQUFNLEVBQUUsU0FkRDtBQWVQLGlCQUFXO0FBQ1ZKLHVCQUFlLEVBQUU7QUFEUDtBQWZKO0FBdEJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUEyQ0EsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLE9BQU8sR0FBR2xDLFNBQVMsRUFBekI7QUFDQSxzQkFDQyxxRUFBQywwREFBRDtBQUFBLDJCQUNDLHFFQUFDLDhEQUFEO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0MscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFFa0MsT0FBTyxDQUFDL0IsSUFBeEI7QUFBQSxrQ0FDQyxxRUFBQyw0REFBRDtBQUFZLHFCQUFTLEVBQUUrQixPQUFPLENBQUNyQixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxxQ0FDQyxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFBO0FBQUEsNkJBSkQsZUFLQztBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHFDQUNDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBYUM7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxpQ0FDQztBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNDLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBeUJBLENBM0JEOztHQUFNbUIsSTtVQUNXaEMsUzs7O0tBRFhnQyxJO0FBNkJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuMTc1MjhkNTk3ZjM3YmNiNGUxZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQ3JlYXRlQmxvZyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NydWQvQ3JlYXRlQmxvZyc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0bWFyZ2luVG9wOiAnNXB4JyxcclxuXHRcdG1heFdpZHRoOiAzNTAsXHJcblx0XHRtYXJnaW46ICdhdXRvJyxcclxuXHRcdGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcblx0fSxcclxuXHRyb3c6IHtcclxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0dG9wOiAnNTAlJyxcclxuXHRcdGxlZnQ6ICc1MCUnLFxyXG5cdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuXHR9LFxyXG5cdHRpdGxlOiB7XHJcblx0XHRmb250V2VpZ2h0OiA3NTAsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMS41cHgnLFxyXG5cdFx0Zm9udFNpemU6IDIyLFxyXG5cdFx0Y29sb3I6ICcjMWIwOTc1JyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWluV2lkdGg6IDE2NSxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICc1MHB4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnNTBweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAzNXB4IDAgMzVweCcsXHJcblx0XHRmb250U2l6ZTogJzE1cHgnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0Zm9udFdlaWdodDogJ2JvbGRlcicsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxvZyA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5DcmVhdGUgYSBOZXcgQmxvZzwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlNoYXJlIHlvdXIgaWRlYXMuPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDw+fDwvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+V3JpdGUgeW91ciBmdXR1cmUgaGVyZS48L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxDcmVhdGVCbG9nIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQWRtaW4+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==