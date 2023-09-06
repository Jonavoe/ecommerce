require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BDD } = process.env;
const { Sequelize } = require("sequelize");
const Mouses = require("./models/Mouses");
const Motherboards = require("./models/Motherboards");
const Teclado = require("./models/Teclado");
const Other = require("./models/Other");

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
  {
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // Habilitar SSL
        rejectUnauthorized: false, // Opcional: permite conexiones no autenticadas (puede variar según la configuración de Render)
      },
    },
  }
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
