/**
 * Created by Cristian on 26/01/2017.
 */
var aplicacion = angular.module('Hotel',[
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'xeditable',
  'ngAnimate',
  'ngCookies'
]);

aplicacion.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/inicio");


  $stateProvider
    .state('inicio', {
      url: "/inicio",
      templateUrl: "Rutas/inicio.html",
      controller:'inicioCtrl',
      // data: {
      //   nivelAcceso: 0,
      //   loginRequerido: false
      // }
    })
      .state('gestionReserva', {
          url: "/gestionReserva",
          templateUrl: "Rutas/gestionReservas.html",
          controller:'gestionReservasCtrl',
          // data: {
          //   nivelAcceso: 0,
          //   loginRequerido: false
          // }
      })
      .state('buscarReserva', {
          url: "/buscar",
          templateUrl: "Rutas/buscarReserva.html",
          controller:'buscarReservaCtrl',
          // data: {
          //   nivelAcceso: 0,
          //   loginRequerido: false
          // }
      })
  ;


}]);

// aplicacion.run(function ($rootScope, $cookies, $state)  {
//   console.log('entro run');
//
//   $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
//
//     var requiereLogin = toState.data.loginRequerido;
//     var nivelAcceso = toState.data.nivelAcceso;
//
//     if (requiereLogin) {
//       console.log('Si require Login');
//       if ($cookies.get('UsuarioId')) {
//         console.log('hizo Login');
//
//         console.log(nivelAcceso);
//         if (nivelAcceso == 1 && $cookies.get('UsuarioTipo') == 1) {
//           console.log('puede entrar')
//           //                    event.preventDefault();
//           //                    return $state.go('user')
//         } else {
//           if (nivelAcceso == 2 && $cookies.get('UsuarioTipo') == 2) {
//             console.log('puede entrar')
//           } else {
//             event.preventDefault();
//             return $state.go('login')
//           }
//
//         }
//
//
//       } else {
//         console.log('No ha hecho Login');
//         event.preventDefault();
//         return $state.go('login')
//       }
//     } else {
//       console.log('No requiere login');
//     }
//
//   });
//
// });
//
