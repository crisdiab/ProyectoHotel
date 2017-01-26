/**
 * Hotel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'hotel',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    IDHOTEL: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    DESCRIPCIONHOTEL: {
      type: 'string',
      required: false,
      size: 100
    }
  }
};