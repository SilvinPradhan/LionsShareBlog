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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




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
    console.log('published');
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
          lineNumber: 123,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
          lineNumber: 135,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
          lineNumber: 146,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
          lineNumber: 150,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-8",
            children: createBlogForm()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
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
                lineNumber: 176,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
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
                lineNumber: 190,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwiZmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWRDIiwic2V0Q2hlY2tlZEMiLCJjaGVja2VkVCIsInNldENoZWNrZWRUIiwiYm9keSIsInNldEJvZHkiLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImluaXRpYWxDYXRlZ29yaWVzIiwiaW5pdGlhbFRhZ3MiLCJnZXRDYXRlZ29yaWVzIiwidGhlbiIsImRhdGEiLCJnZXRUYWdzIiwicHVibGlzaEJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJzZXQiLCJoYW5kbGVCb2R5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZVRvZ2dsZSIsIml0ZW0iLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwicHVzaCIsInNwbGljZSIsImhhbmRsZVRvZ2dsZVRhZyIsImNsaWNrZWRUYWciLCJkaXNwbGF5Q2F0ZWdvcmllcyIsIm1hcCIsImluZGV4IiwiX2lkIiwiZGlzcGxheVRhZ3MiLCJjcmVhdGVCbG9nRm9ybSIsIm1vZHVsZXMiLCJmb3JtYXRzIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJ0b29sYmFyIiwi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QUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBeUNBLENBaE1EOztHQUFNN0QsVTs7TUFBQUEsVTtBQWtNTkEsVUFBVSxDQUFDK0QsT0FBWCxHQUFxQjtBQUNwQk0sU0FBTyxFQUFFLENBQ1IsQ0FBQztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFELEVBQWtCO0FBQUVBLFVBQU0sRUFBRTtBQUFWLEdBQWxCLEVBQW1DO0FBQUVBLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVY7QUFBVixHQUFuQyxFQUE2RDtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUE3RCxDQURRLEVBRVIsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBRlEsRUFHUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFdBQW5CLEVBQWdDLFFBQWhDLEVBQTBDLFlBQTFDLENBSFEsRUFJUixDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsRUFBc0I7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FBdEIsQ0FKUSxFQUtSLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FMUSxFQU1SLENBQUMsT0FBRCxDQU5RLEVBT1IsQ0FBQyxZQUFELENBUFE7QUFEVyxDQUFyQjtBQVlBekUsVUFBVSxDQUFDZ0UsT0FBWCxHQUFxQixDQUNwQixRQURvQixFQUVwQixNQUZvQixFQUdwQixNQUhvQixFQUlwQixNQUpvQixFQUtwQixRQUxvQixFQU1wQixXQU5vQixFQU9wQixRQVBvQixFQVFwQixZQVJvQixFQVNwQixNQVRvQixFQVVwQixRQVZvQixFQVdwQixNQVhvQixFQVlwQixPQVpvQixFQWFwQixPQWJvQixFQWNwQixZQWRvQixDQUFyQjtBQWlCZSxxRUFBQVUsOERBQVUsQ0FBQzFFLFVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLjlkMmI2OTQ3Y2RkODU0NGI3NjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSwgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBnZXRUYWdzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90YWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVCbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9ibG9nJztcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IENyZWF0ZUJsb2cgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGZldGNoRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSkge1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIEZvciBjYXRlZ29yaWVzXHJcblx0Y29uc3QgW2NoZWNrZWRDLCBzZXRDaGVja2VkQ10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Ly8gRm9yIHRhZ3NcclxuXHRjb25zdCBbY2hlY2tlZFQsIHNldENoZWNrZWRUXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoZmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCkpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzaXplRXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRmb3JtRGF0YTogJycsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHRoaWRlUHVibGlzaEJ1dHRvbjogZmFsc2UsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBlcnJvciwgc2l6ZUVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUsIGhpZGVQdWJsaXNoQnV0dG9uIH0gPSB2YWx1ZXM7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG5cdFx0aW5pdGlhbENhdGVnb3JpZXMoKTtcclxuXHRcdGluaXRpYWxUYWdzKCk7XHJcblx0fSwgW3JvdXRlcl0pO1xyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsQ2F0ZWdvcmllcygpIHtcclxuXHRcdGdldENhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxUYWdzKCkge1xyXG5cdFx0Z2V0VGFncygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFRhZ3MoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcHVibGlzaEJsb2cgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3B1Ymxpc2hlZCcpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0Zm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUJvZHkgPSAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZSk7XHJcblx0XHRzZXRCb2R5KGUpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jsb2cnLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlVG9nZ2xlID0gKGl0ZW0pID0+ICgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG5cdFx0Y29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZEMuaW5kZXhPZihpdGVtKTtcclxuXHRcdGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkQ107XHJcblx0XHRpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xyXG5cdFx0XHRhbGwucHVzaChpdGVtKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKGFsbCk7XHJcblx0XHRzZXRDaGVja2VkQyhhbGwpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVUb2dnbGVUYWcgPSAoaXRlbSkgPT4gKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcblx0XHRjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZFQuaW5kZXhPZihpdGVtKTtcclxuXHRcdGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVF07XHJcblx0XHRpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuXHRcdFx0YWxsLnB1c2goaXRlbSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coYWxsKTtcclxuXHRcdHNldENoZWNrZWRUKGFsbCk7XHJcblx0XHRmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0Y2F0ZWdvcmllcyAmJlxyXG5cdFx0XHRjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlUYWdzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0dGFncyAmJlxyXG5cdFx0XHR0YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGVUYWcoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e3B1Ymxpc2hCbG9nfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IFRpdGxlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8UmVhY3RRdWlsbFxyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtDcmVhdGVCbG9nLm1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e0NyZWF0ZUJsb2cuZm9ybWF0c31cclxuXHRcdFx0XHRcdFx0dmFsdWU9e2JvZHl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV3JpdGUgc29tZXRoaW5nIGNvb2wgYW5kIGFtYXppbmcgZm9yIHRoZSB3b3JsZCB0byBrbm93LlwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFB1Ymxpc2hcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQpO1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj57Y3JlYXRlQmxvZ0Zvcm0oKX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDY+Q2F0ZWdvcmllczwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJzEwMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ3Njcm9sbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheUNhdGVnb3JpZXMoKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNj5UYWdzPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnMTAwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkaXNwbGF5VGFncygpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuQ3JlYXRlQmxvZy5tb2R1bGVzID0ge1xyXG5cdHRvb2xiYXI6IFtcclxuXHRcdFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBoZWFkZXI6IFszLCA0LCA1LCA2XSB9LCB7IGZvbnQ6IFtdIH1dLFxyXG5cdFx0W3sgc2l6ZTogW10gfV0sXHJcblx0XHRbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxyXG5cdFx0W3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfV0sXHJcblx0XHRbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuXHRcdFsnY2xlYW4nXSxcclxuXHRcdFsnY29kZS1ibG9jayddLFxyXG5cdF0sXHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLmZvcm1hdHMgPSBbXHJcblx0J2hlYWRlcicsXHJcblx0J2ZvbnQnLFxyXG5cdCdzaXplJyxcclxuXHQnYm9sZCcsXHJcblx0J2l0YWxpYycsXHJcblx0J3VuZGVybGluZScsXHJcblx0J3N0cmlrZScsXHJcblx0J2Jsb2NrcXVvdGUnLFxyXG5cdCdsaXN0JyxcclxuXHQnYnVsbGV0JyxcclxuXHQnbGluaycsXHJcblx0J2ltYWdlJyxcclxuXHQndmlkZW8nLFxyXG5cdCdjb2RlLWJsb2NrJyxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ3JlYXRlQmxvZyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=