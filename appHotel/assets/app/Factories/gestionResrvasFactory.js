/**
 * Created by Cristian on 02/02/2017.
 */
aplicacion.factory('gestionReservasFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl+'/CLIENTE/:idCliente', {
      idCliente: '@idCliente'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idCliente: '@idCliente'
        }
      }


    });

  return factory;


}]);
