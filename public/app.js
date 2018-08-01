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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _iteminfo = __webpack_require__(1);

var _iteminfo2 = _interopRequireDefault(_iteminfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
window.Info = _iteminfo2.default;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  float: \'left\',\n  width: \'35%\',\n  height: \'35%\',\n  borderWidth: \'2px\',\n  textAlign: \'center\'\n'], ['\n  float: \'left\',\n  width: \'35%\',\n  height: \'35%\',\n  borderWidth: \'2px\',\n  textAlign: \'center\'\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font: \'Helvetica\';\n  float:left;\n  margin-bottom: 0.5px;\n  margin-right: 300px;\n  font-size:18px\n'], ['\n  font: \'Helvetica\';\n  float:left;\n  margin-bottom: 0.5px;\n  margin-right: 300px;\n  font-size:18px\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font: \'Helvetica\';\n  font-weight: normal;\n  float:left;\n  margin-right: 1000px;\n  margin-bottom: 1px;\n  padding-bottom: 1px;\n  font-size: 16px\n'], ['\n  font: \'Helvetica\';\n  font-weight: normal;\n  float:left;\n  margin-right: 1000px;\n  margin-bottom: 1px;\n  padding-bottom: 1px;\n  font-size: 16px\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: fixed; /* Sit on top of the page content */\n  display: none; /* Hidden by default */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n  z-index: 2; /* Specify a stack order in case you\'re using a different order for other elements */\n  cursor: pointer; /* Add a pointer on hover */\n'], ['\n  position: fixed; /* Sit on top of the page content */\n  display: none; /* Hidden by default */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n  z-index: 2; /* Specify a stack order in case you\'re using a different order for other elements */\n  cursor: pointer; /* Add a pointer on hover */\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position:absolute;\n  top: 440px;\n  right: 1310px;\n  color: White;\n'], ['\n  position:absolute;\n  top: 440px;\n  right: 1310px;\n  color: White;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position:absolute;\n  top: 440px;\n  right: 530px;\n  color: White;\n'], ['\n  position:absolute;\n  top: 440px;\n  right: 530px;\n  color: White;\n']);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(22);

var _axios2 = _interopRequireDefault(_axios);

var _ShoeList = __webpack_require__(41);

var _ShoeList2 = _interopRequireDefault(_ShoeList);

var _ShoeItem = __webpack_require__(19);

var _ShoeItem2 = _interopRequireDefault(_ShoeItem);

var _ShoeInstagramItem = __webpack_require__(54);

var _ShoeInstagramItem2 = _interopRequireDefault(_ShoeInstagramItem);

var _Arrow = __webpack_require__(55);

var _Arrow2 = _interopRequireDefault(_Arrow);

var _styledComponents = __webpack_require__(18);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoStyle = _styledComponents2.default.div(_templateObject);
var Title = _styledComponents2.default.h3(_templateObject2);
var SubTitle = _styledComponents2.default.h5(_templateObject3);
var Overlay = _styledComponents2.default.div(_templateObject4);
var LeftArrow = _styledComponents2.default.div(_templateObject5);

var RightArrow = _styledComponents2.default.div(_templateObject6);

var Info = function (_React$Component) {
  _inherits(Info, _React$Component);

  function Info() {
    _classCallCheck(this, Info);

    var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this));

    _this.state = {
      insta_stories: [],
      currentInstagramIndex: 0
    };
    _this.nextSlide = _this.nextSlide.bind(_this);
    _this.previousSlide = _this.previousSlide.bind(_this);
    _this.updateCurrentInstagram = _this.updateCurrentInstagram.bind(_this);
    return _this;
  }

  _createClass(Info, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateInstagram();
    }
  }, {
    key: 'updateCurrentInstagram',
    value: function updateCurrentInstagram(newInstagram) {
      var _this2 = this;

      console.log(newInstagram, 'received instagram');
      this.setState({ currentInstagramIndex: newInstagram }, function () {
        console.log(_this2.state.currentInstagramIndex);
        console.log(_this2.state.currentInstagramIndex + 1);
      });
    }
  }, {
    key: 'getShoes',
    value: function getShoes() {
      var _this3 = this;

      _axios2.default.get('/shoes/shoe').then(function (response) {
        //console.log(response.data);
        _this3.setState({ insta_stories: response.data });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'updateInstagram',
    value: function updateInstagram() {
      var _this4 = this;

      _axios2.default.post('/shoes/shoe').then(function (response) {
        _this4.getShoes();
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'previousSlide',
    value: function previousSlide() {
      var lastIndex = this.state.insta_stories.length - 1;
      var currentImageIndex = this.state.currentInstagramIndex;
      var shouldResetIndex = currentImageIndex === 0;
      var index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

      this.setState({
        currentInstagramIndex: index
      });
      //console.log(this.state.currentInstagramIndex);
    }
  }, {
    key: 'nextSlide',
    value: function nextSlide() {
      var lastIndex = this.state.insta_stories.length - 1;
      var currentImageIndex = this.state.currentInstagramIndex;
      var shouldResetIndex = currentImageIndex === lastIndex;
      var index = shouldResetIndex ? 0 : currentImageIndex + 1;

      this.setState({
        currentInstagramIndex: index
      });

      //console.log('slice',this.state.insta_stories.slice(this.state.currentInstagramIndex,this.state.currentInstagramIndex+1)[0]);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        InfoStyle,
        null,
        _react2.default.createElement(
          Title,
          { className: 'title' },
          ' HOW OTHERS ARE WEARING IT '
        ),
        _react2.default.createElement(
          SubTitle,
          { style: { float: 'left' }, className: 'subtitle' },
          'Mention @Nike on Instagram for a chance to have your look featured.'
        ),
        _react2.default.createElement(_ShoeList2.default, {
          list1: this.state.insta_stories.slice(0, 2),
          list2: this.state.insta_stories.slice(2, 4),
          list3: this.state.insta_stories.slice(4, 5),
          list: this.state.insta_stories,
          updateCurrentInstagram: this.updateCurrentInstagram.bind(this)
        }),
        _react2.default.createElement(
          Overlay,
          { id: 'overlay' },
          _react2.default.createElement(
            'div',
            { className: 'carousel' },
            _react2.default.createElement(
              LeftArrow,
              { id: 'left_arrow' },
              _react2.default.createElement(_Arrow2.default, {
                direction: 'left',
                clickFunction: this.previousSlide,
                glyph: '\u25C0' })
            ),
            _react2.default.createElement(_ShoeInstagramItem2.default, {
              item: this.state.insta_stories.slice(this.state.currentInstagramIndex, this.state.currentInstagramIndex + 1)
            }),
            _react2.default.createElement(
              RightArrow,
              { id: 'r_arrow' },
              _react2.default.createElement(_Arrow2.default, {
                direction: 'right',
                clickFunction: this.nextSlide,
                glyph: '\u25B6' })
            )
          )
        )
      );
    }
  }]);

  return Info;
}(_react2.default.Component);

exports.default = Info;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ricardo/Documents/Bootcamp/front_end_capstone/service/node_modules/styled-components/dist/styled-components.browser.es.js'");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoeItem = function (_React$Component) {
  _inherits(ShoeItem, _React$Component);

  function ShoeItem(props) {
    _classCallCheck(this, ShoeItem);

    var _this = _possibleConstructorReturn(this, (ShoeItem.__proto__ || Object.getPrototypeOf(ShoeItem)).call(this, props));

    _this.state = {
      is_hovered: false
    };
    _this.handleHover = _this.handleHover.bind(_this);
    return _this;
  }

  _createClass(ShoeItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleHover',
    value: function handleHover() {
      this.setState({
        is_hovered: !this.state.is_hovered
      });
    }
  }, {
    key: 'OverlayOn',
    value: function OverlayOn() {
      console.log(this.props.item.id, 'props id');
      this.props.updateCurrentInstagram(this.props.item.id - 1);
      document.getElementById("overlay").style.display = "block";
    }
  }, {
    key: 'OverlayOff',
    value: function OverlayOff() {
      document.getElementById("overlay").style.display = "none";
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var div2 = this.state.is_hovered ? {
        'background': 'rgba(255,255,255,0.75)',
        'width': '150px',
        'height': '50px',
        'borderRadius': '6px',
        'position': 'relative',
        'top': '220px',
        'right': '-100px',
        'textAlign': 'center',
        'lineHeight': '50px'
      } : {
        'background': 'rgba(255,255,255,0)',
        'width': '150px',
        'height': '50px',
        'borderRadius': '6px',
        'position': 'relative',
        'top': '220px',
        'right': '-100px',
        'textAlign': 'center',
        'lineHeight': '50px'
      };

      var image_shoe = {
        height: '350px',
        width: '350px',
        'marginTop': '0px',
        'paddingTop': '0px'
      };

      var insta_user = {
        'textAlign': 'left'
      };

      return _react2.default.createElement(
        'div',
        { style: {
            'marginBottom': '140px',
            'verticalAlign': 'top',
            'marginRight': '10px'
          } },
        _react2.default.createElement(
          'div',
          { style: div2 },
          this.state.is_hovered ? 'Shop the look' : ''
        ),
        _react2.default.createElement('img', { src: this.props.item.image_url, style: image_shoe,
          onMouseEnter: this.handleHover, onMouseLeave: this.handleHover,
          onClick: function onClick() {
            _this2.OverlayOn();
          }
        }),
        _react2.default.createElement(
          'p',
          { style: insta_user },
          this.props.item.insta_user
        ),
        _react2.default.createElement(
          'p',
          { style: { 'color': 'gray',
              'textAlign': 'left' } },
          this.props.item.likes,
          ' Likes'
        )
      );
    }
  }]);

  return ShoeItem;
}(_react2.default.Component);

exports.default = ShoeItem;
;

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ricardo/Documents/Bootcamp/front_end_capstone/service/node_modules/axios/index.js'");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ricardo/Documents/Bootcamp/front_end_capstone/service/node_modules/react/index.js'");

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-flow:column;\n  float: left;\n'], ['\n  display: flex;\n  flex-flow:column;\n  float: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-flow:row;\n  float: left;\n  height: 450px;\n'], ['\n  display: flex;\n  flex-flow:row;\n  float: left;\n  height: 450px;\n']);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(18);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ShoeItem = __webpack_require__(19);

var _ShoeItem2 = _interopRequireDefault(_ShoeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexContainer = _styledComponents2.default.div(_templateObject);

//hi
var FlexContainer1 = _styledComponents2.default.div(_templateObject2);

var ShoeList = function (_React$Component) {
  _inherits(ShoeList, _React$Component);

  function ShoeList(props) {
    _classCallCheck(this, ShoeList);

    var _this = _possibleConstructorReturn(this, (ShoeList.__proto__ || Object.getPrototypeOf(ShoeList)).call(this, props));

    _this.state = {
      show_remaining: false
    };
    return _this;
  }

  _createClass(ShoeList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var flexStyle1 = !this.state.show_remaining ? { display: 'none' } : {
        display: 'flex',
        flow: 'row',
        float: 'left',
        height: '450px'
      };

      return _react2.default.createElement(
        FlexContainer,
        { className: 'flex-container' },
        _react2.default.createElement(
          FlexContainer1,
          { id: 'flex-container1' },
          this.props.list1.map(function (i) {
            return _react2.default.createElement(_ShoeItem2.default, { key: i.id, item: i, id: 'article', updateCurrentInstagram: _this2.props.updateCurrentInstagram.bind(_this2) });
          })
        ),
        _react2.default.createElement(
          'div',
          { style: flexStyle1
          },
          this.props.list2.map(function (i) {
            return _react2.default.createElement(_ShoeItem2.default, { key: i.id, item: i, id: 'article', updateCurrentInstagram: _this2.props.updateCurrentInstagram.bind(_this2) });
          })
        ),
        _react2.default.createElement(
          'div',
          { style: flexStyle1 },
          this.props.list3.map(function (i) {
            return _react2.default.createElement(_ShoeItem2.default, { key: i.id, item: i, id: 'article', updateCurrentInstagram: _this2.props.updateCurrentInstagram.bind(_this2) });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'show-remaining', style: {
              float: 'left',
              'fontSize': '14px',
              'paddingRight': '10px' }, onClick: function onClick() {
              var newState = !_this2.state.show_remaining;
              _this2.setState({ show_remaining: newState });
            } },
          !this.state.show_remaining ? _react2.default.createElement(
            'div',
            { className: 'show-remaining_underline', style: {
                'float': 'left',
                'fontSize': '16px',
                'textDecoration': 'underline',
                'marginTop': '50px'
              } },
            _react2.default.createElement(
              'a',
              null,
              'Load More (',
              this.props.list2.length + this.props.list3.length,
              ')'
            ),
            _react2.default.createElement(
              'a',
              null,
              '\u2228'
            )
          ) : _react2.default.createElement(
            'div',
            { className: 'show-remaining_underline', style: {
                'float': 'left',
                'fontSize': '16px',
                'textDecoration': 'underline',
                'marginTop': '50px'
              } },
            _react2.default.createElement(
              'a',
              null,
              'Hide'
            ),
            ' ',
            _react2.default.createElement(
              'a',
              null,
              '\u2227'
            )
          )
        )
      );
    }
  }]);

  return ShoeList;
}(_react2.default.Component);

exports.default = ShoeList;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoeInstagramItem = function (_React$Component) {
  _inherits(ShoeInstagramItem, _React$Component);

  function ShoeInstagramItem(props) {
    _classCallCheck(this, ShoeInstagramItem);

    var _this = _possibleConstructorReturn(this, (ShoeInstagramItem.__proto__ || Object.getPrototypeOf(ShoeInstagramItem)).call(this, props));

    _this.state = {
      item: []
    };
    return _this;
  }

  _createClass(ShoeInstagramItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //console.log(nextProps.item[0].image_url, 'image_url');
      this.setState({ item: nextProps.item[0] });
    }
  }, {
    key: "OverlayOff",
    value: function OverlayOff() {
      document.getElementById("overlay").style.display = "none";
    }
  }, {
    key: "render",
    value: function render() {
      var time = new Date();
      time = Math.floor((time - this.state.item.created_at * 1000) / (1000 * 3600 * 24)); //time in days
      var unitTime = 'days';
      if (time > 7) {
        time = Math.floor(time / 7);
        unitTime = 'weeks';
        if (time > 4) {
          time = Math.floor(time / 4);
          unitTime = 'months';
          if (time > 12) {
            time = Math.floor(time / 12);
            unitTime = 'years';
          }
        }
      }
      console.log(this, 'new time');
      return this.state.item.image_url !== '' ? _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          {
            style: {
              'backgroundColor': 'White',
              'height': '500px',
              'width': '750px',
              'position': 'absolute',
              'top': '200px',
              'right': '550px'
            } },
          _react2.default.createElement("img", { style: {
              'height': '450px',
              'width': '450px',
              'float': 'left',
              'margin': '20px'
            }, src: this.state.item.image_url }),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "button",
              { type: "button", style: {
                  'backgroundColor': 'White',
                  'height': '25px',
                  'width': '25px',
                  'fontSize': '20px',
                  'float': 'right',
                  'border': 'none'
                }, "aria-label": "Close", onClick: this.OverlayOff },
              _react2.default.createElement(
                "span",
                { "aria-hidden": "true" },
                "\xD7"
              )
            ),
            _react2.default.createElement("img", { style: {
                'height': '50px',
                'width': '50px',
                'float': 'left',
                'borderRadius': '50px',
                'marginTop': '20px'
              }, src: this.state.item.user_image_url }),
            _react2.default.createElement(
              "div",
              { style: _defineProperty({
                  'float': 'left',
                  'textAlign': 'left',
                  'marginLeft': '2px'
                }, "textAlign", 'left') },
              _react2.default.createElement(
                "p",
                { style: {
                    'fontFamily': 'Helvetica',
                    'fontWeight': 'normal',
                    'color': '#000000',
                    'fontSize': '14px',
                    'marginTop': '22px',
                    'paddingBottom': '0.5px',
                    'marginBottom': '1px'
                  } },
                " ",
                this.state.item.insta_user,
                " "
              ),
              _react2.default.createElement(
                "p",
                { style: {
                    'color': 'gray',
                    'fontSize': '12px',
                    'fontFamily': 'Helvetica',
                    'fontWeight': 'normal',
                    'marginTop': '0.5px',
                    'paddingBottom': '0.5px'
                  } },
                time,
                " ",
                unitTime,
                " ago "
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { style: {
                'color': '#C0C0C0',
                'position': 'relative',
                'top': '80px',
                'left': '480px',
                'height': '100px',
                'zIndex': '2',
                'width': '230px',
                'borderTop': 'solid',
                'borderWidth': '1px',
                'textAlign': 'left',
                'verticalAlign': 'top',
                'borderColor': '#C0C0C0'
              } },
            _react2.default.createElement(
              "p",
              { style: {
                  'fontFamily': 'Helvetica',
                  'fontWeight': 'bold',
                  'color': '#000000',
                  'fontSize': '15px',
                  'textAlign': 'left',
                  'zIndex': '1',
                  'float': 'left',
                  'position': 'relative',
                  'bottom': '500px'
                } },
              " In this Look "
            )
          )
        )
      ) : _react2.default.createElement(
        "div",
        null,
        "Loading..."
      );
    }
  }]);

  return ShoeInstagramItem;
}(_react2.default.Component);

exports.default = ShoeInstagramItem;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      clickFunction = _ref.clickFunction,
      glyph = _ref.glyph;
  return _react2.default.createElement(
    'div',
    {
      className: 'slide-arrow ' + direction,
      onClick: clickFunction },
    glyph
  );
};

exports.default = Arrow;

/***/ })

/******/ });