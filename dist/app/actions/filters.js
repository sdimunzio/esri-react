define(['exports', 'app/constants/constants', 'app/connector/connector.js'], function (exports, _constants, _connector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.searchItemByText = exports.selectAllFilterList = exports.selectFilterItem = exports.fetchFilterListIfNeeded = exports.shouldFetchFilterList = exports.fetchFilterList = exports.receiveFilterList = exports.requestFilterList = undefined;

  var Constants = _interopRequireWildcard(_constants);

  var _connector2 = _interopRequireDefault(_connector);

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

  var requestFilterList = exports.requestFilterList = function requestFilterList(filter) {
    return {
      type: Constants.REQUEST_FILTER_LIST,
      filter: filter
    };
  };

  var receiveFilterList = exports.receiveFilterList = function receiveFilterList(filterType, data) {
    return {
      type: Constants.RECEIVE_FILTER_LIST,
      filterType: filterType,
      data: data,
      receivedAt: Date.now()
    };
  };

  var fetchFilterList = exports.fetchFilterList = function fetchFilterList(filterType) {
    return function (dispatch) {
      dispatch(requestFilterList(filterType));
      return _connector2.default.getFilterList(filterType).then(function (req) {
        return dispatch(receiveFilterList(filterType, req));
      });
    };
  };

  var shouldFetchFilterList = exports.shouldFetchFilterList = function shouldFetchFilterList(state, filterType) {
    var list = state.filters[filterType];
    if (!list) {
      return true;
    } else if (list.isFetching) {
      return false;
    } else {
      return false;
    }
  };

  var fetchFilterListIfNeeded = exports.fetchFilterListIfNeeded = function fetchFilterListIfNeeded(filterType) {
    return function (dispatch, getState) {
      if (shouldFetchFilterList(getState(), filterType)) {
        return dispatch(fetchFilterList(filterType));
      }
    };
  };

  var selectFilterItem = exports.selectFilterItem = function selectFilterItem(filterItem) {
    return {
      type: Constants.SELECT_FILTER_ITEM,
      filterType: filterItem.filterType,
      item: filterItem
    };
  };

  var selectAllFilterList = exports.selectAllFilterList = function selectAllFilterList(filterItem) {
    return {
      type: Constants.SELECT_ALL_FILTER_LIST,
      filterType: filterItem.filterType,
      item: filterItem
    };
  };

  var searchItemByText = exports.searchItemByText = function searchItemByText(filterSearch) {
    return {
      type: Constants.SEARCH_FILTER_LIST_BY_TEXT,
      filterType: filterSearch.filterType,
      text: filterSearch.text
    };
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGZpbHRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFBWSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTCxNQUFNLGdEQUFvQixTQUFwQixpQkFBb0IsQ0FBQyxNQUFELEVBQVk7QUFDM0MsV0FBTztBQUNMLFlBQU0sVUFBVSxtQkFEWDtBQUVMO0FBRkssS0FBUDtBQUlELEdBTE07O0FBT0EsTUFBTSxnREFBb0IsU0FBcEIsaUJBQW9CLENBQUMsVUFBRCxFQUFhLElBQWIsRUFBc0I7QUFDckQsV0FBTztBQUNMLFlBQU0sVUFBVSxtQkFEWDtBQUVMLDRCQUZLO0FBR0wsWUFBTSxJQUhEO0FBSUwsa0JBQVksS0FBSyxHQUFMO0FBSlAsS0FBUDtBQU1ELEdBUE07O0FBU0EsTUFBTSw0Q0FBa0IsU0FBbEIsZUFBa0IsQ0FBQyxVQUFELEVBQWdCO0FBQzdDLFdBQU8sb0JBQVk7QUFDakIsZUFBUyxrQkFBa0IsVUFBbEIsQ0FBVDtBQUNBLGFBQU8sb0JBQVUsYUFBVixDQUF3QixVQUF4QixFQUNKLElBREksQ0FDQztBQUFBLGVBQU8sU0FBUyxrQkFBa0IsVUFBbEIsRUFBOEIsR0FBOUIsQ0FBVCxDQUFQO0FBQUEsT0FERCxDQUFQO0FBRUQsS0FKRDtBQUtELEdBTk07O0FBUUEsTUFBTSx3REFBd0IsU0FBeEIscUJBQXdCLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBdUI7QUFDMUQsUUFBTSxPQUFPLE1BQU0sT0FBTixDQUFjLFVBQWQsQ0FBYjtBQUNBLFFBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxhQUFPLElBQVA7QUFDRCxLQUZELE1BRU8sSUFBSSxLQUFLLFVBQVQsRUFBcUI7QUFDMUIsYUFBTyxLQUFQO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVRNOztBQVdBLE1BQU0sNERBQTBCLFNBQTFCLHVCQUEwQixDQUFDLFVBQUQsRUFBZ0I7QUFDckQsV0FBTyxVQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQzdCLFVBQUksc0JBQXNCLFVBQXRCLEVBQWtDLFVBQWxDLENBQUosRUFBbUQ7QUFDakQsZUFBTyxTQUFTLGdCQUFnQixVQUFoQixDQUFULENBQVA7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQU5NOztBQVFBLE1BQU0sOENBQW1CLFNBQW5CLGdCQUFtQixDQUFDLFVBQUQsRUFBZ0I7QUFDOUMsV0FBTztBQUNMLFlBQU0sVUFBVSxrQkFEWDtBQUVMLGtCQUFZLFdBQVcsVUFGbEI7QUFHTCxZQUFNO0FBSEQsS0FBUDtBQUtELEdBTk07O0FBUUEsTUFBTSxvREFBc0IsU0FBdEIsbUJBQXNCLENBQUMsVUFBRCxFQUFnQjtBQUNqRCxXQUFPO0FBQ0wsWUFBTSxVQUFVLHNCQURYO0FBRUwsa0JBQVksV0FBVyxVQUZsQjtBQUdMLFlBQU07QUFIRCxLQUFQO0FBS0QsR0FOTTs7QUFRQSxNQUFNLDhDQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxZQUFELEVBQWtCO0FBQ2hELFdBQU87QUFDTCxZQUFNLFVBQVUsMEJBRFg7QUFFTCxrQkFBWSxhQUFhLFVBRnBCO0FBR0wsWUFBTSxhQUFhO0FBSGQsS0FBUDtBQUtELEdBTk0iLCJmaWxlIjoiYWN0aW9uc1xcZmlsdGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdhcHAvY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnYXBwL2Nvbm5lY3Rvci9jb25uZWN0b3IuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RGaWx0ZXJMaXN0ID0gKGZpbHRlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDb25zdGFudHMuUkVRVUVTVF9GSUxURVJfTElTVCxcclxuICAgIGZpbHRlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY2VpdmVGaWx0ZXJMaXN0ID0gKGZpbHRlclR5cGUsIGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ29uc3RhbnRzLlJFQ0VJVkVfRklMVEVSX0xJU1QsXHJcbiAgICBmaWx0ZXJUeXBlLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHJlY2VpdmVkQXQ6IERhdGUubm93KClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZpbHRlckxpc3QgPSAoZmlsdGVyVHlwZSkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmlsdGVyTGlzdChmaWx0ZXJUeXBlKSlcclxuICAgIHJldHVybiBDb25uZWN0b3IuZ2V0RmlsdGVyTGlzdChmaWx0ZXJUeXBlKVxyXG4gICAgICAudGhlbihyZXEgPT4gZGlzcGF0Y2gocmVjZWl2ZUZpbHRlckxpc3QoZmlsdGVyVHlwZSwgcmVxKSkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvdWxkRmV0Y2hGaWx0ZXJMaXN0ID0gKHN0YXRlLCBmaWx0ZXJUeXBlKSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IHN0YXRlLmZpbHRlcnNbZmlsdGVyVHlwZV1cclxuICBpZiAoIWxpc3QpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIGlmIChsaXN0LmlzRmV0Y2hpbmcpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZpbHRlckxpc3RJZk5lZWRlZCA9IChmaWx0ZXJUeXBlKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgIGlmIChzaG91bGRGZXRjaEZpbHRlckxpc3QoZ2V0U3RhdGUoKSwgZmlsdGVyVHlwZSkpIHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKGZldGNoRmlsdGVyTGlzdChmaWx0ZXJUeXBlKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJJdGVtID0gKGZpbHRlckl0ZW0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ29uc3RhbnRzLlNFTEVDVF9GSUxURVJfSVRFTSxcclxuICAgIGZpbHRlclR5cGU6IGZpbHRlckl0ZW0uZmlsdGVyVHlwZSxcclxuICAgIGl0ZW06IGZpbHRlckl0ZW1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxGaWx0ZXJMaXN0ID0gKGZpbHRlckl0ZW0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ29uc3RhbnRzLlNFTEVDVF9BTExfRklMVEVSX0xJU1QsXHJcbiAgICBmaWx0ZXJUeXBlOiBmaWx0ZXJJdGVtLmZpbHRlclR5cGUsXHJcbiAgICBpdGVtOiBmaWx0ZXJJdGVtXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoSXRlbUJ5VGV4dCA9IChmaWx0ZXJTZWFyY2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ29uc3RhbnRzLlNFQVJDSF9GSUxURVJfTElTVF9CWV9URVhULFxyXG4gICAgZmlsdGVyVHlwZTogZmlsdGVyU2VhcmNoLmZpbHRlclR5cGUsXHJcbiAgICB0ZXh0OiBmaWx0ZXJTZWFyY2gudGV4dFxyXG4gIH1cclxufVxyXG4iXX0=