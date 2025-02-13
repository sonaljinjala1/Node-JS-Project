const express = require('express');

const port = 9090;

const app = express();

app.set('view engine','ejs');

const path = require('path');

const db = require('./config/db');

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const cookieparser = require('cookie-parser');

app.use(cookieparser());

app.use(express.urlencoded());

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})
