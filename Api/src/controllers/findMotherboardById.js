const { Motherboards } = require("../db");

const findMotherboardById = async (id) => {
  const motherboard = await Motherboards.findByPk(id);
  return motherboard;
};

module.exports = findMotherboardById;
