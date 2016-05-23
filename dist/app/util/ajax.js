define(['exports', 'axios'], function (exports, _axios) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _axios2 = _interopRequireDefault(_axios);

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

	var AjaxUtil = function () {
		function AjaxUtil() {
			_classCallCheck(this, AjaxUtil);
		}

		_createClass(AjaxUtil, null, [{
			key: 'get',
			value: function get(url) {
				var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

				return new Promise(function (resolve, reject) {
					// (A)
					_axios2.default.get(url, {
						responseType: 'json',
						params: params
					}).then(function (response) {
						resolve(response);
					}).catch(function (response) {
						reject(response);
					});
				});
			}
		}, {
			key: 'put',
			value: function put(url) {
				var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

				return new Promise(function (resolve, reject) {
					_axios2.default.put(url, body).then(function (response) {
						resolve(response);
					}).catch(function (response) {
						reject(response);
					});
				});
			}
		}]);

		return AjaxUtil;
	}();

	exports.default = AjaxUtil;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxcXGFqYXguZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUdxQixROzs7Ozs7O3VCQUNULEcsRUFBa0I7QUFBQSxRQUFiLE1BQWEseURBQUosRUFBSTs7QUFDNUIsV0FBTyxJQUFJLE9BQUosQ0FDTixVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEI7O0FBQ3pCLHFCQUFNLEdBQU4sQ0FBVSxHQUFWLEVBQWU7QUFDYixvQkFBYyxNQUREO0FBRWIsY0FBUTtBQUZLLE1BQWYsRUFJRSxJQUpGLENBSU8sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLGNBQVEsUUFBUjtBQUNBLE1BTkYsRUFPRSxLQVBGLENBT1EsVUFBUyxRQUFULEVBQW1CO0FBQ3pCLGFBQU8sUUFBUDtBQUNBLE1BVEY7QUFVQSxLQVpLLENBQVA7QUFhQTs7O3VCQUVVLEcsRUFBZ0I7QUFBQSxRQUFYLElBQVcseURBQUosRUFBSTs7QUFDMUIsV0FBTyxJQUFJLE9BQUosQ0FDTixVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEI7QUFDekIscUJBQU0sR0FBTixDQUFVLEdBQVYsRUFBZSxJQUFmLEVBQ0UsSUFERixDQUNPLFVBQVMsUUFBVCxFQUFtQjtBQUN4QixjQUFRLFFBQVI7QUFDQSxNQUhGLEVBSUUsS0FKRixDQUlRLFVBQVMsUUFBVCxFQUFtQjtBQUN6QixhQUFPLFFBQVA7QUFDQSxNQU5GO0FBT0EsS0FUSyxDQUFQO0FBVUE7Ozs7OzttQkE1Qm1CLFEiLCJmaWxlIjoidXRpbFxcYWpheC5lczYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vL1RPRE86IENvbXBsZXRlIHdpdGggUE9TVCBhbmQgREVMVEUgbWV0aG9kcyBcclxuLy9UT0RPIDogU2VjdXJpdHkgSW50ZWdyYXRpb25cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheFV0aWwge1xyXG5cdHN0YXRpYyBnZXQodXJsLCBwYXJhbXMgPSB7fSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKFxyXG5cdFx0XHRmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsgLy8gKEEpXHJcblx0XHRcdFx0QXhpb3MuZ2V0KHVybCwge1xyXG5cdFx0XHRcdFx0XHRyZXNwb25zZVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdFx0cGFyYW1zOiBwYXJhbXNcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBwdXQodXJsLCBib2R5ID0ge30pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShcclxuXHRcdFx0ZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7IFxyXG5cdFx0XHRcdEF4aW9zLnB1dCh1cmwsIGJvZHkpXHJcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxufSJdfQ==