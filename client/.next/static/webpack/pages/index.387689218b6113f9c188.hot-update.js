webpackHotUpdate_N_E("pages/index",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: signup, signin, signout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var signup = function signup(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/signup"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var signin = function signin(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/signin"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; // signout

var signout = function signout(next) {
  removeCookie('token');
  removeLocalStorage('user');
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/signout"), {
    method: 'GET'
  }).then(function (res) {
    console.log('signout successful.');
  })["catch"](function (err) {
    console.log(err);
  });
}; // Set Cookie

var setCookie = function setCookie(key, value) {
  // check if the process is running in the client side
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(key, value, {
      expires: 1
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(key, {
      expires: 1
    });
  }
}; // Get Cookie

var getCookie = function getCookie(key) {
  if (true) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(key);
  }
}; // LocalStorage

var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
};
/* Middleware Setup  */
// Authenticate user by pass data to cookie and localStorage

var authenticate = function authenticate(data, next) {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
}; // Get the authenticated user data from localStorage

var isAuthenticated = function isAuthenticated() {
  if (true) {
    var cookieChecked = getCookie('token');

    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInVzZXIiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiIsInNpZ25vdXQiLCJuZXh0IiwicmVtb3ZlQ29va2llIiwicmVtb3ZlTG9jYWxTdG9yYWdlIiwic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0Iiwic2V0TG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJjb29raWVDaGVja2VkIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDL0IsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDN0JDLFVBQU0sRUFBRSxNQURxQjtBQUU3QkMsV0FBTyxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxrQkFEQTtBQUVSLHNCQUFnQjtBQUZSLEtBRm9CO0FBTTdCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmO0FBTnVCLEdBQWxCLENBQUwsQ0FRTFMsSUFSSyxDQVFBLFVBQUNDLEdBQUQsRUFBUztBQUNkLFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0EsR0FWSyxXQVdD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QU07QUFDcEMsWUFBcUI7QUFDcEIsUUFBTUMsYUFBYSxHQUFHVixTQUFTLENBQUMsT0FBRCxDQUEvQjs7QUFDQSxRQUFJVSxhQUFKLEVBQW1CO0FBQ2xCLFVBQUlQLFlBQVksQ0FBQ1EsT0FBYixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2pDLGVBQU8vQixJQUFJLENBQUNnQyxLQUFMLENBQVdULFlBQVksQ0FBQ1EsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDQSxPQUZELE1BRU87QUFDTixlQUFPLEtBQVA7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxDQVhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4NzY4OTIxOGI2MTEzZjljMTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ251cGAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbmluID0gKHVzZXIpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWduaW5gLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy8gc2lnbm91dFxyXG5leHBvcnQgY29uc3Qgc2lnbm91dCA9IChuZXh0KSA9PiB7XHJcblx0cmVtb3ZlQ29va2llKCd0b2tlbicpO1xyXG5cdHJlbW92ZUxvY2FsU3RvcmFnZSgndXNlcicpO1xyXG5cdG5leHQoKTtcclxuXHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbm91dGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3NpZ25vdXQgc3VjY2Vzc2Z1bC4nKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0fSk7XHJcbn07XHJcblxyXG4vLyBTZXQgQ29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdC8vIGNoZWNrIGlmIHRoZSBwcm9jZXNzIGlzIHJ1bm5pbmcgaW4gdGhlIGNsaWVudCBzaWRlXHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0Y29va2llLnNldChrZXksIHZhbHVlLCB7XHJcblx0XHRcdGV4cGlyZXM6IDEsXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvb2tpZS5yZW1vdmUoa2V5LCB7XHJcblx0XHRcdGV4cGlyZXM6IDEsXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG4vLyBHZXQgQ29va2llXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5KSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0cmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcclxuXHR9XHJcbn07XHJcblxyXG4vLyBMb2NhbFN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHR9XHJcbn07XHJcblxyXG4vKiBNaWRkbGV3YXJlIFNldHVwICAqL1xyXG4vLyBBdXRoZW50aWNhdGUgdXNlciBieSBwYXNzIGRhdGEgdG8gY29va2llIGFuZCBsb2NhbFN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcblx0c2V0Q29va2llKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdHNldExvY2FsU3RvcmFnZSgndXNlcicsIGRhdGEudXNlcik7XHJcblx0bmV4dCgpO1xyXG59O1xyXG5cclxuLy8gR2V0IHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxyXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvbnN0IGNvb2tpZUNoZWNrZWQgPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0XHRpZiAoY29va2llQ2hlY2tlZCkge1xyXG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==