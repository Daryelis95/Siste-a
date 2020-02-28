/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('superSidebar')
      .directive('superSidebarToggleMenu', superSidebarToggleMenu)
      .directive('baSidebarToggleMenu', baSidebarToggleMenu)
      .directive('baSidebarCollapseMenu', baSidebarCollapseMenu)
      .directive('baSidebarTogglingItem', baSidebarTogglingItem)
      .controller('BaSidebarTogglingItemCtrl', BaSidebarTogglingItemCtrl)
      .directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu)
      .directive('baUiSrefToggler', baUiSrefToggler);

   /** @ngInject */
   function superSidebarToggleMenu(superSidebarService) {
       return {
         restrict: 'A',
         link: function(scope, elem){
            elem.on('click',function($evt){
              $evt.originalEvent.$sidebarEventProcessed = true;
              scope.$apply(function() {
                superSidebarService.toggleMenuCollapsed(); 
              });
            });
         }
       }
   }

  /** @ngInject */
  function baSidebarToggleMenu(superSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          scope.$apply(function() {
            superSidebarService.toggleMenuCollapsed();
          });
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarCollapseMenu(superSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          if (!superSidebarService.isMenuCollapsed()) {
            scope.$apply(function() {
              superSidebarService.setMenuCollapsed(true);
            });
          }
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarTogglingItem() {
    return {
      restrict: 'A',
      controller: 'BaSidebarTogglingItemCtrl'
    };
  }

  /** @ngInject */
  function BaSidebarTogglingItemCtrl($scope, $element, $attrs, superSidebarService) {
    var vm = this;
    var menuItem = vm.$$menuItem = $scope.$eval($attrs.baSidebarTogglingItem);
    if (menuItem && menuItem.subMenu && menuItem.subMenu.length) {
      vm.$$expandSubmenu = function() { console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu') };
      vm.$$collapseSubmenu = function() { console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu') };

      var subItemsStateRefs = superSidebarService.getAllStateRefsRecursive(menuItem);

      vm.$expand = function() {
        vm.$$expandSubmenu();
        $element.addClass('ba-sidebar-item-expanded');
      };

      vm.$collapse = function() {
        vm.$$collapseSubmenu();
        $element.removeClass('ba-sidebar-item-expanded');
      };

      vm.$toggle = function() {
        $element.hasClass('ba-sidebar-item-expanded') ?
            vm.$collapse() :
            vm.$expand();
      };

      if (superSidebarService.isCurrent) {
        $element.addClass('ba-sidebar-item-expanded');
      }

      $scope.$on('$stateChangeStart', function (event, toState) {
        if ($element.hasClass('ba-sidebar-item-expanded')) {
          vm.$collapse();
          $element.removeClass('ba-sidebar-item-expanded');
        }
      });

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        if ( !$element.hasClass('ba-sidebar-item-expanded')) {
          vm.$expand();
          $element.addClass('ba-sidebar-item-expanded');
        }
      });
    }

    function _isState(state) {
      return state && subItemsStateRefs.some(function(subItemState) {
            return state.name.indexOf(subItemState) == 0;
          });
    }
  }

  /** @ngInject */
  function baUiSrefTogglingSubmenu() {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: function(scope, el, attrs, baSidebarTogglingItem) {
        baSidebarTogglingItem.$$expandSubmenu = function() { el.slideDown(); };
        baSidebarTogglingItem.$$collapseSubmenu = function() { el.slideUp(); };
      }
    };
  }

  /** @ngInject */
  function baUiSrefToggler(superSidebarService) {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: function(scope, el, attrs, baSidebarTogglingItem) {
        el.on('click', function() {
          if (superSidebarService.isMenuCollapsed()) {
            // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
            // This should not affect mobiles, because on mobiles sidebar should be hidden at all
            scope.$apply(function() {
              superSidebarService.setMenuCollapsed(false);
            });
            baSidebarTogglingItem.$expand();
          } else {
            baSidebarTogglingItem.$toggle();
          }
        });
      }
    };
  }

})();
