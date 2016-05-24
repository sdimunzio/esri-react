define(['babel-polyfill', 'react', 'react/react-dom', 'i18next', 'i18next-xhr-backend', 'react-redux', 'app/store/configureStore', 'react-router', 'react-redux-router', 'app/routes', 'app/util/ajax', 'app/util/setting'], function (_babelPolyfill, _react, _reactDom, _i18next, _i18nextXhrBackend, _reactRedux, _configureStore, _reactRouter, _reactReduxRouter, _routes, _ajax, _setting) {
  'use strict';

  var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

  var _react2 = _interopRequireDefault(_react);

  var _i18next2 = _interopRequireDefault(_i18next);

  var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

  var _configureStore2 = _interopRequireDefault(_configureStore);

  var _routes2 = _interopRequireDefault(_routes);

  var _ajax2 = _interopRequireDefault(_ajax);

  var _setting2 = _interopRequireDefault(_setting);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //import es6Promise from 'es6-promise';


  var store = (0, _configureStore2.default)({}, _reactRouter.browserHistory);
  var history = (0, _reactReduxRouter.syncHistoryWithStore)(_reactRouter.browserHistory, store);

  _ajax2.default.get('conf/settings.json').then(function (conf) {
    _setting2.default.initialize(conf.data);
    var options = _setting2.default.get('I18N', 'OPTIONS');

    _i18next2.default.use(_i18nextXhrBackend2.default).init(options, function (err, t) {
      if (err) {
        console.log(err);
      }

      (0, _reactDom.render)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
      ), document.getElementById('root'));
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsTUFBTSxRQUFRLDhCQUFlLEVBQWYsOEJBQWQ7QUFDQSxNQUFNLFVBQVUseUVBQXFDLEtBQXJDLENBQWhCOztBQUVBLGlCQUFTLEdBQVQsQ0FBYSxvQkFBYixFQUFtQyxJQUFuQyxDQUF3QyxVQUFDLElBQUQsRUFBUTtBQUM5QyxzQkFBUSxVQUFSLENBQW1CLEtBQUssSUFBeEI7QUFDQSxRQUFNLFVBQVUsa0JBQVEsR0FBUixDQUFZLE1BQVosRUFBb0IsU0FBcEIsQ0FBaEI7O0FBRUEsc0JBQVEsR0FBUiw4QkFBaUIsSUFBakIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZO0FBQzFDLFVBQUcsR0FBSCxFQUFPO0FBQ04sZ0JBQVEsR0FBUixDQUFZLEdBQVo7QUFDQTs7QUFFQSw0QkFDRTtBQUFBO1FBQUEsRUFBVSxPQUFPLEtBQWpCO1FBQ0UscURBQVEsU0FBUyxPQUFqQixFQUEwQix3QkFBMUI7QUFERixPQURGLEVBSUssU0FBUyxjQUFULENBQXdCLE1BQXhCLENBSkw7QUFLRCxLQVZEO0FBWUQsR0FoQkQiLCJmaWxlIjoibWFpbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBlczZQcm9taXNlIGZyb20gJ2VzNi1wcm9taXNlJztcclxuaW1wb3J0IGJhYmVsUG9seWZpbGwgZnJvbSAnYmFiZWwtcG9seWZpbGwnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QvcmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgWEhSIGZyb20gJ2kxOG5leHQteGhyLWJhY2tlbmQnO1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ2FwcC9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQge3N5bmNIaXN0b3J5V2l0aFN0b3JlfSBmcm9tICdyZWFjdC1yZWR1eC1yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJ2FwcC9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IEFqYXhVdGlsIGZyb20gJ2FwcC91dGlsL2FqYXgnO1xyXG5pbXBvcnQgU2V0dGluZyBmcm9tICdhcHAvdXRpbC9zZXR0aW5nJztcclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHt9LCBicm93c2VySGlzdG9yeSk7XHJcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShicm93c2VySGlzdG9yeSwgc3RvcmUpO1xyXG5cclxuQWpheFV0aWwuZ2V0KCdjb25mL3NldHRpbmdzLmpzb24nKS50aGVuKChjb25mKT0+e1xyXG4gIFNldHRpbmcuaW5pdGlhbGl6ZShjb25mLmRhdGEpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBTZXR0aW5nLmdldCgnSTE4TicsICdPUFRJT05TJyk7XHJcblxyXG4gIGkxOG5leHQudXNlKFhIUikuaW5pdChvcHRpb25zLCAoZXJyLCB0KSA9PiB7XHJcbiAgXHRpZihlcnIpe1xyXG4gIFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG4gIFx0fVxyXG5cclxuICAgIHJlbmRlcigoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0gcm91dGVzPXtyb3V0ZXN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXHJcbiAgfSk7XHJcblxyXG59KVxyXG5cclxuIl19