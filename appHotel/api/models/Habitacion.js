/**
 * Habitacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  // tableName: 'habitacion',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  attributes: {
    // IDHABITACION: {
    //   type: 'string',
    //   required: true,
    //   primaryKey: true,
    //   size: 10
    // },
    idPiso: {
     model: 'Pisohabitacion'
    },
    IDRESERVA: {
    model : 'Reserva'
    },

    NUMEROHABITACION: {
      type: 'string',
      required: false,
      size: 40
    },
   tipoHabitacion:{
      type:'string'
   },
    costo:{
      type:'float',

    },
    descripcion:{
      type:'string'
    },
    fechas:{
      collection:'HabitacionXfecha',
      via:'idHabitacion'
    },
    estadoH:{
      type:'string',
      defaultsTo : 'Habilitada'
    },
    capacidad:{
      type:'integer',
      defaultsTo : 0
    },
    foto:{
      type:'string',
      defaultsTo: ''
    }
  }
};
