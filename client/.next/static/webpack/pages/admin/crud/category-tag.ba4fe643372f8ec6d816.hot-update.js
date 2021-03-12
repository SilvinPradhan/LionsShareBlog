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
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();









var styles = function styles(theme) {
  return {
    marginOne: {
      margin: theme.spacing.unit
    }
  };
};

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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
        className: classes.margin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
          htmlFor: "input-with-category-icon",
          children: "Category Name:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          id: "input-with-category-icon",
          startAdornment: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
          id: "my-helper-text",
          children: "We'll never share your email."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: newCategoryForm()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwibWFyZ2luT25lIiwibWFyZ2luIiwic3BhY2luZyIsInVuaXQiLCJDYXRlZ29yeSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibmFtZSIsImVycm9yIiwic3VjY2VzcyIsImNhdGVnb3JpZXMiLCJyZW1vdmVkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJuZXdDYXRlZ29yeUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDMUJDLGFBQVMsRUFBRTtBQUNWQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQztBQURaO0FBRGUsR0FBWjtBQUFBLENBQWY7O0FBTUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbkJDLE9BRG1CLEdBQ1BELEtBRE8sQ0FDbkJDLE9BRG1COztBQUFBLGtCQUVDQyxzREFBUSxDQUFDO0FBQ3BDQyxRQUFJLEVBQUUsRUFEOEI7QUFFcENDLFNBQUssRUFBRSxLQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEtBSDJCO0FBSXBDQyxjQUFVLEVBQUUsRUFKd0I7QUFLcENDLFdBQU8sRUFBRTtBQUwyQixHQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUFBLE1BVW5CTixJQVZtQixHQVUyQkssTUFWM0IsQ0FVbkJMLElBVm1CO0FBQUEsTUFVYkMsS0FWYSxHQVUyQkksTUFWM0IsQ0FVYkosS0FWYTtBQUFBLE1BVU5DLE9BVk0sR0FVMkJHLE1BVjNCLENBVU5ILE9BVk07QUFBQSxNQVVHQyxVQVZILEdBVTJCRSxNQVYzQixDQVVHRixVQVZIO0FBQUEsTUFVZUMsT0FWZixHQVUyQkMsTUFWM0IsQ0FVZUQsT0FWZjtBQVczQixNQUFNRyxLQUFLLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsd0JBQ3ZCO0FBQUEsNkJBQ0MscUVBQUMsNkRBQUQ7QUFBYSxpQkFBUyxFQUFFWCxPQUFPLENBQUNMLE1BQWhDO0FBQUEsZ0NBQ0MscUVBQUMsNERBQUQ7QUFBWSxpQkFBTyxFQUFDLDBCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLHFFQUFDLHVEQUFEO0FBQU8sWUFBRSxFQUFDLDBCQUFWO0FBQXFDLHdCQUFjO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsZUFHQyxxRUFBQyxnRUFBRDtBQUFnQixZQUFFLEVBQUMsZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELHFCQUR1QjtBQUFBLEdBQXhCOztBQVNBLHNCQUFPLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGNBQWlCZ0IsZUFBZTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQXZCRDs7R0FBTWIsUTs7S0FBQUEsUTtBQXlCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuYmE0ZmU2NDMzNzJmOGVjNmQ4MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQsIGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUhlbHBlclRleHQsIElucHV0LCBJbnB1dExhYmVsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbk9uZToge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0ZXJyb3I6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdHJlbW92ZWQ6IGZhbHNlLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IG5hbWUsIGVycm9yLCBzdWNjZXNzLCBjYXRlZ29yaWVzLCByZW1vdmVkIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IG5ld0NhdGVnb3J5Rm9ybSA9ICgpID0+IChcclxuXHRcdDw+XHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+Q2F0ZWdvcnkgTmFtZTo8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0PElucHV0IGlkPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCIgc3RhcnRBZG9ybm1lbnQgLz5cclxuXHRcdFx0XHQ8Rm9ybUhlbHBlclRleHQgaWQ9XCJteS1oZWxwZXItdGV4dFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57bmV3Q2F0ZWdvcnlGb3JtKCl9PC9SZWFjdC5GcmFnbWVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==