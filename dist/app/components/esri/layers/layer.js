define(['exports', 'react', 'react/react-dom', 'dojo/domReady!'], function (exports, _react, _reactDom, _domReady) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domReady2 = _interopRequireDefault(_domReady);

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

	var Layer = function (_React$Component) {
		_inherits(Layer, _React$Component);

		function Layer() {
			_classCallCheck(this, Layer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Layer).apply(this, arguments));
		}

		_createClass(Layer, [{
			key: 'getClonedChildrenWithMap',
			value: function getClonedChildrenWithMap(extra) {
				var _props = this.props;
				var children = _props.children;
				var map = _props.map;

				var props = Object.assign({ map: map }, extra);

				return _react2.default.Children.map(children, function (child) {
					return child ? _react2.default.cloneElement(child, props) : null;
				});
			}
		}, {
			key: 'renderChildrenWithProps',
			value: function renderChildrenWithProps(props) {
				var children = this.getClonedChildrenWithMap(props);
				return _react2.default.createElement(
					'div',
					{ style: { display: 'none' } },
					children
				);
			}
		}, {
			key: 'render',
			value: function render() {
				return this.renderChildrenWithProps({ layer: this.layer });
			}
		}]);

		return Layer;
	}(_react2.default.Component);

	exports.default = Layer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXGxheWVyc1xcbGF5ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FJTSxLOzs7Ozs7Ozs7Ozs0Q0FFb0IsSyxFQUFPO0FBQUEsaUJBQ0wsS0FBSyxLQURBO0FBQUEsUUFDdkIsUUFEdUIsVUFDdkIsUUFEdUI7QUFBQSxRQUNiLEdBRGEsVUFDYixHQURhOztBQUUvQixRQUFNLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBQyxRQUFELEVBQWQsRUFBcUIsS0FBckIsQ0FBZDs7QUFFQSxXQUFPLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLGlCQUFTO0FBQzVDLFlBQU8sUUFBUSxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLENBQVIsR0FBMkMsSUFBbEQ7QUFDQSxLQUZNLENBQVA7QUFHQTs7OzJDQUV1QixLLEVBQU87QUFDOUIsUUFBTSxXQUFVLEtBQUssd0JBQUwsQ0FBOEIsS0FBOUIsQ0FBaEI7QUFDQSxXQUFPO0FBQUE7S0FBQSxFQUFLLE9BQU8sRUFBQyxTQUFTLE1BQVYsRUFBWjtLQUFnQztBQUFoQyxLQUFQO0FBQ0E7Ozs0QkFFUTtBQUNSLFdBQU8sS0FBSyx1QkFBTCxDQUE2QixFQUFDLE9BQU0sS0FBSyxLQUFaLEVBQTdCLENBQVA7QUFDQTs7OztHQWxCa0IsZ0JBQU0sUzs7bUJBc0JYLEsiLCJmaWxlIjoiY29tcG9uZW50c1xcZXNyaVxcbGF5ZXJzXFxsYXllci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QvcmVhY3QtZG9tJztcclxuaW1wb3J0IGRvbVJlYWR5IGZyb20gXCJkb2pvL2RvbVJlYWR5IVwiO1xyXG5cclxuY2xhc3MgTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdGdldENsb25lZENoaWxkcmVuV2l0aE1hcChleHRyYSkge1xyXG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgbWFwIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHttYXB9LCBleHRyYSk7XHJcblxyXG5cdFx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xyXG5cdFx0XHRyZXR1cm4gY2hpbGQgPyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKSA6IG51bGw7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckNoaWxkcmVuV2l0aFByb3BzKHByb3BzKSB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9dGhpcy5nZXRDbG9uZWRDaGlsZHJlbldpdGhNYXAocHJvcHMpO1xyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT57Y2hpbGRyZW59PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyQ2hpbGRyZW5XaXRoUHJvcHMoe2xheWVyOnRoaXMubGF5ZXJ9KTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllcjtcclxuIl19