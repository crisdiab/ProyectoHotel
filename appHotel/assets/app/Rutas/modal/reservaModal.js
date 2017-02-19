

aplicacion.controller('inicioCtrl', [
  '$scope',
'$stateParams',
  '$http',
  'gestionResrvasFactory',
  '$cookies',
  '$uibModalInstance',
  function ($scope,$stateParams, $http,gestionResrvasFactory,$cookies,$uibModalInstance) {

    $scope.habitacionSeleccionada=$stateParams.idHabitacion
    $scope.nuevaReserva={

    }
    $scope.crearReserva=function () {
      gestionResrvasFactory
        .save($scope.nuevaReserva)
        .$promise
        .then(
          function(respuesta) {
            console.log('creo',respuesta)
            toastr.info('se creo la habitacion')
            if ($scope.habitacionForm) {
              $scope.habitacionForm.$setPristine();
              $scope.habitacionForm.$setUntouched();
            }
            $scope.nuevaHabitacion={
              idPiso:$scope.pisoSeleccionado,
              NUMEROHABITACION:'',
              tipoHabitacion:$scope.tipoSeleccionado,
              costo:'',
              descripcion:'',
              capacidad:0,
              estadoH:$scope.estadoSeleccionado,
              foto:''

            }

          },
          function(error) {
            console.log('Error', error);
          }
        );
    }

  }]);
