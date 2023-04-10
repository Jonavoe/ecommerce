const { Motherboards } = require('../db');

const deleteMotherboards = async (id) => {
  const motherboards = await Motherboards.findByPk(id);

  if (!motherboards) {
    throw new Error(`La placa base con ID ${id} no existe en la base de datos.`);
  }

  const aux = { ...motherboards };
  await motherboards.destroy();

  return aux;
};

module.exports = deleteMotherboards;
