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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




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
      border: '0.5px solid #e8e8e8',
      textTransform: 'capitalize',
      justifyContent: 'space-between',
      display: 'inline-block'
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
        console.log(categories);
      }
    });
  };

  var showCategories = function showCategories() {
    return categories.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        interactive: true,
        title: "Double Click to Delete",
        arrow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onDoubleClick: function onDoubleClick() {
            return confirmDelete(item.slug);
          },
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: item.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this);
    });
  };

  var confirmDelete = function confirmDelete(slug) {
    var answer = window.confirm("Do you want to delete \"".concat(slug, "\" category? "));

    if (answer) {
      deleteCategory(slug);
    }
  };

  var deleteCategory = function deleteCategory(slug) {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_5__["removeCategory"])(slug, token).then(function (data) {
      if (data.error) console.log(data.error);else setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: false,
        success: false,
        name: '',
        removed: !removed,
        reload: !reload
      }));
    });
    console.log('deletes', slug);
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

  var successMessage = function successMessage() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: "Category successfully created!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, _this);
    }
  };

  var errorMessage = function errorMessage() {
    if (error) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-info",
        children: "Category already created!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, _this);
    }
  };

  var deletedMessage = function deletedMessage() {
    if (removed) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Category successfully deleted!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, _this);
    }
  };

  var newCategoryForm = function newCategoryForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: clickSubmit,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
          className: classes.margin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
            htmlFor: "input-with-category-icon",
            children: "Category Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
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
                lineNumber: 148,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [successMessage(), errorMessage(), deletedMessage(), newCategoryForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
          children: showCategories()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImJ1dHRvbkxpc3QiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJDYXRlZ29yeSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibmFtZSIsImVycm9yIiwic3VjY2VzcyIsImNhdGVnb3JpZXMiLCJyZW1vdmVkIiwicmVsb2FkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJsb2FkQ2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbmZpcm1EZWxldGUiLCJzbHVnIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZUNhdGVnb3J5IiwicmVtb3ZlQ2F0ZWdvcnkiLCJjbGlja1N1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwic3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJkZWxldGVkTWVzc2FnZSIsIm5ld0NhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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RXlELGNBQWMsRUFEaEIsRUFFRUMsWUFBWSxFQUZkLEVBR0VDLGNBQWMsRUFIaEIsRUFJRUMsZUFBZSxFQUpqQixlQUtDO0FBQUEsNkJBQ0MscUVBQUMsb0RBQUQ7QUFBQSwrQkFDQyxxRUFBQyx3REFBRDtBQUFBLG9CQUFnQnJCLGNBQWM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFhQSxDQXBJRDs7R0FBTXJCLFE7VUFDV3hCLFM7OztLQURYd0IsUTtBQXNJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuZGZhZTViYjE1MDJhN2Q2MWQzM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCwgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZSwgZ2V0Q2F0ZWdvcmllcywgcmVtb3ZlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgQ2FyZEFjdGlvbnMsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgSW5wdXRBZG9ybm1lbnQsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IENsYXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xhc3MnO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1pbldpZHRoOiAyMCxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICczN3B4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMzVweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAyNXB4IDAgMjVweCcsXHJcblx0XHRmb250U2l6ZTogJzEzLjVweCcsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzM0YWE2JyxcclxuXHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRidXR0b25MaXN0OiB7XHJcblx0XHRib3JkZXI6ICcwLjVweCBzb2xpZCAjZThlOGU4JyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bmFtZTogJycsXHJcblx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0cmVtb3ZlZDogZmFsc2UsXHJcblx0XHRyZWxvYWQ6IGZhbHNlLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IG5hbWUsIGVycm9yLCBzdWNjZXNzLCBjYXRlZ29yaWVzLCByZW1vdmVkLCByZWxvYWQgfSA9IHZhbHVlcztcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvYWRDYXRlZ29yaWVzKCk7XHJcblx0fSwgW3JlbG9hZF0pO1xyXG5cclxuXHRjb25zdCBsb2FkQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdGdldENhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBjYXRlZ29yaWVzOiBkYXRhIH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8VG9vbHRpcCBpbnRlcmFjdGl2ZSB0aXRsZT1cIkRvdWJsZSBDbGljayB0byBEZWxldGVcIiBhcnJvdz5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0b25Eb3VibGVDbGljaz17KCkgPT4gY29uZmlybURlbGV0ZShpdGVtLnNsdWcpfVxyXG5cdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjb25maXJtRGVsZXRlID0gKHNsdWcpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShgRG8geW91IHdhbnQgdG8gZGVsZXRlIFwiJHtzbHVnfVwiIGNhdGVnb3J5PyBgKTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlQ2F0ZWdvcnkoc2x1Zyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ2F0ZWdvcnkgPSAoc2x1ZykgPT4ge1xyXG5cdFx0cmVtb3ZlQ2F0ZWdvcnkoc2x1ZywgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHRlbHNlIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgbmFtZTogJycsIHJlbW92ZWQ6ICFyZW1vdmVkLCByZWxvYWQ6ICFyZWxvYWQgfSk7XHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdkZWxldGVzJywgc2x1Zyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlKHsgbmFtZSB9LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbmFtZTogZS50YXJnZXQudmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UsIHJlbW92ZWQ6ICcnIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gKCkgPT4ge1xyXG5cdFx0aWYgKHN1Y2Nlc3MpIHtcclxuXHRcdFx0cmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPkNhdGVnb3J5IHN1Y2Nlc3NmdWxseSBjcmVhdGVkITwvcD47XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZXJyb3JNZXNzYWdlID0gKCkgPT4ge1xyXG5cdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5DYXRlZ29yeSBhbHJlYWR5IGNyZWF0ZWQhPC9wPjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVkTWVzc2FnZSA9ICgpID0+IHtcclxuXHRcdGlmIChyZW1vdmVkKSB7XHJcblx0XHRcdHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkNhdGVnb3J5IHN1Y2Nlc3NmdWxseSBkZWxldGVkITwvcD47XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+Q2F0ZWdvcnkgTmFtZTo8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17XHJcblx0XHRcdFx0XHRcdFx0PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDbGFzc0ljb24gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0QWRvcm5tZW50PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8Q3VzdG9tQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0XHRcdFx0PC9DdXN0b21CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0e3N1Y2Nlc3NNZXNzYWdlKCl9XHJcblx0XHRcdHtlcnJvck1lc3NhZ2UoKX1cclxuXHRcdFx0e2RlbGV0ZWRNZXNzYWdlKCl9XHJcblx0XHRcdHtuZXdDYXRlZ29yeUZvcm0oKX1cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8TGlzdEdyb3VwPlxyXG5cdFx0XHRcdFx0PExpc3RHcm91cEl0ZW0+e3Nob3dDYXRlZ29yaWVzKCl9PC9MaXN0R3JvdXBJdGVtPlxyXG5cdFx0XHRcdDwvTGlzdEdyb3VwPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9