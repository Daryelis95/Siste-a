"use strict";

angular.module("superHeader", []).component("superHeader", {
  controller: superHeaderCtrl,
  bindings: {
    title: '<',
    token: '<'
  },
  templateUrl: "/lib/scripts/components/super-header/super-header.html"
});

/** @ngInject */
function superHeaderCtrl() {
  var $ctrl = this;
  this.$onInit = function () {};
}
//# sourceMappingURL=super-header.js.map
