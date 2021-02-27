webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/auth/SignIn.component.jsx":
/*!**********************************************!*\
  !*** ./components/auth/SignIn.component.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\auth\\SignIn.component.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SignInComponent = function SignInComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: 'silvinpradhan95@gmail.com',
    password: 'Invoker200695@@',
    error: '',
    loading: false,
    message: '',
    showForm: true
  }),
      values = _useState[0],
      setValues = _useState[1]; // Destructure te values from the state.


  var email = values.email,
      password = values.password,
      error = values.error,
      loading = values.loading,
      message = values.message,
      showForm = values.showForm;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Check if there is a token and user data in localstorage as well as cookie, redirect the logged in user to homepage
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuthenticated"])() && next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/'); // For safety purposes so that '/signin' would not redirect to sign in page although the user already signed in.
  }, []);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // console.table({ name, email, password, error, loading, message, showForm })

              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true,
                error: false
              }));
              user = {
                email: email,
                password: password
              };
              _context.next = 5;
              return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["signin"])(user).then(function (data) {
                if (data.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: data.error,
                    loading: false
                  }));
                  react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error("".concat(data.error));
                } else {
                  // Save user token to cookie
                  // save user info to localStorage
                  // authenticate user
                  Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["authenticate"])(data, function () {
                    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
                  });
                  react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].info("You have signed in as ".concat(data.name));
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(name) {
    return function (e) {
      setValues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: " Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: [" ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: [" ", message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 42
    }, _this) : "";
  };

  var signinForm = function signinForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: email,
          onChange: handleChange('email'),
          type: "email",
          className: "form-control",
          placeholder: "Type your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: password,
          onChange: handleChange('password'),
          type: "password",
          className: "form-control",
          placeholder: "Type your password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group col text-center",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/spinner.png",
          width: "100px",
          height: "100px",
          alt: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 33
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 110
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm()]
  }, void 0, true);
};

_s(SignInComponent, "4o6dqrf5yj8xe93N4fxqX3DUtjM=");

_c = SignInComponent;
/* harmony default export */ __webpack_exports__["default"] = (SignInComponent);

var _c;

$RefreshReg$(_c, "SignInComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaG93Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsImlzQXV0aGVudGljYXRlZCIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwic2lnbmluIiwidGhlbiIsImRhdGEiLCJ0b2FzdCIsImF1dGhlbnRpY2F0ZSIsImluZm8iLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLDJCQUQwQjtBQUVqQ0MsWUFBUSxFQUFFLGlCQUZ1QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxFQUx3QjtBQU1qQ0MsWUFBUSxFQUFFO0FBTnVCLEdBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFcsaUJBVTFCOzs7QUFWMEIsTUFXbEJQLEtBWGtCLEdBV3FDTSxNQVhyQyxDQVdsQk4sS0FYa0I7QUFBQSxNQVdYQyxRQVhXLEdBV3FDSyxNQVhyQyxDQVdYTCxRQVhXO0FBQUEsTUFXREMsS0FYQyxHQVdxQ0ksTUFYckMsQ0FXREosS0FYQztBQUFB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QWlGO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBaUJILEdBbEJEOztBQW1CQSxzQkFDSTtBQUFBLGVBQ0t3QixTQUFTLEVBRGQsRUFFS0QsV0FBVyxFQUZoQixFQUdLRSxXQUFXLEVBSGhCLEVBSU12QixRQUFRLElBQUl3QixVQUFVLEVBSjVCO0FBQUEsa0JBREo7QUFRSCxDQTNFRDs7R0FBTS9CLGU7O0tBQUFBLGU7QUE2RVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi45ODNkOTcwNmIwNTVhMjE1MjUxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaWduaW4sIGF1dGhlbnRpY2F0ZSwgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU2lnbkluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJ3NpbHZpbnByYWRoYW45NUBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnSW52b2tlcjIwMDY5NUBAJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgc2hvd0Zvcm06IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gRGVzdHJ1Y3R1cmUgdGUgdmFsdWVzIGZyb20gdGhlIHN0YXRlLlxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9ID0gdmFsdWVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0b2tlbiBhbmQgdXNlciBkYXRhIGluIGxvY2Fsc3RvcmFnZSBhcyB3ZWxsIGFzIGNvb2tpZSwgcmVkaXJlY3QgdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIGhvbWVwYWdlXHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkKCkgJiYgUm91dGVyLnB1c2goJy8nKSAvLyBGb3Igc2FmZXR5IHB1cnBvc2VzIHNvIHRoYXQgJy9zaWduaW4nIHdvdWxkIG5vdCByZWRpcmVjdCB0byBzaWduIGluIHBhZ2UgYWx0aG91Z2ggdGhlIHVzZXIgYWxyZWFkeSBzaWduZWQgaW4uXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSlcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9XHJcblxyXG4gICAgICAgIGF3YWl0IHNpZ25pbih1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGAke2RhdGEuZXJyb3J9YClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdXNlciB0b2tlbiB0byBjb29raWVcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdXNlciBpbmZvIHRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLy8gYXV0aGVudGljYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZShkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LmluZm8oYFlvdSBoYXZlIHNpZ25lZCBpbiBhcyAke2RhdGEubmFtZX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAobG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPjxzcGFuPiBMb2FkaW5nIC4uLjwvc3Bhbj48L2Rpdj4gOiBcIlwiKTtcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+IHtlcnJvcn08L2Rpdj4gOiBcIlwiKTtcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gKG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj4ge21lc3NhZ2V9PC9kaXY+IDogXCJcIik7XHJcblxyXG4gICAgY29uc3Qgc2lnbmluRm9ybSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIGF1dG9DbG9zZT17ODAwMH0gaGlkZVByb2dyZXNzQmFyPXtmYWxzZX0gbmV3ZXN0T25Ub3AgY2xvc2VPbkNsaWNrIHJ0bD17ZmFsc2V9IHBhdXNlT25Gb2N1c0xvc3MgZHJhZ2dhYmxlIHBhdXNlT25Ib3ZlciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTdWJtaXQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoPGltZyBzcmM9XCIvc3Bpbm5lci5wbmdcIiB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiBhbHQ9XCJMb2FkaW5nLi4uXCIgLz4pIDogKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TG9naW48L2J1dHRvbj4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICAgICAgICB7IHNob3dGb3JtICYmIHNpZ25pbkZvcm0oKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluQ29tcG9uZW50XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=