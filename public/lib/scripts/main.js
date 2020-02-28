'use strict';

angular.module("app", ['ngAnimate', 'ui.bootstrap', 'ui.sortable',
//'ngTouch',
'toastr', 'smart-table', 'pathgather.popeye',
//'ui.slimscroll',
// 'ngJsTree',
// 'angular-progress-button-styles',
'superTable', 'superUtil', 'msgCenter', 'superHeader', 'superSidebar', 'superPanel', 'superInputs', 'modalSave', 'authService', 'pages']).constant('layoutSizes', {
  resWidthCollapseSidebar: 1200,
  resWidthHideSidebar: 500
}).run(themeRun);

/** @ngInject */
function themeRun($timeout, $rootScope, $q, superSidebarService) {
  $rootScope.$superSidebarService = superSidebarService;
  var whatToWait = [$timeout(3000)];

  $q.all(whatToWait).then(function () {
    $rootScope.$pageFinishedLoading = true;
  });

  $timeout(function () {
    if (!$rootScope.$pageFinishedLoading) {
      $rootScope.$pageFinishedLoading = true;
    }
  }, 1000);
}
//# sourceMappingURL=main.js.map
