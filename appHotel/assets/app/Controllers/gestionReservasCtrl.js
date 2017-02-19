
/**
 * Created by Cristian on 02/02/2017.
 */
aplicacion.controller('gestionReservasCtrl', [
  '$scope',
'buscarReservaFactory',
  '$http',
  '$cookies',
  function ($scope,buscarReservaFactory, $http,$cookies) {

   //buscar todas las reservas
    $scope.reservas=[]
    $scope.buscarReservas=function () {
      buscarReservaFactory
        .query({

        })
        .$promise
        .then(
          function(respuesta) {

            $scope.reservas=respuesta;
          },
          function(error) {
            console.log('Error', error);
          }
        );
    }
    $scope.buscarReservas();



  }]);
