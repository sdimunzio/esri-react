define(['exports', 'react', 'react-router', 'app/components/filter/filterItemList', 'app/components/filter/filterSearch'], function (exports, _react, _reactRouter, _filterItemList, _filterSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _filterItemList2 = _interopRequireDefault(_filterItemList);

  var _filterSearch2 = _interopRequireDefault(_filterSearch);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
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

  var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
      key: 'render',
      value: function render() {
        var filterType = this.props.filterType;
        return _react2.default.createElement(
          'div',
          { className: '' },
          _react2.default.createElement(_filterSearch2.default, { filterType: filterType }),
          _react2.default.createElement(
            'div',
            { className: 'filter-item-list' },
            _react2.default.createElement(_filterItemList2.default, _extends({ loadList: true }, this.props))
          )
        );
      }
    }]);

    return Header;
  }(_react2.default.Component);

  exports.default = Header;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyTGlzdFdpdGhTZWFyY2guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUtxQixNOzs7Ozs7Ozs7OzsrQkFFVjtBQUNQLFlBQUksYUFBYSxLQUFLLEtBQUwsQ0FBVyxVQUE1QjtBQUNBLGVBQ0U7QUFBQTtVQUFBLEVBQUssV0FBVSxFQUFmO1VBQ0Usd0RBQWlCLFlBQVksVUFBN0IsR0FERjtVQUVFO0FBQUE7WUFBQSxFQUFLLFdBQVUsa0JBQWY7WUFDRSxtRUFBZSxVQUFVLElBQXpCLElBQW1DLEtBQUssS0FBeEM7QUFERjtBQUZGLFNBREY7QUFRRDs7OztJQVppQyxnQkFBTSxTOztvQkFBckIsTSIsImZpbGUiOiJjb21wb25lbnRzXFxmaWx0ZXJcXGZpbHRlckxpc3RXaXRoU2VhcmNoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEl0ZW1Db21wb25lbnQgZnJvbSAnYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlckl0ZW1MaXN0J1xyXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJ2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXJTZWFyY2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgZmlsdGVyVHlwZSA9IHRoaXMucHJvcHMuZmlsdGVyVHlwZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPFNlYXJjaENvbXBvbmVudCBmaWx0ZXJUeXBlPXtmaWx0ZXJUeXBlfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAgPEl0ZW1Db21wb25lbnQgbG9hZExpc3Q9e3RydWV9IHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gIH1cclxufVxyXG4iXX0=