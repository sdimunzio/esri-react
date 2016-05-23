define(['exports', 'react', 'i18next'], function (exports, _react, _i18next) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _i18next2 = _interopRequireDefault(_i18next);

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

	var Translator = function (_React$Component) {
		_inherits(Translator, _React$Component);

		function Translator() {
			_classCallCheck(this, Translator);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Translator).apply(this, arguments));
		}

		_createClass(Translator, [{
			key: 'render',
			value: function render() {
				var e = _i18next2.default;
				console.log(e.t(this.props.k, this.props.lan));
				return _react2.default.createElement(
					'span',
					{ className: this.props.className },
					_i18next2.default.t(this.props.k, this.props.lan)
				);
			}
		}]);

		return Translator;
	}(_react2.default.Component);

	exports.default = Translator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxhblxcdHJhbnNsYXRvci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FHcUIsVTs7Ozs7Ozs7Ozs7NEJBQ1o7QUFDUCxRQUFNLHFCQUFOO0FBQ0EsWUFBUSxHQUFSLENBQVksRUFBRSxDQUFGLENBQUksS0FBSyxLQUFMLENBQVcsQ0FBZixFQUFpQixLQUFLLEtBQUwsQ0FBVyxHQUE1QixDQUFaO0FBQ0EsV0FBTztBQUFBO0tBQUEsRUFBTSxXQUFXLEtBQUssS0FBTCxDQUFXLFNBQTVCO0tBRUwsa0JBQVEsQ0FBUixDQUFVLEtBQUssS0FBTCxDQUFXLENBQXJCLEVBQXVCLEtBQUssS0FBTCxDQUFXLEdBQWxDO0FBRkssS0FBUDtBQUtBOzs7O0dBVHNDLGdCQUFNLFM7O21CQUF6QixVIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxhblxcdHJhbnNsYXRvci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zbGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgZT1pMThuZXh0O1xyXG5cdFx0Y29uc29sZS5sb2coZS50KHRoaXMucHJvcHMuayx0aGlzLnByb3BzLmxhbikpO1xyXG5cdFx0cmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxyXG5cdFx0XHRcclxuXHRcdFx0e2kxOG5leHQudCh0aGlzLnByb3BzLmssdGhpcy5wcm9wcy5sYW4pfVxyXG5cclxuXHRcdDwvc3Bhbj5cdFx0XHJcblx0fVxyXG59Il19