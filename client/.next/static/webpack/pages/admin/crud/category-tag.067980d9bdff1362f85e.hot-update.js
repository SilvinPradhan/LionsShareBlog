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
    list: {}
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
          className: classes.button,
          children: item.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
          lineNumber: 97,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
          className: classes.margin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
            htmlFor: "input-with-category-icon",
            children: "Category Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
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
                lineNumber: 118,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
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
          lineNumber: 136,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImxpc3QiLCJDYXRlZ29yeSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibmFtZSIsImVycm9yIiwic3VjY2VzcyIsImNhdGVnb3JpZXMiLCJyZW1vdmVkIiwicmVsb2FkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJsb2FkQ2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlIiwidG9hc3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5ld0NhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxVQUFNLEVBQUU7QUFDUEEsWUFBTSxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0M7QUFEZixLQURnQztBQUl4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QXZHRDs7R0FBTXJCLFE7VUFDV3RCLFM7OztLQURYc0IsUTtBQXlHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuMDY3OTgwZDliZGZmMTM2MmY4NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCwgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZSwgZ2V0Q2F0ZWdvcmllcywgcmVtb3ZlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgQ2FyZEFjdGlvbnMsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgSW5wdXRBZG9ybm1lbnQsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IENsYXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xhc3MnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IExpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0bWFyZ2luOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWluV2lkdGg6IDIwLFxyXG5cdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdGhlaWdodDogJzM3cHgnLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogJzAuNXB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuXHRcdHBhZGRpbmc6ICcwIDI1cHggMCAyNXB4JyxcclxuXHRcdGZvbnRTaXplOiAnMTMuNXB4JyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzRhYTYnLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzVweCcsXHJcblx0XHRib3JkZXI6ICdub25lJyxcclxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyM1MjVlZDknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpc3Q6IHt9LFxyXG59KSk7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bmFtZTogJycsXHJcblx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0cmVtb3ZlZDogZmFsc2UsXHJcblx0XHRyZWxvYWQ6IGZhbHNlLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IG5hbWUsIGVycm9yLCBzdWNjZXNzLCBjYXRlZ29yaWVzLCByZW1vdmVkLCByZWxvYWQgfSA9IHZhbHVlcztcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvYWRDYXRlZ29yaWVzKCk7XHJcblx0fSwgW3JlbG9hZF0pO1xyXG5cclxuXHRjb25zdCBsb2FkQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdGdldENhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBjYXRlZ29yaWVzOiBkYXRhIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8VG9vbHRpcCBpbnRlcmFjdGl2ZSB0aXRsZT1cIkRvdWJsZSBDbGljayB0byBEZWxldGVcIiBhcnJvdz5cclxuXHRcdFx0XHRcdDxCdXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjcmVhdGUoeyBuYW1lIH0sIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIG5hbWU6ICcnLCByZW1vdmVkOiAhcmVtb3ZlZCwgcmVsb2FkOiAhcmVsb2FkIH0pO1xyXG5cdFx0XHRcdHRvYXN0LnN1Y2Nlc3MoYEEgQ2F0ZWdvcnkgbmFtZWQgJyR7bmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQuYCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCByZW1vdmVkOiAnJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBuZXdDYXRlZ29yeUZvcm0gPSAoKSA9PiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17Y2xpY2tTdWJtaXR9PlxyXG5cdFx0XHRcdDxUb2FzdENvbnRhaW5lclxyXG5cdFx0XHRcdFx0cG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlPXs4MDAwfVxyXG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wXHJcblx0XHRcdFx0XHRjbG9zZU9uQ2xpY2tcclxuXHRcdFx0XHRcdHJ0bD17ZmFsc2V9XHJcblx0XHRcdFx0XHRwYXVzZU9uRm9jdXNMb3NzXHJcblx0XHRcdFx0XHRkcmFnZ2FibGVcclxuXHRcdFx0XHRcdHBhdXNlT25Ib3ZlclxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cImlucHV0LXdpdGgtY2F0ZWdvcnktaWNvblwiPkNhdGVnb3J5IE5hbWU6PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdGlkPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9e1xyXG5cdFx0XHRcdFx0XHRcdDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2xhc3NJY29uIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9JbnB1dEFkb3JubWVudD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PEN1c3RvbUJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0Q3JlYXRlXHJcblx0XHRcdFx0XHRcdDwvQ3VzdG9tQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdHtuZXdDYXRlZ29yeUZvcm0oKX1cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8TGlzdEdyb3VwPlxyXG5cdFx0XHRcdFx0PExpc3RHcm91cEl0ZW0+e3Nob3dDYXRlZ29yaWVzKCl9PC9MaXN0R3JvdXBJdGVtPlxyXG5cdFx0XHRcdDwvTGlzdEdyb3VwPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9