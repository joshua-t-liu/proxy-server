/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _routes_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);







var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var PORT = 3000;
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('public'));
app.get('/favicon.ico', function (req, res) {
  return res.sendStatus(204);
});
app.get('/:id', function (req, res) {
  var id = req.params.id;
  var requests = _routes_config_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (_ref) {
    var Component = _ref.Component;

    if (Component.fetchData) {
      return Component.fetchData(id);
    } else {
      return new Promise(function (resolve) {
        return resolve();
      });
    }
  });
  Promise.allSettled(requests).then(function (results) {
    return results.map(function (result) {
      if (result.status === 'fulfilled') {
        if (result.value) {
          if (Array.isArray(result.value)) {
            return result.value.map(function (r) {
              return r.value.data;
            });
          } else {
            return result.value.data;
          }
        }

        return result.value || {};
      }

      return {};
    });
  }).then(function (data) {
    var styles = [];
    var body = [];
    _routes_config_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (_ref2, idx) {
      var Component = _ref2.Component,
          id = _ref2.id,
          router = _ref2.router;
      var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_4__["ServerStyleSheet"]();
      var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(sheet.collectStyles(router ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, {
          homeInit: data[idx],
          pathname: req.url
        })
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, {
        data: data[idx]
      })));
      body.push([html, id]);
      styles.push(sheet.getStyleTags());
    });
    res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["default"])(body, styles, data));
  })["catch"](function (err) {
    return console.error(err);
  });
});
app.listen(PORT, function (err) {
  if (err) throw err;
  console.log('listening on port', PORT);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* harmony default export */ __webpack_exports__["default"] = (function (components, styles, data) {
  return "<!DOCTYPE html>\n  <html>\n    <head>\n    <script src='/ssr_bundle.js' defer></script>\n    <script>window.__TRULIA_DATA__ = ".concat(JSON.stringify(data), "</script>\n    ").concat(styles.join(''), "\n    </head>\n    <body>\n      ").concat(components.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        component = _ref2[0],
        id = _ref2[1];

    return "<div id=".concat(id, ">").concat(component, "</div>");
  }).join(''), "\n    </body>\n  </html>");
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mortgage_calculator_jsx_MortgageCalculator_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _comment_section_client_src_components_App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _similar_homes_client_src_components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _image_gallery_client_src_components_App_App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);




/* harmony default export */ __webpack_exports__["default"] = ([{
  Component: _image_gallery_client_src_components_App_App_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
  id: 'image-gallery',
  router: true
}, {
  Component: _similar_homes_client_src_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  id: 'similar-homes'
}, {
  Component: _comment_section_client_src_components_App_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  id: 'comment-section'
}, {
  Component: _mortgage_calculator_jsx_MortgageCalculator_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  id: 'mortgage-calculator'
}]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MortgageCalculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _Figure_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _Table_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _Form_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _db_dummyData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _db_dummyData_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_db_dummyData_js__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var MortgageCalculator = /*#__PURE__*/function (_React$Component) {
  _inherits(MortgageCalculator, _React$Component);

  var _super = _createSuper(MortgageCalculator);

  function MortgageCalculator(props) {
    var _this;

    _classCallCheck(this, MortgageCalculator);

    _this = _super.call(this, props);
    _this.handlePriceText = _this.handlePriceText.bind(_assertThisInitialized(_this));
    _this.handlePriceRange = _this.handlePriceRange.bind(_assertThisInitialized(_this));
    _this.handleDownPaymentText = _this.handleDownPaymentText.bind(_assertThisInitialized(_this));
    _this.handleDownPaymentPercent = _this.handleDownPaymentPercent.bind(_assertThisInitialized(_this));
    _this.handleDownPaymentRange = _this.handleDownPaymentRange.bind(_assertThisInitialized(_this));
    _this.handleInterestRate = _this.handleInterestRate.bind(_assertThisInitialized(_this));
    _this.handleLoanType = _this.handleLoanType.bind(_assertThisInitialized(_this));

    var setState = _this.setState.bind(_assertThisInitialized(_this));

    if (!props.id) {
      _this.state = _db_dummyData_js__WEBPACK_IMPORTED_MODULE_7___default.a;
    } else {
      fetch('/home/' + props.id).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data[0];
      }).then(function (_ref) {
        var price = _ref.price,
            hoaFees = _ref.hoaFees,
            zipCode = _ref.zipCode;
        var home = {
          zipCode: zipCode,
          homePrice: price,
          hoa: hoaFees,
          downPaymentPercent: 20,
          propertyTaxRate: .0067,
          homeInsurance: 75,
          mortgageInsurance: 0
        };
        home.downPayment = price * home.downPaymentPercent / 100;
        home.propertyTaxes = price * home.propertyTaxRate / 12;
        return home;
      }).then(function (home) {
        return fetch('/rate/' + home.zipCode).then(function (response) {
          return response.json();
        }).then(function (data) {
          return data[0].rates;
        }).then(function (rates) {
          home.rates = rates;
          home.loanType = rates[0].rateType;
          home.loanDuration = _this.getDuration(home.loanType);
          home.interestRate = _this.formatPercent(rates[0].rate);
          home.init = true;
          return home;
        }).then(setState);
      });
    }

    return _this;
  }

  _createClass(MortgageCalculator, [{
    key: "calculateMonthlyPayment",
    value: function calculateMonthlyPayment() {
      return this.getElements().reduce(function (a, b) {
        return a + b;
      });
    } //https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula

  }, {
    key: "calculatePrincipalPlus",
    value: function calculatePrincipalPlus() {
      var p = this.state.homePrice - this.state.downPayment;
      var r = this.state.interestRate / 1200;
      var n = this.state.loanDuration * 12;
      return r ? r * p * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) : p / n;
    }
  }, {
    key: "getElements",
    value: function getElements() {
      return [this.calculatePrincipalPlus(), this.state.propertyTaxes, this.state.homeInsurance, this.state.hoa, this.state.mortgageInsurance];
    }
  }, {
    key: "makeTableElements",
    value: function makeTableElements() {
      return this.getElements().map(this.formatCurrency);
    }
  }, {
    key: "makeFigureElements",
    value: function makeFigureElements() {
      var elements = this.getElements();
      var monthlyPayment = this.calculateMonthlyPayment();
      var proportions = elements.map(function (e) {
        return 100 * e / monthlyPayment;
      });
      var complements = proportions.map(function (e) {
        return 100 - e;
      });
      var offsets = complements.map(this.makeOffsets);
      return offsets.map(function (e, i) {
        return {
          value: '' + proportions[i],
          complement: '' + complements[i],
          offset: '' + offsets[i]
        };
      });
    }
  }, {
    key: "makeOffsets",
    value: function makeOffsets(_, i, a) {
      return a.slice(0, i).reduce(function (a, e) {
        return (a + e) % 100;
      }, 25);
    }
  }, {
    key: "formatCurrency",
    value: function formatCurrency(value) {
      return '$' + Math.round(value).toLocaleString();
    }
  }, {
    key: "formatPercent",
    value: function formatPercent(value) {
      return Math.round(value * 100) / 100;
    }
  }, {
    key: "parseCurrency",
    value: function parseCurrency(string) {
      return +string.match(/[0-9]/g).join('');
    }
  }, {
    key: "setHomePrice",
    value: function setHomePrice(homePrice) {
      var downPayment = Math.round(homePrice * this.state.downPaymentPercent / 100);
      var propertyTaxes = this.state.propertyTaxRate * homePrice / 12;
      this.setState({
        propertyTaxes: propertyTaxes,
        homePrice: homePrice,
        downPayment: downPayment
      });
    }
  }, {
    key: "handlePriceText",
    value: function handlePriceText(event) {
      var homePrice = this.parseCurrency(event.target.value);
      this.setHomePrice(homePrice);
    }
  }, {
    key: "handlePriceRange",
    value: function handlePriceRange(event) {
      var homePrice = +event.target.value;
      this.setHomePrice(homePrice);
    }
  }, {
    key: "setDownPayment",
    value: function setDownPayment(downPayment, downPaymentPercent) {
      this.setState({
        downPayment: downPayment,
        downPaymentPercent: downPaymentPercent
      });
    }
  }, {
    key: "handleDownPaymentText",
    value: function handleDownPaymentText(event) {
      var downPayment = Math.round(this.parseCurrency(event.target.value));
      var downPaymentPercent = Math.round(100 * downPayment / this.state.homePrice);
      this.setDownPayment(downPayment, downPaymentPercent);
    }
  }, {
    key: "handleDownPaymentPercent",
    value: function handleDownPaymentPercent(event) {
      var downPaymentPercent = +event.target.value.match(/[0-9]/g).join('');
      var downPayment = Math.round(this.state.homePrice * downPaymentPercent / 100);
      this.setDownPayment(downPayment, downPaymentPercent);
    }
  }, {
    key: "handleDownPaymentRange",
    value: function handleDownPaymentRange(event) {
      var downPaymentPercent = +event.target.value;
      var downPayment = Math.round(this.state.homePrice * downPaymentPercent / 100);
      this.setDownPayment(downPayment, downPaymentPercent);
    }
  }, {
    key: "handleInterestRate",
    value: function handleInterestRate(event) {
      var interestRate = this.formatPercent(parseFloat(event.target.value)) || 0;
      this.setState({
        interestRate: interestRate
      });
    }
  }, {
    key: "getDuration",
    value: function getDuration(loanType) {
      return +loanType.match(/([0-9]{2})-year/)[1];
    }
  }, {
    key: "handleLoanType",
    value: function handleLoanType(event) {
      var loanType = event.target.value;
      var loanDuration = this.getDuration(loanType);
      var interestRateRaw = this.state.rates.find(function (rate) {
        return rate.rateType === loanType;
      }).rate;
      var interestRate = this.formatPercent(interestRateRaw);
      this.setState({
        loanType: loanType,
        loanDuration: loanDuration,
        interestRate: interestRate
      });
    }
  }, {
    key: "render",
    value: function render() {
      var monthlyPayment = this.calculateMonthlyPayment();
      return !this.state ? 'Loading...' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        role: "application"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        monthlyPayment: this.formatCurrency(monthlyPayment)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        handlers: {
          priceText: this.handlePriceText,
          priceRange: this.handlePriceRange,
          downPaymentText: this.handleDownPaymentText,
          downPaymentPercent: this.handleDownPaymentPercent,
          downPaymentRange: this.handleDownPaymentRange,
          interestRate: this.handleInterestRate,
          loanType: this.handleLoanType
        },
        values: {
          homePrice: this.state.homePrice,
          downPayment: this.state.downPayment,
          downPaymentPercent: this.state.downPaymentPercent,
          interestRate: this.state.interestRate
        },
        format: this.formatCurrency
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        elements: this.makeTableElements()
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Figure_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        elements: this.makeFigureElements(),
        monthlyPayment: this.formatCurrency(monthlyPayment)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return MortgageCalculator;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "MortgageCalculator__Section",
  componentId: "sc-13mu8gr-0"
})(["width:880px;color:#222;font-family:sans-serif;font-size:small;margin:auto;"]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var monthlyPayment = _ref.monthlyPayment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3, null, "Affordability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, null, "Calculate your monthly mortgage payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H5, null, "Your est. payment:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("output", {
    name: "monthlyPayment"
  }, monthlyPayment), "/month"));
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header",
  componentId: "p8nkfj-0"
})(["padding:13px;"]);
var H3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Header__H3",
  componentId: "p8nkfj-1"
})(["font-weight:500;"]);
var H4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "Header__H4",
  componentId: "p8nkfj-2"
})(["font-weight:300;"]);
var H5 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5.withConfig({
  displayName: "Header__H5",
  componentId: "p8nkfj-3"
})(["font-weight:100;margin-top:-12px;margin-bottom:-5px;"]);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var zipCode = _ref.zipCode;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    type: "button"
  }, "Get Pre-Qualified"), "or", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Small, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
    href: "/rate/" + zipCode
  }, "See today's mortgage rates")));
});
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer",
  componentId: "sc-1sbt75y-0"
})(["position:relative;float:right;top:-164px;right:29%;text-align:center;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Footer__Button",
  componentId: "sc-1sbt75y-1"
})(["cursor:pointer;display:inline-block;font-weight:bold;white-space:nowrap;font-size:16px;line-height:1.5;width:100%;color:rgb(255,255,255);background-color:rgb(0,120,130);margin:0px;border-radius:8px;border-width:1px;border-style:solid;transition:top 0.1s ease 0s,box-shadow 0.1s ease 0s,border-color 0.1s ease 0s,background-color 0.1s ease 0s,color 0.1s ease 0s;padding:8px 16px;border-color:transparent;&:hover{background-color:rgb(255,255,255);color:rgb(0,120,130);border-color:rgb(0,120,130);}"]);
var Small = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.small.withConfig({
  displayName: "Footer__Small",
  componentId: "sc-1sbt75y-2"
})(["width:100%;display:inline-block;"]);
var A = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Footer__A",
  componentId: "sc-1sbt75y-3"
})(["color:rgb(0,120,130);text-decoration:none;"]);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var elements = _ref.elements,
      monthlyPayment = _ref.monthlyPayment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, {
    viewBox: "0 0 36 36"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "12",
    fill: "#fff",
    role: "presentation"
  }), elements && elements.map(function (e, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
      color: i,
      key: i,
      cx: "18",
      cy: "18",
      r: "16",
      fill: "transparent",
      strokeWidth: "3.8",
      strokeDasharray: e.value + ' ' + e.complement,
      strokeDashoffset: e.offset
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figcaption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Output, {
    name: "MonthlyPayment"
  }, monthlyPayment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, null, "/month")));
});
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figure.withConfig({
  displayName: "Figure",
  componentId: "xq071-0"
})(["width:200px;"]);
var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "Figure__Svg",
  componentId: "xq071-1"
})(["position:relative;top:8px;"]);
var colors = ["rgb(5, 34, 134)", "rgb(0, 173, 187)", "rgb(194, 213, 0)", "rgb(250, 140, 104)", "rgb(206, 182, 255)"];
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.circle.withConfig({
  displayName: "Figure__Circle",
  componentId: "xq071-2"
})(["stroke:", ""], function (props) {
  return colors[props.color];
});
var Figcaption = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figcaption.withConfig({
  displayName: "Figure__Figcaption",
  componentId: "xq071-3"
})(["position:relative;top:-140;left:83;"]);
var Output = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.output.withConfig({
  displayName: "Figure__Output",
  componentId: "xq071-4"
})(["font-family:monospace;font-size:xxx-large;position:relative;right:53px;"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Figure__P",
  componentId: "xq071-5"
})(["position:relative;top:-10px;"]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var labels = ["Principal & Interest", "Property Taxes", "Home Insurance", "HOA", "Mortgage ins. & other"];
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var elements = _ref.elements;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Thead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Legend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, elements && elements.map(function (e, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Td, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
      color: i
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Td, null, labels[i]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Td, null, e));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tfoot, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("output", {
    name: "totalMonthlyAmount"
  })))));
});
var Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table.withConfig({
  displayName: "Table",
  componentId: "sc-109fdci-0"
})(["font-size:inherit;color:#333;position:relative;top:-36px;float:right;width:66%;margin-top:50px;"]);
var Thead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.thead.withConfig({
  displayName: "Table__Thead",
  componentId: "sc-109fdci-1"
})(["display:none;"]);
var Tfoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tfoot.withConfig({
  displayName: "Table__Tfoot",
  componentId: "sc-109fdci-2"
})(["display:none;"]);
var Td = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.td.withConfig({
  displayName: "Table__Td",
  componentId: "sc-109fdci-3"
})(["&:last-child{text-align:right;}&:first-child{width:20px;}"]);
var colors = ['rgb(5, 34, 134)', 'rgb(0, 173, 187)', 'rgb(194, 213, 0)', 'rgb(250, 140, 104)', 'rgb(206, 182, 255)'];
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Table__Div",
  componentId: "sc-109fdci-4"
})(["border-radius:8px;width:16px;height:16px;background-color:", ";"], function (props) {
  return colors[props.color];
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormPrice_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _FormPayment_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _FormRate_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _FormType_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var handlers = _ref.handlers,
      values = _ref.values,
      format = _ref.format;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormPrice_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    format: format,
    homePrice: values.homePrice,
    textHandler: handlers.priceText,
    rangeHandler: handlers.priceRange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormPayment_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    format: format,
    downPayment: values.downPayment,
    downPaymentPercent: values.downPaymentPercent,
    textHandler: handlers.downPaymentText,
    textHandlerPercent: handlers.downPaymentPercent,
    rangeHandler: handlers.downPaymentRange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormRate_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    interestRate: values.interestRate,
    handleRate: handlers.interestRate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormType_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handler: handlers.loanType
  }));
});
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1g6qw06-0"
})(["border-radius:6px;height:120px;background-color:rgba(0,0,0,.05);padding:9px;"]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var format = _ref.format,
      homePrice = _ref.homePrice,
      textHandler = _ref.textHandler,
      rangeHandler = _ref.rangeHandler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Fieldset"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Legend"], null, "Home Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Home Price", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    type: "text",
    value: format(homePrice),
    onChange: textHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["RangeInput"], {
    type: "range",
    "aria-label": "Home Price",
    step: "10",
    min: "0",
    max: Math.max(1500000, homePrice * 1.25),
    value: homePrice,
    onChange: rangeHandler
  }));
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftInput", function() { return LeftInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightInput", function() { return RightInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeInput", function() { return RangeInput; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.fieldset.withConfig({
  displayName: "FormStyledElements__Fieldset",
  componentId: "sc-13gwohj-0"
})(["border:none;float:left;width:30%;"]);
var Legend = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.legend.withConfig({
  displayName: "FormStyledElements__Legend",
  componentId: "sc-13gwohj-1"
})(["display:none;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "FormStyledElements__Label",
  componentId: "sc-13gwohj-2"
})(["position:relative;top:6px;left:1px;"]);
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "FormStyledElements__TextInput",
  componentId: "sc-13gwohj-3"
})(["float:right;width:30%;border-radius:6px;border:1px solid silver;padding:6px;font-family:sans-serif;font-size:small;color:#222;&:focus{outline:none;box-shadow:rgb(0,120,130) 0px 0px 0px 2px;}"]);
var LeftInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TextInput).withConfig({
  displayName: "FormStyledElements__LeftInput",
  componentId: "sc-13gwohj-4"
})(["border-top-right-radius:0px;border-bottom-right-radius:0px;"]);
var RightInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TextInput).withConfig({
  displayName: "FormStyledElements__RightInput",
  componentId: "sc-13gwohj-5"
})(["border-top-left-radius:0px;border-bottom-left-radius:0px;"]);
var Select = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.select.withConfig({
  displayName: "FormStyledElements__Select",
  componentId: "sc-13gwohj-6"
})(["margin-top:10px;height:25px;display:block;&:focus{outline:none;box-shadow:rgb(0,120,130) 0px 0px 0px 2px;}"]);
var RangeInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "FormStyledElements__RangeInput",
  componentId: "sc-13gwohj-7"
})(["-webkit-appearance:none;height:2px;outline:none;background:linear-gradient( to right,rgb(0,120,130) 0%,rgb(205,209,212) 100% );margin-top:10px;width:100%;"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var format = _ref.format,
      downPayment = _ref.downPayment,
      downPaymentPercent = _ref.downPaymentPercent,
      textHandler = _ref.textHandler,
      textHandlerPercent = _ref.textHandlerPercent,
      rangeHandler = _ref.rangeHandler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Fieldset"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Legend"], null, "Down Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Down Payment", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["RightInput"], {
    type: "text",
    value: format(downPayment),
    onChange: textHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["LeftInput"], {
    type: "text",
    "aria-label": "Down Payment Percentage",
    value: '' + downPaymentPercent + '%',
    onChange: textHandlerPercent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["RangeInput"], {
    type: "range",
    "aria-label": "Down Payment",
    min: "0",
    max: "30",
    step: "1",
    value: downPaymentPercent,
    onChange: rangeHandler
  }));
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var interestRate = _ref.interestRate,
      handleRate = _ref.handleRate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Fieldset"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Legend"], null, "Interest Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Interest Rate", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    type: "text",
    value: '' + interestRate + '%',
    onChange: handleRate
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["RangeInput"], {
    type: "range",
    "aria-label": "Interest Rate",
    min: "0",
    max: "6.5",
    step: "0.1",
    value: interestRate,
    onChange: handleRate
  }));
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var handler = _ref.handler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Fieldset"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Legend"], null, "Loan Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Loan Type", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormStyledElements_jsx__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: handler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("optgroup", {
    label: "Standard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "30-year fixed"
  }, "30-year fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "20-year fixed"
  }, "20-year fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "15-year fixed"
  }, "15-year fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "10-year fixed"
  }, "10-year fixed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("optgroup", {
    label: "FHA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "FHA 30-year fixed"
  }, "FHA 30-year fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "FHA 15-year fixed"
  }, "FHA 15-year fixed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("optgroup", {
    label: "VA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "VA 30-year fixed"
  }, "VA 30-year fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "VA 15-year fixed"
  }, "VA 15-year fixed")))));
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  init: true,
  id: 0,
  zipCode: 12345,
  principal: 212012,
  homePrice: 265015,
  downPayment: 53003,
  downPaymentPercent: 20,
  interestRate: 3.92,
  loanType: '30-year fixed',
  loanDuration: 30,
  monthlyPayment: 2106,
  principalPlusInterest: 1002,
  propertyTaxes: 148,
  propertyTaxRate: .0067,
  homeInsurance: 75,
  hoa: 879,
  mortgageInsurance: 0,
  rates: [{
    '_id': '5eacb07355fec14695a7ee1b',
    'rateType': '30-year fixed',
    'rate': 2.6241629055795475
  }, {
    '_id': '5eacb07355fec14695a7ee1c',
    'rateType': '20-year fixed',
    'rate': 2.5170805748129426
  }, {
    '_id': '5eacb07355fec14695a7ee1d',
    'rateType': '15-year fixed',
    'rate': 2.5819652902530565
  }, {
    '_id': '5eacb07355fec14695a7ee1e',
    'rateType': '10-year fixed',
    'rate': 2.394145607015703
  }, {
    '_id': '5eacb07355fec14695a7ee1f',
    'rateType': 'FHA 30-year fixed',
    'rate': 2.6047485337141323
  }, {
    '_id': '5eacb07355fec14695a7ee20',
    'rateType': 'FHA 15-year fixed',
    'rate': 2.8296213240182855
  }, {
    '_id': '5eacb07355fec14695a7ee21',
    'rateType': 'VA 30-year fixed',
    'rate': 2.0810076640794524
  }, {
    '_id': '5eacb07355fec14695a7ee22',
    'rateType': 'VA 15-year fixed',
    'rate': 2.126239025719446
  }]
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _CommentSection_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var server = 'http://localhost:3003';

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      filter: 'All',
      data: _this.props.data,
      page: 0
    };
    _this.data = _this.props.data;
    _this.getData = _this.getData.bind(_assertThisInitialized(_this));
    _this.changeFilter = _this.changeFilter.bind(_assertThisInitialized(_this));
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_this));
    _this.previousPage = _this.previousPage.bind(_assertThisInitialized(_this));
    _this.changeLike = _this.changeLike.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "componentUnMount",
    value: function componentUnMount() {
      this.getData();
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      if (this.state.filter === '' || this.state.filter === 'All') {
        this.setState({
          data: this.data
        });
      } else {
        this.setState({
          data: this.data.filter(function (object) {
            return object.category === _this2.state.filter;
          })
        });
      } // axios.get('house/comments/2')
      //   .then(
      //     (result)=>{
      //       if (this.state.filter === '' || this.state.filter === 'All') {
      //         this.setState({data: result.data});
      //       } else {
      //         this.setState({data: result.data.filter(object => object.category === this.state.filter)});
      //       }
      //     }
      //   )
      //   .catch((error)=>{
      //     console.error(error);
      //   });

    }
  }, {
    key: "changeLike",
    value: function changeLike(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("".concat(this.sever, "/comments/").concat(id)).then(function () {
        _this3.getData();
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }, {
    key: "changeFilter",
    value: function changeFilter(event) {
      this.setState({
        filter: event,
        page: 0
      });
      this.getData();
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      this.setState({
        page: 1
      });
    }
  }, {
    key: "previousPage",
    value: function previousPage() {
      this.setState({
        page: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var StyledApp = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
        displayName: "App__StyledApp",
        componentId: "sc-1euvx3a-0"
      })(["margin:auto;display:flex;flex-direction:column;width:960px;height:353px;color:", ";"], function (props) {
        return props.empty ? 'rgb(232,233,234)' : 'rgb(0,173,187)';
      });
      var StyledButtonSection = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
        displayName: "App__StyledButtonSection",
        componentId: "sc-1euvx3a-1"
      })(["margin-left:16px;"]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: this.state.filter,
        changeFilter: this.changeFilter
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommentSection_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.data,
        page: this.state.page,
        nextPage: this.nextPage,
        previousPage: this.previousPage,
        filter: this.state.filter,
        changeFilter: this.changeFilter,
        changeLike: this.changeLike
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

App.fetchData = function (id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(server, "/house/comments/").concat(id));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);



var ButtonSection = function ButtonSection(_ref) {
  var filter = _ref.filter,
      changeFilter = _ref.changeFilter;
  var buttonName = ['All', 'Community', 'DogOwners', 'Parents', 'Commute'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonContainer"
  }, buttonName.map(function (button) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: button,
      filter: filter,
      changeFilter: changeFilter
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonSection);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1867yw7-0"
})(["cursor:pointer;display:inline-block;color:", ";text-align:center;font-weight:bold;white-space:nowrap;font-size:16px;line-height:1.5;margin:0px;border:", ";border-radius:8px;background-color:transparent;margin-bottom:16px;letter-spacing:normal;word-spacing:normal;"], function (props) {
  return props.primary ? 'rgb(0, 120, 130)' : 'rgb(59, 65, 68)';
}, function (props) {
  return props.primary ? '1px solid grey' : '1px solid transparent';
});

var Button = function Button(_ref) {
  var name = _ref.name,
      filter = _ref.filter,
      changeFilter = _ref.changeFilter;

  if (name === filter) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
      primary: true,
      onClick: function onClick() {
        return changeFilter(name);
      }
    }, name);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
      onClick: function onClick() {
        return changeFilter(name);
      }
    }, name);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _ShowAll_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);





var StyledCommentSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CommentSection__StyledCommentSection",
  componentId: "cy04ry-0"
})(["display:flex;flex-direction:row;justify-content:space-between;width:960px;height:353px;color:", ";"], function (props) {
  return props.empty ? 'rgb(232,233,234)' : 'rgb(0,173,187)';
});
/* code for alternating colors for comments
rgb(0, 173, 187)
rgb(250, 140, 104)
rgb(206, 182, 255)
rgb(116, 6, 49)
rgb(242, 196, 48)
rgb(5, 34, 134)
rgb(255, 94, 63)
*/

var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "CommentSection__StyledButton",
  componentId: "cy04ry-1"
})(["background-color:transparent;border-color:transparent;"]);
var EmptyComment = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CommentSection__EmptyComment",
  componentId: "cy04ry-2"
})(["background-color:rgb(255,255,255)'"]);

var CommentSection = function CommentSection(_ref) {
  var data = _ref.data,
      page = _ref.page,
      nextPage = _ref.nextPage,
      previousPage = _ref.previousPage,
      filter = _ref.filter,
      changeFilter = _ref.changeFilter,
      changeLike = _ref.changeLike;

  if (page === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
      className: "nextPage",
      onClick: function onClick() {
        return previousPage();
      }
    }, ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[0],
      name: data[0].username,
      comment: data[0].comment,
      likes: data[0].likes,
      changeLike: changeLike,
      id: data[0].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      blue: true,
      data: data[1],
      name: data[1].username,
      comment: data[1].comment,
      likes: data[1].likes,
      changeLike: changeLike,
      id: data[1].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[2],
      name: data[2].username,
      comment: data[2].comment,
      likes: data[2].likes,
      changeLike: changeLike,
      id: data[2].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[3],
      name: data[3].username,
      comment: data[3].comment,
      likes: data[3].likes,
      changeLike: changeLike,
      id: data[3].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
      className: "nextPage",
      onClick: function onClick() {
        return nextPage();
      }
    }, '>'));
  } else {
    if (!data[4]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        className: "previousPage",
        onClick: function onClick() {
          return previousPage();
        }
      }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmptyComment, {
        name: '',
        comment: ''
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmptyComment, {
        name: '',
        comment: ''
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmptyComment, {
        name: '',
        comment: ''
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmptyComment, {
        name: '',
        comment: ''
      }));
    } else if (!data[5]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        className: "previousPage",
        onClick: function onClick() {
          return previousPage();
        }
      }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: data[4],
        name: data[4].username,
        comment: data[4].comment,
        likes: data[4].likes,
        changeLike: changeLike,
        id: data[4].id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        empty: true,
        name: '',
        comment: ''
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        empty: true,
        name: '',
        comment: ''
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        empty: true,
        name: '',
        comment: ''
      }));
    }

    if (!data[6]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        className: "previousPage",
        onClick: function onClick() {
          return previousPage();
        }
      }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: data[4],
        name: data[4].username,
        comment: data[4].comment,
        likes: data[4].likes,
        changeLike: changeLike,
        id: data[4].id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: data[5],
        name: data[5].username,
        comment: data[5].comment,
        likes: data[5].likes,
        changeLike: changeLike,
        id: data[5].id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: '',
        comment: ''
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: '',
        comment: ''
      }));
    }

    if (!data[7]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        className: "previousPage",
        onClick: function onClick() {
          return previousPage();
        }
      }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: data[4],
        name: data[4].username,
        comment: data[4].comment,
        likes: data[4].likes,
        changeLike: changeLike,
        id: data[4].id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: data[5],
        name: data[5].username,
        comment: data[5].comment,
        likes: data[5].likes,
        changeLike: changeLike,
        id: data[5].id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: data[6],
        name: data[6].username,
        comment: data[6].comment,
        likes: data[6].likes,
        changeLike: changeLike,
        id: data[6].id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: '',
        comment: ''
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
      className: "previousPage",
      onClick: function onClick() {
        return previousPage();
      }
    }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[4],
      name: data[4].username,
      comment: data[4].comment,
      likes: data[4].likes,
      changeLike: changeLike,
      id: data[4].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[5],
      name: data[5].username,
      comment: data[5].comment,
      likes: data[5].likes,
      changeLike: changeLike,
      id: data[5].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[6],
      name: data[6].username,
      comment: data[6].comment,
      likes: data[6].likes,
      changeLike: changeLike,
      id: data[6].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data[7],
      name: data[7].username,
      comment: data[7].comment,
      likes: data[7].likes,
      changeLike: changeLike,
      id: data[7].id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      contentStyle: {
        width: '960'
      },
      modal: true,
      closeOnEscape: false,
      trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        className: "showAll",
        onClick: function onClick() {
          return console.log('clicked');
        }
      }, "+".concat(data.length - 8))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      filter: filter,
      changeFilter: changeFilter,
      data: data,
      changeLike: changeLike
    })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CommentSection);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _LikeFlagSection_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





var StyledCommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Comment__StyledCommentContainer",
  componentId: "sc-57k2ki-0"
})(["width:17.65%;color:rgb(255,255,255);cursor:pointer;background-color:", ";border-style:solid;border-image:initial;border-radius:8px;padding:32px;"], function (props) {
  return props.empty ? 'rgb(255,255,255)' : 'rgb(0,173,187)';
});
var StyledEmptyCommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Comment__StyledEmptyCommentContainer",
  componentId: "sc-57k2ki-1"
})(["width:17.5%;color:rgb(255,255,255);cursor:pointer;background-color:rgb(255,255,255)'; border-style: solid; border-image: initial; border-radius: 8px; padding: 32px;"]);
var StyledModalComment = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Comment__StyledModalComment",
  componentId: "sc-57k2ki-2"
})(["width:70%;cursor:pointer;background-color:", ";color:white;border-radius:8px;height:667px;border:0;font-size:20px;line-height:1.2;font-family:sans-serif;font-style:Italic;padding:32px;"], function (props) {
  return props.empty ? 'rgb(255,255,255)' : 'rgb(0,173,187)';
});
var StyledComment = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Comment__StyledComment",
  componentId: "sc-57k2ki-3"
})(["font-size:20px;line-height:1.2;font-family:Arial;font-style:Italic;height:160px;padding:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;"]);
var StyledFade = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Comment__StyledFade",
  componentId: "sc-57k2ki-4"
})(["display:flex;flex-direction:column;position:absolute;width:15%;top:275px;text-align:center;margin:0;padding:20px 0;background-image:linear-gradient(to bottom,transparent,rgb(0,173,187));"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var name = _ref.name,
      comment = _ref.comment,
      data = _ref.data,
      likes = _ref.likes,
      changeLike = _ref.changeLike,
      id = _ref.id;

  if (comment === '') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentContainer, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCommentContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contentStyle: {
      width: '50%',
      margin: 'auto',
      padding: '0px',
      border: '0px',
      background: 'transparent'
    },
    modal: true,
    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      data: data
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledComment, null, "\"".concat(comment, "\"")))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModalComment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    data: data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "commentPopup"
  }, "\"".concat(comment, "\"")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LikeFlagSection_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    likes: likes,
    changeLike: changeLike,
    id: id
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LikeFlagSection_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    likes: likes,
    changeLike: changeLike,
    id: id
  }));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var StyledUser = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "User__StyledUser",
  componentId: "sc-1il3m93-0"
})(["font-family:Arial;display:flex;flex-direction:row;"]);
var StyledCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "User__StyledCircle",
  componentId: "sc-1il3m93-1"
})(["background-color:rgb(255,255,255);color:rgb(134,144,153);width:32px;height:32px;min-width:32px;min-height:32px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-radius:200px;overflow:hidden;box-sizing:border-box;"]);
var StyledAbsolute = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "User__StyledAbsolute",
  componentId: "sc-1il3m93-2"
})(["position:absolute;"]);
var StyledName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "User__StyledName",
  componentId: "sc-1il3m93-3"
})(["flex-direction:column;padding-left:5px;"]);
var StyledUserInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "User__StyledUserInfo",
  componentId: "sc-1il3m93-4"
})(["font-size:12px;flex-direction:column;"]);

var User = function User(_ref) {
  var name = _ref.name,
      data = _ref.data;
  var monthString = '';

  if (data.months < 12) {
    monthString = "".concat(data.months, "mo ago");
  } else {
    monthString = "".concat(Math.floor(data.months / 12), "yr ago");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUser, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCircle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAbsolute, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "svg",
    width: "30",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.598 10.564a4.485 4.485 0 1 0 8.97 0 4.485 4.485 0 0 0-8.97 0zm-2.66 0a7.145 7.145 0 1 1 14.29 0 7.145 7.145 0 0 1-14.29 0zm7.146 7.145c-4.021 0-7.318 3.238-7.318 6.938v.609h14.635v-.609c0-3.7-3.297-6.938-7.317-6.938zm0-2.66c5.424 0 9.977 4.365 9.977 9.598v3.269H6.106v-3.269c0-5.234 4.552-9.598 9.978-9.598z",
    fill: "#869099"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledName, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUserInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.title, " \u2022 ", monthString))));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



var StyledLikeFlagSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LikeFlagSection__StyledLikeFlagSection",
  componentId: "sc-1jwbxyw-0"
})(["display:flex;flex-direction:row;justify-content:space-between;fill:rgb(255,255,255);padding-top:20px;"]);
var StyledLike = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LikeFlagSection__StyledLike",
  componentId: "sc-1jwbxyw-1"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
var StyledFlag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LikeFlagSection__StyledFlag",
  componentId: "sc-1jwbxyw-2"
})(["display:flex;flex-direction:column;background-color:transparent;height:auto;width:auto;overflow:auto;border-radius:8px;margin:48px;color:rgb(59,65,68);padding:32px;font-family:Arial;flex-wrap:wrap;"]);
var StyledFont = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LikeFlagSection__StyledFont",
  componentId: "sc-1jwbxyw-3"
})(["font-family:Arial;flex-wrap:wrap;"]);

var LikeFlagSection = function LikeFlagSection(_ref) {
  var likes = _ref.likes,
      changeLike = _ref.changeLike,
      id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLikeFlagSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLike, {
    onClick: function onClick() {
      return changeLike(id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "17",
    className: "svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.96 29.26c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6zM12.048 9.602a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm7.824 0a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm-11.23 7.174a1.33 1.33 0 0 1 2.66 0 4.658 4.658 0 1 0 9.316 0 1.33 1.33 0 0 1 2.66 0 7.318 7.318 0 0 1-14.636 0z",
    fill: "#ffffff"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, likes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modal: true,
    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFont, null, "Flag"),
    position: "right center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFlag, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFont, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Report this content"), "Please refer to Trulia's Community Guidelines and let us know why you think the content you're reporting may violate these guideline", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "What's wrong with this content?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Inapproriate, offensive or unneighborly   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Not relevant, talks about the wrong neighborhood or a specific property"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Commercial, promotional or spam"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Duplicate content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Cancel")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LikeFlagSection);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * reactjs-popup v1.5.0
 * (c) 2019-present Youssouf EL AZIZI <youssoufelazizi@gmail.com>
 * Released under the MIT License.
 */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
/* Algo to calculate position
  1. center position for popup content : the center of the trigger will be the center of the content content
      so the popup content position will be like this :
      top => the y of the center for the trigger element : trigger.top + trigger.height/2
      left => the x of the center for the trigger element : trigger.left + trigger.width/2

  2. translate position according to the first  position attribute  passed  in the function argument
      for example :
        position = 'left top'
        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2

  3.translate position according to the first  position attribute  passed  in the function argument
    for example :
      position = 'left top'
      the second argument 'top' => translate popup content by + content.height*4/5

  4. check if calculated position is going out of bounds of wrapper box or not. If yes repeat 1-3 for next position enum. By default wrapper box is window element
*/


function getCoordinatesForPosition(triggerBounding, ContentBounding, position, arrow, _ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  var margin = arrow ? 8 : 0;
  var args = position.split(' '); // the step N 1 : center the popup content => ok

  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = '';
  var arrowTop = '0%';
  var arrowLeft = '0%'; // the  step N 2 : => ok

  switch (args[0]) {
    case 'top':
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(45deg)";
      arrowTop = '100%';
      arrowLeft = '50%';
      break;

    case 'bottom':
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(225deg)";
      arrowLeft = '50%';
      break;

    case 'left':
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " rotate(-45deg)";
      arrowLeft = '100%';
      arrowTop = '50%';
      break;

    case 'right':
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "rotate(135deg)";
      arrowTop = '50%';
      break;

    default:
  }

  switch (args[1]) {
    case 'top':
      top = triggerBounding.top;
      arrowTop = "".concat(triggerBounding.height / 2, "px");
      break;

    case 'bottom':
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = "".concat(height - triggerBounding.height / 2, "px");
      break;

    case 'left':
      left = triggerBounding.left;
      arrowLeft = "".concat(triggerBounding.width / 2, "px");
      break;

    case 'right':
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = "".concat(width - triggerBounding.width / 2, "px");
      break;

    default:
  }

  top = args[0] === 'top' ? top - offsetY : top + offsetY;
  left = args[0] === 'left' ? left - offsetX : left + offsetX;
  return {
    top: top,
    left: left,
    transform: transform,
    arrowLeft: arrowLeft,
    arrowTop: arrowTop
  };
}

function calculatePosition(triggerBounding, ContentBounding, positions, arrow, _ref2, wrapperBox) {
  var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
  var bestCoords;
  var i = 0;

  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    });
    var contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height
    };

    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
      i++;
    } else {
      break;
    }
  }

  return bestCoords;
}

var styles = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: '2',
      width: '200px',
      background: "rgb(255, 255, 255)",
      border: "1px solid rgb(187, 187, 187)",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px",
      padding: '5px'
    },
    modal: {
      position: 'relative',
      background: "rgb(255, 255, 255)",
      width: '50%',
      margin: 'auto',
      border: "1px solid rgb(187, 187, 187)",
      padding: '5px'
    }
  },
  popupArrow: {
    height: '10px',
    width: '10px',
    position: 'absolute',
    background: 'rgb(255, 255, 255)',
    transform: 'rotate(45deg)',
    margin: '-5px',
    zIndex: '-1',
    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 1px'
  },
  overlay: {
    tooltip: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    },
    modal: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      background: "rgba(0, 0, 0,0.5)",
      display: 'flex',
      zIndex: '999'
    }
  }
};
var POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom', 'center center'];

var Popup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Popup, _React$PureComponent);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "repositionOnResize", function () {
      _this.setPosition();
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function (e) {
      if (e.key === 'Escape') _this.closePopup();
    });

    _defineProperty(_assertThisInitialized(_this), "lockScroll", function () {
      var lockScroll = _this.props.lockScroll;
      var modal = _this.state.modal;
      if (modal && lockScroll)
        /* eslint-disable-next-line no-undef */
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    });

    _defineProperty(_assertThisInitialized(_this), "resetScroll", function () {
      var lockScroll = _this.props.lockScroll;
      var modal = _this.state.modal;
      if (modal && lockScroll)
        /* eslint-disable-next-line no-undef */
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    });

    _defineProperty(_assertThisInitialized(_this), "togglePopup", function (e) {
      // https://reactjs.org/docs/events.html#event-pooling
      e.persist();
      if (_this.state.isOpen) _this.closePopup(e);else _this.openPopup(e);
    });

    _defineProperty(_assertThisInitialized(_this), "openPopup", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onOpen = _this$props.onOpen;
      var isOpen = _this.state.isOpen;
      if (isOpen || disabled) return;
      onOpen(e);

      _this.setState({
        isOpen: true
      }, function () {
        _this.setPosition();

        _this.lockScroll();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closePopup", function (e) {
      var onClose = _this.props.onClose;
      var isOpen = _this.state.isOpen;
      if (!isOpen) return;
      onClose(e);

      _this.setState({
        isOpen: false
      }, function () {
        _this.resetScroll();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      clearTimeout(_this.timeOut);
      var mouseEnterDelay = _this.props.mouseEnterDelay;
      _this.timeOut = setTimeout(function () {
        return _this.openPopup();
      }, mouseEnterDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      clearTimeout(_this.timeOut);
      var mouseLeaveDelay = _this.props.mouseLeaveDelay;
      _this.timeOut = setTimeout(function () {
        return _this.closePopup();
      }, mouseLeaveDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "getTooltipBoundary", function () {
      var keepTooltipInside = _this.props.keepTooltipInside;
      var boundingBox = {
        top: 0,
        left: 0,

        /* eslint-disable-next-line no-undef */
        width: window.innerWidth,

        /* eslint-disable-next-line no-undef */
        height: window.innerHeight
      };

      if (typeof keepTooltipInside === 'string') {
        /* eslint-disable-next-line no-undef */
        var selector = document.querySelector(keepTooltipInside);

        if (true) {
          if (selector === null) throw new Error("".concat(keepTooltipInside, " selector is not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value"));
        }

        boundingBox = selector.getBoundingClientRect();
      }

      return boundingBox;
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function () {
      var _this$state = _this.state,
          modal = _this$state.modal,
          isOpen = _this$state.isOpen;
      if (modal || !isOpen) return;
      var _this$props2 = _this.props,
          arrow = _this$props2.arrow,
          position = _this$props2.position,
          offsetX = _this$props2.offsetX,
          offsetY = _this$props2.offsetY,
          keepTooltipInside = _this$props2.keepTooltipInside,
          arrowStyle = _this$props2.arrowStyle,
          className = _this$props2.className;

      var helper = _this.HelperEl.getBoundingClientRect();

      var trigger = _this.TriggerEl.getBoundingClientRect();

      var content = _this.ContentEl.getBoundingClientRect();

      var boundingBox = _this.getTooltipBoundary();

      var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

      if (keepTooltipInside || Array.isArray(position)) positions = [].concat(_toConsumableArray(positions), POSITION_TYPES);
      var cords = calculatePosition(trigger, content, positions, arrow, {
        offsetX: offsetX,
        offsetY: offsetY
      }, boundingBox);
      _this.ContentEl.style.top = "".concat(cords.top - helper.top, "px");
      _this.ContentEl.style.left = "".concat(cords.left - helper.left, "px");

      if (arrow) {
        _this.ArrowEl.style.transform = cords.transform;
        _this.ArrowEl.style['-ms-transform'] = cords.transform;
        _this.ArrowEl.style['-webkit-transform'] = cords.transform;
        _this.ArrowEl.style.top = arrowStyle.top || cords.arrowTop;
        _this.ArrowEl.style.left = arrowStyle.left || cords.arrowLeft;

        _this.ArrowEl.classList.add("popup-arrow");

        if (className !== '') {
          _this.ArrowEl.classList.add("".concat(className, "-arrow"));
        }
      }

      if (
      /* eslint-disable-next-line no-undef */
      window.getComputedStyle(_this.TriggerEl, null).getPropertyValue('position') === 'static' ||
      /* eslint-disable-next-line no-undef */
      window.getComputedStyle(_this.TriggerEl, null).getPropertyValue('position') === '') _this.TriggerEl.style.position = 'relative';
    });

    _defineProperty(_assertThisInitialized(_this), "addWarperAction", function () {
      var _this$props3 = _this.props,
          contentStyle = _this$props3.contentStyle,
          className = _this$props3.className,
          on = _this$props3.on;
      var modal = _this.state.modal;
      var popupContentStyle = modal ? styles.popupContent.modal : styles.popupContent.tooltip;
      var childrenElementProps = {
        className: "popup-content ".concat(className !== '' ? "".concat(className, "-content") : ''),
        style: Object.assign({}, popupContentStyle, contentStyle),
        ref: _this.setContentRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      };

      if (!modal && on.indexOf('hover') >= 0) {
        childrenElementProps.onMouseEnter = _this.onMouseEnter;
        childrenElementProps.onMouseLeave = _this.onMouseLeave;
      }

      return childrenElementProps;
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrigger", function () {
      var triggerProps = {
        key: 'T',
        ref: _this.setTriggerRef
      };
      var _this$props4 = _this.props,
          on = _this$props4.on,
          trigger = _this$props4.trigger;
      var isOpen = _this.state.isOpen;
      var onAsArray = Array.isArray(on) ? on : [on];

      for (var i = 0, len = onAsArray.length; i < len; i++) {
        switch (onAsArray[i]) {
          case 'click':
            triggerProps.onClick = _this.togglePopup;
            break;

          case 'hover':
            triggerProps.onMouseEnter = _this.onMouseEnter;
            triggerProps.onMouseLeave = _this.onMouseLeave;
            break;

          case 'focus':
            triggerProps.onFocus = _this.onMouseEnter;
            break;

          default:
        }
      }

      if (typeof trigger === 'function') return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger(isOpen), triggerProps);
      return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger, triggerProps);
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function () {
      var _this$props5 = _this.props,
          arrow = _this$props5.arrow,
          arrowStyle = _this$props5.arrowStyle,
          children = _this$props5.children;
      var _this$state2 = _this.state,
          modal = _this$state2.modal,
          isOpen = _this$state2.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, _this.addWarperAction(), {
        key: "C"
      }), arrow && !modal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: _this.setArrowRef,
        style: Object.assign({}, styles.popupArrow, arrowStyle)
      }), typeof children === 'function' ? children(_this.closePopup, isOpen) : children);
    });

    _this.setTriggerRef = function (r) {
      return _this.TriggerEl = r;
    };

    _this.setContentRef = function (r) {
      return _this.ContentEl = r;
    };

    _this.setArrowRef = function (r) {
      return _this.ArrowEl = r;
    };

    _this.setHelperRef = function (r) {
      return _this.HelperEl = r;
    };

    _this.timeOut = 0;
    var open = props.open,
        _modal = props.modal,
        defaultOpen = props.defaultOpen,
        _trigger = props.trigger;
    _this.state = {
      isOpen: open || defaultOpen,
      modal: _modal ? true : !_trigger // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't exist

    };
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          closeOnEscape = _this$props6.closeOnEscape,
          defaultOpen = _this$props6.defaultOpen,
          repositionOnResize = _this$props6.repositionOnResize;
      if (defaultOpen) this.setPosition();

      if (closeOnEscape) {
        /* eslint-disable-next-line no-undef */
        window.addEventListener('keyup', this.onEscape);
      }

      if (repositionOnResize) {
        /* eslint-disable-next-line no-undef */
        window.addEventListener('resize', this.repositionOnResize);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props7 = this.props,
          open = _this$props7.open,
          disabled = _this$props7.disabled;
      var isOpen = this.state.isOpen;

      if (prevProps.open !== open) {
        if (open) this.openPopup();else this.closePopup(undefined, true);
      }

      if (prevProps.disabled !== disabled && disabled && isOpen) {
        this.closePopup();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // kill any function to execute if the component is unmounted
      clearTimeout(this.timeOut);
      var _this$props8 = this.props,
          closeOnEscape = _this$props8.closeOnEscape,
          repositionOnResize = _this$props8.repositionOnResize; // remove events listeners

      if (closeOnEscape) {
        /* eslint-disable-next-line no-undef */
        window.removeEventListener('keyup', this.onEscape);
      }

      if (repositionOnResize) {
        /* eslint-disable-next-line no-undef */
        window.removeEventListener('resize', this.repositionOnResize);
      }

      this.resetScroll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          overlayStyle = _this$props9.overlayStyle,
          closeOnDocumentClick = _this$props9.closeOnDocumentClick,
          className = _this$props9.className,
          on = _this$props9.on,
          trigger = _this$props9.trigger;
      var _this$state3 = this.state,
          modal = _this$state3.modal,
          isOpen = _this$state3.isOpen;
      var overlay = isOpen && !(on.indexOf('hover') >= 0);
      var ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
      return [this.renderTrigger(), isOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "H",
        style: {
          position: 'absolute',
          top: '0px',
          left: '0px'
        },
        ref: this.setHelperRef
      }), overlay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "O",
        className: "popup-overlay ".concat(className !== '' ? "".concat(className, "-overlay") : ''),
        style: Object.assign({}, ovStyle, overlayStyle),
        onClick: closeOnDocumentClick ? this.closePopup : undefined
      }, modal && this.renderContent()), isOpen && !modal && this.renderContent()];
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(Popup, "defaultProps", {
  trigger: null,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  defaultOpen: false,
  open: false,
  disabled: false,
  closeOnDocumentClick: true,
  repositionOnResize: true,
  closeOnEscape: true,
  on: ['click'],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: '',
  position: 'bottom center',
  modal: false,
  lockScroll: false,
  arrow: true,
  offsetX: 0,
  offsetY: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  keepTooltipInside: false
});

if (true) {
  var PropTypes = __webpack_require__(29);

  var TRIGGER_TYPES = ['hover', 'click', 'focus'];
  Popup.propTypes = {
    arrowStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    overlayStyle: PropTypes.object,
    className: PropTypes.string,
    modal: PropTypes.bool,
    arrow: PropTypes.bool,
    closeOnDocumentClick: PropTypes.bool,
    repositionOnResize: PropTypes.bool,
    disabled: PropTypes.bool,
    closeOnEscape: PropTypes.bool,
    lockScroll: PropTypes.bool,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    defaultOpen: PropTypes.bool,
    trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    // for uncontrolled component we don't need the trigger Element
    on: PropTypes.oneOfType([PropTypes.oneOf(TRIGGER_TYPES), PropTypes.arrayOf(PropTypes.oneOf(TRIGGER_TYPES))]),
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]).isRequired,
    position: PropTypes.oneOfType([PropTypes.oneOf(POSITION_TYPES), PropTypes.arrayOf(PropTypes.oneOf(POSITION_TYPES))]),
    keepTooltipInside: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _Comment_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);




var StyledPopup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ShowAll__StyledPopup",
  componentId: "sc-2jxpml-0"
})(["width:auto;flex-direction:row;"]);
var StyledRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ShowAll__StyledRow",
  componentId: "sc-2jxpml-1"
})(["display:flex;flex-direction:row;flex-wrap:wrap;"]);

var ShowAll = function ShowAll(_ref) {
  var filter = _ref.filter,
      changeFilter = _ref.changeFilter,
      data = _ref.data,
      changeLike = _ref.changeLike;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPopup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filter: filter,
    changeFilter: changeFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, data.map(function (info) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: info,
      name: info.username,
      comment: info.comment,
      likes: info.likes,
      changeLike: changeLike,
      id: info.id
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowAll);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SimilarCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _NewestCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _styles_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      similar: props.similar || [],
      similarArr: props.similarArr || [],
      similarCard: 0,
      newlyListed: props.newlyListed || [],
      newlyListedArr: props.newlyListedArr || [],
      newlyListedCard: 0
    };
    _this.previousSimilar = _this.previousSimilar.bind(_assertThisInitialized(_this));
    _this.nextSimilar = _this.nextSimilar.bind(_assertThisInitialized(_this));
    _this.previousNew = _this.previousNew.bind(_assertThisInitialized(_this));
    _this.nextNew = _this.nextNew.bind(_assertThisInitialized(_this));
    _this.saveProp = _this.saveProp.bind(_assertThisInitialized(_this));
    _this.favoritePost = _this.favoritePost.bind(_assertThisInitialized(_this));
    _this.similar = _this.props.data[0];
    _this.newest = _this.props.data[1];
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.similarFetch();
      this.newlyListedFetch();
    }
  }, {
    key: "similarFetch",
    value: function similarFetch() {
      var results = {
        data: this.similar
      };
      var initialCArds = results.data;
      var setCardArray = initialCArds.slice(0, 12);
      console.log('similarResults', results.data[0], results.data[1], results.data[2]);
      this.setState({
        similar: results.data,
        similarArr: setCardArray
      }); // axios('/home/similar')
      // .then(results => {
      //   let initialCArds = results.data
      //   let setCardArray = initialCArds.slice(0, 12)
      //   console.log('similarResults', results.data[0], results.data[1], results.data[2])
      //   this.setState({similar: results.data,
      //     similarArr: setCardArray})
      // })
      // .catch(error => {
      //   console.error(error)
      // })
    }
  }, {
    key: "newlyListedFetch",
    value: function newlyListedFetch() {
      var results = {
        data: this.newest
      };
      var initialCArds = results.data;
      var setCardArray = initialCArds.slice(0, 12);
      console.log('newestResults', results.data);
      this.setState({
        newlyListed: results.data,
        newlyListedArr: setCardArray
      }); // axios('/home/newest')
      // .then(results => {
      //   let initialCArds = results.data
      //   let setCardArray = initialCArds.slice(0, 12)
      //   console.log('newestResults', results.data)
      //   this.setState({newlyListed: results.data,  newlyListedArr: setCardArray})
      // })
      // .catch(error => {
      //   console.error(error)
      // })
    }
  }, {
    key: "previousSimilar",
    value: function previousSimilar() {
      var _this$state = this.state,
          similarCard = _this$state.similarCard,
          similarArr = _this$state.similarArr,
          similar = _this$state.similar;
      var previous = similarCard - 4;
      var cardArray = similar.slice(similarCard, similarCard + 12);

      if (similarCard !== 0) {
        this.setState({
          similarCard: previous
        });
        this.setState({
          similarArr: cardArray
        });
      }
    }
  }, {
    key: "nextSimilar",
    value: function nextSimilar() {
      var _this$state2 = this.state,
          similarCard = _this$state2.similarCard,
          similar = _this$state2.similar;
      var max = similar.length - 1;
      var next = similarCard + 4;
      var cardArray = similar.slice(next, similarCard + 12);

      if (similarCard !== max - 2) {
        this.setState({
          similarCard: next,
          similarArr: cardArray
        });
      }
    }
  }, {
    key: "previousNew",
    value: function previousNew() {
      var _this$state3 = this.state,
          newlyListedCard = _this$state3.newlyListedCard,
          newlyListed = _this$state3.newlyListed;
      var previous = newlyListedCard - 4;
      var cardArray = newlyListed.slice(newlyListedCard, newlyListedCard + 12);

      if (newlyListedCard !== 0) {
        this.setState({
          newlyListedCard: previous,
          newlyListedArr: cardArray
        });
      }
    }
  }, {
    key: "nextNew",
    value: function nextNew() {
      var _this$state4 = this.state,
          newlyListedCard = _this$state4.newlyListedCard,
          newlyListed = _this$state4.newlyListed;
      var max = newlyListed.length - 1;
      var next = newlyListedCard + 4;
      var cardArray = newlyListed.slice(next, newlyListedCard + 12);

      if (newlyListedCard !== max - 2) {
        this.setState({
          newlyListedCard: next,
          newlyListedArr: cardArray
        });
      }
    }
  }, {
    key: "saveProp",
    value: function saveProp(key) {
      var similar = this.state.similar;
      var favorite = similar[key].favorite;

      if (favorite === true) {
        this.state({
          favorite: false
        });
      } else {
        this.state({
          favorite: true
        });
      }
    }
  }, {
    key: "favoritePost",
    value: function favoritePost(key) {// axios.post('', params{})
      // .then()
      // .catch(error => {
      //   console.error(error)
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          similar = _this$state5.similar,
          similarArr = _this$state5.similarArr,
          similarCard = _this$state5.similarCard,
          newlyListed = _this$state5.newlyListed,
          newlyListedArr = _this$state5.newlyListedArr,
          newlyListedCard = _this$state5.newlyListedCard;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_4__["MainContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimilarCard_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        similarData: similarArr,
        simCard: similarCard,
        prev: this.previousSimilar,
        next: this.nextSimilar,
        faveProp: this.saveProp
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewestCard_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        newData: newlyListedArr,
        newCard: newlyListedCard,
        prev: this.previousNew,
        next: this.nextNew,
        faveProp: this.saveProp
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var server = 'http://localhost:3002';

App.fetchData = function (id) {
  return Promise.allSettled([axios__WEBPACK_IMPORTED_MODULE_1___default()("".concat(server, "/home/similar")), axios__WEBPACK_IMPORTED_MODULE_1___default()("".concat(server, "/home/newest"))]);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimilarStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _SimilarButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _SimilarFavorite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _styles_Buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _styles_Card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);







var SimilarCard = function SimilarCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["SimilarContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["TitleContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["TitleHeading"], null, "Similar Homes You May Like")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["ContentSlider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimilarButtons_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prev: props.prev,
    next: props.next,
    simCard: props.simCard,
    similarData: props.similarData
  }), props.similarData.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["ColumnContainer"], {
      className: "card_".concat(i),
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.prop_url,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["CardContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["PropImageFrame"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimilarFavorite_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      propData: item
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["PropImage"], {
      src: item.main_pic_url,
      width: "1",
      height: "1",
      href: item.prop_url
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimilarStats_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      propStats: item
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["SeeMoreHomes"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["TakeALook"], null, "Take a look"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SimilarCard);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);



 // const priceConvert = new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(props.propStats.current_list_price)

var SimilarStats = function SimilarStats(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["StatsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["PriceContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["Price"], null, new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(props.propStats.current_list_price))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfBedContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["SvgBed"], {
    src: "https://webstockreview.net/images/clipart-bed-svg-2.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["BedNum"], null, "".concat(props.propStats.num_bed, "bd"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfBathContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["SvgBath"], {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrawWK6_gDFqeMU-Uc2yB1WhiWbTxSQsCW1TDK1p26P_XtNnYD&usqp=CAU"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["BathNum"], null, "".concat(props.propStats.num_bath, "ba"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfSfContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["SvgSf"], {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbUDUKuWFM-CmkckoSG_rWBU-8GWIYPH23t4UPlhMyvxkDNh6R&usqp=CAU"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["SfNum"], null, "".concat(new Intl.NumberFormat('en', {
    notation: 'standard'
  }).format(props.propStats.listing_num), "sqft")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["AddressContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["StreetContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["Street"], null, "".concat(props.propStats.house_num, " ").concat(props.propStats.street_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["CityStateContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["CityState"], null, "".concat(props.propStats.city, ", ").concat(props.propStats.state)))));
}; // <div className="stat-box">
//                       <div className="stat-padding">
//                         <div className="price-box">
//                           <div className="price">
//                             {`$ ${item.current_list_price}`}
//                           </div>
//                         </div>
//                         <div className="bbsf-box">
//                           <div className="bbsf-bed">
//                             <div className="bbsf-bed-svg">
//                             </div>
//                             <div className="bbsf-bed-stat">
//                               {item.num_bed}
//                             </div>
//                           </div>
//                           <div className="bbsf-bath">
//                             <div className="bbsf-bath-svg">
//                             </div>
//                             <div className="bbsf-bath-stat">
//                               {item.num_bath}
//                             </div>
//                           </div>
//                           <div className="bbsf-sf">
//                             <div className="bbsf-sf-svg">
//                               <img className={styles.bedSvg} src="https://webstockreview.net/images/clipart-bed-svg-2.png"/>
//                             </div>
//                             <div className="bbsf-sf-stat">
//                               {`SQ-FT`}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="street-box">
//                           <div className="street">
//                           </div>
//                         </div>
//                         <div className="city-state-box">
//                           <div className="city-state">
//                             {`${item.city} ${item.state}`}
//                           </div>
//                         </div>
//                       </div>
//                       </div>
//                   </div>


/* harmony default export */ __webpack_exports__["default"] = (SimilarStats);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbsfContainer", function() { return BbsfContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbsfBedContainer", function() { return BbsfBedContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbsfBathContainer", function() { return BbsfBathContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbsfSfContainer", function() { return BbsfSfContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgBed", function() { return SvgBed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgBath", function() { return SvgBath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgSf", function() { return SvgSf; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var BbsfContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_1__BbsfContainer",
  componentId: "sc-1ar1die-0"
})(["height:auto;width:100%;padding:1px;display:flex;flex-direction:row;"]);
var BbsfBedContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Stats_1__BbsfBedContainer",
  componentId: "sc-1ar1die-1"
})(["height:20px;width:20%;padding:0px 4px 0px 0px;flex-direction:row;align-items:center;display:flex;"]);
var BbsfBathContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Stats_1__BbsfBathContainer",
  componentId: "sc-1ar1die-2"
})(["height:20px;width:20%;padding:0px 4px 0px 0px;flex-direction:row;align-items:center;display:flex;"]);
var BbsfSfContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Stats_1__BbsfSfContainer",
  componentId: "sc-1ar1die-3"
})(["height:20px;width:40%;padding:0px 4px 0px 0px;flex-direction:row;align-items:center;display:flex;"]);
var SvgBed = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Stats_1__SvgBed",
  componentId: "sc-1ar1die-4"
})(["height:15px;width:15px;"]); //BATH
// https://upload.wikimedia.org/wikipedia/commons/f/fe/Font_Awesome_5_solid_bath.svg

var SvgBath = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Stats_1__SvgBath",
  componentId: "sc-1ar1die-5"
})(["height:15px;width:15px;"]);
var SvgSf = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Stats_1__SvgSf",
  componentId: "sc-1ar1die-6"
})(["height:15px;width:15px;"]);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressContainer", function() { return AddressContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceContainer", function() { return PriceContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsContainer", function() { return StatsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityStateContainer", function() { return CityStateContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetContainer", function() { return StreetContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BedNum", function() { return BedNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathNum", function() { return BathNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SfNum", function() { return SfNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Street", function() { return Street; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityState", function() { return CityState; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PriceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__PriceContainer",
  componentId: "t9svjm-0"
})(["height:auto;width:100%;padding:1px;"]);
var AddressContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__AddressContainer",
  componentId: "t9svjm-1"
})(["height:auto;width:100%;padding:1px;"]);
var StatsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__StatsContainer",
  componentId: "t9svjm-2"
})(["height:auto;width:100%;padding:5px;"]);
var CityStateContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__CityStateContainer",
  componentId: "t9svjm-3"
})(["height:auto;width:100%;padding:1px;"]);
var StreetContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__StreetContainer",
  componentId: "t9svjm-4"
})(["height:auto;width:80%;padding:1px;"]);
var Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__Price",
  componentId: "t9svjm-5"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:bold;font-size:20px;line-height:1.2;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);
var BedNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__BedNum",
  componentId: "t9svjm-6"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);
var BathNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__BathNum",
  componentId: "t9svjm-7"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);
var SfNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__SfNum",
  componentId: "t9svjm-8"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);
var Street = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__Street",
  componentId: "t9svjm-9"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);
var CityState = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Stats_2__CityState",
  componentId: "t9svjm-10"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _png_prev_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _png_next_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);



 // onClick={props.prevChangeState()}
// onClick={props.nextChangeState()}

var SimilarButtons = function SimilarButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["SimilarPrevContainer"], {
    onClick: props.prev,
    disabled: props.simCard === 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["PrevPng"], {
    src: _png_prev_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["SimilarNextContainer"], {
    onClick: props.next,
    disabled: props.simCard === props.similarData.length - 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["NextPng"], {
    src: _png_next_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SimilarButtons);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7c12479b69aea10bae614843f0a50ae6.png");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b166875ce1392b11a3c7711145dd646b.png");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarPrevContainer", function() { return SimilarPrevContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewestPrevContainer", function() { return NewestPrevContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevPng", function() { return PrevPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarNextContainer", function() { return SimilarNextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewestNextContainer", function() { return NewestNextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextPng", function() { return NextPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartContainer", function() { return HeartContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartFirstImg", function() { return HeartFirstImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedHeartFirstImg", function() { return RedHeartFirstImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartBottomImg", function() { return HeartBottomImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedHeartBottomImg", function() { return RedHeartBottomImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SimilarPrevContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Buttons__SimilarPrevContainer",
  componentId: "sc-14oivw3-0"
})(["height:32px;width:32px;position:absolute;top:25%;left:calc(11% - 7px);background-color:rgb(255,255,255);border-radius:2em;z-index:1;border-width:1px;border-style:solid;border-color:rgb(232,233,234);&:hover{cursor:pointer;}&:active{background-color:rgb(202,202,205);border-color:rgb(202,202,205);}"]);
var SimilarNextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Buttons__SimilarNextContainer",
  componentId: "sc-14oivw3-1"
})(["height:32px;width:32px;position:absolute;top:25%;left:calc(50% - -358px);background-color:rgb(255,255,255);border-radius:2em;z-index:1;border-width:1px;border-style:solid;border-color:rgb(232,233,234);&:hover{cursor:pointer;}&:active{background-color:rgb(202,202,205);border-color:rgb(202,202,205);}"]);
var NewestPrevContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Buttons__NewestPrevContainer",
  componentId: "sc-14oivw3-2"
})(["height:32px;width:32px;position:absolute;top:66%;left:calc(11% - 7px);background-color:rgb(255,255,255);border-radius:2em;z-index:1;border-width:1px;border-style:solid;border-color:rgb(232,233,234);&:hover{cursor:pointer;}&:active{background-color:rgb(202,202,205);border-color:rgb(202,202,205);}"]);
var NewestNextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Buttons__NewestNextContainer",
  componentId: "sc-14oivw3-3"
})(["height:32px;width:32px;position:absolute;top:66%;left:calc(50% - -358px);background-color:rgb(255,255,255);border-radius:2em;z-index:1;border-width:1px;border-style:solid;border-color:rgb(232,233,234);&:hover{cursor:pointer;}&:active{background-color:rgb(202,202,205);border-color:rgb(202,202,205);}"]);
var PrevPng = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Buttons__PrevPng",
  componentId: "sc-14oivw3-4"
})(["height:15px;width:15px;position:absolute;top:26%;left:30%;&:hover{cursor:pointer;}"]);
var NextPng = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Buttons__NextPng",
  componentId: "sc-14oivw3-5"
})(["height:15px;width:15px;position:absolute;top:26%;left:30%;&:hover{cursor:pointer;}"]);
var HeartContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Buttons__HeartContainer",
  componentId: "sc-14oivw3-6"
})([""]);
var HeartFirstImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Buttons__HeartFirstImg",
  componentId: "sc-14oivw3-7"
})(["width:30px;height:30px;color:red;size;200px;grid-column:18 / span 8;grid-row:1;padding-top:15%;z-index:1;&:hover{cursor:pointer;transform:scale(1.25);}"]);
var RedHeartFirstImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Buttons__RedHeartFirstImg",
  componentId: "sc-14oivw3-8"
})(["width:30px;height:30px;color:red;size;200px;grid-column:18 / span 8;grid-row:1;padding-top:15%;z-index:1;&:hover{cursor:pointer;transform:scale(1.25);}"]);
var HeartBottomImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Buttons__HeartBottomImg",
  componentId: "sc-14oivw3-9"
})(["width:30px;height:30px;color:red;size;200px;grid-column:18 / span 8;grid-row:1;padding-top:15%;z-index:1;&:hover{cursor:pointer;transform:scale(1.25);}"]);
var RedHeartBottomImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Buttons__RedHeartBottomImg",
  componentId: "sc-14oivw3-10"
})(["width:30px;height:30px;color:red;size;200px;grid-column:18 / span 8;grid-row:1;padding-top:15%;z-index:1;&:hover{cursor:pointer;transform:scale(1.25);}"]);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _png_empty_heart_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _png_red_heart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);



 // <RedHeartBottomImg/>
// <HeartBottomImg/>

function SimilarFavorite(props) {
  var favorite = props.propData.favorite;
  var heartsUp;

  if (heartsUp === undefined) {
    if (favorite) {
      heartsUp = true;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_1__["HeartFirstImg"], {
        src: _png_empty_heart_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        hidden: false,
        onClick: function onClick() {
          return alert("Hi");
        }
      }));
    } else {
      heartsUp = false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_1__["RedHeartFirstImg"], {
        src: _png_red_heart_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        hidden: false,
        onClick: function onClick() {
          return alert("Bye");
        }
      }));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SimilarFavorite);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c881cefb407896ff4fc1261485a26489.png");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "10d77658fe9a0bc9924ec646e9294279.png");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropImage", function() { return PropImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainer", function() { return CardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSlider", function() { return ContentSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarContainer", function() { return SimilarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContainer", function() { return TitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleHeading", function() { return TitleHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropImageFrame", function() { return PropImageFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnContainer", function() { return ColumnContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeMoreHomes", function() { return SeeMoreHomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeALook", function() { return TakeALook; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PropImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Card__PropImage",
  componentId: "burcyf-0"
})(["width:100%;height:100%;display:flex;position:relative;transition:transform 0.45s cubic-bezier(0.645,0.045,0.355,1);grid-column:1 / -1;grid-row:1;&:hover{cursor:pointer;transform:scale(1.25);}"]); // Deleted
// border-radius: 2em 2em 2em 2em;
// display: flex;
// margin-left: 25px;
// transform: scale(1.5);

var PropImageFrame = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__PropImageFrame",
  componentId: "burcyf-1"
})(["width:224px;height:160px;border-radius:8px;overflow:hidden;display:grid;grid-template-columns:repeat(20,1fr);position:relative;"]); // Deleted
// border-radius: 1em 1em 1em 1em;

var SeeMoreHomes = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__SeeMoreHomes",
  componentId: "burcyf-2"
})(["width:224px;height:160px;border-radius:8px;background-color:rgb(232,233,234);overflow:hidden;display:grid;grid-template-columns:repeat(20,1fr);position:relative;"]);
var TakeALook = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Card__TakeALook",
  componentId: "burcyf-3"
})(["font-family:Roboto;cursor:pointer;display:inline-block;text-align:center;font-weight:bold;margin:0px 0px 4px;white-space:nowrap;font-size:16px;line-height:1.5;background-color:rgb(255,255,255);color:rgb(0,120,130);border-radius:8px;border-width:1px;border-style:solid;padding:8px 16px;border-color:transparent;&:hover{cursor:pointer;background-color:rgb(0,120,130);color:rgb(255,255,255);}"]);
var ColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__ColumnContainer",
  componentId: "burcyf-4"
})(["float:left;width:25%;&:hover{cursor:pointer;}"]); // transition: transform 300ms cubic-bezier(0.455 0.03 0.515 0.995)
// Deleted
// padding: 0 20px;

var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__CardContainer",
  componentId: "burcyf-5"
})(["height:auto;width:250px;position:relative;border-color:transparent;border-width:16px 8px 0px;display:block;flex-shrink:0;flex-basis:auto;float:left;display:table;"]); // Deleted
// padding: 40px;
// border-style: solid;

var ContentSlider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__ContentSlider",
  componentId: "burcyf-6"
})(["width:980px;display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:hidden;position:relative;"]); // Testing
// Position: static;
// original width: 960px;
// Deleted
// overflow-x: scroll;
// overflow-x: auto;
// overflow-x: hidden;
// justify-content: center;
// transition: transform 300ms;
// transform: translateX(-33%);

var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__MainContainer",
  componentId: "burcyf-7"
})(["display:flex;flex-direction:column;margin:auto;box-sizing:border-box;max-width:960px;"]);
var SimilarContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__SimilarContainer",
  componentId: "burcyf-8"
})(["display:flex;flex-direction:column;height:304;box-sizing:border-box;"]); // Deleted
// margin: 32px 0px;

var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card__TitleContainer",
  componentId: "burcyf-9"
})(["width:inherit height:100px;"]);
var TitleHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Card__TitleHeading",
  componentId: "burcyf-10"
})(["color:rgb(59,65,68);font-family:Roboto;font-weight:bold;font-size:20px;line-height:1.2;"]);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewestStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _NewestButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _NewestFavorite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _styles_Buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _styles_Card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);






var currentListing = "143 Belmont Ave";

var NewestCard = function NewestCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["SimilarContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["TitleContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["TitleHeading"], null, "New Listings near ".concat(currentListing))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["ContentSlider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewestButtons_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prev: props.prev,
    next: props.next,
    newCard: props.newCard,
    newData: props.newData
  }), props.newData.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["ColumnContainer"], {
      className: "card_".concat(i),
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["CardContainer"], {
      href: item.prop_url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["PropImageFrame"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewestFavorite_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      propData: item
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Card_js__WEBPACK_IMPORTED_MODULE_5__["PropImage"], {
      src: item.main_pic_url,
      width: "1",
      height: "1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewestStats_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      propStats: item
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewestCard);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);





var NewestStats = function NewestStats(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["StatsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["PriceContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["Price"], null, new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(props.propStats.current_list_price))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfBedContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["SvgBed"], {
    src: "https://webstockreview.net/images/clipart-bed-svg-2.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["BedNum"], null, "".concat(props.propStats.num_bed, "bd"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfBathContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["SvgBath"], {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrawWK6_gDFqeMU-Uc2yB1WhiWbTxSQsCW1TDK1p26P_XtNnYD&usqp=CAU"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["BathNum"], null, "".concat(props.propStats.num_bath, "ba"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["BbsfSfContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_1_js__WEBPACK_IMPORTED_MODULE_1__["SvgSf"], {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbUDUKuWFM-CmkckoSG_rWBU-8GWIYPH23t4UPlhMyvxkDNh6R&usqp=CAU"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["SfNum"], null, "".concat(new Intl.NumberFormat('en', {
    notation: 'standard'
  }).format(props.propStats.listing_num), "sqft")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["AddressContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["StreetContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["Street"], null, "".concat(props.propStats.house_num, " ").concat(props.propStats.street_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["CityStateContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Stats_2_js__WEBPACK_IMPORTED_MODULE_2__["CityState"], null, "".concat(props.propStats.city, ", ").concat(props.propStats.state)))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewestStats);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _png_prev_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _png_next_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);



 // onClick={props.prevChangeState()}
// onClick={props.nextChangeState()}

var NewestButtons = function NewestButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["NewestPrevContainer"], {
    onClick: props.prev,
    disabled: props.newCard === 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["PrevPng"], {
    src: _png_prev_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["NewestNextContainer"], {
    onClick: props.next,
    disabled: props.newCard === props.newData.length - 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["NextPng"], {
    src: _png_next_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewestButtons);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _png_empty_heart_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _png_red_heart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);





function NewestFavorite(props) {
  var favorite = props.propData.favorite;

  if (favorite) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_1__["HeartFirstImg"], {
      src: _png_empty_heart_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      hidden: false,
      onClick: function onClick() {
        return alert("Hi");
      }
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_js__WEBPACK_IMPORTED_MODULE_1__["RedHeartFirstImg"], {
      src: _png_red_heart_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      hidden: false,
      onClick: function onClick() {
        return alert("Bye");
      }
    }));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NewestFavorite);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _MediaPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _helper_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // import fetch from 'isomorphic-fetch';


var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "App__ImageContainer",
  componentId: "sc-10ro0ob-0"
})(["display:flex;justify-content:center;"]);
var initial = {
  imageURLs: [],
  tagsProcessed: []
};
var server = 'http://localhost:3001/homes';

var fetchData = function fetchData(id) {
  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat(server, "/").concat(id, "/images"));
};

var App = function App(_ref) {
  var _ref$homeInit = _ref.homeInit,
      homeInit = _ref$homeInit === void 0 ? initial : _ref$homeInit,
      _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(homeInit),
      _useState2 = _slicedToArray(_useState, 2),
      home = _useState2[0],
      setHome = _useState2[1];

  var resolvedPath = pathname === '/' ? '' : pathname;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  var background = location.state && location.state.background;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_helper_map__WEBPACK_IMPORTED_MODULE_5__["default"])();

    if (homeInit === initial) {
      console.log('load test data');
      fetchData(1).then(function (response) {
        return response.data;
      }).then(function (home) {
        return setHome(home);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    home: home,
    pathname: resolvedPath
  })), background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(resolvedPath, "/:id"),
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MediaPopup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      home: home
    })
  }));
};

App.fetchData = fetchData;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);

/* harmony default export */ __webpack_exports__["default"] = (_MainImage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var _GalleryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);







var Frame = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainImage__Frame",
  componentId: "sc-9t126d-0"
})(["position:relative;height:500px;max-height:calc(100vh - 275px);min-height:275px;width:992px;border-radius:8px;"]);
var TopDecorations = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainImage__TopDecorations",
  componentId: "sc-9t126d-1"
})(["position:absolute;display:flex;width:100%;padding:8px 8px 0;z-index:1;box-sizing:border-box;"]);
var BottomDecorations = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainImage__BottomDecorations",
  componentId: "sc-9t126d-2"
})(["position:absolute;right:0;bottom:8px;z-index:1;padding-right:8px;"]);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainImage__Body",
  componentId: "sc-9t126d-3"
})(["position:absolute;height:100%;width:100%;border-radius:8px;overflow:hidden;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var home = _ref.home,
      pathname = _ref.pathname;
  var imageURLs = home.imageURLs,
      tagsProcessed = home.tagsProcessed;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Frame, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopDecorations, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tagsProcessed: tagsProcessed
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: {
      color: 'rgb(0, 120, 130)',
      borderStyle: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_6__["SaveButton"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_6__["ShareButton"], {
    margin: "0 0 0 16px"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: {
      pathname: "".concat(pathname, "/photos"),
      state: {
        background: location
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageURL: imageURLs[0]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomDecorations, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GalleryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    count: imageURLs.length
  }))));
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var StyledTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Tags__StyledTag",
  componentId: "sc-15o73qe-0"
})(["background-color:rgb(255,255,255);display:inline-block;border-radius:4px;margin-right:4px;padding:2px 4px;line-height:1.33;font-size:12px;color:rgb(0,178,91);font-weight:bold;font-family:arial;"]);
var Tags = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tags",
  componentId: "sc-15o73qe-1"
})(["flex:1 1 auto;"]);

var Tag = function Tag(_ref) {
  var tag = _ref.tag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTag, null, tag);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var tagsProcessed = _ref2.tagsProcessed;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tags, null, tagsProcessed.map(function (tag, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, {
      key: idx,
      tag: tag
    });
  }));
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Image",
  componentId: "sc-5z9r3u-0"
})(["width:100%;height:100%;object-fit:cover;cursor:pointer;&:hover{transform:scale(1.04);"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var imageURL = _ref.imageURL;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: imageURL
  }));
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);



var GalleryButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_buttons__WEBPACK_IMPORTED_MODULE_2__["BasicButton"]).withConfig({
  displayName: "GalleryButton",
  componentId: "sc-146rzp9-0"
})(["background-color:rgba(59,65,68,0.8);color:rgb(255,255,255);padding:0px 8px;border-radius:4px;border-style:none;height:28px;&:hover{background-color:rgb(113,124,124);}"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var count = _ref.count;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GalleryButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    style: {
      height: '16px',
      width: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z",
    fill: "#ffffff"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: '4px',
      lineHeight: 1.4,
      fontSize: '14px'
    }
  }, count)));
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicButton", function() { return BasicButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return RoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavButton", function() { return StyledNavButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveButton", function() { return SaveButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleButton", function() { return ScheduleButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




var Path = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.path.withConfig({
  displayName: "buttons__Path",
  componentId: "mwldgy-0"
})([""]);
var BasicButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "buttons__BasicButton",
  componentId: "mwldgy-1"
})(["font-size:16px;line-height:1.5;cursor:pointer;border-width:1px;border-style:solid;border-radius:8px;outline:none;padding:8px 16px;background-color:rgb(255,255,255);color:rgb(59,65,68);&.centered{display:flex;justify-content:center;align-items:center;}padding:", ";margin:", ";"], function (_ref) {
  var padding = _ref.padding;
  return padding;
}, function (_ref2) {
  var margin = _ref2.margin;
  return margin;
});
var RoundButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(BasicButton).withConfig({
  displayName: "buttons__RoundButton",
  componentId: "mwldgy-2"
})(["border-radius:24px;padding:1px;"]);
var StyledScheduleButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(BasicButton).withConfig({
  displayName: "buttons__StyledScheduleButton",
  componentId: "mwldgy-3"
})(["width:", ";background-color:rgb(217,60,35);color:rgb(255,255,255);font-weight:bold;border-color:rgb(217,60,35);&:hover{background-color:rgb(255,255,255);color:rgb(217,60,35);}"], function (_ref3) {
  var width = _ref3.width;
  return width || '100%';
});

var ScheduleButton = function ScheduleButton(_ref4) {
  var width = _ref4.width,
      padding = _ref4.padding;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledScheduleButton, {
    width: width,
    padding: padding,
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Schedule a Tour"));
};

var StyledCTAButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(BasicButton).withConfig({
  displayName: "buttons__StyledCTAButton",
  componentId: "mwldgy-4"
})(["border-style:", ";border-color:rgb(205,209,212);min-width:110px;&:hover{background-color:rgb(232,233,234);}", "{fill:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderStyle;
}, Path, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color;
});
StyledCTAButton.defaultProps = {
  theme: {
    color: 'rgb(59, 65, 68)',
    borderStyle: 'solid'
  }
};

var SaveButton = function SaveButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCTAButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    style: {
      height: '24px',
      width: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    d: "M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z",
    fill: "86909"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: '8px'
    }
  }, "Save")));
};

var ShareButton = function ShareButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCTAButton, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    style: {
      height: '24px',
      width: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    d: "M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z",
    fill: "86909"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: '8px'
    }
  }, "Share")));
};

var StyledNavButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(BasicButton).withConfig({
  displayName: "buttons__StyledNavButton",
  componentId: "mwldgy-5"
})(["color:", ";border-style:", ";margin-bottom:8px;white-space:nowrap;box-shadow:", ";font-weight:bold;&:hover{background-color:", ";}"], function (_ref7) {
  var selected = _ref7.selected;
  return selected ? 'rgb(0, 120, 130)' : '';
}, function (_ref8) {
  var selected = _ref8.selected;
  return selected ? 'solid' : 'none';
}, function (_ref9) {
  var selected = _ref9.selected;
  return selected ? 'rgba(59, 65, 68, 0.4) 0px 8px 20px -15px' : '';
}, function (_ref10) {
  var selected = _ref10.selected;
  return selected ? '' : 'rgb(232, 233, 234)';
});


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);

/* harmony default export */ __webpack_exports__["default"] = (_MediaPopup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var _Media_Photos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var _Media_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);
/* harmony import */ var _Media_StreetView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88);
/* harmony import */ var _Media_Schools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var position = {
  lat: 37.869260,
  lng: -122.254811
};
var MediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "MediaPopup__MediaContainer",
  componentId: "ccwiao-0"
})(["position:relative;display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden;background-color:rgb(255,255,255);font-family:arial;@media (min-width:767px){margin:48px;height:calc(100% - 96px);width:calc(100% - 96px);border-radius:8px;}"]);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "MediaPopup__Body",
  componentId: "ccwiao-1"
})(["flex:1 1 auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var home = _ref.home;

  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
      path = _useRouteMatch.path;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1000),
      _useState2 = _slicedToArray(_useState, 2),
      innerWidth = _useState2[0],
      setWidth = _useState2[1];

  var routes = [{
    title: 'Photos',
    path: path.replace(':id', 'photos'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media_Photos__WEBPACK_IMPORTED_MODULE_5__["default"], {
      home: home,
      innerWidth: innerWidth
    })
  }, {
    title: 'Map',
    path: path.replace(':id', 'mapView'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
      innerWidth: innerWidth,
      position: position
    })
  }, {
    title: 'Street View',
    path: path.replace(':id', 'streetView'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media_StreetView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      innerWidth: innerWidth,
      position: position
    })
  }, {
    title: 'Schools',
    path: path.replace(':id', 'schools'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media_Schools__WEBPACK_IMPORTED_MODULE_8__["default"], {
      position: position
    })
  }, {
    title: 'Crime',
    path: path.replace(':id', 'crime'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
  }, {
    title: 'Commute',
    path: path.replace(':id', 'commute'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
  }, {
    title: 'Shop & Eat',
    path: path.replace(':id', 'ammenities'),
    main: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', function () {
      return setWidth(window.innerWidth);
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_modal__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MediaContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    routes: routes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, routes.map(function (_ref2, idx) {
    var path = _ref2.path,
        main = _ref2.main;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: idx,
      path: path,
      children: main
    });
  })))));
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Modal = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "modal__Modal",
  componentId: "sc-1ps7cw1-0"
})(["position:fixed;height:100vh;width:100vw;backdrop-filter:blur(20px);background-color:rgba(0,0,0,0.6);top:0;left:0;z-index:1000;transition:opacity 0.5s;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var onTransistionEnd = function onTransistionEnd(event) {
    if (event.target === ref.current) {
      event.stopPropagation();
      history.goBack();
    }
  };

  var onClick = function onClick(event) {
    if (event.target === ref.current) {
      event.target.style.opacity = 0;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
    ref: ref,
    onClick: onClick,
    onTransitionEnd: onTransistionEnd
  }, children);
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CarouselFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var _ExitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);







var Head = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Head",
  componentId: "itgxzl-0"
})(["display:flex;padding:8px 8px 0px;"]);
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Head__NavBar",
  componentId: "itgxzl-1"
})(["display:flex;flex:1 1 0px;overflow:hidden;"]);
var MenuCTA = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Head__MenuCTA",
  componentId: "itgxzl-2"
})(["display:inline-block;padding-left:16px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var routes = _ref.routes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Head, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CarouselFixed__WEBPACK_IMPORTED_MODULE_3__["default"], null, routes && routes.map(function (_ref2, idx) {
    var title = _ref2.title,
        path = _ref2.path;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: idx,
      title: title,
      pathname: path
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuCTA, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_4__["SaveButton"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_4__["ShareButton"], {
    margin: "0 0 0 16px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExitButton__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselFixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (_CarouselFixed__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _SlideButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Carousel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselFixed__Carousel",
  componentId: "sc-1lgd1xf-0"
})(["position:relative;width:100%;overflow:visible;"]);
var Position = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselFixed__Position",
  componentId: "sc-1lgd1xf-1"
})(["position:absolute;top:", ";right:", ";left:", ";z-index:1;"], function (_ref) {
  var top = _ref.top;
  return top;
}, function (_ref2) {
  var right = _ref2.right;
  return right;
}, function (_ref3) {
  var left = _ref3.left;
  return left;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref4) {
  var children = _ref4.children,
      btnLeft = _ref4.btnLeft,
      btnRight = _ref4.btnRight,
      _ref4$top = _ref4.top,
      top = _ref4$top === void 0 ? '7px' : _ref4$top,
      _ref4$right = _ref4.right,
      right = _ref4$right === void 0 ? '0px' : _ref4$right,
      _ref4$initial = _ref4.initial,
      initial = _ref4$initial === void 0 ? 0 : _ref4$initial;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      clipped = _useState4[0],
      setClipped = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      shift = _useState6[0],
      setShift = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      max = _useState8[0],
      setMax = _useState8[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var resize = function resize(event) {
    var _ref$current = ref.current,
        childNodes = _ref$current.childNodes,
        style = _ref$current.style,
        scrollWidth = _ref$current.scrollWidth,
        clientWidth = _ref$current.clientWidth;
    var size = Array.from(childNodes).reduce(function (size, child) {
      return size + child.offsetWidth;
    }, 0); // why is animation necessary, tested with setting css directly but did not work

    var keyframe = [{
      transform: "translateX(-".concat(shift, "%)")
    }, {
      transform: "translateX(0%)"
    }];
    var duration = {
      duration: 0,
      fill: 'forwards'
    };
    var animation = ref.current.animate(keyframe, duration);
    setClipped(scrollWidth - clientWidth > 0);
    setMax(100 * (size / clientWidth - 1));
    setShift(0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', resize);
    resize();
    return function () {
      return window.removeEventListener('resize', resize);
    };
  }, []);

  var onShift = function onShift() {
    var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return function (event) {
      event.preventDefault();
      var next = Math.max(0, Math.min(shift + dir * 100, max));
      var keyframe = [{
        transform: "translateX(-".concat(shift, "%)")
      }, {
        transform: "translateX(-".concat(next, "%)")
      }];
      var duration = {
        duration: 250 * Math.abs(next - shift) / 100,
        fill: 'forwards'
      };
      var animation = ref.current.animate(keyframe, duration);

      animation.onfinish = function () {
        return setShift(next);
      };
    };
  };

  var onClick = function onClick(event) {
    setSelected(parseInt(event.currentTarget.id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Carousel, null, clipped && shift < max && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Position, {
    top: top,
    right: right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btn: btnRight,
    onClick: onShift()
  })), clipped && shift > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Position, {
    top: top,
    left: right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btn: btnLeft,
    left: true,
    onClick: onShift(-1)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Body__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: children,
    ref: ref,
    onClick: onClick,
    selected: selected
  }));
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Body",
  componentId: "cvydko-0"
})(["overflow:hidden;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Body__Container",
  componentId: "cvydko-1"
})(["display:flex;overflow:visible;"]);
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _onClick = _ref.onClick,
      selected = _ref.selected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    ref: ref
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      id: idx,
      style: Object.assign({}, child.props.style, {
        flexShrink: 0
      }),
      onClick: function onClick(event) {
        if (child.props.onClick) {
          child.props.onClick(event);
        }

        ;

        _onClick(event);
      },
      selected: selected === idx
    });
  })));
}));

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);



var SlideButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["RoundButton"]).withConfig({
  displayName: "SlideButton",
  componentId: "b0c6rm-0"
})(["width:24px;height:24px;border-color:rgb(232,233,234);&:focus{box-shadow:rgba(134,144,153,0.18) 0px 8px 16px 0px,rgba(59,65,68,0.05) 0px 2px 4px;}"]);
var dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
var dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var btn = _ref.btn,
      left = _ref.left,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, btn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(btn, {
    onClick: onClick
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlideButton, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: left ? dLeft : dRight,
    fill: "rgb(59, 65, 68)"
  })))));
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }





var ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ExitButton",
  componentId: "nftv34-0"
})(["width:44px;height:44px;align-items:center;justify-content:center;display:inline-flex;cursor:pointer;&:hover{", "{fill:rgb(0,120,130);}}"], _buttons__WEBPACK_IMPORTED_MODULE_3__["Path"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  _objectDestructuringEmpty(_ref);

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var onClick = function onClick(event) {
    event.stopPropagation();
    history.goBack();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExitButton, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    style: {
      height: '24px',
      width: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    d: "M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z",
    fill: "#869099"
  })));
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);




var ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NavButton__ExitButton",
  componentId: "attbu7-0"
})(["width:44px;height:44px;align-items:center;justify-content:center;display:inline-flex;cursor:pointer;&:hover{", "{fill:rgb(0,120,130);}}"], _buttons__WEBPACK_IMPORTED_MODULE_3__["Path"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var id = _ref.id,
      title = _ref.title,
      pathname = _ref.pathname,
      onClick = _ref.onClick,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected;

  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])(),
      state = _useLocation.state;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: {
      pathname: pathname,
      state: state
    },
    replace: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderWidth: '0px 2px 0px',
      borderColor: 'transparent',
      borderStyle: 'solid'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_3__["StyledNavButton"], {
    id: id,
    selected: selected,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title))));
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _ResponsiveScheduleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);




var MediaPhotos = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Photos__MediaPhotos",
  componentId: "bqsz6c-0"
})(["position:relative;height 100%;background-color:rgb(0,0,0);"]);
var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Photos__CarouselContainer",
  componentId: "bqsz6c-1"
})(["position:relative;height:100%;width:100%;flex:1 1 auto;border-top:1px solid rgb(59,65,68);@media (min-width:898px){width:calc(100% - 342px);}"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var home = _ref.home,
      innerWidth = _ref.innerWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MediaPhotos, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: home,
    innerWidth: innerWidth
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResponsiveScheduleForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    innerWidth: innerWidth
  }));
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);

/* harmony default export */ __webpack_exports__["default"] = (_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var _SlideButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Carousel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Carousel",
  componentId: "sc-3kuuoe-0"
})(["display:flex;flex-direction:column;height:100%;"]);
var Slides = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Carousel__Slides",
  componentId: "sc-3kuuoe-1"
})(["position:relative;overflow:hidden;display:flex;flex:1 1 0%;height:100%;width:100%;z-index:0;"]);
var Position = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Carousel__Position",
  componentId: "sc-3kuuoe-2"
})(["position:absolute;top:calc(50% - 12px);left:", ";right:", ";z-index:1;"], function (_ref) {
  var left = _ref.left;
  return left || 'auto';
}, function (_ref2) {
  var right = _ref2.right;
  return right || 'auto';
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var home = _ref3.home,
      innerWidth = _ref3.innerWidth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var address = home.address,
      price = home.price,
      rooms = home.rooms,
      imageURLs = home.imageURLs;
  var left = index - 1 < 0 ? imageURLs.length - 1 : index - 1;
  var right = (index + 1) % imageURLs.length;

  var onClick = function onClick() {
    var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (event) {
      event.preventDefault();

      if (left) {
        setIndex(!index ? imageURLs.length - 1 : index - 1);
      } else {
        setIndex((index + 1) % imageURLs.length);
      }
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Carousel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Position, {
    left: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    left: true,
    onClick: onClick()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Position, {
    right: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClick(false)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slides, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    shift: '0%',
    src: imageURLs[index],
    zIndex: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: right,
    shift: '100%',
    src: imageURLs[right],
    zIndex: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: left,
    shift: '-100%',
    src: imageURLs[left],
    zIndex: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: home,
    innerWidth: innerWidth,
    index: index
  }));
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer",
  componentId: "sc-103l861-0"
})(["display:flex;align-items:center;border-top:1px solid rgb(134,144,153);font-size:14px;color:rgb(255,255,255);line-height:1.43;"]);
var Count = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Count",
  componentId: "sc-103l861-1"
})(["padding:16px;"]);
var Summary = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Summary",
  componentId: "sc-103l861-2"
})(["flex:1 1 auto;text-align:center;padding:8px 0px;margin-right:", ";"], function (_ref) {
  var offset = _ref.offset;
  return offset;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var home = _ref2.home,
      index = _ref2.index,
      innerWidth = _ref2.innerWidth;
  var address = home.address,
      price = home.price,
      rooms = home.rooms,
      imageURLs = home.imageURLs;
  var pipe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      margin: '0px 8px'
    }
  }, "|");
  var offset = innerWidth < 898 ? '308px' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Count, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(index + 1, "/").concat(imageURLs.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Summary, {
    offset: offset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, pipe, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, pipe, rooms)));
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var SlideContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Slide__SlideContainer",
  componentId: "abqi-0"
})(["position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(", ");z-index:", ";"], function (_ref) {
  var shift = _ref.shift;
  return shift;
}, function (_ref2) {
  var zIndex = _ref2.zIndex;
  return zIndex;
});
var SlideFrame = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.picture.withConfig({
  displayName: "Slide__SlideFrame",
  componentId: "abqi-1"
})(["height:100%;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Slide__Image",
  componentId: "abqi-2"
})(["width:100%;height:100%;object-fit:contain;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var shift = _ref3.shift,
      src = _ref3.src,
      zIndex = _ref3.zIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlideContainer, {
    shift: shift,
    zIndex: zIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlideFrame, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: src
  })));
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);



var SlideButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["RoundButton"]).withConfig({
  displayName: "SlideButton",
  componentId: "c31ueo-0"
})(["height:48px;width:48px;border-style:none;background-color:rgb(59,65,68);&:hover{background-color:rgb(134,144,153);", "{fill:rgb(255,255,255);}}"], _buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["Path"]);
var dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
var dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var left = _ref.left,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlideButton, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    style: {
      height: '24px',
      width: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: left ? dLeft : dRight,
    fill: "#ffffff"
  }))));
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Forms_ScheduleForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);




var Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResponsiveScheduleForm__Sidebar",
  componentId: "sc-15v0448-0"
})(["position:absolute;right:8px;top:8px;bottom:16px;height:calc(100% -96px);width:332px;border-radius:8px;background-color:rgb(255,255,255);overflow-y:auto;overflow-x:hidden;z-index:100;border:1px solid rgb(232,233,234);"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ResponsiveScheduleForm__Footer",
  componentId: "sc-15v0448-1"
})(["position:absolute;right:4px;bottom:6px;z-index:100;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var innerWidth = _ref.innerWidth;

  if (innerWidth > 898) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sidebar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_ScheduleForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_3__["ScheduleButton"], {
      width: "300px",
      padding: "8px 16"
    }));
  }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);

/* harmony default export */ __webpack_exports__["default"] = (_ScheduleForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);





var ScheduleForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ScheduleForm",
  componentId: "sc-1xea4h9-0"
})(["display:flex;flex-direction:column;padding:16px;margin-top:24px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ScheduleForm__Title",
  componentId: "sc-1xea4h9-1"
})(["font-weight:bold;font-size:20px;color:rgb(59,65,68);line-height:1.2;margin-bottom:8px;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "ScheduleForm__Form",
  componentId: "sc-1xea4h9-2"
})(["display:flex;flex-direction:column;overflow:visible;padding:0 2px;"]);
var header = 'Schedule A Tour';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScheduleForm, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
    onSubmit: function onSubmit() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Body__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToolTip_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);



var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header",
  componentId: "sc-14xwl0p-0"
})(["display:flex;flex-direction:column;"]);
var TourType = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__TourType",
  componentId: "sc-14xwl0p-1"
})(["color:rgb(134,144,153);display:inline-flex;align-items:center;"]);
var TourTypeIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ToolTip_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Header__TourTypeIcon",
  componentId: "sc-14xwl0p-2"
})(["height:24px;width:24px;margin-left:4px;"]);
var tooltipMsg = 'If you\'d like to tour this home wihtout leaving yours, select the virtual tour type and discuss available options with the agent you are connected with.';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TourType, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Tour Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TourTypeIcon, {
    message: tooltipMsg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z",
    fill: "#869099"
  })))));
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Tip = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ToolTip__Tip",
  componentId: "t7toqr-0"
})(["position:fixed;top:", ";left:", ";z-index:5000;"], function (_ref) {
  var top = _ref.top;
  return top && "".concat(top, "px");
}, function (_ref2) {
  var right = _ref2.right;
  return right && "".concat(right, "px");
});
var Message = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ToolTip__Message",
  componentId: "t7toqr-1"
})(["background-color:rgb(255,255,255);border-radius:8px;border-color:rgb(253,253,253);padding:16px;font-family:arial;z-index:1;line-height:1.5;"]);
var Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ToolTip__Arrow",
  componentId: "t7toqr-2"
})(["position:absolute;top:", ";bottom:", ";left:", ";background-color:rgb(255,255,255);padding:9px;transform:rotate(45deg);border-radius:2px;"], function (_ref3) {
  var top = _ref3.top;
  return top && "".concat(top, "px");
}, function (_ref4) {
  var bottom = _ref4.bottom;
  return bottom && "".concat(bottom, "px");
}, function (_ref5) {
  var right = _ref5.right;
  return right && "".concat(right, "px");
});

var ToolTip = function ToolTip(_ref6) {
  var location = _ref6.location,
      message = _ref6.message;
  var x = location.x,
      y = location.y;
  var offset = 35;
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tip, {
    right: x - offset,
    top: y + offset + 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, {
    right: offset,
    top: -7
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, null, message))), document.body);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref7) {
  var className = _ref7.className,
      children = _ref7.children,
      message = _ref7.message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var toggle = function toggle() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (event) {
      var _event$currentTarget$ = event.currentTarget.getBoundingClientRect(),
          x = _event$currentTarget$.x,
          y = _event$currentTarget$.y;

      event.preventDefault();
      setLocation(show ? {
        x: x,
        y: y
      } : null);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onMouseOver: toggle(),
    onMouseOut: toggle(false)
  }, children, location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToolTip, {
    location: location,
    message: message
  }));
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _Next7DaysSchedule_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
/* harmony import */ var _CheckBox_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _ErrorMessage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Body__Input",
  componentId: "uzg1xf-0"
})(["border-radius:8px;line-height:1.5;font-size:16px;border-color:rgb(205,209,212);border-width:1px;border-style:solid;width:100%;box-sizing:border-box;padding:8px;"]);
var FormRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Body__FormRow",
  componentId: "uzg1xf-1"
})(["display:block;margin:", ";padding:", ";&.multi{display:flex;}"], function (_ref) {
  var margin = _ref.margin;
  return margin;
}, function (_ref2) {
  var padding = _ref2.padding;
  return padding || '4px 0';
});
var TourType = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["BasicButton"]).withConfig({
  displayName: "Body__TourType",
  componentId: "uzg1xf-2"
})(["border-radius:", ";border-color:rgb(205,209,212);width:50%;&.selected{background-color:rgb(0,120,130);color:rgb(255,255,255);border-color:rgb(0,120,130);}&.selected:hover{color:rgb(0,120,130);background-color:rgb(255,255,255);}&:hover{background-color:rgb(232,233,234);}"], function (_ref3) {
  var borderRadius = _ref3.borderRadius;
  return borderRadius;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var onBlur = function onBlur(handler) {
    return function (event) {
      return handler(event.target.value === '');
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      selectedType = _useState2[0],
      setType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      noName = _useState4[0],
      setNameCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      noPhone = _useState6[0],
      setPhoneCheck = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      noEmail = _useState8[0],
      setEmailCheck = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      financeChecked = _useState10[0],
      setFinance = _useState10[1];

  var selectType = function selectType() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (event) {
      event.preventDefault();
      setType(val);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TourType, {
    className: selectedType ? 'selected' : '',
    onClick: selectType(),
    borderRadius: "8px 0 0 8px"
  }, "In-Person"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TourType, {
    className: !selectedType ? 'selected' : '',
    onClick: selectType(false),
    borderRadius: "0 8px 8px 0"
  }, "Virtual")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRow, {
    margin: "0 -4px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Next7DaysSchedule_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRow, {
    className: "multi"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    type: "text",
    placeholder: "Name",
    onBlur: onBlur(setNameCheck)
  }), noName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: 'Enter your name.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingLeft: '8px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    type: "text",
    placeholder: "Phone",
    onBlur: onBlur(setPhoneCheck)
  }), noPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: 'Enter a valid phone number.'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    type: "text",
    placeholder: "Email",
    onBlur: onBlur(setEmailCheck)
  }), noEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: 'Enter a valid email.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckBox_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    status: financeChecked,
    toggle: setFinance
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRow, {
    padding: "4px 0 0 0",
    margin: "0 0 8px 0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["ScheduleButton"], {
    width: "100%",
    padding: "8px 16px"
  })));
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _CarouselFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _DateTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80);






var Next7Days = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Next7DaysSchedule__Next7Days",
  componentId: "sc-1we4kbm-0"
})(["position:relative;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_buttons__WEBPACK_IMPORTED_MODULE_2__["RoundButton"]).withConfig({
  displayName: "Next7DaysSchedule__Button",
  componentId: "sc-1we4kbm-1"
})(["width:32px;height:32px;border-color:rgb(232,233,234);&:focus{box-shadow:rgba(134,144,153,0.18) 0px 8px 16px 0px,rgba(59,65,68,0.05) 0px 2px 4px;}"]);
var dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
var dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';

var SlideButton = function SlideButton(left) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: left ? dLeft : dRight,
    fill: 'rgb(59, 65, 68)'
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var btnRight = SlideButton();
  var btnLeft = SlideButton(true);
  var dates = Object(_helper__WEBPACK_IMPORTED_MODULE_5__["default"])().map(function (_ref, idx) {
    var day = _ref.day,
        date = _ref.date,
        month = _ref.month;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: idx,
      day: day,
      date: date,
      month: month
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Next7Days, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CarouselFixed__WEBPACK_IMPORTED_MODULE_3__["default"], {
    top: "calc(50% - 16px)",
    right: "-16px",
    btnRight: btnRight,
    btnLeft: btnLeft,
    style: {
      marginLeft: '-4px',
      marginRight: '-4px'
    }
  }, dates));
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);



var DateTile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DateTile",
  componentId: "sc-1hscg2p-0"
})(["border-width:8px 4px 0px;width:25%;border-style:solid;border-color:transparent;box-sizing:border-box;flex-shrink:0;padding:2px 0;"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DateTile__Date",
  componentId: "sc-1hscg2p-1"
})(["font-weight:bold;line-height:1.2;font-size:20px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_buttons_jsx__WEBPACK_IMPORTED_MODULE_2__["BasicButton"]).withConfig({
  displayName: "DateTile__Button",
  componentId: "sc-1hscg2p-2"
})(["border-radius:8px;background-color:rgb(255,255,255);padding:8px;border-width:1px;border-color:rgb(205,209,212);width:100%;border-style:solid;line-height:1.4;font-size:14px;font-family:arial;cursor:pointer;box-shadow:", ";"], function (_ref) {
  var selected = _ref.selected;
  return selected ? 'rgb(0, 173, 187) 0px 0px 0px 2px;' : '';
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var id = _ref2.id,
      day = _ref2.day,
      date = _ref2.date,
      month = _ref2.month,
      onClick = _ref2.onClick,
      _ref2$selected = _ref2.selected,
      selected = _ref2$selected === void 0 ? false : _ref2$selected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateTile, {
    id: id,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    onClick: function onClick(event) {
      return event.preventDefault();
    },
    selected: selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, day), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date, null, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, month)));
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _db_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_db_constants__WEBPACK_IMPORTED_MODULE_0__);


var getDateInfo = function getDateInfo(date) {
  return {
    day: _db_constants__WEBPACK_IMPORTED_MODULE_0__["DAYS"][date.getDay()],
    date: date.getDate(),
    month: _db_constants__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][date.getMonth()]
  };
};

var getNext7Days = function getNext7Days() {
  var nextWeek = [];
  var offset = 1000 * 60 * 60 * 24;
  var today = new Date().getTime();

  for (var i = 0; i < 7; i += 1) {
    nextWeek.push(getDateInfo(new Date(today + i * offset)));
  }

  return nextWeek;
};

/* harmony default export */ __webpack_exports__["default"] = (getNext7Days);

/***/ }),
/* 81 */
/***/ (function(module, exports) {

var MONTHS = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AUG',
  8: 'SEPT',
  9: 'OCT',
  10: 'NOV',
  11: 'DEC'
};
var TAGS = ['FOR SALE', 'NEW', 'FOR SALE BY OWNER', 'SOLD', 'OPEN', 'NEW CONSTRUCTION', 'QUICK MOVE-IN', 'BUILDABLE PLAN'];
var DAYS = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THR',
  5: 'FRI',
  6: 'SAT'
};
module.exports = {
  MONTHS: MONTHS,
  TAGS: TAGS,
  DAYS: DAYS
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Rect = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.rect.withConfig({
  displayName: "CheckBox__Rect",
  componentId: "sc-1wiguom-0"
})([""]);
var CheckBoxField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CheckBox__CheckBoxField",
  componentId: "sc-1wiguom-1"
})(["padding:4px 0 8px;display:flex;align-items:center;"]);
var CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "CheckBox",
  componentId: "sc-1wiguom-2"
})(["opacity:0;position:absolute;width:20px;height:20px;z-index:1;"]);
var FieldMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CheckBox__FieldMessage",
  componentId: "sc-1wiguom-3"
})(["margin:0 0 0 4px;color:rgb(134,144,153);font-size:12px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var status = _ref.status,
      toggle = _ref.toggle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckBoxField, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckBox, {
    type: "checkbox",
    onClick: function onClick() {
      return toggle(!status);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    strokeWidth: "2",
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    "stroke-width": "2",
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "4",
    fill: "rgb(0, 120, 130)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 13l2.5 2L15 9"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    "data-cb-part": "background",
    strokeWidth: "2",
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "4",
    fill: "none",
    stroke: "rgb(205, 209, 212)"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldMessage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, status ? 'A licensed lender will call you soon' : 'I want to talk about financing')));
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Error = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__Error",
  componentId: "sc-11xjjxf-0"
})(["display:flex;padding:4px 0 0 0;align-items:center;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__Icon",
  componentId: "sc-11xjjxf-1"
})(["width:16px;height 16px;"]);
var Message = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__Message",
  componentId: "sc-11xjjxf-2"
})(["color:rgb(255,94,63);font-size:12px;line-height:1.1;margin:0 4px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    style: {
      width: '16px',
      height: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.29 11.974h-2.66v-2.66h2.66v2.66zm0 10.628h-2.66v-8.687h2.66v8.687zm-1.33 6.658c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6z",
    fill: "rgb(255, 94, 63)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, null, message));
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Advisory = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Advisory",
  componentId: "sc-1gyf5e9-0"
})(["display:flex;align-items:center;"]);
var AdvisoryIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__AdvisoryIcon",
  componentId: "sc-1gyf5e9-1"
})([""]);
var AdvisoryMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__AdvisoryMessage",
  componentId: "sc-1gyf5e9-2"
})(["margin:0 0 0 8px;color:rgb(0,120,130);"]);
var Disclosure = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Disclosure",
  componentId: "sc-1gyf5e9-3"
})(["padding:4px;color:rgb(134,144,153);font-size:10px;line-height:1.6;"]);
var warning = 'Public Health Advisory';
var disclosure = 'By pressing Schedule A Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use  Trulia does not endorse any real estate professionals ';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Advisory, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AdvisoryIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "svg",
    viewBox: "0 0 32 32",
    style: {
      width: '24px',
      height: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M27.549 26.933H4.371L15.96 3.755l11.589 23.178zM14.63 21.28v2.66h2.66v-2.66h-2.66zm0-8.585v6.643h2.66v-6.643h-2.66z",
    fill: "rgb(0, 120, 130)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AdvisoryMessage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, warning))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Disclosure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, disclosure)));
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var _ResponsiveScheduleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);




var MediaMap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Map__MediaMap",
  componentId: "sc-1wwjn83-0"
})(["position:relative;height:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var position = _ref.position,
      innerWidth = _ref.innerWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MediaMap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapEmbed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: position
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResponsiveScheduleForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    innerWidth: innerWidth
  }));
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_markerclustererplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _google_markerclustererplus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_google_markerclustererplus__WEBPACK_IMPORTED_MODULE_2__);


 // import locations from '../helper/testData.js';

var MapEmbed = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MapEmbed",
  componentId: "sc-85n848-0"
})(["height:100%;"]);
var icon = 'https://www.trulia.com/images/app-shopping/map-marker-txl3R/MapMarkerHouseIcon.svg';
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var position = _ref.position,
      _ref$markers = _ref.markers,
      markers = _ref$markers === void 0 ? [] : _ref$markers;
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var showMarkers = function showMarkers(map) {
    var selected;
    markers.map(function (option) {
      var infowindow = new google.maps.InfoWindow({
        content: "<div>".concat(option.school, "</div>")
      });
      var marker = new google.maps.Marker(option);
      marker.setMap(map);
      marker.addListener('click', function (event) {
        if (selected) selected.close();
        selected = infowindow;
        infowindow.open(map, marker);
      });
      marker.addListener('mouseover', function () {
        infowindow.open(map, marker);
      });
      marker.addListener('mouseout', function () {
        if (selected !== infowindow) {
          infowindow.close();
        }
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof google !== 'undefined') {
      var _google$maps$ControlP = google.maps.ControlPosition,
          TOP_LEFT = _google$maps$ControlP.TOP_LEFT,
          LEFT_BOTTOM = _google$maps$ControlP.LEFT_BOTTOM;
      var map = new google.maps.Map(ref.current, {
        center: position,
        zoom: 12,
        fullscreenControlOptions: {
          position: TOP_LEFT
        },
        streetViewControl: false,
        zoomControlOptions: {
          position: LEFT_BOTTOM
        }
      });
      var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: icon
      });
      showMarkers(map); // const markerCluster = new MarkerClusterer(map, markers, { imagePath: '/homes/m' });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapEmbed, {
    className: "tall",
    ref: ref
  });
});

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@google/markerclustererplus");

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StreetViewEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _ResponsiveScheduleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);




var MediaStreetView = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StreetView__MediaStreetView",
  componentId: "wxvxr5-0"
})(["position:relative;height:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var position = _ref.position,
      innerWidth = _ref.innerWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MediaStreetView, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StreetViewEmbed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: position
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResponsiveScheduleForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    innerWidth: innerWidth
  }));
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

 // import locations from '../helper/testData.js';

var StreetViewEmbed = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StreetViewEmbed",
  componentId: "rq27yq-0"
})(["height:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var position = _ref.position;
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof google !== 'undefined') {
      var LEFT_BOTTOM = google.maps.ControlPosition.LEFT_BOTTOM;
      var streetView = new google.maps.StreetViewPanorama(ref.current, {
        position: position,
        pov: {
          heading: 165,
          pitch: 0
        },
        zoom: 1,
        zoomControlOptions: {
          position: LEFT_BOTTOM
        }
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StreetViewEmbed, {
    ref: ref
  });
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var _Forms_SchoolForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _Forms_SchoolForm_dummyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var MediaSchool = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Schools__MediaSchool",
  componentId: "sc-1ux66qx-0"
})(["position:relative;height:100%;"]);
var Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Schools__Sidebar",
  componentId: "sc-1ux66qx-1"
})(["position:absolute;right:8px;top:8px;bottom:16px;height:'calc(100% -96px)';width:332px;border-radius:8px;background-color:rgb(255,255,255);overflow-y:auto;z-index:100;border:1px solid rgb(232,233,234);&.collapsed{top:auto;}"]);
var schoolIcon = 'https://www.trulia.com/images/txl3R/map_markers/schools/SchoolDotIcon.svg';
var assignedIcon = 'https://www.trulia.com/images/txl3R/map_markers/schools/AssignedSchoolDotIcon.svg';
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var position = _ref.position;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Assigned'),
      _useState4 = _slicedToArray(_useState3, 2),
      typeFilter = _useState4[0],
      setType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All Grades'),
      _useState6 = _slicedToArray(_useState5, 2),
      levelFilter = _useState6[0],
      setLevel = _useState6[1];

  var filter = function filter() {
    return _Forms_SchoolForm_dummyData__WEBPACK_IMPORTED_MODULE_4__["default"].filter(function (school) {
      var level = school.level,
          type = school.type;

      if (type === typeFilter || typeFilter === 'All') {
        if (level === levelFilter || levelFilter === 'All Grades') {
          return true;
        }
      }

      return false;
    });
  };

  var filteredSchools = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(filter, [typeFilter, levelFilter]);
  var markers = filteredSchools.map(function (_ref2) {
    var school = _ref2.school,
        position = _ref2.position,
        type = _ref2.type;
    return {
      position: position,
      icon: type === 'Assigned' ? assignedIcon : schoolIcon,
      school: school
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MediaSchool, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapEmbed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: position,
    markers: markers
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sidebar, {
    className: collapsed ? 'collapsed' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_SchoolForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    schools: filteredSchools,
    collapsed: collapsed,
    onCollapse: function onCollapse() {
      return setCollapsed(!collapsed);
    },
    typeFilter: typeFilter,
    setType: setType,
    levelFilter: levelFilter,
    setLevel: setLevel
  })));
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchoolForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);

/* harmony default export */ __webpack_exports__["default"] = (_SchoolForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);





var SchoolForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SchoolForm",
  componentId: "sc-1adqz44-0"
})(["display:flex;flex-direction:column;height:100%;wide:100%;padding:8px;border:1px solid rgb(232,233,234);border-radius:8px;box-sizing:border-box;"]);
var Disclosure = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SchoolForm__Disclosure",
  componentId: "sc-1adqz44-1"
})(["padding-bottom:8px;font-size:12px;line-height:1.33;color:rgb(134,144,153);"]);
var levels = ['Elementary', 'Middle', 'High', 'All Grades'];
var types = ['Assigned', 'Public', 'Private', 'All'];
var disclosure = 'Check with the applicable school district prior to making a decision based on these schools.';
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var schools = _ref.schools,
      collapsed = _ref.collapsed,
      onCollapse = _ref.onCollapse,
      setType = _ref.setType,
      typeFilter = _ref.typeFilter,
      setLevel = _ref.setLevel,
      levelFilter = _ref.levelFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolForm, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onCollapse,
    collapsed: collapsed
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    types: types,
    levels: levels,
    typeFilter: typeFilter,
    setType: setType,
    levelFilter: levelFilter,
    setLevel: setLevel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Disclosure, null, disclosure), !collapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    schools: schools,
    typeFilter: typeFilter,
    levelFilter: levelFilter
  }));
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header",
  componentId: "sc-19k08fv-0"
})(["display:flex;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Header__Title",
  componentId: "sc-19k08fv-1"
})(["margin:0 8px 8px 0;width:100%;flex:1 1 0px;"]);
var CollapseIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__CollapseIcon",
  componentId: "sc-19k08fv-2"
})(["width:20px;height:20px;cursor:pointer;"]);
var header = 'Schools';

var Collapse = function Collapse(_ref) {
  var onClick = _ref.onClick,
      collapsed = _ref.collapsed;
  var collapsedIcon = 'M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z';
  var expandIcon = 'M15.98 14.825l-7.055 7.147-1.893-1.869 8.951-9.067 8.927 9.069-1.896 1.866z';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CollapseIcon, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "svg",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: collapsed ? expandIcon : collapsedIcon,
    fill: "#869099"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var onClick = _ref2.onClick,
      collapsed = _ref2.collapsed;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, header), onClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, {
    onClick: onClick,
    collapsed: collapsed
  }));
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CarouselFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);




var Types = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Filters__Types",
  componentId: "sc-1i2189s-0"
})(["width:50%;"]);
var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Filters__DropDown",
  componentId: "sc-1i2189s-1"
})(["position:relative;padding:8px;border:1px solid rgb(205,209,212);border-radius:8px;"]);
var Current = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Filters__Current",
  componentId: "sc-1i2189s-2"
})(["display:flex;"]);
var Choices = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select.withConfig({
  displayName: "Filters__Choices",
  componentId: "sc-1i2189s-3"
})(["position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;width:100%;height:100%;cursor:pointer;"]);
var Value = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Filters__Value",
  componentId: "sc-1i2189s-4"
})(["flex:1 1 auto;font-weight:bold;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Filters__Icon",
  componentId: "sc-1i2189s-5"
})(["width:16px;height:24px;"]);

var TypeFilter = function TypeFilter(_ref) {
  var types = _ref.types,
      setType = _ref.setType,
      typeFilter = _ref.typeFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Types, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDown, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Current, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, null, typeFilter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "svg",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
    fill: "#869099"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Choices, {
    value: typeFilter,
    onChange: function onChange(event) {
      return setType(event.target.value);
    }
  }, types && types.map(function (type, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: idx,
      value: type
    }, type);
  }))));
};

var Levels = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Filters__Levels",
  componentId: "sc-1i2189s-6"
})(["padding:8px 0 18px 0;margin:0 -2px 0 -2px;"]);

var LevelFilter = function LevelFilter(_ref2) {
  var levels = _ref2.levels,
      setLevel = _ref2.setLevel,
      levelFilter = _ref2.levelFilter;

  var changeLevel = function changeLevel(event) {
    event.preventDefault();
    setLevel(event.target.innerText);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Levels, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CarouselFixed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    initial: 3
  }, levels && levels.map(function (level, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_3__["StyledNavButton"], {
      key: idx,
      onClick: changeLevel,
      style: {
        fontSize: '14px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, level));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var types = _ref3.types,
      levels = _ref3.levels,
      setType = _ref3.setType,
      typeFilter = _ref3.typeFilter,
      setLevel = _ref3.setLevel,
      levelFilter = _ref3.levelFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeFilter, {
    types: types,
    setType: setType,
    typeFilter: typeFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LevelFilter, {
    levels: levels,
    levelFilter: levelFilter,
    setLevel: setLevel
  }));
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Other_Auxilliary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);



var SchoolList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__SchoolList",
  componentId: "sc-5nz74z-0"
})(["overflow-y:auto;padding:0 8px;overflow-x:hidden;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "List__Row",
  componentId: "sc-5nz74z-1"
})(["margin:-16px -8px 0 -8px;"]);
var School = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__School",
  componentId: "sc-5nz74z-2"
})(["display:flex;flex-direction:column;border-width:16px 8px 0px 8px;border-style:solid;border-color:transparent;box-sizing:border-box;white-space:nowrap;"]);
var SchoolName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__SchoolName",
  componentId: "sc-5nz74z-3"
})(["color:rgb(0,120,130);font-weight:bold;font-size:16px;line-height:1.5;"]);
var SchoolAddress = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__SchoolAddress",
  componentId: "sc-5nz74z-4"
})(["font-weight:bold;font-size:12px;line-height:1.33;"]);
var SchoolAddl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__SchoolAddl",
  componentId: "sc-5nz74z-5"
})(["color:rgb(134,144,153);font-size:12px;line-height:1.33;"]);
var Rating = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__Rating",
  componentId: "sc-5nz74z-6"
})(["flex:0 0 auto;border-width:16px 8px 0px 8px;border-style:solid;border-color:transparent;box-sizing:border-box;"]);
var RatingBubble = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "List__RatingBubble",
  componentId: "sc-5nz74z-7"
})(["min-width:64px;min-height:64px;background-color:rgb(59,65,68);border-radius:200px;padding:16px 12px 0 12px;box-sizing:border-box;justify-center:center;"]);
var Score = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "List__Score",
  componentId: "sc-5nz74z-8"
})(["font-size:28px;color:rgb(255,255,255);font-weight:bold;"]);
var MaxScore = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "List__MaxScore",
  componentId: "sc-5nz74z-9"
})(["font-size:14px;color:rgb(255,255,255);line-height:1.1"]);

var SchoolRating = function SchoolRating(_ref) {
  var rating = _ref.rating;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rating, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RatingBubble, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Score, null, rating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MaxScore, null, "/10")));
};

var SchoolInfo = function SchoolInfo(_ref2) {
  var school = _ref2.school,
      address = _ref2.address,
      grades = _ref2.grades,
      size = _ref2.size,
      distance = _ref2.distance;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(School, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolName, null, school), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolAddress, null, address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolAddl, null, grades, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Other_Auxilliary__WEBPACK_IMPORTED_MODULE_2__["Dot"], null), size, " Students", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Other_Auxilliary__WEBPACK_IMPORTED_MODULE_2__["Dot"], null), distance));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var schools = _ref3.schools,
      collapsed = _ref3.collapsed,
      typeFilter = _ref3.typeFilter,
      levelFilter = _ref3.levelFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0
    }
  }, schools.map(function (_ref4, idx) {
    var school = _ref4.school,
        rating = _ref4.rating,
        address = _ref4.address,
        grades = _ref4.grades,
        size = _ref4.size,
        distance = _ref4.distance,
        type = _ref4.type,
        level = _ref4.level,
        assigned = _ref4.assigned;

    if (type === typeFilter || typeFilter === 'All' || type === 'Assigned' && typeFilter === 'Public') {
      if (level === levelFilter || levelFilter === 'All Grades') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
          key: idx
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolRating, {
          rating: rating
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SchoolInfo, {
          school: school,
          address: address,
          grades: grades,
          size: size,
          distance: distance
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Other_Auxilliary__WEBPACK_IMPORTED_MODULE_2__["Divider"], null));
      }

      ;
    }

    ;
  })));
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot", function() { return Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Dot = function Dot() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      margin: '0 4px '
    }
  }, "\u2022");
};

var Divider = function Divider() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: '4px 0 8px 0',
      lineHeight: 0.1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '280px',
      height: '1px',
      backgroundColor: 'rgb(232, 233, 234)'
    }
  }));
};



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);

var levels = ['Elementary', 'Middle', 'High'];
var types = ['Public', 'Private'];
var grades = {
  Elementary: 'PK-5',
  Middle: '6-8',
  High: '9-12'
};
var schools = [];
var cities = Array(3).fill(0).map(function () {
  return faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.city();
});
var position = {
  lat: 37.869260,
  lng: -122.254811
};

for (var i = 0; i < 100; i += 1) {
  var level = faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.arrayElement(levels);
  var type = faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.arrayElement(types);
  var city = faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.arrayElement(cities);
  var latOffset = faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number({
    min: -0.1,
    max: 0.1,
    precision: 0.01
  });
  var lngOffset = faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number({
    min: -0.1,
    max: 0.1,
    precision: 0.01
  });
  schools.push({
    school: "".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.name.lastName(), " ").concat(level, " School"),
    rating: faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number({
      min: 4,
      max: 9,
      precision: 1
    }),
    address: "".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.address.streetAddress(), ", ").concat(city, ", CA"),
    grades: grades[level],
    size: faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number({
      min: 500,
      max: 2000,
      precision: 1
    }),
    distance: "".concat(faker__WEBPACK_IMPORTED_MODULE_0___default.a.random.number({
      min: 1,
      max: 5,
      precision: 1
    }), "mi"),
    type: Math.random() > 0.1 ? type : 'Assigned',
    level: level,
    position: {
      lat: position.lat + latOffset,
      lng: position.lng + lngOffset
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (schools);

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);


var setupMapAPI = function setupMapAPI() {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  // Create the script tag, set the appropriate attributes
  var script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__["code"], "&callback=initMap");
  script.defer = true;
  script.async = true; // Attach your callback function to the `window` object

  window.initMap = function () {
    // JS API is loaded and available
    cb();
  }; // Append the 'script' element to 'head'


  document.head.appendChild(script);
};

/* harmony default export */ __webpack_exports__["default"] = (setupMapAPI);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
var code = '';


/***/ })
/******/ ]);