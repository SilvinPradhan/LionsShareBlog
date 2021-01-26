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
        onClick: _this.handleItemClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        name: "messages",
        active: activeItem === 'messages',
        onClick: _this.handleItemClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        name: "friends",
        active: activeItem === 'friends',
        onClick: _this.handleItemClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
        position: "right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          name: "logout",
          active: activeItem === 'logout',
          onClick: _this.handleItemClick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEVBQUQsQ0FEM0I7QUFBQSxNQUNWQyxVQURVO0FBQUEsTUFDRUMsYUFERjs7QUFHakIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFEO0FBQUEsUUFBTUMsSUFBTixRQUFNQSxJQUFOO0FBQUEsV0FBaUJILGFBQWEsQ0FBQ0csSUFBRCxDQUE5QjtBQUFBLEdBQXhCOztBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBTSxjQUFRLE1BQWQ7QUFBZSxlQUFTLE1BQXhCO0FBQUEsOEJBQ0kscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxjQUFNLEVBQUVKLFVBQVUsS0FBSyxNQUYzQjtBQUdJLGVBQU8sRUFBRSxLQUFJLENBQUNFO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU1JLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksY0FBTSxFQUFFRixVQUFVLEtBQUssVUFGM0I7QUFHSSxlQUFPLEVBQUUsS0FBSSxDQUFDRTtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFXSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFDSSxZQUFJLEVBQUMsU0FEVDtBQUVJLGNBQU0sRUFBRUYsVUFBVSxLQUFLLFNBRjNCO0FBR0ksZUFBTyxFQUFFLEtBQUksQ0FBQ0U7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBZ0JJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGdCQUFRLEVBQUMsT0FBcEI7QUFBQSwrQkFDSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLGdCQUFNLEVBQUVGLFVBQVUsS0FBSyxRQUYzQjtBQUdJLGlCQUFPLEVBQUUsS0FBSSxDQUFDRTtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQTBCSSxxRUFBQyx5REFBRDtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnQ0gsQ0FyQ0Q7O0dBQU1KLE07O0tBQUFBLE07QUF1Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY4YmM0NjJhYzAyZjUwZmRhZDEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZW51LCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHNldEFjdGl2ZUl0ZW0obmFtZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdtZXNzYWdlcydcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdtZXNzYWdlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2ZyaWVuZHMnXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnZnJpZW5kcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdsb2dvdXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuXHJcbiAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvbWVkaWEtcGFyYWdyYXBoLnBuZycgLz5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==