const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(process.env.PORT || 80, () => {
  console.log('Server is running...');
});