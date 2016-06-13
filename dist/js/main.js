'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComingSoon = function () {
  function ComingSoon($dom) {
    _classCallCheck(this, ComingSoon);

    this.$dom = $dom;
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
    }
  }], [{
    key: 'create',
    value: function create(tagName, attr) {

      var tag = document.createElement(tagName);
    }
  }]);

  return ComingSoon;
}();