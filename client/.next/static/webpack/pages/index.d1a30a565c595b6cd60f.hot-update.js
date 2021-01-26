webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/Header.jsx":
/*!************************************!*\
  !*** ./components/menu/Header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\menu\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var handleItemClick = function handleItemClick(e, _ref) {
    var name = _ref.name;
    return setActiveItem(name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      pointing: true,
      secondary: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        name: "home",
        active: activeItem === 'home',
        onClick: handleItemClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        name: "messages",
        active: activeItem === 'messages',
        onClick: handleItemClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        name: "friends",
        active: activeItem === 'friends',
        onClick: handleItemClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
        position: "right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          name: "logout",
          active: activeItem === 'logout',
          onClick: handleItemClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(Header, "CVxblTlMljIekBeD+S0beAvvwS8=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEVBQUQsQ0FEM0I7QUFBQSxNQUNWQyxVQURVO0FBQUEsTUFDRUMsYUFERjs7QUFHakIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFEO0FBQUEsUUFBTUMsSUFBTixRQUFNQSxJQUFOO0FBQUEsV0FBaUJILGFBQWEsQ0FBQ0csSUFBRCxDQUE5QjtBQUFBLEdBQXhCOztBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBTSxjQUFRLE1BQWQ7QUFBZSxlQUFTLE1BQXhCO0FBQUEsOEJBQ0kscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxjQUFNLEVBQUVKLFVBQVUsS0FBSyxNQUYzQjtBQUdJLGVBQU8sRUFBRUU7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFNSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGNBQU0sRUFBRUYsVUFBVSxLQUFLLFVBRjNCO0FBR0ksZUFBTyxFQUFFRTtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQVdJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUNJLFlBQUksRUFBQyxTQURUO0FBRUksY0FBTSxFQUFFRixVQUFVLEtBQUssU0FGM0I7QUFHSSxlQUFPLEVBQUVFO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBZ0JJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGdCQUFRLEVBQUMsT0FBcEI7QUFBQSwrQkFDSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLGdCQUFNLEVBQUVGLFVBQVUsS0FBSyxRQUYzQjtBQUdJLGlCQUFPLEVBQUVFO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUEwQkkscUVBQUMseURBQUQ7QUFBQSw2QkFDSTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBckNEOztHQUFNSixNOztLQUFBQSxNO0FBdUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMWEzMGE1NjVjNTk1YjZjZDYwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWVudSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiBzZXRBY3RpdmVJdGVtKG5hbWUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TWVudSBwb2ludGluZyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob21lJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21lc3NhZ2VzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21lc3NhZ2VzJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2ZyaWVuZHMnXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnZnJpZW5kcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xvZ291dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbG9nb3V0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuTWVudT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG5cclxuICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9tZWRpYS1wYXJhZ3JhcGgucG5nJyAvPlxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9