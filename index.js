const express = require('express');
const { validateUser } = require('./middlewares');
const UserController = require('./controllers/UserControllers');
const app = express();

const bodyParser = express.json(); // request.body

const PORT = 5002;
// роут на реєестрацію
app.post('/user', bodyParser, validateUser, UserController.registerUser);

// роут на отримання всх користувачів
app.get('/users', UserController.getAllUsers); // http://localhost:5002/users

// роут на отримання якогось одного конкруттного юзера
app.get('/user/:userId', UserController.getOneUser);

//роут на видалення юзера
app.delete('/user/:userId', UserController.deleteOneUser )

// роут на оновлення конткретного користувача
app.put('/user/:userId', bodyParser, UserController.updateUser)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



// шлях + метод = роут
