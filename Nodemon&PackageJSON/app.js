const http = require('http');
const routes = require('./routes');
const port = process.env.PORT || 4000; // Use the specified port or default to 4000

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
