const { v4: uuidv4 } = require('uuid');
const { Other } = require('../db');

const createOther = async ({ title, price, category, image, cantidad }) => {
	const newOther = await Other.create({
		id: uuidv4(),
		title,
		price,
		category,
		image,
		cantidad,
	});

	return newOther;
};

module.exports = createOther;
