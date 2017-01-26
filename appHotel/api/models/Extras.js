/**
 * Extras.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'extras',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    IDEXTRA: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    NOMBRESERVICIO: {
      type: 'string',
      required: false,
      size: 100
    },
    PRECIOXDIA: {
      type: 'decimal',
      required: false
    }
  }
};