define(['exports', 'react', 'react-bootstrap', 'app/components/filter/filterListWithSearch', 'react-redux'], function (exports, _react, _reactBootstrap, _filterListWithSearch, _reactRedux) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
				value: true
		});

		var _react2 = _interopRequireDefault(_react);

		var _filterListWithSearch2 = _interopRequireDefault(_filterListWithSearch);

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

		var FilterTabContent = function (_React$Component) {
				_inherits(FilterTabContent, _React$Component);

				function FilterTabContent() {
						_classCallCheck(this, FilterTabContent);

						var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterTabContent).call(this));

						_this.state = {};
						return _this;
				}

				_createClass(FilterTabContent, [{
						key: 'componentDidMount',
						value: function componentDidMount() {}
				}, {
						key: 'render',
						value: function render() {
								return _react2.default.createElement(
										'div',
										{ className: 'tab-container' },
										_react2.default.createElement(
												_reactBootstrap.Tabs,
												{ defaultActiveKey: 1 },
												_react2.default.createElement(
														_reactBootstrap.Tab,
														{ className: 'filter-tab-content', eventKey: 1, title: 'Funding' },
														_react2.default.createElement(
																_reactBootstrap.Tabs,
																{ defaultActiveKey: 1, position: 'left', tabWidth: 3 },
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 1, title: 'Funding Source' },
																		'Funding Source Tab content'
																),
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 2, title: 'Funding Type (ODA)' },
																		'Funding Type (ODA) Tab content'
																),
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 3, title: 'Financing Institution' },
																		_react2.default.createElement(_filterListWithSearch2.default, _extends({ filterType: 'fa' }, this.props.filters["fa"]))
																)
														)
												),
												_react2.default.createElement(
														_reactBootstrap.Tab,
														{ className: 'filter-tab-content', eventKey: 2, title: 'Agencies' },
														_react2.default.createElement(
																_reactBootstrap.Tabs,
																{ defaultActiveKey: 1, position: 'left', tabWidth: 3 },
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 1, title: 'Implementing Agency' },
																		_react2.default.createElement(_filterListWithSearch2.default, _extends({ filterType: 'ia' }, this.props.filters["ia"]))
																)
														)
												),
												_react2.default.createElement(
														_reactBootstrap.Tab,
														{ className: 'filter-tab-content', eventKey: 3, title: 'Sectors' },
														_react2.default.createElement(
																_reactBootstrap.Tabs,
																{ defaultActiveKey: 1, position: 'left', tabWidth: 3 },
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 1, title: 'Sectors' },
																		_react2.default.createElement(_filterListWithSearch2.default, _extends({ filterType: 'st' }, this.props.filters["st"]))
																),
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 2, title: 'Philippines Development Priority' },
																		'Philippines Development Priority Tab content'
																)
														)
												),
												_react2.default.createElement(
														_reactBootstrap.Tab,
														{ className: 'filter-tab-content', eventKey: 4, title: 'Locations' },
														_react2.default.createElement(
																_reactBootstrap.Tabs,
																{ defaultActiveKey: 1, position: 'left', tabWidth: 3 },
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 1, title: 'Coverage Scope' },
																		'Coverage Scope Tab content'
																),
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 2, title: 'Coverage' },
																		'Coverage Tab content'
																)
														)
												),
												_react2.default.createElement(
														_reactBootstrap.Tab,
														{ className: 'filter-tab-content', eventKey: 5, title: 'Dates' },
														_react2.default.createElement(
																_reactBootstrap.Tabs,
																{ defaultActiveKey: 1, position: 'left', tabWidth: 3 },
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 1, title: 'Implementation period' },
																		'Implementation period Tab content'
																),
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 2, title: 'Loan validity period' },
																		'Loan validity period Tab content'
																)
														)
												),
												_react2.default.createElement(
														_reactBootstrap.Tab,
														{ className: 'filter-tab-content', eventKey: 6, title: 'Financial ranges' },
														_react2.default.createElement(
																_reactBootstrap.Tabs,
																{ defaultActiveKey: 1, position: 'left', tabWidth: 3 },
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 1, title: 'Financial Amount' },
																		'Financial Amount Tab content'
																),
																_react2.default.createElement(
																		_reactBootstrap.Tab,
																		{ className: 'filter-list-content', eventKey: 2, title: 'Physical and Financial Performance' },
																		'Physical and Financial Performance Tab content'
																)
														)
												)
										)
								);
						}
				}]);

				return FilterTabContent;
		}(_react2.default.Component);

		var mapStateToProps = function mapStateToProps(state, props) {
				return {
						filters: state.filters
				};
		};

		exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilterTabContent);
		;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyVGFicy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUtNLGdCOzs7QUFFTCxnQ0FBYztBQUFBOztBQUFBOztBQUVWLFlBQUssS0FBTCxHQUFhLEVBQWI7QUFGVTtBQUdiOzs7OzBDQUVxQixDQUVyQjs7OytCQUVVO0FBQ1IsZUFDRTtBQUFBO1VBQUEsRUFBSyxXQUFVLGVBQWY7VUFDQztBQUFBO1lBQUEsRUFBTSxrQkFBa0IsQ0FBeEI7WUFDQztBQUFBO2NBQUEsRUFBSyxXQUFVLG9CQUFmLEVBQW9DLFVBQVUsQ0FBOUMsRUFBaUQsT0FBTSxTQUF2RDtjQUNZO0FBQUE7Z0JBQUEsRUFBTSxrQkFBa0IsQ0FBeEIsRUFBMkIsVUFBUyxNQUFwQyxFQUEyQyxVQUFVLENBQXJEO2dCQUNiO0FBQUE7a0JBQUEsRUFBSyxXQUFVLHFCQUFmLEVBQXFDLFVBQVUsQ0FBL0MsRUFBa0QsT0FBTSxnQkFBeEQ7a0JBQUE7QUFBQSxpQkFEYTtnQkFJVjtBQUFBO2tCQUFBLEVBQUssV0FBVSxxQkFBZixFQUFxQyxVQUFVLENBQS9DLEVBQWtELE9BQU0sb0JBQXhEO2tCQUFBO0FBQUEsaUJBSlU7Z0JBT1Y7QUFBQTtrQkFBQSxFQUFLLFdBQVUscUJBQWYsRUFBcUMsVUFBVSxDQUEvQyxFQUFrRCxPQUFNLHVCQUF4RDtrQkFDRix5RUFBWSxZQUFXLElBQXZCLElBQWdDLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBaEM7QUFERTtBQVBVO0FBRFosYUFERDtZQWNVO0FBQUE7Y0FBQSxFQUFLLFdBQVUsb0JBQWYsRUFBb0MsVUFBVSxDQUE5QyxFQUFpRCxPQUFNLFVBQXZEO2NBQ0c7QUFBQTtnQkFBQSxFQUFNLGtCQUFrQixDQUF4QixFQUEyQixVQUFTLE1BQXBDLEVBQTJDLFVBQVUsQ0FBckQ7Z0JBQ2I7QUFBQTtrQkFBQSxFQUFLLFdBQVUscUJBQWYsRUFBcUMsVUFBVSxDQUEvQyxFQUFrRCxPQUFNLHFCQUF4RDtrQkFDQyx5RUFBWSxZQUFXLElBQXZCLElBQWdDLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBaEM7QUFERDtBQURhO0FBREgsYUFkVjtZQXFCVTtBQUFBO2NBQUEsRUFBSyxXQUFVLG9CQUFmLEVBQW9DLFVBQVUsQ0FBOUMsRUFBaUQsT0FBTSxTQUF2RDtjQUNHO0FBQUE7Z0JBQUEsRUFBTSxrQkFBa0IsQ0FBeEIsRUFBMkIsVUFBUyxNQUFwQyxFQUEyQyxVQUFVLENBQXJEO2dCQUNiO0FBQUE7a0JBQUEsRUFBSyxXQUFVLHFCQUFmLEVBQXFDLFVBQVUsQ0FBL0MsRUFBa0QsT0FBTSxTQUF4RDtrQkFDQyx5RUFBWSxZQUFXLElBQXZCLElBQWdDLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBaEM7QUFERCxpQkFEYTtnQkFJVjtBQUFBO2tCQUFBLEVBQUssV0FBVSxxQkFBZixFQUFxQyxVQUFVLENBQS9DLEVBQWtELE9BQU0sa0NBQXhEO2tCQUFBO0FBQUE7QUFKVTtBQURILGFBckJWO1lBK0JVO0FBQUE7Y0FBQSxFQUFLLFdBQVUsb0JBQWYsRUFBb0MsVUFBVSxDQUE5QyxFQUFpRCxPQUFNLFdBQXZEO2NBQ0c7QUFBQTtnQkFBQSxFQUFNLGtCQUFrQixDQUF4QixFQUEyQixVQUFTLE1BQXBDLEVBQTJDLFVBQVUsQ0FBckQ7Z0JBQ2I7QUFBQTtrQkFBQSxFQUFLLFdBQVUscUJBQWYsRUFBcUMsVUFBVSxDQUEvQyxFQUFrRCxPQUFNLGdCQUF4RDtrQkFBQTtBQUFBLGlCQURhO2dCQUlWO0FBQUE7a0JBQUEsRUFBSyxXQUFVLHFCQUFmLEVBQXFDLFVBQVUsQ0FBL0MsRUFBa0QsT0FBTSxVQUF4RDtrQkFBQTtBQUFBO0FBSlU7QUFESCxhQS9CVjtZQXlDVTtBQUFBO2NBQUEsRUFBSyxXQUFVLG9CQUFmLEVBQW9DLFVBQVUsQ0FBOUMsRUFBaUQsT0FBTSxPQUF2RDtjQUNHO0FBQUE7Z0JBQUEsRUFBTSxrQkFBa0IsQ0FBeEIsRUFBMkIsVUFBUyxNQUFwQyxFQUEyQyxVQUFVLENBQXJEO2dCQUNiO0FBQUE7a0JBQUEsRUFBSyxXQUFVLHFCQUFmLEVBQXFDLFVBQVUsQ0FBL0MsRUFBa0QsT0FBTSx1QkFBeEQ7a0JBQUE7QUFBQSxpQkFEYTtnQkFJVjtBQUFBO2tCQUFBLEVBQUssV0FBVSxxQkFBZixFQUFxQyxVQUFVLENBQS9DLEVBQWtELE9BQU0sc0JBQXhEO2tCQUFBO0FBQUE7QUFKVTtBQURILGFBekNWO1lBbURVO0FBQUE7Y0FBQSxFQUFLLFdBQVUsb0JBQWYsRUFBb0MsVUFBVSxDQUE5QyxFQUFpRCxPQUFNLGtCQUF2RDtjQUNHO0FBQUE7Z0JBQUEsRUFBTSxrQkFBa0IsQ0FBeEIsRUFBMkIsVUFBUyxNQUFwQyxFQUEyQyxVQUFVLENBQXJEO2dCQUNiO0FBQUE7a0JBQUEsRUFBSyxXQUFVLHFCQUFmLEVBQXFDLFVBQVUsQ0FBL0MsRUFBa0QsT0FBTSxrQkFBeEQ7a0JBQUE7QUFBQSxpQkFEYTtnQkFJVjtBQUFBO2tCQUFBLEVBQUssV0FBVSxxQkFBZixFQUFxQyxVQUFVLENBQS9DLEVBQWtELE9BQU0sb0NBQXhEO2tCQUFBO0FBQUE7QUFKVTtBQURIO0FBbkRWO0FBREQsU0FERjtBQW1FQTs7OztJQS9FMkIsZ0JBQU0sUzs7QUFrRnJDLE1BQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDeEMsV0FBTztBQUNMLGVBQVMsTUFBTTtBQURWLEtBQVA7QUFHRCxHQUpEOztvQkFNZSx5QkFBUSxlQUFSLEVBQXlCLGdCQUF6QixDO0FBQTJDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyVGFicy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1RhYnMsIFRhYiwgQnV0dG9uLCBMYWJlbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEZpbHRlckxpc3QgZnJvbSAnYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlckxpc3RXaXRoU2VhcmNoJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jbGFzcyBGaWx0ZXJUYWJDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0ICAgIHN1cGVyKCk7XHJcblx0ICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuXHR9XHJcblxyXG4gIFx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRcclxuXHR9XHJcblxyXG4gIFx0cmVuZGVyKCkge1xyXG4gIFx0XHRyZXR1cm4gKFxyXG5cdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRhaW5lclwiPlxyXG5cdCAgICBcdFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0+XHJcblx0ICAgIFx0XHRcdDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYi1jb250ZW50XCIgZXZlbnRLZXk9ezF9IHRpdGxlPVwiRnVuZGluZ1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgIFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0gcG9zaXRpb249XCJsZWZ0XCIgdGFiV2lkdGg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLWxpc3QtY29udGVudFwiIGV2ZW50S2V5PXsxfSB0aXRsZT1cIkZ1bmRpbmcgU291cmNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRGdW5kaW5nIFNvdXJjZSBUYWIgY29udGVudFxyXG5cdFx0XHRcdFx0XHQgICAgPC9UYWI+XHJcblx0XHRcdFx0XHRcdCAgICA8VGFiIGNsYXNzTmFtZT1cImZpbHRlci1saXN0LWNvbnRlbnRcIiBldmVudEtleT17Mn0gdGl0bGU9XCJGdW5kaW5nIFR5cGUgKE9EQSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEZ1bmRpbmcgVHlwZSAoT0RBKSBUYWIgY29udGVudFxyXG5cdFx0XHRcdFx0XHQgICAgPC9UYWI+XHJcblx0XHRcdFx0XHRcdCAgICA8VGFiIGNsYXNzTmFtZT1cImZpbHRlci1saXN0LWNvbnRlbnRcIiBldmVudEtleT17M30gdGl0bGU9XCJGaW5hbmNpbmcgSW5zdGl0dXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWx0ZXJMaXN0IGZpbHRlclR5cGU9XCJmYVwiIHsuLi50aGlzLnByb3BzLmZpbHRlcnNbXCJmYVwiXX0gLz5cclxuXHRcdFx0XHRcdFx0ICAgIDwvVGFiPlxyXG5cdFx0XHRcdFx0XHQ8L1RhYnM+XHJcblx0ICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cdCAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cImZpbHRlci10YWItY29udGVudFwiIGV2ZW50S2V5PXsyfSB0aXRsZT1cIkFnZW5jaWVzXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgXHQ8VGFicyBkZWZhdWx0QWN0aXZlS2V5PXsxfSBwb3NpdGlvbj1cImxlZnRcIiB0YWJXaWR0aD17M30+XHJcblx0XHRcdFx0XHRcdFx0PFRhYiBjbGFzc05hbWU9XCJmaWx0ZXItbGlzdC1jb250ZW50XCIgZXZlbnRLZXk9ezF9IHRpdGxlPVwiSW1wbGVtZW50aW5nIEFnZW5jeVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpbHRlckxpc3QgZmlsdGVyVHlwZT1cImlhXCIgey4uLnRoaXMucHJvcHMuZmlsdGVyc1tcImlhXCJdfSAvPlxyXG5cdFx0XHRcdFx0XHQgICAgPC9UYWI+XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHQgICAgICAgICAgICAgICAgPC9UYWI+XHJcblx0ICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYi1jb250ZW50XCIgZXZlbnRLZXk9ezN9IHRpdGxlPVwiU2VjdG9yc1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgIFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0gcG9zaXRpb249XCJsZWZ0XCIgdGFiV2lkdGg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLWxpc3QtY29udGVudFwiIGV2ZW50S2V5PXsxfSB0aXRsZT1cIlNlY3RvcnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWx0ZXJMaXN0IGZpbHRlclR5cGU9XCJzdFwiIHsuLi50aGlzLnByb3BzLmZpbHRlcnNbXCJzdFwiXX0gLz5cclxuXHRcdFx0XHRcdFx0ICAgIDwvVGFiPlxyXG5cdFx0XHRcdFx0XHQgICAgPFRhYiBjbGFzc05hbWU9XCJmaWx0ZXItbGlzdC1jb250ZW50XCIgZXZlbnRLZXk9ezJ9IHRpdGxlPVwiUGhpbGlwcGluZXMgRGV2ZWxvcG1lbnQgUHJpb3JpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFBoaWxpcHBpbmVzIERldmVsb3BtZW50IFByaW9yaXR5IFRhYiBjb250ZW50XHJcblx0XHRcdFx0XHRcdCAgICA8L1RhYj5cclxuXHRcdFx0XHRcdFx0PC9UYWJzPlxyXG5cdCAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHQgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJmaWx0ZXItdGFiLWNvbnRlbnRcIiBldmVudEtleT17NH0gdGl0bGU9XCJMb2NhdGlvbnNcIj5cclxuXHQgICAgICAgICAgICAgICAgICBcdDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9ezF9IHBvc2l0aW9uPVwibGVmdFwiIHRhYldpZHRoPXszfT5cclxuXHRcdFx0XHRcdFx0XHQ8VGFiIGNsYXNzTmFtZT1cImZpbHRlci1saXN0LWNvbnRlbnRcIiBldmVudEtleT17MX0gdGl0bGU9XCJDb3ZlcmFnZSBTY29wZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q292ZXJhZ2UgU2NvcGUgVGFiIGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0ICAgIDwvVGFiPlxyXG5cdFx0XHRcdFx0XHQgICAgPFRhYiBjbGFzc05hbWU9XCJmaWx0ZXItbGlzdC1jb250ZW50XCIgZXZlbnRLZXk9ezJ9IHRpdGxlPVwiQ292ZXJhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdENvdmVyYWdlIFRhYiBjb250ZW50XHJcblx0XHRcdFx0XHRcdCAgICA8L1RhYj5cclxuXHRcdFx0XHRcdFx0PC9UYWJzPlxyXG5cdCAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHQgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJmaWx0ZXItdGFiLWNvbnRlbnRcIiBldmVudEtleT17NX0gdGl0bGU9XCJEYXRlc1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgIFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0gcG9zaXRpb249XCJsZWZ0XCIgdGFiV2lkdGg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLWxpc3QtY29udGVudFwiIGV2ZW50S2V5PXsxfSB0aXRsZT1cIkltcGxlbWVudGF0aW9uIHBlcmlvZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0SW1wbGVtZW50YXRpb24gcGVyaW9kIFRhYiBjb250ZW50XHJcblx0XHRcdFx0XHRcdCAgICA8L1RhYj5cclxuXHRcdFx0XHRcdFx0ICAgIDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLWxpc3QtY29udGVudFwiIGV2ZW50S2V5PXsyfSB0aXRsZT1cIkxvYW4gdmFsaWRpdHkgcGVyaW9kXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRMb2FuIHZhbGlkaXR5IHBlcmlvZCBUYWIgY29udGVudFxyXG5cdFx0XHRcdFx0XHQgICAgPC9UYWI+XHJcblx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHQgICAgICAgICAgICAgICAgPC9UYWI+XHJcblx0ICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYi1jb250ZW50XCIgZXZlbnRLZXk9ezZ9IHRpdGxlPVwiRmluYW5jaWFsIHJhbmdlc1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgIFx0PFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0gcG9zaXRpb249XCJsZWZ0XCIgdGFiV2lkdGg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWIgY2xhc3NOYW1lPVwiZmlsdGVyLWxpc3QtY29udGVudFwiIGV2ZW50S2V5PXsxfSB0aXRsZT1cIkZpbmFuY2lhbCBBbW91bnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEZpbmFuY2lhbCBBbW91bnQgVGFiIGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0ICAgIDwvVGFiPlxyXG5cdFx0XHRcdFx0XHQgICAgPFRhYiBjbGFzc05hbWU9XCJmaWx0ZXItbGlzdC1jb250ZW50XCIgZXZlbnRLZXk9ezJ9IHRpdGxlPVwiUGh5c2ljYWwgYW5kIEZpbmFuY2lhbCBQZXJmb3JtYW5jZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UGh5c2ljYWwgYW5kIEZpbmFuY2lhbCBQZXJmb3JtYW5jZSBUYWIgY29udGVudFxyXG5cdFx0XHRcdFx0XHQgICAgPC9UYWI+XHJcblx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHQgICAgICAgICAgICAgICAgPC9UYWI+XHJcblx0XHRcdFx0PC9UYWJzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgKTtcclxuXHQgICBcclxuICBcdH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRmlsdGVyVGFiQ29udGVudCk7O1xyXG4iXX0=