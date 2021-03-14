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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Class */ "./node_modules/@material-ui/icons/Class.js");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
    },
    buttonList: {
      border: '0.5px solid whitesmoke',
      textTransform: 'capitalize'
    }
  };
});

var Category = function Category(props) {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      error = values.error,
      success = values.success,
      categories = values.categories,
      removed = values.removed,
      reload = values.reload;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    loadCategories();
  }, [reload]);

  var loadCategories = function loadCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_5__["getCategories"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          categories: data
        }));
      }
    });
  };

  var showCategories = function showCategories() {
    return categories.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        interactive: true,
        title: "Double Click to Delete",
        arrow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          className: classes.buttonList,
          children: item.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, _this);
    });
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_5__["create"])({
      name: name
    }, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          success: false
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: false,
          success: true,
          name: '',
          removed: !removed,
          reload: !reload
        }));
        react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].success("A Category named '".concat(name, "' has been created."));
      }
    });
  };

  var handleChange = function handleChange(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      name: e.target.value,
      error: false,
      success: false,
      removed: ''
    }));
  };

  var newCategoryForm = function newCategoryForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: clickSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          newestOnTop: true,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
          className: classes.margin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
            htmlFor: "input-with-category-icon",
            children: "Category Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            id: "input-with-category-icon",
            type: "text",
            onChange: handleChange,
            value: name,
            required: true,
            startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputAdornment"], {
              position: "start",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [newCategoryForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          children: showCategories()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 3
  }, _this);
};

_s(Category, "esUf1E1X9sKg1knLOgT2ZWxzbgM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImJ1dHRvbkxpc3QiLCJDYXRlZ29yeSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibmFtZSIsImVycm9yIiwic3VjY2VzcyIsImNhdGVnb3JpZXMiLCJyZW1vdmVkIiwicmVsb2FkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJsb2FkQ2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlIiwidG9hc3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5ld0NhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxVQUFNLEVBQUU7QUFDUEEsWUFBTSxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0M7QUFEZixLQURn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QUE7QUFBQSxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBVUEsQ0F2R0Q7O0dBQU1yQixRO1VBQ1d0QixTOzs7S0FEWHNCLFE7QUF5R1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjljMjQ5YjcxNjg3ZGE1MDBjNjVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQsIGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGUsIGdldENhdGVnb3JpZXMsIHJlbW92ZUNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IENhcmRBY3Rpb25zLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIElucHV0QWRvcm5tZW50LCBCdXR0b24sIFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBDbGFzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsYXNzJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1pbldpZHRoOiAyMCxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICczN3B4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMzVweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAyNXB4IDAgMjVweCcsXHJcblx0XHRmb250U2l6ZTogJzEzLjVweCcsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzM0YWE2JyxcclxuXHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRidXR0b25MaXN0OiB7XHJcblx0XHRib3JkZXI6ICcwLjVweCBzb2xpZCB3aGl0ZXNtb2tlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bmFtZTogJycsXHJcblx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0cmVtb3ZlZDogZmFsc2UsXHJcblx0XHRyZWxvYWQ6IGZhbHNlLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IG5hbWUsIGVycm9yLCBzdWNjZXNzLCBjYXRlZ29yaWVzLCByZW1vdmVkLCByZWxvYWQgfSA9IHZhbHVlcztcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvYWRDYXRlZ29yaWVzKCk7XHJcblx0fSwgW3JlbG9hZF0pO1xyXG5cclxuXHRjb25zdCBsb2FkQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdGdldENhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBjYXRlZ29yaWVzOiBkYXRhIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8VG9vbHRpcCBpbnRlcmFjdGl2ZSB0aXRsZT1cIkRvdWJsZSBDbGljayB0byBEZWxldGVcIiBhcnJvdz5cclxuXHRcdFx0XHRcdDxCdXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpc3R9PlxyXG5cdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlKHsgbmFtZSB9LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdFx0XHR0b2FzdC5zdWNjZXNzKGBBIENhdGVnb3J5IG5hbWVkICcke25hbWV9JyBoYXMgYmVlbiBjcmVhdGVkLmApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8VG9hc3RDb250YWluZXJcclxuXHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuXHRcdFx0XHRcdGF1dG9DbG9zZT17ODAwMH1cclxuXHRcdFx0XHRcdGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcblx0XHRcdFx0XHRuZXdlc3RPblRvcFxyXG5cdFx0XHRcdFx0Y2xvc2VPbkNsaWNrXHJcblx0XHRcdFx0XHRydGw9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0cGF1c2VPbkZvY3VzTG9zc1xyXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlXHJcblx0XHRcdFx0XHRwYXVzZU9uSG92ZXJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIj5DYXRlZ29yeSBOYW1lOjwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRpZD1cImlucHV0LXdpdGgtY2F0ZWdvcnktaWNvblwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXtcclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENsYXNzSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRBZG9ybm1lbnQ+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Q2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxDdXN0b21CdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdENyZWF0ZVxyXG5cdFx0XHRcdFx0XHQ8L0N1c3RvbUJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHR7bmV3Q2F0ZWdvcnlGb3JtKCl9XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PExpc3RHcm91cD5cclxuXHRcdFx0XHRcdDxMaXN0R3JvdXBJdGVtPntzaG93Q2F0ZWdvcmllcygpfTwvTGlzdEdyb3VwSXRlbT5cclxuXHRcdFx0XHQ8L0xpc3RHcm91cD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==