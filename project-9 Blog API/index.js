const express = require('express');

const port = 9090;

const app = express();

const db = require('./config/db')

app.use(express.urlencoded())

app.use('/',require('./routes/inexRoute'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`Server is running on port :- ${port}`);
})