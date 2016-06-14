'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComingSoon = function () {
  function ComingSoon($dom, config) {
    _classCallCheck(this, ComingSoon);

    this.$dom = $dom;
    this.config = config;
  }

  _createClass(ComingSoon, [{
    key: 'start',
    value: function start() {

      this.restart();
    }
  }, {
    key: 'restart',
    value: function restart() {

      var $dom = this.$dom;
      var config = this.config;
      var unit = config.unit;

      for (var key in unit) {}
    }
  }], [{
    key: 'create',
    value: function create(tagName, attr) {

      var tag = document.createElement(tagName);

      for (var key in attr) {

        tag.setAttribute(key, attr[key]);
      }

      return tag;
    }
  }]);

  return ComingSoon;
}();