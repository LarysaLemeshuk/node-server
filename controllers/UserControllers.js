const User = require('../models/User');

// метод на реєестрацію
module.exports.registerUser = (req, res, next) => {
  const { body } = req;
  const user = new User(body);
  user.addUser();

  delete user.password;
  res.status(201).send(user);
};

// метод на отримаггя всх користувачів
module.exports.getAllUsers = (req, res, next) => {
  const usersArray = User.findAll();
  res.status(200).send(usersArray);
};

// метод контролерра на отримання конкретного користувача
module.exports.getOneUser = (req, res, next) => {
  console.log(req.query);
}