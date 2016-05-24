define(['exports', 'react', 'react/react-dom', 'esri/geometry/Point'], function (exports, _react, _reactDom, _Point) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Point2 = _interopRequireDefault(_Point);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var point = _react2.default.createClass({
		displayName: 'point',
		componentWillMount: function componentWillMount() {
			this.element = new _Point2.default({
				longitude: this.props.longitude,
				latitude: this.props.latitude
			});
		},


		render: function render() {
			return _react2.default.createElement('div', null);
		}

	});

	exports.default = point;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXGdlb21ldHJ5XFxwb2ludC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0sUUFBTyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFFOUIsb0JBRjhCLGdDQUVUO0FBQ3BCLFFBQUssT0FBTCxHQUFlLG9CQUFVO0FBQ25CLGVBQVcsS0FBSyxLQUFMLENBQVcsU0FESDtBQUVuQixjQUFVLEtBQUssS0FBTCxDQUFXO0FBRkYsSUFBVixDQUFmO0FBS0EsR0FSNkI7OztBQVU5QixVQUFRLGtCQUFXO0FBQ2xCLFVBQVEsMENBQVI7QUFDQTs7QUFaNkIsRUFBbEIsQ0FBYjs7bUJBZ0JlLEsiLCJmaWxlIjoiY29tcG9uZW50c1xcZXNyaVxcZ2VvbWV0cnlcXHBvaW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC9yZWFjdC1kb20nO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgcG9pbnQ9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IFBvaW50KHtcclxuICAgICAgICBsb25naXR1ZGU6IHRoaXMucHJvcHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLnByb3BzLmxhdGl0dWRlXHJcbiAgICAgIH0pO1xyXG5cclxuXHR9LFxyXG5cclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkgeyAgXHJcblx0XHRyZXR1cm4gKDxkaXY+PC9kaXY+KTtcclxuXHR9XHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvaW50O1xyXG4iXX0=