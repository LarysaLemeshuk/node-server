const http = require('http');

const PORT = 5002;

const requestListener = async (request, response) => {
  const { url } = request;

  if (url === './index.html') {
    try {
      const data = await fs.readFile('./views/index.html', 'utf-8');
      response.statusCode = 200;
      response.end(data);
    } catch (error) {
      response.statusCode = 404;
      response.end('Hello from server');
    }
  } else {
    response.statusCode = 404;
    response.end('Hello from server');
  }
};

const server = http.createServer(requestListener);

server.listen(PORT);
