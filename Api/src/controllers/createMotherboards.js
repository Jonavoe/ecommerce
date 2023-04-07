const { Motherboards } = require('../db');

const createMotherboards = async ({
	id,
	title,
	price,
	image,
	category,
	cantidad,
	cantidadSlotPCIE16x,
	puertosSATA,
	salidasHDMI,
	cantidadSlotM2Totales,
	placaWifiIntegrada,
	sistemaConexionRGB,
	placaDeRed,
	puertosUSB32Traseros,
	puertosUSBTypeC,
	cantidadSlotM2NVMe,
}) => {
	const newMotherboards = await Motherboards.create({
		id,
		title,
		price,
		image,
		category,
		cantidad,
		cantidadSlotPCIE16x,
		puertosSATA,
		salidasHDMI,
		cantidadSlotM2Totales,
		placaWifiIntegrada,
		sistemaConexionRGB,
		placaDeRed,
		puertosUSB32Traseros,
		puertosUSBTypeC,
		cantidadSlotM2NVMe,
	});

    return newMotherboards
};

module.exports = createMotherboards
