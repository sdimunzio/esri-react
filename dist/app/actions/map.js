define(['exports', 'app/constants/constants', 'app/connector/connector.js'], function (exports, _constants, _connector) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.loadProjects = undefined;

	var _connector2 = _interopRequireDefault(_connector);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var loadProjectsCompleted = function loadProjectsCompleted(data) {
		return {
			type: _constants.LOAD_PROJECT_GEOJSON_SUCCESS,
			data: data
		};
	};

	var loadProjectsFailed = function loadProjectsFailed(error) {
		return {
			type: _constants.LOAD_PEOJECT_GEOJSON_FAILED,
			error: error
		};
	};

	var loadProjects = exports.loadProjects = function loadProjects(level, params) {
		return function (dispatch, getState) {
			_connector2.default.getProjectsGeoJson(level, params).then(function (data) {

				dispatch(loadProjectsCompleted(data));
			}).catch(function (err) {
				debugger;
				console.log(err);
				dispatch(loadProjectsFailed(err));
			});
		};
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXG1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsS0FBTSx3QkFBc0IsU0FBdEIscUJBQXNCLENBQUMsSUFBRCxFQUFRO0FBQ25DLFNBQU87QUFDTixnREFETTtBQUVOLFNBQUs7QUFGQyxHQUFQO0FBSUEsRUFMRDs7QUFPQSxLQUFNLHFCQUFtQixTQUFuQixrQkFBbUIsQ0FBQyxLQUFELEVBQVM7QUFDbEMsU0FBTztBQUNMLCtDQURLO0FBRUw7QUFGSyxHQUFQO0FBSUMsRUFMRDs7QUFTTyxLQUFNLHNDQUFlLFNBQWYsWUFBZSxDQUFDLEtBQUQsRUFBTyxNQUFQLEVBQWtCO0FBQzdDLFNBQU8sVUFBQyxRQUFELEVBQVcsUUFBWCxFQUF1QjtBQUM3Qix1QkFBVSxrQkFBVixDQUE2QixLQUE3QixFQUFtQyxNQUFuQyxFQUNDLElBREQsQ0FDTSxVQUFDLElBQUQsRUFBUTs7QUFFWixhQUFTLHNCQUFzQixJQUF0QixDQUFUO0FBQXNDLElBSHhDLEVBSUcsS0FKSCxDQUlTLFVBQUMsR0FBRCxFQUFPO0FBQ2Q7QUFDQSxZQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0EsYUFBUyxtQkFBbUIsR0FBbkIsQ0FBVDtBQUNBLElBUkY7QUFTQyxHQVZGO0FBWUMsRUFiSyIsImZpbGUiOiJhY3Rpb25zXFxtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xPQURfUFJPSkVDVF9HRU9KU09OX1NVQ0NFU1MsTE9BRF9QRU9KRUNUX0dFT0pTT05fRkFJTEVELENIQU5HRV9MQVlFUl9MRVZFTH0gIGZyb20gJ2FwcC9jb25zdGFudHMvY29uc3RhbnRzJztcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICdhcHAvY29ubmVjdG9yL2Nvbm5lY3Rvci5qcyc7XHJcblxyXG5cclxuY29uc3QgbG9hZFByb2plY3RzQ29tcGxldGVkPShkYXRhKT0+e1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOkxPQURfUFJPSkVDVF9HRU9KU09OX1NVQ0NFU1MsXHJcblx0XHRkYXRhOmRhdGFcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRQcm9qZWN0c0ZhaWxlZD0oZXJyb3IpPT57XHJcbnJldHVybiB7XHJcblx0XHR0eXBlOkxPQURfUEVPSkVDVF9HRU9KU09OX0ZBSUxFRCxcclxuXHRcdGVycm9yXHJcblx0fVx0XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQcm9qZWN0cyA9IChsZXZlbCxwYXJhbXMpID0+IHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT57XHJcblx0XHRDb25uZWN0b3IuZ2V0UHJvamVjdHNHZW9Kc29uKGxldmVsLHBhcmFtcylcclxuXHRcdC50aGVuKChkYXRhKT0+e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BhdGNoKGxvYWRQcm9qZWN0c0NvbXBsZXRlZChkYXRhKSl9XHJcblx0XHRcdCkuY2F0Y2goKGVycik9PnsgXHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRkaXNwYXRjaChsb2FkUHJvamVjdHNGYWlsZWQoZXJyKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBcclxuXHJcblx0fVxyXG5cclxuIl19