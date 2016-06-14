'use strict';

class ComingSoon {
  constructor($dom, config) {

    this.$dom = $dom;
    this.config = config;
  }

  start() {

    this.restart();
  }

  restart() {

    var $dom = this.$dom;
    var config = this.config;
    var unit = config.unit;

    for (let key in unit) {

      
    }
  }

  static create(tagName, attr) {

    var tag = document.createElement(tagName);

    for (let key in attr) {

      tag.setAttribute(key, attr[key]);
    }

    return tag;
  }
}
