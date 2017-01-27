/**
 * PruebaApi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
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

  }
};

