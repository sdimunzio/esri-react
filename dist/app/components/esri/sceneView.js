define(['exports', 'react', 'react/react-dom', 'esri/views/SceneView'], function (exports, _react, _reactDom, _SceneView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _SceneView2 = _interopRequireDefault(_SceneView);

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

	var SceneViewComponent = _react2.default.createClass({
		displayName: 'SceneViewComponent',
		componentDidMount: function componentDidMount() {
			var node = _reactDom2.default.findDOMNode(this.refs.mapView);
			this.view = new _SceneView2.default(_extends({ container: node }, this.props));
		},
		render: function render() {
			var children = this.view ? _react2.default.Children.map(this.props.children, function (child) {
				return child ? _react2.default.cloneElement(child, { view: view }) : null;
			}) : null;

			return _react2.default.createElement(
				'div',
				{ className: 'mapView', ref: 'mapView' },
				children
			);
		}
	});

	exports.default = SceneViewComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXHNjZW5lVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxxQkFBcUIsZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBRTVDLG1CQUY0QywrQkFFeEI7QUFDbkIsT0FBSSxPQUFPLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsT0FBL0IsQ0FBWDtBQUNBLFFBQUssSUFBTCxHQUFXLG1DQUFlLFdBQVcsSUFBMUIsSUFBa0MsS0FBSyxLQUF2QyxFQUFYO0FBRUEsR0FOMkM7QUFTNUMsUUFUNEMsb0JBU3BDO0FBQ1AsT0FBTSxXQUFXLEtBQUssSUFBTCxHQUFZLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEtBQUssS0FBTCxDQUFXLFFBQTlCLEVBQXdDLGlCQUFTO0FBQUMsV0FBTyxRQUFRLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsRUFBQyxVQUFELEVBQTFCLENBQVIsR0FBNEMsSUFBbkQ7QUFBeUQsSUFBM0csQ0FBWixHQUEySCxJQUE1STs7QUFFQSxVQUFRO0FBQUE7SUFBQSxFQUFLLFdBQVUsU0FBZixFQUF5QixLQUFJLFNBQTdCO0lBQXdDO0FBQXhDLElBQVI7QUFDQTtBQWIyQyxFQUFsQixDQUEzQjs7bUJBbUJlLGtCIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVzcmlcXHNjZW5lVmlldy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QvcmVhY3QtZG9tJztcclxuaW1wb3J0IFNjZW5lVmlldyBmcm9tICdlc3JpL3ZpZXdzL1NjZW5lVmlldyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFNjZW5lVmlld0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tYXBWaWV3KTtcclxuXHRcdHRoaXMudmlldz0gbmV3IFNjZW5lVmlldyh7Y29udGFpbmVyOiBub2RlLC4uLnRoaXMucHJvcHN9KTtcclxuXHRcdFxyXG5cdH0sXHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy52aWV3ID8gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtyZXR1cm4gY2hpbGQgPyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHt2aWV3fSkgOiBudWxsO30pIDogbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdtYXBWaWV3JyByZWY9J21hcFZpZXcnPntjaGlsZHJlbn08L2Rpdj4pXHJcblx0fVxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjZW5lVmlld0NvbXBvbmVudDtcclxuIl19