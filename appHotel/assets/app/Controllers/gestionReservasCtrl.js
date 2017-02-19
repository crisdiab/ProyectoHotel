
/**
 * Created by Cristian on 02/02/2017.
 */
aplicacion.controller('gestionReservasCtrl', [
  '$scope',
'buscarReservaFactory',
  'habitacionFactory',
  'pisosFactory',
  '$http',
  '$cookies',
  function ($scope,buscarReservaFactory,habitacionFactory,pisosFactory, $http,$cookies) {

   //buscar todas las reservas
    $scope.reservas=[]
    $scope.reservasFiltradas=[]
    $scope.buscarReservas=function () {
      pisosFactory
        .query({

        })
        .$promise
        .then(
          function(respuesta) {

            console.log(respuesta)
            for(var i = 0; i<respuesta.length;i++){
              for(var j=0 ; j<respuesta[i].habitaciones.length;j++){
                if(respuesta[i].habitaciones[j].IDRESERVA == 1){
                  $scope.reservas.push(respuesta[i].habitaciones)
                }

              }

            }
            console.log($scope.reservas)
          },
          function(error) {
            console.log('Error', error);
          }
        );
    }
    $scope.buscarReservas();





  }]);
