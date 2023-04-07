const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define(
		'Motherboards',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
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
				allowNull: false,
			},
			puertosSATA: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			salidasHDMI: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			cantidadSlotM2Totales: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			placaWifiIntegrada: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			sistemaConexionRGB: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			placaDeRed: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			puertosUSB32Traseros: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			puertosUSBTypeC: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			cantidadSlotM2NVMe: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
