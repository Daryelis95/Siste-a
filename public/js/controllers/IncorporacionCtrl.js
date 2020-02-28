'use strict';

/**
 * @author D.Piñate
 */
(function () {
    'use strict';

    angular.module('pages', []).controller('IncorporacionCtrl', IncorporacionCtrl);

    /** @ngInject */
    function IncorporacionCtrl($scope, $http, superSidebarService , $window , Popeye) {
        superSidebarService.setCurrentMenu('incorporacion');

        $scope.header = [{
            sort:'id',
            name: 'Id',
            placeholder: 'Id',
            filter: false
        },{
            sort:'cedula',
            name: 'Cedula',
            placeholder: 'cedula',
            filter: true
        },{
            sort:'nombres',
            name: 'Nombre',
            placeholder: 'Nombre',
            filter: true
        },{
            sort:'apellidos',
            name:'Apellido',
            placeholder:'apellido',
            filter:'true'
        },{
            sort:'created_at',
            name:'Fecha de Creacion',
            placeholder:'Fecha De Creacion',
            filter:'true'
        },{
            sort:'updated_at',
            name:'Fecha de Actualizacion',
            placeholder:'Fecha Actualizada',
            filter:'true'
        }];
        $scope.noBeneficiadosTable = [];
        $scope.beneficiadosTable = [];

        $scope.options = {
            limit: 5,
            showView: false,
            view : function(item){

                $window.location.href = '/incorporacion/'+ item.id;
            }
        }
    
      //conexion de servicio
        $http.get('/api/incorporacion/noBeneficiados').then(function(response){

            $scope.incorporacionTable = response.data;

            $scope.noBeneficiadosTable = response.data;

        });
       
        $http.get('/api/incorporacion/beneficiados').then(function(response){
            $scope.beneficiadosTable = response.data;
        });
    };
})();
