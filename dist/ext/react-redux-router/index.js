define(['exports', './reducer', './actions', './sync', './middleware'], function (exports, _reducer, _actions, _sync, _middleware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;
  Object.defineProperty(exports, 'LOCATION_CHANGE', {
    enumerable: true,
    get: function () {
      return _reducer.LOCATION_CHANGE;
    }
  });
  Object.defineProperty(exports, 'routerReducer', {
    enumerable: true,
    get: function () {
      return _reducer.routerReducer;
    }
  });
  Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
    enumerable: true,
    get: function () {
      return _actions.CALL_HISTORY_METHOD;
    }
  });
  Object.defineProperty(exports, 'push', {
    enumerable: true,
    get: function () {
      return _actions.push;
    }
  });
  Object.defineProperty(exports, 'replace', {
    enumerable: true,
    get: function () {
      return _actions.replace;
    }
  });
  Object.defineProperty(exports, 'go', {
    enumerable: true,
    get: function () {
      return _actions.go;
    }
  });
  Object.defineProperty(exports, 'goBack', {
    enumerable: true,
    get: function () {
      return _actions.goBack;
    }
  });
  Object.defineProperty(exports, 'goForward', {
    enumerable: true,
    get: function () {
      return _actions.goForward;
    }
  });
  Object.defineProperty(exports, 'routerActions', {
    enumerable: true,
    get: function () {
      return _actions.routerActions;
    }
  });

  var _sync2 = _interopRequireDefault(_sync);

  var _middleware2 = _interopRequireDefault(_middleware);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.syncHistoryWithStore = _sync2.default;
  exports.routerMiddleware = _middleware2.default;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LXJlZHV4LXJvdXRlclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFDUyxlOzs7Ozs7c0JBQWlCLGE7Ozs7OztzQkFHeEIsbUI7Ozs7OztzQkFDQSxJOzs7Ozs7c0JBQU0sTzs7Ozs7O3NCQUFTLEU7Ozs7OztzQkFBSSxNOzs7Ozs7c0JBQVEsUzs7Ozs7O3NCQUMzQixhOzs7Ozs7Ozs7Ozs7OztVQU5LLG9CO1VBUUEsZ0IiLCJmaWxlIjoicmVhY3QtcmVkdXgtcm91dGVyXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBzeW5jSGlzdG9yeVdpdGhTdG9yZSBmcm9tICcuL3N5bmMnXHJcbmV4cG9ydCB7IExPQ0FUSU9OX0NIQU5HRSwgcm91dGVyUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ0FMTF9ISVNUT1JZX01FVEhPRCxcclxuICBwdXNoLCByZXBsYWNlLCBnbywgZ29CYWNrLCBnb0ZvcndhcmQsXHJcbiAgcm91dGVyQWN0aW9uc1xyXG59IGZyb20gJy4vYWN0aW9ucydcclxuZXhwb3J0IHJvdXRlck1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlJ1xyXG4iXX0=