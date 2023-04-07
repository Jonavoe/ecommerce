const { Mouses } = require("../db");

const findAllMouses = async () => {
  const mouses = await Mouses.findAll();
  return mouses;
};

module.exports = findAllMouses;
