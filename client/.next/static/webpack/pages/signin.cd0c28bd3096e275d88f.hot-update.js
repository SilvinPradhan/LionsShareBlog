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
        align: 'center',
        fontStyle: 'normal'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25Jbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNpZ25JbkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWFkaW5nIiwiY29sb3IiLCJwcmltYXJ5IiwiYWxpZ24iLCJmb250U3R5bGUiLCJhdmF0YXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwidXNlRWZmZWN0IiwiaXNBdXRoZW50aWNhdGVkIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwiZGF0YSIsInRvYXN0IiwiYXV0aGVudGljYXRlIiwicm9sZSIsInN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJpc0VuYWJsZWQiLCJsZW5ndGgiLCJzaWduaW5Gb3JtIiwiY2xhc3NlcyIsInN0eWxlcyIsImN1c3RvbV9idXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsU0FBUyxHQUFHQyxxRUFBVSxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUE2QkgsR0EvQkQ7O0FBbEYwQixLQWtGcEJFLFVBbEZvQjtBQUFBLFlBbUZOdEQsU0FuRk07QUFBQTs7QUFrSDFCLHNCQUNJO0FBQUEsZUFDS2tELFNBQVMsRUFEZCxFQUVLRCxXQUFXLEVBRmhCLEVBR0tFLFdBQVcsRUFIaEIsRUFJTXhCLFFBQVEsSUFBSTJCLFVBQVUsRUFKNUI7QUFBQSxrQkFESjtBQVFILENBMUhEOztJQUFNdkQsZTs7S0FBQUEsZTtBQTRIU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLmNkMGMyOGJkMzA5NmUyNzVkODhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpZ25pbiwgYXV0aGVudGljYXRlLCBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQ29tcG9uZW50Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEF2YXRhciwgQ29udGFpbmVyLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJ1xyXG5cclxuY29uc3QgU2lnbkluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge30sXHJcbiAgICAgICAgaGVhZGluZzoge1xyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdmF0YXI6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmI0MWJkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMiksXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXQ6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjY0NjUzJyxcclxuICAgICAgICB9LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICdzaWx2aW5wcmFkaGFuOTVAZ21haWwuY29tJyxcclxuICAgICAgICBwYXNzd29yZDogJ0ludm9rZXIyMDA2OTVAQCcsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHNob3dGb3JtOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIERlc3RydWN0dXJlIHRlIHZhbHVlcyBmcm9tIHRoZSBzdGF0ZS5cclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSA9IHZhbHVlcztcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdG9rZW4gYW5kIHVzZXIgZGF0YSBpbiBsb2NhbHN0b3JhZ2UgYXMgd2VsbCBhcyBjb29raWUsIHJlZGlyZWN0IHRoZSBsb2dnZWQgaW4gdXNlciB0byBob21lcGFnZVxyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCgpICYmIFJvdXRlci5wdXNoKCcvJykgLy8gRm9yIHNhZmV0eSBwdXJwb3NlcyBzbyB0aGF0ICcvc2lnbmluJyB3b3VsZCBub3QgcmVkaXJlY3QgdG8gc2lnbiBpbiBwYWdlIGFsdGhvdWdoIHRoZSB1c2VyIGFscmVhZHkgc2lnbmVkXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSlcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9XHJcblxyXG4gICAgICAgIGF3YWl0IHNpZ25pbih1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGAke2RhdGEuZXJyb3J9YClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdXNlciB0b2tlbiB0byBjb29raWVcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdXNlciBpbmZvIHRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLy8gYXV0aGVudGljYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZShkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCgpICYmIGlzQXV0aGVudGljYXRlZCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9hZG1pbmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvdXNlcmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGBZb3UgaGF2ZSBzaWduZWQgaW4gYXMgJHtpc0F1dGhlbnRpY2F0ZWQoKS5uYW1lfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gKGUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+PHNwYW4+IExvYWRpbmcgLi4uPC9zcGFuPjwvZGl2PiA6IFwiXCIpO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ge2Vycm9yfTwvZGl2PiA6IFwiXCIpO1xyXG4gICAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiAobWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPiB7bWVzc2FnZX08L2Rpdj4gOiBcIlwiKTtcclxuXHJcbiAgICAvLyBCdXR0b24gRGlzYWJsZWQgaWYgdGhlIGZpZWxkcyBhcmUgZW1wdHkuLlxyXG4gICAgY29uc3QgaXNFbmFibGVkID0gZW1haWwubGVuZ3RoID4gMCAmJiBwYXNzd29yZC5sZW5ndGggPiAwXHJcblxyXG4gICAgY29uc3Qgc2lnbmluRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgY29tcG9uZW50PVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPlNpZ24gaW50byB5b3VyIGFjY291bnQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiBhdXRvQ2xvc2U9ezgwMDB9IGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9IG5ld2VzdE9uVG9wIGNsb3NlT25DbGljayBydGw9e2ZhbHNlfSBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3VibWl0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICg8aW1nIHNyYz1cIi9zcGlubmVyLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvYWRpbmcuLi5cIiAvPikgOiAoPEN1c3RvbUJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jdXN0b21fYnV0dG9ufSBkaXNhYmxlZD17IWlzRW5hYmxlZH0+TG9naW48L0N1c3RvbUJ1dHRvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyID5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAgICAgICAgeyBzaG93Rm9ybSAmJiBzaWduaW5Gb3JtKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==