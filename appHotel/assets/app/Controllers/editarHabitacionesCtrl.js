/**
 * Created by crist on 19/02/2017.
 */
aplicacion.controller('editarHabitacionesCtrl', [
  '$scope',
'habitacionFactory',
  '$http',
  '$filter',
  '$cookies',
  function ($scope,habitacionFactory, $http,$filter,$cookies) {

$scope.habitaciones=[];

    $scope.estados = [
      {value: 1, text: 'Habilitada'},
      {value: 2, text: 'En mantenimiento'},

    ];



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
    $scope.actualizarHabitacion=function (habitacion) {

      habitacionFactory
        .actualizar({
        id: habitacion.id
      }, {
          foto:habitacion.foto,
          capacidad:habitacion.capacidad,
          costo:habitacion.costo,
          descripcion:habitacion.descripcion,
          estadoH:habitacion.estadoH


      })
        .$promise
        .then(
          function (respuesta) {

            console.log(respuesta)
            toastr.success('Datos modificados correctamente')
            console.log('edito correctamente')

          },
          function (error) {
            console.log(error);
          });
    }
    $scope.showStatus = function(user) {
      var selected = [];
      if(user.estadoH) {
        selected = $filter('filter')($scope.estados, {text: user.estadoH});
      }
      return selected.length ? selected[0].text : 'No establecido';
    };





  }]);
