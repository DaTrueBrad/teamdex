const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000

const auth = require('./controllers/authController')

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here
app.post('/api/registerUser', auth.register)
app.post('/api/loginUser', auth.login)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));