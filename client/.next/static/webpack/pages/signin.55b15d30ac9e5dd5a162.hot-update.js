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
        lineNumber: 85,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: [" ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: [" ", message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
            lineNumber: 98,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
            lineNumber: 101,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
            lineNumber: 104,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Email Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              value: email,
              onChange: handleChange('email'),
              type: "email",
              className: "form-control",
              placeholder: "Type your email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              value: password,
              onChange: handleChange('password'),
              type: "password",
              className: "form-control",
              placeholder: "Type your password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
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
              lineNumber: 115,
              columnNumber: 41
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: _Component_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.custom_button,
              disabled: !isEnabled,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 118
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
          className: classes.heading,
          children: ["Don't have an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
            to: "/register",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 48
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWFkaW5nIiwiY29sb3IiLCJwcmltYXJ5IiwiYWxpZ24iLCJhdmF0YXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwidXNlRWZmZWN0IiwiaXNBdXRoZW50aWNhdGVkIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwiZGF0YSIsInRvYXN0IiwiYXV0aGVudGljYXRlIiwicm9sZSIsInN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJpc0VuYWJsZWQiLCJsZW5ndGgiLCJzaWduaW5Gb3JtIiwiY2xhc3NlcyIsImZvbnRTdHlsZSIsInN0eWxlcyIsImN1c3RvbV9idXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsU0FBUyxHQUFHQyxxRUFBVSxD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QVEsRUFBRSxDQUFDTixTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQXNCSSxxRUFBQyw2REFBRDtBQUFZLG1CQUFTLEVBQUVHLE9BQU8sQ0FBQ2xELE9BQS9CO0FBQUEsNkRBQzJCLHFFQUFDLElBQUQ7QUFBTSxjQUFFLEVBQUMsV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFnQ0gsR0FsQ0Q7O0FBakYwQixLQWlGcEJpRCxVQWpGb0I7QUFBQSxZQWtGTnJELFNBbEZNO0FBQUE7O0FBb0gxQixzQkFDSTtBQUFBLGVBQ0tpRCxTQUFTLEVBRGQsRUFFS0QsV0FBVyxFQUZoQixFQUdLRSxXQUFXLEVBSGhCLEVBSU14QixRQUFRLElBQUkyQixVQUFVLEVBSjVCO0FBQUEsa0JBREo7QUFRSCxDQTVIRDs7SUFBTXRELGU7O0tBQUFBLGU7QUE4SFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi41NWIxNWQzMGFjOWU1ZGQ1YTE2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaWduaW4sIGF1dGhlbnRpY2F0ZSwgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbXBvbmVudC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBBdmF0YXIsIENvbnRhaW5lciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCdcclxuXHJcbmNvbnN0IFNpZ25JbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgICAgIHJvb3Q6IHt9LFxyXG4gICAgICAgIGhlYWRpbmc6IHtcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF2YXRhcjoge1xyXG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyYjQxYmQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEyKSxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1pdDoge1xyXG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyNjQ2NTMnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJ3NpbHZpbnByYWRoYW45NUBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnSW52b2tlcjIwMDY5NUBAJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgc2hvd0Zvcm06IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gRGVzdHJ1Y3R1cmUgdGUgdmFsdWVzIGZyb20gdGhlIHN0YXRlLlxyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9ID0gdmFsdWVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0b2tlbiBhbmQgdXNlciBkYXRhIGluIGxvY2Fsc3RvcmFnZSBhcyB3ZWxsIGFzIGNvb2tpZSwgcmVkaXJlY3QgdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIGhvbWVwYWdlXHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkKCkgJiYgUm91dGVyLnB1c2goJy8nKSAvLyBGb3Igc2FmZXR5IHB1cnBvc2VzIHNvIHRoYXQgJy9zaWduaW4nIHdvdWxkIG5vdCByZWRpcmVjdCB0byBzaWduIGluIHBhZ2UgYWx0aG91Z2ggdGhlIHVzZXIgYWxyZWFkeSBzaWduZWRcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9KVxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH1cclxuXHJcbiAgICAgICAgYXdhaXQgc2lnbmluKHVzZXIpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZGF0YS5lcnJvcn1gKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB1c2VyIHRva2VuIHRvIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB1c2VyIGluZm8gdG8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAvLyBhdXRoZW50aWNhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKCkgJiYgaXNBdXRoZW50aWNhdGVkKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL2FkbWluYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC91c2VyYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYFlvdSBoYXZlIHNpZ25lZCBpbiBhcyAke2lzQXV0aGVudGljYXRlZCgpLm5hbWV9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj48c3Bhbj4gTG9hZGluZyAuLi48L3NwYW4+PC9kaXY+IDogXCJcIik7XHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiB7ZXJyb3J9PC9kaXY+IDogXCJcIik7XHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IChtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+IHttZXNzYWdlfTwvZGl2PiA6IFwiXCIpO1xyXG5cclxuICAgIC8vIEJ1dHRvbiBEaXNhYmxlZCBpZiB0aGUgZmllbGRzIGFyZSBlbXB0eS4uXHJcbiAgICBjb25zdCBpc0VuYWJsZWQgPSBlbWFpbC5sZW5ndGggPiAwICYmIHBhc3N3b3JkLmxlbmd0aCA+IDBcclxuXHJcbiAgICBjb25zdCBzaWduaW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjb21wb25lbnQ9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgc3R5bGU9e3sgZm9udFN0eWxlOiBcIm5vcm1hbFwiIH19PlNpZ24gaW50byB5b3VyIGFjY291bnQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiBhdXRvQ2xvc2U9ezgwMDB9IGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9IG5ld2VzdE9uVG9wIGNsb3NlT25DbGljayBydGw9e2ZhbHNlfSBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICg8aW1nIHNyYz1cIi9zcGlubmVyLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvYWRpbmcuLi5cIiAvPikgOiAoPEN1c3RvbUJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jdXN0b21fYnV0dG9ufSBkaXNhYmxlZD17IWlzRW5hYmxlZH0+TG9naW48L0N1c3RvbUJ1dHRvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lciA+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgIHsgc2hvd0Zvcm0gJiYgc2lnbmluRm9ybSgpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Db21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=