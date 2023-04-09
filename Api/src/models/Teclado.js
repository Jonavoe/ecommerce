const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define('Teclado', {
		id: {
			type: DataTypes.UUID,
			defaultValue: () => uuidv4(),
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cantidad: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		switchs: {
			type: DataTypes.STRING,
		},
		teclado: {
			type: DataTypes.STRING,
		},
		color: {
			type: DataTypes.STRING,
		},
		mecanismo: {
			type: DataTypes.STRING,
		},
		switchEspecífico: {
			type: DataTypes.STRING,
		},
		material: {
			type: DataTypes.STRING,
		},
		touchpad: {
			type: DataTypes.STRING,
		},
		padNumérico: {
			type: DataTypes.STRING,
		},
	});
};
