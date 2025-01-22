const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Book_Store_Details');

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("Database Connected successfully..!");

})

module.exports = db;