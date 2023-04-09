const { Motherboards } = require('../db');

const findAllMotherboards = async (id) => {
	const motherboards = await Motherboards.findAll(id);
	return motherboards;
};

module.exports = findAllMotherboards;
