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
  response.status(200).send(usersArray);
};
