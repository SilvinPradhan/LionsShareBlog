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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\CreateBlog.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      body = _useState[0],
      setBody = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
  }, [router]);

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    console.log('published');
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    // console.log(e);
    setBody(e);
    formData.set('body', e);
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
          lineNumber: 46,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
          lineNumber: 50,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: createBlogForm()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(CreateBlog, "yleKZHXsJkMB5VzMpeZ6YEHsQrU=");

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
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(CreateBlog));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwidXNlU3RhdGUiLCJib2R5Iiwic2V0Qm9keSIsImVycm9yIiwic2l6ZUVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwidGl0bGUiLCJoaWRlUHVibGlzaEJ1dHRvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwicHVibGlzaEJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJzZXQiLCJoYW5kbGVCb2R5IiwiY3JlYXRlQmxvZ0Zvcm0iLCJtb2R1bGVzIiwiZm9ybWF0cyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250Iiwic2l6ZSIsImxpc3QiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOOztBQUVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEVBQUQsQ0FERTtBQUFBLE1BQzNCQyxJQUQyQjtBQUFBLE1BQ3JCQyxPQURxQjs7QUFBQSxt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Y3BCLFlBZG9CLENBQXJCO0FBaUJlLHFFQUFBTSw4REFBVSxDQUFDbkMsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuYWZlNmJjYTBiYzVkZjkyMmVhYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IGdldFRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RhZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBDcmVhdGVCbG9nID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSh7fSk7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHNpemVFcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGZvcm1EYXRhOiAnJyxcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdGhpZGVQdWJsaXNoQnV0dG9uOiBmYWxzZSxcclxuXHR9KTtcclxuXHRjb25zdCB7IGVycm9yLCBzaXplRXJyb3IsIHN1Y2Nlc3MsIGZvcm1EYXRhLCB0aXRsZSwgaGlkZVB1Ymxpc2hCdXR0b24gfSA9IHZhbHVlcztcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcblx0fSwgW3JvdXRlcl0pO1xyXG5cclxuXHRjb25zdCBwdWJsaXNoQmxvZyA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZygncHVibGlzaGVkJyk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcblx0XHRmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQm9keSA9IChlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhlKTtcclxuXHRcdHNldEJvZHkoZSk7XHJcblx0XHRmb3JtRGF0YS5zZXQoJ2JvZHknLCBlKTtcclxuXHR9O1xyXG5cdGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e3B1Ymxpc2hCbG9nfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IFRpdGxlIDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8UmVhY3RRdWlsbFxyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtDcmVhdGVCbG9nLm1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e0NyZWF0ZUJsb2cuZm9ybWF0c31cclxuXHRcdFx0XHRcdFx0dmFsdWU9e2JvZHl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV3JpdGUgc29tZXRoaW5nIGNvb2wgYW5kIGFtYXppbmcgZm9yIHRoZSB3b3JsZCB0byBrbm93LlwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFB1Ymxpc2hcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQpO1xyXG5cdH07XHJcblx0cmV0dXJuIDxkaXY+e2NyZWF0ZUJsb2dGb3JtKCl9PC9kaXY+O1xyXG59O1xyXG5cclxuQ3JlYXRlQmxvZy5tb2R1bGVzID0ge1xyXG5cdHRvb2xiYXI6IFtcclxuXHRcdFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBoZWFkZXI6IFszLCA0LCA1LCA2XSB9LCB7IGZvbnQ6IFtdIH1dLFxyXG5cdFx0W3sgc2l6ZTogW10gfV0sXHJcblx0XHRbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxyXG5cdFx0W3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfV0sXHJcblx0XHRbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuXHRcdFsnY2xlYW4nXSxcclxuXHRcdFsnY29kZS1ibG9jayddLFxyXG5cdF0sXHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLmZvcm1hdHMgPSBbXHJcblx0J2hlYWRlcicsXHJcblx0J2ZvbnQnLFxyXG5cdCdzaXplJyxcclxuXHQnYm9sZCcsXHJcblx0J2l0YWxpYycsXHJcblx0J3VuZGVybGluZScsXHJcblx0J3N0cmlrZScsXHJcblx0J2Jsb2NrcXVvdGUnLFxyXG5cdCdsaXN0JyxcclxuXHQnYnVsbGV0JyxcclxuXHQnbGluaycsXHJcblx0J2ltYWdlJyxcclxuXHQndmlkZW8nLFxyXG5cdCdjb2RlLWJsb2NrJyxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ3JlYXRlQmxvZyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=