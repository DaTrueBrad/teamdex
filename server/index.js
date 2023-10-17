const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000
const User = require('./models/user')
const Image = require('./models/image')
const Pokemon = require('./models/pokemon')
const Team = require('./models/Team')
const Game = require('./models/game')

const auth = require('./controllers/authController')
const poke = require('./controllers/pokeController');
const sequelize = require('./sequelize');
const seed = require('./seed')

//Middleware
app.use(express.json());
app.use(cors());

User.hasMany(Team)
Team.belongsTo(User)
Game.hasMany(Team)
Team.belongsTo(Game)
Team.hasMany(Pokemon)
Pokemon.belongsTo(Team)

//Put endpoints here
app.post('/api/registerUser', auth.register)
app.post('/api/loginUser', auth.login)

app.get('/allGames', poke.allGames)
app.post('/api/newTeam', poke.newTeam)
app.get('/api/myTeams/:id', poke.myTeams)
app.get('/api/myTeam/:id', poke.myTeam)
app.post('/api/addToTeam', poke.addToTeam)
app.delete('/api/deletePoke', poke.deletePoke)


sequelize.sync()
// .then(seed)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));