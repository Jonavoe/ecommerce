const { Mouses } = require("../db");

const findAllMouses = async () => {
  const others = await Mouses.findAll();
  return others;
};

module.exports = findAllMouses;
