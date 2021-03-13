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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Class */ "./node_modules/@material-ui/icons/Class.js");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    loadCategories();
  }, [reload]);

  var loadCategories = function loadCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["getCategories"])().then(function (data) {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: classes.button,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: "Double click to delete",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, _this);
    });
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["create"])({
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
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success("A Category named '".concat(name, "' has been created."));
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {
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
          lineNumber: 95,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
          className: classes.margin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
            htmlFor: "input-with-category-icon",
            children: "Category Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            id: "input-with-category-icon",
            type: "text",
            onChange: handleChange,
            value: name,
            required: true,
            startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputAdornment"], {
              position: "start",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [newCategoryForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: showCategories()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsIkNhdGVnb3J5IiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJuYW1lIiwiZXJyb3IiLCJzdWNjZXNzIiwiY2F0ZWdvcmllcyIsInJlbW92ZWQiLCJyZWxvYWQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsImxvYWRDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcmllcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNob3dDYXRlZ29yaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGUiLCJ0b2FzdCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibmV3Q2F0ZWdvcnlGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsVUFBTSxFQUFFO0FBQ1BBLFlBQU0sRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWNDO0FBRGYsS0FEZ0M7QUFJ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LE1BQWhDO0FBQUEsa0NBQ0MscUVBQUMsNERBQUQ7QUFBWSxtQkFBTyxFQUFDLDBCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDLHFFQUFDLHVEQUFEO0FBQ0MsY0FBRSxFQUFDLDBCQURKO0FBRUMsZ0JBQUksRUFBQyxNQUZOO0FBR0Msb0JBQVEsRUFBRWdELFlBSFg7QUFJQyxpQkFBSyxFQUFFMUIsSUFKUjtBQUtDLG9CQUFRLE1BTFQ7QUFNQywwQkFBYyxlQUNiLHFFQUFDLGdFQUFEO0FBQWdCLHNCQUFRLEVBQUMsT0FBekI7QUFBQSxxQ0FDQyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQsZUFjQyxxRUFBQyw2REFBRDtBQUFBLG1DQUNDLHFFQUFDLDhFQUFEO0FBQWMsa0JBQUksRUFBQyxRQUFuQjtBQUE0Qix1QkFBUyxFQUFFRixPQUFPLENBQUNqQixNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELHFCQUR1QjtBQUFBLEdBQXhCOztBQXFDQSxzQkFDQyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUNFZ0QsZUFBZSxFQURqQixlQUVDO0FBQUEsZ0JBQU1aLGNBQWM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBTUEsQ0FqR0Q7O0dBQU1yQixRO1VBQ1dyQixTOzs7S0FEWHFCLFE7QUFtR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjI3NDU4N2JlNTg1NWFkOWU2Nzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkLCBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlLCBnZXRDYXRlZ29yaWVzLCByZW1vdmVDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBDYXJkQWN0aW9ucywgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBJbnB1dEFkb3JubWVudCwgQnV0dG9uLCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xhc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGFzcyc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1pbldpZHRoOiAyMCxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICczN3B4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMzVweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAyNXB4IDAgMjVweCcsXHJcblx0XHRmb250U2l6ZTogJzEzLjVweCcsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzM0YWE2JyxcclxuXHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0ZXJyb3I6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdHJlbW92ZWQ6IGZhbHNlLFxyXG5cdFx0cmVsb2FkOiBmYWxzZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBuYW1lLCBlcnJvciwgc3VjY2VzcywgY2F0ZWdvcmllcywgcmVtb3ZlZCwgcmVsb2FkIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsb2FkQ2F0ZWdvcmllcygpO1xyXG5cdH0sIFtyZWxvYWRdKTtcclxuXHJcblx0Y29uc3QgbG9hZENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcblx0XHRnZXRDYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgY2F0ZWdvcmllczogZGF0YSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PEJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdDxUb29sdGlwIHRpdGxlPVwiRG91YmxlIGNsaWNrIHRvIGRlbGV0ZVwiPntpdGVtLm5hbWV9PC9Ub29sdGlwPlxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlKHsgbmFtZSB9LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdFx0XHR0b2FzdC5zdWNjZXNzKGBBIENhdGVnb3J5IG5hbWVkICcke25hbWV9JyBoYXMgYmVlbiBjcmVhdGVkLmApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8VG9hc3RDb250YWluZXJcclxuXHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuXHRcdFx0XHRcdGF1dG9DbG9zZT17ODAwMH1cclxuXHRcdFx0XHRcdGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcblx0XHRcdFx0XHRuZXdlc3RPblRvcFxyXG5cdFx0XHRcdFx0Y2xvc2VPbkNsaWNrXHJcblx0XHRcdFx0XHRydGw9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0cGF1c2VPbkZvY3VzTG9zc1xyXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlXHJcblx0XHRcdFx0XHRwYXVzZU9uSG92ZXJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIj5DYXRlZ29yeSBOYW1lOjwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRpZD1cImlucHV0LXdpdGgtY2F0ZWdvcnktaWNvblwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXtcclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENsYXNzSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRBZG9ybm1lbnQ+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Q2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxDdXN0b21CdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdENyZWF0ZVxyXG5cdFx0XHRcdFx0XHQ8L0N1c3RvbUJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHR7bmV3Q2F0ZWdvcnlGb3JtKCl9XHJcblx0XHRcdDxkaXY+e3Nob3dDYXRlZ29yaWVzKCl9PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==