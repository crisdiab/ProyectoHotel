aplicacion.controller('buscarReservaCtrl', [
    '$scope',

    '$http',
    '$cookies',
    function ($scope, $http,$cookies) {
    //<editor-fold desc="variables"
        $scope.mostrarBusqueda=false;
        $scope.Habitaciones=[];
        $scope.Habitacionesfiltradas=[];
        $scope.TiposH = ['Simple','Doble','Triple','Familiar'];
        $scope.tipoHseleccionado=''
        $scope.fecha={
            inicio:{
              completa:[],
              dia:0,
              mes:0,
              year:0,
              hora:10,
              min:0

            },
          fin:{
            completa:[],
            dia:0,
            mes:0,
            year:0,
            hora:10,
            min:0
          }
        }
        $scope.diaJuliano={
          entrada:0,
          inicial:0,
          final:0

        }
        $scope.date = {startDate: null, endDate: null};
        $scope.datosBusqueda={
          adultos:0,
          ninios:0,
        };
        $scope.totalHuespedes=0;
        $scope.presupuesto=0;
        //</editor-fold>

      //<editor-fold desc="Calcular total de huespedes">
      $scope.total=function (adultos ,ninios) {
      console.log('calcula total')
        return  $scope.totalHuespedes=adultos+ninios;
      }




      //</editor-fold>
      $scope.separarFecha= function(fecha){

          console.log('separar fecha',fecha)// $scope.splitfecha= fecha
             var year = fecha.split('/')

            return year;


        }
      $scope.Juliano= function (DD,MM,YY,HR,MN) {

            with (Math) {

                HR = HR + (MN / 60);
               // console.log('CALCULO HR',HR);

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
               // console.log('ESTO ES JD',JD);


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
        $scope.buscarHabitacion=function (habitaciones) {
          //<editor-fold desc="Convertir a julianos las dos fechas">
        //convertir primero las dos fechas en duas julianos
          $scope.fecha.inicio.completa=$scope.separarFecha(moment(  $scope.date.startDate).format('L'));
          $scope.fecha.inicio.dia=$scope.fecha.inicio.completa[1];
          $scope.fecha.inicio.mes=$scope.fecha.inicio.completa[0];
          $scope.fecha.inicio.year=$scope.fecha.inicio.completa[2];
          $scope.fecha.fin.completa=$scope.separarFecha(moment(  $scope.date.endDate).format('L'));
          $scope.fecha.fin.dia=$scope.fecha.fin.completa[1];
          $scope.fecha.fin.mes=$scope.fecha.fin.completa[0];
          $scope.fecha.fin.year=$scope.fecha.fin.completa[2];
        $scope.diaJuliano.inicial= Math.round( $scope.Juliano(parseInt( $scope.fecha.inicio.dia),
            parseInt( $scope.fecha.inicio.mes),
            parseInt( $scope.fecha.inicio.year),$scope.fecha.inicio.hora,$scope.fecha.inicio.min));
          $scope.diaJuliano.final=Math.round($scope.Juliano(parseInt( $scope.fecha.fin.dia),
            parseInt( $scope.fecha.fin.mes),
            parseInt( $scope.fecha.fin.year),$scope.fecha.fin.hora,$scope.fecha.fin.min))
          //  </editor-fold>

          //<editor-fold desc="guardar habitaciones de la nueva busqueda">
          for(var i=0;i<habitaciones.length;i++){
              if(habitaciones[i].fechas.length==0){
                console.log('entro sin fechas de reserva')
                console.log('capacidad de la habitacion',habitaciones[i].capacidad)
                console.log('compara con  total hues',$scope.totalHuespedes)
                console.log('costo h',habitaciones[i].costo)
                console.log('compara con  presupuesto',$scope.presupuesto)
                console.log('tipo h',habitaciones[i].tipoHabitacion)
                console.log('compara con  tipo',$scope.tipoHseleccionado)
                //no tiene reservas
                //capacidad y precio
                if( $scope.totalHuespedes<=habitaciones[i].capacidad &&
                  habitaciones[i].costo<=$scope.presupuesto&&
                habitaciones[i].tipoHabitacion==$scope.tipoHseleccionado){
                  console.log('cumple todo')
                  $scope.Habitacionesfiltradas.push(habitaciones[i]);

                }else{
                  console.log('no cumple')
                }


            }else{
                var contador=0;
                for(var j=0; j<habitaciones[i].fechas.length;j++){
                  for(var k=$scope.diaJuliano.inicial;k<$scope.diaJuliano.final;k++){
                    if(habitaciones[i].fechas[j].fechaReserva==k){
                      contador++;
                    }

                      }

                }
                console.log('contador',contador)
                if(contador==0){
                  if($scope.totalHuespedes<=habitaciones[i].capacidad&&habitaciones[i].costo<=$scope.presupuesto){
                    $scope.Habitacionesfiltradas.push(habitaciones[i]);
                  }
                }

              }
          }

            console.log('estas son las habitaciones filtras',$scope.Habitacionesfiltradas)
          //</editor-fold>

        }






    }]);
