require('dotenv').config();

const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize } = require('sequelize');
const MouseFunction = require("./models/Mouses")
const MotherboardFunction = require("./models/Motherboards")
const TecladosFunction = require("./models/Teclado")

const database = new Sequelize(
	`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
	{ logging: false }
);

MouseFunction(database)
MotherboardFunction(database)
TecladosFunction(database)


const { Teclado, Motherboards, Mouses } = database.models;

module.exports = {
	database,
	...database.models,
};
