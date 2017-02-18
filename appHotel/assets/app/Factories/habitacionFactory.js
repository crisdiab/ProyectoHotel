/**
 * Created by crist on 18/02/2017.
 */
aplicacion.factory('habitacionFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl+'/Habitacion/:id', {
      id: '@id'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }


    });

  return factory;


}]);
