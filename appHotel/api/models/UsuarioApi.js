/**
 * UsuarioApi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      columnName: 'id'
    },
    nombre: {
      type: 'string',
      required: true

    },
    apellido: {
      type: 'string',
      required: true

    },
    cedula: {
      type: 'string',
      unique: true,
      required: true

    },

    usuario: {
      type: 'string',
      unique: true,
      defaultsTo:'',

    },
    password: {
      type: "string",
      unique: true,

    },
    nivelAcceso: {
      type: "integer",
      defaultsTo:1,


    },

  }
};

