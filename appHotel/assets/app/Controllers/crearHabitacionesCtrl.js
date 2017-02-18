  /**
   * Created by crist on 18/02/2017.
   */
  aplicacion.controller('crearHabitacionesCtrl', [
    '$scope',
  'pisosFactory',
    'habitacionFactory',
    '$http',
    '$cookies',
    function ($scope, pisosFactory,habitacionFactory,$http,$cookies) {

    //variables
      $scope.pisos=[];
      $scope.tipos=['Simple','Doble','Triple','Familiar'];
      $scope.estados=['Habilitada','En Mantenimiento'];
      $scope.pisoSeleccionado='';
      $scope.tipoSeleccionado='';
      $scope.estadoSeleccionado='';
      $scope.nuevaHabitacion={
        idPiso:$scope.pisoSeleccionado,
        NUMEROHABITACION:'',
        capacidad:0,
        tipoHabitacion:$scope.tipoSeleccionado,
        costo:'',
        descripcion:'',
        foto:'',

        estadoH:$scope.estadoSeleccionado,

      }
      $scope.insertar=false;



      //funciones
      $scope.buscarPisos=function () {

        pisosFactory
          .query({

          })
          .$promise
          .then(
            function(respuesta) {

              for(var i=0; i<respuesta.length;i++){
                if(respuesta[i].NOMBREPISO=='Lobby'||respuesta[i].NOMBREPISO=='13avo'){
                  console.log('es looby o 13')
                }
                else{
                  $scope.pisos.push(respuesta[i]) ;
                }
              }


              console.log('pisos',$scope.pisos);
            },
            function(error) {
              console.log('Error', error);
            }
          );
      };
      $scope.buscarPisos();
      $scope.contarHabitaciones=function(idHabitacion){

        for(var i=0;i<$scope.pisos.length;i++){
          if($scope.pisos[i].id==idHabitacion){
            console.log('estamos ingresando datos en el piso',idHabitacion)
            console.log('total de habitaciones en el piso',$scope.pisos[i].habitaciones.length)
            if($scope.pisos[i].habitaciones.length<5){
              console.log('insertar que esta',$scope.insertar)
              $scope.insertar=true;
              console.log('insertar que cambio',$scope.insertar)
            }

          }
        }
        if($scope.insertar==true){
          habitacionFactory
            .save($scope.nuevaHabitacion)
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
        }else{
          toastr.error('No se puede crear mas habitaciones')
        }
      }
      $scope.crearHabitacion=function (idselec) {
        //buscar cantidad de las habitaciones por piso
      $scope.contarHabitaciones(idselec);



      }



    }]);
