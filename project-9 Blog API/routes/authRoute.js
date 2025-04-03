const express = require('express');

const routes = express.Router()

const { registerUser, viewUser, deleteUser, updateUser, loginUser } = require('../controllers/AuthController');
const { verifyToken, checkAdmin } = require('../middlewer/Auth');

routes.post('/register', registerUser)
routes.get('/viewuser', verifyToken,viewUser)
routes.delete('/deleteuser', verifyToken, checkAdmin,deleteUser)
routes.put('/updateuser', verifyToken,checkAdmin, updateUser)
routes.post('/login', loginUser)

module.exports = routes