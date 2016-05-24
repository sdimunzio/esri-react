define(['exports', 'react', 'react/react-dom', 'esri/Map'], function (exports, _react, _reactDom, _Map) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Map2 = _interopRequireDefault(_Map);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var map = new _Map2.default({ basemap: 'streets' });

	var MapComponent = _react2.default.createClass({
		displayName: 'MapComponent',
		componentWillMount: function componentWillMount() {

			this.element = new _Map2.default(this.props);
			this.element.then(function () {
				console.log('map ready');
			}, function () {
				console.log('map failed');
			});
		},


		render: function render() {
			var _this = this;

			var children = this.element ? _react2.default.Children.map(this.props.children, function (child) {
				return child ? _react2.default.cloneElement(child, { map: _this.element }) : null;
			}) : null;
			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: this.props.style },
				children
			);
		}
	});

	exports.default = MapComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXG1hcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLEtBQU0sTUFBTSxrQkFBUSxFQUFFLFNBQVMsU0FBWCxFQUFSLENBQVo7O0FBR0EsS0FBTSxlQUFlLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUV0QyxvQkFGc0MsZ0NBRWpCOztBQUVwQixRQUFLLE9BQUwsR0FBYSxrQkFBUSxLQUFLLEtBQWIsQ0FBYjtBQUNBLFFBQUssT0FBTCxDQUFhLElBQWIsQ0FDQSxZQUFJO0FBQ0gsWUFBUSxHQUFSLENBQVksV0FBWjtBQUNBLElBSEQsRUFJQSxZQUFJO0FBQ0gsWUFBUSxHQUFSLENBQVksWUFBWjtBQUNBLElBTkQ7QUFTQSxHQWRxQzs7O0FBZ0J0QyxVQUFRLGtCQUFXO0FBQUE7O0FBRWxCLE9BQU0sV0FBVyxLQUFLLE9BQUwsR0FBZSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUE5QixFQUF3QyxpQkFBUztBQUFDLFdBQU8sUUFBUSxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEVBQUMsS0FBSSxNQUFLLE9BQVYsRUFBMUIsQ0FBUixHQUF3RCxJQUEvRDtBQUFxRSxJQUF2SCxDQUFmLEdBQTBJLElBQTNKO0FBQ0EsVUFDQztBQUFBO0lBQUEsRUFBSyxXQUFXLEtBQUssS0FBTCxDQUFXLFNBQTNCLEVBQXNDLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBeEQ7SUFDQztBQURELElBREQ7QUFLQTtBQXhCcUMsRUFBbEIsQ0FBckI7O21CQTJCZSxZIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVzcmlcXG1hcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QvcmVhY3QtZG9tJztcclxuaW1wb3J0IE1hcCBmcm9tICdlc3JpL01hcCc7XHJcblxyXG5jb25zdCBtYXAgPSBuZXcgTWFwKHsgYmFzZW1hcDogJ3N0cmVldHMnfSk7XHJcblxyXG5cclxuY29uc3QgTWFwQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50PW5ldyBNYXAodGhpcy5wcm9wcyk7XHJcblx0XHR0aGlzLmVsZW1lbnQudGhlbihcclxuXHRcdCgpPT57XHJcblx0XHRcdGNvbnNvbGUubG9nKCdtYXAgcmVhZHknKTtcclxuXHRcdH0sXHJcblx0XHQoKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZygnbWFwIGZhaWxlZCcpO1xyXG5cdFx0fSk7XHJcblxyXG5cclxuXHR9LFxyXG5cclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbGVtZW50ID8gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtyZXR1cm4gY2hpbGQgPyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHttYXA6dGhpcy5lbGVtZW50fSkgOiBudWxsO30pIDogbnVsbDtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBDb21wb25lbnQ7XHJcbiJdfQ==