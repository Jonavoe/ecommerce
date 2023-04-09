const { Teclado } = require('../db');

const findAllTeclados = async () => {
	const teclados = await Teclado.findAll();
	return teclados;
};

module.exports = findAllTeclados;
