define(['exports', 'react', 'react-router', 'app/components/layout/root', 'app/components/layout/landing'], function (exports, _react, _reactRouter, _root, _landing) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
				value: true
		});

		var _react2 = _interopRequireDefault(_react);

		var _root2 = _interopRequireDefault(_root);

		var _landing2 = _interopRequireDefault(_landing);

		function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {
						default: obj
				};
		}

		exports.default = _react2.default.createElement(
				_reactRouter.Route,
				{ path: '/react-esri/dist', component: _root2.default },
				_react2.default.createElement(_reactRouter.IndexRoute, { component: _landing2.default })
		);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVFHO0FBQUE7SUFBQSxFQUFPLE1BQUssa0JBQVosRUFBK0IseUJBQS9CO0lBQ0EseURBQVksNEJBQVo7QUFEQSxHIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlLCBJbmRleFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuLyogY29udGFpbmVycyAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJ2FwcC9jb21wb25lbnRzL2xheW91dC9yb290JztcclxuXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJ2FwcC9jb21wb25lbnRzL2xheW91dC9sYW5kaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBcdDxSb3V0ZSBwYXRoPVwiL3JlYWN0LWVzcmkvZGlzdFwiIGNvbXBvbmVudD17QXBwfT5cclxuXHQgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17TGFuZGluZ30gLz5cclxuXHQ8L1JvdXRlPlxyXG4pOyJdfQ==