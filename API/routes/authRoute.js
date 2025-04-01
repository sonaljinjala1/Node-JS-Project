const express = require('express');

const { registerUser, loginUser, allUser } = require('../controllers/AuthController');
const { verifyToken } = require('../middleware/authMidd');

const routes = express.Router();

routes.post('/register',registerUser);
routes.post('/login',loginUser);

routes.get('/alluser',verifyToken, allUser);

module.exports = routes;