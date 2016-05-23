define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Zoom/ZoomViewModel'], function (exports, _react, _watchUtils, _ZoomViewModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _ZoomViewModel2 = _interopRequireDefault(_ZoomViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Zoom = _react2.default.createClass({
    displayName: 'Zoom',
    getInitialState: function getInitialState() {
      return {
        vm: new _ZoomViewModel2.default(),
        updating: false,
        maxZoomed: false,
        minZoomed: false
      };
    },
    getDefaultProps: function getDefaultProps() {
      return {
        view: {}
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      this.props.view.then(function (view) {
        _this.state.vm.view = view;
        _watchUtils2.default.init(view, 'zoom', function (val) {
          _this.setState({
            maxZoomed: val === view.constraints.maxZoom,
            minZoomed: val === view.constraints.minZoom
          });
        });
        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({ updating: updating });
        });
      });
    },
    zoomIn: function zoomIn() {
      if (!this.state.maxZoomed) {
        this.state.vm.zoomIn();
      }
    },
    zoomOut: function zoomOut() {
      if (!this.state.minZoomed) {
        this.state.vm.zoomOut();
      }
    },
    render: function render() {

      var btnstyle = this.state.updating ? 'zoom-btns' : 'zoom-btns view-busy';
      var maxstate = this.state.maxZoomed ? 'button raised grey narrow disable' : 'button raised grey narrow';
      var minstate = this.state.minZoomed ? 'button raised grey narrow disable' : 'button raised grey narrow';

      return _react2.default.createElement(
        'div',
        { className: btnstyle },
        _react2.default.createElement(
          'div',
          { className: maxstate, onClick: this.zoomIn },
          _react2.default.createElement(
            'div',
            { className: 'center' },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'add'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: minstate, onClick: this.zoomOut },
          _react2.default.createElement(
            'div',
            { className: 'center' },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'remove'
            )
          )
        )
      );
    }
  });

  exports.default = Zoom;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXHdpZGdldHNcXHpvb20uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxNQUFNLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBRTdCLG1CQUY2Qiw2QkFFWDtBQUNoQixhQUFPO0FBQ0wsWUFBSSw2QkFEQztBQUVMLGtCQUFVLEtBRkw7QUFHTCxtQkFBVyxLQUhOO0FBSUwsbUJBQVc7QUFKTixPQUFQO0FBTUQsS0FUNEI7QUFXN0IsbUJBWDZCLDZCQVdYO0FBQ2hCLGFBQU87QUFDTCxjQUFNO0FBREQsT0FBUDtBQUdELEtBZjRCO0FBaUI3QixxQkFqQjZCLCtCQWlCVDtBQUFBOztBQUNuQixXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBQXFCLGdCQUFRO0FBQzFCLGNBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxJQUFkLEdBQXFCLElBQXJCO0FBQ0EsNkJBQVcsSUFBWCxDQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUE4QixVQUFDLEdBQUQsRUFBUztBQUNyQyxnQkFBSyxRQUFMLENBQWM7QUFDWix1QkFBVyxRQUFRLEtBQUssV0FBTCxDQUFpQixPQUR4QjtBQUVaLHVCQUFXLFFBQVEsS0FBSyxXQUFMLENBQWlCO0FBRnhCLFdBQWQ7QUFJRCxTQUxEO0FBTUEsNkJBQVcsSUFBWCxDQUFnQixJQUFoQixFQUFzQixZQUF0QixFQUFvQyxVQUFDLFFBQUQsRUFBYztBQUNoRCxnQkFBSyxRQUFMLENBQWMsRUFBRSxrQkFBRixFQUFkO0FBQ0QsU0FGRDtBQUdELE9BWEY7QUFZQSxLQTlCNEI7QUFnQzdCLFVBaEM2QixvQkFnQ3BCO0FBQ1AsVUFBSSxDQUFDLEtBQUssS0FBTCxDQUFXLFNBQWhCLEVBQTJCO0FBQ3pCLGFBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxNQUFkO0FBQ0Q7QUFDRixLQXBDNEI7QUFzQzdCLFdBdEM2QixxQkFzQ25CO0FBQ1IsVUFBSSxDQUFDLEtBQUssS0FBTCxDQUFXLFNBQWhCLEVBQTJCO0FBQ3pCLGFBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxPQUFkO0FBQ0Q7QUFDRixLQTFDNEI7QUE0QzdCLFVBNUM2QixvQkE0Q3BCOztBQUVQLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLFdBQXRCLEdBQW9DLHFCQUFuRDtBQUNBLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLG1DQUF2QixHQUE2RCwyQkFBNUU7QUFDQSxVQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixtQ0FBdkIsR0FBNkQsMkJBQTVFOztBQUVBLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBVyxRQUFoQjtRQUNFO0FBQUE7VUFBQSxFQUFLLFdBQVcsUUFBaEIsRUFBMEIsU0FBUyxLQUFLLE1BQXhDO1VBQ0U7QUFBQTtZQUFBLEVBQUssV0FBVSxRQUFmO1lBQXdCO0FBQUE7Y0FBQSxFQUFHLFdBQVUsZ0JBQWI7Y0FBQTtBQUFBO0FBQXhCO0FBREYsU0FERjtRQUlFO0FBQUE7VUFBQSxFQUFLLFdBQVcsUUFBaEIsRUFBMEIsU0FBUyxLQUFLLE9BQXhDO1VBQ0U7QUFBQTtZQUFBLEVBQUssV0FBVSxRQUFmO1lBQXdCO0FBQUE7Y0FBQSxFQUFHLFdBQVUsZ0JBQWI7Y0FBQTtBQUFBO0FBQXhCO0FBREY7QUFKRixPQURGO0FBV0Q7QUE3RDRCLEdBQWxCLENBQWI7O29CQWdFZSxJIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVzcmlcXHdpZGdldHNcXHpvb20uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xyXG5pbXBvcnQgWm9vbVZpZXdNb2RlbCBmcm9tICdlc3JpL3dpZGdldHMvWm9vbS9ab29tVmlld01vZGVsJztcclxuXHJcbmNvbnN0IFpvb20gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZtOiBuZXcgWm9vbVZpZXdNb2RlbCgpLFxyXG4gICAgICB1cGRhdGluZzogZmFsc2UsXHJcbiAgICAgIG1heFpvb21lZDogZmFsc2UsXHJcbiAgICAgIG1pblpvb21lZDogZmFsc2VcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlldzoge31cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgdGhpcy5wcm9wcy52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUudm0udmlldyA9IHZpZXc7XHJcbiAgICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnem9vbScsICh2YWwpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG1heFpvb21lZDogdmFsID09PSB2aWV3LmNvbnN0cmFpbnRzLm1heFpvb20sXHJcbiAgICAgICAgICBtaW5ab29tZWQ6IHZhbCA9PT0gdmlldy5jb25zdHJhaW50cy5taW5ab29tXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3N0YXRpb25hcnknLCAodXBkYXRpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBkYXRpbmcgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgem9vbUluKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLm1heFpvb21lZCkge1xyXG4gICAgICB0aGlzLnN0YXRlLnZtLnpvb21JbigpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHpvb21PdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUubWluWm9vbWVkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudm0uem9vbU91dCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBsZXQgYnRuc3R5bGUgPSB0aGlzLnN0YXRlLnVwZGF0aW5nID8gJ3pvb20tYnRucycgOiAnem9vbS1idG5zIHZpZXctYnVzeSc7XHJcbiAgICBsZXQgbWF4c3RhdGUgPSB0aGlzLnN0YXRlLm1heFpvb21lZCA/ICdidXR0b24gcmFpc2VkIGdyZXkgbmFycm93IGRpc2FibGUnIDogJ2J1dHRvbiByYWlzZWQgZ3JleSBuYXJyb3cnO1xyXG4gICAgbGV0IG1pbnN0YXRlID0gdGhpcy5zdGF0ZS5taW5ab29tZWQgPyAnYnV0dG9uIHJhaXNlZCBncmV5IG5hcnJvdyBkaXNhYmxlJyA6ICdidXR0b24gcmFpc2VkIGdyZXkgbmFycm93JztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuc3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXhzdGF0ZX0gb25DbGljaz17dGhpcy56b29tSW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWluc3RhdGV9IG9uQ2xpY2s9e3RoaXMuem9vbU91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlPC9pPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBab29tO1xyXG4iXX0=