const express = require('express');

const port = 9000;

const app = express();

app.set('view engine','ejs');

const path = require('path');

const db = require('./config/db');

app.use(express.static('public')); 

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use(express.urlencoded());

// Login System start
const passport = require('passport'); 
const passportLocal = require('./config/passportLocal');
const session = require('express-session');

app.use(session({
    name : 'sonal',
    secret : 'sona',
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24 * 7 
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);
// Login System end

// Flash Message Code Start
const flash = require('connect-flash');
app.use(flash());
app.use('/cart', (req, res, next) => {
    res.locals.message = req.flash();
    return next();
});
// Flash Message Code End

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})
