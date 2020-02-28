'use strict';

(function () {
  'use strict';

  angular.module('superSidebar').provider('superSidebarService', superSidebarServiceProvider);

  /** @ngInject */
  function superSidebarServiceProvider() {
    var staticMenuItems = [];

    this.addStaticItem = function () {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = function (layoutSizes) {
      return new _factory();

      function _factory() {

        var isMenuCollapsed = shouldMenuBeCollapsed();
        var currentMenu = 'dashboard';
        this.getMenuItems = function () {
          return menu;
        };

        this.isCurrent = function (stateRef) {
          return stateRef === currentMenu;
        };
        this.setCurrentMenu = function (newCurrentMenu) {
          currentMenu = newCurrentMenu;
        };

        this.getAllStateRefsRecursive = function (item) {
          var result = [];
          _iterateSubItems(item);
          return result;

          function _iterateSubItems(currentItem) {
            currentItem.subMenu && currentItem.subMenu.forEach(function (subItem) {
              subItem.stateRef && result.push(subItem.stateRef);
              _iterateSubItems(subItem);
            });
          }
        };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        this.setMenuCollapsed = function (isCollapsed) {
          isMenuCollapsed = isCollapsed;
        };

        this.isMenuCollapsed = function () {
          return isMenuCollapsed;
        };

        this.toggleMenuCollapsed = function () {
          isMenuCollapsed = !isMenuCollapsed;
        };

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }
      }
    };
  }
})();
//# sourceMappingURL=superSidebar.service.js.map
