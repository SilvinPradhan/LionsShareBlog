webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./components/crud/Category.js":
/*!*************************************!*\
  !*** ./components/crud/Category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "./components/custom-button/custom-button.component.jsx");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Class */ "./node_modules/@material-ui/icons/Class.js");
/* harmony import */ var _material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");




var _jsxFileName = "C:\\Users\\silvi\\selu-blog\\client\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    margin: {
      margin: theme.spacing.unit
    },
    button: {
      minWidth: 20,
      width: 'auto',
      height: '37px',
      letterSpacing: '0.5px',
      lineHeight: '35px',
      padding: '0 25px 0 25px',
      fontSize: '13.5px',
      backgroundColor: '#334aa6',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#525ed9'
      }
    }
  };
});

var Category = function Category(props) {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      error = values.error,
      success = values.success,
      categories = values.categories,
      removed = values.removed;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["create"])({
      name: name
    }, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          success: false
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: false,
          success: true,
          name: ''
        }));
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].info("A Category named '".concat(name, "' has been created."));
      }
    });
  };

  var handleChange = function handleChange(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      name: e.target.value,
      error: false,
      success: false,
      removed: ''
    }));
  };

  var newCategoryForm = function newCategoryForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: clickSubmit,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
          className: classes.margin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
            htmlFor: "input-with-category-icon",
            children: "Category Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            id: "input-with-category-icon",
            type: "text",
            onChange: handleChange,
            value: name,
            required: true,
            startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputAdornment"], {
              position: "start",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Class__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
              type: "submit",
              className: classes.button,
              children: "Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: newCategoryForm()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }, _this);
};

_s(Category, "dqfmdsf0PG5wu+OTCio969AuuVk=", false, function () {
  return [useStyles];
});

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.js ***!
  \****************************************************************/
/*! exports provided: Bounce, Flip, Slide, ToastContainer, Zoom, collapseToast, cssTransition, toast, useToast, useToastContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flip", function() { return Flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainer", function() { return ToastContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return Zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseToast", function() { return collapseToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssTransition", function() { return cssTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToast", function() { return useToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToastContainer", function() { return useToastContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(done, duration);
    });
  });
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        nodeRef = _ref2.nodeRef,
        isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var animationStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0
    /* Enter */
    );
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
      onEnter();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener('animationend', onEntered);
    }

    function onEntered() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onEntered);

      if (animationStep.current === 0
      /* Enter */
      ) {
          node.className = baseClassName.current;
        }
    }

    function onExit() {
      animationStep.current = 1
      /* Exit */
      ;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener('animationend', onExited);
    }

    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(arg);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 0
    /* ADD */
    :
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 1
    /* REMOVE */
    :
      return isToastIdValid(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var _instance$props = instance.props,
        limit = _instance$props.limit,
        enableMultiContainer = _instance$props.enableMultiContainer;

    if (limit && (!containerId || instance.containerId === containerId && enableMultiContainer)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    dispatch({
      type: 1
      /* REMOVE */
      ,
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId;

    appendToast(toastContent, toastProps, staleId);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      draggableDirection: options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging

    if (toastProps.draggableDirection === "y"
    /* Y */
    && toastProps.draggablePercent === 80
    /* DRAGGABLE_PERCENT */
    ) {
        toastProps.draggablePercent *= 1.5;
      }

    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if (Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(content) && !isStr(content.type)) {
      toastContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 0
      /* ADD */
      ,
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isFn(props.onOpen)) props.onOpen(Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose(Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(syncProps.children) && syncProps.children.props);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    if (props.draggable) {
      var toast = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast.getBoundingClientRect();
      toast.style.transition = '';
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.start = drag.x;
          drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
        } else {
        drag.start = drag.y;
        drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.delta = drag.x - drag.start;
        } else {
        drag.delta = drag.y - drag.start;
      } // prevent false positif during a toast click


      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = "translate" + props.draggableDirection + "(0)";
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, className); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object.assign({
    role: "progressbar",
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _cx;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast,
      isIn = props.isIn;
  var defaultClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, className);
  var isProgressControlled = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if (Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(closeButton)) return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(closeButton, props);
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Transition, {
    isIn: isIn,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object.assign({}, isIn && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || isProgressControlled) && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: isIn,
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;

  function getClassName(position) {
    var _cx;

    var defaultClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container", "Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position: position,
      rtl: rtl,
      defaultClassName: defaultClassName
    }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, parseClassName(className));
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: 'none'
    }) : _extends({}, style);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80
  /* DRAGGABLE_PERCENT */
  ,
  draggableDirection: "x"
  /* X */
  ,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var createToastByType = function createToastByType(type) {
  return function (content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = /*#__PURE__*/createToastByType(TYPE.SUCCESS);
toast.info = /*#__PURE__*/createToastByType(TYPE.INFO);
toast.error = /*#__PURE__*/createToastByType(TYPE.ERROR);
toast.warning = /*#__PURE__*/createToastByType(TYPE.WARNING);
toast.dark = /*#__PURE__*/createToastByType(TYPE.DARK);
toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvZGlzdC9yZWFjdC10b2FzdGlmeS5lc20uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luIiwic3BhY2luZyIsInVuaXQiLCJidXR0b24iLCJtaW5XaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlcnJvciIsInN1Y2Nlc3MiLCJjYXRlZ29yaWVzIiwicmVtb3ZlZCIsInZhbHVlcyIsInNldFZhbHVlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGUiLCJ0aGVuIiwiZGF0YSIsInRvYXN0IiwiaW5mbyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibmV3Q2F0ZWdvcnlGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsVUFBTSxFQUFFO0FBQ1BBLFlBQU0sRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWNDO0FBRGYsS0FEZ0M7QUFJeENDLFVBQU0sRUFBRTtBQUNQQyxjQUFRLEVB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OztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isc0RBQVE7QUFDMUI7QUFDQTs7QUFFQSxtQkFBbUIsc0RBQVE7QUFDM0I7QUFDQTs7QUFFQSxpQkFBaUIsb0RBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVM7QUFDWCx5Q0FBeUMsNERBQWM7QUFDdkQ7QUFDQSxxREFBcUQsNERBQWM7QUFDbkU7QUFDQSxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXNIO0FBQ3ZIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjU2OGYxZDI3NGI0NDZkNjM1NTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkLCBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IENhcmRBY3Rpb25zLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIElucHV0QWRvcm5tZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2xhc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGFzcyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0bWFyZ2luOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWluV2lkdGg6IDIwLFxyXG5cdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdGhlaWdodDogJzM3cHgnLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogJzAuNXB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuXHRcdHBhZGRpbmc6ICcwIDI1cHggMCAyNXB4JyxcclxuXHRcdGZvbnRTaXplOiAnMTMuNXB4JyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzRhYTYnLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzVweCcsXHJcblx0XHRib3JkZXI6ICdub25lJyxcclxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyM1MjVlZDknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bmFtZTogJycsXHJcblx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0cmVtb3ZlZDogZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbmFtZSwgZXJyb3IsIHN1Y2Nlc3MsIGNhdGVnb3JpZXMsIHJlbW92ZWQgfSA9IHZhbHVlcztcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y3JlYXRlKHsgbmFtZSB9LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBuYW1lOiAnJyB9KTtcclxuXHRcdFx0XHR0b2FzdC5pbmZvKGBBIENhdGVnb3J5IG5hbWVkICcke25hbWV9JyBoYXMgYmVlbiBjcmVhdGVkLmApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogJycgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW5wdXQtd2l0aC1jYXRlZ29yeS1pY29uXCI+Q2F0ZWdvcnkgTmFtZTo8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnB1dC13aXRoLWNhdGVnb3J5LWljb25cIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17XHJcblx0XHRcdFx0XHRcdFx0PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDbGFzc0ljb24gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0QWRvcm5tZW50PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8Q3VzdG9tQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0XHRcdFx0PC9DdXN0b21CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57bmV3Q2F0ZWdvcnlGb3JtKCl9PC9SZWFjdC5GcmFnbWVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIiwiaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IGlzVmFsaWRFbGVtZW50LCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCBjbG9uZUVsZW1lbnQsIHVzZVN0YXRlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGlzTnVtKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odik7XG59XG5mdW5jdGlvbiBpc0Jvb2wodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdib29sZWFuJztcbn1cbmZ1bmN0aW9uIGlzU3RyKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIGlzRm4odikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBwYXJzZUNsYXNzTmFtZSh2KSB7XG4gIHJldHVybiBpc1N0cih2KSB8fCBpc0ZuKHYpID8gdiA6IG51bGw7XG59XG5mdW5jdGlvbiBpc1RvYXN0SWRWYWxpZCh0b2FzdElkKSB7XG4gIHJldHVybiB0b2FzdElkID09PSAwIHx8IHRvYXN0SWQ7XG59XG5mdW5jdGlvbiBnZXRBdXRvQ2xvc2VEZWxheSh0b2FzdEF1dG9DbG9zZSwgY29udGFpbmVyQXV0b0Nsb3NlKSB7XG4gIHJldHVybiB0b2FzdEF1dG9DbG9zZSA9PT0gZmFsc2UgfHwgaXNOdW0odG9hc3RBdXRvQ2xvc2UpICYmIHRvYXN0QXV0b0Nsb3NlID4gMCA/IHRvYXN0QXV0b0Nsb3NlIDogY29udGFpbmVyQXV0b0Nsb3NlO1xufVxudmFyIGNhblVzZURvbSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBjYW5CZVJlbmRlcmVkKGNvbnRlbnQpIHtcbiAgcmV0dXJuIGlzVmFsaWRFbGVtZW50KGNvbnRlbnQpIHx8IGlzU3RyKGNvbnRlbnQpIHx8IGlzRm4oY29udGVudCkgfHwgaXNOdW0oY29udGVudCk7XG59XG5cbnZhciBQT1NJVElPTiA9IHtcbiAgVE9QX0xFRlQ6ICd0b3AtbGVmdCcsXG4gIFRPUF9SSUdIVDogJ3RvcC1yaWdodCcsXG4gIFRPUF9DRU5URVI6ICd0b3AtY2VudGVyJyxcbiAgQk9UVE9NX0xFRlQ6ICdib3R0b20tbGVmdCcsXG4gIEJPVFRPTV9SSUdIVDogJ2JvdHRvbS1yaWdodCcsXG4gIEJPVFRPTV9DRU5URVI6ICdib3R0b20tY2VudGVyJ1xufTtcbnZhciBUWVBFID0ge1xuICBJTkZPOiAnaW5mbycsXG4gIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgV0FSTklORzogJ3dhcm5pbmcnLFxuICBFUlJPUjogJ2Vycm9yJyxcbiAgREVGQVVMVDogJ2RlZmF1bHQnLFxuICBEQVJLOiAnZGFyaydcbn07XG5cbi8qKlxyXG4gKiBVc2VkIHRvIGNvbGxhcHNlIHRvYXN0IGFmdGVyIGV4aXQgYW5pbWF0aW9uXHJcbiAqL1xuZnVuY3Rpb24gY29sbGFwc2VUb2FzdChub2RlLCBkb25lLCBkdXJhdGlvblxuLyogQ09MTEFQU0VfRFVSQVRJT04gKi9cbikge1xuICBpZiAoZHVyYXRpb24gPT09IHZvaWQgMCkge1xuICAgIGR1cmF0aW9uID0gMzAwO1xuICB9XG5cbiAgdmFyIGhlaWdodCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIHN0eWxlLm1pbkhlaWdodCA9ICdpbml0aWFsJztcbiAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIHN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCBcIiArIGR1cmF0aW9uICsgXCJtc1wiO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICBzdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgc2V0VGltZW91dChkb25lLCBkdXJhdGlvbik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcclxuICogQ3NzIGFuaW1hdGlvbiB0aGF0IGp1c3Qgd29yay5cclxuICogWW91IGNvdWxkIHVzZSBhbmltYXRlLmNzcyBmb3IgaW5zdGFuY2VcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqIGNzc1RyYW5zaXRpb24oe1xyXG4gKiAgIGVudGVyOiBcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluXCIsXHJcbiAqICAgZXhpdDogXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VPdXRcIlxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICovXG5cbmZ1bmN0aW9uIGNzc1RyYW5zaXRpb24oX3JlZikge1xuICB2YXIgZW50ZXIgPSBfcmVmLmVudGVyLFxuICAgICAgZXhpdCA9IF9yZWYuZXhpdCxcbiAgICAgIF9yZWYkYXBwZW5kUG9zaXRpb24gPSBfcmVmLmFwcGVuZFBvc2l0aW9uLFxuICAgICAgYXBwZW5kUG9zaXRpb24gPSBfcmVmJGFwcGVuZFBvc2l0aW9uID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYXBwZW5kUG9zaXRpb24sXG4gICAgICBfcmVmJGNvbGxhcHNlID0gX3JlZi5jb2xsYXBzZSxcbiAgICAgIGNvbGxhcHNlID0gX3JlZiRjb2xsYXBzZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkY29sbGFwc2UsXG4gICAgICBfcmVmJGNvbGxhcHNlRHVyYXRpb24gPSBfcmVmLmNvbGxhcHNlRHVyYXRpb24sXG4gICAgICBjb2xsYXBzZUR1cmF0aW9uID0gX3JlZiRjb2xsYXBzZUR1cmF0aW9uID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGNvbGxhcHNlRHVyYXRpb247XG4gIHJldHVybiBmdW5jdGlvbiBUb2FzdFRyYW5zaXRpb24oX3JlZjIpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgICAgcHJldmVudEV4aXRUcmFuc2l0aW9uID0gX3JlZjIucHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgICAgICBkb25lID0gX3JlZjIuZG9uZSxcbiAgICAgICAgbm9kZVJlZiA9IF9yZWYyLm5vZGVSZWYsXG4gICAgICAgIGlzSW4gPSBfcmVmMi5pc0luO1xuICAgIHZhciBlbnRlckNsYXNzTmFtZSA9IGFwcGVuZFBvc2l0aW9uID8gZW50ZXIgKyBcIi0tXCIgKyBwb3NpdGlvbiA6IGVudGVyO1xuICAgIHZhciBleGl0Q2xhc3NOYW1lID0gYXBwZW5kUG9zaXRpb24gPyBleGl0ICsgXCItLVwiICsgcG9zaXRpb24gOiBleGl0O1xuICAgIHZhciBiYXNlQ2xhc3NOYW1lID0gdXNlUmVmKCk7XG4gICAgdmFyIGFuaW1hdGlvblN0ZXAgPSB1c2VSZWYoMFxuICAgIC8qIEVudGVyICovXG4gICAgKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgb25FbnRlcigpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc0luKSBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPyBvbkV4aXRlZCgpIDogb25FeGl0KCk7XG4gICAgfSwgW2lzSW5dKTtcblxuICAgIGZ1bmN0aW9uIG9uRW50ZXIoKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIGJhc2VDbGFzc05hbWUuY3VycmVudCA9IG5vZGUuY2xhc3NOYW1lO1xuICAgICAgbm9kZS5jbGFzc05hbWUgKz0gXCIgXCIgKyBlbnRlckNsYXNzTmFtZTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25FbnRlcmVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVudGVyZWQoKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25FbnRlcmVkKTtcblxuICAgICAgaWYgKGFuaW1hdGlvblN0ZXAuY3VycmVudCA9PT0gMFxuICAgICAgLyogRW50ZXIgKi9cbiAgICAgICkge1xuICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gYmFzZUNsYXNzTmFtZS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FeGl0KCkge1xuICAgICAgYW5pbWF0aW9uU3RlcC5jdXJyZW50ID0gMVxuICAgICAgLyogRXhpdCAqL1xuICAgICAgO1xuICAgICAgdmFyIG5vZGUgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBub2RlLmNsYXNzTmFtZSArPSBcIiBcIiArIGV4aXRDbGFzc05hbWU7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uRXhpdGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkV4aXRlZCgpIHtcbiAgICAgIHZhciBub2RlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkV4aXRlZCk7XG4gICAgICBjb2xsYXBzZSA/IGNvbGxhcHNlVG9hc3Qobm9kZSwgZG9uZSwgY29sbGFwc2VEdXJhdGlvbikgOiBkb25lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKTtcbiAgfTtcbn1cblxudmFyIGV2ZW50TWFuYWdlciA9IHtcbiAgbGlzdDogLyojX19QVVJFX18qL25ldyBNYXAoKSxcbiAgZW1pdFF1ZXVlOiAvKiNfX1BVUkVfXyovbmV3IE1hcCgpLFxuICBvbjogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0LmhhcyhldmVudCkgfHwgdGhpcy5saXN0LnNldChldmVudCwgW10pO1xuICAgIHRoaXMubGlzdC5nZXQoZXZlbnQpLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjYiA9IHRoaXMubGlzdC5nZXQoZXZlbnQpLmZpbHRlcihmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiICE9PSBjYWxsYmFjaztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0LnNldChldmVudCwgY2IpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0W1wiZGVsZXRlXCJdKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY2FuY2VsRW1pdDogZnVuY3Rpb24gY2FuY2VsRW1pdChldmVudCkge1xuICAgIHZhciB0aW1lcnMgPSB0aGlzLmVtaXRRdWV1ZS5nZXQoZXZlbnQpO1xuXG4gICAgaWYgKHRpbWVycykge1xuICAgICAgdGltZXJzLmZvckVhY2goY2xlYXJUaW1lb3V0KTtcbiAgICAgIHRoaXMuZW1pdFF1ZXVlW1wiZGVsZXRlXCJdKGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcclxuICAgKiBFbnF1ZXVlIHRoZSBldmVudCBhdCB0aGUgZW5kIG9mIHRoZSBjYWxsIHN0YWNrXHJcbiAgICogRG9pbmcgc28gbGV0IHRoZSB1c2VyIGNhbGwgdG9hc3QgYXMgZm9sbG93OlxyXG4gICAqIHRvYXN0KCcxJylcclxuICAgKiB0b2FzdCgnMicpXHJcbiAgICogdG9hc3QoJzMnKVxyXG4gICAqIFdpdGhvdXQgc2V0VGltZW1vdXQgdGhlIGNvZGUgYWJvdmUgd2lsbCBub3Qgd29ya1xyXG4gICAqL1xuICBlbWl0OiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMubGlzdC5oYXMoZXZlbnQpICYmIHRoaXMubGlzdC5nZXQoZXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSwgMCk7XG4gICAgICBfdGhpcy5lbWl0UXVldWUuaGFzKGV2ZW50KSB8fCBfdGhpcy5lbWl0UXVldWUuc2V0KGV2ZW50LCBbXSk7XG5cbiAgICAgIF90aGlzLmVtaXRRdWV1ZS5nZXQoZXZlbnQpLnB1c2godGltZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcclxuICogYHVzZUtlZXBlcmAgaXMgYSBoZWxwZXIgYXJvdW5kIGB1c2VSZWZgLlxyXG4gKlxyXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBhY2Nlc3MgdGhlIGAuY3VycmVudGBwcm9wZXJ0eSB0byBnZXQgdGhlIHZhbHVlXHJcbiAqIElmIHJlZnJlc2ggaXMgc2V0IHRvIHRydWUuIFRoZSByZWYgd2lsbCBiZSB1cGRhdGVkIGV2ZXJ5IHJlbmRlclxyXG4gKi9cblxuZnVuY3Rpb24gdXNlS2VlcGVyKGFyZywgcmVmcmVzaCkge1xuICBpZiAocmVmcmVzaCA9PT0gdm9pZCAwKSB7XG4gICAgcmVmcmVzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHJlZiA9IHVzZVJlZihhcmcpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZWZyZXNoKSByZWYuY3VycmVudCA9IGFyZztcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIDBcbiAgICAvKiBBREQgKi9cbiAgICA6XG4gICAgICByZXR1cm4gW10uY29uY2F0KHN0YXRlLCBbYWN0aW9uLnRvYXN0SWRdKS5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCAhPT0gYWN0aW9uLnN0YWxlSWQ7XG4gICAgICB9KTtcblxuICAgIGNhc2UgMVxuICAgIC8qIFJFTU9WRSAqL1xuICAgIDpcbiAgICAgIHJldHVybiBpc1RvYXN0SWRWYWxpZChhY3Rpb24udG9hc3RJZCkgPyBzdGF0ZS5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCAhPT0gYWN0aW9uLnRvYXN0SWQ7XG4gICAgICB9KSA6IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVRvYXN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgX3VzZVJlZHVjZXIyID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSksXG4gICAgICB0b2FzdCA9IF91c2VSZWR1Y2VyMlswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZVJlZHVjZXIyWzFdO1xuXG4gIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciB0b2FzdENvdW50ID0gdXNlS2VlcGVyKDApO1xuICB2YXIgcXVldWUgPSB1c2VLZWVwZXIoW10pO1xuICB2YXIgY29sbGVjdGlvbiA9IHVzZUtlZXBlcih7fSk7XG4gIHZhciBpbnN0YW5jZSA9IHVzZUtlZXBlcih7XG4gICAgdG9hc3RLZXk6IDEsXG4gICAgZGlzcGxheWVkVG9hc3Q6IDAsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIGNvbnRhaW5lcklkOiBudWxsLFxuICAgIGlzVG9hc3RBY3RpdmU6IGlzVG9hc3RBY3RpdmUsXG4gICAgZ2V0VG9hc3Q6IGZ1bmN0aW9uIGdldFRvYXN0KGlkKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltpZF0gfHwgbnVsbDtcbiAgICB9XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3RhbmNlLmNvbnRhaW5lcklkID0gcHJvcHMuY29udGFpbmVySWQ7XG4gICAgZXZlbnRNYW5hZ2VyLmNhbmNlbEVtaXQoM1xuICAgIC8qIFdpbGxVbm1vdW50ICovXG4gICAgKS5vbigwXG4gICAgLyogU2hvdyAqL1xuICAgICwgYnVpbGRUb2FzdCkub24oMVxuICAgIC8qIENsZWFyICovXG4gICAgLCBmdW5jdGlvbiAodG9hc3RJZCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lclJlZi5jdXJyZW50ICYmIHJlbW92ZVRvYXN0KHRvYXN0SWQpO1xuICAgIH0pLm9uKDVcbiAgICAvKiBDbGVhcldhaXRpbmdRdWV1ZSAqL1xuICAgICwgY2xlYXJXYWl0aW5nUXVldWUpLmVtaXQoMlxuICAgIC8qIERpZE1vdW50ICovXG4gICAgLCBpbnN0YW5jZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBldmVudE1hbmFnZXIuZW1pdCgzXG4gICAgICAvKiBXaWxsVW5tb3VudCAqL1xuICAgICAgLCBpbnN0YW5jZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3RhbmNlLmlzVG9hc3RBY3RpdmUgPSBpc1RvYXN0QWN0aXZlO1xuICAgIGluc3RhbmNlLmRpc3BsYXllZFRvYXN0ID0gdG9hc3QubGVuZ3RoO1xuICAgIGV2ZW50TWFuYWdlci5lbWl0KDRcbiAgICAvKiBDaGFuZ2UgKi9cbiAgICAsIHRvYXN0Lmxlbmd0aCwgcHJvcHMuY29udGFpbmVySWQpO1xuICB9LCBbdG9hc3RdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICB9KTtcblxuICBmdW5jdGlvbiBpc1RvYXN0QWN0aXZlKGlkKSB7XG4gICAgcmV0dXJuIHRvYXN0LmluZGV4T2YoaWQpICE9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyV2FpdGluZ1F1ZXVlKF9yZWYpIHtcbiAgICB2YXIgY29udGFpbmVySWQgPSBfcmVmLmNvbnRhaW5lcklkO1xuICAgIHZhciBfaW5zdGFuY2UkcHJvcHMgPSBpbnN0YW5jZS5wcm9wcyxcbiAgICAgICAgbGltaXQgPSBfaW5zdGFuY2UkcHJvcHMubGltaXQsXG4gICAgICAgIGVuYWJsZU11bHRpQ29udGFpbmVyID0gX2luc3RhbmNlJHByb3BzLmVuYWJsZU11bHRpQ29udGFpbmVyO1xuXG4gICAgaWYgKGxpbWl0ICYmICghY29udGFpbmVySWQgfHwgaW5zdGFuY2UuY29udGFpbmVySWQgPT09IGNvbnRhaW5lcklkICYmIGVuYWJsZU11bHRpQ29udGFpbmVyKSkge1xuICAgICAgdG9hc3RDb3VudCAtPSBxdWV1ZS5sZW5ndGg7XG4gICAgICBxdWV1ZSA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRvYXN0KHRvYXN0SWQpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAxXG4gICAgICAvKiBSRU1PVkUgKi9cbiAgICAgICxcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcXVldWVUb2FzdCgpIHtcbiAgICB2YXIgX3F1ZXVlJHNoaWZ0ID0gcXVldWUuc2hpZnQoKSxcbiAgICAgICAgdG9hc3RDb250ZW50ID0gX3F1ZXVlJHNoaWZ0LnRvYXN0Q29udGVudCxcbiAgICAgICAgdG9hc3RQcm9wcyA9IF9xdWV1ZSRzaGlmdC50b2FzdFByb3BzLFxuICAgICAgICBzdGFsZUlkID0gX3F1ZXVlJHNoaWZ0LnN0YWxlSWQ7XG5cbiAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICB9XG4gIC8qKlxyXG4gICAqIGNoZWNrIGlmIGEgY29udGFpbmVyIGlzIGF0dGFjaGVkIHRvIHRoZSBkb21cclxuICAgKiBjaGVjayBmb3IgbXVsdGktY29udGFpbmVyLCBidWlsZCBvbmx5IGlmIGFzc29jaWF0ZWRcclxuICAgKiBjaGVjayBmb3IgZHVwbGljYXRlIHRvYXN0SWQgaWYgbm8gdXBkYXRlXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpc05vdFZhbGlkKF9yZWYyKSB7XG4gICAgdmFyIGNvbnRhaW5lcklkID0gX3JlZjIuY29udGFpbmVySWQsXG4gICAgICAgIHRvYXN0SWQgPSBfcmVmMi50b2FzdElkLFxuICAgICAgICB1cGRhdGVJZCA9IF9yZWYyLnVwZGF0ZUlkO1xuICAgIHJldHVybiAhY29udGFpbmVyUmVmLmN1cnJlbnQgfHwgaW5zdGFuY2UucHJvcHMuZW5hYmxlTXVsdGlDb250YWluZXIgJiYgY29udGFpbmVySWQgIT09IGluc3RhbmNlLnByb3BzLmNvbnRhaW5lcklkIHx8IGNvbGxlY3Rpb25bdG9hc3RJZF0gJiYgdXBkYXRlSWQgPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcbiAgfSAvLyB0aGlzIGZ1bmN0aW9uIGFuZCBhbGwgdGhlIGZ1bmN0aW9uIGNhbGxlZCBpbnNpZGUgbmVlZHMgdG8gcmVseSBvbiByZWYoYHVzZUtlZXBlcmApXG5cblxuICBmdW5jdGlvbiBidWlsZFRvYXN0KGNvbnRlbnQsIF9yZWYzKSB7XG4gICAgdmFyIGRlbGF5ID0gX3JlZjMuZGVsYXksXG4gICAgICAgIHN0YWxlSWQgPSBfcmVmMy5zdGFsZUlkLFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcImRlbGF5XCIsIFwic3RhbGVJZFwiXSk7XG5cbiAgICBpZiAoIWNhbkJlUmVuZGVyZWQoY29udGVudCkgfHwgaXNOb3RWYWxpZChvcHRpb25zKSkgcmV0dXJuO1xuICAgIHZhciB0b2FzdElkID0gb3B0aW9ucy50b2FzdElkLFxuICAgICAgICB1cGRhdGVJZCA9IG9wdGlvbnMudXBkYXRlSWQ7XG4gICAgdmFyIHByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICB2YXIgY2xvc2VUb2FzdCA9IGZ1bmN0aW9uIGNsb3NlVG9hc3QoKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlVG9hc3QodG9hc3RJZCk7XG4gICAgfTtcblxuICAgIHZhciBpc05vdEFuVXBkYXRlID0gb3B0aW9ucy51cGRhdGVJZCA9PSBudWxsO1xuICAgIGlmIChpc05vdEFuVXBkYXRlKSB0b2FzdENvdW50Kys7XG4gICAgdmFyIHRvYXN0UHJvcHMgPSB7XG4gICAgICB0b2FzdElkOiB0b2FzdElkLFxuICAgICAgdXBkYXRlSWQ6IHVwZGF0ZUlkLFxuICAgICAgaXNJbjogZmFsc2UsXG4gICAgICBrZXk6IG9wdGlvbnMua2V5IHx8IGluc3RhbmNlLnRvYXN0S2V5KyssXG4gICAgICB0eXBlOiBvcHRpb25zLnR5cGUsXG4gICAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgICAgY2xvc2VCdXR0b246IG9wdGlvbnMuY2xvc2VCdXR0b24sXG4gICAgICBydGw6IHByb3BzLnJ0bCxcbiAgICAgIHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uIHx8IHByb3BzLnBvc2l0aW9uLFxuICAgICAgdHJhbnNpdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uIHx8IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBjbGFzc05hbWU6IHBhcnNlQ2xhc3NOYW1lKG9wdGlvbnMuY2xhc3NOYW1lIHx8IHByb3BzLnRvYXN0Q2xhc3NOYW1lKSxcbiAgICAgIGJvZHlDbGFzc05hbWU6IHBhcnNlQ2xhc3NOYW1lKG9wdGlvbnMuYm9keUNsYXNzTmFtZSB8fCBwcm9wcy5ib2R5Q2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiBvcHRpb25zLnN0eWxlIHx8IHByb3BzLnRvYXN0U3R5bGUsXG4gICAgICBib2R5U3R5bGU6IG9wdGlvbnMuYm9keVN0eWxlIHx8IHByb3BzLmJvZHlTdHlsZSxcbiAgICAgIG9uQ2xpY2s6IG9wdGlvbnMub25DbGljayB8fCBwcm9wcy5vbkNsaWNrLFxuICAgICAgcGF1c2VPbkhvdmVyOiBpc0Jvb2wob3B0aW9ucy5wYXVzZU9uSG92ZXIpID8gb3B0aW9ucy5wYXVzZU9uSG92ZXIgOiBwcm9wcy5wYXVzZU9uSG92ZXIsXG4gICAgICBwYXVzZU9uRm9jdXNMb3NzOiBpc0Jvb2wob3B0aW9ucy5wYXVzZU9uRm9jdXNMb3NzKSA/IG9wdGlvbnMucGF1c2VPbkZvY3VzTG9zcyA6IHByb3BzLnBhdXNlT25Gb2N1c0xvc3MsXG4gICAgICBkcmFnZ2FibGU6IGlzQm9vbChvcHRpb25zLmRyYWdnYWJsZSkgPyBvcHRpb25zLmRyYWdnYWJsZSA6IHByb3BzLmRyYWdnYWJsZSxcbiAgICAgIGRyYWdnYWJsZVBlcmNlbnQ6IGlzTnVtKG9wdGlvbnMuZHJhZ2dhYmxlUGVyY2VudCkgPyBvcHRpb25zLmRyYWdnYWJsZVBlcmNlbnQgOiBwcm9wcy5kcmFnZ2FibGVQZXJjZW50LFxuICAgICAgZHJhZ2dhYmxlRGlyZWN0aW9uOiBvcHRpb25zLmRyYWdnYWJsZURpcmVjdGlvbiB8fCBwcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24sXG4gICAgICBjbG9zZU9uQ2xpY2s6IGlzQm9vbChvcHRpb25zLmNsb3NlT25DbGljaykgPyBvcHRpb25zLmNsb3NlT25DbGljayA6IHByb3BzLmNsb3NlT25DbGljayxcbiAgICAgIHByb2dyZXNzQ2xhc3NOYW1lOiBwYXJzZUNsYXNzTmFtZShvcHRpb25zLnByb2dyZXNzQ2xhc3NOYW1lIHx8IHByb3BzLnByb2dyZXNzQ2xhc3NOYW1lKSxcbiAgICAgIHByb2dyZXNzU3R5bGU6IG9wdGlvbnMucHJvZ3Jlc3NTdHlsZSB8fCBwcm9wcy5wcm9ncmVzc1N0eWxlLFxuICAgICAgYXV0b0Nsb3NlOiBnZXRBdXRvQ2xvc2VEZWxheShvcHRpb25zLmF1dG9DbG9zZSwgcHJvcHMuYXV0b0Nsb3NlKSxcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogaXNCb29sKG9wdGlvbnMuaGlkZVByb2dyZXNzQmFyKSA/IG9wdGlvbnMuaGlkZVByb2dyZXNzQmFyIDogcHJvcHMuaGlkZVByb2dyZXNzQmFyLFxuICAgICAgcHJvZ3Jlc3M6IG9wdGlvbnMucHJvZ3Jlc3MsXG4gICAgICByb2xlOiBpc1N0cihvcHRpb25zLnJvbGUpID8gb3B0aW9ucy5yb2xlIDogcHJvcHMucm9sZSxcbiAgICAgIGRlbGV0ZVRvYXN0OiBmdW5jdGlvbiBkZWxldGVUb2FzdCgpIHtcbiAgICAgICAgcmVtb3ZlRnJvbUNvbGxlY3Rpb24odG9hc3RJZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNGbihvcHRpb25zLm9uT3BlbikpIHRvYXN0UHJvcHMub25PcGVuID0gb3B0aW9ucy5vbk9wZW47XG4gICAgaWYgKGlzRm4ob3B0aW9ucy5vbkNsb3NlKSkgdG9hc3RQcm9wcy5vbkNsb3NlID0gb3B0aW9ucy5vbkNsb3NlOyAvLyAgdHdlYWsgZm9yIHZlcnRpY2FsIGRyYWdnaW5nXG5cbiAgICBpZiAodG9hc3RQcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24gPT09IFwieVwiXG4gICAgLyogWSAqL1xuICAgICYmIHRvYXN0UHJvcHMuZHJhZ2dhYmxlUGVyY2VudCA9PT0gODBcbiAgICAvKiBEUkFHR0FCTEVfUEVSQ0VOVCAqL1xuICAgICkge1xuICAgICAgICB0b2FzdFByb3BzLmRyYWdnYWJsZVBlcmNlbnQgKj0gMS41O1xuICAgICAgfVxuXG4gICAgdmFyIGNsb3NlQnV0dG9uID0gcHJvcHMuY2xvc2VCdXR0b247XG5cbiAgICBpZiAob3B0aW9ucy5jbG9zZUJ1dHRvbiA9PT0gZmFsc2UgfHwgY2FuQmVSZW5kZXJlZChvcHRpb25zLmNsb3NlQnV0dG9uKSkge1xuICAgICAgY2xvc2VCdXR0b24gPSBvcHRpb25zLmNsb3NlQnV0dG9uO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5jbG9zZUJ1dHRvbiA9PT0gdHJ1ZSkge1xuICAgICAgY2xvc2VCdXR0b24gPSBjYW5CZVJlbmRlcmVkKHByb3BzLmNsb3NlQnV0dG9uKSA/IHByb3BzLmNsb3NlQnV0dG9uIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0b2FzdFByb3BzLmNsb3NlQnV0dG9uID0gY2xvc2VCdXR0b247XG4gICAgdmFyIHRvYXN0Q29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY29udGVudCkgJiYgIWlzU3RyKGNvbnRlbnQudHlwZSkpIHtcbiAgICAgIHRvYXN0Q29udGVudCA9IGNsb25lRWxlbWVudChjb250ZW50LCB7XG4gICAgICAgIGNsb3NlVG9hc3Q6IGNsb3NlVG9hc3QsXG4gICAgICAgIHRvYXN0UHJvcHM6IHRvYXN0UHJvcHNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNGbihjb250ZW50KSkge1xuICAgICAgdG9hc3RDb250ZW50ID0gY29udGVudCh7XG4gICAgICAgIGNsb3NlVG9hc3Q6IGNsb3NlVG9hc3QsXG4gICAgICAgIHRvYXN0UHJvcHM6IHRvYXN0UHJvcHNcbiAgICAgIH0pO1xuICAgIH0gLy8gbm90IGhhbmRsaW5nIGxpbWl0ICsgZGVsYXkgYnkgZGVzaWduLiBXYWl0aW5nIGZvciB1c2VyIGZlZWRiYWNrIGZpcnN0XG5cblxuICAgIGlmIChwcm9wcy5saW1pdCAmJiBwcm9wcy5saW1pdCA+IDAgJiYgdG9hc3RDb3VudCA+IHByb3BzLmxpbWl0ICYmIGlzTm90QW5VcGRhdGUpIHtcbiAgICAgIHF1ZXVlLnB1c2goe1xuICAgICAgICB0b2FzdENvbnRlbnQ6IHRvYXN0Q29udGVudCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wcyxcbiAgICAgICAgc3RhbGVJZDogc3RhbGVJZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc051bShkZWxheSkgJiYgZGVsYXkgPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXBwZW5kVG9hc3QodG9hc3RDb250ZW50LCB0b2FzdFByb3BzLCBzdGFsZUlkKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwZW5kVG9hc3QodG9hc3RDb250ZW50LCB0b2FzdFByb3BzLCBzdGFsZUlkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRUb2FzdChjb250ZW50LCB0b2FzdFByb3BzLCBzdGFsZUlkKSB7XG4gICAgdmFyIHRvYXN0SWQgPSB0b2FzdFByb3BzLnRvYXN0SWQ7XG4gICAgaWYgKHN0YWxlSWQpIGRlbGV0ZSBjb2xsZWN0aW9uW3N0YWxlSWRdO1xuICAgIGNvbGxlY3Rpb25bdG9hc3RJZF0gPSB7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgcHJvcHM6IHRvYXN0UHJvcHNcbiAgICB9O1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IDBcbiAgICAgIC8qIEFERCAqL1xuICAgICAgLFxuICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICAgIHN0YWxlSWQ6IHN0YWxlSWRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21Db2xsZWN0aW9uKHRvYXN0SWQpIHtcbiAgICBkZWxldGUgY29sbGVjdGlvblt0b2FzdElkXTtcbiAgICB2YXIgcXVldWVMZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgdG9hc3RDb3VudCA9IGlzVG9hc3RJZFZhbGlkKHRvYXN0SWQpID8gdG9hc3RDb3VudCAtIDEgOiB0b2FzdENvdW50IC0gaW5zdGFuY2UuZGlzcGxheWVkVG9hc3Q7XG4gICAgaWYgKHRvYXN0Q291bnQgPCAwKSB0b2FzdENvdW50ID0gMDtcblxuICAgIGlmIChxdWV1ZUxlbiA+IDApIHtcbiAgICAgIHZhciBmcmVlU2xvdCA9IGlzVG9hc3RJZFZhbGlkKHRvYXN0SWQpID8gMSA6IGluc3RhbmNlLnByb3BzLmxpbWl0O1xuXG4gICAgICBpZiAocXVldWVMZW4gPT09IDEgfHwgZnJlZVNsb3QgPT09IDEpIHtcbiAgICAgICAgaW5zdGFuY2UuZGlzcGxheWVkVG9hc3QrKztcbiAgICAgICAgZGVxdWV1ZVRvYXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdG9EZXF1ZXVlID0gZnJlZVNsb3QgPiBxdWV1ZUxlbiA/IHF1ZXVlTGVuIDogZnJlZVNsb3Q7XG4gICAgICAgIGluc3RhbmNlLmRpc3BsYXllZFRvYXN0ID0gdG9EZXF1ZXVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9EZXF1ZXVlOyBpKyspIHtcbiAgICAgICAgICBkZXF1ZXVlVG9hc3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRvYXN0VG9SZW5kZXIoY2IpIHtcbiAgICB2YXIgdG9hc3RUb1JlbmRlciA9IHt9O1xuICAgIHZhciB0b2FzdExpc3QgPSBwcm9wcy5uZXdlc3RPblRvcCA/IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLnJldmVyc2UoKSA6IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2FzdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfdG9hc3QgPSBjb2xsZWN0aW9uW3RvYXN0TGlzdFtpXV07XG4gICAgICB2YXIgcG9zaXRpb24gPSBfdG9hc3QucHJvcHMucG9zaXRpb247XG4gICAgICB0b2FzdFRvUmVuZGVyW3Bvc2l0aW9uXSB8fCAodG9hc3RUb1JlbmRlcltwb3NpdGlvbl0gPSBbXSk7XG4gICAgICB0b2FzdFRvUmVuZGVyW3Bvc2l0aW9uXS5wdXNoKF90b2FzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRvYXN0VG9SZW5kZXIpLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIGNiKHAsIHRvYXN0VG9SZW5kZXJbcF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUb2FzdFRvUmVuZGVyOiBnZXRUb2FzdFRvUmVuZGVyLFxuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgY29udGFpbmVyUmVmOiBjb250YWluZXJSZWYsXG4gICAgaXNUb2FzdEFjdGl2ZTogaXNUb2FzdEFjdGl2ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRYKGUpIHtcbiAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbn1cblxuZnVuY3Rpb24gZ2V0WShlKSB7XG4gIHJldHVybiBlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFk7XG59XG5cbmZ1bmN0aW9uIHVzZVRvYXN0KHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh0cnVlKSxcbiAgICAgIGlzUnVubmluZyA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldElzUnVubmluZyA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgX3VzZVN0YXRlMiA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciB0b2FzdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGRyYWcgPSB1c2VLZWVwZXIoe1xuICAgIHN0YXJ0OiAwLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBkZWx0YTogMCxcbiAgICByZW1vdmFsRGlzdGFuY2U6IDAsXG4gICAgY2FuQ2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgIGNhbkRyYWc6IGZhbHNlLFxuICAgIGJvdW5kaW5nUmVjdDogbnVsbFxuICB9KTtcbiAgdmFyIHN5bmNQcm9wcyA9IHVzZUtlZXBlcihwcm9wcywgdHJ1ZSk7XG4gIHZhciBhdXRvQ2xvc2UgPSBwcm9wcy5hdXRvQ2xvc2UsXG4gICAgICBwYXVzZU9uSG92ZXIgPSBwcm9wcy5wYXVzZU9uSG92ZXIsXG4gICAgICBjbG9zZVRvYXN0ID0gcHJvcHMuY2xvc2VUb2FzdCxcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgY2xvc2VPbkNsaWNrID0gcHJvcHMuY2xvc2VPbkNsaWNrO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0ZuKHByb3BzLm9uT3BlbikpIHByb3BzLm9uT3Blbihpc1ZhbGlkRWxlbWVudChwcm9wcy5jaGlsZHJlbikgJiYgcHJvcHMuY2hpbGRyZW4ucHJvcHMpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNGbihzeW5jUHJvcHMub25DbG9zZSkpIHN5bmNQcm9wcy5vbkNsb3NlKGlzVmFsaWRFbGVtZW50KHN5bmNQcm9wcy5jaGlsZHJlbikgJiYgc3luY1Byb3BzLmNoaWxkcmVuLnByb3BzKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcHJvcHMuZHJhZ2dhYmxlICYmIGJpbmREcmFnRXZlbnRzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb3BzLmRyYWdnYWJsZSAmJiB1bmJpbmREcmFnRXZlbnRzKCk7XG4gICAgfTtcbiAgfSwgW3Byb3BzLmRyYWdnYWJsZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzLnBhdXNlT25Gb2N1c0xvc3MgJiYgYmluZEZvY3VzRXZlbnRzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb3BzLnBhdXNlT25Gb2N1c0xvc3MgJiYgdW5iaW5kRm9jdXNFdmVudHMoKTtcbiAgICB9O1xuICB9LCBbcHJvcHMucGF1c2VPbkZvY3VzTG9zc10pO1xuXG4gIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICBpZiAocHJvcHMuZHJhZ2dhYmxlKSB7XG4gICAgICB2YXIgdG9hc3QgPSB0b2FzdFJlZi5jdXJyZW50O1xuICAgICAgZHJhZy5jYW5DbG9zZU9uQ2xpY2sgPSB0cnVlO1xuICAgICAgZHJhZy5jYW5EcmFnID0gdHJ1ZTtcbiAgICAgIGRyYWcuYm91bmRpbmdSZWN0ID0gdG9hc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0b2FzdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICBkcmFnLnggPSBnZXRYKGUubmF0aXZlRXZlbnQpO1xuICAgICAgZHJhZy55ID0gZ2V0WShlLm5hdGl2ZUV2ZW50KTtcblxuICAgICAgaWYgKHByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiA9PT0gXCJ4XCJcbiAgICAgIC8qIFggKi9cbiAgICAgICkge1xuICAgICAgICAgIGRyYWcuc3RhcnQgPSBkcmFnLng7XG4gICAgICAgICAgZHJhZy5yZW1vdmFsRGlzdGFuY2UgPSB0b2FzdC5vZmZzZXRXaWR0aCAqIChwcm9wcy5kcmFnZ2FibGVQZXJjZW50IC8gMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZy5zdGFydCA9IGRyYWcueTtcbiAgICAgICAgZHJhZy5yZW1vdmFsRGlzdGFuY2UgPSB0b2FzdC5vZmZzZXRIZWlnaHQgKiAocHJvcHMuZHJhZ2dhYmxlUGVyY2VudCAvIDEwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnVHJhbnNpdGlvbkVuZCgpIHtcbiAgICBpZiAoZHJhZy5ib3VuZGluZ1JlY3QpIHtcbiAgICAgIHZhciBfZHJhZyRib3VuZGluZ1JlY3QgPSBkcmFnLmJvdW5kaW5nUmVjdCxcbiAgICAgICAgICB0b3AgPSBfZHJhZyRib3VuZGluZ1JlY3QudG9wLFxuICAgICAgICAgIGJvdHRvbSA9IF9kcmFnJGJvdW5kaW5nUmVjdC5ib3R0b20sXG4gICAgICAgICAgbGVmdCA9IF9kcmFnJGJvdW5kaW5nUmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0ID0gX2RyYWckYm91bmRpbmdSZWN0LnJpZ2h0O1xuXG4gICAgICBpZiAocHJvcHMucGF1c2VPbkhvdmVyICYmIGRyYWcueCA+PSBsZWZ0ICYmIGRyYWcueCA8PSByaWdodCAmJiBkcmFnLnkgPj0gdG9wICYmIGRyYWcueSA8PSBib3R0b20pIHtcbiAgICAgICAgcGF1c2VUb2FzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheVRvYXN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheVRvYXN0KCkge1xuICAgIHNldElzUnVubmluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlVG9hc3QoKSB7XG4gICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcbiAgICBpZiAoIWRvY3VtZW50Lmhhc0ZvY3VzKCkpIHBhdXNlVG9hc3QoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBwbGF5VG9hc3QpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgcGF1c2VUb2FzdCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmJpbmRGb2N1c0V2ZW50cygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBwbGF5VG9hc3QpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgcGF1c2VUb2FzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kRHJhZ0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRyYWdNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EcmFnRW5kKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkRyYWdNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRHJhZ0VuZCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmJpbmREcmFnRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRyYWdFbmQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25EcmFnRW5kKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xuICAgIGlmIChkcmFnLmNhbkRyYWcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciB0b2FzdCA9IHRvYXN0UmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoaXNSdW5uaW5nKSBwYXVzZVRvYXN0KCk7XG4gICAgICBkcmFnLnggPSBnZXRYKGUpO1xuICAgICAgZHJhZy55ID0gZ2V0WShlKTtcblxuICAgICAgaWYgKHByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiA9PT0gXCJ4XCJcbiAgICAgIC8qIFggKi9cbiAgICAgICkge1xuICAgICAgICAgIGRyYWcuZGVsdGEgPSBkcmFnLnggLSBkcmFnLnN0YXJ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnLmRlbHRhID0gZHJhZy55IC0gZHJhZy5zdGFydDtcbiAgICAgIH0gLy8gcHJldmVudCBmYWxzZSBwb3NpdGlmIGR1cmluZyBhIHRvYXN0IGNsaWNrXG5cblxuICAgICAgaWYgKGRyYWcuc3RhcnQgIT09IGRyYWcueCkgZHJhZy5jYW5DbG9zZU9uQ2xpY2sgPSBmYWxzZTtcbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlXCIgKyBwcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24gKyBcIihcIiArIGRyYWcuZGVsdGEgKyBcInB4KVwiO1xuICAgICAgdG9hc3Quc3R5bGUub3BhY2l0eSA9IFwiXCIgKyAoMSAtIE1hdGguYWJzKGRyYWcuZGVsdGEgLyBkcmFnLnJlbW92YWxEaXN0YW5jZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ0VuZCgpIHtcbiAgICB2YXIgdG9hc3QgPSB0b2FzdFJlZi5jdXJyZW50O1xuXG4gICAgaWYgKGRyYWcuY2FuRHJhZykge1xuICAgICAgZHJhZy5jYW5EcmFnID0gZmFsc2U7XG5cbiAgICAgIGlmIChNYXRoLmFicyhkcmFnLmRlbHRhKSA+IGRyYWcucmVtb3ZhbERpc3RhbmNlKSB7XG4gICAgICAgIHNldFByZXZlbnRFeGl0VHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgcHJvcHMuY2xvc2VUb2FzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycyc7XG4gICAgICB0b2FzdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVwiICsgcHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uICsgXCIoMClcIjtcbiAgICAgIHRvYXN0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICB9XG5cbiAgdmFyIGV2ZW50SGFuZGxlcnMgPSB7XG4gICAgb25Nb3VzZURvd246IG9uRHJhZ1N0YXJ0LFxuICAgIG9uVG91Y2hTdGFydDogb25EcmFnU3RhcnQsXG4gICAgb25Nb3VzZVVwOiBvbkRyYWdUcmFuc2l0aW9uRW5kLFxuICAgIG9uVG91Y2hFbmQ6IG9uRHJhZ1RyYW5zaXRpb25FbmRcbiAgfTtcblxuICBpZiAoYXV0b0Nsb3NlICYmIHBhdXNlT25Ib3Zlcikge1xuICAgIGV2ZW50SGFuZGxlcnMub25Nb3VzZUVudGVyID0gcGF1c2VUb2FzdDtcbiAgICBldmVudEhhbmRsZXJzLm9uTW91c2VMZWF2ZSA9IHBsYXlUb2FzdDtcbiAgfSAvLyBwcmV2ZW50IHRvYXN0IGZyb20gY2xvc2luZyB3aGVuIHVzZXIgZHJhZ3MgdGhlIHRvYXN0XG5cblxuICBpZiAoY2xvc2VPbkNsaWNrKSB7XG4gICAgZXZlbnRIYW5kbGVycy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKTtcbiAgICAgIGRyYWcuY2FuQ2xvc2VPbkNsaWNrICYmIGNsb3NlVG9hc3QoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5VG9hc3Q6IHBsYXlUb2FzdCxcbiAgICBwYXVzZVRvYXN0OiBwYXVzZVRvYXN0LFxuICAgIGlzUnVubmluZzogaXNSdW5uaW5nLFxuICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbjogcHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgIHRvYXN0UmVmOiB0b2FzdFJlZixcbiAgICBldmVudEhhbmRsZXJzOiBldmVudEhhbmRsZXJzXG4gIH07XG59XG5cbmZ1bmN0aW9uIENsb3NlQnV0dG9uKF9yZWYpIHtcbiAgdmFyIGNsb3NlVG9hc3QgPSBfcmVmLmNsb3NlVG9hc3QsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgX3JlZiRhcmlhTGFiZWwgPSBfcmVmLmFyaWFMYWJlbCxcbiAgICAgIGFyaWFMYWJlbCA9IF9yZWYkYXJpYUxhYmVsID09PSB2b2lkIDAgPyAnY2xvc2UnIDogX3JlZiRhcmlhTGFiZWw7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX19jbG9zZS1idXR0b24gXCIgKyBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fY2xvc2UtYnV0dG9uLS1cIiArIHR5cGUsXG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjbG9zZVRvYXN0KGUpO1xuICAgIH0sXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFxuICB9LCBjcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE0IDE2XCJcbiAgfSwgY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk03LjcxIDguMjNsMy43NSAzLjc1LTEuNDggMS40OC0zLjc1LTMuNzUtMy43NSAzLjc1TDEgMTEuOThsMy43NS0zLjc1TDEgNC40OCAyLjQ4IDNsMy43NSAzLjc1TDkuOTggM2wxLjQ4IDEuNDgtMy43NSAzLjc1elwiXG4gIH0pKSk7XG59XG5cbmZ1bmN0aW9uIFByb2dyZXNzQmFyKF9yZWYpIHtcbiAgdmFyIF9jeCwgX2FuaW1hdGlvbkV2ZW50O1xuXG4gIHZhciBkZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICBpc1J1bm5pbmcgPSBfcmVmLmlzUnVubmluZyxcbiAgICAgIGNsb3NlVG9hc3QgPSBfcmVmLmNsb3NlVG9hc3QsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgaGlkZSA9IF9yZWYuaGlkZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdXNlclN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNvbnRyb2xsZWRQcm9ncmVzcyA9IF9yZWYuY29udHJvbGxlZFByb2dyZXNzLFxuICAgICAgcHJvZ3Jlc3MgPSBfcmVmLnByb2dyZXNzLFxuICAgICAgcnRsID0gX3JlZi5ydGwsXG4gICAgICBpc0luID0gX3JlZi5pc0luO1xuXG4gIHZhciBzdHlsZSA9IF9leHRlbmRzKHt9LCB1c2VyU3R5bGUsIHtcbiAgICBhbmltYXRpb25EdXJhdGlvbjogZGVsYXkgKyBcIm1zXCIsXG4gICAgYW5pbWF0aW9uUGxheVN0YXRlOiBpc1J1bm5pbmcgPyAncnVubmluZycgOiAncGF1c2VkJyxcbiAgICBvcGFjaXR5OiBoaWRlID8gMCA6IDFcbiAgfSk7XG5cbiAgaWYgKGNvbnRyb2xsZWRQcm9ncmVzcykgc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZVgoXCIgKyBwcm9ncmVzcyArIFwiKVwiO1xuICB2YXIgZGVmYXVsdENsYXNzTmFtZSA9IGN4KFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhclwiLCBjb250cm9sbGVkUHJvZ3Jlc3MgPyBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItLWNvbnRyb2xsZWRcIiA6IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tYW5pbWF0ZWRcIiwgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyLS1cIiArIHR5cGUsIChfY3ggPSB7fSwgX2N4W1wiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tcnRsXCJdID0gcnRsLCBfY3gpKTtcbiAgdmFyIGNsYXNzTmFtZXMgPSBpc0ZuKGNsYXNzTmFtZSkgPyBjbGFzc05hbWUoe1xuICAgIHJ0bDogcnRsLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgZGVmYXVsdENsYXNzTmFtZTogZGVmYXVsdENsYXNzTmFtZVxuICB9KSA6IGN4KGRlZmF1bHRDbGFzc05hbWUsIGNsYXNzTmFtZSk7IC8vIPCfp5AgY29udHJvbGxlZFByb2dyZXNzIGlzIGRlcml2ZWQgZnJvbSBwcm9ncmVzc1xuICAvLyBzbyBpZiBjb250cm9sbGVkUHJvZ3Jlc3MgaXMgc2V0XG4gIC8vIGl0IG1lYW5zIHRoYXQgdGhpcyBpcyBhbHNvIHRoZSBjYXNlIGZvciBwcm9ncmVzc1xuXG4gIHZhciBhbmltYXRpb25FdmVudCA9IChfYW5pbWF0aW9uRXZlbnQgPSB7fSwgX2FuaW1hdGlvbkV2ZW50W2NvbnRyb2xsZWRQcm9ncmVzcyAmJiBwcm9ncmVzcyA+PSAxID8gJ29uVHJhbnNpdGlvbkVuZCcgOiAnb25BbmltYXRpb25FbmQnXSA9IGNvbnRyb2xsZWRQcm9ncmVzcyAmJiBwcm9ncmVzcyA8IDEgPyBudWxsIDogZnVuY3Rpb24gKCkge1xuICAgIGlzSW4gJiYgY2xvc2VUb2FzdCgpO1xuICB9LCBfYW5pbWF0aW9uRXZlbnQpOyAvLyBUT0RPOiBhZGQgYXJpYS12YWx1ZW5vdywgYXJpYS12YWx1ZW1heCwgYXJpYS12YWx1ZW1pblxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGFuaW1hdGlvbkV2ZW50KSk7XG59XG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFRZUEUuREVGQVVMVCxcbiAgaGlkZTogZmFsc2Vcbn07XG5cbnZhciBUb2FzdCA9IGZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBfY3g7XG5cbiAgdmFyIF91c2VUb2FzdCA9IHVzZVRvYXN0KHByb3BzKSxcbiAgICAgIGlzUnVubmluZyA9IF91c2VUb2FzdC5pc1J1bm5pbmcsXG4gICAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfdXNlVG9hc3QucHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgICAgdG9hc3RSZWYgPSBfdXNlVG9hc3QudG9hc3RSZWYsXG4gICAgICBldmVudEhhbmRsZXJzID0gX3VzZVRvYXN0LmV2ZW50SGFuZGxlcnM7XG5cbiAgdmFyIGNsb3NlQnV0dG9uID0gcHJvcHMuY2xvc2VCdXR0b24sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYXV0b0Nsb3NlID0gcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGhpZGVQcm9ncmVzc0JhciA9IHByb3BzLmhpZGVQcm9ncmVzc0JhcixcbiAgICAgIGNsb3NlVG9hc3QgPSBwcm9wcy5jbG9zZVRvYXN0LFxuICAgICAgVHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBwb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGJvZHlDbGFzc05hbWUgPSBwcm9wcy5ib2R5Q2xhc3NOYW1lLFxuICAgICAgYm9keVN0eWxlID0gcHJvcHMuYm9keVN0eWxlLFxuICAgICAgcHJvZ3Jlc3NDbGFzc05hbWUgPSBwcm9wcy5wcm9ncmVzc0NsYXNzTmFtZSxcbiAgICAgIHByb2dyZXNzU3R5bGUgPSBwcm9wcy5wcm9ncmVzc1N0eWxlLFxuICAgICAgdXBkYXRlSWQgPSBwcm9wcy51cGRhdGVJZCxcbiAgICAgIHJvbGUgPSBwcm9wcy5yb2xlLFxuICAgICAgcHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcyxcbiAgICAgIHJ0bCA9IHByb3BzLnJ0bCxcbiAgICAgIHRvYXN0SWQgPSBwcm9wcy50b2FzdElkLFxuICAgICAgZGVsZXRlVG9hc3QgPSBwcm9wcy5kZWxldGVUb2FzdCxcbiAgICAgIGlzSW4gPSBwcm9wcy5pc0luO1xuICB2YXIgZGVmYXVsdENsYXNzTmFtZSA9IGN4KFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0XCIsIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0LS1cIiArIHR5cGUsIChfY3ggPSB7fSwgX2N4W1wiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0LS1ydGxcIl0gPSBydGwsIF9jeCkpO1xuICB2YXIgY3NzQ2xhc3NlcyA9IGlzRm4oY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSh7XG4gICAgcnRsOiBydGwsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgZGVmYXVsdENsYXNzTmFtZTogZGVmYXVsdENsYXNzTmFtZVxuICB9KSA6IGN4KGRlZmF1bHRDbGFzc05hbWUsIGNsYXNzTmFtZSk7XG4gIHZhciBpc1Byb2dyZXNzQ29udHJvbGxlZCA9ICEhcHJvZ3Jlc3M7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdXR0b24oY2xvc2VCdXR0b24pIHtcbiAgICBpZiAoIWNsb3NlQnV0dG9uKSByZXR1cm47XG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9O1xuICAgIGlmIChpc0ZuKGNsb3NlQnV0dG9uKSkgcmV0dXJuIGNsb3NlQnV0dG9uKHByb3BzKTtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2xvc2VCdXR0b24pKSByZXR1cm4gY2xvbmVFbGVtZW50KGNsb3NlQnV0dG9uLCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uLCB7XG4gICAgaXNJbjogaXNJbixcbiAgICBkb25lOiBkZWxldGVUb2FzdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgcHJldmVudEV4aXRUcmFuc2l0aW9uOiBwcmV2ZW50RXhpdFRyYW5zaXRpb24sXG4gICAgbm9kZVJlZjogdG9hc3RSZWZcbiAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBpZDogdG9hc3RJZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIGNsYXNzTmFtZTogY3NzQ2xhc3Nlc1xuICB9LCBldmVudEhhbmRsZXJzLCB7XG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHJlZjogdG9hc3RSZWZcbiAgfSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgaXNJbiAmJiB7XG4gICAgcm9sZTogcm9sZVxuICB9LCB7XG4gICAgY2xhc3NOYW1lOiBpc0ZuKGJvZHlDbGFzc05hbWUpID8gYm9keUNsYXNzTmFtZSh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSkgOiBjeChcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtYm9keVwiLCBib2R5Q2xhc3NOYW1lKSxcbiAgICBzdHlsZTogYm9keVN0eWxlXG4gIH0pLCBjaGlsZHJlbiksIHJlbmRlckNsb3NlQnV0dG9uKGNsb3NlQnV0dG9uKSwgKGF1dG9DbG9zZSB8fCBpc1Byb2dyZXNzQ29udHJvbGxlZCkgJiYgY3JlYXRlRWxlbWVudChQcm9ncmVzc0JhciwgT2JqZWN0LmFzc2lnbih7fSwgdXBkYXRlSWQgJiYgIWlzUHJvZ3Jlc3NDb250cm9sbGVkID8ge1xuICAgIGtleTogXCJwYi1cIiArIHVwZGF0ZUlkXG4gIH0gOiB7fSwge1xuICAgIHJ0bDogcnRsLFxuICAgIGRlbGF5OiBhdXRvQ2xvc2UsXG4gICAgaXNSdW5uaW5nOiBpc1J1bm5pbmcsXG4gICAgaXNJbjogaXNJbixcbiAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgIGhpZGU6IGhpZGVQcm9ncmVzc0JhcixcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0eWxlOiBwcm9ncmVzc1N0eWxlLFxuICAgIGNsYXNzTmFtZTogcHJvZ3Jlc3NDbGFzc05hbWUsXG4gICAgY29udHJvbGxlZFByb2dyZXNzOiBpc1Byb2dyZXNzQ29udHJvbGxlZCxcbiAgICBwcm9ncmVzczogcHJvZ3Jlc3NcbiAgfSkpKSk7XG59O1xuXG52YXIgQm91bmNlID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX2JvdW5jZS1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fYm91bmNlLWV4aXRcIixcbiAgYXBwZW5kUG9zaXRpb246IHRydWVcbn0pO1xudmFyIFNsaWRlID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3NsaWRlLWVudGVyXCIsXG4gIGV4aXQ6IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCItLWFuaW1hdGUgXCIgKyBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19zbGlkZS1leGl0XCIsXG4gIGFwcGVuZFBvc2l0aW9uOiB0cnVlXG59KTtcbnZhciBab29tID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3pvb20tZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3pvb20tZXhpdFwiXG59KTtcbnZhciBGbGlwID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX2ZsaXAtZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX2ZsaXAtZXhpdFwiXG59KTtcblxudmFyIFRvYXN0Q29udGFpbmVyID0gZnVuY3Rpb24gVG9hc3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIF91c2VUb2FzdENvbnRhaW5lciA9IHVzZVRvYXN0Q29udGFpbmVyKHByb3BzKSxcbiAgICAgIGdldFRvYXN0VG9SZW5kZXIgPSBfdXNlVG9hc3RDb250YWluZXIuZ2V0VG9hc3RUb1JlbmRlcixcbiAgICAgIGNvbnRhaW5lclJlZiA9IF91c2VUb2FzdENvbnRhaW5lci5jb250YWluZXJSZWYsXG4gICAgICBpc1RvYXN0QWN0aXZlID0gX3VzZVRvYXN0Q29udGFpbmVyLmlzVG9hc3RBY3RpdmU7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBydGwgPSBwcm9wcy5ydGwsXG4gICAgICBjb250YWluZXJJZCA9IHByb3BzLmNvbnRhaW5lcklkO1xuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwb3NpdGlvbikge1xuICAgIHZhciBfY3g7XG5cbiAgICB2YXIgZGVmYXVsdENsYXNzTmFtZSA9IGN4KFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX190b2FzdC1jb250YWluZXJcIiwgXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3RvYXN0LWNvbnRhaW5lci0tXCIgKyBwb3NpdGlvbiwgKF9jeCA9IHt9LCBfY3hbXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3RvYXN0LWNvbnRhaW5lci0tcnRsXCJdID0gcnRsLCBfY3gpKTtcbiAgICByZXR1cm4gaXNGbihjbGFzc05hbWUpID8gY2xhc3NOYW1lKHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIHJ0bDogcnRsLFxuICAgICAgZGVmYXVsdENsYXNzTmFtZTogZGVmYXVsdENsYXNzTmFtZVxuICAgIH0pIDogY3goZGVmYXVsdENsYXNzTmFtZSwgcGFyc2VDbGFzc05hbWUoY2xhc3NOYW1lKSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgLFxuICAgIGlkOiBjb250YWluZXJJZFxuICB9LCBnZXRUb2FzdFRvUmVuZGVyKGZ1bmN0aW9uIChwb3NpdGlvbiwgdG9hc3RMaXN0KSB7XG4gICAgdmFyIGNvbnRhaW5lclN0eWxlID0gdG9hc3RMaXN0Lmxlbmd0aCA9PT0gMCA/IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSkgOiBfZXh0ZW5kcyh7fSwgc3R5bGUpO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHBvc2l0aW9uKSxcbiAgICAgIHN0eWxlOiBjb250YWluZXJTdHlsZSxcbiAgICAgIGtleTogXCJjb250YWluZXItXCIgKyBwb3NpdGlvblxuICAgIH0sIHRvYXN0TGlzdC5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjb250ZW50ID0gX3JlZi5jb250ZW50LFxuICAgICAgICAgIHRvYXN0UHJvcHMgPSBfcmVmLnByb3BzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVG9hc3QsIE9iamVjdC5hc3NpZ24oe30sIHRvYXN0UHJvcHMsIHtcbiAgICAgICAgaXNJbjogaXNUb2FzdEFjdGl2ZSh0b2FzdFByb3BzLnRvYXN0SWQpLFxuICAgICAgICBrZXk6IFwidG9hc3QtXCIgKyB0b2FzdFByb3BzLmtleSxcbiAgICAgICAgY2xvc2VCdXR0b246IHRvYXN0UHJvcHMuY2xvc2VCdXR0b24gPT09IHRydWUgPyBDbG9zZUJ1dHRvbiA6IHRvYXN0UHJvcHMuY2xvc2VCdXR0b25cbiAgICAgIH0pLCBjb250ZW50KTtcbiAgICB9KSk7XG4gIH0pKTtcbn07XG5Ub2FzdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiBQT1NJVElPTi5UT1BfUklHSFQsXG4gIHRyYW5zaXRpb246IEJvdW5jZSxcbiAgcnRsOiBmYWxzZSxcbiAgYXV0b0Nsb3NlOiA1MDAwLFxuICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICBjbG9zZUJ1dHRvbjogQ2xvc2VCdXR0b24sXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgcGF1c2VPbkZvY3VzTG9zczogdHJ1ZSxcbiAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICBuZXdlc3RPblRvcDogZmFsc2UsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgZHJhZ2dhYmxlUGVyY2VudDogODBcbiAgLyogRFJBR0dBQkxFX1BFUkNFTlQgKi9cbiAgLFxuICBkcmFnZ2FibGVEaXJlY3Rpb246IFwieFwiXG4gIC8qIFggKi9cbiAgLFxuICByb2xlOiAnYWxlcnQnXG59O1xuXG52YXIgY29udGFpbmVycyA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG52YXIgbGF0ZXN0SW5zdGFuY2U7XG52YXIgY29udGFpbmVyRG9tTm9kZTtcbnZhciBjb250YWluZXJDb25maWc7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXp5ID0gZmFsc2U7XG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhbnkgY29udGFpbmVyIGlzIGN1cnJlbnRseSBtb3VudGVkIGluIHRoZSBET01cclxuICovXG5cbmZ1bmN0aW9uIGlzQW55Q29udGFpbmVyTW91bnRlZCgpIHtcbiAgcmV0dXJuIGNvbnRhaW5lcnMuc2l6ZSA+IDA7XG59XG4vKipcclxuICogR2V0IHRoZSB0b2FzdCBieSBpZCwgZ2l2ZW4gaXQncyBpbiB0aGUgRE9NLCBvdGhlcndpc2UgcmV0dXJucyBudWxsXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRvYXN0KHRvYXN0SWQsIF9yZWYpIHtcbiAgdmFyIGNvbnRhaW5lcklkID0gX3JlZi5jb250YWluZXJJZDtcbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lcnMuZ2V0KGNvbnRhaW5lcklkIHx8IGxhdGVzdEluc3RhbmNlKTtcbiAgaWYgKCFjb250YWluZXIpIHJldHVybiBudWxsO1xuICByZXR1cm4gY29udGFpbmVyLmdldFRvYXN0KHRvYXN0SWQpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2FzdElkKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgdG9hc3RJZCBvciB1c2UgdGhlIG9uZSBwcm92aWRlZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2FzdElkKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgKGlzU3RyKG9wdGlvbnMudG9hc3RJZCkgfHwgaXNOdW0ob3B0aW9ucy50b2FzdElkKSkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy50b2FzdElkO1xuICB9XG5cbiAgcmV0dXJuIGdlbmVyYXRlVG9hc3RJZCgpO1xufVxuLyoqXHJcbiAqIElmIHRoZSBjb250YWluZXIgaXMgbm90IG1vdW50ZWQsIHRoZSB0b2FzdCBpcyBlbnF1ZXVlZCBhbmRcclxuICogdGhlIGNvbnRhaW5lciBsYXp5IG1vdW50ZWRcclxuICovXG5cblxuZnVuY3Rpb24gZGlzcGF0Y2hUb2FzdChjb250ZW50LCBvcHRpb25zKSB7XG4gIGlmIChpc0FueUNvbnRhaW5lck1vdW50ZWQoKSkge1xuICAgIGV2ZW50TWFuYWdlci5lbWl0KDBcbiAgICAvKiBTaG93ICovXG4gICAgLCBjb250ZW50LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG5cbiAgICBpZiAobGF6eSAmJiBjYW5Vc2VEb20pIHtcbiAgICAgIGxhenkgPSBmYWxzZTtcbiAgICAgIGNvbnRhaW5lckRvbU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRG9tTm9kZSk7XG4gICAgICByZW5kZXIoY3JlYXRlRWxlbWVudChUb2FzdENvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyQ29uZmlnKSksIGNvbnRhaW5lckRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLnRvYXN0SWQ7XG59XG4vKipcclxuICogTWVyZ2UgcHJvdmlkZWQgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0cyBzZXR0aW5ncyBhbmQgZ2VuZXJhdGUgdGhlIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKHR5cGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgdHlwZTogb3B0aW9ucyAmJiBvcHRpb25zLnR5cGUgfHwgdHlwZSxcbiAgICB0b2FzdElkOiBnZXRUb2FzdElkKG9wdGlvbnMpXG4gIH0pO1xufVxuXG52YXIgY3JlYXRlVG9hc3RCeVR5cGUgPSBmdW5jdGlvbiBjcmVhdGVUb2FzdEJ5VHlwZSh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucykge1xuICAgIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyh0eXBlLCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG52YXIgdG9hc3QgPSBmdW5jdGlvbiB0b2FzdChjb250ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyhUWVBFLkRFRkFVTFQsIG9wdGlvbnMpKTtcbn07XG5cbnRvYXN0LnN1Y2Nlc3MgPSAvKiNfX1BVUkVfXyovY3JlYXRlVG9hc3RCeVR5cGUoVFlQRS5TVUNDRVNTKTtcbnRvYXN0LmluZm8gPSAvKiNfX1BVUkVfXyovY3JlYXRlVG9hc3RCeVR5cGUoVFlQRS5JTkZPKTtcbnRvYXN0LmVycm9yID0gLyojX19QVVJFX18qL2NyZWF0ZVRvYXN0QnlUeXBlKFRZUEUuRVJST1IpO1xudG9hc3Qud2FybmluZyA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLldBUk5JTkcpO1xudG9hc3QuZGFyayA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLkRBUkspO1xudG9hc3Qud2FybiA9IHRvYXN0Lndhcm5pbmc7XG4vKipcclxuICogUmVtb3ZlIHRvYXN0IHByb2dyYW1tYXRpY2FseVxyXG4gKi9cblxudG9hc3QuZGlzbWlzcyA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZXZlbnRNYW5hZ2VyLmVtaXQoMVxuICAvKiBDbGVhciAqL1xuICAsIGlkKTtcbn07XG4vKipcclxuICogQ2xlYXIgd2FpdGluZyBxdWV1ZSB3aGVuIGxpbWl0IGlzIHVzZWRcclxuICovXG5cblxudG9hc3QuY2xlYXJXYWl0aW5nUXVldWUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmFtcyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TWFuYWdlci5lbWl0KDVcbiAgLyogQ2xlYXJXYWl0aW5nUXVldWUgKi9cbiAgLCBwYXJhbXMpO1xufTtcbi8qKlxyXG4gKiByZXR1cm4gdHJ1ZSBpZiBvbmUgY29udGFpbmVyIGlzIGRpc3BsYXlpbmcgdGhlIHRvYXN0XHJcbiAqL1xuXG5cbnRvYXN0LmlzQWN0aXZlID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBpc1RvYXN0QWN0aXZlID0gZmFsc2U7XG4gIGNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lci5pc1RvYXN0QWN0aXZlICYmIGNvbnRhaW5lci5pc1RvYXN0QWN0aXZlKGlkKSkge1xuICAgICAgaXNUb2FzdEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGlzVG9hc3RBY3RpdmU7XG59O1xuXG50b2FzdC51cGRhdGUgPSBmdW5jdGlvbiAodG9hc3RJZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gaWYgeW91IGNhbGwgdG9hc3QgYW5kIHRvYXN0LnVwZGF0ZSBkaXJlY3RseSBub3RoaW5nIHdpbGwgYmUgZGlzcGxheWVkXG4gIC8vIHRoaXMgaXMgd2h5IEkgZGVmZXJlZCB0aGUgdXBkYXRlXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2FzdCA9IGdldFRvYXN0KHRvYXN0SWQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRvYXN0KSB7XG4gICAgICB2YXIgb2xkT3B0aW9ucyA9IHRvYXN0LnByb3BzLFxuICAgICAgICAgIG9sZENvbnRlbnQgPSB0b2FzdC5jb250ZW50O1xuXG4gICAgICB2YXIgbmV4dE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb2xkT3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgICB0b2FzdElkOiBvcHRpb25zLnRvYXN0SWQgfHwgdG9hc3RJZCxcbiAgICAgICAgdXBkYXRlSWQ6IGdlbmVyYXRlVG9hc3RJZCgpXG4gICAgICB9KTtcblxuICAgICAgaWYgKG5leHRPcHRpb25zLnRvYXN0SWQgIT09IHRvYXN0SWQpIG5leHRPcHRpb25zLnN0YWxlSWQgPSB0b2FzdElkO1xuICAgICAgdmFyIGNvbnRlbnQgPSBuZXh0T3B0aW9ucy5yZW5kZXIgfHwgb2xkQ29udGVudDtcbiAgICAgIGRlbGV0ZSBuZXh0T3B0aW9ucy5yZW5kZXI7XG4gICAgICBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG5leHRPcHRpb25zKTtcbiAgICB9XG4gIH0sIDApO1xufTtcbi8qKlxyXG4gKiBVc2VkIGZvciBjb250cm9sbGVkIHByb2dyZXNzIGJhci5cclxuICovXG5cblxudG9hc3QuZG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICB0b2FzdC51cGRhdGUoaWQsIHtcbiAgICBwcm9ncmVzczogMVxuICB9KTtcbn07XG4vKipcclxuICogVHJhY2sgY2hhbmdlcy4gVGhlIGNhbGxiYWNrIGdldCB0aGUgbnVtYmVyIG9mIHRvYXN0IGRpc3BsYXllZFxyXG4gKlxyXG4gKi9cblxuXG50b2FzdC5vbkNoYW5nZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAoaXNGbihjYWxsYmFjaykpIHtcbiAgICBldmVudE1hbmFnZXIub24oNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpc0ZuKGNhbGxiYWNrKSAmJiBldmVudE1hbmFnZXIub2ZmKDRcbiAgICAvKiBDaGFuZ2UgKi9cbiAgICAsIGNhbGxiYWNrKTtcbiAgfTtcbn07XG4vKipcclxuICogQ29uZmlndXJlIHRoZSBUb2FzdENvbnRhaW5lciB3aGVuIGxhenkgbW91bnRlZFxyXG4gKi9cblxuXG50b2FzdC5jb25maWd1cmUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgIGNvbmZpZyA9IHt9O1xuICB9XG5cbiAgbGF6eSA9IHRydWU7XG4gIGNvbnRhaW5lckNvbmZpZyA9IGNvbmZpZztcbn07XG5cbnRvYXN0LlBPU0lUSU9OID0gUE9TSVRJT047XG50b2FzdC5UWVBFID0gVFlQRTtcbi8qKlxyXG4gKiBXYWl0IHVudGlsIHRoZSBUb2FzdENvbnRhaW5lciBpcyBtb3VudGVkIHRvIGRpc3BhdGNoIHRoZSB0b2FzdFxyXG4gKiBhbmQgYXR0YWNoIGlzQWN0aXZlIG1ldGhvZFxyXG4gKi9cblxuZXZlbnRNYW5hZ2VyLm9uKDJcbi8qIERpZE1vdW50ICovXG4sIGZ1bmN0aW9uIChjb250YWluZXJJbnN0YW5jZSkge1xuICBsYXRlc3RJbnN0YW5jZSA9IGNvbnRhaW5lckluc3RhbmNlLmNvbnRhaW5lcklkIHx8IGNvbnRhaW5lckluc3RhbmNlO1xuICBjb250YWluZXJzLnNldChsYXRlc3RJbnN0YW5jZSwgY29udGFpbmVySW5zdGFuY2UpO1xuICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZXZlbnRNYW5hZ2VyLmVtaXQoMFxuICAgIC8qIFNob3cgKi9cbiAgICAsIGl0ZW0uY29udGVudCwgaXRlbS5vcHRpb25zKTtcbiAgfSk7XG4gIHF1ZXVlID0gW107XG59KS5vbigzXG4vKiBXaWxsVW5tb3VudCAqL1xuLCBmdW5jdGlvbiAoY29udGFpbmVySW5zdGFuY2UpIHtcbiAgY29udGFpbmVyc1tcImRlbGV0ZVwiXShjb250YWluZXJJbnN0YW5jZS5jb250YWluZXJJZCB8fCBjb250YWluZXJJbnN0YW5jZSk7XG5cbiAgaWYgKGNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgIGV2ZW50TWFuYWdlci5vZmYoMFxuICAgIC8qIFNob3cgKi9cbiAgICApLm9mZigxXG4gICAgLyogQ2xlYXIgKi9cbiAgICApLm9mZig1XG4gICAgLyogQ2xlYXJXYWl0aW5nUXVldWUgKi9cbiAgICApO1xuICB9XG5cbiAgaWYgKGNhblVzZURvbSAmJiBjb250YWluZXJEb21Ob2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXJEb21Ob2RlKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IEJvdW5jZSwgRmxpcCwgU2xpZGUsIFRvYXN0Q29udGFpbmVyLCBab29tLCBjb2xsYXBzZVRvYXN0LCBjc3NUcmFuc2l0aW9uLCB0b2FzdCwgdXNlVG9hc3QsIHVzZVRvYXN0Q29udGFpbmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC10b2FzdGlmeS5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9