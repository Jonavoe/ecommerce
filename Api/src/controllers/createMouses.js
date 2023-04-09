const { v4: uuidv4 } = require('uuid');
const { Mouses } = require('../db');

const createMouses = async ({
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
		id: uuidv4(),
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
