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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var filters = function filters() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case Constants.SELECT_FILTER_ITEM:
      case Constants.SELECT_ALL_FILTER_LIST:
      case Constants.RECEIVE_FILTER_LIST:
      case Constants.REQUEST_FILTER_LIST:
      case Constants.SEARCH_FILTER_LIST_BY_TEXT:
        var fl = filter(state[action.filterType], action);
        updateFilterCounters(fl);
        return Object.assign({}, state, _defineProperty({}, action.filterType, fl));
      default:
        return state;
    }
  };

  var filter = function filter() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {
      isFetching: false,
      items: []
    } : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case Constants.REQUEST_FILTER_LIST:
        return Object.assign({}, state, {
          isFetching: true
        });
      case Constants.RECEIVE_FILTER_LIST:
        return Object.assign({}, state, action.data, {
          isFetching: false,
          lastUpdated: action.receivedAt
        });

      case Constants.SELECT_FILTER_ITEM:
        return Object.assign({}, state, {
          isFetching: false,
          items: state.items.map(function (i) {
            return filterItem(i, action);
          })
        });
      case Constants.SELECT_ALL_FILTER_LIST:
        return Object.assign({}, state, {
          isFetching: false,
          selected: action.item.selected,
          items: state.items.map(function (i) {
            return filterItem(i, action);
          })
        });
      case Constants.SEARCH_FILTER_LIST_BY_TEXT:
        return Object.assign({}, state, {
          isFetching: false,
          items: state.items.map(function (i) {
            return filterItem(i, action);
          })
        });
      default:
        return state;
    }
  };

  var filterItem = function filterItem() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {
      selected: false
    } : arguments[0];
    var action = arguments[1];

    var copyState = Object.assign({}, state);
    switch (action.type) {
      case Constants.SELECT_FILTER_ITEM:
        updateFilterSelection(copyState, action.item.id, action.item.selected);
        return copyState;
      case Constants.SELECT_ALL_FILTER_LIST:
        updateFilterSelection(copyState, 'all', action.item.selected);
        return copyState;
      case Constants.SEARCH_FILTER_LIST_BY_TEXT:
        searchByTextIntoChildren(copyState, action.text);
        return copyState;
      default:
        return state;
    }
  };

  //This function iterates over all children items and select the given one
  var updateFilterSelection = function updateFilterSelection(item, id, selection) {
    if (item.id === id || 'all' === id) {
      updateItemAndChildren(item, selection);
    } else if (item.items && item.items.length > 0) {
      item.items.forEach(function (it) {
        return updateFilterSelection(it, id, selection);
      });
    }
  };

  var updateItemAndChildren = function updateItemAndChildren(item, selection) {
    Object.assign(item, { 'selected': selection });
    if (item.items && item.items.length > 0) {
      item.items.forEach(function (it) {
        return updateItemAndChildren(it, selection);
      });
    }
  };

  //This function add the total and selected counter fields to each object that has children
  var updateFilterCounters = function updateFilterCounters(filterObject) {
    if (filterObject.items && filterObject.items.length > 0) {
      Object.assign(filterObject, { 'totalCounter': filterObject.items.length });
      Object.assign(filterObject, { 'selectedCounter': filterObject.items.filter(function (it) {
          return it.selected;
        }).length });
      filterObject.items.forEach(function (item) {
        updateFilterCounters(item);
      });
    }
  };

  //This function search by text into the items and its children
  var searchByTextIntoChildren = function searchByTextIntoChildren(item, keyword) {
    var itemMatch = itemMatchs(item, keyword);
    var childrenMatch = false;
    if (item.items && item.items.length > 0) {
      item.items.forEach(function (it) {
        if (searchByTextIntoChildren(it, keyword)) {
          childrenMatch = true;
        }
      });
    }
    if (itemMatch || childrenMatch) {
      Object.assign(item, { 'hide': false });
      return true;
    } else {
      Object.assign(item, { 'hide': true });
      return false;
    }
  };

  var itemMatchs = function itemMatchs(item, keyword) {
    if (keyword.length > 1) {
      var pattern = new RegExp(keyword, 'i');
      return pattern.test(item.name);
    } else {
      return true;
    }
  };

  exports.default = filters;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxmaWx0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFBWSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosTUFBTSxVQUFVLFNBQVYsT0FBVSxHQUF3QjtBQUFBLFFBQXZCLEtBQXVCLHlEQUFmLEVBQWU7QUFBQSxRQUFYLE1BQVc7O0FBQ3ZDLFlBQVEsT0FBTyxJQUFmO0FBQ0csV0FBSyxVQUFVLGtCQUFmO0FBQ0EsV0FBSyxVQUFVLHNCQUFmO0FBQ0EsV0FBSyxVQUFVLG1CQUFmO0FBQ0EsV0FBSyxVQUFVLG1CQUFmO0FBQ0EsV0FBSyxVQUFVLDBCQUFmO0FBQ0UsWUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLFVBQWIsQ0FBUCxFQUFpQyxNQUFqQyxDQUFUO0FBQ0EsNkJBQXFCLEVBQXJCO0FBQ0EsZUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLHNCQUNKLE9BQU8sVUFESCxFQUNnQixFQURoQixFQUFQO0FBR0Y7QUFDRSxlQUFPLEtBQVA7QUFaTDtBQWNBLEdBZkQ7O0FBaUJBLE1BQU0sU0FBUyxTQUFULE1BQVMsR0FHRDtBQUFBLFFBSEUsS0FHRix5REFIVTtBQUN0QixrQkFBWSxLQURVO0FBRXRCLGFBQU87QUFGZSxLQUdWO0FBQUEsUUFBWCxNQUFXOztBQUNaLFlBQVEsT0FBTyxJQUFmO0FBQ0UsV0FBSyxVQUFVLG1CQUFmO0FBQ0UsZUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzlCLHNCQUFZO0FBRGtCLFNBQXpCLENBQVA7QUFHRixXQUFLLFVBQVUsbUJBQWY7QUFDRSxlQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUIsT0FBTyxJQUFoQyxFQUFzQztBQUMzQyxzQkFBWSxLQUQrQjtBQUUzQyx1QkFBYSxPQUFPO0FBRnVCLFNBQXRDLENBQVA7O0FBS0YsV0FBSyxVQUFVLGtCQUFmO0FBQ0UsZUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLHNCQUFZLEtBRGdCO0FBRTVCLGlCQUFPLE1BQU0sS0FBTixDQUFZLEdBQVosQ0FBZ0I7QUFBQSxtQkFBSyxXQUFXLENBQVgsRUFBYyxNQUFkLENBQUw7QUFBQSxXQUFoQjtBQUZxQixTQUF6QixDQUFQO0FBSUYsV0FBSyxVQUFVLHNCQUFmO0FBQ0UsZUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzVCLHNCQUFZLEtBRGdCO0FBRTVCLG9CQUFVLE9BQU8sSUFBUCxDQUFZLFFBRk07QUFHNUIsaUJBQU8sTUFBTSxLQUFOLENBQVksR0FBWixDQUFnQjtBQUFBLG1CQUFLLFdBQVcsQ0FBWCxFQUFjLE1BQWQsQ0FBTDtBQUFBLFdBQWhCO0FBSHFCLFNBQXpCLENBQVA7QUFLRixXQUFLLFVBQVUsMEJBQWY7QUFDQyxlQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDNUIsc0JBQVksS0FEZ0I7QUFFM0IsaUJBQU8sTUFBTSxLQUFOLENBQVksR0FBWixDQUFnQjtBQUFBLG1CQUFLLFdBQVcsQ0FBWCxFQUFjLE1BQWQsQ0FBTDtBQUFBLFdBQWhCO0FBRm9CLFNBQXpCLENBQVA7QUFJRDtBQUNFLGVBQU8sS0FBUDtBQTVCSjtBQThCRCxHQWxDRDs7QUFvQ0EsTUFBTSxhQUFhLFNBQWIsVUFBYSxHQUVMO0FBQUEsUUFGTSxLQUVOLHlEQUZjO0FBQzFCLGdCQUFVO0FBRGdCLEtBRWQ7QUFBQSxRQUFYLE1BQVc7O0FBQ1osUUFBSSxZQUFZLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsQ0FBaEI7QUFDQSxZQUFRLE9BQU8sSUFBZjtBQUNFLFdBQUssVUFBVSxrQkFBZjtBQUNFLDhCQUFzQixTQUF0QixFQUFpQyxPQUFPLElBQVAsQ0FBWSxFQUE3QyxFQUFpRCxPQUFPLElBQVAsQ0FBWSxRQUE3RDtBQUNBLGVBQU8sU0FBUDtBQUNGLFdBQUssVUFBVSxzQkFBZjtBQUNFLDhCQUFzQixTQUF0QixFQUFpQyxLQUFqQyxFQUF3QyxPQUFPLElBQVAsQ0FBWSxRQUFwRDtBQUNBLGVBQU8sU0FBUDtBQUNGLFdBQUssVUFBVSwwQkFBZjtBQUNFLGlDQUF5QixTQUF6QixFQUFvQyxPQUFPLElBQTNDO0FBQ0EsZUFBTyxTQUFQO0FBQ0Y7QUFDRSxlQUFPLEtBQVA7QUFYSjtBQWFELEdBakJEOzs7QUFvQkEsTUFBTSx3QkFBd0IsU0FBeEIscUJBQXdCLENBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxTQUFYLEVBQXlCO0FBQ3JELFFBQUksS0FBSyxFQUFMLEtBQVksRUFBWixJQUFrQixVQUFVLEVBQWhDLEVBQW1DO0FBQ2pDLDRCQUFzQixJQUF0QixFQUE0QixTQUE1QjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUssS0FBTCxJQUFjLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBa0IsQ0FBcEMsRUFBc0M7QUFDM0MsV0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQjtBQUFBLGVBQU0sc0JBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLFNBQTlCLENBQU47QUFBQSxPQUFuQjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNLHdCQUF3QixTQUF4QixxQkFBd0IsQ0FBQyxJQUFELEVBQU8sU0FBUCxFQUFxQjtBQUNqRCxXQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLEVBQUMsWUFBWSxTQUFiLEVBQXBCO0FBQ0EsUUFBSSxLQUFLLEtBQUwsSUFBYyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQWtCLENBQXBDLEVBQXNDO0FBQ3BDLFdBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFBQSxlQUFNLHNCQUFzQixFQUF0QixFQUEwQixTQUExQixDQUFOO0FBQUEsT0FBbkI7QUFDRDtBQUNGLEdBTEQ7OztBQVFBLE1BQU0sdUJBQXVCLFNBQXZCLG9CQUF1QixDQUFDLFlBQUQsRUFBa0I7QUFDN0MsUUFBSSxhQUFhLEtBQWIsSUFBc0IsYUFBYSxLQUFiLENBQW1CLE1BQW5CLEdBQTBCLENBQXBELEVBQXNEO0FBQ3BELGFBQU8sTUFBUCxDQUFjLFlBQWQsRUFBNEIsRUFBQyxnQkFBZ0IsYUFBYSxLQUFiLENBQW1CLE1BQXBDLEVBQTVCO0FBQ0EsYUFBTyxNQUFQLENBQWMsWUFBZCxFQUE0QixFQUFDLG1CQUFtQixhQUFhLEtBQWIsQ0FBbUIsTUFBbkIsQ0FBMEIsVUFBQyxFQUFELEVBQVE7QUFBQyxpQkFBTyxHQUFHLFFBQVY7QUFBbUIsU0FBdEQsRUFBd0QsTUFBNUUsRUFBNUI7QUFDQSxtQkFBYSxLQUFiLENBQW1CLE9BQW5CLENBQTJCLFVBQUMsSUFBRCxFQUFVO0FBQUMsNkJBQXFCLElBQXJCO0FBQTJCLE9BQWpFO0FBQ0Q7QUFDRixHQU5EOzs7QUFTQSxNQUFNLDJCQUEyQixTQUEzQix3QkFBMkIsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFtQjtBQUNsRCxRQUFJLFlBQVksV0FBVyxJQUFYLEVBQWlCLE9BQWpCLENBQWhCO0FBQ0EsUUFBSSxnQkFBZ0IsS0FBcEI7QUFDQSxRQUFJLEtBQUssS0FBTCxJQUFjLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBa0IsQ0FBcEMsRUFBc0M7QUFDcEMsV0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixVQUFDLEVBQUQsRUFBUTtBQUN6QixZQUFJLHlCQUF5QixFQUF6QixFQUE2QixPQUE3QixDQUFKLEVBQTBDO0FBQ3hDLDBCQUFnQixJQUFoQjtBQUNEO0FBQ0YsT0FKRDtBQUtEO0FBQ0QsUUFBSSxhQUFhLGFBQWpCLEVBQStCO0FBQzdCLGFBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBQyxRQUFRLEtBQVQsRUFBcEI7QUFDQSxhQUFPLElBQVA7QUFDRCxLQUhELE1BR087QUFDTCxhQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLEVBQUMsUUFBUSxJQUFULEVBQXBCO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQWpCRDs7QUFtQkEsTUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQW1CO0FBQ3BDLFFBQUksUUFBUSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFVBQUksVUFBVSxJQUFJLE1BQUosQ0FBVyxPQUFYLEVBQW9CLEdBQXBCLENBQWQ7QUFDQSxhQUFPLFFBQVEsSUFBUixDQUFhLEtBQUssSUFBbEIsQ0FBUDtBQUNELEtBSEQsTUFHTztBQUNMLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FQRDs7b0JBU2UsTyIsImZpbGUiOiJyZWR1Y2Vyc1xcZmlsdGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdhcHAvY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBmaWx0ZXJzID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ29uc3RhbnRzLlNFTEVDVF9GSUxURVJfSVRFTTpcclxuICAgIGNhc2UgQ29uc3RhbnRzLlNFTEVDVF9BTExfRklMVEVSX0xJU1Q6XHJcbiAgICBjYXNlIENvbnN0YW50cy5SRUNFSVZFX0ZJTFRFUl9MSVNUOlxyXG4gICAgY2FzZSBDb25zdGFudHMuUkVRVUVTVF9GSUxURVJfTElTVDpcclxuICAgIGNhc2UgQ29uc3RhbnRzLlNFQVJDSF9GSUxURVJfTElTVF9CWV9URVhUOlxyXG4gICAgICBsZXQgZmwgPSBmaWx0ZXIoc3RhdGVbYWN0aW9uLmZpbHRlclR5cGVdLCBhY3Rpb24pO1xyXG4gICAgICB1cGRhdGVGaWx0ZXJDb3VudGVycyhmbCk7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIFthY3Rpb24uZmlsdGVyVHlwZV06IGZsXHJcbiAgICAgIH0pXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlciA9IChzdGF0ZSA9IHtcclxuICBpc0ZldGNoaW5nOiBmYWxzZSxcclxuICBpdGVtczogW11cclxufSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDb25zdGFudHMuUkVRVUVTVF9GSUxURVJfTElTVDpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIGNhc2UgQ29uc3RhbnRzLlJFQ0VJVkVfRklMVEVSX0xJU1Q6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmRhdGEsIHtcclxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLnJlY2VpdmVkQXRcclxuICAgICAgfSlcclxuXHJcbiAgICBjYXNlIENvbnN0YW50cy5TRUxFQ1RfRklMVEVSX0lURU06XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gZmlsdGVySXRlbShpLCBhY3Rpb24pKVxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBDb25zdGFudHMuU0VMRUNUX0FMTF9GSUxURVJfTElTVDpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHNlbGVjdGVkOiBhY3Rpb24uaXRlbS5zZWxlY3RlZCxcclxuICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBmaWx0ZXJJdGVtKGksIGFjdGlvbikpXHJcbiAgICAgIH0pXHJcbiAgICBjYXNlIENvbnN0YW50cy5TRUFSQ0hfRklMVEVSX0xJU1RfQllfVEVYVDpcclxuICAgIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcblx0ICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBmaWx0ZXJJdGVtKGksIGFjdGlvbikpXHJcblx0ICAgIH0pXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlckl0ZW0gPSAoc3RhdGUgPSB7XHJcbiAgc2VsZWN0ZWQ6IGZhbHNlXHJcbn0sIGFjdGlvbikgPT4ge1xyXG4gIGxldCBjb3B5U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7IFxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ29uc3RhbnRzLlNFTEVDVF9GSUxURVJfSVRFTTpcclxuICAgICAgdXBkYXRlRmlsdGVyU2VsZWN0aW9uKGNvcHlTdGF0ZSwgYWN0aW9uLml0ZW0uaWQsIGFjdGlvbi5pdGVtLnNlbGVjdGVkKTsgXHJcbiAgICAgIHJldHVybiBjb3B5U3RhdGVcclxuICAgIGNhc2UgQ29uc3RhbnRzLlNFTEVDVF9BTExfRklMVEVSX0xJU1Q6XHJcbiAgICAgIHVwZGF0ZUZpbHRlclNlbGVjdGlvbihjb3B5U3RhdGUsICdhbGwnLCBhY3Rpb24uaXRlbS5zZWxlY3RlZCk7IFxyXG4gICAgICByZXR1cm4gY29weVN0YXRlXHJcbiAgICBjYXNlIENvbnN0YW50cy5TRUFSQ0hfRklMVEVSX0xJU1RfQllfVEVYVDpcclxuICAgICAgc2VhcmNoQnlUZXh0SW50b0NoaWxkcmVuKGNvcHlTdGF0ZSwgYWN0aW9uLnRleHQpOyBcclxuICAgICAgcmV0dXJuIGNvcHlTdGF0ZVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vL1RoaXMgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgY2hpbGRyZW4gaXRlbXMgYW5kIHNlbGVjdCB0aGUgZ2l2ZW4gb25lXHJcbmNvbnN0IHVwZGF0ZUZpbHRlclNlbGVjdGlvbiA9IChpdGVtLCBpZCwgc2VsZWN0aW9uKSA9PiB7IFxyXG4gIGlmIChpdGVtLmlkID09PSBpZCB8fCAnYWxsJyA9PT0gaWQpe1xyXG4gICAgdXBkYXRlSXRlbUFuZENoaWxkcmVuKGl0ZW0sIHNlbGVjdGlvbik7XHJcbiAgfSBlbHNlIGlmIChpdGVtLml0ZW1zICYmIGl0ZW0uaXRlbXMubGVuZ3RoPjApe1xyXG4gICAgaXRlbS5pdGVtcy5mb3JFYWNoKGl0ID0+IHVwZGF0ZUZpbHRlclNlbGVjdGlvbihpdCwgaWQsIHNlbGVjdGlvbikpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdXBkYXRlSXRlbUFuZENoaWxkcmVuID0gKGl0ZW0sIHNlbGVjdGlvbikgPT4geyBcclxuICBPYmplY3QuYXNzaWduKGl0ZW0sIHsnc2VsZWN0ZWQnOiBzZWxlY3Rpb259KTtcclxuICBpZiAoaXRlbS5pdGVtcyAmJiBpdGVtLml0ZW1zLmxlbmd0aD4wKXtcclxuICAgIGl0ZW0uaXRlbXMuZm9yRWFjaChpdCA9PiB1cGRhdGVJdGVtQW5kQ2hpbGRyZW4oaXQsIHNlbGVjdGlvbikpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4vL1RoaXMgZnVuY3Rpb24gYWRkIHRoZSB0b3RhbCBhbmQgc2VsZWN0ZWQgY291bnRlciBmaWVsZHMgdG8gZWFjaCBvYmplY3QgdGhhdCBoYXMgY2hpbGRyZW5cclxuY29uc3QgdXBkYXRlRmlsdGVyQ291bnRlcnMgPSAoZmlsdGVyT2JqZWN0KSA9PiB7IFxyXG4gIGlmIChmaWx0ZXJPYmplY3QuaXRlbXMgJiYgZmlsdGVyT2JqZWN0Lml0ZW1zLmxlbmd0aD4wKXtcclxuICAgIE9iamVjdC5hc3NpZ24oZmlsdGVyT2JqZWN0LCB7J3RvdGFsQ291bnRlcic6IGZpbHRlck9iamVjdC5pdGVtcy5sZW5ndGh9KTtcclxuICAgIE9iamVjdC5hc3NpZ24oZmlsdGVyT2JqZWN0LCB7J3NlbGVjdGVkQ291bnRlcic6IGZpbHRlck9iamVjdC5pdGVtcy5maWx0ZXIoKGl0KSA9PiB7cmV0dXJuIGl0LnNlbGVjdGVkfSkubGVuZ3RofSk7XHJcbiAgICBmaWx0ZXJPYmplY3QuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge3VwZGF0ZUZpbHRlckNvdW50ZXJzKGl0ZW0pfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL1RoaXMgZnVuY3Rpb24gc2VhcmNoIGJ5IHRleHQgaW50byB0aGUgaXRlbXMgYW5kIGl0cyBjaGlsZHJlblxyXG5jb25zdCBzZWFyY2hCeVRleHRJbnRvQ2hpbGRyZW4gPSAoaXRlbSwga2V5d29yZCkgPT4geyBcclxuICBsZXQgaXRlbU1hdGNoID0gaXRlbU1hdGNocyhpdGVtLCBrZXl3b3JkKTtcclxuICBsZXQgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xyXG4gIGlmIChpdGVtLml0ZW1zICYmIGl0ZW0uaXRlbXMubGVuZ3RoPjApe1xyXG4gICAgaXRlbS5pdGVtcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICBpZiAoc2VhcmNoQnlUZXh0SW50b0NoaWxkcmVuKGl0LCBrZXl3b3JkKSl7XHJcbiAgICAgICAgY2hpbGRyZW5NYXRjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXRlbU1hdGNoIHx8IGNoaWxkcmVuTWF0Y2gpe1xyXG4gICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7J2hpZGUnOiBmYWxzZX0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIE9iamVjdC5hc3NpZ24oaXRlbSwgeydoaWRlJzogdHJ1ZX0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaXRlbU1hdGNocyA9IChpdGVtLCBrZXl3b3JkKSA9PiB7XHJcbiAgaWYgKGtleXdvcmQubGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKGtleXdvcmQsICdpJyk7XHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGl0ZW0ubmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsdGVycyJdfQ==