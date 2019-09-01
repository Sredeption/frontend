const server = require('./Server');

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});