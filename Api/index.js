const server = require('./src/server');
const { database } = require('./src/db');
require('dotenv').config();

const { PORT } = process.env;

database
	.sync({ alter: true })
	.then(() => {
		server.listen(PORT, () => {
			console.log('Listening on port', PORT);
		});
	})
	.catch((err) => console.log(err));
