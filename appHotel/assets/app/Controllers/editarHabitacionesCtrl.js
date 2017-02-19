/**
 * Created by crist on 19/02/2017.
 */
aplicacion.controller('editarHabitacionesCtrl', [
  '$scope',
'habitacionFactory',
  '$http',
  '$cookies',
  function ($scope,habitacionFactory, $http,$cookies) {

$scope.habitaciones=[];



    $scope.BuscarH=function () {
      habitacionFactory
        .query({
        })
        .$promise
        .then(
          function(respuesta) {

           $scope.habitaciones=respuesta;
           console.log('habitaciones',$scope.habitaciones)
          },
          function(error) {
            console.log('Error', error);
          }
        );
    };
    $scope.BuscarH();




  }]);
