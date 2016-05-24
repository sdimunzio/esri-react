define(['exports', 'app/constants/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var map = function map() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {
      layers: {
        projects: {
          'name': 'Project Layers',
          'data': ''
        }
      }
    } : arguments[0];
    var action = arguments[1];


    console.log(state);
    switch (action.type) {
      case _constants.LOAD_PROJECT_GEOJSON_SUCCESS:
        var newState = Object.assign({}, state);
        return Object.assign(newState, {
          layers: {
            projects: {
              data: action.data,
              name: 'Project Layers'
            } }
        });
      case _constants.LOAD_PEOJECT_GEOJSON_FAILED:
        return null;
      default:
        return state;

    }
  };

  exports.default = map;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxtYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLE1BQU0sU0FBTixHQUFNLEdBT0U7QUFBQSxRQVBELEtBT0MseURBUE87QUFDbkIsY0FBUTtBQUNOLGtCQUFVO0FBQ1Isa0JBQVEsZ0JBREE7QUFFUixrQkFBUTtBQUZBO0FBREo7QUFEVyxLQU9QO0FBQUEsUUFBWCxNQUFXOzs7QUFFWixZQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsWUFBUSxPQUFPLElBQWY7QUFDRTtBQUNBLFlBQUksV0FBUyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLENBQWI7QUFDQSxlQUFRLE9BQU8sTUFBUCxDQUFjLFFBQWQsRUFBd0I7QUFDOUIsa0JBQU87QUFDTCxzQkFBVTtBQUNSLG9CQUFNLE9BQU8sSUFETDtBQUVSLG9CQUFNO0FBRkUsYUFETDtBQUR1QixTQUF4QixDQUFSO0FBT0E7QUFDQSxlQUFPLElBQVA7QUFDQTtBQUNBLGVBQU8sS0FBUDs7QUFiRjtBQWdCRCxHQTFCRDs7b0JBK0JRLEciLCJmaWxlIjoicmVkdWNlcnNcXG1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TE9BRF9QUk9KRUNUX0dFT0pTT05fU1VDQ0VTUyxMT0FEX1BFT0pFQ1RfR0VPSlNPTl9GQUlMRUQgfSBmcm9tICdhcHAvY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBtYXAgPSAoc3RhdGUgPSB7XHJcbiAgbGF5ZXJzOiB7XHJcbiAgICBwcm9qZWN0czoge1xyXG4gICAgICAnbmFtZSc6ICdQcm9qZWN0IExheWVycycsXHJcbiAgICAgICdkYXRhJzogJydcclxuICAgIH1cclxuICB9XHJcbn0sIGFjdGlvbikgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1BST0pFQ1RfR0VPSlNPTl9TVUNDRVNTOlxyXG4gICAgbGV0IG5ld1N0YXRlPU9iamVjdC5hc3NpZ24oe30sIHN0YXRlKVxyXG4gICAgcmV0dXJuICBPYmplY3QuYXNzaWduKG5ld1N0YXRlLCB7XHJcbiAgICAgIGxheWVyczp7XHJcbiAgICAgICAgcHJvamVjdHM6IHtcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgbmFtZTogJ1Byb2plY3QgTGF5ZXJzJ1xyXG4gICAgICAgIH19XHJcbiAgICAgIH0pO1xyXG4gICAgY2FzZSBMT0FEX1BFT0pFQ1RfR0VPSlNPTl9GQUlMRUQ6XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gc3RhdGVcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydFxyXG5kZWZhdWx0IG1hcDsiXX0=