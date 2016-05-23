define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.routerReducer = routerReducer;

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

  /**
   * This action type will be dispatched when your history
   * receives a location change.
   */
  var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

  var initialState = {
    locationBeforeTransitions: null
  };

  /**
   * This reducer will update the state with the most recent location history
   * has transitioned to. This may not be in sync with the router, particularly
   * if you have asynchronously-loaded routes, so reading from and relying on
   * this state it is discouraged.
   */
  function routerReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var _ref = arguments[1];
    var type = _ref.type;
    var payload = _ref.payload;

    if (type === LOCATION_CHANGE) {
      return _extends({}, state, { locationBeforeTransitions: payload });
    }

    return state;
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LXJlZHV4LXJvdXRlclxccmVkdWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7VUFnQmdCLGEsR0FBQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVpULE1BQU0sNENBQWtCLDBCQUF4Qjs7QUFFUCxNQUFNLGVBQWU7QUFDbkIsK0JBQTJCO0FBRFIsR0FBckI7Ozs7Ozs7O0FBVU8sV0FBUyxhQUFULEdBQWdFO0FBQUEsUUFBekMsS0FBeUMseURBQWpDLFlBQWlDO0FBQUE7QUFBQSxRQUFqQixJQUFpQixRQUFqQixJQUFpQjtBQUFBLFFBQVgsT0FBVyxRQUFYLE9BQVc7O0FBQ3JFLFFBQUksU0FBUyxlQUFiLEVBQThCO0FBQzVCLDBCQUFZLEtBQVosSUFBbUIsMkJBQTJCLE9BQTlDO0FBQ0Q7O0FBRUQsV0FBTyxLQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QtcmVkdXgtcm91dGVyXFxyZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgYWN0aW9uIHR5cGUgd2lsbCBiZSBkaXNwYXRjaGVkIHdoZW4geW91ciBoaXN0b3J5XHJcbiAqIHJlY2VpdmVzIGEgbG9jYXRpb24gY2hhbmdlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9jYXRpb25CZWZvcmVUcmFuc2l0aW9uczogbnVsbFxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyByZWR1Y2VyIHdpbGwgdXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHRoZSBtb3N0IHJlY2VudCBsb2NhdGlvbiBoaXN0b3J5XHJcbiAqIGhhcyB0cmFuc2l0aW9uZWQgdG8uIFRoaXMgbWF5IG5vdCBiZSBpbiBzeW5jIHdpdGggdGhlIHJvdXRlciwgcGFydGljdWxhcmx5XHJcbiAqIGlmIHlvdSBoYXZlIGFzeW5jaHJvbm91c2x5LWxvYWRlZCByb3V0ZXMsIHNvIHJlYWRpbmcgZnJvbSBhbmQgcmVseWluZyBvblxyXG4gKiB0aGlzIHN0YXRlIGl0IGlzIGRpc2NvdXJhZ2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgaWYgKHR5cGUgPT09IExPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnM6IHBheWxvYWQgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuIl19