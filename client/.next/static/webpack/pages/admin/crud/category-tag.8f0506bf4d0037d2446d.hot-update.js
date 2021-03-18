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
            lineNumber: 121,
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
                lineNumber: 130,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [newCategoryForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
          children: showCategories()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImJ1dHRvbkxpc3QiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJDYXRlZ29yeSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibmFtZSIsImVycm9yIiwic3VjY2VzcyIsImNhdGVnb3JpZXMiLCJyZW1vdmVkIiwicmVsb2FkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJsb2FkQ2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbmZpcm1EZWxldGUiLCJzbHVnIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZUNhdGVnb3J5IiwicmVtb3ZlQ2F0ZWdvcnkiLCJjbGlja1N1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibmV3Q2F0ZWdvcnlGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdD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LGVBQ2IscUVBQUMsZ0VBQUQ7QUFBZ0Isc0JBQVEsRUFBQyxPQUF6QjtBQUFBLHFDQUNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQWNDLHFFQUFDLDZEQUFEO0FBQUEsbUNBQ0MscUVBQUMsOEVBQUQ7QUFBYyxrQkFBSSxFQUFDLFFBQW5CO0FBQTRCLHVCQUFTLEVBQUVGLE9BQU8sQ0FBQ3BCLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQscUJBRHVCO0FBQUEsR0FBeEI7O0FBMEJBLHNCQUNDLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBQ0V5RCxlQUFlLEVBRGpCLGVBRUM7QUFBQSw2QkFDQyxxRUFBQyxvREFBRDtBQUFBLCtCQUNDLHFFQUFDLHdEQUFEO0FBQUEsb0JBQWdCbEIsY0FBYztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVVBLENBL0dEOztHQUFNckIsUTtVQUNXeEIsUzs7O0tBRFh3QixRO0FBaUhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2NhdGVnb3J5LXRhZy44ZjA1MDZiZjRkMDAzN2QyNDQ2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkLCBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlLCBnZXRDYXRlZ29yaWVzLCByZW1vdmVDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBDYXJkQWN0aW9ucywgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBJbnB1dEFkb3JubWVudCwgQnV0dG9uLCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xhc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGFzcyc7XHJcbmltcG9ydCB7IExpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0bWFyZ2luOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWluV2lkdGg6IDIwLFxyXG5cdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdGhlaWdodDogJzM3cHgnLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogJzAuNXB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuXHRcdHBhZGRpbmc6ICcwIDI1cHggMCAyNXB4JyxcclxuXHRcdGZvbnRTaXplOiAnMTMuNXB4JyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzRhYTYnLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzVweCcsXHJcblx0XHRib3JkZXI6ICdub25lJyxcclxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyM1MjVlZDknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGJ1dHRvbkxpc3Q6IHtcclxuXHRcdGJvcmRlcjogJzAuNXB4IHNvbGlkICNlOGU4ZTgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRyZW1vdmVkOiBmYWxzZSxcclxuXHRcdHJlbG9hZDogZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbmFtZSwgZXJyb3IsIHN1Y2Nlc3MsIGNhdGVnb3JpZXMsIHJlbW92ZWQsIHJlbG9hZCB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bG9hZENhdGVnb3JpZXMoKTtcclxuXHR9LCBbcmVsb2FkXSk7XHJcblxyXG5cdGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0Z2V0Q2F0ZWdvcmllcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGNhdGVnb3JpZXM6IGRhdGEgfSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxUb29sdGlwIGludGVyYWN0aXZlIHRpdGxlPVwiRG91YmxlIENsaWNrIHRvIERlbGV0ZVwiIGFycm93PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRvbkRvdWJsZUNsaWNrPXsoKSA9PiBjb25maXJtRGVsZXRlKGl0ZW0uc2x1Zyl9XHJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNvbmZpcm1EZWxldGUgPSAoc2x1ZykgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKGBEbyB5b3Ugd2FudCB0byBkZWxldGUgXCIke3NsdWd9XCIgY2F0ZWdvcnk/IGApO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVDYXRlZ29yeShzbHVnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDYXRlZ29yeSA9IChzbHVnKSA9PiB7XHJcblx0XHRyZW1vdmVDYXRlZ29yeShzbHVnLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdGVsc2Ugc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RlbGV0ZXMnLCBzbHVnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjcmVhdGUoeyBuYW1lIH0sIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIG5hbWU6ICcnLCByZW1vdmVkOiAhcmVtb3ZlZCwgcmVsb2FkOiAhcmVsb2FkIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+Q2F0ZWdvcnkgTmFtZTo8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17XHJcblx0XHRcdFx0XHRcdFx0PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDbGFzc0ljb24gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0QWRvcm5tZW50PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8Q3VzdG9tQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0XHRcdFx0PC9DdXN0b21CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0e25ld0NhdGVnb3J5Rm9ybSgpfVxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxMaXN0R3JvdXA+XHJcblx0XHRcdFx0XHQ8TGlzdEdyb3VwSXRlbT57c2hvd0NhdGVnb3JpZXMoKX08L0xpc3RHcm91cEl0ZW0+XHJcblx0XHRcdFx0PC9MaXN0R3JvdXA+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=