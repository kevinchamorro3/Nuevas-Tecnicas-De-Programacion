//importar joi
const joi = require("joi");
//crear schema
const user = joi.object({
  nombre: joi.string().min(2).max(50).empty().required(),
  apellido: joi.string().min(2).max(50).empty().required(),
});

module.exports = { user };
