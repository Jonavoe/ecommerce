const { Mouses } = require('../db');

const createMouses = async ({
	id,
	title,
	price,
	category,
	image,
	cantidad,
	color,
	cantidadDeBotones,
	tipoDeSwitch,
	tipoDeSensor,
	tipoInalámbrico,
	orientacion,
}) => {
	const newMouses = await Mouses.create({
		id,
		title,
		price,
		category,
		image,
		cantidad,
		color,
		cantidadDeBotones,
		tipoDeSwitch,
		tipoDeSensor,
		tipoInalámbrico,
		orientacion,
	});

	return newMouses;
};

module.exports = createMouses;
