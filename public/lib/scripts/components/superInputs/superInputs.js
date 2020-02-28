"use strict";

angular.module("superInputs", []).component("superInputs", {
  templateUrl: "/lib/scripts/components/superInputs/superInputs.html",
  controller: SuperInputsCtrl,
  bindings: {
    data: '<',
    model: '='
  }
});
/** @ngInject */
function SuperInputsCtrl() {
  var $ctrl = this;
  this.$onInit = function () {
    $ctrl.required = $ctrl.data.required ? 'required' : '';
  };
}
//# sourceMappingURL=superInputs.js.map
