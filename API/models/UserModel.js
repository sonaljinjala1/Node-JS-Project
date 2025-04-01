const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    role: {
        type : String,
        default : "user"
    }
})
const users = mongoose.model("user", userSchema);

module.exports = users;