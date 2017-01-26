/**
 * Reserva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  // tableName: 'reserva',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  attributes: {
    // IDRESERVA: {
    //   type: 'integer',
    //   required: true,
    //   primaryKey: true,
    //   size: 11
    // },
    IDCLIENTE: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    CHECKIN: {
      type: 'date',
      required: false
    },
    CHECKOUT: {
      type: 'date',
      required: false
    },
    FECHADERESERVA: {
      type: 'date',
      required: false
    },
    TOTALEXTRA: {
      type: 'decimal',
      required: false
    },
    TOTALRESERVA: {
      type: 'decimal',
      required: false
    },
    TOTALAPAGAR: {
      type: 'decimal',
      required: false
    }
  }
};
