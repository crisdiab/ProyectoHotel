aplicacion.controller('buscarReservaCtrl', [
    '$scope',

    '$http',
    '$cookies',
    function ($scope, $http,$cookies) {

        mostrarBusqueda=false;
        $scope.Habitaciones=[];
        $scope.HabitacionesXtipo=[]
        $scope.TiposH = ['Simple','Doble','Triple','Familiar'];
        $scope.fecha={
            diaInicio:0,
            mesInicio:0,
            yearInicio:0,
            diaFin:0,
            mesFin:0,
            yearFin:0,
            horas:12,
            minutos:0
        }
        $scope.fechaInicio='2016-02-14';
        $scope.fechaFin='2017-03-17';
        $scope.diaJuliano=0;
        $scope.JulianoInicio=0;
        $scope.JulianoFin=0;
        $scope.separarFechaInicio= function(fecha){
            $scope.splitfecha= fecha
            $scope.year = fecha.split('-')

            $scope.fecha.diaInicio= parseInt($scope.year[2]);
            $scope.fecha.mesInicio=parseInt($scope.year[1]);
            $scope.fecha.yearInicio =parseInt($scope.year[0]);


        }
        $scope.separarFechaFin= function(fecha){
            $scope.splitfecha= fecha
            $scope.year2 = fecha.split('-')

            $scope.fecha.diaFin= parseInt($scope.year2[2]);
            $scope.fecha.mesFin=parseInt($scope.year2[1]);
            $scope.fecha.yearFin =parseInt($scope.year2[0]);


        }




        $scope.tipoHseleccionado=''


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


       // $scope.separarFecha($scope.fechaInicio)
       // $scope.prueba=$scope.Juliano(12,04,2016,12,0)
        //console.log('veamos prueba',$scope.prueba);


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
        $scope.buscarHabitaciones=function(Finicion,Ffin,tipo, arregloHabitaciones){

            $scope.mostrarBusqueda=true;
            console.log('llego Finico',Finicion)
            console.log('llego ffin',Ffin)
            console.log('llego tipo',tipo)
            // $scope.separarFechaInicio(Finicion);
            // $scope.separarFechaFin(Ffin);
            for(var i = 0; i<arregloHabitaciones.length;i++){
                if(tipo== arregloHabitaciones[i].idTipoHabitacion.TIPO){
                    if(arregloHabitaciones[i].fechas.length==0){
                        console.log(' entro a comparar fechas no tiene reservas en ninguna fecha',arregloHabitaciones[i].fechas.length)
                        $scope.HabitacionesXtipo.push(arregloHabitaciones[i]);
                    }else{

                    }

                }

            }



        }
        $scope.nuevaBusqueda = function () {
            $scope.mostrarBusqueda=false;
            $scope.HabitacionesXtipo=[];
        }

// done hiding from old browsers -->




    }]);