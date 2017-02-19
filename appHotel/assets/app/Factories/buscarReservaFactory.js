aplicacion.factory('buscarReservaFactory', ['$resource', function($resource) {

    var factory = $resource(
        masterUrl+'/Reserva/:id', {
            id  : '@id'
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
