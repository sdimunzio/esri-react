define(['exports', 'axios', 'app/constants/constants', 'app/util/setting'], function (exports, _axios, _constants, _setting) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _axios2 = _interopRequireDefault(_axios);

	var _setting2 = _interopRequireDefault(_setting);

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

	console.log(_setting2.default);

	var POST = 'POST';
	var GET = 'GET';
	var PUT = 'PUT';
	var DELETE = 'DELETE';

	var Connector = function () {
		function Connector() {
			_classCallCheck(this, Connector);
		}

		_createClass(Connector, [{
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
		}, {
			key: 'post',
			value: function post(url) {
				var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


				return new Promise(function (resolve, reject) {
					_axios2.default.put(url, body).then(function (response) {
						resolve(response);
					}).catch(function (response) {
						reject(response);
					});
				});
			}
		}, {
			key: 'call',
			value: function call(verb, endpoint, params) {

				var apiRoot = _setting2.default.get('API', _constants.API_BASE_URL);

				var url = '' + apiRoot + endpoint;

				var caller = void 0;
				if (verb == GET) caller = this.get;
				if (verb == POST) caller = this.post;
				if (verb == PUT) caller = this.put;

				return new Promise(function (resolve, reject) {
					caller(url, params).then(function (data) {
						resolve(data.data);
					}).catch(function (err) {
						console.log('Failed lading api data');
						reject(err);
					});
				});
			}
		}, {
			key: 'getProjectsGeoJson',
			value: function getProjectsGeoJson(level, params) {
				var _this = this;

				return new Promise(function (resolve, reject) {
					var url = _setting2.default.get('API', 'PROJECT_GEOJSON');
					debugger;
					_this.call(GET, url.replace('${level}', level), params).then(function (data) {
						/*apply any data transformation*/
						resolve(data); ////resolve with original data or perform any data transformation needed
					}).catch(reject);
				});
			}
		}, {
			key: 'getFilterList',
			value: function getFilterList(filterType) {
				var _this2 = this;

				return new Promise(function (resolve, reject) {
					_this2.call(GET, _setting2.default.get('API', 'FILTER_LIST')[filterType], {}).then(function (data) {
						resolve(data); ////resolve with original data or perform any data transformation needed			
					}).catch(reject);
				});
			}
		}]);

		return Connector;
	}();

	var connector = new Connector();

	exports.default = connector;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3RvclxcY29ubmVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUSxHQUFSOztBQUVBLEtBQU0sT0FBTSxNQUFaO0FBQ0EsS0FBTSxNQUFLLEtBQVg7QUFDQSxLQUFNLE1BQUssS0FBWDtBQUNBLEtBQU0sU0FBUSxRQUFkOztLQUVNLFM7Ozs7Ozs7dUJBR0QsRyxFQUFrQjtBQUFBLFFBQWIsTUFBYSx5REFBSixFQUFJOztBQUNyQixXQUFPLElBQUksT0FBSixDQUNOLFVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQjs7QUFDekIscUJBQU0sR0FBTixDQUFVLEdBQVYsRUFBZTtBQUNkLG9CQUFjLE1BREE7QUFFZCxjQUFRO0FBRk0sTUFBZixFQUlDLElBSkQsQ0FJTSxVQUFTLFFBQVQsRUFBbUI7QUFDeEIsY0FBUSxRQUFSO0FBQ0EsTUFORCxFQU9DLEtBUEQsQ0FPTyxVQUFTLFFBQVQsRUFBbUI7QUFDekIsYUFBTyxRQUFQO0FBQ0EsTUFURDtBQVVBLEtBWkssQ0FBUDtBQWFBOzs7dUJBRUcsRyxFQUFnQjtBQUFBLFFBQVgsSUFBVyx5REFBSixFQUFJOztBQUNuQixXQUFPLElBQUksT0FBSixDQUNOLFVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQjtBQUN6QixxQkFBTSxHQUFOLENBQVUsR0FBVixFQUFlLElBQWYsRUFDQyxJQURELENBQ00sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLGNBQVEsUUFBUjtBQUNBLE1BSEQsRUFJQyxLQUpELENBSU8sVUFBUyxRQUFULEVBQW1CO0FBQ3pCLGFBQU8sUUFBUDtBQUNBLE1BTkQ7QUFPQSxLQVRLLENBQVA7QUFVQTs7O3dCQUdJLEcsRUFBZ0I7QUFBQSxRQUFYLElBQVcseURBQUosRUFBSTs7O0FBRXBCLFdBQU8sSUFBSSxPQUFKLENBQ04sVUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCO0FBQ3pCLHFCQUFNLEdBQU4sQ0FBVSxHQUFWLEVBQWUsSUFBZixFQUNDLElBREQsQ0FDTSxVQUFTLFFBQVQsRUFBbUI7QUFDeEIsY0FBUSxRQUFSO0FBQ0EsTUFIRCxFQUlDLEtBSkQsQ0FJTyxVQUFTLFFBQVQsRUFBbUI7QUFDekIsYUFBTyxRQUFQO0FBQ0EsTUFORDtBQU9BLEtBVEssQ0FBUDtBQVVBOzs7d0JBR0ksSSxFQUFLLFEsRUFBVSxNLEVBQVE7O0FBRzNCLFFBQUksVUFBUSxrQkFBUyxHQUFULENBQWEsS0FBYiwwQkFBWjs7QUFFQSxRQUFJLFdBQU8sT0FBUCxHQUFpQixRQUFyQjs7QUFHQSxRQUFJLGVBQUo7QUFDQSxRQUFJLFFBQVEsR0FBWixFQUFpQixTQUFTLEtBQUssR0FBZDtBQUNqQixRQUFJLFFBQVEsSUFBWixFQUFrQixTQUFTLEtBQUssSUFBZDtBQUNsQixRQUFJLFFBQVEsR0FBWixFQUFrQixTQUFTLEtBQUssR0FBZDs7QUFJbEIsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3ZDLFlBQU8sR0FBUCxFQUFZLE1BQVosRUFBb0IsSUFBcEIsQ0FBeUIsVUFBQyxJQUFELEVBQVU7QUFDbEMsY0FBUSxLQUFLLElBQWI7QUFDQSxNQUZELEVBRUcsS0FGSCxDQUVTLFVBQUMsR0FBRCxFQUFTO0FBQ2pCLGNBQVEsR0FBUixDQUFZLHdCQUFaO0FBQ0EsYUFBTyxHQUFQO0FBQ0EsTUFMRDtBQU1BLEtBUE0sQ0FBUDtBQVFBOzs7c0NBR2tCLEssRUFBTSxNLEVBQVE7QUFBQTs7QUFDaEMsV0FBTyxJQUFJLE9BQUosQ0FBYSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3hDLFNBQUksTUFBSSxrQkFBUyxHQUFULENBQWEsS0FBYixFQUFtQixpQkFBbkIsQ0FBUjtBQUNBO0FBQ0EsV0FBSyxJQUFMLENBQVUsR0FBVixFQUFjLElBQUksT0FBSixDQUFZLFVBQVosRUFBdUIsS0FBdkIsQ0FBZCxFQUE2QyxNQUE3QyxFQUFxRCxJQUFyRCxDQUEwRCxVQUFDLElBQUQsRUFBVTs7QUFFbkUsY0FBUSxJQUFSLEU7QUFFQSxNQUpELEVBSUcsS0FKSCxDQUlTLE1BSlQ7QUFLQSxLQVJNLENBQVA7QUFTQTs7O2lDQUVhLFUsRUFBWTtBQUFBOztBQUN6QixXQUFPLElBQUksT0FBSixDQUFhLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDeEMsWUFBSyxJQUFMLENBQVUsR0FBVixFQUFjLGtCQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW1CLGFBQW5CLEVBQWtDLFVBQWxDLENBQWQsRUFBNkQsRUFBN0QsRUFBaUUsSUFBakUsQ0FBc0UsVUFBQyxJQUFELEVBQVU7QUFDL0UsY0FBUSxJQUFSLEU7QUFDQSxNQUZELEVBRUcsS0FGSCxDQUVTLE1BRlQ7QUFHQSxLQUpNLENBQVA7QUFLQTs7Ozs7O0FBSUYsS0FBTSxZQUFVLElBQUksU0FBSixFQUFoQjs7bUJBRWUsUyIsImZpbGUiOiJjb25uZWN0b3JcXGNvbm5lY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QVBJX0JBU0VfVVJMfSAgZnJvbSAnYXBwL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnYXBwL3V0aWwvc2V0dGluZyc7XHJcblxyXG5cclxuY29uc29sZS5sb2coU2V0dGluZ3MpO1xyXG5cclxuY29uc3QgUE9TVD0gJ1BPU1QnO1xyXG5jb25zdCBHRVQ9ICdHRVQnO1xyXG5jb25zdCBQVVQ9ICdQVVQnO1xyXG5jb25zdCBERUxFVEU9ICdERUxFVEUnO1xyXG5cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblxyXG5cdGdldCh1cmwsIHBhcmFtcyA9IHt9KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoXHJcblx0XHRcdGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgeyAvLyAoQSlcclxuXHRcdFx0XHRBeGlvcy5nZXQodXJsLCB7XHJcblx0XHRcdFx0XHRyZXNwb25zZVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHBhcmFtczogcGFyYW1zXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHJlamVjdChyZXNwb25zZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHV0KHVybCwgYm9keSA9IHt9KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoXHJcblx0XHRcdGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRcdEF4aW9zLnB1dCh1cmwsIGJvZHkpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRyZWplY3QocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRwb3N0KHVybCwgYm9keSA9IHt9KSB7XHJcblx0XHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShcclxuXHRcdFx0ZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdFx0QXhpb3MucHV0KHVybCwgYm9keSlcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHJlamVjdChyZXNwb25zZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LypBIG1ldGhvZCBzaG91bGQgYWx3YXlzIHJldHVybiBhIHByb21pc2UqL1xyXG5cdGNhbGwodmVyYixlbmRwb2ludCwgcGFyYW1zKSB7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bGV0IGFwaVJvb3Q9U2V0dGluZ3MuZ2V0KCdBUEknLEFQSV9CQVNFX1VSTCk7XHJcblx0XHRcclxuXHRcdGxldCB1cmw9YCR7YXBpUm9vdH0ke2VuZHBvaW50fWA7IFxyXG5cclxuXHJcblx0XHRsZXQgY2FsbGVyO1xyXG5cdFx0aWYgKHZlcmIgPT0gR0VUKSBjYWxsZXIgPSB0aGlzLmdldDtcclxuXHRcdGlmICh2ZXJiID09IFBPU1QpIGNhbGxlciA9IHRoaXMucG9zdDtcclxuXHRcdGlmICh2ZXJiID09IFBVVCApIGNhbGxlciA9IHRoaXMucHV0O1xyXG5cclxuXHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y2FsbGVyKHVybCwgcGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZShkYXRhLmRhdGEpO1xyXG5cdFx0XHR9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhaWxlZCBsYWRpbmcgYXBpIGRhdGEnKVxyXG5cdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKi9cclxuXHRnZXRQcm9qZWN0c0dlb0pzb24obGV2ZWwscGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bGV0IHVybD1TZXR0aW5ncy5nZXQoJ0FQSScsJ1BST0pFQ1RfR0VPSlNPTicpO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5jYWxsKEdFVCx1cmwucmVwbGFjZSgnJHtsZXZlbH0nLGxldmVsKSwgcGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0LyphcHBseSBhbnkgZGF0YSB0cmFuc2Zvcm1hdGlvbiovXHJcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTsgLy8vL3Jlc29sdmUgd2l0aCBvcmlnaW5hbCBkYXRhIG9yIHBlcmZvcm0gYW55IGRhdGEgdHJhbnNmb3JtYXRpb24gbmVlZGVkXHJcblx0XHRcdFxyXG5cdFx0XHR9KS5jYXRjaChyZWplY3QpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEZpbHRlckxpc3QoZmlsdGVyVHlwZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRoaXMuY2FsbChHRVQsU2V0dGluZ3MuZ2V0KCdBUEknLCdGSUxURVJfTElTVCcpW2ZpbHRlclR5cGVdLCB7fSkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7IC8vLy9yZXNvbHZlIHdpdGggb3JpZ2luYWwgZGF0YSBvciBwZXJmb3JtIGFueSBkYXRhIHRyYW5zZm9ybWF0aW9uIG5lZWRlZFx0XHRcdFxyXG5cdFx0XHR9KS5jYXRjaChyZWplY3QpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBjb25uZWN0b3I9bmV3IENvbm5lY3RvcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yOyJdfQ==