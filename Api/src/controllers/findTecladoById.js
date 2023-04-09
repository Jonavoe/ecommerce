const { Teclado } = require("../db");

const findTecladoById = async (id) => {
  const teclado = await Teclado.findByPk(id);
  return teclado;
};

module.exports = findTecladoById;
