'use strict';

(function () {
    'use strict';

    angular.module('authService', []).provider('AuthService', AuthService);

    /** @ngInject */
    function AuthService() {

        /** @ngInject */
        this.$get = function () {
            return new _factory();

            function _factory() {

                this.getToken = function () {
                    return window.sessionStorage.getItem("token");
                };
                this.setToken = function (token) {
                    window.sessionStorage.setItem("token", token);
                };
            }
        };
    }
})();
//# sourceMappingURL=auth.service.js.map
