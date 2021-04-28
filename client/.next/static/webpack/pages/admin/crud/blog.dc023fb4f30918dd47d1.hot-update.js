webpackHotUpdate_N_E("pages/admin/crud/blog",{

/***/ "./components/crud/CreateBlog.js":
/*!***************************************!*\
  !*** ./components/crud/CreateBlog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\CreateBlog.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});
_c2 = ReactQuill;



var CreateBlog = function CreateBlog(_ref) {
  _s();

  var router = _ref.router;

  var fetchFromLocalStorage = function fetchFromLocalStorage() {
    if (false) {}

    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      tags = _useState2[0],
      setTags = _useState2[1]; // For categories


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      checkedC = _useState3[0],
      setCheckedC = _useState3[1]; // For tags


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      checkedT = _useState4[0],
      setCheckedT = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(fetchFromLocalStorage()),
      body = _useState5[0],
      setBody = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
    initialCategories();
    initialTags();
  }, [router]);

  var initialCategories = function initialCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["getCategories"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  };

  var initialTags = function initialTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_8__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_9__["createBlog"])(formData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          title: '',
          success: "\"".concat(data.title, " has been created.\""),
          error: ''
        }));
        setBody('');
        setCategories([]);
        setTags([]);
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    // console.log(e);
    setBody(e);
    formData.set('body', e);

    if (true) {
      localStorage.setItem('blog', JSON.stringify(e));
    }
  };

  var handleToggle = function handleToggle(item) {
    return function () {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: ''
      })); // return the first index or -1

      var clickedCategory = checkedC.indexOf(item);

      var all = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(checkedC);

      if (clickedCategory === -1) {
        all.push(item);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log(all);
      setCheckedC(all);
      formData.set('categories', all);
    };
  };

  var handleToggleTag = function handleToggleTag(item) {
    return function () {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checkedT.indexOf(item);

      var all = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(checkedT);

      if (clickedTag === -1) {
        all.push(item);
      } else {
        all.splice(clickedTag, 1);
      }

      console.log(all);
      setCheckedT(all);
      formData.set('tags', all);
    };
  };

  var displayCategories = function displayCategories() {
    return categories && categories.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleToggle(item._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 5
      }, _this);
    });
  };

  var displayTags = function displayTags() {
    return tags && tags.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleToggleTag(item._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 5
      }, _this);
    });
  };

  var createBlogForm = function createBlogForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: publishBlog,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: " Title "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReactQuill, {
          modules: CreateBlog.modules,
          formats: CreateBlog.formats,
          value: body,
          placeholder: "Write something cool and amazing for the world to know.",
          onChange: handleBody
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid pb-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [createBlogForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-3",
            children: error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "alert alert-info",
              children: error
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 38
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-3",
            children: success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "alert alert-info",
              children: success
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 40
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group pb-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                children: "Select Featured Image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Max Size: 1 MB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "btn btn-info",
                children: ["Upload Featured Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: handleChange('photo'),
                  type: "file",
                  accept: "image/*",
                  hidden: true,
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Jumbotron"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: 'bold'
                },
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                style: {
                  maxHeight: '100px',
                  overflow: 'scroll',
                  overflowY: 'hidden',
                  overflowX: 'hidden'
                },
                children: displayCategories()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: 'bold'
                },
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                style: {
                  maxHeight: '100px',
                  overflow: 'scroll',
                  overflowY: 'hidden',
                  overflowX: 'hidden'
                },
                children: displayTags()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 3
  }, _this);
};

_s(CreateBlog, "xP2Jmn6iVEXvlUu7vp8eKDFdb/A=");

_c3 = CreateBlog;
CreateBlog.modules = {
  toolbar: [[{
    header: '1'
  }, {
    header: '2'
  }, {
    header: [3, 4, 5, 6]
  }, {
    font: []
  }], [{
    size: []
  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], ['link', 'image', 'video'], ['clean'], ['code-block']]
};
CreateBlog.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block'];
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(CreateBlog));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "CreateBlog");
$RefreshReg$(_c4, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwiZmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWRDIiwic2V0Q2hlY2tlZEMiLCJjaGVja2VkVCIsInNldENoZWNrZWRUIiwiYm9keSIsInNldEJvZHkiLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdGlhbENhdGVnb3JpZXMiLCJpbml0aWFsVGFncyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImdldFRhZ3MiLCJwdWJsaXNoQmxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNldCIsImhhbmRsZUJvZHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlVG9nZ2xlIiwiaXRlbSIsImNsaWNrZWRDYXRlZ29yeSIsImluZGV4T2YiLCJhbGwiLCJwdXNoIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRvZ2dsZVRhZyIsImNsaWNrZWRUYWciLCJkaXNwbGF5Q2F0ZWdvcmllcyIsIm1hcCIsImluZGV4IiwiX2lkIiwiZGlzcGxheVRhZ3MiLCJjcmVhdGVCbG9nRm9ybSIsIm1vZHVsZXMiLCJmb3JtYXRzIiwiZm9udFdlaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJzaXplIiwibGlzdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQjtNQUFNRixVO0FBQ047QUFDQTs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDbEMsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLGVBQW1DLEVBRWxDOztBQUNELFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2pDLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBTyxLQUFQO0FBQ0E7QUFDRCxHQVREOztBQURrQyxrQkFZRUcsc0RBQVEsQ0FBQyxFQUFELENBWlY7QUFBQSxNQVkzQkMsVUFaMkI7QUFBQSxNQVlmQyxhQVplOztBQUFBLG1CQWFWRixzREFBUSxDQUFDLEVBQUQsQ0FiRTtBQUFBLE1BYTNCRyxJQWIyQjtBQUFBLE1BYXJCQyxPQWJxQixrQkFjbEM7OztBQWRrQyxtQkFlRkosc0RBQVEsQ0FBQyxFQUFELENBZk47QUFBQSxNQWUzQkssUUFmMkI7QUFBQSxNQWVqQkMsV0FmaUIsa0JBZ0JsQzs7O0FBaEJrQyxtQkFpQkZOLHNE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QUU7QUFBUixHQUF0QixDQUpRLEVBS1IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixDQUxRLEVBTVIsQ0FBQyxPQUFELENBTlEsRUFPUixDQUFDLFlBQUQsQ0FQUTtBQURXLENBQXJCO0FBWUE3RSxVQUFVLENBQUNtRSxPQUFYLEdBQXFCLENBQ3BCLFFBRG9CLEVBRXBCLE1BRm9CLEVBR3BCLE1BSG9CLEVBSXBCLE1BSm9CLEVBS3BCLFFBTG9CLEVBTXBCLFdBTm9CLEVBT3BCLFFBUG9CLEVBUXBCLFlBUm9CLEVBU3BCLE1BVG9CLEVBVXBCLFFBVm9CLEVBV3BCLE1BWG9CLEVBWXBCLE9BWm9CLEVBYXBCLE9BYm9CLEVBY3BCLFlBZG9CLENBQXJCO0FBaUJlLHFFQUFBVyw4REFBVSxDQUFDOUUsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuZGMwMjNmYjRmMzA5MThkZDQ3ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzQXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgZ2V0VGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdGFnJztcclxuaW1wb3J0IHsgY3JlYXRlQmxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuaW1wb3J0IHsgSnVtYm90cm9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBDcmVhdGVCbG9nID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBmZXRjaEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpIHtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQvLyBGb3IgY2F0ZWdvcmllc1xyXG5cdGNvbnN0IFtjaGVja2VkQywgc2V0Q2hlY2tlZENdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIEZvciB0YWdzXHJcblx0Y29uc3QgW2NoZWNrZWRULCBzZXRDaGVja2VkVF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKGZldGNoRnJvbUxvY2FsU3RvcmFnZSgpKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c2l6ZUVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0aGlkZVB1Ymxpc2hCdXR0b246IGZhbHNlLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgZXJyb3IsIHNpemVFcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlLCBoaWRlUHVibGlzaEJ1dHRvbiB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHRcdGluaXRpYWxDYXRlZ29yaWVzKCk7XHJcblx0XHRpbml0aWFsVGFncygpO1xyXG5cdH0sIFtyb3V0ZXJdKTtcclxuXHJcblx0Y29uc3QgaW5pdGlhbENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcblx0XHRnZXRDYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaW5pdGlhbFRhZ3MgPSAoKSA9PiB7XHJcblx0XHRnZXRUYWdzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VGFncyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcHVibGlzaEJsb2cgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlQmxvZyhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGl0bGU6ICcnLCBzdWNjZXNzOiBgXCIke2RhdGEudGl0bGV9IGhhcyBiZWVuIGNyZWF0ZWQuXCJgLCBlcnJvcjogJycgfSk7XHJcblx0XHRcdFx0c2V0Qm9keSgnJyk7XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcmllcyhbXSk7XHJcblx0XHRcdFx0c2V0VGFncyhbXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0Zm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUJvZHkgPSAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZSk7XHJcblx0XHRzZXRCb2R5KGUpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jsb2cnLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlVG9nZ2xlID0gKGl0ZW0pID0+ICgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG5cdFx0Y29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZEMuaW5kZXhPZihpdGVtKTtcclxuXHRcdGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkQ107XHJcblx0XHRpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xyXG5cdFx0XHRhbGwucHVzaChpdGVtKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKGFsbCk7XHJcblx0XHRzZXRDaGVja2VkQyhhbGwpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVUb2dnbGVUYWcgPSAoaXRlbSkgPT4gKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcblx0XHRjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZFQuaW5kZXhPZihpdGVtKTtcclxuXHRcdGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVF07XHJcblx0XHRpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuXHRcdFx0YWxsLnB1c2goaXRlbSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coYWxsKTtcclxuXHRcdHNldENoZWNrZWRUKGFsbCk7XHJcblx0XHRmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0Y2F0ZWdvcmllcyAmJlxyXG5cdFx0XHRjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlUYWdzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0dGFncyAmJlxyXG5cdFx0XHR0YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGVUYWcoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e3B1Ymxpc2hCbG9nfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IFRpdGxlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8UmVhY3RRdWlsbFxyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtDcmVhdGVCbG9nLm1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e0NyZWF0ZUJsb2cuZm9ybWF0c31cclxuXHRcdFx0XHRcdFx0dmFsdWU9e2JvZHl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV3JpdGUgc29tZXRoaW5nIGNvb2wgYW5kIGFtYXppbmcgZm9yIHRoZSB3b3JsZCB0byBrbm93LlwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFB1Ymxpc2hcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQpO1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBiLTVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG5cdFx0XHRcdFx0XHR7Y3JlYXRlQmxvZ0Zvcm0oKX1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+e2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e2Vycm9yfTwvZGl2PiA6ICcnfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj57c3VjY2VzcyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPntzdWNjZXNzfTwvZGl2PiA6ICcnfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNT5TZWxlY3QgRmVhdHVyZWQgSW1hZ2U8L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggU2l6ZTogMSBNQjwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFVwbG9hZCBGZWF0dXJlZCBJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90bycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8SnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkNhdGVnb3JpZXM8L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcxMDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WTogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Rpc3BsYXlDYXRlZ29yaWVzKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlRhZ3M8L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcxMDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WTogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Rpc3BsYXlUYWdzKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLm1vZHVsZXMgPSB7XHJcblx0dG9vbGJhcjogW1xyXG5cdFx0W3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGhlYWRlcjogWzMsIDQsIDUsIDZdIH0sIHsgZm9udDogW10gfV0sXHJcblx0XHRbeyBzaXplOiBbXSB9XSxcclxuXHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcblx0XHRbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9XSxcclxuXHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG5cdFx0WydjbGVhbiddLFxyXG5cdFx0Wydjb2RlLWJsb2NrJ10sXHJcblx0XSxcclxufTtcclxuXHJcbkNyZWF0ZUJsb2cuZm9ybWF0cyA9IFtcclxuXHQnaGVhZGVyJyxcclxuXHQnZm9udCcsXHJcblx0J3NpemUnLFxyXG5cdCdib2xkJyxcclxuXHQnaXRhbGljJyxcclxuXHQndW5kZXJsaW5lJyxcclxuXHQnc3RyaWtlJyxcclxuXHQnYmxvY2txdW90ZScsXHJcblx0J2xpc3QnLFxyXG5cdCdidWxsZXQnLFxyXG5cdCdsaW5rJyxcclxuXHQnaW1hZ2UnLFxyXG5cdCd2aWRlbycsXHJcblx0J2NvZGUtYmxvY2snLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDcmVhdGVCbG9nKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==