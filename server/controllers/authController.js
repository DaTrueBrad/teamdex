const sequelize = require("../sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    let { username, email, password } = req.body;
    const checkUser = await sequelize.query(
      `SELECT * From users WHERE username = '${username}'`
    );
    if (checkUser[1].rowCount !== 0) {
      res.status(500).send("That username is already taken!");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);
      await sequelize
        .query(
          `
      INSERT INTO users(username, email, password)
      VALUES (
        '${username}',
        '${email}',
        '${passwordHash}'
      )
    `
        )
        .catch((err) => console.log(err));
      let userInfo = await sequelize
        .query(
          `
    SELECT username, id FROM users WHERE username = '${username}'
    `
        )
        .catch((err) => console.log(err));
      res.status(200).send(userInfo[0][0]);
    }
  },
  login: async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
  `).catch((err) => console.log(err))
  console.log(validUser)
  if(validUser[1].rowCount === 1) {
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let object = {
        id: validUser[0][0].id,
        username: validUser[0][0].username

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
