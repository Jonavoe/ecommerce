const { Mouses } = require("../db");

const findMousesById = async (id) => {
  const mouse = await Mouses.findByPk(id);
  return mouse;
};

module.exports = findMousesById;
