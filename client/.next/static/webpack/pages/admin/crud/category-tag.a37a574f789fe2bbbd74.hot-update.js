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
    marginOne: {
      margin: theme.spacing.unit
    },
    buttonOne: {
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

var Category = function Category(props) {
  _s();

  var classes = props.classes;

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
        className: classes.marginOne,
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
            style: {
              borderRadius: '5px',
              letterSpacing: '0.5px',
              lineHeight: '35px',
              padding: '0 25px 0 25px',
              fontSize: '13px',
              backgroundColor: '#334aa6',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#525ed9'
              }
            },
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
    lineNumber: 87,
    columnNumber: 9
  }, _this);
};

_s(Category, "OWIEFaZxq4DOmauAFmsJpn35zfA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbk9uZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uT25lIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsIkNhdGVnb3J5IiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJuYW1lIiwiZXJyb3IiLCJzdWNjZXNzIiwiY2F0ZWdvcmllcyIsInJlbW92ZWQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsIm5ld0NhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLGFBQVMsRUFBRTtBQUNWQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQztBQURaLEtBRDZCO0FBSXhDQyxhQUFTLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsV0FBSyxFQUFFLE1BRkc7QUFHVkMsWUFBTSxFQUFFLE1BSEU7QUFJVkMsbUJBQWEsRUFBRSxPQUpMO0FBS1ZDLGdCQUFVLEVBQUUsTUFMRjtBQU1WQyxhQUFPLEVBQUUsZUFOQztBQU9WQyxjQUFRLEVBQUUsTUFQQTtBQVFWQyxxQkFBZSxFQUFFLFNBUlA7QUFTVkMsV0FBSyxFQUFFLE9BVEc7QUFVVkMsbUJBQWEsRUFBRSxXQVZMO0FBV1ZDLGdCQUFVLEVBQUUsUUFYRjtBQVlWQyxrQkFBWSxFQUFFLEtBWko7QUFhVkMsWUFBTSxFQUFFLE1BYkU7QUFjVkMsWUFBTSxFQUFFLFNBZEU7QUFlVixpQkFBVztBQUNWTix1QkFBZSxFQUFFO0FBRFA7QUFmRDtBQUo2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF5QkEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbkJDLE9BRG1CLEdBQ1BELEtBRE8sQ0FDbkJDLE9BRG1COztBQUFBLGtCQUVDQyxzREFBUSxDQUFDO0FBQ3BDQyxRQUFJLEVBQUUsRUFEOEI7QUFFcENDLFNBQUssRUFBRSxLQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEtBSDJCO0FBSXBDQyxjQUFVLEVBQUUsRUFKd0I7QUFLcENDLFdBQU8sRUFBRTtBQUwyQixHQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUFBLE1BVW5CTixJQVZtQixHQVUyQkssTUFWM0IsQ0FVbkJMLElBVm1CO0FBQUEsTUFVYkMsS0FWYSxHQVUyQkksTUFWM0IsQ0FVYkosS0FWYTtBQUFBLE1BVU5DLE9BVk0sR0FVMkJHLE1BVjNCLENBVU5ILE9BVk07QUFBQSxNQVVHQyxVQVZILEdBVTJCRSxNQVYzQixDQVVHRixVQVZIO0FBQUEsTUFVZUMsT0FWZixHQVUyQkMsTUFWM0IsQ0FVZUQsT0FWZjtBQVczQixNQUFNRyxLQUFLLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsd0JBQ3ZCO0FBQUEsNkJBQ0MscUVBQUMsNkRBQUQ7QUFBYSxpQkFBUyxFQUFFWCxPQUFPLENBQUNyQixTQUFoQztBQUFBLGdDQUNDLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQywwQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQyxxRUFBQyx1REFBRDtBQUNDLFlBQUUsRUFBQywwQkFESjtBQUVDLHdCQUFjLGVBQ2IscUVBQUMsZ0VBQUQ7QUFBZ0Isb0JBQVEsRUFBQyxPQUF6QjtBQUFBLG1DQUNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQVVDLHFFQUFDLDZEQUFEO0FBQUEsaUNBQ0MscUVBQUMsOEVBQUQ7QUFDQyxpQkFBSyxFQUFFO0FBQ05nQiwwQkFBWSxFQUFFLEtBRFI7QUFFTlIsMkJBQWEsRUFBRSxPQUZUO0FBR05DLHdCQUFVLEVBQUUsTUFITjtBQUlOQyxxQkFBTyxFQUFFLGVBSkg7QUFLTkMsc0JBQVEsRUFBRSxNQUxKO0FBTU5DLDZCQUFlLEVBQUUsU0FOWDtBQU9OQyxtQkFBSyxFQUFFLE9BUEQ7QUFRTkMsMkJBQWEsRUFBRSxXQVJUO0FBU05DLHdCQUFVLEVBQUUsTUFUTjtBQVVORSxvQkFBTSxFQUFFLE1BVkY7QUFXTkMsb0JBQU0sRUFBRSxTQVhGO0FBWU4seUJBQVc7QUFDVk4sK0JBQWUsRUFBRTtBQURQO0FBWkwsYUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQscUJBRHVCO0FBQUEsR0FBeEI7O0FBcUNBLHNCQUFPLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGNBQWlCb0IsZUFBZTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQW5ERDs7R0FBTWIsUTs7S0FBQUEsUTtBQXFEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuYTM3YTU3NGY3ODlmZTJiYmJkNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQsIGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgQ2FyZEFjdGlvbnMsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgSW5wdXRBZG9ybm1lbnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBDbGFzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsYXNzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbk9uZToge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxuXHRidXR0b25PbmU6IHtcclxuXHRcdG1pbldpZHRoOiAxNjUsXHJcblx0XHR3aWR0aDogJ2F1dG8nLFxyXG5cdFx0aGVpZ2h0OiAnNTBweCcsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzUwcHgnLFxyXG5cdFx0cGFkZGluZzogJzAgMzVweCAwIDM1cHgnLFxyXG5cdFx0Zm9udFNpemU6ICcxNXB4JyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzRhYTYnLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdGJvcmRlcjogJ25vbmUnLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzUyNWVkOScsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bmFtZTogJycsXHJcblx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0cmVtb3ZlZDogZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbmFtZSwgZXJyb3IsIHN1Y2Nlc3MsIGNhdGVnb3JpZXMsIHJlbW92ZWQgfSA9IHZhbHVlcztcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW5PbmV9PlxyXG5cdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIj5DYXRlZ29yeSBOYW1lOjwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdGlkPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCJcclxuXHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXtcclxuXHRcdFx0XHRcdFx0PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Q2xhc3NJY29uIC8+XHJcblx0XHRcdFx0XHRcdDwvSW5wdXRBZG9ybm1lbnQ+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHQ8Q3VzdG9tQnV0dG9uXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdFx0XHRcdFx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMCAyNXB4IDAgMjVweCcsXHJcblx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxM3B4JyxcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzM0YWE2JyxcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0XHRcdDwvQ3VzdG9tQnV0dG9uPlxyXG5cdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e25ld0NhdGVnb3J5Rm9ybSgpfTwvUmVhY3QuRnJhZ21lbnQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=