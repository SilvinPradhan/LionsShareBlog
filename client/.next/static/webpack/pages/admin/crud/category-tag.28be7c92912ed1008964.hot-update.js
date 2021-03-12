webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./components/crud/Category.js":
/*!*************************************!*\
  !*** ./components/crud/Category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Class */ "./node_modules/@material-ui/icons/Class.js");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    margin: {
      margin: theme.spacing.unit
    },
    button: {
      minWidth: 20,
      width: 'auto',
      height: '37px',
      letterSpacing: '0.5px',
      lineHeight: '35px',
      padding: '0 25px 0 25px',
      fontSize: '13.5px',
      backgroundColor: '#334aa6',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#525ed9'
      }
    }
  };
});

var Category = function Category(props) {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      error = values.error,
      success = values.success,
      categories = values.categories,
      removed = values.removed;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

  var newCategoryForm = function newCategoryForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
        className: classes.margin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
          htmlFor: "input-with-category-icon",
          children: "Category Name:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          id: "input-with-category-icon",
          startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
            position: "start",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActions"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.button,
            children: "Create"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: newCategoryForm()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, _this);
};

_s(Category, "dqfmdsf0PG5wu+OTCio969AuuVk=", false, function () {
  return [useStyles];
});

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsIkNhdGVnb3J5IiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJuYW1lIiwiZXJyb3IiLCJzdWNjZXNzIiwiY2F0ZWdvcmllcyIsInJlbW92ZWQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsIm5ld0NhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFVBQU0sRUFBRTtBQUNQQSxZQUFNLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjQztBQURmLEtBRGdDO0FBSXhDQyxVQUFNLEVBQUU7QUFDUEMsY0FBUSxFQUFFLEVBREg7QUFFUEMsV0FBSyxFQUFFLE1BRkE7QUFHUEMsWUFBTSxFQUFFLE1BSEQ7QUFJUEMsbUJBQWEsRUFBRSxPQUpSO0FBS1BDLGdCQUFVLEVBQUUsTUFMTDtBQU1QQyxhQUFPLEVBQUUsZUFORjtBQU9QQyxjQUFRLEVBQUUsUUFQSDtBQVFQQyxxQkFBZSxFQUFFLFNBUlY7QUFTUEMsV0FBSyxFQUFFLE9BVEE7QUFVUEMsbUJBQWEsRUFBRSxXQVZSO0FBV1BDLGdCQUFVLEVBQUUsTUFYTDtBQVlQQyxrQkFBWSxFQUFFLEtBWlA7QUFhUEMsWUFBTSxFQUFFLE1BYkQ7QUFjUEMsWUFBTSxFQUFFLFNBZEQ7QUFlUCxpQkFBVztBQUNWTix1QkFBZSxFQUFFO0FBRFA7QUFmSjtBQUpnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF5QkEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzNCLE1BQU1DLE9BQU8sR0FBR3ZCLFNBQVMsRUFBekI7O0FBRDJCLGtCQUVDd0Isc0RBQVEsQ0FBQztBQUNwQ0MsUUFBSSxFQUFFLEVBRDhCO0FBRXBDQyxTQUFLLEVBQUUsS0FGNkI7QUFHcENDLFdBQU8sRUFBRSxLQUgyQjtBQUlwQ0MsY0FBVSxFQUFFLEVBSndCO0FBS3BDQyxXQUFPLEVBQUU7QUFMMkIsR0FBRCxDQUZUO0FBQUEsTUFFcEJDLE1BRm9CO0FBQUEsTUFFWkMsU0FGWTs7QUFBQSxNQVVuQk4sSUFWbUIsR0FVMkJLLE1BVjNCLENBVW5CTCxJQVZtQjtBQUFBLE1BVWJDLEtBVmEsR0FVMkJJLE1BVjNCLENBVWJKLEtBVmE7QUFBQSxNQVVOQyxPQVZNLEdBVTJCRyxNQVYzQixDQVVOSCxPQVZNO0FBQUEsTUFVR0MsVUFWSCxHQVUyQkUsTUFWM0IsQ0FVR0YsVUFWSDtBQUFBLE1BVWVDLE9BVmYsR0FVMkJDLE1BVjNCLENBVWVELE9BVmY7QUFXM0IsTUFBTUcsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLHdCQUN2QjtBQUFBLDZCQUNDLHFFQUFDLDZEQUFEO0FBQWEsaUJBQVMsRUFBRVgsT0FBTyxDQUFDcEIsTUFBaEM7QUFBQSxnQ0FDQyxxRUFBQyw0REFBRDtBQUFZLGlCQUFPLEVBQUMsMEJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMscUVBQUMsdURBQUQ7QUFDQyxZQUFFLEVBQUMsMEJBREo7QUFFQyx3QkFBYyxlQUNiLHFFQUFDLGdFQUFEO0FBQWdCLG9CQUFRLEVBQUMsT0FBekI7QUFBQSxtQ0FDQyxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsZUFVQyxxRUFBQyw2REFBRDtBQUFBLGlDQUNDLHFFQUFDLDhFQUFEO0FBQWMscUJBQVMsRUFBRW9CLE9BQU8sQ0FBQ2pCLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxxQkFEdUI7QUFBQSxHQUF4Qjs7QUFrQkEsc0JBQU8scUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsY0FBaUI0QixlQUFlO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBaENEOztHQUFNYixRO1VBQ1dyQixTOzs7S0FEWHFCLFE7QUFrQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjI4YmU3YzkyOTEyZWQxMDA4OTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkLCBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IENhcmRBY3Rpb25zLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIElucHV0QWRvcm5tZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xhc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGFzcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRtYXJnaW46IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtaW5XaWR0aDogMjAsXHJcblx0XHR3aWR0aDogJ2F1dG8nLFxyXG5cdFx0aGVpZ2h0OiAnMzdweCcsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzM1cHgnLFxyXG5cdFx0cGFkZGluZzogJzAgMjVweCAwIDI1cHgnLFxyXG5cdFx0Zm9udFNpemU6ICcxMy41cHgnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdGJvcmRlcjogJ25vbmUnLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzUyNWVkOScsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRyZW1vdmVkOiBmYWxzZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBuYW1lLCBlcnJvciwgc3VjY2VzcywgY2F0ZWdvcmllcywgcmVtb3ZlZCB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBuZXdDYXRlZ29yeUZvcm0gPSAoKSA9PiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cImlucHV0LXdpdGgtY2F0ZWdvcnktaWNvblwiPkNhdGVnb3J5IE5hbWU6PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0aWQ9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIlxyXG5cdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9e1xyXG5cdFx0XHRcdFx0XHQ8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxDbGFzc0ljb24gLz5cclxuXHRcdFx0XHRcdFx0PC9JbnB1dEFkb3JubWVudD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdDxDdXN0b21CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+Q3JlYXRlPC9DdXN0b21CdXR0b24+XHJcblx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57bmV3Q2F0ZWdvcnlGb3JtKCl9PC9SZWFjdC5GcmFnbWVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==