const { Teclado } = require('../db');

const createTeclado = async ({
	id,
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
		id,
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
