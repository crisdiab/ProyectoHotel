/**
 * Serviciosporreserva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'serviciosporreserva',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    IDSERVICIORESERVA: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};