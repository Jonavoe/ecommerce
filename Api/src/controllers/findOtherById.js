const { Other } = require("../db");

const findOtherById = async (id) => {
  const other = await Other.findByPk(id);
  return other;
};

module.exports = findOtherById;
