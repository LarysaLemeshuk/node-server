const http = require('http');
const fs = require('fs').promises;

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
      response.end();
    }
  } else if (url === './style.css') {
    try {
      const data = await fs.readFile('./style.css', 'utf-8');
      response.statusCode = 200;
      response.end(data);
    } catch (error) {
      response.statusCode = 404;
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
};

const server = http.createServer(requestListener);

server.listen(PORT);
