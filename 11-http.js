const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Welcome to my first server');
  }
  if (req.url === '/about') {
    return res.end('This is the about page');
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000, () => {
  console.log('Server is running on port 5000...');
});