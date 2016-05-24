define(['exports', 'react-redux', 'app/actions/map', 'app/components/map/map', 'app/constants/constants'], function (exports, _reactRedux, _map, _map2, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Map = undefined;

  var _map3 = _interopRequireDefault(_map2);

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var stateToProps = function stateToProps(state, props) {
    return state.map;
  };

  /*Connect map component to redux state*/
  var Map = (0, _reactRedux.connect)(stateToProps)(_map3.default);

  exports.Map = Map;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1hcFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztNQUlZLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixNQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDckMsV0FBTyxNQUFNLEdBQWI7QUFDRCxHQUZEOzs7QUFNQSxNQUFNLE1BQUkseUJBQVEsWUFBUixnQkFBVjs7VUFFUSxHLEdBQUEsRyIsImZpbGUiOiJjb21wb25lbnRzXFxtYXBcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtsb2FkUHJvamVjdHN9IGZyb20gJ2FwcC9hY3Rpb25zL21hcCdcclxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICdhcHAvY29tcG9uZW50cy9tYXAvbWFwJ1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnYXBwL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xyXG4gIHJldHVybiBzdGF0ZS5tYXAgIFxyXG59XHJcblxyXG5cclxuLypDb25uZWN0IG1hcCBjb21wb25lbnQgdG8gcmVkdXggc3RhdGUqL1xyXG5jb25zdCBNYXA9Y29ubmVjdChzdGF0ZVRvUHJvcHMpKE1hcENvbXBvbmVudCk7XHJcblxyXG5leHBvcnQge01hcH07XHJcbiAiXX0=