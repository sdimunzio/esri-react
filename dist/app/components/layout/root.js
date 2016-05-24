define(['exports', 'react', 'react-router', 'app/components/layout/header', 'app/components/layout/footer', 'app/components/layout/panel'], function (exports, _react, _reactRouter, _header, _footer, _panel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _header2 = _interopRequireDefault(_header);

  var _footer2 = _interopRequireDefault(_footer);

  var _panel2 = _interopRequireDefault(_panel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: 'root' },
          _react2.default.createElement(_header2.default, null),
          this.props.children,
          _react2.default.createElement(_footer2.default, null),
          _react2.default.createElement(_panel2.default, null)
        );
      }
    }]);

    return App;
  }(_react2.default.Component);

  exports.default = App;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxccm9vdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTXFCLEc7OztBQUVuQixtQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7K0JBRVE7O0FBRVAsZUFDRTtBQUFBO1VBQUEsRUFBSyxXQUFVLE1BQWY7VUFDRSxxREFERjtVQUVLLEtBQUssS0FBTCxDQUFXLFFBRmhCO1VBR0UscURBSEY7VUFJRTtBQUpGLFNBREY7QUFRRDs7OztJQWhCOEIsZ0JBQU0sUzs7b0JBQWxCLEciLCJmaWxlIjoiY29tcG9uZW50c1xcbGF5b3V0XFxyb290LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEhlYWRlciAgZnJvbSAnYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgIGZyb20gJ2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXInO1xyXG5pbXBvcnQgUGFuZWwgIGZyb20gJ2FwcC9jb21wb25lbnRzL2xheW91dC9wYW5lbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8UGFuZWwvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19