define(['exports', 'react', 'react-redux', 'app/actions/map', 'app/constants/constants'], function (exports, _react, _reactRedux, _map, _constants) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LayerControl = undefined;

	var _react2 = _interopRequireDefault(_react);

	var Constants = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};

			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}

			newObj.default = obj;
			return newObj;
		}
	}

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

	var Component = function (_React$Component) {
		_inherits(Component, _React$Component);

		function Component() {
			_classCallCheck(this, Component);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).apply(this, arguments));
		}

		_createClass(Component, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.props.onLoadProjects('region');
			}
		}, {
			key: 'onChangeLevel',
			value: function onChangeLevel(e) {
				debugger;
				this.props.onLoadProjects(e.target.value);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'select',
						{ name: 'level', onChange: this.onChangeLevel.bind(this) },
						_react2.default.createElement(
							'option',
							{ value: 'region' },
							'Region'
						),
						_react2.default.createElement(
							'option',
							{ value: 'department' },
							'Department'
						),
						_react2.default.createElement(
							'option',
							{ value: 'municipalities' },
							'Municipalities'
						)
					)
				);
			}
		}]);

		return Component;
	}(_react2.default.Component);

	var stateToProps = function stateToProps(state, props) {
		return state.map;
	};

	var dispatchToProps = function dispatchToProps(dispatch, ownProps) {
		return {
			onLoadProjects: function onLoadProjects(level) {
				dispatch((0, _map.loadProjects)(level));
			}
		};
	};
	/*Connect map component to redux state*/
	var LayerControl = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Component);

	exports.LayerControl = LayerControl;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbnRyb2xzXFxsYXllci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztLQUdZLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTixTOzs7Ozs7Ozs7Ozt1Q0FFYztBQUNsQixTQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLFFBQTFCO0FBQ0E7OztpQ0FFYSxDLEVBQUU7QUFDZjtBQUNBLFNBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsRUFBRSxNQUFGLENBQVMsS0FBbkM7QUFDQTs7OzRCQUVPO0FBQ1AsV0FBUTtBQUFBO0tBQUE7S0FDUDtBQUFBO01BQUEsRUFBUSxNQUFLLE9BQWIsRUFBcUIsVUFBVSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBL0I7TUFDQTtBQUFBO09BQUEsRUFBUSxPQUFNLFFBQWQ7T0FBQTtBQUFBLE9BREE7TUFFQTtBQUFBO09BQUEsRUFBUSxPQUFNLFlBQWQ7T0FBQTtBQUFBLE9BRkE7TUFHQTtBQUFBO09BQUEsRUFBUSxPQUFNLGdCQUFkO09BQUE7QUFBQTtBQUhBO0FBRE8sS0FBUjtBQU9BOzs7O0dBbkJzQixnQkFBTSxTOztBQXlCOUIsS0FBTSxlQUFlLFNBQWYsWUFBZSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3JDLFNBQU8sTUFBTSxHQUFiO0FBQ0QsRUFGRDs7QUFLQSxLQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQzlDLFNBQU87QUFDTCxtQkFBZ0Isd0JBQUMsS0FBRCxFQUFXO0FBQ3pCLGFBQVMsdUJBQWEsS0FBYixDQUFUO0FBQ0Q7QUFISSxHQUFQO0FBS0QsRUFORDs7QUFRQSxLQUFNLGVBQWEseUJBQVEsWUFBUixFQUFxQixlQUFyQixFQUFzQyxTQUF0QyxDQUFuQjs7U0FHUSxZLEdBQUEsWSIsImZpbGUiOiJjb21wb25lbnRzXFxjb250cm9sc1xcbGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge2xvYWRQcm9qZWN0c30gZnJvbSAnYXBwL2FjdGlvbnMvbWFwJ1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnYXBwL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRcclxuXHRjb21wb25lbnREaWRNb3VudCgpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkxvYWRQcm9qZWN0cygncmVnaW9uJyk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZUxldmVsKGUpe1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLnByb3BzLm9uTG9hZFByb2plY3RzKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuICg8ZGl2PlxyXG5cdFx0XHQ8c2VsZWN0IG5hbWU9J2xldmVsJyBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUxldmVsLmJpbmQodGhpcyl9PlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdyZWdpb24nPlJlZ2lvbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdkZXBhcnRtZW50Jz5EZXBhcnRtZW50PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J211bmljaXBhbGl0aWVzJz5NdW5pY2lwYWxpdGllczwvb3B0aW9uPlxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0PC9kaXY+KVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xyXG4gIHJldHVybiBzdGF0ZS5tYXAgIFxyXG59XHJcblxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBvbkxvYWRQcm9qZWN0czogKGxldmVsKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGxvYWRQcm9qZWN0cyhsZXZlbCkpO1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuLypDb25uZWN0IG1hcCBjb21wb25lbnQgdG8gcmVkdXggc3RhdGUqL1xyXG5jb25zdCBMYXllckNvbnRyb2w9Y29ubmVjdChzdGF0ZVRvUHJvcHMsZGlzcGF0Y2hUb1Byb3BzKShDb21wb25lbnQpO1xyXG5cclxuXHJcbmV4cG9ydCB7TGF5ZXJDb250cm9sfTtcclxuICJdfQ==