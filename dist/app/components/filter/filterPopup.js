define(['exports', 'react', 'react-dom', 'react-bootstrap', 'app/components/filter/filterTabs'], function (exports, _react, _reactDom, _reactBootstrap, _filterTabs) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _filterTabs2 = _interopRequireDefault(_filterTabs);

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

	var FilterPopup = function (_React$Component) {
		_inherits(FilterPopup, _React$Component);

		function FilterPopup() {
			_classCallCheck(this, FilterPopup);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterPopup).call(this));

			_this.state = { 'showModal': false };
			return _this;
		}

		_createClass(FilterPopup, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'showFilterPopup',
			value: function showFilterPopup() {
				this.setState({ 'showModal': true });
			}
		}, {
			key: 'hideFilterPopup',
			value: function hideFilterPopup() {
				this.setState({ 'showModal': false });
			}
		}, {
			key: 'reset',
			value: function reset() {}
		}, {
			key: 'cancel',
			value: function cancel() {
				this.setState({ 'showModal': false });
			}
		}, {
			key: 'apply',
			value: function apply() {}
		}, {
			key: 'render',
			value: function render() {
				var filters = this.state.filterMap || [];
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ className: '', onClick: this.showFilterPopup.bind(this) },
						'Filters'
					),
					_react2.default.createElement(
						_reactBootstrap.Modal,
						{ bsSize: 'large', 'aria-labelledby': 'contained-modal-title-lg',
							show: this.state.showModal, onHide: this.hideFilterPopup.bind(this) },
						_react2.default.createElement(
							_reactBootstrap.Modal.Header,
							null,
							_react2.default.createElement(
								_reactBootstrap.Modal.Title,
								null,
								'Filters'
							)
						),
						_react2.default.createElement(
							_reactBootstrap.Modal.Body,
							null,
							_react2.default.createElement(_filterTabs2.default, null)
						),
						_react2.default.createElement(
							_reactBootstrap.Modal.Footer,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ className: 'btn btn-sm', bsStyle: 'danger', onClick: this.reset.bind(this) },
								'Reset'
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ className: 'btn btn-sm', bsStyle: 'warning', onClick: this.cancel.bind(this) },
								'Cancel'
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ className: 'btn btn-sm', bsStyle: 'success', onClick: this.apply.bind(this) },
								'Apply'
							)
						)
					)
				);
			}
		}]);

		return FilterPopup;
	}(_react2.default.Component);

	exports.default = FilterPopup;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyUG9wdXAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FLcUIsVzs7O0FBRXBCLHlCQUFjO0FBQUE7O0FBQUE7O0FBRVYsU0FBSyxLQUFMLEdBQWEsRUFBQyxhQUFhLEtBQWQsRUFBYjtBQUZVO0FBR2I7Ozs7dUNBRXFCLENBRXJCOzs7cUNBRWlCO0FBQ2QsU0FBSyxRQUFMLENBQWMsRUFBQyxhQUFhLElBQWQsRUFBZDtBQUNIOzs7cUNBRW1CO0FBQ2hCLFNBQUssUUFBTCxDQUFjLEVBQUMsYUFBYSxLQUFkLEVBQWQ7QUFDSDs7OzJCQUVTLENBRVQ7Ozs0QkFFVTtBQUNQLFNBQUssUUFBTCxDQUFjLEVBQUMsYUFBYSxLQUFkLEVBQWQ7QUFDSDs7OzJCQUVTLENBRVQ7Ozs0QkFFVTtBQUNSLFFBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxTQUFYLElBQXdCLEVBQXRDO0FBQ0EsV0FDQztBQUFBO0tBQUE7S0FDSTtBQUFBO01BQUEsRUFBUSxXQUFVLEVBQWxCLEVBQXFCLFNBQVMsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQTlCO01BQUE7QUFBQSxNQURKO0tBRUY7QUFBQTtNQUFBLEVBQU8sUUFBTyxPQUFkLEVBQXNCLG1CQUFnQiwwQkFBdEM7QUFDQyxhQUFNLEtBQUssS0FBTCxDQUFXLFNBRGxCLEVBQzZCLFFBQVEsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBRHJDO01BRUM7QUFBQSw2QkFBTyxNQUFQO09BQUE7T0FDQztBQUFBLDhCQUFPLEtBQVA7UUFBQTtRQUFBO0FBQUE7QUFERCxPQUZEO01BT0M7QUFBQSw2QkFBTyxJQUFQO09BQUE7T0FDQztBQURELE9BUEQ7TUFVQztBQUFBLDZCQUFPLE1BQVA7T0FBQTtPQUNDO0FBQUE7UUFBQSxFQUFRLFdBQVUsWUFBbEIsRUFBK0IsU0FBUSxRQUF2QyxFQUFnRCxTQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBekQ7UUFBQTtBQUFBLFFBREQ7T0FFTztBQUFBO1FBQUEsRUFBUSxXQUFVLFlBQWxCLEVBQStCLFNBQVEsU0FBdkMsRUFBaUQsU0FBUyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQTFEO1FBQUE7QUFBQSxRQUZQO09BR087QUFBQTtRQUFBLEVBQVEsV0FBVSxZQUFsQixFQUErQixTQUFRLFNBQXZDLEVBQWlELFNBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixDQUExRDtRQUFBO0FBQUE7QUFIUDtBQVZEO0FBRkUsS0FERDtBQXFCQTs7OztHQXREcUMsZ0JBQU0sUzs7bUJBQTFCLFciLCJmaWxlIjoiY29tcG9uZW50c1xcZmlsdGVyXFxmaWx0ZXJQb3B1cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtNb2RhbCwgQnV0dG9uLCBUYWJzLCBUYWJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBGaWx0ZXJUYWJzIGZyb20gJ2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXJUYWJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0ICAgIHN1cGVyKCk7XHJcblx0ICAgIHRoaXMuc3RhdGUgPSB7J3Nob3dNb2RhbCc6IGZhbHNlfTtcclxuXHR9XHJcblxyXG4gIFx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHJcblx0fVxyXG5cclxuXHRzaG93RmlsdGVyUG9wdXAoKSB7XHJcblx0ICAgIHRoaXMuc2V0U3RhdGUoeydzaG93TW9kYWwnOiB0cnVlfSk7XHJcblx0fVxyXG5cclxuICBcdGhpZGVGaWx0ZXJQb3B1cCgpIHtcclxuXHQgICAgdGhpcy5zZXRTdGF0ZSh7J3Nob3dNb2RhbCc6IGZhbHNlfSk7XHJcblx0fVxyXG5cclxuICBcdHJlc2V0KCkge1xyXG5cdCAgIFxyXG5cdH1cclxuXHJcbiAgXHRjYW5jZWwoKSB7XHJcblx0ICAgIHRoaXMuc2V0U3RhdGUoeydzaG93TW9kYWwnOiBmYWxzZX0pO1xyXG5cdH1cclxuXHJcbiAgXHRhcHBseSgpIHtcclxuXHQgICAgXHJcblx0fVxyXG5cclxuICBcdHJlbmRlcigpIHtcclxuICBcdFx0bGV0IGZpbHRlcnMgPSB0aGlzLnN0YXRlLmZpbHRlck1hcCB8fCBbXTtcclxuICBcdFx0cmV0dXJuIChcclxuICAgIFx0PGRpdj5cclxuXHQgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPScnIG9uQ2xpY2s9e3RoaXMuc2hvd0ZpbHRlclBvcHVwLmJpbmQodGhpcyl9PkZpbHRlcnM8L0J1dHRvbj5cclxuXHRcdFx0PE1vZGFsIGJzU2l6ZT0nbGFyZ2UnIGFyaWEtbGFiZWxsZWRieT0nY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnJ1xyXG5cdFx0XHQgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IG9uSGlkZT17dGhpcy5oaWRlRmlsdGVyUG9wdXAuYmluZCh0aGlzKX0+XHJcblx0XHRcdFx0PE1vZGFsLkhlYWRlcj5cclxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZT5cclxuXHRcdFx0XHRcdFx0RmlsdGVyc1xyXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cclxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cclxuXHRcdFx0XHRcdDxGaWx0ZXJUYWJzIC8+XHJcblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBic1N0eWxlPSdkYW5nZXInIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX0+UmVzZXQ8L0J1dHRvbj5cclxuICAgICAgICBcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBic1N0eWxlPSd3YXJuaW5nJyBvbkNsaWNrPXt0aGlzLmNhbmNlbC5iaW5kKHRoaXMpfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICBcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBic1N0eWxlPSdzdWNjZXNzJyBvbkNsaWNrPXt0aGlzLmFwcGx5LmJpbmQodGhpcyl9PkFwcGx5PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgXHQpO1xyXG4gIFx0fVxyXG59Il19