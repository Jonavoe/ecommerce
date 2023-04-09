require('dotenv').config();

const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require('sequelize');
const Mouses = require('./models/Mouses');
const Motherboards = require('./models/Motherboards');
const Teclado = require('./models/Teclado');
const Other = require('./models/Other');

const database = new Sequelize(
	`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
	{ logging: false }
);

Mouses(database);
Teclado(database);
Motherboards(database);
Other(database);

// const { Teclado, Motherboards, Mouses } = database.models;

module.exports = {
	database,
	...database.models,
};
