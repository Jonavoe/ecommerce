const server = require('./src/server');
const { database } = require('./src/db');

database
	.sync({ force: true })
	.then(() => {
		server.listen('3001', () => {
			console.log('Listening on port', 3001);
		});
	})
	.catch((err) => console.log(err));
