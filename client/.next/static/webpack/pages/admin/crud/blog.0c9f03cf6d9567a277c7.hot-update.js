webpackHotUpdate_N_E("pages/admin/crud/blog",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\CreateBlog.js",
    _this = undefined;










var CreateBlog = function CreateBlog() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: " Hello world"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, _this);
};

_c = CreateBlog;
/* harmony default export */ __webpack_exports__["default"] = (CreateBlog);

var _c;

$RefreshReg$(_c, "CreateBlog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy90YWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3J1ZC9DcmVhdGVCbG9nLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsImNhdGVnb3J5IiwidG9rZW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRDYXRlZ29yaWVzIiwic2luZ2xlQ2F0ZWdvcnkiLCJzbHVnIiwicmVtb3ZlQ2F0ZWdvcnkiLCJ0YWciLCJnZXRUYWdzIiwic2luZ2xlVGFnIiwicmVtb3ZlVGFnIiwiQ3JlYXRlQmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQzFDLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLGdCQUFvQjtBQUMvQkMsVUFBTSxFQUFFLE1BRHVCO0FBRS9CQyxXQUFPLEVBQUU7QUFDUkMsWUFBTSxFQUFFLGtCQURBO0FBRVIsc0JBQWdCLGtCQUZSO0FBR1JDLG1CQUFhLG1CQUFZTixLQUFaO0FBSEwsS0FGc0I7QUFPL0JPLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLFFBQWY7QUFQeUIsR0FBcEIsQ0FBTCxDQVNMVyxJQVRLLENBU0EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDQSxHQVhLLFdBWUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7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O0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQU5EOztLQUFNQSxVO0FBUVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy4wYzlmMDNjZjZkOTU2N2EyNzdjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IChjYXRlZ29yeSwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jYXRlZ29yeWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnkpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NhdGVnb3JpZXNgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVDYXRlZ29yeSA9IChzbHVnKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2F0ZWdvcnkvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2F0ZWdvcnkgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jYXRlZ29yeS8ke3NsdWd9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAodGFnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3RhZ2AsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodGFnKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFncyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS90YWdzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlVGFnID0gKHNsdWcpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS90YWcvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFnID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdGFnLyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzQXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgZ2V0VGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdGFnJztcclxuXHJcbmNvbnN0IENyZWF0ZUJsb2cgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMT4gSGVsbG8gd29ybGQ8L2gxPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUJsb2c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=