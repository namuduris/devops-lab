const http = require('http');

http.createServer((req, res) => {
  res.end('Hello from ' + (process.env.VERSION || 'v1') + '\n');
}).listen(3000);
