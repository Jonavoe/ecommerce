const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define(
		'Mouses',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
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
			color: {
				type: DataTypes.STRING,
			},
			cantidadDeBotones: {
				type: DataTypes.INTEGER,
			},
			tipoDeSwitch: {
				type: DataTypes.STRING,
			},
			tipoDeSensor: {
				type: DataTypes.STRING,
			},
			tipoInalámbrico: {
				type: DataTypes.STRING,
			},
			orientacion: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
};
