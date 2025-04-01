const express = require('express');
const { registerPage, loginPage, registerUser, loginUser, logoutUser, deleteData, editData, updateData, addProductPage, viewProductPage, addProductData } = require('../controllers/AuthController');

const routes = express.Router();

const multer = require('multer');

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registerUser);

routes.get('/logoutuser', logoutUser);


routes.get('/addproductpage', addProductPage);
routes.get('/viewproductpage', viewProductPage);

// routes.get('/addproductpage', passport.checkUserLogin, addProductPage);
// routes.get('/viewproductpage', passport.checkUserLogin, viewProductPage);

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');

routes.post('/insertproductdata', fileUpload, addProductData);

routes.get('/deletedata', deleteData);
routes.get('/editdata', editData);
routes.post('/updatedata', fileUpload, updateData);

module.exports = routes;