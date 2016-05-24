define(['exports', 'app/constants/constants', 'app/util/setting'], function (exports, _constants, _setting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setLanguage = undefined;

  var Constants = _interopRequireWildcard(_constants);

  var _setting2 = _interopRequireDefault(_setting);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var setLanguage = exports.setLanguage = function setLanguage(lang) {
    return {
      type: Constants.SET_APP_LANGUAGE,
      lang: lang
    };
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O01BQVksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0wsTUFBTSxvQ0FBYyxTQUFkLFdBQWMsQ0FBQyxJQUFELEVBQVU7QUFDbkMsV0FBTztBQUNMLFlBQU0sVUFBVSxnQkFEWDtBQUVMO0FBRkssS0FBUDtBQUlELEdBTE0iLCJmaWxlIjoiYWN0aW9uc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnYXBwL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnYXBwL3V0aWwvc2V0dGluZyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGFuZ3VhZ2UgPSAobGFuZykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDb25zdGFudHMuU0VUX0FQUF9MQU5HVUFHRSxcclxuICAgIGxhbmcgXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=