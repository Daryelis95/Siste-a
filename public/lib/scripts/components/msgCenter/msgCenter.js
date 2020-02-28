"use strict";

angular.module("msgCenter", []).component("msgCenter", {
  templateUrl: "/lib/scripts/components/msgCenter/msgCenter.html",
  controller: msgCenterCtrl
});

/** @ngInject */
function msgCenterCtrl($scope, $http) {
  var $ctrl = this;
  $scope.test = "test";
  $http.get('/api/notifications').then(function (response) {
    $scope.notifications = response.data;
  }).catch(function (err) {
    console.log(err);
    $scope.notifications = [];
  });

  $http.get('/api/messages').then(function (response) {
    $scope.messages = response.data;
  }).catch(function (err) {
    console.log(err);
    $scope.messages = [];
  });
}
//# sourceMappingURL=msgCenter.js.map
