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

	var FilterList = function (_React$Component) {
		_inherits(FilterList, _React$Component);

		function FilterList() {
			_classCallCheck(this, FilterList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FilterList).apply(this, arguments));
		}

		_createClass(FilterList, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				if (this.props.expanded) {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'ul',
							{ style: { left: '25', listStyleType: 'none' } },
							this.props.items.map(function (item) {
								return _react2.default.createElement(
									'li',
									{ key: item.id },
									_react2.default.createElement(ItemConnected, _extends({ filterType: _this2.props.filterType }, item))
								);
							})
						)
					);
				} else {
					return null;
				}
			}
		}]);

		return FilterList;
	}(_react2.default.Component);

	var FilterItem = function (_React$Component2) {
		_inherits(FilterItem, _React$Component2);

		function FilterItem() {
			_classCallCheck(this, FilterItem);

			var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterItem).call(this));

			_this3.state = { 'expanded': true, 'partialSelected': false };
			return _this3;
		}

		_createClass(FilterItem, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.props.loadList) {
					this.props.onLoadFilterList(this.props.filterType);
				}
			}
		}, {
			key: 'toggleExpanded',
			value: function toggleExpanded() {
				this.setState({ 'expanded': !this.state.expanded });
			}
		}, {
			key: 'handleChange',
			value: function handleChange() {
				var _props = this.props;
				var id = _props.id;
				var filterType = _props.filterType;
				var selected = _props.selected;

				if (this.props.id) {
					this.props.onItemChange({ id: id, filterType: filterType, selected: !selected });
				} else {
					this.props.onChangeAllFilterList({ filterType: filterType, selected: !selected });
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var selectionClass = "selectable " + (this.props.selected ? "selected" : this.props.selectedCounter > 0 ? "half-fill" : "");
				if (this.props.hide) {
					return null;
				}
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'filterItemInfo' },
						_react2.default.createElement('div', { className: selectionClass, onClick: this.handleChange.bind(this) }),
						_react2.default.createElement(
							'div',
							{ className: 'toggle-nav', onClick: this.handleChange.bind(this) },
							this.props.name || this.props.description
						),
						this.props.items && this.props.items.length > 0 ? _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'counter' },
								'(',
								this.props.selectedCounter,
								'/',
								this.props.totalCounter,
								')'
							),
							_react2.default.createElement(
								'div',
								{ className: this.state.expanded ? "expanded open" : "expanded closed", onClick: this.toggleExpanded.bind(this) },
								this.state.expanded ? "-" : "+"
							)
						) : null
					),
					_react2.default.createElement(
						'div',
						null,
						this.props.items && this.props.items.length > 0 ? _react2.default.createElement(FilterList, _extends({ expanded: this.state.expanded }, this.props)) : null
					)
				);
			}
		}]);

		return FilterItem;
	}(_react2.default.Component);

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
		return {
			onLoadFilterList: function onLoadFilterList(type) {
				dispatch((0, _filters.fetchFilterListIfNeeded)(type));
			},

			onItemChange: function onItemChange(filterItem) {
				dispatch((0, _filters.selectFilterItem)(filterItem));
			},

			onChangeAllFilterList: function onChangeAllFilterList(filterItem) {
				dispatch((0, _filters.selectAllFilterList)(filterItem));
			}
		};
	};

	var ItemConnected = (0, _reactRedux.connect)(null, mapDispatchToProps)(FilterItem);
	exports.default = ItemConnected;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVySXRlbUxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBS00sVTs7Ozs7Ozs7Ozs7NEJBRU07QUFBQTs7QUFDUixRQUFJLEtBQUssS0FBTCxDQUFXLFFBQWYsRUFBd0I7QUFDdEIsWUFDSTtBQUFBO01BQUE7TUFDQztBQUFBO09BQUEsRUFBSSxPQUFPLEVBQUMsTUFBTSxJQUFQLEVBQWEsZUFBZSxNQUE1QixFQUFYO09BQ0MsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFxQixVQUFDLElBQUQsRUFBVTtBQUMvQixlQUFPO0FBQUE7U0FBQSxFQUFJLEtBQUssS0FBSyxFQUFkO1NBQ04sOEJBQUMsYUFBRCxhQUFlLFlBQVksT0FBSyxLQUFMLENBQVcsVUFBdEMsSUFBc0QsSUFBdEQ7QUFETSxTQUFQO0FBR0gsUUFKRztBQUREO0FBREQsTUFESjtBQVdBLEtBWkYsTUFZUTtBQUNOLFlBQU8sSUFBUDtBQUNBO0FBQ0Y7Ozs7R0FsQnFCLGdCQUFNLFM7O0tBcUJ6QixVOzs7QUFFTCx3QkFBYztBQUFBOztBQUFBOztBQUVWLFVBQUssS0FBTCxHQUFhLEVBQUMsWUFBWSxJQUFiLEVBQW1CLG1CQUFtQixLQUF0QyxFQUFiO0FBRlU7QUFHYjs7Ozt1Q0FFbUI7QUFDbkIsUUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXdCO0FBQ3ZCLFVBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLEtBQUssS0FBTCxDQUFXLFVBQXZDO0FBQ0E7QUFDRDs7O29DQUVlO0FBQ2YsU0FBSyxRQUFMLENBQWMsRUFBQyxZQUFZLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBekIsRUFBZDtBQUNBOzs7a0NBRWM7QUFBQSxpQkFDcUIsS0FBSyxLQUQxQjtBQUFBLFFBQ1AsRUFETyxVQUNQLEVBRE87QUFBQSxRQUNILFVBREcsVUFDSCxVQURHO0FBQUEsUUFDUyxRQURULFVBQ1MsUUFEVDs7QUFFZCxRQUFJLEtBQUssS0FBTCxDQUFXLEVBQWYsRUFBa0I7QUFDakIsVUFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixFQUFDLE1BQUQsRUFBSyxzQkFBTCxFQUFpQixVQUFVLENBQUMsUUFBNUIsRUFBeEI7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLLEtBQUwsQ0FBVyxxQkFBWCxDQUFpQyxFQUFDLHNCQUFELEVBQWEsVUFBVSxDQUFDLFFBQXhCLEVBQWpDO0FBQ0E7QUFDRDs7OzRCQUVVO0FBQ1IsUUFBSSxpQkFBaUIsaUJBQWlCLEtBQUssS0FBTCxDQUFXLFFBQVgsR0FBcUIsVUFBckIsR0FBa0MsS0FBSyxLQUFMLENBQVcsZUFBWCxHQUEyQixDQUEzQixHQUE4QixXQUE5QixHQUE0QyxFQUEvRixDQUFyQjtBQUNBLFFBQUksS0FBSyxLQUFMLENBQVcsSUFBZixFQUFvQjtBQUNuQixZQUFPLElBQVA7QUFDQTtBQUNBLFdBQ0k7QUFBQTtLQUFBO0tBQ0M7QUFBQTtNQUFBLEVBQUssV0FBVSxnQkFBZjtNQUNDLHVDQUFLLFdBQVcsY0FBaEIsRUFBZ0MsU0FBUyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekMsR0FERDtNQUVDO0FBQUE7T0FBQSxFQUFLLFdBQVUsWUFBZixFQUE0QixTQUFTLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFyQztPQUNFLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsS0FBSyxLQUFMLENBQVc7QUFEaEMsT0FGRDtNQUtFLEtBQUssS0FBTCxDQUFXLEtBQVgsSUFBb0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQixHQUF3QixDQUE1QyxHQUNBO0FBQUE7T0FBQTtPQUNDO0FBQUE7UUFBQSxFQUFLLFdBQVUsU0FBZjtRQUFBO1FBQ0csS0FBSyxLQUFMLENBQVcsZUFEZDtRQUFBO1FBQ2dDLEtBQUssS0FBTCxDQUFXLFlBRDNDO1FBQUE7QUFBQSxRQUREO09BSUM7QUFBQTtRQUFBLEVBQUssV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXFCLGVBQXJCLEdBQXVDLGlCQUF2RCxFQUEwRSxTQUFTLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQUFuRjtRQUNFLEtBQUssS0FBTCxDQUFXLFFBQVgsR0FBcUIsR0FBckIsR0FBMkI7QUFEN0I7QUFKRCxPQURBLEdBU0M7QUFkSCxNQUREO0tBaUJDO0FBQUE7TUFBQTtNQUNFLEtBQUssS0FBTCxDQUFXLEtBQVgsSUFBb0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQixHQUF3QixDQUE1QyxHQUNBLDhCQUFDLFVBQUQsYUFBWSxVQUFVLEtBQUssS0FBTCxDQUFXLFFBQWpDLElBQStDLEtBQUssS0FBcEQsRUFEQSxHQUVGO0FBSEE7QUFqQkQsS0FESjtBQXlCRDs7OztHQXhEcUIsZ0JBQU0sUzs7QUE0RC9CLEtBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQ2pELFNBQU87QUFDTCxxQkFBa0IsMEJBQUMsSUFBRCxFQUFVO0FBQzFCLGFBQVMsc0NBQXdCLElBQXhCLENBQVQ7QUFDRCxJQUhJOztBQUtMLGlCQUFjLHNCQUFDLFVBQUQsRUFBZ0I7QUFDNUIsYUFBUywrQkFBaUIsVUFBakIsQ0FBVDtBQUNELElBUEk7O0FBU0wsMEJBQXVCLCtCQUFDLFVBQUQsRUFBZ0I7QUFDckMsYUFBUyxrQ0FBb0IsVUFBcEIsQ0FBVDtBQUNEO0FBWEksR0FBUDtBQWFELEVBZEQ7O0FBZ0JBLEtBQU0sZ0JBQWdCLHlCQUFRLElBQVIsRUFBYSxrQkFBYixFQUFpQyxVQUFqQyxDQUF0QjttQkFDZSxhIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVySXRlbUxpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy9pbXBvcnQgRmlsdGVyTGlzdCBmcm9tICdhcHAvY29tcG9uZW50cy9maWx0ZXIvbGlzdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0QWxsRmlsdGVyTGlzdCwgc2VsZWN0RmlsdGVySXRlbSwgZmV0Y2hGaWx0ZXJMaXN0SWZOZWVkZWQgfSBmcm9tICdhcHAvYWN0aW9ucy9maWx0ZXJzJ1xyXG5cclxuY2xhc3MgRmlsdGVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIFx0cmVuZGVyKCkge1xyXG4gIFx0XHRpZiAodGhpcy5wcm9wcy5leHBhbmRlZCl7XHJcblx0ICAgIFx0cmV0dXJuIChcclxuXHRcdCAgICAgICAgPGRpdj5cclxuXHRcdCAgICAgICAgXHQ8dWwgc3R5bGU9e3tsZWZ0OiAnMjUnLCBsaXN0U3R5bGVUeXBlOiAnbm9uZSd9fT5cdCAgICAgICAgXHRcclxuXHRcdCAgICAgICAgXHR7dGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHQgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfT4gXHJcblx0XHRcdFx0ICAgICAgICBcdDxJdGVtQ29ubmVjdGVkIGZpbHRlclR5cGU9e3RoaXMucHJvcHMuZmlsdGVyVHlwZX0gey4uLml0ZW19IC8+XHJcblx0XHRcdFx0ICAgICAgICA8L2xpPlxyXG5cdFx0XHRcdCAgICB9KX1cclxuXHRcdFx0XHQgICAgPC91bD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdCAgICAgIFx0KTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgXHRyZXR1cm4gbnVsbDtcclxuXHQgICAgfVxyXG4gIFx0fVxyXG59XHJcblxyXG5jbGFzcyBGaWx0ZXJJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0ICAgIHN1cGVyKCk7XHJcblx0ICAgIHRoaXMuc3RhdGUgPSB7J2V4cGFuZGVkJzogdHJ1ZSwgJ3BhcnRpYWxTZWxlY3RlZCc6IGZhbHNlfTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0aWYgKHRoaXMucHJvcHMubG9hZExpc3Qpe1xyXG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZEZpbHRlckxpc3QodGhpcy5wcm9wcy5maWx0ZXJUeXBlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvZ2dsZUV4cGFuZGVkKCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsnZXhwYW5kZWQnOiAhdGhpcy5zdGF0ZS5leHBhbmRlZH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQ2hhbmdlKCkge1xyXG5cdFx0Y29uc3Qge2lkLCBmaWx0ZXJUeXBlLCBzZWxlY3RlZH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0aWYgKHRoaXMucHJvcHMuaWQpe1xyXG5cdFx0XHR0aGlzLnByb3BzLm9uSXRlbUNoYW5nZSh7aWQsIGZpbHRlclR5cGUsIHNlbGVjdGVkOiAhc2VsZWN0ZWR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2VBbGxGaWx0ZXJMaXN0KHtmaWx0ZXJUeXBlLCBzZWxlY3RlZDogIXNlbGVjdGVkfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICBcdHJlbmRlcigpIHtcclxuICBcdFx0bGV0IHNlbGVjdGlvbkNsYXNzID0gXCJzZWxlY3RhYmxlIFwiICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQ/IFwic2VsZWN0ZWRcIiA6IHRoaXMucHJvcHMuc2VsZWN0ZWRDb3VudGVyPjA/IFwiaGFsZi1maWxsXCIgOiBcIlwiKTtcclxuICBcdFx0aWYgKHRoaXMucHJvcHMuaGlkZSl7XHJcbiAgXHRcdFx0cmV0dXJuIG51bGw7XHJcbiAgXHRcdH1cclxuICAgIFx0cmV0dXJuIChcclxuXHQgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVySXRlbUluZm9cIj5cclxuXHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT17c2VsZWN0aW9uQ2xhc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XHJcblx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtbmF2XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+XHJcblx0XHQgICAgICAgIFx0XHR7dGhpcy5wcm9wcy5uYW1lIHx8IHRoaXMucHJvcHMuZGVzY3JpcHRpb259XHJcblx0XHQgICAgICAgIFx0PC9kaXY+XHJcblx0XHQgICAgICAgIFx0e3RoaXMucHJvcHMuaXRlbXMgJiYgdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg+MD8gXHJcblx0XHQgICAgICAgIFx0XHQ8ZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZXJcIj5cclxuXHRcdFx0XHQgICAgICAgIFx0XHQoe3RoaXMucHJvcHMuc2VsZWN0ZWRDb3VudGVyfS97dGhpcy5wcm9wcy50b3RhbENvdW50ZXJ9KVxyXG5cdFx0XHRcdCAgICAgICAgXHQ8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZXhwYW5kZWQ/IFwiZXhwYW5kZWQgb3BlblwiIDogXCJleHBhbmRlZCBjbG9zZWRcIn0gb25DbGljaz17dGhpcy50b2dnbGVFeHBhbmRlZC5iaW5kKHRoaXMpfT5cclxuXHRcdFx0XHQgICAgICAgIFx0XHR7dGhpcy5zdGF0ZS5leHBhbmRlZD8gXCItXCIgOiBcIitcIn1cclxuXHRcdFx0XHQgICAgICAgIFx0PC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdCAgICAgICAgXHQ6IG51bGx9XHJcblx0XHQgICAgICAgIDwvZGl2Plx0XHJcblx0XHQgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICBcdFx0e3RoaXMucHJvcHMuaXRlbXMgJiYgdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg+MD8gXHJcblx0XHQgICAgICAgIFx0XHQ8RmlsdGVyTGlzdCBleHBhbmRlZD17dGhpcy5zdGF0ZS5leHBhbmRlZH0gey4uLnRoaXMucHJvcHN9IC8+XHJcblx0XHRcdFx0ICAgIDogbnVsbH1cdCBcclxuXHRcdCAgICAgICAgPC9kaXY+ICAgICAgIFxyXG5cdCAgICAgICAgPC9kaXY+XHJcbiAgICAgIFx0KTtcclxuICBcdH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgb25Mb2FkRmlsdGVyTGlzdDogKHR5cGUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJMaXN0SWZOZWVkZWQodHlwZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkl0ZW1DaGFuZ2U6IChmaWx0ZXJJdGVtKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNlbGVjdEZpbHRlckl0ZW0oZmlsdGVySXRlbSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNoYW5nZUFsbEZpbHRlckxpc3Q6IChmaWx0ZXJJdGVtKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNlbGVjdEFsbEZpbHRlckxpc3QoZmlsdGVySXRlbSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgSXRlbUNvbm5lY3RlZCA9IGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKEZpbHRlckl0ZW0pO1xyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ29ubmVjdGVkO1xyXG4iXX0=