aplicacion.factory('buscarReservaFactory', ['$resource', function($resource) {

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