angular.module("cardSetting", [])
  .component("cardSetting", {
    templateUrl: "/lib/scripts/components/cardSetting/cardSetting.html",
    controller: CardSettingCtrl,
    bindings: {
      title: '<',
      description:'<',
      number: '<'
    },
  });
  /** @ngInject */
  function CardSettingCtrl(){
      let $ctrl = this;
      this.$onInit = function(){
      };
  }