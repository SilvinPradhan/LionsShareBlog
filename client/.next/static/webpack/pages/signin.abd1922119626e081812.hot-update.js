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
                  react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("You are logged in!", {
                    pauseOnFocusLoss: false
                  });
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
        lineNumber: 46,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: [" ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: [" ", message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 42
    }, _this) : "";
  };

  var signinForm = function signinForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: email,
          onChange: handleChange('email'),
          type: "email",
          className: "form-control",
          placeholder: "Type your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: password,
          onChange: handleChange('password'),
          type: "password",
          className: "form-control",
          placeholder: "Type your password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
          lineNumber: 64,
          columnNumber: 33
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 110
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm()]
  }, void 0, true);
};

_s(SignInComponent, "9kZrJb0nrq7tfU2I7sYpFwOOECc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaG93Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwiZGF0YSIsInRvYXN0IiwiYXV0aGVudGljYXRlIiwiUm91dGVyIiwicHVzaCIsInN1Y2Nlc3MiLCJwYXVzZU9uRm9jdXNMb3NzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwic2hvd0xvYWRpbmciLCJzaG93RXJyb3IiLCJzaG93TWVzc2FnZSIsInNpZ25pbkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSwyQkFEMEI7QUFFakNDLFlBQVEsRUFBRSxpQkFGdUI7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsV0FBTyxFQUFFLEtBSndCO0FBS2pDQyxXQUFPLEVBQUUsRUFMd0I7QUFNakNDLFlBQVEsRUFBRTtBQU51QixHQUFELENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXLGlCQVUxQjs7O0FBVjBCLE1BV2xCUCxLQVhrQixHQVdxQ00sTUFYckMsQ0FXbEJOLEtBWGtCO0FBQUEsTUFXWEMsUUFYVyxHQVdxQ0ssTUFYckMsQ0FXWEwsUUFYVztBQUFBLE1BV0RDLEtBWEMsR0FXcUNJLE1BWHJDLENBV0RKLEtBWEM7QUFBQSxNQVdNQyxP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QUFBQSxhQURKO0FBaUJILEdBbEJEOztBQW1CQSxzQkFDSTtBQUFBLGVBQ0t1QixTQUFTLEVBRGQsRUFFS0QsV0FBVyxFQUZoQixFQUdLRSxXQUFXLEVBSGhCLEVBS010QixRQUFRLElBQUl1QixVQUFVLEVBTDVCO0FBQUEsa0JBREo7QUFTSCxDQXZFRDs7R0FBTTlCLGU7O0tBQUFBLGU7QUF5RVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5hYmQxOTIyMTE5NjI2ZTA4MTgxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2lnbmluLCBhdXRoZW50aWNhdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTaWduSW5Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnc2lsdmlucHJhZGhhbjk1QGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdJbnZva2VyMjAwNjk1QEAnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBzaG93Rm9ybTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBEZXN0cnVjdHVyZSB0ZSB2YWx1ZXMgZnJvbSB0aGUgc3RhdGUuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXNcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSlcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9XHJcblxyXG4gICAgICAgIGF3YWl0IHNpZ25pbih1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGAke2RhdGEuZXJyb3J9YClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdXNlciB0b2tlbiB0byBjb29raWVcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdXNlciBpbmZvIHRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLy8gYXV0aGVudGljYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZShkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJZb3UgYXJlIGxvZ2dlZCBpbiFcIiwgeyBwYXVzZU9uRm9jdXNMb3NzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj48c3Bhbj4gTG9hZGluZyAuLi48L3NwYW4+PC9kaXY+IDogXCJcIik7XHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiB7ZXJyb3J9PC9kaXY+IDogXCJcIik7XHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IChtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+IHttZXNzYWdlfTwvZGl2PiA6IFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiBhdXRvQ2xvc2U9ezYwMDB9IGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9IG5ld2VzdE9uVG9wIGNsb3NlT25DbGljayBydGw9e2ZhbHNlfSBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKDxpbWcgc3JjPVwiL3NwaW5uZXIucG5nXCIgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgYWx0PVwiTG9hZGluZy4uLlwiIC8+KSA6ICg8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxvZ2luPC9idXR0b24+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuXHJcbiAgICAgICAgICAgIHsgc2hvd0Zvcm0gJiYgc2lnbmluRm9ybSgpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Db21wb25lbnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==