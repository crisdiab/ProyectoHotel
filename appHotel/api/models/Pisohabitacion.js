/**
 * Pisohabitacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  // tableName: 'pisohabitacion',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  attributes: {
    // IDPISO: {
    //   type: 'integer',
    //   required: true,
    //   primaryKey: true,
    //   size: 11
    // },
    IDHOTEL: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    NOMBREPISO: {
      type: 'string',
      required: false,
      size: 20
    }
  }
};
