const server = require("./server");
// const { db } = require("./db");
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
//   db.sync({ force: true });
});
