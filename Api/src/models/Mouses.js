const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define('Mouse', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
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
		},
		cantidadSlotPCIE16x: {
			type: DataTypes.INTEGER,
		},
		puertosSATA: {
			type: DataTypes.INTEGER,
		},
		salidasHDMI: {
			type: DataTypes.INTEGER,
		},
		cantidadSlotM2Totales: {
			type: DataTypes.INTEGER,
		},
		placaWifiIntegrada: {
			type: DataTypes.BOOLEAN,
		},
		sistemaConexionRGB: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
		placaDeRed: {
			type: DataTypes.STRING,
		},
		puertosUSB32Traseros: {
			type: DataTypes.INTEGER,
		},
		puertosUSBTypeC: {
			type: DataTypes.INTEGER,
		},
		cantidadSlotM2NVMe: {
			type: DataTypes.INTEGER,
		},
	});
};
