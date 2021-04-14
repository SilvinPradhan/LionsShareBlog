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
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _Component_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Component.module.css */ "./components/Component.module.css");
/* harmony import */ var _Component_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Component_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12__);






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


  var name = values.name,
      email = values.email,
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
                name: name,
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
                    if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuthenticated"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuthenticated"])().role === 1) {
                      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/admin");
                    } else {
                      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/user");
                    }
                  });
                  react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("You have signed in as ".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuthenticated"])().name));
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
        lineNumber: 59,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: [" ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: [" ", message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 42
    }, _this) : "";
  }; // Button Disabled if the fields are empty..


  var isEnabled = email.length > 0 && password.length > 0;

  var signinForm = function signinForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
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
          lineNumber: 69,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: email,
            onChange: handleChange('email'),
            type: "email",
            className: "form-control",
            placeholder: "Type your email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: password,
            onChange: handleChange('password'),
            type: "password",
            className: "form-control",
            placeholder: "Type your password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
            lineNumber: 80,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: _Component_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.custom_button,
            disabled: !isEnabled,
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 110
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        component: "main",
        maxWidth: "xs",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Avatar"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12__["LockOutlinedIcon"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, _this), " Sign into your account"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            action: "dashboard.html" // className={classes.form}
            ,
            onSubmit: function (_onSubmit) {
              function onSubmit(_x2) {
                return _onSubmit.apply(this, arguments);
              }

              onSubmit.toString = function () {
                return _onSubmit.toString();
              };

              return onSubmit;
            }(function (e) {
              return onSubmit(e);
            }),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
              variant: "outlined",
              margin: "normal",
              label: "email",
              fullWidth: true,
              autoFocus: true,
              name: "email",
              value: email // onChange={(e) => {
              // 	change(e);
              // }}

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
              variant: "outlined",
              margin: "normal",
              label: "password",
              fullWidth: true,
              autoFocus: true,
              type: "password",
              placeholder: "Password",
              name: "password",
              value: password // onChange={(e) => {
              // 	change(e);
              // }}

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              color: "primary" // className={classes.submit}
              ,
              children: "Log In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
            className: classes.heading,
            children: ["Don't have an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
              to: "/register",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 52
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
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

/***/ }),

/***/ "./node_modules/@material-ui/icons/LockOutlined.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/LockOutlined.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}), 'LockOutlined');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZC5qcyJdLCJuYW1lcyI6WyJTaWduSW5Db21wb25lbnQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwidXNlRWZmZWN0IiwiaXNBdXRoZW50aWNhdGVkIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwiZGF0YSIsInRvYXN0IiwiYXV0aGVudGljYXRlIiwicm9sZSIsInN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJpc0VuYWJsZWQiLCJsZW5ndGgiLCJzaWduaW5Gb3JtIiwic3R5bGVzIiwiY3VzdG9tX2J1dHRvbiIsIm9uU3VibWl0IiwiY2xhc3NlcyIsImhlYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLDJCQUQwQjtBQUVqQ0MsWUFBUSxFQUFFLGlCQUZ1QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxFQUx3QjtBQU1qQ0MsWUFBUSxFQUFFO0FBTnVCLEdB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBLG9CQURKO0FBMkVILEdBNUVEOztBQTZFQSxzQkFDSTtBQUFBLGVBQ0tULFNBQVMsRUFEZCxFQUVLRCxXQUFXLEVBRmhCLEVBR0tFLFdBQVcsRUFIaEIsRUFJTXhCLFFBQVEsSUFBSTJCLFVBQVUsRUFKNUI7QUFBQSxrQkFESjtBQVFILENBNUlEOztHQUFNbEMsZTs7S0FBQUEsZTtBQThJU0EsOEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRiw4QkFBOEIsbUJBQU8sQ0FBQyxzSEFBK0M7O0FBRXJGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjE3N2I3OWYxM2ZjODE0YTNiMmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpZ25pbiwgYXV0aGVudGljYXRlLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQ29tcG9uZW50Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDb250YWluZXIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgTG9ja091dGxpbmVkSWNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnXHJcblxyXG5jb25zdCBTaWduSW5Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnc2lsdmlucHJhZGhhbjk1QGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdJbnZva2VyMjAwNjk1QEAnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBzaG93Rm9ybTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBEZXN0cnVjdHVyZSB0ZSB2YWx1ZXMgZnJvbSB0aGUgc3RhdGUuXHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRva2VuIGFuZCB1c2VyIGRhdGEgaW4gbG9jYWxzdG9yYWdlIGFzIHdlbGwgYXMgY29va2llLCByZWRpcmVjdCB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gaG9tZXBhZ2VcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKSAmJiBSb3V0ZXIucHVzaCgnLycpIC8vIEZvciBzYWZldHkgcHVycG9zZXMgc28gdGhhdCAnL3NpZ25pbicgd291bGQgbm90IHJlZGlyZWN0IHRvIHNpZ24gaW4gcGFnZSBhbHRob3VnaCB0aGUgdXNlciBhbHJlYWR5IHNpZ25lZFxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSlcclxuICAgICAgICBjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfVxyXG5cclxuICAgICAgICBhd2FpdCBzaWduaW4odXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtkYXRhLmVycm9yfWApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHVzZXIgaW5mbyB0byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQoKSAmJiBpc0F1dGhlbnRpY2F0ZWQoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYWRtaW5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgWW91IGhhdmUgc2lnbmVkIGluIGFzICR7aXNBdXRoZW50aWNhdGVkKCkubmFtZX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAobG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPjxzcGFuPiBMb2FkaW5nIC4uLjwvc3Bhbj48L2Rpdj4gOiBcIlwiKTtcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+IHtlcnJvcn08L2Rpdj4gOiBcIlwiKTtcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gKG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj4ge21lc3NhZ2V9PC9kaXY+IDogXCJcIik7XHJcblxyXG4gICAgLy8gQnV0dG9uIERpc2FibGVkIGlmIHRoZSBmaWVsZHMgYXJlIGVtcHR5Li5cclxuICAgIGNvbnN0IGlzRW5hYmxlZCA9IGVtYWlsLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQubGVuZ3RoID4gMFxyXG5cclxuICAgIGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD48Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIGF1dG9DbG9zZT17ODAwMH0gaGlkZVByb2dyZXNzQmFyPXtmYWxzZX0gbmV3ZXN0T25Ub3AgY2xvc2VPbkNsaWNrIHJ0bD17ZmFsc2V9IHBhdXNlT25Gb2N1c0xvc3MgZHJhZ2dhYmxlIHBhdXNlT25Ib3ZlciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTdWJtaXQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoPGltZyBzcmM9XCIvc3Bpbm5lci5wbmdcIiB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiBhbHQ9XCJMb2FkaW5nLi4uXCIgLz4pIDogKDxDdXN0b21CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tX2J1dHRvbn0gZGlzYWJsZWQ9eyFpc0VuYWJsZWR9PkxvZ2luPC9DdXN0b21CdXR0b24+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCI+PC9pPiBTaWduIGludG8geW91ciBhY2NvdW50XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiZGFzaGJvYXJkLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcdGNoYW5nZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcdGNoYW5nZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIEluXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgIHsgc2hvd0Zvcm0gJiYgc2lnbmluRm9ybSgpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Db21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xOCA4aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6TTkgNmMwLTEuNjYgMS4zNC0zIDMtM3MzIDEuMzQgMyAzdjJIOVY2em05IDE0SDZWMTBoMTJ2MTB6bS02LTNjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyelwiXG59KSwgJ0xvY2tPdXRsaW5lZCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9