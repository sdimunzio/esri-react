define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/BasemapToggle/BasemapToggleViewModel'], function (exports, _react, _watchUtils, _BasemapToggleViewModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _BasemapToggleViewModel2 = _interopRequireDefault(_BasemapToggleViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function bgImage(url) {
    return {
      backgroundImage: 'url(' + url + ')'
    };
  }

  var BasemapToggle = _react2.default.createClass({
    displayName: 'BasemapToggle',
    getInitialState: function getInitialState() {
      return {
        vm: new _BasemapToggleViewModel2.default(),
        secondaryThumbnailUrl: ''
      };
    },
    getDefaultProps: function getDefaultProps() {
      return {
        view: {},
        secondaryThumbnailUrl: '',
        currentThumbnailUrl: '',
        updating: false
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      this.props.view.then(function (view) {

        _this.state.vm.view = view;
        _this.state.vm.secondaryBasemap = _this.props.secondaryBasemap;

        var _state$vm = _this.state.vm;
        var secondaryBasemap = _state$vm.secondaryBasemap;
        var currentBasemap = _state$vm.currentBasemap;


        var info = _this.state.vm.getBasemapInfo(_this.props.secondaryBasemap || 'topo');

        _this.setState({
          secondaryThumbnailUrl: info.thumbnailUrl,
          currentThumbnailUrl: _this.state.vm.currentBasemap.thumbnailUrl
        });

        _watchUtils2.default.watch(_this.state.vm, 'secondaryBasemap', _this.updateThumbnails);
        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({ updating: updating });
        });
      });
    },
    updateThumbnails: function updateThumbnails(secondary, current) {
      var secInfo = this.state.vm.getBasemapInfo(secondary);
      var curInfo = this.state.vm.getBasemapInfo(current);
      this.setState({
        secondaryThumbnailUrl: secInfo.thumbnailUrl,
        currentThumbnailUrl: curInfo.thumbnailUrl
      });
    },
    toggle: function toggle() {
      this.state.vm.toggle();
    },
    render: function render() {

      var currentThumbnailStyle = bgImage(this.state.currentThumbnailUrl);

      var secondaryThumbnailStyle = bgImage(this.state.secondaryThumbnailUrl);

      var style = this.state.updating ? 'basemap-container' : 'basemap-container view-busy';

      return _react2.default.createElement(
        'div',
        { className: style },
        _react2.default.createElement('div', { className: 'basemap-item basemap-item-secondary', onClick: this.toggle, style: secondaryThumbnailStyle }),
        _react2.default.createElement('div', { className: 'basemap-item basemap-item-current', style: currentThumbnailStyle })
      );
    }
  });

  exports.default = BasemapToggle;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVzcmlcXHdpZGdldHNcXGJhc2VtYXB0b2dnbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxXQUFTLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0I7QUFDcEIsV0FBTztBQUNMLHVCQUFpQixTQUFTLEdBQVQsR0FBZTtBQUQzQixLQUFQO0FBR0Q7O0FBRUQsTUFBTSxnQkFBZ0IsZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBRXRDLG1CQUZzQyw2QkFFcEI7QUFDaEIsYUFBTztBQUNMLFlBQUksc0NBREM7QUFFTCwrQkFBdUI7QUFGbEIsT0FBUDtBQUlELEtBUHFDO0FBU3RDLG1CQVRzQyw2QkFTcEI7QUFDaEIsYUFBTztBQUNMLGNBQU0sRUFERDtBQUVMLCtCQUF1QixFQUZsQjtBQUdMLDZCQUFxQixFQUhoQjtBQUlMLGtCQUFVO0FBSkwsT0FBUDtBQU1ELEtBaEJxQztBQWtCdEMscUJBbEJzQywrQkFrQmxCO0FBQUE7O0FBQ2xCLFdBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBcUIsZ0JBQVE7O0FBRTNCLGNBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxJQUFkLEdBQXFCLElBQXJCO0FBQ0EsY0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLGdCQUFkLEdBQWlDLE1BQUssS0FBTCxDQUFXLGdCQUE1Qzs7QUFIMkIsd0JBS2dCLE1BQUssS0FBTCxDQUFXLEVBTDNCO0FBQUEsWUFLckIsZ0JBTHFCLGFBS3JCLGdCQUxxQjtBQUFBLFlBS0gsY0FMRyxhQUtILGNBTEc7OztBQU8zQixZQUFJLE9BQU8sTUFBSyxLQUFMLENBQVcsRUFBWCxDQUFjLGNBQWQsQ0FBNkIsTUFBSyxLQUFMLENBQVcsZ0JBQVgsSUFBK0IsTUFBNUQsQ0FBWDs7QUFFQSxjQUFLLFFBQUwsQ0FBYztBQUNaLGlDQUF1QixLQUFLLFlBRGhCO0FBRVosK0JBQXFCLE1BQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxjQUFkLENBQTZCO0FBRnRDLFNBQWQ7O0FBS0EsNkJBQVcsS0FBWCxDQUFpQixNQUFLLEtBQUwsQ0FBVyxFQUE1QixFQUFnQyxrQkFBaEMsRUFBb0QsTUFBSyxnQkFBekQ7QUFDQSw2QkFBVyxJQUFYLENBQWdCLElBQWhCLEVBQXNCLFlBQXRCLEVBQW9DLFVBQUMsUUFBRCxFQUFjO0FBQ2hELGdCQUFLLFFBQUwsQ0FBYyxFQUFFLGtCQUFGLEVBQWQ7QUFDRCxTQUZEO0FBSUQsT0FuQkQ7QUFvQkQsS0F2Q3FDO0FBeUN0QyxvQkF6Q3NDLDRCQXlDckIsU0F6Q3FCLEVBeUNWLE9BekNVLEVBeUNEO0FBQ25DLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsY0FBZCxDQUE2QixTQUE3QixDQUFkO0FBQ0EsVUFBSSxVQUFVLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxjQUFkLENBQTZCLE9BQTdCLENBQWQ7QUFDQSxXQUFLLFFBQUwsQ0FBYztBQUNaLCtCQUF1QixRQUFRLFlBRG5CO0FBRVosNkJBQXFCLFFBQVE7QUFGakIsT0FBZDtBQUlELEtBaERxQztBQWtEdEMsVUFsRHNDLG9CQWtEN0I7QUFDUCxXQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsTUFBZDtBQUNELEtBcERxQztBQXNEdEMsVUF0RHNDLG9CQXNEN0I7O0FBRVAsVUFBSSx3QkFBd0IsUUFBUSxLQUFLLEtBQUwsQ0FBVyxtQkFBbkIsQ0FBNUI7O0FBRUEsVUFBSSwwQkFBMEIsUUFBUSxLQUFLLEtBQUwsQ0FBVyxxQkFBbkIsQ0FBOUI7O0FBRUEsVUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsbUJBQXRCLEdBQTRDLDZCQUF4RDs7QUFFQSxhQUVFO0FBQUE7UUFBQSxFQUFLLFdBQVcsS0FBaEI7UUFDRSx1Q0FBSyxXQUFVLHFDQUFmLEVBQXFELFNBQVMsS0FBSyxNQUFuRSxFQUEyRSxPQUFPLHVCQUFsRixHQURGO1FBRUUsdUNBQUssV0FBVSxtQ0FBZixFQUFtRCxPQUFPLHFCQUExRDtBQUZGLE9BRkY7QUFTRDtBQXZFcUMsR0FBbEIsQ0FBdEI7O29CQTJFZSxhIiwiZmlsZSI6ImNvbXBvbmVudHNcXGVzcmlcXHdpZGdldHNcXGJhc2VtYXB0b2dnbGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xyXG5pbXBvcnQgQmFzZW1hcFRvZ2dsZVZpZXdNb2RlbCBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcFRvZ2dsZS9CYXNlbWFwVG9nZ2xlVmlld01vZGVsJztcclxuXHJcbmZ1bmN0aW9uIGJnSW1hZ2UodXJsKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdXJsICsgJyknXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgQmFzZW1hcFRvZ2dsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdm06IG5ldyBCYXNlbWFwVG9nZ2xlVmlld01vZGVsKCksXHJcbiAgICAgIHNlY29uZGFyeVRodW1ibmFpbFVybDogJydcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlldzoge30sXHJcbiAgICAgIHNlY29uZGFyeVRodW1ibmFpbFVybDogJycsXHJcbiAgICAgIGN1cnJlbnRUaHVtYm5haWxVcmw6ICcnLFxyXG4gICAgICB1cGRhdGluZzogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMudmlldy50aGVuKHZpZXcgPT4ge1xyXG5cclxuICAgICAgdGhpcy5zdGF0ZS52bS52aWV3ID0gdmlldztcclxuICAgICAgdGhpcy5zdGF0ZS52bS5zZWNvbmRhcnlCYXNlbWFwID0gdGhpcy5wcm9wcy5zZWNvbmRhcnlCYXNlbWFwO1xyXG5cclxuICAgICAgbGV0IHsgc2Vjb25kYXJ5QmFzZW1hcCwgY3VycmVudEJhc2VtYXAgfSA9IHRoaXMuc3RhdGUudm07XHJcblxyXG4gICAgICBsZXQgaW5mbyA9IHRoaXMuc3RhdGUudm0uZ2V0QmFzZW1hcEluZm8odGhpcy5wcm9wcy5zZWNvbmRhcnlCYXNlbWFwIHx8ICd0b3BvJyk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzZWNvbmRhcnlUaHVtYm5haWxVcmw6IGluZm8udGh1bWJuYWlsVXJsLFxyXG4gICAgICAgIGN1cnJlbnRUaHVtYm5haWxVcmw6IHRoaXMuc3RhdGUudm0uY3VycmVudEJhc2VtYXAudGh1bWJuYWlsVXJsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd2F0Y2hVdGlscy53YXRjaCh0aGlzLnN0YXRlLnZtLCAnc2Vjb25kYXJ5QmFzZW1hcCcsIHRoaXMudXBkYXRlVGh1bWJuYWlscyk7XHJcbiAgICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnc3RhdGlvbmFyeScsICh1cGRhdGluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGluZyB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlVGh1bWJuYWlscyhzZWNvbmRhcnksIGN1cnJlbnQpIHtcclxuICAgIGxldCBzZWNJbmZvID0gdGhpcy5zdGF0ZS52bS5nZXRCYXNlbWFwSW5mbyhzZWNvbmRhcnkpO1xyXG4gICAgbGV0IGN1ckluZm8gPSB0aGlzLnN0YXRlLnZtLmdldEJhc2VtYXBJbmZvKGN1cnJlbnQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlY29uZGFyeVRodW1ibmFpbFVybDogc2VjSW5mby50aHVtYm5haWxVcmwsXHJcbiAgICAgIGN1cnJlbnRUaHVtYm5haWxVcmw6IGN1ckluZm8udGh1bWJuYWlsVXJsXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnN0YXRlLnZtLnRvZ2dsZSgpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBsZXQgY3VycmVudFRodW1ibmFpbFN0eWxlID0gYmdJbWFnZSh0aGlzLnN0YXRlLmN1cnJlbnRUaHVtYm5haWxVcmwpO1xyXG5cclxuICAgIGxldCBzZWNvbmRhcnlUaHVtYm5haWxTdHlsZSA9IGJnSW1hZ2UodGhpcy5zdGF0ZS5zZWNvbmRhcnlUaHVtYm5haWxVcmwpO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IHRoaXMuc3RhdGUudXBkYXRpbmcgPyAnYmFzZW1hcC1jb250YWluZXInIDogJ2Jhc2VtYXAtY29udGFpbmVyIHZpZXctYnVzeSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhc2VtYXAtaXRlbSBiYXNlbWFwLWl0ZW0tc2Vjb25kYXJ5JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0gc3R5bGU9e3NlY29uZGFyeVRodW1ibmFpbFN0eWxlfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzZW1hcC1pdGVtIGJhc2VtYXAtaXRlbS1jdXJyZW50JyBzdHlsZT17Y3VycmVudFRodW1ibmFpbFN0eWxlfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlbWFwVG9nZ2xlOyJdfQ==