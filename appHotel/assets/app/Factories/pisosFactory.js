/**
 * Created by crist on 18/02/2017.
 */
aplicacion.factory('pisosFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl+'/Pisohabitacion/:id', {
      id: '@id'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      pisoXid:{
        method: 'GET',
        params: {
          id: '@id'
        }
      }


    });

  return factory;


}]);
