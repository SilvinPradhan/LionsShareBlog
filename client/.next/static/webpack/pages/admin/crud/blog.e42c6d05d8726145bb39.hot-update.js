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
/* harmony import */ var _components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\pages\\admin\\crud\\blog.js",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: '10px',
      margin: 'auto',
      maxWidth: 350,
      background: 'white'
    },
    row: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    title: {
      fontWeight: 'bolder',
      fontSize: 19,
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

var CategoryTag = function CategoryTag(props) {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            className: classes.title,
            children: "Manage Categories and Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: classes.row,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          sm: "5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            body: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
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

_s(CategoryTag, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = CategoryTag;
/* harmony default export */ __webpack_exports__["default"] = (CategoryTag);

var _c;

$RefreshReg$(_c, "CategoryTag");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJtYXhXaWR0aCIsImJhY2tncm91bmQiLCJyb3ciLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjdXJzb3IiLCJDYXRlZ29yeVRhZyIsInByb3BzIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsZUFBUyxFQUFFLE1BRE47QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTEMsY0FBUSxFQUFFLEdBSEw7QUFJTEMsZ0JBQVUsRUFBRTtBQUpQLEtBRGtDO0FBT3hDQyxPQUFHLEVBQUU7QUFDSkMsY0FBUSxFQUFFLE9BRE47QUFFSkMsU0FBRyxFQUFFLEtBRkQ7QUFHSkMsVUFBSSxFQUFFLEtBSEY7QUFJSkMsZUFBUyxFQUFFO0FBSlAsS0FQbUM7QUFheENDLFNBQUssRUFBRTtBQUNOQyxnQkFBVSxFQUFFLFFBRE47QUFFTkMsY0FBUSxFQUFFLEVBRko7QUFHTkMsV0FBSyxFQUFFLFNBSEQ7QUFJTkMsZ0JBQVUsRUFBRSxRQUpOO0FBS05DLGVBQVMsRUFBRSxRQUxMO0FBTU5DLG9CQUFjLEVBQUU7QUFOVixLQWJpQztBQXFCeENDLFVBQU0sRUFBRTtBQUNQQyxjQUFRLEVBQUUsR0FESDtBQUVQQyxXQUFLLEVBQUUsTUFGQTtBQUdQQyxZQUFNLEVBQUUsTUFIRDtBQUlQQyxtQkFBYSxFQUFFLE9BSlI7QUFLUEMsZ0JBQVUsRUFBRSxNQUxMO0FBTVBDLGFBQU8sRUFBRSxlQU5GO0FBT1BYLGNBQVEsRUFBRSxNQVBIO0FBUVBZLHFCQUFlLEVBQUUsU0FSVjtBQVNQWCxXQUFLLEVBQUUsT0FUQTtBQVVQWSxtQkFBYSxFQUFFLFdBVlI7QUFXUGQsZ0JBQVUsRUFBRSxRQVhMO0FBWVBlLGtCQUFZLEVBQUUsS0FaUDtBQWFQQyxZQUFNLEVBQUUsTUFiRDtBQWNQQyxZQUFNLEVBQUUsU0FkRDtBQWVQLGlCQUFXO0FBQ1ZKLHVCQUFlLEVBQUU7QUFEUDtBQWZKO0FBckJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUEwQ0EsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR2xDLFNBQVMsRUFBekI7QUFDQSxzQkFDQyxxRUFBQywwREFBRDtBQUFBLDJCQUNDLHFFQUFDLDhEQUFEO0FBQUEsOEJBQ0MscUVBQUMsOENBQUQ7QUFBSyxpQkFBUyxFQUFFa0MsT0FBTyxDQUFDL0IsSUFBeEI7QUFBQSwrQkFDQyxxRUFBQyw2REFBRDtBQUFBLGlDQUNDLHFFQUFDLDREQUFEO0FBQVkscUJBQVMsRUFBRStCLE9BQU8sQ0FBQ3JCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQU1DLHFFQUFDLDhDQUFEO0FBQUssaUJBQVMsRUFBRXFCLE9BQU8sQ0FBQzFCLEdBQXhCO0FBQUEsK0JBQ0MscUVBQUMsOENBQUQ7QUFBSyxZQUFFLEVBQUMsR0FBUjtBQUFBLGlDQUNDLHFFQUFDLHNEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFBLG1DQUNDLHFFQUFDLDZEQUFEO0FBQUEscUNBQ0MscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFvQkEsQ0F0QkQ7O0dBQU13QixXO1VBQ1doQyxTOzs7S0FEWGdDLFc7QUF3QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy5lNDJjNmQwNWQ4NzI2MTQ1YmIzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDcmVhdGVCbG9nIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3J1ZC9DcmVhdGVCbG9nJztcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0bWFyZ2luOiAnYXV0bycsXHJcblx0XHRtYXhXaWR0aDogMzUwLFxyXG5cdFx0YmFja2dyb3VuZDogJ3doaXRlJyxcclxuXHR9LFxyXG5cdHJvdzoge1xyXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHR0b3A6ICc1MCUnLFxyXG5cdFx0bGVmdDogJzUwJScsXHJcblx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG5cdH0sXHJcblx0dGl0bGU6IHtcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG5cdFx0Zm9udFNpemU6IDE5LFxyXG5cdFx0Y29sb3I6ICcjMWIwOTc1JyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWluV2lkdGg6IDE2NSxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICc1MHB4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnNTBweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAzNXB4IDAgMzVweCcsXHJcblx0XHRmb250U2l6ZTogJzE1cHgnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0Zm9udFdlaWdodDogJ2JvbGRlcicsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlUYWcgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5NYW5hZ2UgQ2F0ZWdvcmllcyBhbmQgVGFnczwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cclxuXHRcdFx0XHRcdDxDb2wgc209XCI1XCI+XHJcblx0XHRcdFx0XHRcdDxDYXJkIGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENyZWF0ZUJsb2cgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9BZG1pbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVRhZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==