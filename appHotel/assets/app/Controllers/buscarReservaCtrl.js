aplicacion.controller('buscarReservaCtrl', [
    '$scope',

    '$http',
    '$cookies',
    function ($scope, $http,$cookies) {



       Sscope.convertirAdiaJuliano = function compute(form) {

            DD=eval(form.nday.value)

            MM=eval(form.nmonth.value)

            YY=eval(form.nyear.value)

            HR=eval(form.nhour.value)

            MN=eval(form.nminute.value)

            with (Math) {

                HR = HR + (MN / 60);

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

            }

            form.result.value = JD;

        }

// done hiding from old browsers -->




    }]);