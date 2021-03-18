webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./actions/tag.js":
/*!************************!*\
  !*** ./actions/tag.js ***!
  \************************/
/*! exports provided: create, getTags, singleTag, removeTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTag", function() { return singleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTag", function() { return removeTag; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var create = function create(tag, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tag"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(tag)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getTags = function getTags() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tags"), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleTag = function singleTag(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tag/").concat(slug), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeTag = function removeTag(slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tag/").concat(slug), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
    getCategories().then(function (data) {
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
    removeCategory(slug, token).then(function (data) {
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
            children: "Category Name:"
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

_s(Tag, "esUf1E1X9sKg1knLOgT2ZWxzbgM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy90YWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3J1ZC9UYWcuanMiXSwibmFtZXMiOlsiY3JlYXRlIiwidGFnIiwidG9rZW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUYWdzIiwic2luZ2xlVGFnIiwic2x1ZyIsInJlbW92ZVRhZyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJ1bml0IiwiYnV0dG9uIiwibWluV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImJ1dHRvbkxpc3QiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJUYWciLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlcnJvciIsInN1Y2Nlc3MiLCJjYXRlZ29yaWVzIiwicmVtb3ZlZCIsInJlbG9hZCIsInZhbHVlcyIsInNldFZhbHVlcyIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsImxvYWRDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcmllcyIsImRhdGEiLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbmZpcm1EZWxldGUiLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlQ2F0ZWdvcnkiLCJyZW1vdmVDYXRlZ29yeSIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImRlbGV0ZWRNZXNzYWdlIiwibW91c2VNb3ZlSGFuZGxlciIsIm5ld0NhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3JDLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLFdBQWU7QUFDMUJDLFVBQU0sRUFBRSxNQURrQjtBQUUxQkMsV0FBTyxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxrQkFEQTtBQUVSLHNCQUFnQixrQkFGUjtBQUdSQyxtQkFBYSxtQkFBWU4sS0FBWjtBQUhMLEtBRmlCO0FBTzFCTyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixHQUFmO0FBUG9CLEdBQWYsQ0FBTCxDQVNMVyxJQVRLLENBU0EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDQSxHQVhLLFdBWUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQVpELENBQVA7QUFhQSxDQWRNO0FBZ0JBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDNUIsU0FBT2YsdURBQUssV0FBSUMsMkNBQUosWUFBZ0I7QUFDM0JDLFVBQU0sRUFBRTtBQURtQixHQUFoQixDQUFMLENBR0xPLElBSEssQ0FHQSxVQUFDQyxHQUFELEVBQVM7QUFDZCxXQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUNBLEdBTEssV0FNQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBTkQsQ0FBUDtBQU9BLENBUk07QUFVQSxJQUFNSSxT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QUFERCxxQkFEdUI7QUFBQSxHQUF4Qjs7QUEwQkEsc0JBQ0MscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFDRW1ELGNBQWMsRUFEaEIsRUFFRUMsWUFBWSxFQUZkLEVBR0VDLGNBQWMsRUFIaEIsZUFJQztBQUFLLGlCQUFXLEVBQUVDLGdCQUFsQjtBQUFBLGlCQUNFQyxlQUFlLEVBRGpCLGVBRUMscUVBQUMsb0RBQUQ7QUFBQSwrQkFDQyxxRUFBQyx3REFBRDtBQUFBLG9CQUFnQnBCLGNBQWM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWFBLENBeElEOztHQUFNakIsRztVQUNXeEIsUzs7O0tBRFh3QixHO0FBMElTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2NhdGVnb3J5LXRhZy4yM2NiM2Y0ZTdlYTc0MGQ4M2Y1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICh0YWcsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdGFnYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0YWcpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUYWdzID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3RhZ3NgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVUYWcgPSAoc2x1ZykgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3RhZy8ke3NsdWd9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCByZW1vdmVUYWcgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS90YWcvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlLCBnZXRUYWdzLCByZW1vdmVUYWcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RhZyc7XHJcbmltcG9ydCB7IENhcmRBY3Rpb25zLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIElucHV0QWRvcm5tZW50LCBCdXR0b24sIFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBDbGFzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsYXNzJztcclxuaW1wb3J0IHsgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRtYXJnaW46IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtaW5XaWR0aDogMjAsXHJcblx0XHR3aWR0aDogJ2F1dG8nLFxyXG5cdFx0aGVpZ2h0OiAnMzdweCcsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC41cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzM1cHgnLFxyXG5cdFx0cGFkZGluZzogJzAgMjVweCAwIDI1cHgnLFxyXG5cdFx0Zm9udFNpemU6ICcxMy41cHgnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNXB4JyxcclxuXHRcdGJvcmRlcjogJ25vbmUnLFxyXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzUyNWVkOScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0YnV0dG9uTGlzdDoge1xyXG5cdFx0Ym9yZGVyOiAnMC41cHggc29saWQgI2U4ZThlOCcsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgVGFnID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRyZW1vdmVkOiBmYWxzZSxcclxuXHRcdHJlbG9hZDogZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbmFtZSwgZXJyb3IsIHN1Y2Nlc3MsIGNhdGVnb3JpZXMsIHJlbW92ZWQsIHJlbG9hZCB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bG9hZENhdGVnb3JpZXMoKTtcclxuXHR9LCBbcmVsb2FkXSk7XHJcblxyXG5cdGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0Z2V0Q2F0ZWdvcmllcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGNhdGVnb3JpZXM6IGRhdGEgfSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxUb29sdGlwIGludGVyYWN0aXZlIHRpdGxlPVwiRG91YmxlIENsaWNrIHRvIERlbGV0ZVwiIGFycm93PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRvbkRvdWJsZUNsaWNrPXsoKSA9PiBjb25maXJtRGVsZXRlKGl0ZW0uc2x1Zyl9XHJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNvbmZpcm1EZWxldGUgPSAoc2x1ZykgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKGBEbyB5b3Ugd2FudCB0byBkZWxldGUgXCIke3NsdWd9XCIgY2F0ZWdvcnk/IGApO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVDYXRlZ29yeShzbHVnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDYXRlZ29yeSA9IChzbHVnKSA9PiB7XHJcblx0XHRyZW1vdmVDYXRlZ29yeShzbHVnLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdGVsc2Ugc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCBuYW1lOiAnJywgcmVtb3ZlZDogIXJlbW92ZWQsIHJlbG9hZDogIXJlbG9hZCB9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RlbGV0ZXMnLCBzbHVnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjcmVhdGUoeyBuYW1lIH0sIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIG5hbWU6ICcnLCByZW1vdmVkOiBmYWxzZSwgcmVsb2FkOiAhcmVsb2FkIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAoc3VjY2Vzcykge1xyXG5cdFx0XHRyZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+Q2F0ZWdvcnkgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhPC9wPjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBlcnJvck1lc3NhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAoZXJyb3IpIHtcclxuXHRcdFx0cmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPkNhdGVnb3J5IGFscmVhZHkgY3JlYXRlZCE8L3A+O1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZWRNZXNzYWdlID0gKCkgPT4ge1xyXG5cdFx0aWYgKHJlbW92ZWQpIHtcclxuXHRcdFx0cmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Q2F0ZWdvcnkgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhPC9wPjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gKGUpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+Q2F0ZWdvcnkgTmFtZTo8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17XHJcblx0XHRcdFx0XHRcdFx0PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDbGFzc0ljb24gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0QWRvcm5tZW50PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8Q3VzdG9tQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0XHRcdFx0PC9DdXN0b21CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0e3N1Y2Nlc3NNZXNzYWdlKCl9XHJcblx0XHRcdHtlcnJvck1lc3NhZ2UoKX1cclxuXHRcdFx0e2RlbGV0ZWRNZXNzYWdlKCl9XHJcblx0XHRcdDxkaXYgb25Nb3VzZU1vdmU9e21vdXNlTW92ZUhhbmRsZXJ9PlxyXG5cdFx0XHRcdHtuZXdDYXRlZ29yeUZvcm0oKX1cclxuXHRcdFx0XHQ8TGlzdEdyb3VwPlxyXG5cdFx0XHRcdFx0PExpc3RHcm91cEl0ZW0+e3Nob3dDYXRlZ29yaWVzKCl9PC9MaXN0R3JvdXBJdGVtPlxyXG5cdFx0XHRcdDwvTGlzdEdyb3VwPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==