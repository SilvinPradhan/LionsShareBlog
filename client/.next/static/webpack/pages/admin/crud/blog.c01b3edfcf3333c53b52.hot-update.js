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
  }; // const displayError = () => {
  // 	<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
  // 		{error}
  // 		{console.log(error)}
  // 	</div>;
  // };
  // const displaySuccess = () => {
  // 	<div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
  // 		{success}
  // 		{console.log(success)}
  // 	</div>;
  // };


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
          lineNumber: 167,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
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
          lineNumber: 171,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
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
              lineNumber: 193,
              columnNumber: 38
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-3",
            children: success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "alert alert-info",
              children: success
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 40
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
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
                lineNumber: 199,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Max Size: 1 MB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
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
                  lineNumber: 205,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
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
                children: displayCategories()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: 'bold'
                },
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
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
                lineNumber: 233,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwiZmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWRDIiwic2V0Q2hlY2tlZEMiLCJjaGVja2VkVCIsInNldENoZWNrZWRUIiwiYm9keSIsInNldEJvZHkiLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdGlhbENhdGVnb3JpZXMiLCJpbml0aWFsVGFncyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImdldFRhZ3MiLCJwdWJsaXNoQmxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNldCIsImhhbmRsZUJvZHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlVG9nZ2xlIiwiaXRlbSIsImNsaWNrZWRDYXRlZ29yeSIsImluZGV4T2YiLCJhbGwiLCJwdXNoIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRvZ2dsZVRhZyIsImNsaWNrZWRUYWciLCJkaXNwbGF5Q2F0ZWdvcmllcyIsIm1hcCIsImluZGV4IiwiX2lkIiwiZGlzcGxheVRhZ3MiLCJjcmVhdGVCbG9nRm9ybSIsIm1vZHVsZXMiLCJmb3JtYXRzIiwiZm9udFdlaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJzaXplIiwibGlzdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQjtNQUFNRixVO0FBQ047QUFDQTs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDbEMsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLGVBQW1DLEVBRWxDOztBQUNELFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2pDLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBTyxLQUFQO0FBQ0E7QUFDRCxHQVREOztBQURrQyxrQkFZRUcsc0RBQVEsQ0FBQyxFQUFELENBWlY7QUFBQSxNQVkzQkMsVUFaMkI7QUFBQSxNQVlmQyxhQVplOztBQUFBLG1CQWFWRixzREFBUSxDQUFDLEVBQUQsQ0FiRTtBQUFBLE1BYTNCRyxJQWIyQjtBQUFBLE1BYXJCQyxPQWJxQixrQkFjbEM7OztBQWRrQyxtQkFlRkosc0RBQVEsQ0FBQyxFQUFELENBZk47QUFBQSxNQWUzQkssUUFmMkI7QUFBQSxNQWVqQkMsV0FmaUIsa0JBZ0JsQzs7O0FBaEJrQyxtQkFpQkZOLHNE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QTBDLFlBQTFDLENBSFEsRUFJUixDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsRUFBc0I7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FBdEIsQ0FKUSxFQUtSLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FMUSxFQU1SLENBQUMsT0FBRCxDQU5RLEVBT1IsQ0FBQyxZQUFELENBUFE7QUFEVyxDQUFyQjtBQVlBN0UsVUFBVSxDQUFDbUUsT0FBWCxHQUFxQixDQUNwQixRQURvQixFQUVwQixNQUZvQixFQUdwQixNQUhvQixFQUlwQixNQUpvQixFQUtwQixRQUxvQixFQU1wQixXQU5vQixFQU9wQixRQVBvQixFQVFwQixZQVJvQixFQVNwQixNQVRvQixFQVVwQixRQVZvQixFQVdwQixNQVhvQixFQVlwQixPQVpvQixFQWFwQixPQWJvQixFQWNwQixZQWRvQixDQUFyQjtBQWlCZSxxRUFBQVcsOERBQVUsQ0FBQzlFLFVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmMwMWIzZWRmY2YzMzMzYzUzYjUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IGdldFRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RhZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcbmltcG9ydCB7IEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgQ3JlYXRlQmxvZyA9ICh7IHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgZmV0Y2hGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKSB7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Ly8gRm9yIGNhdGVnb3JpZXNcclxuXHRjb25zdCBbY2hlY2tlZEMsIHNldENoZWNrZWRDXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQvLyBGb3IgdGFnc1xyXG5cdGNvbnN0IFtjaGVja2VkVCwgc2V0Q2hlY2tlZFRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZShmZXRjaEZyb21Mb2NhbFN0b3JhZ2UoKSk7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHNpemVFcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGZvcm1EYXRhOiAnJyxcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdGhpZGVQdWJsaXNoQnV0dG9uOiBmYWxzZSxcclxuXHR9KTtcclxuXHRjb25zdCB7IGVycm9yLCBzaXplRXJyb3IsIHN1Y2Nlc3MsIGZvcm1EYXRhLCB0aXRsZSwgaGlkZVB1Ymxpc2hCdXR0b24gfSA9IHZhbHVlcztcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcblx0XHRpbml0aWFsQ2F0ZWdvcmllcygpO1xyXG5cdFx0aW5pdGlhbFRhZ3MoKTtcclxuXHR9LCBbcm91dGVyXSk7XHJcblxyXG5cdGNvbnN0IGluaXRpYWxDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0Z2V0Q2F0ZWdvcmllcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldENhdGVnb3JpZXMoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGluaXRpYWxUYWdzID0gKCkgPT4ge1xyXG5cdFx0Z2V0VGFncygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFRhZ3MoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHB1Ymxpc2hCbG9nID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNyZWF0ZUJsb2coZm9ybURhdGEsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiAnJywgc3VjY2VzczogYFwiJHtkYXRhLnRpdGxlfSBoYXMgYmVlbiBjcmVhdGVkLlwiYCwgZXJyb3I6ICcnIH0pO1xyXG5cdFx0XHRcdHNldEJvZHkoJycpO1xyXG5cdFx0XHRcdHNldENhdGVnb3JpZXMoW10pO1xyXG5cdFx0XHRcdHNldFRhZ3MoW10pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuXHRcdGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBlcnJvcjogJycgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVCb2R5ID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0c2V0Qm9keShlKTtcclxuXHRcdGZvcm1EYXRhLnNldCgnYm9keScsIGUpO1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdibG9nJywgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpdGVtKSA9PiAoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiAnJyB9KTtcclxuXHRcdC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuXHRcdGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWRDLmluZGV4T2YoaXRlbSk7XHJcblx0XHRjb25zdCBhbGwgPSBbLi4uY2hlY2tlZENdO1xyXG5cdFx0aWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuXHRcdFx0YWxsLnB1c2goaXRlbSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGwuc3BsaWNlKGNsaWNrZWRDYXRlZ29yeSwgMSk7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhhbGwpO1xyXG5cdFx0c2V0Q2hlY2tlZEMoYWxsKTtcclxuXHRcdGZvcm1EYXRhLnNldCgnY2F0ZWdvcmllcycsIGFsbCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlVG9nZ2xlVGFnID0gKGl0ZW0pID0+ICgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG5cdFx0Y29uc3QgY2xpY2tlZFRhZyA9IGNoZWNrZWRULmluZGV4T2YoaXRlbSk7XHJcblx0XHRjb25zdCBhbGwgPSBbLi4uY2hlY2tlZFRdO1xyXG5cdFx0aWYgKGNsaWNrZWRUYWcgPT09IC0xKSB7XHJcblx0XHRcdGFsbC5wdXNoKGl0ZW0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKGFsbCk7XHJcblx0XHRzZXRDaGVja2VkVChhbGwpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkaXNwbGF5Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGNhdGVnb3JpZXMgJiZcclxuXHRcdFx0Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGl0ZW0uX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntpdGVtLm5hbWV9PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQpKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkaXNwbGF5VGFncyA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRhZ3MgJiZcclxuXHRcdFx0dGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlVGFnKGl0ZW0uX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntpdGVtLm5hbWV9PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQpKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHQvLyBjb25zdCBkaXNwbGF5RXJyb3IgPSAoKSA9PiB7XHJcblx0Ly8gXHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZScgfX0+XHJcblx0Ly8gXHRcdHtlcnJvcn1cclxuXHQvLyBcdFx0e2NvbnNvbGUubG9nKGVycm9yKX1cclxuXHQvLyBcdDwvZGl2PjtcclxuXHQvLyB9O1xyXG5cclxuXHQvLyBjb25zdCBkaXNwbGF5U3VjY2VzcyA9ICgpID0+IHtcclxuXHQvLyBcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7IGRpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJyB9fT5cclxuXHQvLyBcdFx0e3N1Y2Nlc3N9XHJcblx0Ly8gXHRcdHtjb25zb2xlLmxvZyhzdWNjZXNzKX1cclxuXHQvLyBcdDwvZGl2PjtcclxuXHQvLyB9O1xyXG5cclxuXHRjb25zdCBjcmVhdGVCbG9nRm9ybSA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtwdWJsaXNoQmxvZ30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiBUaXRsZSA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0aXRsZScpfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PFJlYWN0UXVpbGxcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17Q3JlYXRlQmxvZy5tb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtDcmVhdGVCbG9nLmZvcm1hdHN9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtib2R5fVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWV0aGluZyBjb29sIGFuZCBhbWF6aW5nIGZvciB0aGUgd29ybGQgdG8ga25vdy5cIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQm9keX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRQdWJsaXNoXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHRcdFx0e2NyZWF0ZUJsb2dGb3JtKCl9XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPntlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPntlcnJvcn08L2Rpdj4gOiAnJ308L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+e3N1Y2Nlc3MgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj57c3VjY2Vzc308L2Rpdj4gOiAnJ308L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwYi0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDU+U2VsZWN0IEZlYXR1cmVkIEltYWdlPC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IFNpemU6IDEgTUI8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRVcGxvYWQgRmVhdHVyZWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvdG8nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZmlsZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvaW5wdXQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEp1bWJvdHJvbj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5DYXRlZ29yaWVzPC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnMTAwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkaXNwbGF5Q2F0ZWdvcmllcygpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5UYWdzPC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnMTAwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkaXNwbGF5VGFncygpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuQ3JlYXRlQmxvZy5tb2R1bGVzID0ge1xyXG5cdHRvb2xiYXI6IFtcclxuXHRcdFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBoZWFkZXI6IFszLCA0LCA1LCA2XSB9LCB7IGZvbnQ6IFtdIH1dLFxyXG5cdFx0W3sgc2l6ZTogW10gfV0sXHJcblx0XHRbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxyXG5cdFx0W3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfV0sXHJcblx0XHRbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuXHRcdFsnY2xlYW4nXSxcclxuXHRcdFsnY29kZS1ibG9jayddLFxyXG5cdF0sXHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLmZvcm1hdHMgPSBbXHJcblx0J2hlYWRlcicsXHJcblx0J2ZvbnQnLFxyXG5cdCdzaXplJyxcclxuXHQnYm9sZCcsXHJcblx0J2l0YWxpYycsXHJcblx0J3VuZGVybGluZScsXHJcblx0J3N0cmlrZScsXHJcblx0J2Jsb2NrcXVvdGUnLFxyXG5cdCdsaXN0JyxcclxuXHQnYnVsbGV0JyxcclxuXHQnbGluaycsXHJcblx0J2ltYWdlJyxcclxuXHQndmlkZW8nLFxyXG5cdCdjb2RlLWJsb2NrJyxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ3JlYXRlQmxvZyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=