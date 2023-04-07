const express = require('express');
const createMotherboards = require('./controllers/createMotherboards');
const createMouses = require('./controllers/createMouses');
const createTeclados = require('./controllers/createTeclados');
const findAllTeclados = require('./controllers/findAllTeclados');
const findAllMotherboards = require('./controllers/findAllMotherboards');
const findAllMouses = require('./controllers/findAllMouses');
// const deleteMotherboards = require('./controllers/deleteMotherboards');

const server = express();
server.use(express.json());

server.get('/teclados', async (req, res) => {
	const { status } = req.query;
	try {
		const characters = status
			? await findAllTeclados({ status })
			: await findAllTeclados();

		res.status(200).json(characters);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/motherboards', async (req, res) => {
	const { status } = req.query;
	try {
		const characters = status
			? await findAllMotherboards({ status })
			: await findAllMotherboards();

		res.status(200).json(characters);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/mouses', async (req, res) => {
	const { status } = req.query;
	try {
		const characters = status
			? await findAllMouses({ status })
			: await findAllMouses();

		res.status(200).json(characters);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.post('/motherboards', async (req, res) => {
	try {
		const {
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
		} = req.body;
		const newMotherboards = await createMotherboards({
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
		res.status(200).json(newMotherboards);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.post('/mouses', async (req, res) => {
	try {
		const {
			id,
			title,
			price,
			image,
			category,
			cantidad,
			color,
			cantidadDeBotones,
			tipoDeSwitch,
			tipoDeSensor,
			tipoInalámbrico,
			orientacion,
		} = req.body;
		const newMouses = await createMouses({
			id,
			title,
			price,
			image,
			category,
			cantidad,
			color,
			cantidadDeBotones,
			tipoDeSwitch,
			tipoDeSensor,
			tipoInalámbrico,
			orientacion,
		});
		res.status(200).json(newMouses);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.post('/teclados', async (req, res) => {
	try {
		const {
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
		} = req.body;
		const newTeclados = await createTeclados({
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
		res.status(200).json(newTeclados);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// server.delete("/motherboards/:id", async (req, res) => {
// 	const { id } = req.params;
// 	try {
// 	  const deleteMotherboards = await deleteMotherboards(id);
// 	  res.status(200).json(deleteMotherboards);
// 	} catch (error) {
// 	  res.status(400).json({ error: error.message });
// 	}
//   });
module.exports = server;
