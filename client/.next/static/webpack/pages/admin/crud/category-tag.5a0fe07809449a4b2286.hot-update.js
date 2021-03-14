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
    list: {
      grid: 1 / 2 / 2
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
          className: classes.button,
          children: item.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
          lineNumber: 98,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
          className: classes.margin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
            htmlFor: "input-with-category-icon",
            children: "Category Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
                lineNumber: 119,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [newCategoryForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.list,
      children: showCategories()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImxpc3QiLCJncmlkIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlcnJvciIsInN1Y2Nlc3MiLCJjYXRlZ29yaWVzIiwicmVtb3ZlZCIsInJlbG9hZCIsInZhbHVlcyIsInNldFZhbHVlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlRWZmZWN0IiwibG9hZENhdGVnb3JpZXMiLCJnZXRDYXRlZ29yaWVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2hvd0NhdGVnb3JpZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjbGlja1N1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsInRvYXN0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJuZXdDYXRlZ29yeUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsVUFBTSxFQUFFO0FBQ1BBLFlBQU0sRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWNDO0FBRGYsS0FEZ0M7QUFJ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OztLQURYdUIsUTtBQXFHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuNWEwZmUwNzgwOTQ0OWE0YjIyODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCwgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZSwgZ2V0Q2F0ZWdvcmllcywgcmVtb3ZlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgQ2FyZEFjdGlvbnMsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgSW5wdXRBZG9ybm1lbnQsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IENsYXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xhc3MnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRtYXJnaW46IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtaW5XaWR0aDogMjAsXHJcblx0XHR3aWR0aDogJ2F1dG8nLFxyXG5cdFx0aGVpZ2h0OiAnMzdweCcsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzM1cHgnLFxyXG5cdFx0cGFkZGluZzogJzAgMjVweCAwIDI1cHgnLFxyXG5cdFx0Zm9udFNpemU6ICcxMy41cHgnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdGJvcmRlcjogJ25vbmUnLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzUyNWVkOScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGlzdDoge1xyXG5cdFx0Z3JpZDogMS8yLzIsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0ZXJyb3I6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdHJlbW92ZWQ6IGZhbHNlLFxyXG5cdFx0cmVsb2FkOiBmYWxzZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBuYW1lLCBlcnJvciwgc3VjY2VzcywgY2F0ZWdvcmllcywgcmVtb3ZlZCwgcmVsb2FkIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsb2FkQ2F0ZWdvcmllcygpO1xyXG5cdH0sIFtyZWxvYWRdKTtcclxuXHJcblx0Y29uc3QgbG9hZENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcblx0XHRnZXRDYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgY2F0ZWdvcmllczogZGF0YSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PFRvb2x0aXAgaW50ZXJhY3RpdmUgdGl0bGU9XCJEb3VibGUgQ2xpY2sgdG8gRGVsZXRlXCIgYXJyb3c+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlKHsgbmFtZSB9LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdFx0XHR0b2FzdC5zdWNjZXNzKGBBIENhdGVnb3J5IG5hbWVkICcke25hbWV9JyBoYXMgYmVlbiBjcmVhdGVkLmApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8VG9hc3RDb250YWluZXJcclxuXHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuXHRcdFx0XHRcdGF1dG9DbG9zZT17ODAwMH1cclxuXHRcdFx0XHRcdGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcblx0XHRcdFx0XHRuZXdlc3RPblRvcFxyXG5cdFx0XHRcdFx0Y2xvc2VPbkNsaWNrXHJcblx0XHRcdFx0XHRydGw9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0cGF1c2VPbkZvY3VzTG9zc1xyXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlXHJcblx0XHRcdFx0XHRwYXVzZU9uSG92ZXJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIj5DYXRlZ29yeSBOYW1lOjwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRpZD1cImlucHV0LXdpdGgtY2F0ZWdvcnktaWNvblwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXtcclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENsYXNzSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRBZG9ybm1lbnQ+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Q2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxDdXN0b21CdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdENyZWF0ZVxyXG5cdFx0XHRcdFx0XHQ8L0N1c3RvbUJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHR7bmV3Q2F0ZWdvcnlGb3JtKCl9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PntzaG93Q2F0ZWdvcmllcygpfTwvZGl2PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=