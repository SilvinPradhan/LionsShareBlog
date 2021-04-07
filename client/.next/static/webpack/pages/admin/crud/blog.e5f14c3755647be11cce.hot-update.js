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
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\CreateBlog.js",
    _this = undefined,
    _s = $RefreshSig$();










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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      body = _useState[0],
      setBody = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    console.log('published');
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
    };
  };

  var handleBody = function handleBody(e) {
    console.log(e);
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
          lineNumber: 39,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
          lineNumber: 43,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: createBlogForm()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, _this);
};

_s(CreateBlog, "ua4vpFSWokiAkNwlpN3+QZ5I+7U=");

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
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(CreateBlog));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NyZWF0ZUJsb2cuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJDcmVhdGVCbG9nIiwicm91dGVyIiwidXNlU3RhdGUiLCJib2R5Iiwic2V0Qm9keSIsImVycm9yIiwic2l6ZUVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwidGl0bGUiLCJoaWRlUHVibGlzaEJ1dHRvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsInB1Ymxpc2hCbG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlQm9keSIsImNyZWF0ZUJsb2dGb3JtIiwibW9kdWxlcyIsImZvcm1hdHMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsInNpemUiLCJsaXN0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTFCO01BQU1GLFU7QUFDTjs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxFQUFELENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBQUEsbUJBRU5GLHNEQUFRLENBQUM7QUFDcENHLFNBQUssRUFBRSxF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QUFFQSxVQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWO0FBQVYsR0FBbkMsRUFBNkQ7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBN0QsQ0FEUSxFQUVSLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUZRLEVBR1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixXQUFuQixFQUFnQyxRQUFoQyxFQUEwQyxZQUExQyxDQUhRLEVBSVIsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELEVBQXNCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQXRCLENBSlEsRUFLUixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBTFEsRUFNUixDQUFDLE9BQUQsQ0FOUSxFQU9SLENBQUMsWUFBRCxDQVBRO0FBRFcsQ0FBckI7QUFZQS9CLFVBQVUsQ0FBQzBCLE9BQVgsR0FBcUIsQ0FDcEIsUUFEb0IsRUFFcEIsTUFGb0IsRUFHcEIsTUFIb0IsRUFJcEIsTUFKb0IsRUFLcEIsUUFMb0IsRUFNcEIsV0FOb0IsRUFPcEIsUUFQb0IsRUFRcEIsWUFSb0IsRUFTcEIsTUFUb0IsRUFVcEIsUUFWb0IsRUFXcEIsTUFYb0IsRUFZcEIsT0Fab0IsRUFhcEIsT0Fib0IsRUFjcEIsWUFkb0IsQ0FBckI7QUFpQmUscUVBQUFNLDhEQUFVLENBQUNoQyxVQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy5lNWYxNGMzNzU1NjQ3YmUxMWNjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzQXV0aGVudGljYXRlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgZ2V0VGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdGFnJztcclxuaW1wb3J0IHsgY3JlYXRlQmxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuXHJcbmNvbnN0IENyZWF0ZUJsb2cgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKHt9KTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c2l6ZUVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0aGlkZVB1Ymxpc2hCdXR0b246IGZhbHNlLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgZXJyb3IsIHNpemVFcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlLCBoaWRlUHVibGlzaEJ1dHRvbiB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBwdWJsaXNoQmxvZyA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZygncHVibGlzaGVkJyk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVCb2R5ID0gKGUpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdH07XHJcblx0Y29uc3QgY3JlYXRlQmxvZ0Zvcm0gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17cHVibGlzaEJsb2d9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4gVGl0bGUgPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxSZWFjdFF1aWxsXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e0NyZWF0ZUJsb2cubW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17Q3JlYXRlQmxvZy5mb3JtYXRzfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17Ym9keX1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXcml0ZSBzb21ldGhpbmcgY29vbCBhbmQgYW1hemluZyBmb3IgdGhlIHdvcmxkIHRvIGtub3cuXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUJvZHl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0UHVibGlzaFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdCk7XHJcblx0fTtcclxuXHRyZXR1cm4gPGRpdj57Y3JlYXRlQmxvZ0Zvcm0oKX08L2Rpdj47XHJcbn07XHJcblxyXG5DcmVhdGVCbG9nLm1vZHVsZXMgPSB7XHJcblx0dG9vbGJhcjogW1xyXG5cdFx0W3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGhlYWRlcjogWzMsIDQsIDUsIDZdIH0sIHsgZm9udDogW10gfV0sXHJcblx0XHRbeyBzaXplOiBbXSB9XSxcclxuXHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcblx0XHRbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9XSxcclxuXHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG5cdFx0WydjbGVhbiddLFxyXG5cdFx0Wydjb2RlLWJsb2NrJ10sXHJcblx0XSxcclxufTtcclxuXHJcbkNyZWF0ZUJsb2cuZm9ybWF0cyA9IFtcclxuXHQnaGVhZGVyJyxcclxuXHQnZm9udCcsXHJcblx0J3NpemUnLFxyXG5cdCdib2xkJyxcclxuXHQnaXRhbGljJyxcclxuXHQndW5kZXJsaW5lJyxcclxuXHQnc3RyaWtlJyxcclxuXHQnYmxvY2txdW90ZScsXHJcblx0J2xpc3QnLFxyXG5cdCdidWxsZXQnLFxyXG5cdCdsaW5rJyxcclxuXHQnaW1hZ2UnLFxyXG5cdCd2aWRlbycsXHJcblx0J2NvZGUtYmxvY2snLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDcmVhdGVCbG9nKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==