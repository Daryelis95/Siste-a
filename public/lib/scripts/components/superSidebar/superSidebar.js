"use strict";

angular.module("superSidebar", []).component("superSidebar", {
  templateUrl: "/lib/scripts/components/superSidebar/superSidebar.html",
  controller: superSidebarCtrl
});

/** @ngInject */
function superSidebarCtrl($scope, $element, $timeout, superSidebarService, superUtilService, layoutSizes) {
  var $ctrl = this;
  var jqWindow = $(window);
  $scope.menuItems = [];
  $ctrl.superSidebarService = superSidebarService;
  this.$onInit = function () {};
  $scope.menuItems = superSidebarService.getMenuItems();

  $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

  $scope.hoverItem = function ($event) {
    $scope.showHoverElem = true;
    $scope.hoverElemHeight = $event.currentTarget.clientHeight;
    var menuTopValue = 66;
    $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
  };

  $scope.$on('$stateChangeSuccess', function () {
    if (superSidebarService.canSidebarBeHidden()) {
      superSidebarService.setMenuCollapsed(true);
    }
  });

  $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;
  jqWindow.on('click', _onWindowClick);
  jqWindow.on('resize', _onWindowResize);
  this.$onDestroy = function () {
    jqWindow.off('click', _onWindowClick);
    jqWindow.off('resize', _onWindowResize);
  };

  function _onWindowClick($evt) {
    if (!superUtilService.isDescendant($element[0], $evt.target) && !$evt.originalEvent.$sidebarEventProcessed && !superSidebarService.isMenuCollapsed() && superSidebarService.canSidebarBeHidden()) {
      $evt.originalEvent.$sidebarEventProcessed = true;
      $timeout(function () {
        superSidebarService.setMenuCollapsed(true);
      }, 10);
    }
  }

  // watch window resize to change menu collapsed state if needed
  function _onWindowResize() {
    var newMenuCollapsed = superSidebarService.shouldMenuBeCollapsed();
    var newMenuHeight = _calculateMenuHeight();
    if (newMenuCollapsed != superSidebarService.isMenuCollapsed() || $scope.menuHeight != newMenuHeight) {
      $scope.$apply(function () {
        $scope.menuHeight = newMenuHeight;
        superSidebarService.setMenuCollapsed(newMenuCollapsed);
      });
    }
  }

  function _calculateMenuHeight() {
    return $element[0].childNodes[0].clientHeight - 84;
  }
}
//# sourceMappingURL=superSidebar.js.map
