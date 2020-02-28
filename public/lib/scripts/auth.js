'use strict';

/**
 * @author w.aular
 */
(function () {
    'use strict';

    angular.module('auth', ['authService']).controller('AuthCtrl', AuthCtrl);

    /** @ngInject */
    function AuthCtrl($scope, $http, AuthService, $window) {
        $scope.alert = { show: false, message: '' };
        $scope.login = function (user) {
            $http.post('/api/login', user).then(function (response) {
                $scope.alert.show = false;
                var res = response.data;
                if (!res.error) {
                    var user = res.data;
                    AuthService.setToken(user.api_token);
                    $window.location.href = '/dashboard';
                } else {
                    $scope.alert.show = true;
                }
            }).catch(function (err) {
                console.log(err);
            });
        };
    }
})();
//# sourceMappingURL=auth.js.map
