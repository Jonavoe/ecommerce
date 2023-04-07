module.exports = (database) => {
	database.define('teclados', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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
		switch: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		teclado: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mecanismo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		switchEspecífico: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		material: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		touchpad: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		padNumérico: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
