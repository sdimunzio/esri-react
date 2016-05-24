define(['exports', 'react', 'react/react-dom', 'esri/geometry/Extent'], function (exports, _react, _reactDom, _Extent) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Extent2 = _interopRequireDefault(_Extent);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var extend = _react2.default.createClass({
		displayName: 'extend',
		componentWillMount: function componentWillMount() {
			var _props = this.props;
			var xmax = _props.xmax;
			var xmin = _props.xmin;
			var ymin = _props.ymin;
			var ymax = _props.ymax;
			var spatialReference = _props.spatialReference;

			this.extent = new _Extent2.default({ xmax: xmax, xmin: xmin, ymin: ymin, ymax: ymax, spatialReference: spatialReference });
			this.props.view.extent = this.extent;
		},


		render: function render() {
			return _react2.default.createElement('div', null);
		}

	});

	exports.default = extend;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXGdlb21ldHJ5XFxleHRlbmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxLQUFNLFNBQVEsZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBRS9CLG9CQUYrQixnQ0FFVjtBQUFBLGdCQUMyQixLQUFLLEtBRGhDO0FBQUEsT0FDYixJQURhLFVBQ2IsSUFEYTtBQUFBLE9BQ1IsSUFEUSxVQUNSLElBRFE7QUFBQSxPQUNILElBREcsVUFDSCxJQURHO0FBQUEsT0FDRSxJQURGLFVBQ0UsSUFERjtBQUFBLE9BQ08sZ0JBRFAsVUFDTyxnQkFEUDs7QUFFcEIsUUFBSyxNQUFMLEdBQWEscUJBQVcsRUFBQyxVQUFELEVBQU0sVUFBTixFQUFXLFVBQVgsRUFBZ0IsVUFBaEIsRUFBcUIsa0NBQXJCLEVBQVgsQ0FBYjtBQUNBLFFBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsTUFBaEIsR0FBd0IsS0FBSyxNQUE3QjtBQUdBLEdBUjhCOzs7QUFXL0IsVUFBUSxrQkFBVztBQUNsQixVQUFRLDBDQUFSO0FBQ0E7O0FBYjhCLEVBQWxCLENBQWQ7O21CQWlCZSxNIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVzcmlcXGdlb21ldHJ5XFxleHRlbmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0L3JlYWN0LWRvbSc7XHJcbmltcG9ydCBFeHRlbnQgZnJvbSBcImVzcmkvZ2VvbWV0cnkvRXh0ZW50XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGV4dGVuZD0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblx0XHRjb25zdCB7eG1heCx4bWluLHltaW4seW1heCxzcGF0aWFsUmVmZXJlbmNlfSA9IHRoaXMucHJvcHM7XHJcblx0XHR0aGlzLmV4dGVudD0gbmV3IEV4dGVudCh7eG1heCx4bWluLHltaW4seW1heCxzcGF0aWFsUmVmZXJlbmNlfSk7XHJcblx0XHR0aGlzLnByb3BzLnZpZXcuZXh0ZW50ID10aGlzLmV4dGVudDtcclxuXHJcblx0XHRcclxuXHR9LFxyXG5cclxuXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpIHsgIFxyXG5cdFx0cmV0dXJuICg8ZGl2Lz4pO1xyXG5cdH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xyXG4iXX0=