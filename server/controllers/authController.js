const sequelize = require("../sequelize");
const bcrypt = require("bcrypt");
const User = require('../models/user')

module.exports = {
  register: async (req, res) => {
    let { username, email, password } = req.body;
    // const checkUser = await sequelize.query(
    //   `SELECT * From users WHERE username = '${username}'`
    // );
    const checkUser = await User.findOne({where: {username: username}})
    if (checkUser) {
      res.status(500).send("That username is already taken!");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);
      let userInfo = await User.create({
        username,
        email,
        password: passwordHash
    })
    //   await sequelize
    //     .query(
    //       `
    //   INSERT INTO users(username, email, password)
      // VALUES (
      //   '${username}',
      //   '${email}',
      //   '${passwordHash}'
      // )
    // `
    //     )
    //     .catch((err) => console.log(err));
    //   let userInfo = await sequelize
    //     .query(
    //       `
    // SELECT username, id FROM users WHERE username = '${username}'
    // `
    //     )
        // .catch((err) => console.log(err));
      res.status(200).send(userInfo);
    }
  },
  login: async (req, res) => {
    const {username, password} = req.body
    const validUser =  await User.findOne({where: {username: username}})
  if(validUser) {
    if (bcrypt.compareSync(password, validUser.password)) {
      let object = {
        id: validUser.id,
        username: validUser.username

      }
      res.status(200).send(object)
    } else {
      res.status(401).send('It looks like your password is incorrect')
    }
  } else {
    res.status(401).send('It looks like your username is incorrect.')
  }
  }
};
