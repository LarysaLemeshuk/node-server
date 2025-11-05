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
  const { userId } = req.params;

  const user = User.findOne(Number(userId));
  if (user) {
    // якщо юзер існує,
    res.status(200).send(user);
  } else {
    res.status(404).end();
  }
};

//метод видалення одного користувача
module.exports.deleteOneUser = (req, res, next) => {
  const { userId } = req.params;
  const user = User.findOne(Number(userId));
  if (user) {
    user.deleteUser();
    res.status(200).send(user);
  } else {
    res.status(404).end();
  }
};

// метод контроллера на оновлення інформації проякогось конкретного юзера
module.exports.updateUser = (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  const user = User.findOne(Number(userId));

  if (user) {
    const updateUser = user.updateUser(body);
    res.status(200).send(updateUser);
  } else {
    res.status(404).end();
  }
};
