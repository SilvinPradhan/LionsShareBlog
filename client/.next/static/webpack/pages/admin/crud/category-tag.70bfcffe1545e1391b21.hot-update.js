webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./components/crud/Tag.js":
/*!********************************!*\
  !*** ./components/crud/Tag.js ***!
  \********************************/
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
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Class */ "./node_modules/@material-ui/icons/Class.js");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Tag.js",
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

var Tag = function Tag(props) {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    error: false,
    success: false,
    tags: [],
    removed: false,
    reload: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      error = values.error,
      success = values.success,
      tags = values.tags,
      removed = values.removed,
      reload = values.reload;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    loadTags();
  }, [reload]);

  var loadTags = function loadTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_5__["getTags"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          tags: data
        }));
        console.log(tags);
      }
    });
  };

  var showTags = function showTags() {
    return tags.map(function (item, index) {
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
    var answer = window.confirm("Do you want to delete \"".concat(slug, "\" tag? "));

    if (answer) {
      deleteTag(slug);
    }
  };

  var deleteTag = function deleteTag(slug) {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_5__["removeTag"])(slug, token).then(function (data) {
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
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_5__["create"])({
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
          removed: false,
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
        children: "Tag successfully created!"
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
        children: "Tag already created!"
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
        children: "Tag successfully deleted!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, _this);
    }
  };

  var mouseMoveHandler = function mouseMoveHandler(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
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
            children: "Tag Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
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
                lineNumber: 152,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [successMessage(), errorMessage(), deletedMessage(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseMove: mouseMoveHandler,
      children: [newCategoryForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
          children: showCategories()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 3
  }, _this);
};

_s(Tag, "Y7Xe+Ay0vY7U5Ao/6bRsaeVTYzo=", false, function () {
  return [useStyles];
});

_c = Tag;
/* harmony default export */ __webpack_exports__["default"] = (Tag);

var _c;

$RefreshReg$(_c, "Tag");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL1RhZy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwidW5pdCIsImJ1dHRvbiIsIm1pbldpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjdXJzb3IiLCJidXR0b25MaXN0IiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiVGFnIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJuYW1lIiwiZXJyb3IiLCJzdWNjZXNzIiwidGFncyIsInJlbW92ZWQiLCJyZWxvYWQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsImxvYWRUYWdzIiwiZ2V0VGFncyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNob3dUYWdzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29uZmlybURlbGV0ZSIsInNsdWciLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlVGFnIiwicmVtb3ZlVGFnIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZGVsZXRlZE1lc3NhZ2UiLCJtb3VzZU1vdmVIYW5kbGVyIiwibmV3Q2F0ZWdvcnlGb3JtIiwic2hvd0NhdGVnb3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFBO0FBQUEsbUJBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELHFCQUR1QjtBQUFBLEdBQXhCOztBQTBCQSxzQkFDQyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUNFeUQsY0FBYyxFQURoQixFQUVFQyxZQUFZLEVBRmQsRUFHRUMsY0FBYyxFQUhoQixlQUlDO0FBQUssaUJBQVcsRUFBRUMsZ0JBQWxCO0FBQUEsaUJBQ0VDLGVBQWUsRUFEakIsZUFFQyxxRUFBQyxvREFBRDtBQUFBLCtCQUNDLHFFQUFDLHdEQUFEO0FBQUEsb0JBQWdCQyxjQUFjO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFhQSxDQXhJRDs7R0FBTTVDLEc7VUFDV3hCLFM7OztLQURYd0IsRztBQTBJU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuNzBiZmNmZmUxNTQ1ZTEzOTFiMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGUsIGdldFRhZ3MsIHJlbW92ZVRhZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdGFnJztcclxuaW1wb3J0IHsgQ2FyZEFjdGlvbnMsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgSW5wdXRBZG9ybm1lbnQsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IENsYXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xhc3MnO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdG1hcmdpbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1pbldpZHRoOiAyMCxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICczN3B4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMzVweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAyNXB4IDAgMjVweCcsXHJcblx0XHRmb250U2l6ZTogJzEzLjVweCcsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzM0YWE2JyxcclxuXHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRidXR0b25MaXN0OiB7XHJcblx0XHRib3JkZXI6ICcwLjVweCBzb2xpZCAjZThlOGU4JyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBUYWcgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0ZXJyb3I6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHR0YWdzOiBbXSxcclxuXHRcdHJlbW92ZWQ6IGZhbHNlLFxyXG5cdFx0cmVsb2FkOiBmYWxzZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBuYW1lLCBlcnJvciwgc3VjY2VzcywgdGFncywgcmVtb3ZlZCwgcmVsb2FkIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsb2FkVGFncygpO1xyXG5cdH0sIFtyZWxvYWRdKTtcclxuXHJcblx0Y29uc3QgbG9hZFRhZ3MgPSAoKSA9PiB7XHJcblx0XHRnZXRUYWdzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGFnczogZGF0YSB9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0YWdzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2hvd1RhZ3MgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gdGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PFRvb2x0aXAgaW50ZXJhY3RpdmUgdGl0bGU9XCJEb3VibGUgQ2xpY2sgdG8gRGVsZXRlXCIgYXJyb3c+XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdG9uRG91YmxlQ2xpY2s9eygpID0+IGNvbmZpcm1EZWxldGUoaXRlbS5zbHVnKX1cclxuXHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY29uZmlybURlbGV0ZSA9IChzbHVnKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oYERvIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiR7c2x1Z31cIiB0YWc/IGApO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVUYWcoc2x1Zyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlVGFnID0gKHNsdWcpID0+IHtcclxuXHRcdHJlbW92ZVRhZyhzbHVnLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdGVsc2Ugc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RlbGV0ZXMnLCBzbHVnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjcmVhdGUoeyBuYW1lIH0sIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIG5hbWU6ICcnLCByZW1vdmVkOiBmYWxzZSwgcmVsb2FkOiAhcmVsb2FkIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAoc3VjY2Vzcykge1xyXG5cdFx0XHRyZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+VGFnIHN1Y2Nlc3NmdWxseSBjcmVhdGVkITwvcD47XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZXJyb3JNZXNzYWdlID0gKCkgPT4ge1xyXG5cdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5UYWcgYWxyZWFkeSBjcmVhdGVkITwvcD47XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlZE1lc3NhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAocmVtb3ZlZCkge1xyXG5cdFx0XHRyZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5UYWcgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhPC9wPjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gKGUpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+VGFnIE5hbWU6PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdGlkPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9e1xyXG5cdFx0XHRcdFx0XHRcdDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2xhc3NJY29uIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9JbnB1dEFkb3JubWVudD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PEN1c3RvbUJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0Q3JlYXRlXHJcblx0XHRcdFx0XHRcdDwvQ3VzdG9tQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdHtzdWNjZXNzTWVzc2FnZSgpfVxyXG5cdFx0XHR7ZXJyb3JNZXNzYWdlKCl9XHJcblx0XHRcdHtkZWxldGVkTWVzc2FnZSgpfVxyXG5cdFx0XHQ8ZGl2IG9uTW91c2VNb3ZlPXttb3VzZU1vdmVIYW5kbGVyfT5cclxuXHRcdFx0XHR7bmV3Q2F0ZWdvcnlGb3JtKCl9XHJcblx0XHRcdFx0PExpc3RHcm91cD5cclxuXHRcdFx0XHRcdDxMaXN0R3JvdXBJdGVtPntzaG93Q2F0ZWdvcmllcygpfTwvTGlzdEdyb3VwSXRlbT5cclxuXHRcdFx0XHQ8L0xpc3RHcm91cD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=