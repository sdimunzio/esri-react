define(['exports', 'redux', 'redux-thunk', 'react-redux-router', 'app/reducers/index'], function (exports, _redux, _reduxThunk, _reactReduxRouter, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;

  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configureStore(initialState, browserHistory) {

    var historyMiddleware = (0, _reactReduxRouter.routerMiddleware)(browserHistory);
    var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, historyMiddleware);
    var store = middleware(_redux.createStore)(_index2.default, initialState);

    return store;
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlXFxjb25maWd1cmVTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBUXdCLGM7Ozs7Ozs7Ozs7OztBQUFULFdBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxjQUF0QyxFQUFzRDs7QUFFbkUsUUFBSSxvQkFBb0Isd0NBQWlCLGNBQWpCLENBQXhCO0FBQ0EsUUFBSSxhQUFhLGtEQUFpQyxpQkFBakMsQ0FBakI7QUFDQSxRQUFNLFFBQVEsZ0RBQXFDLFlBQXJDLENBQWQ7O0FBRUEsV0FBTyxLQUFQO0FBQ0QiLCJmaWxlIjoic3RvcmVcXGNvbmZpZ3VyZVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuaW1wb3J0IHtyb3V0ZXJNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1yZWR1eC1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ2FwcC9yZWR1Y2Vycy9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUsIGJyb3dzZXJIaXN0b3J5KSB7XHJcbiAgXHJcbiAgbGV0IGhpc3RvcnlNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShicm93c2VySGlzdG9yeSk7XHJcbiAgbGV0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlLCBoaXN0b3J5TWlkZGxld2FyZSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBtaWRkbGV3YXJlKGNyZWF0ZVN0b3JlKShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICBcclxuICByZXR1cm4gc3RvcmU7XHJcbn0iXX0=