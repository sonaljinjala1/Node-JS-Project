const userModel = require('../models/usersModel')

const fs = require('fs');

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    if (res.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.users.findOne({ email: email });

        if (!user || user.password != password) {
            console.log(`Email Or Password is incorrect`);
            return res.redirect('/');
        }
        return res.redirect('/viewproductpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await userModel.users.create({
            name: name,
            email: email,
            password: password
        });
        console.log("Data added..!");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addProductPage = (req, res) => {
    return res.render('addProduct');
}

const viewProductPage = async (req, res) => {
    try {
        return res.render('viewProduct', {
            allProducts: await userModel.blogUser.find()
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addProductData = async (req, res) => {
    try {
        const { name, price, quantity, description } = req.body;

        await userModel.blogUser.create({
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            image: req.file?.path
        })
        console.log(`Product Data Successfully added..!`);
        req.flash('success', 'Product Data Successfully Updated..!')
        return res.redirect('/viewproductpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteData = async (req, res) => {
    try {
        let single = await userModel.blogUser.findById(req.query.delId)
        fs.unlinkSync(single?.image);

        await userModel.blogUser.findByIdAndDelete(req.query.delId);
        console.log(`Product Data Successfully deleted..!`);
        return res.redirect('/viewproductpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editData = async (req, res) => {
    try {
        return res.render('editProduct', {
            oneRow: await userModel.blogUser.findById(req.query.editId)
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateData = async (req, res) => {
    try {
        const { editId, name, price, quantity, description } = req.body;

        if (req.file) {
            let oneRow = await userModel.blogUser.findById(editId);
            fs.unlinkSync(oneRow?.image);
            await userModel.blogUser.findByIdAndUpdate(editId, {
                name: name,
                price: price,
                quantity: quantity,
                description: description,
                image: req.file?.path
            })
            console.log("Product Data Successfully updated..!");
            return res.redirect('/viewproductpage');
        } else {
            await userModel.blogUser.findByIdAndUpdate(editId, {
                name: name,
                price: price,
                quantity: quantity,
                description: description,
                image: req.file?.path
            })
            console.log("Product Data Successfully updated..!");
            return res.redirect('/viewproductpage');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.send("Logout Falied..!")
        }
        console.log("User Successfully Logout..!");

        return res.redirect('/');
    })
}

module.exports = {
    registerPage,
    loginPage,
    loginUser,
    registerUser,
    logoutUser,
    addProductPage,
    viewProductPage,
    addProductData,
    deleteData,
    editData,
    updateData
}