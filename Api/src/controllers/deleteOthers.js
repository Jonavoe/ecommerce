const { Other } = require('../db');

const deleteOthers = async (id) => {
  const others = await Other.findByPk(id);

  if (!others) {
    throw new Error(`La placa base con ID ${id} no existe en la base de datos.`);
  }

  const aux = { ...others };
  await others.destroy();

  return aux;
};

module.exports = deleteOthers;
