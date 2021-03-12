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
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Class */ "./node_modules/@material-ui/icons/Class.js");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();











var styles = function styles(theme) {
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
        className: styles.marginOne,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
          htmlFor: "input-with-category-icon",
          children: "Category Name:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          id: "input-with-category-icon",
          startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputAdornment"], {
            position: "start",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
            style: {
              borderRadius: '5px',
              letterSpacing: '0.5px',
              lineHeight: '30px',
              padding: '0 25px 0 25px',
              fontSize: '15px',
              backgroundColor: '#334aa6',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: '',
              border: 'none',
              cursor: 'pointer'
            },
            children: "Create"
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
        lineNumber: 51,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: newCategoryForm()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwibWFyZ2luT25lIiwibWFyZ2luIiwic3BhY2luZyIsInVuaXQiLCJidXR0b25PbmUiLCJtaW5XaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlcnJvciIsInN1Y2Nlc3MiLCJjYXRlZ29yaWVzIiwicmVtb3ZlZCIsInZhbHVlcyIsInNldFZhbHVlcyIsInRva2VuIiwiZ2V0Q29va2llIiwibmV3Q2F0ZWdvcnlGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUMxQkMsYUFBUyxFQUFFO0FBQ1ZDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDO0FBRFosS0FEZTtBQUkxQkMsYUFBUyxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxHQURBO0FBRVZDLFdBQUssRUFBRSxNQUZHO0FBR1ZDLFlBQU0sRUFBRSxNQUhFO0FBSVZDLG1CQUFhLEVBQUUsT0FKTDtBQUtWQyxnQkFBVSxFQUFFLE1BTEY7QUFNVkMsYUFBTyxFQUFFLGVBTkM7QUFPVkMsY0FBUSxFQUFFLE1BUEE7QUFRVkMscUJBQWUsRUFBRSxTQVJQO0FBU1ZDLFdBQUssRUFBRSxPQVRHO0FBVVZDLG1CQUFhLEVBQUUsV0FWTDtBQVdWQyxnQkFBVSxFQUFFLFFBWEY7QUFZVkMsa0JBQVksRUFBRSxLQVpKO0FBYVZDLFlBQU0sRUFBRSxNQWJFO0FBY1ZDLFlBQU0sRUFBRSxTQWRFO0FBZVYsaUJBQVc7QUFDVk4sdUJBQWUsRUFBRTtBQURQO0FBZkQ7QUFKZSxHQUFaO0FBQUEsQ0FBZjs7QUF5QkEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbkJDLE9BRG1CLEdBQ1BELEtBRE8sQ0FDbkJDLE9BRG1COztBQUFBLGtCQUVDQyxzREFBUSxDQUFDO0FBQ3BDQyxRQUFJLEVBQUUsRUFEOEI7QUFFcENDLFNBQUssRUFBRSxLQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEtBSDJCO0FBSXBDQyxjQUFVLEVBQUUsRUFKd0I7QUFLcENDLFdBQU8sRUFBRTtBQUwyQixHQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUFBLE1BVW5CTixJQVZtQixHQVUyQkssTUFWM0IsQ0FVbkJMLElBVm1CO0FBQUEsTUFVYkMsS0FWYSxHQVUyQkksTUFWM0IsQ0FVYkosS0FWYTtBQUFBLE1BVU5DLE9BVk0sR0FVMkJHLE1BVjNCLENBVU5ILE9BVk07QUFBQSxNQVVHQyxVQVZILEdBVTJCRSxNQVYzQixDQVVHRixVQVZIO0FBQUEsTUFVZUMsT0FWZixHQVUyQkMsTUFWM0IsQ0FVZUQsT0FWZjtBQVczQixNQUFNRyxLQUFLLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsd0JBQ3ZCO0FBQUEsNkJBQ0MscUVBQUMsNkRBQUQ7QUFBYSxpQkFBUyxFQUFFbEMsTUFBTSxDQUFDRSxTQUEvQjtBQUFBLGdDQUNDLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQywwQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQyxxRUFBQyx1REFBRDtBQUNDLFlBQUUsRUFBQywwQkFESjtBQUVDLHdCQUFjLGVBQ2IscUVBQUMsZ0VBQUQ7QUFBZ0Isb0JBQVEsRUFBQyxPQUF6QjtBQUFBLG1DQUNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQVVDLHFFQUFDLDZEQUFEO0FBQUEsaUNBQ0MscUVBQUMsOEVBQUQ7QUFDQyxpQkFBSyxFQUFFO0FBQ05nQiwwQkFBWSxFQUFFLEtBRFI7QUFFTlIsMkJBQWEsRUFBRSxPQUZUO0FBR05DLHdCQUFVLEVBQUUsTUFITjtBQUlOQyxxQkFBTyxFQUFFLGVBSkg7QUFLTkMsc0JBQVEsRUFBRSxNQUxKO0FBTU5DLDZCQUFlLEVBQUUsU0FOWDtBQU9OQyxtQkFBSyxFQUFFLE9BUEQ7QUFRTkMsMkJBQWEsRUFBRSxXQVJUO0FBU05DLHdCQUFVLEVBQUUsRUFUTjtBQVVORSxvQkFBTSxFQUFFLE1BVkY7QUFXTkMsb0JBQU0sRUFBRTtBQVhGLGFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELHFCQUR1QjtBQUFBLEdBQXhCOztBQWtDQSxzQkFBTyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxjQUFpQmMsZUFBZTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQWhERDs7R0FBTWIsUTs7S0FBQUEsUTtBQWtEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuMWEwMGNhYjM3YjIzNTc4ZTAzYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQsIGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBDYXJkQWN0aW9ucywgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBJbnB1dEFkb3JubWVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IENsYXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xhc3MnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbk9uZToge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxuXHRidXR0b25PbmU6IHtcclxuXHRcdG1pbldpZHRoOiAxNjUsXHJcblx0XHR3aWR0aDogJ2F1dG8nLFxyXG5cdFx0aGVpZ2h0OiAnNTBweCcsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzUwcHgnLFxyXG5cdFx0cGFkZGluZzogJzAgMzVweCAwIDM1cHgnLFxyXG5cdFx0Zm9udFNpemU6ICcxNXB4JyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzRhYTYnLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdGJvcmRlcjogJ25vbmUnLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzUyNWVkOScsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRyZW1vdmVkOiBmYWxzZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBuYW1lLCBlcnJvciwgc3VjY2VzcywgY2F0ZWdvcmllcywgcmVtb3ZlZCB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBuZXdDYXRlZ29yeUZvcm0gPSAoKSA9PiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luT25lfT5cclxuXHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+Q2F0ZWdvcnkgTmFtZTo8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRpZD1cImlucHV0LXdpdGgtY2F0ZWdvcnktaWNvblwiXHJcblx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17XHJcblx0XHRcdFx0XHRcdDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PENsYXNzSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0lucHV0QWRvcm5tZW50PlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0PEN1c3RvbUJ1dHRvblxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzVweCcsXHJcblx0XHRcdFx0XHRcdFx0bGV0dGVyU3BhY2luZzogJzAuNXB4JyxcclxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzBweCcsXHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzAgMjVweCAwIDI1cHgnLFxyXG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTVweCcsXHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJycsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdENyZWF0ZVxyXG5cdFx0XHRcdFx0PC9DdXN0b21CdXR0b24+XHJcblx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57bmV3Q2F0ZWdvcnlGb3JtKCl9PC9SZWFjdC5GcmFnbWVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==