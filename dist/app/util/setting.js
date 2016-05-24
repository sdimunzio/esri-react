define(['exports', 'app/constants/constants'], function (exports, _constants) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _constants2 = _interopRequireDefault(_constants);

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

	var Settings = function () {
		function Settings() {
			_classCallCheck(this, Settings);

			this.env = document.location.host.indexOf('localhost') > -1 ? 'development' : 'production';
		}

		_createClass(Settings, [{
			key: 'getSetting',
			value: function getSetting(module, name) {
				if (!window._setting) {
					throw new Error('Settings should be initialize');
				}
				var mod = window._setting[module];
				var item = mod[name];

				if (item instanceof Object) {

					return item[this.env]; //return env based settin
				} else {
						return item;
					}
			}
		}, {
			key: 'set',
			value: function set(name, value) {
				window._setting[name] = value;
			}
		}, {
			key: 'getEnv',
			value: function getEnv() {
				return this.env;
			}
		}, {
			key: 'setEnv',
			value: function setEnv(env) {
				this.env = env;
			}
		}], [{
			key: 'initialize',
			value: function initialize(settings) {
				if (!window._setting_instance) {
					window._setting_instance = new Settings();
				}
				window._setting = settings;
			}
		}, {
			key: 'get',
			value: function get(module, name) {

				if (window._setting == null || !window._setting) {
					throw Error('Settings  should be initialized first');
				} else {
					return window._setting_instance.getSetting(module, name);
				}
			}
		}]);

		return Settings;
	}();

	exports.default = Settings;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxcXHNldHRpbmcuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVxQixRO0FBRXBCLHNCQUFjO0FBQUE7O0FBQ2IsUUFBSyxHQUFMLEdBQVksU0FBUyxRQUFULENBQWtCLElBQWxCLENBQXVCLE9BQXZCLENBQStCLFdBQS9CLElBQThDLENBQUMsQ0FBL0MsR0FBbUQsYUFBbkQsR0FBbUUsWUFBL0U7QUFDQTs7Ozs4QkFxQlUsTSxFQUFRLEksRUFBTTtBQUN4QixRQUFHLENBQUMsT0FBTyxRQUFYLEVBQW9CO0FBQ25CLFdBQU0sSUFBSSxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNBO0FBQ0QsUUFBSSxNQUFNLE9BQU8sUUFBUCxDQUFnQixNQUFoQixDQUFWO0FBQ0EsUUFBSSxPQUFPLElBQUksSUFBSixDQUFYOztBQUVBLFFBQUksZ0JBQWdCLE1BQXBCLEVBQTRCOztBQUUzQixZQUFPLEtBQUssS0FBSyxHQUFWLENBQVAsQztBQUNBLEtBSEQsTUFHTztBQUNOLGFBQU8sSUFBUDtBQUNBO0FBQ0Q7Ozt1QkFFRyxJLEVBQU0sSyxFQUFPO0FBQ2hCLFdBQU8sUUFBUCxDQUFnQixJQUFoQixJQUF3QixLQUF4QjtBQUNBOzs7NEJBRVE7QUFDUixXQUFPLEtBQUssR0FBWjtBQUVBOzs7MEJBRU0sRyxFQUFLO0FBQ1gsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBOzs7OEJBNUNpQixRLEVBQVM7QUFDMUIsUUFBSSxDQUFDLE9BQU8saUJBQVosRUFBK0I7QUFDOUIsWUFBTyxpQkFBUCxHQUEyQixJQUFJLFFBQUosRUFBM0I7QUFDQTtBQUNELFdBQU8sUUFBUCxHQUFnQixRQUFoQjtBQUNBOzs7dUJBRVUsTSxFQUFRLEksRUFBTTs7QUFFeEIsUUFBSSxPQUFPLFFBQVAsSUFBaUIsSUFBakIsSUFBeUIsQ0FBQyxPQUFPLFFBQXJDLEVBQThDO0FBQzdDLFdBQU0sTUFBTSx1Q0FBTixDQUFOO0FBQ0EsS0FGRCxNQUVLO0FBQ0osWUFBTyxPQUFPLGlCQUFQLENBQXlCLFVBQXpCLENBQW9DLE1BQXBDLEVBQTRDLElBQTVDLENBQVA7QUFDQTtBQUNEOzs7Ozs7bUJBckJtQixRIiwiZmlsZSI6InV0aWxcXHNldHRpbmcuZXM2Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnN0YW50cyBmcm9tICdhcHAvY29uc3RhbnRzL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmVudiA9IChkb2N1bWVudC5sb2NhdGlvbi5ob3N0LmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEgPyAnZGV2ZWxvcG1lbnQnIDogJ3Byb2R1Y3Rpb24nKTtcclxuXHR9XHJcblxyXG5cclxuXHRzdGF0aWMgaW5pdGlhbGl6ZShzZXR0aW5ncyl7XHJcblx0XHRpZiAoIXdpbmRvdy5fc2V0dGluZ19pbnN0YW5jZSkge1xyXG5cdFx0XHR3aW5kb3cuX3NldHRpbmdfaW5zdGFuY2UgPSBuZXcgU2V0dGluZ3MoKVxyXG5cdFx0fVxyXG5cdFx0d2luZG93Ll9zZXR0aW5nPXNldHRpbmdzO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldChtb2R1bGUsIG5hbWUpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHdpbmRvdy5fc2V0dGluZz09bnVsbCB8fCAhd2luZG93Ll9zZXR0aW5nKXtcclxuXHRcdFx0dGhyb3cgRXJyb3IoJ1NldHRpbmdzICBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgZmlyc3QnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gd2luZG93Ll9zZXR0aW5nX2luc3RhbmNlLmdldFNldHRpbmcobW9kdWxlLCBuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Z2V0U2V0dGluZyhtb2R1bGUsIG5hbWUpIHtcclxuXHRcdGlmKCF3aW5kb3cuX3NldHRpbmcpe1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NldHRpbmdzIHNob3VsZCBiZSBpbml0aWFsaXplJyk7XHJcblx0XHR9XHJcblx0XHRsZXQgbW9kID0gd2luZG93Ll9zZXR0aW5nW21vZHVsZV07XHJcblx0XHRsZXQgaXRlbSA9IG1vZFtuYW1lXTtcclxuXHJcblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIGl0ZW1bdGhpcy5lbnZdOyAvL3JldHVybiBlbnYgYmFzZWQgc2V0dGluXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldChuYW1lLCB2YWx1ZSkge1xyXG5cdFx0d2luZG93Ll9zZXR0aW5nW25hbWVdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRnZXRFbnYoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbnZcclxuXHJcblx0fVxyXG5cclxuXHRzZXRFbnYoZW52KSB7XHJcblx0XHR0aGlzLmVudiA9IGVudjtcclxuXHR9XHJcblxyXG59Il19