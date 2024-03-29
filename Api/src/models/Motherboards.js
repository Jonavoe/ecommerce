const { v4: uuidv4 } = require('uuid');

const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define(
		'Motherboards',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
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
				type: DataTypes.STRING,
			},
			sistemaConexionRGB: {
				type: DataTypes.STRING,
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
		},
		{
			timestamps: false,
		}
	);
};
