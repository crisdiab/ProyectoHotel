/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  // tableName: 'cliente',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  attributes: {
    // IDCLIENTE: {
    //   type: 'integer',
    //   required: true,
    //   primaryKey: true,
    //   size: 11
    // },
    NOMBRECLIENTE: {
      type: 'string',
      required: false,
      size: 100
    },
    CEDULACLIENTE: {
      type: 'string',
      required: false,
      size: 100
    },
    TELEFONOCLIENTE: {
      type: 'string',
      required: false,
      size: 100
    },
    CORREOCLIENTE: {
      type: 'string',
      required: false,
      size: 100
    },
    reservas : {
      collection: 'reserva',
      via: 'idCliente'
    },

  }
};
