const express = require('express');
const app = express();
const port = 9090;

const db = require('./config/db');
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded());


app.use('/',require('./routes/indexRoute'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})