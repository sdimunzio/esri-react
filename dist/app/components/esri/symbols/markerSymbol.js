define(['exports', 'react', 'react/react-dom', 'esri/symbols/SimpleMarkerSymbol'], function (exports, _react, _reactDom, _SimpleMarkerSymbol) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _SimpleMarkerSymbol2 = _interopRequireDefault(_SimpleMarkerSymbol);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var simpleMarkerSymbol = _react2.default.createClass({
		displayName: 'simpleMarkerSymbol',
		componentWillMount: function componentWillMount() {
			this.element = new _SimpleMarkerSymbol2.default(this.props);
		},


		render: function render() {
			return _react2.default.createElement('div', null);
		}

	});

	exports.default = simpleMarkerSymbol;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXHN5bWJvbHNcXG1hcmtlclN5bWJvbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0scUJBQW9CLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUUzQyxvQkFGMkMsZ0NBRXRCO0FBQ3BCLFFBQUssT0FBTCxHQUFlLGlDQUF1QixLQUFLLEtBQTVCLENBQWY7QUFDQSxHQUowQzs7O0FBTTNDLFVBQVEsa0JBQVc7QUFDbEIsVUFBUSwwQ0FBUjtBQUNBOztBQVIwQyxFQUFsQixDQUExQjs7bUJBWWUsa0IiLCJmaWxlIjoiY29tcG9uZW50c1xcZXNyaVxcc3ltYm9sc1xcbWFya2VyU3ltYm9sLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC9yZWFjdC1kb20nO1xyXG5pbXBvcnQgU2ltcGxlTWFya2VyU3ltYm9sIGZyb20gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHNpbXBsZU1hcmtlclN5bWJvbD0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQgPSBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHRoaXMucHJvcHMpO1xyXG5cdH0sXHJcblxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7ICBcclxuXHRcdHJldHVybiAoPGRpdj48L2Rpdj4pO1xyXG5cdH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlTWFya2VyU3ltYm9sO1xyXG4iXX0=