const { Teclado } = require('../db');

const deleteTeclado = async (id) => {
	const teclados = await Teclado.findByPk(id);

	if (!teclados) {
		throw new Error(
			`La placa base con ID ${id} no existe en la base de datos.`
		);
	}

	const aux = { ...teclados };
	await teclados.destroy();

	return aux;
};

module.exports = deleteTeclado;
