'use strict';

/**
 * @author w.aular
 */
(function () {
    'use strict';

    angular.module('pages', []).controller('DashboardCtrl', DashboardCtrl);

    /** @ngInject */
    function DashboardCtrl($scope, $http, superSidebarService, AuthService) {
        superSidebarService.setCurrentMenu('dashboard');
        console.log(AuthService.getToken());
    }
})();
//# sourceMappingURL=DashboardCtrl.js.map
