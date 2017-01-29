/**
 * Tipohabitacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  // tableName: 'tipohabitacion',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  attributes: {
    // IDTIPOHABITACION: {
    //   type: 'integer',
    //   required: true,
    //   primaryKey: true,
    //   size: 11
    // },
    COSTO: {
      type: 'decimal',
      required: false
    },
    TIPO: {
      type: 'string',
      required: false,
      size: 100
    },
    CAPACIDAD: {
      type: 'integer',
      required: false,
      size: 11
    },
    DESCRIPCIONHABITACION: {
      type: 'string',
      required: false,
      size: 100
    },
    tipoHabitaciones:{
      collection: 'habitacion',
      via:'idTipoHabitacion'
    }
  }
};
