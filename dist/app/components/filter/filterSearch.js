define(['exports', 'react', 'react-redux', 'app/actions/filters'], function (exports, _react, _reactRedux, _filters) {
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

	var SearchText = function (_React$Component) {
		_inherits(SearchText, _React$Component);

		function SearchText() {
			_classCallCheck(this, SearchText);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchText).call(this));

			_this.state = {};
			return _this;
		}

		_createClass(SearchText, [{
			key: 'onKeyUp',
			value: function onKeyUp() {
				var keyword = this.refs.keyword.value;
				if (keyword.length != 1) {
					this.props.onTriggerSearch({ filterType: this.props.filterType, text: keyword });
				}
			}
		}, {
			key: 'triggerSearch',
			value: function triggerSearch(text) {
				this.props.onTriggerSearch({ filterType: this.props.filterType, text: this.refs.keyword.value });
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'input-group' },
						_react2.default.createElement('input', { ref: 'keyword', type: 'text', className: 'form-control', placeholder: 'Search...', onKeyUp: this.onKeyUp.bind(this) }),
						_react2.default.createElement(
							'span',
							{ className: 'input-group-btn' },
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-success', type: 'button', onClick: this.triggerSearch.bind(this) },
								'Go!'
							)
						)
					)
				);
			}
		}]);

		return SearchText;
	}(_react2.default.Component);

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
		return {
			onTriggerSearch: function onTriggerSearch(filterSearch) {
				dispatch((0, _filters.searchItemByText)(filterSearch));
			}
		};
	};

	exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SearchText);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyU2VhcmNoLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FJTSxVOzs7QUFFTCx3QkFBYztBQUFBOztBQUFBOztBQUVWLFNBQUssS0FBTCxHQUFhLEVBQWI7QUFGVTtBQUdiOzs7OzZCQUVTO0FBQ1QsUUFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsS0FBaEM7QUFDQSxRQUFJLFFBQVEsTUFBUixJQUFrQixDQUF0QixFQUF5QjtBQUNqQixVQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEVBQUMsWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUF4QixFQUFvQyxNQUFNLE9BQTFDLEVBQTNCO0FBQ0Q7QUFDUDs7O2lDQUVhLEksRUFBTTtBQUNuQixTQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEVBQUMsWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUF4QixFQUFvQyxNQUFNLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsS0FBNUQsRUFBM0I7QUFDQTs7OzRCQUVVO0FBQ1IsV0FDSztBQUFBO0tBQUE7S0FDQztBQUFBO01BQUEsRUFBSyxXQUFVLGFBQWY7TUFDRCx5Q0FBTyxLQUFJLFNBQVgsRUFBcUIsTUFBSyxNQUExQixFQUFpQyxXQUFVLGNBQTNDLEVBQTBELGFBQVksV0FBdEUsRUFBa0YsU0FBUyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQTNGLEdBREM7TUFFRDtBQUFBO09BQUEsRUFBTSxXQUFVLGlCQUFoQjtPQUNFO0FBQUE7UUFBQSxFQUFRLFdBQVUsaUJBQWxCLEVBQW9DLE1BQUssUUFBekMsRUFBa0QsU0FBUyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBM0Q7UUFBQTtBQUFBO0FBREY7QUFGQztBQURELEtBREw7QUFXQTs7OztHQTlCcUIsZ0JBQU0sUzs7QUFrQy9CLEtBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQ2pELFNBQU87QUFDTCxvQkFBaUIseUJBQUMsWUFBRCxFQUFrQjtBQUNqQyxhQUFTLCtCQUFpQixZQUFqQixDQUFUO0FBQ0Q7QUFISSxHQUFQO0FBS0QsRUFORDs7bUJBUWUseUJBQVEsSUFBUixFQUFhLGtCQUFiLEVBQWlDLFVBQWpDLEMiLCJmaWxlIjoiY29tcG9uZW50c1xcZmlsdGVyXFxmaWx0ZXJTZWFyY2guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWFyY2hJdGVtQnlUZXh0IH0gZnJvbSAnYXBwL2FjdGlvbnMvZmlsdGVycydcclxuXHJcbmNsYXNzIFNlYXJjaFRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHQgICAgc3VwZXIoKTtcclxuXHQgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG5cdH1cclxuXHJcblx0b25LZXlVcCgpIHtcclxuXHRcdGxldCBrZXl3b3JkID0gdGhpcy5yZWZzLmtleXdvcmQudmFsdWU7XHJcblx0XHRpZiAoa2V5d29yZC5sZW5ndGggIT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblRyaWdnZXJTZWFyY2goe2ZpbHRlclR5cGU6IHRoaXMucHJvcHMuZmlsdGVyVHlwZSwgdGV4dDoga2V5d29yZH0pO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHRyaWdnZXJTZWFyY2godGV4dCkge1xyXG5cdFx0dGhpcy5wcm9wcy5vblRyaWdnZXJTZWFyY2goe2ZpbHRlclR5cGU6IHRoaXMucHJvcHMuZmlsdGVyVHlwZSwgdGV4dDogdGhpcy5yZWZzLmtleXdvcmQudmFsdWV9KTtcclxuXHR9XHJcblxyXG4gIFx0cmVuZGVyKCkge1xyXG4gIFx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPGRpdj5cclxuXHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG5cdFx0XHQgICAgICA8aW5wdXQgcmVmPVwia2V5d29yZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBvbktleVVwPXt0aGlzLm9uS2V5VXAuYmluZCh0aGlzKX0vPlxyXG5cdFx0XHQgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuXHRcdFx0ICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnRyaWdnZXJTZWFyY2guYmluZCh0aGlzKX0+R28hPC9idXR0b24+XHJcblx0XHRcdCAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG4gICAgICAgXHJcblx0ICAgICAgICA8L2Rpdj5cclxuICAgICAgXHQpO1xyXG4gIFx0fVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBvblRyaWdnZXJTZWFyY2g6IChmaWx0ZXJTZWFyY2gpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2VhcmNoSXRlbUJ5VGV4dChmaWx0ZXJTZWFyY2gpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaFRleHQpO1xyXG4iXX0=