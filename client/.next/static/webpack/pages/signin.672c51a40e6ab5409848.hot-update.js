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
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuthenticated"])() && next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/'); // For safety purposes so that '/signin' would not redirect to sign in page although the user already signed
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
                    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaG93Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsImlzQXV0aGVudGljYXRlZCIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwic2lnbmluIiwidGhlbiIsImRhdGEiLCJ0b2FzdCIsImF1dGhlbnRpY2F0ZSIsImluZm8iLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLDJCQUQwQjtBQUVqQ0MsWUFBUSxFQUFFLGlCQUZ1QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxFQUx3QjtBQU1qQ0MsWUFBUSxFQUFFO0FBTnVCLEdBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFcsaUJBVTFCOzs7QUFWMEIsTUFXbEJQLEtBWGtCLEdBV3FDTSxNQVhyQyxDQVdsQk4sS0FYa0I7QUFBQSxNQVdYQyxRQVhXLEdBV3FDSyxNQVhyQyxDQVdYTCxRQVhXO0FBQUEsTUFXREMsS0FYQyxHQVdxQ0ksTUFYckMsQ0FXREosS0FYQztBQUFB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QkFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFpQkgsR0FsQkQ7O0FBbUJBLHNCQUNJO0FBQUEsZUFDS3dCLFNBQVMsRUFEZCxFQUVLRCxXQUFXLEVBRmhCLEVBR0tFLFdBQVcsRUFIaEIsRUFJTXZCLFFBQVEsSUFBSXdCLFVBQVUsRUFKNUI7QUFBQSxrQkFESjtBQVFILENBM0VEOztHQUFNL0IsZTs7S0FBQUEsZTtBQTZFU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjY3MmM1MWE0MGU2YWI1NDA5ODQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpZ25pbiwgYXV0aGVudGljYXRlLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTaWduSW5Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnc2lsdmlucHJhZGhhbjk1QGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdJbnZva2VyMjAwNjk1QEAnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBzaG93Rm9ybTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBEZXN0cnVjdHVyZSB0ZSB2YWx1ZXMgZnJvbSB0aGUgc3RhdGUuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRva2VuIGFuZCB1c2VyIGRhdGEgaW4gbG9jYWxzdG9yYWdlIGFzIHdlbGwgYXMgY29va2llLCByZWRpcmVjdCB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gaG9tZXBhZ2VcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKSAmJiBSb3V0ZXIucHVzaCgnLycpIC8vIEZvciBzYWZldHkgcHVycG9zZXMgc28gdGhhdCAnL3NpZ25pbicgd291bGQgbm90IHJlZGlyZWN0IHRvIHNpZ24gaW4gcGFnZSBhbHRob3VnaCB0aGUgdXNlciBhbHJlYWR5IHNpZ25lZFxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSlcclxuICAgICAgICBjb25zdCB1c2VyID0geyBlbWFpbCwgcGFzc3dvcmQgfVxyXG5cclxuICAgICAgICBhd2FpdCBzaWduaW4odXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtkYXRhLmVycm9yfWApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHVzZXIgaW5mbyB0byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5pbmZvKGBZb3UgaGF2ZSBzaWduZWQgaW4gYXMgJHtkYXRhLm5hbWV9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj48c3Bhbj4gTG9hZGluZyAuLi48L3NwYW4+PC9kaXY+IDogXCJcIik7XHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiB7ZXJyb3J9PC9kaXY+IDogXCJcIik7XHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IChtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+IHttZXNzYWdlfTwvZGl2PiA6IFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiBhdXRvQ2xvc2U9ezgwMDB9IGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9IG5ld2VzdE9uVG9wIGNsb3NlT25DbGljayBydGw9e2ZhbHNlfSBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKDxpbWcgc3JjPVwiL3NwaW5uZXIucG5nXCIgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgYWx0PVwiTG9hZGluZy4uLlwiIC8+KSA6ICg8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxvZ2luPC9idXR0b24+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAgICAgICAgeyBzaG93Rm9ybSAmJiBzaWduaW5Gb3JtKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkNvbXBvbmVudFxyXG4iXSwic291cmNlUm9vdCI6IiJ9