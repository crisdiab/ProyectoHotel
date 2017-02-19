/**
 * Created by Cristian on 02/02/2017.
 */
aplicacion.factory('gestionResrvasFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl+'/HabitacionXfecha/:id', {
      id: '@id'
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
