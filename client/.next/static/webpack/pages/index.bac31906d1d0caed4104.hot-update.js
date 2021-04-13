webpackHotUpdate_N_E("pages/index",{

/***/ "./components/profileFind/ProfileFind.js":
/*!***********************************************!*\
  !*** ./components/profileFind/ProfileFind.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableData */ "./components/profileFind/TableData.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\profileFind\\ProfileFind.js",
    _this = undefined,
    _s = $RefreshSig$();







var ProfileFind = function ProfileFind() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      repo = _useState3[0],
      setRepo = _useState3[1];

  var ChangeHandler = function ChangeHandler(e) {
    setUsername(e.target.value);
  };

  var SubmitHandler = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var profile, profileJSON, repo, repoJSON;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch("https://api.github.com/users/".concat(username));

            case 3:
              profile = _context.sent;
              _context.next = 6;
              return profile.json();

            case 6:
              profileJSON = _context.sent;
              console.log(profileJSON);
              _context.next = 10;
              return fetch(profileJSON.repos_url);

            case 10:
              repo = _context.sent;
              _context.next = 13;
              return repo.json();

            case 13:
              repoJSON = _context.sent;

              // console.log(repoJSON);
              if (profileJSON) {
                setData(profileJSON);
                setRepo(repoJSON);
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function SubmitHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: 10,
      width: '500px',
      "float": 'left'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "searchBar",
      style: {
        marginBottom: 10,
        justifyContent: 'space-around',
        alignItems: 'stretch'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          width: 400
        },
        type: "text",
        value: username,
        onChange: ChangeHandler,
        placeholder: "Search GitHub Users: 'SilvinPradhan'",
        color: "primary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "contained",
        "aria-label": "Search",
        onClick: SubmitHandler,
        type: "submit",
        style: {
          color: 'black',
          fontSize: 15
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: {
            color: 'black'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, _this), " \xA0 Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), !data.name ? '' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "contained",
        style: {
          backgroundColor: 'whitesmoke',
          color: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: data.html_url,
          target: "_blank",
          rel: "noreferrer",
          style: {
            textDecoration: 'none'
          },
          children: "View on GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dataTable",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TableData__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: data,
        repo: repo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, _this);
};

_s(ProfileFind, "GJvtleXNQx5uQQdytUYVZcLnrTo=");

_c = ProfileFind;
/* harmony default export */ __webpack_exports__["default"] = (ProfileFind);

var _c;

$RefreshReg$(_c, "ProfileFind");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlRmluZC9Qcm9maWxlRmluZC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRmluZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicmVwbyIsInNldFJlcG8iLCJDaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJwcm9maWxlIiwianNvbiIsInByb2ZpbGVKU09OIiwiY29uc29sZSIsImxvZyIsInJlcG9zX3VybCIsInJlcG9KU09OIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJmb250U2l6ZSIsIm5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJodG1sX3VybCIsInRleHREZWNvcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVsQkcsUUFGa0I7QUFBQSxNQUVSQyxXQUZROztBQUFBLG1CQUdESixzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR2xCSyxJQUhrQjtBQUFBLE1BR1pDLE9BSFk7O0FBSXpCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCSixlQUFXLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDQSxHQUZEOztBQUlBLE1BQU1DLGFB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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhYzMxOTA2ZDFkMGNhZWQ0MTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XHJcbmltcG9ydCBUYWJsZURhdGEgZnJvbSAnLi9UYWJsZURhdGEnO1xyXG5cclxuY29uc3QgUHJvZmlsZUZpbmQgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cdGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtyZXBvLCBzZXRSZXBvXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuXHRcdHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBwcm9maWxlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX1gKTtcclxuXHRcdGNvbnN0IHByb2ZpbGVKU09OID0gYXdhaXQgcHJvZmlsZS5qc29uKCk7XHJcblx0XHRjb25zb2xlLmxvZyhwcm9maWxlSlNPTik7XHJcblx0XHRjb25zdCByZXBvID0gYXdhaXQgZmV0Y2gocHJvZmlsZUpTT04ucmVwb3NfdXJsKTtcclxuXHRcdGNvbnN0IHJlcG9KU09OID0gYXdhaXQgcmVwby5qc29uKCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhyZXBvSlNPTik7XHJcblx0XHRpZiAocHJvZmlsZUpTT04pIHtcclxuXHRcdFx0c2V0RGF0YShwcm9maWxlSlNPTik7XHJcblx0XHRcdHNldFJlcG8ocmVwb0pTT04pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEwLCB3aWR0aDogJzUwMHB4JywgZmxvYXQ6ICdsZWZ0JyB9fT5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cInNlYXJjaEJhclwiXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogMTAsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IDQwMCB9fVxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3VzZXJuYW1lfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e0NoYW5nZUhhbmRsZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBHaXRIdWIgVXNlcnM6ICdTaWx2aW5QcmFkaGFuJ1wiXHJcblx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuXHRcdFx0XHRcdG9uQ2xpY2s9e1N1Ym1pdEhhbmRsZXJ9XHJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogMTUgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8R2l0SHViSWNvbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fSAvPiAmbmJzcDsgU2VhcmNoXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0eyFkYXRhLm5hbWUgPyAoXHJcblx0XHRcdFx0XHQnJ1xyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZXNtb2tlJywgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2RhdGEuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFZpZXcgb24gR2l0SHViXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGFUYWJsZVwiPlxyXG5cdFx0XHRcdDxUYWJsZURhdGEgZGF0YT17ZGF0YX0gcmVwbz17cmVwb30gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZpbmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=