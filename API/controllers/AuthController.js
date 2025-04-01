const usersModel = require('../models/UserModel');
const JWT = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const { name, email, password, city, phone } = req.body;
        console.log(req.body);

        if (!name || !email || !password || !city || !phone) {
            return res.status(401).send({
                success: false,
                message: "All field is required..!"
            })
        }

        let user = await usersModel.create({
            name : name,
            email : email,
            password : password,
            city : city,
            phone : phone
        })

        console.log(user);
        
        return res.status(200).send({
            success: true,
            message: "User Successfully Created..!",
            user
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}

const loginUser = async (req,res) => {
    try{
        const { email, password } = req.body;
        console.log(req.body);

        if(!email || !password) {
            return res.status(401).send({
                success: false,
                message: "All field is required..!"
            })
        }
        
        let user = await usersModel.findOne({email: email});

        if(!user || user.password != password){
            return res.status(401).send({
                success: false,
                message: "Email or Password not valid..!"
            })
        }

        //Creating Token

        const token = await JWT.sign({ payload: user}, "secretKey", {expiresIn : "3hr"});

        return res.status(200).send({
            success: true,
            message: "Token | Login Successfully..!",
            token
        })
    }catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}

const allUser = async (req,res) => {
    try{
        let users = await usersModel.find({});

        return res.status(200).send({
            success: true,
            message: "User Successfully Fetched..!",
            users
        })
    }catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    allUser
}