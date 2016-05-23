define(['exports', './reducer'], function (exports, _reducer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = syncHistoryWithStore;

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

  var defaultSelectLocationState = function defaultSelectLocationState(state) {
    return state.routing;
  };

  /**
   * This function synchronizes your history state with the Redux store.
   * Location changes flow from history to the store. An enhanced history is
   * returned with a listen method that responds to store updates for location.
   *
   * When this history is provided to the router, this means the location data
   * will flow like this:
   * history.push -> store.dispatch -> enhancedHistory.listen -> router
   * This ensures that when the store state changes due to a replay or other
   * event, the router will be updated appropriately and can transition to the
   * correct router state.
   */
  function syncHistoryWithStore(history, store) {
    var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var _ref$selectLocationSt = _ref.selectLocationState;
    var selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt;
    var _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay;
    var adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

    // Ensure that the reducer is mounted on the store and functioning properly.
    if (typeof selectLocationState(store.getState()) === 'undefined') {
      throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
    }

    var initialLocation = void 0;
    var currentLocation = void 0;
    var isTimeTraveling = void 0;
    var unsubscribeFromStore = void 0;
    var unsubscribeFromHistory = void 0;

    // What does the store say about current location?
    var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
      var locationState = selectLocationState(store.getState());
      return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
    };

    // If the store is replayed, update the URL in the browser to match.
    if (adjustUrlOnReplay) {
      var handleStoreChange = function handleStoreChange() {
        var locationInStore = getLocationInStore(true);
        if (currentLocation === locationInStore) {
          return;
        }

        // Update address bar to reflect store state
        isTimeTraveling = true;
        currentLocation = locationInStore;
        history.transitionTo(_extends({}, locationInStore, {
          action: 'PUSH'
        }));
        isTimeTraveling = false;
      };

      unsubscribeFromStore = store.subscribe(handleStoreChange);
      handleStoreChange();
    }

    // Whenever location changes, dispatch an action to get it in the store
    var handleLocationChange = function handleLocationChange(location) {
      // ... unless we just caused that location change
      if (isTimeTraveling) {
        return;
      }

      // Remember where we are
      currentLocation = location;

      // Are we being called for the first time?
      if (!initialLocation) {
        // Remember as a fallback in case state is reset
        initialLocation = location;

        // Respect persisted location, if any
        if (getLocationInStore()) {
          return;
        }
      }

      // Tell the store to update by dispatching an action
      store.dispatch({
        type: _reducer.LOCATION_CHANGE,
        payload: location
      });
    };
    unsubscribeFromHistory = history.listen(handleLocationChange);

    // The enhanced history uses store as source of truth
    return _extends({}, history, {
      listen: function listen(listener) {
        // Copy of last location.
        var lastPublishedLocation = getLocationInStore(true);

        // Keep track of whether we unsubscribed, as Redux store
        // only applies changes in subscriptions on next dispatch
        var unsubscribed = false;
        var unsubscribeFromStore = store.subscribe(function () {
          var currentLocation = getLocationInStore(true);
          if (currentLocation === lastPublishedLocation) {
            return;
          }
          lastPublishedLocation = currentLocation;
          if (!unsubscribed) {
            listener(lastPublishedLocation);
          }
        });

        // History listeners expect a synchronous call. Make the first call to the
        // listener after subscribing to the store, in case the listener causes a
        // location change (e.g. when it redirects)
        listener(lastPublishedLocation);

        // Let user unsubscribe later
        return function () {
          unsubscribed = true;
          unsubscribeFromStore();
        };
      },
      unsubscribe: function unsubscribe() {
        if (adjustUrlOnReplay) {
          unsubscribeFromStore();
        }
        unsubscribeFromHistory();
      }
    });
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LXJlZHV4LXJvdXRlclxcc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBZ0J3QixvQjs7Ozs7Ozs7Ozs7Ozs7OztBQWR4QixNQUFNLDZCQUE2QixTQUE3QiwwQkFBNkI7QUFBQSxXQUFTLE1BQU0sT0FBZjtBQUFBLEdBQW5DOzs7Ozs7Ozs7Ozs7OztBQWNlLFdBQVMsb0JBQVQsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBdkMsRUFHUDtBQUFBLHFFQUFKLEVBQUk7O0FBQUEscUNBRk4sbUJBRU07QUFBQSxRQUZOLG1CQUVNLHlDQUZnQiwwQkFFaEI7QUFBQSxxQ0FETixpQkFDTTtBQUFBLFFBRE4saUJBQ00seUNBRGMsSUFDZDs7O0FBRU4sUUFBSSxPQUFPLG9CQUFvQixNQUFNLFFBQU4sRUFBcEIsQ0FBUCxLQUFpRCxXQUFyRCxFQUFrRTtBQUNoRSxZQUFNLElBQUksS0FBSixDQUNKLDBFQUNBLHVFQURBLEdBRUEsMkNBRkEsR0FHQSw2REFIQSxHQUlBLHVFQUpBLEdBS0EsZ0JBTkksQ0FBTjtBQVFEOztBQUVELFFBQUksd0JBQUo7QUFDQSxRQUFJLHdCQUFKO0FBQ0EsUUFBSSx3QkFBSjtBQUNBLFFBQUksNkJBQUo7QUFDQSxRQUFJLCtCQUFKOzs7QUFHQSxRQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxpQkFBRCxFQUF1QjtBQUNoRCxVQUFNLGdCQUFnQixvQkFBb0IsTUFBTSxRQUFOLEVBQXBCLENBQXRCO0FBQ0EsYUFBTyxjQUFjLHlCQUFkLEtBQ0osb0JBQW9CLGVBQXBCLEdBQXNDLFNBRGxDLENBQVA7QUFFRCxLQUpEOzs7QUFPQSxRQUFJLGlCQUFKLEVBQXVCO0FBQ3JCLFVBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQixHQUFNO0FBQzlCLFlBQU0sa0JBQWtCLG1CQUFtQixJQUFuQixDQUF4QjtBQUNBLFlBQUksb0JBQW9CLGVBQXhCLEVBQXlDO0FBQ3ZDO0FBQ0Q7OztBQUdELDBCQUFrQixJQUFsQjtBQUNBLDBCQUFrQixlQUFsQjtBQUNBLGdCQUFRLFlBQVIsY0FDSyxlQURMO0FBRUUsa0JBQVE7QUFGVjtBQUlBLDBCQUFrQixLQUFsQjtBQUNELE9BZEQ7O0FBZ0JBLDZCQUF1QixNQUFNLFNBQU4sQ0FBZ0IsaUJBQWhCLENBQXZCO0FBQ0E7QUFDRDs7O0FBR0QsUUFBTSx1QkFBdUIsU0FBdkIsb0JBQXVCLENBQUMsUUFBRCxFQUFjOztBQUV6QyxVQUFJLGVBQUosRUFBcUI7QUFDbkI7QUFDRDs7O0FBR0Qsd0JBQWtCLFFBQWxCOzs7QUFHQSxVQUFJLENBQUMsZUFBTCxFQUFzQjs7QUFFcEIsMEJBQWtCLFFBQWxCOzs7QUFHQSxZQUFJLG9CQUFKLEVBQTBCO0FBQ3hCO0FBQ0Q7QUFDRjs7O0FBR0QsWUFBTSxRQUFOLENBQWU7QUFDYixzQ0FEYTtBQUViLGlCQUFTO0FBRkksT0FBZjtBQUlELEtBekJEO0FBMEJBLDZCQUF5QixRQUFRLE1BQVIsQ0FBZSxvQkFBZixDQUF6Qjs7O0FBR0Esd0JBQ0ssT0FETDtBQUdFLFlBSEYsa0JBR1MsUUFIVCxFQUdtQjs7QUFFZixZQUFJLHdCQUF3QixtQkFBbUIsSUFBbkIsQ0FBNUI7Ozs7QUFJQSxZQUFJLGVBQWUsS0FBbkI7QUFDQSxZQUFNLHVCQUF1QixNQUFNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNqRCxjQUFNLGtCQUFrQixtQkFBbUIsSUFBbkIsQ0FBeEI7QUFDQSxjQUFJLG9CQUFvQixxQkFBeEIsRUFBK0M7QUFDN0M7QUFDRDtBQUNELGtDQUF3QixlQUF4QjtBQUNBLGNBQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2pCLHFCQUFTLHFCQUFUO0FBQ0Q7QUFDRixTQVQ0QixDQUE3Qjs7Ozs7QUFjQSxpQkFBUyxxQkFBVDs7O0FBR0EsZUFBTyxZQUFNO0FBQ1gseUJBQWUsSUFBZjtBQUNBO0FBQ0QsU0FIRDtBQUlELE9BL0JIO0FBa0NFLGlCQWxDRix5QkFrQ2dCO0FBQ1osWUFBSSxpQkFBSixFQUF1QjtBQUNyQjtBQUNEO0FBQ0Q7QUFDRDtBQXZDSDtBQXlDRCIsImZpbGUiOiJyZWFjdC1yZWR1eC1yb3V0ZXJcXHN5bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0NBVElPTl9DSEFOR0UgfSBmcm9tICcuL3JlZHVjZXInXHJcblxyXG5jb25zdCBkZWZhdWx0U2VsZWN0TG9jYXRpb25TdGF0ZSA9IHN0YXRlID0+IHN0YXRlLnJvdXRpbmdcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHN5bmNocm9uaXplcyB5b3VyIGhpc3Rvcnkgc3RhdGUgd2l0aCB0aGUgUmVkdXggc3RvcmUuXHJcbiAqIExvY2F0aW9uIGNoYW5nZXMgZmxvdyBmcm9tIGhpc3RvcnkgdG8gdGhlIHN0b3JlLiBBbiBlbmhhbmNlZCBoaXN0b3J5IGlzXHJcbiAqIHJldHVybmVkIHdpdGggYSBsaXN0ZW4gbWV0aG9kIHRoYXQgcmVzcG9uZHMgdG8gc3RvcmUgdXBkYXRlcyBmb3IgbG9jYXRpb24uXHJcbiAqXHJcbiAqIFdoZW4gdGhpcyBoaXN0b3J5IGlzIHByb3ZpZGVkIHRvIHRoZSByb3V0ZXIsIHRoaXMgbWVhbnMgdGhlIGxvY2F0aW9uIGRhdGFcclxuICogd2lsbCBmbG93IGxpa2UgdGhpczpcclxuICogaGlzdG9yeS5wdXNoIC0+IHN0b3JlLmRpc3BhdGNoIC0+IGVuaGFuY2VkSGlzdG9yeS5saXN0ZW4gLT4gcm91dGVyXHJcbiAqIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gdGhlIHN0b3JlIHN0YXRlIGNoYW5nZXMgZHVlIHRvIGEgcmVwbGF5IG9yIG90aGVyXHJcbiAqIGV2ZW50LCB0aGUgcm91dGVyIHdpbGwgYmUgdXBkYXRlZCBhcHByb3ByaWF0ZWx5IGFuZCBjYW4gdHJhbnNpdGlvbiB0byB0aGVcclxuICogY29ycmVjdCByb3V0ZXIgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW5jSGlzdG9yeVdpdGhTdG9yZShoaXN0b3J5LCBzdG9yZSwge1xyXG4gIHNlbGVjdExvY2F0aW9uU3RhdGUgPSBkZWZhdWx0U2VsZWN0TG9jYXRpb25TdGF0ZSxcclxuICBhZGp1c3RVcmxPblJlcGxheSA9IHRydWVcclxufSA9IHt9KSB7XHJcbiAgLy8gRW5zdXJlIHRoYXQgdGhlIHJlZHVjZXIgaXMgbW91bnRlZCBvbiB0aGUgc3RvcmUgYW5kIGZ1bmN0aW9uaW5nIHByb3Blcmx5LlxyXG4gIGlmICh0eXBlb2Ygc2VsZWN0TG9jYXRpb25TdGF0ZShzdG9yZS5nZXRTdGF0ZSgpKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0V4cGVjdGVkIHRoZSByb3V0aW5nIHN0YXRlIHRvIGJlIGF2YWlsYWJsZSBlaXRoZXIgYXMgYHN0YXRlLnJvdXRpbmdgICcgK1xyXG4gICAgICAnb3IgYXMgdGhlIGN1c3RvbSBleHByZXNzaW9uIHlvdSBjYW4gc3BlY2lmeSBhcyBgc2VsZWN0TG9jYXRpb25TdGF0ZWAgJyArXHJcbiAgICAgICdpbiB0aGUgYHN5bmNIaXN0b3J5V2l0aFN0b3JlKClgIG9wdGlvbnMuICcgK1xyXG4gICAgICAnRW5zdXJlIHlvdSBoYXZlIGFkZGVkIHRoZSBgcm91dGVyUmVkdWNlcmAgdG8geW91ciBzdG9yZVxcJ3MgJyArXHJcbiAgICAgICdyZWR1Y2VycyB2aWEgYGNvbWJpbmVSZWR1Y2Vyc2Agb3Igd2hhdGV2ZXIgbWV0aG9kIHlvdSB1c2UgdG8gaXNvbGF0ZSAnICtcclxuICAgICAgJ3lvdXIgcmVkdWNlcnMuJ1xyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgbGV0IGluaXRpYWxMb2NhdGlvblxyXG4gIGxldCBjdXJyZW50TG9jYXRpb25cclxuICBsZXQgaXNUaW1lVHJhdmVsaW5nXHJcbiAgbGV0IHVuc3Vic2NyaWJlRnJvbVN0b3JlXHJcbiAgbGV0IHVuc3Vic2NyaWJlRnJvbUhpc3RvcnlcclxuXHJcbiAgLy8gV2hhdCBkb2VzIHRoZSBzdG9yZSBzYXkgYWJvdXQgY3VycmVudCBsb2NhdGlvbj9cclxuICBjb25zdCBnZXRMb2NhdGlvbkluU3RvcmUgPSAodXNlSW5pdGlhbElmRW1wdHkpID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uU3RhdGUgPSBzZWxlY3RMb2NhdGlvblN0YXRlKHN0b3JlLmdldFN0YXRlKCkpXHJcbiAgICByZXR1cm4gbG9jYXRpb25TdGF0ZS5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIHx8XHJcbiAgICAgICh1c2VJbml0aWFsSWZFbXB0eSA/IGluaXRpYWxMb2NhdGlvbiA6IHVuZGVmaW5lZClcclxuICB9XHJcblxyXG4gIC8vIElmIHRoZSBzdG9yZSBpcyByZXBsYXllZCwgdXBkYXRlIHRoZSBVUkwgaW4gdGhlIGJyb3dzZXIgdG8gbWF0Y2guXHJcbiAgaWYgKGFkanVzdFVybE9uUmVwbGF5KSB7XHJcbiAgICBjb25zdCBoYW5kbGVTdG9yZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbG9jYXRpb25JblN0b3JlID0gZ2V0TG9jYXRpb25JblN0b3JlKHRydWUpXHJcbiAgICAgIGlmIChjdXJyZW50TG9jYXRpb24gPT09IGxvY2F0aW9uSW5TdG9yZSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVcGRhdGUgYWRkcmVzcyBiYXIgdG8gcmVmbGVjdCBzdG9yZSBzdGF0ZVxyXG4gICAgICBpc1RpbWVUcmF2ZWxpbmcgPSB0cnVlXHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uSW5TdG9yZVxyXG4gICAgICBoaXN0b3J5LnRyYW5zaXRpb25Ubyh7XHJcbiAgICAgICAgLi4ubG9jYXRpb25JblN0b3JlLFxyXG4gICAgICAgIGFjdGlvbjogJ1BVU0gnXHJcbiAgICAgIH0pXHJcbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmVGcm9tU3RvcmUgPSBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlU3RvcmVDaGFuZ2UpXHJcbiAgICBoYW5kbGVTdG9yZUNoYW5nZSgpXHJcbiAgfVxyXG5cclxuICAvLyBXaGVuZXZlciBsb2NhdGlvbiBjaGFuZ2VzLCBkaXNwYXRjaCBhbiBhY3Rpb24gdG8gZ2V0IGl0IGluIHRoZSBzdG9yZVxyXG4gIGNvbnN0IGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gKGxvY2F0aW9uKSA9PiB7XHJcbiAgICAvLyAuLi4gdW5sZXNzIHdlIGp1c3QgY2F1c2VkIHRoYXQgbG9jYXRpb24gY2hhbmdlXHJcbiAgICBpZiAoaXNUaW1lVHJhdmVsaW5nKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbWVtYmVyIHdoZXJlIHdlIGFyZVxyXG4gICAgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb25cclxuXHJcbiAgICAvLyBBcmUgd2UgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZT9cclxuICAgIGlmICghaW5pdGlhbExvY2F0aW9uKSB7XHJcbiAgICAgIC8vIFJlbWVtYmVyIGFzIGEgZmFsbGJhY2sgaW4gY2FzZSBzdGF0ZSBpcyByZXNldFxyXG4gICAgICBpbml0aWFsTG9jYXRpb24gPSBsb2NhdGlvblxyXG5cclxuICAgICAgLy8gUmVzcGVjdCBwZXJzaXN0ZWQgbG9jYXRpb24sIGlmIGFueVxyXG4gICAgICBpZiAoZ2V0TG9jYXRpb25JblN0b3JlKCkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlbGwgdGhlIHN0b3JlIHRvIHVwZGF0ZSBieSBkaXNwYXRjaGluZyBhbiBhY3Rpb25cclxuICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9DQVRJT05fQ0hBTkdFLFxyXG4gICAgICBwYXlsb2FkOiBsb2NhdGlvblxyXG4gICAgfSlcclxuICB9XHJcbiAgdW5zdWJzY3JpYmVGcm9tSGlzdG9yeSA9IGhpc3RvcnkubGlzdGVuKGhhbmRsZUxvY2F0aW9uQ2hhbmdlKVxyXG5cclxuICAvLyBUaGUgZW5oYW5jZWQgaGlzdG9yeSB1c2VzIHN0b3JlIGFzIHNvdXJjZSBvZiB0cnV0aFxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5oaXN0b3J5LFxyXG4gICAgLy8gVGhlIGxpc3RlbmVycyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUgaW5zdGVhZCBvZiBoaXN0b3J5XHJcbiAgICBsaXN0ZW4obGlzdGVuZXIpIHtcclxuICAgICAgLy8gQ29weSBvZiBsYXN0IGxvY2F0aW9uLlxyXG4gICAgICBsZXQgbGFzdFB1Ymxpc2hlZExvY2F0aW9uID0gZ2V0TG9jYXRpb25JblN0b3JlKHRydWUpXHJcblxyXG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHdoZXRoZXIgd2UgdW5zdWJzY3JpYmVkLCBhcyBSZWR1eCBzdG9yZVxyXG4gICAgICAvLyBvbmx5IGFwcGxpZXMgY2hhbmdlcyBpbiBzdWJzY3JpcHRpb25zIG9uIG5leHQgZGlzcGF0Y2hcclxuICAgICAgbGV0IHVuc3Vic2NyaWJlZCA9IGZhbHNlXHJcbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlRnJvbVN0b3JlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBnZXRMb2NhdGlvbkluU3RvcmUodHJ1ZSlcclxuICAgICAgICBpZiAoY3VycmVudExvY2F0aW9uID09PSBsYXN0UHVibGlzaGVkTG9jYXRpb24pIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0UHVibGlzaGVkTG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb25cclxuICAgICAgICBpZiAoIXVuc3Vic2NyaWJlZCkge1xyXG4gICAgICAgICAgbGlzdGVuZXIobGFzdFB1Ymxpc2hlZExvY2F0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEhpc3RvcnkgbGlzdGVuZXJzIGV4cGVjdCBhIHN5bmNocm9ub3VzIGNhbGwuIE1ha2UgdGhlIGZpcnN0IGNhbGwgdG8gdGhlXHJcbiAgICAgIC8vIGxpc3RlbmVyIGFmdGVyIHN1YnNjcmliaW5nIHRvIHRoZSBzdG9yZSwgaW4gY2FzZSB0aGUgbGlzdGVuZXIgY2F1c2VzIGFcclxuICAgICAgLy8gbG9jYXRpb24gY2hhbmdlIChlLmcuIHdoZW4gaXQgcmVkaXJlY3RzKVxyXG4gICAgICBsaXN0ZW5lcihsYXN0UHVibGlzaGVkTG9jYXRpb24pXHJcblxyXG4gICAgICAvLyBMZXQgdXNlciB1bnN1YnNjcmliZSBsYXRlclxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlZCA9IHRydWVcclxuICAgICAgICB1bnN1YnNjcmliZUZyb21TdG9yZSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gSXQgYWxzbyBwcm92aWRlcyBhIHdheSB0byBkZXN0cm95IGludGVybmFsIGxpc3RlbmVyc1xyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgIGlmIChhZGp1c3RVcmxPblJlcGxheSkge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlRnJvbVN0b3JlKClcclxuICAgICAgfVxyXG4gICAgICB1bnN1YnNjcmliZUZyb21IaXN0b3J5KClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19