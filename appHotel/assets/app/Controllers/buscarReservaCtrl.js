aplicacion.controller('buscarReservaCtrl', [
    '$scope',

    '$http',
    '$cookies',
    function ($scope, $http,$cookies) {

        $scope.mostrarBusqueda=false;
        $scope.Habitaciones=[];
        $scope.HabitacionesXtipo=[]
        $scope.TiposH = ['Simple','Doble','Triple','Familiar'];
        $scope.fecha={
            inicio:{
              completa:'',
              dia:0,
              mes:0,
              year:0,
              hora:10,
              min:0

            },
          fin:{
            completa:'',
            dia:0,
            mes:0,
            year:0,
            hora:10,
            min:0
          }
        }
        $scope.fechaInicio='';
        $scope.fechaFin='';
        $scope.diaJuliano={
          entrada:0,
          inicial:0,
          final:0
        }

      $scope.separarFecha= function(fecha){

          console.log('separar fecha',fecha)// $scope.splitfecha= fecha
             var year = fecha.split('-')

            return year;


        }
      $scope.Juliano= function (DD,MM,YY,HR,MN) {



           console.log('valor de dd',DD)
           console.log('valor de MM',MM)
           console.log('valor de YY',YY)
           console.log('valor de HR',HR)
           console.log('valor de MN',MN)

            with (Math) {

                HR = HR + (MN / 60);
                console.log('CALCULO HR',HR);

                GGG = 1;

                if (YY <= 1585) GGG = 0;

                JD = -1 * floor(7 * (floor((MM + 9) / 12) + YY) / 4);

                S = 1;

                if ((MM - 9)<0) S=-1;

                A = abs(MM - 9);

                J1 = floor(YY + S * floor(A / 7));

                J1 = -1 * floor((floor(J1 / 100) + 1) * 3 / 4);

                JD = JD + floor(275 * MM / 9) + DD + (GGG * J1);

                JD = JD + 1721027 + 2 * GGG + 367 * YY - 0.5;

                JD = JD + (HR / 24);
                console.log('ESTO ES JD',JD);


            }


                return JD;
        }
        $scope.obtenerHabitaciones = function () {
            $http.get(masterUrl+'/Habitacion')
                .then(
                    function success(data) {

                        $scope.Habitaciones = data.data;
                        console.log('estas son las habitaciones',$scope.Habitaciones)

                    },
                    function error(err) {
                        console.log(err);
                    });
        }
        $scope.obtenerHabitaciones()
        $scope.nuevaBusqueda = function () {
            $scope.mostrarBusqueda=false;
            $scope.HabitacionesXtipo=[];
        }
        $scope.buscarHabitacion=function (fechaInicio,fechaFin) {
          console.log('llego inico',fechaInicio)
          $scope.fecha.inicio.completa=$scope.separarFecha(fechaInicio)
          console.log("fecha inicio", $scope.fecha.inicio.completa)
          $scope.fecha.fin.completa=fechaFin.substring(0,10);

        }

$scope.datapicler=function () {
  $('input[name="daterange"]').daterangepicker();
}




    }]);
