"use strict";

angular.module("modalSave", []).component("modalSave", {
  templateUrl: "/lib/scripts/components/modalSave/modalSave.html",
  controller: ModalSaveCtrl,
  bindings: {
    title: '<',
    inputs: '<',
    endpoint: '<',
    callback: '='
  }
});
/** @ngInject */
function ModalSaveCtrl($http) {
  var $ctrl = this;
  $ctrl.model = {};
  this.$onInit = function () {};
  $ctrl.save = function () {
    $http.post($ctrl.endpoint, $ctrl.model).then($ctrl.callback.success);
  };
}
//# sourceMappingURL=modalSave.js.map
