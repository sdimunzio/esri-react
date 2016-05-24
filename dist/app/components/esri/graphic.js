define(['exports', 'react', 'react/react-dom', 'esri/Graphic', 'dojo/domReady!'], function (exports, _react, _reactDom, _Graphic, _domReady) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Graphic2 = _interopRequireDefault(_Graphic);

	var _domReady2 = _interopRequireDefault(_domReady);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var graphic = _react2.default.createClass({
		displayName: 'graphic',
		componentWillMount: function componentWillMount() {
			this.element = new _Graphic2.default(this.props);
			this.props.layer.add(this.element);
		},


		render: function render() {
			return null;
		}

	});

	exports.default = graphic;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXGdyYXBoaWMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLEtBQU0sVUFBUyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFFaEMsb0JBRmdDLGdDQUVYO0FBQ3BCLFFBQUssT0FBTCxHQUFlLHNCQUFZLEtBQUssS0FBakIsQ0FBZjtBQUNBLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsQ0FBcUIsS0FBSyxPQUExQjtBQUNBLEdBTCtCOzs7QUFPaEMsVUFBUSxrQkFBVztBQUNsQixVQUFPLElBQVA7QUFDQTs7QUFUK0IsRUFBbEIsQ0FBZjs7bUJBYWUsTyIsImZpbGUiOiJjb21wb25lbnRzXFxlc3JpXFxncmFwaGljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC9yZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IEdyYXBoaWMgZnJvbSBcImVzcmkvR3JhcGhpY1wiO1xyXG5cclxuXHJcbmltcG9ydCBkb21SZWFkeSBmcm9tIFwiZG9qby9kb21SZWFkeSFcIjtcclxuXHJcblxyXG5jb25zdCBncmFwaGljPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBHcmFwaGljKHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5wcm9wcy5sYXllci5hZGQodGhpcy5lbGVtZW50KTtcclxuXHR9LFxyXG5cclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkgeyAgXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyYXBoaWM7XHJcbiJdfQ==