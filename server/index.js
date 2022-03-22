const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000

const auth = require('./controllers/authController')
const poke = require('./controllers/pokeController')

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here
app.post('/api/registerUser', auth.register)
app.post('/api/loginUser', auth.login)

app.get('/allGames', poke.allGames)
app.post('/api/newTeam', poke.newTeam)
app.get('/api/myTeams/:id', poke.myTeams)
app.get('/api/myTeam/:id', poke.myTeam)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));