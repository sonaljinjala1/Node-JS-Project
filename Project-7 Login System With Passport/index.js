const express = require('express');

const port = 9090;

const app = express();

app.set('view engine','ejs');

const path = require('path');

const db = require('./config/db');

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

// const cookieparser = require('cookie-parser');
// app.use(cookieparser());

app.use(express.urlencoded());

// Login System-passport start

const passport = require('passport'); 
const passportLocal = require('./config/passportLocal');
const session = require('express-session');

app.use(session({
    name : 'john',
    secret : 'john123',
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24 * 7 
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

// Login System-passport end

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})
