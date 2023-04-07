require('dotenv').config();

const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require('sequelize');
// const MouseFunction = require('./models/Mouses');
const Mouses = require('./models/Mouses');
const Motherboards = require('./models/Motherboards');
const Teclado = require('./models/Teclado');


const database = new Sequelize(
	`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
	{ logging: false }
);

Mouses(database);
Teclado(database);
Motherboards(database)

// const { Teclado, Motherboards, Mouses } = database.models;

module.exports = {
	database,
	...database.models,
};
