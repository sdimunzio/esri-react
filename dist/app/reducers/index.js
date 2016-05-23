define(['exports', 'redux', './language', './filters', './map', 'react-redux-router'], function (exports, _redux, _language, _filters, _map, _reactReduxRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _language2 = _interopRequireDefault(_language);

  var _filters2 = _interopRequireDefault(_filters);

  var _map2 = _interopRequireDefault(_map);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /*reducer names should match with a state property*/

  var geophApp = (0, _redux.combineReducers)({
    language: _language2.default,
    filters: _filters2.default,
    map: _map2.default,
    routing: _reactReduxRouter.routerReducer
  });

  exports.default = geophApp;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxNQUFNLFdBQVcsNEJBQWdCO0FBQy9CLGdDQUQrQjtBQUUvQiw4QkFGK0I7QUFHL0Isc0JBSCtCO0FBSS9CO0FBSitCLEdBQWhCLENBQWpCOztvQkFPZSxRIiwiZmlsZSI6InJlZHVjZXJzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGxhbmd1YWdlIGZyb20gJy4vbGFuZ3VhZ2UnO1xyXG5pbXBvcnQgZmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnO1xyXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcclxuXHJcbmltcG9ydCB7cm91dGVyUmVkdWNlcn0gIGZyb20gJ3JlYWN0LXJlZHV4LXJvdXRlcic7XHJcblxyXG4vKnJlZHVjZXIgbmFtZXMgc2hvdWxkIG1hdGNoIHdpdGggYSBzdGF0ZSBwcm9wZXJ0eSovXHJcblxyXG5jb25zdCBnZW9waEFwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgbGFuZ3VhZ2UsXHJcbiAgZmlsdGVycyxcclxuICBtYXAsXHJcbiAgcm91dGluZzogcm91dGVyUmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VvcGhBcHAiXX0=