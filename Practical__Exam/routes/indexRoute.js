const express = require('express');

const routes = express.Router();

routes.use('/',require('./authRoute'));
routes.use('/cart',require('./cartRoute'));

module.exports = routes;