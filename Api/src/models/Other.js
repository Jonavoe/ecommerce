const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define(
		'Other',
		{
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
		},
		{
			timestamps: false,
		}
	);
};
