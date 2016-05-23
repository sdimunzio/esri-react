define(['exports', 'app/constants/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Constants = _interopRequireWildcard(_constants);

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

  var language = function language() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
    var action = arguments[1];

    console.log("lang: " + action.lang);
    switch (action.type) {
      case Constants.SET_APP_LANGUAGE:
        return action.lang;
      default:
        return state;
    }
  };

  exports.default = language;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxsYW5ndWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O01BQVksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLE1BQU0sV0FBVyxTQUFYLFFBQVcsR0FBMEI7QUFBQSxRQUF6QixLQUF5Qix5REFBakIsSUFBaUI7QUFBQSxRQUFYLE1BQVc7O0FBQzFDLFlBQVEsR0FBUixDQUFZLFdBQVMsT0FBTyxJQUE1QjtBQUNDLFlBQVEsT0FBTyxJQUFmO0FBQ0UsV0FBSyxVQUFVLGdCQUFmO0FBQ0UsZUFBTyxPQUFPLElBQWQ7QUFDRjtBQUNFLGVBQU8sS0FBUDtBQUpKO0FBTUQsR0FSRDs7b0JBVWUsUSIsImZpbGUiOiJyZWR1Y2Vyc1xcbGFuZ3VhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnYXBwL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2UgPSAoc3RhdGUgPSAnZW4nLCBhY3Rpb24pID0+IHtcclxuXHRjb25zb2xlLmxvZyhcImxhbmc6IFwiK2FjdGlvbi5sYW5nKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENvbnN0YW50cy5TRVRfQVBQX0xBTkdVQUdFOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLmxhbmc7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlIl19