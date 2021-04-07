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

  var initialTags = function initialTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_9__["getTags"])().then(function (data) {
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
          lineNumber: 106,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }, _this);
    });
  };

  var displayTags = function displayTags() {
    return tags && tags.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
          lineNumber: 129,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
          lineNumber: 133,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: createBlogForm()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              children: "Categories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 8
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
              lineNumber: 158,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              children: "Tags"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 8
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
              lineNumber: 172,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwiZmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWRDIiwic2V0Q2hlY2tlZEMiLCJjaGVja2VkVCIsInNldENoZWNrZWRUIiwiYm9keSIsInNldEJvZHkiLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImluaXRpYWxDYXRlZ29yaWVzIiwiaW5pdGlhbFRhZ3MiLCJnZXRDYXRlZ29yaWVzIiwidGhlbiIsImRhdGEiLCJnZXRUYWdzIiwicHVibGlzaEJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJzZXQiLCJoYW5kbGVCb2R5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZVRvZ2dsZSIsIml0ZW0iLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwicHVzaCIsInNwbGljZSIsImRpc3BsYXlDYXRlZ29yaWVzIiwibWFwIiwiaW5kZXgiLCJfaWQiLCJkaXNwbGF5VGFncyIsImNyZWF0ZUJsb2dGb3JtIiwibW9kdWxlcyIsImZvcm1hdHMiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250Iiwic2l6ZSIsImxpc3QiLCJ3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LE1BSG9CLEVBSXBCLE1BSm9CLEVBS3BCLFFBTG9CLEVBTXBCLFdBTm9CLEVBT3BCLFFBUG9CLEVBUXBCLFlBUm9CLEVBU3BCLE1BVG9CLEVBVXBCLFFBVm9CLEVBV3BCLE1BWG9CLEVBWXBCLE9BWm9CLEVBYXBCLE9BYm9CLEVBY3BCLFlBZG9CLENBQXJCO0FBaUJlLHFFQUFBVSw4REFBVSxDQUFDeEUsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuYTcwZmJlMDcyYWZlOWZmN2UzNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IGdldFRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RhZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBDcmVhdGVCbG9nID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBmZXRjaEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpIHtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQvLyBGb3IgY2F0ZWdvcmllc1xyXG5cdGNvbnN0IFtjaGVja2VkQywgc2V0Q2hlY2tlZENdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIEZvciB0YWdzXHJcblx0Y29uc3QgW2NoZWNrZWRULCBzZXRDaGVja2VkVF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKGZldGNoRnJvbUxvY2FsU3RvcmFnZSgpKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c2l6ZUVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0aGlkZVB1Ymxpc2hCdXR0b246IGZhbHNlLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgZXJyb3IsIHNpemVFcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlLCBoaWRlUHVibGlzaEJ1dHRvbiB9ID0gdmFsdWVzO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHRcdGluaXRpYWxDYXRlZ29yaWVzKCk7XHJcblx0XHRpbml0aWFsVGFncygpO1xyXG5cdH0sIFtyb3V0ZXJdKTtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbENhdGVnb3JpZXMoKSB7XHJcblx0XHRnZXRDYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbml0aWFsVGFncyA9ICgpID0+IHtcclxuXHRcdGdldFRhZ3MoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRUYWdzKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwdWJsaXNoQmxvZyA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZygncHVibGlzaGVkJyk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcblx0XHRmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQm9keSA9IChlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhlKTtcclxuXHRcdHNldEJvZHkoZSk7XHJcblx0XHRmb3JtRGF0YS5zZXQoJ2JvZHknLCBlKTtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmxvZycsIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVUb2dnbGUgPSAoaXRlbSkgPT4gKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcblx0XHRjb25zdCBjbGlja2VkQ2F0ZWdvcnkgPSBjaGVja2VkQy5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0Y29uc3QgYWxsID0gWy4uLmNoZWNrZWRDXTtcclxuXHRcdGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcblx0XHRcdGFsbC5wdXNoKGl0ZW0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coYWxsKTtcclxuXHRcdHNldENoZWNrZWRDKGFsbCk7XHJcblx0XHRmb3JtRGF0YS5zZXQoJ2NhdGVnb3JpZXMnLCBhbGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0Y2F0ZWdvcmllcyAmJlxyXG5cdFx0XHRjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoaXRlbS5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2l0ZW0ubmFtZX08L2xhYmVsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlUYWdzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0dGFncyAmJlxyXG5cdFx0XHR0YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57aXRlbS5uYW1lfTwvbGFiZWw+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0KSlcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlQmxvZ0Zvcm0gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17cHVibGlzaEJsb2d9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4gVGl0bGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxSZWFjdFF1aWxsXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e0NyZWF0ZUJsb2cubW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17Q3JlYXRlQmxvZy5mb3JtYXRzfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17Ym9keX1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXcml0ZSBzb21ldGhpbmcgY29vbCBhbmQgYW1hemluZyBmb3IgdGhlIHdvcmxkIHRvIGtub3cuXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUJvZHl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0UHVibGlzaFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdCk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPntjcmVhdGVCbG9nRm9ybSgpfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoNj5DYXRlZ29yaWVzPC9oNj5cclxuXHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8dWxcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJzEwMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheUNhdGVnb3JpZXMoKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDY+VGFnczwvaDY+XHJcblx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHRcdFx0PHVsXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcxMDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2Rpc3BsYXlUYWdzKCl9XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuQ3JlYXRlQmxvZy5tb2R1bGVzID0ge1xyXG5cdHRvb2xiYXI6IFtcclxuXHRcdFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBoZWFkZXI6IFszLCA0LCA1LCA2XSB9LCB7IGZvbnQ6IFtdIH1dLFxyXG5cdFx0W3sgc2l6ZTogW10gfV0sXHJcblx0XHRbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxyXG5cdFx0W3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfV0sXHJcblx0XHRbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuXHRcdFsnY2xlYW4nXSxcclxuXHRcdFsnY29kZS1ibG9jayddLFxyXG5cdF0sXHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLmZvcm1hdHMgPSBbXHJcblx0J2hlYWRlcicsXHJcblx0J2ZvbnQnLFxyXG5cdCdzaXplJyxcclxuXHQnYm9sZCcsXHJcblx0J2l0YWxpYycsXHJcblx0J3VuZGVybGluZScsXHJcblx0J3N0cmlrZScsXHJcblx0J2Jsb2NrcXVvdGUnLFxyXG5cdCdsaXN0JyxcclxuXHQnYnVsbGV0JyxcclxuXHQnbGluaycsXHJcblx0J2ltYWdlJyxcclxuXHQndmlkZW8nLFxyXG5cdCdjb2RlLWJsb2NrJyxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ3JlYXRlQmxvZyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=