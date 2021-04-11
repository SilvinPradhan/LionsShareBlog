webpackHotUpdate_N_E("pages/admin/crud/blog",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var createBlog = function createBlog(blog, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blog"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
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

/***/ "./actions/category.js":
/*!*****************************!*\
  !*** ./actions/category.js ***!
  \*****************************/
/*! exports provided: create, getCategories, singleCategory, removeCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCategory", function() { return singleCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCategory", function() { return removeCategory; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var create = function create(category, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/category"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(category)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getCategories = function getCategories() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/categories"), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleCategory = function singleCategory(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/category/").concat(slug), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeCategory = function removeCategory(slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/category/").concat(slug), {
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
          lineNumber: 122,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
          lineNumber: 134,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
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
          lineNumber: 145,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
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
          lineNumber: 149,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: createBlogForm()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group pb-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                children: "Featured Image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Max Size: 1 MB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "btn btn-info",
                children: ["Upload Featured Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: handleChange('photo'),
                  type: "file",
                  accept: "image/*",
                  hidden: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Jumbotron"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
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
                lineNumber: 186,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                children: "Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
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
                lineNumber: 200,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 166,
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-quill/dist/quill.snow.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/react-quill/dist/quill.snow.css ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.ql-snow * {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n     -moz-transform: translateY(10px);\n          transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n     -moz-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n", "",{"version":3,"sources":["webpack://node_modules/react-quill/dist/quill.snow.css"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,2BAAsB;OAAtB,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,2BAAsB;OAAtB,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,YAAY;AACd;AACA;;;;;;;;;;;EAWE,SAAS;EACT,UAAU;EACV,6EAA6E;AAC/E;AACA;;EAEE,mBAAmB;AACrB;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,mBAAmB;AACrB;AACA;;EAEE,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;AACA;;EAEE,mBAAmB;AACrB;AACA;;EAEE,oBAAoB;AACtB;AACA;EACE,6EAA6E;EAC7E,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,sEAAsE;AACxE;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,+DAA+D;AACjE;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,wDAAwD;AAC1D;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,iDAAiD;AACnD;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,kBAAkB;EAClB,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE,WAAW;EACX,WAAW;EACX,cAAc;AAChB;AACA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;AACA;;EAEE,WAAW;EACX,YAAY;AACd;AACA;;EAEE,aAAa;AACf;AACA;;EAEE,aAAa;AACf;AACA;;;;;;;;;;;;;;EAcE,WAAW;AACb;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,UAAU;AACZ;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,YAAY;AACd;AACA;EACE;;IAEE,WAAW;EACb;EACA;;;;IAIE,UAAU;EACZ;EACA;;;;IAIE,YAAY;EACd;AACF;AACA;EACE,2BAAsB;OAAtB,sBAAsB;AACxB;AACA;EACE,2BAAsB;OAAtB,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,mCAA2B;KAA3B,gCAA2B;UAA3B,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,oCAA4B;KAA5B,iCAA4B;UAA5B,4BAA4B;AAC9B;AACA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,WAAW;EACX,cAAc;AAChB;AACA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;AACA;;EAEE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;AACA;;EAEE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;AACA;;EAEE,WAAW;AACb;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,UAAU;AACZ;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,6BAA6B;EAC7B,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,QAAQ;EACR,QAAQ;EACR,WAAW;AACb;AACA;;;;;;EAME,yBAAyB;AAC3B;AACA;EACE,WAAW;AACb;AACA;;EAEE,iBAAiB;AACnB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,oBAAoB;AACtB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;;EAEE,qBAAqB;AACvB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,oBAAoB;AACtB;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,WAAW;AACb;AACA;;EAEE,iBAAiB;AACnB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,2BAAsB;OAAtB,sBAAsB;EACtB,+DAA+D;EAC/D,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,qCAAqC;AACvC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,aAAa;AACf;AACA;EACE,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;AACA;EACE,sBAAsB;AACxB","sourcesContent":["/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports["default"] = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/vercel/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports["default"] = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./quill.snow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-quill/dist/quill.snow.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./quill.snow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-quill/dist/quill.snow.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./quill.snow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-quill/dist/quill.snow.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./pages/admin/crud/blog.js":
/*!**********************************!*\
  !*** ./pages/admin/crud/blog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/crud/CreateBlog */ "./components/crud/CreateBlog.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\pages\\admin\\crud\\blog.js",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: '10px',
      margin: 'auto',
      maxWidth: 350,
      background: 'white'
    },
    row: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    title: {
      fontWeight: 'bolder',
      fontSize: 19,
      color: '#1b0975',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
    },
    button: {
      minWidth: 165,
      width: 'auto',
      height: '50px',
      letterSpacing: '0.5px',
      lineHeight: '50px',
      padding: '0 35px 0 35px',
      fontSize: '15px',
      backgroundColor: '#334aa6',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bolder',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#525ed9'
      }
    }
  };
});

var CategoryTag = function CategoryTag(props) {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
              className: classes.title,
              children: "Create a New Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_crud_CreateBlog__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, _this);
};

_s(CategoryTag, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = CategoryTag;
/* harmony default export */ __webpack_exports__["default"] = (CategoryTag);

var _c;

$RefreshReg$(_c, "CategoryTag");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9ibG9nLmpzIiwid2VicGFjazovL19OX0UvLi9hY3Rpb25zL2NhdGVnb3J5LmpzIiwid2VicGFjazovL19OX0UvLi9hY3Rpb25zL3RhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzPzdmYTgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUJsb2ciLCJibG9nIiwidG9rZW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImNhdGVnb3J5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldENhdGVnb3JpZXMiLCJzaW5nbGVDYXRlZ29yeSIsInNsdWciLCJyZW1vdmVDYXRlZ29yeSIsInRhZyIsImdldFRhZ3MiLCJzaW5nbGVUYWciLCJyZW1vdmVUYWciLCJSZWFjdFF1aWxsIiwiZHluYW1pYyIsInNzciIsIkNyZWF0ZUJsb2ciLCJyb3V0ZXIiLCJmZXRjaEZyb21Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJ1c2VTdGF0ZSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidGFncyIsInNldFRhZ3MiLCJjaGVja2VkQyIsInNldENoZWNrZWRDIiwiY2hlY2tlZFQiLCJzZXRDaGVja2VkVCIsInNldEJvZHkiLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImluaXRpYWxDYXRlZ29yaWVzIiwiaW5pdGlhbFRhZ3MiLCJkYXRhIiwicHVibGlzaEJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNldCIsImhhbmRsZUJvZHkiLCJzZXRJdGVtIiwiaGFuZGxlVG9nZ2xlIiwiaXRlbSIsImNsaWNrZWRDYXRlZ29yeSIsImluZGV4T2YiLCJhbGwiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlVG9nZ2xlVGFnIiwiY2xpY2tlZFRhZyIsImRpc3BsYXlDYXRlZ29yaWVzIiwibWFwIiwiaW5kZXgiLCJfaWQiLCJkaXNwbGF5VGFncyIsImNyZWF0ZUJsb2dGb3JtIiwibW9kdWxlcyIsImZvcm1hdHMiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250Iiwic2l6ZSIsImxpc3QiLCJ3aXRoUm91dGVyIiwiaXNTZXJ2ZXJTaWRlIiwibG9hZGFibGVPcHRpb25zIiwiTG9hZGFibGVJbml0aWFsaXplciIsIkxvYWRpbmciLCJsb2FkYWJsZUZuIiwiTG9hZGFibGUiLCJsb2FkaW5nIiwiZHluYW1pY09wdGlvbnMiLCJsb2FkTW9kdWxlcyIsIk9iamVjdCIsImtleSIsIm1vZCIsIm5vU1NSIiwiTG9hZGFibGVDb250ZXh0IiwiUmVhY3QiLCJBTExfSU5JVElBTElaRVJTIiwiUkVBRFlfSU5JVElBTElaRVJTIiwiaW5pdGlhbGl6ZWQiLCJwcm9taXNlIiwibG9hZGVyIiwic3RhdGUiLCJsb2FkZWQiLCJwcm9taXNlcyIsInJlc3VsdCIsImxvYWQiLCJvYmoiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wdHMiLCJkZWxheSIsInRpbWVvdXQiLCJyZW5kZXIiLCJ3ZWJwYWNrIiwic3Vic2NyaXB0aW9uIiwic3ViIiwiZ2V0Q3VycmVudFZhbHVlIiwic3Vic2NyaWJlIiwicmV0cnkiLCJtb2R1bGVJZHMiLCJpZHMiLCJpbml0IiwiTG9hZGFibGVDb21wb25lbnQiLCJjb250ZXh0IiwiQXJyYXkiLCJtb2R1bGVOYW1lIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImNvbnN0cnVjdG9yIiwiX3JlcyIsIl9vcHRzIiwic2V0VGltZW91dCIsIl9lcnIiLCJfdXBkYXRlIiwiY2FsbGJhY2siLCJfY2xlYXJUaW1lb3V0cyIsImNsZWFyVGltZW91dCIsImNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50IiwiaW5pdGlhbGl6ZXJzIiwiZmx1c2hJbml0aWFsaXplcnMiLCJyZXNvbHZlUHJlbG9hZCIsIndpbmRvdyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJtYXhXaWR0aCIsImJhY2tncm91bmQiLCJyb3ciLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1pbldpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwiQ2F0ZWdvcnlUYWciLCJwcm9wcyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMxQyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixZQUFnQjtBQUMzQkMsVUFBTSxFQUFFLE1BRG1CO0FBRTNCQyxXQUFPLEVBQUU7QUFDUkMsWUFBTSxFQUFFLGtCQURBO0FBRVJDLG1CQUFhLG1CQUFZTixLQUFaO0FBRkwsS0FGa0I7QUFNM0JPLFFBQUksRUFBRVI7QUFOcUIsR0FBaEIsQ0FBTCxDQVFMUyxJQVJLLENBUUEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDQSxHQVZLLFdBV0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQVhELENBQVA7QUFZQSxDQWJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFFBQUQsRUFBV2YsS0FBWCxFQUFxQjtBQUMxQyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixnQkFBb0I7QUFDL0JDLFVBQU0sRUFBRSxNQUR1QjtBQUUv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QUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssa0JBQWtCLFVBQVUsS0FBSyxnQ0FBZ0MsV0FBVyxLQUFLLGdDQUFnQyxXQUFXLEtBQUssS0FBSyxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsS0FBSyxRQUFRLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVks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MERBQUQ7QUFBQSwyQkFDQyxxRUFBQyw4REFBRDtBQUFBLDhCQUNDLHFFQUFDLDhDQUFEO0FBQUssaUJBQVMsRUFBRWlDLE9BQU8sQ0FBQzlCLElBQXhCO0FBQUEsK0JBQ0MscUVBQUMsc0RBQUQ7QUFBQSxpQ0FDQyxxRUFBQyw2REFBRDtBQUFBLG1DQUNDLHFFQUFDLDREQUFEO0FBQVksdUJBQVMsRUFBRThCLE9BQU8sQ0FBQy9JLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFRQztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBa0JBLENBcEJEOztHQUFNNkksVztVQUNXL0IsUzs7O0tBRFgrQixXO0FBc0JTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuNWRlYTI1NjgxOGUxOThjYzJmNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCbG9nID0gKGJsb2csIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vYmxvZ2AsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogYmxvZyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAoY2F0ZWdvcnksIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2F0ZWdvcnlgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5KSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jYXRlZ29yaWVzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlQ2F0ZWdvcnkgPSAoc2x1ZykgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NhdGVnb3J5LyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2F0ZWdvcnkvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKHRhZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS90YWdgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhZyksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdGFnc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZVRhZyA9IChzbHVnKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdGFnLyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhZyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3RhZy8ke3NsdWd9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IGdldFRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RhZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcbmltcG9ydCB7IEp1bWJvdHJvbiwgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBDcmVhdGVCbG9nID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBmZXRjaEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpIHtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQvLyBGb3IgY2F0ZWdvcmllc1xyXG5cdGNvbnN0IFtjaGVja2VkQywgc2V0Q2hlY2tlZENdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIEZvciB0YWdzXHJcblx0Y29uc3QgW2NoZWNrZWRULCBzZXRDaGVja2VkVF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKGZldGNoRnJvbUxvY2FsU3RvcmFnZSgpKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c2l6ZUVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0aGlkZVB1Ymxpc2hCdXR0b246IGZhbHNlLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgZXJyb3IsIHNpemVFcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlLCBoaWRlUHVibGlzaEJ1dHRvbiB9ID0gdmFsdWVzO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHRcdGluaXRpYWxDYXRlZ29yaWVzKCk7XHJcblx0XHRpbml0aWFsVGFncygpO1xyXG5cdH0sIFtyb3V0ZXJdKTtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbENhdGVnb3JpZXMoKSB7XHJcblx0XHRnZXRDYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsVGFncygpIHtcclxuXHRcdGdldFRhZ3MoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRUYWdzKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHB1Ymxpc2hCbG9nID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdwdWJsaXNoZWQnKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuXHRcdGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBlcnJvcjogJycgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVCb2R5ID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0c2V0Qm9keShlKTtcclxuXHRcdGZvcm1EYXRhLnNldCgnYm9keScsIGUpO1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdibG9nJywgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpdGVtKSA9PiAoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiAnJyB9KTtcclxuXHRcdC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuXHRcdGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWRDLmluZGV4T2YoaXRlbSk7XHJcblx0XHRjb25zdCBhbGwgPSBbLi4uY2hlY2tlZENdO1xyXG5cdFx0aWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuXHRcdFx0YWxsLnB1c2goaXRlbSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGwuc3BsaWNlKGNsaWNrZWRDYXRlZ29yeSwgMSk7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhhbGwpO1xyXG5cdFx0c2V0Q2hlY2tlZEMoYWxsKTtcclxuXHRcdGZvcm1EYXRhLnNldCgnY2F0ZWdvcmllcycsIGFsbCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlVG9nZ2xlVGFnID0gKGl0ZW0pID0+ICgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG5cdFx0Y29uc3QgY2xpY2tlZFRhZyA9IGNoZWNrZWRULmluZGV4T2YoaXRlbSk7XHJcblx0XHRjb25zdCBhbGwgPSBbLi4uY2hlY2tlZFRdO1xyXG5cdFx0aWYgKGNsaWNrZWRUYWcgPT09IC0xKSB7XHJcblx0XHRcdGFsbC5wdXNoKGl0ZW0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKGFsbCk7XHJcblx0XHRzZXRDaGVja2VkVChhbGwpO1xyXG5cdFx0Zm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkaXNwbGF5Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGNhdGVnb3JpZXMgJiZcclxuXHRcdFx0Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGl0ZW0uX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntpdGVtLm5hbWV9PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQpKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkaXNwbGF5VGFncyA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRhZ3MgJiZcclxuXHRcdFx0dGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlVGFnKGl0ZW0uX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntpdGVtLm5hbWV9PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQpKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVhdGVCbG9nRm9ybSA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtwdWJsaXNoQmxvZ30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiBUaXRsZSA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0aXRsZScpfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PFJlYWN0UXVpbGxcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17Q3JlYXRlQmxvZy5tb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtDcmVhdGVCbG9nLmZvcm1hdHN9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtib2R5fVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWV0aGluZyBjb29sIGFuZCBhbWF6aW5nIGZvciB0aGUgd29ybGQgdG8ga25vdy5cIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQm9keX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRQdWJsaXNoXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+e2NyZWF0ZUJsb2dGb3JtKCl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNT5GZWF0dXJlZCBJbWFnZTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IFNpemU6IDEgTUI8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRVcGxvYWQgRmVhdHVyZWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbj48L2lucHV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNj5DYXRlZ29yaWVzPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnMTAwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkaXNwbGF5Q2F0ZWdvcmllcygpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg2PlRhZ3M8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcxMDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93WTogJ2hpZGRlbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Rpc3BsYXlUYWdzKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLm1vZHVsZXMgPSB7XHJcblx0dG9vbGJhcjogW1xyXG5cdFx0W3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGhlYWRlcjogWzMsIDQsIDUsIDZdIH0sIHsgZm9udDogW10gfV0sXHJcblx0XHRbeyBzaXplOiBbXSB9XSxcclxuXHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcblx0XHRbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9XSxcclxuXHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG5cdFx0WydjbGVhbiddLFxyXG5cdFx0Wydjb2RlLWJsb2NrJ10sXHJcblx0XSxcclxufTtcclxuXHJcbkNyZWF0ZUJsb2cuZm9ybWF0cyA9IFtcclxuXHQnaGVhZGVyJyxcclxuXHQnZm9udCcsXHJcblx0J3NpemUnLFxyXG5cdCdib2xkJyxcclxuXHQnaXRhbGljJyxcclxuXHQndW5kZXJsaW5lJyxcclxuXHQnc3RyaWtlJyxcclxuXHQnYmxvY2txdW90ZScsXHJcblx0J2xpc3QnLFxyXG5cdCdidWxsZXQnLFxyXG5cdCdsaW5rJyxcclxuXHQnaW1hZ2UnLFxyXG5cdCd2aWRlbycsXHJcblx0J2NvZGUtYmxvY2snLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDcmVhdGVCbG9nKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXG4gKiBRdWlsbCBFZGl0b3IgdjEuMy43XFxuICogaHR0cHM6Ly9xdWlsbGpzLmNvbS9cXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEphc29uIENoZW5cXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIHNhbGVzZm9yY2UuY29tXFxuICovXFxuLnFsLWNvbnRhaW5lciB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC10b29sdGlwIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnFsLWNvbnRhaW5lci5xbC1kaXNhYmxlZCAucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZF0gPiBsaTo6YmVmb3JlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucWwtY2xpcGJvYXJkIHtcXG4gIGxlZnQ6IC0xMDAwMDBweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxufVxcbi5xbC1jbGlwYm9hcmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ucWwtZWRpdG9yIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICB0YWItc2l6ZTogNDtcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4ucWwtZWRpdG9yID4gKiB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcbi5xbC1lZGl0b3IgcCxcXG4ucWwtZWRpdG9yIG9sLFxcbi5xbC1lZGl0b3IgdWwsXFxuLnFsLWVkaXRvciBwcmUsXFxuLnFsLWVkaXRvciBibG9ja3F1b3RlLFxcbi5xbC1lZGl0b3IgaDEsXFxuLnFsLWVkaXRvciBoMixcXG4ucWwtZWRpdG9yIGgzLFxcbi5xbC1lZGl0b3IgaDQsXFxuLnFsLWVkaXRvciBoNSxcXG4ucWwtZWRpdG9yIGg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb3VudGVyLXJlc2V0OiBsaXN0LTEgbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCxcXG4ucWwtZWRpdG9yIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMS41ZW07XFxufVxcbi5xbC1lZGl0b3Igb2wgPiBsaSxcXG4ucWwtZWRpdG9yIHVsID4gbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4ucWwtZWRpdG9yIHVsID4gbGk6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDIwMjInO1xcbn1cXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSxcXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGkgKixcXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaSAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSxcXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjYxMSc7XFxufVxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSA+IGxpOjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyNjEwJztcXG59XFxuLnFsLWVkaXRvciBsaTo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogMS4yZW07XFxufVxcbi5xbC1lZGl0b3IgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMS41ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtZGlyZWN0aW9uLXJ0bDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG4gIG1hcmdpbi1yaWdodDogLTEuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCksXFxuLnFsLWVkaXRvciB1bCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMS41ZW07XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtZGlyZWN0aW9uLXJ0bCxcXG4ucWwtZWRpdG9yIHVsIGxpLnFsLWRpcmVjdGlvbi1ydGwge1xcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkge1xcbiAgY291bnRlci1yZXNldDogbGlzdC0xIGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0wO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMCwgZGVjaW1hbCkgJy4gJztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMSB7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0xO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMSwgbG93ZXItYWxwaGEpICcuICc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xcbiAgY291bnRlci1yZXNldDogbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMiB7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0yO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMiwgbG93ZXItcm9tYW4pICcuICc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xcbiAgY291bnRlci1yZXNldDogbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTM7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0zLCBkZWNpbWFsKSAnLiAnO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zIHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00IHtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTQ7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC00LCBsb3dlci1hbHBoYSkgJy4gJztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XFxuICBjb3VudGVyLXJlc2V0OiBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01IHtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTU7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC01LCBsb3dlci1yb21hbikgJy4gJztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XFxuICBjb3VudGVyLXJlc2V0OiBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNjtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNjpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTYsIGRlY2ltYWwpICcuICc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTYge1xcbiAgY291bnRlci1yZXNldDogbGlzdC03IGxpc3QtOCBsaXN0LTk7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTcge1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNzpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTcsIGxvd2VyLWFscGhhKSAnLiAnO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOCBsaXN0LTk7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTgge1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtODtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtODpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTgsIGxvd2VyLXJvbWFuKSAnLiAnO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOSB7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC05OmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOSwgZGVjaW1hbCkgJy4gJztcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDNlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogNC41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogM2VtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0xLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogNC41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiA2ZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTI6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDcuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDZlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDcuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogOWVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAxMC41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogOWVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0zLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMTAuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMTJlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNDpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMTMuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMy41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAxNWVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC01Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAxNi41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC01LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMTVlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE4ZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTY6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE5LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTYucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxOGVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMTkuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMjFlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMjIuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIxZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMi41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAyNGVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC04Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAyNS41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC04LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMjRlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI3ZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTkucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyN2VtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMjguNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC12aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLnFsLWVkaXRvciAucWwtdmlkZW8ucWwtYWxpZ24tY2VudGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1yaWdodCB7XFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxufVxcbi5xbC1lZGl0b3IgLnFsLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWJnLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5MDtcXG59XFxuLnFsLWVkaXRvciAucWwtYmcteWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWJnLWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhhMDA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YztcXG59XFxuLnFsLWVkaXRvciAucWwtYmctcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2Y7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1jb2xvci1yZWQge1xcbiAgY29sb3I6ICNlNjAwMDA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWNvbG9yLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y5MDtcXG59XFxuLnFsLWVkaXRvciAucWwtY29sb3IteWVsbG93IHtcXG4gIGNvbG9yOiAjZmYwO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ncmVlbiB7XFxuICBjb2xvcjogIzAwOGEwMDtcXG59XFxuLnFsLWVkaXRvciAucWwtY29sb3ItYmx1ZSB7XFxuICBjb2xvcjogIzA2YztcXG59XFxuLnFsLWVkaXRvciAucWwtY29sb3ItcHVycGxlIHtcXG4gIGNvbG9yOiAjOTNmO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1mb250LXNlcmlmIHtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1mb250LW1vbm9zcGFjZSB7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1zaXplLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1zaXplLWxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLXNpemUtaHVnZSB7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1kaXJlY3Rpb24tcnRsIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuLnFsLWVkaXRvciAucWwtYWxpZ24tY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnFsLWVkaXRvciAucWwtYWxpZ24tanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnFsLWVkaXRvci5xbC1ibGFuazo6YmVmb3JlIHtcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGVmdDogMTVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxufVxcbi5xbC1zbm93LnFsLXRvb2xiYXI6YWZ0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbixcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIHdpZHRoOiAyOHB4O1xcbn1cXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbiBzdmcsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uIHN2ZyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246YWN0aXZlOmhvdmVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjphY3RpdmU6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnFsLXNub3cucWwtdG9vbGJhciBpbnB1dC5xbC1pbWFnZVt0eXBlPWZpbGVdLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGlucHV0LnFsLWltYWdlW3R5cGU9ZmlsZV0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlcixcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlcixcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQge1xcbiAgY29sb3I6ICMwNmM7XFxufVxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtZmlsbCxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtZmlsbCxcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLnFsLWZpbGwge1xcbiAgZmlsbDogIzA2YztcXG59XFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS1taXRlciB7XFxuICBzdHJva2U6ICMwNmM7XFxufVxcbkBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XFxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSksXFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIHtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICB9XFxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLWZpbGwsXFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1maWxsLFxcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UucWwtZmlsbCxcXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS5xbC1maWxsIHtcXG4gICAgZmlsbDogIzQ0NDtcXG4gIH1cXG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLFxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLFxcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UtbWl0ZXIsXFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UtbWl0ZXIge1xcbiAgICBzdHJva2U6ICM0NDQ7XFxuICB9XFxufVxcbi5xbC1zbm93IHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnFsLXNub3cgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5xbC1zbm93IC5xbC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnFsLXNub3cgLnFsLW91dC1ib3R0b20sXFxuLnFsLXNub3cgLnFsLW91dC10b3Age1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwIGEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1mbGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuLnFsLXNub3cgLnFsLWZvcm1hdHMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnFsLXNub3cgLnFsLWZvcm1hdHM6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4ucWwtc25vdyAucWwtc3Ryb2tlIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICM0NDQ7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbiAgc3Ryb2tlLXdpZHRoOiAyO1xcbn1cXG4ucWwtc25vdyAucWwtc3Ryb2tlLW1pdGVyIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICM0NDQ7XFxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxuICBzdHJva2Utd2lkdGg6IDI7XFxufVxcbi5xbC1zbm93IC5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC1zdHJva2UucWwtZmlsbCB7XFxuICBmaWxsOiAjNDQ0O1xcbn1cXG4ucWwtc25vdyAucWwtZW1wdHkge1xcbiAgZmlsbDogbm9uZTtcXG59XFxuLnFsLXNub3cgLnFsLWV2ZW4ge1xcbiAgZmlsbC1ydWxlOiBldmVub2RkO1xcbn1cXG4ucWwtc25vdyAucWwtdGhpbixcXG4ucWwtc25vdyAucWwtc3Ryb2tlLnFsLXRoaW4ge1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG4ucWwtc25vdyAucWwtdHJhbnNwYXJlbnQge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4ucWwtc25vdyAucWwtZGlyZWN0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5xbC1zbm93IC5xbC1kaXJlY3Rpb24ucWwtYWN0aXZlIHN2ZzpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLnFsLXNub3cgLnFsLWRpcmVjdGlvbi5xbC1hY3RpdmUgc3ZnOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaDIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBoMyB7XFxuICBmb250LXNpemU6IDEuMTdlbTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBoNCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBoNSB7XFxuICBmb250LXNpemU6IDAuODNlbTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBoNiB7XFxuICBmb250LXNpemU6IDAuNjdlbTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucWwtc25vdyAucWwtZWRpdG9yIGJsb2NrcXVvdGUge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbn1cXG4ucWwtc25vdyAucWwtZWRpdG9yIGNvZGUsXFxuLnFsLXNub3cgLnFsLWVkaXRvciBwcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBwcmUge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgY29kZSB7XFxuICBmb250LXNpemU6IDg1JTtcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgcHJlLnFsLXN5bnRheCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNDFmO1xcbiAgY29sb3I6ICNmOGY4ZjI7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci1sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXItb3B0aW9ucyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLW9wdGlvbnMgLnFsLXBpY2tlci1pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCB7XFxuICBjb2xvcjogI2NjYztcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCAucWwtZmlsbCB7XFxuICBmaWxsOiAjY2NjO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwgLnFsLXN0cm9rZSB7XFxuICBzdHJva2U6ICNjY2M7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIHRvcDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIsXFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIHtcXG4gIHdpZHRoOiAyOHB4O1xcbn1cXG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItbGFiZWwsXFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItbGFiZWwge1xcbiAgcGFkZGluZzogMnB4IDRweDtcXG59XFxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWxhYmVsIHN2ZyxcXG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCBzdmcge1xcbiAgcmlnaHQ6IDRweDtcXG59XFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItb3B0aW9ucyB7XFxuICBwYWRkaW5nOiA0cHggMHB4O1xcbn1cXG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1pdGVtIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgcGFkZGluZzogMnB4IDRweDtcXG59XFxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLW9wdGlvbnMge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIHdpZHRoOiAxNTJweDtcXG59XFxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWl0ZW0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXI6bm90KC5xbC1jb2xvci1waWNrZXIpOm5vdCgucWwtaWNvbi1waWNrZXIpIHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tdG9wOiAtOXB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIge1xcbiAgd2lkdGg6IDk4cHg7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnTm9ybWFsJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVxcXCIxXFxcIl06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiMVxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0hlYWRpbmcgMSc7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cXFwiMlxcXCJdOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjJcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDInO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XFxcIjNcXFwiXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCIzXFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnSGVhZGluZyAzJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVxcXCI0XFxcIl06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiNFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0hlYWRpbmcgNCc7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cXFwiNVxcXCJdOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjVcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDUnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XFxcIjZcXFwiXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCI2XFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnSGVhZGluZyA2JztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjFcXFwiXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiMlxcXCJdOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjNcXFwiXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiNFxcXCJdOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCI1XFxcIl06OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDAuODNlbTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjZcXFwiXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMC42N2VtO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQge1xcbiAgd2lkdGg6IDEwOHB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnU2FucyBTZXJpZic7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdTZXJpZic7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9bW9ub3NwYWNlXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ01vbm9zcGFjZSc7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zZXJpZl06OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUge1xcbiAgd2lkdGg6IDk4cHg7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdOb3JtYWwnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnU21hbGwnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnTGFyZ2UnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0h1Z2UnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c21hbGxdOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIucWwtYmFja2dyb3VuZCAucWwtcGlja2VyLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlci5xbC1jb2xvciAucWwtcGlja2VyLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuLnFsLXRvb2xiYXIucWwtc25vdyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1mb3JtYXRzIHtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLWxhYmVsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXItb3B0aW9ucyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4yKSAwIDJweCA4cHg7XFxufVxcbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG59XFxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItb3B0aW9ucyB7XFxuICBib3JkZXItY29sb3I6ICNjY2M7XFxufVxcbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQsXFxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxufVxcbi5xbC10b29sYmFyLnFsLXNub3cgKyAucWwtY29udGFpbmVyLnFsLXNub3cge1xcbiAgYm9yZGVyLXRvcDogMHB4O1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNkZGQ7XFxuICBjb2xvcjogIzQ0NDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXA6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiVmlzaXQgVVJMOlxcXCI7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgd2lkdGg6IDE3MHB4O1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCBhLnFsLXByZXZpZXcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYS5xbC1hY3Rpb246OmFmdGVyIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XFxuICBjb250ZW50OiAnRWRpdCc7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYS5xbC1yZW1vdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnUmVtb3ZlJztcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwIGEge1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWVkaXRpbmcgYS5xbC1wcmV2aWV3LFxcbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWVkaXRpbmcgYS5xbC1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBhLnFsLWFjdGlvbjo6YWZ0ZXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XFxuICBjb250ZW50OiAnU2F2ZSc7XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwW2RhdGEtbW9kZT1saW5rXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJFbnRlciBsaW5rOlxcXCI7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwW2RhdGEtbW9kZT1mb3JtdWxhXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJFbnRlciBmb3JtdWxhOlxcXCI7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwW2RhdGEtbW9kZT12aWRlb106OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiRW50ZXIgdmlkZW86XFxcIjtcXG59XFxuLnFsLXNub3cgYSB7XFxuICBjb2xvcjogIzA2YztcXG59XFxuLnFsLWNvbnRhaW5lci5xbC1zbm93IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7RUFLRTtBQUNGO0VBQ0UsMkJBQXNCO09BQXRCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQXNCO09BQXRCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBOzs7Ozs7Ozs7OztFQVdFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNkVBQTZFO0FBQy9FO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7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QjtFQUM3QixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIVxcbiAqIFF1aWxsIEVkaXRvciB2MS4zLjdcXG4gKiBodHRwczovL3F1aWxsanMuY29tL1xcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgSmFzb24gQ2hlblxcbiAqIENvcHlyaWdodCAoYykgMjAxMywgc2FsZXNmb3JjZS5jb21cXG4gKi9cXG4ucWwtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC10b29sdGlwIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnFsLWNvbnRhaW5lci5xbC1kaXNhYmxlZCAucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZF0gPiBsaTo6YmVmb3JlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucWwtY2xpcGJvYXJkIHtcXG4gIGxlZnQ6IC0xMDAwMDBweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxufVxcbi5xbC1jbGlwYm9hcmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ucWwtZWRpdG9yIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaW5lLWhlaWdodDogMS40MjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGFiLXNpemU6IDQ7XFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLnFsLWVkaXRvciA+ICoge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4ucWwtZWRpdG9yIHAsXFxuLnFsLWVkaXRvciBvbCxcXG4ucWwtZWRpdG9yIHVsLFxcbi5xbC1lZGl0b3IgcHJlLFxcbi5xbC1lZGl0b3IgYmxvY2txdW90ZSxcXG4ucWwtZWRpdG9yIGgxLFxcbi5xbC1lZGl0b3IgaDIsXFxuLnFsLWVkaXRvciBoMyxcXG4ucWwtZWRpdG9yIGg0LFxcbi5xbC1lZGl0b3IgaDUsXFxuLnFsLWVkaXRvciBoNiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY291bnRlci1yZXNldDogbGlzdC0xIGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XFxufVxcbi5xbC1lZGl0b3Igb2wsXFxuLnFsLWVkaXRvciB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIG9sID4gbGksXFxuLnFsLWVkaXRvciB1bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnFsLWVkaXRvciB1bCA+IGxpOjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyMDIyJztcXG59XFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0sXFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpICosXFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGkgKiB7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpOjpiZWZvcmUsXFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGk6OmJlZm9yZSB7XFxuICBjb2xvcjogIzc3NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDI2MTEnO1xcbn1cXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjYxMCc7XFxufVxcbi5xbC1lZGl0b3IgbGk6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDEuMmVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCk6OmJlZm9yZSB7XFxuICBtYXJnaW4tbGVmdDogLTEuNWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWRpcmVjdGlvbi1ydGw6OmJlZm9yZSB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxuICBtYXJnaW4tcmlnaHQ6IC0xLjVlbTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpLFxcbi5xbC1lZGl0b3IgdWwgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWRpcmVjdGlvbi1ydGwsXFxuLnFsLWVkaXRvciB1bCBsaS5xbC1kaXJlY3Rpb24tcnRsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpIHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMDtcXG59XFxuLnFsLWVkaXRvciBvbCBsaTpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTAsIGRlY2ltYWwpICcuICc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTEsIGxvd2VyLWFscGhhKSAnLiAnO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xIHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMjtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTIsIGxvd2VyLXJvbWFuKSAnLiAnO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yIHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0zO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMywgZGVjaW1hbCkgJy4gJztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XFxuICBjb3VudGVyLXJlc2V0OiBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC00O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNCwgbG93ZXItYWxwaGEpICcuICc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQge1xcbiAgY291bnRlci1yZXNldDogbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XFxuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC01O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNSwgbG93ZXItcm9tYW4pICcuICc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTUge1xcbiAgY291bnRlci1yZXNldDogbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTY7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC02LCBkZWNpbWFsKSAnLiAnO1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcXG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNyBsaXN0LTggbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTc7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC03LCBsb3dlci1hbHBoYSkgJy4gJztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNyB7XFxuICBjb3VudGVyLXJlc2V0OiBsaXN0LTggbGlzdC05O1xcbn1cXG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTg7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC04LCBsb3dlci1yb21hbikgJy4gJztcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOCB7XFxuICBjb3VudGVyLXJlc2V0OiBsaXN0LTk7XFxufVxcbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTkge1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtOTtcXG59XFxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOTpiZWZvcmUge1xcbiAgY29udGVudDogY291bnRlcihsaXN0LTksIGRlY2ltYWwpICcuICc7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAzZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDQuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogNmVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiA3LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA2ZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA3LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTM6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDllbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMTAuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDllbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwLjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEzLjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMmVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC00LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMTMuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMTVlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMTYuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1ZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTUucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNi41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAxOGVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAxOS41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMThlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE5LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIxZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIyLjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMWVtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC03LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMjIuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMjRlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcXG4gIHBhZGRpbmctbGVmdDogMjUuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0ZW07XFxufVxcbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTgucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNS41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAyN2VtO1xcbn1cXG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xcbiAgcGFkZGluZy1sZWZ0OiAyOC41ZW07XFxufVxcbi5xbC1lZGl0b3IgLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMjdlbTtcXG59XFxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4LjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtdmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5xbC1lZGl0b3IgLnFsLXZpZGVvLnFsLWFsaWduLWNlbnRlciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnFsLWVkaXRvciAucWwtdmlkZW8ucWwtYWxpZ24tcmlnaHQge1xcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1iZy1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcXG59XFxuLnFsLWVkaXRvciAucWwtYmctb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWJnLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1iZy1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1jb2xvci13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnFsLWVkaXRvciAucWwtY29sb3ItcmVkIHtcXG4gIGNvbG9yOiAjZTYwMDAwO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1jb2xvci1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmOTA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXllbGxvdyB7XFxuICBjb2xvcjogI2ZmMDtcXG59XFxuLnFsLWVkaXRvciAucWwtY29sb3ItZ3JlZW4ge1xcbiAgY29sb3I6ICMwMDhhMDA7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWNvbG9yLWJsdWUge1xcbiAgY29sb3I6ICMwNmM7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXB1cnBsZSB7XFxuICBjb2xvcjogIzkzZjtcXG59XFxuLnFsLWVkaXRvciAucWwtZm9udC1zZXJpZiB7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcXG59XFxuLnFsLWVkaXRvciAucWwtZm9udC1tb25vc3BhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG59XFxuLnFsLWVkaXRvciAucWwtc2l6ZS1zbWFsbCB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtc2l6ZS1sYXJnZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ucWwtZWRpdG9yIC5xbC1zaXplLWh1Z2Uge1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG59XFxuLnFsLWVkaXRvciAucWwtZGlyZWN0aW9uLXJ0bCB7XFxuICBkaXJlY3Rpb246IHJ0bDtcXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWFsaWduLWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5xbC1lZGl0b3IgLnFsLWFsaWduLWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLnFsLWVkaXRvciAucWwtYWxpZ24tcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XFxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxlZnQ6IDE1cHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbn1cXG4ucWwtc25vdy5xbC10b29sYmFyOmFmdGVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24sXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICB3aWR0aDogMjhweDtcXG59XFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24gc3ZnLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbiBzdmcge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmFjdGl2ZTpob3ZlcixcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246YWN0aXZlOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5xbC1zbm93LnFsLXRvb2xiYXIgaW5wdXQucWwtaW1hZ2VbdHlwZT1maWxlXSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBpbnB1dC5xbC1pbWFnZVt0eXBlPWZpbGVdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlcixcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMsXFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlcixcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIHtcXG4gIGNvbG9yOiAjMDZjO1xcbn1cXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtZmlsbCxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS5xbC1maWxsIHtcXG4gIGZpbGw6ICMwNmM7XFxufVxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UsXFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UsXFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZSxcXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZSxcXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UtbWl0ZXIsXFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UtbWl0ZXIge1xcbiAgc3Ryb2tlOiAjMDZjO1xcbn1cXG5AbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpLFxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSB7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgfVxcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1maWxsLFxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtZmlsbCxcXG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLnFsLWZpbGwsXFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UucWwtZmlsbCB7XFxuICAgIGZpbGw6ICM0NDQ7XFxuICB9XFxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZSxcXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZSxcXG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLW1pdGVyLFxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLW1pdGVyIHtcXG4gICAgc3Ryb2tlOiAjNDQ0O1xcbiAgfVxcbn1cXG4ucWwtc25vdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ucWwtc25vdyAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5xbC1zbm93IC5xbC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnFsLXNub3cgLnFsLW91dC1ib3R0b20sXFxuLnFsLXNub3cgLnFsLW91dC10b3Age1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwIGEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1mbGlwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxufVxcbi5xbC1zbm93IC5xbC1mb3JtYXRzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5xbC1zbm93IC5xbC1mb3JtYXRzOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnFsLXNub3cgLnFsLXN0cm9rZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjNDQ0O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG59XFxuLnFsLXNub3cgLnFsLXN0cm9rZS1taXRlciB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjNDQ0O1xcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAyO1xcbn1cXG4ucWwtc25vdyAucWwtZmlsbCxcXG4ucWwtc25vdyAucWwtc3Ryb2tlLnFsLWZpbGwge1xcbiAgZmlsbDogIzQ0NDtcXG59XFxuLnFsLXNub3cgLnFsLWVtcHR5IHtcXG4gIGZpbGw6IG5vbmU7XFxufVxcbi5xbC1zbm93IC5xbC1ldmVuIHtcXG4gIGZpbGwtcnVsZTogZXZlbm9kZDtcXG59XFxuLnFsLXNub3cgLnFsLXRoaW4sXFxuLnFsLXNub3cgLnFsLXN0cm9rZS5xbC10aGluIHtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG59XFxuLnFsLXNub3cgLnFsLXRyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuLnFsLXNub3cgLnFsLWRpcmVjdGlvbiBzdmc6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucWwtc25vdyAucWwtZGlyZWN0aW9uLnFsLWFjdGl2ZSBzdmc6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5xbC1zbm93IC5xbC1kaXJlY3Rpb24ucWwtYWN0aXZlIHN2ZzpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucWwtc25vdyAucWwtZWRpdG9yIGgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4ucWwtc25vdyAucWwtZWRpdG9yIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaDMge1xcbiAgZm9udC1zaXplOiAxLjE3ZW07XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaDQge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaDUge1xcbiAgZm9udC1zaXplOiAwLjgzZW07XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaDYge1xcbiAgZm9udC1zaXplOiAwLjY3ZW07XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBibG9ja3F1b3RlIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2NjYztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG59XFxuLnFsLXNub3cgLnFsLWVkaXRvciBjb2RlLFxcbi5xbC1zbm93IC5xbC1lZGl0b3IgcHJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgcHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG4ucWwtc25vdyAucWwtZWRpdG9yIGNvZGUge1xcbiAgZm9udC1zaXplOiA4NSU7XFxuICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG4ucWwtc25vdyAucWwtZWRpdG9yIHByZS5xbC1zeW50YXgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjQxZjtcXG4gIGNvbG9yOiAjZjhmOGYyO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5xbC1zbm93IC5xbC1lZGl0b3IgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXItbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLW9wdGlvbnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci1vcHRpb25zIC5xbC1waWNrZXItaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwge1xcbiAgY29sb3I6ICNjY2M7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwgLnFsLWZpbGwge1xcbiAgZmlsbDogI2NjYztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIC5xbC1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjY2NjO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICB0b3A6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyLFxcbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciB7XFxuICB3aWR0aDogMjhweDtcXG59XFxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWxhYmVsLFxcbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLWxhYmVsIHtcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCBzdmcsXFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItbGFiZWwgc3ZnIHtcXG4gIHJpZ2h0OiA0cHg7XFxufVxcbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLW9wdGlvbnMge1xcbiAgcGFkZGluZzogNHB4IDBweDtcXG59XFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItaXRlbSB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1vcHRpb25zIHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICB3aWR0aDogMTUycHg7XFxufVxcbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDJweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyOm5vdCgucWwtY29sb3ItcGlja2VyKTpub3QoLnFsLWljb24tcGlja2VyKSBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogLTlweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMThweDtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIHtcXG4gIHdpZHRoOiA5OHB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogJ05vcm1hbCc7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cXFwiMVxcXCJdOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjFcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDEnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XFxcIjJcXFwiXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCIyXFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnSGVhZGluZyAyJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVxcXCIzXFxcIl06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiM1xcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0hlYWRpbmcgMyc7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cXFwiNFxcXCJdOjpiZWZvcmUsXFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjRcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDQnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XFxcIjVcXFwiXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCI1XFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnSGVhZGluZyA1JztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVxcXCI2XFxcIl06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiNlxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0hlYWRpbmcgNic7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCIxXFxcIl06OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjJcXFwiXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCIzXFxcIl06OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDEuMTdlbTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XFxcIjRcXFwiXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cXFwiNVxcXCJdOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAwLjgzZW07XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVxcXCI2XFxcIl06OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDAuNjdlbTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IHtcXG4gIHdpZHRoOiAxMDhweDtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xcbiAgY29udGVudDogJ1NhbnMgU2VyaWYnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zZXJpZl06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnU2VyaWYnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bW9ub3NwYWNlXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdNb25vc3BhY2UnO1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XFxufVxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIHtcXG4gIHdpZHRoOiA5OHB4O1xcbn1cXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiAnTm9ybWFsJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c21hbGxdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ1NtYWxsJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSxcXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0xhcmdlJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlLFxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIdWdlJztcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyLnFsLWJhY2tncm91bmQgLnFsLXBpY2tlci1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIucWwtY29sb3IgLnFsLXBpY2tlci1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5xbC10b29sYmFyLnFsLXNub3cge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLWZvcm1hdHMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXItbGFiZWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLXBpY2tlci1vcHRpb25zIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjIpIDAgMnB4IDhweDtcXG59XFxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbn1cXG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1vcHRpb25zIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG59XFxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCxcXG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG59XFxuLnFsLXRvb2xiYXIucWwtc25vdyArIC5xbC1jb250YWluZXIucWwtc25vdyB7XFxuICBib3JkZXItdG9wOiAwcHg7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2RkZDtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJWaXNpdCBVUkw6XFxcIjtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICB3aWR0aDogMTcwcHg7XFxufVxcbi5xbC1zbm93IC5xbC10b29sdGlwIGEucWwtcHJldmlldyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCBhLnFsLWFjdGlvbjo6YWZ0ZXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcXG4gIGNvbnRlbnQ6ICdFZGl0JztcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcCBhLnFsLXJlbW92ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdSZW1vdmUnO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYSB7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBhLnFsLXByZXZpZXcsXFxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBhLnFsLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIGEucWwtYWN0aW9uOjphZnRlciB7XFxuICBib3JkZXItcmlnaHQ6IDBweDtcXG4gIGNvbnRlbnQ6ICdTYXZlJztcXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXBbZGF0YS1tb2RlPWxpbmtdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkVudGVyIGxpbms6XFxcIjtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXBbZGF0YS1tb2RlPWZvcm11bGFdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkVudGVyIGZvcm11bGE6XFxcIjtcXG59XFxuLnFsLXNub3cgLnFsLXRvb2x0aXBbZGF0YS1tb2RlPXZpZGVvXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJFbnRlciB2aWRlbzpcXFwiO1xcbn1cXG4ucWwtc25vdyBhIHtcXG4gIGNvbG9yOiAjMDZjO1xcbn1cXG4ucWwtY29udGFpbmVyLnFsLXNub3cge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuL2xvYWRhYmxlJ1xuXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgdHlwZSBMb2FkZXJDb21wb25lbnQ8UCA9IHt9PiA9IFByb21pc2U8XG4gIFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCB7IGRlZmF1bHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfVxuPlxuXG5leHBvcnQgdHlwZSBMb2FkZXI8UCA9IHt9PiA9ICgoKSA9PiBMb2FkZXJDb21wb25lbnQ8UD4pIHwgTG9hZGVyQ29tcG9uZW50PFA+XG5cbmV4cG9ydCB0eXBlIExvYWRlck1hcCA9IHsgW21kdWxlOiBzdHJpbmddOiAoKSA9PiBMb2FkZXI8YW55PiB9XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyA9IHtcbiAgd2VicGFjaz8oKTogYW55XG4gIG1vZHVsZXM/KCk6IExvYWRlck1hcFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUJhc2VPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgJiB7XG4gIGxvYWRpbmc/OiAoe1xuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBwYXN0RGVsYXksXG4gIH06IHtcbiAgICBlcnJvcj86IEVycm9yIHwgbnVsbFxuICAgIGlzTG9hZGluZz86IGJvb2xlYW5cbiAgICBwYXN0RGVsYXk/OiBib29sZWFuXG4gICAgcmV0cnk/OiAoKSA9PiB2b2lkXG4gICAgdGltZWRPdXQ/OiBib29sZWFuXG4gIH0pID0+IEpTWC5FbGVtZW50IHwgbnVsbFxuICBsb2FkZXI/OiBMb2FkZXI8UD4gfCBMb2FkZXJNYXBcbiAgbG9hZGFibGVHZW5lcmF0ZWQ/OiBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnNcbiAgc3NyPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZU9wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIHJlbmRlcj8obG9hZGVyOiBhbnksIHByb3BzOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVCYXNlT3B0aW9uczxQPiAmIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHRoZSBtb2R1bGVzIG9wdGlvbiBoYXMgYmVlbiBwbGFubmVkIGZvciByZW1vdmFsXG4gICAqL1xuICByZW5kZXI/KHByb3BzOiBQLCBsb2FkZWQ6IGFueSk6IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlRm48UCA9IHt9PiA9IChcbiAgb3B0czogTG9hZGFibGVPcHRpb25zPFA+XG4pID0+IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVDb21wb25lbnQ8UCA9IHt9PiA9IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vU1NSPFAgPSB7fT4oXG4gIExvYWRhYmxlSW5pdGlhbGl6ZXI6IExvYWRhYmxlRm48UD4sXG4gIGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHtcbiAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2tcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzXG5cbiAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKVxuICB9XG5cbiAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nIVxuICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TG9hZGluZyBlcnJvcj17bnVsbH0gaXNMb2FkaW5nIHBhc3REZWxheT17ZmFsc2V9IHRpbWVkT3V0PXtmYWxzZX0gLz5cbiAgKVxufVxuXG4vLyBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fSwgTyBleHRlbmRzIER5bmFtaWNPcHRpb25zPihvcHRpb25zOiBPKTpcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYzxQID0ge30+KFxuICBkeW5hbWljT3B0aW9uczogRHluYW1pY09wdGlvbnM8UD4gfCBMb2FkZXI8UD4sXG4gIG9wdGlvbnM/OiBEeW5hbWljT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIGxldCBsb2FkYWJsZUZuOiBMb2FkYWJsZUZuPFA+ID0gTG9hZGFibGVcbiAgbGV0IGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+ID0ge1xuICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbFxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpID0+IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5keW5hbWljT3B0aW9ucyB9XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5vcHRpb25zIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICEoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxuICApIHtcbiAgICAvLyBzaG93IGRlcHJlY2F0aW9uIHdhcm5pbmcgZm9yIGBtb2R1bGVzYCBrZXkgaW4gZGV2ZWxvcG1lbnRcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdUaGUgbW9kdWxlcyBvcHRpb24gZm9yIG5leHQvZHluYW1pYyBoYXMgYmVlbiBkZXByZWNhdGVkLiBTZWUgaGVyZSBmb3IgbW9yZSBpbmZvIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL25leHQtZHluYW1pYy1tb2R1bGVzJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIGByZW5kZXJgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5yZW5kZXIgPSAobG9hZGVkLCBwcm9wcykgPT5cbiAgICAgICAgZHluYW1pY09wdGlvbnMucmVuZGVyIShwcm9wcywgbG9hZGVkKVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgbW9kdWxlc2Agd2hlbiB1c2luZyBhIG1hcHBpbmcsIGVnOiBgZHluYW1pYyh7IG1vZHVsZXM6ICgpID0+IHtyZXR1cm4ge0hlbGxvV29ybGQ6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0sIHJlbmRlcihwcm9wcywgbG9hZGVkKSB7fSB9IH0pXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgIGxvYWRhYmxlRm4gPSBMb2FkYWJsZS5NYXBcbiAgICAgIGNvbnN0IGxvYWRNb2R1bGVzOiBMb2FkZXJNYXAgPSB7fVxuICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKVxuICAgICAgT2JqZWN0LmtleXMobW9kdWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBtb2R1bGVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZDogYW55KSA9PiBtb2QuZGVmYXVsdCB8fCBtb2QpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9IHZhbHVlXG4gICAgICB9KVxuICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGxvYWRNb2R1bGVzXG4gICAgfVxuICB9XG5cbiAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCxcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICB9XG5cbiAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzclxuICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucylcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucylcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBDYXB0dXJlRm4gPSAobW9kdWxlTmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCBMb2FkYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENhcHR1cmVGbiB8IG51bGw+KG51bGwpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIExvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnXG59XG4iLCIvKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICd1c2Utc3Vic2NyaXB0aW9uJ1xuaW1wb3J0IHsgTG9hZGFibGVDb250ZXh0IH0gZnJvbSAnLi9sb2FkYWJsZS1jb250ZXh0J1xuXG5jb25zdCBBTExfSU5JVElBTElaRVJTID0gW11cbmNvbnN0IFJFQURZX0lOSVRJQUxJWkVSUyA9IFtdXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBsb2FkKGxvYWRlcikge1xuICBsZXQgcHJvbWlzZSA9IGxvYWRlcigpXG5cbiAgbGV0IHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbG9hZGVkOiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgc3RhdGUucHJvbWlzZSA9IHByb21pc2VcbiAgICAudGhlbigobG9hZGVkKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZFxuICAgICAgcmV0dXJuIGxvYWRlZFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIGxvYWRNYXAob2JqKSB7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkZWQ6IHt9LFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgbGV0IHByb21pc2VzID0gW11cblxuICB0cnkge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gbG9hZChvYmpba2V5XSlcblxuICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc3VsdC5sb2FkZWRcbiAgICAgICAgc3RhdGUuZXJyb3IgPSByZXN1bHQuZXJyb3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0LnByb21pc2UpXG5cbiAgICAgIHJlc3VsdC5wcm9taXNlXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gZXJyXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmouZGVmYXVsdCA6IG9ialxufVxuXG5mdW5jdGlvbiByZW5kZXIobG9hZGVkLCBwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChyZXNvbHZlKGxvYWRlZCksIHByb3BzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGxvYWRlcjogbnVsbCxcbiAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICBkZWxheTogMjAwLFxuICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgd2VicGFjazogbnVsbCxcbiAgICAgIG1vZHVsZXM6IG51bGwsXG4gICAgfSxcbiAgICBvcHRpb25zXG4gIClcblxuICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbFxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IHN1YiA9IG5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sIG9wdHMpXG4gICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgIGdldEN1cnJlbnRWYWx1ZTogc3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1YiksXG4gICAgICAgIHN1YnNjcmliZTogc3ViLnN1YnNjcmliZS5iaW5kKHN1YiksXG4gICAgICAgIHJldHJ5OiBzdWIucmV0cnkuYmluZChzdWIpLFxuICAgICAgICBwcm9taXNlOiBzdWIucHJvbWlzZS5iaW5kKHN1YiksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpcHRpb24ucHJvbWlzZSgpXG4gIH1cblxuICAvLyBTZXJ2ZXIgb25seVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBBTExfSU5JVElBTElaRVJTLnB1c2goaW5pdClcbiAgfVxuXG4gIC8vIENsaWVudCBvbmx5XG4gIGlmIChcbiAgICAhaW5pdGlhbGl6ZWQgJiZcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBvcHRzLndlYnBhY2sgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgY29uc3QgbW9kdWxlSWRzID0gb3B0cy53ZWJwYWNrKClcbiAgICBSRUFEWV9JTklUSUFMSVpFUlMucHVzaCgoaWRzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcykge1xuICAgICAgICBpZiAoaWRzLmluZGV4T2YobW9kdWxlSWQpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpbml0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgaW5pdCgpXG5cbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChMb2FkYWJsZUNvbnRleHQpXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShcbiAgICAgIHJlZixcbiAgICAgICgpID0+ICh7XG4gICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICB9KSxcbiAgICAgIFtdXG4gICAgKVxuXG4gICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZywge1xuICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICAgICAgICBwYXN0RGVsYXk6IHN0YXRlLnBhc3REZWxheSxcbiAgICAgICAgICB0aW1lZE91dDogc3RhdGUudGltZWRPdXQsXG4gICAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICByZXR1cm4gb3B0cy5yZW5kZXIoc3RhdGUubG9hZGVkLCBwcm9wcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSwgW3Byb3BzLCBzdGF0ZV0pXG4gIH1cblxuICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCkgPT4gaW5pdCgpXG4gIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50J1xuXG4gIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KVxufVxuXG5jbGFzcyBMb2FkYWJsZVN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cykge1xuICAgIHRoaXMuX2xvYWRGbiA9IGxvYWRGblxuICAgIHRoaXMuX29wdHMgPSBvcHRzXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5fZGVsYXkgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcblxuICAgIHRoaXMucmV0cnkoKVxuICB9XG5cbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzLnByb21pc2VcbiAgfVxuXG4gIHJldHJ5KCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgIHRoaXMuX3JlcyA9IHRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcilcblxuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgIHRpbWVkT3V0OiBmYWxzZSxcbiAgICB9XG5cbiAgICBjb25zdCB7IF9yZXM6IHJlcywgX29wdHM6IG9wdHMgfSA9IHRoaXNcblxuICAgIGlmIChyZXMubG9hZGluZykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob3B0cy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX3N0YXRlLnBhc3REZWxheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgICAgcGFzdERlbGF5OiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCBvcHRzLmRlbGF5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlKHsgdGltZWRPdXQ6IHRydWUgfSlcbiAgICAgICAgfSwgb3B0cy50aW1lb3V0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3Jlcy5wcm9taXNlXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChfZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgfVxuXG4gIF91cGRhdGUocGFydGlhbCkge1xuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgLi4udGhpcy5fc3RhdGUsXG4gICAgICBlcnJvcjogdGhpcy5fcmVzLmVycm9yLFxuICAgICAgbG9hZGVkOiB0aGlzLl9yZXMubG9hZGVkLFxuICAgICAgbG9hZGluZzogdGhpcy5fcmVzLmxvYWRpbmcsXG4gICAgICAuLi5wYXJ0aWFsLFxuICAgIH1cbiAgICB0aGlzLl9jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKCkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0cygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gIH1cblxuICBnZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlXG4gIH1cblxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLCBvcHRzKVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZU1hcChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRhYmxlTWFwIHJlcXVpcmVzIGEgYHJlbmRlcihsb2FkZWQsIHByb3BzKWAgZnVuY3Rpb24nKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRNYXAsIG9wdHMpXG59XG5cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwXG5cbmZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKSB7XG4gIGxldCBwcm9taXNlcyA9IFtdXG5cbiAgd2hpbGUgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKVxuICAgIHByb21pc2VzLnB1c2goaW5pdChpZHMpKVxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKVxuICAgIH1cbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpID0+IHtcbiAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdClcbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByZWxvYWQpID0+IHtcbiAgICBjb25zdCByZXMgPSAoKSA9PiB7XG4gICAgICBpbml0aWFsaXplZCA9IHRydWVcbiAgICAgIHJldHVybiByZXNvbHZlUHJlbG9hZCgpXG4gICAgfVxuICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLCBpZHMpLnRoZW4ocmVzLCByZXMpXG4gIH0pXG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWSA9IExvYWRhYmxlLnByZWxvYWRSZWFkeVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkYWJsZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMnKVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL3F1aWxsLnNub3cuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9xdWlsbC5zbm93LmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vcXVpbGwuc25vdy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENyZWF0ZUJsb2cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0bWFyZ2luOiAnYXV0bycsXHJcblx0XHRtYXhXaWR0aDogMzUwLFxyXG5cdFx0YmFja2dyb3VuZDogJ3doaXRlJyxcclxuXHR9LFxyXG5cdHJvdzoge1xyXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHR0b3A6ICc1MCUnLFxyXG5cdFx0bGVmdDogJzUwJScsXHJcblx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG5cdH0sXHJcblx0dGl0bGU6IHtcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG5cdFx0Zm9udFNpemU6IDE5LFxyXG5cdFx0Y29sb3I6ICcjMWIwOTc1JyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWluV2lkdGg6IDE2NSxcclxuXHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRoZWlnaHQ6ICc1MHB4JyxcclxuXHRcdGxldHRlclNwYWNpbmc6ICcwLjVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnNTBweCcsXHJcblx0XHRwYWRkaW5nOiAnMCAzNXB4IDAgMzVweCcsXHJcblx0XHRmb250U2l6ZTogJzE1cHgnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzMzNGFhNicsXHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0Zm9udFdlaWdodDogJ2JvbGRlcicsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZScsXHJcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTI1ZWQ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlUYWcgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5DcmVhdGUgYSBOZXcgQmxvZzwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHRcdFx0PENyZWF0ZUJsb2cgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0FkbWluPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5VGFnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9