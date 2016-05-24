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
				{ path: '', component: _root2.default },
				_react2.default.createElement(_reactRouter.IndexRoute, { component: _landing2.default })
		);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVFHO0FBQUE7SUFBQSxFQUFPLE1BQUssRUFBWixFQUFlLHlCQUFmO0lBQ0EseURBQVksNEJBQVo7QUFEQSxHIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlLCBJbmRleFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuLyogY29udGFpbmVycyAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJ2FwcC9jb21wb25lbnRzL2xheW91dC9yb290JztcclxuXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJ2FwcC9jb21wb25lbnRzL2xheW91dC9sYW5kaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBcdDxSb3V0ZSBwYXRoPVwiXCIgY29tcG9uZW50PXtBcHB9PlxyXG5cdCAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMYW5kaW5nfSAvPlxyXG5cdDwvUm91dGU+XHJcbik7Il19