define(['exports', 'react', 'react/react-dom', 'app/components/esri/map', 'app/components/esri/sceneView', 'app/components/esri/mapview', 'app/components/esri/layers/graphicsLayer', 'app/components/esri-dynamic/layers/geoJsonlayer', 'app/components/esri/graphic', 'app/components/esri/geometry/extend', 'app/components/esri/popupTemplate'], function (exports, _react, _reactDom, _map, _sceneView, _mapview, _graphicsLayer, _geoJsonlayer, _graphic, _extend, _popupTemplate) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _map2 = _interopRequireDefault(_map);

	var _sceneView2 = _interopRequireDefault(_sceneView);

	var _mapview2 = _interopRequireDefault(_mapview);

	var _graphicsLayer2 = _interopRequireDefault(_graphicsLayer);

	var _geoJsonlayer2 = _interopRequireDefault(_geoJsonlayer);

	var _graphic2 = _interopRequireDefault(_graphic);

	var _extend2 = _interopRequireDefault(_extend);

	var _popupTemplate2 = _interopRequireDefault(_popupTemplate);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var MapComponent = _react2.default.createClass({
		displayName: 'MapComponent',
		render: function render() {
			var view = void 0;
			if (this.props.view == '3d') {
				view = _react2.default.createElement(_sceneView2.default, null);
			} else {
				view = _react2.default.createElement(
					_mapview2.default,
					null,
					_react2.default.createElement(_extend2.default, { xmin: 12925933.579460911, ymin: 278072.4096790361, xmax: 14706610.590391904, ymax: 2291117.986596903, spatialReference: 102100 })
				);
			}

			return _react2.default.createElement(
				_map2.default,
				{ className: 'map', basemap: 'streets' },
				_react2.default.createElement(_geoJsonlayer2.default, { data: this.props.layers.projects.data, name: this.props.layers.projects.name }),
				view
			);
		}
	});

	exports.default = MapComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1hcFxcbWFwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxLQUFNLGVBQWUsZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBSXRDLFFBSnNDLG9CQUk5QjtBQUNQLE9BQUksYUFBSjtBQUNBLE9BQUksS0FBSyxLQUFMLENBQVcsSUFBWCxJQUFpQixJQUFyQixFQUEyQjtBQUMxQixXQUFNLHdEQUFOO0FBQ0EsSUFGRCxNQUVPO0FBQ04sV0FBTztBQUFBO0tBQUE7S0FBUyxrREFBUyxNQUFPLGtCQUFoQixFQUFvQyxNQUFPLGlCQUEzQyxFQUE4RCxNQUFPLGtCQUFyRSxFQUF5RixNQUFPLGlCQUFoRyxFQUFtSCxrQkFBa0IsTUFBckk7QUFBVCxLQUFQO0FBQ0E7O0FBRUQsVUFFQztBQUFBO0lBQUEsRUFBSyxXQUFVLEtBQWYsRUFBcUIsU0FBUSxTQUE3QjtJQUNDLHdEQUFjLE1BQU0sS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixRQUFsQixDQUEyQixJQUEvQyxFQUFxRCxNQUFNLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsUUFBbEIsQ0FBMkIsSUFBdEYsR0FERDtJQUlFO0FBSkYsSUFGRDtBQVVBO0FBdEJxQyxFQUFsQixDQUFyQjs7bUJBMEJlLFkiLCJmaWxlIjoiY29tcG9uZW50c1xcbWFwXFxtYXAuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0L3JlYWN0LWRvbSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnYXBwL2NvbXBvbmVudHMvZXNyaS9tYXAnO1xyXG5cclxuaW1wb3J0IFNjZW5lVmlldyBmcm9tICdhcHAvY29tcG9uZW50cy9lc3JpL3NjZW5lVmlldyc7XHJcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2FwcC9jb21wb25lbnRzL2VzcmkvbWFwdmlldyc7XHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2FwcC9jb21wb25lbnRzL2VzcmkvbGF5ZXJzL2dyYXBoaWNzTGF5ZXInO1xyXG5pbXBvcnQgR2VvSnNvbkxheWVyIGZyb20gJ2FwcC9jb21wb25lbnRzL2VzcmktZHluYW1pYy9sYXllcnMvZ2VvSnNvbmxheWVyJztcclxuXHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2FwcC9jb21wb25lbnRzL2VzcmkvZ3JhcGhpYyc7XHJcbmltcG9ydCBFeHRlbnQgZnJvbSAnYXBwL2NvbXBvbmVudHMvZXNyaS9nZW9tZXRyeS9leHRlbmQnXHJcblxyXG5cclxuaW1wb3J0IFBvcHVwVGVtcGxhdGUgZnJvbSAnYXBwL2NvbXBvbmVudHMvZXNyaS9wb3B1cFRlbXBsYXRlJztcclxuXHJcbmNvbnN0IE1hcENvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCB2aWV3O1xyXG5cdFx0aWYgKHRoaXMucHJvcHMudmlldz09JzNkJykge1xyXG5cdFx0XHR2aWV3PSA8U2NlbmVWaWV3Lz47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2aWV3ID0gPE1hcFZpZXc+PEV4dGVudCAgeG1pbj0gezEyOTI1OTMzLjU3OTQ2MDkxMX0geW1pbj0gezI3ODA3Mi40MDk2NzkwMzYxfSB4bWF4PSB7MTQ3MDY2MTAuNTkwMzkxOTA0fSB5bWF4PSB7MjI5MTExNy45ODY1OTY5MDN9IHNwYXRpYWxSZWZlcmVuY2U9ezEwMjEwMH0vPjwvTWFwVmlldz47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHJcblx0XHRcdDxNYXAgY2xhc3NOYW1lPVwibWFwXCIgYmFzZW1hcD1cInN0cmVldHNcIiA+XHJcblx0XHRcdFx0PEdlb0pzb25MYXllciBkYXRhPXt0aGlzLnByb3BzLmxheWVycy5wcm9qZWN0cy5kYXRhfSBuYW1lPXt0aGlzLnByb3BzLmxheWVycy5wcm9qZWN0cy5uYW1lfT5cclxuXHJcblx0XHRcdFx0PC9HZW9Kc29uTGF5ZXI+XHJcblx0XHRcdFx0e3ZpZXd9XHJcblx0XHRcdDwvTWFwPlxyXG5cdFx0XHRcclxuXHRcdFx0KVxyXG5cdH1cclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwQ29tcG9uZW50O1xyXG4iXX0=