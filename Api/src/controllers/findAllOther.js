const { Other } = require("../db");

const findAllOther = async () => {
  const others = await Other.findAll();
  return others;
};

module.exports = findAllOther;
