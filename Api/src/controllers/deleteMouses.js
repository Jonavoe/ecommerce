const { Mouses } = require('../db');

const deleteMouses = async (id) => {
  const mouses = await Mouses.findByPk(id);

  if (!mouses) {
    throw new Error(`La placa base con ID ${id} no existe en la base de datos.`);
  }

  const aux = { ...mouses };
  await mouses.destroy();

  return aux;
};

module.exports = deleteMouses;
