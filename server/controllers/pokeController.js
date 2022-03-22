const sequelize = require("../sequelize");

module.exports = {
  allGames: async (req, res) => {
    const info = await sequelize.query(`
      SELECT * FROM games
    `)
    .catch(err => console.log(err))
    res.status(200).send(info[0])
  },
  newTeam: async (req, res) => {
    const {userID, game, name, notes} = req.body;
    await sequelize.query(`
      INSERT INTO teams (user_id, game_id, name, notes)
      VALUES(
        ${userID},
        ${game},
        '${name}',
        '${notes}'
      )
    `)
    res.status(200).send("Success!")
  },
  myTeams: async (req, res) => {
    let {id} = req.params
    let teams = await sequelize.query(`
      SELECT * FROM teams
      WHERE user_id = ${id}
    `)
    res.status(200).send(teams[0])
  },
  myTeam: async (req, res) => {
    let {id} = req.params
    let details = await sequelize.query(`
      SELECT * FROM teams
      WHERE id = ${id}
    `)
    let pokemon = await sequelize.query(`
      SELECT * FROM team_pokemon
      WHERE team_id = ${id}
    `)
    let allInfo = {
      details: details[0][0],
      pokemon: pokemon[0]
    }
    res.status(200).send(allInfo)
  }
}