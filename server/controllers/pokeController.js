const sequelize = require("../sequelize");
const Team = require('../models/Team')
const User = require('../models/user')
const Game = require('../models/game')
const Pokemon = require('../models/pokemon')

module.exports = {
  allGames: async (req, res) => {
    const info = await Game.findAll()
    res.status(200).send(info)
  },
  newTeam: async (req, res) => {
    const {userID, game, name, notes} = req.body;
    await Team.create({
      userId: userID,
      game,
      name,
      notes
    })
    res.status(200).send("Success!")
  },
  myTeams: async (req, res) => {
    let {id} = req.params
    let teams = await Team.findAll({where: {userId: id}})
    res.status(200).send(teams)
  },
  myTeam: async (req, res) => {
    let {id} = req.params
    let details = await Team.findOne({where: {id: id}, include: Pokemon})


    res.status(200).send(details)
  },
  addToTeam: async (req, res) => {
    let {pokemonID, teamID} = req.body
    await Pokemon.create({teamId: teamID, pokemonId: pokemonID})
    res.status(200).send("Successfully added!")
  },
  deletePoke: async (req, res) => {
    let {poke_id, team_id} = req.body
    await Pokemon.destroy({where: {id: poke_id}})
    res.status(200).send("delete hit!")
  }
}