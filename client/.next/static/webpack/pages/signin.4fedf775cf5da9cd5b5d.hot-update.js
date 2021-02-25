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
                  react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("You are logged in!");
                  next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
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
        lineNumber: 43,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: [" ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: [" ", message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 42
    }, _this) : "";
  };

  var signinForm = function signinForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: email,
          onChange: handleChange('email'),
          type: "email",
          className: "form-control",
          placeholder: "Type your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: password,
          onChange: handleChange('password'),
          type: "password",
          className: "form-control",
          placeholder: "Type your password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
          lineNumber: 61,
          columnNumber: 33
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 110
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/router.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaG93Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwiZGF0YSIsInRvYXN0Iiwic3VjY2VzcyIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLDJCQUQwQjtBQUVqQ0MsWUFBUSxFQUFFLGlCQUZ1QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxFQUx3QjtBQU1qQ0MsWUFBUSxFQUFFO0FBTnVCLEdBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFcsaUJBVTFCOzs7QUFWMEIsTUFXbEJQLEtBWGtCLEdBV3FDTSxNQVhyQyxDQVdsQk4sS0FYa0I7QUFBQSxNQVdYQyxRQVhXLEdBV3FDSyxNQVhyQyxDQVdYTCxRQVhXO0FBQUEsTUFXREMsS0FYQyxHQVdxQ0ksTUFYckMsQ0FXREosS0FYQztBQUFBLE1BV01DLE9BWE4sR0FXcUNHLE1BWHJDLENBV01ILE9BWE47QUFBQSxN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a0JBREo7QUFTSCxDQXBFRDs7R0FBTTVCLGU7O0tBQUFBLGU7QUFzRVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi40ZmVkZjc3NWNmNWRhOWNkNWI1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2lnbmluIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU2lnbkluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJ3NpbHZpbnByYWRoYW45NUBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnSW52b2tlcjIwMDY5NUBAJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgc2hvd0Zvcm06IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gRGVzdHJ1Y3R1cmUgdGUgdmFsdWVzIGZyb20gdGhlIHN0YXRlLlxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9ID0gdmFsdWVzXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSlcclxuICAgICAgICBjb25zdCB1c2VyID0geyBlbWFpbCwgcGFzc3dvcmQgfVxyXG5cclxuICAgICAgICBhd2FpdCBzaWduaW4odXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtkYXRhLmVycm9yfWApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHVzZXIgaW5mbyB0byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJZb3UgYXJlIGxvZ2dlZCBpbiFcIik7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gKGUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+PHNwYW4+IExvYWRpbmcgLi4uPC9zcGFuPjwvZGl2PiA6IFwiXCIpO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ge2Vycm9yfTwvZGl2PiA6IFwiXCIpO1xyXG4gICAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiAobWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPiB7bWVzc2FnZX08L2Rpdj4gOiBcIlwiKTtcclxuXHJcbiAgICBjb25zdCBzaWduaW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgYXV0b0Nsb3NlPXs1MDAwfSBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfSBuZXdlc3RPblRvcCBjbG9zZU9uQ2xpY2sgcnRsPXtmYWxzZX0gcGF1c2VPbkZvY3VzTG9zcyBkcmFnZ2FibGUgcGF1c2VPbkhvdmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX0gdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFN1Ym1pdCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICg8aW1nIHNyYz1cIi9zcGlubmVyLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvYWRpbmcuLi5cIiAvPikgOiAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2dpbjwvYnV0dG9uPil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcblxyXG4gICAgICAgICAgICB7IHNob3dGb3JtICYmIHNpZ25pbkZvcm0oKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluQ29tcG9uZW50XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=