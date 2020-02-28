angular.module("superTable", [])
  .component("superTable", {
    templateUrl: "/lib/scripts/components/superTable/superTable.html",
    controller: SuperTableCtrl,
    bindings: {
      header: '<',
      data: '<',
      options: '<'
    },
  })
.filter('startFromGrid', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }});
  /** @ngInject */
  function SuperTableCtrl($scope){
      let $ctrl = this;
      this.$onInit = function(){
        $scope.currentPage = 0;
        $scope.pageSize = $ctrl.options.limit;
        $scope.pages = [];
        $scope.filtered = {};
        configPages();
        function configPages() {
          $scope.pages.length = 0;
          var ini = $scope.currentPage - 4;
          var fin = $scope.currentPage + 5;
          if (ini < 1) {
            ini = 1;
            if (Math.ceil($ctrl.data.length / $scope.pageSize) > 10)
              fin = 10;
            else
              fin = Math.ceil($ctrl.data.length / $scope.pageSize);
          } else {
            if (ini >= Math.ceil($ctrl.data.length / $scope.pageSize) - 10) {
              ini = Math.ceil($ctrl.data.length / $scope.pageSize) - 10;
              fin = Math.ceil($ctrl.data.length / $scope.pageSize);
            }
          }
          if (ini < 1) ini = 1;
          for (var i = ini; i <= fin; i++) {
            $scope.pages.push({
              no: i
            });
          }
  
          if ($scope.currentPage >= $scope.pages.length)
            $scope.currentPage = $scope.pages.length - 1;
        }
 
        $scope.filterBy = function(field) {
        }
  
        $scope.setPage = function(index) {
          $scope.currentPage = index - 1;
        };
      };
  }