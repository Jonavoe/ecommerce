const { Motherboards } = require('../db');

const findAllMotherboards = async (query) => {
	const motherboards = await Motherboards.findAll();
	return motherboards;
};

module.exports = findAllMotherboards;
