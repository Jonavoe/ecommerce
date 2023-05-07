const express = require('express');
const createMotherboards = require('./controllers/createMotherboards');
const createMouses = require('./controllers/createMouses');
const createTeclados = require('./controllers/createTeclados');
const findAllTeclados = require('./controllers/findAllTeclados');
const findTecladoById = require('./controllers/findTecladoById');
const findAllMotherboards = require('./controllers/findAllMotherboards');
const findAllMouses = require('./controllers/findAllMouses');
const findMotherboardById = require('./controllers/findMotherboardById');
const findMousesById = require('./controllers/findMouseById');
const findOtherById = require('./controllers/findOtherById');
const findAllOther = require('./controllers/findAllOther');
const createOther = require('./controllers/createOther');
const deleteMotherboards = require('./controllers/deleteMotherboards');
const deleteOthers = require('./controllers/deleteOthers');
const deleteMouses = require('./controllers/deleteMouses');
const deleteTeclado = require('./controllers/deleteTeclados');
const cors = require('cors');
const server = express();

const allowedOrigins = [
	'http://localhost:3000',
	'https://ecommerce-jonavoe.vercel.app/',
];
server.use(
	cors({
		origin: allowedOrigins,
	})
);

server.use(express.json());

server.get('/teclados', async (req, res) => {
	const { status } = req.query;
	try {
		const teclados = status
			? await findAllTeclados({ status })
			: await findAllTeclados();

		res.status(200).json(teclados);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/teclados/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const teclados = await findTecladoById(id);
		res.status(200).json(teclados);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/motherboards', async (req, res) => {
	const { status } = req.query;
	try {
		const motherboards = status
			? await findAllMotherboards({ status })
			: await findAllMotherboards();

		res.status(200).json(motherboards);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/motherboards/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const motherboards = await findMotherboardById(id);
		res.status(200).json(motherboards);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/mouses', async (req, res) => {
	const { status } = req.query;
	try {
		const mouses = status
			? await findAllMouses({ status })
			: await findAllMouses();

		res.status(200).json(mouses);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/mouses/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const mouse = await findMousesById(id);
		res.status(200).json(mouse);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/other', async (req, res) => {
	const { status } = req.query;
	try {
		const other = status
			? await findAllOther({ status })
			: await findAllOther();

		res.status(200).json(other);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.get('/other/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const other = await findOtherById(id);
		res.status(200).json(other);
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

server.post('/other', async (req, res) => {
	try {
		const { id, title, price, image, category, cantidad } = req.body;
		const newOther = await createOther({
			id,
			title,
			price,
			image,
			category,
			cantidad,
		});
		res.status(200).json(newOther);
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

server.delete('/motherboard/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const deleteMotherboard = await deleteMotherboards(id);
		res.status(200).json(deleteMotherboard);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.delete('/mouse/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const deleteMouse = await deleteMouses(id);
		res.status(200).json(deleteMouse);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.delete('/teclado/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const deletTeclado = await deleteTeclado(id);
		res.status(200).json(deletTeclado);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

server.delete('/other/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const deletemouse = await deleteOthers(id);
		res.status(200).json(deletemouse);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = server;
