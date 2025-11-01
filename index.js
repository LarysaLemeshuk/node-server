const express = require('express');
const { validateUser } = require('./middlewares');
const UserController = require('./controllers/UserControllers');
const app = express();

const bodyParser = express.json(); // request.body

const PORT = 5002;

app.post('/user', bodyParser, validateUser, UserController.registerUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// шлях + метод = роут
