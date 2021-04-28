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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\CreateBlog.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
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
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
    initialCategories();
    initialTags();
  }, [router]);

  function initialCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_8__["getCategories"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  }

  function initialTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_9__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  }

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_10__["createBlog"])(formData, token).then(function (data) {
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
          lineNumber: 132,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
          lineNumber: 144,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
          lineNumber: 169,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
          lineNumber: 173,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
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
              className: "alert alert-danger",
              children: error
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 38
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-3",
            children: success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "alert alert-info",
              children: success
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 40
            }, _this) : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
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
                lineNumber: 201,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Max Size: 1 MB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
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
                  lineNumber: 207,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Jumbotron"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: 'bold'
                },
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
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
                lineNumber: 221,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: 'bold'
                },
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
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
                lineNumber: 235,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwiZmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWRDIiwic2V0Q2hlY2tlZEMiLCJjaGVja2VkVCIsInNldENoZWNrZWRUIiwiYm9keSIsInNldEJvZHkiLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdGlhbENhdGVnb3JpZXMiLCJpbml0aWFsVGFncyIsImdldENhdGVnb3JpZXMiLCJ0aGVuIiwiZGF0YSIsImdldFRhZ3MiLCJwdWJsaXNoQmxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNldCIsImhhbmRsZUJvZHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlVG9nZ2xlIiwiaXRlbSIsImNsaWNrZWRDYXRlZ29yeSIsImluZGV4T2YiLCJhbGwiLCJwdXNoIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRvZ2dsZVRhZyIsImNsaWNrZWRUYWciLCJkaXNwbGF5Q2F0ZWdvcmllcyIsIm1hcCIsImluZGV4IiwiX2lkIiwiZGlzcGxheVRhZ3MiLCJjcmVhdGVCbG9nRm9ybSIsIm1vZHVsZXMiLCJmb3JtYXRzIiwiZm9udFdlaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJzaXplIiwibGlzdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQjtNQUFNRixVO0FBQ047QUFDQTs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDbEMsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLGVBQW1DLEVBRWxDOztBQUNELFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2pDLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBTyxLQUFQO0FBQ0E7QUFDRCxHQVREOztBQURrQyxrQkFZRUcsc0RBQVEsQ0FBQyxFQUFELENBWlY7QUFBQSxNQVkzQkMsVUFaMkI7QUFBQSxNQVlmQyxhQVplOztBQUFBLG1CQWFWRixzREFBUSxDQUFDLEVBQUQsQ0FiRTtBQUFBLE1BYTNCRyxJQWIyQjtBQUFBLE1BYXJCQyxPQWJxQixrQkFjbEM7OztBQWRrQyxtQkFlRkosc0RBQVEsQ0FBQyxFQUFELENBZk47QUFBQSxNQWUzQkssUUFmMkI7QUFBQSxNQWVqQkMsV0FmaUIsa0JBZ0JsQzs7O0FBaEJr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QUFJLEVBQUU7QUFBUixHQUFELEVBQXNCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQXRCLENBSlEsRUFLUixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBTFEsRUFNUixDQUFDLE9BQUQsQ0FOUSxFQU9SLENBQUMsWUFBRCxDQVBRO0FBRFcsQ0FBckI7QUFZQTdFLFVBQVUsQ0FBQ21FLE9BQVgsR0FBcUIsQ0FDcEIsUUFEb0IsRUFFcEIsTUFGb0IsRUFHcEIsTUFIb0IsRUFJcEIsTUFKb0IsRUFLcEIsUUFMb0IsRUFNcEIsV0FOb0IsRUFPcEIsUUFQb0IsRUFRcEIsWUFSb0IsRUFTcEIsTUFUb0IsRUFVcEIsUUFWb0IsRUFXcEIsTUFYb0IsRUFZcEIsT0Fab0IsRUFhcEIsT0Fib0IsRUFjcEIsWUFkb0IsQ0FBckI7QUFpQmUscUVBQUFXLDhEQUFVLENBQUM5RSxVQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy5lNmI3ZTAxNTFjODU2YTY1OGE0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzQXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgZ2V0VGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdGFnJztcclxuaW1wb3J0IHsgY3JlYXRlQmxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuaW1wb3J0IHsgSnVtYm90cm9uLCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IENyZWF0ZUJsb2cgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGZldGNoRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSkge1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIEZvciBjYXRlZ29yaWVzXHJcblx0Y29uc3QgW2NoZWNrZWRDLCBzZXRDaGVja2VkQ10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Ly8gRm9yIHRhZ3NcclxuXHRjb25zdCBbY2hlY2tlZFQsIHNldENoZWNrZWRUXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoZmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCkpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzaXplRXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRmb3JtRGF0YTogJycsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHRoaWRlUHVibGlzaEJ1dHRvbjogZmFsc2UsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBlcnJvciwgc2l6ZUVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUsIGhpZGVQdWJsaXNoQnV0dG9uIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG5cdFx0aW5pdGlhbENhdGVnb3JpZXMoKTtcclxuXHRcdGluaXRpYWxUYWdzKCk7XHJcblx0fSwgW3JvdXRlcl0pO1xyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsQ2F0ZWdvcmllcygpIHtcclxuXHRcdGdldENhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxUYWdzKCkge1xyXG5cdFx0Z2V0VGFncygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFRhZ3MoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcHVibGlzaEJsb2cgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlQmxvZyhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGl0bGU6ICcnLCBzdWNjZXNzOiBgXCIke2RhdGEudGl0bGV9IGhhcyBiZWVuIGNyZWF0ZWQuXCJgLCBlcnJvcjogJycgfSk7XHJcblx0XHRcdFx0c2V0Qm9keSgnJyk7XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcmllcyhbXSk7XHJcblx0XHRcdFx0c2V0VGFncyhbXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0Zm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUJvZHkgPSAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZSk7XHJcblx0XHRzZXRCb2R5KGUpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jsb2cnLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlVG9nZ2xlID0gKGl0ZW0pID0+ICgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG5cdFx0Y29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZEMuaW5kZXhPZihpdGVtKTtcclxuXHRcdGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkQ107XHJcblx0XHRpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xyXG5cdFx0XHRhbGwucHVzaChpdGVtKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKGFsbCk7XHJcblx0XHRzZXRDaGVja2VkQyhhbGwpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVUb2dnbGVUYWcgPSAoaXRlbSkgPT4gKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcblx0XHRjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZFQuaW5kZXhPZihpdGVtKTtcclxuXHRcdGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVF07XHJcblx0XHRpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuXHRcdFx0YWxsLnB1c2goaXRlbSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coYWxsKTtcclxuXHRcdHNldENoZWNrZWRUKGFsbCk7XHJcblx0XHRmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0Y2F0ZWdvcmllcyAmJlxyXG5cdFx0XHRjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlUYWdzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0dGFncyAmJlxyXG5cdFx0XHR0YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGVUYWcoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdC8vIGNvbnN0IGRpc3BsYXlFcnJvciA9ICgpID0+IHtcclxuXHQvLyBcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJyB9fT5cclxuXHQvLyBcdFx0e2Vycm9yfVxyXG5cdC8vIFx0XHR7Y29uc29sZS5sb2coZXJyb3IpfVxyXG5cdC8vIFx0PC9kaXY+O1xyXG5cdC8vIH07XHJcblxyXG5cdC8vIGNvbnN0IGRpc3BsYXlTdWNjZXNzID0gKCkgPT4ge1xyXG5cdC8vIFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlxyXG5cdC8vIFx0XHR7c3VjY2Vzc31cclxuXHQvLyBcdFx0e2NvbnNvbGUubG9nKHN1Y2Nlc3MpfVxyXG5cdC8vIFx0PC9kaXY+O1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e3B1Ymxpc2hCbG9nfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IFRpdGxlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8UmVhY3RRdWlsbFxyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtDcmVhdGVCbG9nLm1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e0NyZWF0ZUJsb2cuZm9ybWF0c31cclxuXHRcdFx0XHRcdFx0dmFsdWU9e2JvZHl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV3JpdGUgc29tZXRoaW5nIGNvb2wgYW5kIGFtYXppbmcgZm9yIHRoZSB3b3JsZCB0byBrbm93LlwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFB1Ymxpc2hcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQpO1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBiLTVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG5cdFx0XHRcdFx0XHR7Y3JlYXRlQmxvZ0Zvcm0oKX1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+e2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+IDogJyd9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPntzdWNjZXNzID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e3N1Y2Nlc3N9PC9kaXY+IDogJyd9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcGItMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1PlNlbGVjdCBGZWF0dXJlZCBJbWFnZTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk1heCBTaXplOiAxIE1CPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VXBsb2FkIEZlYXR1cmVkIEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+Q2F0ZWdvcmllczwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJzEwMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ3Njcm9sbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheUNhdGVnb3JpZXMoKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+VGFnczwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJzEwMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ3Njcm9sbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheVRhZ3MoKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvSnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbkNyZWF0ZUJsb2cubW9kdWxlcyA9IHtcclxuXHR0b29sYmFyOiBbXHJcblx0XHRbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgaGVhZGVyOiBbMywgNCwgNSwgNl0gfSwgeyBmb250OiBbXSB9XSxcclxuXHRcdFt7IHNpemU6IFtdIH1dLFxyXG5cdFx0Wydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcclxuXHRcdFt7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH1dLFxyXG5cdFx0WydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXHJcblx0XHRbJ2NsZWFuJ10sXHJcblx0XHRbJ2NvZGUtYmxvY2snXSxcclxuXHRdLFxyXG59O1xyXG5cclxuQ3JlYXRlQmxvZy5mb3JtYXRzID0gW1xyXG5cdCdoZWFkZXInLFxyXG5cdCdmb250JyxcclxuXHQnc2l6ZScsXHJcblx0J2JvbGQnLFxyXG5cdCdpdGFsaWMnLFxyXG5cdCd1bmRlcmxpbmUnLFxyXG5cdCdzdHJpa2UnLFxyXG5cdCdibG9ja3F1b3RlJyxcclxuXHQnbGlzdCcsXHJcblx0J2J1bGxldCcsXHJcblx0J2xpbmsnLFxyXG5cdCdpbWFnZScsXHJcblx0J3ZpZGVvJyxcclxuXHQnY29kZS1ibG9jaycsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENyZWF0ZUJsb2cpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9