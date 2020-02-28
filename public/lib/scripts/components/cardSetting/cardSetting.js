"use strict";

angular.module("cardSetting", []).component("cardSetting", {
  templateUrl: "/lib/scripts/components/cardSetting/cardSetting.html",
  controller: CardSettingCtrl,
  bindings: {
    title: '<',
    description: '<',
    number: '<'
  }
});
/** @ngInject */
function CardSettingCtrl() {
  var $ctrl = this;
  this.$onInit = function () {};
}
//# sourceMappingURL=cardSetting.js.map
