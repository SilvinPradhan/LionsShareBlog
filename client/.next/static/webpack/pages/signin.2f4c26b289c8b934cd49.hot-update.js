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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\auth\\SignIn.component.jsx",
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var SignInComponent = function SignInComponent() {
  _s2();

  var _s = $RefreshSig$();

  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
    return {
      root: {},
      heading: {
        color: theme.primary,
        align: 'center'
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#2b41bd'
      },
      paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(1)
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#264653'
      }
    };
  });

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
        lineNumber: 86,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: [" ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: [" ", message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 42
    }, _this) : "";
  }; // Button Disabled if the fields are empty..


  var isEnabled = email.length > 0 && password.length > 0;

  var signinForm = function signinForm() {
    _s();

    var classes = useStyles();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Container"], {
      maxWidth: "md",
      component: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.paper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Avatar"], {
          className: classes.avatar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
          className: classes.heading,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-user",
            style: {
              fontStyle: "normal"
            },
            children: "Sign into your account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
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
            lineNumber: 105,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Email Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              value: email,
              onChange: handleChange('email'),
              type: "email",
              className: "form-control",
              placeholder: "Type your email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              value: password,
              onChange: handleChange('password'),
              type: "password",
              className: "form-control",
              placeholder: "Type your password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col text-center",
            children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/spinner.png",
              width: "100px",
              height: "100px",
              alt: "Loading..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 41
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: _Component_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.custom_button,
              disabled: !isEnabled,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 118
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
          className: classes.heading,
          children: ["Don't have an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
            href: "/signup",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 48
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, _this);
  };

  _s(signinForm, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
    return [useStyles];
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm()]
  }, void 0, true);
};

_s2(SignInComponent, "4o6dqrf5yj8xe93N4fxqX3DUtjM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWFkaW5nIiwiY29sb3IiLCJwcmltYXJ5IiwiYWxpZ24iLCJhdmF0YXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwidXNlRWZmZWN0IiwiaXNBdXRoZW50aWNhdGVkIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwiZGF0YSIsInRvYXN0IiwiYXV0aGVudGljYXRlIiwicm9sZSIsInN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJpc0VuYWJsZWQiLCJsZW5ndGgiLCJzaWduaW5Gb3JtIiwiY2xhc3NlcyIsImZvbnRTdHlsZSIsInN0eWxlcyIsImN1c3RvbV9idXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUE7O0FBQzFCLE1BQU1DLFNBQVMsR0FBR0Ms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QStDLHNCQUFRLEVBQUUsQ0FBQ04sU0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFzQkkscUVBQUMsNkRBQUQ7QUFBWSxtQkFBUyxFQUFFRyxPQUFPLENBQUNsRCxPQUEvQjtBQUFBLDZEQUMyQixxRUFBQyxpREFBRDtBQUFNLGdCQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFnQ0gsR0FsQ0Q7O0FBakYwQixLQWlGcEJpRCxVQWpGb0I7QUFBQSxZQWtGTnJELFNBbEZNO0FBQUE7O0FBb0gxQixzQkFDSTtBQUFBLGVBQ0tpRCxTQUFTLEVBRGQsRUFFS0QsV0FBVyxFQUZoQixFQUdLRSxXQUFXLEVBSGhCLEVBSU14QixRQUFRLElBQUkyQixVQUFVLEVBSjVCO0FBQUEsa0JBREo7QUFRSCxDQTVIRDs7SUFBTXRELGU7O0tBQUFBLGU7QUE4SFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4yZjRjMjZiMjg5YzhiOTM0Y2Q0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaWduaW4sIGF1dGhlbnRpY2F0ZSwgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbXBvbmVudC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBBdmF0YXIsIENvbnRhaW5lciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgU2lnbkluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge30sXHJcbiAgICAgICAgaGVhZGluZzoge1xyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXZhdGFyOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJiNDFiZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXBlcjoge1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTIpLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0OiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI2NDY1MycsXHJcbiAgICAgICAgfSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnc2lsdmlucHJhZGhhbjk1QGdtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdJbnZva2VyMjAwNjk1QEAnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBzaG93Rm9ybTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBEZXN0cnVjdHVyZSB0ZSB2YWx1ZXMgZnJvbSB0aGUgc3RhdGUuXHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRva2VuIGFuZCB1c2VyIGRhdGEgaW4gbG9jYWxzdG9yYWdlIGFzIHdlbGwgYXMgY29va2llLCByZWRpcmVjdCB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gaG9tZXBhZ2VcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKSAmJiBSb3V0ZXIucHVzaCgnLycpIC8vIEZvciBzYWZldHkgcHVycG9zZXMgc28gdGhhdCAnL3NpZ25pbicgd291bGQgbm90IHJlZGlyZWN0IHRvIHNpZ24gaW4gcGFnZSBhbHRob3VnaCB0aGUgdXNlciBhbHJlYWR5IHNpZ25lZFxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSlcclxuICAgICAgICBjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfVxyXG5cclxuICAgICAgICBhd2FpdCBzaWduaW4odXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtkYXRhLmVycm9yfWApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHVzZXIgaW5mbyB0byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQoKSAmJiBpc0F1dGhlbnRpY2F0ZWQoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYWRtaW5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgWW91IGhhdmUgc2lnbmVkIGluIGFzICR7aXNBdXRoZW50aWNhdGVkKCkubmFtZX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAobG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPjxzcGFuPiBMb2FkaW5nIC4uLjwvc3Bhbj48L2Rpdj4gOiBcIlwiKTtcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+IHtlcnJvcn08L2Rpdj4gOiBcIlwiKTtcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gKG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj4ge21lc3NhZ2V9PC9kaXY+IDogXCJcIik7XHJcblxyXG4gICAgLy8gQnV0dG9uIERpc2FibGVkIGlmIHRoZSBmaWVsZHMgYXJlIGVtcHR5Li5cclxuICAgIGNvbnN0IGlzRW5hYmxlZCA9IGVtYWlsLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQubGVuZ3RoID4gMFxyXG5cclxuICAgIGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNvbXBvbmVudD1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiBzdHlsZT17eyBmb250U3R5bGU6IFwibm9ybWFsXCIgfX0+U2lnbiBpbnRvIHlvdXIgYWNjb3VudDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIGF1dG9DbG9zZT17ODAwMH0gaGlkZVByb2dyZXNzQmFyPXtmYWxzZX0gbmV3ZXN0T25Ub3AgY2xvc2VPbkNsaWNrIHJ0bD17ZmFsc2V9IHBhdXNlT25Gb2N1c0xvc3MgZHJhZ2dhYmxlIHBhdXNlT25Ib3ZlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWJtaXQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKDxpbWcgc3JjPVwiL3NwaW5uZXIucG5nXCIgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgYWx0PVwiTG9hZGluZy4uLlwiIC8+KSA6ICg8Q3VzdG9tQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbV9idXR0b259IGRpc2FibGVkPXshaXNFbmFibGVkfT5Mb2dpbjwvQ3VzdG9tQnV0dG9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9zaWdudXBcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyID5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAgICAgICAgeyBzaG93Rm9ybSAmJiBzaWduaW5Gb3JtKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==