define(['exports', 'react', 'react/react-dom', 'esri/layers/GraphicsLayer', 'app/components/esri/layers/layer', 'esri/symbols/SimpleMarkerSymbol', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/TextSymbol', 'esri/PopupTemplate', 'esri/geometry/Point', 'esri/geometry/SpatialReference', 'esri/Graphic', 'dojo/domReady!'], function (exports, _react, _reactDom, _GraphicsLayer, _layer, _SimpleMarkerSymbol, _SimpleLineSymbol, _TextSymbol, _PopupTemplate, _Point, _SpatialReference, _Graphic, _domReady) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _GraphicsLayer2 = _interopRequireDefault(_GraphicsLayer);

  var _layer2 = _interopRequireDefault(_layer);

  var _SimpleMarkerSymbol2 = _interopRequireDefault(_SimpleMarkerSymbol);

  var _SimpleLineSymbol2 = _interopRequireDefault(_SimpleLineSymbol);

  var _TextSymbol2 = _interopRequireDefault(_TextSymbol);

  var _PopupTemplate2 = _interopRequireDefault(_PopupTemplate);

  var _Point2 = _interopRequireDefault(_Point);

  var _SpatialReference2 = _interopRequireDefault(_SpatialReference);

  var _Graphic2 = _interopRequireDefault(_Graphic);

  var _domReady2 = _interopRequireDefault(_domReady);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  //Create a symbol for drawing the point
  var markerSymbol = new _SimpleMarkerSymbol2.default({
    size: 34,
    color: [255, 193, 7, 0.8],
    outline: new _SimpleLineSymbol2.default({
      style: 'short-dash',
      color: [255, 152, 0, 0.6],
      width: 3
    })
  });

  var defaultSpatialReference = new _SpatialReference2.default({ wkid: 4326 });

  var GeoJsonLayer = function (_Layer) {
    _inherits(GeoJsonLayer, _Layer);

    function GeoJsonLayer() {
      _classCallCheck(this, GeoJsonLayer);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(GeoJsonLayer).apply(this, arguments));
    }

    _createClass(GeoJsonLayer, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.layer = new _GraphicsLayer2.default({});
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        this.loadGeoJson(nextProps.data);
      }
    }, {
      key: 'loadGeoJson',
      value: function loadGeoJson(json) {
        var _this2 = this;

        var features = Terraformer.ArcGIS.convert(json);
        var graphics = features.map(function (f) {
          _this2.layer.add(_this2.createGraphic(f));
        });

        this.props.map.add(this.layer);
      }
    }, {
      key: 'createGraphic',
      value: function createGraphic(arcgisJson) {
        var g = _Graphic2.default;
        var graphic = g.fromJSON(arcgisJson);
        graphic.symbol = markerSymbol;
        graphic.popupTemplate = new _PopupTemplate2.default({
          title: "{Name}",
          content: "{*}"
        });
        return graphic;
      }
    }]);

    return GeoJsonLayer;
  }(_layer2.default);

  exports.default = GeoJsonLayer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmktZHluYW1pY1xcbGF5ZXJzXFxnZW9Kc29ubGF5ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJNLE1BQUksZUFBZSxpQ0FBdUI7QUFDeEMsVUFBSyxFQURtQztBQUV4QyxXQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLEVBQWEsR0FBYixDQUZpQztBQUd4QyxhQUFTLCtCQUFxQjtBQUM1QixhQUFNLFlBRHNCO0FBRTVCLGFBQU8sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLENBQVgsRUFBYyxHQUFkLENBRnFCO0FBRzVCLGFBQU87QUFIcUIsS0FBckI7QUFIK0IsR0FBdkIsQ0FBbkI7O0FBVUEsTUFBTSwwQkFBMEIsK0JBQXFCLEVBQUMsTUFBTSxJQUFQLEVBQXJCLENBQWhDOztNQUVNLFk7Ozs7Ozs7Ozs7OzJDQUVnQjtBQUNuQixhQUFLLEtBQUwsR0FBYSw0QkFBc0IsRUFBdEIsQ0FBYjtBQUNEOzs7MENBR21CLFMsRUFBVyxTLEVBQVc7QUFDeEMsYUFBSyxXQUFMLENBQWlCLFVBQVUsSUFBM0I7QUFDRDs7O2tDQUVXLEksRUFBSztBQUFBOztBQUNoQixZQUFNLFdBQVMsWUFBWSxNQUFaLENBQW1CLE9BQW5CLENBQTJCLElBQTNCLENBQWY7QUFDQSxZQUFNLFdBQVMsU0FBUyxHQUFULENBQWEsVUFBQyxDQUFELEVBQUs7QUFDL0IsaUJBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxPQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBZjtBQUNELFNBRmMsQ0FBZjs7QUFJQSxhQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQXhCO0FBQ0Q7OztvQ0FJYSxVLEVBQVk7QUFDeEIsWUFBTSxxQkFBTjtBQUNBLFlBQUksVUFBUyxFQUFFLFFBQUYsQ0FBVyxVQUFYLENBQWI7QUFDQSxnQkFBUSxNQUFSLEdBQWUsWUFBZjtBQUNBLGdCQUFRLGFBQVIsR0FBdUIsNEJBQWtCO0FBQ3ZDLGlCQUFPLFFBRGdDO0FBRXZDLG1CQUFTO0FBRjhCLFNBQWxCLENBQXZCO0FBSUEsZUFBTyxPQUFQO0FBQ0Q7Ozs7OztvQkFJWSxZIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVzcmktZHluYW1pY1xcbGF5ZXJzXFxnZW9Kc29ubGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0L3JlYWN0LWRvbSc7XHJcbmltcG9ydCBFc3JpR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcclxuaW1wb3J0IExheWVyIGZyb20gJ2FwcC9jb21wb25lbnRzL2VzcmkvbGF5ZXJzL2xheWVyJztcclxuXHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbCc7XHJcbmltcG9ydCBTaW1wbGVMaW5lU3ltYm9sICAgZnJvbSAnZXNyaS9zeW1ib2xzL1NpbXBsZUxpbmVTeW1ib2wnO1xyXG5cclxuaW1wb3J0IFRleHRTeW1ib2wgICBmcm9tICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCc7XHJcblxyXG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xyXG5cclxuaW1wb3J0IFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnO1xyXG5cclxuaW1wb3J0IFNwYXRpYWxSZWZlcmVuY2UgZnJvbSAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJztcclxuXHJcbmltcG9ydCBHcmFwaGljIGZyb20gXCJlc3JpL0dyYXBoaWNcIjtcclxuaW1wb3J0IGRvbVJlYWR5IGZyb20gXCJkb2pvL2RvbVJlYWR5IVwiO1xyXG5cclxuXHJcbiAgICAgIC8vQ3JlYXRlIGEgc3ltYm9sIGZvciBkcmF3aW5nIHRoZSBwb2ludFxyXG4gICAgICB2YXIgbWFya2VyU3ltYm9sID0gbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7XHJcbiAgICAgICAgc2l6ZTozNCxcclxuICAgICAgICBjb2xvcjogWzI1NSwgMTkzLCA3LDAuOF0sXHJcbiAgICAgICAgb3V0bGluZTogbmV3IFNpbXBsZUxpbmVTeW1ib2woe1xyXG4gICAgICAgICAgc3R5bGU6J3Nob3J0LWRhc2gnLFxyXG4gICAgICAgICAgY29sb3I6IFsyNTUsIDE1MiwgMCwgMC42XSxcclxuICAgICAgICAgIHdpZHRoOiAzXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkZWZhdWx0U3BhdGlhbFJlZmVyZW5jZSA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHt3a2lkOiA0MzI2fSk7XHJcblxyXG4gICAgICBjbGFzcyBHZW9Kc29uTGF5ZXIgZXh0ZW5kcyBMYXllcntcclxuXHJcbiAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgRXNyaUdyYXBoaWNzTGF5ZXIoe30pO1xyXG4gICAgICAgfVxyXG5cclxuXHJcbiAgICAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgIHRoaXMubG9hZEdlb0pzb24obmV4dFByb3BzLmRhdGEpO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGxvYWRHZW9Kc29uKGpzb24pe1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzPVRlcnJhZm9ybWVyLkFyY0dJUy5jb252ZXJ0KGpzb24pO1xyXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzPWZlYXR1cmVzLm1hcCgoZik9PntcclxuICAgICAgICAgIHRoaXMubGF5ZXIuYWRkKHRoaXMuY3JlYXRlR3JhcGhpYyhmKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMubWFwLmFkZCh0aGlzLmxheWVyKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBjcmVhdGVHcmFwaGljKGFyY2dpc0pzb24pIHtcclxuICAgICAgICBjb25zdCBnPUdyYXBoaWM7XHJcbiAgICAgICAgbGV0IGdyYXBoaWM9IGcuZnJvbUpTT04oYXJjZ2lzSnNvbik7XHJcbiAgICAgICAgZ3JhcGhpYy5zeW1ib2w9bWFya2VyU3ltYm9sO1xyXG4gICAgICAgIGdyYXBoaWMucG9wdXBUZW1wbGF0ZT0gbmV3IFBvcHVwVGVtcGxhdGUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwie05hbWV9XCIsXHJcbiAgICAgICAgICBjb250ZW50OiBcInsqfVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZ3JhcGhpYztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBHZW9Kc29uTGF5ZXI7XHJcbiJdfQ==