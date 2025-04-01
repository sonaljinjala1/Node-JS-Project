const express = require('express');

const { viewCartPage, addToCart, deleteCart } = require('../controllers/CartController');

const routes = express.Router();

routes.get('/', viewCartPage);
routes.get('/add', addToCart); 
routes.get('/deletecart',deleteCart);

module.exports = routes;
