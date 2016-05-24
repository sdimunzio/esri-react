define(['exports', 'react', 'react-router', 'app/components/map/index'], function (exports, _react, _reactRouter, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var Landing = function (_React$Component) {
    _inherits(Landing, _React$Component);

    function Landing() {
      _classCallCheck(this, Landing);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Landing).call(this));

      _this.state = { view: '2d' };
      return _this;
    }

    _createClass(Landing, [{
      key: 'setview',
      value: function setview(view) {
        debugger;
        this.setState({ view: view });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: 'landing' },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                _this2.setview('2d');
              } },
            '2d'
          ),
          ' |',
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                _this2.setview('3d');
              } },
            '3d'
          ),
          _react2.default.createElement(
            'div',
            { className: 'main' },
            _react2.default.createElement(_index.Map, { view: this.state.view })
          )
        );
      }
    }]);

    return Landing;
  }(_react2.default.Component);

  exports.default = Landing;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcbGFuZGluZy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BSXFCLE87OztBQUVuQix1QkFBYztBQUFBOztBQUFBOztBQUVaLFlBQUssS0FBTCxHQUFXLEVBQUMsTUFBSyxJQUFOLEVBQVg7QUFGWTtBQUdiOzs7OzhCQUVPLEksRUFBSztBQUNUO0FBQ0YsYUFBSyxRQUFMLENBQWMsRUFBQyxVQUFELEVBQWQ7QUFDRDs7OytCQUVRO0FBQUE7O0FBQ1AsZUFBUTtBQUFBO1VBQUEsRUFBSyxXQUFVLFNBQWY7VUFDQTtBQUFBO1lBQUEsRUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFTLG1CQUFJO0FBQUMsdUJBQUssT0FBTCxDQUFhLElBQWI7QUFBbUIsZUFBN0M7WUFBQTtBQUFBLFdBREE7VUFBQTtVQUN1RDtBQUFBO1lBQUEsRUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFTLG1CQUFJO0FBQUMsdUJBQUssT0FBTCxDQUFhLElBQWI7QUFBbUIsZUFBN0M7WUFBQTtBQUFBLFdBRHZEO1VBR0U7QUFBQTtZQUFBLEVBQUssV0FBVSxNQUFmO1lBQ0EsNENBQUssTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUF0QjtBQURBO0FBSEYsU0FBUjtBQVFDOzs7O0lBckJnQyxnQkFBTSxTOztvQkFBdEIsTyIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXRcXGxhbmRpbmcuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayAgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnYXBwL2NvbXBvbmVudHMvbWFwL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlPXt2aWV3OicyZCd9XHJcbiAgfVxyXG5cclxuICBzZXR2aWV3KHZpZXcpe1xyXG4gICAgICBkZWJ1Z2dlcjtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3ZpZXd9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldHZpZXcoJzJkJyl9fT4yZDwvYT4gfDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldHZpZXcoJzNkJyl9fT4zZDwvYT5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICA8TWFwIHZpZXc9e3RoaXMuc3RhdGUudmlld30vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19