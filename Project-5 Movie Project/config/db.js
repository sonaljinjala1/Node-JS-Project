const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movieAdd');

const db = mongoose.connection;

db.on("connected",(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Database connected successfully..!`);
    
})

module.exports = db;