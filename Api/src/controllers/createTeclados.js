const { v4: uuidv4 } = require('uuid');
const { Teclado } = require('../db');

const createTeclado = async ({
	title,
	price,
	image,
	category,
	cantidad,
	switchs,
	teclado,
	color,
	mecanismo,
	switchEspecífico,
	material,
	touchpad,
	padNumérico,
}) => {
	const newTeclado = await Teclado.create({
		id: uuidv4(),
		title,
		price,
		image,
		category,
		cantidad,
		switchs,
		teclado,
		color,
		mecanismo,
		switchEspecífico,
		material,
		touchpad,
		padNumérico,
	});

	return newTeclado;
};

module.exports = createTeclado;
