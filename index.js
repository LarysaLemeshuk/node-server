const express = require('express')
const app = express()

const PORT = 5002;

app.get('/', (request, response) => {// http://localhost:5002
response.send('Hello world')
})

app.get('/index.html', (request, response) => {
response.status(404).send('Test /index.html')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
console.log(app);


// шлях + метод = роут
