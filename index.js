const http = require('http');

const PORT = 5002;

const requestListener = (request, response) => {
    const { url, method} = request;
    console.log(url, method);
    //console.log(response);
}

const server = http.createServer(requestListener);

server.listen(PORT)

